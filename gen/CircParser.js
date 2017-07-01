// Generated from /Users/hsiaosiyuan/WebstormProjects/circ/antlrv4/CircParser.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var CircParserVisitor = require('./CircParserVisitor').CircParserVisitor;

var grammarFileName = "CircParser.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003+\u0135\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0003",
    "\u0002\u0005\u0002>\n\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0006",
    "\u0003C\n\u0003\r\u0003\u000e\u0003D\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0005\u0004L\n\u0004\u0003\u0005\u0003\u0005",
    "\u0005\u0005P\n\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0006\u0006",
    "U\n\u0006\r\u0006\u000e\u0006V\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0003\b\u0007\b`\n\b\f\b\u000e\bc\u000b\b\u0003",
    "\t\u0003\t\u0005\tg\n\t\u0003\t\u0003\t\u0003\t\u0005\tl\n\t\u0003\t",
    "\u0003\t\u0003\t\u0005\tq\n\t\u0005\ts\n\t\u0003\n\u0003\n\u0003\n\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0005\u000b{\n\u000b\u0003\u000b\u0003",
    "\u000b\u0005\u000b\u007f\n\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u009a\n",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u00a6",
    "\n\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0007\u000b\u00c1\n\u000b\f\u000b\u000e\u000b",
    "\u00c4\u000b\u000b\u0003\f\u0003\f\u0005\f\u00c8\n\f\u0003\f\u0003\f",
    "\u0003\r\u0003\r\u0003\r\u0007\r\u00cf\n\r\f\r\u000e\r\u00d2\u000b\r",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0007\u000e\u00d7\n\u000e\f\u000e",
    "\u000e\u000e\u00da\u000b\u000e\u0003\u000f\u0003\u000f\u0005\u000f\u00de",
    "\n\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0005\u0011",
    "\u00e4\n\u0011\u0003\u0011\u0005\u0011\u00e7\n\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0007\u0012\u00ee\n\u0012",
    "\f\u0012\u000e\u0012\u00f1\u000b\u0012\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0005\u0013\u00f8\n\u0013\u0003\u0013",
    "\u0003\u0013\u0005\u0013\u00fc\n\u0013\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0007\u0014\u0101\n\u0014\f\u0014\u000e\u0014\u0104\u000b\u0014",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u010f\n\u0015\u0003",
    "\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u0116",
    "\n\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0007\u0018\u011b\n\u0018",
    "\f\u0018\u000e\u0018\u011e\u000b\u0018\u0003\u0019\u0005\u0019\u0121",
    "\n\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0005\u001a\u0129\n\u001a\u0003\u001b\u0003\u001b\u0003",
    "\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0005\u001d\u0131\n\u001d",
    "\u0003\u001e\u0003\u001e\u0003\u001e\u0002\u0003\u0014\u001f\u0002\u0004",
    "\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e ",
    "\"$&(*,.02468:\u0002\n\u0003\u0002\u0017\u0019\u0003\u0002\u0015\u0016",
    "\u0004\u0002\u001b\u001c\u001f \u0003\u0002\u001d\u001e\u0004\u0002",
    "\"#((\u0003\u0002$&\u0003\u0002\"#\u0003\u0002\u0003\t\u0002\u014b\u0002",
    "=\u0003\u0002\u0002\u0002\u0004B\u0003\u0002\u0002\u0002\u0006K\u0003",
    "\u0002\u0002\u0002\bM\u0003\u0002\u0002\u0002\nT\u0003\u0002\u0002\u0002",
    "\fX\u0003\u0002\u0002\u0002\u000e\\\u0003\u0002\u0002\u0002\u0010r\u0003",
    "\u0002\u0002\u0002\u0012t\u0003\u0002\u0002\u0002\u0014\u00a5\u0003",
    "\u0002\u0002\u0002\u0016\u00c5\u0003\u0002\u0002\u0002\u0018\u00cb\u0003",
    "\u0002\u0002\u0002\u001a\u00d3\u0003\u0002\u0002\u0002\u001c\u00dd\u0003",
    "\u0002\u0002\u0002\u001e\u00df\u0003\u0002\u0002\u0002 \u00e1\u0003",
    "\u0002\u0002\u0002\"\u00ea\u0003\u0002\u0002\u0002$\u00fb\u0003\u0002",
    "\u0002\u0002&\u00fd\u0003\u0002\u0002\u0002(\u010e\u0003\u0002\u0002",
    "\u0002*\u0110\u0003\u0002\u0002\u0002,\u0115\u0003\u0002\u0002\u0002",
    ".\u0117\u0003\u0002\u0002\u00020\u0120\u0003\u0002\u0002\u00022\u0122",
    "\u0003\u0002\u0002\u00024\u012a\u0003\u0002\u0002\u00026\u012c\u0003",
    "\u0002\u0002\u00028\u0130\u0003\u0002\u0002\u0002:\u0132\u0003\u0002",
    "\u0002\u0002<>\u0005\u0004\u0003\u0002=<\u0003\u0002\u0002\u0002=>\u0003",
    "\u0002\u0002\u0002>?\u0003\u0002\u0002\u0002?@\u0007\u0002\u0002\u0003",
    "@\u0003\u0003\u0002\u0002\u0002AC\u0005\u0006\u0004\u0002BA\u0003\u0002",
    "\u0002\u0002CD\u0003\u0002\u0002\u0002DB\u0003\u0002\u0002\u0002DE\u0003",
    "\u0002\u0002\u0002E\u0005\u0003\u0002\u0002\u0002FL\u0005\b\u0005\u0002",
    "GL\u00056\u001c\u0002HL\u0005\f\u0007\u0002IL\u0005*\u0016\u0002JL\u0005",
    "2\u001a\u0002KF\u0003\u0002\u0002\u0002KG\u0003\u0002\u0002\u0002KH",
    "\u0003\u0002\u0002\u0002KI\u0003\u0002\u0002\u0002KJ\u0003\u0002\u0002",
    "\u0002L\u0007\u0003\u0002\u0002\u0002MO\u0007\u000b\u0002\u0002NP\u0005",
    "\n\u0006\u0002ON\u0003\u0002\u0002\u0002OP\u0003\u0002\u0002\u0002P",
    "Q\u0003\u0002\u0002\u0002QR\u0007\f\u0002\u0002R\t\u0003\u0002\u0002",
    "\u0002SU\u0005\u0006\u0004\u0002TS\u0003\u0002\u0002\u0002UV\u0003\u0002",
    "\u0002\u0002VT\u0003\u0002\u0002\u0002VW\u0003\u0002\u0002\u0002W\u000b",
    "\u0003\u0002\u0002\u0002XY\u0007\u0003\u0002\u0002YZ\u0005\u000e\b\u0002",
    "Z[\u0005,\u0017\u0002[\r\u0003\u0002\u0002\u0002\\a\u0005\u0010\t\u0002",
    "]^\u0007\u0011\u0002\u0002^`\u0005\u0010\t\u0002_]\u0003\u0002\u0002",
    "\u0002`c\u0003\u0002\u0002\u0002a_\u0003\u0002\u0002\u0002ab\u0003\u0002",
    "\u0002\u0002b\u000f\u0003\u0002\u0002\u0002ca\u0003\u0002\u0002\u0002",
    "df\u0007\'\u0002\u0002eg\u0005\u0012\n\u0002fe\u0003\u0002\u0002\u0002",
    "fg\u0003\u0002\u0002\u0002gs\u0003\u0002\u0002\u0002hi\u00058\u001d",
    "\u0002ik\b\t\u0001\u0002jl\u0005\u0012\n\u0002kj\u0003\u0002\u0002\u0002",
    "kl\u0003\u0002\u0002\u0002ls\u0003\u0002\u0002\u0002mn\u0005\u001c\u000f",
    "\u0002np\b\t\u0001\u0002oq\u0005\u0012\n\u0002po\u0003\u0002\u0002\u0002",
    "pq\u0003\u0002\u0002\u0002qs\u0003\u0002\u0002\u0002rd\u0003\u0002\u0002",
    "\u0002rh\u0003\u0002\u0002\u0002rm\u0003\u0002\u0002\u0002s\u0011\u0003",
    "\u0002\u0002\u0002tu\u0007\u001a\u0002\u0002uv\u0005\u0006\u0004\u0002",
    "v\u0013\u0003\u0002\u0002\u0002wx\b\u000b\u0001\u0002xz\u0007\u0007",
    "\u0002\u0002y{\u0007\'\u0002\u0002zy\u0003\u0002\u0002\u0002z{\u0003",
    "\u0002\u0002\u0002{|\u0003\u0002\u0002\u0002|~\u0007\u000f\u0002\u0002",
    "}\u007f\u0005.\u0018\u0002~}\u0003\u0002\u0002\u0002~\u007f\u0003\u0002",
    "\u0002\u0002\u007f\u0080\u0003\u0002\u0002\u0002\u0080\u0081\u0007\u0010",
    "\u0002\u0002\u0081\u0082\u0007\u000b\u0002\u0002\u0082\u0083\u00050",
    "\u0019\u0002\u0083\u0084\u0007\f\u0002\u0002\u0084\u00a6\u0003\u0002",
    "\u0002\u0002\u0085\u0086\u00058\u001d\u0002\u0086\u0087\b\u000b\u0001",
    "\u0002\u0087\u0088\u0005\u0016\f\u0002\u0088\u00a6\u0003\u0002\u0002",
    "\u0002\u0089\u008a\u0005\u001c\u000f\u0002\u008a\u008b\b\u000b\u0001",
    "\u0002\u008b\u008c\u0005\u0016\f\u0002\u008c\u00a6\u0003\u0002\u0002",
    "\u0002\u008d\u008e\u00058\u001d\u0002\u008e\u008f\b\u000b\u0001\u0002",
    "\u008f\u0090\u0007\u001a\u0002\u0002\u0090\u0091\u0005\u0006\u0004\u0002",
    "\u0091\u00a6\u0003\u0002\u0002\u0002\u0092\u0093\u0005\u001c\u000f\u0002",
    "\u0093\u0094\b\u000b\u0001\u0002\u0094\u0095\u0007\u001a\u0002\u0002",
    "\u0095\u0096\u0005\u0006\u0004\u0002\u0096\u00a6\u0003\u0002\u0002\u0002",
    "\u0097\u009a\u0007\'\u0002\u0002\u0098\u009a\u0005\u0016\f\u0002\u0099",
    "\u0097\u0003\u0002\u0002\u0002\u0099\u0098\u0003\u0002\u0002\u0002\u009a",
    "\u009b\u0003\u0002\u0002\u0002\u009b\u009c\u0007!\u0002\u0002\u009c",
    "\u00a6\u0005\u0006\u0004\u0002\u009d\u009e\u0007\u000f\u0002\u0002\u009e",
    "\u009f\u0005\u001a\u000e\u0002\u009f\u00a0\u0007\u0010\u0002\u0002\u00a0",
    "\u00a6\u0003\u0002\u0002\u0002\u00a1\u00a6\u0007\'\u0002\u0002\u00a2",
    "\u00a6\u0005\u001c\u000f\u0002\u00a3\u00a6\u0005 \u0011\u0002\u00a4",
    "\u00a6\u0005$\u0013\u0002\u00a5w\u0003\u0002\u0002\u0002\u00a5\u0085",
    "\u0003\u0002\u0002\u0002\u00a5\u0089\u0003\u0002\u0002\u0002\u00a5\u008d",
    "\u0003\u0002\u0002\u0002\u00a5\u0092\u0003\u0002\u0002\u0002\u00a5\u0099",
    "\u0003\u0002\u0002\u0002\u00a5\u009d\u0003\u0002\u0002\u0002\u00a5\u00a1",
    "\u0003\u0002\u0002\u0002\u00a5\u00a2\u0003\u0002\u0002\u0002\u00a5\u00a3",
    "\u0003\u0002\u0002\u0002\u00a5\u00a4\u0003\u0002\u0002\u0002\u00a6\u00c2",
    "\u0003\u0002\u0002\u0002\u00a7\u00a8\f\u000f\u0002\u0002\u00a8\u00a9",
    "\t\u0002\u0002\u0002\u00a9\u00c1\u0005\u0014\u000b\u0010\u00aa\u00ab",
    "\f\u000e\u0002\u0002\u00ab\u00ac\t\u0003\u0002\u0002\u00ac\u00c1\u0005",
    "\u0014\u000b\u000f\u00ad\u00ae\f\r\u0002\u0002\u00ae\u00af\t\u0004\u0002",
    "\u0002\u00af\u00c1\u0005\u0014\u000b\u000e\u00b0\u00b1\f\f\u0002\u0002",
    "\u00b1\u00b2\t\u0005\u0002\u0002\u00b2\u00c1\u0005\u0014\u000b\r\u00b3",
    "\u00b4\f\u0014\u0002\u0002\u00b4\u00b5\u0007\r\u0002\u0002\u00b5\u00b6",
    "\u0005\u001a\u000e\u0002\u00b6\u00b7\u0007\u000e\u0002\u0002\u00b7\u00c1",
    "\u0003\u0002\u0002\u0002\u00b8\u00b9\f\u0013\u0002\u0002\u00b9\u00ba",
    "\u0007\u0014\u0002\u0002\u00ba\u00c1\u0007\'\u0002\u0002\u00bb\u00bc",
    "\f\u0012\u0002\u0002\u00bc\u00c1\u0005\u0016\f\u0002\u00bd\u00be\f\t",
    "\u0002\u0002\u00be\u00bf\u0007\u001a\u0002\u0002\u00bf\u00c1\u0005\u0006",
    "\u0004\u0002\u00c0\u00a7\u0003\u0002\u0002\u0002\u00c0\u00aa\u0003\u0002",
    "\u0002\u0002\u00c0\u00ad\u0003\u0002\u0002\u0002\u00c0\u00b0\u0003\u0002",
    "\u0002\u0002\u00c0\u00b3\u0003\u0002\u0002\u0002\u00c0\u00b8\u0003\u0002",
    "\u0002\u0002\u00c0\u00bb\u0003\u0002\u0002\u0002\u00c0\u00bd\u0003\u0002",
    "\u0002\u0002\u00c1\u00c4\u0003\u0002\u0002\u0002\u00c2\u00c0\u0003\u0002",
    "\u0002\u0002\u00c2\u00c3\u0003\u0002\u0002\u0002\u00c3\u0015\u0003\u0002",
    "\u0002\u0002\u00c4\u00c2\u0003\u0002\u0002\u0002\u00c5\u00c7\u0007\u000f",
    "\u0002\u0002\u00c6\u00c8\u0005\u0018\r\u0002\u00c7\u00c6\u0003\u0002",
    "\u0002\u0002\u00c7\u00c8\u0003\u0002\u0002\u0002\u00c8\u00c9\u0003\u0002",
    "\u0002\u0002\u00c9\u00ca\u0007\u0010\u0002\u0002\u00ca\u0017\u0003\u0002",
    "\u0002\u0002\u00cb\u00d0\u0005\u0014\u000b\u0002\u00cc\u00cd\u0007\u0011",
    "\u0002\u0002\u00cd\u00cf\u0005\u0014\u000b\u0002\u00ce\u00cc\u0003\u0002",
    "\u0002\u0002\u00cf\u00d2\u0003\u0002\u0002\u0002\u00d0\u00ce\u0003\u0002",
    "\u0002\u0002\u00d0\u00d1\u0003\u0002\u0002\u0002\u00d1\u0019\u0003\u0002",
    "\u0002\u0002\u00d2\u00d0\u0003\u0002\u0002\u0002\u00d3\u00d8\u0005\u0014",
    "\u000b\u0002\u00d4\u00d5\u0007\u0011\u0002\u0002\u00d5\u00d7\u0005\u0014",
    "\u000b\u0002\u00d6\u00d4\u0003\u0002\u0002\u0002\u00d7\u00da\u0003\u0002",
    "\u0002\u0002\u00d8\u00d6\u0003\u0002\u0002\u0002\u00d8\u00d9\u0003\u0002",
    "\u0002\u0002\u00d9\u001b\u0003\u0002\u0002\u0002\u00da\u00d8\u0003\u0002",
    "\u0002\u0002\u00db\u00de\t\u0006\u0002\u0002\u00dc\u00de\u0005\u001e",
    "\u0010\u0002\u00dd\u00db\u0003\u0002\u0002\u0002\u00dd\u00dc\u0003\u0002",
    "\u0002\u0002\u00de\u001d\u0003\u0002\u0002\u0002\u00df\u00e0\t\u0007",
    "\u0002\u0002\u00e0\u001f\u0003\u0002\u0002\u0002\u00e1\u00e3\u0007\r",
    "\u0002\u0002\u00e2\u00e4\u0005\"\u0012\u0002\u00e3\u00e2\u0003\u0002",
    "\u0002\u0002\u00e3\u00e4\u0003\u0002\u0002\u0002\u00e4\u00e6\u0003\u0002",
    "\u0002\u0002\u00e5\u00e7\u0007\u0011\u0002\u0002\u00e6\u00e5\u0003\u0002",
    "\u0002\u0002\u00e6\u00e7\u0003\u0002\u0002\u0002\u00e7\u00e8\u0003\u0002",
    "\u0002\u0002\u00e8\u00e9\u0007\u000e\u0002\u0002\u00e9!\u0003\u0002",
    "\u0002\u0002\u00ea\u00ef\u0005\u0014\u000b\u0002\u00eb\u00ec\u0007\u0011",
    "\u0002\u0002\u00ec\u00ee\u0005\u0014\u000b\u0002\u00ed\u00eb\u0003\u0002",
    "\u0002\u0002\u00ee\u00f1\u0003\u0002\u0002\u0002\u00ef\u00ed\u0003\u0002",
    "\u0002\u0002\u00ef\u00f0\u0003\u0002\u0002\u0002\u00f0#\u0003\u0002",
    "\u0002\u0002\u00f1\u00ef\u0003\u0002\u0002\u0002\u00f2\u00f3\u0007\u000b",
    "\u0002\u0002\u00f3\u00fc\u0007\f\u0002\u0002\u00f4\u00f5\u0007\u000b",
    "\u0002\u0002\u00f5\u00f7\u0005&\u0014\u0002\u00f6\u00f8\u0007\u0011",
    "\u0002\u0002\u00f7\u00f6\u0003\u0002\u0002\u0002\u00f7\u00f8\u0003\u0002",
    "\u0002\u0002\u00f8\u00f9\u0003\u0002\u0002\u0002\u00f9\u00fa\u0007\f",
    "\u0002\u0002\u00fa\u00fc\u0003\u0002\u0002\u0002\u00fb\u00f2\u0003\u0002",
    "\u0002\u0002\u00fb\u00f4\u0003\u0002\u0002\u0002\u00fc%\u0003\u0002",
    "\u0002\u0002\u00fd\u0102\u0005(\u0015\u0002\u00fe\u00ff\u0007\u0011",
    "\u0002\u0002\u00ff\u0101\u0005(\u0015\u0002\u0100\u00fe\u0003\u0002",
    "\u0002\u0002\u0101\u0104\u0003\u0002\u0002\u0002\u0102\u0100\u0003\u0002",
    "\u0002\u0002\u0102\u0103\u0003\u0002\u0002\u0002\u0103\'\u0003\u0002",
    "\u0002\u0002\u0104\u0102\u0003\u0002\u0002\u0002\u0105\u0106\u0007(",
    "\u0002\u0002\u0106\u0107\u0007\u0013\u0002\u0002\u0107\u010f\u0005\u0014",
    "\u000b\u0002\u0108\u0109\u0007\r\u0002\u0002\u0109\u010a\u0005\u0014",
    "\u000b\u0002\u010a\u010b\u0007\u000e\u0002\u0002\u010b\u010c\u0007\u0013",
    "\u0002\u0002\u010c\u010d\u0005\u0014\u000b\u0002\u010d\u010f\u0003\u0002",
    "\u0002\u0002\u010e\u0105\u0003\u0002\u0002\u0002\u010e\u0108\u0003\u0002",
    "\u0002\u0002\u010f)\u0003\u0002\u0002\u0002\u0110\u0111\u0007\u0012",
    "\u0002\u0002\u0111+\u0003\u0002\u0002\u0002\u0112\u0116\u0007\u0012",
    "\u0002\u0002\u0113\u0116\u0007\u0002\u0002\u0003\u0114\u0116\u0006\u0017",
    "\n\u0002\u0115\u0112\u0003\u0002\u0002\u0002\u0115\u0113\u0003\u0002",
    "\u0002\u0002\u0115\u0114\u0003\u0002\u0002\u0002\u0116-\u0003\u0002",
    "\u0002\u0002\u0117\u011c\u0007\'\u0002\u0002\u0118\u0119\u0007\u0011",
    "\u0002\u0002\u0119\u011b\u0007\'\u0002\u0002\u011a\u0118\u0003\u0002",
    "\u0002\u0002\u011b\u011e\u0003\u0002\u0002\u0002\u011c\u011a\u0003\u0002",
    "\u0002\u0002\u011c\u011d\u0003\u0002\u0002\u0002\u011d/\u0003\u0002",
    "\u0002\u0002\u011e\u011c\u0003\u0002\u0002\u0002\u011f\u0121\u0005\n",
    "\u0006\u0002\u0120\u011f\u0003\u0002\u0002\u0002\u0120\u0121\u0003\u0002",
    "\u0002\u0002\u01211\u0003\u0002\u0002\u0002\u0122\u0123\u0007\u0004",
    "\u0002\u0002\u0123\u0124\u0005\u0014\u000b\u0002\u0124\u0125\u0007\u0005",
    "\u0002\u0002\u0125\u0128\u00054\u001b\u0002\u0126\u0127\u0007\u0006",
    "\u0002\u0002\u0127\u0129\u00054\u001b\u0002\u0128\u0126\u0003\u0002",
    "\u0002\u0002\u0128\u0129\u0003\u0002\u0002\u0002\u01293\u0003\u0002",
    "\u0002\u0002\u012a\u012b\u0005\u0006\u0004\u0002\u012b5\u0003\u0002",
    "\u0002\u0002\u012c\u012d\u0005\u001a\u000e\u0002\u012d7\u0003\u0002",
    "\u0002\u0002\u012e\u0131\u0005:\u001e\u0002\u012f\u0131\t\b\u0002\u0002",
    "\u0130\u012e\u0003\u0002\u0002\u0002\u0130\u012f\u0003\u0002\u0002\u0002",
    "\u01319\u0003\u0002\u0002\u0002\u0132\u0133\t\t\u0002\u0002\u0133;\u0003",
    "\u0002\u0002\u0002\"=DKOVafkprz~\u0099\u00a5\u00c0\u00c2\u00c7\u00d0",
    "\u00d8\u00dd\u00e3\u00e6\u00ef\u00f7\u00fb\u0102\u010e\u0115\u011c\u0120",
    "\u0128\u0130"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'let'", "'if'", "'then'", "'else'", "'fun'", 
                     "'for'", "'in'", null, "'{'", "'}'", "'['", "']'", 
                     "'('", "')'", "','", "';'", "':'", "'.'", "'+'", "'-'", 
                     "'*'", "'/'", "'%'", "'='", "'<'", "'>'", "'=='", "'!='", 
                     "'<='", "'>='", "'->'", "'null'" ];

