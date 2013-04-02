chrome.tabs.onUpdated.addListener(checkForValidUrl);

function checkForValidUrl(tabId, changeInfo, tab) {
    if (tab.url.indexOf('stackoverflow.com') > -1) {
       loadUserTheme();
       showIcon(tab.id);
   }
}

var loadUserTheme = function() {
    if (localStorage["theme"] && localStorage["theme"] !== "default") {
        loadFile( localStorage["theme"] );
    }
};

var loadFile = function (nameFile) {
    chrome.tabs.insertCSS(null, {file: "css/" + nameFile + ".css"});
};

var showIcon = function(tabID) {
    setIcon(tabID);
    chrome.pageAction.show(tabID);
};

var setIcon = function(tabID) {
    chrome.pageAction.setIcon({path: "icons/stack19.png", tabId: tabID});
};