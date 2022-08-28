https://stackoverflow.com/questions/67673676/chrome-extension-manifest-v3-how-to-read-the-html-and-text-content-of-a-webpage


https://stackoverflow.com/questions/2626859/chrome-extension-how-to-capture-selected-text-and-send-to-a-web-service

http://vikku.info/programming/chrome-extension/get-selected-text-send-to-web-server-in-chrome-extension-communicate-between-content-script-and-background-page.htm

icons attribution:
<a href="https://www.flaticon.com/free-icons/news" title="news icons">News icons created by Freepik - Flaticon</a>

现在已经可以在后台拿到text，如何发给我的app，如何受到从app返回的信息？如何建立服务器，如何通信？
https://medium.com/@oaishi.faria/connecting-chrome-extension-with-python-backend-912d1d0db26
flask rest api.从chrome extension到python backend的通信方式，而且是chrome extenstion要发一个信息过去，然后获得信息。就跟在notebook里用deepl的api一样。
https://flask-restful.readthedocs.io/en/latest/quickstart.html#a-minimal-api

在service-worker.js里用fatch post，因为需要发出去一个东西，再收回来
https://www.freecodecamp.org/news/how-to-make-api-calls-with-fetch/