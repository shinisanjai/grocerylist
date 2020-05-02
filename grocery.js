

function grocery(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if (this.readyState==4 && this.status==200)
        {
            var response = JSON.parse(this.responseText);
            var jgrocery = response.grocery;
            var output ="";
            output +="<table>";


//===============================================================================
            for(i=0;i<jgrocery.length;i++)
            {
                output += "<tr>";
                output +="<td>"+ jgrocery[i].sl +" </td>";
                output +="<td>"+ jgrocery[i].item +" </td>";
                output +="<td>"+ jgrocery[i].qty +" </td>";
                output +="<td>"+ jgrocery[i].unit +" </td>";
                output +="<td>"+ jgrocery[i].dept +" </td>";
                output +="<td>"+ jgrocery[i].notes +" </td>";
            }
          
            document.getElementById("demo").innerHTML=output;
        }}
xhttp.open("GET","grocery.json", true);
xhttp.send();
    
}

