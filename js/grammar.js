// Generated automatically by nearley, version 2.15.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "main$ebnf$1$subexpression$1", "symbols": ["statement"]},
    {"name": "main$ebnf$1", "symbols": ["main$ebnf$1$subexpression$1"]},
    {"name": "main$ebnf$1$subexpression$2", "symbols": ["statement"]},
    {"name": "main$ebnf$1", "symbols": ["main$ebnf$1", "main$ebnf$1$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "main", "symbols": ["main$ebnf$1"]},
    {"name": "statement", "symbols": ["string11", "english2cypher1number"], "postprocess": 
        function(data) {
        	return {
        		statementNo: 1,
        		english2cypher1number: data[1]
        	};
        }
        },
    {"name": "string11", "symbols": [/[Aa]/, /[Ll]/, /[Ll]/, /[ ]/, /[Tt]/, /[Hh]/, /[Ee]/, /[ ]/, /[Pp]/, /[Ee]/, /[Oo]/, /[Pp]/, /[Ll]/, /[Ee]/, /[ ]/, /[Ii]/, /[Nn]/, /[ ]/, /[Tt]/, /[Hh]/, /[Ee]/, /[ ]/, /[Dd]/, /[Aa]/, /[Tt]/, /[Aa]/, /[Bb]/, /[Aa]/, /[Ss]/, /[Ee]/, /[ ]/, /[Ll]/, /[Ii]/, /[Mm]/, /[Ii]/, /[Tt]/, /[ ]/, /[Tt]/, /[Oo]/, /[ ]/]},
    {"name": "english2cypher1number$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "english2cypher1number$ebnf$1", "symbols": ["english2cypher1number$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "english2cypher1number", "symbols": ["english2cypher1number$ebnf$1"]},
    {"name": "statement", "symbols": ["string21"], "postprocess": 
        function(data) {
        	return {
        		statementNo: 2,
        	};
        }
        },
    {"name": "string21", "symbols": [/[Ll]/, /[Ii]/, /[Ss]/, /[Tt]/, /[ ]/, /[Cc]/, /[Uu]/, /[Ss]/, /[Tt]/, /[Oo]/, /[Mm]/, /[Ee]/, /[Rr]/, /[Ss]/, /[ ]/, /[Aa]/, /[Nn]/, /[Dd]/, /[ ]/, /[Dd]/, /[Ee]/, /[Gg]/, /[Rr]/, /[Aa]/, /[Dd]/, /[Aa]/, /[Tt]/, /[Ii]/, /[Oo]/, /[Nn]/, /[Ss]/]},
    {"name": "statement", "symbols": ["string31", "english2cypher3Customer_ID", "string32"], "postprocess": 
        function(data) {
        	return {
        		statementNo: 3,
        		english2cypher3Customer_ID: data[1]
        	};
        }
        },
    {"name": "string31", "symbols": [/[Ww]/, /[Hh]/, /[Aa]/, /[Tt]/, /[ ]/, /[Vv]/, /[Ee]/, /[Rr]/, /[Ss]/, /[Ii]/, /[Oo]/, /[Nn]/, /[ ]/, /[Ii]/, /[Ss]/, /[ ]/]},
    {"name": "string32", "symbols": [/[??]/]},
    {"name": "english2cypher3Customer_ID$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "english2cypher3Customer_ID$ebnf$1", "symbols": ["english2cypher3Customer_ID$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "english2cypher3Customer_ID", "symbols": ["english2cypher3Customer_ID$ebnf$1"]},
    {"name": "statement", "symbols": ["string41", "english2cypher4Degree", "string42", "english2cypher4Date_One", "string43", "english2cypher4Date", "string44"], "postprocess": 
        function(data) {
        	return {
        		statementNo: 4,
        		english2cypher4Degree: data[1],
        		english2cypher4Date_One: data[3],
        		english2cypher4Date: data[5]
        	};
        }
        },
    {"name": "string41", "symbols": [/[Ww]/, /[Hh]/, /[Aa]/, /[Tt]/, /[ ]/, /[Ii]/, /[Ss]/, /[ ]/, /[Tt]/, /[Hh]/, /[Ee]/, /[ ]/]},
    {"name": "string42", "symbols": [/[ ]/, /[Ff]/, /[Rr]/, /[Ee]/, /[Qq]/, /[Uu]/, /[Ee]/, /[Nn]/, /[Tt]/, /[ ]/, /[Dd]/, /[Ee]/, /[Gg]/, /[Rr]/, /[Aa]/, /[Dd]/, /[Aa]/, /[Tt]/, /[Ii]/, /[Oo]/, /[Nn]/, /[ ]/, /[Ww]/, /[Hh]/, /[Ii]/, /[Cc]/, /[Hh]/, /[ ]/, /[Ww]/, /[Ee]/, /[ ]/, /[Hh]/, /[Aa]/, /[Vv]/, /[Ee]/, /[ ]/, /[Ee]/, /[Xx]/, /[Pp]/, /[Ee]/, /[Rr]/, /[Ii]/, /[Ee]/, /[Nn]/, /[Cc]/, /[Ee]/, /[Dd]/, /[ ]/, /[Bb]/, /[Ee]/, /[Tt]/, /[Ww]/, /[Ee]/, /[Ee]/, /[Nn]/, /[ ]/]},
    {"name": "string43", "symbols": [/[ ]/, /[Aa]/, /[Nn]/, /[Dd]/, /[ ]/]},
    {"name": "string44", "symbols": [/[??]/]},
    {"name": "english2cypher4Degree$ebnf$1", "symbols": [/[a-zA-Z0-9 -.,]/]},
    {"name": "english2cypher4Degree$ebnf$1", "symbols": ["english2cypher4Degree$ebnf$1", /[a-zA-Z0-9 -.,]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "english2cypher4Degree", "symbols": ["english2cypher4Degree$ebnf$1"]},
    {"name": "english2cypher4Date_One$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "english2cypher4Date_One$ebnf$1", "symbols": ["english2cypher4Date_One$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "english2cypher4Date_One", "symbols": ["english2cypher4Date_One$ebnf$1"]},
    {"name": "english2cypher4Date$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "english2cypher4Date$ebnf$1", "symbols": ["english2cypher4Date$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "english2cypher4Date", "symbols": ["english2cypher4Date$ebnf$1"]}
]
  , ParserStart: "main"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
