// Generated from /Users/hsiaosiyuan/WebstormProjects/circ/antlrv4/CircParser.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by CircParser.

function CircParserVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

CircParserVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
CircParserVisitor.prototype.constructor = CircParserVisitor;

// Visit a parse tree produced by CircParser#program.
CircParserVisitor.prototype.visitProgram = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#statements.
CircParserVisitor.prototype.visitStatements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#statement.
CircParserVisitor.prototype.visitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#noEmptyStatement.
CircParserVisitor.prototype.visitNoEmptyStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#blockStatement.
CircParserVisitor.prototype.visitBlockStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#statementList.
CircParserVisitor.prototype.visitStatementList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#varDeclarationStatement.
CircParserVisitor.prototype.visitVarDeclarationStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#varDeclarationList.
CircParserVisitor.prototype.visitVarDeclarationList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#variableDeclaration.
CircParserVisitor.prototype.visitVariableDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#initializer.
CircParserVisitor.prototype.visitInitializer = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#AndExpr.
CircParserVisitor.prototype.visitAndExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#MultiplyExpr.
CircParserVisitor.prototype.visitMultiplyExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#IllegalLiteralAssignExpr.
CircParserVisitor.prototype.visitIllegalLiteralAssignExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#DiscardExpr.
CircParserVisitor.prototype.visitDiscardExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#RelationalExpr.
CircParserVisitor.prototype.visitRelationalExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#MemberIndexExpr.
CircParserVisitor.prototype.visitMemberIndexExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#AssignExpr.
CircParserVisitor.prototype.visitAssignExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#EqualityExpr.
CircParserVisitor.prototype.visitEqualityExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#MemberDotExpr.
CircParserVisitor.prototype.visitMemberDotExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#IdentifierExpr.
CircParserVisitor.prototype.visitIdentifierExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#ArrayLiteralExpr.
CircParserVisitor.prototype.visitArrayLiteralExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#LiteralExpr.
CircParserVisitor.prototype.visitLiteralExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#ThisExpr.
CircParserVisitor.prototype.visitThisExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#ObjectLiteralExpr.
CircParserVisitor.prototype.visitObjectLiteralExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#LambdaExpr.
CircParserVisitor.prototype.visitLambdaExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#IllegalReservedWordAssignExpr.
CircParserVisitor.prototype.visitIllegalReservedWordAssignExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#AddExpr.
CircParserVisitor.prototype.visitAddExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#OrExpr.
CircParserVisitor.prototype.visitOrExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#IllegalReservedWordFunCallExpr.
CircParserVisitor.prototype.visitIllegalReservedWordFunCallExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#FunCallExpr.
CircParserVisitor.prototype.visitFunCallExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#ForExpr.
CircParserVisitor.prototype.visitForExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#ParenExpr.
CircParserVisitor.prototype.visitParenExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#FunExpr.
CircParserVisitor.prototype.visitFunExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#IllegalLiteralFunCallExpr.
CircParserVisitor.prototype.visitIllegalLiteralFunCallExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#BreakExpr.
CircParserVisitor.prototype.visitBreakExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#kvExpr.
CircParserVisitor.prototype.visitKvExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#singleValExpr.
CircParserVisitor.prototype.visitSingleValExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#arguments.
CircParserVisitor.prototype.visitArguments = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#argumentList.
CircParserVisitor.prototype.visitArgumentList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#exprSequence.
CircParserVisitor.prototype.visitExprSequence = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#literal.
CircParserVisitor.prototype.visitLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#numericLiteral.
CircParserVisitor.prototype.visitNumericLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#arrayLiteral.
CircParserVisitor.prototype.visitArrayLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#elementList.
CircParserVisitor.prototype.visitElementList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#objectLiteral.
CircParserVisitor.prototype.visitObjectLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#propertyNameAndValueList.
CircParserVisitor.prototype.visitPropertyNameAndValueList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#staticPropertyName.
CircParserVisitor.prototype.visitStaticPropertyName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#exprPropertyName.
CircParserVisitor.prototype.visitExprPropertyName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#emptyStatement.
CircParserVisitor.prototype.visitEmptyStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#eos.
CircParserVisitor.prototype.visitEos = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#formalParameterList.
CircParserVisitor.prototype.visitFormalParameterList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#functionBody.
CircParserVisitor.prototype.visitFunctionBody = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#ifStatement.
CircParserVisitor.prototype.visitIfStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#ifStatementBody.
CircParserVisitor.prototype.visitIfStatementBody = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#exprStatement.
CircParserVisitor.prototype.visitExprStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#reservedWord.
CircParserVisitor.prototype.visitReservedWord = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CircParser#keyword.
CircParserVisitor.prototype.visitKeyword = function(ctx) {
  return this.visitChildren(ctx);
};



exports.CircParserVisitor = CircParserVisitor;