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

var title = getTitle()
var text = getText()

console.log(getTitle());
console.log(getText());             //Gives you all the text on the page


window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    chrome.runtime.sendMessage({'message':title});
  });

document.addEventListener('mouseup',function(event)
{
    var sel = window.getSelection().toString();
    console.log("Selected text: " + sel);
     
    if(sel.length)
        chrome.runtime.sendMessage({'message':sel})
})



// 由于onMessage是一个异步函数，所以要使用chrome.runtime.sendMessage({'message':sel})来发送消息，而不是chrome.runtime.sendMessage(sel)。
// 而且，如果要使用chrome.runtime.sendMessage({'message':sel})，那么必须在background.js中定义onMessage函数，而不是在foreground.js中定义。
// 最重要的是，onMessage不能区分是哪个foreground script发来的消息。
// 所以为了区分是哪个sendMessage发来的消息，可以在send之前给消息加上一个标识，然后在onMessage中根据标识来判断是哪个sendMessage发来的消息。
