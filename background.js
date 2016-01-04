(function (){
	chrome.browserAction.onClicked.addListener(function(tab) {  
	  chrome.tabs.executeScript(tab.id, {
		file: "execute.js",
		allFrames: true
	  }, function(arrayOfResults){
		if(arrayOfResults.indexOf(true) == -1){
			alert("Please execute this button in configured page");
		}
	  });
	});
})();