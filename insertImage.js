    console.log("1");
    var img = document.getElementById("judger");
    if (img.style.display === "none") {
        console.log("2");
        img.style.display = "block";
    } else {
        console.log("3");
        img.style.display = "none";
    }



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
