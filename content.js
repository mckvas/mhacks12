window.onload = function () {
        let toggleButton = document.getElementById("toggleButton");
        toggleButton.onclick = function() {
            chrome.tabs.executeScript({file: "insertImage.js"});
        };

     
};