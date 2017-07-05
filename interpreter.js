const NodeType = require("./frontend").NodeType;

class MemoryCell {
  constructor (value, depth) {
    this.value = value;
    this.depth = depth;
  }
}

let depthCounter = 0;

class Environment {
  constructor (parent = null) {
    if (parent) {
      this.memoryCells = new Map(parent.memoryCells);
    } else {
      this.memoryCells = new Map();
    }
    this.depth = depthCounter++;
  }

  extend () {
    return new Environment(this);
  }

  set (key, value) {
    const cell = this.memoryCells.get(key);
    if (cell === undefined || cell.depth === 0) {
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
    const old = this.memoryCells.get(key);
    if (old && old.depth === this.depth) {
      throw new Error(`Duplicate definition variable ${key}`);
    }
    const cell = new MemoryCell(value, this.depth);
    this.memoryCells.set(key, cell);
  }
}
exports.Environment = Environment;

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

let funExecContext = null;
let forInStateStack = [];

const discard = {};

function isTrue (val) {
  return val !== null && val !== false && val !== 0 && val !== ''
}

/**
 *
 * @param exp {*}
 * @param env {Environment}
 * @param cb {Function}
 * @returns {*}
 */
function evaluate (exp, env, cb) {
  stackGuard(evaluate, arguments);
  switch (exp.type) {
    case NodeType.numberLiteral: {
      cb(exp.value);
      return;
    }
    case NodeType.identifier: {
      cb(env.get(exp.name));
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
    case NodeType.undefinedLiteral: {
      cb(undefined);
      return;
    }
    case NodeType.stringLiteral: {
      cb(exp.value);
      return;
    }
    case NodeType.exprSequence: {
      loopExprList(exp.exprList, env, cb);
      return;
    }
    case NodeType.funCall: {
      evaluate(exp.prodFunExpr, env, function cc (fn) {
        stackGuard(cc, arguments);
        const last = exp.paramList.length;
        const params = [cb];
        if (!fn.__thisObj__) {
          fn.__thisObj__ = globalEnv;
        }
        (function loop (i) {
          stackGuard(loop, arguments);
          if (i === last) {
            fn.apply(null, params);
          } else {
            evaluate(exp.paramList[i], env, function cc (val) {
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
      loopExprList(exp.exprList, env, cb);
      return;
    }
    case NodeType.condition: {
      evaluate(exp.expr, env, function cc (cond) {
        stackGuard(cc, arguments);
        if (isTrue(cond)) {
          if (exp.then === null) {
            cb(true);
          } else {
            evaluate(exp.then, env, cb);
          }
        } else {
          if (exp.else === null) {
            cb(false);
          } else {
            evaluate(exp.else, env, cb);
          }
        }
      });
      return;
    }
    case NodeType.varDeclarationList: {
      loopExprList(exp.exprList, env, cb);
      return;
    }
    case NodeType.varDeclaration: {
      evaluate(exp.right, env, function cc (val) {
        stackGuard(cc, arguments);
        env.def(exp.left.name, val);
        cb(val);
      });
      return;
    }
    case NodeType.binary: {
      evaluate(exp.left, env, function cc (lval) {
        stackGuard(cc, arguments);
        evaluate(exp.right, env, function cc (rval) {
          stackGuard(cc, arguments);
          cb(applyBinary(exp.op, lval, rval));
        });
      });
      return;
    }
    case NodeType.assign: {
      evaluate(exp.right, env, function cc (rval) {
        stackGuard(cc, arguments);
        if (exp.left.type === NodeType.identifier) {
          env.set(exp.left.name, rval);
          cb(rval);
        } else if (exp.left.type === NodeType.memberIndex) {
          evaluate(exp.left.left, env, function cc (obj) {
            stackGuard(cc, arguments);
            evaluate(exp.left.right, env, function cc (idx) {
              stackGuard(cc, arguments);
              obj[idx] = rval;
              cb(rval);
            })
          })
        } else if (exp.left.type === NodeType.memberDot) {
          evaluate(exp.left.left, env, function cc (obj) {
            stackGuard(cc, arguments);
            if (obj instanceof Environment) {
              obj.set(exp.right.name, rval);
            } else {
              obj[exp.right.name] = rval;
            }
            cb(rval);
          })
        }
      });
      return;
    }
    case NodeType.funDeclaration: {
      const fn = function (cb) {
        stackGuard(fn, arguments);
        const subEnv = env.extend();
        for (let i = 0, len = exp.formalParamList.length; i < len; i++) {
          subEnv.def(exp.formalParamList[i].name, arguments[i + 1]);
        }
        funExecContext = fn.__thisObj__;
        evaluate(exp.body, subEnv, function (val) {
          fn.__thisObj__ = null;
          cb(val);
        });
      };
      fn.__circ__ = true;
      if (exp.name) {
        env.def(exp.name.name, fn);
      }
      return cb(fn);
    }
    case NodeType.arrayLiteral: {
      const arr = [];
      const last = exp.items.length;
      (function loop (i) {
        stackGuard(loop, arguments);
        if (i === last) {
          cb(arr);
        } else {
          evaluate(exp.items[i], env, function cc (val) {
            stackGuard(cc, arguments);
            arr.push(val);
            loop(i + 1);
          })
        }
      })(0);
      return;
    }
    case NodeType.memberIndex: {
      evaluate(exp.left, env, function cc (lval) {
        stackGuard(cc, arguments);
        evaluate(exp.right, env, function cc (rval) {
          stackGuard(cc, arguments);
          cb(lval[rval]);
        })
      });
      return;
    }
    case NodeType.objectLiteral: {
      const obj = {};
      const last = exp.properties.length;
      (function loop (i) {
        stackGuard(loop, arguments);
        if (i === last) {
          cb(obj);
        } else {
          evaluate(exp.properties[i].left, env, function cc (key) {
            stackGuard(cc, arguments);
            evaluate(exp.properties[i].right, env, function cc (val) {
              stackGuard(cc, arguments);
              obj[key] = val;
              loop(i + 1);
            })
          });
        }
      })(0);
      return;
    }
    case NodeType.memberDot: {
      evaluate(exp.left, env, function cc (lval) {
        stackGuard(cc, arguments);
        const rval = lval instanceof Environment ? lval.get(exp.right.name) : lval[exp.right.name];
        if (typeof rval === "function") {
          rval.__thisObj__ = lval;
        }
        cb(rval);
      });
      return;
    }
    case NodeType.thisExpr: {
      cb(funExecContext);
      return;
    }
    case NodeType.for: {
      evaluate(exp.stuff, env, function cc (stuff) {
        stackGuard(cc, arguments);
        const subEnv = env.extend();
        let keyName = null;
        let valName = null;
        if (exp.keyVal.length === 1) {
          valName = exp.keyVal[0].name;
          subEnv.def(valName, null);
        } else if (exp.keyVal.length === 2) {
          keyName = exp.keyVal[0].name;
          valName = exp.keyVal[1].name;
          subEnv.def(keyName, null);
          subEnv.def(valName, null);
        } else {
          throw new Error("Must specify at least a variable to handle the iteration value.");
        }

        function loopArray (out, i) {
          stackGuard(loopArray, arguments);
          if (i === stuff.length) {
            forInStateStack.pop();
            cb(out);
          } else {
            if (keyName !== null) {
              subEnv.set(keyName, i);
            }
            if (valName !== null) {
              subEnv.set(valName, stuff[i]);
            }
            evaluate(exp.body, subEnv, function cc (val) {
              stackGuard(cc, arguments);
              if (val !== discard) {
                out.push(val)
              }
              loopArray(out, i + 1);
            });
          }
        }

        function loopObject (out, keys, i) {
          stackGuard(loopObject, arguments);
          if (i === keys.length) {
            forInStateStack.pop();
            cb(out);
          } else {
            if (keyName !== null) {
              subEnv.set(keyName, keys[i]);
            }
            if (valName !== null) {
              subEnv.set(valName, stuff[keys[i]]);
            }
            evaluate(exp.body, subEnv, function cc (val) {
              stackGuard(cc, arguments);
              if (val !== discard) {
                out.push(val)
              }
              loopObject(out, keys, i + 1);
            })
          }
        }

        const forInState = {
          out: [],
          cc: cb
        };
        forInStateStack.push(forInState);
        if (Array.isArray(stuff)) {
          loopArray(forInState.out, 0);
        } else {
          loopObject(forInState.out, Object.keys(stuff), 0);
        }
      });
      return;
    }
    case NodeType.breakExpr: {
      if (forInStateStack.length) {
        const state = forInStateStack.pop();
        state.cc(state.out);
      } else {
        cb();
      }
      return;
    }
    case NodeType.discard: {
      cb(discard);
      return;
    }
    case NodeType.and: {
      evaluate(exp.left, env, function cc (lval) {
        stackGuard(cc, arguments);
        if (!isTrue(lval)) {
          cb(lval)
        } else {
          evaluate(exp.right, env, function cc (rval) {
            stackGuard(cc, arguments);
            cb(rval);
          })
        }
      });
      return;
    }
    case NodeType.or: {
      evaluate(exp.left, env, function cc (lval) {
        stackGuard(cc, arguments);
        if (isTrue(lval)) {
          cb(lval);
        } else {
          evaluate(exp.right, env, function cc (rval) {
            stackGuard(cc, arguments);
            cb(rval);
          })
        }
      });
      return;
    }
    case NodeType.prog: {
      loopExprList(exp.exprList, env, cb);
      return;
    }
  }
}

const builtinEnv = new Environment();
builtinEnv.def("time", function (cc, fn) {
  console.time("time");
  fn(function (val) {
    console.timeEnd("time");
    cc(val);
  })
});

builtinEnv.def("println", function (cc, val) {
  console.log(val);
  cc(false);
});

builtinEnv.def("call", function (cc, thisObj, fn, args) {
  fn.__thisObj__ = thisObj;
  fn.apply(null, [cc].concat(args));
});

const exHandlers = [];
builtinEnv.def("try", function (cc, fn) {
  const frame = [];
  for (let i = 2, len = arguments.length; i < len;) {
    const f = {
      code: arguments[i++],
      handler: arguments[i++],
      continuation: cc
    };
    if (typeof f.handler !== "function") {
      throw new Error("Exception handler must be a function!");
    }
    frame.push(f);
  }
  exHandlers.push(frame);
  fn(function (val) {
    exHandlers.pop();
    cc(val);
  });
});

function __throw__ (_, code, info) {
  while (exHandlers.length) {
    const frame = exHandlers.pop();
    for (let i = 0, len = frame.length; i < len; i++) {
      const f = frame[i];
      if (f.code === true || f.code === code) {
        f.handler(f.continuation, code, info);
        return;
      }
    }
  }
  throw new Error(`No error handler for [${code}] ${info}`);
}
builtinEnv.def("throw", __throw__);

const jsModules = new Map();
builtinEnv.def("jsModule", function (cc, path) {
  let module = jsModules.get(path);
  if (module === undefined) {
    module = require(path);
    jsModules.set(path, module);
  }
  cc(module);
});

builtinEnv.def("callJs", function callJs (cc, thisObj, fn) {
  const args = [];
  for (let i = 3, len = arguments.length; i < len; i++) {
    const arg = arguments[i];
    if (typeof arg === "function" && arg.__circ__ === true) {
      args.push((function (arg) {
        return function () {
          const args = Array.from(arguments);
          args.unshift(() => {
          });
          execute(arg, args);
        }
      })(arg))
    } else {
      args.push(arg);
    }
  }
  cc(fn.apply(thisObj || null, args));
});

builtinEnv.def("callJsAsync", function (cc, thisObj, fn) {
  const args = [];
  for (let i = 3, len = arguments.length; i < len; i++) {
    const arg = arguments[i];
    if (typeof arg === "function") {
      args.push((function (arg) {
        return function () {
          const args = Array.from(arguments);
          args.unshift(() => {
          });
          execute(arg, args);
        }
      })(arg))
    } else {
      args.push(arg);
    }
  }
  args.push(function (err) {
    if (err) return execute(__throw__, [cc, err.code, err.message]);
    const args = Array.from(arguments);
    args.shift();
    execute(cc, args);
  });
  fn.apply(thisObj || null, args);
});

builtinEnv.def("newJsObj", function (cc, klass) {
  const args = Array.from(arguments).slice(2);
  const obj = Object.create(klass.prototype);
  klass.apply(obj, args);
  cc(obj);
});

builtinEnv.def("jsGlobal", global);

builtinEnv.def("regexp", function (cc, str, opt) {
  cc(new RegExp(str, opt));
});

exports.builtinEnv = builtinEnv;

const globalEnv = builtinEnv.extend();
exports.exec = (exp, cb) => {
  execute(evaluate, [exp, globalEnv, cb]);
};
