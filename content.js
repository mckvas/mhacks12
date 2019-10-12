window.onload = function () {
    chrome.tabs.executeScript({file: "initialLoad.js"});
    
    let toggleButton = document.getElementById("toggleButton");
    toggleButton.onclick = function() {
        chrome.tabs.executeScript({file: "toggleOnOff.js"});
    };

    let hideButton = document.getElementById("hideButton");
        hideButton.onclick = function() {
        chrome.tabs.executeScript({file: "hideDude.js"});
    };

    let showButton = document.getElementById("showButton");
        showButton.onclick = function() {
        chrome.tabs.executeScript({file: "displayDude.js"});
    };

    
    
};