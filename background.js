chrome.webRequest.onCompleted.addListener(
	function(details) {
	  chrome.tabs.sendMessage(details.tabId, { requestFinished: true });
	},
	{ urls: ["<all_urls>"] }
  );
  