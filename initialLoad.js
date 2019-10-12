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

function hideDude() {
    if (div.style.display !== "none") {
        div.style.display = "none";
    }
}

function displayDude() {
    if (div.style.display === "none") {
        div.style.display = "block";
    }
}

function bother(){
    var img = document.getElementById("judger");
    if (img.style.display === "none") {
        img.style.display = "block";
    }
}

var recurring_bother = window.setInterval(bother, 7000);
window.clearInterval(recurring_bother);
var bother_on = false;
