const antlr4 = require("antlr4/index");
const CircLexer = require("./gen/CircLexer").CircLexer;
const CircParser = require("./gen/CircParser").CircParser;
const ast = require("./frontend").ast;
const exec = require("./interpreter").exec;

let source = `
// time(() -> {
//   let key = "testKey"
//   let a = { 
//     "b": [1, 2, 3], 
//     [key]: "val" 
//   }
//   a.b[0] = 5
//   a
// })

let a = 8

let obj = {
  "a": 1,
  "b": 2,
  "fn": (a, b) -> {
    println(this.a)
    println(this.b)
    let f = () -> {
      println(this.a)
      println(a)
      println(b)
    }
    f()
    let obj = {
      "a": 5,
      "b": 6,
      "fn": (a, b) -> {
        println(this.a)
        println(this.b)
        println(a)
        println(b)
      }
    }
    call({ "a": "a", "b": "b" }, obj.fn, ["arg a", "arg b"])
    obj.fn()
  }
}

time(() -> { obj.fn(3, 4) })
`;

const input = new antlr4.InputStream(source);
const lexer = new CircLexer(input);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new CircParser(tokens);
parser.buildParseTrees = true;

const astTree = ast(parser);
// console.log(JSON.stringify(astTree, null, 2));

exec(astTree, (out) => {
  console.log("\nDone:");
  console.dir(out);
});
