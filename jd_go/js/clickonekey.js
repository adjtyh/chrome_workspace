//var price="";
//for (var i = 0; i < 5; i++) {
//	setTimeout()
//}
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	if (message == 'ok') { // sendResponse('Hello from background.');
		//接收到ok命令
		console.log("发送" + "ok" + "成功!");
		//持续点击一键购买
		setInterval(function(){$("#btn-onkeybuy")[0].click();},100);
	}

});

if(location.pathname=="/shopping/order/getEasyOrderInfo.action"){
	//持续点击提交订单
	setInterval(function(){$("#order-submit")[0].click();},100);
	
}

