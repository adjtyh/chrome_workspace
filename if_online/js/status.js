/**
 * 
 */
/*function httpRequest(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            callback(true);
        }
    }
    xhr.onerror = function(){
        callback(false);
    }
    xhr.send();
}

setInterval(function(){
    httpRequest('http://www.google.cn/', function(status){
        chrome.browserAction.setIcon({path: 'images/'+(status?'green.png':'red.png')});
    });
},5000);*/

function checkOnline(){
	$.get("http://www.google.cn/",function(data,status){
		chrome.browserAction.setIcon({path: 'images/'+(status=="success"?'green.png':'red.png')});
	})
}
var index = 0;
//chrome.browserAction.setBadgeBackgroundColor({color: '#0000FF'});
//chrome.browserAction.setBadgeBackgroundColor({color: [0, 255, 0, 128]});
function changeImg(){

	chrome.browserAction.setIcon({path: 'images/'+(index%2==1?'green.png':'red.png')});
	chrome.browserAction.setBadgeText({text: index.toString()});
	index++;
}

var notification = .notifications.create(
	    'images/no_touch.png',
	    'Notification Demo',
	    'Merry Christmas'
	);
notification.show();

setInterval(changeImg,100);