var symbolicNames = [ null, "Let", "If", "Then", "Else", "Fun", "For", "In", 
                      "LineTerminator", "OpenBrace", "CloseBrace", "OpenBracket", 
                      "CloseBracket", "OpenParen", "CloseParen", "Comma", 
                      "SemiColon", "Colon", "Dot", "Plus", "Minus", "Multiply", 
                      "Divide", "Modulus", "Assign", "LessThan", "MoreThan", 
                      "Equals", "NotEquals", "LessThanEquals", "GreaterThanEquals", 
                      "LambdaConnect", "NullLiteral", "BooleanLiteral", 
                      "IntegerLiteral", "HexIntegerLiteral", "RealLiteral", 
                      "Identifier", "StringLiteral", "WhiteSpaces", "MultiLineComment", 
                      "SingleLineComment" ];

var ruleNames =  [ "program", "statements", "statement", "blockStatement", 
                   "statementList", "varDeclarationStatement", "varDeclarationList", 
                   "variableDeclaration", "initializer", "singleExpr", "arguments", 
                   "argumentList", "exprSequence", "literal", "numericLiteral", 
                   "arrayLiteral", "elementList", "objectLiteral", "propertyNameAndValueList", 
                   "propertyAssignment", "emptyStatement", "eos", "formalParameterList", 
                   "functionBody", "ifStatement", "ifStatementBody", "exprStatement", 
                   "reservedWord", "keyword" ];

function CircParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;

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

    return this;
}

CircParser.prototype = Object.create(antlr4.Parser.prototype);
CircParser.prototype.constructor = CircParser;

Object.defineProperty(CircParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

CircParser.EOF = antlr4.Token.EOF;
CircParser.Let = 1;
CircParser.If = 2;
CircParser.Then = 3;
CircParser.Else = 4;
CircParser.Fun = 5;
CircParser.For = 6;
CircParser.In = 7;
CircParser.LineTerminator = 8;
CircParser.OpenBrace = 9;
CircParser.CloseBrace = 10;
CircParser.OpenBracket = 11;
CircParser.CloseBracket = 12;
CircParser.OpenParen = 13;
CircParser.CloseParen = 14;
CircParser.Comma = 15;
CircParser.SemiColon = 16;
CircParser.Colon = 17;
CircParser.Dot = 18;
CircParser.Plus = 19;
CircParser.Minus = 20;
CircParser.Multiply = 21;
CircParser.Divide = 22;
CircParser.Modulus = 23;
CircParser.Assign = 24;
CircParser.LessThan = 25;
CircParser.MoreThan = 26;
CircParser.Equals = 27;
CircParser.NotEquals = 28;
CircParser.LessThanEquals = 29;
CircParser.GreaterThanEquals = 30;
CircParser.LambdaConnect = 31;
CircParser.NullLiteral = 32;
CircParser.BooleanLiteral = 33;
CircParser.IntegerLiteral = 34;
CircParser.HexIntegerLiteral = 35;
CircParser.RealLiteral = 36;
CircParser.Identifier = 37;
CircParser.StringLiteral = 38;
CircParser.WhiteSpaces = 39;
CircParser.MultiLineComment = 40;
CircParser.SingleLineComment = 41;

CircParser.RULE_program = 0;
CircParser.RULE_statements = 1;
CircParser.RULE_statement = 2;
CircParser.RULE_blockStatement = 3;
CircParser.RULE_statementList = 4;
CircParser.RULE_varDeclarationStatement = 5;
CircParser.RULE_varDeclarationList = 6;
CircParser.RULE_variableDeclaration = 7;
CircParser.RULE_initializer = 8;
CircParser.RULE_singleExpr = 9;
CircParser.RULE_arguments = 10;
CircParser.RULE_argumentList = 11;
CircParser.RULE_exprSequence = 12;
CircParser.RULE_literal = 13;
CircParser.RULE_numericLiteral = 14;
CircParser.RULE_arrayLiteral = 15;
CircParser.RULE_elementList = 16;
CircParser.RULE_objectLiteral = 17;
CircParser.RULE_propertyNameAndValueList = 18;
CircParser.RULE_propertyAssignment = 19;
CircParser.RULE_emptyStatement = 20;
CircParser.RULE_eos = 21;
CircParser.RULE_formalParameterList = 22;
CircParser.RULE_functionBody = 23;
CircParser.RULE_ifStatement = 24;
CircParser.RULE_ifStatementBody = 25;
CircParser.RULE_exprStatement = 26;
CircParser.RULE_reservedWord = 27;
CircParser.RULE_keyword = 28;

function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CircParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.EOF = function() {
    return this.getToken(CircParser.EOF, 0);
};

ProgramContext.prototype.statements = function() {
    return this.getTypedRuleContext(StatementsContext,0);
};

ProgramContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitProgram(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CircParser.ProgramContext = ProgramContext;

CircParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, CircParser.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 59;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CircParser.Let) | (1 << CircParser.If) | (1 << CircParser.Then) | (1 << CircParser.Else) | (1 << CircParser.Fun) | (1 << CircParser.For) | (1 << CircParser.In) | (1 << CircParser.OpenBrace) | (1 << CircParser.OpenBracket) | (1 << CircParser.OpenParen) | (1 << CircParser.SemiColon))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (CircParser.NullLiteral - 32)) | (1 << (CircParser.BooleanLiteral - 32)) | (1 << (CircParser.IntegerLiteral - 32)) | (1 << (CircParser.HexIntegerLiteral - 32)) | (1 << (CircParser.RealLiteral - 32)) | (1 << (CircParser.Identifier - 32)) | (1 << (CircParser.StringLiteral - 32)))) !== 0)) {
            this.state = 58;
            this.statements();
        }

        this.state = 61;
        this.match(CircParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CircParser.RULE_statements;
    return this;
}

StatementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementsContext.prototype.constructor = StatementsContext;

StatementsContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

StatementsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitStatements(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CircParser.StatementsContext = StatementsContext;

CircParser.prototype.statements = function() {

    var localctx = new StatementsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, CircParser.RULE_statements);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 64; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 63;
            this.statement();
            this.state = 66; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CircParser.Let) | (1 << CircParser.If) | (1 << CircParser.Then) | (1 << CircParser.Else) | (1 << CircParser.Fun) | (1 << CircParser.For) | (1 << CircParser.In) | (1 << CircParser.OpenBrace) | (1 << CircParser.OpenBracket) | (1 << CircParser.OpenParen) | (1 << CircParser.SemiColon))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (CircParser.NullLiteral - 32)) | (1 << (CircParser.BooleanLiteral - 32)) | (1 << (CircParser.IntegerLiteral - 32)) | (1 << (CircParser.HexIntegerLiteral - 32)) | (1 << (CircParser.RealLiteral - 32)) | (1 << (CircParser.Identifier - 32)) | (1 << (CircParser.StringLiteral - 32)))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CircParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.blockStatement = function() {
    return this.getTypedRuleContext(BlockStatementContext,0);
};

StatementContext.prototype.exprStatement = function() {
    return this.getTypedRuleContext(ExprStatementContext,0);
};

StatementContext.prototype.varDeclarationStatement = function() {
    return this.getTypedRuleContext(VarDeclarationStatementContext,0);
};

StatementContext.prototype.emptyStatement = function() {
    return this.getTypedRuleContext(EmptyStatementContext,0);
};

StatementContext.prototype.ifStatement = function() {
    return this.getTypedRuleContext(IfStatementContext,0);
};

StatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CircParser.StatementContext = StatementContext;

CircParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, CircParser.RULE_statement);
    try {
        this.state = 73;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 68;
            this.blockStatement();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 69;
            this.exprStatement();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 70;
            this.varDeclarationStatement();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 71;
            this.emptyStatement();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 72;
            this.ifStatement();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BlockStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CircParser.RULE_blockStatement;
    return this;
}

BlockStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockStatementContext.prototype.constructor = BlockStatementContext;

BlockStatementContext.prototype.OpenBrace = function() {
    return this.getToken(CircParser.OpenBrace, 0);
};

BlockStatementContext.prototype.CloseBrace = function() {
    return this.getToken(CircParser.CloseBrace, 0);
};

BlockStatementContext.prototype.statementList = function() {
    return this.getTypedRuleContext(StatementListContext,0);
};

BlockStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitBlockStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CircParser.BlockStatementContext = BlockStatementContext;

CircParser.prototype.blockStatement = function() {

    var localctx = new BlockStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, CircParser.RULE_blockStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 75;
        this.match(CircParser.OpenBrace);
        this.state = 77;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CircParser.Let) | (1 << CircParser.If) | (1 << CircParser.Then) | (1 << CircParser.Else) | (1 << CircParser.Fun) | (1 << CircParser.For) | (1 << CircParser.In) | (1 << CircParser.OpenBrace) | (1 << CircParser.OpenBracket) | (1 << CircParser.OpenParen) | (1 << CircParser.SemiColon))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (CircParser.NullLiteral - 32)) | (1 << (CircParser.BooleanLiteral - 32)) | (1 << (CircParser.IntegerLiteral - 32)) | (1 << (CircParser.HexIntegerLiteral - 32)) | (1 << (CircParser.RealLiteral - 32)) | (1 << (CircParser.Identifier - 32)) | (1 << (CircParser.StringLiteral - 32)))) !== 0)) {
            this.state = 76;
            this.statementList();
        }

        this.state = 79;
        this.match(CircParser.CloseBrace);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CircParser.RULE_statementList;
    return this;
}

StatementListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementListContext.prototype.constructor = StatementListContext;

StatementListContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

StatementListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitStatementList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CircParser.StatementListContext = StatementListContext;

CircParser.prototype.statementList = function() {

    var localctx = new StatementListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, CircParser.RULE_statementList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 82; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 81;
            this.statement();
            this.state = 84; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CircParser.Let) | (1 << CircParser.If) | (1 << CircParser.Then) | (1 << CircParser.Else) | (1 << CircParser.Fun) | (1 << CircParser.For) | (1 << CircParser.In) | (1 << CircParser.OpenBrace) | (1 << CircParser.OpenBracket) | (1 << CircParser.OpenParen) | (1 << CircParser.SemiColon))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (CircParser.NullLiteral - 32)) | (1 << (CircParser.BooleanLiteral - 32)) | (1 << (CircParser.IntegerLiteral - 32)) | (1 << (CircParser.HexIntegerLiteral - 32)) | (1 << (CircParser.RealLiteral - 32)) | (1 << (CircParser.Identifier - 32)) | (1 << (CircParser.StringLiteral - 32)))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VarDeclarationStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CircParser.RULE_varDeclarationStatement;
    return this;
}

VarDeclarationStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarDeclarationStatementContext.prototype.constructor = VarDeclarationStatementContext;

VarDeclarationStatementContext.prototype.Let = function() {
    return this.getToken(CircParser.Let, 0);
};

VarDeclarationStatementContext.prototype.varDeclarationList = function() {
    return this.getTypedRuleContext(VarDeclarationListContext,0);
};

VarDeclarationStatementContext.prototype.eos = function() {
    return this.getTypedRuleContext(EosContext,0);
};

VarDeclarationStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitVarDeclarationStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CircParser.VarDeclarationStatementContext = VarDeclarationStatementContext;

CircParser.prototype.varDeclarationStatement = function() {

    var localctx = new VarDeclarationStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, CircParser.RULE_varDeclarationStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 86;
        this.match(CircParser.Let);
        this.state = 87;
        this.varDeclarationList();
        this.state = 88;
        this.eos();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VarDeclarationListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CircParser.RULE_varDeclarationList;
    return this;
}

VarDeclarationListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarDeclarationListContext.prototype.constructor = VarDeclarationListContext;

VarDeclarationListContext.prototype.variableDeclaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VariableDeclarationContext);
    } else {
        return this.getTypedRuleContext(VariableDeclarationContext,i);
    }
};

VarDeclarationListContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CircParser.Comma);
    } else {
        return this.getToken(CircParser.Comma, i);
    }
};


VarDeclarationListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitVarDeclarationList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CircParser.VarDeclarationListContext = VarDeclarationListContext;

CircParser.prototype.varDeclarationList = function() {

    var localctx = new VarDeclarationListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, CircParser.RULE_varDeclarationList);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 90;
        this.variableDeclaration();
        this.state = 95;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 91;
                this.match(CircParser.Comma);
                this.state = 92;
                this.variableDeclaration(); 
            }
            this.state = 97;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VariableDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CircParser.RULE_variableDeclaration;
    return this;
}

VariableDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableDeclarationContext.prototype.constructor = VariableDeclarationContext;

VariableDeclarationContext.prototype.Identifier = function() {
    return this.getToken(CircParser.Identifier, 0);
};

VariableDeclarationContext.prototype.initializer = function() {
    return this.getTypedRuleContext(InitializerContext,0);
};

VariableDeclarationContext.prototype.reservedWord = function() {
    return this.getTypedRuleContext(ReservedWordContext,0);
};

VariableDeclarationContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

VariableDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitVariableDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CircParser.VariableDeclarationContext = VariableDeclarationContext;

CircParser.prototype.variableDeclaration = function() {

    var localctx = new VariableDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, CircParser.RULE_variableDeclaration);
    try {
        this.state = 112;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 98;
            this.match(CircParser.Identifier);
            this.state = 100;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
            if(la_===1) {
                this.state = 99;
                this.initializer();

            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 102;
            this.reservedWord();
             this.notifyErrorListeners("Can not use reserved word as identifier") 
            this.state = 105;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
            if(la_===1) {
                this.state = 104;
                this.initializer();

            }
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 107;
            this.literal();
             this.notifyErrorListeners("Can not use literal as lvalue") 
            this.state = 110;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
            if(la_===1) {
                this.state = 109;
                this.initializer();

            }
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function InitializerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CircParser.RULE_initializer;
    return this;
}

InitializerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InitializerContext.prototype.constructor = InitializerContext;

InitializerContext.prototype.Assign = function() {
    return this.getToken(CircParser.Assign, 0);
};

InitializerContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

InitializerContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitInitializer(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CircParser.InitializerContext = InitializerContext;

CircParser.prototype.initializer = function() {

    var localctx = new InitializerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, CircParser.RULE_initializer);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 114;
        this.match(CircParser.Assign);
        this.state = 115;
        this.statement();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SingleExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CircParser.RULE_singleExpr;
    return this;
}

SingleExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SingleExprContext.prototype.constructor = SingleExprContext;


 
SingleExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function ObjectLiteralExprContext(parser, ctx) {
	SingleExprContext.call(this, parser);
    SingleExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ObjectLiteralExprContext.prototype = Object.create(SingleExprContext.prototype);
ObjectLiteralExprContext.prototype.constructor = ObjectLiteralExprContext;

CircParser.ObjectLiteralExprContext = ObjectLiteralExprContext;

ObjectLiteralExprContext.prototype.objectLiteral = function() {
    return this.getTypedRuleContext(ObjectLiteralContext,0);
};
ObjectLiteralExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitObjectLiteralExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MultiplyExprContext(parser, ctx) {
	SingleExprContext.call(this, parser);
    SingleExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultiplyExprContext.prototype = Object.create(SingleExprContext.prototype);
MultiplyExprContext.prototype.constructor = MultiplyExprContext;

CircParser.MultiplyExprContext = MultiplyExprContext;

MultiplyExprContext.prototype.singleExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExprContext);
    } else {
        return this.getTypedRuleContext(SingleExprContext,i);
    }
};

MultiplyExprContext.prototype.Multiply = function() {
    return this.getToken(CircParser.Multiply, 0);
};

MultiplyExprContext.prototype.Divide = function() {
    return this.getToken(CircParser.Divide, 0);
};

