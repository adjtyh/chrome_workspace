/**
 * 
 */
var mytime = setInterval(my_clock,1000);
function my_clock(){
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m=m>=10?m:('0'+m);
    s=s>=10?s:('0'+s);
    $("#clock_div")[0].innerText = h+":"+m+":"+s;
    //setTimeout(function(){my_clock(el)}, 1000);
    
}

$("#bt_start").click(function () {
	mytime = setInterval(my_clock,1000);
});
$("#bt_stop").click(function () {
	clearInterval(mytime);
});
//var clock_div = document.getElementById('clock_div');
//var clock_div = $("#clock_div")[0];
