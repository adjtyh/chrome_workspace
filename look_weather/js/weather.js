/**
 * 
 */
/*
 * function httpRequest(url, callback) { var xhr = new XMLHttpRequest();
 * xhr.open("GET", url, true); // xhr.setRequestHeader("dataType","JSONP");
 * xhr.onreadystatechange = function() { if (xhr.readyState == 4) {
 * callback(xhr.responseText); } } xhr.send(); }
 * 
 * function showWeather(result) {
 * 
 * var parser = new DOMParser(); result = parser.parseFromString(result,
 * "text/xml");
 * 
 * var table = '<table><tr><th>日期</th><th>天气</th><th>最低温度</th><th>最高温度</th></tr>';
 *  // var d = new Date(list[i].dt*1000); table += '<tr>'; // table += // '<td>'+d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+'</td>';
 * table += '<td>' +
 * result.getElementsByTagName("savedate_weather")[0].childNodes[0].nodeValue + '</td>'; //
 * table += '<td>'+list[i].weather[0].description+'</td>'; table += '<td>' +
 * result.getElementsByTagName("status1")[0].childNodes[0].nodeValue + '</td>'; //
 * table += '<td>'+Math.round(list[i].temp.min-273.15)+' °C</td>'; table += '<td>' +
 * result.getElementsByTagName("temperature2")[0].childNodes[0].nodeValue + '</td>'; //
 * table += '<td>'+Math.round(list[i].temp.max-273.15)+' °C</td>'; table += '<td>' +
 * result.getElementsByTagName("temperature1")[0].childNodes[0].nodeValue + '</td>';
 * table += '</tr>';
 * 
 * table += '</table>'; document.getElementById('weather').innerHTML = table; }
 *  // var city = localStorage.city; // city = city?city:'北京'; // city =
 * utf2gb(city); //var url = "http://php.weather.sina.com.cn/xml.php?city=" +
 * city //+ "&password=DJOYnieT8234jlsK&day=0"; httpRequest(url, showWeather);
 */

//var city = localStorage.city;
var city="";
chrome.storage.sync.get("city", function(result){
	console.log(result);
	city=result.city;
	city = city ? city : "北京";
	$("h1")[0].innerText=city;
	city = utf2gb(city);
	var url = "http://php.weather.sina.com.cn/xml.php?city=" + city
	+ "&password=DJOYnieT8234jlsK&day=";
	for(var i = 0;i<5;i++){
		$.get(url+i, showWeather);
	}
});



function showWeather(data, status, xhr) {
	if (status == "success") {
		// alert("外部内容加载成功!");
		var parser = new DOMParser();
		data = parser.parseFromString(data, "text/xml");

		var table = "";
		table += '<tr>';
		table += '<td>'
				+ data.getElementsByTagName("savedate_weather")[0].childNodes[0].nodeValue
				+ '</td>';
		table += '<td>'
				+ data.getElementsByTagName("status1")[0].childNodes[0].nodeValue
				+ '</td>';
		table += '<td>'
				+ data.getElementsByTagName("temperature2")[0].childNodes[0].nodeValue
				+ ' °C'+'</td>';
		table += '<td>'
				+ data.getElementsByTagName("temperature1")[0].childNodes[0].nodeValue
				+ ' °C'+'</td>';
		table += '</tr>';

		//document.getElementById('weather').innerHTML = table;
		//$("#weather")[0].innerHTML=table;
		$("#weatherTable").append(table);
	}
	if (status == "error"){
		alert("Error: " + xhr.status + ": " + xhr.statusText);
	}
}
