# click-and-execute-chrome-extension
click and execute javascript code inside browser

## Installation 

* Put the userscript inside

Example : Download autologin.user.js from `https://github.com/dsin/browser-autologin/blob/master/autologin.user.js`

NOTE : If you want to change the userscript filename, change it in manifest.json.

`"web_accessible_resources": ["autologin.user.js"]`

* The script will be run on allowed URI in execute.js.

`ALLOWED_URI : ['whatever.domain/what/ever/path']`