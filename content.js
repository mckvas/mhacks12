var imgURL = chrome.extension.getURL('images/judging.jpg');
var div = document.createElement("DIV");
div.id = "judger";
var img = document.createElement("IMG");
img.src = imgURL;
div.appendChild(img);
document.body.appendChild(div);
 