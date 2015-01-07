<!DOCTYPE html>
<html><script>

function ReplaceUnderscoreWithSpace()
{ 
    var s = prompt("String Değerini Girin :","");
    var a = s.split("");
    
    for (var i = 0 ; i <= a.length-1 ; i++) 
    {
          if (a[i] != "_")
	            break;			 
    }
    for (var j = a.length-1 ; j >= 0 ; j--) 
    {
         if (a[j] != "_")
	            break; 
	  }
    for (k = i ; k <= j ; k++)		 
    {
          if (a[k] == "_")   	
	             a [k] = a[k].replace('_',' ');
    }
    document.write(a.join(""));
}

</script>
<body>
	<button onclick="ReplaceUnderscoreWithSpace()">Tıklayınız</button>
</body>
</html>
