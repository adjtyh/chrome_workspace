/**
 * 
 */
var city = localStorage.city || "北京";
// document.getElementById('city').value = city;
$("#city")[0].value = city;
/*
 * document.getElementById('save').onclick = function(){ localStorage.city =
 * document.getElementById('city').value; alert('保存成功。');
 */
$("#save").click(function() {
	localStorage.city = $("#city")[0].value;
	alert('保存成功。');
});