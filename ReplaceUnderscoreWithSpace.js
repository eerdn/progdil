<!DOCTYPE html>
<html><script>

function ReplaceUnderscoreWithSpace(string)
{ 
    var i,j,s;  
    var string = prompt("String Değerini Giriniz :","");
    var array = string.split("");

    for (i = 0 ; i <= array.length-1 ; i++) 
    {
          if (array[i] != "_")
	            break;			 
    }
    for (var j = array.length-1 ; j >= 0 ; j--) 
    {
         if (array[j] != "_")
	            break; 
	  }
    for (s = i ; s <= j ; s++)		 
    {
          if (array [s] == "_")   	
	             array[s] = array[s].replace('_',' ');
    }
    document.write(array.join(""));
}

 
</script>
<body>
	<button onclick="ReplaceUnderscoreWithSpace()">Tıklayınız</button>
</body>
</html>