MultiplyExprContext.prototype.Modulus = function() {
    return this.getToken(CircParser.Modulus, 0);
};
MultiplyExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitMultiplyExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LambdaExprContext(parser, ctx) {
	SingleExprContext.call(this, parser);
    SingleExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LambdaExprContext.prototype = Object.create(SingleExprContext.prototype);
LambdaExprContext.prototype.constructor = LambdaExprContext;

CircParser.LambdaExprContext = LambdaExprContext;

LambdaExprContext.prototype.LambdaConnect = function() {
    return this.getToken(CircParser.LambdaConnect, 0);
};

LambdaExprContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

LambdaExprContext.prototype.Identifier = function() {
    return this.getToken(CircParser.Identifier, 0);
};

LambdaExprContext.prototype.arguments = function() {
    return this.getTypedRuleContext(ArgumentsContext,0);
};
LambdaExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitLambdaExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IllegalReservedWordAssignExprContext(parser, ctx) {
	SingleExprContext.call(this, parser);
    SingleExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IllegalReservedWordAssignExprContext.prototype = Object.create(SingleExprContext.prototype);
IllegalReservedWordAssignExprContext.prototype.constructor = IllegalReservedWordAssignExprContext;

CircParser.IllegalReservedWordAssignExprContext = IllegalReservedWordAssignExprContext;

IllegalReservedWordAssignExprContext.prototype.reservedWord = function() {
    return this.getTypedRuleContext(ReservedWordContext,0);
};

IllegalReservedWordAssignExprContext.prototype.Assign = function() {
    return this.getToken(CircParser.Assign, 0);
};

IllegalReservedWordAssignExprContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};
IllegalReservedWordAssignExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitIllegalReservedWordAssignExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IllegalLiteralAssignExprContext(parser, ctx) {
	SingleExprContext.call(this, parser);
    SingleExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IllegalLiteralAssignExprContext.prototype = Object.create(SingleExprContext.prototype);
IllegalLiteralAssignExprContext.prototype.constructor = IllegalLiteralAssignExprContext;

CircParser.IllegalLiteralAssignExprContext = IllegalLiteralAssignExprContext;

IllegalLiteralAssignExprContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

IllegalLiteralAssignExprContext.prototype.Assign = function() {
    return this.getToken(CircParser.Assign, 0);
};

IllegalLiteralAssignExprContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};
IllegalLiteralAssignExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitIllegalLiteralAssignExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AddExprContext(parser, ctx) {
	SingleExprContext.call(this, parser);
    SingleExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AddExprContext.prototype = Object.create(SingleExprContext.prototype);
AddExprContext.prototype.constructor = AddExprContext;

CircParser.AddExprContext = AddExprContext;

AddExprContext.prototype.singleExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExprContext);
    } else {
        return this.getTypedRuleContext(SingleExprContext,i);
    }
};

AddExprContext.prototype.Plus = function() {
    return this.getToken(CircParser.Plus, 0);
};

AddExprContext.prototype.Minus = function() {
    return this.getToken(CircParser.Minus, 0);
};
AddExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitAddExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function RelationalExprContext(parser, ctx) {
	SingleExprContext.call(this, parser);
    SingleExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RelationalExprContext.prototype = Object.create(SingleExprContext.prototype);
RelationalExprContext.prototype.constructor = RelationalExprContext;

CircParser.RelationalExprContext = RelationalExprContext;

RelationalExprContext.prototype.singleExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExprContext);
    } else {
        return this.getTypedRuleContext(SingleExprContext,i);
    }
};

RelationalExprContext.prototype.LessThan = function() {
    return this.getToken(CircParser.LessThan, 0);
};

RelationalExprContext.prototype.MoreThan = function() {
    return this.getToken(CircParser.MoreThan, 0);
};

RelationalExprContext.prototype.LessThanEquals = function() {
    return this.getToken(CircParser.LessThanEquals, 0);
};

RelationalExprContext.prototype.GreaterThanEquals = function() {
    return this.getToken(CircParser.GreaterThanEquals, 0);
};
RelationalExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitRelationalExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MemberIndexExprContext(parser, ctx) {
	SingleExprContext.call(this, parser);
    SingleExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MemberIndexExprContext.prototype = Object.create(SingleExprContext.prototype);
MemberIndexExprContext.prototype.constructor = MemberIndexExprContext;

CircParser.MemberIndexExprContext = MemberIndexExprContext;

MemberIndexExprContext.prototype.singleExpr = function() {
    return this.getTypedRuleContext(SingleExprContext,0);
};

MemberIndexExprContext.prototype.OpenBracket = function() {
    return this.getToken(CircParser.OpenBracket, 0);
};

MemberIndexExprContext.prototype.exprSequence = function() {
    return this.getTypedRuleContext(ExprSequenceContext,0);
};

MemberIndexExprContext.prototype.CloseBracket = function() {
    return this.getToken(CircParser.CloseBracket, 0);
};
MemberIndexExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitMemberIndexExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AssignExprContext(parser, ctx) {
	SingleExprContext.call(this, parser);
    SingleExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssignExprContext.prototype = Object.create(SingleExprContext.prototype);
AssignExprContext.prototype.constructor = AssignExprContext;

CircParser.AssignExprContext = AssignExprContext;

AssignExprContext.prototype.singleExpr = function() {
    return this.getTypedRuleContext(SingleExprContext,0);
};

AssignExprContext.prototype.Assign = function() {
    return this.getToken(CircParser.Assign, 0);
};

AssignExprContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};
AssignExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitAssignExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IllegalReservedWordFunCallExprContext(parser, ctx) {
	SingleExprContext.call(this, parser);
    SingleExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IllegalReservedWordFunCallExprContext.prototype = Object.create(SingleExprContext.prototype);
IllegalReservedWordFunCallExprContext.prototype.constructor = IllegalReservedWordFunCallExprContext;

CircParser.IllegalReservedWordFunCallExprContext = IllegalReservedWordFunCallExprContext;

IllegalReservedWordFunCallExprContext.prototype.reservedWord = function() {
    return this.getTypedRuleContext(ReservedWordContext,0);
};

IllegalReservedWordFunCallExprContext.prototype.arguments = function() {
    return this.getTypedRuleContext(ArgumentsContext,0);
};
IllegalReservedWordFunCallExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitIllegalReservedWordFunCallExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EqualityExprContext(parser, ctx) {
	SingleExprContext.call(this, parser);
    SingleExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EqualityExprContext.prototype = Object.create(SingleExprContext.prototype);
EqualityExprContext.prototype.constructor = EqualityExprContext;

CircParser.EqualityExprContext = EqualityExprContext;

EqualityExprContext.prototype.singleExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExprContext);
    } else {
        return this.getTypedRuleContext(SingleExprContext,i);
    }
};

EqualityExprContext.prototype.Equals = function() {
    return this.getToken(CircParser.Equals, 0);
};

