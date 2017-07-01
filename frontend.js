const CircParser = require("./gen/CircParser").CircParser;
const CircParserVisitor = require("./gen/CircParserVisitor").CircParserVisitor;

const iota = (() => {
  let i = 0;
  return {
    reset: () => i = 0,
    next: () => ++i
  };
})();

const NodeType = {
  unsupported: -1,
  nullLiteral: iota.next(),
  booleanLiteral: iota.next(),
  stringLiteral: iota.next(),
  numberLiteral: iota.next(),
  varDeclaration: iota.next(),
  varDeclarationList: iota.next(),
  identifier: iota.next(),
  funDeclaration: iota.next(),
  funCall: iota.next(),
  binary: iota.next(),
  condition: iota.next(),
  exprSequence: iota.next(),
  assign: iota.next(),
  block: iota.next(),
  prog: iota.next()
};
iota.reset();

const NodeTypeLabel = {
  [NodeType.unsupported]: "unsupported",
  [NodeType.nullLiteral]: "nullLiteral",
  [NodeType.booleanLiteral]: "booleanLiteral",
  [NodeType.stringLiteral]: "stringLiteral",
  [NodeType.numberLiteral]: "numberLiteral",
  [NodeType.varDeclaration]: "varDeclaration",
  [NodeType.varDeclarationList]: "varDeclarationList",
  [NodeType.identifier]: "identifier",
  [NodeType.funDeclaration]: "funDeclaration",
  [NodeType.funCall]: "funCall",
  [NodeType.binary]: "binary",
  [NodeType.condition]: "condition",
  [NodeType.exprSequence]: "exprSequence",
  [NodeType.assign]: "assign",
  [NodeType.block]: "block",
  [NodeType.prog]: "prog"
};

class Node {
  constructor (type = NodeType.unsupported) {
    this.type = type;
  }

  toJson () {
    return {
      type: NodeTypeLabel[this.type]
    };
  }
}

class LiteralNode extends Node {
  constructor (type, value = null) {
    super(type);
    this.value = value;
  }

  toJson () {
    const json = super.toJson();
    json.value = this.value;
    return json;
  }
}

class NullLiteralNode extends LiteralNode {
  constructor () {
    super(NodeType.nullLiteral, null);
  }
}

class BooleanLiteralNode extends LiteralNode {
  constructor (value) {
    super(NodeType.booleanLiteral, value);
  }
}

class StringLiteralNode extends LiteralNode {
  constructor (value) {
    super(NodeType.stringLiteral, eval(value));
  }
}

class NumberLiteralNode extends LiteralNode {
  constructor (value) {
    super(NodeType.numberLiteral, value);
  }
}

class VarDeclarationNode extends Node {
  constructor (identifier, statement) {
    super(NodeType.varDeclaration);
    this.left = identifier;
    this.right = statement;
  }

  toJson () {
    const json = super.toJson();
    json.left = this.left.toJson();
    json.right = this.right.toJson();
    return json;
  }
}

class VarDeclarationListNode extends Node {
  constructor () {
    super(NodeType.varDeclarationList);
    this.exprList = [];
  }

  toJson () {
    const json = super.toJson();
    json.exprList = this.exprList.map(exp => exp.toJson());
    return json;
  }
}

class IdentifierNode extends Node {
  constructor (name) {
    super(NodeType.identifier);
    this.name = name;
  }

  toJson () {
    const json = super.toJson();
    json.name = this.name;
    return json;
  }
}

class FunDeclarationNode extends Node {
  constructor () {
    super(NodeType.funDeclaration);
    this.name = null;
    this.formalParamList = [];
    this.body = null;
  }

  toJson () {
    const json = super.toJson();
    json.name = this.name;
    json.formalParamList = this.formalParamList.map(p => p.toJson());
    json.body = this.body.toJson();
    return json;
  }
}

class FunCallExprNode extends Node {
  constructor () {
    super(NodeType.funCall);
    this.prodFunExpr = null;
    this.paramList = [];
  }

  toJson () {
    const json = super.toJson();
    json.prodFunExpr = this.prodFunExpr.toJson();
    json.paramList = this.paramList.map(p => p.toJson());
    return json;
  }
}

