export const homepage = `<html class="lc-cb-container-vi uk-notouch" lang="pt"><head>
<script type="text/javascript" async="" src="https://www.gstatic.com/recaptcha/releases/-wV2EAWEOTlEtZh4vNQtn3H1/recaptcha__en.js"></script><script src="https://js-agent.newrelic.com/nr-1167.min.js"></script><script src="https://connect.facebook.net/en_US/sdk.js?hash=bbc14678f6289bd33888318610e3e992" async="" crossorigin="anonymous"></script><script src="https://apis.google.com/_/scs/apps-static/_/js/k=oz.gapi.en.jw7XZHvcak8.O/m=ratingbadge/rt=j/sv=1/d=1/ed=1/am=wQE/rs=AGLTcCOXtLG11kt9d673FzpjO_GiLUGIQA/cb=gapi.loaded_0" async=""></script><script async="" src="https://connect.facebook.net/en_US/fbevents.js"></script><script id="facebook-jssdk" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&amp;version=v2.11&amp;appId=555333651272722"></script><script async="" src="https://js.datadome.co/tags.js"></script><script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-MQS562"></script><script src="/cdn-cgi/apps/head/zdvena6okxF8D1KoxHwpN1BcyTM.js"></script><script>
    var BASE_URL = 'https://www.pichau.com.br/';
    var require = {
        "baseUrl": "https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR"
    };
</script>
<meta charset="utf-8"><script type="text/javascript">(window.NREUM||(NREUM={})).loader_config={licenseKey:"NRJS-199a4e80efcd30d8013",applicationID:"508691749"};window.NREUM||(NREUM={}),__nr_require=function(e,n,t){function r(t){if(!n[t]){var i=n[t]={exports:{}};e[t][0].call(i.exports,function(n){var i=e[t][1][n];return r(i||n)},i,i.exports)}return n[t].exports}if("function"==typeof __nr_require)return __nr_require;for(var i=0;i<t.length;i++)r(t[i]);return r}({1:[function(e,n,t){function r(){}function i(e,n,t){return function(){return o(e,[u.now()].concat(f(arguments)),n?null:this,t),n?void 0:this}}var o=e("handle"),a=e(4),f=e(5),c=e("ee").get("tracer"),u=e("loader"),s=NREUM;"undefined"==typeof window.newrelic&&(newrelic=s);var p=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],l="api-",d=l+"ixn-";a(p,function(e,n){s[n]=i(l+n,!0,"api")}),s.addPageAction=i(l+"addPageAction",!0),s.setCurrentRouteName=i(l+"routeName",!0),n.exports=newrelic,s.interaction=function(){return(new r).get()};var m=r.prototype={createTracer:function(e,n){var t={},r=this,i="function"==typeof n;return o(d+"tracer",[u.now(),e,t],r),function(){if(c.emit((i?"":"no-")+"fn-start",[u.now(),r,i],t),i)try{return n.apply(this,arguments)}catch(e){throw c.emit("fn-err",[arguments,this,e],t),e}finally{c.emit("fn-end",[u.now()],t)}}}};a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(e,n){m[n]=i(d+n)}),newrelic.noticeError=function(e,n){"string"==typeof e&&(e=new Error(e)),o("err",[e,u.now(),!1,n])}},{}],2:[function(e,n,t){function r(e,n){var t=e.getEntries();t.forEach(function(e){"first-paint"===e.name?c("timing",["fp",Math.floor(e.startTime)]):"first-contentful-paint"===e.name&&c("timing",["fcp",Math.floor(e.startTime)])})}function i(e,n){var t=e.getEntries();t.length>0&&c("lcp",[t[t.length-1]])}function o(e){if(e instanceof s&&!l){var n,t=Math.round(e.timeStamp);n=t>1e12?Date.now()-t:u.now()-t,l=!0,c("timing",["fi",t,{type:e.type,fid:n}])}}if(!("init"in NREUM&&"page_view_timing"in NREUM.init&&"enabled"in NREUM.init.page_view_timing&&NREUM.init.page_view_timing.enabled===!1)){var a,f,c=e("handle"),u=e("loader"),s=NREUM.o.EV;if("PerformanceObserver"in window&&"function"==typeof window.PerformanceObserver){a=new PerformanceObserver(r),f=new PerformanceObserver(i);try{a.observe({entryTypes:["paint"]}),f.observe({entryTypes:["largest-contentful-paint"]})}catch(p){}}if("addEventListener"in document){var l=!1,d=["click","keydown","mousedown","pointerdown","touchstart"];d.forEach(function(e){document.addEventListener(e,o,!1)})}}},{}],3:[function(e,n,t){function r(e,n){if(!i)return!1;if(e!==i)return!1;if(!n)return!0;if(!o)return!1;for(var t=o.split("."),r=n.split("."),a=0;a<r.length;a++)if(r[a]!==t[a])return!1;return!0}var i=null,o=null,a=/Version\/(\S+)\s+Safari/;if(navigator.userAgent){var f=navigator.userAgent,c=f.match(a);c&&f.indexOf("Chrome")===-1&&f.indexOf("Chromium")===-1&&(i="Safari",o=c[1])}n.exports={agent:i,version:o,match:r}},{}],4:[function(e,n,t){function r(e,n){var t=[],r="",o=0;for(r in e)i.call(e,r)&&(t[o]=n(r,e[r]),o+=1);return t}var i=Object.prototype.hasOwnProperty;n.exports=r},{}],5:[function(e,n,t){function r(e,n,t){n||(n=0),"undefined"==typeof t&&(t=e?e.length:0);for(var r=-1,i=t-n||0,o=Array(i<0?0:i);++r<i;)o[r]=e[n+r];return o}n.exports=r},{}],6:[function(e,n,t){n.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(e,n,t){function r(){}function i(e){function n(e){return e&&e instanceof r?e:e?c(e,f,o):o()}function t(t,r,i,o){if(!l.aborted||o){e&&e(t,r,i);for(var a=n(i),f=v(t),c=f.length,u=0;u<c;u++)f[u].apply(a,r);var p=s[y[t]];return p&&p.push([b,t,r,a]),a}}function d(e,n){h[e]=v(e).concat(n)}function m(e,n){var t=h[e];if(t)for(var r=0;r<t.length;r++)t[r]===n&&t.splice(r,1)}function v(e){return h[e]||[]}function g(e){return p[e]=p[e]||i(t)}function w(e,n){u(e,function(e,t){n=n||"feature",y[t]=n,n in s||(s[n]=[])})}var h={},y={},b={on:d,addEventListener:d,removeEventListener:m,emit:t,get:g,listeners:v,context:n,buffer:w,abort:a,aborted:!1};return b}function o(){return new r}function a(){(s.api||s.feature)&&(l.aborted=!0,s=l.backlog={})}var f="nr@context",c=e("gos"),u=e(4),s={},p={},l=n.exports=i();l.backlog=s},{}],gos:[function(e,n,t){function r(e,n,t){if(i.call(e,n))return e[n];var r=t();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,n,{value:r,writable:!0,enumerable:!1}),r}catch(o){}return e[n]=r,r}var i=Object.prototype.hasOwnProperty;n.exports=r},{}],handle:[function(e,n,t){function r(e,n,t,r){i.buffer([e],r),i.emit(e,n,t)}var i=e("ee").get("handle");n.exports=r,r.ee=i},{}],id:[function(e,n,t){function r(e){var n=typeof e;return!e||"object"!==n&&"function"!==n?-1:e===window?0:a(e,o,function(){return i++})}var i=1,o="nr@id",a=e("gos");n.exports=r},{}],loader:[function(e,n,t){function r(){if(!x++){var e=E.info=NREUM.info,n=d.getElementsByTagName("script")[0];if(setTimeout(s.abort,3e4),!(e&&e.licenseKey&&e.applicationID&&n))return s.abort();u(y,function(n,t){e[n]||(e[n]=t)}),c("mark",["onload",a()+E.offset],null,"api");var t=d.createElement("script");t.src="https://"+e.agent,n.parentNode.insertBefore(t,n)}}function i(){"complete"===d.readyState&&o()}function o(){c("mark",["domContent",a()+E.offset],null,"api")}function a(){return O.exists&&performance.now?Math.round(performance.now()):(f=Math.max((new Date).getTime(),f))-E.offset}var f=(new Date).getTime(),c=e("handle"),u=e(4),s=e("ee"),p=e(3),l=window,d=l.document,m="addEventListener",v="attachEvent",g=l.XMLHttpRequest,w=g&&g.prototype;NREUM.o={ST:setTimeout,SI:l.setImmediate,CT:clearTimeout,XHR:g,REQ:l.Request,EV:l.Event,PR:l.Promise,MO:l.MutationObserver};var h=""+location,y={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-1167.min.js"},b=g&&w&&w[m]&&!/CriOS/.test(navigator.userAgent),E=n.exports={offset:f,now:a,origin:h,features:{},xhrWrappable:b,userAgent:p};e(1),e(2),d[m]?(d[m]("DOMContentLoaded",o,!1),l[m]("load",r,!1)):(d[v]("onreadystatechange",i),l[v]("onload",r)),c("mark",["firstbyte",f],null,"api");var x=0,O=e(6)},{}],"wrap-function":[function(e,n,t){function r(e){return!(e&&e instanceof Function&&e.apply&&!e[a])}var i=e("ee"),o=e(5),a="nr@original",f=Object.prototype.hasOwnProperty,c=!1;n.exports=function(e,n){function t(e,n,t,i){function nrWrapper(){var r,a,f,c;try{a=this,r=o(arguments),f="function"==typeof t?t(r,a):t||{}}catch(u){l([u,"",[r,a,i],f])}s(n+"start",[r,a,i],f);try{return c=e.apply(a,r)}catch(p){throw s(n+"err",[r,a,p],f),p}finally{s(n+"end",[r,a,c],f)}}return r(e)?e:(n||(n=""),nrWrapper[a]=e,p(e,nrWrapper),nrWrapper)}function u(e,n,i,o){i||(i="");var a,f,c,u="-"===i.charAt(0);for(c=0;c<n.length;c++)f=n[c],a=e[f],r(a)||(e[f]=t(a,u?f+i:i,o,f))}function s(t,r,i){if(!c||n){var o=c;c=!0;try{e.emit(t,r,i,n)}catch(a){l([a,t,r,i])}c=o}}function p(e,n){if(Object.defineProperty&&Object.keys)try{var t=Object.keys(e);return t.forEach(function(t){Object.defineProperty(n,t,{get:function(){return e[t]},set:function(n){return e[t]=n,n}})}),n}catch(r){l([r])}for(var i in e)f.call(e,i)&&(n[i]=e[i]);return n}function l(n){try{e.emit("internal-error",n)}catch(t){}}return e||(e=i),t.inPlace=u,t.flag=a,t}},{}]},{},["loader"]);</script>
<meta name="description" content="Encontre os melhores Preços aqui na Pichau! Conheça nossa linha de Computadores, Eletrônicos, Celulares, Notebooks, Tablets, Câmeras Digitais e mais.">
<meta name="keywords" content="Pichau">
<meta name="robots" content="INDEX,FOLLOW">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="format-detection" content="telephone=no">
<title>Pichau - Os Melhores Preços do Brasil | Pichau</title>
<link rel="stylesheet" type="text/css" media="all" href="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/calendar.css">
<link rel="stylesheet" type="text/css" media="all" href="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/css/jquery.fancybox.min.css">
<link rel="stylesheet" type="text/css" media="all" href="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/css/styles.css">
<link rel="stylesheet" type="text/css" media="all" href="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Aheadworks_Rbslider/css/rbslider.css">
<link rel="stylesheet" type="text/css" media="all" href="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/MageWorx_SearchSuiteAutocomplete/css/searchsuiteautocomplete.css">
<link rel="stylesheet" type="text/css" media="all" href="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Tigren_Dailydeal/css/dailydeal_sidebar.css">
<link rel="stylesheet" type="text/css" media="all" href="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Amasty_ShopbyBase/css/swiper.min.css">
<link rel="stylesheet" type="text/css" media="all" href="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Amasty_SeoToolKit/css/source/mkcss/amseokit.css">
<link rel="stylesheet" type="text/css" media="all" href="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Amasty_ShopbyBase/css/source/mkcss/am-shopby-base.css">
<link rel="stylesheet" type="text/css" media="all" href="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Amasty_Shopby/css/source/mkcss/am-shopby.css">
<link rel="stylesheet" type="text/css" media="print" href="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/css/print.css">
<script type="text/javascript" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/requirejs/require.js"></script>
<script type="text/javascript" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/requirejs/mixins.js"></script>
<script type="text/javascript" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/requirejs-config.js"></script>
<link rel="icon" type="image/x-icon" href="https://cdn.pichau.com.br/favicon/stores/1/favicon.ico">
<link rel="shortcut icon" type="image/x-icon" href="https://cdn.pichau.com.br/favicon/stores/1/favicon.ico">
<script src="//rum-static.pingdom.net/pa-5d1a3fdc836df3000800003b.js" async=""></script>
<meta name="p:domain_verify" content="59b64a95050e6caad251a84bfac6ca23">
<meta name="google-site-verification" content="KlvLvcT4Yp77EFE4i3jDVM3hRJC7RVa1CxFSri3Cj4A">
<style>
.checkout-cart-index .cart-summary #block-shipping {
  display: none !important;
}
#block-discount {
    float: left !important;
}
.checkout-cart-index .checkout-methods-items li.item,
.checkout-cart-index .title-cart-itens {
    position: relative;
}

.checkout-cart-index .title-cart-itens:after,
.checkout-cart-index .checkout-methods-items li.item:after {
    content: ' ';
    position: absolute;
    top: 0;
    right: 0;
    /* left: 75%; */
    background: rgba(255, 255, 255, .6);
    bottom: 0;
    height: 60px;
    width: 200px;
}

.checkout-cart-index .title-cart-itens.can-buy:after,
.checkout-cart-index .checkout-methods-items li.item.can-buy:after {
    display:none !important;
}

.catalog-product-view .loading-mask {
    display: none !important;
}
</style>
<script defer="">
    require(['jquery'], function ($) {
        window.onload = function () {
            setTimeout(function () {
                 $('.checkout-cart-index .title-cart-itens, .checkout-cart-index .checkout-methods-items li.item').addClass('can-buy');
            }, 5000);
        }
    });
</script>
<script>
        window.getWpCookie = function(name) {
            match = document.cookie.match(new RegExp(name + '=([^;]+)'));
            if (match) return decodeURIComponent(match[1].replace(/\+/g, ' ')) ;
        };

        window.dataLayer = window.dataLayer || [];
                var dlObjects = [{"pageName":"Pichau - Os Melhores Pre\u00e7os do Brasil | Pichau","pageType":"home","google_tag_params":{"ecomm_pagetype":"home"}}];
        for (var i in dlObjects) {
            window.dataLayer.push(dlObjects[i]);
        }
                var wpCookies = ['wp_customerId','wp_customerGroup'];
        wpCookies.map(function(cookieName) {
            var cookieValue = window.getWpCookie(cookieName);
            if (cookieValue) {
                var dlObject = {};
                dlObject[cookieName.replace('wp_', '')] = cookieValue;
                window.dataLayer.push(dlObject);
            }
        });
    </script>

<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MQS562');</script>
<script type="text/javascript" src="//static.criteo.net/js/ld/ld.js" async="true"></script>
<script type="text/javascript">
    (function() {
        var isMobile = false;
        if ("undefined" !== typeof window.navigator && "undefined" !== typeof window.navigator.userAgent) {
            isMobile = ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) );
        }
        window.criteo_q = window.criteo_q || [];
        window.criteo_q.push(
            {event: "setAccount", account: 25087 },
            {event: "setSiteType", type: (isMobile ? "m" : "d")},
            {event: "setEmail", email: ""},
            {event: "viewHome"}
        );
    })();
</script> <link rel="stylesheet" type="text/css" href="https://d36mpcpuzc4ztk.cloudfront.net/css/visitor.css"><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="jquery/jquery.mobile.custom" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/jquery/jquery.mobile.custom.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/dataPost" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/dataPost.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/bootstrap" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/bootstrap.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/translate-inline" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/translate-inline.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Amasty_Shopby/js/amShopbyResponsive" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Amasty_Shopby/js/amShopbyResponsive.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Theme/js/responsive" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Theme/js/responsive.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Theme/js/theme" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Theme/js/theme.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="jquery" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/jquery.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="js/main" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/js/main.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/translate" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/translate.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Mirasvit_SearchAutocomplete/js/autocomplete" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Mirasvit_SearchAutocomplete/js/autocomplete.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Mirasvit_SearchAutocomplete/js/typeahead" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Mirasvit_SearchAutocomplete/js/typeahead.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/template" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/template.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/modal/confirm" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/modal/confirm.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/apply/main" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/apply/main.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/bootstrap" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/bootstrap.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Amasty_Shopby/js/amShopbyTopFilters" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Amasty_Shopby/js/amShopbyTopFilters.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/tabs" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/tabs.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="domReady" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/requirejs/domReady.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/smart-keyboard-handler" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/smart-keyboard-handler.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/mage" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/mage.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/ie-class-fixer" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/ie-class-fixer.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Amasty_Label/js/label" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Amasty_Label/js/label.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="WeltPixel_GoogleTagManager/js/weltpixel_persistentlayer" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/WeltPixel_GoogleTagManager/js/weltpixel_persistentlayer.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="WeltPixel_GoogleTagManager/js/weltpixel_gtm" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/WeltPixel_GoogleTagManager/js/weltpixel_gtm.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Customer/js/customer-data" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Customer/js/customer-data.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="jquery/jquery-migrate" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/jquery/jquery-migrate.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/common" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/common.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="tether" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/js/vendor/tether.min.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="jquery/patches/jquery" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/jquery/patches/jquery.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="jquery/jquery.cookie" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/jquery/jquery.cookie.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="jquery/ui" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/jquery/jquery-ui.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="slick" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/js/vendor/slick.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="jquery/patches/jquery-ui" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/jquery/patches/jquery-ui.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="matchMedia" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/matchMedia.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="jquery.mask" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/js/jquery.mask.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="jquery.fancybox" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/js/vendor/jquery.fancybox.min.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="knockoutjs/knockout" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/knockoutjs/knockout.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="underscore" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/underscore.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Catalog/js/price-utils" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Catalog/js/price-utils.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Catalog/js/catalog-add-to-cart" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Catalog/js/catalog-add-to-cart.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/modal/modal" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/modal/modal.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="knockoutjs/knockout-es5" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/knockoutjs/knockout-es5.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/collapsible" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/collapsible.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/apply/scripts" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/apply/scripts.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/template/engine" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/template/engine.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/bindings/bootstrap" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/bindings/bootstrap.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/extender/observable_array" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/extender/observable_array.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/extender/bound-nodes" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/extender/bound-nodes.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/core/storage/local" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/core/storage/local.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/registry/registry" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/registry/registry.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Customer/js/section-config" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Customer/js/section-config.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/storage" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/storage.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="jquery/jquery-storageapi" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/jquery/jquery.storageapi.min.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="bootstrap" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/js/vendor/bootstrap.min.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Catalog/js/product/view/product-ids-resolver" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Catalog/js/product/view/product-ids-resolver.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="text" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/requirejs/text.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/key-codes" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/key-codes.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="knockoutjs/knockout-repeat" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/knockoutjs/knockout-repeat.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="knockoutjs/knockout-fast-foreach" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/knockoutjs/knockout-fast-foreach.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/utils/main" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/utils/main.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/core/events" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/core/events.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/url" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/url.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/utils/wrapper" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/utils/wrapper.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="es6-collections" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/es6-collections.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/template/renderer" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/template/renderer.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/bindings/resizable" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/bindings/resizable.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/bindings/i18n" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/bindings/i18n.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/bindings/scope" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/bindings/scope.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/bindings/range" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/bindings/range.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/bindings/mage-init" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/bindings/mage-init.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Catalog/js/product/view/product-ids" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Catalog/js/product/view/product-ids.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/bindings/keyboard" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/bindings/keyboard.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/bindings/optgroup" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/bindings/optgroup.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/bindings/after-render" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/bindings/after-render.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/bindings/autoselect" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/bindings/autoselect.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/bindings/datepicker" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/bindings/datepicker.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/bindings/outer_click" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/bindings/outer_click.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/bindings/fadeVisible" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/bindings/fadeVisible.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/bindings/collapsible" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/bindings/collapsible.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/bindings/staticChecked" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/bindings/staticChecked.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/bindings/simple-checked" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/bindings/simple-checked.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/bindings/bind-html" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/bindings/bind-html.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/bindings/tooltip" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/bindings/tooltip.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/template/observable_source" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/template/observable_source.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/logger/console-logger" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/logger/console-logger.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/utils/arrays" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/utils/arrays.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/utils/compare" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/utils/compare.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/utils/misc" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/utils/misc.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/view/utils/async" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/view/utils/async.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/calendar" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/calendar.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/core/class" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/core/class.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/utils/objects" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/utils/objects.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="FormData" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/FormData.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="jquery/jquery-ui-timepicker-addon" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/jquery/jquery-ui-timepicker-addon.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/utils/strings" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/utils/strings.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/utils/template" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/utils/template.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/template/loader" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/template/loader.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="moment" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/moment.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/logger/logger" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/logger/logger.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/logger/entry-factory" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/logger/entry-factory.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/logger/console-output-handler" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/logger/console-output-handler.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/logger/formatter" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/logger/formatter.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/logger/message-pool" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/logger/message-pool.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/logger/levels-pool" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/logger/levels-pool.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/logger/logger-utils" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/logger/logger-utils.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/view/utils/dom-observer" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/view/utils/dom-observer.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/view/utils/bindings" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/view/utils/bindings.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/logger/entry" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/logger/entry.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="MutationObserver" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/MutationObserver.js"></script><style type="text/css">.fb_hidden{position:absolute;top:-10000px;z-index:10001}.fb_reposition{overflow:hidden;position:relative}.fb_invisible{display:none}.fb_reset{background:none;border:0;border-spacing:0;color:#000;cursor:auto;direction:ltr;font-family:"lucida grande", tahoma, verdana, arial, sans-serif;font-size:11px;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal}.fb_reset>div{overflow:hidden}@keyframes fb_transform{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}.fb_animate{animation:fb_transform .3s forwards}
.fb_dialog{background:rgba(82, 82, 82, .7);position:absolute;top:-10000px;z-index:10001}.fb_dialog_advanced{border-radius:8px;padding:10px}.fb_dialog_content{background:#fff;color:#373737}.fb_dialog_close_icon{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 0 transparent;cursor:pointer;display:block;height:15px;position:absolute;right:18px;top:17px;width:15px}.fb_dialog_mobile .fb_dialog_close_icon{left:5px;right:auto;top:5px}.fb_dialog_padding{background-color:transparent;position:absolute;width:1px;z-index:-1}.fb_dialog_close_icon:hover{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -15px transparent}.fb_dialog_close_icon:active{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -30px transparent}.fb_dialog_iframe{line-height:0}.fb_dialog_content .dialog_title{background:#6d84b4;border:1px solid #365899;color:#fff;font-size:14px;font-weight:bold;margin:0}.fb_dialog_content .dialog_title>span{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Cou7n-nqK52.gif) no-repeat 5px 50%;float:left;padding:5px 0 7px 26px}body.fb_hidden{height:100%;left:0;margin:0;overflow:visible;position:absolute;top:-10000px;transform:none;width:100%}.fb_dialog.fb_dialog_mobile.loading{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/3rhSv5V8j3o.gif) white no-repeat 50% 50%;min-height:100%;min-width:100%;overflow:hidden;position:absolute;top:0;z-index:10001}.fb_dialog.fb_dialog_mobile.loading.centered{background:none;height:auto;min-height:initial;min-width:initial;width:auto}.fb_dialog.fb_dialog_mobile.loading.centered #fb_dialog_loader_spinner{width:100%}.fb_dialog.fb_dialog_mobile.loading.centered .fb_dialog_content{background:none}.loading.centered #fb_dialog_loader_close{clear:both;color:#fff;display:block;font-size:18px;padding-top:20px}#fb-root #fb_dialog_ipad_overlay{background:rgba(0, 0, 0, .4);bottom:0;left:0;min-height:100%;position:absolute;right:0;top:0;width:100%;z-index:10000}#fb-root #fb_dialog_ipad_overlay.hidden{display:none}.fb_dialog.fb_dialog_mobile.loading iframe{visibility:hidden}.fb_dialog_mobile .fb_dialog_iframe{position:sticky;top:0}.fb_dialog_content .dialog_header{background:linear-gradient(from(#738aba), to(#2c4987));border-bottom:1px solid;border-color:#043b87;box-shadow:white 0 1px 1px -1px inset;color:#fff;font:bold 14px Helvetica, sans-serif;text-overflow:ellipsis;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0;vertical-align:middle;white-space:nowrap}.fb_dialog_content .dialog_header table{height:43px;width:100%}.fb_dialog_content .dialog_header td.header_left{font-size:12px;padding-left:5px;vertical-align:middle;width:60px}.fb_dialog_content .dialog_header td.header_right{font-size:12px;padding-right:5px;vertical-align:middle;width:60px}.fb_dialog_content .touchable_button{background:linear-gradient(from(#4267B2), to(#2a4887));background-clip:padding-box;border:1px solid #29487d;border-radius:3px;display:inline-block;line-height:18px;margin-top:3px;max-width:85px;padding:4px 12px;position:relative}.fb_dialog_content .dialog_header .touchable_button input{background:none;border:none;color:#fff;font:bold 12px Helvetica, sans-serif;margin:2px -12px;padding:2px 6px 3px 6px;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}.fb_dialog_content .dialog_header .header_center{color:#fff;font-size:16px;font-weight:bold;line-height:18px;text-align:center;vertical-align:middle}.fb_dialog_content .dialog_content{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/jKEcVPZFk-2.gif) no-repeat 50% 50%;border:1px solid #4a4a4a;border-bottom:0;border-top:0;height:150px}.fb_dialog_content .dialog_footer{background:#f5f6f7;border:1px solid #4a4a4a;border-top-color:#ccc;height:40px}#fb_dialog_loader_close{float:left}.fb_dialog.fb_dialog_mobile .fb_dialog_close_button{text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}.fb_dialog.fb_dialog_mobile .fb_dialog_close_icon{visibility:hidden}#fb_dialog_loader_spinner{animation:rotateSpinner 1.2s linear infinite;background-color:transparent;background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/t-wz8gw1xG1.png);background-position:50% 50%;background-repeat:no-repeat;height:24px;width:24px}@keyframes rotateSpinner{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
.fb_iframe_widget{display:inline-block;position:relative}.fb_iframe_widget span{display:inline-block;position:relative;text-align:justify}.fb_iframe_widget iframe{position:absolute}.fb_iframe_widget_fluid_desktop,.fb_iframe_widget_fluid_desktop span,.fb_iframe_widget_fluid_desktop iframe{max-width:100%}.fb_iframe_widget_fluid_desktop iframe{min-width:220px;position:relative}.fb_iframe_widget_lift{z-index:1}.fb_iframe_widget_fluid{display:inline}.fb_iframe_widget_fluid span{width:100%}</style><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/loader" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/loader.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Aheadworks_Rbslider/js/aw-rbslider-ajax" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Aheadworks_Rbslider/js/aw-rbslider-ajax.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_PageCache/js/page-cache" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_PageCache/js/page-cache.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/core/app" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/core/app.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Search/js/form-mini" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Search/js/form-mini.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/menu" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/menu.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Aheadworks_Rbslider/js/aw-rbslider" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Aheadworks_Rbslider/js/aw-rbslider.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Catalog/js/update-parcels" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Catalog/js/update-parcels.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Aheadworks_Rbslider/js/aw-rbslider-redirect" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Aheadworks_Rbslider/js/aw-rbslider-redirect.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/validation/validation" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/validation/validation.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/cookies" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/cookies.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Paypal/js/in-context/express-checkout" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Paypal/js/in-context/express-checkout.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/block-loader" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/block-loader.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Customer/js/invalidation-processor" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Customer/js/invalidation-processor.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Mageplaza_GoogleRecaptcha/js/captcha" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Mageplaza_GoogleRecaptcha/js/captcha.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Persistent/js/view/customer-data-mixin" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Persistent/js/view/customer-data-mixin.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/core/renderer/types" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/core/renderer/types.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/core/renderer/layout" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/core/renderer/layout.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Catalog/js/price-box" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Catalog/js/price-box.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="uikit" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Aheadworks_Rbslider/js/uikit.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/validation" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/validation.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/core/collection" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/core/collection.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/core/element/element" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/core/element/element.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="paypalInContextExpressCheckout" src="https://www.paypalobjects.com/api/checkout.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Checkout/js/view/minicart" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Checkout/js/view/minicart.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Tax/js/view/checkout/minicart/subtotal/totals" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Tax/js/view/checkout/minicart/subtotal/totals.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Msrp/js/view/checkout/minicart/subtotal/totals" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Msrp/js/view/checkout/minicart/subtotal/totals.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Cmsmart_Promotion/js/view/checkout/minicart/discount" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Cmsmart_Promotion/js/view/checkout/minicart/discount.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Catalog/js/view/image" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Catalog/js/view/image.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Customer/js/view/authentication-popup" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Customer/js/view/authentication-popup.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/view/messages" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/view/messages.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Captcha/js/view/checkout/loginCaptcha" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Captcha/js/view/checkout/loginCaptcha.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Mageplaza_SocialLogin/js/view/social-buttons" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Mageplaza_SocialLogin/js/view/social-buttons.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="MageWorx_SearchSuiteAutocomplete/js/autocomplete" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/MageWorx_SearchSuiteAutocomplete/js/autocomplete.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="MageWorx_SearchSuiteAutocomplete/js/bindEvents" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/MageWorx_SearchSuiteAutocomplete/js/bindEvents.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="MageWorx_SearchSuiteAutocomplete/js/dataProvider" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/MageWorx_SearchSuiteAutocomplete/js/dataProvider.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="jquery/validate" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/jquery/jquery.validate.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Theme/js/view/messages" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Theme/js/view/messages.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Catalog/js/storage-manager" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Catalog/js/storage-manager.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Aheadworks_Rbslider/js/components/slideshow" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Aheadworks_Rbslider/js/components/slideshow.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/core/element/links" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/core/element/links.js"></script><script async="true" id="xo-pptm" src="https://www.paypal.com/tagmanager/pptm.js?id=www.pichau.com.br&amp;source=checkoutjs&amp;t=xo&amp;v=4.0.314"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Checkout/js/sidebar" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Checkout/js/sidebar.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/dropdown" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/dropdown.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/form/form" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/form/form.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Customer/js/action/login" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Customer/js/action/login.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Customer/js/model/authentication-popup" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Customer/js/model/authentication-popup.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/modal/alert" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/modal/alert.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Captcha/js/view/checkout/defaultCaptcha" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Captcha/js/view/checkout/defaultCaptcha.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Captcha/js/model/captchaList" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Captcha/js/model/captchaList.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="socialProvider" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Mageplaza_SocialLogin/js/provider.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/model/messageList" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/model/messageList.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="jquery/jquery.metadata" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/jquery/jquery.metadata.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Catalog/js/product/storage/storage-service" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Catalog/js/product/storage/storage-service.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Customer/js/invalidation-rules/website-rule" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Customer/js/invalidation-rules/website-rule.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/decorate" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/decorate.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/spinner" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/spinner.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/requirejs/resolver" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/requirejs/resolver.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/form/adapter" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/form/adapter.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Captcha/js/model/captcha" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Captcha/js/model/captcha.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/model/messages" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/model/messages.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Catalog/js/product/storage/ids-storage" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Catalog/js/product/storage/ids-storage.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Catalog/js/product/storage/data-storage" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Catalog/js/product/storage/data-storage.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Catalog/js/product/storage/ids-storage-compare" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Catalog/js/product/storage/ids-storage-compare.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/form/adapter/buttons" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/form/adapter/buttons.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Captcha/js/action/refresh" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Captcha/js/action/refresh.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Catalog/js/product/query-builder" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Catalog/js/product/query-builder.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="//www.google.com/recaptcha/api.js?onload=recaptchaOnload&amp;render=explicit" src="//www.google.com/recaptcha/api.js?onload=recaptchaOnload&amp;render=explicit"></script></head>
<body data-container="body" class="cms-home cms-index-index page-layout-home-layout ajax-loading" style="background-image: url(&quot;https://cdn.pichau.com.br/aw_rbslider/slides/bg-diadasmae2020.jpg&quot;);" aria-busy="true"><script>!function(a,b,c,d,e,f){a.ddjskey=e;a.ddoptions=f||null;var m=b.createElement(c),n=b.getElementsByTagName(c)[0];m.async=1,m.src=d,n.parentNode.insertBefore(m,n)}(window,document,"script","https://js.datadome.co/tags.js","6D7FE42D59136B36A64C1AB393707E");</script>
<script>
    try {
        if (!window.localStorage || !window.sessionStorage) {
            throw new Error();
        }

        localStorage.setItem('storage_test', 1);
        localStorage.removeItem('storage_test');
    } catch(e) {
        (function () {
            var Storage = function (type) {
                var data;

                function createCookie(name, value, days) {
                    var date, expires;

                    if (days) {
                        date = new Date();
                        date.setTime(date.getTime()+(days * 24 * 60 * 60 * 1000));
                        expires = '; expires=' + date.toGMTString();
                    } else {
                        expires = '';
                    }
                    document.cookie = name + '=' + value+expires+'; path=/';
                }

                function readCookie(name) {
                    var nameEQ = name + '=',
                        ca = document.cookie.split(';'),
                        i = 0,
                        c;

                    for (i=0; i < ca.length; i++) {
                        c = ca[i];

                        while (c.charAt(0) === ' ') {
                            c = c.substring(1,c.length);
                        }

                        if (c.indexOf(nameEQ) === 0) {
                            return c.substring(nameEQ.length, c.length);
                        }
                    }

                    return null;
                }

                function setData(data) {
                    data = encodeURIComponent(JSON.stringify(data));
                    createCookie(type === 'session' ? getSessionName() : 'localStorage', data, 365);
                }

                function clearData() {
                    createCookie(type === 'session' ? getSessionName() : 'localStorage', '', 365);
                }

                function getData() {
                    var data = type === 'session' ? readCookie(getSessionName()) : readCookie('localStorage');

                    return data ? JSON.parse(decodeURIComponent(data)) : {};
                }

                function getSessionName() {
                    if (!window.name) {
                        window.name = new Date().getTime();
                    }

                    return 'sessionStorage' + window.name;
                }

                data = getData();

                return {
                    length: 0,
                    clear: function () {
                        data = {};
                        this.length = 0;
                        clearData();
                    },

                    getItem: function (key) {
                        return data[key] === undefined ? null : data[key];
                    },

                    key: function (i) {
                        var ctr = 0,
                            k;

                        for (k in data) {
                            if (ctr.toString() === i.toString()) {
                                return k;
                            } else {
                                ctr++
                            }
                        }

                        return null;
                    },

                    removeItem: function (key) {
                        delete data[key];
                        this.length--;
                        setData(data);
                    },

                    setItem: function (key, value) {
                        data[key] = value.toString();
                        this.length++;
                        setData(data);
                    }
                };
            };

            window.localStorage.__proto__ = window.localStorage = new Storage('local');
            window.sessionStorage.__proto__ = window.sessionStorage = new Storage('session');
        })();
    }
</script>
<script>
        require.config({
            deps: [
                'jquery',
                'mage/translate',
                'jquery/jquery-storageapi'
            ],
            callback: function ($) {
                'use strict';

                var dependencies = [],
                    versionObj;

                $.initNamespaceStorage('mage-translation-storage');
                $.initNamespaceStorage('mage-translation-file-version');
                versionObj = $.localStorage.get('mage-translation-file-version');


                if (versionObj.version !== '8b834e4686a5c9a9378fd1fe7401bfa94487bc8e') {
                    dependencies.push(
                        'text!js-translation.json'
                    );

                }

                require.config({
                    deps: dependencies,
                    callback: function (string) {
                        if (typeof string === 'string') {
                            $.mage.translate.add(JSON.parse(string));
                            $.localStorage.set('mage-translation-storage', string);
                            $.localStorage.set(
                                'mage-translation-file-version',
                                {
                                    version: '8b834e4686a5c9a9378fd1fe7401bfa94487bc8e'
                                }
                            );
                        } else {
                            $.mage.translate.add($.localStorage.get('mage-translation-storage'));
                        }
                    }
                });
            }
        });
    </script>

<noscript>
        <div class="message global noscript">
            <div class="content">
                <p>
                    <strong>Os Javascripts parecem estar desabilitados no seu navegador.</strong>
                    <span>For the best experience on our site, be sure to turn on Javascript in your browser.</span>
                </p>
            </div>
        </div>
    </noscript>
<div style="display: none;" id="paypal-express-in-context-checkout-main" data-paypal-click-listener=""></div>

<script id="searchAutocompletePlaceholder" type="text/x-custom-template">
    <div class="searchautocomplete__autocomplete">
        <div class="searchautocomplete__spinner">
            <div class="spinner-item spinner-item-1"></div>
            <div class="spinner-item spinner-item-2"></div>
            <div class="spinner-item spinner-item-3"></div>
            <div class="spinner-item spinner-item-4"></div>
            <div class="spinner-item spinner-item-5"></div>
            <div class="spinner-item spinner-item-6"></div>
            <div class="spinner-item spinner-item-7"></div>
            <div class="spinner-item spinner-item-8"></div>
        </div>
    </div>
</script>
<script id="searchAutocompleteWrapper" type="text/x-custom-template">
    <div class="wrapper">
        <div data-bind="visible: result.totalItems > 0">
            <div data-bind="foreach: { data: result.indices, as: 'index' }">
                <div data-bind="visible: index.totalItems, attr: {class: 'searchautocomplete__index-' + index.identifier}">
                    <div class="index-title">
                        <span data-bind="text: index.title"></span>
                        <span data-bind="visible: index.isShowTotals">
                            (<span class="total" data-bind="text: index.totalItems"></span>)
                        </span>
                    </div>

                    <ul data-bind="foreach: { data: index.items, as: 'item' }">
                        <li data-bind="
                            template: { name:index.identifier, data: item },
                            attr: {class: 'searchautocomplete__item-' + index.identifier},
                            event: { mouseover: $parents[1].onMouseOver, mouseout: $parents[1].onMouseOut, mousedown: $parents[1].onClick },
                            css: {_active: $data.isActive}">
                        </li>
                    </ul>
                </div>
            </div>

            <div class="show-all-results" data-bind="visible: result.urlAll">
                <a data-bind="attr: { href: result.urlAll }">
                    <span data-bind="text: result.textAll"></span>
                </a>
            </div>
        </div>

        <div class="empty-result" data-bind="visible: result.totalItems == 0 && !loading">
            <span data-bind="text: result.textEmpty"></span>
        </div>
    </div>
</script>
<script id="popular" type="text/x-custom-template">
    <a class="title" data-bind="text: query"></a>
</script>
<script id="recent" type="text/x-custom-template">
    <span class="title" data-bind="text: query"></span>
</script>
<script id="magento_catalog_category" type="text/x-custom-template">
    <a class="title" data-bind="text: name, attr: {href: url}, highlight"></a>
</script>
<script id="magento_catalog_product" type="text/x-custom-template">
    <!-- ko if: image -->
    <img data-bind="attr: {src: image}"/>
    <!-- /ko -->

    <a class="title" data-bind="html: name, attr: {href: url}, highlight"></a>

    <!-- ko if: price > 0 -->
    <div class="block-info-search">
        <div data-bind="html: price, visible: price, price" class="price"></div>
        <div data-bind="html: price, visible: price, installment" class="price-installments"></div>
        <div data-bind="html: price, visible: price, boleto" class="price-boleto"></div>
    </div>
    <!-- /ko -->

    <form data-role="tocart-form" class="to-cart"
          data-bind="attr:{action: cart.params.action}, afterRender: $parents[2].afterRender"
          method="post">
        <input type="hidden" name="product" data-bind="value: cart.params.data.product">
        <input type="hidden" name="uenc" data-bind="value: cart.params.data.uenc">
        <input type="hidden" name="form_key" data-bind="value: $parents[2].form_key"/>
        <button type="submit" class="button buy">
            <span><!-- ko i18n: 'Add to Cart'--><!-- /ko --></span>
            <i class="icon-cart-search"></i>
        </button>
    </form>
</script>
<script id="magento_cms_page" type="text/x-custom-template">
    <a class="title" data-bind="text: name, attr: {href: url}, highlight"></a>
</script>
<script id="magento_catalog_categoryproduct" type="text/x-custom-template">
    <a class="title" data-bind="html: name, attr: {href: url}, highlight"></a>
</script>
<script id="magento_search_query" type="text/x-custom-template">
    <a class="title" data-bind="text: query_text, attr: {href: url}, highlight"></a> <span class="num_results"
                                                                                           data-bind="text: num_results"></span>
</script>
<script id="external_wordpress_post" type="text/x-custom-template">
    <a class="title" data-bind="text: name, attr: {href: url}, highlight"></a>
</script>
<script id="magefan_blog_post" type="text/x-custom-template">
    <a class="title" data-bind="text: name, attr: {href: url}, highlight"></a>
</script>
<script id="magento_catalog_attribute" type="text/x-custom-template">
    <a class="title" data-bind="text: name, attr: {href: url}, highlight"></a>
</script>
<script id="mageplaza_blog_post" type="text/x-custom-template">
    <a class="title" data-bind="text: name, attr: {href: url}, highlight"></a>
</script>
<script id="mirasvit_blog_post" type="text/x-custom-template">
    <a class="title" data-bind="text: name, attr: {href: url}, highlight"></a>
</script>
<script id="mirasvit_gry_registry" type="text/x-custom-template">
    <a class="title" data-bind="text: title, attr: {href: url}, highlight"></a>
    <p data-bind="text: name, highlight"></p>
</script>
<script id="mirasvit_kb_rarticle" type="text/x-custom-template">
    <a class="title" data-bind="text: name, attr: {href: url}, highlight"></a>
</script>
<script id="ves_blog_post" type="text/x-custom-template">
    <a class="title" data-bind="text: name, attr: {href: url}, highlight"></a>
</script>
<script id="amasty_blog_post" type="text/x-custom-template">
    <a class="title" data-bind="text: name, attr: {href: url}, highlight"></a>
</script>
<script id="aheadworks_blog_post" type="text/x-custom-template">
    <a class="title" data-bind="text: name, attr: {href: url}, highlight"></a>
</script> <script>
        require([
                'jquery',
                'Mirasvit_SearchAutocomplete/js/autocomplete',
                'Mirasvit_SearchAutocomplete/js/typeahead'
            ], function ($, autocomplete, typeahead) {
                const selector = 'input#search, input#mobile_search, .minisearch input[type="text"]';

                $(document).ready(function () {
                    var $input = $(selector);

                    $input.each(function (index, searchInput) {

                        new autocomplete($(searchInput)).init({"query":"","priceFormat":{"pattern":"R$%s","precision":2,"requiredPrecision":2,"decimalSymbol":",","groupSymbol":".","groupLength":3,"integerRequired":false},"minSearchLength":10,"url":"https:\/\/www.pichau.com.br\/searchautocomplete\/ajax\/suggest\/","delay":500,"popularSearches":[],"isTypeaheadEnabled":"0","typeaheadUrl":"https:\/\/www.pichau.com.br\/searchautocomplete\/ajax\/typeahead\/"});
                    });
                });
            }
        );

        window.installmentConfig = {
            "maxParcels": 10,
            "minParcelValue": 10,
            "boletoDiscount": 12,
            "installmentTpl": "<span><%- data.qtd %>x de <%- data.priceParcel %></span> <strong>sem juros</strong> no cartão",
            "boletoTpl": "<span>à vista <%- data.price %></span> no boleto com <strong><%- data.discount %>% de desconto</strong>"
        }
    </script>

<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MQS562"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<div class="page-wrapper"><header class="page-header"><div class="panel wrapper"><div class="panel header"><a class="action skip contentarea" href="#contentarea"><span>Skip to Content</span></a>
</div></div><div class="header container"><div class="header content"><span data-action="toggle-nav" class="action nav-toggle"><span>Alterar Navegação</span></span>
<a class="logo" href="https://www.pichau.com.br/" title="">
<img src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/images/logo-pichau.png" title="" alt="" width="281" height="113">
</a>
<div class="header-right"><div class="row"><div class="col-12 col-12-header"><div class="row header-right-links"><div class="links-header">
<ul>
<li class="sac-social"><nav class="nav-social"><label for="">Compartilhe</label>
<ul>
<li><a id="nav-social-1" href="https://www.youtube.com/pichauinfo" target="_blank"><i class="fa fa-youtube"></i></a></li>
<li><a id="nav-social-2" href="https://www.facebook.com/pichauinfo" target="_blank"><i class="fa fa-facebook"></i></a></li>
<li class="last"><a id="nav-social-3" href="https://www.twitter.com/pichauinfo" target="_blank"><i class="fa fa-twitter"></i></a></li>
</ul>
</nav></li>
<li class="sac-phone"><a id="nav-sac-1" class="open-tel"> <i class="fa fa-phone"></i> Atendimento <span>por Telefone</span> </a></li>
<li class="sac-chat"><a id="nav-sac-2" class="btn-chat" href="https://pichau.freshdesk.com" target="_blank"> <i class="fa fa-comments-o"></i>SAC </a></li>
<li class="banner-nav"><a href="//pichaugaming.com.br" target="_blank"> <img src="https://cdn.pichau.com.br/wysiwyg/btn-pichaugaming-home.png" alt="Loja fisica - Pichau" data-pagespeed-lsc-url="https://static.pichau.com.br/wysiwyg/btn-pichaugaming-home.png" width="147" height="34"> </a></li>
</ul>
</div>
<div id="modal-telefone" class="modal">
<div class="conteudo-modal"><i class="fa fa-times close-modal"></i>
<h3>Atendimento <strong>Por telefone</strong></h3>
<p>Horários de atendimento: <strong>Segunda a Sexta</strong> 9h às 12h e das 13h às 18h<br> Nosso telefone é <strong class="telefone-modal">(47) 3305-5150</strong></p>
</div>
</div><ul class="menu-about">
<li class="authorization-link" data-label="ou">
<a href="https://www.pichau.com.br/customer/account/login/">
<i class="fa fa-user" aria-hidden="true"></i>
Entrar </a>
<a href="https://www.pichau.com.br/customer/account/create/">
/ Cadastro
</a>
</li>
<li>
<a href="https://www.pichau.com.br/quem-somos/">Quem somos</a>
</li>
<li>
<a href="https://www.pichau.com.br/como-comprar/">Políticas do site</a>
</li>
</ul>
<div data-block="minicart" class="minicart-wrapper">
<a class="action showcart" href="https://www.pichau.com.br/checkout/cart/" data-bind="scope: 'minicart_content'">
<span class="text">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Carrinho <span class="counter qty empty" data-bind="css: { empty: !!getCartParam('summary_count') == false }, blockLoader: isLoading">
<span class="counter-number"><!-- ko text: getCartParam('summary_count') --><!-- /ko --> produto</span>
</span>
</span>
</a>
<script>
        window.checkout = {"shoppingCartUrl":"https:\/\/www.pichau.com.br\/checkout\/cart\/","checkoutUrl":"https:\/\/www.pichau.com.br\/onestepcheckout\/","updateItemQtyUrl":"https:\/\/www.pichau.com.br\/checkout\/sidebar\/updateItemQty\/","removeItemUrl":"https:\/\/www.pichau.com.br\/checkout\/sidebar\/removeItem\/","imageTemplate":"Magento_Catalog\/product\/image_with_borders","baseUrl":"https:\/\/www.pichau.com.br\/","minicartMaxItemsVisible":5,"websiteId":"1","maxItemsToDisplay":10,"customerLoginUrl":"https:\/\/www.pichau.com.br\/customer\/account\/login\/","isRedirectRequired":false,"autocomplete":"off","captcha":{"user_login":{"isCaseSensitive":false,"imageHeight":50,"imageSrc":"","refreshUrl":"https:\/\/www.pichau.com.br\/captcha\/refresh\/","isRequired":false}}};
    </script>

</div>
</div></div></div></div><div class="header-menu-search"><div class="block block-search">
<form class="form minisearch" id="search_mini_form" action="https://www.pichau.com.br/catalogsearch/result/" method="get">
<input id="search" type="text" name="q" value="" placeholder="Digite o que procura" class="input-text" maxlength="128" role="combobox" aria-haspopup="false" aria-autocomplete="both" autocomplete="off">
    <div class="searchautocomplete__autocomplete">
        <div class="searchautocomplete__spinner">
            <div class="spinner-item spinner-item-1"></div>
            <div class="spinner-item spinner-item-2"></div>
            <div class="spinner-item spinner-item-3"></div>
            <div class="spinner-item spinner-item-4"></div>
            <div class="spinner-item spinner-item-5"></div>
            <div class="spinner-item spinner-item-6"></div>
            <div class="spinner-item spinner-item-7"></div>
            <div class="spinner-item spinner-item-8"></div>
        </div>
    </div>

<div id="search_autocomplete" class="search-autocomplete"></div>
<div data-bind="scope: 'searchsuiteautocomplete_form'">
<!-- ko template: getTemplate() -->
<div id="searchsuite-autocomplete" class="searchsuite-autocomplete" data-bind="visible: showPopup()" style="display: none;">
<div data-bind="visible: anyResultCount()" style="display: none;">
<div class="suggest" data-bind="visible: result.suggest.data().length > 0" style="display: none;">
<div class="title"><!-- ko i18n: 'Suggested'--><span>Sugerido</span><!-- /ko --></div>
<ul id="suggest" role="listbox" data-bind="foreach: result.suggest.data"></ul>
</div>
<div class="product" data-bind="visible: result.product.data().length > 0" style="display: none;">
<div class="title">
<!-- ko i18n: 'Products'--><span>Produtos</span><!-- /ko -->
<a class="see-all" data-bind="attr: {href: result.product.url}" href="">
<!-- ko i18n: 'See All' --><span>Ver Tudo</span><!-- /ko -->
<span data-bind="text: result.product.size">0</span>
</a>
</div>
<ul id="product" role="listbox" data-bind="foreach: result.product.data"></ul>
</div>
</div>
<div class="no-result" data-bind="visible: !anyResultCount()"><!-- ko i18n: 'No Result'--><span>Não encontramos nada com esse termo :(</span><!-- /ko --></div>
</div><!-- /ko -->
</div>
 <button type="submit" title="Buscar" class="action search" disabled="disabled">
<i class="icon-search"></i>
<span>Buscar</span>
</button>
</form>
</div>
</div></div> <div class="sections nav-sections">
<div class="section-items nav-sections-items" role="tablist">
<div class="section-item-title nav-sections-item-title active" data-role="collapsible" role="tab" data-collapsible="true" aria-controls="store.menu" aria-selected="false" aria-expanded="true" tabindex="0">
<a class="nav-sections-item-switch" data-toggle="switch" href="#store.menu">Menu</a>
</div>
<div class="section-item-content nav-sections-item-content" id="store.menu" data-role="content" role="tabpanel" aria-hidden="false">
<nav class="navigation" data-action="navigation">
<a id="bt-departaments" href="https://www.pichau.com.br/todos-os-departamentos/">
Acesse todos os <span>departamentos</span>
</a>
<ul id="ui-id-1" class="ui-menu ui-widget ui-widget-content ui-corner-all" role="menu" tabindex="0">
<li class="level0 nav-1 category-item first has-active level-top parent ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/hardware" class="level-top ui-corner-all" aria-haspopup="true" id="ui-id-2" tabindex="-1" role="menuitem"><span class="ui-menu-icon ui-icon ui-icon-carat-1-e"></span><span>Hardware</span></a><ul class="level0 submenu ui-menu ui-widget ui-widget-content ui-corner-all" style="display: none;" role="menu" aria-hidden="true" aria-expanded="false"><li class="level1 nav-1-1 category-item first parent ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/hardware/processadores" aria-haspopup="true" id="ui-id-13" class="ui-corner-all" tabindex="-1" role="menuitem"><span class="ui-menu-icon ui-icon ui-icon-carat-1-e"></span><span>Processadores</span></a><ul class="level1 submenu ui-menu ui-widget ui-widget-content ui-corner-all expanded" style="display: none;" role="menu" aria-hidden="true" aria-expanded="false"><li class="level2 nav-1-1-1 category-item first ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/hardware/processadores/intel" id="ui-id-27" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Intel</span></a></li><li class="level2 nav-1-1-2 category-item last ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/hardware/processadores/amd" id="ui-id-28" class="ui-corner-all" tabindex="-1" role="menuitem"><span>AMD</span></a></li></ul></li><li class="level1 nav-1-2 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/hardware/placa-m-e" id="ui-id-14" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Placa Mãe</span></a></li><li class="level1 nav-1-3 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/hardware/memorias" id="ui-id-15" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Memórias</span></a></li><li class="level1 nav-1-4 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/hardware/placa-de-video" id="ui-id-16" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Placa de Vídeo</span></a></li><li class="level1 nav-1-5 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/hardware/hard-disk-e-ssd" id="ui-id-17" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Disco rígido interno (HD)</span></a></li><li class="level1 nav-1-6 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/hardware/ssd" id="ui-id-18" class="ui-corner-all" tabindex="-1" role="menuitem"><span>SSD</span></a></li><li class="level1 nav-1-7 category-item active ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/hardware/gabinete" id="ui-id-19" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Gabinete</span></a></li><li class="level1 nav-1-8 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/hardware/fonte" id="ui-id-20" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Fonte</span></a></li><li class="level1 nav-1-9 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/hardware/cabos-extensores-sleeved" id="ui-id-21" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Cabos Extensores Sleeved</span></a></li><li class="level1 nav-1-10 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/hardware/cooler-processador" id="ui-id-22" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Coolers e Watercoolers</span></a></li><li class="level1 nav-1-11 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/hardware/ventoinhas-e-casemod" id="ui-id-23" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Ventoinhas e Casemod</span></a></li><li class="level1 nav-1-12 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/hardware/pasta-termica-e-refrigerantes" id="ui-id-24" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Pasta Térmica e Refrigerantes</span></a></li><li class="level1 nav-1-13 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/hardware/placas-de-som" id="ui-id-25" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Placas de Som</span></a></li><li class="level1 nav-1-14 category-item last ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/hardware/drive-optico" id="ui-id-26" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Drive Óptico</span></a></li></ul></li><li class="level0 nav-2 category-item level-top parent ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/perifericos" class="level-top ui-corner-all" aria-haspopup="true" id="ui-id-3" tabindex="-1" role="menuitem"><span class="ui-menu-icon ui-icon ui-icon-carat-1-e"></span><span>Periféricos</span></a><ul class="level0 submenu ui-menu ui-widget ui-widget-content ui-corner-all" style="display: none;" role="menu" aria-hidden="true" aria-expanded="false"><li class="level1 nav-2-1 category-item first ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/perifericos/caixa-de-som" id="ui-id-29" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Caixa de Som</span></a></li><li class="level1 nav-2-2 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/perifericos/teclado" id="ui-id-30" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Teclado</span></a></li><li class="level1 nav-2-3 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/perifericos/fone-de-ouvido" id="ui-id-31" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Fone de Ouvido</span></a></li><li class="level1 nav-2-4 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/perifericos/kit-teclado-e-mouse" id="ui-id-32" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Kit Teclado e Mouse</span></a></li><li class="level1 nav-2-5 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/perifericos/mouse" id="ui-id-33" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Mouse</span></a></li><li class="level1 nav-2-6 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/perifericos/mousepad" id="ui-id-34" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Mousepad</span></a></li><li class="level1 nav-2-7 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/perifericos/cabos-e-adaptadores" id="ui-id-35" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Cabos e Adaptadores</span></a></li><li class="level1 nav-2-8 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/perifericos/impressoras" id="ui-id-36" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Impressoras</span></a></li><li class="level1 nav-2-9 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/perifericos/armazenamento" id="ui-id-37" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Armazenamento</span></a></li><li class="level1 nav-2-10 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/perifericos/energia" id="ui-id-38" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Energia</span></a></li><li class="level1 nav-2-11 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/perifericos/acessorios" id="ui-id-39" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Acessórios</span></a></li><li class="level1 nav-2-12 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/perifericos/webcam" id="ui-id-40" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Webcam</span></a></li><li class="level1 nav-2-13 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/perifericos/pendrives" id="ui-id-41" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Pendrives</span></a></li><li class="level1 nav-2-14 category-item last ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/perifericos/mesa-digitalizadora" id="ui-id-42" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Mesa Digitalizadora</span></a></li></ul></li><li class="level0 nav-3 category-item level-top parent ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/computadores" class="level-top ui-corner-all" aria-haspopup="true" id="ui-id-4" tabindex="-1" role="menuitem"><span class="ui-menu-icon ui-icon ui-icon-carat-1-e"></span><span>Computadores</span></a><ul class="level0 submenu ui-menu ui-widget ui-widget-content ui-corner-all" style="display: none;" role="menu" aria-hidden="true" aria-expanded="false"><li class="level1 nav-3-1 category-item first ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/computadores/pichau-gamer" id="ui-id-43" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Pichau Gamer</span></a></li><li class="level1 nav-3-2 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/computadores/rtb" id="ui-id-44" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Pichau Gamer RTB-Pronta Entrega</span></a></li><li class="level1 nav-3-3 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/computadores/pichau-moba" id="ui-id-45" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Pichau Moba</span></a></li><li class="level1 nav-3-4 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/computadores/pichau-workstation" id="ui-id-46" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Pichau Professional Workstation</span></a></li><li class="level1 nav-3-5 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/computadores/pichau-home" id="ui-id-47" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Pichau Home</span></a></li><li class="level1 nav-3-6 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/computadores/highflyer" id="ui-id-48" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Highflyer Intel</span></a></li><li class="level1 nav-3-7 category-item last ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/computadores/skycutter" id="ui-id-49" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Skycutter AMD</span></a></li></ul></li><li class="level0 nav-4 category-item level-top ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/monitores" class="level-top ui-corner-all" id="ui-id-5" tabindex="-1" role="menuitem"><span>Monitores</span></a></li><li class="level0 nav-5 category-item level-top parent ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/cadeiras" class="level-top ui-corner-all" aria-haspopup="true" id="ui-id-6" tabindex="-1" role="menuitem"><span class="ui-menu-icon ui-icon ui-icon-carat-1-e"></span><span>Cadeiras e Mesas Gamer</span></a><ul class="level0 submenu ui-menu ui-widget ui-widget-content ui-corner-all" style="display: none;" role="menu" aria-hidden="true" aria-expanded="false"><li class="level1 nav-5-1 category-item first ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/cadeiras/gamer" id="ui-id-50" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Cadeiras Gamer</span></a></li><li class="level1 nav-5-2 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/cadeiras/escritorio" id="ui-id-51" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Escritório</span></a></li><li class="level1 nav-5-3 category-item last ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/cadeiras/mesas-gamer" id="ui-id-52" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Mesas Gamer</span></a></li></ul></li><li class="level0 nav-6 category-item level-top parent ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/eletronicos" class="level-top ui-corner-all" aria-haspopup="true" id="ui-id-7" tabindex="-1" role="menuitem"><span class="ui-menu-icon ui-icon ui-icon-carat-1-e"></span><span>Eletronicos</span></a><ul class="level0 submenu ui-menu ui-widget ui-widget-content ui-corner-all" style="display: none;" role="menu" aria-hidden="true" aria-expanded="false"><li class="level1 nav-6-1 category-item first ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/eletronicos/consoles-e-acessorios" id="ui-id-53" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Consoles e Acessórios</span></a></li><li class="level1 nav-6-2 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/eletronicos/acessorios-mobile" id="ui-id-54" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Acessórios Mobile</span></a></li><li class="level1 nav-6-3 category-item last ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/eletronicos/smartwatch" id="ui-id-55" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Smartwatch</span></a></li></ul></li><li class="level0 nav-7 category-item level-top parent ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/notebooks" class="level-top ui-corner-all" aria-haspopup="true" id="ui-id-8" tabindex="-1" role="menuitem"><span class="ui-menu-icon ui-icon ui-icon-carat-1-e"></span><span>Notebooks e Portáteis</span></a><ul class="level0 submenu ui-menu ui-widget ui-widget-content ui-corner-all" style="display: none;" role="menu" aria-hidden="true" aria-expanded="false"><li class="level1 nav-7-1 category-item first ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/notebooks/refrigerac-o-e-bases" id="ui-id-56" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Refrigeração e Bases</span></a></li><li class="level1 nav-7-2 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/notebooks/carregadores-e-fontes" id="ui-id-57" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Carregadores e Fontes</span></a></li><li class="level1 nav-7-3 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/notebooks/notebook-gamer" id="ui-id-58" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Notebook Gamer</span></a></li><li class="level1 nav-7-4 category-item last ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/notebooks/notebooks" id="ui-id-59" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Notebooks</span></a></li></ul></li><li class="level0 nav-8 category-item level-top ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/redes-wireless" class="level-top ui-corner-all" id="ui-id-9" tabindex="-1" role="menuitem"><span>Redes &amp; Wireless</span></a></li><li class="level0 nav-9 category-item level-top parent ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/mundo-geek" class="level-top ui-corner-all" aria-haspopup="true" id="ui-id-10" tabindex="-1" role="menuitem"><span class="ui-menu-icon ui-icon ui-icon-carat-1-e"></span><span>Mundo Geek</span></a><ul class="level0 submenu ui-menu ui-widget ui-widget-content ui-corner-all" style="display: none;" role="menu" aria-hidden="true" aria-expanded="false"><li class="level1 nav-9-1 category-item first ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/mundo-geek/camisetas" id="ui-id-60" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Camisetas</span></a></li><li class="level1 nav-9-2 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/mundo-geek/action-figures" id="ui-id-61" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Action Figures</span></a></li><li class="level1 nav-9-3 category-item last ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/mundo-geek/drone" id="ui-id-62" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Drone</span></a></li></ul></li><li class="level0 nav-10 category-item last level-top ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/kit-upgrade" class="level-top ui-corner-all" id="ui-id-11" tabindex="-1" role="menuitem"><span>Kit Upgrade</span></a></li> <li class="img-pc ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/monte-seu-computador/processador/" id="ui-id-12" class="ui-corner-all" tabindex="-1" role="menuitem"><img src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/images/monte-pc.png" alt="Monte seu PC - Pichau" border="0"></a></li>
</ul>
</nav>
</div>
<div class="section-item-title nav-sections-item-title" data-role="collapsible" role="tab" data-collapsible="true" aria-controls="store.links" aria-selected="false" aria-expanded="false" tabindex="0">
<a class="nav-sections-item-switch" data-toggle="switch" href="#store.links">Minha Conta</a>
</div>
<div class="section-item-content nav-sections-item-content" id="store.links" data-role="content" role="tabpanel" aria-hidden="true" style="display: none;"></div>
</div>
</div>
</div><style>
.uk-slidenav-position {
    position: relative;
}
.aw-rbslider-container a.link {
    display: block;
    z-index: -1;
    height: 360px;
}
</style>
<div class="awating" style="width: 1100px; height: 360px; display: block; margin: 0 auto; position: relative; z-index:-1;"><div class="aw-rbslider-container uk-slidenav-position banner_home_menu_bottom" style="">
<a href="https://www.pichau.com.br/maes" class="link" target="blank"></a>
</div></div>
<script type="text/javascript">
                    require(['jquery', 'jquery/ui'], function($){
                        $('.page-wrapper > .aw-rbslider-container').bind('DOMNodeInserted', function () {
                            $('.page-wrapper > .aw-rbslider-container').appendTo(  $('.awating') )
                        })
                    });
                </script>
</header>

<script>
            require([
                'jquery'
            ], function($){
                var imagePath = "https://cdn.pichau.com.br/aw_rbslider/slides/bg-diadasmae2020.jpg";
                $('body').css({'background-image': 'url('+imagePath+')'});
                $('.page-wrapper > .aw-rbslider-container').appendTo($('.awating'));
            });
        </script>
<main id="maincontent" class="page-main-home"><div class="page messages"><div data-placeholder="messages"></div>
<div data-bind="scope: 'messages'">
<!-- ko if: cookieMessages && cookieMessages.length > 0 --><!-- /ko -->
<!-- ko if: messages().messages && messages().messages.length > 0 --><!-- /ko -->
</div>

</div><a id="contentarea" tabindex="-1"></a>
<div class="content-banners-home col-lg-12"><script type="text/javascript">
	require(['jquery', 'slick'], function () {
		jQuery('.slider-category-home').slick({
			infinite: true,
			slidesToShow: 6,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000
		});

	});
</script><ul class="slider-category-home slick-initialized slick-slider"><button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="display: block;">Previous</button>
<div class="slick-list draggable"><div class="slick-track" style="opacity: 1; width: 5248px; transform: translate3d(-1312px, 0px, 0px); transition: transform 500ms ease 0s;"><li class="slick-slide slick-cloned" data-slick-index="-6" aria-hidden="true" style="width: 164px;" tabindex="-1"><a href="/monitores" tabindex="-1"> <img src="https://cdn.pichau.com.br/wysiwyg/73df1967f687c2fc67a8a7ed1fb38738.png" alt=""> <span>MONITORES</span> </a></li><li class="slick-slide slick-cloned" data-slick-index="-5" aria-hidden="true" style="width: 164px;" tabindex="-1"><a href="/hardware/redes-wireless" tabindex="-1"> <img src="https://cdn.pichau.com.br/wysiwyg/2c41c9c4615df75e4c408edc8b040db5.png" alt=""> <span>REDE SEM FIO</span> </a></li><li class="slick-slide slick-cloned" data-slick-index="-4" aria-hidden="true" style="width: 164px;" tabindex="-1"><a href="/hardware/gabinete" tabindex="-1"> <img src="https://cdn.pichau.com.br/wysiwyg/90a36ac52e712ae7770894a7d35bd92e.png" alt=""> <span>GABINETES</span> </a></li><li class="slick-slide slick-cloned" data-slick-index="-3" aria-hidden="true" style="width: 164px;" tabindex="-1"><a href="/pertifericos/fone-de-ouvido" tabindex="-1"> <img src="https://cdn.pichau.com.br/wysiwyg/c7fc58008611845d250096f1deb809fe.png" alt=""> <span>FONES DE OUVIDO</span> </a></li><li class="slick-slide slick-cloned" data-slick-index="-2" aria-hidden="true" style="width: 164px;" tabindex="-1"><a href="/hardware/fonte" tabindex="-1"> <img src="https://cdn.pichau.com.br/wysiwyg/e68e99ce889565d0a3259147d35f8cfd.png" alt=""> <span>FONTES DE ENERGIA</span> </a></li><li class="slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" style="width: 164px;" tabindex="-1"><a href="/pertifericos/kit-teclado-e-mouse" tabindex="-1"> <img src="https://cdn.pichau.com.br/wysiwyg/153facd2bda7a8ff082463bf3c5a66a6.png" alt=""> <span>TECLADOS E MOUSES</span> </a></li><li class="slick-slide" data-slick-index="0" aria-hidden="true" style="width: 164px;" tabindex="-1"><a href="/hardware/placa-de-video" tabindex="-1"> <img src="https://cdn.pichau.com.br/wysiwyg/e760996924436e35d9941d127095fb51.png" alt=""> <span>PLACAS DE VÍDEO</span> </a></li><li class="slick-slide" data-slick-index="1" aria-hidden="true" style="width: 164px;" tabindex="0"><a href="/hardware/placa-m-e" tabindex="0"> <img src="https://cdn.pichau.com.br/wysiwyg/8c019e496865e69b03b04298a8e21823_1_.png" alt=""> <span>PLACAS MÃE</span> </a></li><li class="slick-slide slick-current slick-active" data-slick-index="2" aria-hidden="false" style="width: 164px;" tabindex="0"><a href="/hardware/processadores" tabindex="0"> <img src="https://cdn.pichau.com.br/wysiwyg/fdfe9f3c5ad26f3d18dc4fac311f9edb.png" alt=""> <span>PROCESSADORES</span> </a></li><li class="slick-slide slick-active" data-slick-index="3" aria-hidden="false" style="width: 164px;" tabindex="0"><a href="/hardware/memorias" tabindex="0"> <img src="https://cdn.pichau.com.br/wysiwyg/ca6eb79143b05abdd879afae9ed9a786.png" alt=""> <span>MEMÓRIA RAM</span> </a></li><li class="slick-slide slick-active" data-slick-index="4" aria-hidden="false" style="width: 164px;" tabindex="0"><a href="/hardware/ssd" tabindex="0"> <img src="https://cdn.pichau.com.br/wysiwyg/16f131995eb6276f9c648bb8cf52c8cb.png" alt=""> <span>SSD 2.5"</span> </a></li><li class="slick-slide slick-active" data-slick-index="5" aria-hidden="false" style="width: 164px;" tabindex="0"><a href="/hardware/cooler-processador" tabindex="0"> <img src="https://cdn.pichau.com.br/wysiwyg/f75ab97229e744903430ac306840e558.png" alt=""> <span>COOLER E WATERCOOLER</span> </a></li><li class="slick-slide slick-active" data-slick-index="6" aria-hidden="false" style="width: 164px;" tabindex="0"><a href="/hardware/hard-disk-e-ssd" tabindex="0"> <img src="https://cdn.pichau.com.br/wysiwyg/374759a4abcab604f4f59bbe13cc9fa3.png" alt=""> <span>DISCO RÍGIDO (HD)</span> </a></li><li class="slick-slide slick-active" data-slick-index="7" aria-hidden="false" style="width: 164px;" tabindex="-1"><a href="/monitores" tabindex="-1"> <img src="https://cdn.pichau.com.br/wysiwyg/73df1967f687c2fc67a8a7ed1fb38738.png" alt=""> <span>MONITORES</span> </a></li><li class="slick-slide" data-slick-index="8" aria-hidden="true" style="width: 164px;" tabindex="-1"><a href="/hardware/redes-wireless" tabindex="-1"> <img src="https://cdn.pichau.com.br/wysiwyg/2c41c9c4615df75e4c408edc8b040db5.png" alt=""> <span>REDE SEM FIO</span> </a></li><li class="slick-slide" data-slick-index="9" aria-hidden="true" style="width: 164px;" tabindex="-1"><a href="/hardware/gabinete" tabindex="-1"> <img src="https://cdn.pichau.com.br/wysiwyg/90a36ac52e712ae7770894a7d35bd92e.png" alt=""> <span>GABINETES</span> </a></li><li class="slick-slide" data-slick-index="10" aria-hidden="true" style="width: 164px;" tabindex="-1"><a href="/pertifericos/fone-de-ouvido" tabindex="-1"> <img src="https://cdn.pichau.com.br/wysiwyg/c7fc58008611845d250096f1deb809fe.png" alt=""> <span>FONES DE OUVIDO</span> </a></li><li class="slick-slide" data-slick-index="11" aria-hidden="true" style="width: 164px;" tabindex="-1"><a href="/hardware/fonte" tabindex="-1"> <img src="https://cdn.pichau.com.br/wysiwyg/e68e99ce889565d0a3259147d35f8cfd.png" alt=""> <span>FONTES DE ENERGIA</span> </a></li><li class="slick-slide" data-slick-index="12" aria-hidden="true" style="width: 164px;" tabindex="-1"><a href="/pertifericos/kit-teclado-e-mouse" tabindex="-1"> <img src="https://cdn.pichau.com.br/wysiwyg/153facd2bda7a8ff082463bf3c5a66a6.png" alt=""> <span>TECLADOS E MOUSES</span> </a></li><li class="slick-slide slick-cloned" data-slick-index="13" aria-hidden="true" style="width: 164px;" tabindex="-1"><a href="/hardware/placa-de-video" tabindex="-1"> <img src="https://cdn.pichau.com.br/wysiwyg/e760996924436e35d9941d127095fb51.png" alt=""> <span>PLACAS DE VÍDEO</span> </a></li><li class="slick-slide slick-cloned" data-slick-index="14" aria-hidden="true" style="width: 164px;" tabindex="-1"><a href="/hardware/placa-m-e" tabindex="-1"> <img src="https://cdn.pichau.com.br/wysiwyg/8c019e496865e69b03b04298a8e21823_1_.png" alt=""> <span>PLACAS MÃE</span> </a></li><li class="slick-slide slick-cloned" data-slick-index="15" aria-hidden="true" style="width: 164px;" tabindex="-1"><a href="/hardware/processadores" tabindex="-1"> <img src="https://cdn.pichau.com.br/wysiwyg/fdfe9f3c5ad26f3d18dc4fac311f9edb.png" alt=""> <span>PROCESSADORES</span> </a></li><li class="slick-slide slick-cloned" data-slick-index="16" aria-hidden="true" style="width: 164px;" tabindex="-1"><a href="/hardware/memorias" tabindex="-1"> <img src="https://cdn.pichau.com.br/wysiwyg/ca6eb79143b05abdd879afae9ed9a786.png" alt=""> <span>MEMÓRIA RAM</span> </a></li><li class="slick-slide slick-cloned" data-slick-index="17" aria-hidden="true" style="width: 164px;" tabindex="-1"><a href="/hardware/ssd" tabindex="-1"> <img src="https://cdn.pichau.com.br/wysiwyg/16f131995eb6276f9c648bb8cf52c8cb.png" alt=""> <span>SSD 2.5"</span> </a></li><li class="slick-slide slick-cloned" data-slick-index="18" aria-hidden="true" style="width: 164px;" tabindex="-1"><a href="/hardware/cooler-processador" tabindex="-1"> <img src="https://cdn.pichau.com.br/wysiwyg/f75ab97229e744903430ac306840e558.png" alt=""> <span>COOLER E WATERCOOLER</span> </a></li><li class="slick-slide slick-cloned" data-slick-index="19" aria-hidden="true" style="width: 164px;" tabindex="-1"><a href="/hardware/hard-disk-e-ssd" tabindex="-1"> <img src="https://cdn.pichau.com.br/wysiwyg/374759a4abcab604f4f59bbe13cc9fa3.png" alt=""> <span>DISCO RÍGIDO (HD)</span> </a></li><li class="slick-slide slick-cloned" data-slick-index="20" aria-hidden="true" style="width: 164px;" tabindex="-1"><a href="/monitores" tabindex="-1"> <img src="https://cdn.pichau.com.br/wysiwyg/73df1967f687c2fc67a8a7ed1fb38738.png" alt=""> <span>MONITORES</span> </a></li><li class="slick-slide slick-cloned" data-slick-index="21" aria-hidden="true" style="width: 164px;" tabindex="-1"><a href="/hardware/redes-wireless" tabindex="-1"> <img src="https://cdn.pichau.com.br/wysiwyg/2c41c9c4615df75e4c408edc8b040db5.png" alt=""> <span>REDE SEM FIO</span> </a></li><li class="slick-slide slick-cloned" data-slick-index="22" aria-hidden="true" style="width: 164px;" tabindex="-1"><a href="/hardware/gabinete" tabindex="-1"> <img src="https://cdn.pichau.com.br/wysiwyg/90a36ac52e712ae7770894a7d35bd92e.png" alt=""> <span>GABINETES</span> </a></li><li class="slick-slide slick-cloned" data-slick-index="23" aria-hidden="true" style="width: 164px;" tabindex="-1"><a href="/pertifericos/fone-de-ouvido" tabindex="-1"> <img src="https://cdn.pichau.com.br/wysiwyg/c7fc58008611845d250096f1deb809fe.png" alt=""> <span>FONES DE OUVIDO</span> </a></li><li class="slick-slide slick-cloned" data-slick-index="24" aria-hidden="true" style="width: 164px;" tabindex="-1"><a href="/hardware/fonte" tabindex="-1"> <img src="https://cdn.pichau.com.br/wysiwyg/e68e99ce889565d0a3259147d35f8cfd.png" alt=""> <span>FONTES DE ENERGIA</span> </a></li><li class="slick-slide slick-cloned" data-slick-index="25" aria-hidden="true" style="width: 164px;" tabindex="-1"><a href="/pertifericos/kit-teclado-e-mouse" tabindex="-1"> <img src="https://cdn.pichau.com.br/wysiwyg/153facd2bda7a8ff082463bf3c5a66a6.png" alt=""> <span>TECLADOS E MOUSES</span> </a></li></div></div>












<button class="slick-next slick-arrow" aria-label="Next" type="button" style="display: block;">Next</button></ul><div class="destaques-home">
<div class="title-destaques"><i class="icon-monte-pc"></i>
<h4><strong>Monte o seu computador</strong> Selecione a categoria atual</h4>
</div>
<ul class="links-monte-pc">
<li><a href="https://www.pichau.com.br/computadores/rtb/"> <img src="https://cdn.pichau.com.br/wysiwyg/monte-rtb2015.png" alt="Monte seu pc - RTB GAMER - Pichau" border="0"> </a></li>
<li><a href="https://www.pichau.com.br/computadores/pichau-gamer/"> <img src="https://cdn.pichau.com.br/wysiwyg/monte-pcgamer2015.jpg" alt="Monte seu pc - Pichau GAMER - Pichau" border="0"> </a></li>
<li><a href="https://www.pichau.com.br/computadores/pichau-workstation/"> <img src="https://cdn.pichau.com.br/wysiwyg/monte-empresa2015.png" alt="Monte seu pc - Pichau Workstation - Pichau" border="0"> </a></li>
<li><a href="https://www.pichau.com.br/computadores/pichau-home/"> <img src="https://cdn.pichau.com.br/wysiwyg/novo-selo-pichau-home.png" alt="Monte seu pc - Pichau GAMER - Pichau" border="0"> </a></li>
<li><a href="https://www.pichau.com.br/monte-seu-computador/perfil/"><img src="https://cdn.pichau.com.br/wysiwyg/novo-selo-monte-jeito.png" alt="Monte seu pc - Do seu Jeito - Pichau" border="0"> </a></li>
</ul>
<div class="banners-home">
<script>
require([
    "jquery",
    "jquery/ui"
], function($){

//<![CDATA[
    $.extend(true, $, {
        calendarConfig: {
            dayNames: ["domingo","segunda-feira","ter\u00e7a-feira","quarta-feira","quinta-feira","sexta-feira","s\u00e1bado"],
            dayNamesMin: ["dom","seg","ter","qua","qui","sex","s\u00e1b"],
            monthNames: ["janeiro","fevereiro","mar\u00e7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],
            monthNamesShort: ["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],
            infoTitle: "Sobre o calendário",
            firstDay: 0,
            closeText: "Fechar",
            currentText: "Hoje",
            prevText: "Anterior",
            nextText: "Próximo",
            weekHeader: "WK",
            timeText: " Tempo",
            hourText: "Hora",
            minuteText: "Minuto",
            dateFormat: $.datepicker.RFC_2822,
            showOn: "button",
            showAnim: "",
            changeMonth: true,
            changeYear: true,
            buttonImageOnly: null,
            buttonImage: null,
            showButtonPanel: true,
            showWeek: true,
            timeFormat: '',
            showTime: false,
            showHour: false,
            showMinute: false
        }
    });

    enUS = {"m":{"wide":["January","February","March","April","May","June","July","August","September","October","November","December"],"abbr":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}}; // en_US locale reference
//]]>

});
</script>
<input name="form_key" type="hidden" value="bQtJtJ1iUdwGRd8D"><div id="authenticationPopup" data-bind="scope:'authenticationPopup'" style="display: none;">
<script>
        window.authenticationPopup = {"autocomplete":"off","customerRegisterUrl":"https:\/\/www.pichau.com.br\/customer\/account\/create\/","customerForgotPasswordUrl":"https:\/\/www.pichau.com.br\/customer\/account\/forgotpassword\/","baseUrl":"https:\/\/www.pichau.com.br\/"};
    </script>
<!-- ko template: getTemplate() -->

<!-- /ko -->

</div>





<style type="text/css">
        .g-recaptcha {
            margin-top: 15px;
            margin-bottom: 15px;
        }
    </style>

<div class="destaques-home destaques-home-ofertas">
<div class="title-destaques"><i class="icon-ofertas"></i>
<h4><strong>Ofertas em destaque</strong></h4>
</div>
</div>
<p> </p><div class="block widget block-products-list grid">
<div class="block-content">
 <div class="products-grid grid">
<ol class="product-items widget-product-grid">
<li class="product-item">
<div class="product-item-info" style="z-index: 2000;">
<a href="https://www.pichau.com.br/redragon/mouse-gamer-redragon-griffin-rgb-7200dpi-m607" class="product-item-photo">
<img class="product-image-photo" src="https://cdn.pichau.com.br/catalog/product/cache/14035723553183b9d29277c409fc60a6/m/6/m6072625.jpg" alt="Mouse Gamer Redragon Griffin RGB 7200DPI, M607" width="500" height="500">
</a>
<div class="product-item-details">
<h4 class="product-item-name">
<a title="Mouse Gamer Redragon Griffin RGB 7200DPI, M607" href="https://www.pichau.com.br/redragon/mouse-gamer-redragon-griffin-rgb-7200dpi-m607" class="product-item-link">
Mouse Gamer Redragon Griffin RGB 7200DPI, M607 </a>
</h4>
<div class="price-box price-final_price" data-role="priceBox" data-product-id="13313" data-price-box="product-id-13313">
<span class="price-container price-final_price tax weee">
<span id="old-price-13313-widget-product-grid" data-price-amount="102.16" data-price-type="finalPrice" class="price-wrapper ">
<span class="price">R$102,16</span> </span>
<span class="price-installments">
<span>10x de R$10,22</span> <strong>sem juros</strong> no cartão </span>
</span>
<span class="price-boleto">
<span>à vista R$89,90</span> no boleto com <strong>12% de desconto</strong></span>

</div> <div class="product-reviews-summary">
<div class="rating-summary">
<span class="label"><span>Avaliação:</span></span>
<div class="rating-result" title="100%">
<span style="width:100%">
<span>
<span>100</span>% of <span>100</span>
</span>
</span>
</div>
</div>
<div class="reviews-actions">
<a class="action view" href="https://www.pichau.com.br/redragon/mouse-gamer-redragon-griffin-rgb-7200dpi-m607#reviews">
<span>8</span>&nbsp;
<span>Avaliações</span>
</a>
<a class="action add" href="https://www.pichau.com.br/redragon/mouse-gamer-redragon-griffin-rgb-7200dpi-m607#review-form">Avalie este produto</a>
</div>
</div>
<div class="product-item-actions">
<div class="actions-primary">
<a title="Mouse Gamer Redragon Griffin RGB 7200DPI, M607" href="https://www.pichau.com.br/redragon/mouse-gamer-redragon-griffin-rgb-7200dpi-m607" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
<button class="action tocart bt-list-product" data-post="{&quot;action&quot;:&quot;https:\/\/www.pichau.com.br\/checkout\/cart\/add\/uenc\/aHR0cHM6Ly93d3cucGljaGF1LmNvbS5ici8%2C\/product\/13313\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;13313&quot;,&quot;uenc&quot;:&quot;aHR0cHM6Ly93d3cucGljaGF1LmNvbS5ici8,&quot;}}" type="button" title="Colocar no Carrinho">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </button>
</div>
</div>
</div>
</div>
</li> <li class="product-item">
<div class="product-item-info" style="z-index: 2000;">
<a href="https://www.pichau.com.br/teclab/teclado-mecanico-redragon-dark-avenger-rgb-usb-switch-azul-k568rgb-2-blue" class="product-item-photo">
<img class="product-image-photo" src="https://cdn.pichau.com.br/catalog/product/cache/14035723553183b9d29277c409fc60a6/k/5/k568rgb-13123.jpg" alt="Teclado Mecanico Redragon Dark Avenger RGB USB Switch Azul, K568RGB-2 BLUE" width="500" height="500">
</a>
<div class="product-item-details">
<h4 class="product-item-name">
<a title="Teclado Mecanico Redragon Dark Avenger RGB USB Switch Azul, K568RGB-2 BLUE" href="https://www.pichau.com.br/teclab/teclado-mecanico-redragon-dark-avenger-rgb-usb-switch-azul-k568rgb-2-blue" class="product-item-link">
Teclado Mecanico Redragon Dark Avenger RGB USB Switch Azul, K568RGB-2 BLUE </a>
</h4>
<div class="price-box price-final_price" data-role="priceBox" data-product-id="14843" data-price-box="product-id-14843">
<span class="price-container price-final_price tax weee">
<span id="old-price-14843-widget-product-grid" data-price-amount="283.98" data-price-type="finalPrice" class="price-wrapper ">
<span class="price">R$283,98</span> </span>
<span class="price-installments">
<span>10x de R$28,40</span> <strong>sem juros</strong> no cartão </span>
</span>
<span class="price-boleto">
<span>à vista R$249,90</span> no boleto com <strong>12% de desconto</strong></span>

</div> <div class="product-reviews-summary">
<div class="rating-summary">
<span class="label"><span>Avaliação:</span></span>
<div class="rating-result" title="100%">
<span style="width:100%">
<span>
<span>100</span>% of <span>100</span>
</span>
</span>
</div>
</div>
<div class="reviews-actions">
<a class="action view" href="https://www.pichau.com.br/teclab/teclado-mecanico-redragon-dark-avenger-rgb-usb-switch-azul-k568rgb-2-blue#reviews">
<span>11</span>&nbsp;
<span>Avaliações</span>
</a>
<a class="action add" href="https://www.pichau.com.br/teclab/teclado-mecanico-redragon-dark-avenger-rgb-usb-switch-azul-k568rgb-2-blue#review-form">Avalie este produto</a>
</div>
</div>
<div class="product-item-actions">
<div class="actions-primary">
<a title="Teclado Mecanico Redragon Dark Avenger RGB USB Switch Azul, K568RGB-2 BLUE" href="https://www.pichau.com.br/teclab/teclado-mecanico-redragon-dark-avenger-rgb-usb-switch-azul-k568rgb-2-blue" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
<button class="action tocart bt-list-product" data-post="{&quot;action&quot;:&quot;https:\/\/www.pichau.com.br\/checkout\/cart\/add\/uenc\/aHR0cHM6Ly93d3cucGljaGF1LmNvbS5ici8%2C\/product\/14843\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;14843&quot;,&quot;uenc&quot;:&quot;aHR0cHM6Ly93d3cucGljaGF1LmNvbS5ici8,&quot;}}" type="button" title="Colocar no Carrinho">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </button>
</div>
</div>
</div>
</div>
</li> <li class="product-item">
<div class="product-item-info" style="z-index: 2000;">
 <a href="https://www.pichau.com.br/hardware/processador-amd-ryzen-3-3200g-quad-core-3-6ghz-4ghz-turbo-6mb-cache-am4-yd3200c5fhbox" class="product-item-photo">
<img class="product-image-photo" src="https://cdn.pichau.com.br/catalog/product/cache/14035723553183b9d29277c409fc60a6/y/d/yd3200c5fhbox6222.jpg" alt="Processador AMD Ryzen 3 3200G Quad-Core 3.6GHz (4GHz Turbo) 6MB Cache AM4, YD3200C5FHBOX" width="500" height="500">
</a>
<div class="product-item-details">
<h4 class="product-item-name">
<a title="Processador AMD Ryzen 3 3200G Quad-Core 3.6GHz (4GHz Turbo) 6MB Cache AM4, YD3200C5FHBOX" href="https://www.pichau.com.br/hardware/processador-amd-ryzen-3-3200g-quad-core-3-6ghz-4ghz-turbo-6mb-cache-am4-yd3200c5fhbox" class="product-item-link">
Processador AMD Ryzen 3 3200G Quad-Core 3.6GHz (4GHz Turbo) 6MB Cache AM4, YD3... </a>
</h4>
<div class="price-box price-final_price" data-role="priceBox" data-product-id="16184" data-price-box="product-id-16184">
<span class="price-container price-final_price tax weee">
<span id="old-price-16184-widget-product-grid" data-price-amount="726.16" data-price-type="finalPrice" class="price-wrapper ">
<span class="price">R$726,16</span> </span>
<span class="price-installments">
<span>10x de R$72,62</span> <strong>sem juros</strong> no cartão </span>
</span>
<span class="price-boleto">
<span>à vista R$639,02</span> no boleto com <strong>12% de desconto</strong></span>

</div> <div class="product-reviews-summary">
<div class="rating-summary">
<span class="label"><span>Avaliação:</span></span>
<div class="rating-result" title="96%">
<span style="width:96%">
<span>
<span>96</span>% of <span>100</span>
</span>
</span>
</div>
</div>
<div class="reviews-actions">
<a class="action view" href="https://www.pichau.com.br/hardware/processador-amd-ryzen-3-3200g-quad-core-3-6ghz-4ghz-turbo-6mb-cache-am4-yd3200c5fhbox#reviews">
<span>5</span>&nbsp;
<span>Avaliações</span>
</a>
<a class="action add" href="https://www.pichau.com.br/hardware/processador-amd-ryzen-3-3200g-quad-core-3-6ghz-4ghz-turbo-6mb-cache-am4-yd3200c5fhbox#review-form">Avalie este produto</a>
</div>
</div>
<div class="product-item-actions">
<div class="actions-primary">
 <a title="Processador AMD Ryzen 3 3200G Quad-Core 3.6GHz (4GHz Turbo) 6MB Cache AM4, YD3200C5FHBOX" href="https://www.pichau.com.br/hardware/processador-amd-ryzen-3-3200g-quad-core-3-6ghz-4ghz-turbo-6mb-cache-am4-yd3200c5fhbox" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
<button class="action tocart bt-list-product" data-post="{&quot;action&quot;:&quot;https:\/\/www.pichau.com.br\/checkout\/cart\/add\/uenc\/aHR0cHM6Ly93d3cucGljaGF1LmNvbS5ici8%2C\/product\/16184\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;16184&quot;,&quot;uenc&quot;:&quot;aHR0cHM6Ly93d3cucGljaGF1LmNvbS5ici8,&quot;}}" type="button" title="Colocar no Carrinho">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </button>
</div>
</div>
</div>
</div>
</li> <li class="product-item">
<div class="product-item-info" style="z-index: 2000;">
<a href="https://www.pichau.com.br/hardware/fonte-pichau-gaming-nidus-500w-bronze-80-plus-pg-5001-br" class="product-item-photo">
<img class="product-image-photo" src="https://cdn.pichau.com.br/catalog/product/cache/14035723553183b9d29277c409fc60a6/p/g/pg-5001-br2315.jpg" alt="Fonte Pichau Gaming Nidus 500W Bronze 80 Plus, PG-5001-BR" width="500" height="500">
</a>
<div class="product-item-details">
<h4 class="product-item-name">
<a title="Fonte Pichau Gaming Nidus 500W Bronze 80 Plus, PG-5001-BR" href="https://www.pichau.com.br/hardware/fonte-pichau-gaming-nidus-500w-bronze-80-plus-pg-5001-br" class="product-item-link">
Fonte Pichau Gaming Nidus 500W Bronze 80 Plus, PG-5001-BR </a>
</h4>
<div class="price-box price-final_price" data-role="priceBox" data-product-id="16504" data-price-box="product-id-16504">
<span class="special-price">
<span class="price-container price-final_price tax weee">
<span class="price-label">Preço Promocional</span>
<span id="old-price-16504-widget-product-grid" data-price-amount="318.07" data-price-type="finalPrice" class="price-wrapper ">
<span class="price">R$318,07</span> </span>
<span class="price-installments">
<span>10x de R$31,81</span> <strong>sem juros</strong> no cartão </span>
</span>
<span class="price-boleto">
<span>à vista R$279,90</span> no boleto com <strong>12% de desconto</strong></span>

</span>
<span class="old-price">
<span class="price-container price-final_price tax weee">
<span class="price-label">was</span>
<span id="old-price-16504-widget-product-grid" data-price-amount="340.79" data-price-type="oldPrice" class="price-wrapper ">
<span class="price">R$340,79</span> </span>
<span class="price-installments">
<span>10x de R$34,08</span> <strong>sem juros</strong> no cartão </span>
</span>
<span class="price-boleto">
<span>à vista R$299,90</span> no boleto com <strong>12% de desconto</strong></span>

</span>
</div> <div class="product-reviews-summary">
<div class="rating-summary">
<span class="label"><span>Avaliação:</span></span>
<div class="rating-result" title="98%">
<span style="width:98%">
<span>
<span>98</span>% of <span>100</span>
</span>
</span>
</div>
</div>
<div class="reviews-actions">
<a class="action view" href="https://www.pichau.com.br/hardware/fonte-pichau-gaming-nidus-500w-bronze-80-plus-pg-5001-br#reviews">
<span>13</span>&nbsp;
<span>Avaliações</span>
</a>
<a class="action add" href="https://www.pichau.com.br/hardware/fonte-pichau-gaming-nidus-500w-bronze-80-plus-pg-5001-br#review-form">Avalie este produto</a>
</div>
</div>
<div class="product-item-actions">
<div class="actions-primary">
<a title="Fonte Pichau Gaming Nidus 500W Bronze 80 Plus, PG-5001-BR" href="https://www.pichau.com.br/hardware/fonte-pichau-gaming-nidus-500w-bronze-80-plus-pg-5001-br" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
<button class="action tocart bt-list-product" data-post="{&quot;action&quot;:&quot;https:\/\/www.pichau.com.br\/checkout\/cart\/add\/uenc\/aHR0cHM6Ly93d3cucGljaGF1LmNvbS5ici8%2C\/product\/16504\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;16504&quot;,&quot;uenc&quot;:&quot;aHR0cHM6Ly93d3cucGljaGF1LmNvbS5ici8,&quot;}}" type="button" title="Colocar no Carrinho">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
 Comprar </button>
</div>
</div>
</div>
</div>
</li> <li class="product-item">
<div class="product-item-info" style="z-index: 2000;">
<a href="https://www.pichau.com.br/hardware/processador-intel-core-i5-9600kf-hexa-core-3-7ghz-4-6ghz-turbo-9mb-cache-lga1151-bx80684i59600kf" class="product-item-photo">
<img class="product-image-photo" src="https://cdn.pichau.com.br/catalog/product/cache/14035723553183b9d29277c409fc60a6/b/x/bx80684i59600kf2_1.jpg" alt="Processador Intel Core i5-9600KF Hexa-Core 3.7GHz (4.6GHz Turbo) 9MB Cache LGA1151, BX80684I59600KF" width="500" height="500">
</a>
<div class="product-item-details">
<h4 class="product-item-name">
<a title="Processador Intel Core i5-9600KF Hexa-Core 3.7GHz (4.6GHz Turbo) 9MB Cache LGA1151, BX80684I59600KF" href="https://www.pichau.com.br/hardware/processador-intel-core-i5-9600kf-hexa-core-3-7ghz-4-6ghz-turbo-9mb-cache-lga1151-bx80684i59600kf" class="product-item-link">
Processador Intel Core i5-9600KF Hexa-Core 3.7GHz (4.6GHz Turbo) 9MB Cache LGA... </a>
</h4>
<div class="price-box price-final_price" data-role="priceBox" data-product-id="16755" data-price-box="product-id-16755">
<span class="price-container price-final_price tax weee">
<span id="old-price-16755-widget-product-grid" data-price-amount="1578.39" data-price-type="finalPrice" class="price-wrapper ">
<span class="price">R$1.578,39</span> </span>
<span class="price-installments">
<span>10x de R$157,84</span> <strong>sem juros</strong> no cartão </span>
</span>
<span class="price-boleto">
<span>à vista R$1.388,98</span> no boleto com <strong>12% de desconto</strong></span>

</div> <div class="product-reviews-summary">
<div class="rating-summary">
<span class="label"><span>Avaliação:</span></span>
<div class="rating-result" title="100%">
<span style="width:100%">
<span>
<span>100</span>% of <span>100</span>
</span>
</span>
</div>
</div>
<div class="reviews-actions">
<a class="action view" href="https://www.pichau.com.br/hardware/processador-intel-core-i5-9600kf-hexa-core-3-7ghz-4-6ghz-turbo-9mb-cache-lga1151-bx80684i59600kf#reviews">
<span>1</span>&nbsp;
<span>Avaliação</span>
</a>
<a class="action add" href="https://www.pichau.com.br/hardware/processador-intel-core-i5-9600kf-hexa-core-3-7ghz-4-6ghz-turbo-9mb-cache-lga1151-bx80684i59600kf#review-form">Avalie este produto</a>
</div>
</div>
<div class="product-item-actions">
<div class="actions-primary">
<a title="Processador Intel Core i5-9600KF Hexa-Core 3.7GHz (4.6GHz Turbo) 9MB Cache LGA1151, BX80684I59600KF" href="https://www.pichau.com.br/hardware/processador-intel-core-i5-9600kf-hexa-core-3-7ghz-4-6ghz-turbo-9mb-cache-lga1151-bx80684i59600kf" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
<button class="action tocart bt-list-product" data-post="{&quot;action&quot;:&quot;https:\/\/www.pichau.com.br\/checkout\/cart\/add\/uenc\/aHR0cHM6Ly93d3cucGljaGF1LmNvbS5ici8%2C\/product\/16755\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;16755&quot;,&quot;uenc&quot;:&quot;aHR0cHM6Ly93d3cucGljaGF1LmNvbS5ici8,&quot;}}" type="button" title="Colocar no Carrinho">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </button>
</div>
</div>
</div>
</div>
</li> <li class="product-item">
<div class="product-item-info" style="z-index: 2000;">
<a href="https://www.pichau.com.br/destaques/fone-de-ouvido-gamer-pichau-p851-rgb-7-1-usb-pgh-p851-rgb" class="product-item-photo">
<img class="product-image-photo" src="https://cdn.pichau.com.br/catalog/product/cache/14035723553183b9d29277c409fc60a6/p/g/pgh-p851-rgb1020.jpg" alt="Fone de Ouvido Gamer Pichau P851 RGB 7.1 USB, PGH-P851-RGB" width="500" height="500">
</a>
<div class="product-item-details">
<h4 class="product-item-name">
<a title="Fone de Ouvido Gamer Pichau P851 RGB 7.1 USB, PGH-P851-RGB" href="https://www.pichau.com.br/destaques/fone-de-ouvido-gamer-pichau-p851-rgb-7-1-usb-pgh-p851-rgb" class="product-item-link">
Fone de Ouvido Gamer Pichau P851 RGB 7.1 USB, PGH-P851-RGB </a>
</h4>
<div class="price-box price-final_price" data-role="priceBox" data-product-id="17335" data-price-box="product-id-17335">
<span class="price-container price-final_price tax weee">
<span id="old-price-17335-widget-product-grid" data-price-amount="329.43" data-price-type="finalPrice" class="price-wrapper ">
<span class="price">R$329,43</span> </span>
<span class="price-installments">
<span>10x de R$32,94</span> <strong>sem juros</strong> no cartão </span>
</span>
<span class="price-boleto">
<span>à vista R$289,90</span> no boleto com <strong>12% de desconto</strong></span>

</div> <div class="product-reviews-summary">
<div class="rating-summary">
<span class="label"><span>Avaliação:</span></span>
<div class="rating-result" title="100%">
<span style="width:100%">
<span>
<span>100</span>% of <span>100</span>
</span>
</span>
</div>
</div>
<div class="reviews-actions">
<a class="action view" href="https://www.pichau.com.br/destaques/fone-de-ouvido-gamer-pichau-p851-rgb-7-1-usb-pgh-p851-rgb#reviews">
<span>3</span>&nbsp;
<span>Avaliações</span>
</a>
<a class="action add" href="https://www.pichau.com.br/destaques/fone-de-ouvido-gamer-pichau-p851-rgb-7-1-usb-pgh-p851-rgb#review-form">Avalie este produto</a>
</div>
</div>
<div class="product-item-actions">
<div class="actions-primary">
<a title="Fone de Ouvido Gamer Pichau P851 RGB 7.1 USB, PGH-P851-RGB" href="https://www.pichau.com.br/destaques/fone-de-ouvido-gamer-pichau-p851-rgb-7-1-usb-pgh-p851-rgb" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
<button class="action tocart bt-list-product" data-post="{&quot;action&quot;:&quot;https:\/\/www.pichau.com.br\/checkout\/cart\/add\/uenc\/aHR0cHM6Ly93d3cucGljaGF1LmNvbS5ici8%2C\/product\/17335\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;17335&quot;,&quot;uenc&quot;:&quot;aHR0cHM6Ly93d3cucGljaGF1LmNvbS5ici8,&quot;}}" type="button" title="Colocar no Carrinho">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </button>
</div>
</div>
</div>
</div>
</li> <li class="product-item">
<div class="product-item-info" style="z-index: 2000;">
 <a href="https://www.pichau.com.br/hardware/memoria-team-group-t-force-vulcan-pichau-8gb-1x8-ddr4-2666mhz-branca-tlpbd48g2666hc18h01" class="product-item-photo">
<img class="product-image-photo" src="https://cdn.pichau.com.br/catalog/product/cache/14035723553183b9d29277c409fc60a6/t/l/tlpbd48g2666hc18h01.jpg" alt="Memoria Team Group T-Force Vulcan Pichau 8GB (1x8) DDR4 2666MHz Branca, TLPBD48G2666HC18H01" width="500" height="500">
</a>
<div class="product-item-details">
<h4 class="product-item-name">
<a title="Memoria Team Group T-Force Vulcan Pichau 8GB (1x8) DDR4 2666MHz Branca, TLPBD48G2666HC18H01" href="https://www.pichau.com.br/hardware/memoria-team-group-t-force-vulcan-pichau-8gb-1x8-ddr4-2666mhz-branca-tlpbd48g2666hc18h01" class="product-item-link">
Memoria Team Group T-Force Vulcan Pichau 8GB (1x8) DDR4 2666MHz Branca, TLPBD4... </a>
</h4>
<div class="price-box price-final_price" data-role="priceBox" data-product-id="17933" data-price-box="product-id-17933">
<span class="special-price">
<span class="price-container price-final_price tax weee">
<span class="price-label">Preço Promocional</span>
<span id="old-price-17933-widget-product-grid" data-price-amount="328.42" data-price-type="finalPrice" class="price-wrapper ">
<span class="price">R$328,42</span> </span>
<span class="price-installments">
<span>10x de R$32,84</span> <strong>sem juros</strong> no cartão </span>
</span>
<span class="price-boleto">
<span>à vista R$289,01</span> no boleto com <strong>12% de desconto</strong></span>

</span>
<span class="old-price">
<span class="price-container price-final_price tax weee">
<span class="price-label">was</span>
<span id="old-price-17933-widget-product-grid" data-price-amount="351.12" data-price-type="oldPrice" class="price-wrapper ">
<span class="price">R$351,12</span> </span>
<span class="price-installments">
<span>10x de R$35,11</span> <strong>sem juros</strong> no cartão </span>
</span>
<span class="price-boleto">
<span>à vista R$308,99</span> no boleto com <strong>12% de desconto</strong></span>

</span>
</div>  <div class="product-reviews-summary">
<div class="rating-summary">
<span class="label"><span>Avaliação:</span></span>
<div class="rating-result" title="97%">
<span style="width:97%">
<span>
<span>97</span>% of <span>100</span>
</span>
</span>
</div>
</div>
<div class="reviews-actions">
<a class="action view" href="https://www.pichau.com.br/hardware/memoria-team-group-t-force-vulcan-pichau-8gb-1x8-ddr4-2666mhz-branca-tlpbd48g2666hc18h01#reviews">
<span>6</span>&nbsp;
<span>Avaliações</span>
</a>
<a class="action add" href="https://www.pichau.com.br/hardware/memoria-team-group-t-force-vulcan-pichau-8gb-1x8-ddr4-2666mhz-branca-tlpbd48g2666hc18h01#review-form">Avalie este produto</a>
</div>
</div>
<div class="product-item-actions">
<div class="actions-primary">
<a title="Memoria Team Group T-Force Vulcan Pichau 8GB (1x8) DDR4 2666MHz Branca, TLPBD48G2666HC18H01" href="https://www.pichau.com.br/hardware/memoria-team-group-t-force-vulcan-pichau-8gb-1x8-ddr4-2666mhz-branca-tlpbd48g2666hc18h01" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
<button class="action tocart bt-list-product" data-post="{&quot;action&quot;:&quot;https:\/\/www.pichau.com.br\/checkout\/cart\/add\/uenc\/aHR0cHM6Ly93d3cucGljaGF1LmNvbS5ici8%2C\/product\/17933\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;17933&quot;,&quot;uenc&quot;:&quot;aHR0cHM6Ly93d3cucGljaGF1LmNvbS5ici8,&quot;}}" type="button" title="Colocar no Carrinho">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </button>
</div>
</div>
</div>
</div>
</li> <li class="product-item">
<div class="product-item-info" style="z-index: 2000;">
<a href="https://www.pichau.com.br/destaques/microfone-condensador-blue-yeti-nano-vivid-blue-988-000089" class="product-item-photo">
<img class="product-image-photo" src="https://cdn.pichau.com.br/catalog/product/cache/14035723553183b9d29277c409fc60a6/9/8/988-000089.jpg" alt="Microfone Condensador Blue Yeti Nano Vivid Blue, 988-000089" width="500" height="500">
</a>
<div class="product-item-details">
<h4 class="product-item-name">
<a title="Microfone Condensador Blue Yeti Nano Vivid Blue, 988-000089" href="https://www.pichau.com.br/destaques/microfone-condensador-blue-yeti-nano-vivid-blue-988-000089" class="product-item-link">
Microfone Condensador Blue Yeti Nano Vivid Blue, 988-000089 </a>
</h4>
<div class="price-box price-final_price" data-role="priceBox" data-product-id="18120" data-price-box="product-id-18120">
<span class="price-container price-final_price tax weee">
<span id="old-price-18120-widget-product-grid" data-price-amount="738.54" data-price-type="finalPrice" class="price-wrapper ">
<span class="price">R$738,54</span> </span>
<span class="price-installments">
<span>10x de R$73,85</span> <strong>sem juros</strong> no cartão </span>
</span>
<span class="price-boleto">
<span>à vista R$649,92</span> no boleto com <strong>12% de desconto</strong></span>

</div>
<div class="product-item-actions">
<div class="actions-primary">
<a title="Microfone Condensador Blue Yeti Nano Vivid Blue, 988-000089" href="https://www.pichau.com.br/destaques/microfone-condensador-blue-yeti-nano-vivid-blue-988-000089" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
<button class="action tocart bt-list-product" data-post="{&quot;action&quot;:&quot;https:\/\/www.pichau.com.br\/checkout\/cart\/add\/uenc\/aHR0cHM6Ly93d3cucGljaGF1LmNvbS5ici8%2C\/product\/18120\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;18120&quot;,&quot;uenc&quot;:&quot;aHR0cHM6Ly93d3cucGljaGF1LmNvbS5ici8,&quot;}}" type="button" title="Colocar no Carrinho">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </button>
</div>
</div>
</div>
</div>
</li> <li class="product-item">
<div class="product-item-info" style="z-index: 2000;">
<a href="https://www.pichau.com.br/destaques/display-interativo-digitalizadora-wacom-one-ceres-13-dtc133w0a1" class="product-item-photo">

<img class="product-image-photo" src="https://cdn.pichau.com.br/catalog/product/cache/14035723553183b9d29277c409fc60a6/d/t/dtc133w0a1.jpg" alt="Display Interativo Digitalizadora Wacom One 13&quot;, DTC133W0A" width="500" height="500">
</a>
<div class="product-item-details">
<h4 class="product-item-name">
<a title="Display Interativo Digitalizadora Wacom One 13&quot;, DTC133W0A" href="https://www.pichau.com.br/destaques/display-interativo-digitalizadora-wacom-one-ceres-13-dtc133w0a1" class="product-item-link">
Display Interativo Digitalizadora Wacom One 13", DTC133W0A </a>
</h4>
<div class="price-box price-final_price" data-role="priceBox" data-product-id="18317" data-price-box="product-id-18317">
<span class="price-container price-final_price tax weee">
<span id="old-price-18317-widget-product-grid" data-price-amount="3750" data-price-type="finalPrice" class="price-wrapper ">
<span class="price">R$3.750,00</span> </span>
<span class="price-installments">
<span>10x de R$375,00</span> <strong>sem juros</strong> no cartão </span>
</span>
<span class="price-boleto">
<span>à vista R$3.300,00</span> no boleto com <strong>12% de desconto</strong></span>

</div>
<div class="product-item-actions">
<div class="actions-primary">
<a title="Display Interativo Digitalizadora Wacom One 13&quot;, DTC133W0A" href="https://www.pichau.com.br/destaques/display-interativo-digitalizadora-wacom-one-ceres-13-dtc133w0a1" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
<button class="action tocart bt-list-product" data-post="{&quot;action&quot;:&quot;https:\/\/www.pichau.com.br\/checkout\/cart\/add\/uenc\/aHR0cHM6Ly93d3cucGljaGF1LmNvbS5ici8%2C\/product\/18317\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;18317&quot;,&quot;uenc&quot;:&quot;aHR0cHM6Ly93d3cucGljaGF1LmNvbS5ici8,&quot;}}" type="button" title="Colocar no Carrinho">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar  </button>
</div>
</div>
</div>
</div>
</li> <li class="product-item">
<div class="product-item-info" style="z-index: 2000;">
<a href="https://www.pichau.com.br/hardware/processador-amd-ryzen-5-3500x-hexa-core-3-6ghz-4-1ghz-turbo-35mb-cache-am4-100-100000158box" class="product-item-photo">
<img class="product-image-photo" src="https://cdn.pichau.com.br/catalog/product/cache/14035723553183b9d29277c409fc60a6/1/0/100-100000158box.jpg" alt="Processador AMD Ryzen 5 3500X Hexa-Core 3.6GHz (4.1GHz Turbo) 35MB Cache AM4, 100-100000158BOX" width="500" height="500">
</a>
<div class="product-item-details">
<h4 class="product-item-name">
<a title="Processador AMD Ryzen 5 3500X Hexa-Core 3.6GHz (4.1GHz Turbo) 35MB Cache AM4, 100-100000158BOX" href="https://www.pichau.com.br/hardware/processador-amd-ryzen-5-3500x-hexa-core-3-6ghz-4-1ghz-turbo-35mb-cache-am4-100-100000158box" class="product-item-link">
Processador AMD Ryzen 5 3500X Hexa-Core 3.6GHz (4.1GHz Turbo) 35MB Cache AM4, ... </a>
</h4>
<div class="price-box price-final_price" data-role="priceBox" data-product-id="18516" data-price-box="product-id-18516">
<span class="special-price">
<span class="price-container price-final_price tax weee">
<span class="price-label">Preço Promocional</span>
<span id="old-price-18516-widget-product-grid" data-price-amount="1124.88" data-price-type="finalPrice" class="price-wrapper ">
<span class="price">R$1.124,88</span> </span>
<span class="price-installments">
<span>10x de R$112,49</span> <strong>sem juros</strong> no cartão </span>
</span>
<span class="price-boleto">
<span>à vista R$989,89</span> no boleto com <strong>12% de desconto</strong></span>

</span>
<span class="old-price">
<span class="price-container price-final_price tax weee">
<span class="price-label">was</span>
<span id="old-price-18516-widget-product-grid" data-price-amount="1248.9" data-price-type="oldPrice" class="price-wrapper ">
<span class="price">R$1.248,90</span> </span>
<span class="price-installments">
<span>10x de R$124,89</span> <strong>sem juros</strong> no cartão </span>
</span>
<span class="price-boleto">
<span>à vista R$1.099,03</span> no boleto com <strong>12% de desconto</strong></span>

</span>
</div>
<div class="product-item-actions">
<div class="actions-primary">
<a title="Processador AMD Ryzen 5 3500X Hexa-Core 3.6GHz (4.1GHz Turbo) 35MB Cache AM4, 100-100000158BOX" href="https://www.pichau.com.br/hardware/processador-amd-ryzen-5-3500x-hexa-core-3-6ghz-4-1ghz-turbo-35mb-cache-am4-100-100000158box" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
<button class="action tocart bt-list-product" data-post="{&quot;action&quot;:&quot;https:\/\/www.pichau.com.br\/checkout\/cart\/add\/uenc\/aHR0cHM6Ly93d3cucGljaGF1LmNvbS5ici8%2C\/product\/18516\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;18516&quot;,&quot;uenc&quot;:&quot;aHR0cHM6Ly93d3cucGljaGF1LmNvbS5ici8,&quot;}}" type="button" title="Colocar no Carrinho">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </button>
</div>
</div>
</div>
</div>
</li> </ol>
</div>
</div>
</div>
<script>
    require([
        'jquery'
    ], function($){
        jQuery(document).ready(function () {
            $('.action.tocart.bt-list-product').removeAttr('disabled');
        });
    });
</script>
<p></p>
<div class="slider-home">
<div class="aw-rbslider-container uk-slidenav-position" style="width: 900px;">
<ul class="uk-slideshow" style="height: 100px;">
<li data-slide="html" aria-hidden="true" class="" style="animation-duration: 500ms; opacity: 0; height: 100px;"><div>
<a href="https://www.pichau.com.br/catalogsearch/result/?q=aoc" target="_blank" rel="nofollow">
<img class="aw-rbslider__img" src="https://cdn.pichau.com.br/aw_rbslider/slides/Display_900x100.png" title="" alt="">
</a>
</div></li>
<li data-slide="html" aria-hidden="false" style="animation-duration: 500ms; opacity: 1; height: 100px;" class="uk-active"><div>
<a href="https://www.pichau.com.br/hardware/processadores/intel" target="_blank" rel="nofollow">
<img class="aw-rbslider__img" src="https://cdn.pichau.com.br/aw_rbslider/slides/filete-site.jpg" title="" alt="">
</a>
</div></li>
<li data-slide="html" aria-hidden="true" style="height: 100px;"><div>
<a href="https://www.pichau.com.br/hardware/placa-de-video?marcas=123" target="_blank" rel="nofollow">
<img class="aw-rbslider__img" src="https://cdn.pichau.com.br/aw_rbslider/slides/fXrGVyIQ.png" title="" alt="">
</a>
</div></li>
</ul>
</div>
</div>
<div class="destaques-home destaques-home-lancamentos">
<div class="title-destaques"><i class="icon-lancamento"></i>
<h4><strong>Produtos novos e lançamentos</strong></h4>
</div>
</div>
<p> </p><div class="block widget block-products-list grid">
<div class="block-content">
 <div class="products-grid grid">
<ol class="product-items widget-product-grid">
<li class="product-item">
<div class="product-item-info" style="z-index: 2000;">
<a href="https://www.pichau.com.br/novidades/fone-de-ouvido-gamer-pichau-p651-rgb-7-1-usb-pgh-p651-rgb" class="product-item-photo" style="display: inline-block;">
<img class="product-image-photo" src="https://cdn.pichau.com.br/catalog/product/cache/14035723553183b9d29277c409fc60a6/p/g/pgh-p651-rgb1212.jpg" alt="Fone de Ouvido Gamer Pichau P651 RGB 7.1 USB, PGH-P651-RGB" width="500" height="500">
<div class="amlabel-position-top-left-17336-cat amlabel-position-wrapper" style="top: 0px; left: 0px; line-height: normal; position: absolute; z-index: 995; display: block; width: 45px; height: 45px;"><div class="amasty-label-container amasty-label-container-4-17336-cat amasty-label-for-17336" style="max-width: 45px; width: 45px; height: 45px; position: relative; display: block;">
<div class="amasty-label-text" style="padding: 0px 3px; position: absolute; white-space: nowrap; width: 100%; line-height: 45px;">
</div>
<img class="amasty-label-image" id="amasty-label-image-4-17336-cat" src="https://cdn.pichau.com.br/amasty/amlabel/img-novo.png" style="opacity: 1 !important; width: 100%;" title="" alt="">
</div></div>
<script>
   require([
      'jquery',
      'Amasty_Label/js/label',
       'domReady!'
   ], function ($) {
       $('.amasty-label-container-4-17336-cat').amShowLabel({"position":"top-left","size":"","path":".product-image-container, .product-item-photo","mode":"cat","move":0,"product":"17336","label":4,"margin":null,"alignment":null});
   });
</script>
</a>
<div class="product-item-details">
<h4 class="product-item-name">
<a title="Fone de Ouvido Gamer Pichau P651 RGB 7.1 USB, PGH-P651-RGB" href="https://www.pichau.com.br/novidades/fone-de-ouvido-gamer-pichau-p651-rgb-7-1-usb-pgh-p651-rgb" class="product-item-link">
Fone de Ouvido Gamer Pichau P651 RGB 7.1 USB, PGH-P651-RGB </a>
</h4>
<div class="price-box price-final_price" data-role="priceBox" data-product-id="17336" data-price-box="product-id-17336">
<span class="special-price">
<span class="price-container price-final_price tax weee">
<span class="price-label">Preço Promocional</span>
<span id="old-price-17336-widget-product-grid" data-price-amount="215.8" data-price-type="finalPrice" class="price-wrapper ">
<span class="price">R$215,80</span> </span>
<span class="price-installments">
<span>10x de R$21,58</span> <strong>sem juros</strong> no cartão </span>
</span>
<span class="price-boleto">
<span>à vista R$189,90</span> no boleto com <strong>12% de desconto</strong></span>

</span>
<span class="old-price">
<span class="price-container price-final_price tax weee">
<span class="price-label">was</span>
<span id="old-price-17336-widget-product-grid" data-price-amount="272.61" data-price-type="oldPrice" class="price-wrapper ">
<span class="price">R$272,61</span> </span>
<span class="price-installments">
<span>10x de R$27,26</span> <strong>sem juros</strong> no cartão </span>
</span>
<span class="price-boleto">
<span>à vista R$239,90</span> no boleto com <strong>12% de desconto</strong></span>

</span>
</div>  <div class="product-reviews-summary">
<div class="rating-summary">
<span class="label"><span>Avaliação:</span></span>
<div class="rating-result" title="100%">
<span style="width:100%">
<span>
<span>100</span>% of <span>100</span>
</span>
</span>
</div>
</div>
<div class="reviews-actions">
<a class="action view" href="https://www.pichau.com.br/novidades/fone-de-ouvido-gamer-pichau-p651-rgb-7-1-usb-pgh-p651-rgb#reviews">
<span>1</span>&nbsp;
<span>Avaliação</span>
</a>
<a class="action add" href="https://www.pichau.com.br/novidades/fone-de-ouvido-gamer-pichau-p651-rgb-7-1-usb-pgh-p651-rgb#review-form">Avalie este produto</a>
</div>
</div>
<div class="product-item-actions">
<div class="actions-primary">
<a title="Fone de Ouvido Gamer Pichau P651 RGB 7.1 USB, PGH-P651-RGB" href="https://www.pichau.com.br/novidades/fone-de-ouvido-gamer-pichau-p651-rgb-7-1-usb-pgh-p651-rgb" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
<button class="action tocart bt-list-product" data-post="{&quot;action&quot;:&quot;https:\/\/www.pichau.com.br\/checkout\/cart\/add\/uenc\/aHR0cHM6Ly93d3cucGljaGF1LmNvbS5ici8%2C\/product\/17336\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;17336&quot;,&quot;uenc&quot;:&quot;aHR0cHM6Ly93d3cucGljaGF1LmNvbS5ici8,&quot;}}" type="button" title="Colocar no Carrinho">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </button>
</div>
</div>
</div>
</div>
</li> <li class="product-item">
<div class="product-item-info" style="z-index: 2000;">
<a href="https://www.pichau.com.br/novidades/fone-de-ouvido-gamer-pichau-p451-led-vermelho-7-1-usb-pgh-p451" class="product-item-photo" style="display: inline-block;">
<img class="product-image-photo" src="https://cdn.pichau.com.br/catalog/product/cache/14035723553183b9d29277c409fc60a6/p/g/pgh-p451231.jpg" alt="Fone de Ouvido Gamer Pichau P451 LED Vermelho 7.1 USB, PGH-P451" width="500" height="500">
<div class="amlabel-position-top-left-17337-cat amlabel-position-wrapper" style="top: 0px; left: 0px; line-height: normal; position: absolute; z-index: 995; display: block; width: 45px; height: 45px;"><div class="amasty-label-container amasty-label-container-4-17337-cat amasty-label-for-17337" style="max-width: 45px; width: 45px; height: 45px; position: relative; display: block;">
<div class="amasty-label-text" style="padding: 0px 3px; position: absolute; white-space: nowrap; width: 100%; line-height: 45px;">
</div>
<img class="amasty-label-image" id="amasty-label-image-4-17337-cat" src="https://cdn.pichau.com.br/amasty/amlabel/img-novo.png" style="opacity: 1 !important; width: 100%;" title="" alt="">
</div></div>
<script>
   require([
      'jquery',
      'Amasty_Label/js/label',
       'domReady!'
   ], function ($) {
       $('.amasty-label-container-4-17337-cat').amShowLabel({"position":"top-left","size":"","path":".product-image-container, .product-item-photo","mode":"cat","move":0,"product":"17337","label":4,"margin":null,"alignment":null});
   });
</script>
</a>
<div class="product-item-details">
<h4 class="product-item-name">
<a title="Fone de Ouvido Gamer Pichau P451 LED Vermelho 7.1 USB, PGH-P451" href="https://www.pichau.com.br/novidades/fone-de-ouvido-gamer-pichau-p451-led-vermelho-7-1-usb-pgh-p451" class="product-item-link">
Fone de Ouvido Gamer Pichau P451 LED Vermelho 7.1 USB, PGH-P451 </a>
</h4>
<div class="price-box price-final_price" data-role="priceBox" data-product-id="17337" data-price-box="product-id-17337">
<span class="special-price">
<span class="price-container price-final_price tax weee">
<span class="price-label">Preço Promocional</span>
<span id="old-price-17337-widget-product-grid" data-price-amount="181.71" data-price-type="finalPrice" class="price-wrapper ">
<span class="price">R$181,71</span> </span>
<span class="price-installments">
<span>10x de R$18,17</span> <strong>sem juros</strong> no cartão </span>
</span>
<span class="price-boleto">
<span>à vista R$159,90</span> no boleto com <strong>12% de desconto</strong></span>

</span>
<span class="old-price">
<span class="price-container price-final_price tax weee">
<span class="price-label">was</span>
<span id="old-price-17337-widget-product-grid" data-price-amount="204.43" data-price-type="oldPrice" class="price-wrapper ">
<span class="price">R$204,43</span> </span>
<span class="price-installments">
<span>10x de R$20,44</span> <strong>sem juros</strong> no cartão </span>
</span>
<span class="price-boleto">
<span>à vista R$179,90</span> no boleto com <strong>12% de desconto</strong></span>

</span>
</div> <div class="product-reviews-summary">
<div class="rating-summary">
<span class="label"><span>Avaliação:</span></span>
<div class="rating-result" title="100%">
 <span style="width:100%">
<span>
<span>100</span>% of <span>100</span>
</span>
</span>
</div>
</div>
<div class="reviews-actions">
<a class="action view" href="https://www.pichau.com.br/novidades/fone-de-ouvido-gamer-pichau-p451-led-vermelho-7-1-usb-pgh-p451#reviews">
<span>1</span>&nbsp;
<span>Avaliação</span>
</a>
<a class="action add" href="https://www.pichau.com.br/novidades/fone-de-ouvido-gamer-pichau-p451-led-vermelho-7-1-usb-pgh-p451#review-form">Avalie este produto</a>
</div>
</div>
<div class="product-item-actions">
<div class="actions-primary">
<a title="Fone de Ouvido Gamer Pichau P451 LED Vermelho 7.1 USB, PGH-P451" href="https://www.pichau.com.br/novidades/fone-de-ouvido-gamer-pichau-p451-led-vermelho-7-1-usb-pgh-p451" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
<button class="action tocart bt-list-product" data-post="{&quot;action&quot;:&quot;https:\/\/www.pichau.com.br\/checkout\/cart\/add\/uenc\/aHR0cHM6Ly93d3cucGljaGF1LmNvbS5ici8%2C\/product\/17337\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;17337&quot;,&quot;uenc&quot;:&quot;aHR0cHM6Ly93d3cucGljaGF1LmNvbS5ici8,&quot;}}" type="button" title="Colocar no Carrinho">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </button>
</div>
</div>
</div>
</div>
</li> <li class="product-item">
<div class="product-item-info" style="z-index: 2000;">
<a href="https://www.pichau.com.br/novidades/suporte-para-headset-pichau-pgs-100-rgb-hub-usb3-0-pgs-100-rgb" class="product-item-photo" style="display: inline-block;">
<img class="product-image-photo" src="https://cdn.pichau.com.br/catalog/product/cache/14035723553183b9d29277c409fc60a6/p/g/pgs-100-rgb.jpg" alt="Suporte para Headset Pichau PGS 100 RGB HUB USB3.0, PGS-100-RGB" width="500" height="500">
<div class="amlabel-position-top-left-18228-cat amlabel-position-wrapper" style="top: 0px; left: 0px; line-height: normal; position: absolute; z-index: 995; display: block; width: 45px; height: 45px;"><div class="amasty-label-container amasty-label-container-4-18228-cat amasty-label-for-18228" style="max-width: 45px; width: 45px; height: 45px; position: relative; display: block;">
<div class="amasty-label-text" style="padding: 0px 3px; position: absolute; white-space: nowrap; width: 100%; line-height: 45px;">
</div>
<img class="amasty-label-image" id="amasty-label-image-4-18228-cat" src="https://cdn.pichau.com.br/amasty/amlabel/img-novo.png" style="opacity: 1 !important; width: 100%;" title="" alt="">
</div></div>
<script>
   require([
      'jquery',
      'Amasty_Label/js/label',
       'domReady!'
   ], function ($) {
       $('.amasty-label-container-4-18228-cat').amShowLabel({"position":"top-left","size":"","path":".product-image-container, .product-item-photo","mode":"cat","move":0,"product":"18228","label":4,"margin":null,"alignment":null});
   });
</script>
</a>
<div class="product-item-details">
<h4 class="product-item-name">
<a title="Suporte para Headset Pichau PGS 100 RGB HUB USB3.0, PGS-100-RGB" href="https://www.pichau.com.br/novidades/suporte-para-headset-pichau-pgs-100-rgb-hub-usb3-0-pgs-100-rgb" class="product-item-link">
Suporte para Headset Pichau PGS 100 RGB HUB USB3.0, PGS-100-RGB </a>
</h4>
<div class="price-box price-final_price" data-role="priceBox" data-product-id="18228" data-price-box="product-id-18228">
<span class="special-price">
<span class="price-container price-final_price tax weee">
<span class="price-label">Preço Promocional</span>
<span id="old-price-18228-widget-product-grid" data-price-amount="147.62" data-price-type="finalPrice" class="price-wrapper ">
<span class="price">R$147,62</span> </span>
<span class="price-installments">
<span>10x de R$14,76</span> <strong>sem juros</strong> no cartão </span>
</span>
<span class="price-boleto">
<span>à vista R$129,91</span> no boleto com <strong>12% de desconto</strong></span>

</span>
<span class="old-price">
<span class="price-container price-final_price tax weee">
<span class="price-label">was</span>
<span id="old-price-18228-widget-product-grid" data-price-amount="193.07" data-price-type="oldPrice" class="price-wrapper ">
<span class="price">R$193,07</span> </span>
<span class="price-installments">
<span>10x de R$19,31</span> <strong>sem juros</strong> no cartão </span>
</span>
<span class="price-boleto">
<span>à vista R$169,90</span> no boleto com <strong>12% de desconto</strong></span>

</span>
</div> <div class="product-reviews-summary">
<div class="rating-summary">
<span class="label"><span>Avaliação:</span></span>
<div class="rating-result" title="100%">
<span style="width:100%">
<span>
<span>100</span>% of <span>100</span>
</span>
</span>
</div>
</div>
<div class="reviews-actions">
<a class="action view" href="https://www.pichau.com.br/novidades/suporte-para-headset-pichau-pgs-100-rgb-hub-usb3-0-pgs-100-rgb#reviews">
<span>1</span>&nbsp;
<span>Avaliação</span>
</a>
<a class="action add" href="https://www.pichau.com.br/novidades/suporte-para-headset-pichau-pgs-100-rgb-hub-usb3-0-pgs-100-rgb#review-form">Avalie este produto</a>
</div>
</div>
<div class="product-item-actions">
<div class="actions-primary">
<a title="Suporte para Headset Pichau PGS 100 RGB HUB USB3.0, PGS-100-RGB" href="https://www.pichau.com.br/novidades/suporte-para-headset-pichau-pgs-100-rgb-hub-usb3-0-pgs-100-rgb" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
<button class="action tocart bt-list-product" data-post="{&quot;action&quot;:&quot;https:\/\/www.pichau.com.br\/checkout\/cart\/add\/uenc\/aHR0cHM6Ly93d3cucGljaGF1LmNvbS5ici8%2C\/product\/18228\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;18228&quot;,&quot;uenc&quot;:&quot;aHR0cHM6Ly93d3cucGljaGF1LmNvbS5ici8,&quot;}}" type="button" title="Colocar no Carrinho">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </button>
</div>
</div>
</div>
</div>
</li> <li class="product-item">
<div class="product-item-info" style="z-index: 2000;">
<a href="https://www.pichau.com.br/hardware/gabinete-gamer-pichau-lark-vidro-temp-preto-pg-lk-01" class="product-item-photo" style="display: inline-block;">
<img class="product-image-photo" src="https://cdn.pichau.com.br/catalog/product/cache/14035723553183b9d29277c409fc60a6/p/g/pg-lk-012324.jpg" alt="Gabinete Gamer Pichau Lark Vidro Temp Preto, PG-LK-01" width="500" height="500">
<div class="amlabel-position-top-left-18958-cat amlabel-position-wrapper" style="top: 0px; left: 0px; line-height: normal; position: absolute; z-index: 995; display: block; width: 45px; height: 45px;"><div class="amasty-label-container amasty-label-container-4-18958-cat amasty-label-for-18958" style="max-width: 45px; width: 45px; height: 45px; position: relative; display: block;">
<div class="amasty-label-text" style="padding: 0px 3px; position: absolute; white-space: nowrap; width: 100%; line-height: 45px;">
</div>
<img class="amasty-label-image" id="amasty-label-image-4-18958-cat" src="https://cdn.pichau.com.br/amasty/amlabel/img-novo.png" style="opacity: 1 !important; width: 100%;" title="" alt="">
</div></div>
<script>
   require([
      'jquery',
      'Amasty_Label/js/label',
       'domReady!'
   ], function ($) {
       $('.amasty-label-container-4-18958-cat').amShowLabel({"position":"top-left","size":"","path":".product-image-container, .product-item-photo","mode":"cat","move":0,"product":"18958","label":4,"margin":null,"alignment":null});
   });
</script>
</a>
<div class="product-item-details">
<h4 class="product-item-name">
<a title="Gabinete Gamer Pichau Lark Vidro Temp Preto, PG-LK-01" href="https://www.pichau.com.br/hardware/gabinete-gamer-pichau-lark-vidro-temp-preto-pg-lk-01" class="product-item-link">
Gabinete Gamer Pichau Lark Vidro Temp Preto, PG-LK-01 </a>
</h4>
<div class="price-box price-final_price" data-role="priceBox" data-product-id="18958" data-price-box="product-id-18958">
<span class="special-price">
<span class="price-container price-final_price tax weee">
<span class="price-label">Preço Promocional</span>
<span id="old-price-18958-widget-product-grid" data-price-amount="295.34" data-price-type="finalPrice" class="price-wrapper ">
<span class="price">R$295,34</span> </span>
<span class="price-installments">
<span>10x de R$29,53</span> <strong>sem juros</strong> no cartão </span>
</span>
<span class="price-boleto">
<span>à vista R$259,90</span> no boleto com <strong>12% de desconto</strong></span>

</span>
<span class="old-price">
<span class="price-container price-final_price tax weee">
<span class="price-label">was</span>
<span id="old-price-18958-widget-product-grid" data-price-amount="318.07" data-price-type="oldPrice" class="price-wrapper ">
<span class="price">R$318,07</span> </span>
<span class="price-installments">
<span>10x de R$31,81</span> <strong>sem juros</strong> no cartão </span>
</span>
<span class="price-boleto">
<span>à vista R$279,90</span> no boleto com <strong>12% de desconto</strong></span>

</span>
</div>
<div class="product-item-actions">
<div class="actions-primary">
<a title="Gabinete Gamer Pichau Lark Vidro Temp Preto, PG-LK-01" href="https://www.pichau.com.br/hardware/gabinete-gamer-pichau-lark-vidro-temp-preto-pg-lk-01" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
<button class="action tocart bt-list-product" data-post="{&quot;action&quot;:&quot;https:\/\/www.pichau.com.br\/checkout\/cart\/add\/uenc\/aHR0cHM6Ly93d3cucGljaGF1LmNvbS5ici8%2C\/product\/18958\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;18958&quot;,&quot;uenc&quot;:&quot;aHR0cHM6Ly93d3cucGljaGF1LmNvbS5ici8,&quot;}}" type="button" title="Colocar no Carrinho">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </button>
</div>
</div>
</div>
</div>
</li> <li class="product-item">
<div class="product-item-info" style="z-index: 2000;">
<a href="https://www.pichau.com.br/novidades/caixa-de-som-harman-aura-studio-3-bluetooth-hkauras3blkbr" class="product-item-photo" style="display: inline-block;">
<img class="product-image-photo" src="https://cdn.pichau.com.br/catalog/product/cache/14035723553183b9d29277c409fc60a6/h/k/hkauras3blkbr.jpg" alt="Caixa de Som Harman Aura Studio 3 Bluetooth, HKAURAS3BLKBR" width="500" height="500">
<div class="amlabel-position-top-left-19028-cat amlabel-position-wrapper" style="top: 0px; left: 0px; line-height: normal; position: absolute; z-index: 995; display: block; width: 45px; height: 45px;"><div class="amasty-label-container amasty-label-container-4-19028-cat amasty-label-for-19028" style="max-width: 45px; width: 45px; height: 45px; position: relative; display: block;">
<div class="amasty-label-text" style="padding: 0px 3px; position: absolute; white-space: nowrap; width: 100%; line-height: 45px;">
</div>
<img class="amasty-label-image" id="amasty-label-image-4-19028-cat" src="https://cdn.pichau.com.br/amasty/amlabel/img-novo.png" style="opacity: 1 !important; width: 100%;" title="" alt="">
</div></div>
<script>
   require([
      'jquery',
      'Amasty_Label/js/label',
       'domReady!'
   ], function ($) {
       $('.amasty-label-container-4-19028-cat').amShowLabel({"position":"top-left","size":"","path":".product-image-container, .product-item-photo","mode":"cat","move":0,"product":"19028","label":4,"margin":null,"alignment":null});
   });
</script>
</a>
<div class="product-item-details">
<h4 class="product-item-name">
<a title="Caixa de Som Harman Aura Studio 3 Bluetooth, HKAURAS3BLKBR" href="https://www.pichau.com.br/novidades/caixa-de-som-harman-aura-studio-3-bluetooth-hkauras3blkbr" class="product-item-link">
Caixa de Som Harman Aura Studio 3 Bluetooth, HKAURAS3BLKBR </a>
</h4>
<div class="price-box price-final_price" data-role="priceBox" data-product-id="19028" data-price-box="product-id-19028">
<span class="price-container price-final_price tax weee">
<span id="old-price-19028-widget-product-grid" data-price-amount="1704.48" data-price-type="finalPrice" class="price-wrapper ">
<span class="price">R$1.704,48</span> </span>
<span class="price-installments">
<span>10x de R$170,45</span> <strong>sem juros</strong> no cartão </span>
</span>
<span class="price-boleto">
<span>à vista R$1.499,94</span> no boleto com <strong>12% de desconto</strong></span>

</div>
<div class="product-item-actions">
<div class="actions-primary">
<a title="Caixa de Som Harman Aura Studio 3 Bluetooth, HKAURAS3BLKBR" href="https://www.pichau.com.br/novidades/caixa-de-som-harman-aura-studio-3-bluetooth-hkauras3blkbr" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
<button class="action tocart bt-list-product" data-post="{&quot;action&quot;:&quot;https:\/\/www.pichau.com.br\/checkout\/cart\/add\/uenc\/aHR0cHM6Ly93d3cucGljaGF1LmNvbS5ici8%2C\/product\/19028\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;19028&quot;,&quot;uenc&quot;:&quot;aHR0cHM6Ly93d3cucGljaGF1LmNvbS5ici8,&quot;}}" type="button" title="Colocar no Carrinho">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </button>
</div>
</div>
</div>
</div>
</li> </ol>
</div>
</div>
</div>
<script>
    require([
        'jquery'
    ], function($){
        jQuery(document).ready(function () {
            $('.action.tocart.bt-list-product').removeAttr('disabled');
        });
    });
</script>
<p></p>
<div class="imagem-lancamento">
<div class="aw-rbslider-container uk-slidenav-position" style="width: 960px;">
<ul class="uk-slideshow" style="height: 100px;">
<li data-slide="html" aria-hidden="false" class="uk-active" style="height: 100px;"><div>
<a href="https://www.pichau.com.br/hardware/placa-de-video?forca=366" target="_blank" rel="nofollow">
<img class="aw-rbslider__img" src="https://cdn.pichau.com.br/aw_rbslider/slides/geforce.jpg" title="" alt="">
</a>
</div></li>
</ul>
</div>
</div>
</div></div></div></main><div class="page-bottom"><div class="content">
</div></div><footer class="page-footer"><div class="footer content"><div class="links-footer">
<ul>
<li><span class="open-tel"> <i class="fa fa-phone"></i> Atendimento <strong>por Telefone</strong> </span></li>
<li class="sac-footer"><a href="http://sac.pichau.com.br" target="_blank"><span><i class="fa fa-comments-o"></i> <strong>SAC</strong></span></a></li>
<li><span class="open-email"><i class="fa fa-envelope"></i> Atendimento <strong>por E-mail</strong></span></li>
<li><a href="https://www.pichau.com.br/contact/" target="_blank"><span><i class="fa fa-envelope"></i> formulário <strong>de contato</strong></span></a></li>
<li class="lojas-fisicas open-fisicas"><span><i class="fa fa-phone"></i> Telefones loja <strong>Física Joinville</strong></span></li>
</ul>
</div>
<div id="modal-telefone" class="modal">
<div class="conteudo-modal"><i class="fa fa-times close-modal"></i>
<h3>Atendimento <strong>Por telefone</strong></h3>
<p>Horários de atendimento: <strong>Segunda a Sexta</strong> 9h às 12h e das 13h às 18h<br> Nosso telefone é <strong class="telefone-modal">(47) 3305-5150</strong></p>
</div>
</div>
<div id="modal-email" class="modal">
<div class="conteudo-modal"><i class="fa fa-times close-modal"></i>
<h3>Atendimento <strong>Por e-mail</strong></h3>
<p>O atendimento da nossa loja funciona de Segunda a Sexta das 8h às 12h e das 13h às 18h.<br>Nosso e-mail é <strong class="telefone-modal">sac@pichau.com.br</strong></p>
</div>
</div>
<div id="modal-loja-fisica" class="modal">
<div class="conteudo-modal"><i class="fa fa-times close-modal"></i>
<h3>Ligue para nossos <strong>Consultores de vendas</strong></h3>
<p>Loja física em joinville</p>
<strong>(47) 3026-6446</strong></div>
</div><div class="block newsletter">
<div class="content">
<div class="title-news">
<i class="fa fa-envelope" aria-hidden="true"></i>
<span>Receba no seu e-mail <strong>Ofertas exclusivas</strong>
</span>
</div>
<form class="form subscribe" novalidate="novalidate" action="https://www.pichau.com.br/newsletter/subscriber/new/" method="post" id="newsletter-validate-detail">
<input name="name" type="name" id="newsletter-name" placeholder="Digite seu nome" data-validate="{required:true}">
<input name="email" type="email" id="newsletter" placeholder="Seu e-mail" data-validate="{required:true, 'validate-email':true}">
<button class="action subscribe" title="Inscrever" type="submit">
Assinar <i class="fa fa-chevron-right" aria-hidden="true"></i>
</button>
<div class="success-msg-news">
Cadastro realizado com sucesso </div>
</form>
</div>
</div><div class="navs"><nav>
<h5>Dúvidas e Suporte</h5>
<ul>
<li><a href="/termos-de-aceite/#comocomprar">Como Comprar</a></li>
<li><a href="/termos-de-aceite/#entrega">Entrega</a></li>
<li><a href="/termos-de-aceite/#formaspagamento">Formas de Pagamento</a></li>
<li><a href="/termos-de-aceite/#garantia">Garantia</a></li>
<li><a href="/politica-de-privacidade">Política de Privacidade</a></li>
<li><a href="/termos-de-aceite/#trocaedevolucao">Troca e Devolução</a></li>
<li><a href="/termos-de-aceite/">Termos de Aceite</a></li>
</ul>
</nav><nav>
<h5>Institucional</h5>
<ul>
<li><a href="/quem-somos/">Quem Somos</a></li>
<li><a class="fancybox-ajax" href="/background/background/maps/">Localização</a></li>
<li><a href="/quem-somos/">Nossas Lojas</a></li>
</ul>
</nav><nav class="nav-hours">
<h5>Horário de Atendimento</h5>
<ul>
<li><strong>Loja Virtual</strong>
<p><strong>Segunda a Sexta</strong></p>
<p>9h às 12h e das 13h às 18h</p>
</li>
<li><strong>Loja Física</strong>
<p>Segunda a Sexta 9h às 19h</p>
<p>Sábado 9h às 13h</p>
</li>
</ul>
</nav><nav class="nav-social nav-social-youtube"><a href="https://www.youtube.com/subscription_center?add_user=pichauinfo" target="_blank"> <img src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/images/footer/icon-pichau-tv.jpg" alt=""> </a>
<div class="yt-subscribe-footer"><a href="https://www.youtube.com/subscription_center?add_user=pichauinfo" target="_blank"> <img src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/images/footer/yt-subscribe.png" alt=""> </a></div>
</nav>
<div class="fb-like-box">
<div class="fb-page fb_iframe_widget" data-href="https://www.facebook.com/PichauInfo/" data-tabs="" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="adapt_container_width=true&amp;app_id=555333651272722&amp;container_width=265&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2FPichauInfo%2F&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false"><span style="vertical-align: bottom; width: 265px; height: 181px;"><iframe name="f287fdf4fa43e2" data-testid="fb:page Facebook Social Plugin" title="fb:page Facebook Social Plugin" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" style="border: medium none; visibility: visible; width: 265px; height: 181px;" src="https://www.facebook.com/v2.11/plugins/page.php?adapt_container_width=true&amp;app_id=555333651272722&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D46%23cb%3Df17da296ec82c2%26domain%3Dwww.pichau.com.br%26origin%3Dhttps%253A%252F%252Fwww.pichau.com.br%252Ff22d966eb38f2a8%26relation%3Dparent.parent&amp;container_width=265&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2FPichauInfo%2F&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false" class="" width="1000px" height="1000px" frameborder="0"></iframe></span></div>
</div>
<hr><nav class="nav-payment" style="margin-right: 9.8%;">
<h5>Formas de Pagamento</h5>
<img src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/images/footer/formas-pagamento/boleto.png"> <img src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/images/footer/formas-pagamento/visa.png"> <img src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/images/footer/formas-pagamento/master.png"> <img src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/images/footer/formas-pagamento/hipercard.png"> <img src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/images/footer/formas-pagamento/paypal.jpg"></nav><nav class="nav-security" style="margin-right: 0;">
<h5>Certificados de Segurança</h5>
<ul>
<li>
<div id="nav-security-1">
<div id="sslblindado" style="width: 122px; height: 81px;"><a href="//www.siteblindado.com/consumidor/selo-ssl/?language=pt&amp;hostname=www.pichau.com.br" target="_blank" title=""> <img src="https://www.siteblindado.com/images/ssl.png" oncontextmenu="alert(&quot;Cópia&nbsp;&nbsp;Proibida&nbsp;por&nbsp;Lei-&nbsp;Site&nbsp;Blindado®&nbsp;é&nbsp;marca&nbsp;registrada&nbsp;de&nbsp;Site&nbsp;Blindado&nbsp;S.A.&quot;)" style="border-style: none"> </a></div>
<script type="text/javascript" src="https://selo.siteblindado.com/sslblindado.js"></script>
</div></li>
<li><img src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/images/footer/certificados/pichau-google.png" alt=""></li>
<li style="width: 110px; margin-top: 0; margin-right: 0;"><a id="seloEbit" href="http://www.ebit.com.br/6261" target="_blank" data-noop="redir(this.href);"> </a></li>
<li class="last" style="margin-right: 0;"><div id="___ratingbadge_0" style="border: 1px none rgb(245, 245, 245); text-indent: 0px; margin: 0px; padding: 0px; background: transparent none repeat scroll 0% 0%; float: none; line-height: normal; font-size: 1px; vertical-align: baseline; display: inline-block; width: 165px; height: 54px;"><iframe ng-non-bindable="" hspace="0" marginheight="0" marginwidth="0" scrolling="no" style="position: static; top: 0px; width: 165px; margin: 0px; border-style: none; display: block; left: 0px; visibility: visible; height: 54px;" tabindex="0" vspace="0" id="I0_1589017499662" name="I0_1589017499662" src="https://www.google.com/shopping/customerreviews/badge?usegapi=1&amp;merchant_id=106916823&amp;position=INLINE&amp;origin=https%3A%2F%2Fwww.pichau.com.br&amp;gsrc=3p&amp;jsh=m%3B%2F_%2Fscs%2Fapps-static%2F_%2Fjs%2Fk%3Doz.gapi.en.jw7XZHvcak8.O%2Fam%3DwQE%2Fd%3D1%2Fct%3Dzgms%2Frs%3DAGLTcCOXtLG11kt9d673FzpjO_GiLUGIQA%2Fm%3D__features__#_methods=onPlusOne%2C_ready%2C_close%2C_open%2C_resizeMe%2C_renderstart%2Concircled%2Cdrefresh%2Cerefresh&amp;id=I0_1589017499662&amp;_gfid=I0_1589017499662&amp;parent=https%3A%2F%2Fwww.pichau.com.br&amp;pfname=&amp;rpctoken=16829661" data-gapiattached="true" title="Google Customer Reviews" width="100%" frameborder="0"></iframe></div></li>
</ul>
</nav></div>
<div class="addres-footer"><img class="logo-footer" src="https://cdn.pichau.com.br/wysiwyg/logo-alt.png" alt="Pichau">
<div class="text-address"><strong>PICHAU INFORMÁTICA® é uma marca registrada de Bazam e Pichau Informatica LTDA | CNPJ: 09.376.495/0001-22</strong><address>Rua Ottokar Doerffel, 1112 - Galpão C8 - Bairro: Atiradores - CEP: 89203-212 - Joinville/SC</address>
<p>Preços e condições de pagamento exclusivos para compras via internet e podem variar nas lojas físicas. Os preços anunciados neste site ou via e-mail promocional podem ser alterados sem prévio aviso. A Pichau Informática, não é responsável por erros descritivos. As fotos contidas nesta página são meramente ilustrativas do produto e podem variar de acordo com o fornecedor/lote do fabricante. Ofertas válidas até o término de nossos estoques. Vendas sujeitas à análise e confirmação de dados.</p>
</div>
<a title="Trezo" href="https://www.trezo.com.br/" target="_blank"><img class="trezo-footer" src="https://cdn.pichau.com.br/wysiwyg/trezo.png" alt="Trezo"></a></div>
<script src="https://apis.google.com/js/platform.js?onload=renderBadge" async="" defer="" gapi_processed="true"></script> <script> window.renderBadge = function() { var ratingBadgeContainer = document.createElement("div"); document.getElementsByClassName( 'nav-security' )[0].getElementsByTagName( 'ul' )[0].getElementsByClassName( 'last' )[0].appendChild(ratingBadgeContainer); window.gapi.load('ratingbadge', function() { window.gapi.ratingbadge.render(ratingBadgeContainer, {"merchant_id": 106916823,"position": "INLINE"}); }); } </script><div id="fb-root" class=" fb_reset"><div style="position: absolute; top: -10000px; width: 0px; height: 0px;"><div></div></div></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11&appId=555333651272722';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
<script>
    require(['jquery'], function () {
		jQuery('.navigation').hover(
			function() {
				jQuery(".nav-sections .navigation #ui-id-1").stop();
				jQuery(".nav-sections .navigation #ui-id-1").slideDown();
			}, function() {
				jQuery(".nav-sections .navigation #ui-id-1").stop();
				jQuery(".nav-sections .navigation #ui-id-1").slideUp();
			}
		);

		jQuery('.nav-sections .navigation .parent').hover(
			function() {
				jQuery(this).find('.submenu').stop();
				jQuery(this).find('.submenu').slideDown();
			}, function() {
				jQuery(this).find('.submenu').stop();
				jQuery(this).find('.submenu').slideUp();
			}
		);


		jQuery('.open-tel').on("click", function(){
			jQuery('#modal-telefone').fadeIn('fast');
		});
		jQuery('.open-email').on("click", function(){
			jQuery('#modal-email').fadeIn('fast');
		});
		jQuery('.open-fisicas').on("click", function(){
			jQuery('#modal-loja-fisica').fadeIn('fast');
		});
		jQuery('.close-modal').on("click", function(){
			jQuery('.modal').fadeOut('fast');
		});

		jQuery('.modal').on("click", function(){
			jQuery(this).fadeOut('fast');
		});

		jQuery('.conteudo-modal').on("click", function(e){
			e.stopPropagation();
		});

		setInterval(function() {
		  jQuery('.slider-home .banner-items > li:first')
		    .fadeOut(1000)
		    .next()
		    .fadeIn(1000)
		    .end()
		    .appendTo('.slider-home .banner-items');
		}, 3000);
    });


</script>
<script type="text/javascript">var fc_CSS=document.createElement('link');fc_CSS.setAttribute('rel','stylesheet');var fc_isSecured = (window.location && window.location.protocol == 'https:');var fc_lang = document.getElementsByTagName('html')[0].getAttribute('lang'); var fc_rtlLanguages = ['ar','he']; var fc_rtlSuffix = (fc_rtlLanguages.indexOf(fc_lang) >= 0) ? '-rtl' : '';fc_CSS.setAttribute('type','text/css');fc_CSS.setAttribute('href',((fc_isSecured)? 'https://d36mpcpuzc4ztk.cloudfront.net':'http://assets1.chat.freshdesk.com')+'/css/visitor'+fc_rtlSuffix+'.css');document.getElementsByTagName('head')[0].appendChild(fc_CSS);var fc_JS=document.createElement('script'); fc_JS.type='text/javascript'; fc_JS.defer=true;fc_JS.src=((fc_isSecured)?'https://d36mpcpuzc4ztk.cloudfront.net':'http://assets.chat.freshdesk.com')+'/js/visitor.js';(document.body?document.body:document.getElementsByTagName('head')[0]).appendChild(fc_JS);window.livechat_setting= 'eyJ3aWRnZXRfc2l0ZV91cmwiOiJwaWNoYXUuZnJlc2hkZXNrLmNvbSIsInByb2R1Y3RfaWQiOm51bGwsIm5hbWUiOiJQaWNoYXUiLCJ3aWRnZXRfZXh0ZXJuYWxfaWQiOm51bGwsIndpZGdldF9pZCI6IjIwMWVkNmZkLWE2MjUtNDQ0NS05NDIyLWZhNzE4YmIzMzc3MSIsInNob3dfb25fcG9ydGFsIjp0cnVlLCJwb3J0YWxfbG9naW5fcmVxdWlyZWQiOmZhbHNlLCJsYW5ndWFnZSI6InB0LUJSIiwidGltZXpvbmUiOiJCcmFzaWxpYSIsImlkIjoyMjAwMDA0NDQxMSwibWFpbl93aWRnZXQiOjEsImZjX2lkIjoiM2Y0YjIzN2E5ZThjZmRmMzE4NTU4ODZmMmI0NTZmOTMiLCJzaG93IjoxLCJyZXF1aXJlZCI6MiwiaGVscGRlc2tuYW1lIjoiUGljaGF1IiwibmFtZV9sYWJlbCI6Ik5vbWUiLCJtZXNzYWdlX2xhYmVsIjoiTWVuc2FnZW0iLCJwaG9uZV9sYWJlbCI6IlRlbGVmb25lIiwidGV4dGZpZWxkX2xhYmVsIjoiQ2FtcG8gZGUgdGV4dG8iLCJkcm9wZG93bl9sYWJlbCI6Ik1lbnUgc3VzcGVuc28iLCJ3ZWJ1cmwiOiJwaWNoYXUuZnJlc2hkZXNrLmNvbSIsIm5vZGV1cmwiOiJjaGF0LmZyZXNoZGVzay5jb20iLCJkZWJ1ZyI6MSwibWUiOiJFdSIsImV4cGlyeSI6MCwiZW52aXJvbm1lbnQiOiJwcm9kdWN0aW9uIiwiZW5kX2NoYXRfdGhhbmtfbXNnIjoiT2JyaWdhZG8hIiwiZW5kX2NoYXRfZW5kX3RpdGxlIjoiRmltIiwiZW5kX2NoYXRfY2FuY2VsX3RpdGxlIjoiQ2FuY2VsYXIiLCJzaXRlX2lkIjoiM2Y0YjIzN2E5ZThjZmRmMzE4NTU4ODZmMmI0NTZmOTMiLCJhY3RpdmUiOjEsInJvdXRpbmciOm51bGwsInByZWNoYXRfZm9ybSI6MSwiYnVzaW5lc3NfY2FsZW5kYXIiOm51bGwsInByb2FjdGl2ZV9jaGF0IjowLCJwcm9hY3RpdmVfdGltZSI6OTAsInNpdGVfdXJsIjoicGljaGF1LmZyZXNoZGVzay5jb20iLCJleHRlcm5hbF9pZCI6bnVsbCwiZGVsZXRlZCI6MCwibW9iaWxlIjoxLCJhY2NvdW50X2lkIjpudWxsLCJjcmVhdGVkX2F0IjoiMjAxNy0wMy0xNVQxOTowODo1Ny4wMDBaIiwidXBkYXRlZF9hdCI6IjIwMTgtMDMtMTNUMTk6NTQ6NDIuMDAwWiIsImNiRGVmYXVsdE1lc3NhZ2VzIjp7ImNvYnJvd3Npbmdfc3RhcnRfbXNnIjoiWW91ciBzY3JlZW5zaGFyZSBzZXNzaW9uIGhhcyBzdGFydGVkIiwiY29icm93c2luZ19zdG9wX21zZyI6IllvdXIgc2NyZWVuc2hhcmluZyBzZXNzaW9uIGhhcyBlbmRlZCIsImNvYnJvd3NpbmdfZGVueV9tc2ciOiJZb3VyIHJlcXVlc3Qgd2FzIGRlY2xpbmVkIiwiY29icm93c2luZ19hZ2VudF9idXN5IjoiQWdlbnQgaXMgaW4gc2NyZWVuIHNoYXJlIHNlc3Npb24gd2l0aCBjdXN0b21lciIsImNvYnJvd3Npbmdfdmlld2luZ19zY3JlZW4iOiJZb3UgYXJlIHZpZXdpbmcgdGhlIHZpc2l0b3LigJlzIHNjcmVlbiAiLCJjb2Jyb3dzaW5nX2NvbnRyb2xsaW5nX3NjcmVlbiI6IllvdSBoYXZlIGFjY2VzcyB0byB2aXNpdG9y4oCZcyBzY3JlZW4gIiwiY29icm93c2luZ19yZXF1ZXN0X2NvbnRyb2wiOiJSZXF1ZXN0IHZpc2l0b3IgZm9yIHNjcmVlbiBhY2Nlc3MgIiwiY29icm93c2luZ19naXZlX3Zpc2l0b3JfY29udHJvbCI6IkdpdmUgYWNjZXNzIGJhY2sgdG8gdmlzaXRvciAiLCJjb2Jyb3dzaW5nX3N0b3BfcmVxdWVzdCI6IkVuZCB5b3VyIHNjcmVlbnNoYXJpbmcgc2Vzc2lvbiIsImNvYnJvd3NpbmdfcmVxdWVzdF9jb250cm9sX3JlamVjdGVkIjoiWW91ciByZXF1ZXN0IHdhcyBkZWNsaW5lZCIsImNvYnJvd3NpbmdfY2FuY2VsX3Zpc2l0b3JfbXNnIjoiU2NyZWVuc2hhcmluZyBpcyBjdXJyZW50bHkgdW5hdmFpbGFibGUiLCJjb2Jyb3dzaW5nX2FnZW50X3JlcXVlc3RfY29udHJvbCI6IkFnZW50IGlzIHJlcXVlc3RpbmcgYWNjZXNzIHRvIHlvdXIgc2NyZWVuIiwiY2Jfdmlld2luZ19zY3JlZW5fdmkiOiJBZ2VudCBjYW4gdmlldyB5b3VyIHNjcmVlbiAiLCJjYl9jb250cm9sbGluZ19zY3JlZW5fdmkiOiJBZ2VudCBoYXMgYWNjZXNzIHRvIHlvdXIgc2NyZWVuICIsImNiX3ZpZXdfbW9kZV9zdWJ0ZXh0IjoiWW91ciBhY2Nlc3MgdG8gdGhlIHNjcmVlbiBoYXMgYmVlbiB3aXRoZHJhd24gIiwiY2JfZ2l2ZV9jb250cm9sX3ZpIjoiQWxsb3cgYWdlbnQgdG8gYWNjZXNzIHlvdXIgc2NyZWVuICIsImNiX3Zpc2l0b3Jfc2Vzc2lvbl9yZXF1ZXN0IjoiQWdlbnQgc2Vla3MgYWNjZXNzIHRvIHlvdXIgc2NyZWVuICJ9fQ==';</script>
</div></footer>
<script type="text/javascript">
		var promotionData = [];
	</script>
<script type="application/ld+json">{"@context":"http:\/\/schema.org","@type":"WebSite","url":"https:\/\/www.pichau.com.br\/","name":"Pichau Info","potentialAction":{"@type":"SearchAction","target":"https:\/\/www.pichau.com.br\/catalogsearch\/result\/?q={search_term_string}","query-input":"required name=search_term_string"}}</script><script type="application/ld+json">{"@context":"http:\/\/schema.org","@type":"Organization","url":"https:\/\/www.pichau.com.br\/","name":"Pichau Info","logo":"https:\/\/www.pichau.com.br\/static\/version1586195170\/frontend\/Pichau\/base\/pt_BR\/images\/logo-pichau.png","description":"Na Pichau voc\u00ea encontra a maior linha Gamer do Brasil de Computadores, Placas de V\u00eddeo, Cadeiras, Processadores, Monitores e muito mais.","contactPoint":[{"@type":"ContactPoint","telephone":"+55-47-3305-5150","contactType":"sales"},{"@type":"ContactPoint","telephone":"sac@pichau.com.br","contactType":"technical support"},{"@type":"ContactPoint","telephone":"sac@pichau.com.br","contactType":"customer service"}],"address":{"addressCountry":"Brasil","postalCode":"89201-300","addressRegion":"SC","addressLocality":"Joinville"},"sameAs":["pichauinfo","pichauinfo","pichauoficial","pichauinfo"]}</script>

<script>
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '1234234216641327');
fbq('track', 'PageView');



</script>
<noscript><img height="1" width="1" style="display:none" alt="Facebook Pixel"
src="https://www.facebook.com/tr?id=1234234216641327&ev=PageView&noscript=1"
/></noscript>

</div><script type="text/javascript" defer="" src="https://d36mpcpuzc4ztk.cloudfront.net/js/visitor.js"></script> <script>
        require(['jquery','weltpixel_persistentLayer','weltpixel_gtm', 'Magento_Customer/js/customer-data'],
            function ($, wpPersDl ,wpgtm, customerData) {
                $( document ).ajaxComplete(function( event, xhr, settings ) {
                    if (settings.url.search('/customer\/section\/load/') > 0) {
                        var response = xhr.responseJSON;
                        if (response.gtm) {
                            var dataLayerData = $.parseJSON(response.gtm.datalayer);
                            for (index in dataLayerData) {
                                window.dataLayer.push(dataLayerData[index]);
                            }
                        }
                    }
                });
                var wpPersDlOptions = {'storageExpiryTime' : 30 };
                var wpGtmOptions = {
                    'enabled' : 0,
                    'persDataLayer' : wpPersDl
                };
                wpPersDl.init(wpPersDlOptions);
                wpgtm.trackPromotion(wpGtmOptions);
                customerData.invalidate(['gtm']);
            });
    </script>
<script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","licenseKey":"NRJS-199a4e80efcd30d8013","applicationID":"508691749","transactionName":"YlNbMBRVXxAAWkIMClsZeAcSXV4NTlpbFkpcWF0BHhtYDQVcTg==","queueTime":0,"applicationTime":518,"atts":"ThRYRlxPTB4=","errorBeacon":"bam.nr-data.net","agent":""}</script>

<div class="modals-wrapper"><aside role="dialog" class="modal-popup popup-authentication
               modal-slide
               _inner-scroll" aria-describedby="modal-content-25" data-role="modal" data-type="popup" tabindex="0">
<div data-role="focusable-start" tabindex="0"></div>
<div class="modal-inner-wrap" data-role="focusable-scope">
<header class="modal-header">

<button class="action-close" data-role="closeBtn" type="button">
<span>Fechar</span>
</button>
</header>
<div id="modal-content-25" class="modal-content" data-role="content"><div class="block-authentication" data-bind="afterRender: setModalElement, blockLoader: isLoading" style="">
<div class="block block-new-customer" data-bind="attr: {'data-label': $t('or')}" data-label="ou">
<div class="block-title">
<strong id="block-new-customer-heading" role="heading" aria-level="2" data-bind="i18n: 'Checkout as a new customer'">Criar nova conta</strong>
</div>
<div class="block-content" aria-labelledby="block-new-customer-heading">
<p data-bind="i18n: 'Creating an account has many benefits:'">Criando uma conta você terá as seguintes vantagens:</p>
<ul>
<li data-bind="i18n: 'See order and shipping status'">Ver status da compra e da entrega</li>
<li data-bind="i18n: 'Track order history'">Ver histórico de pedidos</li>
<li data-bind="i18n: 'Check out faster'">Finalizar compra mais rápido</li>
</ul>
<div class="actions-toolbar">
<div class="primary">
<a class="action action-register primary" data-bind="attr: {href: registerUrl}" href="https://www.pichau.com.br/customer/account/create/">
<span data-bind="i18n: 'Create an Account'">Cadastre-se</span>
</a>
</div>
</div>
</div>
</div>
<div class="block block-customer-login" data-bind="attr: {'data-label': $t('or')}" data-label="ou">
<div class="block-title">
<strong id="block-customer-login-heading" role="heading" aria-level="2" data-bind="i18n: 'Checkout using your account'">Já sou cliente</strong>
</div>
<!-- ko foreach: getRegion('messages') -->
<!-- ko template: getTemplate() -->
<div data-role="checkout-messages" class="messages" data-bind="visible: isVisible(), click: removeAll">
<!-- ko foreach: messageContainer.getErrorMessages() --><!--/ko-->
<!-- ko foreach: messageContainer.getSuccessMessages() --><!--/ko-->
</div>
<!-- /ko -->
<!--/ko-->
<!-- ko foreach: getRegion('before') -->
<!-- ko template: getTemplate() -->
<!-- ko if: isActive() --><!-- /ko --><!-- /ko -->
<!-- /ko -->
<div class="block-content" aria-labelledby="block-customer-login-heading">
<form class="form form-login" method="post" data-bind="event: {submit: login }" id="login-form">
<div class="fieldset login" data-bind="attr: {'data-hasrequired': $t('* Required Fields')}" data-hasrequired="* Campos obrigatórios">
<div class="field email required">
<label class="label" for="customer-email"><span data-bind="i18n: 'Email Address'">Email</span></label>
<div class="control">
<input name="username" id="customer-email" type="email" class="input-text" data-mage-init="{&quot;mage/trim-input&quot;:{}}" data-bind="attr: {autocomplete: autocomplete}" data-validate="{required:true, 'validate-email':true}" autocomplete="off">
</div>
</div>
<div class="field password required">
<label for="pass" class="label"><span data-bind="i18n: 'Password'">Senha</span></label>
<div class="control">
<input name="password" type="password" class="input-text" id="pass" data-bind="attr: {autocomplete: autocomplete}" data-validate="{required:true}" autocomplete="off">
</div>
</div>
<!-- ko foreach: getRegion('additional-login-form-fields') -->
<!-- ko template: getTemplate() -->
<!-- ko if: (getIsVisible())-->
<input name="captcha_form_id" type="hidden" data-bind="value: formId,  attr: {'data-scope': dataScope}" value="user_login" data-scope="">
<!-- /ko -->
<!-- ko if: (isRequired() && getIsVisible())--><!-- /ko -->
<!-- /ko -->
<!-- /ko -->
<div class="actions-toolbar">
<input name="context" type="hidden" value="checkout">
<div class="primary">
<button type="submit" class="action action-login secondary" name="send" id="send2">
<span data-bind="i18n: 'Sign In'">Entrar</span>
</button>
</div>
<div class="secondary">
<a class="action" data-bind="attr: {href: forgotPasswordUrl}" href="https://www.pichau.com.br/customer/account/forgotpassword/">
<span data-bind="i18n: 'Forgot Your Password?'">Esqueceu sua senha?</span>
</a>
</div>
</div>
</div>
</form>
</div>
</div>
</div></div>

</div>
<div data-role="focusable-end" tabindex="0"></div>
</aside></div></body></html>`

export const promotionPage = `<html class="lc-cb-container-vi uk-notouch" lang="pt"><head>
<script type="text/javascript" async="" src="https://www.gstatic.com/recaptcha/releases/-wV2EAWEOTlEtZh4vNQtn3H1/recaptcha__en.js"></script><script src="https://js-agent.newrelic.com/nr-1167.min.js"></script><script src="https://connect.facebook.net/en_US/sdk.js?hash=bbc14678f6289bd33888318610e3e992" async="" crossorigin="anonymous"></script><script src="https://apis.google.com/_/scs/apps-static/_/js/k=oz.gapi.en.jw7XZHvcak8.O/m=ratingbadge/rt=j/sv=1/d=1/ed=1/am=wQE/rs=AGLTcCOXtLG11kt9d673FzpjO_GiLUGIQA/cb=gapi.loaded_0" async=""></script><script id="facebook-jssdk" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&amp;version=v2.11&amp;appId=555333651272722"></script><script async="" src="https://js.datadome.co/tags.js"></script><script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-MQS562"></script><script src="/cdn-cgi/apps/head/zdvena6okxF8D1KoxHwpN1BcyTM.js"></script><script>
    var BASE_URL = 'https://www.pichau.com.br/';
    var require = {
        "baseUrl": "https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR"
    };
</script>
<meta charset="utf-8"><script type="text/javascript">(window.NREUM||(NREUM={})).loader_config={licenseKey:"NRJS-199a4e80efcd30d8013",applicationID:"508691749"};window.NREUM||(NREUM={}),__nr_require=function(e,n,t){function r(t){if(!n[t]){var i=n[t]={exports:{}};e[t][0].call(i.exports,function(n){var i=e[t][1][n];return r(i||n)},i,i.exports)}return n[t].exports}if("function"==typeof __nr_require)return __nr_require;for(var i=0;i<t.length;i++)r(t[i]);return r}({1:[function(e,n,t){function r(){}function i(e,n,t){return function(){return o(e,[u.now()].concat(f(arguments)),n?null:this,t),n?void 0:this}}var o=e("handle"),a=e(4),f=e(5),c=e("ee").get("tracer"),u=e("loader"),s=NREUM;"undefined"==typeof window.newrelic&&(newrelic=s);var p=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],l="api-",d=l+"ixn-";a(p,function(e,n){s[n]=i(l+n,!0,"api")}),s.addPageAction=i(l+"addPageAction",!0),s.setCurrentRouteName=i(l+"routeName",!0),n.exports=newrelic,s.interaction=function(){return(new r).get()};var m=r.prototype={createTracer:function(e,n){var t={},r=this,i="function"==typeof n;return o(d+"tracer",[u.now(),e,t],r),function(){if(c.emit((i?"":"no-")+"fn-start",[u.now(),r,i],t),i)try{return n.apply(this,arguments)}catch(e){throw c.emit("fn-err",[arguments,this,e],t),e}finally{c.emit("fn-end",[u.now()],t)}}}};a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(e,n){m[n]=i(d+n)}),newrelic.noticeError=function(e,n){"string"==typeof e&&(e=new Error(e)),o("err",[e,u.now(),!1,n])}},{}],2:[function(e,n,t){function r(e,n){var t=e.getEntries();t.forEach(function(e){"first-paint"===e.name?c("timing",["fp",Math.floor(e.startTime)]):"first-contentful-paint"===e.name&&c("timing",["fcp",Math.floor(e.startTime)])})}function i(e,n){var t=e.getEntries();t.length>0&&c("lcp",[t[t.length-1]])}function o(e){if(e instanceof s&&!l){var n,t=Math.round(e.timeStamp);n=t>1e12?Date.now()-t:u.now()-t,l=!0,c("timing",["fi",t,{type:e.type,fid:n}])}}if(!("init"in NREUM&&"page_view_timing"in NREUM.init&&"enabled"in NREUM.init.page_view_timing&&NREUM.init.page_view_timing.enabled===!1)){var a,f,c=e("handle"),u=e("loader"),s=NREUM.o.EV;if("PerformanceObserver"in window&&"function"==typeof window.PerformanceObserver){a=new PerformanceObserver(r),f=new PerformanceObserver(i);try{a.observe({entryTypes:["paint"]}),f.observe({entryTypes:["largest-contentful-paint"]})}catch(p){}}if("addEventListener"in document){var l=!1,d=["click","keydown","mousedown","pointerdown","touchstart"];d.forEach(function(e){document.addEventListener(e,o,!1)})}}},{}],3:[function(e,n,t){function r(e,n){if(!i)return!1;if(e!==i)return!1;if(!n)return!0;if(!o)return!1;for(var t=o.split("."),r=n.split("."),a=0;a<r.length;a++)if(r[a]!==t[a])return!1;return!0}var i=null,o=null,a=/Version\/(\S+)\s+Safari/;if(navigator.userAgent){var f=navigator.userAgent,c=f.match(a);c&&f.indexOf("Chrome")===-1&&f.indexOf("Chromium")===-1&&(i="Safari",o=c[1])}n.exports={agent:i,version:o,match:r}},{}],4:[function(e,n,t){function r(e,n){var t=[],r="",o=0;for(r in e)i.call(e,r)&&(t[o]=n(r,e[r]),o+=1);return t}var i=Object.prototype.hasOwnProperty;n.exports=r},{}],5:[function(e,n,t){function r(e,n,t){n||(n=0),"undefined"==typeof t&&(t=e?e.length:0);for(var r=-1,i=t-n||0,o=Array(i<0?0:i);++r<i;)o[r]=e[n+r];return o}n.exports=r},{}],6:[function(e,n,t){n.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(e,n,t){function r(){}function i(e){function n(e){return e&&e instanceof r?e:e?c(e,f,o):o()}function t(t,r,i,o){if(!l.aborted||o){e&&e(t,r,i);for(var a=n(i),f=v(t),c=f.length,u=0;u<c;u++)f[u].apply(a,r);var p=s[y[t]];return p&&p.push([b,t,r,a]),a}}function d(e,n){h[e]=v(e).concat(n)}function m(e,n){var t=h[e];if(t)for(var r=0;r<t.length;r++)t[r]===n&&t.splice(r,1)}function v(e){return h[e]||[]}function g(e){return p[e]=p[e]||i(t)}function w(e,n){u(e,function(e,t){n=n||"feature",y[t]=n,n in s||(s[n]=[])})}var h={},y={},b={on:d,addEventListener:d,removeEventListener:m,emit:t,get:g,listeners:v,context:n,buffer:w,abort:a,aborted:!1};return b}function o(){return new r}function a(){(s.api||s.feature)&&(l.aborted=!0,s=l.backlog={})}var f="nr@context",c=e("gos"),u=e(4),s={},p={},l=n.exports=i();l.backlog=s},{}],gos:[function(e,n,t){function r(e,n,t){if(i.call(e,n))return e[n];var r=t();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,n,{value:r,writable:!0,enumerable:!1}),r}catch(o){}return e[n]=r,r}var i=Object.prototype.hasOwnProperty;n.exports=r},{}],handle:[function(e,n,t){function r(e,n,t,r){i.buffer([e],r),i.emit(e,n,t)}var i=e("ee").get("handle");n.exports=r,r.ee=i},{}],id:[function(e,n,t){function r(e){var n=typeof e;return!e||"object"!==n&&"function"!==n?-1:e===window?0:a(e,o,function(){return i++})}var i=1,o="nr@id",a=e("gos");n.exports=r},{}],loader:[function(e,n,t){function r(){if(!x++){var e=E.info=NREUM.info,n=d.getElementsByTagName("script")[0];if(setTimeout(s.abort,3e4),!(e&&e.licenseKey&&e.applicationID&&n))return s.abort();u(y,function(n,t){e[n]||(e[n]=t)}),c("mark",["onload",a()+E.offset],null,"api");var t=d.createElement("script");t.src="https://"+e.agent,n.parentNode.insertBefore(t,n)}}function i(){"complete"===d.readyState&&o()}function o(){c("mark",["domContent",a()+E.offset],null,"api")}function a(){return O.exists&&performance.now?Math.round(performance.now()):(f=Math.max((new Date).getTime(),f))-E.offset}var f=(new Date).getTime(),c=e("handle"),u=e(4),s=e("ee"),p=e(3),l=window,d=l.document,m="addEventListener",v="attachEvent",g=l.XMLHttpRequest,w=g&&g.prototype;NREUM.o={ST:setTimeout,SI:l.setImmediate,CT:clearTimeout,XHR:g,REQ:l.Request,EV:l.Event,PR:l.Promise,MO:l.MutationObserver};var h=""+location,y={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-1167.min.js"},b=g&&w&&w[m]&&!/CriOS/.test(navigator.userAgent),E=n.exports={offset:f,now:a,origin:h,features:{},xhrWrappable:b,userAgent:p};e(1),e(2),d[m]?(d[m]("DOMContentLoaded",o,!1),l[m]("load",r,!1)):(d[v]("onreadystatechange",i),l[v]("onload",r)),c("mark",["firstbyte",f],null,"api");var x=0,O=e(6)},{}],"wrap-function":[function(e,n,t){function r(e){return!(e&&e instanceof Function&&e.apply&&!e[a])}var i=e("ee"),o=e(5),a="nr@original",f=Object.prototype.hasOwnProperty,c=!1;n.exports=function(e,n){function t(e,n,t,i){function nrWrapper(){var r,a,f,c;try{a=this,r=o(arguments),f="function"==typeof t?t(r,a):t||{}}catch(u){l([u,"",[r,a,i],f])}s(n+"start",[r,a,i],f);try{return c=e.apply(a,r)}catch(p){throw s(n+"err",[r,a,p],f),p}finally{s(n+"end",[r,a,c],f)}}return r(e)?e:(n||(n=""),nrWrapper[a]=e,p(e,nrWrapper),nrWrapper)}function u(e,n,i,o){i||(i="");var a,f,c,u="-"===i.charAt(0);for(c=0;c<n.length;c++)f=n[c],a=e[f],r(a)||(e[f]=t(a,u?f+i:i,o,f))}function s(t,r,i){if(!c||n){var o=c;c=!0;try{e.emit(t,r,i,n)}catch(a){l([a,t,r,i])}c=o}}function p(e,n){if(Object.defineProperty&&Object.keys)try{var t=Object.keys(e);return t.forEach(function(t){Object.defineProperty(n,t,{get:function(){return e[t]},set:function(n){return e[t]=n,n}})}),n}catch(r){l([r])}for(var i in e)f.call(e,i)&&(n[i]=e[i]);return n}function l(n){try{e.emit("internal-error",n)}catch(t){}}return e||(e=i),t.inPlace=u,t.flag=a,t}},{}]},{},["loader"]);</script>
<meta name="description" content="Encontre os melhores Preços aqui na Pichau! Conheça nossa linha de Computadores, Eletrônicos, Celulares, Notebooks, Tablets, Câmeras Digitais e mais.">
<meta name="keywords" content="Pichau">
<meta name="robots" content="INDEX,FOLLOW">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="format-detection" content="telephone=no">
<title>Daily Deals | Pichau</title>
<link rel="stylesheet" type="text/css" media="all" href="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/calendar.css">
<link rel="stylesheet" type="text/css" media="all" href="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/css/jquery.fancybox.min.css">
<link rel="stylesheet" type="text/css" media="all" href="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/css/styles.css">
<link rel="stylesheet" type="text/css" media="all" href="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Aheadworks_Rbslider/css/rbslider.css">
<link rel="stylesheet" type="text/css" media="all" href="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/MageWorx_SearchSuiteAutocomplete/css/searchsuiteautocomplete.css">
<link rel="stylesheet" type="text/css" media="all" href="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Tigren_Dailydeal/css/dailydeal_sidebar.css">
<link rel="stylesheet" type="text/css" media="all" href="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Tigren_Dailydeal/css/jquery.fancybox.css">
<link rel="stylesheet" type="text/css" media="all" href="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Tigren_Dailydeal/css/dailydeal.css">
<link rel="stylesheet" type="text/css" media="all" href="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Amasty_SeoToolKit/css/source/mkcss/amseokit.css">
<link rel="stylesheet" type="text/css" media="all" href="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Amasty_ShopbyBase/css/source/mkcss/am-shopby-base.css">
<link rel="stylesheet" type="text/css" media="all" href="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Amasty_Shopby/css/source/mkcss/am-shopby.css">
<link rel="stylesheet" type="text/css" media="print" href="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/css/print.css">
<script type="text/javascript" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/requirejs/require.js"></script>
<script type="text/javascript" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/requirejs/mixins.js"></script>
<script type="text/javascript" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/requirejs-config.js"></script>
<link rel="icon" type="image/x-icon" href="https://cdn.pichau.com.br/favicon/stores/1/favicon.ico">
<link rel="shortcut icon" type="image/x-icon" href="https://cdn.pichau.com.br/favicon/stores/1/favicon.ico">
<script src="//rum-static.pingdom.net/pa-5d1a3fdc836df3000800003b.js" async=""></script>
<meta name="p:domain_verify" content="59b64a95050e6caad251a84bfac6ca23">
<meta name="google-site-verification" content="KlvLvcT4Yp77EFE4i3jDVM3hRJC7RVa1CxFSri3Cj4A">
<style>
.checkout-cart-index .cart-summary #block-shipping {
  display: none !important;
}
#block-discount {
    float: left !important;
}
.checkout-cart-index .checkout-methods-items li.item,
.checkout-cart-index .title-cart-itens {
    position: relative;
}

.checkout-cart-index .title-cart-itens:after,
.checkout-cart-index .checkout-methods-items li.item:after {
    content: ' ';
    position: absolute;
    top: 0;
    right: 0;
    /* left: 75%; */
    background: rgba(255, 255, 255, .6);
    bottom: 0;
    height: 60px;
    width: 200px;
}

.checkout-cart-index .title-cart-itens.can-buy:after,
.checkout-cart-index .checkout-methods-items li.item.can-buy:after {
    display:none !important;
}

.catalog-product-view .loading-mask {
    display: none !important;
}
</style>
<script defer="">
    require(['jquery'], function ($) {
        window.onload = function () {
            setTimeout(function () {
                 $('.checkout-cart-index .title-cart-itens, .checkout-cart-index .checkout-methods-items li.item').addClass('can-buy');
            }, 5000);
        }
    });
</script>

<script>
        window.getWpCookie = function(name) {
            match = document.cookie.match(new RegExp(name + '=([^;]+)'));
            if (match) return decodeURIComponent(match[1].replace(/\+/g, ' ')) ;
        };

        window.dataLayer = window.dataLayer || [];
                var dlObjects = [{"pageName":"Daily Deals | Pichau","pageType":"other","google_tag_params":{"ecomm_pagetype":"other"}}];
        for (var i in dlObjects) {
            window.dataLayer.push(dlObjects[i]);
        }
                var wpCookies = ['wp_customerId','wp_customerGroup'];
        wpCookies.map(function(cookieName) {
            var cookieValue = window.getWpCookie(cookieName);
            if (cookieValue) {
                var dlObject = {};
                dlObject[cookieName.replace('wp_', '')] = cookieValue;
                window.dataLayer.push(dlObject);
            }
        });
    </script>

<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MQS562');</script>
 <script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="jquery/jquery.mobile.custom" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/jquery/jquery.mobile.custom.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/dataPost" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/dataPost.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/bootstrap" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/bootstrap.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/translate-inline" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/translate-inline.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Amasty_Shopby/js/amShopbyResponsive" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Amasty_Shopby/js/amShopbyResponsive.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Theme/js/responsive" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Theme/js/responsive.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Theme/js/theme" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Theme/js/theme.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="jquery" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/jquery.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="js/main" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/js/main.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/translate" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/translate.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Mirasvit_SearchAutocomplete/js/autocomplete" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Mirasvit_SearchAutocomplete/js/autocomplete.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Mirasvit_SearchAutocomplete/js/typeahead" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Mirasvit_SearchAutocomplete/js/typeahead.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/template" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/template.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/modal/confirm" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/modal/confirm.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/apply/main" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/apply/main.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/bootstrap" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/bootstrap.js"></script><link rel="stylesheet" type="text/css" href="https://d36mpcpuzc4ztk.cloudfront.net/css/visitor.css"><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="jquery/jquery.cookie" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/jquery/jquery.cookie.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="jquery/patches/jquery" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/jquery/patches/jquery.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="jquery/patches/jquery-ui" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/jquery/patches/jquery-ui.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Amasty_Shopby/js/amShopbyTopFilters" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Amasty_Shopby/js/amShopbyTopFilters.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/tabs" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/tabs.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="domReady" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/requirejs/domReady.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/smart-keyboard-handler" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/smart-keyboard-handler.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/mage" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/mage.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/ie-class-fixer" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/ie-class-fixer.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="jquery/jquery-migrate" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/jquery/jquery-migrate.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/common" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/common.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="tether" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/js/vendor/tether.min.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="jquery/ui" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/jquery/jquery-ui.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="dailydeal_countdown" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Tigren_Dailydeal/js/dailydeal.countdown.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="chosen" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/js/vendor/chosen.jquery.min.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="underscore" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/underscore.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/modal/modal" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/modal/modal.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="knockoutjs/knockout" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/knockoutjs/knockout.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="knockoutjs/knockout-es5" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/knockoutjs/knockout-es5.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="jquery/jquery-storageapi" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/jquery/jquery.storageapi.min.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="WeltPixel_GoogleTagManager/js/weltpixel_persistentlayer" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/WeltPixel_GoogleTagManager/js/weltpixel_persistentlayer.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="WeltPixel_GoogleTagManager/js/weltpixel_gtm" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/WeltPixel_GoogleTagManager/js/weltpixel_gtm.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Catalog/js/price-utils" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Catalog/js/price-utils.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Catalog/js/catalog-add-to-cart" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Catalog/js/catalog-add-to-cart.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/collapsible" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/collapsible.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="matchMedia" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/matchMedia.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="jquery.mask" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/js/jquery.mask.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="jquery.fancybox" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/js/vendor/jquery.fancybox.min.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/apply/scripts" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/apply/scripts.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/template/engine" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/template/engine.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/bindings/bootstrap" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/bindings/bootstrap.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/extender/observable_array" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/extender/observable_array.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/extender/bound-nodes" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/extender/bound-nodes.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Customer/js/customer-data" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Customer/js/customer-data.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Persistent/js/view/customer-data-mixin" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Persistent/js/view/customer-data-mixin.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="bootstrap" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/js/vendor/bootstrap.min.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="text" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/requirejs/text.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/key-codes" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/key-codes.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/core/storage/local" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/core/storage/local.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/registry/registry" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/registry/registry.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Catalog/js/product/view/product-ids-resolver" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Catalog/js/product/view/product-ids-resolver.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="knockoutjs/knockout-repeat" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/knockoutjs/knockout-repeat.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="knockoutjs/knockout-fast-foreach" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/knockoutjs/knockout-fast-foreach.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/utils/wrapper" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/utils/wrapper.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/template/renderer" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/template/renderer.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/bindings/resizable" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/bindings/resizable.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/bindings/i18n" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/bindings/i18n.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/bindings/scope" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/bindings/scope.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/bindings/range" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/bindings/range.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/bindings/mage-init" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/bindings/mage-init.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/bindings/keyboard" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/bindings/keyboard.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/bindings/optgroup" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/bindings/optgroup.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/core/events" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/core/events.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="es6-collections" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/es6-collections.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Customer/js/section-config" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Customer/js/section-config.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/storage" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/storage.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/utils/main" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/utils/main.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Catalog/js/product/view/product-ids" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Catalog/js/product/view/product-ids.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/bindings/after-render" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/bindings/after-render.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/bindings/autoselect" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/bindings/autoselect.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/bindings/datepicker" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/bindings/datepicker.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/bindings/outer_click" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/bindings/outer_click.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/bindings/fadeVisible" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/bindings/fadeVisible.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/bindings/collapsible" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/bindings/collapsible.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/bindings/staticChecked" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/bindings/staticChecked.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/bindings/simple-checked" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/bindings/simple-checked.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/bindings/bind-html" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/bindings/bind-html.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/bindings/tooltip" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/bindings/tooltip.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/template/observable_source" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/template/observable_source.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/logger/console-logger" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/logger/console-logger.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/view/utils/async" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/view/utils/async.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/url" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/url.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/knockout/template/loader" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/knockout/template/loader.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/utils/arrays" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/utils/arrays.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/utils/compare" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/utils/compare.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/utils/misc" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/utils/misc.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/utils/objects" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/utils/objects.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/utils/strings" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/utils/strings.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/utils/template" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/utils/template.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/calendar" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/calendar.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/core/class" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/core/class.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="moment" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/moment.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/logger/logger" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/logger/logger.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/logger/entry-factory" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/logger/entry-factory.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/logger/console-output-handler" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/logger/console-output-handler.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/logger/formatter" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/logger/formatter.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/logger/message-pool" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/logger/message-pool.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/logger/levels-pool" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/logger/levels-pool.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/logger/logger-utils" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/logger/logger-utils.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/view/utils/dom-observer" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/view/utils/dom-observer.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/view/utils/bindings" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/view/utils/bindings.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="FormData" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/FormData.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="jquery/jquery-ui-timepicker-addon" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/jquery/jquery-ui-timepicker-addon.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/logger/entry" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/logger/entry.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="MutationObserver" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/MutationObserver.js"></script><style type="text/css">.fb_hidden{position:absolute;top:-10000px;z-index:10001}.fb_reposition{overflow:hidden;position:relative}.fb_invisible{display:none}.fb_reset{background:none;border:0;border-spacing:0;color:#000;cursor:auto;direction:ltr;font-family:"lucida grande", tahoma, verdana, arial, sans-serif;font-size:11px;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal}.fb_reset>div{overflow:hidden}@keyframes fb_transform{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}.fb_animate{animation:fb_transform .3s forwards}
.fb_dialog{background:rgba(82, 82, 82, .7);position:absolute;top:-10000px;z-index:10001}.fb_dialog_advanced{border-radius:8px;padding:10px}.fb_dialog_content{background:#fff;color:#373737}.fb_dialog_close_icon{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 0 transparent;cursor:pointer;display:block;height:15px;position:absolute;right:18px;top:17px;width:15px}.fb_dialog_mobile .fb_dialog_close_icon{left:5px;right:auto;top:5px}.fb_dialog_padding{background-color:transparent;position:absolute;width:1px;z-index:-1}.fb_dialog_close_icon:hover{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -15px transparent}.fb_dialog_close_icon:active{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -30px transparent}.fb_dialog_iframe{line-height:0}.fb_dialog_content .dialog_title{background:#6d84b4;border:1px solid #365899;color:#fff;font-size:14px;font-weight:bold;margin:0}.fb_dialog_content .dialog_title>span{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Cou7n-nqK52.gif) no-repeat 5px 50%;float:left;padding:5px 0 7px 26px}body.fb_hidden{height:100%;left:0;margin:0;overflow:visible;position:absolute;top:-10000px;transform:none;width:100%}.fb_dialog.fb_dialog_mobile.loading{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/3rhSv5V8j3o.gif) white no-repeat 50% 50%;min-height:100%;min-width:100%;overflow:hidden;position:absolute;top:0;z-index:10001}.fb_dialog.fb_dialog_mobile.loading.centered{background:none;height:auto;min-height:initial;min-width:initial;width:auto}.fb_dialog.fb_dialog_mobile.loading.centered #fb_dialog_loader_spinner{width:100%}.fb_dialog.fb_dialog_mobile.loading.centered .fb_dialog_content{background:none}.loading.centered #fb_dialog_loader_close{clear:both;color:#fff;display:block;font-size:18px;padding-top:20px}#fb-root #fb_dialog_ipad_overlay{background:rgba(0, 0, 0, .4);bottom:0;left:0;min-height:100%;position:absolute;right:0;top:0;width:100%;z-index:10000}#fb-root #fb_dialog_ipad_overlay.hidden{display:none}.fb_dialog.fb_dialog_mobile.loading iframe{visibility:hidden}.fb_dialog_mobile .fb_dialog_iframe{position:sticky;top:0}.fb_dialog_content .dialog_header{background:linear-gradient(from(#738aba), to(#2c4987));border-bottom:1px solid;border-color:#043b87;box-shadow:white 0 1px 1px -1px inset;color:#fff;font:bold 14px Helvetica, sans-serif;text-overflow:ellipsis;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0;vertical-align:middle;white-space:nowrap}.fb_dialog_content .dialog_header table{height:43px;width:100%}.fb_dialog_content .dialog_header td.header_left{font-size:12px;padding-left:5px;vertical-align:middle;width:60px}.fb_dialog_content .dialog_header td.header_right{font-size:12px;padding-right:5px;vertical-align:middle;width:60px}.fb_dialog_content .touchable_button{background:linear-gradient(from(#4267B2), to(#2a4887));background-clip:padding-box;border:1px solid #29487d;border-radius:3px;display:inline-block;line-height:18px;margin-top:3px;max-width:85px;padding:4px 12px;position:relative}.fb_dialog_content .dialog_header .touchable_button input{background:none;border:none;color:#fff;font:bold 12px Helvetica, sans-serif;margin:2px -12px;padding:2px 6px 3px 6px;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}.fb_dialog_content .dialog_header .header_center{color:#fff;font-size:16px;font-weight:bold;line-height:18px;text-align:center;vertical-align:middle}.fb_dialog_content .dialog_content{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/jKEcVPZFk-2.gif) no-repeat 50% 50%;border:1px solid #4a4a4a;border-bottom:0;border-top:0;height:150px}.fb_dialog_content .dialog_footer{background:#f5f6f7;border:1px solid #4a4a4a;border-top-color:#ccc;height:40px}#fb_dialog_loader_close{float:left}.fb_dialog.fb_dialog_mobile .fb_dialog_close_button{text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}.fb_dialog.fb_dialog_mobile .fb_dialog_close_icon{visibility:hidden}#fb_dialog_loader_spinner{animation:rotateSpinner 1.2s linear infinite;background-color:transparent;background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/t-wz8gw1xG1.png);background-position:50% 50%;background-repeat:no-repeat;height:24px;width:24px}@keyframes rotateSpinner{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
.fb_iframe_widget{display:inline-block;position:relative}.fb_iframe_widget span{display:inline-block;position:relative;text-align:justify}.fb_iframe_widget iframe{position:absolute}.fb_iframe_widget_fluid_desktop,.fb_iframe_widget_fluid_desktop span,.fb_iframe_widget_fluid_desktop iframe{max-width:100%}.fb_iframe_widget_fluid_desktop iframe{min-width:220px;position:relative}.fb_iframe_widget_lift{z-index:1}.fb_iframe_widget_fluid{display:inline}.fb_iframe_widget_fluid span{width:100%}</style><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/loader" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/loader.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Aheadworks_Rbslider/js/aw-rbslider-ajax" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Aheadworks_Rbslider/js/aw-rbslider-ajax.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_PageCache/js/page-cache" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_PageCache/js/page-cache.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/core/app" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/core/app.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Search/js/form-mini" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Search/js/form-mini.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/menu" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/menu.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Aheadworks_Rbslider/js/aw-rbslider" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Aheadworks_Rbslider/js/aw-rbslider.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/validation/validation" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/validation/validation.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/cookies" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/cookies.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Paypal/js/in-context/express-checkout" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Paypal/js/in-context/express-checkout.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/block-loader" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/block-loader.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Customer/js/invalidation-processor" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Customer/js/invalidation-processor.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Mageplaza_GoogleRecaptcha/js/captcha" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Mageplaza_GoogleRecaptcha/js/captcha.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="uikit" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Aheadworks_Rbslider/js/uikit.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/core/renderer/types" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/core/renderer/types.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/core/renderer/layout" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/core/renderer/layout.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/core/collection" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/core/collection.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/core/element/element" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/core/element/element.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/validation" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/validation.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="paypalInContextExpressCheckout" src="https://www.paypalobjects.com/api/checkout.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Aheadworks_Rbslider/js/components/slideshow" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Aheadworks_Rbslider/js/components/slideshow.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="jquery/validate" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/jquery/jquery.validate.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Checkout/js/view/minicart" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Checkout/js/view/minicart.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Tax/js/view/checkout/minicart/subtotal/totals" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Tax/js/view/checkout/minicart/subtotal/totals.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Msrp/js/view/checkout/minicart/subtotal/totals" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Msrp/js/view/checkout/minicart/subtotal/totals.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Cmsmart_Promotion/js/view/checkout/minicart/discount" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Cmsmart_Promotion/js/view/checkout/minicart/discount.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Catalog/js/view/image" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Catalog/js/view/image.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Customer/js/view/authentication-popup" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Customer/js/view/authentication-popup.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/view/messages" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/view/messages.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Captcha/js/view/checkout/loginCaptcha" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Captcha/js/view/checkout/loginCaptcha.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Mageplaza_SocialLogin/js/view/social-buttons" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Mageplaza_SocialLogin/js/view/social-buttons.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="MageWorx_SearchSuiteAutocomplete/js/autocomplete" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/MageWorx_SearchSuiteAutocomplete/js/autocomplete.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="MageWorx_SearchSuiteAutocomplete/js/bindEvents" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/MageWorx_SearchSuiteAutocomplete/js/bindEvents.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="MageWorx_SearchSuiteAutocomplete/js/dataProvider" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/MageWorx_SearchSuiteAutocomplete/js/dataProvider.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Theme/js/view/messages" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Theme/js/view/messages.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Catalog/js/storage-manager" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Catalog/js/storage-manager.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/core/element/links" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/core/element/links.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="jquery/jquery.metadata" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/jquery/jquery.metadata.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/form/form" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/form/form.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Customer/js/action/login" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Customer/js/action/login.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Customer/js/model/authentication-popup" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Customer/js/model/authentication-popup.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/modal/alert" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/modal/alert.js"></script><script async="true" id="xo-pptm" src="https://www.paypal.com/tagmanager/pptm.js?id=www.pichau.com.br&amp;source=checkoutjs&amp;t=xo&amp;v=4.0.314"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Checkout/js/sidebar" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Checkout/js/sidebar.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/dropdown" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/dropdown.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Captcha/js/view/checkout/defaultCaptcha" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Captcha/js/view/checkout/defaultCaptcha.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Captcha/js/model/captchaList" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Captcha/js/model/captchaList.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="socialProvider" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Mageplaza_SocialLogin/js/provider.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/model/messageList" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/model/messageList.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Catalog/js/product/storage/storage-service" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Catalog/js/product/storage/storage-service.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/lib/spinner" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/lib/spinner.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/requirejs/resolver" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/requirejs/resolver.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Customer/js/invalidation-rules/website-rule" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Customer/js/invalidation-rules/website-rule.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Captcha/js/model/captcha" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Captcha/js/model/captcha.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mage/decorate" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/mage/decorate.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/form/adapter" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/form/adapter.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Catalog/js/product/storage/ids-storage" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Catalog/js/product/storage/ids-storage.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Catalog/js/product/storage/data-storage" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Catalog/js/product/storage/data-storage.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Catalog/js/product/storage/ids-storage-compare" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Catalog/js/product/storage/ids-storage-compare.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/model/messages" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/model/messages.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Captcha/js/action/refresh" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Captcha/js/action/refresh.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Ui/js/form/adapter/buttons" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Ui/js/form/adapter/buttons.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="Magento_Catalog/js/product/query-builder" src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/Magento_Catalog/js/product/query-builder.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="//www.google.com/recaptcha/api.js?onload=recaptchaOnload&amp;render=explicit" src="//www.google.com/recaptcha/api.js?onload=recaptchaOnload&amp;render=explicit"></script></head>
<body data-container="body" class="dailydeal-index-index page-layout-2columns-right ajax-loading header-sticked" style="background-image: url(&quot;https://cdn.pichau.com.br/aw_rbslider/slides/bg-diadasmae2020.jpg&quot;);" aria-busy="true"><script>!function(a,b,c,d,e,f){a.ddjskey=e;a.ddoptions=f||null;var m=b.createElement(c),n=b.getElementsByTagName(c)[0];m.async=1,m.src=d,n.parentNode.insertBefore(m,n)}(window,document,"script","https://js.datadome.co/tags.js","6D7FE42D59136B36A64C1AB393707E");</script>
<script>
    try {
        if (!window.localStorage || !window.sessionStorage) {
            throw new Error();
        }

        localStorage.setItem('storage_test', 1);
        localStorage.removeItem('storage_test');
    } catch(e) {
        (function () {
            var Storage = function (type) {
                var data;

                function createCookie(name, value, days) {
                    var date, expires;

                    if (days) {
                        date = new Date();
                        date.setTime(date.getTime()+(days * 24 * 60 * 60 * 1000));
                        expires = '; expires=' + date.toGMTString();
                    } else {
                        expires = '';
                    }
                    document.cookie = name + '=' + value+expires+'; path=/';
                }

                function readCookie(name) {
                    var nameEQ = name + '=',
                        ca = document.cookie.split(';'),
                        i = 0,
                        c;

                    for (i=0; i < ca.length; i++) {
                        c = ca[i];

                        while (c.charAt(0) === ' ') {
                            c = c.substring(1,c.length);
                        }

                        if (c.indexOf(nameEQ) === 0) {
                            return c.substring(nameEQ.length, c.length);
                        }
                    }

                    return null;
                }

                function setData(data) {
                    data = encodeURIComponent(JSON.stringify(data));
                    createCookie(type === 'session' ? getSessionName() : 'localStorage', data, 365);
                }

                function clearData() {
                    createCookie(type === 'session' ? getSessionName() : 'localStorage', '', 365);
                }

                function getData() {
                    var data = type === 'session' ? readCookie(getSessionName()) : readCookie('localStorage');

                    return data ? JSON.parse(decodeURIComponent(data)) : {};
                }

                function getSessionName() {
                    if (!window.name) {
                        window.name = new Date().getTime();
                    }

                    return 'sessionStorage' + window.name;
                }

                data = getData();

                return {
                    length: 0,
                    clear: function () {
                        data = {};
                        this.length = 0;
                        clearData();
                    },

                    getItem: function (key) {
                        return data[key] === undefined ? null : data[key];
                    },

                    key: function (i) {
                        var ctr = 0,
                            k;

                        for (k in data) {
                            if (ctr.toString() === i.toString()) {
                                return k;
                            } else {
                                ctr++
                            }
                        }

                        return null;
                    },

                    removeItem: function (key) {
                        delete data[key];
                        this.length--;
                        setData(data);
                    },

                    setItem: function (key, value) {
                        data[key] = value.toString();
                        this.length++;
                        setData(data);
                    }
                };
            };

            window.localStorage.__proto__ = window.localStorage = new Storage('local');
            window.sessionStorage.__proto__ = window.sessionStorage = new Storage('session');
        })();
    }
</script>
<script>
        require.config({
            deps: [
                'jquery',
                'mage/translate',
                'jquery/jquery-storageapi'
            ],
            callback: function ($) {
                'use strict';

                var dependencies = [],
                    versionObj;

                $.initNamespaceStorage('mage-translation-storage');
                $.initNamespaceStorage('mage-translation-file-version');
                versionObj = $.localStorage.get('mage-translation-file-version');


                if (versionObj.version !== '8b834e4686a5c9a9378fd1fe7401bfa94487bc8e') {
                    dependencies.push(
                        'text!js-translation.json'
                    );

                }

                require.config({
                    deps: dependencies,
                    callback: function (string) {
                        if (typeof string === 'string') {
                            $.mage.translate.add(JSON.parse(string));
                            $.localStorage.set('mage-translation-storage', string);
                            $.localStorage.set(
                                'mage-translation-file-version',
                                {
                                    version: '8b834e4686a5c9a9378fd1fe7401bfa94487bc8e'
                                }
                            );
                        } else {
                            $.mage.translate.add($.localStorage.get('mage-translation-storage'));
                        }
                    }
                });
            }
        });
    </script>

<noscript>
        <div class="message global noscript">
            <div class="content">
                <p>
                    <strong>Os Javascripts parecem estar desabilitados no seu navegador.</strong>
                    <span>For the best experience on our site, be sure to turn on Javascript in your browser.</span>
                </p>
            </div>
        </div>
    </noscript>
<div style="display: none;" id="paypal-express-in-context-checkout-main" data-paypal-click-listener=""></div>

<script id="searchAutocompletePlaceholder" type="text/x-custom-template">
    <div class="searchautocomplete__autocomplete">
        <div class="searchautocomplete__spinner">
            <div class="spinner-item spinner-item-1"></div>
            <div class="spinner-item spinner-item-2"></div>
            <div class="spinner-item spinner-item-3"></div>
            <div class="spinner-item spinner-item-4"></div>
            <div class="spinner-item spinner-item-5"></div>
            <div class="spinner-item spinner-item-6"></div>
            <div class="spinner-item spinner-item-7"></div>
            <div class="spinner-item spinner-item-8"></div>
        </div>
    </div>
</script>
<script id="searchAutocompleteWrapper" type="text/x-custom-template">
    <div class="wrapper">
        <div data-bind="visible: result.totalItems > 0">
            <div data-bind="foreach: { data: result.indices, as: 'index' }">
                <div data-bind="visible: index.totalItems, attr: {class: 'searchautocomplete__index-' + index.identifier}">
                    <div class="index-title">
                        <span data-bind="text: index.title"></span>
                        <span data-bind="visible: index.isShowTotals">
                            (<span class="total" data-bind="text: index.totalItems"></span>)
                        </span>
                    </div>

                    <ul data-bind="foreach: { data: index.items, as: 'item' }">
                        <li data-bind="
                            template: { name:index.identifier, data: item },
                            attr: {class: 'searchautocomplete__item-' + index.identifier},
                            event: { mouseover: $parents[1].onMouseOver, mouseout: $parents[1].onMouseOut, mousedown: $parents[1].onClick },
                            css: {_active: $data.isActive}">
                        </li>
                    </ul>
                </div>
            </div>

            <div class="show-all-results" data-bind="visible: result.urlAll">
                <a data-bind="attr: { href: result.urlAll }">
                    <span data-bind="text: result.textAll"></span>
                </a>
            </div>
        </div>

        <div class="empty-result" data-bind="visible: result.totalItems == 0 && !loading">
            <span data-bind="text: result.textEmpty"></span>
        </div>
    </div>
</script>
<script id="popular" type="text/x-custom-template">
    <a class="title" data-bind="text: query"></a>
</script>
<script id="recent" type="text/x-custom-template">
    <span class="title" data-bind="text: query"></span>
</script>
<script id="magento_catalog_category" type="text/x-custom-template">
    <a class="title" data-bind="text: name, attr: {href: url}, highlight"></a>
</script>
<script id="magento_catalog_product" type="text/x-custom-template">
    <!-- ko if: image -->
    <img data-bind="attr: {src: image}"/>
    <!-- /ko -->

    <a class="title" data-bind="html: name, attr: {href: url}, highlight"></a>

    <!-- ko if: price > 0 -->
    <div class="block-info-search">
        <div data-bind="html: price, visible: price, price" class="price"></div>
        <div data-bind="html: price, visible: price, installment" class="price-installments"></div>
        <div data-bind="html: price, visible: price, boleto" class="price-boleto"></div>
    </div>
    <!-- /ko -->

    <form data-role="tocart-form" class="to-cart"
          data-bind="attr:{action: cart.params.action}, afterRender: $parents[2].afterRender"
          method="post">
        <input type="hidden" name="product" data-bind="value: cart.params.data.product">
        <input type="hidden" name="uenc" data-bind="value: cart.params.data.uenc">
        <input type="hidden" name="form_key" data-bind="value: $parents[2].form_key"/>
        <button type="submit" class="button buy">
            <span><!-- ko i18n: 'Add to Cart'--><!-- /ko --></span>
            <i class="icon-cart-search"></i>
        </button>
    </form>
</script>
<script id="magento_cms_page" type="text/x-custom-template">
    <a class="title" data-bind="text: name, attr: {href: url}, highlight"></a>
</script>
<script id="magento_catalog_categoryproduct" type="text/x-custom-template">
    <a class="title" data-bind="html: name, attr: {href: url}, highlight"></a>
</script>
<script id="magento_search_query" type="text/x-custom-template">
    <a class="title" data-bind="text: query_text, attr: {href: url}, highlight"></a> <span class="num_results"
                                                                                           data-bind="text: num_results"></span>
</script>
<script id="external_wordpress_post" type="text/x-custom-template">
    <a class="title" data-bind="text: name, attr: {href: url}, highlight"></a>
</script>
<script id="magefan_blog_post" type="text/x-custom-template">
    <a class="title" data-bind="text: name, attr: {href: url}, highlight"></a>
</script>
<script id="magento_catalog_attribute" type="text/x-custom-template">
    <a class="title" data-bind="text: name, attr: {href: url}, highlight"></a>
</script>
<script id="mageplaza_blog_post" type="text/x-custom-template">
    <a class="title" data-bind="text: name, attr: {href: url}, highlight"></a>
</script>
<script id="mirasvit_blog_post" type="text/x-custom-template">
    <a class="title" data-bind="text: name, attr: {href: url}, highlight"></a>
</script>
<script id="mirasvit_gry_registry" type="text/x-custom-template">
    <a class="title" data-bind="text: title, attr: {href: url}, highlight"></a>
    <p data-bind="text: name, highlight"></p>
</script>
<script id="mirasvit_kb_rarticle" type="text/x-custom-template">
    <a class="title" data-bind="text: name, attr: {href: url}, highlight"></a>
</script>
<script id="ves_blog_post" type="text/x-custom-template">
    <a class="title" data-bind="text: name, attr: {href: url}, highlight"></a>
</script>
<script id="amasty_blog_post" type="text/x-custom-template">
    <a class="title" data-bind="text: name, attr: {href: url}, highlight"></a>
</script>
<script id="aheadworks_blog_post" type="text/x-custom-template">
    <a class="title" data-bind="text: name, attr: {href: url}, highlight"></a>
</script> <script>
        require([
                'jquery',
                'Mirasvit_SearchAutocomplete/js/autocomplete',
                'Mirasvit_SearchAutocomplete/js/typeahead'
            ], function ($, autocomplete, typeahead) {
                const selector = 'input#search, input#mobile_search, .minisearch input[type="text"]';

                $(document).ready(function () {
                    var $input = $(selector);

                    $input.each(function (index, searchInput) {

                        new autocomplete($(searchInput)).init({"query":"","priceFormat":{"pattern":"R$%s","precision":2,"requiredPrecision":2,"decimalSymbol":",","groupSymbol":".","groupLength":3,"integerRequired":false},"minSearchLength":10,"url":"https:\/\/www.pichau.com.br\/searchautocomplete\/ajax\/suggest\/","delay":500,"popularSearches":[],"isTypeaheadEnabled":"0","typeaheadUrl":"https:\/\/www.pichau.com.br\/searchautocomplete\/ajax\/typeahead\/"});
                    });
                });
            }
        );

        window.installmentConfig = {
            "maxParcels": 10,
            "minParcelValue": 10,
            "boletoDiscount": 12,
            "installmentTpl": "<span><%- data.qtd %>x de <%- data.priceParcel %></span> <strong>sem juros</strong> no cartão",
            "boletoTpl": "<span>à vista <%- data.price %></span> no boleto com <strong><%- data.discount %>% de desconto</strong>"
        }
    </script>

<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MQS562"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<div class="page-wrapper"><header class="page-header"><div class="panel wrapper"><div class="panel header"><a class="action skip contentarea" href="#contentarea"><span>Skip to Content</span></a>
</div></div><div class="header container"><div class="header content"><span data-action="toggle-nav" class="action nav-toggle"><span>Alterar Navegação</span></span>
<a class="logo" href="https://www.pichau.com.br/" title="">
<img src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/images/logo-pichau.png" title="" alt="" width="281" height="113">
</a>
<div class="header-right"><div class="row"><div class="col-12 col-12-header"><div class="row header-right-links"><div class="links-header">
<ul>
<li class="sac-social"><nav class="nav-social"><label for="">Compartilhe</label>
<ul>
<li><a id="nav-social-1" href="https://www.youtube.com/pichauinfo" target="_blank"><i class="fa fa-youtube"></i></a></li>
<li><a id="nav-social-2" href="https://www.facebook.com/pichauinfo" target="_blank"><i class="fa fa-facebook"></i></a></li>
<li class="last"><a id="nav-social-3" href="https://www.twitter.com/pichauinfo" target="_blank"><i class="fa fa-twitter"></i></a></li>
</ul>
</nav></li>
<li class="sac-phone"><a id="nav-sac-1" class="open-tel"> <i class="fa fa-phone"></i> Atendimento <span>por Telefone</span> </a></li>
<li class="sac-chat"><a id="nav-sac-2" class="btn-chat" href="https://pichau.freshdesk.com" target="_blank"> <i class="fa fa-comments-o"></i>SAC </a></li>
<li class="banner-nav"><a href="//pichaugaming.com.br" target="_blank"> <img src="https://cdn.pichau.com.br/wysiwyg/btn-pichaugaming-home.png" alt="Loja fisica - Pichau" data-pagespeed-lsc-url="https://static.pichau.com.br/wysiwyg/btn-pichaugaming-home.png" width="147" height="34"> </a></li>
</ul>
</div>
<div id="modal-telefone" class="modal">
<div class="conteudo-modal"><i class="fa fa-times close-modal"></i>
<h3>Atendimento <strong>Por telefone</strong></h3>
<p>Horários de atendimento: <strong>Segunda a Sexta</strong> 9h às 12h e das 13h às 18h<br> Nosso telefone é <strong class="telefone-modal">(47) 3305-5150</strong></p>
</div>
</div><ul class="menu-about">
<li class="authorization-link" data-label="ou">
<a href="https://www.pichau.com.br/customer/account/login/">
<i class="fa fa-user" aria-hidden="true"></i>
Entrar </a>
<a href="https://www.pichau.com.br/customer/account/create/">
/ Cadastro
</a>
</li>
<li>
<a href="https://www.pichau.com.br/quem-somos/">Quem somos</a>
</li>
<li>
<a href="https://www.pichau.com.br/como-comprar/">Políticas do site</a>
</li>
</ul>
<div data-block="minicart" class="minicart-wrapper">
<a class="action showcart" href="https://www.pichau.com.br/checkout/cart/" data-bind="scope: 'minicart_content'">
<span class="text">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Carrinho <span class="counter qty empty" data-bind="css: { empty: !!getCartParam('summary_count') == false }, blockLoader: isLoading">
<span class="counter-number"><!-- ko text: getCartParam('summary_count') --><!-- /ko --> produto</span>
</span>
</span>
</a>
<script>
        window.checkout = {"shoppingCartUrl":"https:\/\/www.pichau.com.br\/checkout\/cart\/","checkoutUrl":"https:\/\/www.pichau.com.br\/onestepcheckout\/","updateItemQtyUrl":"https:\/\/www.pichau.com.br\/checkout\/sidebar\/updateItemQty\/","removeItemUrl":"https:\/\/www.pichau.com.br\/checkout\/sidebar\/removeItem\/","imageTemplate":"Magento_Catalog\/product\/image_with_borders","baseUrl":"https:\/\/www.pichau.com.br\/","minicartMaxItemsVisible":5,"websiteId":"1","maxItemsToDisplay":10,"customerLoginUrl":"https:\/\/www.pichau.com.br\/customer\/account\/login\/","isRedirectRequired":false,"autocomplete":"off","captcha":{"user_login":{"isCaseSensitive":false,"imageHeight":50,"imageSrc":"","refreshUrl":"https:\/\/www.pichau.com.br\/captcha\/refresh\/","isRequired":false}}};
    </script>

</div>
</div></div></div></div><div class="header-menu-search"><div class="block block-search">
<form class="form minisearch" id="search_mini_form" action="https://www.pichau.com.br/catalogsearch/result/" method="get">
<input id="search" type="text" name="q" value="" placeholder="Digite o que procura" class="input-text" maxlength="128" role="combobox" aria-haspopup="false" aria-autocomplete="both" autocomplete="off">
    <div class="searchautocomplete__autocomplete">
        <div class="searchautocomplete__spinner">
            <div class="spinner-item spinner-item-1"></div>
            <div class="spinner-item spinner-item-2"></div>
            <div class="spinner-item spinner-item-3"></div>
            <div class="spinner-item spinner-item-4"></div>
            <div class="spinner-item spinner-item-5"></div>
            <div class="spinner-item spinner-item-6"></div>
            <div class="spinner-item spinner-item-7"></div>
            <div class="spinner-item spinner-item-8"></div>
        </div>
    </div>

<div id="search_autocomplete" class="search-autocomplete"></div>
<div data-bind="scope: 'searchsuiteautocomplete_form'">
<!-- ko template: getTemplate() -->
<div id="searchsuite-autocomplete" class="searchsuite-autocomplete" data-bind="visible: showPopup()" style="display: none;">
<div data-bind="visible: anyResultCount()" style="display: none;">
<div class="suggest" data-bind="visible: result.suggest.data().length > 0" style="display: none;">
<div class="title"><!-- ko i18n: 'Suggested'--><span>Sugerido</span><!-- /ko --></div>
<ul id="suggest" role="listbox" data-bind="foreach: result.suggest.data"></ul>
</div>
<div class="product" data-bind="visible: result.product.data().length > 0" style="display: none;">
<div class="title">
<!-- ko i18n: 'Products'--><span>Produtos</span><!-- /ko -->
<a class="see-all" data-bind="attr: {href: result.product.url}" href="">
<!-- ko i18n: 'See All' --><span>Ver Tudo</span><!-- /ko -->
<span data-bind="text: result.product.size">0</span>
</a>
</div>
<ul id="product" role="listbox" data-bind="foreach: result.product.data"></ul>
</div>
</div>
<div class="no-result" data-bind="visible: !anyResultCount()"><!-- ko i18n: 'No Result'--><span>Não encontramos nada com esse termo :(</span><!-- /ko --></div>
</div><!-- /ko -->
</div>
 <button type="submit" title="Buscar" class="action search" disabled="disabled">
<i class="icon-search"></i>
<span>Buscar</span>
</button>
</form>
</div>
</div></div> <div class="sections nav-sections">
<div class="section-items nav-sections-items" role="tablist">
<div class="section-item-title nav-sections-item-title active" data-role="collapsible" role="tab" data-collapsible="true" aria-controls="store.menu" aria-selected="false" aria-expanded="true" tabindex="0">
<a class="nav-sections-item-switch" data-toggle="switch" href="#store.menu">Menu</a>
</div>
<div class="section-item-content nav-sections-item-content" id="store.menu" data-role="content" role="tabpanel" aria-hidden="false">
<nav class="navigation" data-action="navigation">
<a id="bt-departaments" href="https://www.pichau.com.br/todos-os-departamentos/">
Acesse todos os <span>departamentos</span>
</a>
<ul id="ui-id-1" class="ui-menu ui-widget ui-widget-content ui-corner-all" role="menu" tabindex="0" style="display: none; height: 366px; padding-top: 0px; margin-top: 0px; padding-bottom: 0px; margin-bottom: 0px;">
<li class="level0 nav-1 category-item first has-active level-top parent ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/hardware" class="level-top ui-corner-all" aria-haspopup="true" id="ui-id-2" tabindex="-1" role="menuitem"><span class="ui-menu-icon ui-icon ui-icon-carat-1-e"></span><span>Hardware</span></a><ul class="level0 submenu ui-menu ui-widget ui-widget-content ui-corner-all" style="display: none;" role="menu" aria-hidden="true" aria-expanded="false"><li class="level1 nav-1-1 category-item first parent ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/hardware/processadores" aria-haspopup="true" id="ui-id-13" class="ui-corner-all" tabindex="-1" role="menuitem"><span class="ui-menu-icon ui-icon ui-icon-carat-1-e"></span><span>Processadores</span></a><ul class="level1 submenu ui-menu ui-widget ui-widget-content ui-corner-all expanded" style="display: none;" role="menu" aria-hidden="true" aria-expanded="false"><li class="level2 nav-1-1-1 category-item first ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/hardware/processadores/intel" id="ui-id-27" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Intel</span></a></li><li class="level2 nav-1-1-2 category-item last ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/hardware/processadores/amd" id="ui-id-28" class="ui-corner-all" tabindex="-1" role="menuitem"><span>AMD</span></a></li></ul></li><li class="level1 nav-1-2 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/hardware/placa-m-e" id="ui-id-14" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Placa Mãe</span></a></li><li class="level1 nav-1-3 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/hardware/memorias" id="ui-id-15" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Memórias</span></a></li><li class="level1 nav-1-4 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/hardware/placa-de-video" id="ui-id-16" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Placa de Vídeo</span></a></li><li class="level1 nav-1-5 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/hardware/hard-disk-e-ssd" id="ui-id-17" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Disco rígido interno (HD)</span></a></li><li class="level1 nav-1-6 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/hardware/ssd" id="ui-id-18" class="ui-corner-all" tabindex="-1" role="menuitem"><span>SSD</span></a></li><li class="level1 nav-1-7 category-item active ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/hardware/gabinete" id="ui-id-19" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Gabinete</span></a></li><li class="level1 nav-1-8 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/hardware/fonte" id="ui-id-20" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Fonte</span></a></li><li class="level1 nav-1-9 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/hardware/cabos-extensores-sleeved" id="ui-id-21" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Cabos Extensores Sleeved</span></a></li><li class="level1 nav-1-10 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/hardware/cooler-processador" id="ui-id-22" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Coolers e Watercoolers</span></a></li><li class="level1 nav-1-11 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/hardware/ventoinhas-e-casemod" id="ui-id-23" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Ventoinhas e Casemod</span></a></li><li class="level1 nav-1-12 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/hardware/pasta-termica-e-refrigerantes" id="ui-id-24" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Pasta Térmica e Refrigerantes</span></a></li><li class="level1 nav-1-13 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/hardware/placas-de-som" id="ui-id-25" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Placas de Som</span></a></li><li class="level1 nav-1-14 category-item last ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/hardware/drive-optico" id="ui-id-26" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Drive Óptico</span></a></li></ul></li><li class="level0 nav-2 category-item level-top parent ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/perifericos" class="level-top ui-corner-all" aria-haspopup="true" id="ui-id-3" tabindex="-1" role="menuitem"><span class="ui-menu-icon ui-icon ui-icon-carat-1-e"></span><span>Periféricos</span></a><ul class="level0 submenu ui-menu ui-widget ui-widget-content ui-corner-all" style="display: none;" role="menu" aria-hidden="true" aria-expanded="false"><li class="level1 nav-2-1 category-item first ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/perifericos/caixa-de-som" id="ui-id-29" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Caixa de Som</span></a></li><li class="level1 nav-2-2 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/perifericos/teclado" id="ui-id-30" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Teclado</span></a></li><li class="level1 nav-2-3 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/perifericos/fone-de-ouvido" id="ui-id-31" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Fone de Ouvido</span></a></li><li class="level1 nav-2-4 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/perifericos/kit-teclado-e-mouse" id="ui-id-32" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Kit Teclado e Mouse</span></a></li><li class="level1 nav-2-5 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/perifericos/mouse" id="ui-id-33" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Mouse</span></a></li><li class="level1 nav-2-6 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/perifericos/mousepad" id="ui-id-34" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Mousepad</span></a></li><li class="level1 nav-2-7 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/perifericos/cabos-e-adaptadores" id="ui-id-35" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Cabos e Adaptadores</span></a></li><li class="level1 nav-2-8 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/perifericos/impressoras" id="ui-id-36" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Impressoras</span></a></li><li class="level1 nav-2-9 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/perifericos/armazenamento" id="ui-id-37" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Armazenamento</span></a></li><li class="level1 nav-2-10 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/perifericos/energia" id="ui-id-38" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Energia</span></a></li><li class="level1 nav-2-11 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/perifericos/acessorios" id="ui-id-39" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Acessórios</span></a></li><li class="level1 nav-2-12 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/perifericos/webcam" id="ui-id-40" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Webcam</span></a></li><li class="level1 nav-2-13 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/perifericos/pendrives" id="ui-id-41" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Pendrives</span></a></li><li class="level1 nav-2-14 category-item last ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/perifericos/mesa-digitalizadora" id="ui-id-42" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Mesa Digitalizadora</span></a></li></ul></li><li class="level0 nav-3 category-item level-top parent ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/computadores" class="level-top ui-corner-all" aria-haspopup="true" id="ui-id-4" tabindex="-1" role="menuitem"><span class="ui-menu-icon ui-icon ui-icon-carat-1-e"></span><span>Computadores</span></a><ul class="level0 submenu ui-menu ui-widget ui-widget-content ui-corner-all" style="display: none;" role="menu" aria-hidden="true" aria-expanded="false"><li class="level1 nav-3-1 category-item first ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/computadores/pichau-gamer" id="ui-id-43" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Pichau Gamer</span></a></li><li class="level1 nav-3-2 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/computadores/rtb" id="ui-id-44" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Pichau Gamer RTB-Pronta Entrega</span></a></li><li class="level1 nav-3-3 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/computadores/pichau-moba" id="ui-id-45" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Pichau Moba</span></a></li><li class="level1 nav-3-4 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/computadores/pichau-workstation" id="ui-id-46" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Pichau Professional Workstation</span></a></li><li class="level1 nav-3-5 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/computadores/pichau-home" id="ui-id-47" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Pichau Home</span></a></li><li class="level1 nav-3-6 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/computadores/highflyer" id="ui-id-48" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Highflyer Intel</span></a></li><li class="level1 nav-3-7 category-item last ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/computadores/skycutter" id="ui-id-49" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Skycutter AMD</span></a></li></ul></li><li class="level0 nav-4 category-item level-top ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/monitores" class="level-top ui-corner-all" id="ui-id-5" tabindex="-1" role="menuitem"><span>Monitores</span></a></li><li class="level0 nav-5 category-item level-top parent ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/cadeiras" class="level-top ui-corner-all" aria-haspopup="true" id="ui-id-6" tabindex="-1" role="menuitem"><span class="ui-menu-icon ui-icon ui-icon-carat-1-e"></span><span>Cadeiras e Mesas Gamer</span></a><ul class="level0 submenu ui-menu ui-widget ui-widget-content ui-corner-all" style="display: none;" role="menu" aria-hidden="true" aria-expanded="false"><li class="level1 nav-5-1 category-item first ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/cadeiras/gamer" id="ui-id-50" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Cadeiras Gamer</span></a></li><li class="level1 nav-5-2 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/cadeiras/escritorio" id="ui-id-51" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Escritório</span></a></li><li class="level1 nav-5-3 category-item last ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/cadeiras/mesas-gamer" id="ui-id-52" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Mesas Gamer</span></a></li></ul></li><li class="level0 nav-6 category-item level-top parent ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/eletronicos" class="level-top ui-corner-all" aria-haspopup="true" id="ui-id-7" tabindex="-1" role="menuitem"><span class="ui-menu-icon ui-icon ui-icon-carat-1-e"></span><span>Eletronicos</span></a><ul class="level0 submenu ui-menu ui-widget ui-widget-content ui-corner-all" style="display: none;" role="menu" aria-hidden="true" aria-expanded="false"><li class="level1 nav-6-1 category-item first ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/eletronicos/consoles-e-acessorios" id="ui-id-53" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Consoles e Acessórios</span></a></li><li class="level1 nav-6-2 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/eletronicos/acessorios-mobile" id="ui-id-54" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Acessórios Mobile</span></a></li><li class="level1 nav-6-3 category-item last ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/eletronicos/smartwatch" id="ui-id-55" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Smartwatch</span></a></li></ul></li><li class="level0 nav-7 category-item level-top parent ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/notebooks" class="level-top ui-corner-all" aria-haspopup="true" id="ui-id-8" tabindex="-1" role="menuitem"><span class="ui-menu-icon ui-icon ui-icon-carat-1-e"></span><span>Notebooks e Portáteis</span></a><ul class="level0 submenu ui-menu ui-widget ui-widget-content ui-corner-all" style="display: none;" role="menu" aria-hidden="true" aria-expanded="false"><li class="level1 nav-7-1 category-item first ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/notebooks/refrigerac-o-e-bases" id="ui-id-56" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Refrigeração e Bases</span></a></li><li class="level1 nav-7-2 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/notebooks/carregadores-e-fontes" id="ui-id-57" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Carregadores e Fontes</span></a></li><li class="level1 nav-7-3 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/notebooks/notebook-gamer" id="ui-id-58" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Notebook Gamer</span></a></li><li class="level1 nav-7-4 category-item last ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/notebooks/notebooks" id="ui-id-59" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Notebooks</span></a></li></ul></li><li class="level0 nav-8 category-item level-top ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/redes-wireless" class="level-top ui-corner-all" id="ui-id-9" tabindex="-1" role="menuitem"><span>Redes &amp; Wireless</span></a></li><li class="level0 nav-9 category-item level-top parent ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/mundo-geek" class="level-top ui-corner-all" aria-haspopup="true" id="ui-id-10" tabindex="-1" role="menuitem"><span class="ui-menu-icon ui-icon ui-icon-carat-1-e"></span><span>Mundo Geek</span></a><ul class="level0 submenu ui-menu ui-widget ui-widget-content ui-corner-all" style="display: none;" role="menu" aria-hidden="true" aria-expanded="false"><li class="level1 nav-9-1 category-item first ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/mundo-geek/camisetas" id="ui-id-60" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Camisetas</span></a></li><li class="level1 nav-9-2 category-item ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/mundo-geek/action-figures" id="ui-id-61" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Action Figures</span></a></li><li class="level1 nav-9-3 category-item last ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/mundo-geek/drone" id="ui-id-62" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Drone</span></a></li></ul></li><li class="level0 nav-10 category-item last level-top ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/kit-upgrade" class="level-top ui-corner-all" id="ui-id-11" tabindex="-1" role="menuitem"><span>Kit Upgrade</span></a></li> <li class="img-pc ui-menu-item" role="presentation"><a href="https://www.pichau.com.br/monte-seu-computador/processador/" id="ui-id-12" class="ui-corner-all" tabindex="-1" role="menuitem"><img src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/images/monte-pc.png" alt="Monte seu PC - Pichau" border="0"></a></li>
</ul>
</nav>
</div>
<div class="section-item-title nav-sections-item-title" data-role="collapsible" role="tab" data-collapsible="true" aria-controls="store.links" aria-selected="false" aria-expanded="false" tabindex="0">
<a class="nav-sections-item-switch" data-toggle="switch" href="#store.links">Minha Conta</a>
</div>
<div class="section-item-content nav-sections-item-content" id="store.links" data-role="content" role="tabpanel" aria-hidden="true" style="display: none;"></div>
</div>
</div>
</div><style>
.uk-slidenav-position {
    position: relative;
}
.aw-rbslider-container a.link {
    display: block;
    z-index: -1;
    height: 360px;
}
</style>
<div class="awating" style="width: 1100px; height: 360px; display: block; margin: 0 auto; position: relative; z-index:-1;"><div class="aw-rbslider-container uk-slidenav-position banner_daily_deal_menu_bottom" style="">
<a href="https://www.pichau.com.br/maes" class="link" target="blank"></a>
</div></div>
<script type="text/javascript">
                    require(['jquery', 'jquery/ui'], function($){
                        $('.page-wrapper > .aw-rbslider-container').bind('DOMNodeInserted', function () {
                            $('.page-wrapper > .aw-rbslider-container').appendTo(  $('.awating') )
                        })
                    });
                </script>
</header>

<script>
            require([
                'jquery'
            ], function($){
                var imagePath = "https://cdn.pichau.com.br/aw_rbslider/slides/bg-diadasmae2020.jpg";
                $('body').css({'background-image': 'url('+imagePath+')'});
                $('.page-wrapper > .aw-rbslider-container').appendTo($('.awating'));
            });
        </script>
<div class="breadcrumbs">
<ul class="items">
<li class="item home">
<a href="https://www.pichau.com.br/" title="Home">Home</a>
</li>
<li class="item dailydeal">
<strong>Dailydeal</strong>
</li>
<li class="back-link">
<a href="javascript:;" onclick="history.back()" class="action back">Página anterior</a>
</li>
</ul>
</div>
<main id="maincontent" class="page-main"><a id="contentarea" tabindex="-1"></a>
<div class="page messages" style="display: none;"><div data-placeholder="messages"></div>
<div data-bind="scope: 'messages'">
<!-- ko if: cookieMessages && cookieMessages.length > 0 --><!-- /ko -->
<!-- ko if: messages().messages && messages().messages.length > 0 --><!-- /ko -->
</div>

</div><div class="columns"><div class="column main">
<script>
require([
    "jquery",
    "jquery/ui"
], function($){

//<![CDATA[
    $.extend(true, $, {
        calendarConfig: {
            dayNames: ["domingo","segunda-feira","ter\u00e7a-feira","quarta-feira","quinta-feira","sexta-feira","s\u00e1bado"],
            dayNamesMin: ["dom","seg","ter","qua","qui","sex","s\u00e1b"],
            monthNames: ["janeiro","fevereiro","mar\u00e7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],
            monthNamesShort: ["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],
            infoTitle: "Sobre o calendário",
            firstDay: 0,
            closeText: "Fechar",
            currentText: "Hoje",
            prevText: "Anterior",
            nextText: "Próximo",
            weekHeader: "WK",
            timeText: " Tempo",
            hourText: "Hora",
            minuteText: "Minuto",
            dateFormat: $.datepicker.RFC_2822,
            showOn: "button",
            showAnim: "",
            changeMonth: true,
            changeYear: true,
            buttonImageOnly: null,
            buttonImage: null,
            showButtonPanel: true,
            showWeek: true,
            timeFormat: '',
            showTime: false,
            showHour: false,
            showMinute: false
        }
    });

    enUS = {"m":{"wide":["January","February","March","April","May","June","July","August","September","October","November","December"],"abbr":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}}; // en_US locale reference
//]]>

});
</script>
<input name="form_key" type="hidden" value="bQtJtJ1iUdwGRd8D"><div id="authenticationPopup" data-bind="scope:'authenticationPopup'" style="display: none;">
<script>
        window.authenticationPopup = {"autocomplete":"off","customerRegisterUrl":"https:\/\/www.pichau.com.br\/customer\/account\/create\/","customerForgotPasswordUrl":"https:\/\/www.pichau.com.br\/customer\/account\/forgotpassword\/","baseUrl":"https:\/\/www.pichau.com.br\/"};
    </script>
<!-- ko template: getTemplate() -->

<!-- /ko -->

</div>





<style type="text/css">
        .g-recaptcha {
            margin-top: 15px;
            margin-bottom: 15px;
        }
    </style>

<div class="grid-deals">
<div class="all-deals">
<div id="today-deals">
<h3 class="deal-label">Ofertas ativas</h3>
<div class="list-deals">

<div class="toolbar">
<form id="daily-filter" action="https://www.pichau.com.br/dailydeal/" method="get">
<label for="catid">
<img src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/images/categories_ico.png" alt="">
Categorias </label>
<select name="catid" id="catid" class="chosen-select" style="display: none;">
<option value="">Todas</option>
<option value="2">Home</option>
<option value="4">Hardware</option>
<option value="5">Computadores</option>
 <option value="7">Periféricos</option>
<option value="14">Processadores</option>
<option value="17">Memórias</option>
<option value="18">Fonte</option>
<option value="19">Placa de Vídeo</option>
<option value="22">Gabinete</option>
<option value="25">SSD</option>
<option value="26">Coolers e Watercoolers</option>
<option value="28">Teclado</option>
<option value="29">Fone de Ouvido</option>
<option value="30">Kit Teclado e Mouse</option>
<option value="32">Mouse</option>
<option value="34">Pichau Gamer</option>
<option value="37">Redes &amp; Wireless</option>
<option value="42">Pichau Professional Workstation</option>
<option value="47">Acessórios</option>
<option value="52">Pichau Home</option>
<option value="54">Ventoinhas e Casemod</option>
<option value="58">Cadeiras e Mesas Gamer</option>
<option value="59">Cadeiras Gamer</option>
<option value="66">Monitores</option>
<option value="155">Mesa Digitalizadora</option>
<option value="246">AMD</option>
</select><div class="chosen-container chosen-container-single chosen-container-single-nosearch" title="" id="catid_chosen" style="width: 257px;"><a class="chosen-single">
  <span>Todas</span>
  <div><b></b></div>
</a>
<div class="chosen-drop">
  <div class="chosen-search">
    <input class="chosen-search-input" type="text" autocomplete="off" readonly="">
  </div>
  <ul class="chosen-results"></ul>
</div></div>
</form>
</div>
<span class="title-product-list">produtos</span>
<span class="timeleft-today" data-totime="1589155140"><ul class="dailydeal-countdown"><li><span class="timeleft-value">01</span><span class="timeleft-label"> dia</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589155140"><ul class="dailydeal-countdown"><li><span class="timeleft-value">01</span><span class="timeleft-label"> dia</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589155140"><ul class="dailydeal-countdown"><li><span class="timeleft-value">01</span><span class="timeleft-label"> dia</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589155140"><ul class="dailydeal-countdown"><li><span class="timeleft-value">01</span><span class="timeleft-label"> dia</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589155140"><ul class="dailydeal-countdown"><li><span class="timeleft-value">01</span><span class="timeleft-label"> dia</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589155140"><ul class="dailydeal-countdown"><li><span class="timeleft-value">01</span><span class="timeleft-label"> dia</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589155140"><ul class="dailydeal-countdown"><li><span class="timeleft-value">01</span><span class="timeleft-label"> dia</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589155140"><ul class="dailydeal-countdown"><li><span class="timeleft-value">01</span><span class="timeleft-label"> dia</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589155140"><ul class="dailydeal-countdown"><li><span class="timeleft-value">01</span><span class="timeleft-label"> dia</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589155140"><ul class="dailydeal-countdown"><li><span class="timeleft-value">01</span><span class="timeleft-label"> dia</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589155140"><ul class="dailydeal-countdown"><li><span class="timeleft-value">01</span><span class="timeleft-label"> dia</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589155140"><ul class="dailydeal-countdown"><li><span class="timeleft-value">01</span><span class="timeleft-label"> dia</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589155140"><ul class="dailydeal-countdown"><li><span class="timeleft-value">01</span><span class="timeleft-label"> dia</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589155140"><ul class="dailydeal-countdown"><li><span class="timeleft-value">01</span><span class="timeleft-label"> dia</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589155140"><ul class="dailydeal-countdown"><li><span class="timeleft-value">01</span><span class="timeleft-label"> dia</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1590710340"><ul class="dailydeal-countdown"><li><span class="timeleft-value">19</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1590710340"><ul class="dailydeal-countdown"><li><span class="timeleft-value">19</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1590710340"><ul class="dailydeal-countdown"><li><span class="timeleft-value">19</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1590710340"><ul class="dailydeal-countdown"><li><span class="timeleft-value">19</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1590710340"><ul class="dailydeal-countdown"><li><span class="timeleft-value">19</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1590710340"><ul class="dailydeal-countdown"><li><span class="timeleft-value">19</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589155140"><ul class="dailydeal-countdown"><li><span class="timeleft-value">01</span><span class="timeleft-label"> dia</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589155140"><ul class="dailydeal-countdown"><li><span class="timeleft-value">01</span><span class="timeleft-label"> dia</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1590710340"><ul class="dailydeal-countdown"><li><span class="timeleft-value">19</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589155140"><ul class="dailydeal-countdown"><li><span class="timeleft-value">01</span><span class="timeleft-label"> dia</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1590710340"><ul class="dailydeal-countdown"><li><span class="timeleft-value">19</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1590710340"><ul class="dailydeal-countdown"><li><span class="timeleft-value">19</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1590710340"><ul class="dailydeal-countdown"><li><span class="timeleft-value">19</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1590710340"><ul class="dailydeal-countdown"><li><span class="timeleft-value">19</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589155140"><ul class="dailydeal-countdown"><li><span class="timeleft-value">01</span><span class="timeleft-label"> dia</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589155140"><ul class="dailydeal-countdown"><li><span class="timeleft-value">01</span><span class="timeleft-label"> dia</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589155140"><ul class="dailydeal-countdown"><li><span class="timeleft-value">01</span><span class="timeleft-label"> dia</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589155140"><ul class="dailydeal-countdown"><li><span class="timeleft-value">01</span><span class="timeleft-label"> dia</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589155140"><ul class="dailydeal-countdown"><li><span class="timeleft-value">01</span><span class="timeleft-label"> dia</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589155140"><ul class="dailydeal-countdown"><li><span class="timeleft-value">01</span><span class="timeleft-label"> dia</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589155140"><ul class="dailydeal-countdown"><li><span class="timeleft-value">01</span><span class="timeleft-label"> dia</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589155140"><ul class="dailydeal-countdown"><li><span class="timeleft-value">01</span><span class="timeleft-label"> dia</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589155140"><ul class="dailydeal-countdown"><li><span class="timeleft-value">01</span><span class="timeleft-label"> dia</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589155140"><ul class="dailydeal-countdown"><li><span class="timeleft-value">01</span><span class="timeleft-label"> dia</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589155140"><ul class="dailydeal-countdown"><li><span class="timeleft-value">01</span><span class="timeleft-label"> dia</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589155140"><ul class="dailydeal-countdown"><li><span class="timeleft-value">01</span><span class="timeleft-label"> dia</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1590796740"><ul class="dailydeal-countdown"><li><span class="timeleft-value">20</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589155140"><ul class="dailydeal-countdown"><li><span class="timeleft-value">01</span><span class="timeleft-label"> dia</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589155140"><ul class="dailydeal-countdown"><li><span class="timeleft-value">01</span><span class="timeleft-label"> dia</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589759940"><ul class="dailydeal-countdown"><li><span class="timeleft-value">08</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589155140"><ul class="dailydeal-countdown"><li><span class="timeleft-value">01</span><span class="timeleft-label"> dia</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589759940"><ul class="dailydeal-countdown"><li><span class="timeleft-value">08</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589759940"><ul class="dailydeal-countdown"><li><span class="timeleft-value">08</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1590796740"><ul class="dailydeal-countdown"><li><span class="timeleft-value">20</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589759940"><ul class="dailydeal-countdown"><li><span class="timeleft-value">08</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589759940"><ul class="dailydeal-countdown"><li><span class="timeleft-value">08</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589759940"><ul class="dailydeal-countdown"><li><span class="timeleft-value">08</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589759940"><ul class="dailydeal-countdown"><li><span class="timeleft-value">08</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589759940"><ul class="dailydeal-countdown"><li><span class="timeleft-value">08</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589759940"><ul class="dailydeal-countdown"><li><span class="timeleft-value">08</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589759940"><ul class="dailydeal-countdown"><li><span class="timeleft-value">08</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589759940"><ul class="dailydeal-countdown"><li><span class="timeleft-value">08</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589759940"><ul class="dailydeal-countdown"><li><span class="timeleft-value">08</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">08</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1590796740"><ul class="dailydeal-countdown"><li><span class="timeleft-value">20</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">08</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589759940"><ul class="dailydeal-countdown"><li><span class="timeleft-value">08</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">08</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589759940"><ul class="dailydeal-countdown"><li><span class="timeleft-value">08</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">08</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589759940"><ul class="dailydeal-countdown"><li><span class="timeleft-value">08</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">08</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589759940"><ul class="dailydeal-countdown"><li><span class="timeleft-value">08</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">08</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589759940"><ul class="dailydeal-countdown"><li><span class="timeleft-value">08</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">08</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589759940"><ul class="dailydeal-countdown"><li><span class="timeleft-value">08</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">08</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589759940"><ul class="dailydeal-countdown"><li><span class="timeleft-value">08</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">08</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589759940"><ul class="dailydeal-countdown"><li><span class="timeleft-value">08</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">08</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589759940"><ul class="dailydeal-countdown"><li><span class="timeleft-value">08</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">08</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589759940"><ul class="dailydeal-countdown"><li><span class="timeleft-value">08</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">08</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589759940"><ul class="dailydeal-countdown"><li><span class="timeleft-value">08</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">08</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1590796740"><ul class="dailydeal-countdown"><li><span class="timeleft-value">20</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">08</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589759940"><ul class="dailydeal-countdown"><li><span class="timeleft-value">08</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">08</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589759940"><ul class="dailydeal-countdown"><li><span class="timeleft-value">08</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">08</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589759940"><ul class="dailydeal-countdown"><li><span class="timeleft-value">08</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">08</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589759940"><ul class="dailydeal-countdown"><li><span class="timeleft-value">08</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">08</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589759940"><ul class="dailydeal-countdown"><li><span class="timeleft-value">08</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">08</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589759940"><ul class="dailydeal-countdown"><li><span class="timeleft-value">08</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">08</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589759940"><ul class="dailydeal-countdown"><li><span class="timeleft-value">08</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">08</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589759940"><ul class="dailydeal-countdown"><li><span class="timeleft-value">08</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">08</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589759940"><ul class="dailydeal-countdown"><li><span class="timeleft-value">08</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">08</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589759940"><ul class="dailydeal-countdown"><li><span class="timeleft-value">08</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">08</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589759940"><ul class="dailydeal-countdown"><li><span class="timeleft-value">08</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">08</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1590796740"><ul class="dailydeal-countdown"><li><span class="timeleft-value">20</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">08</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1590796740"><ul class="dailydeal-countdown"><li><span class="timeleft-value">20</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">08</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589759940"><ul class="dailydeal-countdown"><li><span class="timeleft-value">08</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">08</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1590796740"><ul class="dailydeal-countdown"><li><span class="timeleft-value">20</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">08</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589759940"><ul class="dailydeal-countdown"><li><span class="timeleft-value">08</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1590796740"><ul class="dailydeal-countdown"><li><span class="timeleft-value">20</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589759940"><ul class="dailydeal-countdown"><li><span class="timeleft-value">08</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1590796740"><ul class="dailydeal-countdown"><li><span class="timeleft-value">20</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1590796740"><ul class="dailydeal-countdown"><li><span class="timeleft-value">20</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1590796740"><ul class="dailydeal-countdown"><li><span class="timeleft-value">20</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1590796740"><ul class="dailydeal-countdown"><li><span class="timeleft-value">20</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589759940"><ul class="dailydeal-countdown"><li><span class="timeleft-value">08</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1590796740"><ul class="dailydeal-countdown"><li><span class="timeleft-value">20</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1590796740"><ul class="dailydeal-countdown"><li><span class="timeleft-value">20</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589759940"><ul class="dailydeal-countdown"><li><span class="timeleft-value">08</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1590796740"><ul class="dailydeal-countdown"><li><span class="timeleft-value">20</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1590796740"><ul class="dailydeal-countdown"><li><span class="timeleft-value">20</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589759940"><ul class="dailydeal-countdown"><li><span class="timeleft-value">08</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1590796740"><ul class="dailydeal-countdown"><li><span class="timeleft-value">20</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1590796740"><ul class="dailydeal-countdown"><li><span class="timeleft-value">20</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589759940"><ul class="dailydeal-countdown"><li><span class="timeleft-value">08</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1590796740"><ul class="dailydeal-countdown"><li><span class="timeleft-value">20</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589155140"><ul class="dailydeal-countdown"><li><span class="timeleft-value">01</span><span class="timeleft-label"> dia</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1590796740"><ul class="dailydeal-countdown"><li><span class="timeleft-value">20</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1590796740"><ul class="dailydeal-countdown"><li><span class="timeleft-value">20</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589414340"><ul class="dailydeal-countdown"><li><span class="timeleft-value">04</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1590796740"><ul class="dailydeal-countdown"><li><span class="timeleft-value">20</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589414340"><ul class="dailydeal-countdown"><li><span class="timeleft-value">04</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589155140"><ul class="dailydeal-countdown"><li><span class="timeleft-value">01</span><span class="timeleft-label"> dia</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589155140"><ul class="dailydeal-countdown"><li><span class="timeleft-value">01</span><span class="timeleft-label"> dia</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589414340"><ul class="dailydeal-countdown"><li><span class="timeleft-value">04</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589414340"><ul class="dailydeal-countdown"><li><span class="timeleft-value">04</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589759940"><ul class="dailydeal-countdown"><li><span class="timeleft-value">08</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589414340"><ul class="dailydeal-countdown"><li><span class="timeleft-value">04</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589759940"><ul class="dailydeal-countdown"><li><span class="timeleft-value">08</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589414340"><ul class="dailydeal-countdown"><li><span class="timeleft-value">04</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589414340"><ul class="dailydeal-countdown"><li><span class="timeleft-value">04</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589155140"><ul class="dailydeal-countdown"><li><span class="timeleft-value">01</span><span class="timeleft-label"> dia</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><span class="timeleft-today" data-totime="1589414340"><ul class="dailydeal-countdown"><li><span class="timeleft-value">04</span><span class="timeleft-label"> dias</span></li><li><span class="timeleft-value">17</span><span class="timeleft-label">horas</span></li><li><span class="timeleft-value">15</span><span class="timeleft-label">min</span></li><li><span class="timeleft-value">07</span><span class="timeleft-label">seg</span></li></ul></span><table class="deal-grid">
<tbody><tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/computadores/computador-pichau-gamer-i5-9400f-geforce-gtx-1650-super-4gb-8gb-ddr4-hd-1tb-500w-pouter-rgb" title="Computador Pichau Gamer, i5-9400f, GEFORCE GTX 1650 SUPER 4GB, 8GB DDR4, HD 1TB, 500W, POUTER RGB" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/p/u/puteriialrgb001.jpg" alt="Computador Pichau Gamer, i5-9400f, GEFORCE GTX 1650 SUPER 4GB, 8GB DDR4, HD 1TB, 500W, POUTER RGB">
<div class="save-price">
<div class="price">5%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/computadores/computador-pichau-gamer-i5-9400f-geforce-gtx-1650-super-4gb-8gb-ddr4-hd-1tb-500w-pouter-rgb" title="Computador Pichau Gamer, i5-9400f, GEFORCE GTX 1650 SUPER 4GB, 8GB DDR4, HD 1TB, 500W, POUTER RGB">Computador Pichau Gamer, i5-9400f, GEFORCE GTX 1650 SUPER 4GB, 8GB DDR4, HD 1TB, 500W, POUTER RGB</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$4.146,54</strong>
<span class="valor">10x de R$414,65</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$3.648,96</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
 </li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 47 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/computadores/computador-pichau-gamer-i5-9400f-geforce-gtx-1650-super-4gb-8gb-ddr4-hd-1tb-500w-pouter-rgb">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/computadores/computador-pichau-gamer-i5-9400f-geforce-gtx-1650-super-4gb-8gb-ddr4-hd-1tb-500w-pouter-rgb" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/computadores/computador-pichau-workstation-amd-ryzen-5-3600-quadro-p1000-8gb-ram-hd-2tb-ssd-512gb-500w-dragoon" title="Computador Pichau WorkStation, AMD Ryzen 5 3600, Quadro P1000, 8GB RAM, HD 2TB, SSD 480GB  , 500W, Dragoon" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/1/7/17280-01.jpg" alt="Computador Pichau WorkStation, AMD Ryzen 5 3600, Quadro P1000, 8GB RAM, HD 2TB, SSD 480GB  , 500W, Dragoon">
<div class="save-price">
<div class="price">15%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/computadores/computador-pichau-workstation-amd-ryzen-5-3600-quadro-p1000-8gb-ram-hd-2tb-ssd-512gb-500w-dragoon" title="Computador Pichau WorkStation, AMD Ryzen 5 3600, Quadro P1000, 8GB RAM, HD 2TB, SSD 480GB  , 500W, Dragoon">Computador Pichau WorkStation, AMD Ryzen 5 3600, Quadro P1000, 8GB RAM, HD 2TB, SSD 480GB , 500W, Dragoon</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$5.226,07</strong>
<span class="valor">10x de R$522,61</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$4.598,94</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 4 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/computadores/computador-pichau-workstation-amd-ryzen-5-3600-quadro-p1000-8gb-ram-hd-2tb-ssd-512gb-500w-dragoon">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/computadores/computador-pichau-workstation-amd-ryzen-5-3600-quadro-p1000-8gb-ram-hd-2tb-ssd-512gb-500w-dragoon" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/computadores/computador-pichau-gamer-ryzen-5-3500x-rx-5700-xt-8gb-8gb-ddr4-hd-1tb-600w-pouter-2-rgb" title="Computador Pichau Gamer, Ryzen 5 3500X, RX 5700 XT 8GB, 8GB DDR4, HD 1Tb, 600w, Pouter 2 RGB" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/p/o/pouter2rgb-amd-rx-01_3.jpg" alt="Computador Pichau Gamer, Ryzen 5 3500X, RX 5700 XT 8GB, 8GB DDR4, HD 1Tb, 600w, Pouter 2 RGB">
<div class="save-price">
<div class="price">13%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/computadores/computador-pichau-gamer-ryzen-5-3500x-rx-5700-xt-8gb-8gb-ddr4-hd-1tb-600w-pouter-2-rgb" title="Computador Pichau Gamer, Ryzen 5 3500X, RX 5700 XT 8GB, 8GB DDR4, HD 1Tb, 600w, Pouter 2 RGB">Computador Pichau Gamer, Ryzen 5 3500X, RX 5700 XT 8GB, 8GB DDR4, HD 1Tb, 600w, Pouter 2 RGB</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$5.103,56</strong>
<span class="valor">10x de R$510,36</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$4.491,13</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 12 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/computadores/computador-pichau-gamer-ryzen-5-3500x-rx-5700-xt-8gb-8gb-ddr4-hd-1tb-600w-pouter-2-rgb">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/computadores/computador-pichau-gamer-ryzen-5-3500x-rx-5700-xt-8gb-8gb-ddr4-hd-1tb-600w-pouter-2-rgb" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/intel/computador-pichau-workstation-intel-i5-9400f-quadro-p620-8gb-ram-hd-2tb-ssd-120-500w-dragoon-led" title="Computador Pichau WorkStation, Intel i5-9400F, Quadro P620, 8GB RAM, HD 2TB + SSD 120, 500W, Dragoon led" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/w/o/workstation-intel-p1000-01.jpg" alt="Computador Pichau WorkStation, Intel i5-9400F, Quadro P620, 8GB RAM, HD 2TB + SSD 120, 500W, Dragoon led">
<div class="save-price">
<div class="price">15%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/intel/computador-pichau-workstation-intel-i5-9400f-quadro-p620-8gb-ram-hd-2tb-ssd-120-500w-dragoon-led" title="Computador Pichau WorkStation, Intel i5-9400F, Quadro P620, 8GB RAM, HD 2TB + SSD 120, 500W, Dragoon led">Computador Pichau WorkStation, Intel i5-9400F, Quadro P620, 8GB RAM, HD 2TB + SSD 120, 500W, Dragoon led</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$3.977,21</strong>
<span class="valor">10x de R$397,72</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$3.499,94</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 4 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/intel/computador-pichau-workstation-intel-i5-9400f-quadro-p620-8gb-ram-hd-2tb-ssd-120-500w-dragoon-led">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/intel/computador-pichau-workstation-intel-i5-9400f-quadro-p620-8gb-ram-hd-2tb-ssd-120-500w-dragoon-led" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/hardware/processador-amd-ryzen-5-3500x-hexa-core-3-6ghz-4-1ghz-turbo-35mb-cache-am4-100-100000158box" title="Processador AMD Ryzen 5 3500X Hexa-Core 3.6GHz (4.1GHz Turbo) 35MB Cache AM4, 100-100000158BOX" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/1/0/100-100000158box.jpg" alt="Processador AMD Ryzen 5 3500X Hexa-Core 3.6GHz (4.1GHz Turbo) 35MB Cache AM4, 100-100000158BOX">
<div class="save-price">
<div class="price">10%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/processador-amd-ryzen-5-3500x-hexa-core-3-6ghz-4-1ghz-turbo-35mb-cache-am4-100-100000158box" title="Processador AMD Ryzen 5 3500X Hexa-Core 3.6GHz (4.1GHz Turbo) 35MB Cache AM4, 100-100000158BOX">Processador AMD Ryzen 5 3500X Hexa-Core 3.6GHz (4.1GHz Turbo) 35MB Cache AM4, 100-100000158BOX</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$1.124,88</strong>
<span class="valor">10x de R$112,49</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$989,89</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 340 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/processador-amd-ryzen-5-3500x-hexa-core-3-6ghz-4-1ghz-turbo-35mb-cache-am4-100-100000158box">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/processador-amd-ryzen-5-3500x-hexa-core-3-6ghz-4-1ghz-turbo-35mb-cache-am4-100-100000158box" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/hardware/placa-de-video-asrock-radeon-rx-5700-xt-8gb-challenger-d-oc-256-bit-90-ga18zz-00uanz" title="Placa de Video ASRock Radeon RX 5700 XT 8GB Challenger D OC 256-BIT, 90-GA18ZZ-00UANZ" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/9/0/90-ga18zz-00uanz.jpg" alt="Placa de Video ASRock Radeon RX 5700 XT 8GB Challenger D OC 256-BIT, 90-GA18ZZ-00UANZ">
 <div class="save-price">
<div class="price">12%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/placa-de-video-asrock-radeon-rx-5700-xt-8gb-challenger-d-oc-256-bit-90-ga18zz-00uanz" title="Placa de Video ASRock Radeon RX 5700 XT 8GB Challenger D OC 256-BIT, 90-GA18ZZ-00UANZ">Placa de Video ASRock Radeon RX 5700 XT 8GB Challenger D OC 256-BIT, 90-GA18ZZ-00UANZ</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$2.499,99</strong>
<span class="valor">10x de R$250,00</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$2.199,99</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 36 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/placa-de-video-asrock-radeon-rx-5700-xt-8gb-challenger-d-oc-256-bit-90-ga18zz-00uanz">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/placa-de-video-asrock-radeon-rx-5700-xt-8gb-challenger-d-oc-256-bit-90-ga18zz-00uanz" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/computadores/computador-pichau-gamer-i3-9100f-geforce-gtx-1660-super-6gb-8gb-ddr4-hd-1tb-500w-rostock" title="Computador Pichau Gamer, i3-9100F, GEFORCE GTX 1650 SUPER 4GB, 8GB DDR4, HD 1TB, 500W, ROSTOCK" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/r/o/rotocks01.jpg" alt="Computador Pichau Gamer, i3-9100F, GEFORCE GTX 1650 SUPER 4GB, 8GB DDR4, HD 1TB, 500W, ROSTOCK">
<div class="save-price">
<div class="price">4%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/computadores/computador-pichau-gamer-i3-9100f-geforce-gtx-1660-super-6gb-8gb-ddr4-hd-1tb-500w-rostock" title="Computador Pichau Gamer, i3-9100F, GEFORCE GTX 1650 SUPER 4GB, 8GB DDR4, HD 1TB, 500W, ROSTOCK">Computador Pichau Gamer, i3-9100F, GEFORCE GTX 1650 SUPER 4GB, 8GB DDR4, HD 1TB, 500W, ROSTOCK</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$3.521,55</strong>
<span class="valor">10x de R$352,16</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$3.098,96</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 139 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/computadores/computador-pichau-gamer-i3-9100f-geforce-gtx-1660-super-6gb-8gb-ddr4-hd-1tb-500w-rostock">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/computadores/computador-pichau-gamer-i3-9100f-geforce-gtx-1660-super-6gb-8gb-ddr4-hd-1tb-500w-rostock" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/corsair/computador-pichau-workstation-amd-ryzen-7-3700x-quadro-p2000-16gb-ram-1tb-600w-dragoon" title="Computador Pichau WorkStation, AMD Ryzen 7 3700X, Quadro P2000, 16GB RAM, HD 2TB + SSD 120, 600W, Dragoon" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/1/1/11151-sfb.png" alt="Computador Pichau WorkStation, AMD Ryzen 7 3700X, Quadro P2000, 16GB RAM, HD 2TB + SSD 120, 600W, Dragoon">
<div class="save-price">
<div class="price">15%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/corsair/computador-pichau-workstation-amd-ryzen-7-3700x-quadro-p2000-16gb-ram-1tb-600w-dragoon" title="Computador Pichau WorkStation, AMD Ryzen 7 3700X, Quadro P2000, 16GB RAM, HD 2TB + SSD 120, 600W, Dragoon">Computador Pichau WorkStation, AMD Ryzen 7 3700X, Quadro P2000, 16GB RAM, HD 2TB + SSD 120, 600W, Dragoon</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$7.044,23</strong>
<span class="valor">10x de R$704,42</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$6.198,92</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 10 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/corsair/computador-pichau-workstation-amd-ryzen-7-3700x-quadro-p2000-16gb-ram-1tb-600w-dragoon">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/corsair/computador-pichau-workstation-amd-ryzen-7-3700x-quadro-p2000-16gb-ram-1tb-600w-dragoon" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/corsair/computador-pichau-workstation-amd-ryzen-7-3800x-quadro-p2000-16gb-ram-1tb-600w-dragoon" title="Computador Pichau WorkStation, AMD Ryzen 7 3800X, Quadro P2000, 16GB RAM, HD 2TB + SSD 120, 600W, Dragoon" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/1/1/11759-ad.png" alt="Computador Pichau WorkStation, AMD Ryzen 7 3800X, Quadro P2000, 16GB RAM, HD 2TB + SSD 120, 600W, Dragoon">
<div class="save-price">
<div class="price">14%</div>
</div>
</a>
 </td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/corsair/computador-pichau-workstation-amd-ryzen-7-3800x-quadro-p2000-16gb-ram-1tb-600w-dragoon" title="Computador Pichau WorkStation, AMD Ryzen 7 3800X, Quadro P2000, 16GB RAM, HD 2TB + SSD 120, 600W, Dragoon">Computador Pichau WorkStation, AMD Ryzen 7 3800X, Quadro P2000, 16GB RAM, HD 2TB + SSD 120, 600W, Dragoon</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$7.513,55</strong>
<span class="valor">10x de R$751,36</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$6.611,92</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 3 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/corsair/computador-pichau-workstation-amd-ryzen-7-3800x-quadro-p2000-16gb-ram-1tb-600w-dragoon">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/corsair/computador-pichau-workstation-amd-ryzen-7-3800x-quadro-p2000-16gb-ram-1tb-600w-dragoon" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/hardware/placa-de-video-gigabyte-radeon-rx-5700-xt-8gb-gaming-oc-256-bit-gv-r57xtgaming-oc-8gd" title="Placa de Video Gigabyte Radeon RX 5700 XT 8GB Gaming OC 256-bit, GV-R57XTGAMING OC-8GD" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/g/v/gv-r57xtgaming-oc-8gd5.jpg" alt="Placa de Video Gigabyte Radeon RX 5700 XT 8GB Gaming OC 256-bit, GV-R57XTGAMING OC-8GD">
<div class="save-price">
<div class="price">6%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/placa-de-video-gigabyte-radeon-rx-5700-xt-8gb-gaming-oc-256-bit-gv-r57xtgaming-oc-8gd" title="Placa de Video Gigabyte Radeon RX 5700 XT 8GB Gaming OC 256-bit, GV-R57XTGAMING OC-8GD">Placa de Video Gigabyte Radeon RX 5700 XT 8GB Gaming OC 256-bit, GV-R57XTGAMING OC-8GD</a>
</h4>
</td>
</tr>
 <tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$2.499,99</strong>
<span class="valor">10x de R$250,00</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$2.199,99</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 151 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/placa-de-video-gigabyte-radeon-rx-5700-xt-8gb-gaming-oc-256-bit-gv-r57xtgaming-oc-8gd">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/placa-de-video-gigabyte-radeon-rx-5700-xt-8gb-gaming-oc-256-bit-gv-r57xtgaming-oc-8gd" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/computadores/computador-pichau-gamer-ryzen-5-3500x-geforce-gtx-1650-super-4gb-8gb-ddr4-hd-1tb-500w-rostock" title="Computador Pichau Gamer, Ryzen 5 3500X, GEFORCE GTX 1650 SUPER 4GB, 8GB DDR4, HD 1TB, 500W, Rostock" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/g/a/gabinrostocka101.jpg" alt="Computador Pichau Gamer, Ryzen 5 3500X, GEFORCE GTX 1650 SUPER 4GB, 8GB DDR4, HD 1TB, 500W, Rostock">
<div class="save-price">
<div class="price">5%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/computadores/computador-pichau-gamer-ryzen-5-3500x-geforce-gtx-1650-super-4gb-8gb-ddr4-hd-1tb-500w-rostock" title="Computador Pichau Gamer, Ryzen 5 3500X, GEFORCE GTX 1650 SUPER 4GB, 8GB DDR4, HD 1TB, 500W, Rostock">Computador Pichau Gamer, Ryzen 5 3500X, GEFORCE GTX 1650 SUPER 4GB, 8GB DDR4, HD 1TB, 500W, Rostock</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$3.977,21</strong>
<span class="valor">10x de R$397,72</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$3.499,94</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 44 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/computadores/computador-pichau-gamer-ryzen-5-3500x-geforce-gtx-1650-super-4gb-8gb-ddr4-hd-1tb-500w-rostock">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/computadores/computador-pichau-gamer-ryzen-5-3500x-geforce-gtx-1650-super-4gb-8gb-ddr4-hd-1tb-500w-rostock" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/computadores/computador-pichau-workstation-intel-i5-9400f-quadro-p1000-8gb-ram-hd-2tb-ssd-512gb-500w-dragoon" title="Computador Pichau WorkStation, Intel i5-9400F, Quadro P1000, 8GB RAM, HD 2Tb, SSD 480GB, 500W, Dragoon" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/w/o/workstation-intel-p1000-01_1_1.jpg" alt="Computador Pichau WorkStation, Intel i5-9400F, Quadro P1000, 8GB RAM, HD 2Tb, SSD 480GB, 500W, Dragoon">
<div class="save-price">
<div class="price">11%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/computadores/computador-pichau-workstation-intel-i5-9400f-quadro-p1000-8gb-ram-hd-2tb-ssd-512gb-500w-dragoon" title="Computador Pichau WorkStation, Intel i5-9400F, Quadro P1000, 8GB RAM, HD 2Tb, SSD 480GB, 500W, Dragoon">Computador Pichau WorkStation, Intel i5-9400F, Quadro P1000, 8GB RAM, HD 2Tb, SSD 480GB, 500W, Dragoon</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$5.191,98</strong>
<span class="valor">10x de R$519,20</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$4.568,94</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 5 item(s)!</h4>
 </td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/computadores/computador-pichau-workstation-intel-i5-9400f-quadro-p1000-8gb-ram-hd-2tb-ssd-512gb-500w-dragoon">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/computadores/computador-pichau-workstation-intel-i5-9400f-quadro-p1000-8gb-ram-hd-2tb-ssd-512gb-500w-dragoon" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/computadores/computador-pichau-gamer-i5-9600kf-radeon-rx-5700-xt-8gb-8gb-ddr4-hd-1tb-600w-spec-omega" title="Computador Pichau Gamer, I5-9600KF, Radeon RX 5700 XT 8GB, 8GB DDR4, HD 1Tb, 600w, Dragon R" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/r/x/rxid01_2_4_1.jpg" alt="Computador Pichau Gamer, I5-9600KF, Radeon RX 5700 XT 8GB, 8GB DDR4, HD 1Tb, 600w, Dragon R">
<div class="save-price">
<div class="price">5%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/computadores/computador-pichau-gamer-i5-9600kf-radeon-rx-5700-xt-8gb-8gb-ddr4-hd-1tb-600w-spec-omega" title="Computador Pichau Gamer, I5-9600KF, Radeon RX 5700 XT 8GB, 8GB DDR4, HD 1Tb, 600w, Dragon R">Computador Pichau Gamer, I5-9600KF, Radeon RX 5700 XT 8GB, 8GB DDR4, HD 1Tb, 600w, Dragon R</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$6.250,00</strong>
<span class="valor">10x de R$625,00</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$5.500,00</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 20 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/computadores/computador-pichau-gamer-i5-9600kf-radeon-rx-5700-xt-8gb-8gb-ddr4-hd-1tb-600w-spec-omega">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
 <a href="https://www.pichau.com.br/computadores/computador-pichau-gamer-i5-9600kf-radeon-rx-5700-xt-8gb-8gb-ddr4-hd-1tb-600w-spec-omega" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/computadores/computador-pichau-workstation-ryzen-5-3500x-quadro-p620-8gb-ram-hd-2tb-ssd-120-500w-dragoon" title="Computador Pichau WorkStation, Ryzen 5 3500X, Quadro P620, 8GB RAM, HD 2TB + SSD 120, 500W, Dragoon" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/3/5/3500x-p620-new.jpg" alt="Computador Pichau WorkStation, Ryzen 5 3500X, Quadro P620, 8GB RAM, HD 2TB + SSD 120, 500W, Dragoon">
<div class="save-price">
<div class="price">13%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/computadores/computador-pichau-workstation-ryzen-5-3500x-quadro-p620-8gb-ram-hd-2tb-ssd-120-500w-dragoon" title="Computador Pichau WorkStation, Ryzen 5 3500X, Quadro P620, 8GB RAM, HD 2TB + SSD 120, 500W, Dragoon">Computador Pichau WorkStation, Ryzen 5 3500X, Quadro P620, 8GB RAM, HD 2TB + SSD 120, 500W, Dragoon</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$3.903,36</strong>
<span class="valor">10x de R$390,34</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$3.434,96</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 20 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/computadores/computador-pichau-workstation-ryzen-5-3500x-quadro-p620-8gb-ram-hd-2tb-ssd-120-500w-dragoon">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/computadores/computador-pichau-workstation-ryzen-5-3500x-quadro-p620-8gb-ram-hd-2tb-ssd-120-500w-dragoon" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/computadores/computador-pichau-gamer-i5-9600kf-radeon-rx-5600-xt-6gb-pulse-8gb-ddr4-hd-1tb-500w-archangel" title="Computador Pichau Gamer, I5-9600KF, Radeon RX 5600 XT 6GB Pulse, 8GB DDR4, HD 1Tb, 500w, Water 120mm, Frillback RGB" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/f/r/frillback-gtx_1.jpg" alt="Computador Pichau Gamer, I5-9600KF, Radeon RX 5600 XT 6GB Pulse, 8GB DDR4, HD 1Tb, 500w, Water 120mm, Frillback RGB">
<div class="save-price">
<div class="price">4%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/computadores/computador-pichau-gamer-i5-9600kf-radeon-rx-5600-xt-6gb-pulse-8gb-ddr4-hd-1tb-500w-archangel" title="Computador Pichau Gamer, I5-9600KF, Radeon RX 5600 XT 6GB Pulse, 8GB DDR4, HD 1Tb, 500w, Water 120mm, Frillback RGB">Computador Pichau Gamer, I5-9600KF, Radeon RX 5600 XT 6GB Pulse, 8GB DDR4, HD 1Tb, 500w, Water 120mm, Frillback RGB</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$5.566,98</strong>
<span class="valor">10x de R$556,70</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$4.898,94</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 19 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/computadores/computador-pichau-gamer-i5-9600kf-radeon-rx-5600-xt-6gb-pulse-8gb-ddr4-hd-1tb-500w-archangel">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/computadores/computador-pichau-gamer-i5-9600kf-radeon-rx-5600-xt-6gb-pulse-8gb-ddr4-hd-1tb-500w-archangel" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/computadores/computador-pichau-home-express-g5400-3-7ghz-8gb-ddr4-1tb-500w-sc-501bk-preto-1" title="Computador Pichau Home Express, G5400 3.7GHz, 8GB DDR4, SSD 128GB, 500W, TGT Combat" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/t/g/tgtcombatpreto01_gabinsgpu_1_5_1.jpg" alt="Computador Pichau Home Express, G5400 3.7GHz, 8GB DDR4, SSD 128GB, 500W, TGT Combat">
<div class="save-price">
<div class="price">0%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/computadores/computador-pichau-home-express-g5400-3-7ghz-8gb-ddr4-1tb-500w-sc-501bk-preto-1" title="Computador Pichau Home Express, G5400 3.7GHz, 8GB DDR4, SSD 128GB, 500W, TGT Combat">Computador Pichau Home Express, G5400 3.7GHz, 8GB DDR4, SSD 128GB, 500W, TGT Combat</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$1.795,32</strong>
<span class="valor">10x de R$179,53</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$1.579,88</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/computadores/computador-pichau-home-express-g5400-3-7ghz-8gb-ddr4-1tb-500w-sc-501bk-preto-1">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/computadores/computador-pichau-home-express-g5400-3-7ghz-8gb-ddr4-1tb-500w-sc-501bk-preto-1" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/computadores/computador-pichau-home-express-g5400-3-7ghz-8gb-ddr4-1tb-500w-sc501bk-1" title="Computador Pichau Home Express, i5-8400, 8GB DDR4, 1Tb, 500W, SC501BK" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/d/a/dasc501bk-1_8.jpg" alt="Computador Pichau Home Express, i5-8400, 8GB DDR4, 1Tb, 500W, SC501BK">
<div class="save-price">
<div class="price">0%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/computadores/computador-pichau-home-express-g5400-3-7ghz-8gb-ddr4-1tb-500w-sc501bk-1" title="Computador Pichau Home Express, i5-8400, 8GB DDR4, 1Tb, 500W, SC501BK">Computador Pichau Home Express, i5-8400, 8GB DDR4, 1Tb, 500W, SC501BK</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$2.727,15</strong>
<span class="valor">10x de R$272,72</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$2.399,89</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/computadores/computador-pichau-home-express-g5400-3-7ghz-8gb-ddr4-1tb-500w-sc501bk-1">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/computadores/computador-pichau-home-express-g5400-3-7ghz-8gb-ddr4-1tb-500w-sc501bk-1" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/computadores/computador-pichau-home-express-amd-ryzen-5-2600-3-4ghz-geforce-gt-710-1gb-8gb-ddr4-1tb-500w-sc-501bk" title="Computador Pichau Home Express, AMD Ryzen 5 2600 3.4GHz, GeForce GT 710 1GB, 8GB DDR4, 1Tb, 500W, SC501BK" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/d/a/dasc501bk-1_3_2_1_1.jpg" alt="Computador Pichau Home Express, AMD Ryzen 5 2600 3.4GHz, GeForce GT 710 1GB, 8GB DDR4, 1Tb, 500W, SC501BK">
<div class="save-price">
<div class="price">0%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/computadores/computador-pichau-home-express-amd-ryzen-5-2600-3-4ghz-geforce-gt-710-1gb-8gb-ddr4-1tb-500w-sc-501bk" title="Computador Pichau Home Express, AMD Ryzen 5 2600 3.4GHz, GeForce GT 710 1GB, 8GB DDR4, 1Tb, 500W, SC501BK">Computador Pichau Home Express, AMD Ryzen 5 2600 3.4GHz, GeForce GT 710 1GB, 8GB DDR4, 1Tb, 500W, SC501BK</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$2.647,61</strong>
<span class="valor">10x de R$264,76</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$2.329,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/computadores/computador-pichau-home-express-amd-ryzen-5-2600-3-4ghz-geforce-gt-710-1gb-8gb-ddr4-1tb-500w-sc-501bk">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/computadores/computador-pichau-home-express-amd-ryzen-5-2600-3-4ghz-geforce-gt-710-1gb-8gb-ddr4-1tb-500w-sc-501bk" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/intel/computador-pichau-home-express-g4930-8gb-ddr4-ssd-128gb-500w-sc501bk" title="Computador Pichau Home Express, G4930, 8GB DDR4, SSD 128GB, 500W, SC501BK" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/s/c/sc501bk-1_1_1_1.jpg" alt="Computador Pichau Home Express, G4930, 8GB DDR4, SSD 128GB, 500W, SC501BK">
<div class="save-price">
<div class="price">0%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/intel/computador-pichau-home-express-g4930-8gb-ddr4-ssd-128gb-500w-sc501bk" title="Computador Pichau Home Express, G4930, 8GB DDR4, SSD 128GB, 500W, SC501BK">Computador Pichau Home Express, G4930, 8GB DDR4, SSD 128GB, 500W, SC501BK</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$1.658,98</strong>
<span class="valor">10x de R$165,90</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$1.459,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/intel/computador-pichau-home-express-g4930-8gb-ddr4-ssd-128gb-500w-sc501bk">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/intel/computador-pichau-home-express-g4930-8gb-ddr4-ssd-128gb-500w-sc501bk" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/computadores/computador-pichau-basic-amd-a6-7480-8gb-ddr3-ssd-128gb-500w-fortrek" title="Computador Pichau Home Express, AMD A6-7480, 8GB DDR3, SSD 128GB, 200W, SC501BK" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/s/c/sc501bk-1_6_2_1.jpg" alt="Computador Pichau Home Express, AMD A6-7480, 8GB DDR3, SSD 128GB, 200W, SC501BK">
<div class="save-price">
<div class="price">0%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/computadores/computador-pichau-basic-amd-a6-7480-8gb-ddr3-ssd-128gb-500w-fortrek" title="Computador Pichau Home Express, AMD A6-7480, 8GB DDR3, SSD 128GB, 200W, SC501BK">Computador Pichau Home Express, AMD A6-7480, 8GB DDR3, SSD 128GB, 200W, SC501BK</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$1.272,60</strong>
<span class="valor">10x de R$127,26</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$1.119,89</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/computadores/computador-pichau-basic-amd-a6-7480-8gb-ddr3-ssd-128gb-500w-fortrek">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/computadores/computador-pichau-basic-amd-a6-7480-8gb-ddr3-ssd-128gb-500w-fortrek" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
 <tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/computadores/computador-pichau-home-express-i5-9400f-geforce-gt-710-1gb-8gb-ddr4-ssd-256gb-500w-tgt-combat-1" title="Computador Pichau Home Express, i5-9400F, GeForce GT 710 1GB, 8GB DDR4, SSD 128GB, 500W, SC501BK" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/s/c/sc501bk-1_9.jpg" alt="Computador Pichau Home Express, i5-9400F, GeForce GT 710 1GB, 8GB DDR4, SSD 128GB, 500W, SC501BK">
<div class="save-price">
<div class="price">0%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/computadores/computador-pichau-home-express-i5-9400f-geforce-gt-710-1gb-8gb-ddr4-ssd-256gb-500w-tgt-combat-1" title="Computador Pichau Home Express, i5-9400F, GeForce GT 710 1GB, 8GB DDR4, SSD 128GB, 500W, SC501BK">Computador Pichau Home Express, i5-9400F, GeForce GT 710 1GB, 8GB DDR4, SSD 128GB, 500W, SC501BK</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$2.795,33</strong>
<span class="valor">10x de R$279,53</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$2.459,89</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/computadores/computador-pichau-home-express-i5-9400f-geforce-gt-710-1gb-8gb-ddr4-ssd-256gb-500w-tgt-combat-1">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/computadores/computador-pichau-home-express-i5-9400f-geforce-gt-710-1gb-8gb-ddr4-ssd-256gb-500w-tgt-combat-1" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/hardware/processador-amd-ryzen-9-3900x-12-cores-3-8ghz-4-6ghz-turbo-70mb-cache-am4-100-100000023box" title="Processador AMD Ryzen 9 3900X 12 Cores 3.8GHz (4.6GHz Turbo) 70MB Cache AM4, 100-100000023BOX" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/r/y/ryzen-9-3900x.jpg" alt="Processador AMD Ryzen 9 3900X 12 Cores 3.8GHz (4.6GHz Turbo) 70MB Cache AM4, 100-100000023BOX">
<div class="save-price">
<div class="price">5%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/processador-amd-ryzen-9-3900x-12-cores-3-8ghz-4-6ghz-turbo-70mb-cache-am4-100-100000023box" title="Processador AMD Ryzen 9 3900X 12 Cores 3.8GHz (4.6GHz Turbo) 70MB Cache AM4, 100-100000023BOX">Processador AMD Ryzen 9 3900X 12 Cores 3.8GHz (4.6GHz Turbo) 70MB Cache AM4, 100-100000023BOX</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$3.521,70</strong>
<span class="valor">10x de R$352,17</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$3.099,10</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 18 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/processador-amd-ryzen-9-3900x-12-cores-3-8ghz-4-6ghz-turbo-70mb-cache-am4-100-100000023box">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/processador-amd-ryzen-9-3900x-12-cores-3-8ghz-4-6ghz-turbo-70mb-cache-am4-100-100000023box" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/hardware/memoria-team-group-t-force-vulcan-pichau-8gb-1x8-ddr4-2666mhz-branca-tlpbd48g2666hc18h01" title="Memoria Team Group T-Force Vulcan Pichau 8GB (1x8) DDR4 2666MHz Branca, TLPBD48G2666HC18H01" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/t/l/tlpbd48g2666hc18h01.jpg" alt="Memoria Team Group T-Force Vulcan Pichau 8GB (1x8) DDR4 2666MHz Branca, TLPBD48G2666HC18H01">
<div class="save-price">
<div class="price">6%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/memoria-team-group-t-force-vulcan-pichau-8gb-1x8-ddr4-2666mhz-branca-tlpbd48g2666hc18h01" title="Memoria Team Group T-Force Vulcan Pichau 8GB (1x8) DDR4 2666MHz Branca, TLPBD48G2666HC18H01">Memoria Team Group T-Force Vulcan Pichau 8GB (1x8) DDR4 2666MHz Branca, TLPBD48G2666HC18H01</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$328,42</strong>
<span class="valor">10x de R$32,84</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$289,01</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 363 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/memoria-team-group-t-force-vulcan-pichau-8gb-1x8-ddr4-2666mhz-branca-tlpbd48g2666hc18h01">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/memoria-team-group-t-force-vulcan-pichau-8gb-1x8-ddr4-2666mhz-branca-tlpbd48g2666hc18h01" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/computadores/computador-pichau-basic-amd-a8-9600-8gb-ddr4-hd-1tb-500w-fortrek-1" title="Computador Pichau Home Express, AMD Athlon 3000G, 8GB DDR4, SSD 256GB, 500W, TGT Combat" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/t/g/tgtcombatpreto01_gabinsgpu_1_5.jpg" alt="Computador Pichau Home Express, AMD Athlon 3000G, 8GB DDR4, SSD 256GB, 500W, TGT Combat">
<div class="save-price">
<div class="price">0%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/computadores/computador-pichau-basic-amd-a8-9600-8gb-ddr4-hd-1tb-500w-fortrek-1" title="Computador Pichau Home Express, AMD Athlon 3000G, 8GB DDR4, SSD 256GB, 500W, TGT Combat">Computador Pichau Home Express, AMD Athlon 3000G, 8GB DDR4, SSD 256GB, 500W, TGT Combat</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$1.874,87</strong>
<span class="valor">10x de R$187,49</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$1.649,89</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/computadores/computador-pichau-basic-amd-a8-9600-8gb-ddr4-hd-1tb-500w-fortrek-1">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/computadores/computador-pichau-basic-amd-a8-9600-8gb-ddr4-hd-1tb-500w-fortrek-1" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/hardware/ssd-pichau-gaming-256gb-2-5-sata-6gb-s-pg256x" title="SSD Pichau Gaming 256GB 2.5" sata="" 6gb="" s,="" pg256x"="" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/p/g/pg256x1.jpg" alt="SSD Pichau Gaming 256GB 2.5" sata="" 6gb="" s,="" pg256x"="">
<div class="save-price">
<div class="price">10%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/ssd-pichau-gaming-256gb-2-5-sata-6gb-s-pg256x" title="SSD Pichau Gaming 256GB 2.5" sata="" 6gb="" s,="" pg256x"="">SSD Pichau Gaming 256GB 2.5" Sata 6GB/s, PG256X</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$306,71</strong>
<span class="valor">10x de R$30,67</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$269,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 240 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/ssd-pichau-gaming-256gb-2-5-sata-6gb-s-pg256x">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/ssd-pichau-gaming-256gb-2-5-sata-6gb-s-pg256x" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/computadores/computador-pichau-home-express-ryzen-3-3200g-8gb-ddr4-ssd-256gb-500w-tgt-combat-1" title="Computador Pichau Home Express, Ryzen 3 3200G, 8GB DDR4, SSD 128Gb, 500W, TGT Combat" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/t/g/tgtcombatpreto01_gabinsgpu_6.jpg" alt="Computador Pichau Home Express, Ryzen 3 3200G, 8GB DDR4, SSD 128Gb, 500W, TGT Combat">
<div class="save-price">
<div class="price">0%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/computadores/computador-pichau-home-express-ryzen-3-3200g-8gb-ddr4-ssd-256gb-500w-tgt-combat-1" title="Computador Pichau Home Express, Ryzen 3 3200G, 8GB DDR4, SSD 128Gb, 500W, TGT Combat">Computador Pichau Home Express, Ryzen 3 3200G, 8GB DDR4, SSD 128Gb, 500W, TGT Combat</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$2.045,32</strong>
<span class="valor">10x de R$204,53</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$1.799,88</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/computadores/computador-pichau-home-express-ryzen-3-3200g-8gb-ddr4-ssd-256gb-500w-tgt-combat-1">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/computadores/computador-pichau-home-express-ryzen-3-3200g-8gb-ddr4-ssd-256gb-500w-tgt-combat-1" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
 <tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/computadores/computador-pichau-home-express-amd-apu-a6-9500-3-5ghz-8gb-ddr4-hd-1tb-500w-sc501bk-monitor-19-5-wide" title="Computador Pichau Home Express, AMD APU A6-9500 3.5GHZ, 8GB DDR4, HD 1TB, 500W, SC501BK + Monitor 19.5" wide"="" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/i/m/imgmonitor19.5pol_2_1.jpg" alt="Computador Pichau Home Express, AMD APU A6-9500 3.5GHZ, 8GB DDR4, HD 1TB, 500W, SC501BK + Monitor 19.5" wide"="">
<div class="save-price">
<div class="price">0%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/computadores/computador-pichau-home-express-amd-apu-a6-9500-3-5ghz-8gb-ddr4-hd-1tb-500w-sc501bk-monitor-19-5-wide" title="Computador Pichau Home Express, AMD APU A6-9500 3.5GHZ, 8GB DDR4, HD 1TB, 500W, SC501BK + Monitor 19.5" wide"="">Computador Pichau Home Express, AMD APU A6-9500 3.5GHZ, 8GB DDR4, HD 1TB, 500W, SC501BK + Monitor 19.5" Wide</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$2.158,97</strong>
<span class="valor">10x de R$215,90</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$1.899,89</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/computadores/computador-pichau-home-express-amd-apu-a6-9500-3-5ghz-8gb-ddr4-hd-1tb-500w-sc501bk-monitor-19-5-wide">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/computadores/computador-pichau-home-express-amd-apu-a6-9500-3-5ghz-8gb-ddr4-hd-1tb-500w-sc501bk-monitor-19-5-wide" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/computadores/computador-pichau-home-express-celeron-j1800-dual-core-4gb-ddr3-hd-1tb-500w-fortrek-sc-501bk" title="Computador Pichau Home Express, Celeron J1800 Dual-core, 8GB DDR3, HD 1TB, 200W, SC501BK" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/d/a/dasc501bk-1_6.jpg" alt="Computador Pichau Home Express, Celeron J1800 Dual-core, 8GB DDR3, HD 1TB, 200W, SC501BK">
<div class="save-price">
<div class="price">0%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/computadores/computador-pichau-home-express-celeron-j1800-dual-core-4gb-ddr3-hd-1tb-500w-fortrek-sc-501bk" title="Computador Pichau Home Express, Celeron J1800 Dual-core, 8GB DDR3, HD 1TB, 200W, SC501BK">Computador Pichau Home Express, Celeron J1800 Dual-core, 8GB DDR3, HD 1TB, 200W, SC501BK</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$1.102,16</strong>
<span class="valor">10x de R$110,22</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$969,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/computadores/computador-pichau-home-express-celeron-j1800-dual-core-4gb-ddr3-hd-1tb-500w-fortrek-sc-501bk">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/computadores/computador-pichau-home-express-celeron-j1800-dual-core-4gb-ddr3-hd-1tb-500w-fortrek-sc-501bk" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/computadores/computador-pichau-home-express-i3-9100f-geforce-gt-710-1gb-4gb-ddr4-hd-1tb-500w-tgt-combat" title="Computador Pichau Home Express, i3-9100F, GeForce GT 710 1GB, 8GB DDR4, SSD 128GB, 500W, TGT Combat" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/t/g/tgt-combat-ammd-01_1_5.jpg" alt="Computador Pichau Home Express, i3-9100F, GeForce GT 710 1GB, 8GB DDR4, SSD 128GB, 500W, TGT Combat">
<div class="save-price">
<div class="price">0%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/computadores/computador-pichau-home-express-i3-9100f-geforce-gt-710-1gb-4gb-ddr4-hd-1tb-500w-tgt-combat" title="Computador Pichau Home Express, i3-9100F, GeForce GT 710 1GB, 8GB DDR4, SSD 128GB, 500W, TGT Combat">Computador Pichau Home Express, i3-9100F, GeForce GT 710 1GB, 8GB DDR4, SSD 128GB, 500W, TGT Combat</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$2.249,88</strong>
<span class="valor">10x de R$224,99</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$1.979,89</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/computadores/computador-pichau-home-express-i3-9100f-geforce-gt-710-1gb-4gb-ddr4-hd-1tb-500w-tgt-combat">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/computadores/computador-pichau-home-express-i3-9100f-geforce-gt-710-1gb-4gb-ddr4-hd-1tb-500w-tgt-combat" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/corsair/memoria-corsair-vengeance-lpx-8gb-2666mhz-ddr4-preta-cmk8gx4m1a2666c16" title="Memoria Corsair Vengeance LPX 8GB (1x8) DDR4 2666MHz Preta, CMK8GX4M1A2666C16" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/c/m/cmk8gx4m1a2666c16.jpg" alt="Memoria Corsair Vengeance LPX 8GB (1x8) DDR4 2666MHz Preta, CMK8GX4M1A2666C16">
<div class="save-price">
<div class="price">15%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/corsair/memoria-corsair-vengeance-lpx-8gb-2666mhz-ddr4-preta-cmk8gx4m1a2666c16" title="Memoria Corsair Vengeance LPX 8GB (1x8) DDR4 2666MHz Preta, CMK8GX4M1A2666C16">Memoria Corsair Vengeance LPX 8GB (1x8) DDR4 2666MHz Preta, CMK8GX4M1A2666C16</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$328,42</strong>
<span class="valor">10x de R$32,84</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
 <span class="valor">R$289,01</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 115 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/corsair/memoria-corsair-vengeance-lpx-8gb-2666mhz-ddr4-preta-cmk8gx4m1a2666c16">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/corsair/memoria-corsair-vengeance-lpx-8gb-2666mhz-ddr4-preta-cmk8gx4m1a2666c16" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/hardware/processador-amd-ryzen-9-3950x-16-core-3-5ghz-4-7ghz-turbo-73mb-cache-am4-100-000000051" title="Processador AMD Ryzen 9 3950X 16-Core 3.5GHz (4.7GHz Turbo) 73MB Cache AM4, 100-100000051WOF" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/1/0/100-000000051.jpg" alt="Processador AMD Ryzen 9 3950X 16-Core 3.5GHz (4.7GHz Turbo) 73MB Cache AM4, 100-100000051WOF">
<div class="save-price">
<div class="price">18%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/processador-amd-ryzen-9-3950x-16-core-3-5ghz-4-7ghz-turbo-73mb-cache-am4-100-000000051" title="Processador AMD Ryzen 9 3950X 16-Core 3.5GHz (4.7GHz Turbo) 73MB Cache AM4, 100-100000051WOF">Processador AMD Ryzen 9 3950X 16-Core 3.5GHz (4.7GHz Turbo) 73MB Cache AM4, 100-100000051WOF</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$5.226,20</strong>
<span class="valor">10x de R$522,62</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$4.599,06</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 29 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
 <a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/processador-amd-ryzen-9-3950x-16-core-3-5ghz-4-7ghz-turbo-73mb-cache-am4-100-000000051">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/processador-amd-ryzen-9-3950x-16-core-3-5ghz-4-7ghz-turbo-73mb-cache-am4-100-000000051" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/hardware/memoria-team-group-t-force-vulcan-pichau-8gb-1x8-ddr4-2666mhz-vermelha-tlprd48g2666hc18h01" title="Memoria Team Group T-Force Vulcan Pichau 8GB (1x8) DDR4 2666Mhz Vermelha, TLPRD48G2666HC18H01" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/t/l/tlprd48g2666hc18h013212.jpg" alt="Memoria Team Group T-Force Vulcan Pichau 8GB (1x8) DDR4 2666Mhz Vermelha, TLPRD48G2666HC18H01">
<div class="save-price">
<div class="price">6%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/memoria-team-group-t-force-vulcan-pichau-8gb-1x8-ddr4-2666mhz-vermelha-tlprd48g2666hc18h01" title="Memoria Team Group T-Force Vulcan Pichau 8GB (1x8) DDR4 2666Mhz Vermelha, TLPRD48G2666HC18H01">Memoria Team Group T-Force Vulcan Pichau 8GB (1x8) DDR4 2666Mhz Vermelha, TLPRD48G2666HC18H01</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$328,42</strong>
<span class="valor">10x de R$32,84</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$289,01</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 372 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/memoria-team-group-t-force-vulcan-pichau-8gb-1x8-ddr4-2666mhz-vermelha-tlprd48g2666hc18h01">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/memoria-team-group-t-force-vulcan-pichau-8gb-1x8-ddr4-2666mhz-vermelha-tlprd48g2666hc18h01" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/hardware/ssd-wd-green-240gb-2-5-sata-iii-6gb-s-wds240g2g0a" title="SSD WD Green 240GB 2.5" sata="" iii="" 6gb="" s,="" wds240g2g0a"="" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/w/d/wds240g2g0a_1.jpg" alt="SSD WD Green 240GB 2.5" sata="" iii="" 6gb="" s,="" wds240g2g0a"="">
<div class="save-price">
<div class="price">10%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/ssd-wd-green-240gb-2-5-sata-iii-6gb-s-wds240g2g0a" title="SSD WD Green 240GB 2.5" sata="" iii="" 6gb="" s,="" wds240g2g0a"="">SSD WD Green 240GB 2.5" Sata III 6GB/s, WDS240G2G0A</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$294,32</strong>
<span class="valor">10x de R$29,43</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$259,00</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 71 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/ssd-wd-green-240gb-2-5-sata-iii-6gb-s-wds240g2g0a">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/ssd-wd-green-240gb-2-5-sata-iii-6gb-s-wds240g2g0a" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/corsair/memoria-corsair-vengeance-lpx-8gb-2666mhz-ddr4-red-cmk8gx4m1a2666c16r" title="Memoria Corsair Vengeance LPX 8GB (1x8) DDR4 2666MHz Vermelho, CMK8GX4M1A2666C16R" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/c/m/cmk8gx4m1a2666c16r1.jpg" alt="Memoria Corsair Vengeance LPX 8GB (1x8) DDR4 2666MHz Vermelho, CMK8GX4M1A2666C16R">
<div class="save-price">
<div class="price">17%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/corsair/memoria-corsair-vengeance-lpx-8gb-2666mhz-ddr4-red-cmk8gx4m1a2666c16r" title="Memoria Corsair Vengeance LPX 8GB (1x8) DDR4 2666MHz Vermelho, CMK8GX4M1A2666C16R">Memoria Corsair Vengeance LPX 8GB (1x8) DDR4 2666MHz Vermelho, CMK8GX4M1A2666C16R</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$328,42</strong>
<span class="valor">10x de R$32,84</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$289,01</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 272 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/corsair/memoria-corsair-vengeance-lpx-8gb-2666mhz-ddr4-red-cmk8gx4m1a2666c16r">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/corsair/memoria-corsair-vengeance-lpx-8gb-2666mhz-ddr4-red-cmk8gx4m1a2666c16r" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/monitores/monitor-gamer-gigabyte-aorus-cv27f-27-led-1ms-165hz-fhd-freesync2-hdmi-dp-aorus-cv27f" title="Monitor Gamer Gigabyte Aorus CV27F 27" led="" 1ms="" 165hz="" fhd="" freesync2="" hdmi="" dp,="" aorus="" cv27f"="" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/a/o/aorus-cv27f.jpg" alt="Monitor Gamer Gigabyte Aorus CV27F 27" led="" 1ms="" 165hz="" fhd="" freesync2="" hdmi="" dp,="" aorus="" cv27f"="">
<div class="save-price">
<div class="price">6%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/monitores/monitor-gamer-gigabyte-aorus-cv27f-27-led-1ms-165hz-fhd-freesync2-hdmi-dp-aorus-cv27f" title="Monitor Gamer Gigabyte Aorus CV27F 27" led="" 1ms="" 165hz="" fhd="" freesync2="" hdmi="" dp,="" aorus="" cv27f"="">Monitor Gamer Gigabyte Aorus CV27F 27" LED 1ms 165Hz FHD FreeSync2 HDMI/DP, AORUS CV27F</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$3.408,01</strong>
<span class="valor">10x de R$340,80</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$2.999,05</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 5 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/monitores/monitor-gamer-gigabyte-aorus-cv27f-27-led-1ms-165hz-fhd-freesync2-hdmi-dp-aorus-cv27f">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/monitores/monitor-gamer-gigabyte-aorus-cv27f-27-led-1ms-165hz-fhd-freesync2-hdmi-dp-aorus-cv27f" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/teclab/ssd-kingston-a400-240gb-sata-3-2-5-sa400s37-240g" title="SSD Kingston A400  240GB SATA 3 2.5, SA400S37/240G" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/s/a/sa400s37240g.jpg" alt="SSD Kingston A400  240GB SATA 3 2.5, SA400S37/240G">
<div class="save-price">
<div class="price">10%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/teclab/ssd-kingston-a400-240gb-sata-3-2-5-sa400s37-240g" title="SSD Kingston A400  240GB SATA 3 2.5, SA400S37/240G">SSD Kingston A400 240GB SATA 3 2.5, SA400S37/240G</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$305,69</strong>
<span class="valor">10x de R$30,57</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$269,01</span><br>
 <span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 207 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/teclab/ssd-kingston-a400-240gb-sata-3-2-5-sa400s37-240g">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/teclab/ssd-kingston-a400-240gb-sata-3-2-5-sa400s37-240g" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/perifericos/mouse-gamer-msi-interceptor-ds-b1-1600dpi-us-preto-msi-ds-b1" title="Mouse Gamer MSI Interceptor DS B1 1600DPI US Preto, MSI-DS-B1" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/m/s/msi-ds-b13.jpg" alt="Mouse Gamer MSI Interceptor DS B1 1600DPI US Preto, MSI-DS-B1">
<div class="save-price">
<div class="price">70%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/perifericos/mouse-gamer-msi-interceptor-ds-b1-1600dpi-us-preto-msi-ds-b1" title="Mouse Gamer MSI Interceptor DS B1 1600DPI US Preto, MSI-DS-B1">Mouse Gamer MSI Interceptor DS B1 1600DPI US Preto, MSI-DS-B1</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$33,98</strong>
<span class="valor">3x de R$11,33</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$29,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 232 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/perifericos/mouse-gamer-msi-interceptor-ds-b1-1600dpi-us-preto-msi-ds-b1">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar  </a>
<a href="https://www.pichau.com.br/perifericos/mouse-gamer-msi-interceptor-ds-b1-1600dpi-us-preto-msi-ds-b1" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/hardware/ssd-adata-xpg-gammix-s5-256gb-m-2-2280-nvme-agammixs5-256gt-c" title="SSD Adata XPG GAMMIX S5 256GB M.2 2280 NVMe, AGAMMIXS5-256GT-C" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/a/g/agammixs5-256gt-c.jpg" alt="SSD Adata XPG GAMMIX S5 256GB M.2 2280 NVMe, AGAMMIXS5-256GT-C">
<div class="save-price">
<div class="price">6%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/ssd-adata-xpg-gammix-s5-256gb-m-2-2280-nvme-agammixs5-256gt-c" title="SSD Adata XPG GAMMIX S5 256GB M.2 2280 NVMe, AGAMMIXS5-256GT-C">SSD Adata XPG GAMMIX S5 256GB M.2 2280 NVMe, AGAMMIXS5-256GT-C</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$544,33</strong>
<span class="valor">10x de R$54,43</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$479,01</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 30 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/ssd-adata-xpg-gammix-s5-256gb-m-2-2280-nvme-agammixs5-256gt-c">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/ssd-adata-xpg-gammix-s5-256gb-m-2-2280-nvme-agammixs5-256gt-c" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/hardware/memoria-team-group-t-force-vulcan-pichau-8gb-1x8-ddr4-3200mhz-branca-tlpbd48g3200hc16c01" title="Memoria Team Group T-Force Vulcan Pichau 8GB (1x8) DDR4 3200MHz Branca, TLPBD48G3200HC16C01" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/t/l/tlpbd48g3200hc16c01.jpg" alt="Memoria Team Group T-Force Vulcan Pichau 8GB (1x8) DDR4 3200MHz Branca, TLPBD48G3200HC16C01">
<div class="save-price">
<div class="price">11%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/memoria-team-group-t-force-vulcan-pichau-8gb-1x8-ddr4-3200mhz-branca-tlpbd48g3200hc16c01" title="Memoria Team Group T-Force Vulcan Pichau 8GB (1x8) DDR4 3200MHz Branca, TLPBD48G3200HC16C01">Memoria Team Group T-Force Vulcan Pichau 8GB (1x8) DDR4 3200MHz Branca, TLPBD48G3200HC16C01</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$351,15</strong>
<span class="valor">10x de R$35,12</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$309,01</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 379 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/memoria-team-group-t-force-vulcan-pichau-8gb-1x8-ddr4-3200mhz-branca-tlpbd48g3200hc16c01">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/memoria-team-group-t-force-vulcan-pichau-8gb-1x8-ddr4-3200mhz-branca-tlpbd48g3200hc16c01" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/perifericos/headset-gamer-msi-ds501-preto-vermelho-ds501" title="Headset Gamer MSI DS501 Preto/Vermelho, DS501" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/d/s/ds5013.jpg" alt="Headset Gamer MSI DS501 Preto/Vermelho, DS501">
<div class="save-price">
<div class="price">54%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/perifericos/headset-gamer-msi-ds501-preto-vermelho-ds501" title="Headset Gamer MSI DS501 Preto/Vermelho, DS501">Headset Gamer MSI DS501 Preto/Vermelho, DS501</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$68,07</strong>
<span class="valor">6x de R$11,35</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$59,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 60 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/perifericos/headset-gamer-msi-ds501-preto-vermelho-ds501">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/perifericos/headset-gamer-msi-ds501-preto-vermelho-ds501" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/hardware/memoria-team-group-t-force-vulcan-pichau-8gb-1x8-ddr4-3200mhz-vermelha-tlprd48g3200hc16c01" title="Memoria Team Group T-Force Vulcan Pichau 8GB (1x8) DDR4 3200Mhz Vermelha, TLPRD48G3200HC16C01" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/t/l/tlprd48g3200hc16c01.jpg" alt="Memoria Team Group T-Force Vulcan Pichau 8GB (1x8) DDR4 3200Mhz Vermelha, TLPRD48G3200HC16C01">
<div class="save-price">
<div class="price">11%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/memoria-team-group-t-force-vulcan-pichau-8gb-1x8-ddr4-3200mhz-vermelha-tlprd48g3200hc16c01" title="Memoria Team Group T-Force Vulcan Pichau 8GB (1x8) DDR4 3200Mhz Vermelha, TLPRD48G3200HC16C01">Memoria Team Group T-Force Vulcan Pichau 8GB (1x8) DDR4 3200Mhz Vermelha, TLPRD48G3200HC16C01</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$351,15</strong>
 <span class="valor">10x de R$35,12</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$309,01</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 373 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/memoria-team-group-t-force-vulcan-pichau-8gb-1x8-ddr4-3200mhz-vermelha-tlprd48g3200hc16c01">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/memoria-team-group-t-force-vulcan-pichau-8gb-1x8-ddr4-3200mhz-vermelha-tlprd48g3200hc16c01" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/razer/headset-gamer-razer-kranen-tournament-edition-verde-rz04-02051100-r3u1" title="Headset Gamer Razer KRAKEN Tournament Edition Verde, RZ04-02051100-R3U1" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/r/z/rz04-02051100-r3u11.jpg" alt="Headset Gamer Razer KRAKEN Tournament Edition Verde, RZ04-02051100-R3U1">
<div class="save-price">
<div class="price">8%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/razer/headset-gamer-razer-kranen-tournament-edition-verde-rz04-02051100-r3u1" title="Headset Gamer Razer KRAKEN Tournament Edition Verde, RZ04-02051100-R3U1">Headset Gamer Razer KRAKEN Tournament Edition Verde, RZ04-02051100-R3U1</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$624,89</strong>
<span class="valor">10x de R$62,49</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$549,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 80 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/razer/headset-gamer-razer-kranen-tournament-edition-verde-rz04-02051100-r3u1">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/razer/headset-gamer-razer-kranen-tournament-edition-verde-rz04-02051100-r3u1" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/hardware/ssd-adata-xpg-gammix-s11-pro-256gb-m-2-2280-nvme-agammixs11p-256gt-c" title="SSD Adata XPG GAMMIX S11 Pro 256GB M.2 2280 NVMe, AGAMMIXS11P-256GT-C" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/a/g/agammixs11p-256gt-c1.jpg" alt="SSD Adata XPG GAMMIX S11 Pro 256GB M.2 2280 NVMe, AGAMMIXS11P-256GT-C">
<div class="save-price">
<div class="price">12%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/ssd-adata-xpg-gammix-s11-pro-256gb-m-2-2280-nvme-agammixs11p-256gt-c" title="SSD Adata XPG GAMMIX S11 Pro 256GB M.2 2280 NVMe, AGAMMIXS11P-256GT-C">SSD Adata XPG GAMMIX S11 Pro 256GB M.2 2280 NVMe, AGAMMIXS11P-256GT-C</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$567,06</strong>
<span class="valor">10x de R$56,71</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$499,01</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 48 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/ssd-adata-xpg-gammix-s11-pro-256gb-m-2-2280-nvme-agammixs11p-256gt-c">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/ssd-adata-xpg-gammix-s11-pro-256gb-m-2-2280-nvme-agammixs11p-256gt-c" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/hardware/memoria-team-group-t-force-vulcan-z-8gb-1x8-ddr4-2666mhz-vermelha-tlzrd48g2666hc18h01" title="Memoria Team Group T-Force Vulcan Z 8GB (1x8) DDR4 2666MHz Vermelha, TLZRD48G2666HC18H01" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/t/l/tlzrd432g3200hc16cdc013_1.jpg" alt="Memoria Team Group T-Force Vulcan Z 8GB (1x8) DDR4 2666MHz Vermelha, TLZRD48G2666HC18H01">
<div class="save-price">
<div class="price">6%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/memoria-team-group-t-force-vulcan-z-8gb-1x8-ddr4-2666mhz-vermelha-tlzrd48g2666hc18h01" title="Memoria Team Group T-Force Vulcan Z 8GB (1x8) DDR4 2666MHz Vermelha, TLZRD48G2666HC18H01">Memoria Team Group T-Force Vulcan Z 8GB (1x8) DDR4 2666MHz Vermelha, TLZRD48G2666HC18H01</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$328,42</strong>
<span class="valor">10x de R$32,84</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$289,01</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 280 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/memoria-team-group-t-force-vulcan-z-8gb-1x8-ddr4-2666mhz-vermelha-tlzrd48g2666hc18h01">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/memoria-team-group-t-force-vulcan-z-8gb-1x8-ddr4-2666mhz-vermelha-tlzrd48g2666hc18h01" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/hardware/gabinete-gamer-pichau-lark-vidro-temp-preto-pg-lk-01" title="Gabinete Gamer Pichau Lark Vidro Temp Preto, PG-LK-01" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/p/g/pg-lk-012324.jpg" alt="Gabinete Gamer Pichau Lark Vidro Temp Preto, PG-LK-01">
<div class="save-price">
<div class="price">7%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/gabinete-gamer-pichau-lark-vidro-temp-preto-pg-lk-01" title="Gabinete Gamer Pichau Lark Vidro Temp Preto, PG-LK-01">Gabinete Gamer Pichau Lark Vidro Temp Preto, PG-LK-01</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$295,34</strong>
<span class="valor">10x de R$29,53</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$259,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 194 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/gabinete-gamer-pichau-lark-vidro-temp-preto-pg-lk-01">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/gabinete-gamer-pichau-lark-vidro-temp-preto-pg-lk-01" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/hardware/monitor-gamer-samsung-24-sd332-75hz-1ms-ls24d332hsxzd" title="Monitor Gamer Samsung 24" sd332="" 75hz="" 1ms,="" ls24d332hsxzd"="" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/l/s/ls24d332hsxzd.jpg" alt="Monitor Gamer Samsung 24" sd332="" 75hz="" 1ms,="" ls24d332hsxzd"="">
<div class="save-price">
<div class="price">6%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/monitor-gamer-samsung-24-sd332-75hz-1ms-ls24d332hsxzd" title="Monitor Gamer Samsung 24" sd332="" 75hz="" 1ms,="" ls24d332hsxzd"="">Monitor Gamer Samsung 24" SD332 75Hz 1ms, LS24D332HSXZD</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$748,88</strong>
<span class="valor">10x de R$74,89</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$659,01</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 26 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/monitor-gamer-samsung-24-sd332-75hz-1ms-ls24d332hsxzd">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/monitor-gamer-samsung-24-sd332-75hz-1ms-ls24d332hsxzd" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/perifericos/mouse-gamer-pichau-p301-rgb-4000dpi-preto-pgm-p301-rgb" title="Mouse Gamer Pichau P301 RGB 4000DPI Preto, PGM-P301-RGB" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/p/g/pgm-p301-rgb210123.jpg" alt="Mouse Gamer Pichau P301 RGB 4000DPI Preto, PGM-P301-RGB">
<div class="save-price">
<div class="price">30%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/perifericos/mouse-gamer-pichau-p301-rgb-4000dpi-preto-pgm-p301-rgb" title="Mouse Gamer Pichau P301 RGB 4000DPI Preto, PGM-P301-RGB">Mouse Gamer Pichau P301 RGB 4000DPI Preto, PGM-P301-RGB</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$79,43</strong>
<span class="valor">7x de R$11,35</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$69,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
 </li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 83 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/perifericos/mouse-gamer-pichau-p301-rgb-4000dpi-preto-pgm-p301-rgb">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/perifericos/mouse-gamer-pichau-p301-rgb-4000dpi-preto-pgm-p301-rgb" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/hardware/ventoinha-pichau-gaming-wave-120rgb-led-rgb-pgw120-rgb" title="Ventoinha Pichau Gaming Wave 120RGB Led RGB, PGW120-RGB" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/p/g/pgw120-rgb1.jpg" alt="Ventoinha Pichau Gaming Wave 120RGB Led RGB, PGW120-RGB">
<div class="save-price">
<div class="price">17%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/ventoinha-pichau-gaming-wave-120rgb-led-rgb-pgw120-rgb" title="Ventoinha Pichau Gaming Wave 120RGB Led RGB, PGW120-RGB">Ventoinha Pichau Gaming Wave 120RGB Led RGB, PGW120-RGB</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$28,30</strong>
<span class="valor">2x de R$14,15</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$24,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 1 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/ventoinha-pichau-gaming-wave-120rgb-led-rgb-pgw120-rgb">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/ventoinha-pichau-gaming-wave-120rgb-led-rgb-pgw120-rgb" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/razer/mouse-razer-lancehead-chroma-16-000dpi-wireless-rz01-02120100-r3u1" title="Mouse Razer Lancehead Chroma 16.000Dpi Wireless, RZ01-02120100-R3U1" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/r/z/rz01-02120100-r3u11.jpg" alt="Mouse Razer Lancehead Chroma 16.000Dpi Wireless, RZ01-02120100-R3U1">
<div class="save-price">
<div class="price">15%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/razer/mouse-razer-lancehead-chroma-16-000dpi-wireless-rz01-02120100-r3u1" title="Mouse Razer Lancehead Chroma 16.000Dpi Wireless, RZ01-02120100-R3U1">Mouse Razer Lancehead Chroma 16.000Dpi Wireless, RZ01-02120100-R3U1</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$772,61</strong>
<span class="valor">10x de R$77,26</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$679,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 1 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/razer/mouse-razer-lancehead-chroma-16-000dpi-wireless-rz01-02120100-r3u1">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/razer/mouse-razer-lancehead-chroma-16-000dpi-wireless-rz01-02120100-r3u1" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-pichau-gallati-branca-by-8146-white" title="Cadeira Gamer Pichau Gallati Branca, BY-8146-WHITE" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/b/y/by-8146-white.jpg" alt="Cadeira Gamer Pichau Gallati Branca, BY-8146-WHITE">
<div class="save-price">
<div class="price">30%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-pichau-gallati-branca-by-8146-white" title="Cadeira Gamer Pichau Gallati Branca, BY-8146-WHITE">Cadeira Gamer Pichau Gallati Branca, BY-8146-WHITE</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$795,37</strong>
<span class="valor">10x de R$79,54</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$699,93</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 39 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/cadeiras/cadeira-gamer-pichau-gallati-branca-by-8146-white">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-pichau-gallati-branca-by-8146-white" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/perifericos/teclado-gamer-pichau-p421-rgb-rainbow-pgk-p421-rgb" title="Teclado Gamer Pichau P421 RGB Rainbow, PGK-P421-RGB" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/p/g/pgk-p421-rgb321.jpg" alt="Teclado Gamer Pichau P421 RGB Rainbow, PGK-P421-RGB">
<div class="save-price">
<div class="price">30%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/perifericos/teclado-gamer-pichau-p421-rgb-rainbow-pgk-p421-rgb" title="Teclado Gamer Pichau P421 RGB Rainbow, PGK-P421-RGB">Teclado Gamer Pichau P421 RGB Rainbow, PGK-P421-RGB</a>
</h4>
</td>
</tr>
 <tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$63,52</strong>
<span class="valor">6x de R$10,59</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$55,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 58 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/perifericos/teclado-gamer-pichau-p421-rgb-rainbow-pgk-p421-rgb">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/perifericos/teclado-gamer-pichau-p421-rgb-rainbow-pgk-p421-rgb" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/hardware/ventoinha-pichau-gaming-feather-120mm-vermelho-pgfea-red" title="Ventoinha Pichau Gaming Feather 120mm Vermelho, PGFEA-RED" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/p/g/pgfea-red_1.jpg" alt="Ventoinha Pichau Gaming Feather 120mm Vermelho, PGFEA-RED">
<div class="save-price">
<div class="price">9%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/ventoinha-pichau-gaming-feather-120mm-vermelho-pgfea-red" title="Ventoinha Pichau Gaming Feather 120mm Vermelho, PGFEA-RED">Ventoinha Pichau Gaming Feather 120mm Vermelho, PGFEA-RED</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$22,61</strong>
<span class="valor">2x de R$11,31</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$19,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 72 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/ventoinha-pichau-gaming-feather-120mm-vermelho-pgfea-red">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/ventoinha-pichau-gaming-feather-120mm-vermelho-pgfea-red" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-pichau-donek-ii-vermelha-pg-dnkii-red" title="Cadeira Gamer Pichau Donek II Vermelha, PG-DNKII-RED" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/p/g/pg-dnkii-red.jpg" alt="Cadeira Gamer Pichau Donek II Vermelha, PG-DNKII-RED">
<div class="save-price">
<div class="price">13%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-pichau-donek-ii-vermelha-pg-dnkii-red" title="Cadeira Gamer Pichau Donek II Vermelha, PG-DNKII-RED">Cadeira Gamer Pichau Donek II Vermelha, PG-DNKII-RED</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$988,55</strong>
<span class="valor">10x de R$98,86</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$869,92</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 44 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/cadeiras/cadeira-gamer-pichau-donek-ii-vermelha-pg-dnkii-red">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-pichau-donek-ii-vermelha-pg-dnkii-red" class="more-details bt-list-product">
 <i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/hardware/ventoinha-pichau-gaming-feather-x-led-verde-pg-fx120-green" title="Ventoinha Pichau Gaming Feather X Led Verde, PG-FX120-GREEN" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/p/g/pg-fx120-green.jpg" alt="Ventoinha Pichau Gaming Feather X Led Verde, PG-FX120-GREEN">
<div class="save-price">
<div class="price">10%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/ventoinha-pichau-gaming-feather-x-led-verde-pg-fx120-green" title="Ventoinha Pichau Gaming Feather X Led Verde, PG-FX120-GREEN">Ventoinha Pichau Gaming Feather X Led Verde, PG-FX120-GREEN</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$30,57</strong>
<span class="valor">3x de R$10,19</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$26,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 99 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/ventoinha-pichau-gaming-feather-x-led-verde-pg-fx120-green">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/ventoinha-pichau-gaming-feather-x-led-verde-pg-fx120-green" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-pichau-fantail-verde-by-8179-verde" title="Cadeira Gamer Pichau Fantail Verde, BY-8179-VERDE" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/b/y/by-8179-verdez2121.jpg" alt="Cadeira Gamer Pichau Fantail Verde, BY-8179-VERDE">
 <div class="save-price">
<div class="price">23%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-pichau-fantail-verde-by-8179-verde" title="Cadeira Gamer Pichau Fantail Verde, BY-8179-VERDE">Cadeira Gamer Pichau Fantail Verde, BY-8179-VERDE</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$874,91</strong>
<span class="valor">10x de R$87,49</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$769,92</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 36 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/cadeiras/cadeira-gamer-pichau-fantail-verde-by-8179-verde">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-pichau-fantail-verde-by-8179-verde" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/hardware/ventoinha-pichau-gaming-feather-x-led-branco-pg-fx120-white" title="Ventoinha Pichau Gaming Feather X Led Branco, PG-FX120-WHITE" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/p/g/pg-fx120-white.jpg" alt="Ventoinha Pichau Gaming Feather X Led Branco, PG-FX120-WHITE">
<div class="save-price">
<div class="price">10%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/ventoinha-pichau-gaming-feather-x-led-branco-pg-fx120-white" title="Ventoinha Pichau Gaming Feather X Led Branco, PG-FX120-WHITE">Ventoinha Pichau Gaming Feather X Led Branco, PG-FX120-WHITE</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
 <strong class="regular-price">R$30,57</strong>
<span class="valor">3x de R$10,19</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$26,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 92 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/ventoinha-pichau-gaming-feather-x-led-branco-pg-fx120-white">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/ventoinha-pichau-gaming-feather-x-led-branco-pg-fx120-white" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/novidades/suporte-para-headset-pichau-pgs-100-rgb-hub-usb3-0-pgs-100-rgb" title="Suporte para Headset Pichau PGS 100 RGB HUB USB3.0, PGS-100-RGB" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/p/g/pgs-100-rgb.jpg" alt="Suporte para Headset Pichau PGS 100 RGB HUB USB3.0, PGS-100-RGB">
<div class="save-price">
<div class="price">24%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/novidades/suporte-para-headset-pichau-pgs-100-rgb-hub-usb3-0-pgs-100-rgb" title="Suporte para Headset Pichau PGS 100 RGB HUB USB3.0, PGS-100-RGB">Suporte para Headset Pichau PGS 100 RGB HUB USB3.0, PGS-100-RGB</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$147,62</strong>
<span class="valor">10x de R$14,76</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$129,91</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 85 item(s)!</h4>
 </td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/novidades/suporte-para-headset-pichau-pgs-100-rgb-hub-usb3-0-pgs-100-rgb">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/novidades/suporte-para-headset-pichau-pgs-100-rgb-hub-usb3-0-pgs-100-rgb" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/perifericos/mouse-gamer-pichau-p501-rgb-10000dpi-preto-pgm-p501-rgb" title="Mouse Gamer Pichau P501 RGB 10000DPI Preto, PGM-P501-RGB" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/p/g/pgm-p501-rgb.jpg" alt="Mouse Gamer Pichau P501 RGB 10000DPI Preto, PGM-P501-RGB">
<div class="save-price">
<div class="price">31%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/perifericos/mouse-gamer-pichau-p501-rgb-10000dpi-preto-pgm-p501-rgb" title="Mouse Gamer Pichau P501 RGB 10000DPI Preto, PGM-P501-RGB">Mouse Gamer Pichau P501 RGB 10000DPI Preto, PGM-P501-RGB</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$102,16</strong>
<span class="valor">10x de R$10,22</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$89,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 90 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/perifericos/mouse-gamer-pichau-p501-rgb-10000dpi-preto-pgm-p501-rgb">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/perifericos/mouse-gamer-pichau-p501-rgb-10000dpi-preto-pgm-p501-rgb" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
 Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/razer/mouse-razer-deathadder-elite-chroma-destiny-rz01-02010200-r3m1" title="Mouse Razer DeathAdder Elite Chroma Destiny, RZ01-02010200-R3M1" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/r/z/rz01-02010200-r3m12121.jpg" alt="Mouse Razer DeathAdder Elite Chroma Destiny, RZ01-02010200-R3M1">
<div class="save-price">
<div class="price">12%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/razer/mouse-razer-deathadder-elite-chroma-destiny-rz01-02010200-r3m1" title="Mouse Razer DeathAdder Elite Chroma Destiny, RZ01-02010200-R3M1">Mouse Razer DeathAdder Elite Chroma Destiny, RZ01-02010200-R3M1</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$370,34</strong>
<span class="valor">10x de R$37,03</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$325,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 24 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/razer/mouse-razer-deathadder-elite-chroma-destiny-rz01-02010200-r3m1">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/razer/mouse-razer-deathadder-elite-chroma-destiny-rz01-02010200-r3m1" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/hardware/cooler-para-processador-pichau-gaming-sparrow-rgb-rainbow-pgspa-01-rgb" title="Cooler para Processador Pichau Gaming Sparrow RGB Rainbow, PGSPA-01-RGB" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/p/g/pgspa-01-rgb4.jpg" alt="Cooler para Processador Pichau Gaming Sparrow RGB Rainbow, PGSPA-01-RGB">
<div class="save-price">
<div class="price">25%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/cooler-para-processador-pichau-gaming-sparrow-rgb-rainbow-pgspa-01-rgb" title="Cooler para Processador Pichau Gaming Sparrow RGB Rainbow, PGSPA-01-RGB">Cooler para Processador Pichau Gaming Sparrow RGB Rainbow, PGSPA-01-RGB</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$33,98</strong>
<span class="valor">3x de R$11,33</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$29,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 60 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/cooler-para-processador-pichau-gaming-sparrow-rgb-rainbow-pgspa-01-rgb">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/cooler-para-processador-pichau-gaming-sparrow-rgb-rainbow-pgspa-01-rgb" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/perifericos/teclado-gamer-pichau-p431-rgb-rainbow-pgk-p431-rgb" title="Teclado Gamer Pichau P431 RGB Rainbow, PGK-P431-RGB" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/p/g/pgk-p431-rgb321.jpg" alt="Teclado Gamer Pichau P431 RGB Rainbow, PGK-P431-RGB">
<div class="save-price">
<div class="price">22%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/perifericos/teclado-gamer-pichau-p431-rgb-rainbow-pgk-p431-rgb" title="Teclado Gamer Pichau P431 RGB Rainbow, PGK-P431-RGB">Teclado Gamer Pichau P431 RGB Rainbow, PGK-P431-RGB</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$79,43</strong>
<span class="valor">7x de R$11,35</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$69,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 89 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/perifericos/teclado-gamer-pichau-p431-rgb-rainbow-pgk-p431-rgb">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/perifericos/teclado-gamer-pichau-p431-rgb-rainbow-pgk-p431-rgb" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/hardware/ventoinha-pichau-gaming-feather-120mm-branco-pgfea-white" title="Ventoinha Pichau Gaming Feather 120mm Branco, PGFEA-WHITE" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/p/g/pgfea-white.jpg" alt="Ventoinha Pichau Gaming Feather 120mm Branco, PGFEA-WHITE">
<div class="save-price">
<div class="price">9%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/ventoinha-pichau-gaming-feather-120mm-branco-pgfea-white" title="Ventoinha Pichau Gaming Feather 120mm Branco, PGFEA-WHITE">Ventoinha Pichau Gaming Feather 120mm Branco, PGFEA-WHITE</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$22,61</strong>
<span class="valor">2x de R$11,31</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$19,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 44 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/ventoinha-pichau-gaming-feather-120mm-branco-pgfea-white">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/ventoinha-pichau-gaming-feather-120mm-branco-pgfea-white" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-pichau-gallati-vermelha-by-8146-red" title="Cadeira Gamer Pichau Gallati Vermelha, BY-8146-RED" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/b/y/by-8146-red7.jpg" alt="Cadeira Gamer Pichau Gallati Vermelha, BY-8146-RED">
<div class="save-price">
<div class="price">30%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-pichau-gallati-vermelha-by-8146-red" title="Cadeira Gamer Pichau Gallati Vermelha, BY-8146-RED">Cadeira Gamer Pichau Gallati Vermelha, BY-8146-RED</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$795,37</strong>
<span class="valor">10x de R$79,54</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$699,93</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 39 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/cadeiras/cadeira-gamer-pichau-gallati-vermelha-by-8146-red">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-pichau-gallati-vermelha-by-8146-red" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes  </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/teclab/cadeira-gamer-pichau-donek-vermelha-by-8188-vermelho" title="Cadeira Gamer Pichau Donek Vermelha, BY-8188-VERMELHO" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/b/y/by-8188-vermelho5612.jpg" alt="Cadeira Gamer Pichau Donek Vermelha, BY-8188-VERMELHO">
<div class="save-price">
<div class="price">16%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/teclab/cadeira-gamer-pichau-donek-vermelha-by-8188-vermelho" title="Cadeira Gamer Pichau Donek Vermelha, BY-8188-VERMELHO">Cadeira Gamer Pichau Donek Vermelha, BY-8188-VERMELHO</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$761,27</strong>
<span class="valor">10x de R$76,13</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$669,92</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Desculpe, esse produto está esgotado!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/teclab/cadeira-gamer-pichau-donek-vermelha-by-8188-vermelho">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/teclab/cadeira-gamer-pichau-donek-vermelha-by-8188-vermelho" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/hardware/ventoinha-pichau-gaming-wave-120g-led-verde-pgw120-green" title="Ventoinha Pichau Gaming Wave 120G Led Verde, PGW120-GREEN" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/p/g/pgw120-green2.jpg" alt="Ventoinha Pichau Gaming Wave 120G Led Verde, PGW120-GREEN">
<div class="save-price">
<div class="price">10%</div>
 </div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/ventoinha-pichau-gaming-wave-120g-led-verde-pgw120-green" title="Ventoinha Pichau Gaming Wave 120G Led Verde, PGW120-GREEN">Ventoinha Pichau Gaming Wave 120G Led Verde, PGW120-GREEN</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$20,34</strong>
<span class="valor">2x de R$10,17</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$17,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 80 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/ventoinha-pichau-gaming-wave-120g-led-verde-pgw120-green">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/ventoinha-pichau-gaming-wave-120g-led-verde-pgw120-green" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-pichau-donek-verde-by-8188-verde" title="Cadeira Gamer Pichau Donek Verde, BY-8188-VERDE" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/b/y/by-8188-verde67445.jpg" alt="Cadeira Gamer Pichau Donek Verde, BY-8188-VERDE">
<div class="save-price">
<div class="price">25%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-pichau-donek-verde-by-8188-verde" title="Cadeira Gamer Pichau Donek Verde, BY-8188-VERDE">Cadeira Gamer Pichau Donek Verde, BY-8188-VERDE</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$681,73</strong>
<span class="valor">10x de R$68,17</span>
 <span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$599,92</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 20 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/cadeiras/cadeira-gamer-pichau-donek-verde-by-8188-verde">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-pichau-donek-verde-by-8188-verde" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/hardware/ventoinha-pichau-gaming-feather-x-led-vermelho-pg-fx120-red" title="Ventoinha Pichau Gaming Feather X Led Vermelho, PG-FX120-RED" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/p/g/pg-fx120-red.jpg" alt="Ventoinha Pichau Gaming Feather X Led Vermelho, PG-FX120-RED">
<div class="save-price">
<div class="price">10%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/ventoinha-pichau-gaming-feather-x-led-vermelho-pg-fx120-red" title="Ventoinha Pichau Gaming Feather X Led Vermelho, PG-FX120-RED">Ventoinha Pichau Gaming Feather X Led Vermelho, PG-FX120-RED</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$30,57</strong>
<span class="valor">3x de R$10,19</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$26,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 88 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/ventoinha-pichau-gaming-feather-x-led-vermelho-pg-fx120-red">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/ventoinha-pichau-gaming-feather-x-led-vermelho-pg-fx120-red" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-pichau-fantail-azul-by-8179-azul" title="Cadeira Gamer Pichau Fantail Azul, BY-8179-AZUL" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/b/y/by-8179-azulb821.jpg" alt="Cadeira Gamer Pichau Fantail Azul, BY-8179-AZUL">
<div class="save-price">
<div class="price">23%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-pichau-fantail-azul-by-8179-azul" title="Cadeira Gamer Pichau Fantail Azul, BY-8179-AZUL">Cadeira Gamer Pichau Fantail Azul, BY-8179-AZUL</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$874,91</strong>
<span class="valor">10x de R$87,49</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$769,92</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 22 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/cadeiras/cadeira-gamer-pichau-fantail-azul-by-8179-azul">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-pichau-fantail-azul-by-8179-azul" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/perifericos/kit-gamer-pichau-px435-rgb-pg-px435-rgb" title="Kit Gamer Pichau PX435 RGB, PG-PX435-RGB" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/p/g/pg-px435-rgb2.jpg" alt="Kit Gamer Pichau PX435 RGB, PG-PX435-RGB">
<div class="save-price">
<div class="price">18%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/perifericos/kit-gamer-pichau-px435-rgb-pg-px435-rgb" title="Kit Gamer Pichau PX435 RGB, PG-PX435-RGB">Kit Gamer Pichau PX435 RGB, PG-PX435-RGB</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$120,34</strong>
<span class="valor">10x de R$12,03</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$105,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 83 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/perifericos/kit-gamer-pichau-px435-rgb-pg-px435-rgb">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/perifericos/kit-gamer-pichau-px435-rgb-pg-px435-rgb" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/novidades/fone-de-ouvido-gamer-pichau-p451-led-vermelho-7-1-usb-pgh-p451" title="Fone de Ouvido Gamer Pichau P451 LED Vermelho 7.1 USB, PGH-P451" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/p/g/pgh-p451231.jpg" alt="Fone de Ouvido Gamer Pichau P451 LED Vermelho 7.1 USB, PGH-P451">
<div class="save-price">
<div class="price">11%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/novidades/fone-de-ouvido-gamer-pichau-p451-led-vermelho-7-1-usb-pgh-p451" title="Fone de Ouvido Gamer Pichau P451 LED Vermelho 7.1 USB, PGH-P451">Fone de Ouvido Gamer Pichau P451 LED Vermelho 7.1 USB, PGH-P451</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$181,71</strong>
<span class="valor">10x de R$18,17</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$159,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 95 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/novidades/fone-de-ouvido-gamer-pichau-p451-led-vermelho-7-1-usb-pgh-p451">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/novidades/fone-de-ouvido-gamer-pichau-p451-led-vermelho-7-1-usb-pgh-p451" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/razer/mouse-gamer-razer-basilisk-essential-rgb-6400dpi-rz01-02650100-r3m1" title="Mouse Gamer Razer Basilisk Essential RGB 6400Dpi, RZ01-02650100-R3M1" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/r/z/rz01-02650100-r3m13.jpg" alt="Mouse Gamer Razer Basilisk Essential RGB 6400Dpi, RZ01-02650100-R3M1">
<div class="save-price">
<div class="price">14%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/razer/mouse-gamer-razer-basilisk-essential-rgb-6400dpi-rz01-02650100-r3m1" title="Mouse Gamer Razer Basilisk Essential RGB 6400Dpi, RZ01-02650100-R3M1">Mouse Gamer Razer Basilisk Essential RGB 6400Dpi, RZ01-02650100-R3M1</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$340,80</strong>
<span class="valor">10x de R$34,08</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
 <span class="valor">R$299,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 1 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/razer/mouse-gamer-razer-basilisk-essential-rgb-6400dpi-rz01-02650100-r3m1">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/razer/mouse-gamer-razer-basilisk-essential-rgb-6400dpi-rz01-02650100-r3m1" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/cadeiras/cadeira-pichau-gaming-tippler-verde-by-8105-verde" title="Cadeira Gamer Pichau Tippler Verde, BY-8105-VERDE" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/b/y/by-8105-verde3212.jpg" alt="Cadeira Gamer Pichau Tippler Verde, BY-8105-VERDE">
<div class="save-price">
<div class="price">5%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/cadeiras/cadeira-pichau-gaming-tippler-verde-by-8105-verde" title="Cadeira Gamer Pichau Tippler Verde, BY-8105-VERDE">Cadeira Gamer Pichau Tippler Verde, BY-8105-VERDE</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$590,81</strong>
<span class="valor">10x de R$59,08</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$519,91</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available"><span class="text-unavailable-product">Últimas unidades</span></h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/cadeiras/cadeira-pichau-gaming-tippler-verde-by-8105-verde">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/cadeiras/cadeira-pichau-gaming-tippler-verde-by-8105-verde" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/perifericos/teclado-mecanico-pichau-p631k-rgb-switch-kailh-red-pgk-p631k-rgb" title="Teclado Mecanico Pichau P631K RGB, Switch Kailh RED, PGK-P631K-RGB" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/p/g/pgk-p631k-rgb3.jpg" alt="Teclado Mecanico Pichau P631K RGB, Switch Kailh RED, PGK-P631K-RGB">
<div class="save-price">
<div class="price">20%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/perifericos/teclado-mecanico-pichau-p631k-rgb-switch-kailh-red-pgk-p631k-rgb" title="Teclado Mecanico Pichau P631K RGB, Switch Kailh RED, PGK-P631K-RGB">Teclado Mecanico Pichau P631K RGB, Switch Kailh RED, PGK-P631K-RGB</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$272,62</strong>
<span class="valor">10x de R$27,26</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$239,91</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 77 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/perifericos/teclado-mecanico-pichau-p631k-rgb-switch-kailh-red-pgk-p631k-rgb">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/perifericos/teclado-mecanico-pichau-p631k-rgb-switch-kailh-red-pgk-p631k-rgb" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
 <td rowspan="2">
<a href="https://www.pichau.com.br/hardware/ventoinha-pichau-gaming-feather-120mm-azul-pgfea-blue" title="Ventoinha Pichau Gaming Feather 120mm Azul, PGFEA-BLUE" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/p/g/pgfea-blue.jpg" alt="Ventoinha Pichau Gaming Feather 120mm Azul, PGFEA-BLUE">
<div class="save-price">
<div class="price">9%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/ventoinha-pichau-gaming-feather-120mm-azul-pgfea-blue" title="Ventoinha Pichau Gaming Feather 120mm Azul, PGFEA-BLUE">Ventoinha Pichau Gaming Feather 120mm Azul, PGFEA-BLUE</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$22,61</strong>
<span class="valor">2x de R$11,31</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$19,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 86 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/ventoinha-pichau-gaming-feather-120mm-azul-pgfea-blue">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/ventoinha-pichau-gaming-feather-120mm-azul-pgfea-blue" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-pichau-gallati-preta-by-8146-black" title="Cadeira Gamer Pichau Gallati Preta, BY-8146-BLACK" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/b/y/by-8146-black4.jpg" alt="Cadeira Gamer Pichau Gallati Preta, BY-8146-BLACK">
<div class="save-price">
<div class="price">30%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-pichau-gallati-preta-by-8146-black" title="Cadeira Gamer Pichau Gallati Preta, BY-8146-BLACK">Cadeira Gamer Pichau Gallati Preta, BY-8146-BLACK</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$795,37</strong>
<span class="valor">10x de R$79,54</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$699,93</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 8 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/cadeiras/cadeira-gamer-pichau-gallati-preta-by-8146-black">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-pichau-gallati-preta-by-8146-black" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/hardware/ventoinha-pichau-gaming-feather-120mm-verde-pgfea-green" title="Ventoinha Pichau Gaming Feather 120mm Verde, PGFEA-GREEN" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/p/g/pgfea-green.jpg" alt="Ventoinha Pichau Gaming Feather 120mm Verde, PGFEA-GREEN">
<div class="save-price">
<div class="price">9%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/ventoinha-pichau-gaming-feather-120mm-verde-pgfea-green" title="Ventoinha Pichau Gaming Feather 120mm Verde, PGFEA-GREEN">Ventoinha Pichau Gaming Feather 120mm Verde, PGFEA-GREEN</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$22,61</strong>
<span class="valor">2x de R$11,31</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$19,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 90 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/ventoinha-pichau-gaming-feather-120mm-verde-pgfea-green">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/ventoinha-pichau-gaming-feather-120mm-verde-pgfea-green" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-pichau-donek-ii-branca-pg-dnkii-white" title="Cadeira Gamer Pichau Donek II Branca, PG-DNKII-WHITE" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/p/g/pg-dnkii-white.jpg" alt="Cadeira Gamer Pichau Donek II Branca, PG-DNKII-WHITE">
<div class="save-price">
<div class="price">13%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-pichau-donek-ii-branca-pg-dnkii-white" title="Cadeira Gamer Pichau Donek II Branca, PG-DNKII-WHITE">Cadeira Gamer Pichau Donek II Branca, PG-DNKII-WHITE</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$988,55</strong>
<span class="valor">10x de R$98,86</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$869,92</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 49 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/cadeiras/cadeira-gamer-pichau-donek-ii-branca-pg-dnkii-white">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-pichau-donek-ii-branca-pg-dnkii-white" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/hardware/ventoinha-pichau-gaming-feather-x-led-azul-pg-fx120-blue" title="Ventoinha Pichau Gaming Feather X Led Azul, PG-FX120-BLUE" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/p/g/pg-fx120-blue.jpg" alt="Ventoinha Pichau Gaming Feather X Led Azul, PG-FX120-BLUE">
<div class="save-price">
<div class="price">10%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/ventoinha-pichau-gaming-feather-x-led-azul-pg-fx120-blue" title="Ventoinha Pichau Gaming Feather X Led Azul, PG-FX120-BLUE">Ventoinha Pichau Gaming Feather X Led Azul, PG-FX120-BLUE</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$30,57</strong>
<span class="valor">3x de R$10,19</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$26,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 94 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/ventoinha-pichau-gaming-feather-x-led-azul-pg-fx120-blue">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/ventoinha-pichau-gaming-feather-x-led-azul-pg-fx120-blue" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-pichau-hask-branca-by-8148white" title="Cadeira Gamer Pichau Hask Branca, BY-8148WHITE" class="product-image">
 <img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/b/y/by-8148white5.jpg" alt="Cadeira Gamer Pichau Hask Branca, BY-8148WHITE">
<div class="save-price">
<div class="price">10%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-pichau-hask-branca-by-8148white" title="Cadeira Gamer Pichau Hask Branca, BY-8148WHITE">Cadeira Gamer Pichau Hask Branca, BY-8148WHITE</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$1.022,65</strong>
<span class="valor">10x de R$102,27</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$899,93</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 50 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/cadeiras/cadeira-gamer-pichau-hask-branca-by-8148white">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-pichau-hask-branca-by-8148white" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/hardware/kit-ventoinhas-pichau-gaming-feather-x-rgb-3x120mm-pg-fx120-rgb" title="Kit Ventoinhas Pichau Gaming Feather X RGB 3x120mm, PG-FX120-RGB" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/p/g/pg-fx120-rgb.jpg" alt="Kit Ventoinhas Pichau Gaming Feather X RGB 3x120mm, PG-FX120-RGB">
<div class="save-price">
<div class="price">17%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/kit-ventoinhas-pichau-gaming-feather-x-rgb-3x120mm-pg-fx120-rgb" title="Kit Ventoinhas Pichau Gaming Feather X RGB 3x120mm, PG-FX120-RGB">Kit Ventoinhas Pichau Gaming Feather X RGB 3x120mm, PG-FX120-RGB</a>
</h4>
</td>
</tr>
 <tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$170,35</strong>
<span class="valor">10x de R$17,04</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$149,91</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 93 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/kit-ventoinhas-pichau-gaming-feather-x-rgb-3x120mm-pg-fx120-rgb">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/kit-ventoinhas-pichau-gaming-feather-x-rgb-3x120mm-pg-fx120-rgb" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/novidades/fone-de-ouvido-gamer-pichau-p651-rgb-7-1-usb-pgh-p651-rgb" title="Fone de Ouvido Gamer Pichau P651 RGB 7.1 USB, PGH-P651-RGB" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/p/g/pgh-p651-rgb1212.jpg" alt="Fone de Ouvido Gamer Pichau P651 RGB 7.1 USB, PGH-P651-RGB">
<div class="save-price">
<div class="price">21%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/novidades/fone-de-ouvido-gamer-pichau-p651-rgb-7-1-usb-pgh-p651-rgb" title="Fone de Ouvido Gamer Pichau P651 RGB 7.1 USB, PGH-P651-RGB">Fone de Ouvido Gamer Pichau P651 RGB 7.1 USB, PGH-P651-RGB</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$215,80</strong>
<span class="valor">10x de R$21,58</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$189,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
 <td class="td-available">
<h4 class="text-available">Apenas 87 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/novidades/fone-de-ouvido-gamer-pichau-p651-rgb-7-1-usb-pgh-p651-rgb">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/novidades/fone-de-ouvido-gamer-pichau-p651-rgb-7-1-usb-pgh-p651-rgb" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/hardware/fonte-pichau-gaming-nidus-500w-bronze-80-plus-pg-5001-br" title="Fonte Pichau Gaming Nidus 500W Bronze 80 Plus, PG-5001-BR" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/p/g/pg-5001-br2315.jpg" alt="Fonte Pichau Gaming Nidus 500W Bronze 80 Plus, PG-5001-BR">
<div class="save-price">
<div class="price">7%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/fonte-pichau-gaming-nidus-500w-bronze-80-plus-pg-5001-br" title="Fonte Pichau Gaming Nidus 500W Bronze 80 Plus, PG-5001-BR">Fonte Pichau Gaming Nidus 500W Bronze 80 Plus, PG-5001-BR</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$318,07</strong>
<span class="valor">10x de R$31,81</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$279,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 196 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/fonte-pichau-gaming-nidus-500w-bronze-80-plus-pg-5001-br">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/fonte-pichau-gaming-nidus-500w-bronze-80-plus-pg-5001-br" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/hardware/cooler-para-processador-cooler-master-hyper-t20-90mm-preto-rr-t20-20fk-r1" title="Cooler Para Processador Cooler Master Hyper T20 90mm Preto, RR-T20-20FK-R1" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/r/r/rr-t20-20fk-r1.jpg" alt="Cooler Para Processador Cooler Master Hyper T20 90mm Preto, RR-T20-20FK-R1">
<div class="save-price">
<div class="price">5%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/cooler-para-processador-cooler-master-hyper-t20-90mm-preto-rr-t20-20fk-r1" title="Cooler Para Processador Cooler Master Hyper T20 90mm Preto, RR-T20-20FK-R1">Cooler Para Processador Cooler Master Hyper T20 90mm Preto, RR-T20-20FK-R1</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$86,25</strong>
<span class="valor">8x de R$10,78</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$75,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 49 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/cooler-para-processador-cooler-master-hyper-t20-90mm-preto-rr-t20-20fk-r1">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/cooler-para-processador-cooler-master-hyper-t20-90mm-preto-rr-t20-20fk-r1" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/perifericos/kit-teclado-e-mouse-cooler-master-storm-devastator-3-led-multicolor-sgb-3000-kkmf1-br" title="Kit Teclado e Mouse Cooler Master Storm Devastator 3 LED Multicolor, SGB-3000-KKMF1-BR" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/s/g/sgb-300-kkmf1-br.jpg" alt="Kit Teclado e Mouse Cooler Master Storm Devastator 3 LED Multicolor, SGB-3000-KKMF1-BR">
<div class="save-price">
<div class="price">15%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/perifericos/kit-teclado-e-mouse-cooler-master-storm-devastator-3-led-multicolor-sgb-3000-kkmf1-br" title="Kit Teclado e Mouse Cooler Master Storm Devastator 3 LED Multicolor, SGB-3000-KKMF1-BR">Kit Teclado e Mouse Cooler Master Storm Devastator 3 LED Multicolor, SGB-3000-KKMF1-BR</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$211,25</strong>
<span class="valor">10x de R$21,13</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$185,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 6 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/perifericos/kit-teclado-e-mouse-cooler-master-storm-devastator-3-led-multicolor-sgb-3000-kkmf1-br">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/perifericos/kit-teclado-e-mouse-cooler-master-storm-devastator-3-led-multicolor-sgb-3000-kkmf1-br" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-tgt-intercepter-kids-azul-tgt-int-blue" title="Cadeira Gamer TGT Intercepter Kids Azul, TGT-INT-BLUE" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/t/g/tgt-int-blue45126.jpg" alt="Cadeira Gamer TGT Intercepter Kids Azul, TGT-INT-BLUE">
<div class="save-price">
<div class="price">18%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-tgt-intercepter-kids-azul-tgt-int-blue" title="Cadeira Gamer TGT Intercepter Kids Azul, TGT-INT-BLUE">Cadeira Gamer TGT Intercepter Kids Azul, TGT-INT-BLUE</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$454,45</strong>
<span class="valor">10x de R$45,45</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$399,92</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 49 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/cadeiras/cadeira-gamer-tgt-intercepter-kids-azul-tgt-int-blue">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-tgt-intercepter-kids-azul-tgt-int-blue" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/hardware/gabinete-cooler-master-masterbox-mb511-tg-preto-vermelho-mcb-b511d-kgnn-s00" title="Gabinete Cooler Master Masterbox MB511 TG Preto/Vermelho, MCB-B511D-KGNN-S00" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/m/c/mcb-b511d-kgnn-s00_1_4.jpg" alt="Gabinete Cooler Master Masterbox MB511 TG Preto/Vermelho, MCB-B511D-KGNN-S00">
<div class="save-price">
<div class="price">6%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/gabinete-cooler-master-masterbox-mb511-tg-preto-vermelho-mcb-b511d-kgnn-s00" title="Gabinete Cooler Master Masterbox MB511 TG Preto/Vermelho, MCB-B511D-KGNN-S00">Gabinete Cooler Master Masterbox MB511 TG Preto/Vermelho, MCB-B511D-KGNN-S00</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$352,16</strong>
<span class="valor">10x de R$35,22</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
 </li>
<li class="boleto">
<span class="valor">R$309,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 18 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/gabinete-cooler-master-masterbox-mb511-tg-preto-vermelho-mcb-b511d-kgnn-s00">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/gabinete-cooler-master-masterbox-mb511-tg-preto-vermelho-mcb-b511d-kgnn-s00" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-tgt-centurion-vermelha-tgt-cen-red" title="Cadeira Gamer TGT Centurion Vermelha, TGT-CEN-RED" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/t/g/tgt-cen-red.jpg" alt="Cadeira Gamer TGT Centurion Vermelha, TGT-CEN-RED">
<div class="save-price">
<div class="price">20%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-tgt-centurion-vermelha-tgt-cen-red" title="Cadeira Gamer TGT Centurion Vermelha, TGT-CEN-RED">Cadeira Gamer TGT Centurion Vermelha, TGT-CEN-RED</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$545,36</strong>
<span class="valor">10x de R$54,54</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$479,92</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 43 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/cadeiras/cadeira-gamer-tgt-centurion-vermelha-tgt-cen-red">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-tgt-centurion-vermelha-tgt-cen-red" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/hardware/gabinete-cooler-master-masterbox-mb520-vermelho-lateral-acrilico-mcb-b520-kann-s00" title="Gabinete Cooler Master MasterBox MB520 Vermelho Lateral Acrilico, MCB-B520-KANN-S00" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/m/c/mcb-b520-kann-s007.jpg" alt="Gabinete Cooler Master MasterBox MB520 Vermelho Lateral Acrilico, MCB-B520-KANN-S00">
<div class="save-price">
<div class="price">6%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/gabinete-cooler-master-masterbox-mb520-vermelho-lateral-acrilico-mcb-b520-kann-s00" title="Gabinete Cooler Master MasterBox MB520 Vermelho Lateral Acrilico, MCB-B520-KANN-S00">Gabinete Cooler Master MasterBox MB520 Vermelho Lateral Acrilico, MCB-B520-KANN-S00</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$352,16</strong>
<span class="valor">10x de R$35,22</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$309,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 25 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/gabinete-cooler-master-masterbox-mb520-vermelho-lateral-acrilico-mcb-b520-kann-s00">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/gabinete-cooler-master-masterbox-mb520-vermelho-lateral-acrilico-mcb-b520-kann-s00" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
 </td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-tgt-blade-azul-tgt-bld-blue" title="Cadeira Gamer TGT Blade Azul, TGT-BLD-BLUE" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/t/g/tgt-bld-blue2121.jpg" alt="Cadeira Gamer TGT Blade Azul, TGT-BLD-BLUE">
<div class="save-price">
<div class="price">17%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-tgt-blade-azul-tgt-bld-blue" title="Cadeira Gamer TGT Blade Azul, TGT-BLD-BLUE">Cadeira Gamer TGT Blade Azul, TGT-BLD-BLUE</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$556,72</strong>
<span class="valor">10x de R$55,67</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$489,91</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 48 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/cadeiras/cadeira-gamer-tgt-blade-azul-tgt-bld-blue">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-tgt-blade-azul-tgt-bld-blue" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/hardware/gabinete-gamer-aerocool-shard-rgb-lateral-acrilico-preto-shard-a-bk-v1" title="Gabinete Gamer AeroCool Shard RGB Lateral Acrilico Preto, SHARD-A-BK-V1" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/s/h/shard-a-bk-v15.jpg" alt="Gabinete Gamer AeroCool Shard RGB Lateral Acrilico Preto, SHARD-A-BK-V1">
<div class="save-price">
<div class="price">14%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/gabinete-gamer-aerocool-shard-rgb-lateral-acrilico-preto-shard-a-bk-v1" title="Gabinete Gamer AeroCool Shard RGB Lateral Acrilico Preto, SHARD-A-BK-V1">Gabinete Gamer AeroCool Shard RGB Lateral Acrilico Preto, SHARD-A-BK-V1</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$215,80</strong>
<span class="valor">10x de R$21,58</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$189,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 213 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/gabinete-gamer-aerocool-shard-rgb-lateral-acrilico-preto-shard-a-bk-v1">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/gabinete-gamer-aerocool-shard-rgb-lateral-acrilico-preto-shard-a-bk-v1" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/perifericos/mouse-cooler-master-mastermouse-lite-s-2000dpi-sgm-1006-ksoa1" title="Mouse Cooler Master MasterMouse Lite S 2000DPI, SGM-1006-KSOA1" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/s/g/sgm-1006-ksoa123121.jpg" alt="Mouse Cooler Master MasterMouse Lite S 2000DPI, SGM-1006-KSOA1">
<div class="save-price">
<div class="price">11%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/perifericos/mouse-cooler-master-mastermouse-lite-s-2000dpi-sgm-1006-ksoa1" title="Mouse Cooler Master MasterMouse Lite S 2000DPI, SGM-1006-KSOA1">Mouse Cooler Master MasterMouse Lite S 2000DPI, SGM-1006-KSOA1</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$90,80</strong>
<span class="valor">9x de R$10,09</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$79,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 34 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/perifericos/mouse-cooler-master-mastermouse-lite-s-2000dpi-sgm-1006-ksoa1">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/perifericos/mouse-cooler-master-mastermouse-lite-s-2000dpi-sgm-1006-ksoa1" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/perifericos/mouse-gamer-cooler-master-cm310-rgb-10000dpi-cm-310-kkwo2" title="Mouse Gamer Cooler Master CM310 RGB 10000Dpi, CM-310-KKWO2" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/c/m/cm-310-kkwo2.jpg" alt="Mouse Gamer Cooler Master CM310 RGB 10000Dpi, CM-310-KKWO2">
<div class="save-price">
<div class="price">3%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/perifericos/mouse-gamer-cooler-master-cm310-rgb-10000dpi-cm-310-kkwo2" title="Mouse Gamer Cooler Master CM310 RGB 10000Dpi, CM-310-KKWO2">Mouse Gamer Cooler Master CM310 RGB 10000Dpi, CM-310-KKWO2</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$165,80</strong>
<span class="valor">10x de R$16,58</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$145,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 4 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
 <a class="action tocart bt-list-product" href="https://www.pichau.com.br/perifericos/mouse-gamer-cooler-master-cm310-rgb-10000dpi-cm-310-kkwo2">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/perifericos/mouse-gamer-cooler-master-cm310-rgb-10000dpi-cm-310-kkwo2" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/hardware/cooler-para-processador-cooler-master-hyper-h410r-92mm-rgb-rr-h410-20pc-r1" title="Cooler Para Processador Cooler Master Hyper H410R 92mm RGB, RR-H410-20PC-R1" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/r/r/rr-h410-20pc-r12.jpg" alt="Cooler Para Processador Cooler Master Hyper H410R 92mm RGB, RR-H410-20PC-R1">
<div class="save-price">
<div class="price">3%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/cooler-para-processador-cooler-master-hyper-h410r-92mm-rgb-rr-h410-20pc-r1" title="Cooler Para Processador Cooler Master Hyper H410R 92mm RGB, RR-H410-20PC-R1">Cooler Para Processador Cooler Master Hyper H410R 92mm RGB, RR-H410-20PC-R1</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$143,07</strong>
<span class="valor">10x de R$14,31</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$125,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 62 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/cooler-para-processador-cooler-master-hyper-h410r-92mm-rgb-rr-h410-20pc-r1">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/cooler-para-processador-cooler-master-hyper-h410r-92mm-rgb-rr-h410-20pc-r1" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
 Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-tgt-fury-azul-tgt-fur-blue" title="Cadeira Gamer TGT Fury Azul, TGT-FUR-BLUE" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/t/g/tgt-fur-blue656464.jpg" alt="Cadeira Gamer TGT Fury Azul, TGT-FUR-BLUE">
<div class="save-price">
<div class="price">12%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-tgt-fury-azul-tgt-fur-blue" title="Cadeira Gamer TGT Fury Azul, TGT-FUR-BLUE">Cadeira Gamer TGT Fury Azul, TGT-FUR-BLUE</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$556,72</strong>
<span class="valor">10x de R$55,67</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$489,91</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 48 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/cadeiras/cadeira-gamer-tgt-fury-azul-tgt-fur-blue">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-tgt-fury-azul-tgt-fur-blue" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/hardware/gabinete-cooler-master-masterbox-mb520-preto-lateral-acrilico-mcb-b520-kann-s01" title="Gabinete Cooler Master MasterBox MB520 Preto Lateral Acrilico, MCB-B520-KANN-S01" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/m/c/mcb-b520-kann-s011_1.jpg" alt="Gabinete Cooler Master MasterBox MB520 Preto Lateral Acrilico, MCB-B520-KANN-S01">
<div class="save-price">
<div class="price">6%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/gabinete-cooler-master-masterbox-mb520-preto-lateral-acrilico-mcb-b520-kann-s01" title="Gabinete Cooler Master MasterBox MB520 Preto Lateral Acrilico, MCB-B520-KANN-S01">Gabinete Cooler Master MasterBox MB520 Preto Lateral Acrilico, MCB-B520-KANN-S01</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$352,16</strong>
<span class="valor">10x de R$35,22</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$309,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 15 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/gabinete-cooler-master-masterbox-mb520-preto-lateral-acrilico-mcb-b520-kann-s01">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/gabinete-cooler-master-masterbox-mb520-preto-lateral-acrilico-mcb-b520-kann-s01" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/ths/gabinete-aerocool-atx-si-5100-com-acrilico-usb-3-0-preto-en58348" title="Gabinete Aerocool ATX SI-5100 Com Acrilico USB 3.0 Preto, EN58348" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/e/n/en583481444.jpg" alt="Gabinete Aerocool ATX SI-5100 Com Acrilico USB 3.0 Preto, EN58348">
<div class="save-price">
<div class="price">7%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/ths/gabinete-aerocool-atx-si-5100-com-acrilico-usb-3-0-preto-en58348" title="Gabinete Aerocool ATX SI-5100 Com Acrilico USB 3.0 Preto, EN58348">Gabinete Aerocool ATX SI-5100 Com Acrilico USB 3.0 Preto, EN58348</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
 <li class="other">
<strong class="regular-price">R$211,25</strong>
<span class="valor">10x de R$21,13</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$185,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 25 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/ths/gabinete-aerocool-atx-si-5100-com-acrilico-usb-3-0-preto-en58348">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/ths/gabinete-aerocool-atx-si-5100-com-acrilico-usb-3-0-preto-en58348" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-tgt-blade-azul-tgt-bld-blue-1" title="Cadeira Gamer TGT Blade Vermelha, TGT-BLD-RED" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/t/g/tgt-bld-red121.jpg" alt="Cadeira Gamer TGT Blade Vermelha, TGT-BLD-RED">
<div class="save-price">
<div class="price">17%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-tgt-blade-azul-tgt-bld-blue-1" title="Cadeira Gamer TGT Blade Vermelha, TGT-BLD-RED">Cadeira Gamer TGT Blade Vermelha, TGT-BLD-RED</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$556,72</strong>
<span class="valor">10x de R$55,67</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$489,91</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 46 item(s)!</h4>
</td>
 <td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/cadeiras/cadeira-gamer-tgt-blade-azul-tgt-bld-blue-1">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-tgt-blade-azul-tgt-bld-blue-1" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/hardware/gabinete-gamer-aerocool-bold-rgb-lateral-acrilico-preto-bolt-a-bk-v1" title="Gabinete Gamer AeroCool Bolt RGB Lateral Acrilico Preto, BOLT-A-BK-V1" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/b/o/bolt-a-bk-v15.jpg" alt="Gabinete Gamer AeroCool Bolt RGB Lateral Acrilico Preto, BOLT-A-BK-V1">
<div class="save-price">
<div class="price">18%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/gabinete-gamer-aerocool-bold-rgb-lateral-acrilico-preto-bolt-a-bk-v1" title="Gabinete Gamer AeroCool Bolt RGB Lateral Acrilico Preto, BOLT-A-BK-V1">Gabinete Gamer AeroCool Bolt RGB Lateral Acrilico Preto, BOLT-A-BK-V1</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$227,16</strong>
<span class="valor">10x de R$22,72</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$199,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 275 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/gabinete-gamer-aerocool-bold-rgb-lateral-acrilico-preto-bolt-a-bk-v1">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/gabinete-gamer-aerocool-bold-rgb-lateral-acrilico-preto-bolt-a-bk-v1" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
 Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/hardware/cooler-para-processador-cooler-master-hyper-t200-rr-t200-22pk-r1" title="Cooler para Processador Cooler Master Hyper T200, RR-T200-22PK-R1" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/r/r/rr-t200-22pk-r1.jpg" alt="Cooler para Processador Cooler Master Hyper T200, RR-T200-22PK-R1">
<div class="save-price">
<div class="price">13%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/cooler-para-processador-cooler-master-hyper-t200-rr-t200-22pk-r1" title="Cooler para Processador Cooler Master Hyper T200, RR-T200-22PK-R1">Cooler para Processador Cooler Master Hyper T200, RR-T200-22PK-R1</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$74,89</strong>
<span class="valor">7x de R$10,70</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$65,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 35 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/cooler-para-processador-cooler-master-hyper-t200-rr-t200-22pk-r1">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/cooler-para-processador-cooler-master-hyper-t200-rr-t200-22pk-r1" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-tgt-fury-vermelha-tgt-fur-red" title="Cadeira Gamer TGT Fury Vermelha, TGT-FUR-RED" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/t/g/tgt-fur-red646126.jpg" alt="Cadeira Gamer TGT Fury Vermelha, TGT-FUR-RED">
<div class="save-price">
<div class="price">17%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-tgt-fury-vermelha-tgt-fur-red" title="Cadeira Gamer TGT Fury Vermelha, TGT-FUR-RED">Cadeira Gamer TGT Fury Vermelha, TGT-FUR-RED</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$556,72</strong>
<span class="valor">10x de R$55,67</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$489,91</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 48 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/cadeiras/cadeira-gamer-tgt-fury-vermelha-tgt-fur-red">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-tgt-fury-vermelha-tgt-fur-red" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/hardware/gabinete-cooler-master-masterbox-mb511-lateral-acrilico-preto-mcb-b511d-kann-s01" title="Gabinete Cooler Master Masterbox MB511 Lateral Acrilico Preto, MCB-B511D-KANN-S01" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/m/c/mcb-b511d-kann-s018_1.jpg" alt="Gabinete Cooler Master Masterbox MB511 Lateral Acrilico Preto, MCB-B511D-KANN-S01">
<div class="save-price">
<div class="price">6%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/gabinete-cooler-master-masterbox-mb511-lateral-acrilico-preto-mcb-b511d-kann-s01" title="Gabinete Cooler Master Masterbox MB511 Lateral Acrilico Preto, MCB-B511D-KANN-S01">Gabinete Cooler Master Masterbox MB511 Lateral Acrilico Preto, MCB-B511D-KANN-S01</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
 <li class="other">
<strong class="regular-price">R$363,52</strong>
<span class="valor">10x de R$36,35</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$319,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 18 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/gabinete-cooler-master-masterbox-mb511-lateral-acrilico-preto-mcb-b511d-kann-s01">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/gabinete-cooler-master-masterbox-mb511-lateral-acrilico-preto-mcb-b511d-kann-s01" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/hardware/kit-ventoinha-dt3-sports-zx120-sync-pro-3x120mm-rgb-11861-7" title="Kit Ventoinha DT3 Sports ZX120 Sync Pro 3x120mm RGB, 11861-7" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/1/1/11861-74.jpg" alt="Kit Ventoinha DT3 Sports ZX120 Sync Pro 3x120mm RGB, 11861-7">
<div class="save-price">
<div class="price">5%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/kit-ventoinha-dt3-sports-zx120-sync-pro-3x120mm-rgb-11861-7" title="Kit Ventoinha DT3 Sports ZX120 Sync Pro 3x120mm RGB, 11861-7">Kit Ventoinha DT3 Sports ZX120 Sync Pro 3x120mm RGB, 11861-7</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$227,16</strong>
<span class="valor">10x de R$22,72</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$199,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
 <h4 class="text-available">Apenas 7 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/kit-ventoinha-dt3-sports-zx120-sync-pro-3x120mm-rgb-11861-7">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/kit-ventoinha-dt3-sports-zx120-sync-pro-3x120mm-rgb-11861-7" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-tgt-centurion-azul-tgt-cen-blue" title="Cadeira Gamer TGT Centurion Azul, TGT-CEN-BLUE" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/t/g/tgt-cen-blue65127.jpg" alt="Cadeira Gamer TGT Centurion Azul, TGT-CEN-BLUE">
<div class="save-price">
<div class="price">20%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-tgt-centurion-azul-tgt-cen-blue" title="Cadeira Gamer TGT Centurion Azul, TGT-CEN-BLUE">Cadeira Gamer TGT Centurion Azul, TGT-CEN-BLUE</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$545,36</strong>
<span class="valor">10x de R$54,54</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$479,92</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 49 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/cadeiras/cadeira-gamer-tgt-centurion-azul-tgt-cen-blue">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/cadeiras/cadeira-gamer-tgt-centurion-azul-tgt-cen-blue" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
 Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/hardware/gabinete-cooler-master-masterbox-mb511-red-lateral-acrilico-mcb-b511d-kann-s00" title="Gabinete Cooler Master MasterBox MB511 Red Lateral Acrilico, MCB-B511D-KANN-S00" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/m/c/mcb-b511d-kann-s008.jpg" alt="Gabinete Cooler Master MasterBox MB511 Red Lateral Acrilico, MCB-B511D-KANN-S00">
<div class="save-price">
<div class="price">6%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/gabinete-cooler-master-masterbox-mb511-red-lateral-acrilico-mcb-b511d-kann-s00" title="Gabinete Cooler Master MasterBox MB511 Red Lateral Acrilico, MCB-B511D-KANN-S00">Gabinete Cooler Master MasterBox MB511 Red Lateral Acrilico, MCB-B511D-KANN-S00</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$363,52</strong>
<span class="valor">10x de R$36,35</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$319,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 25 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/gabinete-cooler-master-masterbox-mb511-red-lateral-acrilico-mcb-b511d-kann-s00">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/gabinete-cooler-master-masterbox-mb511-red-lateral-acrilico-mcb-b511d-kann-s00" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/perifericos/teclado-mecanico-gamdias-hermes-p1a-rgb-switch-azul-hermes-p1a" title="Teclado Mecanico Gamdias Hermes P1A RGB Switch Azul, HERMES-P1A" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/h/e/hermes-p1a213212.jpg" alt="Teclado Mecanico Gamdias Hermes P1A RGB Switch Azul, HERMES-P1A">
<div class="save-price">
<div class="price">14%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/perifericos/teclado-mecanico-gamdias-hermes-p1a-rgb-switch-azul-hermes-p1a" title="Teclado Mecanico Gamdias Hermes P1A RGB Switch Azul, HERMES-P1A">Teclado Mecanico Gamdias Hermes P1A RGB Switch Azul, HERMES-P1A</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$272,62</strong>
<span class="valor">10x de R$27,26</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$239,91</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 20 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/perifericos/teclado-mecanico-gamdias-hermes-p1a-rgb-switch-azul-hermes-p1a">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/perifericos/teclado-mecanico-gamdias-hermes-p1a-rgb-switch-azul-hermes-p1a" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/multilaser/teclado-multimidia-multilaser-usb-tc206" title="Teclado Multimidia Multilaser USB, TC206" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/t/c/tc206.jpg" alt="Teclado Multimidia Multilaser USB, TC206">
<div class="save-price">
<div class="price">4%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/multilaser/teclado-multimidia-multilaser-usb-tc206" title="Teclado Multimidia Multilaser USB, TC206">Teclado Multimidia Multilaser USB, TC206</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$29,43</strong>
<span class="valor">2x de R$14,72</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$25,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 29 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/multilaser/teclado-multimidia-multilaser-usb-tc206">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/multilaser/teclado-multimidia-multilaser-usb-tc206" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/hardware/gabinete-cooler-master-mastercase-h500-rgb-mcm-h500-ignn-s00" title="Gabinete Cooler Master Mastercase H500 RGB, MCM-H500-IGNN-S00" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/m/c/mcm-h500-ignn-s002.jpg" alt="Gabinete Cooler Master Mastercase H500 RGB, MCM-H500-IGNN-S00">
<div class="save-price">
<div class="price">11%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/gabinete-cooler-master-mastercase-h500-rgb-mcm-h500-ignn-s00" title="Gabinete Cooler Master Mastercase H500 RGB, MCM-H500-IGNN-S00">Gabinete Cooler Master Mastercase H500 RGB, MCM-H500-IGNN-S00</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$852,16</strong>
<span class="valor">10x de R$85,22</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$749,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 4 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/gabinete-cooler-master-mastercase-h500-rgb-mcm-h500-ignn-s00">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/gabinete-cooler-master-mastercase-h500-rgb-mcm-h500-ignn-s00" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/hardware/gabinete-deepcool-matrexx-55-v3-vidro-temp-preto-dp-atx-matrexx55v3" title="Gabinete DeepCool Matrexx 55 V3 Vidro Temp Preto, DP-ATX-MATREXX55V3" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/d/p/dp-atx-matrexx55v38.jpg" alt="Gabinete DeepCool Matrexx 55 V3 Vidro Temp Preto, DP-ATX-MATREXX55V3">
<div class="save-price">
<div class="price">6%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/gabinete-deepcool-matrexx-55-v3-vidro-temp-preto-dp-atx-matrexx55v3" title="Gabinete DeepCool Matrexx 55 V3 Vidro Temp Preto, DP-ATX-MATREXX55V3">Gabinete DeepCool Matrexx 55 V3 Vidro Temp Preto, DP-ATX-MATREXX55V3</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$363,53</strong>
<span class="valor">10x de R$36,35</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$319,91</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 12 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/gabinete-deepcool-matrexx-55-v3-vidro-temp-preto-dp-atx-matrexx55v3">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/gabinete-deepcool-matrexx-55-v3-vidro-temp-preto-dp-atx-matrexx55v3" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/redes-wireless/adaptador-wireless-tp-link-usb-300mbps-tl-wn821n-box" title="Adaptador Wireless TP-Link USB 300Mbps, TL-WN821N - BOX" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/a/f/af16a216s21f22a_f2a6f2621b61fsb_.jpg" alt="Adaptador Wireless TP-Link USB 300Mbps, TL-WN821N - BOX">
<div class="save-price">
<div class="price">5%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/redes-wireless/adaptador-wireless-tp-link-usb-300mbps-tl-wn821n-box" title="Adaptador Wireless TP-Link USB 300Mbps, TL-WN821N - BOX">Adaptador Wireless TP-Link USB 300Mbps, TL-WN821N - BOX</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$66,93</strong>
<span class="valor">6x de R$11,16</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$58,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 37 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/redes-wireless/adaptador-wireless-tp-link-usb-300mbps-tl-wn821n-box">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/redes-wireless/adaptador-wireless-tp-link-usb-300mbps-tl-wn821n-box" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/perifericos/suporte-para-celular-cougar-bunker-m-rgb-wireless-charge-cgr-xxnb-ps1rgb" title="Suporte Para Celular Cougar Bunker M RGB Wireless Charge, CGR-XXNB-PS1RGB" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/c/g/cgr-xxnb-ps1rgb1.jpg" alt="Suporte Para Celular Cougar Bunker M RGB Wireless Charge, CGR-XXNB-PS1RGB">
<div class="save-price">
<div class="price">11%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/perifericos/suporte-para-celular-cougar-bunker-m-rgb-wireless-charge-cgr-xxnb-ps1rgb" title="Suporte Para Celular Cougar Bunker M RGB Wireless Charge, CGR-XXNB-PS1RGB">Suporte Para Celular Cougar Bunker M RGB Wireless Charge, CGR-XXNB-PS1RGB</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$312,37</strong>
<span class="valor">10x de R$31,24</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$274,89</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 2 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/perifericos/suporte-para-celular-cougar-bunker-m-rgb-wireless-charge-cgr-xxnb-ps1rgb">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/perifericos/suporte-para-celular-cougar-bunker-m-rgb-wireless-charge-cgr-xxnb-ps1rgb" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/perifericos/teclado-mecanico-motospeed-gk82-rosa-led-branco-switch-vermelho-fmstc0051vem" title="Teclado Mecanico Motospeed GK82 Rosa Led Branco Switch Vermelho, FMSTC0051VEM" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/f/m/fmstc0051vem.jpg" alt="Teclado Mecanico Motospeed GK82 Rosa Led Branco Switch Vermelho, FMSTC0051VEM">
<div class="save-price">
<div class="price">3%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/perifericos/teclado-mecanico-motospeed-gk82-rosa-led-branco-switch-vermelho-fmstc0051vem" title="Teclado Mecanico Motospeed GK82 Rosa Led Branco Switch Vermelho, FMSTC0051VEM">Teclado Mecanico Motospeed GK82 Rosa Led Branco Switch Vermelho, FMSTC0051VEM</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$340,80</strong>
<span class="valor">10x de R$34,08</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$299,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 10 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/perifericos/teclado-mecanico-motospeed-gk82-rosa-led-branco-switch-vermelho-fmstc0051vem">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/perifericos/teclado-mecanico-motospeed-gk82-rosa-led-branco-switch-vermelho-fmstc0051vem" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/hardware/gabinete-nzxt-h210i-preto-preto-ca-h210i-b1" title="Gabinete NZXT H210i Preto/Preto, CA-H210i-B1" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/c/a/ca-h210i-b1.jpg" alt="Gabinete NZXT H210i Preto/Preto, CA-H210i-B1">
<div class="save-price">
<div class="price">6%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/gabinete-nzxt-h210i-preto-preto-ca-h210i-b1" title="Gabinete NZXT H210i Preto/Preto, CA-H210i-B1">Gabinete NZXT H210i Preto/Preto, CA-H210i-B1</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$829,45</strong>
<span class="valor">10x de R$82,95</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$729,92</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 3 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/gabinete-nzxt-h210i-preto-preto-ca-h210i-b1">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/gabinete-nzxt-h210i-preto-preto-ca-h210i-b1" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/logitech/mouse-logitech-m90-usb-preto-910-004053" title="Mouse Logitech M90 USB Preto, 910-004053" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/9/1/910-00405352.jpg" alt="Mouse Logitech M90 USB Preto, 910-004053">
<div class="save-price">
<div class="price">16%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/logitech/mouse-logitech-m90-usb-preto-910-004053" title="Mouse Logitech M90 USB Preto, 910-004053">Mouse Logitech M90 USB Preto, 910-004053</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$23,75</strong>
<span class="valor">2x de R$11,88</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$20,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 129 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/logitech/mouse-logitech-m90-usb-preto-910-004053">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/logitech/mouse-logitech-m90-usb-preto-910-004053" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/ths/mouse-gamer-gamdias-zeus-m1-rgb-7000dpi" title="Mouse Gamer Gamdias Zeus M1 RGB 7000Dpi" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/z/e/zeus-m14.jpg" alt="Mouse Gamer Gamdias Zeus M1 RGB 7000Dpi">
<div class="save-price">
<div class="price">15%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/ths/mouse-gamer-gamdias-zeus-m1-rgb-7000dpi" title="Mouse Gamer Gamdias Zeus M1 RGB 7000Dpi">Mouse Gamer Gamdias Zeus M1 RGB 7000Dpi</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$170,34</strong>
<span class="valor">10x de R$17,03</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$149,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 14 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/ths/mouse-gamer-gamdias-zeus-m1-rgb-7000dpi">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/ths/mouse-gamer-gamdias-zeus-m1-rgb-7000dpi" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/perifericos/mouse-trust-compact-ziva-cinza-t21508" title="Mouse Trust ZIVA Compact 1000DPI USB Cinza, T21508" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/t/2/t215081.jpg" alt="Mouse Trust ZIVA Compact 1000DPI USB Cinza, T21508">
<div class="save-price">
<div class="price">27%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/perifericos/mouse-trust-compact-ziva-cinza-t21508" title="Mouse Trust ZIVA Compact 1000DPI USB Cinza, T21508">Mouse Trust ZIVA Compact 1000DPI USB Cinza, T21508</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$16,47</strong>
<span class="valor">1x de R$16,47</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$14,49</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 46 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/perifericos/mouse-trust-compact-ziva-cinza-t21508">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/perifericos/mouse-trust-compact-ziva-cinza-t21508" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/perifericos/mouse-gamer-mad-catz-r-a-t-1-2000dpi-preto-rat-1" title="Mouse Gamer Mad Catz R.A.T. 1+ 2000DPI Preto, RAT 1+" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/r/a/rat-1_2.jpg" alt="Mouse Gamer Mad Catz R.A.T. 1+ 2000DPI Preto, RAT 1+">
<div class="save-price">
<div class="price">23%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/perifericos/mouse-gamer-mad-catz-r-a-t-1-2000dpi-preto-rat-1" title="Mouse Gamer Mad Catz R.A.T. 1+ 2000DPI Preto, RAT 1+">Mouse Gamer Mad Catz R.A.T. 1+ 2000DPI Preto, RAT 1+</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$170,34</strong>
<span class="valor">10x de R$17,03</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$149,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 3 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/perifericos/mouse-gamer-mad-catz-r-a-t-1-2000dpi-preto-rat-1">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/perifericos/mouse-gamer-mad-catz-r-a-t-1-2000dpi-preto-rat-1" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/perifericos/mouse-gamer-mad-catz-r-a-t-2-5000dpi-preto-rat-2" title="Mouse Gamer Mad Catz R.A.T. 2+ 5000DPI Preto, RAT 2+" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/r/a/rat-2_5.jpg" alt="Mouse Gamer Mad Catz R.A.T. 2+ 5000DPI Preto, RAT 2+">
<div class="save-price">
<div class="price">4%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/perifericos/mouse-gamer-mad-catz-r-a-t-2-5000dpi-preto-rat-2" title="Mouse Gamer Mad Catz R.A.T. 2+ 5000DPI Preto, RAT 2+">Mouse Gamer Mad Catz R.A.T. 2+ 5000DPI Preto, RAT 2+</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$283,98</strong>
<span class="valor">10x de R$28,40</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$249,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 2 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/perifericos/mouse-gamer-mad-catz-r-a-t-2-5000dpi-preto-rat-2">
 <i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/perifericos/mouse-gamer-mad-catz-r-a-t-2-5000dpi-preto-rat-2" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/perifericos/display-interativo-wacom-cintiq-pro-13-dth1320ak1" title="Display Interativo Wacom Cintiq Pro 13" ,="" dth1320ak1"="" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/d/t/dth1320ak15.jpg" alt="Display Interativo Wacom Cintiq Pro 13" ,="" dth1320ak1"="">
<div class="save-price">
<div class="price">7%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/perifericos/display-interativo-wacom-cintiq-pro-13-dth1320ak1" title="Display Interativo Wacom Cintiq Pro 13" ,="" dth1320ak1"="">Display Interativo Wacom Cintiq Pro 13", DTH1320AK1</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$7.272,84</strong>
<span class="valor">10x de R$727,28</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$6.400,10</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 1 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/perifericos/display-interativo-wacom-cintiq-pro-13-dth1320ak1">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/perifericos/display-interativo-wacom-cintiq-pro-13-dth1320ak1" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/perifericos/teclado-gamer-logitech-g213-prodigy-rgb-preto-920-009438" title="Teclado Gamer Logitech G213 Prodigy RGB Preto, 920-009438" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/9/2/920-0094381.jpg" alt="Teclado Gamer Logitech G213 Prodigy RGB Preto, 920-009438">
<div class="save-price">
<div class="price">6%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/perifericos/teclado-gamer-logitech-g213-prodigy-rgb-preto-920-009438" title="Teclado Gamer Logitech G213 Prodigy RGB Preto, 920-009438">Teclado Gamer Logitech G213 Prodigy RGB Preto, 920-009438</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$374,89</strong>
<span class="valor">10x de R$37,49</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$329,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 20 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/perifericos/teclado-gamer-logitech-g213-prodigy-rgb-preto-920-009438">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/perifericos/teclado-gamer-logitech-g213-prodigy-rgb-preto-920-009438" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/perifericos/teclado-mecanico-redragon-tvastar-rgb-azul-metalico-k566b-rgb" title="Teclado Mecanico Redragon Tvastar RGB Azul Metalico, K566B-RGB" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/k/5/k566b-rgb.jpg" alt="Teclado Mecanico Redragon Tvastar RGB Azul Metalico, K566B-RGB">
<div class="save-price">
<div class="price">3%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/perifericos/teclado-mecanico-redragon-tvastar-rgb-azul-metalico-k566b-rgb" title="Teclado Mecanico Redragon Tvastar RGB Azul Metalico, K566B-RGB">Teclado Mecanico Redragon Tvastar RGB Azul Metalico, K566B-RGB</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$471,60</strong>
<span class="valor">10x de R$47,16</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$415,01</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
<td class="td-available">
<h4 class="text-available">Apenas 9 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/perifericos/teclado-mecanico-redragon-tvastar-rgb-azul-metalico-k566b-rgb">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/perifericos/teclado-mecanico-redragon-tvastar-rgb-azul-metalico-k566b-rgb" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
<tr class="item">
<td rowspan="2">
<a href="https://www.pichau.com.br/hardware/water-cooler-kwg-crater-m1-240r-rgb" title="Water Cooler KWG Crater M1-240R RGB" class="product-image">
<img src="https://cdn.pichau.com.br/catalog/product/cache/5679dcd765522bc013fe4dc6081ba964/m/1/m1-240r-rgb.jpg" alt="Water Cooler KWG Crater M1-240R RGB">
<div class="save-price">
<div class="price">12%</div>
</div>
</a>
</td>
<td colspan="4">
<h4 class="product-name">
<a href="https://www.pichau.com.br/hardware/water-cooler-kwg-crater-m1-240r-rgb" title="Water Cooler KWG Crater M1-240R RGB">Water Cooler KWG Crater M1-240R RGB</a>
</h4>
</td>
</tr>
<tr class="item">
<td>
<ul class="payment">
<li class="other">
<strong class="regular-price">R$431,71</strong>
<span class="valor">10x de R$43,17</span>
<span class="adicional"><strong>sem juros</strong> no cartão</span>
</li>
<li class="boleto">
<span class="valor">R$379,90</span><br>
<span class="adicional">no boleto com <strong>12% de desconto</strong></span>
</li>
</ul>
</td>
 <td class="td-available">
<h4 class="text-available">Apenas 7 item(s)!</h4>
</td>
<td>
<div class="actions-buttons-daily">
<a class="action tocart bt-list-product" href="https://www.pichau.com.br/hardware/water-cooler-kwg-crater-m1-240r-rgb">
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
Comprar </a>
<a href="https://www.pichau.com.br/hardware/water-cooler-kwg-crater-m1-240r-rgb" class="more-details bt-list-product">
<i class="fa fa-plus" aria-hidden="true"></i>
Detalhes </a>
</div>
</td>

</tr>
</tbody></table>
<script type="text/javascript">
        require(['jquery', 'dailydeal_countdown', 'chosen'], function ($,chosen) {
            $(document).ready(function () {
                $('.timeleft-today').dealcountdown();
                $('#catid').chosen({
                    disable_search : true
                });
                $('#catid').on('change', function() {
                    var self = this;
                    if ($(self).val() != '') {
                        $('#daily-filter').submit();
                    } else {
                        window.location = 'https://www.pichau.com.br/dailydeal/';
                    }
                })
            });
        });
    </script>
</div>
</div>
</div>
</div>
</div><div class="sidebar sidebar-main">
</div></div></main><div class="page-bottom"><div class="content">
</div></div><footer class="page-footer"><div class="footer content"><div class="links-footer">
<ul>
<li><span class="open-tel"> <i class="fa fa-phone"></i> Atendimento <strong>por Telefone</strong> </span></li>
<li class="sac-footer"><a href="http://sac.pichau.com.br" target="_blank"><span><i class="fa fa-comments-o"></i> <strong>SAC</strong></span></a></li>
<li><span class="open-email"><i class="fa fa-envelope"></i> Atendimento <strong>por E-mail</strong></span></li>
<li><a href="https://www.pichau.com.br/contact/" target="_blank"><span><i class="fa fa-envelope"></i> formulário <strong>de contato</strong></span></a></li>
<li class="lojas-fisicas open-fisicas"><span><i class="fa fa-phone"></i> Telefones loja <strong>Física Joinville</strong></span></li>
</ul>
</div>
<div id="modal-telefone" class="modal">
<div class="conteudo-modal"><i class="fa fa-times close-modal"></i>
<h3>Atendimento <strong>Por telefone</strong></h3>
<p>Horários de atendimento: <strong>Segunda a Sexta</strong> 9h às 12h e das 13h às 18h<br> Nosso telefone é <strong class="telefone-modal">(47) 3305-5150</strong></p>
</div>
</div>
<div id="modal-email" class="modal">
<div class="conteudo-modal"><i class="fa fa-times close-modal"></i>
<h3>Atendimento <strong>Por e-mail</strong></h3>
<p>O atendimento da nossa loja funciona de Segunda a Sexta das 8h às 12h e das 13h às 18h.<br>Nosso e-mail é <strong class="telefone-modal">sac@pichau.com.br</strong></p>
</div>
</div>
<div id="modal-loja-fisica" class="modal">
<div class="conteudo-modal"><i class="fa fa-times close-modal"></i>
<h3>Ligue para nossos <strong>Consultores de vendas</strong></h3>
<p>Loja física em joinville</p>
<strong>(47) 3026-6446</strong></div>
</div><div class="block newsletter">
<div class="content">
<div class="title-news">
<i class="fa fa-envelope" aria-hidden="true"></i>
<span>Receba no seu e-mail <strong>Ofertas exclusivas</strong>
</span>
</div>
<form class="form subscribe" novalidate="novalidate" action="https://www.pichau.com.br/newsletter/subscriber/new/" method="post" id="newsletter-validate-detail">
<input name="name" type="name" id="newsletter-name" placeholder="Digite seu nome" data-validate="{required:true}">
<input name="email" type="email" id="newsletter" placeholder="Seu e-mail" data-validate="{required:true, 'validate-email':true}">
<button class="action subscribe" title="Inscrever" type="submit">
Assinar <i class="fa fa-chevron-right" aria-hidden="true"></i>
</button>
<div class="success-msg-news">
Cadastro realizado com sucesso </div>
</form>
</div>
</div><div class="navs"><nav>
<h5>Dúvidas e Suporte</h5>
<ul>
<li><a href="/termos-de-aceite/#comocomprar">Como Comprar</a></li>
<li><a href="/termos-de-aceite/#entrega">Entrega</a></li>
<li><a href="/termos-de-aceite/#formaspagamento">Formas de Pagamento</a></li>
<li><a href="/termos-de-aceite/#garantia">Garantia</a></li>
<li><a href="/politica-de-privacidade">Política de Privacidade</a></li>
<li><a href="/termos-de-aceite/#trocaedevolucao">Troca e Devolução</a></li>
<li><a href="/termos-de-aceite/">Termos de Aceite</a></li>
</ul>
</nav><nav>
<h5>Institucional</h5>
<ul>
<li><a href="/quem-somos/">Quem Somos</a></li>
<li><a class="fancybox-ajax" href="/background/background/maps/">Localização</a></li>
<li><a href="/quem-somos/">Nossas Lojas</a></li>
</ul>
</nav><nav class="nav-hours">
<h5>Horário de Atendimento</h5>
<ul>
<li><strong>Loja Virtual</strong>
<p><strong>Segunda a Sexta</strong></p>
<p>9h às 12h e das 13h às 18h</p>
</li>
<li><strong>Loja Física</strong>
<p>Segunda a Sexta 9h às 19h</p>
<p>Sábado 9h às 13h</p>
</li>
</ul>
</nav><nav class="nav-social nav-social-youtube"><a href="https://www.youtube.com/subscription_center?add_user=pichauinfo" target="_blank"> <img src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/images/footer/icon-pichau-tv.jpg" alt=""> </a>
<div class="yt-subscribe-footer"><a href="https://www.youtube.com/subscription_center?add_user=pichauinfo" target="_blank"> <img src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/images/footer/yt-subscribe.png" alt=""> </a></div>
</nav>
<div class="fb-like-box">
<div class="fb-page fb_iframe_widget" data-href="https://www.facebook.com/PichauInfo/" data-tabs="" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="adapt_container_width=true&amp;app_id=555333651272722&amp;container_width=265&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2FPichauInfo%2F&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false"><span style="vertical-align: bottom; width: 265px; height: 181px;"><iframe name="f3f278494c73b8a" data-testid="fb:page Facebook Social Plugin" title="fb:page Facebook Social Plugin" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" style="border: medium none; visibility: visible; width: 265px; height: 181px;" src="https://www.facebook.com/v2.11/plugins/page.php?adapt_container_width=true&amp;app_id=555333651272722&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D46%23cb%3Dfff199991f8002%26domain%3Dwww.pichau.com.br%26origin%3Dhttps%253A%252F%252Fwww.pichau.com.br%252Ff32ca34bc625f7%26relation%3Dparent.parent&amp;container_width=265&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2FPichauInfo%2F&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false" class="" width="1000px" height="1000px" frameborder="0"></iframe></span></div>
</div>
<hr><nav class="nav-payment" style="margin-right: 9.8%;">
<h5>Formas de Pagamento</h5>
<img src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/images/footer/formas-pagamento/boleto.png"> <img src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/images/footer/formas-pagamento/visa.png"> <img src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/images/footer/formas-pagamento/master.png"> <img src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/images/footer/formas-pagamento/hipercard.png"> <img src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/images/footer/formas-pagamento/paypal.jpg"></nav><nav class="nav-security" style="margin-right: 0;">
<h5>Certificados de Segurança</h5>
<ul>
<li>
<div id="nav-security-1">
<div id="sslblindado" style="width: 122px; height: 81px;"><a href="//www.siteblindado.com/consumidor/selo-ssl/?language=pt&amp;hostname=www.pichau.com.br" target="_blank" title=""> <img src="https://www.siteblindado.com/images/ssl.png" oncontextmenu="alert(&quot;Cópia&nbsp;&nbsp;Proibida&nbsp;por&nbsp;Lei-&nbsp;Site&nbsp;Blindado®&nbsp;é&nbsp;marca&nbsp;registrada&nbsp;de&nbsp;Site&nbsp;Blindado&nbsp;S.A.&quot;)" style="border-style: none"> </a></div>
<script type="text/javascript" src="https://selo.siteblindado.com/sslblindado.js"></script>
</div></li>
<li><img src="https://www.pichau.com.br/static/version1588789306/frontend/Pichau/base/pt_BR/images/footer/certificados/pichau-google.png" alt=""></li>
<li style="width: 110px; margin-top: 0; margin-right: 0;"><a id="seloEbit" href="http://www.ebit.com.br/6261" target="_blank" data-noop="redir(this.href);"> </a></li>
<li class="last" style="margin-right: 0;"><div id="___ratingbadge_0" style="border: 1px none rgb(245, 245, 245); text-indent: 0px; margin: 0px; padding: 0px; background: transparent none repeat scroll 0% 0%; float: none; line-height: normal; font-size: 1px; vertical-align: baseline; display: inline-block; width: 165px; height: 54px;"><iframe ng-non-bindable="" hspace="0" marginheight="0" marginwidth="0" scrolling="no" style="position: static; top: 0px; width: 165px; margin: 0px; border-style: none; display: block; left: 0px; visibility: visible; height: 54px;" tabindex="0" vspace="0" id="I0_1589017244238" name="I0_1589017244238" src="https://www.google.com/shopping/customerreviews/badge?usegapi=1&amp;merchant_id=106916823&amp;position=INLINE&amp;origin=https%3A%2F%2Fwww.pichau.com.br&amp;gsrc=3p&amp;jsh=m%3B%2F_%2Fscs%2Fapps-static%2F_%2Fjs%2Fk%3Doz.gapi.en.jw7XZHvcak8.O%2Fam%3DwQE%2Fd%3D1%2Fct%3Dzgms%2Frs%3DAGLTcCOXtLG11kt9d673FzpjO_GiLUGIQA%2Fm%3D__features__#_methods=onPlusOne%2C_ready%2C_close%2C_open%2C_resizeMe%2C_renderstart%2Concircled%2Cdrefresh%2Cerefresh&amp;id=I0_1589017244238&amp;_gfid=I0_1589017244238&amp;parent=https%3A%2F%2Fwww.pichau.com.br&amp;pfname=&amp;rpctoken=42371562" data-gapiattached="true" title="Google Customer Reviews" width="100%" frameborder="0"></iframe></div></li>
</ul>
</nav></div>
<div class="addres-footer"><img class="logo-footer" src="https://cdn.pichau.com.br/wysiwyg/logo-alt.png" alt="Pichau">
<div class="text-address"><strong>PICHAU INFORMÁTICA® é uma marca registrada de Bazam e Pichau Informatica LTDA | CNPJ: 09.376.495/0001-22</strong><address>Rua Ottokar Doerffel, 1112 - Galpão C8 - Bairro: Atiradores - CEP: 89203-212 - Joinville/SC</address>
<p>Preços e condições de pagamento exclusivos para compras via internet e podem variar nas lojas físicas. Os preços anunciados neste site ou via e-mail promocional podem ser alterados sem prévio aviso. A Pichau Informática, não é responsável por erros descritivos. As fotos contidas nesta página são meramente ilustrativas do produto e podem variar de acordo com o fornecedor/lote do fabricante. Ofertas válidas até o término de nossos estoques. Vendas sujeitas à análise e confirmação de dados.</p>
</div>
<a title="Trezo" href="https://www.trezo.com.br/" target="_blank"><img class="trezo-footer" src="https://cdn.pichau.com.br/wysiwyg/trezo.png" alt="Trezo"></a></div>
<script src="https://apis.google.com/js/platform.js?onload=renderBadge" async="" defer="" gapi_processed="true"></script> <script> window.renderBadge = function() { var ratingBadgeContainer = document.createElement("div"); document.getElementsByClassName( 'nav-security' )[0].getElementsByTagName( 'ul' )[0].getElementsByClassName( 'last' )[0].appendChild(ratingBadgeContainer); window.gapi.load('ratingbadge', function() { window.gapi.ratingbadge.render(ratingBadgeContainer, {"merchant_id": 106916823,"position": "INLINE"}); }); } </script><div id="fb-root" class=" fb_reset"><div style="position: absolute; top: -10000px; width: 0px; height: 0px;"><div></div></div></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11&appId=555333651272722';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
<script>
    require(['jquery'], function () {
		jQuery('.navigation').hover(
			function() {
				jQuery(".nav-sections .navigation #ui-id-1").stop();
				jQuery(".nav-sections .navigation #ui-id-1").slideDown();
			}, function() {
				jQuery(".nav-sections .navigation #ui-id-1").stop();
				jQuery(".nav-sections .navigation #ui-id-1").slideUp();
			}
		);

		jQuery('.nav-sections .navigation .parent').hover(
			function() {
				jQuery(this).find('.submenu').stop();
				jQuery(this).find('.submenu').slideDown();
			}, function() {
				jQuery(this).find('.submenu').stop();
				jQuery(this).find('.submenu').slideUp();
			}
		);


		jQuery('.open-tel').on("click", function(){
			jQuery('#modal-telefone').fadeIn('fast');
		});
		jQuery('.open-email').on("click", function(){
			jQuery('#modal-email').fadeIn('fast');
		});
		jQuery('.open-fisicas').on("click", function(){
			jQuery('#modal-loja-fisica').fadeIn('fast');
		});
		jQuery('.close-modal').on("click", function(){
			jQuery('.modal').fadeOut('fast');
		});

		jQuery('.modal').on("click", function(){
			jQuery(this).fadeOut('fast');
		});

		jQuery('.conteudo-modal').on("click", function(e){
			e.stopPropagation();
		});

		setInterval(function() {
		  jQuery('.slider-home .banner-items > li:first')
		    .fadeOut(1000)
		    .next()
		    .fadeIn(1000)
		    .end()
		    .appendTo('.slider-home .banner-items');
		}, 3000);
    });


</script>
<script type="text/javascript">var fc_CSS=document.createElement('link');fc_CSS.setAttribute('rel','stylesheet');var fc_isSecured = (window.location && window.location.protocol == 'https:');var fc_lang = document.getElementsByTagName('html')[0].getAttribute('lang'); var fc_rtlLanguages = ['ar','he']; var fc_rtlSuffix = (fc_rtlLanguages.indexOf(fc_lang) >= 0) ? '-rtl' : '';fc_CSS.setAttribute('type','text/css');fc_CSS.setAttribute('href',((fc_isSecured)? 'https://d36mpcpuzc4ztk.cloudfront.net':'http://assets1.chat.freshdesk.com')+'/css/visitor'+fc_rtlSuffix+'.css');document.getElementsByTagName('head')[0].appendChild(fc_CSS);var fc_JS=document.createElement('script'); fc_JS.type='text/javascript'; fc_JS.defer=true;fc_JS.src=((fc_isSecured)?'https://d36mpcpuzc4ztk.cloudfront.net':'http://assets.chat.freshdesk.com')+'/js/visitor.js';(document.body?document.body:document.getElementsByTagName('head')[0]).appendChild(fc_JS);window.livechat_setting= 'eyJ3aWRnZXRfc2l0ZV91cmwiOiJwaWNoYXUuZnJlc2hkZXNrLmNvbSIsInByb2R1Y3RfaWQiOm51bGwsIm5hbWUiOiJQaWNoYXUiLCJ3aWRnZXRfZXh0ZXJuYWxfaWQiOm51bGwsIndpZGdldF9pZCI6IjIwMWVkNmZkLWE2MjUtNDQ0NS05NDIyLWZhNzE4YmIzMzc3MSIsInNob3dfb25fcG9ydGFsIjp0cnVlLCJwb3J0YWxfbG9naW5fcmVxdWlyZWQiOmZhbHNlLCJsYW5ndWFnZSI6InB0LUJSIiwidGltZXpvbmUiOiJCcmFzaWxpYSIsImlkIjoyMjAwMDA0NDQxMSwibWFpbl93aWRnZXQiOjEsImZjX2lkIjoiM2Y0YjIzN2E5ZThjZmRmMzE4NTU4ODZmMmI0NTZmOTMiLCJzaG93IjoxLCJyZXF1aXJlZCI6MiwiaGVscGRlc2tuYW1lIjoiUGljaGF1IiwibmFtZV9sYWJlbCI6Ik5vbWUiLCJtZXNzYWdlX2xhYmVsIjoiTWVuc2FnZW0iLCJwaG9uZV9sYWJlbCI6IlRlbGVmb25lIiwidGV4dGZpZWxkX2xhYmVsIjoiQ2FtcG8gZGUgdGV4dG8iLCJkcm9wZG93bl9sYWJlbCI6Ik1lbnUgc3VzcGVuc28iLCJ3ZWJ1cmwiOiJwaWNoYXUuZnJlc2hkZXNrLmNvbSIsIm5vZGV1cmwiOiJjaGF0LmZyZXNoZGVzay5jb20iLCJkZWJ1ZyI6MSwibWUiOiJFdSIsImV4cGlyeSI6MCwiZW52aXJvbm1lbnQiOiJwcm9kdWN0aW9uIiwiZW5kX2NoYXRfdGhhbmtfbXNnIjoiT2JyaWdhZG8hIiwiZW5kX2NoYXRfZW5kX3RpdGxlIjoiRmltIiwiZW5kX2NoYXRfY2FuY2VsX3RpdGxlIjoiQ2FuY2VsYXIiLCJzaXRlX2lkIjoiM2Y0YjIzN2E5ZThjZmRmMzE4NTU4ODZmMmI0NTZmOTMiLCJhY3RpdmUiOjEsInJvdXRpbmciOm51bGwsInByZWNoYXRfZm9ybSI6MSwiYnVzaW5lc3NfY2FsZW5kYXIiOm51bGwsInByb2FjdGl2ZV9jaGF0IjowLCJwcm9hY3RpdmVfdGltZSI6OTAsInNpdGVfdXJsIjoicGljaGF1LmZyZXNoZGVzay5jb20iLCJleHRlcm5hbF9pZCI6bnVsbCwiZGVsZXRlZCI6MCwibW9iaWxlIjoxLCJhY2NvdW50X2lkIjpudWxsLCJjcmVhdGVkX2F0IjoiMjAxNy0wMy0xNVQxOTowODo1Ny4wMDBaIiwidXBkYXRlZF9hdCI6IjIwMTgtMDMtMTNUMTk6NTQ6NDIuMDAwWiIsImNiRGVmYXVsdE1lc3NhZ2VzIjp7ImNvYnJvd3Npbmdfc3RhcnRfbXNnIjoiWW91ciBzY3JlZW5zaGFyZSBzZXNzaW9uIGhhcyBzdGFydGVkIiwiY29icm93c2luZ19zdG9wX21zZyI6IllvdXIgc2NyZWVuc2hhcmluZyBzZXNzaW9uIGhhcyBlbmRlZCIsImNvYnJvd3NpbmdfZGVueV9tc2ciOiJZb3VyIHJlcXVlc3Qgd2FzIGRlY2xpbmVkIiwiY29icm93c2luZ19hZ2VudF9idXN5IjoiQWdlbnQgaXMgaW4gc2NyZWVuIHNoYXJlIHNlc3Npb24gd2l0aCBjdXN0b21lciIsImNvYnJvd3Npbmdfdmlld2luZ19zY3JlZW4iOiJZb3UgYXJlIHZpZXdpbmcgdGhlIHZpc2l0b3LigJlzIHNjcmVlbiAiLCJjb2Jyb3dzaW5nX2NvbnRyb2xsaW5nX3NjcmVlbiI6IllvdSBoYXZlIGFjY2VzcyB0byB2aXNpdG9y4oCZcyBzY3JlZW4gIiwiY29icm93c2luZ19yZXF1ZXN0X2NvbnRyb2wiOiJSZXF1ZXN0IHZpc2l0b3IgZm9yIHNjcmVlbiBhY2Nlc3MgIiwiY29icm93c2luZ19naXZlX3Zpc2l0b3JfY29udHJvbCI6IkdpdmUgYWNjZXNzIGJhY2sgdG8gdmlzaXRvciAiLCJjb2Jyb3dzaW5nX3N0b3BfcmVxdWVzdCI6IkVuZCB5b3VyIHNjcmVlbnNoYXJpbmcgc2Vzc2lvbiIsImNvYnJvd3NpbmdfcmVxdWVzdF9jb250cm9sX3JlamVjdGVkIjoiWW91ciByZXF1ZXN0IHdhcyBkZWNsaW5lZCIsImNvYnJvd3NpbmdfY2FuY2VsX3Zpc2l0b3JfbXNnIjoiU2NyZWVuc2hhcmluZyBpcyBjdXJyZW50bHkgdW5hdmFpbGFibGUiLCJjb2Jyb3dzaW5nX2FnZW50X3JlcXVlc3RfY29udHJvbCI6IkFnZW50IGlzIHJlcXVlc3RpbmcgYWNjZXNzIHRvIHlvdXIgc2NyZWVuIiwiY2Jfdmlld2luZ19zY3JlZW5fdmkiOiJBZ2VudCBjYW4gdmlldyB5b3VyIHNjcmVlbiAiLCJjYl9jb250cm9sbGluZ19zY3JlZW5fdmkiOiJBZ2VudCBoYXMgYWNjZXNzIHRvIHlvdXIgc2NyZWVuICIsImNiX3ZpZXdfbW9kZV9zdWJ0ZXh0IjoiWW91ciBhY2Nlc3MgdG8gdGhlIHNjcmVlbiBoYXMgYmVlbiB3aXRoZHJhd24gIiwiY2JfZ2l2ZV9jb250cm9sX3ZpIjoiQWxsb3cgYWdlbnQgdG8gYWNjZXNzIHlvdXIgc2NyZWVuICIsImNiX3Zpc2l0b3Jfc2Vzc2lvbl9yZXF1ZXN0IjoiQWdlbnQgc2Vla3MgYWNjZXNzIHRvIHlvdXIgc2NyZWVuICJ9fQ==';</script>
</div></footer>
<script type="text/javascript">
		var promotionData = [];
	</script>
<script type="application/ld+json">{"@context":"http:\/\/schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"https:\/\/www.pichau.com.br\/","name":"Home"}}]}</script><script type="application/ld+json">{"@context":"http:\/\/schema.org","@type":"WebSite","url":"https:\/\/www.pichau.com.br\/","name":"Pichau Info","potentialAction":{"@type":"SearchAction","target":"https:\/\/www.pichau.com.br\/catalogsearch\/result\/?q={search_term_string}","query-input":"required name=search_term_string"}}</script><script type="application/ld+json">{"@context":"http:\/\/schema.org","@type":"Organization","url":"https:\/\/www.pichau.com.br\/","name":"Pichau Info","logo":"https:\/\/www.pichau.com.br\/static\/version1586195170\/frontend\/Pichau\/base\/pt_BR\/images\/logo-pichau.png","description":"Na Pichau voc\u00ea encontra a maior linha Gamer do Brasil de Computadores, Placas de V\u00eddeo, Cadeiras, Processadores, Monitores e muito mais.","contactPoint":[{"@type":"ContactPoint","telephone":"+55-47-3305-5150","contactType":"sales"},{"@type":"ContactPoint","telephone":"sac@pichau.com.br","contactType":"technical support"},{"@type":"ContactPoint","telephone":"sac@pichau.com.br","contactType":"customer service"}],"address":{"addressCountry":"Brasil","postalCode":"89201-300","addressRegion":"SC","addressLocality":"Joinville"},"sameAs":["pichauinfo","pichauinfo","pichauoficial","pichauinfo"]}</script></div><script type="text/javascript" defer="" src="https://d36mpcpuzc4ztk.cloudfront.net/js/visitor.js"></script> <script>
        require(['jquery','weltpixel_persistentLayer','weltpixel_gtm', 'Magento_Customer/js/customer-data'],
            function ($, wpPersDl ,wpgtm, customerData) {
                $( document ).ajaxComplete(function( event, xhr, settings ) {
                    if (settings.url.search('/customer\/section\/load/') > 0) {
                        var response = xhr.responseJSON;
                        if (response.gtm) {
                            var dataLayerData = $.parseJSON(response.gtm.datalayer);
                            for (index in dataLayerData) {
                                window.dataLayer.push(dataLayerData[index]);
                            }
                        }
                    }
                });
                var wpPersDlOptions = {'storageExpiryTime' : 30 };
                var wpGtmOptions = {
                    'enabled' : 0,
                    'persDataLayer' : wpPersDl
                };
                wpPersDl.init(wpPersDlOptions);
                wpgtm.trackPromotion(wpGtmOptions);
                customerData.invalidate(['gtm']);
            });
    </script>
<script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","licenseKey":"NRJS-199a4e80efcd30d8013","applicationID":"508691749","transactionName":"YlNbMBRVXxAAWkIMClsZeAcSXV4NTl1XDAlMUlwFChtYDQVcTkoMW1JcHA==","queueTime":0,"applicationTime":5971,"atts":"ThRYRlxPTB4=","errorBeacon":"bam.nr-data.net","agent":""}</script>

<div class="modals-wrapper"><aside role="dialog" class="modal-popup popup-authentication
               modal-slide
               _inner-scroll" aria-describedby="modal-content-14" data-role="modal" data-type="popup" tabindex="0">
<div data-role="focusable-start" tabindex="0"></div>
<div class="modal-inner-wrap" data-role="focusable-scope">
<header class="modal-header">

<button class="action-close" data-role="closeBtn" type="button">
<span>Fechar</span>
</button>
</header>
<div id="modal-content-14" class="modal-content" data-role="content"><div class="block-authentication" data-bind="afterRender: setModalElement, blockLoader: isLoading" style="">
<div class="block block-new-customer" data-bind="attr: {'data-label': $t('or')}" data-label="ou">
<div class="block-title">
<strong id="block-new-customer-heading" role="heading" aria-level="2" data-bind="i18n: 'Checkout as a new customer'">Criar nova conta</strong>
</div>
<div class="block-content" aria-labelledby="block-new-customer-heading">
<p data-bind="i18n: 'Creating an account has many benefits:'">Criando uma conta você terá as seguintes vantagens:</p>
<ul>
<li data-bind="i18n: 'See order and shipping status'">Ver status da compra e da entrega</li>
<li data-bind="i18n: 'Track order history'">Ver histórico de pedidos</li>
<li data-bind="i18n: 'Check out faster'">Finalizar compra mais rápido</li>
</ul>
<div class="actions-toolbar">
<div class="primary">
<a class="action action-register primary" data-bind="attr: {href: registerUrl}" href="https://www.pichau.com.br/customer/account/create/">
<span data-bind="i18n: 'Create an Account'">Cadastre-se</span>
</a>
</div>
</div>
</div>
</div>
<div class="block block-customer-login" data-bind="attr: {'data-label': $t('or')}" data-label="ou">
<div class="block-title">
<strong id="block-customer-login-heading" role="heading" aria-level="2" data-bind="i18n: 'Checkout using your account'">Já sou cliente</strong>
</div>
<!-- ko foreach: getRegion('messages') -->
<!-- ko template: getTemplate() -->
<div data-role="checkout-messages" class="messages" data-bind="visible: isVisible(), click: removeAll" style="display: none;">
<!-- ko foreach: messageContainer.getErrorMessages() --><!--/ko-->
<!-- ko foreach: messageContainer.getSuccessMessages() --><!--/ko-->
</div>
<!-- /ko -->
<!--/ko-->
<!-- ko foreach: getRegion('before') -->
<!-- ko template: getTemplate() -->
<!-- ko if: isActive() --><!-- /ko --><!-- /ko -->
<!-- /ko -->
<div class="block-content" aria-labelledby="block-customer-login-heading">
<form class="form form-login" method="post" data-bind="event: {submit: login }" id="login-form">
<div class="fieldset login" data-bind="attr: {'data-hasrequired': $t('* Required Fields')}" data-hasrequired="* Campos obrigatórios">
<div class="field email required">
<label class="label" for="customer-email"><span data-bind="i18n: 'Email Address'">Email</span></label>
<div class="control">
<input name="username" id="customer-email" type="email" class="input-text" data-mage-init="{&quot;mage/trim-input&quot;:{}}" data-bind="attr: {autocomplete: autocomplete}" data-validate="{required:true, 'validate-email':true}" autocomplete="off">
</div>
</div>
<div class="field password required">
<label for="pass" class="label"><span data-bind="i18n: 'Password'">Senha</span></label>
<div class="control">
<input name="password" type="password" class="input-text" id="pass" data-bind="attr: {autocomplete: autocomplete}" data-validate="{required:true}" autocomplete="off">
</div>
</div>
<!-- ko foreach: getRegion('additional-login-form-fields') -->
<!-- ko template: getTemplate() -->
<!-- ko if: (getIsVisible())-->
<input name="captcha_form_id" type="hidden" data-bind="value: formId,  attr: {'data-scope': dataScope}" value="user_login" data-scope="">
<!-- /ko -->
<!-- ko if: (isRequired() && getIsVisible())--><!-- /ko -->
<!-- /ko -->
<!-- /ko -->
<div class="actions-toolbar">
<input name="context" type="hidden" value="checkout">
<div class="primary">
<button type="submit" class="action action-login secondary" name="send" id="send2">
<span data-bind="i18n: 'Sign In'">Entrar</span>
</button>
</div>
<div class="secondary">
<a class="action" data-bind="attr: {href: forgotPasswordUrl}" href="https://www.pichau.com.br/customer/account/forgotpassword/">
<span data-bind="i18n: 'Forgot Your Password?'">Esqueceu sua senha?</span>
</a>
</div>
</div>
</div>
</form>
</div>
</div>
</div></div>

</div>
<div data-role="focusable-end" tabindex="0"></div>
</aside></div></body></html>`
