//var urll = "https://p.3.cn/prices/mgets?callback=jQuery9837202&type=1&area=19_1666_36267_36282.137957593&pdtk=&pduid=1488722444273491482144&pdpin=adjtyh&pdbp=0&skuIds=J_3867761";

//function loadXMLDoc()
//{
//	var xmlhttp;
//	if (window.XMLHttpRequest)
//	{
//		//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
//		xmlhttp=new XMLHttpRequest();
//	}
//	else
//	{
//		// IE6, IE5 浏览器执行代码
//		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
//	}
//	xmlhttp.onreadystatechange=function()
//	{
//		if (xmlhttp.readyState==4 && xmlhttp.status==200)
//		{
//			var r =xmlhttp.responseText;
//			console.log(r);
//			
//		}
//	}
//	xmlhttp.open("GET",urll,true);
//	xmlhttp.send();
//}
//loadXMLDoc();
//var r ;
//$.get(urll,function(data,status,xhr){
//	if(status!=""){
//		alert("数据: " + data + "\n状态: " + status);
//	}
//	alert("数据1111: " + data + "\n状态: " + status);
//},"json");
var urll = "https://p.3.cn/prices/mgets?callback=jQuery9837202&type=1&area=19_1666_36267_36282.137957593&pdtk=&pduid=1488722444273491482144&pdpin=adjtyh&pdbp=0&skuIds=J_3867761";

var r = "";
var myInt = setInterval(function() {
	$.ajax({
		url : urll,
		success : function(result, status) {
			r = result.split('"');
			if (r[7] > 10 || r[11] < 10 || r[15] < 10) {
				// 如果价钱小于10，发送点击命令
				chrome.runtime.sendMessage("ok", function(response) {
					document.write(response);
					console.log("发送" + "ok" + "成功!");
				});
			}
		},
		error : function(xhr, status, error) {
			r = xhr;
			alert("失败: " + xhr + "\n状态: " + status);
		},
		dataType : "text"
	});
	var d = new Date();
	if(d.getHours()>10&&d.getMinutes()<5){
		clearInterval(myInt);
	}
}, 100);

// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse)
// {
// if (message == 'start') { // sendResponse('Hello from background.');
// $.ajax({
// url : "https://item.jd.com/3867761.html?cpdad=1DLSUE",
// success : function(result) {
// // $("#div1").html(result);
// var el = document.createElement("div");
// el.innerHTML = result;
// var m1 = el.getElementsByTagName("li")[27];
// var m2 = m1.getElementsByClassName("jBtnArea")[0];
// var m3 = m2.getElementsByTagName("a")[0];
// var m4 = m3.href;
// var msg = m4;
// chrome.runtime.sendMessage(msg, function(response) {
// // document.write(response);
// // $("#div1")[0].innerText=response;
// console.log("s发送" + msg + "成功!");
// });
// }
// });
// }
// if(message == 'stop'){
//		
// chrome.runtime.sendMessage("stop", function(response) {
// // document.write(response);
// // $("#div1")[0].innerText=response;
// console.log("s发送" + "stop" + "成功!");
// });
// }
// });