EqualityExprContext.prototype.NotEquals = function() {
    return this.getToken(CircParser.NotEquals, 0);
};
EqualityExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitEqualityExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MemberDotExprContext(parser, ctx) {
	SingleExprContext.call(this, parser);
    SingleExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MemberDotExprContext.prototype = Object.create(SingleExprContext.prototype);
MemberDotExprContext.prototype.constructor = MemberDotExprContext;

CircParser.MemberDotExprContext = MemberDotExprContext;

MemberDotExprContext.prototype.singleExpr = function() {
    return this.getTypedRuleContext(SingleExprContext,0);
};

MemberDotExprContext.prototype.Dot = function() {
    return this.getToken(CircParser.Dot, 0);
};

MemberDotExprContext.prototype.Identifier = function() {
    return this.getToken(CircParser.Identifier, 0);
};
MemberDotExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitMemberDotExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IdentifierExprContext(parser, ctx) {
	SingleExprContext.call(this, parser);
    SingleExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdentifierExprContext.prototype = Object.create(SingleExprContext.prototype);
IdentifierExprContext.prototype.constructor = IdentifierExprContext;

CircParser.IdentifierExprContext = IdentifierExprContext;

IdentifierExprContext.prototype.Identifier = function() {
    return this.getToken(CircParser.Identifier, 0);
};
IdentifierExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitIdentifierExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ArrayLiteralExprContext(parser, ctx) {
	SingleExprContext.call(this, parser);
    SingleExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArrayLiteralExprContext.prototype = Object.create(SingleExprContext.prototype);
ArrayLiteralExprContext.prototype.constructor = ArrayLiteralExprContext;

CircParser.ArrayLiteralExprContext = ArrayLiteralExprContext;

ArrayLiteralExprContext.prototype.arrayLiteral = function() {
    return this.getTypedRuleContext(ArrayLiteralContext,0);
};
ArrayLiteralExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitArrayLiteralExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FunCallExprContext(parser, ctx) {
	SingleExprContext.call(this, parser);
    SingleExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FunCallExprContext.prototype = Object.create(SingleExprContext.prototype);
FunCallExprContext.prototype.constructor = FunCallExprContext;

CircParser.FunCallExprContext = FunCallExprContext;

FunCallExprContext.prototype.singleExpr = function() {
    return this.getTypedRuleContext(SingleExprContext,0);
};

FunCallExprContext.prototype.arguments = function() {
    return this.getTypedRuleContext(ArgumentsContext,0);
};
FunCallExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitFunCallExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LiteralExprContext(parser, ctx) {
	SingleExprContext.call(this, parser);
    SingleExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LiteralExprContext.prototype = Object.create(SingleExprContext.prototype);
LiteralExprContext.prototype.constructor = LiteralExprContext;

CircParser.LiteralExprContext = LiteralExprContext;

LiteralExprContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};
LiteralExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitLiteralExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ParenExprContext(parser, ctx) {
	SingleExprContext.call(this, parser);
    SingleExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParenExprContext.prototype = Object.create(SingleExprContext.prototype);
ParenExprContext.prototype.constructor = ParenExprContext;

CircParser.ParenExprContext = ParenExprContext;

ParenExprContext.prototype.OpenParen = function() {
    return this.getToken(CircParser.OpenParen, 0);
};

ParenExprContext.prototype.exprSequence = function() {
    return this.getTypedRuleContext(ExprSequenceContext,0);
};

ParenExprContext.prototype.CloseParen = function() {
    return this.getToken(CircParser.CloseParen, 0);
};
ParenExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitParenExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FunExprContext(parser, ctx) {
	SingleExprContext.call(this, parser);
    SingleExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FunExprContext.prototype = Object.create(SingleExprContext.prototype);
FunExprContext.prototype.constructor = FunExprContext;

CircParser.FunExprContext = FunExprContext;

FunExprContext.prototype.Fun = function() {
    return this.getToken(CircParser.Fun, 0);
};

FunExprContext.prototype.OpenParen = function() {
    return this.getToken(CircParser.OpenParen, 0);
};

FunExprContext.prototype.CloseParen = function() {
    return this.getToken(CircParser.CloseParen, 0);
};

FunExprContext.prototype.OpenBrace = function() {
    return this.getToken(CircParser.OpenBrace, 0);
};

FunExprContext.prototype.functionBody = function() {
    return this.getTypedRuleContext(FunctionBodyContext,0);
};

FunExprContext.prototype.CloseBrace = function() {
    return this.getToken(CircParser.CloseBrace, 0);
};

FunExprContext.prototype.Identifier = function() {
    return this.getToken(CircParser.Identifier, 0);
};

FunExprContext.prototype.formalParameterList = function() {
    return this.getTypedRuleContext(FormalParameterListContext,0);
};
FunExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitFunExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IllegalLiteralFunCallExprContext(parser, ctx) {
	SingleExprContext.call(this, parser);
    SingleExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IllegalLiteralFunCallExprContext.prototype = Object.create(SingleExprContext.prototype);
IllegalLiteralFunCallExprContext.prototype.constructor = IllegalLiteralFunCallExprContext;

CircParser.IllegalLiteralFunCallExprContext = IllegalLiteralFunCallExprContext;

IllegalLiteralFunCallExprContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

IllegalLiteralFunCallExprContext.prototype.arguments = function() {
    return this.getTypedRuleContext(ArgumentsContext,0);
};
IllegalLiteralFunCallExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitIllegalLiteralFunCallExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CircParser.prototype.singleExpr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new SingleExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 18;
    this.enterRecursionRule(localctx, 18, CircParser.RULE_singleExpr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 163;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        switch(la_) {
        case 1:
            localctx = new FunExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 118;
            this.match(CircParser.Fun);
            this.state = 120;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===CircParser.Identifier) {
                this.state = 119;
                this.match(CircParser.Identifier);
            }

            this.state = 122;
            this.match(CircParser.OpenParen);
            this.state = 124;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===CircParser.Identifier) {
                this.state = 123;
                this.formalParameterList();
            }

            this.state = 126;
            this.match(CircParser.CloseParen);
            this.state = 127;
            this.match(CircParser.OpenBrace);
            this.state = 128;
            this.functionBody();
            this.state = 129;
            this.match(CircParser.CloseBrace);
            break;

        case 2:
            localctx = new IllegalReservedWordFunCallExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 131;
            this.reservedWord();
             this.notifyErrorListeners("FunCall: Can not use reserved word as identifier") 
            this.state = 133;
            this.arguments();
            break;

        case 3:
            localctx = new IllegalLiteralFunCallExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 135;
            this.literal();
             this.notifyErrorListeners("FunCall: Can not use literal as identifier") 
            this.state = 137;
            this.arguments();
            break;

        case 4:
            localctx = new IllegalReservedWordAssignExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 139;
            this.reservedWord();
             this.notifyErrorListeners("Assignment: Can not use reserved word as identifier") 
            this.state = 141;
            this.match(CircParser.Assign);
            this.state = 142;
            this.statement();
            break;

        case 5:
            localctx = new IllegalLiteralAssignExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 144;
            this.literal();
             this.notifyErrorListeners("Assignment: Can not use literal as identifier") 
            this.state = 146;
            this.match(CircParser.Assign);
            this.state = 147;
            this.statement();
            break;

        case 6:
            localctx = new LambdaExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 151;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case CircParser.Identifier:
                this.state = 149;
                this.match(CircParser.Identifier);
                break;
            case CircParser.OpenParen:
                this.state = 150;
                this.arguments();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 153;
            this.match(CircParser.LambdaConnect);
            this.state = 154;
            this.statement();
            break;

        case 7:
            localctx = new ParenExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 155;
            this.match(CircParser.OpenParen);
            this.state = 156;
            this.exprSequence();
            this.state = 157;
            this.match(CircParser.CloseParen);
            break;

        case 8:
            localctx = new IdentifierExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 159;
            this.match(CircParser.Identifier);
            break;

        case 9:
            localctx = new LiteralExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 160;
            this.literal();
            break;

        case 10:
            localctx = new ArrayLiteralExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 161;
            this.arrayLiteral();
            break;

        case 11:
            localctx = new ObjectLiteralExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 162;
            this.objectLiteral();
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 192;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 190;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new MultiplyExprContext(this, new SingleExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CircParser.RULE_singleExpr);
                    this.state = 165;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 166;
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CircParser.Multiply) | (1 << CircParser.Divide) | (1 << CircParser.Modulus))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 167;
                    this.singleExpr(14);
                    break;

                case 2:
                    localctx = new AddExprContext(this, new SingleExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CircParser.RULE_singleExpr);
                    this.state = 168;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 169;
                    _la = this._input.LA(1);
                    if(!(_la===CircParser.Plus || _la===CircParser.Minus)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 170;
                    this.singleExpr(13);
                    break;

                case 3:
                    localctx = new RelationalExprContext(this, new SingleExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CircParser.RULE_singleExpr);
                    this.state = 171;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 172;
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CircParser.LessThan) | (1 << CircParser.MoreThan) | (1 << CircParser.LessThanEquals) | (1 << CircParser.GreaterThanEquals))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 173;
                    this.singleExpr(12);
                    break;

                case 4:
                    localctx = new EqualityExprContext(this, new SingleExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CircParser.RULE_singleExpr);
                    this.state = 174;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 175;
                    _la = this._input.LA(1);
                    if(!(_la===CircParser.Equals || _la===CircParser.NotEquals)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 176;
                    this.singleExpr(11);
                    break;

                case 5:
                    localctx = new MemberIndexExprContext(this, new SingleExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CircParser.RULE_singleExpr);
                    this.state = 177;
                    if (!( this.precpred(this._ctx, 18))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
                    }
                    this.state = 178;
                    this.match(CircParser.OpenBracket);
                    this.state = 179;
                    this.exprSequence();
                    this.state = 180;
                    this.match(CircParser.CloseBracket);
                    break;

                case 6:
                    localctx = new MemberDotExprContext(this, new SingleExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CircParser.RULE_singleExpr);
                    this.state = 182;
                    if (!( this.precpred(this._ctx, 17))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
                    }
                    this.state = 183;
                    this.match(CircParser.Dot);
                    this.state = 184;
                    this.match(CircParser.Identifier);
                    break;

                case 7:
                    localctx = new FunCallExprContext(this, new SingleExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CircParser.RULE_singleExpr);
                    this.state = 185;
                    if (!( this.precpred(this._ctx, 16))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
                    }
                    this.state = 186;
                    this.arguments();
                    break;

                case 8:
                    localctx = new AssignExprContext(this, new SingleExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CircParser.RULE_singleExpr);
                    this.state = 187;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 188;
                    this.match(CircParser.Assign);
                    this.state = 189;
                    this.statement();
                    break;

                } 
            }
            this.state = 194;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function ArgumentsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CircParser.RULE_arguments;
    return this;
}

ArgumentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentsContext.prototype.constructor = ArgumentsContext;

ArgumentsContext.prototype.OpenParen = function() {
    return this.getToken(CircParser.OpenParen, 0);
};

ArgumentsContext.prototype.CloseParen = function() {
    return this.getToken(CircParser.CloseParen, 0);
};

ArgumentsContext.prototype.argumentList = function() {
    return this.getTypedRuleContext(ArgumentListContext,0);
};

ArgumentsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitArguments(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CircParser.ArgumentsContext = ArgumentsContext;

CircParser.prototype.arguments = function() {

    var localctx = new ArgumentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, CircParser.RULE_arguments);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 195;
        this.match(CircParser.OpenParen);
        this.state = 197;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CircParser.Let) | (1 << CircParser.If) | (1 << CircParser.Then) | (1 << CircParser.Else) | (1 << CircParser.Fun) | (1 << CircParser.For) | (1 << CircParser.In) | (1 << CircParser.OpenBrace) | (1 << CircParser.OpenBracket) | (1 << CircParser.OpenParen))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (CircParser.NullLiteral - 32)) | (1 << (CircParser.BooleanLiteral - 32)) | (1 << (CircParser.IntegerLiteral - 32)) | (1 << (CircParser.HexIntegerLiteral - 32)) | (1 << (CircParser.RealLiteral - 32)) | (1 << (CircParser.Identifier - 32)) | (1 << (CircParser.StringLiteral - 32)))) !== 0)) {
            this.state = 196;
            this.argumentList();
        }

        this.state = 199;
        this.match(CircParser.CloseParen);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArgumentListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CircParser.RULE_argumentList;
    return this;
}

ArgumentListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentListContext.prototype.constructor = ArgumentListContext;

ArgumentListContext.prototype.singleExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExprContext);
    } else {
        return this.getTypedRuleContext(SingleExprContext,i);
    }
};

ArgumentListContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CircParser.Comma);
    } else {
        return this.getToken(CircParser.Comma, i);
    }
};


ArgumentListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitArgumentList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CircParser.ArgumentListContext = ArgumentListContext;

