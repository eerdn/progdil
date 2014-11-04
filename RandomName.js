<html>
<head><meta charset = "utf-8">  
<title>
JavaScript Test
</title>
</head>
<script language="Javascript">
 
var words =
{
	"TR" :
	{
		"names" :
				[
				 "abajur", 
				 "başak", 
				 "ceylan", 
				 "davul", 
				 "ekmek", 
				 "futbol", 
				 "girdap", 
				 "hattat", 
				 "iğde",
			 	 "kutu",
			         "ok",
				 "piyano",
				 "renk",
				 "sabun",
				 "tüp",
				 "zincir"
				 
				 ],
		 
		"adjectives" : 
				[
				 "ağır", 
				 "bozuk", 
				 "cılız", 
				 "dar", 
				 "eğri", 
				 "fosforlu", 
				 "güzel",
				 "harika", 
				 "iyi",
				 "kirli",
			         "minik",
				 "nazik",
				 "sakar",				 
				 "tembel",
				 "vurdumduymaz",
				 "zalim"			 
				 ]
	},
	"EN" :
	{
		"names" : 
				[
				 "bread", 
                                 "box",
                                 "chain",
                                 "color",
                                 "dart",
                                 "drum", 
                                 "eddy",
                                 "elaeagnus",
                                 "football",
                                 "gazelle", 
                                 "globe",
                                 "soap", 
                                 "spike", 
                                 "penman",
                                 "piano",   
                                 "tube"
				 ],		
		"adjectives" :
				[
				  "brutal",
				  "carefree",
				  "courteous",
				  "clumsy",
				  "curve",
				  "dirty",
				  "great",
  				  "good",                                                                      
				  "heavy",
				  "lazy", 
				  "lean", 
				  "narrow",
				  "phosphoric",
				  "pretty", 
				  "ruined", 
				  "tiny",				 
				 ]
	}
}
 
function Random(maxRange)
{
	return Math.floor((Math.random() * maxRange) + 1);
}
 
function Generator(count, language)
{
	var list = [];
	for (i = 0; i < count; i++)
	{
		randName = Random(words[language]["names"].length - 1);
		randAdjective = Random(words[language]["adjectives"].length - 1);
 
		list.push( words[language]["adjectives"][randAdjective] +" "+words[language]["names"][randName] );
	}
	return list;
}
 
function RandomName(count, language)
{
	var count = prompt("Kac Kelime Uretilecek :","");
	var pairList = Generator(count, language);
	for (i = 0; i < pairList.length; i++)
	{
		document.writeln((i+1) + " : " + pairList[i] + "<br>" );
	}
}
</script>
<body>
<button onclick = "RandomName(0,'TR' )"> Kelimeler </button> 
</body>
</html>
