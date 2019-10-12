var imgURL = chrome.extension.getURL('pic.jpg');
var div = document.createElement("DIV");
div.id = "someName";
var img = document.createElement("IMG");
img.src = imgURL;
div.appendChild(img);
document.body.appendChild(div);
 