CircParser.prototype.argumentList = function() {

    var localctx = new ArgumentListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, CircParser.RULE_argumentList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 201;
        this.singleExpr(0);
        this.state = 206;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===CircParser.Comma) {
            this.state = 202;
            this.match(CircParser.Comma);
            this.state = 203;
            this.singleExpr(0);
            this.state = 208;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprSequenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CircParser.RULE_exprSequence;
    return this;
}

ExprSequenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprSequenceContext.prototype.constructor = ExprSequenceContext;

ExprSequenceContext.prototype.singleExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExprContext);
    } else {
        return this.getTypedRuleContext(SingleExprContext,i);
    }
};

ExprSequenceContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CircParser.Comma);
    } else {
        return this.getToken(CircParser.Comma, i);
    }
};


ExprSequenceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitExprSequence(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CircParser.ExprSequenceContext = ExprSequenceContext;

CircParser.prototype.exprSequence = function() {

    var localctx = new ExprSequenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, CircParser.RULE_exprSequence);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 209;
        this.singleExpr(0);
        this.state = 214;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 210;
                this.match(CircParser.Comma);
                this.state = 211;
                this.singleExpr(0); 
            }
            this.state = 216;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CircParser.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;

LiteralContext.prototype.NullLiteral = function() {
    return this.getToken(CircParser.NullLiteral, 0);
};

LiteralContext.prototype.BooleanLiteral = function() {
    return this.getToken(CircParser.BooleanLiteral, 0);
};

LiteralContext.prototype.StringLiteral = function() {
    return this.getToken(CircParser.StringLiteral, 0);
};

LiteralContext.prototype.numericLiteral = function() {
    return this.getTypedRuleContext(NumericLiteralContext,0);
};

LiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CircParser.LiteralContext = LiteralContext;

CircParser.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, CircParser.RULE_literal);
    var _la = 0; // Token type
    try {
        this.state = 219;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CircParser.NullLiteral:
        case CircParser.BooleanLiteral:
        case CircParser.StringLiteral:
            this.enterOuterAlt(localctx, 1);
            this.state = 217;
            _la = this._input.LA(1);
            if(!(((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (CircParser.NullLiteral - 32)) | (1 << (CircParser.BooleanLiteral - 32)) | (1 << (CircParser.StringLiteral - 32)))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;
        case CircParser.IntegerLiteral:
        case CircParser.HexIntegerLiteral:
        case CircParser.RealLiteral:
            this.enterOuterAlt(localctx, 2);
            this.state = 218;
            this.numericLiteral();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NumericLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CircParser.RULE_numericLiteral;
    return this;
}

NumericLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumericLiteralContext.prototype.constructor = NumericLiteralContext;

NumericLiteralContext.prototype.IntegerLiteral = function() {
    return this.getToken(CircParser.IntegerLiteral, 0);
};

NumericLiteralContext.prototype.HexIntegerLiteral = function() {
    return this.getToken(CircParser.HexIntegerLiteral, 0);
};

NumericLiteralContext.prototype.RealLiteral = function() {
    return this.getToken(CircParser.RealLiteral, 0);
};

NumericLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitNumericLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CircParser.NumericLiteralContext = NumericLiteralContext;

CircParser.prototype.numericLiteral = function() {

    var localctx = new NumericLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, CircParser.RULE_numericLiteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 221;
        _la = this._input.LA(1);
        if(!(((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (CircParser.IntegerLiteral - 34)) | (1 << (CircParser.HexIntegerLiteral - 34)) | (1 << (CircParser.RealLiteral - 34)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArrayLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CircParser.RULE_arrayLiteral;
    return this;
}

ArrayLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayLiteralContext.prototype.constructor = ArrayLiteralContext;

ArrayLiteralContext.prototype.OpenBracket = function() {
    return this.getToken(CircParser.OpenBracket, 0);
};

ArrayLiteralContext.prototype.CloseBracket = function() {
    return this.getToken(CircParser.CloseBracket, 0);
};

ArrayLiteralContext.prototype.elementList = function() {
    return this.getTypedRuleContext(ElementListContext,0);
};

ArrayLiteralContext.prototype.Comma = function() {
    return this.getToken(CircParser.Comma, 0);
};

ArrayLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitArrayLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CircParser.ArrayLiteralContext = ArrayLiteralContext;

CircParser.prototype.arrayLiteral = function() {

    var localctx = new ArrayLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, CircParser.RULE_arrayLiteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 223;
        this.match(CircParser.OpenBracket);
        this.state = 225;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CircParser.Let) | (1 << CircParser.If) | (1 << CircParser.Then) | (1 << CircParser.Else) | (1 << CircParser.Fun) | (1 << CircParser.For) | (1 << CircParser.In) | (1 << CircParser.OpenBrace) | (1 << CircParser.OpenBracket) | (1 << CircParser.OpenParen))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (CircParser.NullLiteral - 32)) | (1 << (CircParser.BooleanLiteral - 32)) | (1 << (CircParser.IntegerLiteral - 32)) | (1 << (CircParser.HexIntegerLiteral - 32)) | (1 << (CircParser.RealLiteral - 32)) | (1 << (CircParser.Identifier - 32)) | (1 << (CircParser.StringLiteral - 32)))) !== 0)) {
            this.state = 224;
            this.elementList();
        }

        this.state = 228;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===CircParser.Comma) {
            this.state = 227;
            this.match(CircParser.Comma);
        }

        this.state = 230;
        this.match(CircParser.CloseBracket);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ElementListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CircParser.RULE_elementList;
    return this;
}

ElementListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementListContext.prototype.constructor = ElementListContext;

ElementListContext.prototype.singleExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExprContext);
    } else {
        return this.getTypedRuleContext(SingleExprContext,i);
    }
};

ElementListContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CircParser.Comma);
    } else {
        return this.getToken(CircParser.Comma, i);
    }
};


ElementListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitElementList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CircParser.ElementListContext = ElementListContext;

CircParser.prototype.elementList = function() {

    var localctx = new ElementListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, CircParser.RULE_elementList);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 232;
        this.singleExpr(0);
        this.state = 237;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,22,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 233;
                this.match(CircParser.Comma);
                this.state = 234;
                this.singleExpr(0); 
            }
            this.state = 239;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,22,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ObjectLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CircParser.RULE_objectLiteral;
    return this;
}

ObjectLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjectLiteralContext.prototype.constructor = ObjectLiteralContext;

ObjectLiteralContext.prototype.OpenBrace = function() {
    return this.getToken(CircParser.OpenBrace, 0);
};

ObjectLiteralContext.prototype.CloseBrace = function() {
    return this.getToken(CircParser.CloseBrace, 0);
};

ObjectLiteralContext.prototype.propertyNameAndValueList = function() {
    return this.getTypedRuleContext(PropertyNameAndValueListContext,0);
};

ObjectLiteralContext.prototype.Comma = function() {
    return this.getToken(CircParser.Comma, 0);
};

ObjectLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitObjectLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CircParser.ObjectLiteralContext = ObjectLiteralContext;

CircParser.prototype.objectLiteral = function() {

    var localctx = new ObjectLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, CircParser.RULE_objectLiteral);
    var _la = 0; // Token type
    try {
        this.state = 249;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 240;
            this.match(CircParser.OpenBrace);
            this.state = 241;
            this.match(CircParser.CloseBrace);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 242;
            this.match(CircParser.OpenBrace);
            this.state = 243;
            this.propertyNameAndValueList();
            this.state = 245;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===CircParser.Comma) {
                this.state = 244;
                this.match(CircParser.Comma);
            }

            this.state = 247;
            this.match(CircParser.CloseBrace);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PropertyNameAndValueListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CircParser.RULE_propertyNameAndValueList;
    return this;
}

PropertyNameAndValueListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyNameAndValueListContext.prototype.constructor = PropertyNameAndValueListContext;

PropertyNameAndValueListContext.prototype.propertyAssignment = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PropertyAssignmentContext);
    } else {
        return this.getTypedRuleContext(PropertyAssignmentContext,i);
    }
};

PropertyNameAndValueListContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CircParser.Comma);
    } else {
        return this.getToken(CircParser.Comma, i);
    }
};


PropertyNameAndValueListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitPropertyNameAndValueList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CircParser.PropertyNameAndValueListContext = PropertyNameAndValueListContext;

CircParser.prototype.propertyNameAndValueList = function() {

    var localctx = new PropertyNameAndValueListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, CircParser.RULE_propertyNameAndValueList);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 251;
        this.propertyAssignment();
        this.state = 256;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,25,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 252;
                this.match(CircParser.Comma);
                this.state = 253;
                this.propertyAssignment(); 
            }
            this.state = 258;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,25,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PropertyAssignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CircParser.RULE_propertyAssignment;
    return this;
}

PropertyAssignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyAssignmentContext.prototype.constructor = PropertyAssignmentContext;

PropertyAssignmentContext.prototype.StringLiteral = function() {
    return this.getToken(CircParser.StringLiteral, 0);
};

PropertyAssignmentContext.prototype.Colon = function() {
    return this.getToken(CircParser.Colon, 0);
};

PropertyAssignmentContext.prototype.singleExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExprContext);
    } else {
        return this.getTypedRuleContext(SingleExprContext,i);
    }
};

PropertyAssignmentContext.prototype.OpenBracket = function() {
    return this.getToken(CircParser.OpenBracket, 0);
};

PropertyAssignmentContext.prototype.CloseBracket = function() {
    return this.getToken(CircParser.CloseBracket, 0);
};

PropertyAssignmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitPropertyAssignment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CircParser.PropertyAssignmentContext = PropertyAssignmentContext;

