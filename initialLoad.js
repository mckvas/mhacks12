var imgURL = chrome.extension.getURL('images/judging.png');
var div = document.createElement("DIV");
div.id = "judger";
div.class = "moveFront"
var img = document.createElement("IMG");
img.src = imgURL;
img.style.position = 'fixed';
img.style.bottom = '0';
img.style.left = '0';
div.appendChild(img);
document.body.appendChild(div);
div.style.display = "none";