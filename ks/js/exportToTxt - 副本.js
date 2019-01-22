function clickDownload(aLink)  
    {  
		//var fr = self.frames["frame"];
		//window.fra
		//var title = fr.$(".title")[0];
		var title = $(".title")[0];
		var str = title.innerText+".doc";
		
		str = $.trim(str);
		aLink.download = str;
		//$("#test").attr("download",$(".title")[0].innerHTML+".txt");

		//显示答案
		 $(".spanAnswer").css("display","inline");
		 
         var str = $(".content")[0].innerText+"\n";

         str =  encodeURIComponent(str);  
         aLink.href = "data:text/txt;charset=utf-8,\ufeff"+str; 
		 //aLink.download = $(".title")[0].innerHTML+".txt";
         //aLink.click();  
    }
	
function appendA()
{

//var txt1='<a id="test" onclick="clickDownload(this)" download="download.txt" href="#">download</a>';
//var txt2=$("<p></p>").text("Text.");   
//var txt3=document.createElement("p");  
//txt3.innerHTML="Text.";

//$("#opForm")[0].append(txt1);        

//创建一个新btn
var newA = document.createElement("a");
newA.innerText="download";
newA.onclick = clickDownload(newA);
newA.download = "download.txt";
newA.href="#";

//追加新创建的btn
//var oldopForm = $("#opForm")[0];
var oldopForm = document.getElementsByClassName("title")[0];
//var parentNode = oldopForm.parentNode;
//parentNode.insertBefore(newA,oldopForm);//在原有btn的前面插入新创建的btn；
//parentNode.insertBefore(newA,oldopForm.nextSiblings)//将在原有btn的后面插入新创建的btn，！！！原因是没有insetAfter！！所以用nextSiblings

//div.setAttribute("id", "newDiv");

　　　　//div.innerHTML = "js 动态添加div";
oldopForm.appendChild(newA);
 
}

appendA();