class BinaryExprNode extends Node {
  constructor () {
    super(NodeType.binary);
    this.op = null;
    this.left = null;
    this.right = null;
  }

  toJson () {
    const json = super.toJson();
    json.op = this.op;
    json.left = this.left.toJson();
    json.right = this.right.toJson();
    return json;
  }
}

class ConditionExprNode extends Node {
  constructor () {
    super(NodeType.condition);
    this.expr = null;
    this.then = null;
    this.else = null;
  }

  toJson () {
    const json = super.toJson();
    json.expr = this.expr.toJson();
    json.then = this.then.toJson();
    json.else = this.else.toJson();
    return json;
  }
}

class ExprSequenceNode extends Node {
  constructor () {
    super(NodeType.exprSequence);
    this.exprList = [];
  }

  toJson () {
    if (this.exprList.length === 1) {
      return this.exprList[0].toJson();
    } else {
      const json = super.toJson();
      json.exprList = this.exprList.map(exp => exp.toJson());
      return json;
    }
  }
}

class AssignExprNode extends Node {
  constructor () {
    super(NodeType.assign);
    this.left = null;
    this.right = null;
  }

  toJson () {
    const json = super.toJson();
    json.left = this.left.toJson();
    json.right = this.right.toJson();
    return json;
  }
}

class BlockNode extends Node {
  constructor () {
    super(NodeType.block);
    this.exprList = [];
  }

  toJson () {
    const json = super.toJson();
    json.exprList = this.exprList.map(exp => exp.toJson());
    return json;
  }
}

class ProgNode extends BlockNode {
  constructor () {
    super();
    this.type = NodeType.prog;
  }
}

class AstVisitor extends CircParserVisitor {
  visitFormalParameterList (ctx) {
    if (!ctx) {
      return [];
    }
    return ctx.Identifier().map(ctx => new IdentifierNode(ctx.getText()));
  }

  visitStatementList (ctx) {
    if (!ctx) {
      return [];
    }
    return ctx.statement().map(ctx => this.visitStatement(ctx));
  }

  visitFunctionBody (ctx) {
    return this.visitStatementList(ctx.statementList());
  }

  visitFunExpr (ctx) {
    const node = new FunDeclarationNode();
    if (ctx.Identifier()) {
      node.name = new IdentifierNode(ctx.Identifier().getText());
    }
    node.formalParamList = this.visitFormalParameterList(ctx.formalParameterList());

    const body = new BlockNode();
    body.exprList = this.visitFunctionBody(ctx.functionBody());
    node.body = body;
    return node;
  }

  visitArgumentList (ctx) {
    if (!ctx) {
      return [];
    }
    return ctx.singleExpr().map(ctx => this.visitSingleExpr(ctx));
  }

  visitArguments (ctx) {
    return this.visitArgumentList(ctx.argumentList());
  }

