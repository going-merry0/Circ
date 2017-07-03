parser grammar CircParser;

options { tokenVocab=CircLexer; }

@parser::members {
  CircParser.prototype.here = function(type, channel = antlr4.Lexer.DEFAULT_TOKEN_CHANNEL) {
      const token = this.getCurrentToken();
      return (token.channel == channel) && (token.type == type);
  }

  CircParser.prototype.lineTerminatorAhead = function() {
    const idx = this.getCurrentToken().tokenIndex - 1
    const ahead = this._input.get(idx)

    if (ahead.channel != antlr4.Lexer.HIDDEN) {
      return false
    }

    const text = ahead.text
    const type = ahead.type

    const case1 = type == CircParser.MultiLineComment && (text.indexOf("\r") !== -1 || text.indexOf("\n") !== -1)
    return case1 || (type == CircParser.LineTerminator)
  }
}

program
  : statements? EOF
  ;

statements
  : statement+
  ;

statement
  : blockStatement
  | exprStatement
  | varDeclarationStatement
  | emptyStatement
  | ifStatement
  ;

noEmptyStatement
  : blockStatement
  | exprStatement
  | varDeclarationStatement
  | ifStatement
  ;

blockStatement
  : OpenBrace statementList? CloseBrace
  ;

statementList
  : statement+
  ;

varDeclarationStatement: Let varDeclarationList eos;

varDeclarationList: variableDeclaration ( Comma variableDeclaration )*;

variableDeclaration
  : Identifier initializer?
  | reservedWord { this.notifyErrorListeners("Can not use reserved word as identifier") } initializer?
  | literal { this.notifyErrorListeners("Can not use literal as lvalue") } initializer?
  ;

initializer
  : Assign noEmptyStatement
  ;

singleExpr
  : Fun Identifier? OpenParen formalParameterList? CloseParen OpenBrace functionBody CloseBrace                           # FunExpr
  | singleExpr OpenBracket exprSequence CloseBracket                                                                      # MemberIndexExpr
  | singleExpr Dot Identifier                                                                                             # MemberDotExpr
  | singleExpr arguments                                                                                                  # FunCallExpr
  | reservedWord { this.notifyErrorListeners("FunCall: Can not use reserved word as identifier") } arguments              # IllegalReservedWordFunCallExpr
  | literal { this.notifyErrorListeners("FunCall: Can not use literal as identifier") } arguments                         # IllegalLiteralFunCallExpr
  | singleExpr ( Multiply | Divide | Modulus ) singleExpr                                                                 # MultiplyExpr
  | singleExpr ( Plus | Minus ) singleExpr                                                                                # AddExpr
  | singleExpr ( LessThan | MoreThan | LessThanEquals | GreaterThanEquals ) singleExpr                                    # RelationalExpr
  | singleExpr ( Equals | NotEquals ) singleExpr                                                                          # EqualityExpr
  | reservedWord { this.notifyErrorListeners("Assignment: Can not use reserved word as identifier") } Assign statement    # IllegalReservedWordAssignExpr
  | literal { this.notifyErrorListeners("Assignment: Can not use literal as identifier") } Assign statement               # IllegalLiteralAssignExpr
  | singleExpr Assign noEmptyStatement                                                                                    # AssignExpr
  | ( Identifier|arguments ) LambdaConnect noEmptyStatement                                                               # LambdaExpr
  | OpenParen exprSequence CloseParen                                                                                     # ParenExpr
  | This                                                                                                                  # ThisExpr
  | Identifier                                                                                                            # IdentifierExpr
  | literal                                                                                                               # LiteralExpr
  | arrayLiteral                                                                                                          # ArrayLiteralExpr
  | objectLiteral                                                                                                         # ObjectLiteralExpr
  ;

arguments
  : OpenParen argumentList? CloseParen
  ;

argumentList
  : singleExpr ( Comma singleExpr )*
  ;

exprSequence
  : singleExpr ( Comma singleExpr )*
  ;

literal
  : ( NullLiteral
    | UndefinedLiteral
    | BooleanLiteral
    | StringLiteral
    )
  | numericLiteral
  ;

numericLiteral
  : IntegerLiteral
  | HexIntegerLiteral
  | RealLiteral
  ;

arrayLiteral
  : OpenBracket elementList? Comma? CloseBracket
  ;

elementList
  : singleExpr ( Comma singleExpr )*
  ;

objectLiteral
  : OpenBrace CloseBrace
  | OpenBrace propertyNameAndValueList Comma? CloseBrace
  ;

propertyNameAndValueList
  : propertyAssignment ( Comma propertyAssignment )*
  ;

propertyAssignment
  : StringLiteral Colon singleExpr                                                            # staticPropertyName
  | OpenBracket propertyNameExpr=singleExpr CloseBracket Colon propertyValExpr=singleExpr     # exprPropertyName
  ;

emptyStatement
  : SemiColon
  ;

eos
  : SemiColon
  | EOF
  | { this.lineTerminatorAhead() || this.here(CircParser.CloseBrace) }?
  ;

formalParameterList
  : Identifier ( Comma Identifier )*
  ;

functionBody
  : statementList?
  ;

ifStatement
  : If singleExpr Then thenBody=ifStatementBody ( Else elseBody=ifStatementBody )?
  ;

ifStatementBody
  : statement
  ;

exprStatement
  : exprSequence
  ;

reservedWord
  : keyword
  | ( NullLiteral
    | BooleanLiteral
    )
  ;

keyword
  : Let
  | Fun
  | If
  | Then
  | Else
  | For
  | In
  ;
