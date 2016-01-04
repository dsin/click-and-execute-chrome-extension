var CheckExecution = {
	ALLOWED_URI : ['whatever.domain/what/ever/path'],
	
	getLocation : function(href) {
		var l = document.createElement("a");
		l.href = href;
		return l;
	},
	scriptFromFile : function(file) {
		var script = document.createElement("script");
		script.src = chrome.extension.getURL(file);
		return script;
	},
	scriptFromSource : function(source) {
		var script = document.createElement("script");
		script.textContent = source;
		return script;
	},
	init : function(){		
		var l = this.getLocation(window.location.href);
		var uri = l.hostname + l.pathname;
		if(this.ALLOWED_URI.indexOf(uri) != -1){
			var manifest = chrome.runtime.getManifest();
			var s = this.scriptFromFile(manifest.web_accessible_resources[0]);
			document.head.appendChild(s);
			
			return true;
		} else {
			return false;
		}
	}
}
CheckExecution.init();