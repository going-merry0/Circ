const NodeType = require("./frontend").NodeType;

class MemoryCell {
  constructor (value) {
    this.value = value;
  }
}

class ActiveRecord {
  constructor (parent = null) {
    if (parent) {
      this.memoryCells = new Map(parent.memoryCells);
    } else {
      this.memoryCells = new Map();
    }
  }

  set (key, value) {
    const cell = this.memoryCells.get(key);
    if (cell === undefined) {
      throw new Error(`Undefined variable ${key}`);
    }
    cell.value = value;
  }

  get (key) {
    const cell = this.memoryCells.get(key);
    if (cell === undefined) {
      throw new Error(`Undefined variable ${key}`);
    }
    return cell.value;
  }

  def (key, value) {
    const cell = new MemoryCell(value);
    this.memoryCells.set(key, cell);
  }
}
exports.ActiveRecord = ActiveRecord;

class Continuation {
  constructor (fn, args) {
    this.fn = fn;
    this.args = args;
  }
}

let STACK_LENGTH = 0;
function execute (fn, args) {
  while (true) {
    try {
      STACK_LENGTH = 200;
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

function stackGuard (fn, args) {
  if (--STACK_LENGTH < 0) {
    throw new Continuation(fn, args);
  }
}

function loopExprList (exprList, activeRecord, cb) {
  const last = exprList.length;
  (function loop (val, i) {
    stackGuard(loop, arguments);
    if (i === last) {
      cb(val);
    } else {
      evaluate(exprList[i], activeRecord, function cc (val) {
        stackGuard(cc, arguments);
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
  stackGuard(evaluate, arguments);
  switch (exp.type) {
    case NodeType.numberLiteral: {
      cb(exp.value);
      return;
    }
    case NodeType.identifier: {
      cb(activeRecord.get(exp.name));
      return;
    }
    case NodeType.booleanLiteral: {
      cb(exp.value);
      return;
    }
    case NodeType.nullLiteral: {
      cb(null);
      return;
    }
    case NodeType.stringLiteral: {
      cb(exp.value);
      return;
    }
    case NodeType.exprSequence: {
      loopExprList(exp.exprList, activeRecord, cb);
      return;
    }
    case NodeType.funCall: {
      evaluate(exp.prodFunExpr, activeRecord, function cc (fn) {
        stackGuard(cc, arguments);
        const last = exp.paramList.length;
        const params = [cb];
        (function loop (i) {
          stackGuard(loop, arguments);
          if (i === last) {
            fn.apply(null, params);
          } else {
            evaluate(exp.paramList[i], activeRecord, function cc (val) {
              stackGuard(cc, arguments);
              params.push(val);
              loop(i + 1);
            })
          }
        })(0)
      });
      return;
    }
    case NodeType.block: {
      loopExprList(exp.exprList, activeRecord, cb);
      return;
    }
    case NodeType.condition: {
      evaluate(exp.expr, activeRecord, function cc (cond) {
        stackGuard(cc, arguments);
        if (cond !== null && cond !== false && cond !== 0 && cond !== '') {
          evaluate(exp.then, activeRecord, cb);
        } else {
          evaluate(exp.else, activeRecord, cb);
        }
      });
      return;
    }
    case NodeType.varDeclarationList: {
      loopExprList(exp.exprList, activeRecord, cb);
      return;
    }
    case NodeType.varDeclaration: {
      evaluate(exp.right, activeRecord, function cc (val) {
        stackGuard(cc, arguments);
        activeRecord.def(exp.left.name, val);
        cb(val);
      });
      return;
    }
    case NodeType.binary: {
      evaluate(exp.left, activeRecord, function cc (lval) {
        stackGuard(cc, arguments);
        evaluate(exp.right, activeRecord, function cc (rval) {
          stackGuard(cc, arguments);
          cb(applyBinary(exp.op, lval, rval));
        });
      });
      return;
    }
    case NodeType.assign: {
      evaluate(exp.right, activeRecord, function cc (rval) {
        stackGuard(cc, arguments);
        if (exp.left.type === NodeType.identifier) {
          activeRecord.set(exp.left.name, rval);
        }
        cb(rval);
      });
      return;
    }
    case NodeType.funDeclaration: {
      const fn = function (cb) {
        stackGuard(fn, arguments);
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
    case NodeType.prog: {
      loopExprList(exp.exprList, activeRecord, cb);
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

globalActiveRecord.def("callCC", function (cc, fn) {
  fn(cc, function (_, val) {
    cc(val);
  })
});

const jsModules = new Map();
globalActiveRecord.def("requireJsAsyncMethod", function (cc, path) {
  let [moduleName, methodName] = path.split('.');
  let module = jsModules.get(moduleName);
  if (module === undefined) {
    module = require(moduleName);
    jsModules.set(moduleName, module);
  }
  const method = module[methodName];
  cc(function (cc) {
    const args = Array.from(arguments).slice(1);
    args.push(function (err, data) {
      cc(data);
    });
    method.apply(null, args);
  })
});

exports.globalActiveRecord = globalActiveRecord;

exports.exec = (exp, cb) => {
  execute(evaluate, [exp, globalActiveRecord, cb]);
};
