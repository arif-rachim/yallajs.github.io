function scriptStart(){if("complete"==document.readyState)for(var e=document.getElementsByTagName("script"),t=0;t<e.length;t++){var n=e[t];if(n.getAttribute("src").indexOf("yalla.js")>=0){var r=n.getAttribute("data-main"),a=n.getAttribute("data-base");if(r&&a)return yalla.start(r,document.getElementsByName("body")[0],a),!0;throw new Error("Please specify data-main and data-base in the script tag")}}return!1}function startYalla(){scriptStart()||setTimeout(function(){startYalla()},0)}var yalla=function(){"use strict";function renderChain(e){e.reverse().reduce(function(e,t,n,r){return e.then(function(e){var a=t.split(":"),o=a[0];a.splice(0,1);var i=a.reduce(function(e,t){var n=t.split("=");return e[n[0]]=n[1],e},{});return new Promise(function(t){var a=o.split(".").join("/");yalla.loader(a).then(function(){i.$view=yalla.inject(a),i.$subView=e,i.$elementName=a.split("/").join("."),i.$children=[],i.$store=function(e,t,n){var r=yalla.idom.currentPointer();if(r&&DATA_PROP in r){if(r[DATA_PROP].attrs.element==i.$elementName&&r.$store)return r.$store;if(r.children&&1==r.children.length){var a=r.children[0];if(a[DATA_PROP]&&a[DATA_PROP].attrs.element==i.$elementName&&a.$store)return a.$store}}return i.$storeTobeAttachedToDom=i.$storeTobeAttachedToDom||yalla.createStore(e,t,n),i.$storeTobeAttachedToDom},n==r.length-1&&(yalla.uiRoot=i,yalla.markAsDirty()),t(i)})})})},Promise.resolve(!1))}var mixin=function(e,t){for(var n=Object.keys(t.prototype),r=0;r<n.length;r++)"function"==typeof e?e.prototype[n[r]]=t.prototype[n[r]]:n[r]in e||(e[n[r]]=t.prototype[n[r]]);return e},merge=function(e,t){for(var n in t)t.hasOwnProperty(n)&&e[n]!==t[n]&&(e[n]=t[n]);return e},clone=function(e){var t;if(null==e||"object"!=typeof e)return e;if(e instanceof Date)return t=new Date,t.setTime(e.getTime()),t;if(e instanceof Array){t=[];for(var n=0,r=e.length;r>n;n++)t[n]=clone(e[n]);return t}if(e instanceof Object){t={};for(var a in e)e.hasOwnProperty(a)&&(t[a]=clone(e[a]));return t}throw new Error("Unable to copy obj! Its type isn't supported.")},yalla={};yalla.mixin=mixin,yalla.merge=merge,yalla.clone=clone,yalla.baselib="libs",yalla.globalContext={};var DATA_PROP="$domData";return yalla.loader=function(context){context._promisesToResolve={};var loadScript=function(uri){function pullOutChildren(e){var t=[];if(!e.children)return t;for(var n=0;n<e.children.length;n++){for(var r=e.children[n].attributes,a=0;a<r.length;a++){var o=r[a];"value"==o.name&&t.push(o.value)}t=t.concat(pullOutChildren(e.children[n]))}return t}function lookDependency(e){var t=e.match(/\$inject\(.*?\)/g)||[],n=t.map(function(e){return e.substring('$inject("'.length,e.length-2)});t=e.match(/<injec.*?>/g)||[];var r=document.createElement("div");return r.innerHTML=t.join(""),n=n.concat(pullOutChildren(r))}function generateEvalStringForJS(e,t){var n="";return n=e.indexOf("$render")>0?"(function($inject){\n//"+t+"------------------------------------------------------------\n"+e+";\n//--------------------------------------------------------------------\nreturn $render;})(yalla.inject.bind(yalla));":"(function($inject){\n//"+t+"-------------------------------------------------------------\nvar $export = {};"+e+";\n//--------------------------------------------------------------------\nreturn $export;})(yalla.inject.bind(yalla));"}function removeItemIfItsEmptyString(e){return e.filter(function(e){return e&&""!==e}).map(function(e){return"Array"===e.constructor.name?removeItemIfItsEmptyString(e):e})}function replaceBracket(e){return(e.match(/{.*?}/g)||[]).reduce(function(e,t){var n='"+('+t.substring(1,t.length-1)+')+"';return e.replace(t,n)},e)}function replaceBracketWithExpression(e){return e.map(function(e){if("string"==typeof e)return replaceBracket(e);if("object"==typeof e){if("Array"==e.constructor.name)return replaceBracketWithExpression(e);for(var t in e)e[t]=replaceBracket(e[t]);return e}return e})}function markTagIfItsVariable(e,t){return t.map(function(t,n){return 0==n&&"string"==typeof t&&t in e?"#@"+e[t]+"@#":"object"==typeof t&&"Array"==t.constructor.name?markTagIfItsVariable(e,t):t})}function checkForDataChildrenAndPatchToSibling(e){var t=!1;return e.forEach(function(e){"object"==typeof e&&"Array"!=e.constructor.name&&("data-$children"in e&&(t=!0),delete e["data-$children"]),"object"==typeof e&&"Array"==e.constructor.name&&checkForDataChildrenAndPatchToSibling(e)}),t&&e.push("$props.$children"),e}function checkForForEachAndPatchToSibling(e){var t=!1,n="";return e.forEach(function(e){"object"==typeof e&&"Array"!=e.constructor.name&&"foreach"in e&&(t=!0,n=e.foreach),"object"==typeof e&&"Array"==e.constructor.name&&checkForForEachAndPatchToSibling(e)}),t&&e.push("$foreach:"+n.trim()),e}function checkForStyleAndAppendElementName(e,t){return e.map(function(e,n,r){if(n>0&&"string"==typeof e&&"style"==r[0]){var a=e.match(/\s.*?\{/g);return e=a.reduce(function(e,n,r,a){var o=n.trim();o.indexOf("root")<0&&(o="root "+o);var i='[element="'+t+'"]';o=o.replace("root",i);var l="\n "+o;return e.replace(n,l)},e)}return"object"==typeof e&&"Array"==e.constructor.name?checkForStyleAndAppendElementName(e,t):e})}function updateScriptForChildrenTag(e){var t=e.match(/"\$props\.\$children"/g)||[];return e=t.reduce(function(t,n){var r=t.indexOf(n),a=t.indexOf("]",r),o=e.substring(0,r).lastIndexOf(",");return t=t.substring(0,o)+"].concat($props.$children)"+t.substring(a+1,e.length)},e)}function updateScriptForForeachTag(e){var t=e.match(/"\$foreach:.*?"/g)||[];return e=t.reduce(function(t,n){var r=t.indexOf(n),a=t.indexOf("]",r),o=n.substring(n.indexOf(" in ")+4,n.length-1),i=n.substring('"$foreach:'.length,n.indexOf(" in ")),l=t.substring(0,r).lastIndexOf(","),c=n.substring(n.indexOf(":")+1,n.length-1),u='"foreach": "'+c+'"',s=t.substring(0,r).lastIndexOf(u),f=t.indexOf("[",s),d=t.substring(f,l),p=t.substring(0,f).lastIndexOf(",");return t=t.substring(0,p)+"].concat("+o+".map(function("+i+"){ console.log("+i+");return  "+d+";}))"+t.substring(a+1,e.length),t=t.replace(u,"")},e)}function generateEvalStringForHTML(e,t){e=(e.match(/<.*?\/>/g)||[]).reduce(function(e,t,n,r){var a=t.indexOf(" ");0>a&&(a=t.indexOf("/>"));var o=t.substring(1,a);if("br"==o)return e;var i=t.substring(0,t.length-2)+"></"+o+">";return e.replace(t,i)},e);var n=yalla.jsonMlFromText(e);n=checkForDataChildrenAndPatchToSibling(n),n=checkForForEachAndPatchToSibling(n),n=checkForStyleAndAppendElementName(n,t.replace(/\//g,".").substring(0,t.lastIndexOf(".")));var r=JSON.stringify(n),a=r.match(/\["var".*?}]/g)||[],o=r.match(/\["inject".*?}]/g)||[],i=JSON.parse("["+a.join(",")+"]"),l=JSON.parse("["+o.join(",")+"]"),c=i.reduce(function(e,t){var n=t[1],r=n.value;r=0==r.indexOf("{")?"("+r.substring(1,r.length-1)+")":'"'+replaceBracket(r)+'"',e.text+="var "+n.name+" = "+r+";\n";var a=n.name.replace(/([A-Z]+)/g," $1").trim().replace(/\s/g,"-").toLowerCase();return e.variables[a]=n.name,e},{text:"",variables:{}});c=l.reduce(function(e,t){var n=t[1],r='$inject("'+n.value+'")';e.text+="var "+n.name+" = "+r+";\n";var a=n.name.replace(/([A-Z]+)/g," $1").trim().replace(/\s/g,"-").toLowerCase();return e.variables[a]=n.name,e},c);var u=a.concat(o).reduce(function(e,t){return e.replace(t,'""')},r),s=JSON.parse(u),f=markTagIfItsVariable(c.variables,replaceBracketWithExpression(removeItemIfItsEmptyString(s))),d=JSON.stringify(f,!1,"  ");return d=d.replace(/\\"\+\(/g,'"+(').replace(/\)\+\\"/g,')+"'),d=d.replace(/": ""\+\(/g,'":(').replace(/\)\+""/g,")"),d=d.replace(/"#@/g,"").replace(/@#"/g,""),d=d.replace(/"sub-view"/g,"$props.$subView"),d=updateScriptForChildrenTag(d),d=updateScriptForForeachTag(d),generateEvalStringForJS(c.text+"function $render($props){ return "+d+"; }",t)}function executeScript(responseText,path){var evalString="";return evalString=path.indexOf(".html")>=0?generateEvalStringForHTML(responseText,path):generateEvalStringForJS(responseText,path),eval(evalString)}var path=uri;return 0==path.indexOf("@")?path=path.substr(1,path.length)+".js":path+=".html",new Promise(function(e,t){var n=new XMLHttpRequest;n.open("GET",yalla.baselib+"/"+path),n.onreadystatechange=function(){if(4==n.readyState){var r=lookDependency(n.responseText);if(r.length>0)Promise.all(r.map(function(e){return yalla.loader(e)})).then(function(){e(executeScript(n.responseText,path))})["catch"](function(e){t(e)});else try{e(executeScript(n.responseText,path))}catch(a){t(a)}}},n.send()})};return function(e){if(e in context._promisesToResolve)return context._promisesToResolve[e];var t=new Promise(function(t,n){e in context&&"undefined"!=typeof context[e]?t(context[e]):loadScript(e).then(function(n){context[e]=n,t(n),delete context._promisesToResolve[e]})["catch"](function(t){n(t),delete context._promisesToResolve[e]})});return context._promisesToResolve[e]=t,t}}(yalla.globalContext),yalla.inject=function(e){var t=this.globalContext[e];if("function"==typeof t){var n=t,r=e.replace(/\//g,"."),a=function(t){t=t||{};var a=n(t);if(!a)throw new Error('There is no return in $render function "'+e+'", did you forget the return keyword ?');var o=a[1];return("object"!=typeof o||o.constructor===Array)&&(o={},a.splice(1,0,o)),o.element=r,o.id=t.id,o.$storeTobeAttachedToDom=t.$storeTobeAttachedToDom,a};return a.prototype.elementName=r,a.prototype.path=e,a}return t},yalla.idom=function(){function e(){}function t(e,t){this.attrs=i(),this.attrsArr=[],this.newAttrs=i(),this.staticsApplied=!1,this.key=t,this.keyMap=i(),this.keyMapValid=!0,this.focused=!1,this.nodeName=e,this.text=null}function n(){this.created=p.nodesCreated&&[],this.deleted=p.nodesDeleted&&[]}var r={},a=Object.prototype.hasOwnProperty;e.prototype=Object.create(null);var o=function(e,t){return a.call(e,t)},i=function(){return new e},l=function(e,n,r){var a=new t(n,r);return e[DATA_PROP]=a,a},c=function(e){return u(e),e[DATA_PROP]},u=function(e){if(!e[DATA_PROP]){var t=e instanceof Element,n=t?e.localName:e.nodeName,r=t?e.getAttribute("key"):null,a=l(e,n,r);if(r&&(c(e.parentNode).keyMap[r]=e),t)for(var o=e.attributes,i=a.attrs,s=a.newAttrs,f=a.attrsArr,d=0;d<o.length;d+=1){var p=o[d],h=p.name,m=p.value;i[h]=m,s[h]=void 0,f.push(h),f.push(m)}for(var v=e.firstChild;v;v=v.nextSibling)u(v)}},s=function(e,t){return"svg"===e?"http://www.w3.org/2000/svg":"foreignObject"===c(t).nodeName?null:t.namespaceURI},f=function(e,t,n,r){var a=s(n,t),o=void 0;return o=a?e.createElementNS(a,n):e.createElement(n),l(o,n,r),o},d=function(e){var t=e.createTextNode("");return l(t,"#text",null),t},p={nodesCreated:null,nodesDeleted:null};n.prototype.markCreated=function(e){this.created&&this.created.push(e)},n.prototype.markDeleted=function(e){this.deleted&&this.deleted.push(e)},n.prototype.notifyChanges=function(){this.created&&this.created.length>0&&p.nodesCreated(this.created),this.deleted&&this.deleted.length>0&&p.nodesDeleted(this.deleted)};var h=function(e){return e instanceof Document||e instanceof DocumentFragment},m=function(e,t){for(var n=[],r=e;r!==t;)n.push(r),r=r.parentNode;return n},v=function(e){for(var t=e,n=t;t;)n=t,t=t.parentNode;return n},y=function(e){var t=v(e);return h(t)?t.activeElement:null},g=function(e,t){var n=y(e);return n&&e.contains(n)?m(n,t):[]},b=function(e,t,n){for(var r=t.nextSibling,a=n;a!==t;){var o=a.nextSibling;e.insertBefore(a,r),a=o}},x=null,T=null,A=null,w=null,$=function(e,t){for(var n=0;n<e.length;n+=1)c(e[n]).focused=t},S=function(e){var t=function(t,r,a){var o=x,i=w,l=T,c=A;x=new n,w=t.ownerDocument,A=t.parentNode;var u=g(t,A);$(u,!0);var s=e(t,r,a);return $(u,!1),x.notifyChanges(),x=o,w=i,T=l,A=c,s};return t},O=S(function(e,t,n){return T=e,j(),t(n),F(),e}),k=S(function(e,t,n){var r={nextSibling:e};return T=r,t(n),e!==T&&e.parentNode&&N(A,e,c(A).keyMap),r===T?null:T}),D=function(e,t,n){var r=c(e);return t===r.nodeName&&n==r.key},E=function(e,t){if(!T||!D(T,e,t)){var n=c(A),r=T&&c(T),a=n.keyMap,o=void 0;if(t){var i=a[t];i&&(D(i,e,t)?o=i:i===T?x.markDeleted(i):N(A,i,a))}o||(o="#text"===e?d(w):f(w,A,e,t),t&&(a[t]=o),x.markCreated(o)),c(o).focused?b(A,o,T):r&&r.key&&!r.focused?(A.replaceChild(o,T),n.keyMapValid=!1):A.insertBefore(o,T),T=o}},N=function(e,t,n){e.removeChild(t),x.markDeleted(t);var r=c(t).key;r&&delete n[r]},P=function(){var e=A,t=c(e),n=t.keyMap,r=t.keyMapValid,a=e.lastChild,o=void 0;if(a!==T||!r){for(;a!==T;)N(e,a,n),a=e.lastChild;if(!r){for(o in n)a=n[o],a.parentNode!==e&&(x.markDeleted(a),delete n[o]);t.keyMapValid=!0}}},j=function(){A=T,T=null},C=function(){return T?T.nextSibling:A?A.firstChild:document.getElementsByTagName("body")[0]},I=function(){T=C()},F=function(){P(),T=A,A=A.parentNode},_=function(e,t){return I(),E(e,t),j(),A},R=function(){return F(),T},M=function(){return I(),E("#text",null),T},B=function(){return A},V=function(){return C()},L=function(){T=A.lastChild},J=I,Y={"default":"__default"},H=function(e){return 0===e.lastIndexOf("xml:",0)?"http://www.w3.org/XML/1998/namespace":0===e.lastIndexOf("xlink:",0)?"http://www.w3.org/1999/xlink":void 0},W=function(e,t,n){if(null==n)e.removeAttribute(t);else{var r=H(t);r?e.setAttributeNS(r,t,n):e.setAttribute(t,n)}},U=function(e,t,n){e[t]=n},X=function(e,t,n){t.indexOf("-")>=0?e.setProperty(t,n):e[t]=n},Z=function(e,t,n){if("string"==typeof n)e.style.cssText=n;else{e.style.cssText="";var r=e.style,a=n;for(var i in a)o(a,i)&&X(r,i,a[i])}},q=function(e,t,n){var r=typeof n;"object"===r||"function"===r?U(e,t,n):W(e,t,n)},G=function(e,t,n){var r=c(e),a=r.attrs;if(a[t]!==n){var o=z[t]||z[Y["default"]];o(e,t,n),a[t]=n}},z=i();z[Y["default"]]=q,z.style=Z;var K=3,Q=[],ee=function(e,t,n,r){var a=_(e,t),o=c(a);if(!o.staticsApplied){if(n)for(var i=0;i<n.length;i+=2){var l=n[i],u=n[i+1];G(a,l,u)}o.staticsApplied=!0}for(var s=o.attrsArr,f=o.newAttrs,d=!s.length,p=K,h=0;p<arguments.length;p+=2,h+=2){var m=arguments[p];if(d)s[h]=m,f[m]=void 0;else if(s[h]!==m)break;var u=arguments[p+1];(d||s[h+1]!==u)&&(s[h+1]=u,G(a,m,u))}if(p<arguments.length||h<s.length){for(;p<arguments.length;p+=1,h+=1)s[h]=arguments[p];for(h<s.length&&(s.length=h),p=0;p<s.length;p+=2){var l=s[p],u=s[p+1];f[l]=u}for(var v in f)G(a,v,f[v]),f[v]=void 0}return a},te=function(e,t,n){Q[0]=e,Q[1]=t,Q[2]=n},ne=function(e,t){Q.push(e),Q.push(t)},re=function(){var e=ee.apply(null,Q);return Q.length=0,e},ae=function(e){var t=R();return t},oe=function(e,t,n,r){return ee.apply(null,arguments),ae(e)},ie=function(e,t){var n=M(),r=c(n);if(r.text!==e){r.text=e;for(var a=e,o=1;o<arguments.length;o+=1){var i=arguments[o];a=i(a)}n.data=a}return n};return r.patch=O,r.patchInner=O,r.patchOuter=k,r.currentElement=B,r.currentPointer=V,r.skip=L,r.skipNode=J,r.elementVoid=oe,r.elementOpenStart=te,r.elementOpenEnd=re,r.elementOpen=ee,r.elementClose=ae,r.text=ie,r.attr=ne,r.symbols=Y,r.attributes=z,r.applyAttr=W,r.applyProp=U,r.notifications=p,r.importNode=u,r}(),yalla.toDom=function(){function e(e,t){try{var n=e.split("."),a=n[0].split("#"),o=a[0]||"div",i=a[1],l=n.slice(1).join(" ");return r(o,t),i&&u("id",i),l&&u("class",l),o}catch(c){}}function t(e){for(var t in e)u(t,e[t])}function n(r){var u=r[0];if(u===!1||void 0===u)return void 0;var f=r[1],d=f&&f.constructor===Object,p=d?2:1,h=d&&f.key,m=d&&f.skip,v="function"==typeof u,y="object"==typeof u&&"$view"in u;if(v){if(f=d?f:{},f.$view=u,f.$subView=!1,f.$elementName=u.prototype.elementName,f.$children=r.slice(p,r.length),!u.prototype.elementName)throw new Error("Something wrong elementName does not exist in the "+u);var g=l();g&&g[DATA_PROP].attrs.element==f.$elementName&&(f.$node=f.$node||g),f.$store=function(e,t,n){return f.$node?f.$node.$store:(f.$storeTobeAttachedToDom=yalla.createStore(e,t,n),f.$storeTobeAttachedToDom)};var b=u(f);b=1==b.length?b.push({}):b,"object"==typeof b[1]&&"Array"===b[1].constructor.name&&b.splice(1,0,{});var x=b[1];x.$storeTobeAttachedToDom=f.$storeTobeAttachedToDom,x.$view=f.$view,n(b)}else if(y)n(u.$view(u));else{var T=e(u,h);if(d&&t(f),a(),m)c();else for(var A=p,w=r.length;w>A;A++){var $=r[A];if(null!==$&&void 0!==$)switch($.constructor){case Array:n($);break;case Function:$(i());break;default:s($)}}o(T)}}var r=yalla.idom.elementOpenStart,a=yalla.idom.elementOpenEnd,o=yalla.idom.elementClose,i=yalla.idom.currentElement,l=yalla.idom.currentPointer,c=yalla.idom.skip,u=yalla.idom.attr,s=yalla.idom.text;return n}(),yalla.idom.notifications.nodesCreated=function(e){e.forEach(function(e){var t=e[DATA_PROP].attrs;t.$node=e,t.$storeTobeAttachedToDom&&(e.$store=t.$storeTobeAttachedToDom,e.$store.subscribe(function(){yalla.markAsDirty()}))}),e.slice().reverse().forEach(function(e){e.onload&&e.onload(e)})},yalla.idom.notifications.nodesDeleted=function(e){e.forEach(function(e){delete e[DATA_PROP].attrs.$node,e.onunload&&e.onunload(e)})},yalla.debounce=function(e,t,n){var r;return function(){var a=this,o=arguments,i=function(){r=null,n||e.apply(a,o)},l=n&&!r;clearTimeout(r),r=setTimeout(i,t),l&&e.apply(a,o)}},yalla.markAsDirty=function(){var e=yalla.rootElement,t=yalla.uiRoot.$view,n=yalla.uiRoot,r=[];2===arguments.length?(e=arguments[0],r=arguments[1]):r=t(n),yalla.idom.patch(e,yalla.toDom,r)},yalla.start=function(e,t,n){yalla.baselib=n||yalla.baseLib,yalla.rootElement=t||document.getElementsByTagName("body")[0];var r=window.location.hash.substring(1,window.location.hash.length).split("/");r=r.length>0&&""!=r[0]?r:[e],renderChain(r)},"onhashchange"in window?window.onhashchange=function(){var e=location.hash.substring(1,window.location.hash.length).split("/");renderChain(e)}:alert("Browser not supported"),yalla.createStore=function(e,t,n){function r(){this._subscribers=this._subscribers||[]}var a=n,o=t;return t&&"function"==typeof t&&(a=t,o={}),r.prototype.reducer=e,r.prototype.state=o,r.prototype.dispatch=function(e){if(null==e)throw new Error("You are calling dispatch but did not pass action to it");if(!("type"in e))throw new Error("You are calling dispatch but did not pass type to it");this.reducer&&(this.state=this.reducer(this.state,e),this.updateSubscribers())},r.prototype.updateSubscribers=function(){for(var e=0;e<this._subscribers.length;e++)this._subscribers[e].apply(this)},r.prototype.subscribe=function(e){this._subscribers.push(e)},r.prototype.unSubscribe=function(e){this._subscribers.splice(this._subscribers.indexOf(e),1)},r.prototype.getState=function(){return this.state},new r},yalla.combineReducers=function(e){return function(t,n){var r=yalla.clone(t);for(var a in e)if(e.hasOwnProperty(a)){var o=e[a],i=t[a],l=o(i,n);r[a]=l}return r}},yalla.applyMiddleware=function(e){return function(t){return function(n,r){var a=t(n,r),o=a.dispatch.bind(a),i=(a.getState.bind(a),[]),l={getState:a.getState.bind(a),dispatch:function(e){o(e)}};return i=e.map(function(e){return e(l)}),i.push(a.dispatch.bind(a)),o=i.reduceRight(function(e,t){return t(e)}),a.dispatch=o,a}}},yalla.jsonMlFromText=function(){var e=function(e,n,r){if(e.hasChildNodes()){for(var a=0;a<e.childNodes.length;a++){var o=e.childNodes[a];o=t(o,n),o&&r.push(o)}return!0}return!1},t=function(n,r){if(!n||!n.nodeType)return n=null;var a,o;switch(n.nodeType){case 1:case 9:case 11:o=[n.tagName||""];var i=n.attributes,l={},c=!1;for(a=0;i&&a<i.length;a++)i[a].specified&&("style"===i[a].name?l.style=n.style.cssText||i[a].value:"string"==typeof i[a].value&&(l[i[a].name]=i[a].value),c=!0);c&&o.push(l);var u;switch(o[0].toLowerCase()){case"frame":case"iframe":try{"undefined"!=typeof n.contentDocument?u=n.contentDocument:"undefined"!=typeof n.contentWindow?u=n.contentWindow.document:"undefined"!=typeof n.document&&(u=n.document),u=t(u,r),u&&o.push(u)}catch(s){}break;case"style":if(u=n.styleSheet&&n.styleSheet.cssText,u&&"string"==typeof u)u=u.replace("<!--","").replace("-->",""),o.push(u);else if(n.hasChildNodes())for(a=0;a<n.childNodes.length;a++)u=n.childNodes[a],u=t(u,r),u&&"string"==typeof u&&(u=u.replace("<!--","").replace("-->",""),o.push(u));break;case"input":e(n,r,o),u="password"!==n.type&&n.value,u&&(c||(o.shift(),l={},o.unshift(l),o.unshift(n.tagName||"")),l.value=u);break;case"textarea":e(n,r,o)||(u=n.value||n.innerHTML,u&&"string"==typeof u&&o.push(u));break;default:e(n,r,o)}return"function"==typeof r&&(o=r(o,n)),n=null,o;case 3:case 4:var f=String(n.nodeValue);return n=null,f;case 10:o=["!"];var d=["DOCTYPE",(n.name||"html").toLowerCase()];return n.publicId&&d.push("PUBLIC",'"'+n.publicId+'"'),n.systemId&&d.push('"'+n.systemId+'"'),o.push(d.join(" ")),"function"==typeof r&&(o=r(o,n)),n=null,o;case 8:return 0!==(n.nodeValue||"").indexOf("DOCTYPE")?(n=null,null):(o=["!",n.nodeValue],"function"==typeof r&&(o=r(o,n)),n=null,o);default:return n=null}};return function(e,n){n=n||function(e,t){return e.splice(0,1),[t.localName].concat(e.filter(function(e){return"string"==typeof e?e.trim().length>0:!0}))};var r=document.createElement("div");r.innerHTML=e;var a=t(r,n);return r=null,2===a.length?a[1]:(a[0]="",a)}}(),yalla}();startYalla();