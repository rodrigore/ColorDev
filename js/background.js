//chrome.tabs.onCreated.addListener(main);
chrome.tabs.onUpdated.addListener(main);

function main(tabId, changeInfo, tab){
    if ( isStackoverflowDomain(tab.url) && isLoadComplete(tab.status) ) {
      loadUserTheme();
      showIcon(tabId);
    }
}

function isStackoverflowDomain(url) {
    if (url.indexOf('http://stackoverflow.com') > -1) {
       return true;
    }
    return false;
}

function isLoadComplete(status){
    if (status === 'complete') {
      return true;
    }
    return false;
}

var loadUserTheme = function() {
    if (localStorage["theme"] && localStorage["theme"] !== "stackoverflow") {
        loadFile( localStorage["theme"] );
    }
};

var loadFile = function (nameFile) {
    chrome.tabs.insertCSS(null, {file: "css/themes/" + nameFile + ".css"});
};

var showIcon = function(tabID) {
    setIcon(tabID);
    chrome.pageAction.show(tabID);
};

var setIcon = function(tabID) {
    chrome.pageAction.setIcon({path: "icons/stack19.png", tabId: tabID});
};