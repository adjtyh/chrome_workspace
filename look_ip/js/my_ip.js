/**
 * 
 */
/*function httpRequest(url, callback){
	var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", url, true);
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4) {
            callback(xmlhttp.responseText);
        }
    }
    xmlhttp.send();
}*/

/*httpRequest('http://1212.ip138.com/ic.asp', function(xmlDoc){
	//var x=xmlDoc.document.getElementsByTagName("center");

	document.getElementById("ip_div").innerHTML=xmlDoc;
	document.getElementById("ip_div").innerHTML=document.getElementsByTagName("center")[0].innerText;
	
});*/

$("#ip_div").load("http://1212.ip138.com/ic.asp center");
//$.get("http://1212.ip138.com/ic.asp",function(data,status){
	//$("#ip_div")[0].innerText=data;
//});