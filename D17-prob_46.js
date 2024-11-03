// function domainName(url){
//     console.log(url.match(/(?:https?:\/\/)?(?:www\.)?([^\/\.]+)(?:\.[^\/]+)?/)[1]);
//   }
const domainName = (url) => url.match(/(?:https?:\/\/)?(?:www\.)?([^\/\.]+)(?:\.[^\/]+)?/)[1];

domainName("http://google.com")
domainName("www.xakep.ru")
