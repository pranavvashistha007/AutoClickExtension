chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.requestFinished) {
      const button = document.evaluate(
        "//button[contains(text(), 'Decline Offer')]",
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      ).singleNodeValue;
  
      if (button) {
        button.click();
      }
    }
  });
  