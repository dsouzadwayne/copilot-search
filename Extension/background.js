chrome.omnibox.onInputEntered.addListener(function(text) {
  chrome.storage.local.set({ 'userInput': text }, function() {
    chrome.tabs.create({ url: 'https://copilot.microsoft.com/' });
  });
});