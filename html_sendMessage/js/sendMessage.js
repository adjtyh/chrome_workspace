/**
 * 
 */
chrome.runtime.sendMessage('Hello', function(response){
    //document.write(response);
	$("#div1")[0].innerText=response;
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    if(message == 'h1'){
        //sendResponse('Hello from background.');
    	$("#h1")[0].innerText='H11';
    }
});