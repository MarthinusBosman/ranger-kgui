function englishParser(searchTextBoxId, codeMirrorEditor){
	const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
	var text = document.getElementById(searchTextBoxId).value;
	parser.feed(text);
	var text = document.getElementById(searchTextBoxId).value;
	var code = "";
	var result = parser.results[0][0][0][0];
if(result.statementNo==1){
		code += 'MATCH (a:Person)\n\
RETURN distinct a.name LIMIT '+result.english2cypher1number[0].join("")+'\n\
';
}

if(result.statementNo==2){
		code += 'MATCH (n:Customer) \n\
RETURN n.id AS ID ,n.total_errors_experienced AS Errors\n\
';
}

if(result.statementNo==3){
		code += 'MATCH (a:Customer)-[b:VERSION]-(c)\n\
WHERE a.id = '+result.english2cypher3Customer_ID[0].join("")+'\n\
RETURN c.Name\n\
';
}

if(result.statementNo==4){
		code += 'MATCH  (a:Degradation) \n\
WHERE a.time_start IS NOT NULL\n\
WITH COLLECT(DISTINCT(a.error_code)) AS error_total,a,\n\
apoc.date.parse(a.time_start) AS inny\n\
WITH apoc.date.format(inny,"ms", "dd") AS outy,error_total AS error_total,a AS a\n\
WHERE toString(outy) =~ "^('+result.english2cypher4Date_One[0].join("")+'|$[Date_Two])$" \n\
RETURN a.error_code,COUNT(error_total) AS Total ORDER BY Total "'+result.english2cypher4Degree[0].join("")+'" LIMIT 1\n\
';
}
	codeMirrorEditor.setValue(code);
};
