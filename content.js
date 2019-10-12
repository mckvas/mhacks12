var imgURL = chrome.extension.getURL('images/judging.jpg');
var div = document.createElement("DIV");
div.id = "judger";
var img = document.createElement("IMG");
img.src = imgURL;

function toggleOn() {
    div.appendChild(img);
    document.body.appendChild(div);
}
 