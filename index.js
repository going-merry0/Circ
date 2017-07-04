const antlr4 = require("antlr4/index");
const CircLexer = require("./gen/CircLexer").CircLexer;
const CircParser = require("./gen/CircParser").CircParser;
const ast = require("./frontend").ast;
const exec = require("./interpreter").exec;
const argv = require("yargs").argv;
const fs = require("fs");

let file = argv.file;
if (!file) {
  console.log("Please specify the source file.");
  process.exit(0);
}

const source = fs.readFileSync(file, "utf8");
const input = new antlr4.InputStream(source);
const lexer = new CircLexer(input);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new CircParser(tokens);
parser.buildParseTrees = true;

const astTree = ast(parser);
if (argv.ast) {
  console.log(JSON.stringify(astTree, null, 2));
  return;
}

exec(astTree, (out) => {
});
