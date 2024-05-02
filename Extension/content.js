document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.local.get('userInput', function(data) {
      var userInput = data.userInput;
      if (userInput) {
        var textField = document.querySelector('cib-text-input');
        if (textField) {
          var inputElement = textField.shadowRoot.querySelector('textarea');
          if (inputElement) {
            inputElement.value = userInput;
            inputElement.dispatchEvent(new Event('change'));
            inputElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', keyCode: 13, which: 13, bubbles: true }));
          }
        }
        chrome.storage.local.remove('userInput');
      }
    });
  });