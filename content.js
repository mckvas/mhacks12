window.onload = function () {
    chrome.tabs.executeScript({file: "initialLoad.js"});
    
    let toggleButton = document.getElementById("toggleButton");
    toggleButton.onclick = function() {
        chrome.tabs.executeScript({file: "toggleImage.js"});
    };
    
};