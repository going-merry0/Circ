const antlr4 = require("antlr4/index");
const CircLexer = require("./gen/CircLexer").CircLexer;
const CircParser = require("./gen/CircParser").CircParser;
const ast = require("./frontend").ast;
const exec = require("./interpreter").exec;

let source = `
// let a = 1
// let b = 2
// fun test (b) { 
//   a = a + b 
// }
// test(3)
// a

// let fn = (a, b) -> { a - b }
// if fn(1, 1) then 1 else 2

// let a = 1
// let b = 2
// a + b

// let fib = (n) -> if n < 2 then n else fib(n - 1) + fib(n - 2)
// time( () -> println(fib(20)) )

// let sum = (n, ret) -> if n == 0 then ret 
// 								else sum(n - 1, ret + n);
// time(() -> println(sum(50000, 0)))

// let foo = (return) -> {
//   println("foo")
//   return("DONE")
//   println("bar")
// }
//
// callCC(foo)

let readFile = requireJsAsyncMethod("fs.readFile")
println(readFile("./index.js", "utf8"))
`;

const input = new antlr4.InputStream(source);
const lexer = new CircLexer(input);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new CircParser(tokens);
parser.buildParseTrees = true;

const astTree = ast(parser);
// console.log(JSON.stringify(astTree, null, 2));

exec(astTree, (out) => {
  console.log(`Done: ${out}`);
});
