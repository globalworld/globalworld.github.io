var _tmr=_tmr||[];
(function(){function n(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)}function t(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)}function J(a){(new Image).src=p(a,!0,!1,!1)+";e="+escape("detect")}function f(){}function K(a){if(a&&!u&&"id"in a&&"type"in a&&("pageView"==a.type||"reachGoal"==a.type||"sendEvent"==a.type))u=a.id}function C(a){return a||"https:"==document.location.protocol?"https:":"http:"}function aa(a){return(a=
!v?void 0:v[a])&&D?a-D:void 0}function p(a,b,c,d){var e="id"in a?a.id:u,f="url"in a?a.url:location.href,h="referrer"in a?a.referrer:document.referrer,k="title"in a?a.title:document.title,g;g=E;null===g&&(g=ba());g=null!==g?g?1:0:null;b=C(r)+"//top-fwz1.mail.ru"+(b?"/tracker":"/counter")+"?js=13"+(e?";id="+escape(e):"")+(f?";u="+escape(f):"")+(h?";r="+escape(h):"")+("start"in a&&0<a.start?";st="+escape(a.start):"")+("gender"in a?";gender="+escape(a.gender):"")+("age"in a?";age="+escape(a.age):"")+
("pid"in a?";pid="+escape(a.pid):"")+("userid"in a?";userid="+escape(a.userid):"")+(d&&k?";title="+encodeURIComponent(k):"")+((F=window.screen)?";s="+F.width+"*"+F.height:"")+";vp=";e=d=0;document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)?(d=document.documentElement.clientWidth,e=document.documentElement.clientHeight):"number"==typeof window.innerWidth&&(d=window.innerWidth,e=window.innerHeight);b=b+(""+d+"*"+e)+";touch="+ca+";hds="+da+";flash="+
G+";sid="+L+";ver="+M;if(c){if(!v||!H)c="";else{c=[];c.push(H.type);c.push(H.redirectCount);c.push(D);for(d=0;d<N.length;d++)c.push(aa(N[d]));c=c.join("/")}c=";nt="+c}else c="";c=b+c+("device"in a?";device="+escape(a.device):"");var l;if("params"in a){b=escape;if(a=a.params)if(d=typeof a,"number"===d||"boolean"===d||"string"===d||a.nodeType||a===a.window)l="";else{e=[];for(l in a)if(a.hasOwnProperty(l)){f=a[l];d=typeof f;if("string"===d)f='"'+f+'"';else if(!("number"===d||"boolean"===d))continue;
e.push('"'+l+'":'+f)}l=!e.length?"":"{"+e.join(",")+"}"}else l="";l=";params="+b(l)}else l="";return c+l+(null!==g?";detect="+g:"")+";_="+Math.random()}function O(a,b){return C(r)+"//top-fwz1.mail.ru/tracker?js=13;id="+a[0]+";e="+escape(b)+";sid="+L+";ids="+a.join()+";ver="+M+";_="+Math.random()}function ea(){if(!P)for(var a=0;a<q.length;a++){var b=q[a];(new Image).src=p(b,!0,!1,!0)+";e="+escape("PVT/15")}}function fa(){E=!0;Q(1);if(!R&&!w){w=!0;for(var a=0;a<q.length;a++)J(q[a])}}function ga(){Q(0);
E=!1}function ba(){var a;a=(a=S.cookie.match(RegExp("(?:^|; )"+T.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)")))?decodeURIComponent(a[1]):null;if(null===a)return null;a=a.split("|");if(2!==a.length)return null;var b=a[1],b=(new Date).getTime()-b;if(0>b||b>U)return null;a=parseInt(a[0],10);return isNaN(a)?null:a}function Q(a){var b=(new Date).getTime(),b=[a,b].join("|"),c=T;a={path:"/",expires:U};var d=a.expires;"number"===typeof a.expires&&(d=new Date,d.setTime(d.getTime()+a.expires));
d&&d.toUTCString&&(d=d.toUTCString());a.expires=d;var b=c+"="+encodeURIComponent(b),e;for(e in a)b+="; "+e,c=a[e],!0!==c&&(b+="="+c);S.cookie=b}function x(){document.addEventListener?(t(document,"DOMContentLoaded",x),_tmr.onready()):document.attachEvent&&"complete"===document.readyState&&(t(document,"readystatechange",x),_tmr.onready())}function V(){t(window,"load",V);_tmr.onready();_tmr.onload()}function y(){t(window,"unload",y);t(window,"beforeunload",y);_tmr.unload()}if("[object Array]"===Object.prototype.toString.call(_tmr)){var k=
window,h=navigator,S=document,F,w=!1,E=null,U=864E5,T="tmr_detect",ha=function(){function a(a,c){var d=document.createElement("div");d.setAttribute("class",String.fromCharCode(97,100,118,98,108,111,99,107,32,97,100,118,101,114,116,98,108,111,99,107,32,97,109,109,98,108,111,99,107,32,98,45,98,97,110,110,101,114,32,98,45,109,101,100,105,97,45,98,97,110,110,101,114,32,112,117,98,95,51,48,48,120,50,53,48,32,112,117,98,95,51,48,48,120,50,53,48,109,32,109,101,100,105,117,109,95,114,101,99,116,97,110,103,
108,101,95,51,48,48,95,50,53,48,32,112,117,98,95,55,50,56,120,57,48,32,108,101,97,100,101,114,98,111,97,114,100,95,55,50,56,95,57,48,32,119,105,100,101,95,115,107,121,115,99,114,97,112,101,114,95,49,54,48,95,54,48,48,32,119,105,100,101,95,115,107,121,115,99,114,97,112,101,114,95,49,54,48,120,54,48,48,32,116,101,120,116,45,97,100,32,116,101,120,116,65,100,32,116,101,120,116,95,97,100,32,116,101,120,116,95,97,100,115,32,116,101,120,116,45,97,100,115,32,116,101,120,116,45,97,100,45,108,105,110,107,115,
32,97,100,95,116,101,120,116,32,97,100,95,116,101,120,116,32,98,97,110,110,101,114,95,116,101,120,116,32,116,101,120,116,45,98,97,110,110,101,114,32,98,45,114,98));d.setAttribute("style","position: absolute !important; top: -9999px !important; left: -9999px !important; width: 1px !important; height: 1px !important;");this.bait=document.body.appendChild(d);this.bait.offsetParent;this.bait.offsetHeight;this.bait.offsetLeft;this.bait.offsetTop;this.bait.offsetWidth;this.bait.clientHeight;this.bait.clientWidth;
this.loopNumber=0;this.fnPositive=a||null;this.fnNegative=c||null;var e=this;setTimeout(function(){e._checkBait.call(e)},1)}a.prototype._checkBait=function(){if(w)this._stop();else{var a=!1;null!==document.body.getAttribute("abp")||null===this.bait.offsetParent||0==this.bait.offsetHeight||0==this.bait.offsetLeft||0==this.bait.offsetTop||0==this.bait.offsetWidth||0==this.bait.clientHeight||0==this.bait.clientWidth?a=!0:void 0!==window.getComputedStyle&&(a=window.getComputedStyle(this.bait,null),a=
"none"==a.getPropertyValue("display")||"hidden"==a.getPropertyValue("visibility"));(!0===a||10<=++this.loopNumber)&&this._stop();if(a&&this.fnPositive)try{this.fnPositive()}catch(c){}else if(!a&&10>this.loopNumber){var d=this;setTimeout(function(){d._checkBait.call(d)},50*this.loopNumber)}else try{this.fnNegative()}catch(e){}}};a.prototype._stop=function(){try{document.body.removeChild(this.bait)}catch(a){}};return function(b,c){new a(b,c)}}(),M=60,z=[],I=0,A=0,L="xxxxxxxxxxxxxxxx".replace(/[x]/g,
function(a){return(16*Math.random()|0).toString(16)}),B=0,u=0,q=[],g=[],m="string"===typeof location.hostname&&(-1!=location.hostname.search(/^odnoklassniki\.ru$/)||-1!=location.hostname.search(/\.odnoklassniki\.ru$/)||-1!=location.hostname.search(/^ok\.ru$/)||-1!=location.hostname.search(/\.ok\.ru$/)),r="string"===typeof location.hostname&&(-1!=location.hostname.search(/^vk\.com$/)||-1!=location.hostname.search(/\.vk\.com$/)),W=m||r,P=m||r,ia=m||r,X=m||r,R=!1,ca="ontouchstart"in k||1<(h.maxTouchPoints||
h.msMaxTouchPoints)?"1":"0",da=window.devicePixelRatio||0,G="";if(h.plugins&&h.plugins["Shockwave Flash"])G=h.plugins["Shockwave Flash"].description.split(" ")[2];else if(window.ActiveXObject)try{var s=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),s=s.GetVariable("$version"),s=s.split(" ")[1].split(","),G=s[0]+"."+s[1]}catch(ja){}var k=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{},v=k.timing||{},H=k.navigation||{},N="unloadEventStart unloadEventEnd redirectStart redirectEnd fetchStart domainLookupStart domainLookupEnd connectStart connectEnd secureConnectionStart requestStart responseStart responseEnd domLoading domInteractive domContentLoadedEventStart domContentLoadedEventEnd domComplete loadEventStart loadEventEnd".split(" "),
D=!v?void 0:v.navigationStart;f.prototype.pageView=function(a){"start"in a&&z.push(a);(new Image).src=p(a,!1,!1,!0);A=(new Date).getTime()};f.prototype.reachGoal=function(a){if("goal"in a&&a.goal){var b="";"value"in a&&a.value&&(b=parseInt(a.value)||"");(new Image).src=p(a,!0,!1,!0)+(";e="+escape("RG:"+b+"/"+a.goal))}};f.prototype.itemView=function(a){if("id"in a||u)(new Image).src=C(0)+"//ad.mail.ru/retarget/?counter="+(a.id||u)+"&list="+(a.list||"")+"&productid="+(a.productid||"")+"&pagetype="+
(a.pagetype||"")+"&totalvalue="+(a.totalvalue||0)+"&_="+Math.random()};f.prototype.sendEvent=function(a){if("category"in a&&a.category&&"action"in a&&a.action){var b=a.category.substr(0,300),c=a.action.substr(0,300),d="";"label"in a&&a.label&&(d=a.label.substr(0,300));var e="";"value"in a&&a.value&&(e=parseInt(a.value)||"");b="CE:"+e+"/"+b.replace(/;/g," ")+";"+c.replace(/;/g," ")+";"+d.replace(/;/g," ");(new Image).src=p(a,!0,!1,!1)+(";e="+escape(b))}};f.prototype.processEvent=function(a){if(a&&
"type"in a&&("pageView"!=a.type||"id"in a)){K(a);var b;if(b=a)if(b="id"in a&&"type"in a)if(b="pageView"==a.type)if(b=5>g.length){b:{for(b=0;b<g.length;b++)if(g[b]===a.id){b=!0;break b}b=!1}b=!b}b&&(g.push(a.id),q.push(a),w&&J(a));switch(a.type){case "pageView":this.pageView(a);break;case "reachGoal":this.reachGoal(a);break;case "itemView":this.itemView(a);break;case "sendEvent":this.sendEvent(a)}}};f.prototype.push=function(a){this.processEvent(a)};var Y=!1;f.prototype.onready=function(){Y||(Y=!0,
!R&&!w&&ha(fa,ga))};var Z=!1;f.prototype.onload=function(){if(!Z){Z=!0;if(!ia&&0<z.length){B=(new Date).getTime();for(var a=0,b;b=z[a];a++)(new Image).src=p(b,!0,!0,!1)+";e="+escape("RT/load")+";et="+B;A=B;z=[]}P||setTimeout(ea,15E3)}};f.prototype.beat=function(){if(!W&&0!=g.length&&I){var a=(new Date).getTime(),b=a-I;if(!(12E4<b)){if(12E4<a-A)for(var c=0;c<q.length;c++){var d=q[c];(new Image).src=p(d,!0,!1,!0)+";e="+escape("RT/resend")+";et="+B+";active="+(b?"1":"0")}else(new Image).src=O(g,"RT/beat");
A=a}}};var $=!1;f.prototype.unload=function(){$||($=!0,!X&&0<g.length&&((new Image).src=O(g,"RT/unload")))};f.prototype.activity=function(a){I=(new Date).getTime()};k=new f;for(h=0;m=_tmr[h];h++)K(m);for(h=0;m=_tmr[h];h++)k.processEvent(m);_tmr=k;if("complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll)_tmr.onready();else document.addEventListener?n(document,"DOMContentLoaded",x):document.attachEvent&&n(document,"readystatechange",x);if("complete"===
document.readyState)_tmr.onload();else n(window,"load",V);X||(n(window,"unload",y),n(window,"beforeunload",y));if(!W&&0<g.length){setInterval(_tmr.beat,3E4);try{k=function(a){function b(a){n(document,a,function(){_tmr.activity(a)})}for(var c=0;c<a.length;c++)b(a[c])},k(["scroll","gesturechange","touchmove"]),k(["mousedown","mousemove","mouseup"]),n(window,"scroll",function(){_tmr.activity("scallback")})}catch(ka){}}}})();
