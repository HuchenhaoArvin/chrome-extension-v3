// This script gets injected into any opened page
// whose URL matches the pattern defined in the manifest
// (see "content_script" key).
// Several foreground scripts can be declared
// and injected into the same or different pages.
function getText(){
    return document.body.innerText
}
function getTitle(){
    return document.title
}

document.addEventListener('mouseup',function(event)
{
    var sel = window.getSelection().toString();
    console.log("Selected text: " + sel);
     
    if(sel.length)
        chrome.extension.sendRequest({'message':'setText','data': sel},function(response){})
})


console.log(getTitle());
console.log(getText());             //Gives you all the text on the page