CircParser.prototype.propertyAssignment = function() {

    var localctx = new PropertyAssignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, CircParser.RULE_propertyAssignment);
    try {
        this.state = 268;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CircParser.StringLiteral:
            this.enterOuterAlt(localctx, 1);
            this.state = 259;
            this.match(CircParser.StringLiteral);
            this.state = 260;
            this.match(CircParser.Colon);
            this.state = 261;
            this.singleExpr(0);
            break;
        case CircParser.OpenBracket:
            this.enterOuterAlt(localctx, 2);
            this.state = 262;
            this.match(CircParser.OpenBracket);
            this.state = 263;
            this.singleExpr(0);
            this.state = 264;
            this.match(CircParser.CloseBracket);
            this.state = 265;
            this.match(CircParser.Colon);
            this.state = 266;
            this.singleExpr(0);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EmptyStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CircParser.RULE_emptyStatement;
    return this;
}

EmptyStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EmptyStatementContext.prototype.constructor = EmptyStatementContext;

EmptyStatementContext.prototype.SemiColon = function() {
    return this.getToken(CircParser.SemiColon, 0);
};

EmptyStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitEmptyStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CircParser.EmptyStatementContext = EmptyStatementContext;

CircParser.prototype.emptyStatement = function() {

    var localctx = new EmptyStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, CircParser.RULE_emptyStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 270;
        this.match(CircParser.SemiColon);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EosContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CircParser.RULE_eos;
    return this;
}

EosContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EosContext.prototype.constructor = EosContext;

EosContext.prototype.SemiColon = function() {
    return this.getToken(CircParser.SemiColon, 0);
};

EosContext.prototype.EOF = function() {
    return this.getToken(CircParser.EOF, 0);
};

EosContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitEos(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CircParser.EosContext = EosContext;

CircParser.prototype.eos = function() {

    var localctx = new EosContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, CircParser.RULE_eos);
    try {
        this.state = 275;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 272;
            this.match(CircParser.SemiColon);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 273;
            this.match(CircParser.EOF);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 274;
            if (!(  this.lineTerminatorAhead() || this.here(CircParser.CloseBrace) )) {
                throw new antlr4.error.FailedPredicateException(this, " this.lineTerminatorAhead() || this.here(CircParser.CloseBrace) ");
            }
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FormalParameterListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CircParser.RULE_formalParameterList;
    return this;
}

FormalParameterListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormalParameterListContext.prototype.constructor = FormalParameterListContext;

FormalParameterListContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CircParser.Identifier);
    } else {
        return this.getToken(CircParser.Identifier, i);
    }
};


FormalParameterListContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CircParser.Comma);
    } else {
        return this.getToken(CircParser.Comma, i);
    }
};


FormalParameterListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitFormalParameterList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CircParser.FormalParameterListContext = FormalParameterListContext;

CircParser.prototype.formalParameterList = function() {

    var localctx = new FormalParameterListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, CircParser.RULE_formalParameterList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 277;
        this.match(CircParser.Identifier);
        this.state = 282;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===CircParser.Comma) {
            this.state = 278;
            this.match(CircParser.Comma);
            this.state = 279;
            this.match(CircParser.Identifier);
            this.state = 284;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionBodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CircParser.RULE_functionBody;
    return this;
}

FunctionBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionBodyContext.prototype.constructor = FunctionBodyContext;

FunctionBodyContext.prototype.statementList = function() {
    return this.getTypedRuleContext(StatementListContext,0);
};

FunctionBodyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitFunctionBody(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CircParser.FunctionBodyContext = FunctionBodyContext;

CircParser.prototype.functionBody = function() {

    var localctx = new FunctionBodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, CircParser.RULE_functionBody);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 286;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CircParser.Let) | (1 << CircParser.If) | (1 << CircParser.Then) | (1 << CircParser.Else) | (1 << CircParser.Fun) | (1 << CircParser.For) | (1 << CircParser.In) | (1 << CircParser.OpenBrace) | (1 << CircParser.OpenBracket) | (1 << CircParser.OpenParen) | (1 << CircParser.SemiColon))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (CircParser.NullLiteral - 32)) | (1 << (CircParser.BooleanLiteral - 32)) | (1 << (CircParser.IntegerLiteral - 32)) | (1 << (CircParser.HexIntegerLiteral - 32)) | (1 << (CircParser.RealLiteral - 32)) | (1 << (CircParser.Identifier - 32)) | (1 << (CircParser.StringLiteral - 32)))) !== 0)) {
            this.state = 285;
            this.statementList();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IfStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CircParser.RULE_ifStatement;
    this.thenBody = null; // IfStatementBodyContext
    this.elseBody = null; // IfStatementBodyContext
    return this;
}

IfStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfStatementContext.prototype.constructor = IfStatementContext;

IfStatementContext.prototype.If = function() {
    return this.getToken(CircParser.If, 0);
};

IfStatementContext.prototype.singleExpr = function() {
    return this.getTypedRuleContext(SingleExprContext,0);
};

IfStatementContext.prototype.Then = function() {
    return this.getToken(CircParser.Then, 0);
};

IfStatementContext.prototype.ifStatementBody = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IfStatementBodyContext);
    } else {
        return this.getTypedRuleContext(IfStatementBodyContext,i);
    }
};

IfStatementContext.prototype.Else = function() {
    return this.getToken(CircParser.Else, 0);
};

IfStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitIfStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CircParser.IfStatementContext = IfStatementContext;

CircParser.prototype.ifStatement = function() {

    var localctx = new IfStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, CircParser.RULE_ifStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 288;
        this.match(CircParser.If);
        this.state = 289;
        this.singleExpr(0);
        this.state = 290;
        this.match(CircParser.Then);
        this.state = 291;
        localctx.thenBody = this.ifStatementBody();
        this.state = 294;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
        if(la_===1) {
            this.state = 292;
            this.match(CircParser.Else);
            this.state = 293;
            localctx.elseBody = this.ifStatementBody();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IfStatementBodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CircParser.RULE_ifStatementBody;
    return this;
}

IfStatementBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfStatementBodyContext.prototype.constructor = IfStatementBodyContext;

IfStatementBodyContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

IfStatementBodyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitIfStatementBody(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CircParser.IfStatementBodyContext = IfStatementBodyContext;

CircParser.prototype.ifStatementBody = function() {

    var localctx = new IfStatementBodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, CircParser.RULE_ifStatementBody);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 296;
        this.statement();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CircParser.RULE_exprStatement;
    return this;
}

ExprStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprStatementContext.prototype.constructor = ExprStatementContext;

ExprStatementContext.prototype.exprSequence = function() {
    return this.getTypedRuleContext(ExprSequenceContext,0);
};

ExprStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitExprStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CircParser.ExprStatementContext = ExprStatementContext;

CircParser.prototype.exprStatement = function() {

    var localctx = new ExprStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, CircParser.RULE_exprStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 298;
        this.exprSequence();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ReservedWordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CircParser.RULE_reservedWord;
    return this;
}

ReservedWordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReservedWordContext.prototype.constructor = ReservedWordContext;

ReservedWordContext.prototype.keyword = function() {
    return this.getTypedRuleContext(KeywordContext,0);
};

ReservedWordContext.prototype.NullLiteral = function() {
    return this.getToken(CircParser.NullLiteral, 0);
};

ReservedWordContext.prototype.BooleanLiteral = function() {
    return this.getToken(CircParser.BooleanLiteral, 0);
};

ReservedWordContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitReservedWord(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CircParser.ReservedWordContext = ReservedWordContext;

CircParser.prototype.reservedWord = function() {

    var localctx = new ReservedWordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, CircParser.RULE_reservedWord);
    var _la = 0; // Token type
    try {
        this.state = 302;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CircParser.Let:
        case CircParser.If:
        case CircParser.Then:
        case CircParser.Else:
        case CircParser.Fun:
        case CircParser.For:
        case CircParser.In:
            this.enterOuterAlt(localctx, 1);
            this.state = 300;
            this.keyword();
            break;
        case CircParser.NullLiteral:
        case CircParser.BooleanLiteral:
            this.enterOuterAlt(localctx, 2);
            this.state = 301;
            _la = this._input.LA(1);
            if(!(_la===CircParser.NullLiteral || _la===CircParser.BooleanLiteral)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function KeywordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CircParser.RULE_keyword;
    return this;
}

KeywordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
KeywordContext.prototype.constructor = KeywordContext;

KeywordContext.prototype.Let = function() {
    return this.getToken(CircParser.Let, 0);
};

KeywordContext.prototype.Fun = function() {
    return this.getToken(CircParser.Fun, 0);
};

KeywordContext.prototype.If = function() {
    return this.getToken(CircParser.If, 0);
};

KeywordContext.prototype.Then = function() {
    return this.getToken(CircParser.Then, 0);
};

KeywordContext.prototype.Else = function() {
    return this.getToken(CircParser.Else, 0);
};

KeywordContext.prototype.For = function() {
    return this.getToken(CircParser.For, 0);
};

KeywordContext.prototype.In = function() {
    return this.getToken(CircParser.In, 0);
};

KeywordContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CircParserVisitor ) {
        return visitor.visitKeyword(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CircParser.KeywordContext = KeywordContext;

CircParser.prototype.keyword = function() {

    var localctx = new KeywordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, CircParser.RULE_keyword);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 304;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CircParser.Let) | (1 << CircParser.If) | (1 << CircParser.Then) | (1 << CircParser.Else) | (1 << CircParser.Fun) | (1 << CircParser.For) | (1 << CircParser.In))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


CircParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 9:
			return this.singleExpr_sempred(localctx, predIndex);
	case 21:
			return this.eos_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

CircParser.prototype.singleExpr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 13);
		case 1:
			return this.precpred(this._ctx, 12);
		case 2:
			return this.precpred(this._ctx, 11);
		case 3:
			return this.precpred(this._ctx, 10);
		case 4:
			return this.precpred(this._ctx, 18);
		case 5:
			return this.precpred(this._ctx, 17);
		case 6:
			return this.precpred(this._ctx, 16);
		case 7:
			return this.precpred(this._ctx, 7);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

CircParser.prototype.eos_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 8:
			return  this.lineTerminatorAhead() || this.here(CircParser.CloseBrace) ;
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.CircParser = CircParser;
