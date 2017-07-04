const antlr4 = require("antlr4/index");
const CircLexer = require("./gen/CircLexer").CircLexer;
const CircParser = require("./gen/CircParser").CircParser;
const ast = require("./frontend").ast;
const exec = require("./interpreter").exec;

let source = `
let readFile = requireJsAsyncMethod("fs.readFile")
println(try(
  () -> {
    readFile("./index.js", "utf8")
  }, 
  true, () -> {
    println("no such file")
  }))
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