  visitSingleExpr (ctx) {
    if (ctx instanceof CircParser.LiteralExprContext) {
      const literal = ctx.literal();
      if (literal.numericLiteral()) {
        return new NumberLiteralNode(Number(literal.getText()));
      } else if (literal.NullLiteral()) {
        return new NullLiteralNode();
      } else if (literal.BooleanLiteral()) {
        return new BooleanLiteralNode(literal.getText() === "true");
      } else if (literal.StringLiteral()) {
        return new StringLiteralNode(literal.getText());
      }
    } else if (ctx instanceof CircParser.FunExprContext) {
      return this.visitFunExpr(ctx);
    } else if (ctx instanceof CircParser.AddExprContext
      || ctx instanceof CircParser.MultiplyExprContext
      || ctx instanceof CircParser.RelationalExprContext
      || ctx instanceof CircParser.EqualityExprContext) {
      const node = new BinaryExprNode();
      node.left = this.visitSingleExpr(ctx.singleExpr(0));
      node.right = this.visitSingleExpr(ctx.singleExpr(1));
      if (ctx.Plus && ctx.Plus()) {
        node.op = '+';
      } else if (ctx.Minus && ctx.Minus()) {
        node.op = '-';
      } else if (ctx.Multiply && ctx.Multiply()) {
        node.op = '*';
      } else if (ctx.Divide && ctx.Divide()) {
        node.op = '/';
      } else if (ctx.Modulus && ctx.Modulus()) {
        node.op = '%';
      } else if (ctx.LessThan && ctx.LessThan()) {
        node.op = '<';
      } else if (ctx.MoreThan && ctx.MoreThan()) {
        node.op = '>';
      } else if (ctx.LessThanEquals && ctx.LessThanEquals()) {
        node.op = '<=';
      } else if (ctx.GreaterThanEquals && ctx.GreaterThanEquals()) {
        node.op = '>=';
      } else if (ctx.Equals && ctx.Equals()) {
        node.op = '==';
      } else if (ctx.NotEquals && ctx.NotEquals()) {
        node.op = '!=';
      }
      return node;
    } else if (ctx instanceof CircParser.ParenExprContext) {
      return this.visitExprSequence(ctx.exprSequence())
    } else if (ctx instanceof CircParser.FunCallExprContext) {
      const node = new FunCallExprNode();
      node.paramList = this.visitArguments(ctx.arguments());
      node.prodFunExpr = this.visitSingleExpr(ctx.singleExpr());
      return node;
    } else if (ctx instanceof CircParser.IdentifierExprContext) {
      return new IdentifierNode(ctx.Identifier().getText());
    } else if (ctx instanceof CircParser.LambdaExprContext) {
      const node = new FunDeclarationNode();
      if (ctx.Identifier()) {
        node.formalParamList = [
          new IdentifierNode(ctx.Identifier().getText())
        ];
      } else {
        node.formalParamList = this.visitArguments(ctx.arguments());
      }
      const body = new BlockNode();
      body.exprList = [this.visitStatement(ctx.statement())];
      node.body = body;
      return node;
    } else if (ctx instanceof CircParser.AssignExprContext) {
      const node = new AssignExprNode();
      node.left = this.visitSingleExpr(ctx.singleExpr());
      node.right = this.visitStatement(ctx.statement());
      return node;
    }
  }

  visitExprSequence (ctx) {
    const node = new ExprSequenceNode();
    node.exprList = ctx.singleExpr().map(ctx => this.visitSingleExpr(ctx));
    return node;
  }

  visitInitializer (ctx) {
    return this.visitStatement(ctx.statement());
  }

  visitVariableDeclaration (ctx) {
    const node = new VarDeclarationNode();
    node.left = new IdentifierNode(ctx.Identifier().getText());
    node.right = this.visitInitializer(ctx.initializer());
    return node;
  }

  visitVarDeclarationList (ctx) {
    const node = new VarDeclarationListNode();
    node.exprList = ctx.variableDeclaration().map(ctx => this.visitVariableDeclaration(ctx));
    return node;
  }

  visitVarDeclarationStatement (ctx) {
    return this.visitVarDeclarationList(ctx.varDeclarationList());
  }

  visitIfStatementBody (ctx) {
    return this.visitStatement(ctx.statement());
  }

  visitIfStatement (ctx) {
    const node = new ConditionExprNode();
    node.expr = this.visitSingleExpr(ctx.singleExpr());
    node.then = this.visitIfStatementBody(ctx.thenBody);
    node.else = this.visitIfStatementBody(ctx.elseBody);
    return node;
  }

  visitBlockStatement (ctx) {
    return this.visitStatementList(ctx.statementList());
  }

  visitStatement (ctx) {
    if (ctx.exprStatement()) {
      return this.visitExprSequence(ctx.exprStatement().exprSequence());
    } else if (ctx.varDeclarationStatement()) {
      return this.visitVarDeclarationStatement(ctx.varDeclarationStatement());
    } else if (ctx.ifStatement()) {
      return this.visitIfStatement(ctx.ifStatement());
    } else if (ctx.blockStatement()) {
      const node = new BlockNode();
      node.exprList = this.visitBlockStatement(ctx.blockStatement());
      return node;
    }
  }

  visitStatements (ctx) {
    if (!ctx) {
      return [];
    }
    return ctx.statement().map(ctx => this.visitStatement(ctx));
  }

  visitProgram (ctx) {
    const node = new ProgNode();
    node.exprList = this.visitStatements(ctx.statements());
    return node;
  }
}

exports.ast = (parser) => {
  return new AstVisitor().visitProgram(parser.program()).toJson();
};
