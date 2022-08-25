// This is the service worker script, which executes in its own context
// when the extension is installed or refreshed (or when you access its console).
// It would correspond to the background script in chrome extensions v2.

console.log("This prints to the console of the service worker (background script)")

// Importing and using functionality from external files is also possible.
// importScripts('service-worker-utils.js')
// var seltext = null;
 
// chrome.extension.onRequest.addListener(function(request, sender, sendResponse)
// {
//     switch(request.message)
//     {
//         case 'setText':
//             window.seltext = request.data
//         break;
         
//         default:
//             sendResponse({data: 'Invalid arguments'});
//         break;
//     }
// });
 
 
// function savetext(info,tab)
// {
//     var jax = new XMLHttpRequest();
//     jax.open("POST","http://localhost/text/");
//     jax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
//     jax.send("text="+seltext);
//     jax.onreadystatechange = function() { if(jax.readyState==4) { alert(jax.responseText);  }}
// }

// var contexts = ["selection"];
// for (var i = 0; i < contexts.length; i++)
// {
//     var context = contexts[i];
//     chrome.contextMenus.create({"id":"123","title": "Send to Server", "contexts":[context], "onclick": savetext});  
// }

chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        title: "查信源（Find the source）",
        contexts: ["selection","page"],
        id: "title1",
    });
});

function contextClick(info, tab) {
    const { menuItemId } = info
  
    if (menuItemId === 'title1') {
        console.log("查信源 item was clicked");
      // main function: get and send the selected text to the server
    }
  }
chrome.contextMenus.onClicked.addListener(contextClick)

 
// If you want to import a file that is deeper in the file hierarchy of your
// extension, simply do `importScripts('path/to/file.js')`.
// The path should be relative to the file `manifest.json`.
