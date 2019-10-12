var imgURL = chrome.extension.getURL('images/judging.png');
var div = document.createElement("DIV");
div.id = "judger";
var img = document.createElement("IMG");
img.src = imgURL;
div.appendChild(img);
document.body.appendChild(div);

    // window.onload = function () {
    //         // your code 
    //         document.getElementById("toggleButton").onclick = function () {
    //             toggleOn()
    //         };
        
    //         function toggleOn() {
    //             var imgURL = chrome.extension.getURL('images/judging.png');
    //             var div = document.createElement("DIV");
    //             div.id = "judger";
    //             var img = document.createElement("IMG");
    //             img.src = imgURL;
    //             div.appendChild(img);
    //             document.body.appendChild(div);
    //         }
    //     };