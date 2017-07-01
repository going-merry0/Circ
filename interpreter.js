class MemoryCell {
  constructor (value) {
    this.value = value;
  }
}

class ActiveRecord {
  constructor (parent = null) {
    this.parent = parent;
    if (this.parent) {
      this.memoryCells = new Map(parent.memoryCells);
    } else {
      this.memoryCells = new Map();
    }
  }

  set (key, value) {
    const cell = this.lookup(key);
    if (cell === undefined) {
      throw new Error(`Undefined variable ${key}`);
    }
    cell.value = value;
  }

  get (key) {
    let cell = this.lookup(key);
    if (cell === undefined) {
      throw new Error(`Undefined variable ${key}`);
    }
    return cell.value;
  }

  def (key, value) {
    const cell = new MemoryCell(value);
    this.memoryCells.set(key, cell);
  }

  lookup (key) {
    let cell = this.memoryCells.get(key);
    if (cell === undefined) {
      let parent = this.parent;
      while (parent) {
        cell = parent.memoryCells.get(key);
        if (cell === undefined) {
          parent = parent.parent;
        } else {
          this.memoryCells.set(key, cell);
          break;
        }
      }
    }
    return cell;
  }
}
exports.ActiveRecord = ActiveRecord;

class Continuation {
  constructor (fn, args) {
    this.fn = fn;
    this.args = args;
  }
}

class Executor {
  constructor () {
    this.stackLength = 0;
  }

  execute (fn, args) {
    while (true) {
      try {
        this.stackLength = 200;
        return fn.apply(null, args);
      } catch (e) {
        if (e instanceof Continuation) {
          fn = e.fn;
          args = e.args;
        } else {
          throw e;
        }
      }
    }
  }

  guard (fn, args) {
    if (--this.stackLength < 0) {
      throw new Continuation(fn, args);
    }
  }
}
const executor = new Executor();

function loopExprList (exprList, activeRecord, cb) {
  executor.guard(loopExprList, arguments);
  const last = exprList.length;
  (function loop (val, i) {
    executor.guard(loop, arguments);
    if (i === last) {
      cb(val);
    } else {
      evaluate(exprList[i], activeRecord, function cc (val) {
        executor.guard(cc, arguments);
        loop(val, ++i);
      });
    }
  })(false, 0);
}

function applyBinary (op, lval, rval) {
  switch (op) {
    case '+'  :
      return lval + rval;
    case '-'  :
      return lval - rval;
    case '*'  :
      return lval * rval;
    case '/'  :
      if (rval === 0) {
        throw new Error("Divide by zero");
      }
      return lval / rval;
    case '%'  :
      if (rval === 0) {
        throw new Error("Divide by zero");
      }
      return lval % rval;
    case '&&' :
      return lval && rval;
    case '||' :
      return lval || rval;
    case '<'  :
      return lval < rval;
    case '>'  :
      return lval > rval;
    case '<=' :
      return lval <= rval;
    case '>=' :
      return lval >= rval;
    case '==' :
      return lval === rval;
    case '!=' :
      return lval !== rval;
    default:
      throw new Error(`Unsupported operator ${op}`);
  }
}

function evaluate (exp, activeRecord, cb) {
  executor.guard(evaluate, arguments);
  switch (exp.type) {
    case "prog": {
      loopExprList(exp.exprList, activeRecord, cb);
      return;
    }
    case "varDeclarationList": {
      loopExprList(exp.exprList, activeRecord, cb);
      return;
    }
    case "varDeclaration": {
      evaluate(exp.right, activeRecord, function cc (val) {
        executor.guard(cc, arguments);
        activeRecord.def(exp.left.name, val);
        cb(val);
      });
      return;
    }
    case "exprSequence": {
      loopExprList(exp.exprList, activeRecord, cb);
      return;
    }
    case "numberLiteral": {
      cb(exp.value);
      return;
    }
    case "identifier": {
      cb(activeRecord.get(exp.name));
      return;
    }
    case "booleanLiteral": {
      cb(exp.value);
      return;
    }
    case "nullLiteral": {
      cb(null);
      return;
    }
    case "stringLiteral": {
      cb(exp.value);
      return;
    }
    case "binary": {
      evaluate(exp.left, activeRecord, function cc (lval) {
        executor.guard(cc, arguments);
        evaluate(exp.right, activeRecord, function cc (rval) {
          executor.guard(cc, arguments);
          cb(applyBinary(exp.op, lval, rval));
        });
      });
      return;
    }
    case "assign": {
      evaluate(exp.right, activeRecord, function cc (rval) {
        executor.guard(cc, arguments);
        if (exp.left.type === 'identifier') {
          activeRecord.set(exp.left.name, rval);
        }
        cb(rval);
      });
      return;
    }
    case "block": {
      loopExprList(exp.exprList, activeRecord, cb);
      return;
    }
    case "funDeclaration": {
      const fn = function (cb) {
        executor.guard(fn, arguments);
        const ar = new ActiveRecord(activeRecord);
        for (let i = 0, len = exp.formalParamList.length; i < len; i++) {
          ar.def(exp.formalParamList[i].name, null);
        }
        const args = Array.from(arguments);
        for (let i = 1, len = args.length; i < len; i++) {
          ar.set(exp.formalParamList[i - 1].name, args[i]);
        }
        evaluate(exp.body, ar, cb);
      };
      if (exp.name) {
        activeRecord.def(exp.name.name, fn);
      }
      return cb(fn);
    }
    case "funCall": {
      evaluate(exp.prodFunExpr, activeRecord, function cc (fn) {
        executor.guard(cc, arguments);
        const last = exp.paramList.length;
        const params = [cb];
        (function loop (i) {
          executor.guard(loop, arguments);
          if (i === last) {
            fn.apply(null, params);
          } else {
            evaluate(exp.paramList[i], activeRecord, function cc (val) {
              executor.guard(cc, arguments);
              params.push(val);
              loop(++i);
            })
          }
        })(0)
      });
      return;
    }
    case "condition": {
      evaluate(exp.expr, activeRecord, function cc (cond) {
        executor.guard(cc, arguments);
        if (cond !== null && cond !== false && cond !== 0 && cond !== '') {
          evaluate(exp.then, activeRecord, cb);
        } else {
          evaluate(exp.else, activeRecord, cb);
        }
      });
      return;
    }
  }
}


const globalActiveRecord = new ActiveRecord();
globalActiveRecord.def("time", function (cc, fn) {
  console.time("time");
  fn(function (val) {
    console.timeEnd("time");
    cc(val);
  })
});

globalActiveRecord.def("println", function (cc, val) {
  console.log(val);
  cc(false);
});

exports.globalActiveRecord = globalActiveRecord;

exports.exec = (exp, cb) => {
  executor.execute(evaluate, [exp, globalActiveRecord, cb]);
};
