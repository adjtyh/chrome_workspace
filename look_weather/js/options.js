/**
 * 
 */
// var city = localStorage.city || "北京";
var city="";
chrome.storage.sync.get("city", function(result){
	console.log(result);
	city=result.city;
	$("#city")[0].value = city;
});

// document.getElementById('city').value = city;
/*
 * document.getElementById('save').onclick = function(){ localStorage.city =
 * document.getElementById('city').value; alert('保存成功。');
 */
$("#save").click(function() {
	// localStorage.city = $("#city")[0].value;
	chrome.storage.sync.set({"city":$("#city")[0].value}, function(){
	    // do something
		alert('保存成功。'+$("#city")[0].value);
	});
});
