// ==================================================
// fancyBox v3.5.7
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2019 fancyApps
//
// ==================================================
!function(t,e,n,o){"use strict";function i(t,e){var o,i,a,s=[],r=0;t&&t.isDefaultPrevented()||(t.preventDefault(),e=e||{},t&&t.data&&(e=h(t.data.options,e)),o=e.$target||n(t.currentTarget).trigger("blur"),(a=n.fancybox.getInstance())&&a.$trigger&&a.$trigger.is(o)||(e.selector?s=n(e.selector):(i=o.attr("data-fancybox")||"",i?(s=t.data?t.data.items:[],s=s.length?s.filter('[data-fancybox="'+i+'"]'):n('[data-fancybox="'+i+'"]')):s=[o]),r=n(s).index(o),r<0&&(r=0),a=n.fancybox.open(s,e,r),a.$trigger=o))}if(t.console=t.console||{info:function(t){}},n){if(n.fn.fancybox)return void console.info("fancyBox already initialized");var a={closeExisting:!1,loop:!1,gutter:50,keyboard:!0,preventCaptionOverlap:!0,arrows:!0,infobar:!0,smallBtn:"auto",toolbar:"auto",buttons:["zoom","slideShow","thumbs","close"],idleTime:3,protect:!1,modal:!1,image:{preload:!1},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},video:{tpl:'<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',format:"",autoStart:!0},defaultType:"image",animationEffect:"zoom",animationDuration:366,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}</p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',arrowLeft:'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',arrowRight:'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',smallBtn:'<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'},parentEl:"body",hideScrollbar:!0,autoFocus:!0,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:3e3},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"},wheel:"auto",onInit:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop,clickContent:function(t,e){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{preventCaptionOverlap:!1,idleTime:!1,clickContent:function(t,e){return"image"===t.type&&"toggleControls"},clickSlide:function(t,e){return"image"===t.type?"toggleControls":"close"},dblclickContent:function(t,e){return"image"===t.type&&"zoom"},dblclickSlide:function(t,e){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails",DOWNLOAD:"Download",SHARE:"Share",ZOOM:"Zoom"},de:{CLOSE:"Schlie&szlig;en",NEXT:"Weiter",PREV:"Zur&uuml;ck",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder",DOWNLOAD:"Herunterladen",SHARE:"Teilen",ZOOM:"Vergr&ouml;&szlig;ern"}}},s=n(t),r=n(e),c=0,l=function(t){return t&&t.hasOwnProperty&&t instanceof n},d=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),u=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),f=function(){var t,n=e.createElement("fakeelement"),o={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in o)if(void 0!==n.style[t])return o[t];return"transitionend"}(),p=function(t){return t&&t.length&&t[0].offsetHeight},h=function(t,e){var o=n.extend(!0,{},t,e);return n.each(e,function(t,e){n.isArray(e)&&(o[t]=e)}),o},g=function(t){var o,i;return!(!t||t.ownerDocument!==e)&&(n(".fancybox-container").css("pointer-events","none"),o={x:t.getBoundingClientRect().left+t.offsetWidth/2,y:t.getBoundingClientRect().top+t.offsetHeight/2},i=e.elementFromPoint(o.x,o.y)===t,n(".fancybox-container").css("pointer-events",""),i)},b=function(t,e,o){var i=this;i.opts=h({index:o},n.fancybox.defaults),n.isPlainObject(e)&&(i.opts=h(i.opts,e)),n.fancybox.isMobile&&(i.opts=h(i.opts,i.opts.mobile)),i.id=i.opts.id||++c,i.currIndex=parseInt(i.opts.index,10)||0,i.prevIndex=null,i.prevPos=null,i.currPos=0,i.firstRun=!0,i.group=[],i.slides={},i.addContent(t),i.group.length&&i.init()};n.extend(b.prototype,{init:function(){var o,i,a=this,s=a.group[a.currIndex],r=s.opts;r.closeExisting&&n.fancybox.close(!0),n("body").addClass("fancybox-active"),!n.fancybox.getInstance()&&!1!==r.hideScrollbar&&!n.fancybox.isMobile&&e.body.scrollHeight>t.innerHeight&&(n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:'+(t.innerWidth-e.documentElement.clientWidth)+"px;}</style>"),n("body").addClass("compensate-for-scrollbar")),i="",n.each(r.buttons,function(t,e){i+=r.btnTpl[e]||""}),o=n(a.translate(a,r.baseTpl.replace("{{buttons}}",i).replace("{{arrows}}",r.btnTpl.arrowLeft+r.btnTpl.arrowRight))).attr("id","fancybox-container-"+a.id).addClass(r.baseClass).data("FancyBox",a).appendTo(r.parentEl),a.$refs={container:o},["bg","inner","infobar","toolbar","stage","caption","navigation"].forEach(function(t){a.$refs[t]=o.find(".fancybox-"+t)}),a.trigger("onInit"),a.activate(),a.jumpTo(a.currIndex)},translate:function(t,e){var n=t.opts.i18n[t.opts.lang]||t.opts.i18n.en;return e.replace(/\{\{(\w+)\}\}/g,function(t,e){return void 0===n[e]?t:n[e]})},addContent:function(t){var e,o=this,i=n.makeArray(t);n.each(i,function(t,e){var i,a,s,r,c,l={},d={};n.isPlainObject(e)?(l=e,d=e.opts||e):"object"===n.type(e)&&n(e).length?(i=n(e),d=i.data()||{},d=n.extend(!0,{},d,d.options),d.$orig=i,l.src=o.opts.src||d.src||i.attr("href"),l.type||l.src||(l.type="inline",l.src=e)):l={type:"html",src:e+""},l.opts=n.extend(!0,{},o.opts,d),n.isArray(d.buttons)&&(l.opts.buttons=d.buttons),n.fancybox.isMobile&&l.opts.mobile&&(l.opts=h(l.opts,l.opts.mobile)),a=l.type||l.opts.type,r=l.src||"",!a&&r&&((s=r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))?(a="video",l.opts.video.format||(l.opts.video.format="video/"+("ogv"===s[1]?"ogg":s[1]))):r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?a="image":r.match(/\.(pdf)((\?|#).*)?$/i)?(a="iframe",l=n.extend(!0,l,{contentType:"pdf",opts:{iframe:{preload:!1}}})):"#"===r.charAt(0)&&(a="inline")),a?l.type=a:o.trigger("objectNeedsType",l),l.contentType||(l.contentType=n.inArray(l.type,["html","inline","ajax"])>-1?"html":l.type),l.index=o.group.length,"auto"==l.opts.smallBtn&&(l.opts.smallBtn=n.inArray(l.type,["html","inline","ajax"])>-1),"auto"===l.opts.toolbar&&(l.opts.toolbar=!l.opts.smallBtn),l.$thumb=l.opts.$thumb||null,l.opts.$trigger&&l.index===o.opts.index&&(l.$thumb=l.opts.$trigger.find("img:first"),l.$thumb.length&&(l.opts.$orig=l.opts.$trigger)),l.$thumb&&l.$thumb.length||!l.opts.$orig||(l.$thumb=l.opts.$orig.find("img:first")),l.$thumb&&!l.$thumb.length&&(l.$thumb=null),l.thumb=l.opts.thumb||(l.$thumb?l.$thumb[0].src:null),"function"===n.type(l.opts.caption)&&(l.opts.caption=l.opts.caption.apply(e,[o,l])),"function"===n.type(o.opts.caption)&&(l.opts.caption=o.opts.caption.apply(e,[o,l])),l.opts.caption instanceof n||(l.opts.caption=void 0===l.opts.caption?"":l.opts.caption+""),"ajax"===l.type&&(c=r.split(/\s+/,2),c.length>1&&(l.src=c.shift(),l.opts.filter=c.shift())),l.opts.modal&&(l.opts=n.extend(!0,l.opts,{trapFocus:!0,infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),o.group.push(l)}),Object.keys(o.slides).length&&(o.updateControls(),(e=o.Thumbs)&&e.isActive&&(e.create(),e.focus()))},addEvents:function(){var e=this;e.removeEvents(),e.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),e.close(t)}).on("touchstart.fb-prev click.fb-prev","[data-fancybox-prev]",function(t){t.stopPropagation(),t.preventDefault(),e.previous()}).on("touchstart.fb-next click.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),e.next()}).on("click.fb","[data-fancybox-zoom]",function(t){e[e.isScaledDown()?"scaleToActual":"scaleToFit"]()}),s.on("orientationchange.fb resize.fb",function(t){t&&t.originalEvent&&"resize"===t.originalEvent.type?(e.requestId&&u(e.requestId),e.requestId=d(function(){e.update(t)})):(e.current&&"iframe"===e.current.type&&e.$refs.stage.hide(),setTimeout(function(){e.$refs.stage.show(),e.update(t)},n.fancybox.isMobile?600:250))}),r.on("keydown.fb",function(t){var o=n.fancybox?n.fancybox.getInstance():null,i=o.current,a=t.keyCode||t.which;if(9==a)return void(i.opts.trapFocus&&e.focus(t));if(!(!i.opts.keyboard||t.ctrlKey||t.altKey||t.shiftKey||n(t.target).is("input,textarea,video,audio,select")))return 8===a||27===a?(t.preventDefault(),void e.close(t)):37===a||38===a?(t.preventDefault(),void e.previous()):39===a||40===a?(t.preventDefault(),void e.next()):void e.trigger("afterKeydown",t,a)}),e.group[e.currIndex].opts.idleTime&&(e.idleSecondsCounter=0,r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(t){e.idleSecondsCounter=0,e.isIdle&&e.showControls(),e.isIdle=!1}),e.idleInterval=t.setInterval(function(){++e.idleSecondsCounter>=e.group[e.currIndex].opts.idleTime&&!e.isDragging&&(e.isIdle=!0,e.idleSecondsCounter=0,e.hideControls())},1e3))},removeEvents:function(){var e=this;s.off("orientationchange.fb resize.fb"),r.off("keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),e.idleInterval&&(t.clearInterval(e.idleInterval),e.idleInterval=null)},previous:function(t){return this.jumpTo(this.currPos-1,t)},next:function(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function(t,e){var o,i,a,s,r,c,l,d,u,f=this,h=f.group.length;if(!(f.isDragging||f.isClosing||f.isAnimating&&f.firstRun)){if(t=parseInt(t,10),!(a=f.current?f.current.opts.loop:f.opts.loop)&&(t<0||t>=h))return!1;if(o=f.firstRun=!Object.keys(f.slides).length,r=f.current,f.prevIndex=f.currIndex,f.prevPos=f.currPos,s=f.createSlide(t),h>1&&((a||s.index<h-1)&&f.createSlide(t+1),(a||s.index>0)&&f.createSlide(t-1)),f.current=s,f.currIndex=s.index,f.currPos=s.pos,f.trigger("beforeShow",o),f.updateControls(),s.forcedDuration=void 0,n.isNumeric(e)?s.forcedDuration=e:e=s.opts[o?"animationDuration":"transitionDuration"],e=parseInt(e,10),i=f.isMoved(s),s.$slide.addClass("fancybox-slide--current"),o)return s.opts.animationEffect&&e&&f.$refs.container.css("transition-duration",e+"ms"),f.$refs.container.addClass("fancybox-is-open").trigger("focus"),f.loadSlide(s),void f.preload("image");c=n.fancybox.getTranslate(r.$slide),l=n.fancybox.getTranslate(f.$refs.stage),n.each(f.slides,function(t,e){n.fancybox.stop(e.$slide,!0)}),r.pos!==s.pos&&(r.isComplete=!1),r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),i?(u=c.left-(r.pos*c.width+r.pos*r.opts.gutter),n.each(f.slides,function(t,o){o.$slide.removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")});var i=o.pos*c.width+o.pos*o.opts.gutter;n.fancybox.setTranslate(o.$slide,{top:0,left:i-l.left+u}),o.pos!==s.pos&&o.$slide.addClass("fancybox-slide--"+(o.pos>s.pos?"next":"previous")),p(o.$slide),n.fancybox.animate(o.$slide,{top:0,left:(o.pos-s.pos)*c.width+(o.pos-s.pos)*o.opts.gutter},e,function(){o.$slide.css({transform:"",opacity:""}).removeClass("fancybox-slide--next fancybox-slide--previous"),o.pos===f.currPos&&f.complete()})})):e&&s.opts.transitionEffect&&(d="fancybox-animated fancybox-fx-"+s.opts.transitionEffect,r.$slide.addClass("fancybox-slide--"+(r.pos>s.pos?"next":"previous")),n.fancybox.animate(r.$slide,d,e,function(){r.$slide.removeClass(d).removeClass("fancybox-slide--next fancybox-slide--previous")},!1)),s.isLoaded?f.revealContent(s):f.loadSlide(s),f.preload("image")}},createSlide:function(t){var e,o,i=this;return o=t%i.group.length,o=o<0?i.group.length+o:o,!i.slides[t]&&i.group[o]&&(e=n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage),i.slides[t]=n.extend(!0,{},i.group[o],{pos:t,$slide:e,isLoaded:!1}),i.updateSlide(i.slides[t])),i.slides[t]},scaleToActual:function(t,e,o){var i,a,s,r,c,l=this,d=l.current,u=d.$content,f=n.fancybox.getTranslate(d.$slide).width,p=n.fancybox.getTranslate(d.$slide).height,h=d.width,g=d.height;l.isAnimating||l.isMoved()||!u||"image"!=d.type||!d.isLoaded||d.hasError||(l.isAnimating=!0,n.fancybox.stop(u),t=void 0===t?.5*f:t,e=void 0===e?.5*p:e,i=n.fancybox.getTranslate(u),i.top-=n.fancybox.getTranslate(d.$slide).top,i.left-=n.fancybox.getTranslate(d.$slide).left,r=h/i.width,c=g/i.height,a=.5*f-.5*h,s=.5*p-.5*g,h>f&&(a=i.left*r-(t*r-t),a>0&&(a=0),a<f-h&&(a=f-h)),g>p&&(s=i.top*c-(e*c-e),s>0&&(s=0),s<p-g&&(s=p-g)),l.updateCursor(h,g),n.fancybox.animate(u,{top:s,left:a,scaleX:r,scaleY:c},o||366,function(){l.isAnimating=!1}),l.SlideShow&&l.SlideShow.isActive&&l.SlideShow.stop())},scaleToFit:function(t){var e,o=this,i=o.current,a=i.$content;o.isAnimating||o.isMoved()||!a||"image"!=i.type||!i.isLoaded||i.hasError||(o.isAnimating=!0,n.fancybox.stop(a),e=o.getFitPos(i),o.updateCursor(e.width,e.height),n.fancybox.animate(a,{top:e.top,left:e.left,scaleX:e.width/a.width(),scaleY:e.height/a.height()},t||366,function(){o.isAnimating=!1}))},getFitPos:function(t){var e,o,i,a,s=this,r=t.$content,c=t.$slide,l=t.width||t.opts.width,d=t.height||t.opts.height,u={};return!!(t.isLoaded&&r&&r.length)&&(e=n.fancybox.getTranslate(s.$refs.stage).width,o=n.fancybox.getTranslate(s.$refs.stage).height,e-=parseFloat(c.css("paddingLeft"))+parseFloat(c.css("paddingRight"))+parseFloat(r.css("marginLeft"))+parseFloat(r.css("marginRight")),o-=parseFloat(c.css("paddingTop"))+parseFloat(c.css("paddingBottom"))+parseFloat(r.css("marginTop"))+parseFloat(r.css("marginBottom")),l&&d||(l=e,d=o),i=Math.min(1,e/l,o/d),l*=i,d*=i,l>e-.5&&(l=e),d>o-.5&&(d=o),"image"===t.type?(u.top=Math.floor(.5*(o-d))+parseFloat(c.css("paddingTop")),u.left=Math.floor(.5*(e-l))+parseFloat(c.css("paddingLeft"))):"video"===t.contentType&&(a=t.opts.width&&t.opts.height?l/d:t.opts.ratio||16/9,d>l/a?d=l/a:l>d*a&&(l=d*a)),u.width=l,u.height=d,u)},update:function(t){var e=this;n.each(e.slides,function(n,o){e.updateSlide(o,t)})},updateSlide:function(t,e){var o=this,i=t&&t.$content,a=t.width||t.opts.width,s=t.height||t.opts.height,r=t.$slide;o.adjustCaption(t),i&&(a||s||"video"===t.contentType)&&!t.hasError&&(n.fancybox.stop(i),n.fancybox.setTranslate(i,o.getFitPos(t)),t.pos===o.currPos&&(o.isAnimating=!1,o.updateCursor())),o.adjustLayout(t),r.length&&(r.trigger("refresh"),t.pos===o.currPos&&o.$refs.toolbar.add(o.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar",r.get(0).scrollHeight>r.get(0).clientHeight)),o.trigger("onUpdate",t,e)},centerSlide:function(t){var e=this,o=e.current,i=o.$slide;!e.isClosing&&o&&(i.siblings().css({transform:"",opacity:""}),i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),n.fancybox.animate(i,{top:0,left:0,opacity:1},void 0===t?0:t,function(){i.css({transform:"",opacity:""}),o.isComplete||e.complete()},!1))},isMoved:function(t){var e,o,i=t||this.current;return!!i&&(o=n.fancybox.getTranslate(this.$refs.stage),e=n.fancybox.getTranslate(i.$slide),!i.$slide.hasClass("fancybox-animated")&&(Math.abs(e.top-o.top)>.5||Math.abs(e.left-o.left)>.5))},updateCursor:function(t,e){var o,i,a=this,s=a.current,r=a.$refs.container;s&&!a.isClosing&&a.Guestures&&(r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),o=a.canPan(t,e),i=!!o||a.isZoomable(),r.toggleClass("fancybox-is-zoomable",i),n("[data-fancybox-zoom]").prop("disabled",!i),o?r.addClass("fancybox-can-pan"):i&&("zoom"===s.opts.clickContent||n.isFunction(s.opts.clickContent)&&"zoom"==s.opts.clickContent(s))?r.addClass("fancybox-can-zoomIn"):s.opts.touch&&(s.opts.touch.vertical||a.group.length>1)&&"video"!==s.contentType&&r.addClass("fancybox-can-swipe"))},isZoomable:function(){var t,e=this,n=e.current;if(n&&!e.isClosing&&"image"===n.type&&!n.hasError){if(!n.isLoaded)return!0;if((t=e.getFitPos(n))&&(n.width>t.width||n.height>t.height))return!0}return!1},isScaledDown:function(t,e){var o=this,i=!1,a=o.current,s=a.$content;return void 0!==t&&void 0!==e?i=t<a.width&&e<a.height:s&&(i=n.fancybox.getTranslate(s),i=i.width<a.width&&i.height<a.height),i},canPan:function(t,e){var o=this,i=o.current,a=null,s=!1;return"image"===i.type&&(i.isComplete||t&&e)&&!i.hasError&&(s=o.getFitPos(i),void 0!==t&&void 0!==e?a={width:t,height:e}:i.isComplete&&(a=n.fancybox.getTranslate(i.$content)),a&&s&&(s=Math.abs(a.width-s.width)>1.5||Math.abs(a.height-s.height)>1.5)),s},loadSlide:function(t){var e,o,i,a=this;if(!t.isLoading&&!t.isLoaded){if(t.isLoading=!0,!1===a.trigger("beforeLoad",t))return t.isLoading=!1,!1;switch(e=t.type,o=t.$slide,o.off("refresh").trigger("onReset").addClass(t.opts.slideClass),e){case"image":a.setImage(t);break;case"iframe":a.setIframe(t);break;case"html":a.setContent(t,t.src||t.content);break;case"video":a.setContent(t,t.opts.video.tpl.replace(/\{\{src\}\}/gi,t.src).replace("{{format}}",t.opts.videoFormat||t.opts.video.format||"").replace("{{poster}}",t.thumb||""));break;case"inline":n(t.src).length?a.setContent(t,n(t.src)):a.setError(t);break;case"ajax":a.showLoading(t),i=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,n){"success"===n&&a.setContent(t,e)},error:function(e,n){e&&"abort"!==n&&a.setError(t)}})),o.one("onReset",function(){i.abort()});break;default:a.setError(t)}return!0}},setImage:function(t){var o,i=this;setTimeout(function(){var e=t.$image;i.isClosing||!t.isLoading||e&&e.length&&e[0].complete||t.hasError||i.showLoading(t)},50),i.checkSrcset(t),t.$content=n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")),!1!==t.opts.preload&&t.opts.width&&t.opts.height&&t.thumb&&(t.width=t.opts.width,t.height=t.opts.height,o=e.createElement("img"),o.onerror=function(){n(this).remove(),t.$ghost=null},o.onload=function(){i.afterLoad(t)},t.$ghost=n(o).addClass("fancybox-image").appendTo(t.$content).attr("src",t.thumb)),i.setBigImage(t)},checkSrcset:function(e){var n,o,i,a,s=e.opts.srcset||e.opts.image.srcset;if(s){i=t.devicePixelRatio||1,a=t.innerWidth*i,o=s.split(",").map(function(t){var e={};return t.trim().split(/\s+/).forEach(function(t,n){var o=parseInt(t.substring(0,t.length-1),10);if(0===n)return e.url=t;o&&(e.value=o,e.postfix=t[t.length-1])}),e}),o.sort(function(t,e){return t.value-e.value});for(var r=0;r<o.length;r++){var c=o[r];if("w"===c.postfix&&c.value>=a||"x"===c.postfix&&c.value>=i){n=c;break}}!n&&o.length&&(n=o[o.length-1]),n&&(e.src=n.url,e.width&&e.height&&"w"==n.postfix&&(e.height=e.width/e.height*n.value,e.width=n.value),e.opts.srcset=s)}},setBigImage:function(t){var o=this,i=e.createElement("img"),a=n(i);t.$image=a.one("error",function(){o.setError(t)}).one("load",function(){var e;t.$ghost||(o.resolveImageSlideSize(t,this.naturalWidth,this.naturalHeight),o.afterLoad(t)),o.isClosing||(t.opts.srcset&&(e=t.opts.sizes,e&&"auto"!==e||(e=(t.width/t.height>1&&s.width()/s.height()>1?"100":Math.round(t.width/t.height*100))+"vw"),a.attr("sizes",e).attr("srcset",t.opts.srcset)),t.$ghost&&setTimeout(function(){t.$ghost&&!o.isClosing&&t.$ghost.hide()},Math.min(300,Math.max(1e3,t.height/1600))),o.hideLoading(t))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$content),(i.complete||"complete"==i.readyState)&&a.naturalWidth&&a.naturalHeight?a.trigger("load"):i.error&&a.trigger("error")},resolveImageSlideSize:function(t,e,n){var o=parseInt(t.opts.width,10),i=parseInt(t.opts.height,10);t.width=e,t.height=n,o>0&&(t.width=o,t.height=Math.floor(o*n/e)),i>0&&(t.width=Math.floor(i*e/n),t.height=i)},setIframe:function(t){var e,o=this,i=t.opts.iframe,a=t.$slide;t.$content=n('<div class="fancybox-content'+(i.preload?" fancybox-is-hidden":"")+'"></div>').css(i.css).appendTo(a),a.addClass("fancybox-slide--"+t.contentType),t.$iframe=e=n(i.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(i.attr).appendTo(t.$content),i.preload?(o.showLoading(t),e.on("load.fb error.fb",function(e){this.isReady=1,t.$slide.trigger("refresh"),o.afterLoad(t)}),a.on("refresh.fb",function(){var n,o,s=t.$content,r=i.css.width,c=i.css.height;if(1===e[0].isReady){try{n=e.contents(),o=n.find("body")}catch(t){}o&&o.length&&o.children().length&&(a.css("overflow","visible"),s.css({width:"100%","max-width":"100%",height:"9999px"}),void 0===r&&(r=Math.ceil(Math.max(o[0].clientWidth,o.outerWidth(!0)))),s.css("width",r||"").css("max-width",""),void 0===c&&(c=Math.ceil(Math.max(o[0].clientHeight,o.outerHeight(!0)))),s.css("height",c||""),a.css("overflow","auto")),s.removeClass("fancybox-is-hidden")}})):o.afterLoad(t),e.attr("src",t.src),a.one("onReset",function(){try{n(this).find("iframe").hide().unbind().attr("src","//about:blank")}catch(t){}n(this).off("refresh.fb").empty(),t.isLoaded=!1,t.isRevealed=!1})},setContent:function(t,e){var o=this;o.isClosing||(o.hideLoading(t),t.$content&&n.fancybox.stop(t.$content),t.$slide.empty(),l(e)&&e.parent().length?((e.hasClass("fancybox-content")||e.parent().hasClass("fancybox-content"))&&e.parents(".fancybox-slide").trigger("onReset"),t.$placeholder=n("<div>").hide().insertAfter(e),e.css("display","inline-block")):t.hasError||("string"===n.type(e)&&(e=n("<div>").append(n.trim(e)).contents()),t.opts.filter&&(e=n("<div>").html(e).find(t.opts.filter))),t.$slide.one("onReset",function(){n(this).find("video,audio").trigger("pause"),t.$placeholder&&(t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(n(this).empty(),t.isLoaded=!1,t.isRevealed=!1)}),n(e).appendTo(t.$slide),n(e).is("video,audio")&&(n(e).addClass("fancybox-video"),n(e).wrap("<div></div>"),t.contentType="video",t.opts.width=t.opts.width||n(e).attr("width"),t.opts.height=t.opts.height||n(e).attr("height")),t.$content=t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(),t.$content.siblings().hide(),t.$content.length||(t.$content=t.$slide.wrapInner("<div></div>").children().first()),t.$content.addClass("fancybox-content"),t.$slide.addClass("fancybox-slide--"+t.contentType),o.afterLoad(t))},setError:function(t){t.hasError=!0,t.$slide.trigger("onReset").removeClass("fancybox-slide--"+t.contentType).addClass("fancybox-slide--error"),t.contentType="html",this.setContent(t,this.translate(t,t.opts.errorTpl)),t.pos===this.currPos&&(this.isAnimating=!1)},showLoading:function(t){var e=this;(t=t||e.current)&&!t.$spinner&&(t.$spinner=n(e.translate(e,e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))},hideLoading:function(t){var e=this;(t=t||e.current)&&t.$spinner&&(t.$spinner.stop().remove(),delete t.$spinner)},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),!t.opts.smallBtn||t.$smallBtn&&t.$smallBtn.length||(t.$smallBtn=n(e.translate(t,t.opts.btnTpl.smallBtn)).appendTo(t.$content)),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0}),"image"===t.type&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),e.adjustCaption(t),e.adjustLayout(t),t.pos===e.currPos&&e.updateCursor(),e.revealContent(t))},adjustCaption:function(t){var e,n=this,o=t||n.current,i=o.opts.caption,a=o.opts.preventCaptionOverlap,s=n.$refs.caption,r=!1;s.toggleClass("fancybox-caption--separate",a),a&&i&&i.length&&(o.pos!==n.currPos?(e=s.clone().appendTo(s.parent()),e.children().eq(0).empty().html(i),r=e.outerHeight(!0),e.empty().remove()):n.$caption&&(r=n.$caption.outerHeight(!0)),o.$slide.css("padding-bottom",r||""))},adjustLayout:function(t){var e,n,o,i,a=this,s=t||a.current;s.isLoaded&&!0!==s.opts.disableLayoutFix&&(s.$content.css("margin-bottom",""),s.$content.outerHeight()>s.$slide.height()+.5&&(o=s.$slide[0].style["padding-bottom"],i=s.$slide.css("padding-bottom"),parseFloat(i)>0&&(e=s.$slide[0].scrollHeight,s.$slide.css("padding-bottom",0),Math.abs(e-s.$slide[0].scrollHeight)<1&&(n=i),s.$slide.css("padding-bottom",o))),s.$content.css("margin-bottom",n))},revealContent:function(t){var e,o,i,a,s=this,r=t.$slide,c=!1,l=!1,d=s.isMoved(t),u=t.isRevealed;return t.isRevealed=!0,e=t.opts[s.firstRun?"animationEffect":"transitionEffect"],i=t.opts[s.firstRun?"animationDuration":"transitionDuration"],i=parseInt(void 0===t.forcedDuration?i:t.forcedDuration,10),!d&&t.pos===s.currPos&&i||(e=!1),"zoom"===e&&(t.pos===s.currPos&&i&&"image"===t.type&&!t.hasError&&(l=s.getThumbPos(t))?c=s.getFitPos(t):e="fade"),"zoom"===e?(s.isAnimating=!0,c.scaleX=c.width/l.width,c.scaleY=c.height/l.height,a=t.opts.zoomOpacity,"auto"==a&&(a=Math.abs(t.width/t.height-l.width/l.height)>.1),a&&(l.opacity=.1,c.opacity=1),n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"),l),p(t.$content),void n.fancybox.animate(t.$content,c,i,function(){s.isAnimating=!1,s.complete()})):(s.updateSlide(t),e?(n.fancybox.stop(r),o="fancybox-slide--"+(t.pos>=s.prevPos?"next":"previous")+" fancybox-animated fancybox-fx-"+e,r.addClass(o).removeClass("fancybox-slide--current"),t.$content.removeClass("fancybox-is-hidden"),p(r),"image"!==t.type&&t.$content.hide().show(0),void n.fancybox.animate(r,"fancybox-slide--current",i,function(){r.removeClass(o).css({transform:"",opacity:""}),t.pos===s.currPos&&s.complete()},!0)):(t.$content.removeClass("fancybox-is-hidden"),u||!d||"image"!==t.type||t.hasError||t.$content.hide().fadeIn("fast"),void(t.pos===s.currPos&&s.complete())))},getThumbPos:function(t){var e,o,i,a,s,r=!1,c=t.$thumb;return!(!c||!g(c[0]))&&(e=n.fancybox.getTranslate(c),o=parseFloat(c.css("border-top-width")||0),i=parseFloat(c.css("border-right-width")||0),a=parseFloat(c.css("border-bottom-width")||0),s=parseFloat(c.css("border-left-width")||0),r={top:e.top+o,left:e.left+s,width:e.width-i-s,height:e.height-o-a,scaleX:1,scaleY:1},e.width>0&&e.height>0&&r)},complete:function(){var t,e=this,o=e.current,i={};!e.isMoved()&&o.isLoaded&&(o.isComplete||(o.isComplete=!0,o.$slide.siblings().trigger("onReset"),e.preload("inline"),p(o.$slide),o.$slide.addClass("fancybox-slide--complete"),n.each(e.slides,function(t,o){o.pos>=e.currPos-1&&o.pos<=e.currPos+1?i[o.pos]=o:o&&(n.fancybox.stop(o.$slide),o.$slide.off().remove())}),e.slides=i),e.isAnimating=!1,e.updateCursor(),e.trigger("afterShow"),o.opts.video.autoStart&&o.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended",function(){Document.exitFullscreen?Document.exitFullscreen():this.webkitExitFullscreen&&this.webkitExitFullscreen(),e.next()}),o.opts.autoFocus&&"html"===o.contentType&&(t=o.$content.find("input[autofocus]:enabled:visible:first"),t.length?t.trigger("focus"):e.focus(null,!0)),o.$slide.scrollTop(0).scrollLeft(0))},preload:function(t){var e,n,o=this;o.group.length<2||(n=o.slides[o.currPos+1],e=o.slides[o.currPos-1],e&&e.type===t&&o.loadSlide(e),n&&n.type===t&&o.loadSlide(n))},focus:function(t,o){var i,a,s=this,r=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","video","audio","[contenteditable]",'[tabindex]:not([tabindex^="-"])'].join(",");s.isClosing||(i=!t&&s.current&&s.current.isComplete?s.current.$slide.find("*:visible"+(o?":not(.fancybox-close-small)":"")):s.$refs.container.find("*:visible"),i=i.filter(r).filter(function(){return"hidden"!==n(this).css("visibility")&&!n(this).hasClass("disabled")}),i.length?(a=i.index(e.activeElement),t&&t.shiftKey?(a<0||0==a)&&(t.preventDefault(),i.eq(i.length-1).trigger("focus")):(a<0||a==i.length-1)&&(t&&t.preventDefault(),i.eq(0).trigger("focus"))):s.$refs.container.trigger("focus"))},activate:function(){var t=this;n(".fancybox-container").each(function(){var e=n(this).data("FancyBox");e&&e.id!==t.id&&!e.isClosing&&(e.trigger("onDeactivate"),e.removeEvents(),e.isVisible=!1)}),t.isVisible=!0,(t.current||t.isIdle)&&(t.update(),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(t,e){var o,i,a,s,r,c,l,u=this,f=u.current,h=function(){u.cleanUp(t)};return!u.isClosing&&(u.isClosing=!0,!1===u.trigger("beforeClose",t)?(u.isClosing=!1,d(function(){u.update()}),!1):(u.removeEvents(),a=f.$content,o=f.opts.animationEffect,i=n.isNumeric(e)?e:o?f.opts.animationDuration:0,f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),!0!==t?n.fancybox.stop(f.$slide):o=!1,f.$slide.siblings().trigger("onReset").remove(),i&&u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration",i+"ms"),u.hideLoading(f),u.hideControls(!0),u.updateCursor(),"zoom"!==o||a&&i&&"image"===f.type&&!u.isMoved()&&!f.hasError&&(l=u.getThumbPos(f))||(o="fade"),"zoom"===o?(n.fancybox.stop(a),s=n.fancybox.getTranslate(a),c={top:s.top,left:s.left,scaleX:s.width/l.width,scaleY:s.height/l.height,width:l.width,height:l.height},r=f.opts.zoomOpacity,
"auto"==r&&(r=Math.abs(f.width/f.height-l.width/l.height)>.1),r&&(l.opacity=0),n.fancybox.setTranslate(a,c),p(a),n.fancybox.animate(a,l,i,h),!0):(o&&i?n.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"),"fancybox-animated fancybox-fx-"+o,i,h):!0===t?setTimeout(h,i):h(),!0)))},cleanUp:function(e){var o,i,a,s=this,r=s.current.opts.$orig;s.current.$slide.trigger("onReset"),s.$refs.container.empty().remove(),s.trigger("afterClose",e),s.current.opts.backFocus&&(r&&r.length&&r.is(":visible")||(r=s.$trigger),r&&r.length&&(i=t.scrollX,a=t.scrollY,r.trigger("focus"),n("html, body").scrollTop(a).scrollLeft(i))),s.current=null,o=n.fancybox.getInstance(),o?o.activate():(n("body").removeClass("fancybox-active compensate-for-scrollbar"),n("#fancybox-style-noscroll").remove())},trigger:function(t,e){var o,i=Array.prototype.slice.call(arguments,1),a=this,s=e&&e.opts?e:a.current;if(s?i.unshift(s):s=a,i.unshift(a),n.isFunction(s.opts[t])&&(o=s.opts[t].apply(s,i)),!1===o)return o;"afterClose"!==t&&a.$refs?a.$refs.container.trigger(t+".fb",i):r.trigger(t+".fb",i)},updateControls:function(){var t=this,o=t.current,i=o.index,a=t.$refs.container,s=t.$refs.caption,r=o.opts.caption;o.$slide.trigger("refresh"),r&&r.length?(t.$caption=s,s.children().eq(0).html(r)):t.$caption=null,t.hasHiddenControls||t.isIdle||t.showControls(),a.find("[data-fancybox-count]").html(t.group.length),a.find("[data-fancybox-index]").html(i+1),a.find("[data-fancybox-prev]").prop("disabled",!o.opts.loop&&i<=0),a.find("[data-fancybox-next]").prop("disabled",!o.opts.loop&&i>=t.group.length-1),"image"===o.type?a.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href",o.opts.image.src||o.src).show():o.opts.toolbar&&a.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),n(e.activeElement).is(":hidden,[disabled]")&&t.$refs.container.trigger("focus")},hideControls:function(t){var e=this,n=["infobar","toolbar","nav"];!t&&e.current.opts.preventCaptionOverlap||n.push("caption"),this.$refs.container.removeClass(n.map(function(t){return"fancybox-show-"+t}).join(" ")),this.hasHiddenControls=!0},showControls:function(){var t=this,e=t.current?t.current.opts:t.opts,n=t.$refs.container;t.hasHiddenControls=!1,t.idleSecondsCounter=0,n.toggleClass("fancybox-show-toolbar",!(!e.toolbar||!e.buttons)).toggleClass("fancybox-show-infobar",!!(e.infobar&&t.group.length>1)).toggleClass("fancybox-show-caption",!!t.$caption).toggleClass("fancybox-show-nav",!!(e.arrows&&t.group.length>1)).toggleClass("fancybox-is-modal",!!e.modal)},toggleControls:function(){this.hasHiddenControls?this.showControls():this.hideControls()}}),n.fancybox={version:"3.5.7",defaults:a,getInstance:function(t){var e=n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),o=Array.prototype.slice.call(arguments,1);return e instanceof b&&("string"===n.type(t)?e[t].apply(e,o):"function"===n.type(t)&&t.apply(e,o),e)},open:function(t,e,n){return new b(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),!0===t&&this.close(t))},destroy:function(){this.close(!0),r.add("body").off("click.fb-start","**")},isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),use3d:function(){var n=e.createElement("div");return t.getComputedStyle&&t.getComputedStyle(n)&&t.getComputedStyle(n).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<11)}(),getTranslate:function(t){var e;return!(!t||!t.length)&&(e=t[0].getBoundingClientRect(),{top:e.top||0,left:e.left||0,width:e.width,height:e.height,opacity:parseFloat(t.css("opacity"))})},setTranslate:function(t,e){var n="",o={};if(t&&e)return void 0===e.left&&void 0===e.top||(n=(void 0===e.left?t.position().left:e.left)+"px, "+(void 0===e.top?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),void 0!==e.scaleX&&void 0!==e.scaleY?n+=" scale("+e.scaleX+", "+e.scaleY+")":void 0!==e.scaleX&&(n+=" scaleX("+e.scaleX+")"),n.length&&(o.transform=n),void 0!==e.opacity&&(o.opacity=e.opacity),void 0!==e.width&&(o.width=e.width),void 0!==e.height&&(o.height=e.height),t.css(o)},animate:function(t,e,o,i,a){var s,r=this;n.isFunction(o)&&(i=o,o=null),r.stop(t),s=r.getTranslate(t),t.on(f,function(c){(!c||!c.originalEvent||t.is(c.originalEvent.target)&&"z-index"!=c.originalEvent.propertyName)&&(r.stop(t),n.isNumeric(o)&&t.css("transition-duration",""),n.isPlainObject(e)?void 0!==e.scaleX&&void 0!==e.scaleY&&r.setTranslate(t,{top:e.top,left:e.left,width:s.width*e.scaleX,height:s.height*e.scaleY,scaleX:1,scaleY:1}):!0!==a&&t.removeClass(e),n.isFunction(i)&&i(c))}),n.isNumeric(o)&&t.css("transition-duration",o+"ms"),n.isPlainObject(e)?(void 0!==e.scaleX&&void 0!==e.scaleY&&(delete e.width,delete e.height,t.parent().hasClass("fancybox-slide--image")&&t.parent().addClass("fancybox-is-scaling")),n.fancybox.setTranslate(t,e)):t.addClass(e),t.data("timer",setTimeout(function(){t.trigger(f)},o+33))},stop:function(t,e){t&&t.length&&(clearTimeout(t.data("timer")),e&&t.trigger(f),t.off(f).css("transition-duration",""),t.parent().removeClass("fancybox-is-scaling"))}},n.fn.fancybox=function(t){var e;return t=t||{},e=t.selector||!1,e?n("body").off("click.fb-start",e).on("click.fb-start",e,{options:t},i):this.off("click.fb-start").on("click.fb-start",{items:this,options:t},i),this},r.on("click.fb-start","[data-fancybox]",i),r.on("click.fb-start","[data-fancybox-trigger]",function(t){n('[data-fancybox="'+n(this).attr("data-fancybox-trigger")+'"]').eq(n(this).attr("data-fancybox-index")||0).trigger("click.fb-start",{$trigger:n(this)})}),function(){var t=null;r.on("mousedown mouseup focus blur",".fancybox-button",function(e){switch(e.type){case"mousedown":t=n(this);break;case"mouseup":t=null;break;case"focusin":n(".fancybox-button").removeClass("fancybox-focus"),n(this).is(t)||n(this).is("[disabled]")||n(this).addClass("fancybox-focus");break;case"focusout":n(".fancybox-button").removeClass("fancybox-focus")}})}()}}(window,document,jQuery),function(t){"use strict";var e={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"https://www.youtube-nocookie.com/embed/$4",thumb:"https://img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12]+"").replace(/\?/,"&")+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/maps?q="+t[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}},n=function(e,n,o){if(e)return o=o||"","object"===t.type(o)&&(o=t.param(o,!0)),t.each(n,function(t,n){e=e.replace("$"+t,n||"")}),o.length&&(e+=(e.indexOf("?")>0?"&":"?")+o),e};t(document).on("objectNeedsType.fb",function(o,i,a){var s,r,c,l,d,u,f,p=a.src||"",h=!1;s=t.extend(!0,{},e,a.opts.media),t.each(s,function(e,o){if(c=p.match(o.matcher)){if(h=o.type,f=e,u={},o.paramPlace&&c[o.paramPlace]){d=c[o.paramPlace],"?"==d[0]&&(d=d.substring(1)),d=d.split("&");for(var i=0;i<d.length;++i){var s=d[i].split("=",2);2==s.length&&(u[s[0]]=decodeURIComponent(s[1].replace(/\+/g," ")))}}return l=t.extend(!0,{},o.params,a.opts[e],u),p="function"===t.type(o.url)?o.url.call(this,c,l,a):n(o.url,c,l),r="function"===t.type(o.thumb)?o.thumb.call(this,c,l,a):n(o.thumb,c),"youtube"===e?p=p.replace(/&t=((\d+)m)?(\d+)s/,function(t,e,n,o){return"&start="+((n?60*parseInt(n,10):0)+parseInt(o,10))}):"vimeo"===e&&(p=p.replace("&%23","#")),!1}}),h?(a.opts.thumb||a.opts.$thumb&&a.opts.$thumb.length||(a.opts.thumb=r),"iframe"===h&&(a.opts=t.extend(!0,a.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}})),t.extend(a,{type:h,src:p,origSrc:a.src,contentSource:f,contentType:"image"===h?"image":"gmap_place"==f||"gmap_search"==f?"map":"video"})):p&&(a.type=a.opts.defaultType)});var o={youtube:{src:"https://www.youtube.com/iframe_api",class:"YT",loading:!1,loaded:!1},vimeo:{src:"https://player.vimeo.com/api/player.js",class:"Vimeo",loading:!1,loaded:!1},load:function(t){var e,n=this;if(this[t].loaded)return void setTimeout(function(){n.done(t)});this[t].loading||(this[t].loading=!0,e=document.createElement("script"),e.type="text/javascript",e.src=this[t].src,"youtube"===t?window.onYouTubeIframeAPIReady=function(){n[t].loaded=!0,n.done(t)}:e.onload=function(){n[t].loaded=!0,n.done(t)},document.body.appendChild(e))},done:function(e){var n,o,i;"youtube"===e&&delete window.onYouTubeIframeAPIReady,(n=t.fancybox.getInstance())&&(o=n.current.$content.find("iframe"),"youtube"===e&&void 0!==YT&&YT?i=new YT.Player(o.attr("id"),{events:{onStateChange:function(t){0==t.data&&n.next()}}}):"vimeo"===e&&void 0!==Vimeo&&Vimeo&&(i=new Vimeo.Player(o),i.on("ended",function(){n.next()})))}};t(document).on({"afterShow.fb":function(t,e,n){e.group.length>1&&("youtube"===n.contentSource||"vimeo"===n.contentSource)&&o.load(n.contentSource)}})}(jQuery),function(t,e,n){"use strict";var o=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),i=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),a=function(e){var n=[];e=e.originalEvent||e||t.e,e=e.touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e];for(var o in e)e[o].pageX?n.push({x:e[o].pageX,y:e[o].pageY}):e[o].clientX&&n.push({x:e[o].clientX,y:e[o].clientY});return n},s=function(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},r=function(t){if(t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe')||n.isFunction(t.get(0).onclick)||t.data("selectable"))return!0;for(var e=0,o=t[0].attributes,i=o.length;e<i;e++)if("data-fancybox-"===o[e].nodeName.substr(0,14))return!0;return!1},c=function(e){var n=t.getComputedStyle(e)["overflow-y"],o=t.getComputedStyle(e)["overflow-x"],i=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,a=("scroll"===o||"auto"===o)&&e.scrollWidth>e.clientWidth;return i||a},l=function(t){for(var e=!1;;){if(e=c(t.get(0)))break;if(t=t.parent(),!t.length||t.hasClass("fancybox-stage")||t.is("body"))break}return e},d=function(t){var e=this;e.instance=t,e.$bg=t.$refs.bg,e.$stage=t.$refs.stage,e.$container=t.$refs.container,e.destroy(),e.$container.on("touchstart.fb.touch mousedown.fb.touch",n.proxy(e,"ontouchstart"))};d.prototype.destroy=function(){var t=this;t.$container.off(".fb.touch"),n(e).off(".fb.touch"),t.requestId&&(i(t.requestId),t.requestId=null),t.tapped&&(clearTimeout(t.tapped),t.tapped=null)},d.prototype.ontouchstart=function(o){var i=this,c=n(o.target),d=i.instance,u=d.current,f=u.$slide,p=u.$content,h="touchstart"==o.type;if(h&&i.$container.off("mousedown.fb.touch"),(!o.originalEvent||2!=o.originalEvent.button)&&f.length&&c.length&&!r(c)&&!r(c.parent())&&(c.is("img")||!(o.originalEvent.clientX>c[0].clientWidth+c.offset().left))){if(!u||d.isAnimating||u.$slide.hasClass("fancybox-animated"))return o.stopPropagation(),void o.preventDefault();i.realPoints=i.startPoints=a(o),i.startPoints.length&&(u.touch&&o.stopPropagation(),i.startEvent=o,i.canTap=!0,i.$target=c,i.$content=p,i.opts=u.opts.touch,i.isPanning=!1,i.isSwiping=!1,i.isZooming=!1,i.isScrolling=!1,i.canPan=d.canPan(),i.startTime=(new Date).getTime(),i.distanceX=i.distanceY=i.distance=0,i.canvasWidth=Math.round(f[0].clientWidth),i.canvasHeight=Math.round(f[0].clientHeight),i.contentLastPos=null,i.contentStartPos=n.fancybox.getTranslate(i.$content)||{top:0,left:0},i.sliderStartPos=n.fancybox.getTranslate(f),i.stagePos=n.fancybox.getTranslate(d.$refs.stage),i.sliderStartPos.top-=i.stagePos.top,i.sliderStartPos.left-=i.stagePos.left,i.contentStartPos.top-=i.stagePos.top,i.contentStartPos.left-=i.stagePos.left,n(e).off(".fb.touch").on(h?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",n.proxy(i,"ontouchend")).on(h?"touchmove.fb.touch":"mousemove.fb.touch",n.proxy(i,"ontouchmove")),n.fancybox.isMobile&&e.addEventListener("scroll",i.onscroll,!0),((i.opts||i.canPan)&&(c.is(i.$stage)||i.$stage.find(c).length)||(c.is(".fancybox-image")&&o.preventDefault(),n.fancybox.isMobile&&c.parents(".fancybox-caption").length))&&(i.isScrollable=l(c)||l(c.parent()),n.fancybox.isMobile&&i.isScrollable||o.preventDefault(),(1===i.startPoints.length||u.hasError)&&(i.canPan?(n.fancybox.stop(i.$content),i.isPanning=!0):i.isSwiping=!0,i.$container.addClass("fancybox-is-grabbing")),2===i.startPoints.length&&"image"===u.type&&(u.isLoaded||u.$ghost)&&(i.canTap=!1,i.isSwiping=!1,i.isPanning=!1,i.isZooming=!0,n.fancybox.stop(i.$content),i.centerPointStartX=.5*(i.startPoints[0].x+i.startPoints[1].x)-n(t).scrollLeft(),i.centerPointStartY=.5*(i.startPoints[0].y+i.startPoints[1].y)-n(t).scrollTop(),i.percentageOfImageAtPinchPointX=(i.centerPointStartX-i.contentStartPos.left)/i.contentStartPos.width,i.percentageOfImageAtPinchPointY=(i.centerPointStartY-i.contentStartPos.top)/i.contentStartPos.height,i.startDistanceBetweenFingers=s(i.startPoints[0],i.startPoints[1]))))}},d.prototype.onscroll=function(t){var n=this;n.isScrolling=!0,e.removeEventListener("scroll",n.onscroll,!0)},d.prototype.ontouchmove=function(t){var e=this;return void 0!==t.originalEvent.buttons&&0===t.originalEvent.buttons?void e.ontouchend(t):e.isScrolling?void(e.canTap=!1):(e.newPoints=a(t),void((e.opts||e.canPan)&&e.newPoints.length&&e.newPoints.length&&(e.isSwiping&&!0===e.isSwiping||t.preventDefault(),e.distanceX=s(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=s(e.newPoints[0],e.startPoints[0],"y"),e.distance=s(e.newPoints[0],e.startPoints[0]),e.distance>0&&(e.isSwiping?e.onSwipe(t):e.isPanning?e.onPan():e.isZooming&&e.onZoom()))))},d.prototype.onSwipe=function(e){var a,s=this,r=s.instance,c=s.isSwiping,l=s.sliderStartPos.left||0;if(!0!==c)"x"==c&&(s.distanceX>0&&(s.instance.group.length<2||0===s.instance.current.index&&!s.instance.current.opts.loop)?l+=Math.pow(s.distanceX,.8):s.distanceX<0&&(s.instance.group.length<2||s.instance.current.index===s.instance.group.length-1&&!s.instance.current.opts.loop)?l-=Math.pow(-s.distanceX,.8):l+=s.distanceX),s.sliderLastPos={top:"x"==c?0:s.sliderStartPos.top+s.distanceY,left:l},s.requestId&&(i(s.requestId),s.requestId=null),s.requestId=o(function(){s.sliderLastPos&&(n.each(s.instance.slides,function(t,e){var o=e.pos-s.instance.currPos;n.fancybox.setTranslate(e.$slide,{top:s.sliderLastPos.top,left:s.sliderLastPos.left+o*s.canvasWidth+o*e.opts.gutter})}),s.$container.addClass("fancybox-is-sliding"))});else if(Math.abs(s.distance)>10){if(s.canTap=!1,r.group.length<2&&s.opts.vertical?s.isSwiping="y":r.isDragging||!1===s.opts.vertical||"auto"===s.opts.vertical&&n(t).width()>800?s.isSwiping="x":(a=Math.abs(180*Math.atan2(s.distanceY,s.distanceX)/Math.PI),s.isSwiping=a>45&&a<135?"y":"x"),"y"===s.isSwiping&&n.fancybox.isMobile&&s.isScrollable)return void(s.isScrolling=!0);r.isDragging=s.isSwiping,s.startPoints=s.newPoints,n.each(r.slides,function(t,e){var o,i;n.fancybox.stop(e.$slide),o=n.fancybox.getTranslate(e.$slide),i=n.fancybox.getTranslate(r.$refs.stage),e.$slide.css({transform:"",opacity:"","transition-duration":""}).removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")}),e.pos===r.current.pos&&(s.sliderStartPos.top=o.top-i.top,s.sliderStartPos.left=o.left-i.left),n.fancybox.setTranslate(e.$slide,{top:o.top-i.top,left:o.left-i.left})}),r.SlideShow&&r.SlideShow.isActive&&r.SlideShow.stop()}},d.prototype.onPan=function(){var t=this;if(s(t.newPoints[0],t.realPoints[0])<(n.fancybox.isMobile?10:5))return void(t.startPoints=t.newPoints);t.canTap=!1,t.contentLastPos=t.limitMovement(),t.requestId&&i(t.requestId),t.requestId=o(function(){n.fancybox.setTranslate(t.$content,t.contentLastPos)})},d.prototype.limitMovement=function(){var t,e,n,o,i,a,s=this,r=s.canvasWidth,c=s.canvasHeight,l=s.distanceX,d=s.distanceY,u=s.contentStartPos,f=u.left,p=u.top,h=u.width,g=u.height;return i=h>r?f+l:f,a=p+d,t=Math.max(0,.5*r-.5*h),e=Math.max(0,.5*c-.5*g),n=Math.min(r-h,.5*r-.5*h),o=Math.min(c-g,.5*c-.5*g),l>0&&i>t&&(i=t-1+Math.pow(-t+f+l,.8)||0),l<0&&i<n&&(i=n+1-Math.pow(n-f-l,.8)||0),d>0&&a>e&&(a=e-1+Math.pow(-e+p+d,.8)||0),d<0&&a<o&&(a=o+1-Math.pow(o-p-d,.8)||0),{top:a,left:i}},d.prototype.limitPosition=function(t,e,n,o){var i=this,a=i.canvasWidth,s=i.canvasHeight;return n>a?(t=t>0?0:t,t=t<a-n?a-n:t):t=Math.max(0,a/2-n/2),o>s?(e=e>0?0:e,e=e<s-o?s-o:e):e=Math.max(0,s/2-o/2),{top:e,left:t}},d.prototype.onZoom=function(){var e=this,a=e.contentStartPos,r=a.width,c=a.height,l=a.left,d=a.top,u=s(e.newPoints[0],e.newPoints[1]),f=u/e.startDistanceBetweenFingers,p=Math.floor(r*f),h=Math.floor(c*f),g=(r-p)*e.percentageOfImageAtPinchPointX,b=(c-h)*e.percentageOfImageAtPinchPointY,m=(e.newPoints[0].x+e.newPoints[1].x)/2-n(t).scrollLeft(),v=(e.newPoints[0].y+e.newPoints[1].y)/2-n(t).scrollTop(),y=m-e.centerPointStartX,x=v-e.centerPointStartY,w=l+(g+y),$=d+(b+x),S={top:$,left:w,scaleX:f,scaleY:f};e.canTap=!1,e.newWidth=p,e.newHeight=h,e.contentLastPos=S,e.requestId&&i(e.requestId),e.requestId=o(function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)})},d.prototype.ontouchend=function(t){var o=this,s=o.isSwiping,r=o.isPanning,c=o.isZooming,l=o.isScrolling;if(o.endPoints=a(t),o.dMs=Math.max((new Date).getTime()-o.startTime,1),o.$container.removeClass("fancybox-is-grabbing"),n(e).off(".fb.touch"),e.removeEventListener("scroll",o.onscroll,!0),o.requestId&&(i(o.requestId),o.requestId=null),o.isSwiping=!1,o.isPanning=!1,o.isZooming=!1,o.isScrolling=!1,o.instance.isDragging=!1,o.canTap)return o.onTap(t);o.speed=100,o.velocityX=o.distanceX/o.dMs*.5,o.velocityY=o.distanceY/o.dMs*.5,r?o.endPanning():c?o.endZooming():o.endSwiping(s,l)},d.prototype.endSwiping=function(t,e){var o=this,i=!1,a=o.instance.group.length,s=Math.abs(o.distanceX),r="x"==t&&a>1&&(o.dMs>130&&s>10||s>50);o.sliderLastPos=null,"y"==t&&!e&&Math.abs(o.distanceY)>50?(n.fancybox.animate(o.instance.current.$slide,{top:o.sliderStartPos.top+o.distanceY+150*o.velocityY,opacity:0},200),i=o.instance.close(!0,250)):r&&o.distanceX>0?i=o.instance.previous(300):r&&o.distanceX<0&&(i=o.instance.next(300)),!1!==i||"x"!=t&&"y"!=t||o.instance.centerSlide(200),o.$container.removeClass("fancybox-is-sliding")},d.prototype.endPanning=function(){var t,e,o,i=this;i.contentLastPos&&(!1===i.opts.momentum||i.dMs>350?(t=i.contentLastPos.left,e=i.contentLastPos.top):(t=i.contentLastPos.left+500*i.velocityX,e=i.contentLastPos.top+500*i.velocityY),o=i.limitPosition(t,e,i.contentStartPos.width,i.contentStartPos.height),o.width=i.contentStartPos.width,o.height=i.contentStartPos.height,n.fancybox.animate(i.$content,o,366))},d.prototype.endZooming=function(){var t,e,o,i,a=this,s=a.instance.current,r=a.newWidth,c=a.newHeight;a.contentLastPos&&(t=a.contentLastPos.left,e=a.contentLastPos.top,i={top:e,left:t,width:r,height:c,scaleX:1,scaleY:1},n.fancybox.setTranslate(a.$content,i),r<a.canvasWidth&&c<a.canvasHeight?a.instance.scaleToFit(150):r>s.width||c>s.height?a.instance.scaleToActual(a.centerPointStartX,a.centerPointStartY,150):(o=a.limitPosition(t,e,r,c),n.fancybox.animate(a.$content,o,150)))},d.prototype.onTap=function(e){var o,i=this,s=n(e.target),r=i.instance,c=r.current,l=e&&a(e)||i.startPoints,d=l[0]?l[0].x-n(t).scrollLeft()-i.stagePos.left:0,u=l[0]?l[0].y-n(t).scrollTop()-i.stagePos.top:0,f=function(t){var o=c.opts[t];if(n.isFunction(o)&&(o=o.apply(r,[c,e])),o)switch(o){case"close":r.close(i.startEvent);break;case"toggleControls":r.toggleControls();break;case"next":r.next();break;case"nextOrClose":r.group.length>1?r.next():r.close(i.startEvent);break;case"zoom":"image"==c.type&&(c.isLoaded||c.$ghost)&&(r.canPan()?r.scaleToFit():r.isScaledDown()?r.scaleToActual(d,u):r.group.length<2&&r.close(i.startEvent))}};if((!e.originalEvent||2!=e.originalEvent.button)&&(s.is("img")||!(d>s[0].clientWidth+s.offset().left))){if(s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))o="Outside";else if(s.is(".fancybox-slide"))o="Slide";else{if(!r.current.$content||!r.current.$content.find(s).addBack().filter(s).length)return;o="Content"}if(i.tapped){if(clearTimeout(i.tapped),i.tapped=null,Math.abs(d-i.tapX)>50||Math.abs(u-i.tapY)>50)return this;f("dblclick"+o)}else i.tapX=d,i.tapY=u,c.opts["dblclick"+o]&&c.opts["dblclick"+o]!==c.opts["click"+o]?i.tapped=setTimeout(function(){i.tapped=null,r.isAnimating||f("click"+o)},500):f("click"+o);return this}},n(e).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new d(e))}).on("beforeClose.fb",function(t,e){e&&e.Guestures&&e.Guestures.destroy()})}(window,document,jQuery),function(t,e){"use strict";e.extend(!0,e.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'},slideShow:{autoStart:!1,speed:3e3,progress:!0}});var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{timer:null,isActive:!1,$button:null,init:function(){var t=this,n=t.instance,o=n.group[n.currIndex].opts.slideShow;t.$button=n.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){t.toggle()}),n.group.length<2||!o?t.$button.hide():o.progress&&(t.$progress=e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner))},set:function(t){var n=this,o=n.instance,i=o.current;i&&(!0===t||i.opts.loop||o.currIndex<o.group.length-1)?n.isActive&&"video"!==i.contentType&&(n.$progress&&e.fancybox.animate(n.$progress.show(),{scaleX:1},i.opts.slideShow.speed),n.timer=setTimeout(function(){o.current.opts.loop||o.current.index!=o.group.length-1?o.next():o.jumpTo(0)},i.opts.slideShow.speed)):(n.stop(),o.idleSecondsCounter=0,o.showControls())},clear:function(){var t=this;clearTimeout(t.timer),t.timer=null,t.$progress&&t.$progress.removeAttr("style").hide()},start:function(){var t=this,e=t.instance.current;e&&(t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),t.isActive=!0,e.isComplete&&t.set(!0),t.instance.trigger("onSlideShowChange",!0))},stop:function(){var t=this,e=t.instance.current;t.clear(),t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),t.isActive=!1,t.instance.trigger("onSlideShowChange",!1),t.$progress&&t.$progress.removeAttr("style").hide()},toggle:function(){var t=this;t.isActive?t.stop():t.start()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.SlideShow&&(e.SlideShow=new n(e))},"beforeShow.fb":function(t,e,n,o){var i=e&&e.SlideShow;o?i&&n.opts.slideShow.autoStart&&i.start():i&&i.isActive&&i.clear()},"afterShow.fb":function(t,e,n){var o=e&&e.SlideShow;o&&o.isActive&&o.set()},"afterKeydown.fb":function(n,o,i,a,s){var r=o&&o.SlideShow;!r||!i.opts.slideShow||80!==s&&32!==s||e(t.activeElement).is("button,a,input")||(a.preventDefault(),r.toggle())},"beforeClose.fb onDeactivate.fb":function(t,e){var n=e&&e.SlideShow;n&&n.stop()}}),e(t).on("visibilitychange",function(){var n=e.fancybox.getInstance(),o=n&&n.SlideShow;o&&o.isActive&&(t.hidden?o.clear():o.set())})}(document,jQuery),function(t,e){"use strict";var n=function(){for(var e=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n={},o=0;o<e.length;o++){var i=e[o];if(i&&i[1]in t){for(var a=0;a<i.length;a++)n[e[0][a]]=i[a];return n}}return!1}();if(n){var o={request:function(e){e=e||t.documentElement,e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)},exit:function(){t[n.exitFullscreen]()},toggle:function(e){e=e||t.documentElement,this.isFullscreen()?this.exit():this.request(e)},isFullscreen:function(){return Boolean(t[n.fullscreenElement])},enabled:function(){return Boolean(t[n.fullscreenEnabled])}};e.extend(!0,e.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'},fullScreen:{autoStart:!1}}),e(t).on(n.fullscreenchange,function(){var t=o.isFullscreen(),n=e.fancybox.getInstance();n&&(n.current&&"image"===n.current.type&&n.isAnimating&&(n.isAnimating=!1,n.update(!0,!0,0),n.isComplete||n.complete()),n.trigger("onFullscreenChange",t),n.$refs.container.toggleClass("fancybox-is-fullscreen",t),n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter",!t).toggleClass("fancybox-button--fsexit",t))})}e(t).on({"onInit.fb":function(t,e){var i;if(!n)return void e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();e&&e.group[e.currIndex].opts.fullScreen?(i=e.$refs.container,i.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),o.toggle()}),e.opts.fullScreen&&!0===e.opts.fullScreen.autoStart&&o.request(),e.FullScreen=o):e&&e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()},"afterKeydown.fb":function(t,e,n,o,i){e&&e.FullScreen&&70===i&&(o.preventDefault(),e.FullScreen.toggle())},"beforeClose.fb":function(t,e){e&&e.FullScreen&&e.$refs.container.hasClass("fancybox-is-fullscreen")&&o.exit()}})}(document,jQuery),function(t,e){"use strict";var n="fancybox-thumbs";e.fancybox.defaults=e.extend(!0,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"}},e.fancybox.defaults);var o=function(t){this.init(t)};e.extend(o.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,isActive:!1,init:function(t){var e=this,n=t.group,o=0;e.instance=t,e.opts=n[t.currIndex].opts.thumbs,t.Thumbs=e,e.$button=t.$refs.toolbar.find("[data-fancybox-thumbs]");for(var i=0,a=n.length;i<a&&(n[i].thumb&&o++,!(o>1));i++);o>1&&e.opts?(e.$button.removeAttr("style").on("click",function(){e.toggle()}),e.isActive=!0):e.$button.hide()},create:function(){var t,o=this,i=o.instance,a=o.opts.parentEl,s=[];o.$grid||(o.$grid=e('<div class="'+n+" "+n+"-"+o.opts.axis+'"></div>').appendTo(i.$refs.container.find(a).addBack().filter(a)),o.$grid.on("click","a",function(){i.jumpTo(e(this).attr("data-index"))})),o.$list||(o.$list=e('<div class="'+n+'__list">').appendTo(o.$grid)),e.each(i.group,function(e,n){t=n.thumb,t||"image"!==n.type||(t=n.src),s.push('<a href="javascript:;" tabindex="0" data-index="'+e+'"'+(t&&t.length?' style="background-image:url('+t+')"':'class="fancybox-thumbs-missing"')+"></a>")}),o.$list[0].innerHTML=s.join(""),"x"===o.opts.axis&&o.$list.width(parseInt(o.$grid.css("padding-right"),10)+i.group.length*o.$list.children().eq(0).outerWidth(!0))},focus:function(t){var e,n,o=this,i=o.$list,a=o.$grid;o.instance.current&&(e=i.children().removeClass("fancybox-thumbs-active").filter('[data-index="'+o.instance.current.index+'"]').addClass("fancybox-thumbs-active"),n=e.position(),"y"===o.opts.axis&&(n.top<0||n.top>i.height()-e.outerHeight())?i.stop().animate({scrollTop:i.scrollTop()+n.top},t):"x"===o.opts.axis&&(n.left<a.scrollLeft()||n.left>a.scrollLeft()+(a.width()-e.outerWidth()))&&i.parent().stop().animate({scrollLeft:n.left},t))},update:function(){var t=this;t.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),t.isVisible?(t.$grid||t.create(),t.instance.trigger("onThumbsShow"),t.focus(0)):t.$grid&&t.instance.trigger("onThumbsHide"),t.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),e(t).on({"onInit.fb":function(t,e){var n;e&&!e.Thumbs&&(n=new o(e),n.isActive&&!0===n.opts.autoStart&&n.show())},"beforeShow.fb":function(t,e,n,o){var i=e&&e.Thumbs;i&&i.isVisible&&i.focus(o?0:250)},"afterKeydown.fb":function(t,e,n,o,i){var a=e&&e.Thumbs;a&&a.isActive&&71===i&&(o.preventDefault(),a.toggle())},"beforeClose.fb":function(t,e){var n=e&&e.Thumbs;n&&n.isVisible&&!1!==n.opts.hideOnClose&&n.$grid.hide()}})}(document,jQuery),function(t,e){"use strict";function n(t){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};return String(t).replace(/[&<>"'`=\/]/g,function(t){return e[t]})}e.extend(!0,e.fancybox.defaults,{btnTpl:{share:'<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'},share:{url:function(t,e){return!t.currentHash&&"inline"!==e.type&&"html"!==e.type&&(e.origSrc||e.src)||window.location},
    tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
}
}), e(t).on("click", "[data-fancybox-share]", function () { var t, o, i = e.fancybox.getInstance(), a = i.current || null; a && ("function" === e.type(a.opts.share.url) && (t = a.opts.share.url.apply(a, [i, a])), o = a.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === a.type ? encodeURIComponent(a.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, n(t)).replace(/\{\{descr\}\}/g, i.$caption ? encodeURIComponent(i.$caption.text()) : ""), e.fancybox.open({ src: i.translate(i, o), type: "html", opts: { touch: !1, animationEffect: !1, afterLoad: function (t, e) { i.$refs.container.one("beforeClose.fb", function () { t.close(null, 0) }), e.$content.find(".fancybox-share__button").click(function () { return window.open(this.href, "Share", "width=550, height=450"), !1 }) }, mobile: { autoFocus: !1 } } })) })
    }(document, jQuery), function (t, e, n) { "use strict"; function o() { var e = t.location.hash.substr(1), n = e.split("-"), o = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) ? parseInt(n.pop(-1), 10) || 1 : 1, i = n.join("-"); return { hash: e, index: o < 1 ? 1 : o, gallery: i } } function i(t) { "" !== t.gallery && n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1).focus().trigger("click.fb-start") } function a(t) { var e, n; return !!t && (e = t.current ? t.current.opts : t.opts, "" !== (n = e.hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : "")) && n) } n.escapeSelector || (n.escapeSelector = function (t) { return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function (t, e) { return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t }) }), n(function () { !1 !== n.fancybox.defaults.hash && (n(e).on({ "onInit.fb": function (t, e) { var n, i; !1 !== e.group[e.currIndex].opts.hash && (n = o(), (i = a(e)) && n.gallery && i == n.gallery && (e.currIndex = n.index - 1)) }, "beforeShow.fb": function (n, o, i, s) { var r; i && !1 !== i.opts.hash && (r = a(o)) && (o.currentHash = r + (o.group.length > 1 ? "-" + (i.index + 1) : ""), t.location.hash !== "#" + o.currentHash && (s && !o.origHash && (o.origHash = t.location.hash), o.hashTimer && clearTimeout(o.hashTimer), o.hashTimer = setTimeout(function () { "replaceState" in t.history ? (t.history[s ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + o.currentHash), s && (o.hasCreatedHistory = !0)) : t.location.hash = o.currentHash, o.hashTimer = null }, 300))) }, "beforeClose.fb": function (n, o, i) { i && !1 !== i.opts.hash && (clearTimeout(o.hashTimer), o.currentHash && o.hasCreatedHistory ? t.history.back() : o.currentHash && ("replaceState" in t.history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + (o.origHash || "")) : t.location.hash = o.origHash), o.currentHash = null) } }), n(t).on("hashchange.fb", function () { var t = o(), e = null; n.each(n(".fancybox-container").get().reverse(), function (t, o) { var i = n(o).data("FancyBox"); if (i && i.currentHash) return e = i, !1 }), e ? e.currentHash === t.gallery + "-" + t.index || 1 === t.index && e.currentHash == t.gallery || (e.currentHash = null, e.close()) : "" !== t.gallery && i(t) }), setTimeout(function () { n.fancybox.getInstance() || i(o()) }, 50)) }) }(window, document, jQuery), function (t, e) { "use strict"; var n = (new Date).getTime(); e(t).on({ "onInit.fb": function (t, e, o) { e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (t) { var o = e.current, i = (new Date).getTime(); e.group.length < 2 || !1 === o.opts.wheel || "auto" === o.opts.wheel && "image" !== o.type || (t.preventDefault(), t.stopPropagation(), o.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t, i - n < 250 || (n = i, e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]()))) }) } }) }(document, jQuery);

/*! lazysizes - v4.1.7 */
!(function (a, b) {
  var c = b(a, a.document);
  (a.lazySizes = c),
    "object" == typeof module && module.exports && (module.exports = c);
})(window, function (a, b) {
  "use strict";
  if (b.getElementsByClassName) {
    var c,
      d,
      e = b.documentElement,
      f = a.Date,
      g = a.HTMLPictureElement,
      h = "addEventListener",
      i = "getAttribute",
      j = a[h],
      k = a.setTimeout,
      l = a.requestAnimationFrame || k,
      m = a.requestIdleCallback,
      n = /^picture$/i,
      o = ["load", "error", "lazyincluded", "_lazyloaded"],
      p = {},
      q = Array.prototype.forEach,
      r = function (a, b) {
        return (
          p[b] || (p[b] = new RegExp("(\\s|^)" + b + "(\\s|$)")),
          p[b].test(a[i]("class") || "") && p[b]
        );
      },
      s = function (a, b) {
        r(a, b) ||
          a.setAttribute("class", (a[i]("class") || "").trim() + " " + b);
      },
      t = function (a, b) {
        var c;
        (c = r(a, b)) &&
          a.setAttribute("class", (a[i]("class") || "").replace(c, " "));
      },
      u = function (a, b, c) {
        var d = c ? h : "removeEventListener";
        c && u(a, b),
          o.forEach(function (c) {
            a[d](c, b);
          });
      },
      v = function (a, d, e, f, g) {
        var h = b.createEvent("Event");
        return (
          e || (e = {}),
          (e.instance = c),
          h.initEvent(d, !f, !g),
          (h.detail = e),
          a.dispatchEvent(h),
          h
        );
      },
      w = function (b, c) {
        var e;
        !g && (e = a.picturefill || d.pf)
          ? (c && c.src && !b[i]("srcset") && b.setAttribute("srcset", c.src),
            e({ reevaluate: !0, elements: [b] }))
          : c && c.src && (b.src = c.src);
      },
      x = function (a, b) {
        return (getComputedStyle(a, null) || {})[b];
      },
      y = function (a, b, c) {
        for (c = c || a.offsetWidth; c < d.minSize && b && !a._lazysizesWidth; )
          (c = b.offsetWidth), (b = b.parentNode);
        return c;
      },
      z = (function () {
        var a,
          c,
          d = [],
          e = [],
          f = d,
          g = function () {
            var b = f;
            for (f = d.length ? e : d, a = !0, c = !1; b.length; ) b.shift()();
            a = !1;
          },
          h = function (d, e) {
            a && !e
              ? d.apply(this, arguments)
              : (f.push(d), c || ((c = !0), (b.hidden ? k : l)(g)));
          };
        return (h._lsFlush = g), h;
      })(),
      A = function (a, b) {
        return b
          ? function () {
              z(a);
            }
          : function () {
              var b = this,
                c = arguments;
              z(function () {
                a.apply(b, c);
              });
            };
      },
      B = function (a) {
        var b,
          c = 0,
          e = d.throttleDelay,
          g = d.ricTimeout,
          h = function () {
            (b = !1), (c = f.now()), a();
          },
          i =
            m && g > 49
              ? function () {
                  m(h, { timeout: g }),
                    g !== d.ricTimeout && (g = d.ricTimeout);
                }
              : A(function () {
                  k(h);
                }, !0);
        return function (a) {
          var d;
          (a = !0 === a) && (g = 33),
            b ||
              ((b = !0),
              (d = e - (f.now() - c)),
              d < 0 && (d = 0),
              a || d < 9 ? i() : k(i, d));
        };
      },
      C = function (a) {
        var b,
          c,
          d = 99,
          e = function () {
            (b = null), a();
          },
          g = function () {
            var a = f.now() - c;
            a < d ? k(g, d - a) : (m || e)(e);
          };
        return function () {
          (c = f.now()), b || (b = k(g, d));
        };
      };
    !(function () {
      var b,
        c = {
          lazyClass: "lazyload",
          loadedClass: "lazyloaded",
          loadingClass: "lazyloading",
          preloadClass: "lazypreload",
          errorClass: "lazyerror",
          autosizesClass: "lazyautosizes",
          srcAttr: "data-src",
          srcsetAttr: "data-srcset",
          sizesAttr: "data-sizes",
          minSize: 40,
          customMedia: {},
          init: !0,
          expFactor: 1.5,
          hFac: 0.8,
          loadMode: 2,
          loadHidden: !0,
          ricTimeout: 0,
          throttleDelay: 125,
        };
      d = a.lazySizesConfig || a.lazysizesConfig || {};
      for (b in c) b in d || (d[b] = c[b]);
      (a.lazySizesConfig = d),
        k(function () {
          d.init && F();
        });
    })();
    var D = (function () {
        var g,
          l,
          m,
          o,
          p,
          y,
          D,
          F,
          G,
          H,
          I,
          J,
          K = /^img$/i,
          L = /^iframe$/i,
          M = "onscroll" in a && !/(gle|ing)bot/.test(navigator.userAgent),
          N = 0,
          O = 0,
          P = 0,
          Q = -1,
          R = function (a) {
            P--, (!a || P < 0 || !a.target) && (P = 0);
          },
          S = function (a) {
            return (
              null == J && (J = "hidden" == x(b.body, "visibility")),
              J ||
                ("hidden" != x(a.parentNode, "visibility") &&
                  "hidden" != x(a, "visibility"))
            );
          },
          T = function (a, c) {
            var d,
              f = a,
              g = S(a);
            for (
              F -= c, I += c, G -= c, H += c;
              g && (f = f.offsetParent) && f != b.body && f != e;

            )
              (g = (x(f, "opacity") || 1) > 0) &&
                "visible" != x(f, "overflow") &&
                ((d = f.getBoundingClientRect()),
                (g =
                  H > d.left &&
                  G < d.right &&
                  I > d.top - 1 &&
                  F < d.bottom + 1));
            return g;
          },
          U = function () {
            var a,
              f,
              h,
              j,
              k,
              m,
              n,
              p,
              q,
              r,
              s,
              t,
              u = c.elements;
            if ((o = d.loadMode) && P < 8 && (a = u.length)) {
              for (
                f = 0,
                  Q++,
                  r =
                    !d.expand || d.expand < 1
                      ? e.clientHeight > 500 && e.clientWidth > 500
                        ? 500
                        : 370
                      : d.expand,
                  c._defEx = r,
                  s = r * d.expFactor,
                  t = d.hFac,
                  J = null,
                  O < s && P < 1 && Q > 2 && o > 2 && !b.hidden
                    ? ((O = s), (Q = 0))
                    : (O = o > 1 && Q > 1 && P < 6 ? r : N);
                f < a;
                f++
              )
                if (u[f] && !u[f]._lazyRace)
                  if (M)
                    if (
                      (((p = u[f][i]("data-expand")) && (m = 1 * p)) || (m = O),
                      q !== m &&
                        ((y = innerWidth + m * t),
                        (D = innerHeight + m),
                        (n = -1 * m),
                        (q = m)),
                      (h = u[f].getBoundingClientRect()),
                      (I = h.bottom) >= n &&
                        (F = h.top) <= D &&
                        (H = h.right) >= n * t &&
                        (G = h.left) <= y &&
                        (I || H || G || F) &&
                        (d.loadHidden || S(u[f])) &&
                        ((l && P < 3 && !p && (o < 3 || Q < 4)) || T(u[f], m)))
                    ) {
                      if ((aa(u[f]), (k = !0), P > 9)) break;
                    } else
                      !k &&
                        l &&
                        !j &&
                        P < 4 &&
                        Q < 4 &&
                        o > 2 &&
                        (g[0] || d.preloadAfterLoad) &&
                        (g[0] ||
                          (!p &&
                            (I ||
                              H ||
                              G ||
                              F ||
                              "auto" != u[f][i](d.sizesAttr)))) &&
                        (j = g[0] || u[f]);
                  else aa(u[f]);
              j && !k && aa(j);
            }
          },
          V = B(U),
          W = function (a) {
            var b = a.target;
            if (b._lazyCache) return void delete b._lazyCache;
            R(a),
              s(b, d.loadedClass),
              t(b, d.loadingClass),
              u(b, Y),
              v(b, "lazyloaded");
          },
          X = A(W),
          Y = function (a) {
            X({ target: a.target });
          },
          Z = function (a, b) {
            try {
              a.contentWindow.location.replace(b);
            } catch (c) {
              a.src = b;
            }
          },
          $ = function (a) {
            var b,
              c = a[i](d.srcsetAttr);
            (b = d.customMedia[a[i]("data-media") || a[i]("media")]) &&
              a.setAttribute("media", b),
              c && a.setAttribute("srcset", c);
          },
          _ = A(function (a, b, c, e, f) {
            var g, h, j, l, o, p;
            (o = v(a, "lazybeforeunveil", b)).defaultPrevented ||
              (e && (c ? s(a, d.autosizesClass) : a.setAttribute("sizes", e)),
              (h = a[i](d.srcsetAttr)),
              (g = a[i](d.srcAttr)),
              f && ((j = a.parentNode), (l = j && n.test(j.nodeName || ""))),
              (p = b.firesLoad || ("src" in a && (h || g || l))),
              (o = { target: a }),
              s(a, d.loadingClass),
              p && (clearTimeout(m), (m = k(R, 2500)), u(a, Y, !0)),
              l && q.call(j.getElementsByTagName("source"), $),
              h
                ? a.setAttribute("srcset", h)
                : g && !l && (L.test(a.nodeName) ? Z(a, g) : (a.src = g)),
              f && (h || l) && w(a, { src: g })),
              a._lazyRace && delete a._lazyRace,
              t(a, d.lazyClass),
              z(function () {
                (!p || (a.complete && a.naturalWidth > 1)) &&
                  (W(o),
                  (a._lazyCache = !0),
                  k(function () {
                    "_lazyCache" in a && delete a._lazyCache;
                  }, 9));
              }, !0);
          }),
          aa = function (a) {
            var b,
              c = K.test(a.nodeName),
              e = c && (a[i](d.sizesAttr) || a[i]("sizes")),
              f = "auto" == e;
            ((!f && l) ||
              !c ||
              (!a[i]("src") && !a.srcset) ||
              a.complete ||
              r(a, d.errorClass) ||
              !r(a, d.lazyClass)) &&
              ((b = v(a, "lazyunveilread").detail),
              f && E.updateElem(a, !0, a.offsetWidth),
              (a._lazyRace = !0),
              P++,
              _(a, b, f, e, c));
          },
          ba = function () {
            if (!l) {
              if (f.now() - p < 999) return void k(ba, 999);
              var a = C(function () {
                (d.loadMode = 3), V();
              });
              (l = !0),
                (d.loadMode = 3),
                V(),
                j(
                  "scroll",
                  function () {
                    3 == d.loadMode && (d.loadMode = 2), a();
                  },
                  !0
                );
            }
          };
        return {
          _: function () {
            (p = f.now()),
              (c.elements = b.getElementsByClassName(d.lazyClass)),
              (g = b.getElementsByClassName(
                d.lazyClass + " " + d.preloadClass
              )),
              j("scroll", V, !0),
              j("resize", V, !0),
              a.MutationObserver
                ? new MutationObserver(V).observe(e, {
                    childList: !0,
                    subtree: !0,
                    attributes: !0,
                  })
                : (e[h]("DOMNodeInserted", V, !0),
                  e[h]("DOMAttrModified", V, !0),
                  setInterval(V, 999)),
              j("hashchange", V, !0),
              [
                "focus",
                "mouseover",
                "click",
                "load",
                "transitionend",
                "animationend",
                "webkitAnimationEnd",
              ].forEach(function (a) {
                b[h](a, V, !0);
              }),
              /d$|^c/.test(b.readyState)
                ? ba()
                : (j("load", ba), b[h]("DOMContentLoaded", V), k(ba, 2e4)),
              c.elements.length ? (U(), z._lsFlush()) : V();
          },
          checkElems: V,
          unveil: aa,
        };
      })(),
      E = (function () {
        var a,
          c = A(function (a, b, c, d) {
            var e, f, g;
            if (
              ((a._lazysizesWidth = d),
              (d += "px"),
              a.setAttribute("sizes", d),
              n.test(b.nodeName || ""))
            )
              for (
                e = b.getElementsByTagName("source"), f = 0, g = e.length;
                f < g;
                f++
              )
                e[f].setAttribute("sizes", d);
            c.detail.dataAttr || w(a, c.detail);
          }),
          e = function (a, b, d) {
            var e,
              f = a.parentNode;
            f &&
              ((d = y(a, f, d)),
              (e = v(a, "lazybeforesizes", { width: d, dataAttr: !!b })),
              e.defaultPrevented ||
                ((d = e.detail.width) &&
                  d !== a._lazysizesWidth &&
                  c(a, f, e, d)));
          },
          f = function () {
            var b,
              c = a.length;
            if (c) for (b = 0; b < c; b++) e(a[b]);
          },
          g = C(f);
        return {
          _: function () {
            (a = b.getElementsByClassName(d.autosizesClass)), j("resize", g);
          },
          checkElems: g,
          updateElem: e,
        };
      })(),
      F = function () {
        F.i || ((F.i = !0), E._(), D._());
      };
    return (c = {
      cfg: d,
      autoSizer: E,
      loader: D,
      init: F,
      uP: w,
      aC: s,
      rC: t,
      hC: r,
      fire: v,
      gW: y,
      rAF: z,
    });
  }
});

document.addEventListener("lazybeforeunveil", function (e) {
  var bg = e.target.getAttribute("data-bg");
  if (bg) {
    e.target.style.backgroundImage = "url(" + bg + ")";
  }
});


/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.9.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
(function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)})(function(i){"use strict";var e=window.Slick||{};e=function(){function e(e,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(e),appendDots:i(e),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(e),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(e).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,"undefined"!=typeof document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=t++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}var t=0;return e}(),e.prototype.activateADA=function(){var i=this;i.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):o===!0?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&i.options.adaptiveHeight===!0&&i.options.vertical===!1){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),s.options.rtl===!0&&s.options.vertical===!1&&(e=-e),s.transformsEnabled===!1?s.options.vertical===!1?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):s.cssTransitions===!1?(s.options.rtl===!0&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),s.options.vertical===!1?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),s.options.vertical===!1?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this,o=t.getNavTarget();null!==o&&"object"==typeof o&&o.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};e.options.fade===!1?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,e.options.fade===!1?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(i.options.infinite===!1&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1===0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;e.options.arrows===!0&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),e.options.infinite!==!0&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(o.options.dots===!0&&o.slideCount>o.options.slidesToShow){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),e.options.centerMode!==!0&&e.options.swipeToSlide!==!0||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.options.draggable===!0&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>0){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(r.originalSettings.mobileFirst===!1?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),e===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),e===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,e===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||l===!1||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!==0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t,o=this;if(e=o.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var s in e){if(i<e[s]){i=t;break}t=e[s]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),e.options.accessibility===!0&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),e.options.accessibility===!0&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),e.options.accessibility===!0&&e.$list.off("keydown.slick",e.keyHandler),e.options.focusOnSelect===!0&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>0&&(i=e.$slides.children().children(),i.removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){var e=this;e.shouldClick===!1&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",e.options.fade===!1?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;t.cssTransitions===!1?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;e.cssTransitions===!1?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick","*",function(t){var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&o.is(":focus")&&(e.focussed=!0,e.autoPlay())},0)}).on("blur.slick","*",function(t){i(this);e.options.pauseOnFocus&&(e.focussed=!1,e.autoPlay())})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){var i=this;return i.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(i.options.infinite===!0)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(i.options.centerMode===!0)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),n.options.infinite===!0?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,n.options.vertical===!0&&n.options.centerMode===!0&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!==0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),n.options.centerMode===!0&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:n.options.centerMode===!0&&n.options.infinite===!0?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:n.options.centerMode===!0&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=n.options.vertical===!1?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,n.options.variableWidth===!0&&(o=n.slideCount<=n.options.slidesToShow||n.options.infinite===!1?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=n.options.rtl===!0?o[0]?(n.$slideTrack.width()-o[0].offsetLeft-o.width())*-1:0:o[0]?o[0].offsetLeft*-1:0,n.options.centerMode===!0&&(o=n.slideCount<=n.options.slidesToShow||n.options.infinite===!1?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=n.options.rtl===!0?o[0]?(n.$slideTrack.width()-o[0].offsetLeft-o.width())*-1:0:o[0]?o[0].offsetLeft*-1:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){var e=this;return e.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(e.options.infinite===!1?i=e.slideCount:(t=e.options.slidesToScroll*-1,o=e.options.slidesToScroll*-1,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o,s,n=this;return s=n.options.centerMode===!0?Math.floor(n.$list.width()/2):0,o=n.swipeLeft*-1+s,n.options.swipeToSlide===!0?(n.$slideTrack.find(".slick-slide").each(function(e,s){var r,l,d;if(r=i(s).outerWidth(),l=s.offsetLeft,n.options.centerMode!==!0&&(l+=r/2),d=l+r,o<d)return t=s,!1}),e=Math.abs(i(t).attr("data-slick-index")-n.currentSlide)||1):n.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){var t=this;t.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),t.options.accessibility===!0&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);if(i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),s!==-1){var n="slick-slide-control"+e.instanceUid+s;i("#"+n).length&&i(this).attr({"aria-describedby":n})}}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.options.focusOnChange?e.$slides.eq(s).attr({tabindex:"0"}):e.$slides.eq(s).removeAttr("tabindex");e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;i.options.arrows===!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),i.options.accessibility===!0&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;e.options.dots===!0&&e.slideCount>e.options.slidesToShow&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),e.options.accessibility===!0&&e.$dots.on("keydown.slick",e.keyHandler)),e.options.dots===!0&&e.options.pauseOnDotsHover===!0&&e.slideCount>e.options.slidesToShow&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),e.options.accessibility===!0&&e.$list.on("keydown.slick",e.keyHandler),e.options.focusOnSelect===!0&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;i.options.arrows===!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),i.options.dots===!0&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&e.options.accessibility===!0?e.changeSlide({data:{message:e.options.rtl===!0?"next":"previous"}}):39===i.keyCode&&e.options.accessibility===!0&&e.changeSlide({data:{message:e.options.rtl===!0?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||r.$slider.attr("data-sizes"),n=document.createElement("img");n.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),r.$slider.trigger("lazyLoaded",[r,e,t])})},n.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),r.$slider.trigger("lazyLoadError",[r,e,t])},n.src=t})}var t,o,s,n,r=this;if(r.options.centerMode===!0?r.options.infinite===!0?(s=r.currentSlide+(r.options.slidesToShow/2+1),n=s+r.options.slidesToShow+2):(s=Math.max(0,r.currentSlide-(r.options.slidesToShow/2+1)),n=2+(r.options.slidesToShow/2+1)+r.currentSlide):(s=r.options.infinite?r.options.slidesToShow+r.currentSlide:r.currentSlide,n=Math.ceil(s+r.options.slidesToShow),r.options.fade===!0&&(s>0&&s--,n<=r.slideCount&&n++)),t=r.$slider.find(".slick-slide").slice(s,n),"anticipated"===r.options.lazyLoad)for(var l=s-1,d=n,a=r.$slider.find(".slick-slide"),c=0;c<r.options.slidesToScroll;c++)l<0&&(l=r.slideCount-1),t=t.add(a.eq(l)),t=t.add(a.eq(d)),l--,d++;e(t),r.slideCount<=r.options.slidesToShow?(o=r.$slider.find(".slick-slide"),e(o)):r.currentSlide>=r.slideCount-r.options.slidesToShow?(o=r.$slider.find(".slick-cloned").slice(0,r.options.slidesToShow),e(o)):0===r.currentSlide&&(o=r.$slider.find(".slick-cloned").slice(r.options.slidesToShow*-1),e(o))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){var i=this;i.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;if(!t.unslicked&&(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),t.options.accessibility===!0&&(t.initADA(),t.options.focusOnChange))){var o=i(t.$slides.get(t.currentSlide));o.attr("tabindex",0).focus()}},e.prototype.prev=e.prototype.slickPrev=function(){var i=this;i.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),r=document.createElement("img"),r.onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),l.options.adaptiveHeight===!0&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),e.options.focusOnSelect===!0&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;return"boolean"==typeof i?(e=i,i=e===!0?0:o.slideCount-1):i=e===!0?--i:i,!(o.slideCount<1||i<0||i>o.slideCount-1)&&(o.unload(),t===!0?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,void o.reinit())},e.prototype.setCSS=function(i){var e,t,o=this,s={};o.options.rtl===!0&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,o.transformsEnabled===!1?o.$slideTrack.css(s):(s={},o.cssTransitions===!1?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;i.options.vertical===!1?i.options.centerMode===!0&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),i.options.centerMode===!0&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),i.options.vertical===!1&&i.options.variableWidth===!1?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):i.options.variableWidth===!0?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();i.options.variableWidth===!1&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,t.options.rtl===!0?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&i.options.adaptiveHeight===!0&&i.options.vertical===!1){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":"undefined"!=typeof arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),i.options.fade===!1?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=i.options.vertical===!0?"top":"left",
"top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||i.options.useCSS===!0&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&i.animType!==!1&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&i.animType!==!1},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),n.options.centerMode===!0){var r=n.options.slidesToShow%2===0?1:0;e=Math.floor(n.options.slidesToShow/2),n.options.infinite===!0&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=n.options.infinite===!0?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(s.options.fade===!0&&(s.options.centerMode=!1),s.options.infinite===!0&&s.options.fade===!1&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=s.options.centerMode===!0?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));return s||(s=0),t.slideCount<=t.options.slidesToShow?void t.slideHandler(s,!1,!0):void t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(a.animating===!0&&a.options.waitForAnimate===!0||a.options.fade===!0&&a.currentSlide===i))return e===!1&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,a.options.infinite===!1&&a.options.centerMode===!1&&(i<0||i>a.getDotCount()*a.options.slidesToScroll)?void(a.options.fade===!1&&(o=a.currentSlide,t!==!0&&a.slideCount>a.options.slidesToShow?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o))):a.options.infinite===!1&&a.options.centerMode===!0&&(i<0||i>a.slideCount-a.options.slidesToScroll)?void(a.options.fade===!1&&(o=a.currentSlide,t!==!0&&a.slideCount>a.options.slidesToShow?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o))):(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!==0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!==0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=a.getNavTarget(),l=l.slick("getSlick"),l.slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide)),a.updateDots(),a.updateArrows(),a.options.fade===!0?(t!==!0?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight()):void(t!==!0&&a.slideCount>a.options.slidesToShow?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)))},e.prototype.startLoad=function(){var i=this;i.options.arrows===!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),i.options.dots===!0&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),o=Math.round(180*t/Math.PI),o<0&&(o=360-Math.abs(o)),o<=45&&o>=0?s.options.rtl===!1?"left":"right":o<=360&&o>=315?s.options.rtl===!1?"left":"right":o>=135&&o<=225?s.options.rtl===!1?"right":"left":s.options.verticalSwiping===!0?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(o.touchObject.edgeHit===!0&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(e.options.swipe===!1||"ontouchend"in document&&e.options.swipe===!1||e.options.draggable===!1&&i.type.indexOf("mouse")!==-1))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,e.options.verticalSwiping===!0&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(l.options.verticalSwiping===!0&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(l.options.rtl===!1?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),l.options.verticalSwiping===!0&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,l.options.infinite===!1&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),l.options.vertical===!1?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,l.options.verticalSwiping===!0&&(l.swipeLeft=e+o*s),l.options.fade!==!0&&l.options.touchMove!==!1&&(l.animating===!0?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;return t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow?(t.touchObject={},!1):(void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,void(t.dragging=!0))},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i,e=this;i=Math.floor(e.options.slidesToShow/2),e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&!e.options.infinite&&(e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===e.currentSlide?(e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):e.currentSlide>=e.slideCount-e.options.slidesToShow&&e.options.centerMode===!1?(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):e.currentSlide>=e.slideCount-1&&e.options.centerMode===!0&&(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||"undefined"==typeof s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),"undefined"!=typeof t)return t;return o}});


/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

/**
 * Bridget makes jQuery widgets
 * v2.0.1
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /* globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'jquery-bridget/jquery-bridget',[ 'jquery' ], function( jQuery ) {
      return factory( window, jQuery );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('jquery')
    );
  } else {
    // browser global
    window.jQueryBridget = factory(
      window,
      window.jQuery
    );
  }

}( window, function factory( window, jQuery ) {
'use strict';

// ----- utils ----- //

var arraySlice = Array.prototype.slice;

// helper function for logging errors
// $.error breaks jQuery chaining
var console = window.console;
var logError = typeof console == 'undefined' ? function() {} :
  function( message ) {
    console.error( message );
  };

// ----- jQueryBridget ----- //

function jQueryBridget( namespace, PluginClass, $ ) {
  $ = $ || jQuery || window.jQuery;
  if ( !$ ) {
    return;
  }

  // add option method -> $().plugin('option', {...})
  if ( !PluginClass.prototype.option ) {
    // option setter
    PluginClass.prototype.option = function( opts ) {
      // bail out if not an object
      if ( !$.isPlainObject( opts ) ){
        return;
      }
      this.options = $.extend( true, this.options, opts );
    };
  }

  // make jQuery plugin
  $.fn[ namespace ] = function( arg0 /*, arg1 */ ) {
    if ( typeof arg0 == 'string' ) {
      // method call $().plugin( 'methodName', { options } )
      // shift arguments by 1
      var args = arraySlice.call( arguments, 1 );
      return methodCall( this, arg0, args );
    }
    // just $().plugin({ options })
    plainCall( this, arg0 );
    return this;
  };

  // $().plugin('methodName')
  function methodCall( $elems, methodName, args ) {
    var returnValue;
    var pluginMethodStr = '$().' + namespace + '("' + methodName + '")';

    $elems.each( function( i, elem ) {
      // get instance
      var instance = $.data( elem, namespace );
      if ( !instance ) {
        logError( namespace + ' not initialized. Cannot call methods, i.e. ' +
          pluginMethodStr );
        return;
      }

      var method = instance[ methodName ];
      if ( !method || methodName.charAt(0) == '_' ) {
        logError( pluginMethodStr + ' is not a valid method' );
        return;
      }

      // apply method, get return value
      var value = method.apply( instance, args );
      // set return value if value is returned, use only first value
      returnValue = returnValue === undefined ? value : returnValue;
    });

    return returnValue !== undefined ? returnValue : $elems;
  }

  function plainCall( $elems, options ) {
    $elems.each( function( i, elem ) {
      var instance = $.data( elem, namespace );
      if ( instance ) {
        // set options & init
        instance.option( options );
        instance._init();
      } else {
        // initialize new instance
        instance = new PluginClass( elem, options );
        $.data( elem, namespace, instance );
      }
    });
  }

  updateJQuery( $ );

}

// ----- updateJQuery ----- //

// set $.bridget for v1 backwards compatibility
function updateJQuery( $ ) {
  if ( !$ || ( $ && $.bridget ) ) {
    return;
  }
  $.bridget = jQueryBridget;
}

updateJQuery( jQuery || window.jQuery );

// -----  ----- //

return jQueryBridget;

}));

/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'ev-emitter/ev-emitter',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }

}( typeof window != 'undefined' ? window : this, function() {



function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice(0);
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( var i=0; i < listeners.length; i++ ) {
    var listener = listeners[i]
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
};

return EvEmitter;

}));

/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */
/* globals console: false */

( function( window, factory ) {
  /* jshint strict: false */ /* globals define, module */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'get-size/get-size',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.getSize = factory();
  }

})( window, function factory() {
'use strict';

// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
function getStyleSize( value ) {
  var num = parseFloat( value );
  // not a percent like '100%', and a number
  var isValid = value.indexOf('%') == -1 && !isNaN( num );
  return isValid && num;
}

function noop() {}

var logError = typeof console == 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

// -------------------------- measurements -------------------------- //

var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

var measurementsLength = measurements.length;

function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}

// -------------------------- getStyle -------------------------- //

/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function getStyle( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    logError( 'Style returned ' + style +
      '. Are you running this code in a hidden iframe on Firefox? ' +
      'See https://bit.ly/getsizebug1' );
  }
  return style;
}

// -------------------------- setup -------------------------- //

var isSetup = false;

var isBoxSizeOuter;

/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */
function setup() {
  // setup once
  if ( isSetup ) {
    return;
  }
  isSetup = true;

  // -------------------------- box sizing -------------------------- //

  /**
   * Chrome & Safari measure the outer-width on style.width on border-box elems
   * IE11 & Firefox<29 measures the inner-width
   */
  var div = document.createElement('div');
  div.style.width = '200px';
  div.style.padding = '1px 2px 3px 4px';
  div.style.borderStyle = 'solid';
  div.style.borderWidth = '1px 2px 3px 4px';
  div.style.boxSizing = 'border-box';

  var body = document.body || document.documentElement;
  body.appendChild( div );
  var style = getStyle( div );
  // round value for browser zoom. desandro/masonry#928
  isBoxSizeOuter = Math.round( getStyleSize( style.width ) ) == 200;
  getSize.isBoxSizeOuter = isBoxSizeOuter;

  body.removeChild( div );
}

// -------------------------- getSize -------------------------- //

function getSize( elem ) {
  setup();

  // use querySeletor if elem is string
  if ( typeof elem == 'string' ) {
    elem = document.querySelector( elem );
  }

  // do not proceed on non-objects
  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
    return;
  }

  var style = getStyle( elem );

  // if hidden, everything is 0
  if ( style.display == 'none' ) {
    return getZeroSize();
  }

  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

  // get all measurements
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    var num = parseFloat( value );
    // any 'auto', 'medium' value will be 0
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  // overwrite width and height if we can get it from style
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }

  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }

  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;

  return size;
}

return getSize;

});

/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  /*global define: false, module: false */
  'use strict';
  // universal module definition
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'desandro-matches-selector/matches-selector',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.matchesSelector = factory();
  }

}( window, function factory() {
  'use strict';

  var matchesMethod = ( function() {
    var ElemProto = window.Element.prototype;
    // check for the standard method name first
    if ( ElemProto.matches ) {
      return 'matches';
    }
    // check un-prefixed
    if ( ElemProto.matchesSelector ) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

    for ( var i=0; i < prefixes.length; i++ ) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if ( ElemProto[ method ] ) {
        return method;
      }
    }
  })();

  return function matchesSelector( elem, selector ) {
    return elem[ matchesMethod ]( selector );
  };

}));

/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'fizzy-ui-utils/utils',[
      'desandro-matches-selector/matches-selector'
    ], function( matchesSelector ) {
      return factory( window, matchesSelector );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('desandro-matches-selector')
    );
  } else {
    // browser global
    window.fizzyUIUtils = factory(
      window,
      window.matchesSelector
    );
  }

}( window, function factory( window, matchesSelector ) {



var utils = {};

// ----- extend ----- //

// extends objects
utils.extend = function( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
};

// ----- modulo ----- //

utils.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

// ----- makeArray ----- //

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
utils.makeArray = function( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }
  // return empty array if undefined or null. #6
  if ( obj === null || obj === undefined ) {
    return [];
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
};

// ----- removeFrom ----- //

utils.removeFrom = function( ary, obj ) {
  var index = ary.indexOf( obj );
  if ( index != -1 ) {
    ary.splice( index, 1 );
  }
};

// ----- getParent ----- //

utils.getParent = function( elem, selector ) {
  while ( elem.parentNode && elem != document.body ) {
    elem = elem.parentNode;
    if ( matchesSelector( elem, selector ) ) {
      return elem;
    }
  }
};

// ----- getQueryElement ----- //

// use element as selector string
utils.getQueryElement = function( elem ) {
  if ( typeof elem == 'string' ) {
    return document.querySelector( elem );
  }
  return elem;
};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// ----- filterFindElements ----- //

utils.filterFindElements = function( elems, selector ) {
  // make array of elems
  elems = utils.makeArray( elems );
  var ffElems = [];

  elems.forEach( function( elem ) {
    // check that elem is an actual element
    if ( !( elem instanceof HTMLElement ) ) {
      return;
    }
    // add elem if no selector
    if ( !selector ) {
      ffElems.push( elem );
      return;
    }
    // filter & find items if we have a selector
    // filter
    if ( matchesSelector( elem, selector ) ) {
      ffElems.push( elem );
    }
    // find children
    var childElems = elem.querySelectorAll( selector );
    // concat childElems to filterFound array
    for ( var i=0; i < childElems.length; i++ ) {
      ffElems.push( childElems[i] );
    }
  });

  return ffElems;
};

// ----- debounceMethod ----- //

utils.debounceMethod = function( _class, methodName, threshold ) {
  threshold = threshold || 100;
  // original method
  var method = _class.prototype[ methodName ];
  var timeoutName = methodName + 'Timeout';

  _class.prototype[ methodName ] = function() {
    var timeout = this[ timeoutName ];
    clearTimeout( timeout );

    var args = arguments;
    var _this = this;
    this[ timeoutName ] = setTimeout( function() {
      method.apply( _this, args );
      delete _this[ timeoutName ];
    }, threshold );
  };
};

// ----- docReady ----- //

utils.docReady = function( callback ) {
  var readyState = document.readyState;
  if ( readyState == 'complete' || readyState == 'interactive' ) {
    // do async to allow for other scripts to run. metafizzy/flickity#441
    setTimeout( callback );
  } else {
    document.addEventListener( 'DOMContentLoaded', callback );
  }
};

// ----- htmlInit ----- //

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
utils.toDashed = function( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  }).toLowerCase();
};

var console = window.console;
/**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */
utils.htmlInit = function( WidgetClass, namespace ) {
  utils.docReady( function() {
    var dashedNamespace = utils.toDashed( namespace );
    var dataAttr = 'data-' + dashedNamespace;
    var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
    var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
    var elems = utils.makeArray( dataAttrElems )
      .concat( utils.makeArray( jsDashElems ) );
    var dataOptionsAttr = dataAttr + '-options';
    var jQuery = window.jQuery;

    elems.forEach( function( elem ) {
      var attr = elem.getAttribute( dataAttr ) ||
        elem.getAttribute( dataOptionsAttr );
      var options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
          ': ' + error );
        }
        return;
      }
      // initialize
      var instance = new WidgetClass( elem, options );
      // make available via $().data('namespace')
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    });

  });
};

// -----  ----- //

return utils;

}));

/**
 * Outlayer Item
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'outlayer/item',[
        'ev-emitter/ev-emitter',
        'get-size/get-size'
      ],
      factory
    );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory(
      require('ev-emitter'),
      require('get-size')
    );
  } else {
    // browser global
    window.Outlayer = {};
    window.Outlayer.Item = factory(
      window.EvEmitter,
      window.getSize
    );
  }

}( window, function factory( EvEmitter, getSize ) {
'use strict';

// ----- helpers ----- //

function isEmptyObj( obj ) {
  for ( var prop in obj ) {
    return false;
  }
  prop = null;
  return true;
}

// -------------------------- CSS3 support -------------------------- //


var docElemStyle = document.documentElement.style;

var transitionProperty = typeof docElemStyle.transition == 'string' ?
  'transition' : 'WebkitTransition';
var transformProperty = typeof docElemStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';

var transitionEndEvent = {
  WebkitTransition: 'webkitTransitionEnd',
  transition: 'transitionend'
}[ transitionProperty ];

// cache all vendor properties that could have vendor prefix
var vendorProperties = {
  transform: transformProperty,
  transition: transitionProperty,
  transitionDuration: transitionProperty + 'Duration',
  transitionProperty: transitionProperty + 'Property',
  transitionDelay: transitionProperty + 'Delay'
};

// -------------------------- Item -------------------------- //

function Item( element, layout ) {
  if ( !element ) {
    return;
  }

  this.element = element;
  // parent layout class, i.e. Masonry, Isotope, or Packery
  this.layout = layout;
  this.position = {
    x: 0,
    y: 0
  };

  this._create();
}

// inherit EvEmitter
var proto = Item.prototype = Object.create( EvEmitter.prototype );
proto.constructor = Item;

proto._create = function() {
  // transition objects
  this._transn = {
    ingProperties: {},
    clean: {},
    onEnd: {}
  };

  this.css({
    position: 'absolute'
  });
};

// trigger specified handler for event type
proto.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * apply CSS styles to element
 * @param {Object} style
 */
proto.css = function( style ) {
  var elemStyle = this.element.style;

  for ( var prop in style ) {
    // use vendor property if available
    var supportedProp = vendorProperties[ prop ] || prop;
    elemStyle[ supportedProp ] = style[ prop ];
  }
};

 // measure position, and sets it
proto.getPosition = function() {
  var style = getComputedStyle( this.element );
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  var xValue = style[ isOriginLeft ? 'left' : 'right' ];
  var yValue = style[ isOriginTop ? 'top' : 'bottom' ];
  var x = parseFloat( xValue );
  var y = parseFloat( yValue );
  // convert percent to pixels
  var layoutSize = this.layout.size;
  if ( xValue.indexOf('%') != -1 ) {
    x = ( x / 100 ) * layoutSize.width;
  }
  if ( yValue.indexOf('%') != -1 ) {
    y = ( y / 100 ) * layoutSize.height;
  }
  // clean up 'auto' or other non-integer values
  x = isNaN( x ) ? 0 : x;
  y = isNaN( y ) ? 0 : y;
  // remove padding from measurement
  x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
  y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

  this.position.x = x;
  this.position.y = y;
};

// set settled position, apply padding
proto.layoutPosition = function() {
  var layoutSize = this.layout.size;
  var style = {};
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');

  // x
  var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
  var xProperty = isOriginLeft ? 'left' : 'right';
  var xResetProperty = isOriginLeft ? 'right' : 'left';

  var x = this.position.x + layoutSize[ xPadding ];
  // set in percentage or pixels
  style[ xProperty ] = this.getXValue( x );
  // reset other property
  style[ xResetProperty ] = '';

  // y
  var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
  var yProperty = isOriginTop ? 'top' : 'bottom';
  var yResetProperty = isOriginTop ? 'bottom' : 'top';

  var y = this.position.y + layoutSize[ yPadding ];
  // set in percentage or pixels
  style[ yProperty ] = this.getYValue( y );
  // reset other property
  style[ yResetProperty ] = '';

  this.css( style );
  this.emitEvent( 'layout', [ this ] );
};

proto.getXValue = function( x ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && !isHorizontal ?
    ( ( x / this.layout.size.width ) * 100 ) + '%' : x + 'px';
};

proto.getYValue = function( y ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && isHorizontal ?
    ( ( y / this.layout.size.height ) * 100 ) + '%' : y + 'px';
};

proto._transitionTo = function( x, y ) {
  this.getPosition();
  // get current x & y from top/left
  var curX = this.position.x;
  var curY = this.position.y;

  var didNotMove = x == this.position.x && y == this.position.y;

  // save end position
  this.setPosition( x, y );

  // if did not move and not transitioning, just go to layout
  if ( didNotMove && !this.isTransitioning ) {
    this.layoutPosition();
    return;
  }

  var transX = x - curX;
  var transY = y - curY;
  var transitionStyle = {};
  transitionStyle.transform = this.getTranslate( transX, transY );

  this.transition({
    to: transitionStyle,
    onTransitionEnd: {
      transform: this.layoutPosition
    },
    isCleaning: true
  });
};

proto.getTranslate = function( x, y ) {
  // flip cooridinates if origin on right or bottom
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  x = isOriginLeft ? x : -x;
  y = isOriginTop ? y : -y;
  return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
};

// non transition + transform support
proto.goTo = function( x, y ) {
  this.setPosition( x, y );
  this.layoutPosition();
};

proto.moveTo = proto._transitionTo;

proto.setPosition = function( x, y ) {
  this.position.x = parseFloat( x );
  this.position.y = parseFloat( y );
};

// ----- transition ----- //

/**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */

// non transition, just trigger callback
proto._nonTransition = function( args ) {
  this.css( args.to );
  if ( args.isCleaning ) {
    this._removeStyles( args.to );
  }
  for ( var prop in args.onTransitionEnd ) {
    args.onTransitionEnd[ prop ].call( this );
  }
};

/**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */
proto.transition = function( args ) {
  // redirect to nonTransition if no transition duration
  if ( !parseFloat( this.layout.options.transitionDuration ) ) {
    this._nonTransition( args );
    return;
  }

  var _transition = this._transn;
  // keep track of onTransitionEnd callback by css property
  for ( var prop in args.onTransitionEnd ) {
    _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
  }
  // keep track of properties that are transitioning
  for ( prop in args.to ) {
    _transition.ingProperties[ prop ] = true;
    // keep track of properties to clean up when transition is done
    if ( args.isCleaning ) {
      _transition.clean[ prop ] = true;
    }
  }

  // set from styles
  if ( args.from ) {
    this.css( args.from );
    // force redraw. http://blog.alexmaccaw.com/css-transitions
    var h = this.element.offsetHeight;
    // hack for JSHint to hush about unused var
    h = null;
  }
  // enable transition
  this.enableTransition( args.to );
  // set styles that are transitioning
  this.css( args.to );

  this.isTransitioning = true;

};

// dash before all cap letters, including first for
// WebkitTransform => -webkit-transform
function toDashedAll( str ) {
  return str.replace( /([A-Z])/g, function( $1 ) {
    return '-' + $1.toLowerCase();
  });
}

var transitionProps = 'opacity,' + toDashedAll( transformProperty );

proto.enableTransition = function(/* style */) {
  // HACK changing transitionProperty during a transition
  // will cause transition to jump
  if ( this.isTransitioning ) {
    return;
  }

  // make `transition: foo, bar, baz` from style object
  // HACK un-comment this when enableTransition can work
  // while a transition is happening
  // var transitionValues = [];
  // for ( var prop in style ) {
  //   // dash-ify camelCased properties like WebkitTransition
  //   prop = vendorProperties[ prop ] || prop;
  //   transitionValues.push( toDashedAll( prop ) );
  // }
  // munge number to millisecond, to match stagger
  var duration = this.layout.options.transitionDuration;
  duration = typeof duration == 'number' ? duration + 'ms' : duration;
  // enable transition styles
  this.css({
    transitionProperty: transitionProps,
    transitionDuration: duration,
    transitionDelay: this.staggerDelay || 0
  });
  // listen for transition end event
  this.element.addEventListener( transitionEndEvent, this, false );
};

// ----- events ----- //

proto.onwebkitTransitionEnd = function( event ) {
  this.ontransitionend( event );
};

proto.onotransitionend = function( event ) {
  this.ontransitionend( event );
};

// properties that I munge to make my life easier
var dashedVendorProperties = {
  '-webkit-transform': 'transform'
};

proto.ontransitionend = function( event ) {
  // disregard bubbled events from children
  if ( event.target !== this.element ) {
    return;
  }
  var _transition = this._transn;
  // get property name of transitioned property, convert to prefix-free
  var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;

  // remove property that has completed transitioning
  delete _transition.ingProperties[ propertyName ];
  // check if any properties are still transitioning
  if ( isEmptyObj( _transition.ingProperties ) ) {
    // all properties have completed transitioning
    this.disableTransition();
  }
  // clean style
  if ( propertyName in _transition.clean ) {
    // clean up style
    this.element.style[ event.propertyName ] = '';
    delete _transition.clean[ propertyName ];
  }
  // trigger onTransitionEnd callback
  if ( propertyName in _transition.onEnd ) {
    var onTransitionEnd = _transition.onEnd[ propertyName ];
    onTransitionEnd.call( this );
    delete _transition.onEnd[ propertyName ];
  }

  this.emitEvent( 'transitionEnd', [ this ] );
};

proto.disableTransition = function() {
  this.removeTransitionStyles();
  this.element.removeEventListener( transitionEndEvent, this, false );
  this.isTransitioning = false;
};

/**
 * removes style property from element
 * @param {Object} style
**/
proto._removeStyles = function( style ) {
  // clean up transition styles
  var cleanStyle = {};
  for ( var prop in style ) {
    cleanStyle[ prop ] = '';
  }
  this.css( cleanStyle );
};

var cleanTransitionStyle = {
  transitionProperty: '',
  transitionDuration: '',
  transitionDelay: ''
};

proto.removeTransitionStyles = function() {
  // remove transition
  this.css( cleanTransitionStyle );
};

// ----- stagger ----- //

proto.stagger = function( delay ) {
  delay = isNaN( delay ) ? 0 : delay;
  this.staggerDelay = delay + 'ms';
};

// ----- show/hide/remove ----- //

// remove element from DOM
proto.removeElem = function() {
  this.element.parentNode.removeChild( this.element );
  // remove display: none
  this.css({ display: '' });
  this.emitEvent( 'remove', [ this ] );
};

proto.remove = function() {
  // just remove element if no transition support or no transition
  if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
    this.removeElem();
    return;
  }

  // start transition
  this.once( 'transitionEnd', function() {
    this.removeElem();
  });
  this.hide();
};

proto.reveal = function() {
  delete this.isHidden;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onRevealTransitionEnd;

  this.transition({
    from: options.hiddenStyle,
    to: options.visibleStyle,
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onRevealTransitionEnd = function() {
  // check if still visible
  // during transition, item may have been hidden
  if ( !this.isHidden ) {
    this.emitEvent('reveal');
  }
};

/**
 * get style property use for hide/reveal transition end
 * @param {String} styleProperty - hiddenStyle/visibleStyle
 * @returns {String}
 */
proto.getHideRevealTransitionEndProperty = function( styleProperty ) {
  var optionStyle = this.layout.options[ styleProperty ];
  // use opacity
  if ( optionStyle.opacity ) {
    return 'opacity';
  }
  // get first property
  for ( var prop in optionStyle ) {
    return prop;
  }
};

proto.hide = function() {
  // set flag
  this.isHidden = true;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onHideTransitionEnd;

  this.transition({
    from: options.visibleStyle,
    to: options.hiddenStyle,
    // keep hidden stuff hidden
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onHideTransitionEnd = function() {
  // check if still hidden
  // during transition, item may have been un-hidden
  if ( this.isHidden ) {
    this.css({ display: 'none' });
    this.emitEvent('hide');
  }
};

proto.destroy = function() {
  this.css({
    position: '',
    left: '',
    right: '',
    top: '',
    bottom: '',
    transition: '',
    transform: ''
  });
};

return Item;

}));

/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */

( function( window, factory ) {
  'use strict';
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'outlayer/outlayer',[
        'ev-emitter/ev-emitter',
        'get-size/get-size',
        'fizzy-ui-utils/utils',
        './item'
      ],
      function( EvEmitter, getSize, utils, Item ) {
        return factory( window, EvEmitter, getSize, utils, Item);
      }
    );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory(
      window,
      require('ev-emitter'),
      require('get-size'),
      require('fizzy-ui-utils'),
      require('./item')
    );
  } else {
    // browser global
    window.Outlayer = factory(
      window,
      window.EvEmitter,
      window.getSize,
      window.fizzyUIUtils,
      window.Outlayer.Item
    );
  }

}( window, function factory( window, EvEmitter, getSize, utils, Item ) {
'use strict';

// ----- vars ----- //

var console = window.console;
var jQuery = window.jQuery;
var noop = function() {};

// -------------------------- Outlayer -------------------------- //

// globally unique identifiers
var GUID = 0;
// internal store of all Outlayer intances
var instances = {};


/**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */
function Outlayer( element, options ) {
  var queryElement = utils.getQueryElement( element );
  if ( !queryElement ) {
    if ( console ) {
      console.error( 'Bad element for ' + this.constructor.namespace +
        ': ' + ( queryElement || element ) );
    }
    return;
  }
  this.element = queryElement;
  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }

  // options
  this.options = utils.extend( {}, this.constructor.defaults );
  this.option( options );

  // add id for Outlayer.getFromElement
  var id = ++GUID;
  this.element.outlayerGUID = id; // expando
  instances[ id ] = this; // associate via id

  // kick it off
  this._create();

  var isInitLayout = this._getOption('initLayout');
  if ( isInitLayout ) {
    this.layout();
  }
}

// settings are for internal use only
Outlayer.namespace = 'outlayer';
Outlayer.Item = Item;

// default options
Outlayer.defaults = {
  containerStyle: {
    position: 'relative'
  },
  initLayout: true,
  originLeft: true,
  originTop: true,
  resize: true,
  resizeContainer: true,
  // item options
  transitionDuration: '0.4s',
  hiddenStyle: {
    opacity: 0,
    transform: 'scale(0.001)'
  },
  visibleStyle: {
    opacity: 1,
    transform: 'scale(1)'
  }
};

var proto = Outlayer.prototype;
// inherit EvEmitter
utils.extend( proto, EvEmitter.prototype );

/**
 * set options
 * @param {Object} opts
 */
proto.option = function( opts ) {
  utils.extend( this.options, opts );
};

/**
 * get backwards compatible option value, check old name
 */
proto._getOption = function( option ) {
  var oldOption = this.constructor.compatOptions[ option ];
  return oldOption && this.options[ oldOption ] !== undefined ?
    this.options[ oldOption ] : this.options[ option ];
};

Outlayer.compatOptions = {
  // currentName: oldName
  initLayout: 'isInitLayout',
  horizontal: 'isHorizontal',
  layoutInstant: 'isLayoutInstant',
  originLeft: 'isOriginLeft',
  originTop: 'isOriginTop',
  resize: 'isResizeBound',
  resizeContainer: 'isResizingContainer'
};

proto._create = function() {
  // get items from children
  this.reloadItems();
  // elements that affect layout, but are not laid out
  this.stamps = [];
  this.stamp( this.options.stamp );
  // set container style
  utils.extend( this.element.style, this.options.containerStyle );

  // bind resize method
  var canBindResize = this._getOption('resize');
  if ( canBindResize ) {
    this.bindResize();
  }
};

// goes through all children again and gets bricks in proper order
proto.reloadItems = function() {
  // collection of item elements
  this.items = this._itemize( this.element.children );
};


/**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */
proto._itemize = function( elems ) {

  var itemElems = this._filterFindItemElements( elems );
  var Item = this.constructor.Item;

  // create new Outlayer Items for collection
  var items = [];
  for ( var i=0; i < itemElems.length; i++ ) {
    var elem = itemElems[i];
    var item = new Item( elem, this );
    items.push( item );
  }

  return items;
};

/**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */
proto._filterFindItemElements = function( elems ) {
  return utils.filterFindElements( elems, this.options.itemSelector );
};

/**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */
proto.getItemElements = function() {
  return this.items.map( function( item ) {
    return item.element;
  });
};

// ----- init & layout ----- //

/**
 * lays out all items
 */
proto.layout = function() {
  this._resetLayout();
  this._manageStamps();

  // don't animate first layout
  var layoutInstant = this._getOption('layoutInstant');
  var isInstant = layoutInstant !== undefined ?
    layoutInstant : !this._isLayoutInited;
  this.layoutItems( this.items, isInstant );

  // flag for initalized
  this._isLayoutInited = true;
};

// _init is alias for layout
proto._init = proto.layout;

/**
 * logic before any new layout
 */
proto._resetLayout = function() {
  this.getSize();
};


proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */
proto._getMeasurement = function( measurement, size ) {
  var option = this.options[ measurement ];
  var elem;
  if ( !option ) {
    // default to 0
    this[ measurement ] = 0;
  } else {
    // use option as an element
    if ( typeof option == 'string' ) {
      elem = this.element.querySelector( option );
    } else if ( option instanceof HTMLElement ) {
      elem = option;
    }
    // use size of element, if element
    this[ measurement ] = elem ? getSize( elem )[ size ] : option;
  }
};

/**
 * layout a collection of item elements
 * @api public
 */
proto.layoutItems = function( items, isInstant ) {
  items = this._getItemsForLayout( items );

  this._layoutItems( items, isInstant );

  this._postLayout();
};

/**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */
proto._getItemsForLayout = function( items ) {
  return items.filter( function( item ) {
    return !item.isIgnored;
  });
};

/**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */
proto._layoutItems = function( items, isInstant ) {
  this._emitCompleteOnItems( 'layout', items );

  if ( !items || !items.length ) {
    // no items, emit event with empty array
    return;
  }

  var queue = [];

  items.forEach( function( item ) {
    // get x/y object from method
    var position = this._getItemLayoutPosition( item );
    // enqueue
    position.item = item;
    position.isInstant = isInstant || item.isLayoutInstant;
    queue.push( position );
  }, this );

  this._processLayoutQueue( queue );
};

/**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */
proto._getItemLayoutPosition = function( /* item */ ) {
  return {
    x: 0,
    y: 0
  };
};

/**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */
proto._processLayoutQueue = function( queue ) {
  this.updateStagger();
  queue.forEach( function( obj, i ) {
    this._positionItem( obj.item, obj.x, obj.y, obj.isInstant, i );
  }, this );
};

// set stagger from option in milliseconds number
proto.updateStagger = function() {
  var stagger = this.options.stagger;
  if ( stagger === null || stagger === undefined ) {
    this.stagger = 0;
    return;
  }
  this.stagger = getMilliseconds( stagger );
  return this.stagger;
};

/**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */
proto._positionItem = function( item, x, y, isInstant, i ) {
  if ( isInstant ) {
    // if not transition, just set CSS
    item.goTo( x, y );
  } else {
    item.stagger( i * this.stagger );
    item.moveTo( x, y );
  }
};

/**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */
proto._postLayout = function() {
  this.resizeContainer();
};

proto.resizeContainer = function() {
  var isResizingContainer = this._getOption('resizeContainer');
  if ( !isResizingContainer ) {
    return;
  }
  var size = this._getContainerSize();
  if ( size ) {
    this._setContainerMeasure( size.width, true );
    this._setContainerMeasure( size.height, false );
  }
};

/**
 * Sets width or height of container if returned
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */
proto._getContainerSize = noop;

/**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */
proto._setContainerMeasure = function( measure, isWidth ) {
  if ( measure === undefined ) {
    return;
  }

  var elemSize = this.size;
  // add padding and border width if border box
  if ( elemSize.isBorderBox ) {
    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
      elemSize.borderLeftWidth + elemSize.borderRightWidth :
      elemSize.paddingBottom + elemSize.paddingTop +
      elemSize.borderTopWidth + elemSize.borderBottomWidth;
  }

  measure = Math.max( measure, 0 );
  this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
};

/**
 * emit eventComplete on a collection of items events
 * @param {String} eventName
 * @param {Array} items - Outlayer.Items
 */
proto._emitCompleteOnItems = function( eventName, items ) {
  var _this = this;
  function onComplete() {
    _this.dispatchEvent( eventName + 'Complete', null, [ items ] );
  }

  var count = items.length;
  if ( !items || !count ) {
    onComplete();
    return;
  }

  var doneCount = 0;
  function tick() {
    doneCount++;
    if ( doneCount == count ) {
      onComplete();
    }
  }

  // bind callback
  items.forEach( function( item ) {
    item.once( eventName, tick );
  });
};

/**
 * emits events via EvEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
proto.dispatchEvent = function( type, event, args ) {
  // add original event to arguments
  var emitArgs = event ? [ event ].concat( args ) : args;
  this.emitEvent( type, emitArgs );

  if ( jQuery ) {
    // set this.$element
    this.$element = this.$element || jQuery( this.element );
    if ( event ) {
      // create jQuery event
      var $event = jQuery.Event( event );
      $event.type = type;
      this.$element.trigger( $event, args );
    } else {
      // just trigger with type if no event available
      this.$element.trigger( type, args );
    }
  }
};

// -------------------------- ignore & stamps -------------------------- //


/**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */
proto.ignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    item.isIgnored = true;
  }
};

/**
 * return item to layout collection
 * @param {Element} elem
 */
proto.unignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    delete item.isIgnored;
  }
};

/**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */
proto.stamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ) {
    return;
  }

  this.stamps = this.stamps.concat( elems );
  // ignore
  elems.forEach( this.ignore, this );
};

/**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */
proto.unstamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ){
    return;
  }

  elems.forEach( function( elem ) {
    // filter out removed stamp elements
    utils.removeFrom( this.stamps, elem );
    this.unignore( elem );
  }, this );
};

/**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */
proto._find = function( elems ) {
  if ( !elems ) {
    return;
  }
  // if string, use argument as selector string
  if ( typeof elems == 'string' ) {
    elems = this.element.querySelectorAll( elems );
  }
  elems = utils.makeArray( elems );
  return elems;
};

proto._manageStamps = function() {
  if ( !this.stamps || !this.stamps.length ) {
    return;
  }

  this._getBoundingRect();

  this.stamps.forEach( this._manageStamp, this );
};

// update boundingLeft / Top
proto._getBoundingRect = function() {
  // get bounding rect for container element
  var boundingRect = this.element.getBoundingClientRect();
  var size = this.size;
  this._boundingRect = {
    left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
    top: boundingRect.top + size.paddingTop + size.borderTopWidth,
    right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
    bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
  };
};

/**
 * @param {Element} stamp
**/
proto._manageStamp = noop;

/**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */
proto._getElementOffset = function( elem ) {
  var boundingRect = elem.getBoundingClientRect();
  var thisRect = this._boundingRect;
  var size = getSize( elem );
  var offset = {
    left: boundingRect.left - thisRect.left - size.marginLeft,
    top: boundingRect.top - thisRect.top - size.marginTop,
    right: thisRect.right - boundingRect.right - size.marginRight,
    bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
  };
  return offset;
};

// -------------------------- resize -------------------------- //

// enable event handlers for listeners
// i.e. resize -> onresize
proto.handleEvent = utils.handleEvent;

/**
 * Bind layout to window resizing
 */
proto.bindResize = function() {
  window.addEventListener( 'resize', this );
  this.isResizeBound = true;
};

/**
 * Unbind layout to window resizing
 */
proto.unbindResize = function() {
  window.removeEventListener( 'resize', this );
  this.isResizeBound = false;
};

proto.onresize = function() {
  this.resize();
};

utils.debounceMethod( Outlayer, 'onresize', 100 );

proto.resize = function() {
  // don't trigger if size did not change
  // or if resize was unbound. See #9
  if ( !this.isResizeBound || !this.needsResizeLayout() ) {
    return;
  }

  this.layout();
};

/**
 * check if layout is needed post layout
 * @returns Boolean
 */
proto.needsResizeLayout = function() {
  var size = getSize( this.element );
  // check that this.size and size are there
  // IE8 triggers resize on body size change, so they might not be
  var hasSizes = this.size && size;
  return hasSizes && size.innerWidth !== this.size.innerWidth;
};

// -------------------------- methods -------------------------- //

/**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/
proto.addItems = function( elems ) {
  var items = this._itemize( elems );
  // add items to collection
  if ( items.length ) {
    this.items = this.items.concat( items );
  }
  return items;
};

/**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */
proto.appended = function( elems ) {
  var items = this.addItems( elems );
  if ( !items.length ) {
    return;
  }
  // layout and reveal just the new items
  this.layoutItems( items, true );
  this.reveal( items );
};

/**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */
proto.prepended = function( elems ) {
  var items = this._itemize( elems );
  if ( !items.length ) {
    return;
  }
  // add items to beginning of collection
  var previousItems = this.items.slice(0);
  this.items = items.concat( previousItems );
  // start new layout
  this._resetLayout();
  this._manageStamps();
  // layout new stuff without transition
  this.layoutItems( items, true );
  this.reveal( items );
  // layout previous items
  this.layoutItems( previousItems );
};

/**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.reveal = function( items ) {
  this._emitCompleteOnItems( 'reveal', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.reveal();
  });
};

/**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.hide = function( items ) {
  this._emitCompleteOnItems( 'hide', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.hide();
  });
};

/**
 * reveal item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.revealItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.reveal( items );
};

/**
 * hide item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.hideItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.hide( items );
};

/**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */
proto.getItem = function( elem ) {
  // loop through items to get the one that matches
  for ( var i=0; i < this.items.length; i++ ) {
    var item = this.items[i];
    if ( item.element == elem ) {
      // return item
      return item;
    }
  }
};

/**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */
proto.getItems = function( elems ) {
  elems = utils.makeArray( elems );
  var items = [];
  elems.forEach( function( elem ) {
    var item = this.getItem( elem );
    if ( item ) {
      items.push( item );
    }
  }, this );

  return items;
};

/**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */
proto.remove = function( elems ) {
  var removeItems = this.getItems( elems );

  this._emitCompleteOnItems( 'remove', removeItems );

  // bail if no items to remove
  if ( !removeItems || !removeItems.length ) {
    return;
  }

  removeItems.forEach( function( item ) {
    item.remove();
    // remove item from collection
    utils.removeFrom( this.items, item );
  }, this );
};

// ----- destroy ----- //

// remove and disable Outlayer instance
proto.destroy = function() {
  // clean up dynamic styles
  var style = this.element.style;
  style.height = '';
  style.position = '';
  style.width = '';
  // destroy items
  this.items.forEach( function( item ) {
    item.destroy();
  });

  this.unbindResize();

  var id = this.element.outlayerGUID;
  delete instances[ id ]; // remove reference to instance by id
  delete this.element.outlayerGUID;
  // remove data for jQuery
  if ( jQuery ) {
    jQuery.removeData( this.element, this.constructor.namespace );
  }

};

// -------------------------- data -------------------------- //

/**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */
Outlayer.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  var id = elem && elem.outlayerGUID;
  return id && instances[ id ];
};


// -------------------------- create Outlayer class -------------------------- //

/**
 * create a layout class
 * @param {String} namespace
 */
Outlayer.create = function( namespace, options ) {
  // sub-class Outlayer
  var Layout = subclass( Outlayer );
  // apply new options and compatOptions
  Layout.defaults = utils.extend( {}, Outlayer.defaults );
  utils.extend( Layout.defaults, options );
  Layout.compatOptions = utils.extend( {}, Outlayer.compatOptions  );

  Layout.namespace = namespace;

  Layout.data = Outlayer.data;

  // sub-class Item
  Layout.Item = subclass( Item );

  // -------------------------- declarative -------------------------- //

  utils.htmlInit( Layout, namespace );

  // -------------------------- jQuery bridge -------------------------- //

  // make into jQuery plugin
  if ( jQuery && jQuery.bridget ) {
    jQuery.bridget( namespace, Layout );
  }

  return Layout;
};

function subclass( Parent ) {
  function SubClass() {
    Parent.apply( this, arguments );
  }

  SubClass.prototype = Object.create( Parent.prototype );
  SubClass.prototype.constructor = SubClass;

  return SubClass;
}

// ----- helpers ----- //

// how many milliseconds are in each unit
var msUnits = {
  ms: 1,
  s: 1000
};

// munge time-like parameter into millisecond number
// '0.4s' -> 40
function getMilliseconds( time ) {
  if ( typeof time == 'number' ) {
    return time;
  }
  var matches = time.match( /(^\d*\.?\d*)(\w*)/ );
  var num = matches && matches[1];
  var unit = matches && matches[2];
  if ( !num.length ) {
    return 0;
  }
  num = parseFloat( num );
  var mult = msUnits[ unit ] || 1;
  return num * mult;
}

// ----- fin ----- //

// back in global
Outlayer.Item = Item;

return Outlayer;

}));

/**
 * Isotope Item
**/

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'isotope-layout/js/item',[
        'outlayer/outlayer'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('outlayer')
    );
  } else {
    // browser global
    window.Isotope = window.Isotope || {};
    window.Isotope.Item = factory(
      window.Outlayer
    );
  }

}( window, function factory( Outlayer ) {
'use strict';

// -------------------------- Item -------------------------- //

// sub-class Outlayer Item
function Item() {
  Outlayer.Item.apply( this, arguments );
}

var proto = Item.prototype = Object.create( Outlayer.Item.prototype );

var _create = proto._create;
proto._create = function() {
  // assign id, used for original-order sorting
  this.id = this.layout.itemGUID++;
  _create.call( this );
  this.sortData = {};
};

proto.updateSortData = function() {
  if ( this.isIgnored ) {
    return;
  }
  // default sorters
  this.sortData.id = this.id;
  // for backward compatibility
  this.sortData['original-order'] = this.id;
  this.sortData.random = Math.random();
  // go thru getSortData obj and apply the sorters
  var getSortData = this.layout.options.getSortData;
  var sorters = this.layout._sorters;
  for ( var key in getSortData ) {
    var sorter = sorters[ key ];
    this.sortData[ key ] = sorter( this.element, this );
  }
};

var _destroy = proto.destroy;
proto.destroy = function() {
  // call super
  _destroy.apply( this, arguments );
  // reset display, #741
  this.css({
    display: ''
  });
};

return Item;

}));

/**
 * Isotope LayoutMode
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'isotope-layout/js/layout-mode',[
        'get-size/get-size',
        'outlayer/outlayer'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('get-size'),
      require('outlayer')
    );
  } else {
    // browser global
    window.Isotope = window.Isotope || {};
    window.Isotope.LayoutMode = factory(
      window.getSize,
      window.Outlayer
    );
  }

}( window, function factory( getSize, Outlayer ) {
  'use strict';

  // layout mode class
  function LayoutMode( isotope ) {
    this.isotope = isotope;
    // link properties
    if ( isotope ) {
      this.options = isotope.options[ this.namespace ];
      this.element = isotope.element;
      this.items = isotope.filteredItems;
      this.size = isotope.size;
    }
  }

  var proto = LayoutMode.prototype;

  /**
   * some methods should just defer to default Outlayer method
   * and reference the Isotope instance as `this`
  **/
  var facadeMethods = [
    '_resetLayout',
    '_getItemLayoutPosition',
    '_manageStamp',
    '_getContainerSize',
    '_getElementOffset',
    'needsResizeLayout',
    '_getOption'
  ];

  facadeMethods.forEach( function( methodName ) {
    proto[ methodName ] = function() {
      return Outlayer.prototype[ methodName ].apply( this.isotope, arguments );
    };
  });

  // -----  ----- //

  // for horizontal layout modes, check vertical size
  proto.needsVerticalResizeLayout = function() {
    // don't trigger if size did not change
    var size = getSize( this.isotope.element );
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var hasSizes = this.isotope.size && size;
    return hasSizes && size.innerHeight != this.isotope.size.innerHeight;
  };

  // ----- measurements ----- //

  proto._getMeasurement = function() {
    this.isotope._getMeasurement.apply( this, arguments );
  };

  proto.getColumnWidth = function() {
    this.getSegmentSize( 'column', 'Width' );
  };

  proto.getRowHeight = function() {
    this.getSegmentSize( 'row', 'Height' );
  };

  /**
   * get columnWidth or rowHeight
   * segment: 'column' or 'row'
   * size 'Width' or 'Height'
  **/
  proto.getSegmentSize = function( segment, size ) {
    var segmentName = segment + size;
    var outerSize = 'outer' + size;
    // columnWidth / outerWidth // rowHeight / outerHeight
    this._getMeasurement( segmentName, outerSize );
    // got rowHeight or columnWidth, we can chill
    if ( this[ segmentName ] ) {
      return;
    }
    // fall back to item of first element
    var firstItemSize = this.getFirstItemSize();
    this[ segmentName ] = firstItemSize && firstItemSize[ outerSize ] ||
      // or size of container
      this.isotope.size[ 'inner' + size ];
  };

  proto.getFirstItemSize = function() {
    var firstItem = this.isotope.filteredItems[0];
    return firstItem && firstItem.element && getSize( firstItem.element );
  };

  // ----- methods that should reference isotope ----- //

  proto.layout = function() {
    this.isotope.layout.apply( this.isotope, arguments );
  };

  proto.getSize = function() {
    this.isotope.getSize();
    this.size = this.isotope.size;
  };

  // -------------------------- create -------------------------- //

  LayoutMode.modes = {};

  LayoutMode.create = function( namespace, options ) {

    function Mode() {
      LayoutMode.apply( this, arguments );
    }

    Mode.prototype = Object.create( proto );
    Mode.prototype.constructor = Mode;

    // default options
    if ( options ) {
      Mode.options = options;
    }

    Mode.prototype.namespace = namespace;
    // register in Isotope
    LayoutMode.modes[ namespace ] = Mode;

    return Mode;
  };

  return LayoutMode;

}));

/*!
 * Masonry v4.2.1
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'masonry-layout/masonry',[
        'outlayer/outlayer',
        'get-size/get-size'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('outlayer'),
      require('get-size')
    );
  } else {
    // browser global
    window.Masonry = factory(
      window.Outlayer,
      window.getSize
    );
  }

}( window, function factory( Outlayer, getSize ) {



// -------------------------- masonryDefinition -------------------------- //

  // create an Outlayer layout class
  var Masonry = Outlayer.create('masonry');
  // isFitWidth -> fitWidth
  Masonry.compatOptions.fitWidth = 'isFitWidth';

  var proto = Masonry.prototype;

  proto._resetLayout = function() {
    this.getSize();
    this._getMeasurement( 'columnWidth', 'outerWidth' );
    this._getMeasurement( 'gutter', 'outerWidth' );
    this.measureColumns();

    // reset column Y
    this.colYs = [];
    for ( var i=0; i < this.cols; i++ ) {
      this.colYs.push( 0 );
    }

    this.maxY = 0;
    this.horizontalColIndex = 0;
  };

  proto.measureColumns = function() {
    this.getContainerWidth();
    // if columnWidth is 0, default to outerWidth of first item
    if ( !this.columnWidth ) {
      var firstItem = this.items[0];
      var firstItemElem = firstItem && firstItem.element;
      // columnWidth fall back to item of first element
      this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||
        // if first elem has no width, default to size of container
        this.containerWidth;
    }

    var columnWidth = this.columnWidth += this.gutter;

    // calculate columns
    var containerWidth = this.containerWidth + this.gutter;
    var cols = containerWidth / columnWidth;
    // fix rounding errors, typically with gutters
    var excess = columnWidth - containerWidth % columnWidth;
    // if overshoot is less than a pixel, round up, otherwise floor it
    var mathMethod = excess && excess < 1 ? 'round' : 'floor';
    cols = Math[ mathMethod ]( cols );
    this.cols = Math.max( cols, 1 );
  };

  proto.getContainerWidth = function() {
    // container is parent if fit width
    var isFitWidth = this._getOption('fitWidth');
    var container = isFitWidth ? this.element.parentNode : this.element;
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var size = getSize( container );
    this.containerWidth = size && size.innerWidth;
  };

  proto._getItemLayoutPosition = function( item ) {
    item.getSize();
    // how many columns does this brick span
    var remainder = item.size.outerWidth % this.columnWidth;
    var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
    // round if off by 1 pixel, otherwise use ceil
    var colSpan = Math[ mathMethod ]( item.size.outerWidth / this.columnWidth );
    colSpan = Math.min( colSpan, this.cols );
    // use horizontal or top column position
    var colPosMethod = this.options.horizontalOrder ?
      '_getHorizontalColPosition' : '_getTopColPosition';
    var colPosition = this[ colPosMethod ]( colSpan, item );
    // position the brick
    var position = {
      x: this.columnWidth * colPosition.col,
      y: colPosition.y
    };
    // apply setHeight to necessary columns
    var setHeight = colPosition.y + item.size.outerHeight;
    var setMax = colSpan + colPosition.col;
    for ( var i = colPosition.col; i < setMax; i++ ) {
      this.colYs[i] = setHeight;
    }

    return position;
  };

  proto._getTopColPosition = function( colSpan ) {
    var colGroup = this._getTopColGroup( colSpan );
    // get the minimum Y value from the columns
    var minimumY = Math.min.apply( Math, colGroup );

    return {
      col: colGroup.indexOf( minimumY ),
      y: minimumY,
    };
  };

  /**
   * @param {Number} colSpan - number of columns the element spans
   * @returns {Array} colGroup
   */
  proto._getTopColGroup = function( colSpan ) {
    if ( colSpan < 2 ) {
      // if brick spans only one column, use all the column Ys
      return this.colYs;
    }

    var colGroup = [];
    // how many different places could this brick fit horizontally
    var groupCount = this.cols + 1 - colSpan;
    // for each group potential horizontal position
    for ( var i = 0; i < groupCount; i++ ) {
      colGroup[i] = this._getColGroupY( i, colSpan );
    }
    return colGroup;
  };

  proto._getColGroupY = function( col, colSpan ) {
    if ( colSpan < 2 ) {
      return this.colYs[ col ];
    }
    // make an array of colY values for that one group
    var groupColYs = this.colYs.slice( col, col + colSpan );
    // and get the max value of the array
    return Math.max.apply( Math, groupColYs );
  };

  // get column position based on horizontal index. #873
  proto._getHorizontalColPosition = function( colSpan, item ) {
    var col = this.horizontalColIndex % this.cols;
    var isOver = colSpan > 1 && col + colSpan > this.cols;
    // shift to next row if item can't fit on current row
    col = isOver ? 0 : col;
    // don't let zero-size items take up space
    var hasSize = item.size.outerWidth && item.size.outerHeight;
    this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;

    return {
      col: col,
      y: this._getColGroupY( col, colSpan ),
    };
  };

  proto._manageStamp = function( stamp ) {
    var stampSize = getSize( stamp );
    var offset = this._getElementOffset( stamp );
    // get the columns that this stamp affects
    var isOriginLeft = this._getOption('originLeft');
    var firstX = isOriginLeft ? offset.left : offset.right;
    var lastX = firstX + stampSize.outerWidth;
    var firstCol = Math.floor( firstX / this.columnWidth );
    firstCol = Math.max( 0, firstCol );
    var lastCol = Math.floor( lastX / this.columnWidth );
    // lastCol should not go over if multiple of columnWidth #425
    lastCol -= lastX % this.columnWidth ? 0 : 1;
    lastCol = Math.min( this.cols - 1, lastCol );
    // set colYs to bottom of the stamp

    var isOriginTop = this._getOption('originTop');
    var stampMaxY = ( isOriginTop ? offset.top : offset.bottom ) +
      stampSize.outerHeight;
    for ( var i = firstCol; i <= lastCol; i++ ) {
      this.colYs[i] = Math.max( stampMaxY, this.colYs[i] );
    }
  };

  proto._getContainerSize = function() {
    this.maxY = Math.max.apply( Math, this.colYs );
    var size = {
      height: this.maxY
    };

    if ( this._getOption('fitWidth') ) {
      size.width = this._getContainerFitWidth();
    }

    return size;
  };

  proto._getContainerFitWidth = function() {
    var unusedCols = 0;
    // count unused columns
    var i = this.cols;
    while ( --i ) {
      if ( this.colYs[i] !== 0 ) {
        break;
      }
      unusedCols++;
    }
    // fit container to columns that have been used
    return ( this.cols - unusedCols ) * this.columnWidth - this.gutter;
  };

  proto.needsResizeLayout = function() {
    var previousWidth = this.containerWidth;
    this.getContainerWidth();
    return previousWidth != this.containerWidth;
  };

  return Masonry;

}));

/*!
 * Masonry layout mode
 * sub-classes Masonry
 * https://masonry.desandro.com
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'isotope-layout/js/layout-modes/masonry',[
        '../layout-mode',
        'masonry-layout/masonry'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('../layout-mode'),
      require('masonry-layout')
    );
  } else {
    // browser global
    factory(
      window.Isotope.LayoutMode,
      window.Masonry
    );
  }

}( window, function factory( LayoutMode, Masonry ) {
'use strict';

// -------------------------- masonryDefinition -------------------------- //

  // create an Outlayer layout class
  var MasonryMode = LayoutMode.create('masonry');

  var proto = MasonryMode.prototype;

  var keepModeMethods = {
    _getElementOffset: true,
    layout: true,
    _getMeasurement: true
  };

  // inherit Masonry prototype
  for ( var method in Masonry.prototype ) {
    // do not inherit mode methods
    if ( !keepModeMethods[ method ] ) {
      proto[ method ] = Masonry.prototype[ method ];
    }
  }

  var measureColumns = proto.measureColumns;
  proto.measureColumns = function() {
    // set items, used if measuring first item
    this.items = this.isotope.filteredItems;
    measureColumns.call( this );
  };

  // point to mode options for fitWidth
  var _getOption = proto._getOption;
  proto._getOption = function( option ) {
    if ( option == 'fitWidth' ) {
      return this.options.isFitWidth !== undefined ?
        this.options.isFitWidth : this.options.fitWidth;
    }
    return _getOption.apply( this.isotope, arguments );
  };

  return MasonryMode;

}));

/**
 * fitRows layout mode
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'isotope-layout/js/layout-modes/fit-rows',[
        '../layout-mode'
      ],
      factory );
  } else if ( typeof exports == 'object' ) {
    // CommonJS
    module.exports = factory(
      require('../layout-mode')
    );
  } else {
    // browser global
    factory(
      window.Isotope.LayoutMode
    );
  }

}( window, function factory( LayoutMode ) {
'use strict';

var FitRows = LayoutMode.create('fitRows');

var proto = FitRows.prototype;

proto._resetLayout = function() {
  this.x = 0;
  this.y = 0;
  this.maxY = 0;
  this._getMeasurement( 'gutter', 'outerWidth' );
};

proto._getItemLayoutPosition = function( item ) {
  item.getSize();

  var itemWidth = item.size.outerWidth + this.gutter;
  // if this element cannot fit in the current row
  var containerWidth = this.isotope.size.innerWidth + this.gutter;
  if ( this.x !== 0 && itemWidth + this.x > containerWidth ) {
    this.x = 0;
    this.y = this.maxY;
  }

  var position = {
    x: this.x,
    y: this.y
  };

  this.maxY = Math.max( this.maxY, this.y + item.size.outerHeight );
  this.x += itemWidth;

  return position;
};

proto._getContainerSize = function() {
  return { height: this.maxY };
};

return FitRows;

}));

/**
 * vertical layout mode
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'isotope-layout/js/layout-modes/vertical',[
        '../layout-mode'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('../layout-mode')
    );
  } else {
    // browser global
    factory(
      window.Isotope.LayoutMode
    );
  }

}( window, function factory( LayoutMode ) {
'use strict';

var Vertical = LayoutMode.create( 'vertical', {
  horizontalAlignment: 0
});

var proto = Vertical.prototype;

proto._resetLayout = function() {
  this.y = 0;
};

proto._getItemLayoutPosition = function( item ) {
  item.getSize();
  var x = ( this.isotope.size.innerWidth - item.size.outerWidth ) *
    this.options.horizontalAlignment;
  var y = this.y;
  this.y += item.size.outerHeight;
  return { x: x, y: y };
};

proto._getContainerSize = function() {
  return { height: this.y };
};

return Vertical;

}));

/*!
 * Isotope v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
        'outlayer/outlayer',
        'get-size/get-size',
        'desandro-matches-selector/matches-selector',
        'fizzy-ui-utils/utils',
        'isotope-layout/js/item',
        'isotope-layout/js/layout-mode',
        // include default layout modes
        'isotope-layout/js/layout-modes/masonry',
        'isotope-layout/js/layout-modes/fit-rows',
        'isotope-layout/js/layout-modes/vertical'
      ],
      function( Outlayer, getSize, matchesSelector, utils, Item, LayoutMode ) {
        return factory( window, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode );
      });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('outlayer'),
      require('get-size'),
      require('desandro-matches-selector'),
      require('fizzy-ui-utils'),
      require('isotope-layout/js/item'),
      require('isotope-layout/js/layout-mode'),
      // include default layout modes
      require('isotope-layout/js/layout-modes/masonry'),
      require('isotope-layout/js/layout-modes/fit-rows'),
      require('isotope-layout/js/layout-modes/vertical')
    );
  } else {
    // browser global
    window.Isotope = factory(
      window,
      window.Outlayer,
      window.getSize,
      window.matchesSelector,
      window.fizzyUIUtils,
      window.Isotope.Item,
      window.Isotope.LayoutMode
    );
  }

}( window, function factory( window, Outlayer, getSize, matchesSelector, utils,
  Item, LayoutMode ) {



// -------------------------- vars -------------------------- //

var jQuery = window.jQuery;

// -------------------------- helpers -------------------------- //

var trim = String.prototype.trim ?
  function( str ) {
    return str.trim();
  } :
  function( str ) {
    return str.replace( /^\s+|\s+$/g, '' );
  };

// -------------------------- isotopeDefinition -------------------------- //

  // create an Outlayer layout class
  var Isotope = Outlayer.create( 'isotope', {
    layoutMode: 'masonry',
    isJQueryFiltering: true,
    sortAscending: true
  });

  Isotope.Item = Item;
  Isotope.LayoutMode = LayoutMode;

  var proto = Isotope.prototype;

  proto._create = function() {
    this.itemGUID = 0;
    // functions that sort items
    this._sorters = {};
    this._getSorters();
    // call super
    Outlayer.prototype._create.call( this );

    // create layout modes
    this.modes = {};
    // start filteredItems with all items
    this.filteredItems = this.items;
    // keep of track of sortBys
    this.sortHistory = [ 'original-order' ];
    // create from registered layout modes
    for ( var name in LayoutMode.modes ) {
      this._initLayoutMode( name );
    }
  };

  proto.reloadItems = function() {
    // reset item ID counter
    this.itemGUID = 0;
    // call super
    Outlayer.prototype.reloadItems.call( this );
  };

  proto._itemize = function() {
    var items = Outlayer.prototype._itemize.apply( this, arguments );
    // assign ID for original-order
    for ( var i=0; i < items.length; i++ ) {
      var item = items[i];
      item.id = this.itemGUID++;
    }
    this._updateItemsSortData( items );
    return items;
  };


  // -------------------------- layout -------------------------- //

  proto._initLayoutMode = function( name ) {
    var Mode = LayoutMode.modes[ name ];
    // set mode options
    // HACK extend initial options, back-fill in default options
    var initialOpts = this.options[ name ] || {};
    this.options[ name ] = Mode.options ?
      utils.extend( Mode.options, initialOpts ) : initialOpts;
    // init layout mode instance
    this.modes[ name ] = new Mode( this );
  };


  proto.layout = function() {
    // if first time doing layout, do all magic
    if ( !this._isLayoutInited && this._getOption('initLayout') ) {
      this.arrange();
      return;
    }
    this._layout();
  };

  // private method to be used in layout() & magic()
  proto._layout = function() {
    // don't animate first layout
    var isInstant = this._getIsInstant();
    // layout flow
    this._resetLayout();
    this._manageStamps();
    this.layoutItems( this.filteredItems, isInstant );

    // flag for initalized
    this._isLayoutInited = true;
  };

  // filter + sort + layout
  proto.arrange = function( opts ) {
    // set any options pass
    this.option( opts );
    this._getIsInstant();
    // filter, sort, and layout

    // filter
    var filtered = this._filter( this.items );
    this.filteredItems = filtered.matches;

    this._bindArrangeComplete();

    if ( this._isInstant ) {
      this._noTransition( this._hideReveal, [ filtered ] );
    } else {
      this._hideReveal( filtered );
    }

    this._sort();
    this._layout();
  };
  // alias to _init for main plugin method
  proto._init = proto.arrange;

  proto._hideReveal = function( filtered ) {
    this.reveal( filtered.needReveal );
    this.hide( filtered.needHide );
  };

  // HACK
  // Don't animate/transition first layout
  // Or don't animate/transition other layouts
  proto._getIsInstant = function() {
    var isLayoutInstant = this._getOption('layoutInstant');
    var isInstant = isLayoutInstant !== undefined ? isLayoutInstant :
      !this._isLayoutInited;
    this._isInstant = isInstant;
    return isInstant;
  };

  // listen for layoutComplete, hideComplete and revealComplete
  // to trigger arrangeComplete
  proto._bindArrangeComplete = function() {
    // listen for 3 events to trigger arrangeComplete
    var isLayoutComplete, isHideComplete, isRevealComplete;
    var _this = this;
    function arrangeParallelCallback() {
      if ( isLayoutComplete && isHideComplete && isRevealComplete ) {
        _this.dispatchEvent( 'arrangeComplete', null, [ _this.filteredItems ] );
      }
    }
    this.once( 'layoutComplete', function() {
      isLayoutComplete = true;
      arrangeParallelCallback();
    });
    this.once( 'hideComplete', function() {
      isHideComplete = true;
      arrangeParallelCallback();
    });
    this.once( 'revealComplete', function() {
      isRevealComplete = true;
      arrangeParallelCallback();
    });
  };

  // -------------------------- filter -------------------------- //

  proto._filter = function( items ) {
    var filter = this.options.filter;
    filter = filter || '*';
    var matches = [];
    var hiddenMatched = [];
    var visibleUnmatched = [];

    var test = this._getFilterTest( filter );

    // test each item
    for ( var i=0; i < items.length; i++ ) {
      var item = items[i];
      if ( item.isIgnored ) {
        continue;
      }
      // add item to either matched or unmatched group
      var isMatched = test( item );
      // item.isFilterMatched = isMatched;
      // add to matches if its a match
      if ( isMatched ) {
        matches.push( item );
      }
      // add to additional group if item needs to be hidden or revealed
      if ( isMatched && item.isHidden ) {
        hiddenMatched.push( item );
      } else if ( !isMatched && !item.isHidden ) {
        visibleUnmatched.push( item );
      }
    }

    // return collections of items to be manipulated
    return {
      matches: matches,
      needReveal: hiddenMatched,
      needHide: visibleUnmatched
    };
  };

  // get a jQuery, function, or a matchesSelector test given the filter
  proto._getFilterTest = function( filter ) {
    if ( jQuery && this.options.isJQueryFiltering ) {
      // use jQuery
      return function( item ) {
        return jQuery( item.element ).is( filter );
      };
    }
    if ( typeof filter == 'function' ) {
      // use filter as function
      return function( item ) {
        return filter( item.element );
      };
    }
    // default, use filter as selector string
    return function( item ) {
      return matchesSelector( item.element, filter );
    };
  };

  // -------------------------- sorting -------------------------- //

  /**
   * @params {Array} elems
   * @public
   */
  proto.updateSortData = function( elems ) {
    // get items
    var items;
    if ( elems ) {
      elems = utils.makeArray( elems );
      items = this.getItems( elems );
    } else {
      // update all items if no elems provided
      items = this.items;
    }

    this._getSorters();
    this._updateItemsSortData( items );
  };

  proto._getSorters = function() {
    var getSortData = this.options.getSortData;
    for ( var key in getSortData ) {
      var sorter = getSortData[ key ];
      this._sorters[ key ] = mungeSorter( sorter );
    }
  };

  /**
   * @params {Array} items - of Isotope.Items
   * @private
   */
  proto._updateItemsSortData = function( items ) {
    // do not update if no items
    var len = items && items.length;

    for ( var i=0; len && i < len; i++ ) {
      var item = items[i];
      item.updateSortData();
    }
  };

  // ----- munge sorter ----- //

  // encapsulate this, as we just need mungeSorter
  // other functions in here are just for munging
  var mungeSorter = ( function() {
    // add a magic layer to sorters for convienent shorthands
    // `.foo-bar` will use the text of .foo-bar querySelector
    // `[foo-bar]` will use attribute
    // you can also add parser
    // `.foo-bar parseInt` will parse that as a number
    function mungeSorter( sorter ) {
      // if not a string, return function or whatever it is
      if ( typeof sorter != 'string' ) {
        return sorter;
      }
      // parse the sorter string
      var args = trim( sorter ).split(' ');
      var query = args[0];
      // check if query looks like [an-attribute]
      var attrMatch = query.match( /^\[(.+)\]$/ );
      var attr = attrMatch && attrMatch[1];
      var getValue = getValueGetter( attr, query );
      // use second argument as a parser
      var parser = Isotope.sortDataParsers[ args[1] ];
      // parse the value, if there was a parser
      sorter = parser ? function( elem ) {
        return elem && parser( getValue( elem ) );
      } :
      // otherwise just return value
      function( elem ) {
        return elem && getValue( elem );
      };

      return sorter;
    }

    // get an attribute getter, or get text of the querySelector
    function getValueGetter( attr, query ) {
      // if query looks like [foo-bar], get attribute
      if ( attr ) {
        return function getAttribute( elem ) {
          return elem.getAttribute( attr );
        };
      }

      // otherwise, assume its a querySelector, and get its text
      return function getChildText( elem ) {
        var child = elem.querySelector( query );
        return child && child.textContent;
      };
    }

    return mungeSorter;
  })();

  // parsers used in getSortData shortcut strings
  Isotope.sortDataParsers = {
    'parseInt': function( val ) {
      return parseInt( val, 10 );
    },
    'parseFloat': function( val ) {
      return parseFloat( val );
    }
  };

  // ----- sort method ----- //

  // sort filteredItem order
  proto._sort = function() {
    if ( !this.options.sortBy ) {
      return;
    }
    // keep track of sortBy History
    var sortBys = utils.makeArray( this.options.sortBy );
    if ( !this._getIsSameSortBy( sortBys ) ) {
      // concat all sortBy and sortHistory, add to front, oldest goes in last
      this.sortHistory = sortBys.concat( this.sortHistory );
    }
    // sort magic
    var itemSorter = getItemSorter( this.sortHistory, this.options.sortAscending );
    this.filteredItems.sort( itemSorter );
  };

  // check if sortBys is same as start of sortHistory
  proto._getIsSameSortBy = function( sortBys ) {
    for ( var i=0; i < sortBys.length; i++ ) {
      if ( sortBys[i] != this.sortHistory[i] ) {
        return false;
      }
    }
    return true;
  };

  // returns a function used for sorting
  function getItemSorter( sortBys, sortAsc ) {
    return function sorter( itemA, itemB ) {
      // cycle through all sortKeys
      for ( var i = 0; i < sortBys.length; i++ ) {
        var sortBy = sortBys[i];
        var a = itemA.sortData[ sortBy ];
        var b = itemB.sortData[ sortBy ];
        if ( a > b || a < b ) {
          // if sortAsc is an object, use the value given the sortBy key
          var isAscending = sortAsc[ sortBy ] !== undefined ? sortAsc[ sortBy ] : sortAsc;
          var direction = isAscending ? 1 : -1;
          return ( a > b ? 1 : -1 ) * direction;
        }
      }
      return 0;
    };
  }

  // -------------------------- methods -------------------------- //

  // get layout mode
  proto._mode = function() {
    var layoutMode = this.options.layoutMode;
    var mode = this.modes[ layoutMode ];
    if ( !mode ) {
      // TODO console.error
      throw new Error( 'No layout mode: ' + layoutMode );
    }
    // HACK sync mode's options
    // any options set after init for layout mode need to be synced
    mode.options = this.options[ layoutMode ];
    return mode;
  };

  proto._resetLayout = function() {
    // trigger original reset layout
    Outlayer.prototype._resetLayout.call( this );
    this._mode()._resetLayout();
  };

  proto._getItemLayoutPosition = function( item  ) {
    return this._mode()._getItemLayoutPosition( item );
  };

  proto._manageStamp = function( stamp ) {
    this._mode()._manageStamp( stamp );
  };

  proto._getContainerSize = function() {
    return this._mode()._getContainerSize();
  };

  proto.needsResizeLayout = function() {
    return this._mode().needsResizeLayout();
  };

  // -------------------------- adding & removing -------------------------- //

  // HEADS UP overwrites default Outlayer appended
  proto.appended = function( elems ) {
    var items = this.addItems( elems );
    if ( !items.length ) {
      return;
    }
    // filter, layout, reveal new items
    var filteredItems = this._filterRevealAdded( items );
    // add to filteredItems
    this.filteredItems = this.filteredItems.concat( filteredItems );
  };

  // HEADS UP overwrites default Outlayer prepended
  proto.prepended = function( elems ) {
    var items = this._itemize( elems );
    if ( !items.length ) {
      return;
    }
    // start new layout
    this._resetLayout();
    this._manageStamps();
    // filter, layout, reveal new items
    var filteredItems = this._filterRevealAdded( items );
    // layout previous items
    this.layoutItems( this.filteredItems );
    // add to items and filteredItems
    this.filteredItems = filteredItems.concat( this.filteredItems );
    this.items = items.concat( this.items );
  };

  proto._filterRevealAdded = function( items ) {
    var filtered = this._filter( items );
    this.hide( filtered.needHide );
    // reveal all new items
    this.reveal( filtered.matches );
    // layout new items, no transition
    this.layoutItems( filtered.matches, true );
    return filtered.matches;
  };

  /**
   * Filter, sort, and layout newly-appended item elements
   * @param {Array or NodeList or Element} elems
   */
  proto.insert = function( elems ) {
    var items = this.addItems( elems );
    if ( !items.length ) {
      return;
    }
    // append item elements
    var i, item;
    var len = items.length;
    for ( i=0; i < len; i++ ) {
      item = items[i];
      this.element.appendChild( item.element );
    }
    // filter new stuff
    var filteredInsertItems = this._filter( items ).matches;
    // set flag
    for ( i=0; i < len; i++ ) {
      items[i].isLayoutInstant = true;
    }
    this.arrange();
    // reset flag
    for ( i=0; i < len; i++ ) {
      delete items[i].isLayoutInstant;
    }
    this.reveal( filteredInsertItems );
  };

  var _remove = proto.remove;
  proto.remove = function( elems ) {
    elems = utils.makeArray( elems );
    var removeItems = this.getItems( elems );
    // do regular thing
    _remove.call( this, elems );
    // bail if no items to remove
    var len = removeItems && removeItems.length;
    // remove elems from filteredItems
    for ( var i=0; len && i < len; i++ ) {
      var item = removeItems[i];
      // remove item from collection
      utils.removeFrom( this.filteredItems, item );
    }
  };

  proto.shuffle = function() {
    // update random sortData
    for ( var i=0; i < this.items.length; i++ ) {
      var item = this.items[i];
      item.sortData.random = Math.random();
    }
    this.options.sortBy = 'random';
    this._sort();
    this._layout();
  };

  /**
   * trigger fn without transition
   * kind of hacky to have this in the first place
   * @param {Function} fn
   * @param {Array} args
   * @returns ret
   * @private
   */
  proto._noTransition = function( fn, args ) {
    // save transitionDuration before disabling
    var transitionDuration = this.options.transitionDuration;
    // disable transition
    this.options.transitionDuration = 0;
    // do it
    var returnValue = fn.apply( this, args );
    // re-enable transition for reveal
    this.options.transitionDuration = transitionDuration;
    return returnValue;
  };

  // ----- helper methods ----- //

  /**
   * getter method for getting filtered item elements
   * @returns {Array} elems - collection of item elements
   */
  proto.getFilteredItemElements = function() {
    return this.filteredItems.map( function( item ) {
      return item.element;
    });
  };

  // -----  ----- //

  return Isotope;

}));



/*
 * fitty v2.3.3 - Snugly resizes text to fit its parent container
 * Copyright (c) 2020 Rik Schennink <rik@pqina.nl> (https://pqina.nl/)
 */
!function (e, t) { if ("function" == typeof define && define.amd) define(["module", "exports"], t); else if ("undefined" != typeof exports) t(module, exports); else { var n = { exports: {} }; t(n, n.exports), e.fitty = n.exports } }(this, function (e, t) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var g = Object.assign || function (e) { for (var t = 1; t < arguments.length; t++){ var n = arguments[t]; for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]) } return e }; t.default = function (n) { if (n) { var r = { IDLE: 0, DIRTY_CONTENT: 1, DIRTY_LAYOUT: 2, DIRTY: 3 }, i = [], e = null, o = "requestAnimationFrame" in n ? function () { n.cancelAnimationFrame(e), e = n.requestAnimationFrame(function () { return l(i.filter(function (e) { return e.dirty && e.active })) }) } : function () { }, t = function (t) { return function () { i.forEach(function (e) { return e.dirty = t }), o() } }, l = function (e) { e.filter(function (e) { return !e.styleComputed }).forEach(function (e) { e.styleComputed = s(e) }), e.filter(f).forEach(d); var t = e.filter(c); t.forEach(u), t.forEach(function (e) { d(e), a(e) }), t.forEach(p) }, a = function (e) { return e.dirty = r.IDLE }, u = function (e) { e.availableWidth = e.element.parentNode.clientWidth, e.currentWidth = e.element.scrollWidth, e.previousFontSize = e.currentFontSize, e.currentFontSize = Math.min(Math.max(e.minSize, e.availableWidth / e.currentWidth * e.previousFontSize), e.maxSize), e.whiteSpace = e.multiLine && e.currentFontSize === e.minSize ? "normal" : "nowrap" }, c = function (e) { return e.dirty !== r.DIRTY_LAYOUT || e.dirty === r.DIRTY_LAYOUT && e.element.parentNode.clientWidth !== e.availableWidth }, s = function (e) { var t = n.getComputedStyle(e.element, null); e.currentFontSize = parseFloat(t.getPropertyValue("font-size")), e.display = t.getPropertyValue("display"), e.whiteSpace = t.getPropertyValue("white-space") }, f = function (e) { var t = !1; return !e.preStyleTestCompleted && (/inline-/.test(e.display) || (t = !0, e.display = "inline-block"), "nowrap" !== e.whiteSpace && (t = !0, e.whiteSpace = "nowrap"), e.preStyleTestCompleted = !0, t) }, d = function (e) { e.element.style.whiteSpace = e.whiteSpace, e.element.style.display = e.display, e.element.style.fontSize = e.currentFontSize + "px" }, p = function (e) { e.element.dispatchEvent(new CustomEvent("fit", { detail: { oldValue: e.previousFontSize, newValue: e.currentFontSize, scaleFactor: e.currentFontSize / e.previousFontSize } })) }, y = function (e, t) { return function () { e.dirty = t, e.active && o() } }, m = function (e) { e.originalStyle = { whiteSpace: e.element.style.whiteSpace, display: e.element.style.display, fontSize: e.element.style.fontSize }, w(e), e.newbie = !0, e.dirty = !0, i.push(e) }, v = function (t) { return function () { i = i.filter(function (e) { return e.element !== t.element }), t.observeMutations && t.observer.disconnect(), t.element.style.whiteSpace = t.originalStyle.whiteSpace, t.element.style.display = t.originalStyle.display, t.element.style.fontSize = t.originalStyle.fontSize } }, S = function (e) { return function () { e.active || (e.active = !0, o()) } }, h = function (e) { return function () { return e.active = !1 } }, w = function (e) { e.observeMutations && (e.observer = new MutationObserver(y(e, r.DIRTY_CONTENT)), e.observer.observe(e.element, e.observeMutations)) }, b = { minSize: 16, maxSize: 512, multiLine: !0, observeMutations: "MutationObserver" in n && { subtree: !0, childList: !0, characterData: !0 } }, z = null, T = function () { n.clearTimeout(z), z = n.setTimeout(t(r.DIRTY_LAYOUT), E.observeWindowDelay) }, F = ["resize", "orientationchange"]; return Object.defineProperty(E, "observeWindow", { set: function (e) { var t = (e ? "add" : "remove") + "EventListener"; F.forEach(function (e) { n[t](e, T) }) } }), E.observeWindow = !0, E.observeWindowDelay = 100, E.fitAll = t(r.DIRTY), E } function D(e, t) { var n = g({}, b, t), i = e.map(function (e) { var t = g({}, n, { element: e, active: !0 }); return m(t), { element: e, fit: y(t, r.DIRTY), unfreeze: S(t), freeze: h(t), unsubscribe: v(t) } }); return o(), i } function E(e) { var t, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}; return "string" == typeof e ? D((t = document.querySelectorAll(e), [].slice.call(t)), n) : D([e], n)[0] } }("undefined" == typeof window ? null : window), e.exports = t.default });


(function ($) {
  $.fn.connections = function (options) {
    if (options === "update") {
      return processConnections(update, this);
    } else if (options === "remove") {
      return processConnections(destroy, this);
    } else {
      options = $.extend(
        true,
        {
          borderClasses: {},
          class: "connection",
          css: {},
          from: this,
          tag: "connection",
          to: this,
          within: ":root",
        },
        options
      );
      connect(options);
      return this;
    }
  };

  $.event.special.connections = {
    teardown: function (namespaces) {
      processConnections(destroy, $(this));
    },
  };

  var connect = function (options) {
    var borderClasses = options.borderClasses;
    var tag = options.tag;
    var end1 = $(options.from);
    var end2 = $(options.to);
    var within = $(options.within);
    delete options.borderClasses;
    delete options.tag;
    delete options.from;
    delete options.to;
    delete options.within;
    within.each(function () {
      var container = this;
      var done = new Array();
      end1.each(function () {
        var node = this;
        done.push(this);
        end2.not(done).each(function () {
          createConnection(
            container,
            [node, this],
            tag,
            borderClasses,
            options
          );
        });
      });
    });
  };

  var createConnection = function (
    container,
    nodes,
    tag,
    borderClasses,
    options
  ) {
    var css = $.extend({ position: "absolute" }, options.css);
    var connection = $("<" + tag + "/>", options).css(css);
    connection.appendTo(container);

    var border_w = (connection.outerWidth() - connection.innerWidth()) / 2;
    var border_h = (connection.outerHeight() - connection.innerHeight()) / 2;

    if (border_w <= 0 && border_h <= 0) {
      border_w = border_h = 1;
    }

    var data = {
      borderClasses: borderClasses,
      border_h: border_h,
      border_w: border_w,
      node_from: $(nodes[0]),
      node_to: $(nodes[1]),
      nodes_dom: nodes,
      css: css,
    };

    if ("none" === connection.css("border-top-style")) {
      data.css.borderStyle = "solid";
    }
    $.data(connection.get(0), "connection", data);
    $.data(connection.get(0), "connections", [connection.get(0)]);
    for (var i = 0; i < 2; i++) {
      var connections = connection.add($.data(nodes[i], "connections")).get();
      $.data(nodes[i], "connections", connections);
      if (connections.length == 1) {
        $(nodes[i]).on("connections.connections", false);
      }
    }
    update(connection.get(0));
  };

  var destroy = function (connection) {
    var nodes = $.data(connection, "connection").nodes_dom;
    for (var i = 0; i < 2; i++) {
      var connections = $($.data(nodes[i], "connections"))
        .not(connection)
        .get();
      $.data(nodes[i], "connections", connections);
    }
    $(connection).remove();
  };

  var getState = function (data) {
    data.rect_from = data.nodes_dom[0].getBoundingClientRect();
    data.rect_to = data.nodes_dom[1].getBoundingClientRect();
    var cached = data.cache;
    data.cache = [
      data.rect_from.top,
      data.rect_from.right,
      data.rect_from.bottom,
      data.rect_from.left,
      data.rect_to.top,
      data.rect_to.right,
      data.rect_to.bottom,
      data.rect_to.left,
    ];
    data.hidden =
      0 === (data.cache[0] | data.cache[1] | data.cache[2] | data.cache[3]) ||
      0 === (data.cache[4] | data.cache[5] | data.cache[6] | data.cache[7]);
    data.unmodified = true;
    if (cached === undefined) {
      return (data.unmodified = false);
    }
    for (var i = 0; i < 8; i++) {
      if (cached[i] !== data.cache[i]) {
        return (data.unmodified = false);
      }
    }
  };

  var update = function (connection) {
    var data = $.data(connection, "connection");
    getState(data);
    if (data.unmodified) {
      return;
    }
    var border_h = data.border_h;
    var border_w = data.border_w;
    var from = data.rect_from;
    var to = data.rect_to;
    var b = (from.bottom + from.top) / 2;
    var r = (to.left + to.right) / 2;
    var t = (to.bottom + to.top) / 2;
    var l = (from.left + from.right) / 2;

    var h = ["right", "left"];
    if (l > r) {
      h = ["left", "right"];
      var x = Math.max(r - border_w / 2, Math.min(from.right, to.right));
      r = l + border_w / 2;
      l = x;
    } else {
      l -= border_w / 2;
      r = Math.min(r + border_w / 2, Math.max(from.left, to.left));
    }
    var v = ["bottom", "top"];
    if (t > b) {
      v = ["top", "bottom"];
      var x = Math.max(b - border_h / 2, Math.min(from.bottom, to.bottom));
      b = t + border_h / 2;
      t = x;
    } else {
      b = Math.min(b, Math.max(from.top, to.top));
      t -= border_h / 2;
    }
    var width = r - l;
    var height = b - t;
    if (width < border_w) {
      t = Math.max(t, Math.min(from.bottom, to.bottom));
      b = Math.min(b, Math.max(from.top, to.top));
      l = Math.max(from.left, to.left);
      r = Math.min(from.right, to.right);
      r = l = (l + r - border_w) / 2;
    }
    if (height < border_h) {
      l = Math.max(l, Math.min(from.right, to.right));
      r = Math.min(r, Math.max(from.left, to.left));
      t = Math.max(from.top, to.top);
      b = Math.min(from.bottom, to.bottom);
      b = t = (t + b - border_h) / 2;
    }
    width = r - l;
    height = b - t;
    width <= 0 && (border_h = 0);
    height <= 0 && (border_w = 0);
    var style =
      "border-" +
      v[0] +
      "-" +
      h[0] +
      "-radius: 0;" +
      "border-" +
      v[0] +
      "-" +
      h[1] +
      "-radius: 0;" +
      "border-" +
      v[1] +
      "-" +
      h[0] +
      "-radius: 0;";
    (border_h <= 0 || border_w <= 0) &&
      (style += "border-" + v[1] + "-" + h[1] + "-radius: 0;");
    if (data.hidden) {
      style += "display: none;";
    } else {
      data.css["border-" + v[0] + "-width"] = 0;
      data.css["border-" + h[0] + "-width"] = 0;
      data.css["border-" + v[1] + "-width"] = border_h;
      data.css["border-" + h[1] + "-width"] = border_w;
      var current_rect = connection.getBoundingClientRect();
      data.css.left = connection.offsetLeft + l - current_rect.left;
      data.css.top = connection.offsetTop + t - current_rect.top;
      data.css.width = width - border_w;
      data.css.height = height - border_h;
    }
    var bc = data.borderClasses;
    $(connection)
      .removeClass(bc[v[0]])
      .removeClass(bc[h[0]])
      .addClass(bc[v[1]])
      .addClass(bc[h[1]])
      .attr("style", style)
      .css(data.css);
  };

  var processConnections = function (method, elements) {
    return elements.each(function () {
      var connections = $.data(this, "connections");
      if (connections instanceof Array) {
        for (var i = 0, len = connections.length; i < len; i++) {
          method(connections[i]);
        }
      }
    });
  };
})(jQuery);


/*!
 * Chart.js v2.9.4
 * https://www.chartjs.org
 * (c) 2020 Chart.js Contributors
 * Released under the MIT License
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(function(){try{return require("moment")}catch(t){}}()):"function"==typeof define&&define.amd?define(["require"],(function(t){return e(function(){try{return t("moment")}catch(t){}}())})):(t=t||self).Chart=e(t.moment)}(this,(function(t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var e={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},n=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t){var n={};for(var i in e)e.hasOwnProperty(i)&&(n[e[i]]=i);var a=t.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var r in a)if(a.hasOwnProperty(r)){if(!("channels"in a[r]))throw new Error("missing channels property: "+r);if(!("labels"in a[r]))throw new Error("missing channel labels property: "+r);if(a[r].labels.length!==a[r].channels)throw new Error("channel and label counts mismatch: "+r);var o=a[r].channels,s=a[r].labels;delete a[r].channels,delete a[r].labels,Object.defineProperty(a[r],"channels",{value:o}),Object.defineProperty(a[r],"labels",{value:s})}a.rgb.hsl=function(t){var e,n,i=t[0]/255,a=t[1]/255,r=t[2]/255,o=Math.min(i,a,r),s=Math.max(i,a,r),l=s-o;return s===o?e=0:i===s?e=(a-r)/l:a===s?e=2+(r-i)/l:r===s&&(e=4+(i-a)/l),(e=Math.min(60*e,360))<0&&(e+=360),n=(o+s)/2,[e,100*(s===o?0:n<=.5?l/(s+o):l/(2-s-o)),100*n]},a.rgb.hsv=function(t){var e,n,i,a,r,o=t[0]/255,s=t[1]/255,l=t[2]/255,u=Math.max(o,s,l),d=u-Math.min(o,s,l),h=function(t){return(u-t)/6/d+.5};return 0===d?a=r=0:(r=d/u,e=h(o),n=h(s),i=h(l),o===u?a=i-n:s===u?a=1/3+e-i:l===u&&(a=2/3+n-e),a<0?a+=1:a>1&&(a-=1)),[360*a,100*r,100*u]},a.rgb.hwb=function(t){var e=t[0],n=t[1],i=t[2];return[a.rgb.hsl(t)[0],100*(1/255*Math.min(e,Math.min(n,i))),100*(i=1-1/255*Math.max(e,Math.max(n,i)))]},a.rgb.cmyk=function(t){var e,n=t[0]/255,i=t[1]/255,a=t[2]/255;return[100*((1-n-(e=Math.min(1-n,1-i,1-a)))/(1-e)||0),100*((1-i-e)/(1-e)||0),100*((1-a-e)/(1-e)||0),100*e]},a.rgb.keyword=function(t){var i=n[t];if(i)return i;var a,r,o,s=1/0;for(var l in e)if(e.hasOwnProperty(l)){var u=e[l],d=(r=t,o=u,Math.pow(r[0]-o[0],2)+Math.pow(r[1]-o[1],2)+Math.pow(r[2]-o[2],2));d<s&&(s=d,a=l)}return a},a.keyword.rgb=function(t){return e[t]},a.rgb.xyz=function(t){var e=t[0]/255,n=t[1]/255,i=t[2]/255;return[100*(.4124*(e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92)+.3576*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)+.1805*(i=i>.04045?Math.pow((i+.055)/1.055,2.4):i/12.92)),100*(.2126*e+.7152*n+.0722*i),100*(.0193*e+.1192*n+.9505*i)]},a.rgb.lab=function(t){var e=a.rgb.xyz(t),n=e[0],i=e[1],r=e[2];return i/=100,r/=108.883,n=(n/=95.047)>.008856?Math.pow(n,1/3):7.787*n+16/116,[116*(i=i>.008856?Math.pow(i,1/3):7.787*i+16/116)-16,500*(n-i),200*(i-(r=r>.008856?Math.pow(r,1/3):7.787*r+16/116))]},a.hsl.rgb=function(t){var e,n,i,a,r,o=t[0]/360,s=t[1]/100,l=t[2]/100;if(0===s)return[r=255*l,r,r];e=2*l-(n=l<.5?l*(1+s):l+s-l*s),a=[0,0,0];for(var u=0;u<3;u++)(i=o+1/3*-(u-1))<0&&i++,i>1&&i--,r=6*i<1?e+6*(n-e)*i:2*i<1?n:3*i<2?e+(n-e)*(2/3-i)*6:e,a[u]=255*r;return a},a.hsl.hsv=function(t){var e=t[0],n=t[1]/100,i=t[2]/100,a=n,r=Math.max(i,.01);return n*=(i*=2)<=1?i:2-i,a*=r<=1?r:2-r,[e,100*(0===i?2*a/(r+a):2*n/(i+n)),100*((i+n)/2)]},a.hsv.rgb=function(t){var e=t[0]/60,n=t[1]/100,i=t[2]/100,a=Math.floor(e)%6,r=e-Math.floor(e),o=255*i*(1-n),s=255*i*(1-n*r),l=255*i*(1-n*(1-r));switch(i*=255,a){case 0:return[i,l,o];case 1:return[s,i,o];case 2:return[o,i,l];case 3:return[o,s,i];case 4:return[l,o,i];case 5:return[i,o,s]}},a.hsv.hsl=function(t){var e,n,i,a=t[0],r=t[1]/100,o=t[2]/100,s=Math.max(o,.01);return i=(2-r)*o,n=r*s,[a,100*(n=(n/=(e=(2-r)*s)<=1?e:2-e)||0),100*(i/=2)]},a.hwb.rgb=function(t){var e,n,i,a,r,o,s,l=t[0]/360,u=t[1]/100,d=t[2]/100,h=u+d;switch(h>1&&(u/=h,d/=h),i=6*l-(e=Math.floor(6*l)),0!=(1&e)&&(i=1-i),a=u+i*((n=1-d)-u),e){default:case 6:case 0:r=n,o=a,s=u;break;case 1:r=a,o=n,s=u;break;case 2:r=u,o=n,s=a;break;case 3:r=u,o=a,s=n;break;case 4:r=a,o=u,s=n;break;case 5:r=n,o=u,s=a}return[255*r,255*o,255*s]},a.cmyk.rgb=function(t){var e=t[0]/100,n=t[1]/100,i=t[2]/100,a=t[3]/100;return[255*(1-Math.min(1,e*(1-a)+a)),255*(1-Math.min(1,n*(1-a)+a)),255*(1-Math.min(1,i*(1-a)+a))]},a.xyz.rgb=function(t){var e,n,i,a=t[0]/100,r=t[1]/100,o=t[2]/100;return n=-.9689*a+1.8758*r+.0415*o,i=.0557*a+-.204*r+1.057*o,e=(e=3.2406*a+-1.5372*r+-.4986*o)>.0031308?1.055*Math.pow(e,1/2.4)-.055:12.92*e,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:12.92*n,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:12.92*i,[255*(e=Math.min(Math.max(0,e),1)),255*(n=Math.min(Math.max(0,n),1)),255*(i=Math.min(Math.max(0,i),1))]},a.xyz.lab=function(t){var e=t[0],n=t[1],i=t[2];return n/=100,i/=108.883,e=(e/=95.047)>.008856?Math.pow(e,1/3):7.787*e+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(e-n),200*(n-(i=i>.008856?Math.pow(i,1/3):7.787*i+16/116))]},a.lab.xyz=function(t){var e,n,i,a=t[0];e=t[1]/500+(n=(a+16)/116),i=n-t[2]/200;var r=Math.pow(n,3),o=Math.pow(e,3),s=Math.pow(i,3);return n=r>.008856?r:(n-16/116)/7.787,e=o>.008856?o:(e-16/116)/7.787,i=s>.008856?s:(i-16/116)/7.787,[e*=95.047,n*=100,i*=108.883]},a.lab.lch=function(t){var e,n=t[0],i=t[1],a=t[2];return(e=360*Math.atan2(a,i)/2/Math.PI)<0&&(e+=360),[n,Math.sqrt(i*i+a*a),e]},a.lch.lab=function(t){var e,n=t[0],i=t[1];return e=t[2]/360*2*Math.PI,[n,i*Math.cos(e),i*Math.sin(e)]},a.rgb.ansi16=function(t){var e=t[0],n=t[1],i=t[2],r=1 in arguments?arguments[1]:a.rgb.hsv(t)[2];if(0===(r=Math.round(r/50)))return 30;var o=30+(Math.round(i/255)<<2|Math.round(n/255)<<1|Math.round(e/255));return 2===r&&(o+=60),o},a.hsv.ansi16=function(t){return a.rgb.ansi16(a.hsv.rgb(t),t[2])},a.rgb.ansi256=function(t){var e=t[0],n=t[1],i=t[2];return e===n&&n===i?e<8?16:e>248?231:Math.round((e-8)/247*24)+232:16+36*Math.round(e/255*5)+6*Math.round(n/255*5)+Math.round(i/255*5)},a.ansi16.rgb=function(t){var e=t%10;if(0===e||7===e)return t>50&&(e+=3.5),[e=e/10.5*255,e,e];var n=.5*(1+~~(t>50));return[(1&e)*n*255,(e>>1&1)*n*255,(e>>2&1)*n*255]},a.ansi256.rgb=function(t){if(t>=232){var e=10*(t-232)+8;return[e,e,e]}var n;return t-=16,[Math.floor(t/36)/5*255,Math.floor((n=t%36)/6)/5*255,n%6/5*255]},a.rgb.hex=function(t){var e=(((255&Math.round(t[0]))<<16)+((255&Math.round(t[1]))<<8)+(255&Math.round(t[2]))).toString(16).toUpperCase();return"000000".substring(e.length)+e},a.hex.rgb=function(t){var e=t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!e)return[0,0,0];var n=e[0];3===e[0].length&&(n=n.split("").map((function(t){return t+t})).join(""));var i=parseInt(n,16);return[i>>16&255,i>>8&255,255&i]},a.rgb.hcg=function(t){var e,n=t[0]/255,i=t[1]/255,a=t[2]/255,r=Math.max(Math.max(n,i),a),o=Math.min(Math.min(n,i),a),s=r-o;return e=s<=0?0:r===n?(i-a)/s%6:r===i?2+(a-n)/s:4+(n-i)/s+4,e/=6,[360*(e%=1),100*s,100*(s<1?o/(1-s):0)]},a.hsl.hcg=function(t){var e=t[1]/100,n=t[2]/100,i=1,a=0;return(i=n<.5?2*e*n:2*e*(1-n))<1&&(a=(n-.5*i)/(1-i)),[t[0],100*i,100*a]},a.hsv.hcg=function(t){var e=t[1]/100,n=t[2]/100,i=e*n,a=0;return i<1&&(a=(n-i)/(1-i)),[t[0],100*i,100*a]},a.hcg.rgb=function(t){var e=t[0]/360,n=t[1]/100,i=t[2]/100;if(0===n)return[255*i,255*i,255*i];var a,r=[0,0,0],o=e%1*6,s=o%1,l=1-s;switch(Math.floor(o)){case 0:r[0]=1,r[1]=s,r[2]=0;break;case 1:r[0]=l,r[1]=1,r[2]=0;break;case 2:r[0]=0,r[1]=1,r[2]=s;break;case 3:r[0]=0,r[1]=l,r[2]=1;break;case 4:r[0]=s,r[1]=0,r[2]=1;break;default:r[0]=1,r[1]=0,r[2]=l}return a=(1-n)*i,[255*(n*r[0]+a),255*(n*r[1]+a),255*(n*r[2]+a)]},a.hcg.hsv=function(t){var e=t[1]/100,n=e+t[2]/100*(1-e),i=0;return n>0&&(i=e/n),[t[0],100*i,100*n]},a.hcg.hsl=function(t){var e=t[1]/100,n=t[2]/100*(1-e)+.5*e,i=0;return n>0&&n<.5?i=e/(2*n):n>=.5&&n<1&&(i=e/(2*(1-n))),[t[0],100*i,100*n]},a.hcg.hwb=function(t){var e=t[1]/100,n=e+t[2]/100*(1-e);return[t[0],100*(n-e),100*(1-n)]},a.hwb.hcg=function(t){var e=t[1]/100,n=1-t[2]/100,i=n-e,a=0;return i<1&&(a=(n-i)/(1-i)),[t[0],100*i,100*a]},a.apple.rgb=function(t){return[t[0]/65535*255,t[1]/65535*255,t[2]/65535*255]},a.rgb.apple=function(t){return[t[0]/255*65535,t[1]/255*65535,t[2]/255*65535]},a.gray.rgb=function(t){return[t[0]/100*255,t[0]/100*255,t[0]/100*255]},a.gray.hsl=a.gray.hsv=function(t){return[0,0,t[0]]},a.gray.hwb=function(t){return[0,100,t[0]]},a.gray.cmyk=function(t){return[0,0,0,t[0]]},a.gray.lab=function(t){return[t[0],0,0]},a.gray.hex=function(t){var e=255&Math.round(t[0]/100*255),n=((e<<16)+(e<<8)+e).toString(16).toUpperCase();return"000000".substring(n.length)+n},a.rgb.gray=function(t){return[(t[0]+t[1]+t[2])/3/255*100]}}));n.rgb,n.hsl,n.hsv,n.hwb,n.cmyk,n.xyz,n.lab,n.lch,n.hex,n.keyword,n.ansi16,n.ansi256,n.hcg,n.apple,n.gray;function i(t){var e=function(){for(var t={},e=Object.keys(n),i=e.length,a=0;a<i;a++)t[e[a]]={distance:-1,parent:null};return t}(),i=[t];for(e[t].distance=0;i.length;)for(var a=i.pop(),r=Object.keys(n[a]),o=r.length,s=0;s<o;s++){var l=r[s],u=e[l];-1===u.distance&&(u.distance=e[a].distance+1,u.parent=a,i.unshift(l))}return e}function a(t,e){return function(n){return e(t(n))}}function r(t,e){for(var i=[e[t].parent,t],r=n[e[t].parent][t],o=e[t].parent;e[o].parent;)i.unshift(e[o].parent),r=a(n[e[o].parent][o],r),o=e[o].parent;return r.conversion=i,r}var o={};Object.keys(n).forEach((function(t){o[t]={},Object.defineProperty(o[t],"channels",{value:n[t].channels}),Object.defineProperty(o[t],"labels",{value:n[t].labels});var e=function(t){for(var e=i(t),n={},a=Object.keys(e),o=a.length,s=0;s<o;s++){var l=a[s];null!==e[l].parent&&(n[l]=r(l,e))}return n}(t);Object.keys(e).forEach((function(n){var i=e[n];o[t][n]=function(t){var e=function(e){if(null==e)return e;arguments.length>1&&(e=Array.prototype.slice.call(arguments));var n=t(e);if("object"==typeof n)for(var i=n.length,a=0;a<i;a++)n[a]=Math.round(n[a]);return n};return"conversion"in t&&(e.conversion=t.conversion),e}(i),o[t][n].raw=function(t){var e=function(e){return null==e?e:(arguments.length>1&&(e=Array.prototype.slice.call(arguments)),t(e))};return"conversion"in t&&(e.conversion=t.conversion),e}(i)}))}));var s=o,l={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},u={getRgba:d,getHsla:h,getRgb:function(t){var e=d(t);return e&&e.slice(0,3)},getHsl:function(t){var e=h(t);return e&&e.slice(0,3)},getHwb:c,getAlpha:function(t){var e=d(t);if(e)return e[3];if(e=h(t))return e[3];if(e=c(t))return e[3]},hexString:function(t,e){e=void 0!==e&&3===t.length?e:t[3];return"#"+v(t[0])+v(t[1])+v(t[2])+(e>=0&&e<1?v(Math.round(255*e)):"")},rgbString:function(t,e){if(e<1||t[3]&&t[3]<1)return f(t,e);return"rgb("+t[0]+", "+t[1]+", "+t[2]+")"},rgbaString:f,percentString:function(t,e){if(e<1||t[3]&&t[3]<1)return g(t,e);var n=Math.round(t[0]/255*100),i=Math.round(t[1]/255*100),a=Math.round(t[2]/255*100);return"rgb("+n+"%, "+i+"%, "+a+"%)"},percentaString:g,hslString:function(t,e){if(e<1||t[3]&&t[3]<1)return p(t,e);return"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)"},hslaString:p,hwbString:function(t,e){void 0===e&&(e=void 0!==t[3]?t[3]:1);return"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+(void 0!==e&&1!==e?", "+e:"")+")"},keyword:function(t){return b[t.slice(0,3)]}};function d(t){if(t){var e=[0,0,0],n=1,i=t.match(/^#([a-fA-F0-9]{3,4})$/i),a="";if(i){a=(i=i[1])[3];for(var r=0;r<e.length;r++)e[r]=parseInt(i[r]+i[r],16);a&&(n=Math.round(parseInt(a+a,16)/255*100)/100)}else if(i=t.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i)){a=i[2],i=i[1];for(r=0;r<e.length;r++)e[r]=parseInt(i.slice(2*r,2*r+2),16);a&&(n=Math.round(parseInt(a,16)/255*100)/100)}else if(i=t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)){for(r=0;r<e.length;r++)e[r]=parseInt(i[r+1]);n=parseFloat(i[4])}else if(i=t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)){for(r=0;r<e.length;r++)e[r]=Math.round(2.55*parseFloat(i[r+1]));n=parseFloat(i[4])}else if(i=t.match(/(\w+)/)){if("transparent"==i[1])return[0,0,0,0];if(!(e=l[i[1]]))return}for(r=0;r<e.length;r++)e[r]=m(e[r],0,255);return n=n||0==n?m(n,0,1):1,e[3]=n,e}}function h(t){if(t){var e=t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if(e){var n=parseFloat(e[4]);return[m(parseInt(e[1]),0,360),m(parseFloat(e[2]),0,100),m(parseFloat(e[3]),0,100),m(isNaN(n)?1:n,0,1)]}}}function c(t){if(t){var e=t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if(e){var n=parseFloat(e[4]);return[m(parseInt(e[1]),0,360),m(parseFloat(e[2]),0,100),m(parseFloat(e[3]),0,100),m(isNaN(n)?1:n,0,1)]}}}function f(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+e+")"}function g(t,e){return"rgba("+Math.round(t[0]/255*100)+"%, "+Math.round(t[1]/255*100)+"%, "+Math.round(t[2]/255*100)+"%, "+(e||t[3]||1)+")"}function p(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+e+")"}function m(t,e,n){return Math.min(Math.max(e,t),n)}function v(t){var e=t.toString(16).toUpperCase();return e.length<2?"0"+e:e}var b={};for(var x in l)b[l[x]]=x;var y=function(t){return t instanceof y?t:this instanceof y?(this.valid=!1,this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],hwb:[0,0,0],cmyk:[0,0,0,0],alpha:1},void("string"==typeof t?(e=u.getRgba(t))?this.setValues("rgb",e):(e=u.getHsla(t))?this.setValues("hsl",e):(e=u.getHwb(t))&&this.setValues("hwb",e):"object"==typeof t&&(void 0!==(e=t).r||void 0!==e.red?this.setValues("rgb",e):void 0!==e.l||void 0!==e.lightness?this.setValues("hsl",e):void 0!==e.v||void 0!==e.value?this.setValues("hsv",e):void 0!==e.w||void 0!==e.whiteness?this.setValues("hwb",e):void 0===e.c&&void 0===e.cyan||this.setValues("cmyk",e)))):new y(t);var e};y.prototype={isValid:function(){return this.valid},rgb:function(){return this.setSpace("rgb",arguments)},hsl:function(){return this.setSpace("hsl",arguments)},hsv:function(){return this.setSpace("hsv",arguments)},hwb:function(){return this.setSpace("hwb",arguments)},cmyk:function(){return this.setSpace("cmyk",arguments)},rgbArray:function(){return this.values.rgb},hslArray:function(){return this.values.hsl},hsvArray:function(){return this.values.hsv},hwbArray:function(){var t=this.values;return 1!==t.alpha?t.hwb.concat([t.alpha]):t.hwb},cmykArray:function(){return this.values.cmyk},rgbaArray:function(){var t=this.values;return t.rgb.concat([t.alpha])},hslaArray:function(){var t=this.values;return t.hsl.concat([t.alpha])},alpha:function(t){return void 0===t?this.values.alpha:(this.setValues("alpha",t),this)},red:function(t){return this.setChannel("rgb",0,t)},green:function(t){return this.setChannel("rgb",1,t)},blue:function(t){return this.setChannel("rgb",2,t)},hue:function(t){return t&&(t=(t%=360)<0?360+t:t),this.setChannel("hsl",0,t)},saturation:function(t){return this.setChannel("hsl",1,t)},lightness:function(t){return this.setChannel("hsl",2,t)},saturationv:function(t){return this.setChannel("hsv",1,t)},whiteness:function(t){return this.setChannel("hwb",1,t)},blackness:function(t){return this.setChannel("hwb",2,t)},value:function(t){return this.setChannel("hsv",2,t)},cyan:function(t){return this.setChannel("cmyk",0,t)},magenta:function(t){return this.setChannel("cmyk",1,t)},yellow:function(t){return this.setChannel("cmyk",2,t)},black:function(t){return this.setChannel("cmyk",3,t)},hexString:function(){return u.hexString(this.values.rgb)},rgbString:function(){return u.rgbString(this.values.rgb,this.values.alpha)},rgbaString:function(){return u.rgbaString(this.values.rgb,this.values.alpha)},percentString:function(){return u.percentString(this.values.rgb,this.values.alpha)},hslString:function(){return u.hslString(this.values.hsl,this.values.alpha)},hslaString:function(){return u.hslaString(this.values.hsl,this.values.alpha)},hwbString:function(){return u.hwbString(this.values.hwb,this.values.alpha)},keyword:function(){return u.keyword(this.values.rgb,this.values.alpha)},rgbNumber:function(){var t=this.values.rgb;return t[0]<<16|t[1]<<8|t[2]},luminosity:function(){for(var t=this.values.rgb,e=[],n=0;n<t.length;n++){var i=t[n]/255;e[n]=i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4)}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(t){var e=this.luminosity(),n=t.luminosity();return e>n?(e+.05)/(n+.05):(n+.05)/(e+.05)},level:function(t){var e=this.contrast(t);return e>=7.1?"AAA":e>=4.5?"AA":""},dark:function(){var t=this.values.rgb;return(299*t[0]+587*t[1]+114*t[2])/1e3<128},light:function(){return!this.dark()},negate:function(){for(var t=[],e=0;e<3;e++)t[e]=255-this.values.rgb[e];return this.setValues("rgb",t),this},lighten:function(t){var e=this.values.hsl;return e[2]+=e[2]*t,this.setValues("hsl",e),this},darken:function(t){var e=this.values.hsl;return e[2]-=e[2]*t,this.setValues("hsl",e),this},saturate:function(t){var e=this.values.hsl;return e[1]+=e[1]*t,this.setValues("hsl",e),this},desaturate:function(t){var e=this.values.hsl;return e[1]-=e[1]*t,this.setValues("hsl",e),this},whiten:function(t){var e=this.values.hwb;return e[1]+=e[1]*t,this.setValues("hwb",e),this},blacken:function(t){var e=this.values.hwb;return e[2]+=e[2]*t,this.setValues("hwb",e),this},greyscale:function(){var t=this.values.rgb,e=.3*t[0]+.59*t[1]+.11*t[2];return this.setValues("rgb",[e,e,e]),this},clearer:function(t){var e=this.values.alpha;return this.setValues("alpha",e-e*t),this},opaquer:function(t){var e=this.values.alpha;return this.setValues("alpha",e+e*t),this},rotate:function(t){var e=this.values.hsl,n=(e[0]+t)%360;return e[0]=n<0?360+n:n,this.setValues("hsl",e),this},mix:function(t,e){var n=t,i=void 0===e?.5:e,a=2*i-1,r=this.alpha()-n.alpha(),o=((a*r==-1?a:(a+r)/(1+a*r))+1)/2,s=1-o;return this.rgb(o*this.red()+s*n.red(),o*this.green()+s*n.green(),o*this.blue()+s*n.blue()).alpha(this.alpha()*i+n.alpha()*(1-i))},toJSON:function(){return this.rgb()},clone:function(){var t,e,n=new y,i=this.values,a=n.values;for(var r in i)i.hasOwnProperty(r)&&(t=i[r],"[object Array]"===(e={}.toString.call(t))?a[r]=t.slice(0):"[object Number]"===e?a[r]=t:console.error("unexpected color value:",t));return n}},y.prototype.spaces={rgb:["red","green","blue"],hsl:["hue","saturation","lightness"],hsv:["hue","saturation","value"],hwb:["hue","whiteness","blackness"],cmyk:["cyan","magenta","yellow","black"]},y.prototype.maxes={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],hwb:[360,100,100],cmyk:[100,100,100,100]},y.prototype.getValues=function(t){for(var e=this.values,n={},i=0;i<t.length;i++)n[t.charAt(i)]=e[t][i];return 1!==e.alpha&&(n.a=e.alpha),n},y.prototype.setValues=function(t,e){var n,i,a=this.values,r=this.spaces,o=this.maxes,l=1;if(this.valid=!0,"alpha"===t)l=e;else if(e.length)a[t]=e.slice(0,t.length),l=e[t.length];else if(void 0!==e[t.charAt(0)]){for(n=0;n<t.length;n++)a[t][n]=e[t.charAt(n)];l=e.a}else if(void 0!==e[r[t][0]]){var u=r[t];for(n=0;n<t.length;n++)a[t][n]=e[u[n]];l=e.alpha}if(a.alpha=Math.max(0,Math.min(1,void 0===l?a.alpha:l)),"alpha"===t)return!1;for(n=0;n<t.length;n++)i=Math.max(0,Math.min(o[t][n],a[t][n])),a[t][n]=Math.round(i);for(var d in r)d!==t&&(a[d]=s[t][d](a[t]));return!0},y.prototype.setSpace=function(t,e){var n=e[0];return void 0===n?this.getValues(t):("number"==typeof n&&(n=Array.prototype.slice.call(e)),this.setValues(t,n),this)},y.prototype.setChannel=function(t,e,n){var i=this.values[t];return void 0===n?i[e]:n===i[e]?this:(i[e]=n,this.setValues(t,i),this)},"undefined"!=typeof window&&(window.Color=y);var _=y;function k(t){return-1===["__proto__","prototype","constructor"].indexOf(t)}var w,M={noop:function(){},uid:(w=0,function(){return w++}),isNullOrUndef:function(t){return null==t},isArray:function(t){if(Array.isArray&&Array.isArray(t))return!0;var e=Object.prototype.toString.call(t);return"[object"===e.substr(0,7)&&"Array]"===e.substr(-6)},isObject:function(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)},isFinite:function(t){return("number"==typeof t||t instanceof Number)&&isFinite(t)},valueOrDefault:function(t,e){return void 0===t?e:t},valueAtIndexOrDefault:function(t,e,n){return M.valueOrDefault(M.isArray(t)?t[e]:t,n)},callback:function(t,e,n){if(t&&"function"==typeof t.call)return t.apply(n,e)},each:function(t,e,n,i){var a,r,o;if(M.isArray(t))if(r=t.length,i)for(a=r-1;a>=0;a--)e.call(n,t[a],a);else for(a=0;a<r;a++)e.call(n,t[a],a);else if(M.isObject(t))for(r=(o=Object.keys(t)).length,a=0;a<r;a++)e.call(n,t[o[a]],o[a])},arrayEquals:function(t,e){var n,i,a,r;if(!t||!e||t.length!==e.length)return!1;for(n=0,i=t.length;n<i;++n)if(a=t[n],r=e[n],a instanceof Array&&r instanceof Array){if(!M.arrayEquals(a,r))return!1}else if(a!==r)return!1;return!0},clone:function(t){if(M.isArray(t))return t.map(M.clone);if(M.isObject(t)){for(var e=Object.create(t),n=Object.keys(t),i=n.length,a=0;a<i;++a)e[n[a]]=M.clone(t[n[a]]);return e}return t},_merger:function(t,e,n,i){if(k(t)){var a=e[t],r=n[t];M.isObject(a)&&M.isObject(r)?M.merge(a,r,i):e[t]=M.clone(r)}},_mergerIf:function(t,e,n){if(k(t)){var i=e[t],a=n[t];M.isObject(i)&&M.isObject(a)?M.mergeIf(i,a):e.hasOwnProperty(t)||(e[t]=M.clone(a))}},merge:function(t,e,n){var i,a,r,o,s,l=M.isArray(e)?e:[e],u=l.length;if(!M.isObject(t))return t;for(i=(n=n||{}).merger||M._merger,a=0;a<u;++a)if(e=l[a],M.isObject(e))for(s=0,o=(r=Object.keys(e)).length;s<o;++s)i(r[s],t,e,n);return t},mergeIf:function(t,e){return M.merge(t,e,{merger:M._mergerIf})},extend:Object.assign||function(t){return M.merge(t,[].slice.call(arguments,1),{merger:function(t,e,n){e[t]=n[t]}})},inherits:function(t){var e=this,n=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return e.apply(this,arguments)},i=function(){this.constructor=n};return i.prototype=e.prototype,n.prototype=new i,n.extend=M.inherits,t&&M.extend(n.prototype,t),n.__super__=e.prototype,n},_deprecated:function(t,e,n,i){void 0!==e&&console.warn(t+': "'+n+'" is deprecated. Please use "'+i+'" instead')}},S=M;M.callCallback=M.callback,M.indexOf=function(t,e,n){return Array.prototype.indexOf.call(t,e,n)},M.getValueOrDefault=M.valueOrDefault,M.getValueAtIndexOrDefault=M.valueAtIndexOrDefault;var C={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return(t-=1)*t*t+1},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-((t-=1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return(t-=1)*t*t*t*t+1},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return 1-Math.cos(t*(Math.PI/2))},easeOutSine:function(t){return Math.sin(t*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t)-1)},easeInExpo:function(t){return 0===t?0:Math.pow(2,10*(t-1))},easeOutExpo:function(t){return 1===t?1:1-Math.pow(2,-10*t)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},easeInCirc:function(t){return t>=1?t:-(Math.sqrt(1-t*t)-1)},easeOutCirc:function(t){return Math.sqrt(1-(t-=1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var e=1.70158,n=0,i=1;return 0===t?0:1===t?1:(n||(n=.3),i<1?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),-i*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n))},easeOutElastic:function(t){var e=1.70158,n=0,i=1;return 0===t?0:1===t?1:(n||(n=.3),i<1?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),i*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/n)+1)},easeInOutElastic:function(t){var e=1.70158,n=0,i=1;return 0===t?0:2==(t/=.5)?1:(n||(n=.45),i<1?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),t<1?i*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n)*-.5:i*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n)*.5+1)},easeInBack:function(t){var e=1.70158;return t*t*((e+1)*t-e)},easeOutBack:function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:function(t){return 1-C.easeOutBounce(1-t)},easeOutBounce:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:function(t){return t<.5?.5*C.easeInBounce(2*t):.5*C.easeOutBounce(2*t-1)+.5}},P={effects:C};S.easingEffects=C;var A=Math.PI,D=A/180,T=2*A,I=A/2,F=A/4,O=2*A/3,L={clear:function(t){t.ctx.clearRect(0,0,t.width,t.height)},roundedRect:function(t,e,n,i,a,r){if(r){var o=Math.min(r,a/2,i/2),s=e+o,l=n+o,u=e+i-o,d=n+a-o;t.moveTo(e,l),s<u&&l<d?(t.arc(s,l,o,-A,-I),t.arc(u,l,o,-I,0),t.arc(u,d,o,0,I),t.arc(s,d,o,I,A)):s<u?(t.moveTo(s,n),t.arc(u,l,o,-I,I),t.arc(s,l,o,I,A+I)):l<d?(t.arc(s,l,o,-A,0),t.arc(s,d,o,0,A)):t.arc(s,l,o,-A,A),t.closePath(),t.moveTo(e,n)}else t.rect(e,n,i,a)},drawPoint:function(t,e,n,i,a,r){var o,s,l,u,d,h=(r||0)*D;if(e&&"object"==typeof e&&("[object HTMLImageElement]"===(o=e.toString())||"[object HTMLCanvasElement]"===o))return t.save(),t.translate(i,a),t.rotate(h),t.drawImage(e,-e.width/2,-e.height/2,e.width,e.height),void t.restore();if(!(isNaN(n)||n<=0)){switch(t.beginPath(),e){default:t.arc(i,a,n,0,T),t.closePath();break;case"triangle":t.moveTo(i+Math.sin(h)*n,a-Math.cos(h)*n),h+=O,t.lineTo(i+Math.sin(h)*n,a-Math.cos(h)*n),h+=O,t.lineTo(i+Math.sin(h)*n,a-Math.cos(h)*n),t.closePath();break;case"rectRounded":u=n-(d=.516*n),s=Math.cos(h+F)*u,l=Math.sin(h+F)*u,t.arc(i-s,a-l,d,h-A,h-I),t.arc(i+l,a-s,d,h-I,h),t.arc(i+s,a+l,d,h,h+I),t.arc(i-l,a+s,d,h+I,h+A),t.closePath();break;case"rect":if(!r){u=Math.SQRT1_2*n,t.rect(i-u,a-u,2*u,2*u);break}h+=F;case"rectRot":s=Math.cos(h)*n,l=Math.sin(h)*n,t.moveTo(i-s,a-l),t.lineTo(i+l,a-s),t.lineTo(i+s,a+l),t.lineTo(i-l,a+s),t.closePath();break;case"crossRot":h+=F;case"cross":s=Math.cos(h)*n,l=Math.sin(h)*n,t.moveTo(i-s,a-l),t.lineTo(i+s,a+l),t.moveTo(i+l,a-s),t.lineTo(i-l,a+s);break;case"star":s=Math.cos(h)*n,l=Math.sin(h)*n,t.moveTo(i-s,a-l),t.lineTo(i+s,a+l),t.moveTo(i+l,a-s),t.lineTo(i-l,a+s),h+=F,s=Math.cos(h)*n,l=Math.sin(h)*n,t.moveTo(i-s,a-l),t.lineTo(i+s,a+l),t.moveTo(i+l,a-s),t.lineTo(i-l,a+s);break;case"line":s=Math.cos(h)*n,l=Math.sin(h)*n,t.moveTo(i-s,a-l),t.lineTo(i+s,a+l);break;case"dash":t.moveTo(i,a),t.lineTo(i+Math.cos(h)*n,a+Math.sin(h)*n)}t.fill(),t.stroke()}},_isPointInArea:function(t,e){return t.x>e.left-1e-6&&t.x<e.right+1e-6&&t.y>e.top-1e-6&&t.y<e.bottom+1e-6},clipArea:function(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()},unclipArea:function(t){t.restore()},lineTo:function(t,e,n,i){var a=n.steppedLine;if(a){if("middle"===a){var r=(e.x+n.x)/2;t.lineTo(r,i?n.y:e.y),t.lineTo(r,i?e.y:n.y)}else"after"===a&&!i||"after"!==a&&i?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y);t.lineTo(n.x,n.y)}else n.tension?t.bezierCurveTo(i?e.controlPointPreviousX:e.controlPointNextX,i?e.controlPointPreviousY:e.controlPointNextY,i?n.controlPointNextX:n.controlPointPreviousX,i?n.controlPointNextY:n.controlPointPreviousY,n.x,n.y):t.lineTo(n.x,n.y)}},R=L;S.clear=L.clear,S.drawRoundedRectangle=function(t){t.beginPath(),L.roundedRect.apply(L,arguments)};var z={_set:function(t,e){return S.merge(this[t]||(this[t]={}),e)}};z._set("global",{defaultColor:"rgba(0,0,0,0.1)",defaultFontColor:"#666",defaultFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",defaultFontSize:12,defaultFontStyle:"normal",defaultLineHeight:1.2,showLines:!0});var N=z,B=S.valueOrDefault;var E={toLineHeight:function(t,e){var n=(""+t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);if(!n||"normal"===n[1])return 1.2*e;switch(t=+n[2],n[3]){case"px":return t;case"%":t/=100}return e*t},toPadding:function(t){var e,n,i,a;return S.isObject(t)?(e=+t.top||0,n=+t.right||0,i=+t.bottom||0,a=+t.left||0):e=n=i=a=+t||0,{top:e,right:n,bottom:i,left:a,height:e+i,width:a+n}},_parseFont:function(t){var e=N.global,n=B(t.fontSize,e.defaultFontSize),i={family:B(t.fontFamily,e.defaultFontFamily),lineHeight:S.options.toLineHeight(B(t.lineHeight,e.defaultLineHeight),n),size:n,style:B(t.fontStyle,e.defaultFontStyle),weight:null,string:""};return i.string=function(t){return!t||S.isNullOrUndef(t.size)||S.isNullOrUndef(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}(i),i},resolve:function(t,e,n,i){var a,r,o,s=!0;for(a=0,r=t.length;a<r;++a)if(void 0!==(o=t[a])&&(void 0!==e&&"function"==typeof o&&(o=o(e),s=!1),void 0!==n&&S.isArray(o)&&(o=o[n],s=!1),void 0!==o))return i&&!s&&(i.cacheable=!1),o}},W={_factorize:function(t){var e,n=[],i=Math.sqrt(t);for(e=1;e<i;e++)t%e==0&&(n.push(e),n.push(t/e));return i===(0|i)&&n.push(i),n.sort((function(t,e){return t-e})).pop(),n},log10:Math.log10||function(t){var e=Math.log(t)*Math.LOG10E,n=Math.round(e);return t===Math.pow(10,n)?n:e}},V=W;S.log10=W.log10;var H=S,j=P,q=R,U=E,Y=V,G={getRtlAdapter:function(t,e,n){return t?function(t,e){return{x:function(n){return t+t+e-n},setWidth:function(t){e=t},textAlign:function(t){return"center"===t?t:"right"===t?"left":"right"},xPlus:function(t,e){return t-e},leftForLtr:function(t,e){return t-e}}}(e,n):{x:function(t){return t},setWidth:function(t){},textAlign:function(t){return t},xPlus:function(t,e){return t+e},leftForLtr:function(t,e){return t}}},overrideTextDirection:function(t,e){var n,i;"ltr"!==e&&"rtl"!==e||(i=[(n=t.canvas.style).getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",e,"important"),t.prevTextDirection=i)},restoreTextDirection:function(t){var e=t.prevTextDirection;void 0!==e&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}};H.easing=j,H.canvas=q,H.options=U,H.math=Y,H.rtl=G;var X=function(t){H.extend(this,t),this.initialize.apply(this,arguments)};H.extend(X.prototype,{_type:void 0,initialize:function(){this.hidden=!1},pivot:function(){var t=this;return t._view||(t._view=H.extend({},t._model)),t._start={},t},transition:function(t){var e=this,n=e._model,i=e._start,a=e._view;return n&&1!==t?(a||(a=e._view={}),i||(i=e._start={}),function(t,e,n,i){var a,r,o,s,l,u,d,h,c,f=Object.keys(n);for(a=0,r=f.length;a<r;++a)if(u=n[o=f[a]],e.hasOwnProperty(o)||(e[o]=u),(s=e[o])!==u&&"_"!==o[0]){if(t.hasOwnProperty(o)||(t[o]=s),(d=typeof u)===typeof(l=t[o]))if("string"===d){if((h=_(l)).valid&&(c=_(u)).valid){e[o]=c.mix(h,i).rgbString();continue}}else if(H.isFinite(l)&&H.isFinite(u)){e[o]=l+(u-l)*i;continue}e[o]=u}}(i,a,n,t),e):(e._view=H.extend({},n),e._start=null,e)},tooltipPosition:function(){return{x:this._model.x,y:this._model.y}},hasValue:function(){return H.isNumber(this._model.x)&&H.isNumber(this._model.y)}}),X.extend=H.inherits;var K=X,Z=K.extend({chart:null,currentStep:0,numSteps:60,easing:"",render:null,onAnimationProgress:null,onAnimationComplete:null}),$=Z;Object.defineProperty(Z.prototype,"animationObject",{get:function(){return this}}),Object.defineProperty(Z.prototype,"chartInstance",{get:function(){return this.chart},set:function(t){this.chart=t}}),N._set("global",{animation:{duration:1e3,easing:"easeOutQuart",onProgress:H.noop,onComplete:H.noop}});var J={animations:[],request:null,addAnimation:function(t,e,n,i){var a,r,o=this.animations;for(e.chart=t,e.startTime=Date.now(),e.duration=n,i||(t.animating=!0),a=0,r=o.length;a<r;++a)if(o[a].chart===t)return void(o[a]=e);o.push(e),1===o.length&&this.requestAnimationFrame()},cancelAnimation:function(t){var e=H.findIndex(this.animations,(function(e){return e.chart===t}));-1!==e&&(this.animations.splice(e,1),t.animating=!1)},requestAnimationFrame:function(){var t=this;null===t.request&&(t.request=H.requestAnimFrame.call(window,(function(){t.request=null,t.startDigest()})))},startDigest:function(){this.advance(),this.animations.length>0&&this.requestAnimationFrame()},advance:function(){for(var t,e,n,i,a=this.animations,r=0;r<a.length;)e=(t=a[r]).chart,n=t.numSteps,i=Math.floor((Date.now()-t.startTime)/t.duration*n)+1,t.currentStep=Math.min(i,n),H.callback(t.render,[e,t],e),H.callback(t.onAnimationProgress,[t],e),t.currentStep>=n?(H.callback(t.onAnimationComplete,[t],e),e.animating=!1,a.splice(r,1)):++r}},Q=H.options.resolve,tt=["push","pop","shift","splice","unshift"];function et(t,e){var n=t._chartjs;if(n){var i=n.listeners,a=i.indexOf(e);-1!==a&&i.splice(a,1),i.length>0||(tt.forEach((function(e){delete t[e]})),delete t._chartjs)}}var nt=function(t,e){this.initialize(t,e)};H.extend(nt.prototype,{datasetElementType:null,dataElementType:null,_datasetElementOptions:["backgroundColor","borderCapStyle","borderColor","borderDash","borderDashOffset","borderJoinStyle","borderWidth"],_dataElementOptions:["backgroundColor","borderColor","borderWidth","pointStyle"],initialize:function(t,e){var n=this;n.chart=t,n.index=e,n.linkScales(),n.addElements(),n._type=n.getMeta().type},updateIndex:function(t){this.index=t},linkScales:function(){var t=this.getMeta(),e=this.chart,n=e.scales,i=this.getDataset(),a=e.options.scales;null!==t.xAxisID&&t.xAxisID in n&&!i.xAxisID||(t.xAxisID=i.xAxisID||a.xAxes[0].id),null!==t.yAxisID&&t.yAxisID in n&&!i.yAxisID||(t.yAxisID=i.yAxisID||a.yAxes[0].id)},getDataset:function(){return this.chart.data.datasets[this.index]},getMeta:function(){return this.chart.getDatasetMeta(this.index)},getScaleForId:function(t){return this.chart.scales[t]},_getValueScaleId:function(){return this.getMeta().yAxisID},_getIndexScaleId:function(){return this.getMeta().xAxisID},_getValueScale:function(){return this.getScaleForId(this._getValueScaleId())},_getIndexScale:function(){return this.getScaleForId(this._getIndexScaleId())},reset:function(){this._update(!0)},destroy:function(){this._data&&et(this._data,this)},createMetaDataset:function(){var t=this.datasetElementType;return t&&new t({_chart:this.chart,_datasetIndex:this.index})},createMetaData:function(t){var e=this.dataElementType;return e&&new e({_chart:this.chart,_datasetIndex:this.index,_index:t})},addElements:function(){var t,e,n=this.getMeta(),i=this.getDataset().data||[],a=n.data;for(t=0,e=i.length;t<e;++t)a[t]=a[t]||this.createMetaData(t);n.dataset=n.dataset||this.createMetaDataset()},addElementAndReset:function(t){var e=this.createMetaData(t);this.getMeta().data.splice(t,0,e),this.updateElement(e,t,!0)},buildOrUpdateElements:function(){var t,e,n=this,i=n.getDataset(),a=i.data||(i.data=[]);n._data!==a&&(n._data&&et(n._data,n),a&&Object.isExtensible(a)&&(e=n,(t=a)._chartjs?t._chartjs.listeners.push(e):(Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),tt.forEach((function(e){var n="onData"+e.charAt(0).toUpperCase()+e.slice(1),i=t[e];Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:function(){var e=Array.prototype.slice.call(arguments),a=i.apply(this,e);return H.each(t._chartjs.listeners,(function(t){"function"==typeof t[n]&&t[n].apply(t,e)})),a}})})))),n._data=a),n.resyncElements()},_configure:function(){this._config=H.merge(Object.create(null),[this.chart.options.datasets[this._type],this.getDataset()],{merger:function(t,e,n){"_meta"!==t&&"data"!==t&&H._merger(t,e,n)}})},_update:function(t){this._configure(),this._cachedDataOpts=null,this.update(t)},update:H.noop,transition:function(t){for(var e=this.getMeta(),n=e.data||[],i=n.length,a=0;a<i;++a)n[a].transition(t);e.dataset&&e.dataset.transition(t)},draw:function(){var t=this.getMeta(),e=t.data||[],n=e.length,i=0;for(t.dataset&&t.dataset.draw();i<n;++i)e[i].draw()},getStyle:function(t){var e,n=this.getMeta(),i=n.dataset;return this._configure(),i&&void 0===t?e=this._resolveDatasetElementOptions(i||{}):(t=t||0,e=this._resolveDataElementOptions(n.data[t]||{},t)),!1!==e.fill&&null!==e.fill||(e.backgroundColor=e.borderColor),e},_resolveDatasetElementOptions:function(t,e){var n,i,a,r,o=this,s=o.chart,l=o._config,u=t.custom||{},d=s.options.elements[o.datasetElementType.prototype._type]||{},h=o._datasetElementOptions,c={},f={chart:s,dataset:o.getDataset(),datasetIndex:o.index,hover:e};for(n=0,i=h.length;n<i;++n)a=h[n],r=e?"hover"+a.charAt(0).toUpperCase()+a.slice(1):a,c[a]=Q([u[r],l[r],d[r]],f);return c},_resolveDataElementOptions:function(t,e){var n=this,i=t&&t.custom,a=n._cachedDataOpts;if(a&&!i)return a;var r,o,s,l,u=n.chart,d=n._config,h=u.options.elements[n.dataElementType.prototype._type]||{},c=n._dataElementOptions,f={},g={chart:u,dataIndex:e,dataset:n.getDataset(),datasetIndex:n.index},p={cacheable:!i};if(i=i||{},H.isArray(c))for(o=0,s=c.length;o<s;++o)f[l=c[o]]=Q([i[l],d[l],h[l]],g,e,p);else for(o=0,s=(r=Object.keys(c)).length;o<s;++o)f[l=r[o]]=Q([i[l],d[c[l]],d[l],h[l]],g,e,p);return p.cacheable&&(n._cachedDataOpts=Object.freeze(f)),f},removeHoverStyle:function(t){H.merge(t._model,t.$previousStyle||{}),delete t.$previousStyle},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],n=t._index,i=t.custom||{},a=t._model,r=H.getHoverColor;t.$previousStyle={backgroundColor:a.backgroundColor,borderColor:a.borderColor,borderWidth:a.borderWidth},a.backgroundColor=Q([i.hoverBackgroundColor,e.hoverBackgroundColor,r(a.backgroundColor)],void 0,n),a.borderColor=Q([i.hoverBorderColor,e.hoverBorderColor,r(a.borderColor)],void 0,n),a.borderWidth=Q([i.hoverBorderWidth,e.hoverBorderWidth,a.borderWidth],void 0,n)},_removeDatasetHoverStyle:function(){var t=this.getMeta().dataset;t&&this.removeHoverStyle(t)},_setDatasetHoverStyle:function(){var t,e,n,i,a,r,o=this.getMeta().dataset,s={};if(o){for(r=o._model,a=this._resolveDatasetElementOptions(o,!0),t=0,e=(i=Object.keys(a)).length;t<e;++t)s[n=i[t]]=r[n],r[n]=a[n];o.$previousStyle=s}},resyncElements:function(){var t=this.getMeta(),e=this.getDataset().data,n=t.data.length,i=e.length;i<n?t.data.splice(i,n-i):i>n&&this.insertElements(n,i-n)},insertElements:function(t,e){for(var n=0;n<e;++n)this.addElementAndReset(t+n)},onDataPush:function(){var t=arguments.length;this.insertElements(this.getDataset().data.length-t,t)},onDataPop:function(){this.getMeta().data.pop()},onDataShift:function(){this.getMeta().data.shift()},onDataSplice:function(t,e){this.getMeta().data.splice(t,e),this.insertElements(t,arguments.length-2)},onDataUnshift:function(){this.insertElements(0,arguments.length)}}),nt.extend=H.inherits;var it=nt,at=2*Math.PI;function rt(t,e){var n=e.startAngle,i=e.endAngle,a=e.pixelMargin,r=a/e.outerRadius,o=e.x,s=e.y;t.beginPath(),t.arc(o,s,e.outerRadius,n-r,i+r),e.innerRadius>a?(r=a/e.innerRadius,t.arc(o,s,e.innerRadius-a,i+r,n-r,!0)):t.arc(o,s,a,i+Math.PI/2,n-Math.PI/2),t.closePath(),t.clip()}function ot(t,e,n){var i="inner"===e.borderAlign;i?(t.lineWidth=2*e.borderWidth,t.lineJoin="round"):(t.lineWidth=e.borderWidth,t.lineJoin="bevel"),n.fullCircles&&function(t,e,n,i){var a,r=n.endAngle;for(i&&(n.endAngle=n.startAngle+at,rt(t,n),n.endAngle=r,n.endAngle===n.startAngle&&n.fullCircles&&(n.endAngle+=at,n.fullCircles--)),t.beginPath(),t.arc(n.x,n.y,n.innerRadius,n.startAngle+at,n.startAngle,!0),a=0;a<n.fullCircles;++a)t.stroke();for(t.beginPath(),t.arc(n.x,n.y,e.outerRadius,n.startAngle,n.startAngle+at),a=0;a<n.fullCircles;++a)t.stroke()}(t,e,n,i),i&&rt(t,n),t.beginPath(),t.arc(n.x,n.y,e.outerRadius,n.startAngle,n.endAngle),t.arc(n.x,n.y,n.innerRadius,n.endAngle,n.startAngle,!0),t.closePath(),t.stroke()}N._set("global",{elements:{arc:{backgroundColor:N.global.defaultColor,borderColor:"#fff",borderWidth:2,borderAlign:"center"}}});var st=K.extend({_type:"arc",inLabelRange:function(t){var e=this._view;return!!e&&Math.pow(t-e.x,2)<Math.pow(e.radius+e.hoverRadius,2)},inRange:function(t,e){var n=this._view;if(n){for(var i=H.getAngleFromPoint(n,{x:t,y:e}),a=i.angle,r=i.distance,o=n.startAngle,s=n.endAngle;s<o;)s+=at;for(;a>s;)a-=at;for(;a<o;)a+=at;var l=a>=o&&a<=s,u=r>=n.innerRadius&&r<=n.outerRadius;return l&&u}return!1},getCenterPoint:function(){var t=this._view,e=(t.startAngle+t.endAngle)/2,n=(t.innerRadius+t.outerRadius)/2;return{x:t.x+Math.cos(e)*n,y:t.y+Math.sin(e)*n}},getArea:function(){var t=this._view;return Math.PI*((t.endAngle-t.startAngle)/(2*Math.PI))*(Math.pow(t.outerRadius,2)-Math.pow(t.innerRadius,2))},tooltipPosition:function(){var t=this._view,e=t.startAngle+(t.endAngle-t.startAngle)/2,n=(t.outerRadius-t.innerRadius)/2+t.innerRadius;return{x:t.x+Math.cos(e)*n,y:t.y+Math.sin(e)*n}},draw:function(){var t,e=this._chart.ctx,n=this._view,i="inner"===n.borderAlign?.33:0,a={x:n.x,y:n.y,innerRadius:n.innerRadius,outerRadius:Math.max(n.outerRadius-i,0),pixelMargin:i,startAngle:n.startAngle,endAngle:n.endAngle,fullCircles:Math.floor(n.circumference/at)};if(e.save(),e.fillStyle=n.backgroundColor,e.strokeStyle=n.borderColor,a.fullCircles){for(a.endAngle=a.startAngle+at,e.beginPath(),e.arc(a.x,a.y,a.outerRadius,a.startAngle,a.endAngle),e.arc(a.x,a.y,a.innerRadius,a.endAngle,a.startAngle,!0),e.closePath(),t=0;t<a.fullCircles;++t)e.fill();a.endAngle=a.startAngle+n.circumference%at}e.beginPath(),e.arc(a.x,a.y,a.outerRadius,a.startAngle,a.endAngle),e.arc(a.x,a.y,a.innerRadius,a.endAngle,a.startAngle,!0),e.closePath(),e.fill(),n.borderWidth&&ot(e,n,a),e.restore()}}),lt=H.valueOrDefault,ut=N.global.defaultColor;N._set("global",{elements:{line:{tension:.4,backgroundColor:ut,borderWidth:3,borderColor:ut,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",capBezierPoints:!0,fill:!0}}});var dt=K.extend({_type:"line",draw:function(){var t,e,n,i=this,a=i._view,r=i._chart.ctx,o=a.spanGaps,s=i._children.slice(),l=N.global,u=l.elements.line,d=-1,h=i._loop;if(s.length){if(i._loop){for(t=0;t<s.length;++t)if(e=H.previousItem(s,t),!s[t]._view.skip&&e._view.skip){s=s.slice(t).concat(s.slice(0,t)),h=o;break}h&&s.push(s[0])}for(r.save(),r.lineCap=a.borderCapStyle||u.borderCapStyle,r.setLineDash&&r.setLineDash(a.borderDash||u.borderDash),r.lineDashOffset=lt(a.borderDashOffset,u.borderDashOffset),r.lineJoin=a.borderJoinStyle||u.borderJoinStyle,r.lineWidth=lt(a.borderWidth,u.borderWidth),r.strokeStyle=a.borderColor||l.defaultColor,r.beginPath(),(n=s[0]._view).skip||(r.moveTo(n.x,n.y),d=0),t=1;t<s.length;++t)n=s[t]._view,e=-1===d?H.previousItem(s,t):s[d],n.skip||(d!==t-1&&!o||-1===d?r.moveTo(n.x,n.y):H.canvas.lineTo(r,e._view,n),d=t);h&&r.closePath(),r.stroke(),r.restore()}}}),ht=H.valueOrDefault,ct=N.global.defaultColor;function ft(t){var e=this._view;return!!e&&Math.abs(t-e.x)<e.radius+e.hitRadius}N._set("global",{elements:{point:{radius:3,pointStyle:"circle",backgroundColor:ct,borderColor:ct,borderWidth:1,hitRadius:1,hoverRadius:4,hoverBorderWidth:1}}});var gt=K.extend({_type:"point",inRange:function(t,e){var n=this._view;return!!n&&Math.pow(t-n.x,2)+Math.pow(e-n.y,2)<Math.pow(n.hitRadius+n.radius,2)},inLabelRange:ft,inXRange:ft,inYRange:function(t){var e=this._view;return!!e&&Math.abs(t-e.y)<e.radius+e.hitRadius},getCenterPoint:function(){var t=this._view;return{x:t.x,y:t.y}},getArea:function(){return Math.PI*Math.pow(this._view.radius,2)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y,padding:t.radius+t.borderWidth}},draw:function(t){var e=this._view,n=this._chart.ctx,i=e.pointStyle,a=e.rotation,r=e.radius,o=e.x,s=e.y,l=N.global,u=l.defaultColor;e.skip||(void 0===t||H.canvas._isPointInArea(e,t))&&(n.strokeStyle=e.borderColor||u,n.lineWidth=ht(e.borderWidth,l.elements.point.borderWidth),n.fillStyle=e.backgroundColor||u,H.canvas.drawPoint(n,i,r,o,s,a))}}),pt=N.global.defaultColor;function mt(t){return t&&void 0!==t.width}function vt(t){var e,n,i,a,r;return mt(t)?(r=t.width/2,e=t.x-r,n=t.x+r,i=Math.min(t.y,t.base),a=Math.max(t.y,t.base)):(r=t.height/2,e=Math.min(t.x,t.base),n=Math.max(t.x,t.base),i=t.y-r,a=t.y+r),{left:e,top:i,right:n,bottom:a}}function bt(t,e,n){return t===e?n:t===n?e:t}function xt(t,e,n){var i,a,r,o,s=t.borderWidth,l=function(t){var e=t.borderSkipped,n={};return e?(t.horizontal?t.base>t.x&&(e=bt(e,"left","right")):t.base<t.y&&(e=bt(e,"bottom","top")),n[e]=!0,n):n}(t);return H.isObject(s)?(i=+s.top||0,a=+s.right||0,r=+s.bottom||0,o=+s.left||0):i=a=r=o=+s||0,{t:l.top||i<0?0:i>n?n:i,r:l.right||a<0?0:a>e?e:a,b:l.bottom||r<0?0:r>n?n:r,l:l.left||o<0?0:o>e?e:o}}function yt(t,e,n){var i=null===e,a=null===n,r=!(!t||i&&a)&&vt(t);return r&&(i||e>=r.left&&e<=r.right)&&(a||n>=r.top&&n<=r.bottom)}N._set("global",{elements:{rectangle:{backgroundColor:pt,borderColor:pt,borderSkipped:"bottom",borderWidth:0}}});var _t=K.extend({_type:"rectangle",draw:function(){var t=this._chart.ctx,e=this._view,n=function(t){var e=vt(t),n=e.right-e.left,i=e.bottom-e.top,a=xt(t,n/2,i/2);return{outer:{x:e.left,y:e.top,w:n,h:i},inner:{x:e.left+a.l,y:e.top+a.t,w:n-a.l-a.r,h:i-a.t-a.b}}}(e),i=n.outer,a=n.inner;t.fillStyle=e.backgroundColor,t.fillRect(i.x,i.y,i.w,i.h),i.w===a.w&&i.h===a.h||(t.save(),t.beginPath(),t.rect(i.x,i.y,i.w,i.h),t.clip(),t.fillStyle=e.borderColor,t.rect(a.x,a.y,a.w,a.h),t.fill("evenodd"),t.restore())},height:function(){var t=this._view;return t.base-t.y},inRange:function(t,e){return yt(this._view,t,e)},inLabelRange:function(t,e){var n=this._view;return mt(n)?yt(n,t,null):yt(n,null,e)},inXRange:function(t){return yt(this._view,t,null)},inYRange:function(t){return yt(this._view,null,t)},getCenterPoint:function(){var t,e,n=this._view;return mt(n)?(t=n.x,e=(n.y+n.base)/2):(t=(n.x+n.base)/2,e=n.y),{x:t,y:e}},getArea:function(){var t=this._view;return mt(t)?t.width*Math.abs(t.y-t.base):t.height*Math.abs(t.x-t.base)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y}}}),kt={},wt=st,Mt=dt,St=gt,Ct=_t;kt.Arc=wt,kt.Line=Mt,kt.Point=St,kt.Rectangle=Ct;var Pt=H._deprecated,At=H.valueOrDefault;function Dt(t,e,n){var i,a,r=n.barThickness,o=e.stackCount,s=e.pixels[t],l=H.isNullOrUndef(r)?function(t,e){var n,i,a,r,o=t._length;for(a=1,r=e.length;a<r;++a)o=Math.min(o,Math.abs(e[a]-e[a-1]));for(a=0,r=t.getTicks().length;a<r;++a)i=t.getPixelForTick(a),o=a>0?Math.min(o,Math.abs(i-n)):o,n=i;return o}(e.scale,e.pixels):-1;return H.isNullOrUndef(r)?(i=l*n.categoryPercentage,a=n.barPercentage):(i=r*o,a=1),{chunk:i/o,ratio:a,start:s-i/2}}N._set("bar",{hover:{mode:"label"},scales:{xAxes:[{type:"category",offset:!0,gridLines:{offsetGridLines:!0}}],yAxes:[{type:"linear"}]}}),N._set("global",{datasets:{bar:{categoryPercentage:.8,barPercentage:.9}}});var Tt=it.extend({dataElementType:kt.Rectangle,_dataElementOptions:["backgroundColor","borderColor","borderSkipped","borderWidth","barPercentage","barThickness","categoryPercentage","maxBarThickness","minBarLength"],initialize:function(){var t,e,n=this;it.prototype.initialize.apply(n,arguments),(t=n.getMeta()).stack=n.getDataset().stack,t.bar=!0,e=n._getIndexScale().options,Pt("bar chart",e.barPercentage,"scales.[x/y]Axes.barPercentage","dataset.barPercentage"),Pt("bar chart",e.barThickness,"scales.[x/y]Axes.barThickness","dataset.barThickness"),Pt("bar chart",e.categoryPercentage,"scales.[x/y]Axes.categoryPercentage","dataset.categoryPercentage"),Pt("bar chart",n._getValueScale().options.minBarLength,"scales.[x/y]Axes.minBarLength","dataset.minBarLength"),Pt("bar chart",e.maxBarThickness,"scales.[x/y]Axes.maxBarThickness","dataset.maxBarThickness")},update:function(t){var e,n,i=this.getMeta().data;for(this._ruler=this.getRuler(),e=0,n=i.length;e<n;++e)this.updateElement(i[e],e,t)},updateElement:function(t,e,n){var i=this,a=i.getMeta(),r=i.getDataset(),o=i._resolveDataElementOptions(t,e);t._xScale=i.getScaleForId(a.xAxisID),t._yScale=i.getScaleForId(a.yAxisID),t._datasetIndex=i.index,t._index=e,t._model={backgroundColor:o.backgroundColor,borderColor:o.borderColor,borderSkipped:o.borderSkipped,borderWidth:o.borderWidth,datasetLabel:r.label,label:i.chart.data.labels[e]},H.isArray(r.data[e])&&(t._model.borderSkipped=null),i._updateElementGeometry(t,e,n,o),t.pivot()},_updateElementGeometry:function(t,e,n,i){var a=this,r=t._model,o=a._getValueScale(),s=o.getBasePixel(),l=o.isHorizontal(),u=a._ruler||a.getRuler(),d=a.calculateBarValuePixels(a.index,e,i),h=a.calculateBarIndexPixels(a.index,e,u,i);r.horizontal=l,r.base=n?s:d.base,r.x=l?n?s:d.head:h.center,r.y=l?h.center:n?s:d.head,r.height=l?h.size:void 0,r.width=l?void 0:h.size},_getStacks:function(t){var e,n,i=this._getIndexScale(),a=i._getMatchingVisibleMetas(this._type),r=i.options.stacked,o=a.length,s=[];for(e=0;e<o&&(n=a[e],(!1===r||-1===s.indexOf(n.stack)||void 0===r&&void 0===n.stack)&&s.push(n.stack),n.index!==t);++e);return s},getStackCount:function(){return this._getStacks().length},getStackIndex:function(t,e){var n=this._getStacks(t),i=void 0!==e?n.indexOf(e):-1;return-1===i?n.length-1:i},getRuler:function(){var t,e,n=this._getIndexScale(),i=[];for(t=0,e=this.getMeta().data.length;t<e;++t)i.push(n.getPixelForValue(null,t,this.index));return{pixels:i,start:n._startPixel,end:n._endPixel,stackCount:this.getStackCount(),scale:n}},calculateBarValuePixels:function(t,e,n){var i,a,r,o,s,l,u,d=this.chart,h=this._getValueScale(),c=h.isHorizontal(),f=d.data.datasets,g=h._getMatchingVisibleMetas(this._type),p=h._parseValue(f[t].data[e]),m=n.minBarLength,v=h.options.stacked,b=this.getMeta().stack,x=void 0===p.start?0:p.max>=0&&p.min>=0?p.min:p.max,y=void 0===p.start?p.end:p.max>=0&&p.min>=0?p.max-p.min:p.min-p.max,_=g.length;if(v||void 0===v&&void 0!==b)for(i=0;i<_&&(a=g[i]).index!==t;++i)a.stack===b&&(r=void 0===(u=h._parseValue(f[a.index].data[e])).start?u.end:u.min>=0&&u.max>=0?u.max:u.min,(p.min<0&&r<0||p.max>=0&&r>0)&&(x+=r));return o=h.getPixelForValue(x),l=(s=h.getPixelForValue(x+y))-o,void 0!==m&&Math.abs(l)<m&&(l=m,s=y>=0&&!c||y<0&&c?o-m:o+m),{size:l,base:o,head:s,center:s+l/2}},calculateBarIndexPixels:function(t,e,n,i){var a="flex"===i.barThickness?function(t,e,n){var i,a=e.pixels,r=a[t],o=t>0?a[t-1]:null,s=t<a.length-1?a[t+1]:null,l=n.categoryPercentage;return null===o&&(o=r-(null===s?e.end-e.start:s-r)),null===s&&(s=r+r-o),i=r-(r-Math.min(o,s))/2*l,{chunk:Math.abs(s-o)/2*l/e.stackCount,ratio:n.barPercentage,start:i}}(e,n,i):Dt(e,n,i),r=this.getStackIndex(t,this.getMeta().stack),o=a.start+a.chunk*r+a.chunk/2,s=Math.min(At(i.maxBarThickness,1/0),a.chunk*a.ratio);return{base:o-s/2,head:o+s/2,center:o,size:s}},draw:function(){var t=this.chart,e=this._getValueScale(),n=this.getMeta().data,i=this.getDataset(),a=n.length,r=0;for(H.canvas.clipArea(t.ctx,t.chartArea);r<a;++r){var o=e._parseValue(i.data[r]);isNaN(o.min)||isNaN(o.max)||n[r].draw()}H.canvas.unclipArea(t.ctx)},_resolveDataElementOptions:function(){var t=this,e=H.extend({},it.prototype._resolveDataElementOptions.apply(t,arguments)),n=t._getIndexScale().options,i=t._getValueScale().options;return e.barPercentage=At(n.barPercentage,e.barPercentage),e.barThickness=At(n.barThickness,e.barThickness),e.categoryPercentage=At(n.categoryPercentage,e.categoryPercentage),e.maxBarThickness=At(n.maxBarThickness,e.maxBarThickness),e.minBarLength=At(i.minBarLength,e.minBarLength),e}}),It=H.valueOrDefault,Ft=H.options.resolve;N._set("bubble",{hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-0"}],yAxes:[{type:"linear",position:"left",id:"y-axis-0"}]},tooltips:{callbacks:{title:function(){return""},label:function(t,e){var n=e.datasets[t.datasetIndex].label||"",i=e.datasets[t.datasetIndex].data[t.index];return n+": ("+t.xLabel+", "+t.yLabel+", "+i.r+")"}}}});var Ot=it.extend({dataElementType:kt.Point,_dataElementOptions:["backgroundColor","borderColor","borderWidth","hoverBackgroundColor","hoverBorderColor","hoverBorderWidth","hoverRadius","hitRadius","pointStyle","rotation"],update:function(t){var e=this,n=e.getMeta().data;H.each(n,(function(n,i){e.updateElement(n,i,t)}))},updateElement:function(t,e,n){var i=this,a=i.getMeta(),r=t.custom||{},o=i.getScaleForId(a.xAxisID),s=i.getScaleForId(a.yAxisID),l=i._resolveDataElementOptions(t,e),u=i.getDataset().data[e],d=i.index,h=n?o.getPixelForDecimal(.5):o.getPixelForValue("object"==typeof u?u:NaN,e,d),c=n?s.getBasePixel():s.getPixelForValue(u,e,d);t._xScale=o,t._yScale=s,t._options=l,t._datasetIndex=d,t._index=e,t._model={backgroundColor:l.backgroundColor,borderColor:l.borderColor,borderWidth:l.borderWidth,hitRadius:l.hitRadius,pointStyle:l.pointStyle,rotation:l.rotation,radius:n?0:l.radius,skip:r.skip||isNaN(h)||isNaN(c),x:h,y:c},t.pivot()},setHoverStyle:function(t){var e=t._model,n=t._options,i=H.getHoverColor;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth,radius:e.radius},e.backgroundColor=It(n.hoverBackgroundColor,i(n.backgroundColor)),e.borderColor=It(n.hoverBorderColor,i(n.borderColor)),e.borderWidth=It(n.hoverBorderWidth,n.borderWidth),e.radius=n.radius+n.hoverRadius},_resolveDataElementOptions:function(t,e){var n=this,i=n.chart,a=n.getDataset(),r=t.custom||{},o=a.data[e]||{},s=it.prototype._resolveDataElementOptions.apply(n,arguments),l={chart:i,dataIndex:e,dataset:a,datasetIndex:n.index};return n._cachedDataOpts===s&&(s=H.extend({},s)),s.radius=Ft([r.radius,o.r,n._config.radius,i.options.elements.point.radius],l,e),s}}),Lt=H.valueOrDefault,Rt=Math.PI,zt=2*Rt,Nt=Rt/2;N._set("doughnut",{animation:{animateRotate:!0,animateScale:!1},hover:{mode:"single"},legendCallback:function(t){var e,n,i,a=document.createElement("ul"),r=t.data,o=r.datasets,s=r.labels;if(a.setAttribute("class",t.id+"-legend"),o.length)for(e=0,n=o[0].data.length;e<n;++e)(i=a.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor=o[0].backgroundColor[e],s[e]&&i.appendChild(document.createTextNode(s[e]));return a.outerHTML},legend:{labels:{generateLabels:function(t){var e=t.data;return e.labels.length&&e.datasets.length?e.labels.map((function(n,i){var a=t.getDatasetMeta(0),r=a.controller.getStyle(i);return{text:n,fillStyle:r.backgroundColor,strokeStyle:r.borderColor,lineWidth:r.borderWidth,hidden:isNaN(e.datasets[0].data[i])||a.data[i].hidden,index:i}})):[]}},onClick:function(t,e){var n,i,a,r=e.index,o=this.chart;for(n=0,i=(o.data.datasets||[]).length;n<i;++n)(a=o.getDatasetMeta(n)).data[r]&&(a.data[r].hidden=!a.data[r].hidden);o.update()}},cutoutPercentage:50,rotation:-Nt,circumference:zt,tooltips:{callbacks:{title:function(){return""},label:function(t,e){var n=e.labels[t.index],i=": "+e.datasets[t.datasetIndex].data[t.index];return H.isArray(n)?(n=n.slice())[0]+=i:n+=i,n}}}});var Bt=it.extend({dataElementType:kt.Arc,linkScales:H.noop,_dataElementOptions:["backgroundColor","borderColor","borderWidth","borderAlign","hoverBackgroundColor","hoverBorderColor","hoverBorderWidth"],getRingIndex:function(t){for(var e=0,n=0;n<t;++n)this.chart.isDatasetVisible(n)&&++e;return e},update:function(t){var e,n,i,a,r=this,o=r.chart,s=o.chartArea,l=o.options,u=1,d=1,h=0,c=0,f=r.getMeta(),g=f.data,p=l.cutoutPercentage/100||0,m=l.circumference,v=r._getRingWeight(r.index);if(m<zt){var b=l.rotation%zt,x=(b+=b>=Rt?-zt:b<-Rt?zt:0)+m,y=Math.cos(b),_=Math.sin(b),k=Math.cos(x),w=Math.sin(x),M=b<=0&&x>=0||x>=zt,S=b<=Nt&&x>=Nt||x>=zt+Nt,C=b<=-Nt&&x>=-Nt||x>=Rt+Nt,P=b===-Rt||x>=Rt?-1:Math.min(y,y*p,k,k*p),A=C?-1:Math.min(_,_*p,w,w*p),D=M?1:Math.max(y,y*p,k,k*p),T=S?1:Math.max(_,_*p,w,w*p);u=(D-P)/2,d=(T-A)/2,h=-(D+P)/2,c=-(T+A)/2}for(i=0,a=g.length;i<a;++i)g[i]._options=r._resolveDataElementOptions(g[i],i);for(o.borderWidth=r.getMaxBorderWidth(),e=(s.right-s.left-o.borderWidth)/u,n=(s.bottom-s.top-o.borderWidth)/d,o.outerRadius=Math.max(Math.min(e,n)/2,0),o.innerRadius=Math.max(o.outerRadius*p,0),o.radiusLength=(o.outerRadius-o.innerRadius)/(r._getVisibleDatasetWeightTotal()||1),o.offsetX=h*o.outerRadius,o.offsetY=c*o.outerRadius,f.total=r.calculateTotal(),r.outerRadius=o.outerRadius-o.radiusLength*r._getRingWeightOffset(r.index),r.innerRadius=Math.max(r.outerRadius-o.radiusLength*v,0),i=0,a=g.length;i<a;++i)r.updateElement(g[i],i,t)},updateElement:function(t,e,n){var i=this,a=i.chart,r=a.chartArea,o=a.options,s=o.animation,l=(r.left+r.right)/2,u=(r.top+r.bottom)/2,d=o.rotation,h=o.rotation,c=i.getDataset(),f=n&&s.animateRotate?0:t.hidden?0:i.calculateCircumference(c.data[e])*(o.circumference/zt),g=n&&s.animateScale?0:i.innerRadius,p=n&&s.animateScale?0:i.outerRadius,m=t._options||{};H.extend(t,{_datasetIndex:i.index,_index:e,_model:{backgroundColor:m.backgroundColor,borderColor:m.borderColor,borderWidth:m.borderWidth,borderAlign:m.borderAlign,x:l+a.offsetX,y:u+a.offsetY,startAngle:d,endAngle:h,circumference:f,outerRadius:p,innerRadius:g,label:H.valueAtIndexOrDefault(c.label,e,a.data.labels[e])}});var v=t._model;n&&s.animateRotate||(v.startAngle=0===e?o.rotation:i.getMeta().data[e-1]._model.endAngle,v.endAngle=v.startAngle+v.circumference),t.pivot()},calculateTotal:function(){var t,e=this.getDataset(),n=this.getMeta(),i=0;return H.each(n.data,(function(n,a){t=e.data[a],isNaN(t)||n.hidden||(i+=Math.abs(t))})),i},calculateCircumference:function(t){var e=this.getMeta().total;return e>0&&!isNaN(t)?zt*(Math.abs(t)/e):0},getMaxBorderWidth:function(t){var e,n,i,a,r,o,s,l,u=0,d=this.chart;if(!t)for(e=0,n=d.data.datasets.length;e<n;++e)if(d.isDatasetVisible(e)){t=(i=d.getDatasetMeta(e)).data,e!==this.index&&(r=i.controller);break}if(!t)return 0;for(e=0,n=t.length;e<n;++e)a=t[e],r?(r._configure(),o=r._resolveDataElementOptions(a,e)):o=a._options,"inner"!==o.borderAlign&&(s=o.borderWidth,u=(l=o.hoverBorderWidth)>(u=s>u?s:u)?l:u);return u},setHoverStyle:function(t){var e=t._model,n=t._options,i=H.getHoverColor;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth},e.backgroundColor=Lt(n.hoverBackgroundColor,i(n.backgroundColor)),e.borderColor=Lt(n.hoverBorderColor,i(n.borderColor)),e.borderWidth=Lt(n.hoverBorderWidth,n.borderWidth)},_getRingWeightOffset:function(t){for(var e=0,n=0;n<t;++n)this.chart.isDatasetVisible(n)&&(e+=this._getRingWeight(n));return e},_getRingWeight:function(t){return Math.max(Lt(this.chart.data.datasets[t].weight,1),0)},_getVisibleDatasetWeightTotal:function(){return this._getRingWeightOffset(this.chart.data.datasets.length)}});N._set("horizontalBar",{hover:{mode:"index",axis:"y"},scales:{xAxes:[{type:"linear",position:"bottom"}],yAxes:[{type:"category",position:"left",offset:!0,gridLines:{offsetGridLines:!0}}]},elements:{rectangle:{borderSkipped:"left"}},tooltips:{mode:"index",axis:"y"}}),N._set("global",{datasets:{horizontalBar:{categoryPercentage:.8,barPercentage:.9}}});var Et=Tt.extend({_getValueScaleId:function(){return this.getMeta().xAxisID},_getIndexScaleId:function(){return this.getMeta().yAxisID}}),Wt=H.valueOrDefault,Vt=H.options.resolve,Ht=H.canvas._isPointInArea;function jt(t,e){var n=t&&t.options.ticks||{},i=n.reverse,a=void 0===n.min?e:0,r=void 0===n.max?e:0;return{start:i?r:a,end:i?a:r}}function qt(t,e,n){var i=n/2,a=jt(t,i),r=jt(e,i);return{top:r.end,right:a.end,bottom:r.start,left:a.start}}function Ut(t){var e,n,i,a;return H.isObject(t)?(e=t.top,n=t.right,i=t.bottom,a=t.left):e=n=i=a=t,{top:e,right:n,bottom:i,left:a}}N._set("line",{showLines:!0,spanGaps:!1,hover:{mode:"label"},scales:{xAxes:[{type:"category",id:"x-axis-0"}],yAxes:[{type:"linear",id:"y-axis-0"}]}});var Yt=it.extend({datasetElementType:kt.Line,dataElementType:kt.Point,_datasetElementOptions:["backgroundColor","borderCapStyle","borderColor","borderDash","borderDashOffset","borderJoinStyle","borderWidth","cubicInterpolationMode","fill"],_dataElementOptions:{backgroundColor:"pointBackgroundColor",borderColor:"pointBorderColor",borderWidth:"pointBorderWidth",hitRadius:"pointHitRadius",hoverBackgroundColor:"pointHoverBackgroundColor",hoverBorderColor:"pointHoverBorderColor",hoverBorderWidth:"pointHoverBorderWidth",hoverRadius:"pointHoverRadius",pointStyle:"pointStyle",radius:"pointRadius",rotation:"pointRotation"},update:function(t){var e,n,i=this,a=i.getMeta(),r=a.dataset,o=a.data||[],s=i.chart.options,l=i._config,u=i._showLine=Wt(l.showLine,s.showLines);for(i._xScale=i.getScaleForId(a.xAxisID),i._yScale=i.getScaleForId(a.yAxisID),u&&(void 0!==l.tension&&void 0===l.lineTension&&(l.lineTension=l.tension),r._scale=i._yScale,r._datasetIndex=i.index,r._children=o,r._model=i._resolveDatasetElementOptions(r),r.pivot()),e=0,n=o.length;e<n;++e)i.updateElement(o[e],e,t);for(u&&0!==r._model.tension&&i.updateBezierControlPoints(),e=0,n=o.length;e<n;++e)o[e].pivot()},updateElement:function(t,e,n){var i,a,r=this,o=r.getMeta(),s=t.custom||{},l=r.getDataset(),u=r.index,d=l.data[e],h=r._xScale,c=r._yScale,f=o.dataset._model,g=r._resolveDataElementOptions(t,e);i=h.getPixelForValue("object"==typeof d?d:NaN,e,u),a=n?c.getBasePixel():r.calculatePointY(d,e,u),t._xScale=h,t._yScale=c,t._options=g,t._datasetIndex=u,t._index=e,t._model={x:i,y:a,skip:s.skip||isNaN(i)||isNaN(a),radius:g.radius,pointStyle:g.pointStyle,rotation:g.rotation,backgroundColor:g.backgroundColor,borderColor:g.borderColor,borderWidth:g.borderWidth,tension:Wt(s.tension,f?f.tension:0),steppedLine:!!f&&f.steppedLine,hitRadius:g.hitRadius}},_resolveDatasetElementOptions:function(t){var e=this,n=e._config,i=t.custom||{},a=e.chart.options,r=a.elements.line,o=it.prototype._resolveDatasetElementOptions.apply(e,arguments);return o.spanGaps=Wt(n.spanGaps,a.spanGaps),o.tension=Wt(n.lineTension,r.tension),o.steppedLine=Vt([i.steppedLine,n.steppedLine,r.stepped]),o.clip=Ut(Wt(n.clip,qt(e._xScale,e._yScale,o.borderWidth))),o},calculatePointY:function(t,e,n){var i,a,r,o,s,l,u,d=this.chart,h=this._yScale,c=0,f=0;if(h.options.stacked){for(s=+h.getRightValue(t),u=(l=d._getSortedVisibleDatasetMetas()).length,i=0;i<u&&(r=l[i]).index!==n;++i)a=d.data.datasets[r.index],"line"===r.type&&r.yAxisID===h.id&&((o=+h.getRightValue(a.data[e]))<0?f+=o||0:c+=o||0);return s<0?h.getPixelForValue(f+s):h.getPixelForValue(c+s)}return h.getPixelForValue(t)},updateBezierControlPoints:function(){var t,e,n,i,a=this.chart,r=this.getMeta(),o=r.dataset._model,s=a.chartArea,l=r.data||[];function u(t,e,n){return Math.max(Math.min(t,n),e)}if(o.spanGaps&&(l=l.filter((function(t){return!t._model.skip}))),"monotone"===o.cubicInterpolationMode)H.splineCurveMonotone(l);else for(t=0,e=l.length;t<e;++t)n=l[t]._model,i=H.splineCurve(H.previousItem(l,t)._model,n,H.nextItem(l,t)._model,o.tension),n.controlPointPreviousX=i.previous.x,n.controlPointPreviousY=i.previous.y,n.controlPointNextX=i.next.x,n.controlPointNextY=i.next.y;if(a.options.elements.line.capBezierPoints)for(t=0,e=l.length;t<e;++t)n=l[t]._model,Ht(n,s)&&(t>0&&Ht(l[t-1]._model,s)&&(n.controlPointPreviousX=u(n.controlPointPreviousX,s.left,s.right),n.controlPointPreviousY=u(n.controlPointPreviousY,s.top,s.bottom)),t<l.length-1&&Ht(l[t+1]._model,s)&&(n.controlPointNextX=u(n.controlPointNextX,s.left,s.right),n.controlPointNextY=u(n.controlPointNextY,s.top,s.bottom)))},draw:function(){var t,e=this.chart,n=this.getMeta(),i=n.data||[],a=e.chartArea,r=e.canvas,o=0,s=i.length;for(this._showLine&&(t=n.dataset._model.clip,H.canvas.clipArea(e.ctx,{left:!1===t.left?0:a.left-t.left,right:!1===t.right?r.width:a.right+t.right,top:!1===t.top?0:a.top-t.top,bottom:!1===t.bottom?r.height:a.bottom+t.bottom}),n.dataset.draw(),H.canvas.unclipArea(e.ctx));o<s;++o)i[o].draw(a)},setHoverStyle:function(t){var e=t._model,n=t._options,i=H.getHoverColor;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth,radius:e.radius},e.backgroundColor=Wt(n.hoverBackgroundColor,i(n.backgroundColor)),e.borderColor=Wt(n.hoverBorderColor,i(n.borderColor)),e.borderWidth=Wt(n.hoverBorderWidth,n.borderWidth),e.radius=Wt(n.hoverRadius,n.radius)}}),Gt=H.options.resolve;N._set("polarArea",{scale:{type:"radialLinear",angleLines:{display:!1},gridLines:{circular:!0},pointLabels:{display:!1},ticks:{beginAtZero:!0}},animation:{animateRotate:!0,animateScale:!0},startAngle:-.5*Math.PI,legendCallback:function(t){var e,n,i,a=document.createElement("ul"),r=t.data,o=r.datasets,s=r.labels;if(a.setAttribute("class",t.id+"-legend"),o.length)for(e=0,n=o[0].data.length;e<n;++e)(i=a.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor=o[0].backgroundColor[e],s[e]&&i.appendChild(document.createTextNode(s[e]));return a.outerHTML},legend:{labels:{generateLabels:function(t){var e=t.data;return e.labels.length&&e.datasets.length?e.labels.map((function(n,i){var a=t.getDatasetMeta(0),r=a.controller.getStyle(i);return{text:n,fillStyle:r.backgroundColor,strokeStyle:r.borderColor,lineWidth:r.borderWidth,hidden:isNaN(e.datasets[0].data[i])||a.data[i].hidden,index:i}})):[]}},onClick:function(t,e){var n,i,a,r=e.index,o=this.chart;for(n=0,i=(o.data.datasets||[]).length;n<i;++n)(a=o.getDatasetMeta(n)).data[r].hidden=!a.data[r].hidden;o.update()}},tooltips:{callbacks:{title:function(){return""},label:function(t,e){return e.labels[t.index]+": "+t.yLabel}}}});var Xt=it.extend({dataElementType:kt.Arc,linkScales:H.noop,_dataElementOptions:["backgroundColor","borderColor","borderWidth","borderAlign","hoverBackgroundColor","hoverBorderColor","hoverBorderWidth"],_getIndexScaleId:function(){return this.chart.scale.id},_getValueScaleId:function(){return this.chart.scale.id},update:function(t){var e,n,i,a=this,r=a.getDataset(),o=a.getMeta(),s=a.chart.options.startAngle||0,l=a._starts=[],u=a._angles=[],d=o.data;for(a._updateRadius(),o.count=a.countVisibleElements(),e=0,n=r.data.length;e<n;e++)l[e]=s,i=a._computeAngle(e),u[e]=i,s+=i;for(e=0,n=d.length;e<n;++e)d[e]._options=a._resolveDataElementOptions(d[e],e),a.updateElement(d[e],e,t)},_updateRadius:function(){var t=this,e=t.chart,n=e.chartArea,i=e.options,a=Math.min(n.right-n.left,n.bottom-n.top);e.outerRadius=Math.max(a/2,0),e.innerRadius=Math.max(i.cutoutPercentage?e.outerRadius/100*i.cutoutPercentage:1,0),e.radiusLength=(e.outerRadius-e.innerRadius)/e.getVisibleDatasetCount(),t.outerRadius=e.outerRadius-e.radiusLength*t.index,t.innerRadius=t.outerRadius-e.radiusLength},updateElement:function(t,e,n){var i=this,a=i.chart,r=i.getDataset(),o=a.options,s=o.animation,l=a.scale,u=a.data.labels,d=l.xCenter,h=l.yCenter,c=o.startAngle,f=t.hidden?0:l.getDistanceFromCenterForValue(r.data[e]),g=i._starts[e],p=g+(t.hidden?0:i._angles[e]),m=s.animateScale?0:l.getDistanceFromCenterForValue(r.data[e]),v=t._options||{};H.extend(t,{_datasetIndex:i.index,_index:e,_scale:l,_model:{backgroundColor:v.backgroundColor,borderColor:v.borderColor,borderWidth:v.borderWidth,borderAlign:v.borderAlign,x:d,y:h,innerRadius:0,outerRadius:n?m:f,startAngle:n&&s.animateRotate?c:g,endAngle:n&&s.animateRotate?c:p,label:H.valueAtIndexOrDefault(u,e,u[e])}}),t.pivot()},countVisibleElements:function(){var t=this.getDataset(),e=this.getMeta(),n=0;return H.each(e.data,(function(e,i){isNaN(t.data[i])||e.hidden||n++})),n},setHoverStyle:function(t){var e=t._model,n=t._options,i=H.getHoverColor,a=H.valueOrDefault;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth},e.backgroundColor=a(n.hoverBackgroundColor,i(n.backgroundColor)),e.borderColor=a(n.hoverBorderColor,i(n.borderColor)),e.borderWidth=a(n.hoverBorderWidth,n.borderWidth)},_computeAngle:function(t){var e=this,n=this.getMeta().count,i=e.getDataset(),a=e.getMeta();if(isNaN(i.data[t])||a.data[t].hidden)return 0;var r={chart:e.chart,dataIndex:t,dataset:i,datasetIndex:e.index};return Gt([e.chart.options.elements.arc.angle,2*Math.PI/n],r,t)}});N._set("pie",H.clone(N.doughnut)),N._set("pie",{cutoutPercentage:0});var Kt=Bt,Zt=H.valueOrDefault;N._set("radar",{spanGaps:!1,scale:{type:"radialLinear"},elements:{line:{fill:"start",tension:0}}});var $t=it.extend({datasetElementType:kt.Line,dataElementType:kt.Point,linkScales:H.noop,_datasetElementOptions:["backgroundColor","borderWidth","borderColor","borderCapStyle","borderDash","borderDashOffset","borderJoinStyle","fill"],_dataElementOptions:{backgroundColor:"pointBackgroundColor",borderColor:"pointBorderColor",borderWidth:"pointBorderWidth",hitRadius:"pointHitRadius",hoverBackgroundColor:"pointHoverBackgroundColor",hoverBorderColor:"pointHoverBorderColor",hoverBorderWidth:"pointHoverBorderWidth",hoverRadius:"pointHoverRadius",pointStyle:"pointStyle",radius:"pointRadius",rotation:"pointRotation"},_getIndexScaleId:function(){return this.chart.scale.id},_getValueScaleId:function(){return this.chart.scale.id},update:function(t){var e,n,i=this,a=i.getMeta(),r=a.dataset,o=a.data||[],s=i.chart.scale,l=i._config;for(void 0!==l.tension&&void 0===l.lineTension&&(l.lineTension=l.tension),r._scale=s,r._datasetIndex=i.index,r._children=o,r._loop=!0,r._model=i._resolveDatasetElementOptions(r),r.pivot(),e=0,n=o.length;e<n;++e)i.updateElement(o[e],e,t);for(i.updateBezierControlPoints(),e=0,n=o.length;e<n;++e)o[e].pivot()},updateElement:function(t,e,n){var i=this,a=t.custom||{},r=i.getDataset(),o=i.chart.scale,s=o.getPointPositionForValue(e,r.data[e]),l=i._resolveDataElementOptions(t,e),u=i.getMeta().dataset._model,d=n?o.xCenter:s.x,h=n?o.yCenter:s.y;t._scale=o,t._options=l,t._datasetIndex=i.index,t._index=e,t._model={x:d,y:h,skip:a.skip||isNaN(d)||isNaN(h),radius:l.radius,pointStyle:l.pointStyle,rotation:l.rotation,backgroundColor:l.backgroundColor,borderColor:l.borderColor,borderWidth:l.borderWidth,tension:Zt(a.tension,u?u.tension:0),hitRadius:l.hitRadius}},_resolveDatasetElementOptions:function(){var t=this,e=t._config,n=t.chart.options,i=it.prototype._resolveDatasetElementOptions.apply(t,arguments);return i.spanGaps=Zt(e.spanGaps,n.spanGaps),i.tension=Zt(e.lineTension,n.elements.line.tension),i},updateBezierControlPoints:function(){var t,e,n,i,a=this.getMeta(),r=this.chart.chartArea,o=a.data||[];function s(t,e,n){return Math.max(Math.min(t,n),e)}for(a.dataset._model.spanGaps&&(o=o.filter((function(t){return!t._model.skip}))),t=0,e=o.length;t<e;++t)n=o[t]._model,i=H.splineCurve(H.previousItem(o,t,!0)._model,n,H.nextItem(o,t,!0)._model,n.tension),n.controlPointPreviousX=s(i.previous.x,r.left,r.right),n.controlPointPreviousY=s(i.previous.y,r.top,r.bottom),n.controlPointNextX=s(i.next.x,r.left,r.right),n.controlPointNextY=s(i.next.y,r.top,r.bottom)},setHoverStyle:function(t){var e=t._model,n=t._options,i=H.getHoverColor;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth,radius:e.radius},e.backgroundColor=Zt(n.hoverBackgroundColor,i(n.backgroundColor)),e.borderColor=Zt(n.hoverBorderColor,i(n.borderColor)),e.borderWidth=Zt(n.hoverBorderWidth,n.borderWidth),e.radius=Zt(n.hoverRadius,n.radius)}});N._set("scatter",{hover:{mode:"single"},scales:{xAxes:[{id:"x-axis-1",type:"linear",position:"bottom"}],yAxes:[{id:"y-axis-1",type:"linear",position:"left"}]},tooltips:{callbacks:{title:function(){return""},label:function(t){return"("+t.xLabel+", "+t.yLabel+")"}}}}),N._set("global",{datasets:{scatter:{showLine:!1}}});var Jt={bar:Tt,bubble:Ot,doughnut:Bt,horizontalBar:Et,line:Yt,polarArea:Xt,pie:Kt,radar:$t,scatter:Yt};function Qt(t,e){return t.native?{x:t.x,y:t.y}:H.getRelativePosition(t,e)}function te(t,e){var n,i,a,r,o,s,l=t._getSortedVisibleDatasetMetas();for(i=0,r=l.length;i<r;++i)for(a=0,o=(n=l[i].data).length;a<o;++a)(s=n[a])._view.skip||e(s)}function ee(t,e){var n=[];return te(t,(function(t){t.inRange(e.x,e.y)&&n.push(t)})),n}function ne(t,e,n,i){var a=Number.POSITIVE_INFINITY,r=[];return te(t,(function(t){if(!n||t.inRange(e.x,e.y)){var o=t.getCenterPoint(),s=i(e,o);s<a?(r=[t],a=s):s===a&&r.push(t)}})),r}function ie(t){var e=-1!==t.indexOf("x"),n=-1!==t.indexOf("y");return function(t,i){var a=e?Math.abs(t.x-i.x):0,r=n?Math.abs(t.y-i.y):0;return Math.sqrt(Math.pow(a,2)+Math.pow(r,2))}}function ae(t,e,n){var i=Qt(e,t);n.axis=n.axis||"x";var a=ie(n.axis),r=n.intersect?ee(t,i):ne(t,i,!1,a),o=[];return r.length?(t._getSortedVisibleDatasetMetas().forEach((function(t){var e=t.data[r[0]._index];e&&!e._view.skip&&o.push(e)})),o):[]}var re={modes:{single:function(t,e){var n=Qt(e,t),i=[];return te(t,(function(t){if(t.inRange(n.x,n.y))return i.push(t),i})),i.slice(0,1)},label:ae,index:ae,dataset:function(t,e,n){var i=Qt(e,t);n.axis=n.axis||"xy";var a=ie(n.axis),r=n.intersect?ee(t,i):ne(t,i,!1,a);return r.length>0&&(r=t.getDatasetMeta(r[0]._datasetIndex).data),r},"x-axis":function(t,e){return ae(t,e,{intersect:!1})},point:function(t,e){return ee(t,Qt(e,t))},nearest:function(t,e,n){var i=Qt(e,t);n.axis=n.axis||"xy";var a=ie(n.axis);return ne(t,i,n.intersect,a)},x:function(t,e,n){var i=Qt(e,t),a=[],r=!1;return te(t,(function(t){t.inXRange(i.x)&&a.push(t),t.inRange(i.x,i.y)&&(r=!0)})),n.intersect&&!r&&(a=[]),a},y:function(t,e,n){var i=Qt(e,t),a=[],r=!1;return te(t,(function(t){t.inYRange(i.y)&&a.push(t),t.inRange(i.x,i.y)&&(r=!0)})),n.intersect&&!r&&(a=[]),a}}},oe=H.extend;function se(t,e){return H.where(t,(function(t){return t.pos===e}))}function le(t,e){return t.sort((function(t,n){var i=e?n:t,a=e?t:n;return i.weight===a.weight?i.index-a.index:i.weight-a.weight}))}function ue(t,e,n,i){return Math.max(t[n],e[n])+Math.max(t[i],e[i])}function de(t,e,n){var i,a,r=n.box,o=t.maxPadding;if(n.size&&(t[n.pos]-=n.size),n.size=n.horizontal?r.height:r.width,t[n.pos]+=n.size,r.getPadding){var s=r.getPadding();o.top=Math.max(o.top,s.top),o.left=Math.max(o.left,s.left),o.bottom=Math.max(o.bottom,s.bottom),o.right=Math.max(o.right,s.right)}if(i=e.outerWidth-ue(o,t,"left","right"),a=e.outerHeight-ue(o,t,"top","bottom"),i!==t.w||a!==t.h){t.w=i,t.h=a;var l=n.horizontal?[i,t.w]:[a,t.h];return!(l[0]===l[1]||isNaN(l[0])&&isNaN(l[1]))}}function he(t,e){var n=e.maxPadding;function i(t){var i={left:0,top:0,right:0,bottom:0};return t.forEach((function(t){i[t]=Math.max(e[t],n[t])})),i}return i(t?["left","right"]:["top","bottom"])}function ce(t,e,n){var i,a,r,o,s,l,u=[];for(i=0,a=t.length;i<a;++i)(o=(r=t[i]).box).update(r.width||e.w,r.height||e.h,he(r.horizontal,e)),de(e,n,r)&&(l=!0,u.length&&(s=!0)),o.fullWidth||u.push(r);return s&&ce(u,e,n)||l}function fe(t,e,n){var i,a,r,o,s=n.padding,l=e.x,u=e.y;for(i=0,a=t.length;i<a;++i)o=(r=t[i]).box,r.horizontal?(o.left=o.fullWidth?s.left:e.left,o.right=o.fullWidth?n.outerWidth-s.right:e.left+e.w,o.top=u,o.bottom=u+o.height,o.width=o.right-o.left,u=o.bottom):(o.left=l,o.right=l+o.width,o.top=e.top,o.bottom=e.top+e.h,o.height=o.bottom-o.top,l=o.right);e.x=l,e.y=u}N._set("global",{layout:{padding:{top:0,right:0,bottom:0,left:0}}});var ge,pe={defaults:{},addBox:function(t,e){t.boxes||(t.boxes=[]),e.fullWidth=e.fullWidth||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw:function(){e.draw.apply(e,arguments)}}]},t.boxes.push(e)},removeBox:function(t,e){var n=t.boxes?t.boxes.indexOf(e):-1;-1!==n&&t.boxes.splice(n,1)},configure:function(t,e,n){for(var i,a=["fullWidth","position","weight"],r=a.length,o=0;o<r;++o)i=a[o],n.hasOwnProperty(i)&&(e[i]=n[i])},update:function(t,e,n){if(t){var i=t.options.layout||{},a=H.options.toPadding(i.padding),r=e-a.width,o=n-a.height,s=function(t){var e=function(t){var e,n,i,a=[];for(e=0,n=(t||[]).length;e<n;++e)i=t[e],a.push({index:e,box:i,pos:i.position,horizontal:i.isHorizontal(),weight:i.weight});return a}(t),n=le(se(e,"left"),!0),i=le(se(e,"right")),a=le(se(e,"top"),!0),r=le(se(e,"bottom"));return{leftAndTop:n.concat(a),rightAndBottom:i.concat(r),chartArea:se(e,"chartArea"),vertical:n.concat(i),horizontal:a.concat(r)}}(t.boxes),l=s.vertical,u=s.horizontal,d=Object.freeze({outerWidth:e,outerHeight:n,padding:a,availableWidth:r,vBoxMaxWidth:r/2/l.length,hBoxMaxHeight:o/2}),h=oe({maxPadding:oe({},a),w:r,h:o,x:a.left,y:a.top},a);!function(t,e){var n,i,a;for(n=0,i=t.length;n<i;++n)(a=t[n]).width=a.horizontal?a.box.fullWidth&&e.availableWidth:e.vBoxMaxWidth,a.height=a.horizontal&&e.hBoxMaxHeight}(l.concat(u),d),ce(l,h,d),ce(u,h,d)&&ce(l,h,d),function(t){var e=t.maxPadding;function n(n){var i=Math.max(e[n]-t[n],0);return t[n]+=i,i}t.y+=n("top"),t.x+=n("left"),n("right"),n("bottom")}(h),fe(s.leftAndTop,h,d),h.x+=h.w,h.y+=h.h,fe(s.rightAndBottom,h,d),t.chartArea={left:h.left,top:h.top,right:h.left+h.w,bottom:h.top+h.h},H.each(s.chartArea,(function(e){var n=e.box;oe(n,t.chartArea),n.update(h.w,h.h)}))}}},me=(ge=Object.freeze({__proto__:null,default:"@keyframes chartjs-render-animation{from{opacity:.99}to{opacity:1}}.chartjs-render-monitor{animation:chartjs-render-animation 1ms}.chartjs-size-monitor,.chartjs-size-monitor-expand,.chartjs-size-monitor-shrink{position:absolute;direction:ltr;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1}.chartjs-size-monitor-expand>div{position:absolute;width:1000000px;height:1000000px;left:0;top:0}.chartjs-size-monitor-shrink>div{position:absolute;width:200%;height:200%;left:0;top:0}"}))&&ge.default||ge,ve="$chartjs",be="chartjs-size-monitor",xe="chartjs-render-monitor",ye="chartjs-render-animation",_e=["animationstart","webkitAnimationStart"],ke={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"};function we(t,e){var n=H.getStyle(t,e),i=n&&n.match(/^(\d+)(\.\d+)?px$/);return i?Number(i[1]):void 0}var Me=!!function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("e",null,e)}catch(t){}return t}()&&{passive:!0};function Se(t,e,n){t.addEventListener(e,n,Me)}function Ce(t,e,n){t.removeEventListener(e,n,Me)}function Pe(t,e,n,i,a){return{type:t,chart:e,native:a||null,x:void 0!==n?n:null,y:void 0!==i?i:null}}function Ae(t){var e=document.createElement("div");return e.className=t||"",e}function De(t,e,n){var i,a,r,o,s=t[ve]||(t[ve]={}),l=s.resizer=function(t){var e=Ae(be),n=Ae(be+"-expand"),i=Ae(be+"-shrink");n.appendChild(Ae()),i.appendChild(Ae()),e.appendChild(n),e.appendChild(i),e._reset=function(){n.scrollLeft=1e6,n.scrollTop=1e6,i.scrollLeft=1e6,i.scrollTop=1e6};var a=function(){e._reset(),t()};return Se(n,"scroll",a.bind(n,"expand")),Se(i,"scroll",a.bind(i,"shrink")),e}((i=function(){if(s.resizer){var i=n.options.maintainAspectRatio&&t.parentNode,a=i?i.clientWidth:0;e(Pe("resize",n)),i&&i.clientWidth<a&&n.canvas&&e(Pe("resize",n))}},r=!1,o=[],function(){o=Array.prototype.slice.call(arguments),a=a||this,r||(r=!0,H.requestAnimFrame.call(window,(function(){r=!1,i.apply(a,o)})))}));!function(t,e){var n=t[ve]||(t[ve]={}),i=n.renderProxy=function(t){t.animationName===ye&&e()};H.each(_e,(function(e){Se(t,e,i)})),n.reflow=!!t.offsetParent,t.classList.add(xe)}(t,(function(){if(s.resizer){var e=t.parentNode;e&&e!==l.parentNode&&e.insertBefore(l,e.firstChild),l._reset()}}))}function Te(t){var e=t[ve]||{},n=e.resizer;delete e.resizer,function(t){var e=t[ve]||{},n=e.renderProxy;n&&(H.each(_e,(function(e){Ce(t,e,n)})),delete e.renderProxy),t.classList.remove(xe)}(t),n&&n.parentNode&&n.parentNode.removeChild(n)}var Ie={disableCSSInjection:!1,_enabled:"undefined"!=typeof window&&"undefined"!=typeof document,_ensureLoaded:function(t){if(!this.disableCSSInjection){var e=t.getRootNode?t.getRootNode():document;!function(t,e){var n=t[ve]||(t[ve]={});if(!n.containsStyles){n.containsStyles=!0,e="/* Chart.js */\n"+e;var i=document.createElement("style");i.setAttribute("type","text/css"),i.appendChild(document.createTextNode(e)),t.appendChild(i)}}(e.host?e:document.head,me)}},acquireContext:function(t,e){"string"==typeof t?t=document.getElementById(t):t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas);var n=t&&t.getContext&&t.getContext("2d");return n&&n.canvas===t?(this._ensureLoaded(t),function(t,e){var n=t.style,i=t.getAttribute("height"),a=t.getAttribute("width");if(t[ve]={initial:{height:i,width:a,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",null===a||""===a){var r=we(t,"width");void 0!==r&&(t.width=r)}if(null===i||""===i)if(""===t.style.height)t.height=t.width/(e.options.aspectRatio||2);else{var o=we(t,"height");void 0!==r&&(t.height=o)}}(t,e),n):null},releaseContext:function(t){var e=t.canvas;if(e[ve]){var n=e[ve].initial;["height","width"].forEach((function(t){var i=n[t];H.isNullOrUndef(i)?e.removeAttribute(t):e.setAttribute(t,i)})),H.each(n.style||{},(function(t,n){e.style[n]=t})),e.width=e.width,delete e[ve]}},addEventListener:function(t,e,n){var i=t.canvas;if("resize"!==e){var a=n[ve]||(n[ve]={});Se(i,e,(a.proxies||(a.proxies={}))[t.id+"_"+e]=function(e){n(function(t,e){var n=ke[t.type]||t.type,i=H.getRelativePosition(t,e);return Pe(n,e,i.x,i.y,t)}(e,t))})}else De(i,n,t)},removeEventListener:function(t,e,n){var i=t.canvas;if("resize"!==e){var a=((n[ve]||{}).proxies||{})[t.id+"_"+e];a&&Ce(i,e,a)}else Te(i)}};H.addEvent=Se,H.removeEvent=Ce;var Fe=Ie._enabled?Ie:{acquireContext:function(t){return t&&t.canvas&&(t=t.canvas),t&&t.getContext("2d")||null}},Oe=H.extend({initialize:function(){},acquireContext:function(){},releaseContext:function(){},addEventListener:function(){},removeEventListener:function(){}},Fe);N._set("global",{plugins:{}});var Le={_plugins:[],_cacheId:0,register:function(t){var e=this._plugins;[].concat(t).forEach((function(t){-1===e.indexOf(t)&&e.push(t)})),this._cacheId++},unregister:function(t){var e=this._plugins;[].concat(t).forEach((function(t){var n=e.indexOf(t);-1!==n&&e.splice(n,1)})),this._cacheId++},clear:function(){this._plugins=[],this._cacheId++},count:function(){return this._plugins.length},getAll:function(){return this._plugins},notify:function(t,e,n){var i,a,r,o,s,l=this.descriptors(t),u=l.length;for(i=0;i<u;++i)if("function"==typeof(s=(r=(a=l[i]).plugin)[e])&&((o=[t].concat(n||[])).push(a.options),!1===s.apply(r,o)))return!1;return!0},descriptors:function(t){var e=t.$plugins||(t.$plugins={});if(e.id===this._cacheId)return e.descriptors;var n=[],i=[],a=t&&t.config||{},r=a.options&&a.options.plugins||{};return this._plugins.concat(a.plugins||[]).forEach((function(t){if(-1===n.indexOf(t)){var e=t.id,a=r[e];!1!==a&&(!0===a&&(a=H.clone(N.global.plugins[e])),n.push(t),i.push({plugin:t,options:a||{}}))}})),e.descriptors=i,e.id=this._cacheId,i},_invalidate:function(t){delete t.$plugins}},Re={constructors:{},defaults:{},registerScaleType:function(t,e,n){this.constructors[t]=e,this.defaults[t]=H.clone(n)},getScaleConstructor:function(t){return this.constructors.hasOwnProperty(t)?this.constructors[t]:void 0},getScaleDefaults:function(t){return this.defaults.hasOwnProperty(t)?H.merge(Object.create(null),[N.scale,this.defaults[t]]):{}},updateScaleDefaults:function(t,e){this.defaults.hasOwnProperty(t)&&(this.defaults[t]=H.extend(this.defaults[t],e))},addScalesToLayout:function(t){H.each(t.scales,(function(e){e.fullWidth=e.options.fullWidth,e.position=e.options.position,e.weight=e.options.weight,pe.addBox(t,e)}))}},ze=H.valueOrDefault,Ne=H.rtl.getRtlAdapter;N._set("global",{tooltips:{enabled:!0,custom:null,mode:"nearest",position:"average",intersect:!0,backgroundColor:"rgba(0,0,0,0.8)",titleFontStyle:"bold",titleSpacing:2,titleMarginBottom:6,titleFontColor:"#fff",titleAlign:"left",bodySpacing:2,bodyFontColor:"#fff",bodyAlign:"left",footerFontStyle:"bold",footerSpacing:2,footerMarginTop:6,footerFontColor:"#fff",footerAlign:"left",yPadding:6,xPadding:6,caretPadding:2,caretSize:5,cornerRadius:6,multiKeyBackground:"#fff",displayColors:!0,borderColor:"rgba(0,0,0,0)",borderWidth:0,callbacks:{beforeTitle:H.noop,title:function(t,e){var n="",i=e.labels,a=i?i.length:0;if(t.length>0){var r=t[0];r.label?n=r.label:r.xLabel?n=r.xLabel:a>0&&r.index<a&&(n=i[r.index])}return n},afterTitle:H.noop,beforeBody:H.noop,beforeLabel:H.noop,label:function(t,e){var n=e.datasets[t.datasetIndex].label||"";return n&&(n+=": "),H.isNullOrUndef(t.value)?n+=t.yLabel:n+=t.value,n},labelColor:function(t,e){var n=e.getDatasetMeta(t.datasetIndex).data[t.index]._view;return{borderColor:n.borderColor,backgroundColor:n.backgroundColor}},labelTextColor:function(){return this._options.bodyFontColor},afterLabel:H.noop,afterBody:H.noop,beforeFooter:H.noop,footer:H.noop,afterFooter:H.noop}}});var Be={average:function(t){if(!t.length)return!1;var e,n,i=0,a=0,r=0;for(e=0,n=t.length;e<n;++e){var o=t[e];if(o&&o.hasValue()){var s=o.tooltipPosition();i+=s.x,a+=s.y,++r}}return{x:i/r,y:a/r}},nearest:function(t,e){var n,i,a,r=e.x,o=e.y,s=Number.POSITIVE_INFINITY;for(n=0,i=t.length;n<i;++n){var l=t[n];if(l&&l.hasValue()){var u=l.getCenterPoint(),d=H.distanceBetweenPoints(e,u);d<s&&(s=d,a=l)}}if(a){var h=a.tooltipPosition();r=h.x,o=h.y}return{x:r,y:o}}};function Ee(t,e){return e&&(H.isArray(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function We(t){return("string"==typeof t||t instanceof String)&&t.indexOf("\n")>-1?t.split("\n"):t}function Ve(t){var e=N.global;return{xPadding:t.xPadding,yPadding:t.yPadding,xAlign:t.xAlign,yAlign:t.yAlign,rtl:t.rtl,textDirection:t.textDirection,bodyFontColor:t.bodyFontColor,_bodyFontFamily:ze(t.bodyFontFamily,e.defaultFontFamily),_bodyFontStyle:ze(t.bodyFontStyle,e.defaultFontStyle),_bodyAlign:t.bodyAlign,bodyFontSize:ze(t.bodyFontSize,e.defaultFontSize),bodySpacing:t.bodySpacing,titleFontColor:t.titleFontColor,_titleFontFamily:ze(t.titleFontFamily,e.defaultFontFamily),_titleFontStyle:ze(t.titleFontStyle,e.defaultFontStyle),titleFontSize:ze(t.titleFontSize,e.defaultFontSize),_titleAlign:t.titleAlign,titleSpacing:t.titleSpacing,titleMarginBottom:t.titleMarginBottom,footerFontColor:t.footerFontColor,_footerFontFamily:ze(t.footerFontFamily,e.defaultFontFamily),_footerFontStyle:ze(t.footerFontStyle,e.defaultFontStyle),footerFontSize:ze(t.footerFontSize,e.defaultFontSize),_footerAlign:t.footerAlign,footerSpacing:t.footerSpacing,footerMarginTop:t.footerMarginTop,caretSize:t.caretSize,cornerRadius:t.cornerRadius,backgroundColor:t.backgroundColor,opacity:0,legendColorBackground:t.multiKeyBackground,displayColors:t.displayColors,borderColor:t.borderColor,borderWidth:t.borderWidth}}function He(t,e){return"center"===e?t.x+t.width/2:"right"===e?t.x+t.width-t.xPadding:t.x+t.xPadding}function je(t){return Ee([],We(t))}var qe=K.extend({initialize:function(){this._model=Ve(this._options),this._lastActive=[]},getTitle:function(){var t=this,e=t._options,n=e.callbacks,i=n.beforeTitle.apply(t,arguments),a=n.title.apply(t,arguments),r=n.afterTitle.apply(t,arguments),o=[];return o=Ee(o,We(i)),o=Ee(o,We(a)),o=Ee(o,We(r))},getBeforeBody:function(){return je(this._options.callbacks.beforeBody.apply(this,arguments))},getBody:function(t,e){var n=this,i=n._options.callbacks,a=[];return H.each(t,(function(t){var r={before:[],lines:[],after:[]};Ee(r.before,We(i.beforeLabel.call(n,t,e))),Ee(r.lines,i.label.call(n,t,e)),Ee(r.after,We(i.afterLabel.call(n,t,e))),a.push(r)})),a},getAfterBody:function(){return je(this._options.callbacks.afterBody.apply(this,arguments))},getFooter:function(){var t=this,e=t._options.callbacks,n=e.beforeFooter.apply(t,arguments),i=e.footer.apply(t,arguments),a=e.afterFooter.apply(t,arguments),r=[];return r=Ee(r,We(n)),r=Ee(r,We(i)),r=Ee(r,We(a))},update:function(t){var e,n,i,a,r,o,s,l,u,d,h=this,c=h._options,f=h._model,g=h._model=Ve(c),p=h._active,m=h._data,v={xAlign:f.xAlign,yAlign:f.yAlign},b={x:f.x,y:f.y},x={width:f.width,height:f.height},y={x:f.caretX,y:f.caretY};if(p.length){g.opacity=1;var _=[],k=[];y=Be[c.position].call(h,p,h._eventPosition);var w=[];for(e=0,n=p.length;e<n;++e)w.push((i=p[e],a=void 0,r=void 0,o=void 0,s=void 0,l=void 0,u=void 0,d=void 0,a=i._xScale,r=i._yScale||i._scale,o=i._index,s=i._datasetIndex,l=i._chart.getDatasetMeta(s).controller,u=l._getIndexScale(),d=l._getValueScale(),{xLabel:a?a.getLabelForIndex(o,s):"",yLabel:r?r.getLabelForIndex(o,s):"",label:u?""+u.getLabelForIndex(o,s):"",value:d?""+d.getLabelForIndex(o,s):"",index:o,datasetIndex:s,x:i._model.x,y:i._model.y}));c.filter&&(w=w.filter((function(t){return c.filter(t,m)}))),c.itemSort&&(w=w.sort((function(t,e){return c.itemSort(t,e,m)}))),H.each(w,(function(t){_.push(c.callbacks.labelColor.call(h,t,h._chart)),k.push(c.callbacks.labelTextColor.call(h,t,h._chart))})),g.title=h.getTitle(w,m),g.beforeBody=h.getBeforeBody(w,m),g.body=h.getBody(w,m),g.afterBody=h.getAfterBody(w,m),g.footer=h.getFooter(w,m),g.x=y.x,g.y=y.y,g.caretPadding=c.caretPadding,g.labelColors=_,g.labelTextColors=k,g.dataPoints=w,x=function(t,e){var n=t._chart.ctx,i=2*e.yPadding,a=0,r=e.body,o=r.reduce((function(t,e){return t+e.before.length+e.lines.length+e.after.length}),0);o+=e.beforeBody.length+e.afterBody.length;var s=e.title.length,l=e.footer.length,u=e.titleFontSize,d=e.bodyFontSize,h=e.footerFontSize;i+=s*u,i+=s?(s-1)*e.titleSpacing:0,i+=s?e.titleMarginBottom:0,i+=o*d,i+=o?(o-1)*e.bodySpacing:0,i+=l?e.footerMarginTop:0,i+=l*h,i+=l?(l-1)*e.footerSpacing:0;var c=0,f=function(t){a=Math.max(a,n.measureText(t).width+c)};return n.font=H.fontString(u,e._titleFontStyle,e._titleFontFamily),H.each(e.title,f),n.font=H.fontString(d,e._bodyFontStyle,e._bodyFontFamily),H.each(e.beforeBody.concat(e.afterBody),f),c=e.displayColors?d+2:0,H.each(r,(function(t){H.each(t.before,f),H.each(t.lines,f),H.each(t.after,f)})),c=0,n.font=H.fontString(h,e._footerFontStyle,e._footerFontFamily),H.each(e.footer,f),{width:a+=2*e.xPadding,height:i}}(this,g),b=function(t,e,n,i){var a=t.x,r=t.y,o=t.caretSize,s=t.caretPadding,l=t.cornerRadius,u=n.xAlign,d=n.yAlign,h=o+s,c=l+s;return"right"===u?a-=e.width:"center"===u&&((a-=e.width/2)+e.width>i.width&&(a=i.width-e.width),a<0&&(a=0)),"top"===d?r+=h:r-="bottom"===d?e.height+h:e.height/2,"center"===d?"left"===u?a+=h:"right"===u&&(a-=h):"left"===u?a-=c:"right"===u&&(a+=c),{x:a,y:r}}(g,x,v=function(t,e){var n,i,a,r,o,s=t._model,l=t._chart,u=t._chart.chartArea,d="center",h="center";s.y<e.height?h="top":s.y>l.height-e.height&&(h="bottom");var c=(u.left+u.right)/2,f=(u.top+u.bottom)/2;"center"===h?(n=function(t){return t<=c},i=function(t){return t>c}):(n=function(t){return t<=e.width/2},i=function(t){return t>=l.width-e.width/2}),a=function(t){return t+e.width+s.caretSize+s.caretPadding>l.width},r=function(t){return t-e.width-s.caretSize-s.caretPadding<0},o=function(t){return t<=f?"top":"bottom"},n(s.x)?(d="left",a(s.x)&&(d="center",h=o(s.y))):i(s.x)&&(d="right",r(s.x)&&(d="center",h=o(s.y)));var g=t._options;return{xAlign:g.xAlign?g.xAlign:d,yAlign:g.yAlign?g.yAlign:h}}(this,x),h._chart)}else g.opacity=0;return g.xAlign=v.xAlign,g.yAlign=v.yAlign,g.x=b.x,g.y=b.y,g.width=x.width,g.height=x.height,g.caretX=y.x,g.caretY=y.y,h._model=g,t&&c.custom&&c.custom.call(h,g),h},drawCaret:function(t,e){var n=this._chart.ctx,i=this._view,a=this.getCaretPosition(t,e,i);n.lineTo(a.x1,a.y1),n.lineTo(a.x2,a.y2),n.lineTo(a.x3,a.y3)},getCaretPosition:function(t,e,n){var i,a,r,o,s,l,u=n.caretSize,d=n.cornerRadius,h=n.xAlign,c=n.yAlign,f=t.x,g=t.y,p=e.width,m=e.height;if("center"===c)s=g+m/2,"left"===h?(a=(i=f)-u,r=i,o=s+u,l=s-u):(a=(i=f+p)+u,r=i,o=s-u,l=s+u);else if("left"===h?(i=(a=f+d+u)-u,r=a+u):"right"===h?(i=(a=f+p-d-u)-u,r=a+u):(i=(a=n.caretX)-u,r=a+u),"top"===c)s=(o=g)-u,l=o;else{s=(o=g+m)+u,l=o;var v=r;r=i,i=v}return{x1:i,x2:a,x3:r,y1:o,y2:s,y3:l}},drawTitle:function(t,e,n){var i,a,r,o=e.title,s=o.length;if(s){var l=Ne(e.rtl,e.x,e.width);for(t.x=He(e,e._titleAlign),n.textAlign=l.textAlign(e._titleAlign),n.textBaseline="middle",i=e.titleFontSize,a=e.titleSpacing,n.fillStyle=e.titleFontColor,n.font=H.fontString(i,e._titleFontStyle,e._titleFontFamily),r=0;r<s;++r)n.fillText(o[r],l.x(t.x),t.y+i/2),t.y+=i+a,r+1===s&&(t.y+=e.titleMarginBottom-a)}},drawBody:function(t,e,n){var i,a,r,o,s,l,u,d,h=e.bodyFontSize,c=e.bodySpacing,f=e._bodyAlign,g=e.body,p=e.displayColors,m=0,v=p?He(e,"left"):0,b=Ne(e.rtl,e.x,e.width),x=function(e){n.fillText(e,b.x(t.x+m),t.y+h/2),t.y+=h+c},y=b.textAlign(f);for(n.textAlign=f,n.textBaseline="middle",n.font=H.fontString(h,e._bodyFontStyle,e._bodyFontFamily),t.x=He(e,y),n.fillStyle=e.bodyFontColor,H.each(e.beforeBody,x),m=p&&"right"!==y?"center"===f?h/2+1:h+2:0,s=0,u=g.length;s<u;++s){for(i=g[s],a=e.labelTextColors[s],r=e.labelColors[s],n.fillStyle=a,H.each(i.before,x),l=0,d=(o=i.lines).length;l<d;++l){if(p){var _=b.x(v);n.fillStyle=e.legendColorBackground,n.fillRect(b.leftForLtr(_,h),t.y,h,h),n.lineWidth=1,n.strokeStyle=r.borderColor,n.strokeRect(b.leftForLtr(_,h),t.y,h,h),n.fillStyle=r.backgroundColor,n.fillRect(b.leftForLtr(b.xPlus(_,1),h-2),t.y+1,h-2,h-2),n.fillStyle=a}x(o[l])}H.each(i.after,x)}m=0,H.each(e.afterBody,x),t.y-=c},drawFooter:function(t,e,n){var i,a,r=e.footer,o=r.length;if(o){var s=Ne(e.rtl,e.x,e.width);for(t.x=He(e,e._footerAlign),t.y+=e.footerMarginTop,n.textAlign=s.textAlign(e._footerAlign),n.textBaseline="middle",i=e.footerFontSize,n.fillStyle=e.footerFontColor,n.font=H.fontString(i,e._footerFontStyle,e._footerFontFamily),a=0;a<o;++a)n.fillText(r[a],s.x(t.x),t.y+i/2),t.y+=i+e.footerSpacing}},drawBackground:function(t,e,n,i){n.fillStyle=e.backgroundColor,n.strokeStyle=e.borderColor,n.lineWidth=e.borderWidth;var a=e.xAlign,r=e.yAlign,o=t.x,s=t.y,l=i.width,u=i.height,d=e.cornerRadius;n.beginPath(),n.moveTo(o+d,s),"top"===r&&this.drawCaret(t,i),n.lineTo(o+l-d,s),n.quadraticCurveTo(o+l,s,o+l,s+d),"center"===r&&"right"===a&&this.drawCaret(t,i),n.lineTo(o+l,s+u-d),n.quadraticCurveTo(o+l,s+u,o+l-d,s+u),"bottom"===r&&this.drawCaret(t,i),n.lineTo(o+d,s+u),n.quadraticCurveTo(o,s+u,o,s+u-d),"center"===r&&"left"===a&&this.drawCaret(t,i),n.lineTo(o,s+d),n.quadraticCurveTo(o,s,o+d,s),n.closePath(),n.fill(),e.borderWidth>0&&n.stroke()},draw:function(){var t=this._chart.ctx,e=this._view;if(0!==e.opacity){var n={width:e.width,height:e.height},i={x:e.x,y:e.y},a=Math.abs(e.opacity<.001)?0:e.opacity,r=e.title.length||e.beforeBody.length||e.body.length||e.afterBody.length||e.footer.length;this._options.enabled&&r&&(t.save(),t.globalAlpha=a,this.drawBackground(i,e,t,n),i.y+=e.yPadding,H.rtl.overrideTextDirection(t,e.textDirection),this.drawTitle(i,e,t),this.drawBody(i,e,t),this.drawFooter(i,e,t),H.rtl.restoreTextDirection(t,e.textDirection),t.restore())}},handleEvent:function(t){var e,n=this,i=n._options;return n._lastActive=n._lastActive||[],"mouseout"===t.type?n._active=[]:(n._active=n._chart.getElementsAtEventForMode(t,i.mode,i),i.reverse&&n._active.reverse()),(e=!H.arrayEquals(n._active,n._lastActive))&&(n._lastActive=n._active,(i.enabled||i.custom)&&(n._eventPosition={x:t.x,y:t.y},n.update(!0),n.pivot())),e}}),Ue=Be,Ye=qe;Ye.positioners=Ue;var Ge=H.valueOrDefault;function Xe(){return H.merge(Object.create(null),[].slice.call(arguments),{merger:function(t,e,n,i){if("xAxes"===t||"yAxes"===t){var a,r,o,s=n[t].length;for(e[t]||(e[t]=[]),a=0;a<s;++a)o=n[t][a],r=Ge(o.type,"xAxes"===t?"category":"linear"),a>=e[t].length&&e[t].push({}),!e[t][a].type||o.type&&o.type!==e[t][a].type?H.merge(e[t][a],[Re.getScaleDefaults(r),o]):H.merge(e[t][a],o)}else H._merger(t,e,n,i)}})}function Ke(){return H.merge(Object.create(null),[].slice.call(arguments),{merger:function(t,e,n,i){var a=e[t]||Object.create(null),r=n[t];"scales"===t?e[t]=Xe(a,r):"scale"===t?e[t]=H.merge(a,[Re.getScaleDefaults(r.type),r]):H._merger(t,e,n,i)}})}function Ze(t){var e=t.options;H.each(t.scales,(function(e){pe.removeBox(t,e)})),e=Ke(N.global,N[t.config.type],e),t.options=t.config.options=e,t.ensureScalesHaveIDs(),t.buildOrUpdateScales(),t.tooltip._options=e.tooltips,t.tooltip.initialize()}function $e(t,e,n){var i,a=function(t){return t.id===i};do{i=e+n++}while(H.findIndex(t,a)>=0);return i}function Je(t){return"top"===t||"bottom"===t}function Qe(t,e){return function(n,i){return n[t]===i[t]?n[e]-i[e]:n[t]-i[t]}}N._set("global",{elements:{},events:["mousemove","mouseout","click","touchstart","touchmove"],hover:{onHover:null,mode:"nearest",intersect:!0,animationDuration:400},onClick:null,maintainAspectRatio:!0,responsive:!0,responsiveAnimationDuration:0});var tn=function(t,e){return this.construct(t,e),this};H.extend(tn.prototype,{construct:function(t,e){var n=this;e=function(t){var e=(t=t||Object.create(null)).data=t.data||{};return e.datasets=e.datasets||[],e.labels=e.labels||[],t.options=Ke(N.global,N[t.type],t.options||{}),t}(e);var i=Oe.acquireContext(t,e),a=i&&i.canvas,r=a&&a.height,o=a&&a.width;n.id=H.uid(),n.ctx=i,n.canvas=a,n.config=e,n.width=o,n.height=r,n.aspectRatio=r?o/r:null,n.options=e.options,n._bufferedRender=!1,n._layers=[],n.chart=n,n.controller=n,tn.instances[n.id]=n,Object.defineProperty(n,"data",{get:function(){return n.config.data},set:function(t){n.config.data=t}}),i&&a?(n.initialize(),n.update()):console.error("Failed to create chart: can't acquire context from the given item")},initialize:function(){var t=this;return Le.notify(t,"beforeInit"),H.retinaScale(t,t.options.devicePixelRatio),t.bindEvents(),t.options.responsive&&t.resize(!0),t.initToolTip(),Le.notify(t,"afterInit"),t},clear:function(){return H.canvas.clear(this),this},stop:function(){return J.cancelAnimation(this),this},resize:function(t){var e=this,n=e.options,i=e.canvas,a=n.maintainAspectRatio&&e.aspectRatio||null,r=Math.max(0,Math.floor(H.getMaximumWidth(i))),o=Math.max(0,Math.floor(a?r/a:H.getMaximumHeight(i)));if((e.width!==r||e.height!==o)&&(i.width=e.width=r,i.height=e.height=o,i.style.width=r+"px",i.style.height=o+"px",H.retinaScale(e,n.devicePixelRatio),!t)){var s={width:r,height:o};Le.notify(e,"resize",[s]),n.onResize&&n.onResize(e,s),e.stop(),e.update({duration:n.responsiveAnimationDuration})}},ensureScalesHaveIDs:function(){var t=this.options,e=t.scales||{},n=t.scale;H.each(e.xAxes,(function(t,n){t.id||(t.id=$e(e.xAxes,"x-axis-",n))})),H.each(e.yAxes,(function(t,n){t.id||(t.id=$e(e.yAxes,"y-axis-",n))})),n&&(n.id=n.id||"scale")},buildOrUpdateScales:function(){var t=this,e=t.options,n=t.scales||{},i=[],a=Object.keys(n).reduce((function(t,e){return t[e]=!1,t}),{});e.scales&&(i=i.concat((e.scales.xAxes||[]).map((function(t){return{options:t,dtype:"category",dposition:"bottom"}})),(e.scales.yAxes||[]).map((function(t){return{options:t,dtype:"linear",dposition:"left"}})))),e.scale&&i.push({options:e.scale,dtype:"radialLinear",isDefault:!0,dposition:"chartArea"}),H.each(i,(function(e){var i=e.options,r=i.id,o=Ge(i.type,e.dtype);Je(i.position)!==Je(e.dposition)&&(i.position=e.dposition),a[r]=!0;var s=null;if(r in n&&n[r].type===o)(s=n[r]).options=i,s.ctx=t.ctx,s.chart=t;else{var l=Re.getScaleConstructor(o);if(!l)return;s=new l({id:r,type:o,options:i,ctx:t.ctx,chart:t}),n[s.id]=s}s.mergeTicksOptions(),e.isDefault&&(t.scale=s)})),H.each(a,(function(t,e){t||delete n[e]})),t.scales=n,Re.addScalesToLayout(this)},buildOrUpdateControllers:function(){var t,e,n=this,i=[],a=n.data.datasets;for(t=0,e=a.length;t<e;t++){var r=a[t],o=n.getDatasetMeta(t),s=r.type||n.config.type;if(o.type&&o.type!==s&&(n.destroyDatasetMeta(t),o=n.getDatasetMeta(t)),o.type=s,o.order=r.order||0,o.index=t,o.controller)o.controller.updateIndex(t),o.controller.linkScales();else{var l=Jt[o.type];if(void 0===l)throw new Error('"'+o.type+'" is not a chart type.');o.controller=new l(n,t),i.push(o.controller)}}return i},resetElements:function(){var t=this;H.each(t.data.datasets,(function(e,n){t.getDatasetMeta(n).controller.reset()}),t)},reset:function(){this.resetElements(),this.tooltip.initialize()},update:function(t){var e,n,i=this;if(t&&"object"==typeof t||(t={duration:t,lazy:arguments[1]}),Ze(i),Le._invalidate(i),!1!==Le.notify(i,"beforeUpdate")){i.tooltip._data=i.data;var a=i.buildOrUpdateControllers();for(e=0,n=i.data.datasets.length;e<n;e++)i.getDatasetMeta(e).controller.buildOrUpdateElements();i.updateLayout(),i.options.animation&&i.options.animation.duration&&H.each(a,(function(t){t.reset()})),i.updateDatasets(),i.tooltip.initialize(),i.lastActive=[],Le.notify(i,"afterUpdate"),i._layers.sort(Qe("z","_idx")),i._bufferedRender?i._bufferedRequest={duration:t.duration,easing:t.easing,lazy:t.lazy}:i.render(t)}},updateLayout:function(){var t=this;!1!==Le.notify(t,"beforeLayout")&&(pe.update(this,this.width,this.height),t._layers=[],H.each(t.boxes,(function(e){e._configure&&e._configure(),t._layers.push.apply(t._layers,e._layers())}),t),t._layers.forEach((function(t,e){t._idx=e})),Le.notify(t,"afterScaleUpdate"),Le.notify(t,"afterLayout"))},updateDatasets:function(){if(!1!==Le.notify(this,"beforeDatasetsUpdate")){for(var t=0,e=this.data.datasets.length;t<e;++t)this.updateDataset(t);Le.notify(this,"afterDatasetsUpdate")}},updateDataset:function(t){var e=this.getDatasetMeta(t),n={meta:e,index:t};!1!==Le.notify(this,"beforeDatasetUpdate",[n])&&(e.controller._update(),Le.notify(this,"afterDatasetUpdate",[n]))},render:function(t){var e=this;t&&"object"==typeof t||(t={duration:t,lazy:arguments[1]});var n=e.options.animation,i=Ge(t.duration,n&&n.duration),a=t.lazy;if(!1!==Le.notify(e,"beforeRender")){var r=function(t){Le.notify(e,"afterRender"),H.callback(n&&n.onComplete,[t],e)};if(n&&i){var o=new $({numSteps:i/16.66,easing:t.easing||n.easing,render:function(t,e){var n=H.easing.effects[e.easing],i=e.currentStep,a=i/e.numSteps;t.draw(n(a),a,i)},onAnimationProgress:n.onProgress,onAnimationComplete:r});J.addAnimation(e,o,i,a)}else e.draw(),r(new $({numSteps:0,chart:e}));return e}},draw:function(t){var e,n,i=this;if(i.clear(),H.isNullOrUndef(t)&&(t=1),i.transition(t),!(i.width<=0||i.height<=0)&&!1!==Le.notify(i,"beforeDraw",[t])){for(n=i._layers,e=0;e<n.length&&n[e].z<=0;++e)n[e].draw(i.chartArea);for(i.drawDatasets(t);e<n.length;++e)n[e].draw(i.chartArea);i._drawTooltip(t),Le.notify(i,"afterDraw",[t])}},transition:function(t){for(var e=0,n=(this.data.datasets||[]).length;e<n;++e)this.isDatasetVisible(e)&&this.getDatasetMeta(e).controller.transition(t);this.tooltip.transition(t)},_getSortedDatasetMetas:function(t){var e,n,i=[];for(e=0,n=(this.data.datasets||[]).length;e<n;++e)t&&!this.isDatasetVisible(e)||i.push(this.getDatasetMeta(e));return i.sort(Qe("order","index")),i},_getSortedVisibleDatasetMetas:function(){return this._getSortedDatasetMetas(!0)},drawDatasets:function(t){var e,n;if(!1!==Le.notify(this,"beforeDatasetsDraw",[t])){for(n=(e=this._getSortedVisibleDatasetMetas()).length-1;n>=0;--n)this.drawDataset(e[n],t);Le.notify(this,"afterDatasetsDraw",[t])}},drawDataset:function(t,e){var n={meta:t,index:t.index,easingValue:e};!1!==Le.notify(this,"beforeDatasetDraw",[n])&&(t.controller.draw(e),Le.notify(this,"afterDatasetDraw",[n]))},_drawTooltip:function(t){var e=this.tooltip,n={tooltip:e,easingValue:t};!1!==Le.notify(this,"beforeTooltipDraw",[n])&&(e.draw(),Le.notify(this,"afterTooltipDraw",[n]))},getElementAtEvent:function(t){return re.modes.single(this,t)},getElementsAtEvent:function(t){return re.modes.label(this,t,{intersect:!0})},getElementsAtXAxis:function(t){return re.modes["x-axis"](this,t,{intersect:!0})},getElementsAtEventForMode:function(t,e,n){var i=re.modes[e];return"function"==typeof i?i(this,t,n):[]},getDatasetAtEvent:function(t){return re.modes.dataset(this,t,{intersect:!0})},getDatasetMeta:function(t){var e=this.data.datasets[t];e._meta||(e._meta={});var n=e._meta[this.id];return n||(n=e._meta[this.id]={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e.order||0,index:t}),n},getVisibleDatasetCount:function(){for(var t=0,e=0,n=this.data.datasets.length;e<n;++e)this.isDatasetVisible(e)&&t++;return t},isDatasetVisible:function(t){var e=this.getDatasetMeta(t);return"boolean"==typeof e.hidden?!e.hidden:!this.data.datasets[t].hidden},generateLegend:function(){return this.options.legendCallback(this)},destroyDatasetMeta:function(t){var e=this.id,n=this.data.datasets[t],i=n._meta&&n._meta[e];i&&(i.controller.destroy(),delete n._meta[e])},destroy:function(){var t,e,n=this,i=n.canvas;for(n.stop(),t=0,e=n.data.datasets.length;t<e;++t)n.destroyDatasetMeta(t);i&&(n.unbindEvents(),H.canvas.clear(n),Oe.releaseContext(n.ctx),n.canvas=null,n.ctx=null),Le.notify(n,"destroy"),delete tn.instances[n.id]},toBase64Image:function(){return this.canvas.toDataURL.apply(this.canvas,arguments)},initToolTip:function(){var t=this;t.tooltip=new Ye({_chart:t,_chartInstance:t,_data:t.data,_options:t.options.tooltips},t)},bindEvents:function(){var t=this,e=t._listeners={},n=function(){t.eventHandler.apply(t,arguments)};H.each(t.options.events,(function(i){Oe.addEventListener(t,i,n),e[i]=n})),t.options.responsive&&(n=function(){t.resize()},Oe.addEventListener(t,"resize",n),e.resize=n)},unbindEvents:function(){var t=this,e=t._listeners;e&&(delete t._listeners,H.each(e,(function(e,n){Oe.removeEventListener(t,n,e)})))},updateHoverStyle:function(t,e,n){var i,a,r,o=n?"set":"remove";for(a=0,r=t.length;a<r;++a)(i=t[a])&&this.getDatasetMeta(i._datasetIndex).controller[o+"HoverStyle"](i);"dataset"===e&&this.getDatasetMeta(t[0]._datasetIndex).controller["_"+o+"DatasetHoverStyle"]()},eventHandler:function(t){var e=this,n=e.tooltip;if(!1!==Le.notify(e,"beforeEvent",[t])){e._bufferedRender=!0,e._bufferedRequest=null;var i=e.handleEvent(t);n&&(i=n._start?n.handleEvent(t):i|n.handleEvent(t)),Le.notify(e,"afterEvent",[t]);var a=e._bufferedRequest;return a?e.render(a):i&&!e.animating&&(e.stop(),e.render({duration:e.options.hover.animationDuration,lazy:!0})),e._bufferedRender=!1,e._bufferedRequest=null,e}},handleEvent:function(t){var e,n=this,i=n.options||{},a=i.hover;return n.lastActive=n.lastActive||[],"mouseout"===t.type?n.active=[]:n.active=n.getElementsAtEventForMode(t,a.mode,a),H.callback(i.onHover||i.hover.onHover,[t.native,n.active],n),"mouseup"!==t.type&&"click"!==t.type||i.onClick&&i.onClick.call(n,t.native,n.active),n.lastActive.length&&n.updateHoverStyle(n.lastActive,a.mode,!1),n.active.length&&a.mode&&n.updateHoverStyle(n.active,a.mode,!0),e=!H.arrayEquals(n.active,n.lastActive),n.lastActive=n.active,e}}),tn.instances={};var en=tn;tn.Controller=tn,tn.types={},H.configMerge=Ke,H.scaleMerge=Xe;function nn(){throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.")}function an(t){this.options=t||{}}H.extend(an.prototype,{formats:nn,parse:nn,format:nn,add:nn,diff:nn,startOf:nn,endOf:nn,_create:function(t){return t}}),an.override=function(t){H.extend(an.prototype,t)};var rn={_date:an},on={formatters:{values:function(t){return H.isArray(t)?t:""+t},linear:function(t,e,n){var i=n.length>3?n[2]-n[1]:n[1]-n[0];Math.abs(i)>1&&t!==Math.floor(t)&&(i=t-Math.floor(t));var a=H.log10(Math.abs(i)),r="";if(0!==t)if(Math.max(Math.abs(n[0]),Math.abs(n[n.length-1]))<1e-4){var o=H.log10(Math.abs(t)),s=Math.floor(o)-Math.floor(a);s=Math.max(Math.min(s,20),0),r=t.toExponential(s)}else{var l=-1*Math.floor(a);l=Math.max(Math.min(l,20),0),r=t.toFixed(l)}else r="0";return r},logarithmic:function(t,e,n){var i=t/Math.pow(10,Math.floor(H.log10(t)));return 0===t?"0":1===i||2===i||5===i||0===e||e===n.length-1?t.toExponential():""}}},sn=H.isArray,ln=H.isNullOrUndef,un=H.valueOrDefault,dn=H.valueAtIndexOrDefault;function hn(t,e,n){var i,a=t.getTicks().length,r=Math.min(e,a-1),o=t.getPixelForTick(r),s=t._startPixel,l=t._endPixel;if(!(n&&(i=1===a?Math.max(o-s,l-o):0===e?(t.getPixelForTick(1)-o)/2:(o-t.getPixelForTick(r-1))/2,(o+=r<e?i:-i)<s-1e-6||o>l+1e-6)))return o}function cn(t,e,n,i){var a,r,o,s,l,u,d,h,c,f,g,p,m,v=n.length,b=[],x=[],y=[],_=0,k=0;for(a=0;a<v;++a){if(s=n[a].label,l=n[a].major?e.major:e.minor,t.font=u=l.string,d=i[u]=i[u]||{data:{},gc:[]},h=l.lineHeight,c=f=0,ln(s)||sn(s)){if(sn(s))for(r=0,o=s.length;r<o;++r)g=s[r],ln(g)||sn(g)||(c=H.measureText(t,d.data,d.gc,c,g),f+=h)}else c=H.measureText(t,d.data,d.gc,c,s),f=h;b.push(c),x.push(f),y.push(h/2),_=Math.max(c,_),k=Math.max(f,k)}function w(t){return{width:b[t]||0,height:x[t]||0,offset:y[t]||0}}return function(t,e){H.each(t,(function(t){var n,i=t.gc,a=i.length/2;if(a>e){for(n=0;n<a;++n)delete t.data[i[n]];i.splice(0,a)}}))}(i,v),p=b.indexOf(_),m=x.indexOf(k),{first:w(0),last:w(v-1),widest:w(p),highest:w(m)}}function fn(t){return t.drawTicks?t.tickMarkLength:0}function gn(t){var e,n;return t.display?(e=H.options._parseFont(t),n=H.options.toPadding(t.padding),e.lineHeight+n.height):0}function pn(t,e){return H.extend(H.options._parseFont({fontFamily:un(e.fontFamily,t.fontFamily),fontSize:un(e.fontSize,t.fontSize),fontStyle:un(e.fontStyle,t.fontStyle),lineHeight:un(e.lineHeight,t.lineHeight)}),{color:H.options.resolve([e.fontColor,t.fontColor,N.global.defaultFontColor])})}function mn(t){var e=pn(t,t.minor);return{minor:e,major:t.major.enabled?pn(t,t.major):e}}function vn(t){var e,n,i,a=[];for(n=0,i=t.length;n<i;++n)void 0!==(e=t[n])._index&&a.push(e);return a}function bn(t,e,n,i){var a,r,o,s,l=un(n,0),u=Math.min(un(i,t.length),t.length),d=0;for(e=Math.ceil(e),i&&(e=(a=i-n)/Math.floor(a/e)),s=l;s<0;)d++,s=Math.round(l+d*e);for(r=Math.max(l,0);r<u;r++)o=t[r],r===s?(o._index=r,d++,s=Math.round(l+d*e)):delete o.label}N._set("scale",{display:!0,position:"left",offset:!1,gridLines:{display:!0,color:"rgba(0,0,0,0.1)",lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickMarkLength:10,zeroLineWidth:1,zeroLineColor:"rgba(0,0,0,0.25)",zeroLineBorderDash:[],zeroLineBorderDashOffset:0,offsetGridLines:!1,borderDash:[],borderDashOffset:0},scaleLabel:{display:!1,labelString:"",padding:{top:4,bottom:4}},ticks:{beginAtZero:!1,minRotation:0,maxRotation:50,mirror:!1,padding:0,reverse:!1,display:!0,autoSkip:!0,autoSkipPadding:0,labelOffset:0,callback:on.formatters.values,minor:{},major:{}}});var xn=K.extend({zeroLineIndex:0,getPadding:function(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}},getTicks:function(){return this._ticks},_getLabels:function(){var t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]},mergeTicksOptions:function(){},beforeUpdate:function(){H.callback(this.options.beforeUpdate,[this])},update:function(t,e,n){var i,a,r,o,s,l=this,u=l.options.ticks,d=u.sampleSize;if(l.beforeUpdate(),l.maxWidth=t,l.maxHeight=e,l.margins=H.extend({left:0,right:0,top:0,bottom:0},n),l._ticks=null,l.ticks=null,l._labelSizes=null,l._maxLabelLines=0,l.longestLabelWidth=0,l.longestTextCache=l.longestTextCache||{},l._gridLineItems=null,l._labelItems=null,l.beforeSetDimensions(),l.setDimensions(),l.afterSetDimensions(),l.beforeDataLimits(),l.determineDataLimits(),l.afterDataLimits(),l.beforeBuildTicks(),o=l.buildTicks()||[],(!(o=l.afterBuildTicks(o)||o)||!o.length)&&l.ticks)for(o=[],i=0,a=l.ticks.length;i<a;++i)o.push({value:l.ticks[i],major:!1});return l._ticks=o,s=d<o.length,r=l._convertTicksToLabels(s?function(t,e){for(var n=[],i=t.length/e,a=0,r=t.length;a<r;a+=i)n.push(t[Math.floor(a)]);return n}(o,d):o),l._configure(),l.beforeCalculateTickRotation(),l.calculateTickRotation(),l.afterCalculateTickRotation(),l.beforeFit(),l.fit(),l.afterFit(),l._ticksToDraw=u.display&&(u.autoSkip||"auto"===u.source)?l._autoSkip(o):o,s&&(r=l._convertTicksToLabels(l._ticksToDraw)),l.ticks=r,l.afterUpdate(),l.minSize},_configure:function(){var t,e,n=this,i=n.options.ticks.reverse;n.isHorizontal()?(t=n.left,e=n.right):(t=n.top,e=n.bottom,i=!i),n._startPixel=t,n._endPixel=e,n._reversePixels=i,n._length=e-t},afterUpdate:function(){H.callback(this.options.afterUpdate,[this])},beforeSetDimensions:function(){H.callback(this.options.beforeSetDimensions,[this])},setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0},afterSetDimensions:function(){H.callback(this.options.afterSetDimensions,[this])},beforeDataLimits:function(){H.callback(this.options.beforeDataLimits,[this])},determineDataLimits:H.noop,afterDataLimits:function(){H.callback(this.options.afterDataLimits,[this])},beforeBuildTicks:function(){H.callback(this.options.beforeBuildTicks,[this])},buildTicks:H.noop,afterBuildTicks:function(t){var e=this;return sn(t)&&t.length?H.callback(e.options.afterBuildTicks,[e,t]):(e.ticks=H.callback(e.options.afterBuildTicks,[e,e.ticks])||e.ticks,t)},beforeTickToLabelConversion:function(){H.callback(this.options.beforeTickToLabelConversion,[this])},convertTicksToLabels:function(){var t=this.options.ticks;this.ticks=this.ticks.map(t.userCallback||t.callback,this)},afterTickToLabelConversion:function(){H.callback(this.options.afterTickToLabelConversion,[this])},beforeCalculateTickRotation:function(){H.callback(this.options.beforeCalculateTickRotation,[this])},calculateTickRotation:function(){var t,e,n,i,a,r,o,s=this,l=s.options,u=l.ticks,d=s.getTicks().length,h=u.minRotation||0,c=u.maxRotation,f=h;!s._isVisible()||!u.display||h>=c||d<=1||!s.isHorizontal()?s.labelRotation=h:(e=(t=s._getLabelSizes()).widest.width,n=t.highest.height-t.highest.offset,i=Math.min(s.maxWidth,s.chart.width-e),e+6>(a=l.offset?s.maxWidth/d:i/(d-1))&&(a=i/(d-(l.offset?.5:1)),r=s.maxHeight-fn(l.gridLines)-u.padding-gn(l.scaleLabel),o=Math.sqrt(e*e+n*n),f=H.toDegrees(Math.min(Math.asin(Math.min((t.highest.height+6)/a,1)),Math.asin(Math.min(r/o,1))-Math.asin(n/o))),f=Math.max(h,Math.min(c,f))),s.labelRotation=f)},afterCalculateTickRotation:function(){H.callback(this.options.afterCalculateTickRotation,[this])},beforeFit:function(){H.callback(this.options.beforeFit,[this])},fit:function(){var t=this,e=t.minSize={width:0,height:0},n=t.chart,i=t.options,a=i.ticks,r=i.scaleLabel,o=i.gridLines,s=t._isVisible(),l="bottom"===i.position,u=t.isHorizontal();if(u?e.width=t.maxWidth:s&&(e.width=fn(o)+gn(r)),u?s&&(e.height=fn(o)+gn(r)):e.height=t.maxHeight,a.display&&s){var d=mn(a),h=t._getLabelSizes(),c=h.first,f=h.last,g=h.widest,p=h.highest,m=.4*d.minor.lineHeight,v=a.padding;if(u){var b=0!==t.labelRotation,x=H.toRadians(t.labelRotation),y=Math.cos(x),_=Math.sin(x),k=_*g.width+y*(p.height-(b?p.offset:0))+(b?0:m);e.height=Math.min(t.maxHeight,e.height+k+v);var w,M,S=t.getPixelForTick(0)-t.left,C=t.right-t.getPixelForTick(t.getTicks().length-1);b?(w=l?y*c.width+_*c.offset:_*(c.height-c.offset),M=l?_*(f.height-f.offset):y*f.width+_*f.offset):(w=c.width/2,M=f.width/2),t.paddingLeft=Math.max((w-S)*t.width/(t.width-S),0)+3,t.paddingRight=Math.max((M-C)*t.width/(t.width-C),0)+3}else{var P=a.mirror?0:g.width+v+m;e.width=Math.min(t.maxWidth,e.width+P),t.paddingTop=c.height/2,t.paddingBottom=f.height/2}}t.handleMargins(),u?(t.width=t._length=n.width-t.margins.left-t.margins.right,t.height=e.height):(t.width=e.width,t.height=t._length=n.height-t.margins.top-t.margins.bottom)},handleMargins:function(){var t=this;t.margins&&(t.margins.left=Math.max(t.paddingLeft,t.margins.left),t.margins.top=Math.max(t.paddingTop,t.margins.top),t.margins.right=Math.max(t.paddingRight,t.margins.right),t.margins.bottom=Math.max(t.paddingBottom,t.margins.bottom))},afterFit:function(){H.callback(this.options.afterFit,[this])},isHorizontal:function(){var t=this.options.position;return"top"===t||"bottom"===t},isFullWidth:function(){return this.options.fullWidth},getRightValue:function(t){if(ln(t))return NaN;if(("number"==typeof t||t instanceof Number)&&!isFinite(t))return NaN;if(t)if(this.isHorizontal()){if(void 0!==t.x)return this.getRightValue(t.x)}else if(void 0!==t.y)return this.getRightValue(t.y);return t},_convertTicksToLabels:function(t){var e,n,i,a=this;for(a.ticks=t.map((function(t){return t.value})),a.beforeTickToLabelConversion(),e=a.convertTicksToLabels(t)||a.ticks,a.afterTickToLabelConversion(),n=0,i=t.length;n<i;++n)t[n].label=e[n];return e},_getLabelSizes:function(){var t=this,e=t._labelSizes;return e||(t._labelSizes=e=cn(t.ctx,mn(t.options.ticks),t.getTicks(),t.longestTextCache),t.longestLabelWidth=e.widest.width),e},_parseValue:function(t){var e,n,i,a;return sn(t)?(e=+this.getRightValue(t[0]),n=+this.getRightValue(t[1]),i=Math.min(e,n),a=Math.max(e,n)):(e=void 0,n=t=+this.getRightValue(t),i=t,a=t),{min:i,max:a,start:e,end:n}},_getScaleLabel:function(t){var e=this._parseValue(t);return void 0!==e.start?"["+e.start+", "+e.end+"]":+this.getRightValue(t)},getLabelForIndex:H.noop,getPixelForValue:H.noop,getValueForPixel:H.noop,getPixelForTick:function(t){var e=this.options.offset,n=this._ticks.length,i=1/Math.max(n-(e?0:1),1);return t<0||t>n-1?null:this.getPixelForDecimal(t*i+(e?i/2:0))},getPixelForDecimal:function(t){return this._reversePixels&&(t=1-t),this._startPixel+t*this._length},getDecimalForPixel:function(t){var e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e},getBasePixel:function(){return this.getPixelForValue(this.getBaseValue())},getBaseValue:function(){var t=this.min,e=this.max;return this.beginAtZero?0:t<0&&e<0?e:t>0&&e>0?t:0},_autoSkip:function(t){var e,n,i,a,r=this.options.ticks,o=this._length,s=r.maxTicksLimit||o/this._tickSize()+1,l=r.major.enabled?function(t){var e,n,i=[];for(e=0,n=t.length;e<n;e++)t[e].major&&i.push(e);return i}(t):[],u=l.length,d=l[0],h=l[u-1];if(u>s)return function(t,e,n){var i,a,r=0,o=e[0];for(n=Math.ceil(n),i=0;i<t.length;i++)a=t[i],i===o?(a._index=i,o=e[++r*n]):delete a.label}(t,l,u/s),vn(t);if(i=function(t,e,n,i){var a,r,o,s,l=function(t){var e,n,i=t.length;if(i<2)return!1;for(n=t[0],e=1;e<i;++e)if(t[e]-t[e-1]!==n)return!1;return n}(t),u=(e.length-1)/i;if(!l)return Math.max(u,1);for(o=0,s=(a=H.math._factorize(l)).length-1;o<s;o++)if((r=a[o])>u)return r;return Math.max(u,1)}(l,t,0,s),u>0){for(e=0,n=u-1;e<n;e++)bn(t,i,l[e],l[e+1]);return a=u>1?(h-d)/(u-1):null,bn(t,i,H.isNullOrUndef(a)?0:d-a,d),bn(t,i,h,H.isNullOrUndef(a)?t.length:h+a),vn(t)}return bn(t,i),vn(t)},_tickSize:function(){var t=this.options.ticks,e=H.toRadians(this.labelRotation),n=Math.abs(Math.cos(e)),i=Math.abs(Math.sin(e)),a=this._getLabelSizes(),r=t.autoSkipPadding||0,o=a?a.widest.width+r:0,s=a?a.highest.height+r:0;return this.isHorizontal()?s*n>o*i?o/n:s/i:s*i<o*n?s/n:o/i},_isVisible:function(){var t,e,n,i=this.chart,a=this.options.display;if("auto"!==a)return!!a;for(t=0,e=i.data.datasets.length;t<e;++t)if(i.isDatasetVisible(t)&&((n=i.getDatasetMeta(t)).xAxisID===this.id||n.yAxisID===this.id))return!0;return!1},_computeGridLineItems:function(t){var e,n,i,a,r,o,s,l,u,d,h,c,f,g,p,m,v,b=this,x=b.chart,y=b.options,_=y.gridLines,k=y.position,w=_.offsetGridLines,M=b.isHorizontal(),S=b._ticksToDraw,C=S.length+(w?1:0),P=fn(_),A=[],D=_.drawBorder?dn(_.lineWidth,0,0):0,T=D/2,I=H._alignPixel,F=function(t){return I(x,t,D)};for("top"===k?(e=F(b.bottom),s=b.bottom-P,u=e-T,h=F(t.top)+T,f=t.bottom):"bottom"===k?(e=F(b.top),h=t.top,f=F(t.bottom)-T,s=e+T,u=b.top+P):"left"===k?(e=F(b.right),o=b.right-P,l=e-T,d=F(t.left)+T,c=t.right):(e=F(b.left),d=t.left,c=F(t.right)-T,o=e+T,l=b.left+P),n=0;n<C;++n)i=S[n]||{},ln(i.label)&&n<S.length||(n===b.zeroLineIndex&&y.offset===w?(g=_.zeroLineWidth,p=_.zeroLineColor,m=_.zeroLineBorderDash||[],v=_.zeroLineBorderDashOffset||0):(g=dn(_.lineWidth,n,1),p=dn(_.color,n,"rgba(0,0,0,0.1)"),m=_.borderDash||[],v=_.borderDashOffset||0),void 0!==(a=hn(b,i._index||n,w))&&(r=I(x,a,g),M?o=l=d=c=r:s=u=h=f=r,A.push({tx1:o,ty1:s,tx2:l,ty2:u,x1:d,y1:h,x2:c,y2:f,width:g,color:p,borderDash:m,borderDashOffset:v})));return A.ticksLength=C,A.borderValue=e,A},_computeLabelItems:function(){var t,e,n,i,a,r,o,s,l,u,d,h,c=this,f=c.options,g=f.ticks,p=f.position,m=g.mirror,v=c.isHorizontal(),b=c._ticksToDraw,x=mn(g),y=g.padding,_=fn(f.gridLines),k=-H.toRadians(c.labelRotation),w=[];for("top"===p?(r=c.bottom-_-y,o=k?"left":"center"):"bottom"===p?(r=c.top+_+y,o=k?"right":"center"):"left"===p?(a=c.right-(m?0:_)-y,o=m?"left":"right"):(a=c.left+(m?0:_)+y,o=m?"right":"left"),t=0,e=b.length;t<e;++t)i=(n=b[t]).label,ln(i)||(s=c.getPixelForTick(n._index||t)+g.labelOffset,u=(l=n.major?x.major:x.minor).lineHeight,d=sn(i)?i.length:1,v?(a=s,h="top"===p?((k?1:.5)-d)*u:(k?0:.5)*u):(r=s,h=(1-d)*u/2),w.push({x:a,y:r,rotation:k,label:i,font:l,textOffset:h,textAlign:o}));return w},_drawGrid:function(t){var e=this,n=e.options.gridLines;if(n.display){var i,a,r,o,s,l=e.ctx,u=e.chart,d=H._alignPixel,h=n.drawBorder?dn(n.lineWidth,0,0):0,c=e._gridLineItems||(e._gridLineItems=e._computeGridLineItems(t));for(r=0,o=c.length;r<o;++r)i=(s=c[r]).width,a=s.color,i&&a&&(l.save(),l.lineWidth=i,l.strokeStyle=a,l.setLineDash&&(l.setLineDash(s.borderDash),l.lineDashOffset=s.borderDashOffset),l.beginPath(),n.drawTicks&&(l.moveTo(s.tx1,s.ty1),l.lineTo(s.tx2,s.ty2)),n.drawOnChartArea&&(l.moveTo(s.x1,s.y1),l.lineTo(s.x2,s.y2)),l.stroke(),l.restore());if(h){var f,g,p,m,v=h,b=dn(n.lineWidth,c.ticksLength-1,1),x=c.borderValue;e.isHorizontal()?(f=d(u,e.left,v)-v/2,g=d(u,e.right,b)+b/2,p=m=x):(p=d(u,e.top,v)-v/2,m=d(u,e.bottom,b)+b/2,f=g=x),l.lineWidth=h,l.strokeStyle=dn(n.color,0),l.beginPath(),l.moveTo(f,p),l.lineTo(g,m),l.stroke()}}},_drawLabels:function(){var t=this;if(t.options.ticks.display){var e,n,i,a,r,o,s,l,u=t.ctx,d=t._labelItems||(t._labelItems=t._computeLabelItems());for(e=0,i=d.length;e<i;++e){if(o=(r=d[e]).font,u.save(),u.translate(r.x,r.y),u.rotate(r.rotation),u.font=o.string,u.fillStyle=o.color,u.textBaseline="middle",u.textAlign=r.textAlign,s=r.label,l=r.textOffset,sn(s))for(n=0,a=s.length;n<a;++n)u.fillText(""+s[n],0,l),l+=o.lineHeight;else u.fillText(s,0,l);u.restore()}}},_drawTitle:function(){var t=this,e=t.ctx,n=t.options,i=n.scaleLabel;if(i.display){var a,r,o=un(i.fontColor,N.global.defaultFontColor),s=H.options._parseFont(i),l=H.options.toPadding(i.padding),u=s.lineHeight/2,d=n.position,h=0;if(t.isHorizontal())a=t.left+t.width/2,r="bottom"===d?t.bottom-u-l.bottom:t.top+u+l.top;else{var c="left"===d;a=c?t.left+u+l.top:t.right-u-l.top,r=t.top+t.height/2,h=c?-.5*Math.PI:.5*Math.PI}e.save(),e.translate(a,r),e.rotate(h),e.textAlign="center",e.textBaseline="middle",e.fillStyle=o,e.font=s.string,e.fillText(i.labelString,0,0),e.restore()}},draw:function(t){this._isVisible()&&(this._drawGrid(t),this._drawTitle(),this._drawLabels())},_layers:function(){var t=this,e=t.options,n=e.ticks&&e.ticks.z||0,i=e.gridLines&&e.gridLines.z||0;return t._isVisible()&&n!==i&&t.draw===t._draw?[{z:i,draw:function(){t._drawGrid.apply(t,arguments),t._drawTitle.apply(t,arguments)}},{z:n,draw:function(){t._drawLabels.apply(t,arguments)}}]:[{z:n,draw:function(){t.draw.apply(t,arguments)}}]},_getMatchingVisibleMetas:function(t){var e=this,n=e.isHorizontal();return e.chart._getSortedVisibleDatasetMetas().filter((function(i){return(!t||i.type===t)&&(n?i.xAxisID===e.id:i.yAxisID===e.id)}))}});xn.prototype._draw=xn.prototype.draw;var yn=xn,_n=H.isNullOrUndef,kn=yn.extend({determineDataLimits:function(){var t,e=this,n=e._getLabels(),i=e.options.ticks,a=i.min,r=i.max,o=0,s=n.length-1;void 0!==a&&(t=n.indexOf(a))>=0&&(o=t),void 0!==r&&(t=n.indexOf(r))>=0&&(s=t),e.minIndex=o,e.maxIndex=s,e.min=n[o],e.max=n[s]},buildTicks:function(){var t=this._getLabels(),e=this.minIndex,n=this.maxIndex;this.ticks=0===e&&n===t.length-1?t:t.slice(e,n+1)},getLabelForIndex:function(t,e){var n=this.chart;return n.getDatasetMeta(e).controller._getValueScaleId()===this.id?this.getRightValue(n.data.datasets[e].data[t]):this._getLabels()[t]},_configure:function(){var t=this,e=t.options.offset,n=t.ticks;yn.prototype._configure.call(t),t.isHorizontal()||(t._reversePixels=!t._reversePixels),n&&(t._startValue=t.minIndex-(e?.5:0),t._valueRange=Math.max(n.length-(e?0:1),1))},getPixelForValue:function(t,e,n){var i,a,r,o=this;return _n(e)||_n(n)||(t=o.chart.data.datasets[n].data[e]),_n(t)||(i=o.isHorizontal()?t.x:t.y),(void 0!==i||void 0!==t&&isNaN(e))&&(a=o._getLabels(),t=H.valueOrDefault(i,t),e=-1!==(r=a.indexOf(t))?r:e,isNaN(e)&&(e=t)),o.getPixelForDecimal((e-o._startValue)/o._valueRange)},getPixelForTick:function(t){var e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t],t+this.minIndex)},getValueForPixel:function(t){var e=Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange);return Math.min(Math.max(e,0),this.ticks.length-1)},getBasePixel:function(){return this.bottom}}),wn={position:"bottom"};kn._defaults=wn;var Mn=H.noop,Sn=H.isNullOrUndef;var Cn=yn.extend({getRightValue:function(t){return"string"==typeof t?+t:yn.prototype.getRightValue.call(this,t)},handleTickRangeOptions:function(){var t=this,e=t.options.ticks;if(e.beginAtZero){var n=H.sign(t.min),i=H.sign(t.max);n<0&&i<0?t.max=0:n>0&&i>0&&(t.min=0)}var a=void 0!==e.min||void 0!==e.suggestedMin,r=void 0!==e.max||void 0!==e.suggestedMax;void 0!==e.min?t.min=e.min:void 0!==e.suggestedMin&&(null===t.min?t.min=e.suggestedMin:t.min=Math.min(t.min,e.suggestedMin)),void 0!==e.max?t.max=e.max:void 0!==e.suggestedMax&&(null===t.max?t.max=e.suggestedMax:t.max=Math.max(t.max,e.suggestedMax)),a!==r&&t.min>=t.max&&(a?t.max=t.min+1:t.min=t.max-1),t.min===t.max&&(t.max++,e.beginAtZero||t.min--)},getTickLimit:function(){var t,e=this.options.ticks,n=e.stepSize,i=e.maxTicksLimit;return n?t=Math.ceil(this.max/n)-Math.floor(this.min/n)+1:(t=this._computeTickLimit(),i=i||11),i&&(t=Math.min(i,t)),t},_computeTickLimit:function(){return Number.POSITIVE_INFINITY},handleDirectionalChanges:Mn,buildTicks:function(){var t=this,e=t.options.ticks,n=t.getTickLimit(),i={maxTicks:n=Math.max(2,n),min:e.min,max:e.max,precision:e.precision,stepSize:H.valueOrDefault(e.fixedStepSize,e.stepSize)},a=t.ticks=function(t,e){var n,i,a,r,o=[],s=t.stepSize,l=s||1,u=t.maxTicks-1,d=t.min,h=t.max,c=t.precision,f=e.min,g=e.max,p=H.niceNum((g-f)/u/l)*l;if(p<1e-14&&Sn(d)&&Sn(h))return[f,g];(r=Math.ceil(g/p)-Math.floor(f/p))>u&&(p=H.niceNum(r*p/u/l)*l),s||Sn(c)?n=Math.pow(10,H._decimalPlaces(p)):(n=Math.pow(10,c),p=Math.ceil(p*n)/n),i=Math.floor(f/p)*p,a=Math.ceil(g/p)*p,s&&(!Sn(d)&&H.almostWhole(d/p,p/1e3)&&(i=d),!Sn(h)&&H.almostWhole(h/p,p/1e3)&&(a=h)),r=(a-i)/p,r=H.almostEquals(r,Math.round(r),p/1e3)?Math.round(r):Math.ceil(r),i=Math.round(i*n)/n,a=Math.round(a*n)/n,o.push(Sn(d)?i:d);for(var m=1;m<r;++m)o.push(Math.round((i+m*p)*n)/n);return o.push(Sn(h)?a:h),o}(i,t);t.handleDirectionalChanges(),t.max=H.max(a),t.min=H.min(a),e.reverse?(a.reverse(),t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max)},convertTicksToLabels:function(){var t=this;t.ticksAsNumbers=t.ticks.slice(),t.zeroLineIndex=t.ticks.indexOf(0),yn.prototype.convertTicksToLabels.call(t)},_configure:function(){var t,e=this,n=e.getTicks(),i=e.min,a=e.max;yn.prototype._configure.call(e),e.options.offset&&n.length&&(i-=t=(a-i)/Math.max(n.length-1,1)/2,a+=t),e._startValue=i,e._endValue=a,e._valueRange=a-i}}),Pn={position:"left",ticks:{callback:on.formatters.linear}};function An(t,e,n,i){var a,r,o=t.options,s=function(t,e,n){var i=[n.type,void 0===e&&void 0===n.stack?n.index:"",n.stack].join(".");return void 0===t[i]&&(t[i]={pos:[],neg:[]}),t[i]}(e,o.stacked,n),l=s.pos,u=s.neg,d=i.length;for(a=0;a<d;++a)r=t._parseValue(i[a]),isNaN(r.min)||isNaN(r.max)||n.data[a].hidden||(l[a]=l[a]||0,u[a]=u[a]||0,o.relativePoints?l[a]=100:r.min<0||r.max<0?u[a]+=r.min:l[a]+=r.max)}function Dn(t,e,n){var i,a,r=n.length;for(i=0;i<r;++i)a=t._parseValue(n[i]),isNaN(a.min)||isNaN(a.max)||e.data[i].hidden||(t.min=Math.min(t.min,a.min),t.max=Math.max(t.max,a.max))}var Tn=Cn.extend({determineDataLimits:function(){var t,e,n,i,a=this,r=a.options,o=a.chart.data.datasets,s=a._getMatchingVisibleMetas(),l=r.stacked,u={},d=s.length;if(a.min=Number.POSITIVE_INFINITY,a.max=Number.NEGATIVE_INFINITY,void 0===l)for(t=0;!l&&t<d;++t)l=void 0!==(e=s[t]).stack;for(t=0;t<d;++t)n=o[(e=s[t]).index].data,l?An(a,u,e,n):Dn(a,e,n);H.each(u,(function(t){i=t.pos.concat(t.neg),a.min=Math.min(a.min,H.min(i)),a.max=Math.max(a.max,H.max(i))})),a.min=H.isFinite(a.min)&&!isNaN(a.min)?a.min:0,a.max=H.isFinite(a.max)&&!isNaN(a.max)?a.max:1,a.handleTickRangeOptions()},_computeTickLimit:function(){var t;return this.isHorizontal()?Math.ceil(this.width/40):(t=H.options._parseFont(this.options.ticks),Math.ceil(this.height/t.lineHeight))},handleDirectionalChanges:function(){this.isHorizontal()||this.ticks.reverse()},getLabelForIndex:function(t,e){return this._getScaleLabel(this.chart.data.datasets[e].data[t])},getPixelForValue:function(t){return this.getPixelForDecimal((+this.getRightValue(t)-this._startValue)/this._valueRange)},getValueForPixel:function(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange},getPixelForTick:function(t){var e=this.ticksAsNumbers;return t<0||t>e.length-1?null:this.getPixelForValue(e[t])}}),In=Pn;Tn._defaults=In;var Fn=H.valueOrDefault,On=H.math.log10;var Ln={position:"left",ticks:{callback:on.formatters.logarithmic}};function Rn(t,e){return H.isFinite(t)&&t>=0?t:e}var zn=yn.extend({determineDataLimits:function(){var t,e,n,i,a,r,o=this,s=o.options,l=o.chart,u=l.data.datasets,d=o.isHorizontal();function h(t){return d?t.xAxisID===o.id:t.yAxisID===o.id}o.min=Number.POSITIVE_INFINITY,o.max=Number.NEGATIVE_INFINITY,o.minNotZero=Number.POSITIVE_INFINITY;var c=s.stacked;if(void 0===c)for(t=0;t<u.length;t++)if(e=l.getDatasetMeta(t),l.isDatasetVisible(t)&&h(e)&&void 0!==e.stack){c=!0;break}if(s.stacked||c){var f={};for(t=0;t<u.length;t++){var g=[(e=l.getDatasetMeta(t)).type,void 0===s.stacked&&void 0===e.stack?t:"",e.stack].join(".");if(l.isDatasetVisible(t)&&h(e))for(void 0===f[g]&&(f[g]=[]),a=0,r=(i=u[t].data).length;a<r;a++){var p=f[g];n=o._parseValue(i[a]),isNaN(n.min)||isNaN(n.max)||e.data[a].hidden||n.min<0||n.max<0||(p[a]=p[a]||0,p[a]+=n.max)}}H.each(f,(function(t){if(t.length>0){var e=H.min(t),n=H.max(t);o.min=Math.min(o.min,e),o.max=Math.max(o.max,n)}}))}else for(t=0;t<u.length;t++)if(e=l.getDatasetMeta(t),l.isDatasetVisible(t)&&h(e))for(a=0,r=(i=u[t].data).length;a<r;a++)n=o._parseValue(i[a]),isNaN(n.min)||isNaN(n.max)||e.data[a].hidden||n.min<0||n.max<0||(o.min=Math.min(n.min,o.min),o.max=Math.max(n.max,o.max),0!==n.min&&(o.minNotZero=Math.min(n.min,o.minNotZero)));o.min=H.isFinite(o.min)?o.min:null,o.max=H.isFinite(o.max)?o.max:null,o.minNotZero=H.isFinite(o.minNotZero)?o.minNotZero:null,this.handleTickRangeOptions()},handleTickRangeOptions:function(){var t=this,e=t.options.ticks;t.min=Rn(e.min,t.min),t.max=Rn(e.max,t.max),t.min===t.max&&(0!==t.min&&null!==t.min?(t.min=Math.pow(10,Math.floor(On(t.min))-1),t.max=Math.pow(10,Math.floor(On(t.max))+1)):(t.min=1,t.max=10)),null===t.min&&(t.min=Math.pow(10,Math.floor(On(t.max))-1)),null===t.max&&(t.max=0!==t.min?Math.pow(10,Math.floor(On(t.min))+1):10),null===t.minNotZero&&(t.min>0?t.minNotZero=t.min:t.max<1?t.minNotZero=Math.pow(10,Math.floor(On(t.max))):t.minNotZero=1)},buildTicks:function(){var t=this,e=t.options.ticks,n=!t.isHorizontal(),i={min:Rn(e.min),max:Rn(e.max)},a=t.ticks=function(t,e){var n,i,a=[],r=Fn(t.min,Math.pow(10,Math.floor(On(e.min)))),o=Math.floor(On(e.max)),s=Math.ceil(e.max/Math.pow(10,o));0===r?(n=Math.floor(On(e.minNotZero)),i=Math.floor(e.minNotZero/Math.pow(10,n)),a.push(r),r=i*Math.pow(10,n)):(n=Math.floor(On(r)),i=Math.floor(r/Math.pow(10,n)));var l=n<0?Math.pow(10,Math.abs(n)):1;do{a.push(r),10===++i&&(i=1,l=++n>=0?1:l),r=Math.round(i*Math.pow(10,n)*l)/l}while(n<o||n===o&&i<s);var u=Fn(t.max,r);return a.push(u),a}(i,t);t.max=H.max(a),t.min=H.min(a),e.reverse?(n=!n,t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max),n&&a.reverse()},convertTicksToLabels:function(){this.tickValues=this.ticks.slice(),yn.prototype.convertTicksToLabels.call(this)},getLabelForIndex:function(t,e){return this._getScaleLabel(this.chart.data.datasets[e].data[t])},getPixelForTick:function(t){var e=this.tickValues;return t<0||t>e.length-1?null:this.getPixelForValue(e[t])},_getFirstTickValue:function(t){var e=Math.floor(On(t));return Math.floor(t/Math.pow(10,e))*Math.pow(10,e)},_configure:function(){var t=this,e=t.min,n=0;yn.prototype._configure.call(t),0===e&&(e=t._getFirstTickValue(t.minNotZero),n=Fn(t.options.ticks.fontSize,N.global.defaultFontSize)/t._length),t._startValue=On(e),t._valueOffset=n,t._valueRange=(On(t.max)-On(e))/(1-n)},getPixelForValue:function(t){var e=this,n=0;return(t=+e.getRightValue(t))>e.min&&t>0&&(n=(On(t)-e._startValue)/e._valueRange+e._valueOffset),e.getPixelForDecimal(n)},getValueForPixel:function(t){var e=this,n=e.getDecimalForPixel(t);return 0===n&&0===e.min?0:Math.pow(10,e._startValue+(n-e._valueOffset)*e._valueRange)}}),Nn=Ln;zn._defaults=Nn;var Bn=H.valueOrDefault,En=H.valueAtIndexOrDefault,Wn=H.options.resolve,Vn={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,color:"rgba(0,0,0,0.1)",lineWidth:1,borderDash:[],borderDashOffset:0},gridLines:{circular:!1},ticks:{showLabelBackdrop:!0,backdropColor:"rgba(255,255,255,0.75)",backdropPaddingY:2,backdropPaddingX:2,callback:on.formatters.linear},pointLabels:{display:!0,fontSize:10,callback:function(t){return t}}};function Hn(t){var e=t.ticks;return e.display&&t.display?Bn(e.fontSize,N.global.defaultFontSize)+2*e.backdropPaddingY:0}function jn(t,e,n,i,a){return t===i||t===a?{start:e-n/2,end:e+n/2}:t<i||t>a?{start:e-n,end:e}:{start:e,end:e+n}}function qn(t){return 0===t||180===t?"center":t<180?"left":"right"}function Un(t,e,n,i){var a,r,o=n.y+i/2;if(H.isArray(e))for(a=0,r=e.length;a<r;++a)t.fillText(e[a],n.x,o),o+=i;else t.fillText(e,n.x,o)}function Yn(t,e,n){90===t||270===t?n.y-=e.h/2:(t>270||t<90)&&(n.y-=e.h)}function Gn(t){return H.isNumber(t)?t:0}var Xn=Cn.extend({setDimensions:function(){var t=this;t.width=t.maxWidth,t.height=t.maxHeight,t.paddingTop=Hn(t.options)/2,t.xCenter=Math.floor(t.width/2),t.yCenter=Math.floor((t.height-t.paddingTop)/2),t.drawingArea=Math.min(t.height-t.paddingTop,t.width)/2},determineDataLimits:function(){var t=this,e=t.chart,n=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;H.each(e.data.datasets,(function(a,r){if(e.isDatasetVisible(r)){var o=e.getDatasetMeta(r);H.each(a.data,(function(e,a){var r=+t.getRightValue(e);isNaN(r)||o.data[a].hidden||(n=Math.min(r,n),i=Math.max(r,i))}))}})),t.min=n===Number.POSITIVE_INFINITY?0:n,t.max=i===Number.NEGATIVE_INFINITY?0:i,t.handleTickRangeOptions()},_computeTickLimit:function(){return Math.ceil(this.drawingArea/Hn(this.options))},convertTicksToLabels:function(){var t=this;Cn.prototype.convertTicksToLabels.call(t),t.pointLabels=t.chart.data.labels.map((function(){var e=H.callback(t.options.pointLabels.callback,arguments,t);return e||0===e?e:""}))},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},fit:function(){var t=this.options;t.display&&t.pointLabels.display?function(t){var e,n,i,a=H.options._parseFont(t.options.pointLabels),r={l:0,r:t.width,t:0,b:t.height-t.paddingTop},o={};t.ctx.font=a.string,t._pointLabelSizes=[];var s,l,u,d=t.chart.data.labels.length;for(e=0;e<d;e++){i=t.getPointPosition(e,t.drawingArea+5),s=t.ctx,l=a.lineHeight,u=t.pointLabels[e],n=H.isArray(u)?{w:H.longestText(s,s.font,u),h:u.length*l}:{w:s.measureText(u).width,h:l},t._pointLabelSizes[e]=n;var h=t.getIndexAngle(e),c=H.toDegrees(h)%360,f=jn(c,i.x,n.w,0,180),g=jn(c,i.y,n.h,90,270);f.start<r.l&&(r.l=f.start,o.l=h),f.end>r.r&&(r.r=f.end,o.r=h),g.start<r.t&&(r.t=g.start,o.t=h),g.end>r.b&&(r.b=g.end,o.b=h)}t.setReductions(t.drawingArea,r,o)}(this):this.setCenterPoint(0,0,0,0)},setReductions:function(t,e,n){var i=this,a=e.l/Math.sin(n.l),r=Math.max(e.r-i.width,0)/Math.sin(n.r),o=-e.t/Math.cos(n.t),s=-Math.max(e.b-(i.height-i.paddingTop),0)/Math.cos(n.b);a=Gn(a),r=Gn(r),o=Gn(o),s=Gn(s),i.drawingArea=Math.min(Math.floor(t-(a+r)/2),Math.floor(t-(o+s)/2)),i.setCenterPoint(a,r,o,s)},setCenterPoint:function(t,e,n,i){var a=this,r=a.width-e-a.drawingArea,o=t+a.drawingArea,s=n+a.drawingArea,l=a.height-a.paddingTop-i-a.drawingArea;a.xCenter=Math.floor((o+r)/2+a.left),a.yCenter=Math.floor((s+l)/2+a.top+a.paddingTop)},getIndexAngle:function(t){var e=this.chart,n=(t*(360/e.data.labels.length)+((e.options||{}).startAngle||0))%360;return(n<0?n+360:n)*Math.PI*2/360},getDistanceFromCenterForValue:function(t){var e=this;if(H.isNullOrUndef(t))return NaN;var n=e.drawingArea/(e.max-e.min);return e.options.ticks.reverse?(e.max-t)*n:(t-e.min)*n},getPointPosition:function(t,e){var n=this.getIndexAngle(t)-Math.PI/2;return{x:Math.cos(n)*e+this.xCenter,y:Math.sin(n)*e+this.yCenter}},getPointPositionForValue:function(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))},getBasePosition:function(t){var e=this.min,n=this.max;return this.getPointPositionForValue(t||0,this.beginAtZero?0:e<0&&n<0?n:e>0&&n>0?e:0)},_drawGrid:function(){var t,e,n,i=this,a=i.ctx,r=i.options,o=r.gridLines,s=r.angleLines,l=Bn(s.lineWidth,o.lineWidth),u=Bn(s.color,o.color);if(r.pointLabels.display&&function(t){var e=t.ctx,n=t.options,i=n.pointLabels,a=Hn(n),r=t.getDistanceFromCenterForValue(n.ticks.reverse?t.min:t.max),o=H.options._parseFont(i);e.save(),e.font=o.string,e.textBaseline="middle";for(var s=t.chart.data.labels.length-1;s>=0;s--){var l=0===s?a/2:0,u=t.getPointPosition(s,r+l+5),d=En(i.fontColor,s,N.global.defaultFontColor);e.fillStyle=d;var h=t.getIndexAngle(s),c=H.toDegrees(h);e.textAlign=qn(c),Yn(c,t._pointLabelSizes[s],u),Un(e,t.pointLabels[s],u,o.lineHeight)}e.restore()}(i),o.display&&H.each(i.ticks,(function(t,n){0!==n&&(e=i.getDistanceFromCenterForValue(i.ticksAsNumbers[n]),function(t,e,n,i){var a,r=t.ctx,o=e.circular,s=t.chart.data.labels.length,l=En(e.color,i-1),u=En(e.lineWidth,i-1);if((o||s)&&l&&u){if(r.save(),r.strokeStyle=l,r.lineWidth=u,r.setLineDash&&(r.setLineDash(e.borderDash||[]),r.lineDashOffset=e.borderDashOffset||0),r.beginPath(),o)r.arc(t.xCenter,t.yCenter,n,0,2*Math.PI);else{a=t.getPointPosition(0,n),r.moveTo(a.x,a.y);for(var d=1;d<s;d++)a=t.getPointPosition(d,n),r.lineTo(a.x,a.y)}r.closePath(),r.stroke(),r.restore()}}(i,o,e,n))})),s.display&&l&&u){for(a.save(),a.lineWidth=l,a.strokeStyle=u,a.setLineDash&&(a.setLineDash(Wn([s.borderDash,o.borderDash,[]])),a.lineDashOffset=Wn([s.borderDashOffset,o.borderDashOffset,0])),t=i.chart.data.labels.length-1;t>=0;t--)e=i.getDistanceFromCenterForValue(r.ticks.reverse?i.min:i.max),n=i.getPointPosition(t,e),a.beginPath(),a.moveTo(i.xCenter,i.yCenter),a.lineTo(n.x,n.y),a.stroke();a.restore()}},_drawLabels:function(){var t=this,e=t.ctx,n=t.options.ticks;if(n.display){var i,a,r=t.getIndexAngle(0),o=H.options._parseFont(n),s=Bn(n.fontColor,N.global.defaultFontColor);e.save(),e.font=o.string,e.translate(t.xCenter,t.yCenter),e.rotate(r),e.textAlign="center",e.textBaseline="middle",H.each(t.ticks,(function(r,l){(0!==l||n.reverse)&&(i=t.getDistanceFromCenterForValue(t.ticksAsNumbers[l]),n.showLabelBackdrop&&(a=e.measureText(r).width,e.fillStyle=n.backdropColor,e.fillRect(-a/2-n.backdropPaddingX,-i-o.size/2-n.backdropPaddingY,a+2*n.backdropPaddingX,o.size+2*n.backdropPaddingY)),e.fillStyle=s,e.fillText(r,0,-i))})),e.restore()}},_drawTitle:H.noop}),Kn=Vn;Xn._defaults=Kn;var Zn=H._deprecated,$n=H.options.resolve,Jn=H.valueOrDefault,Qn=Number.MIN_SAFE_INTEGER||-9007199254740991,ti=Number.MAX_SAFE_INTEGER||9007199254740991,ei={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},ni=Object.keys(ei);function ii(t,e){return t-e}function ai(t){return H.valueOrDefault(t.time.min,t.ticks.min)}function ri(t){return H.valueOrDefault(t.time.max,t.ticks.max)}function oi(t,e,n,i){var a=function(t,e,n){for(var i,a,r,o=0,s=t.length-1;o>=0&&o<=s;){if(a=t[(i=o+s>>1)-1]||null,r=t[i],!a)return{lo:null,hi:r};if(r[e]<n)o=i+1;else{if(!(a[e]>n))return{lo:a,hi:r};s=i-1}}return{lo:r,hi:null}}(t,e,n),r=a.lo?a.hi?a.lo:t[t.length-2]:t[0],o=a.lo?a.hi?a.hi:t[t.length-1]:t[1],s=o[e]-r[e],l=s?(n-r[e])/s:0,u=(o[i]-r[i])*l;return r[i]+u}function si(t,e){var n=t._adapter,i=t.options.time,a=i.parser,r=a||i.format,o=e;return"function"==typeof a&&(o=a(o)),H.isFinite(o)||(o="string"==typeof r?n.parse(o,r):n.parse(o)),null!==o?+o:(a||"function"!=typeof r||(o=r(e),H.isFinite(o)||(o=n.parse(o))),o)}function li(t,e){if(H.isNullOrUndef(e))return null;var n=t.options.time,i=si(t,t.getRightValue(e));return null===i?i:(n.round&&(i=+t._adapter.startOf(i,n.round)),i)}function ui(t,e,n,i){var a,r,o,s=ni.length;for(a=ni.indexOf(t);a<s-1;++a)if(o=(r=ei[ni[a]]).steps?r.steps:ti,r.common&&Math.ceil((n-e)/(o*r.size))<=i)return ni[a];return ni[s-1]}function di(t,e,n){var i,a,r=[],o={},s=e.length;for(i=0;i<s;++i)o[a=e[i]]=i,r.push({value:a,major:!1});return 0!==s&&n?function(t,e,n,i){var a,r,o=t._adapter,s=+o.startOf(e[0].value,i),l=e[e.length-1].value;for(a=s;a<=l;a=+o.add(a,1,i))(r=n[a])>=0&&(e[r].major=!0);return e}(t,r,o,n):r}var hi=yn.extend({initialize:function(){this.mergeTicksOptions(),yn.prototype.initialize.call(this)},update:function(){var t=this,e=t.options,n=e.time||(e.time={}),i=t._adapter=new rn._date(e.adapters.date);return Zn("time scale",n.format,"time.format","time.parser"),Zn("time scale",n.min,"time.min","ticks.min"),Zn("time scale",n.max,"time.max","ticks.max"),H.mergeIf(n.displayFormats,i.formats()),yn.prototype.update.apply(t,arguments)},getRightValue:function(t){return t&&void 0!==t.t&&(t=t.t),yn.prototype.getRightValue.call(this,t)},determineDataLimits:function(){var t,e,n,i,a,r,o,s=this,l=s.chart,u=s._adapter,d=s.options,h=d.time.unit||"day",c=ti,f=Qn,g=[],p=[],m=[],v=s._getLabels();for(t=0,n=v.length;t<n;++t)m.push(li(s,v[t]));for(t=0,n=(l.data.datasets||[]).length;t<n;++t)if(l.isDatasetVisible(t))if(a=l.data.datasets[t].data,H.isObject(a[0]))for(p[t]=[],e=0,i=a.length;e<i;++e)r=li(s,a[e]),g.push(r),p[t][e]=r;else p[t]=m.slice(0),o||(g=g.concat(m),o=!0);else p[t]=[];m.length&&(c=Math.min(c,m[0]),f=Math.max(f,m[m.length-1])),g.length&&(g=n>1?function(t){var e,n,i,a={},r=[];for(e=0,n=t.length;e<n;++e)a[i=t[e]]||(a[i]=!0,r.push(i));return r}(g).sort(ii):g.sort(ii),c=Math.min(c,g[0]),f=Math.max(f,g[g.length-1])),c=li(s,ai(d))||c,f=li(s,ri(d))||f,c=c===ti?+u.startOf(Date.now(),h):c,f=f===Qn?+u.endOf(Date.now(),h)+1:f,s.min=Math.min(c,f),s.max=Math.max(c+1,f),s._table=[],s._timestamps={data:g,datasets:p,labels:m}},buildTicks:function(){var t,e,n,i=this,a=i.min,r=i.max,o=i.options,s=o.ticks,l=o.time,u=i._timestamps,d=[],h=i.getLabelCapacity(a),c=s.source,f=o.distribution;for(u="data"===c||"auto"===c&&"series"===f?u.data:"labels"===c?u.labels:function(t,e,n,i){var a,r=t._adapter,o=t.options,s=o.time,l=s.unit||ui(s.minUnit,e,n,i),u=$n([s.stepSize,s.unitStepSize,1]),d="week"===l&&s.isoWeekday,h=e,c=[];if(d&&(h=+r.startOf(h,"isoWeek",d)),h=+r.startOf(h,d?"day":l),r.diff(n,e,l)>1e5*u)throw e+" and "+n+" are too far apart with stepSize of "+u+" "+l;for(a=h;a<n;a=+r.add(a,u,l))c.push(a);return a!==n&&"ticks"!==o.bounds||c.push(a),c}(i,a,r,h),"ticks"===o.bounds&&u.length&&(a=u[0],r=u[u.length-1]),a=li(i,ai(o))||a,r=li(i,ri(o))||r,t=0,e=u.length;t<e;++t)(n=u[t])>=a&&n<=r&&d.push(n);return i.min=a,i.max=r,i._unit=l.unit||(s.autoSkip?ui(l.minUnit,i.min,i.max,h):function(t,e,n,i,a){var r,o;for(r=ni.length-1;r>=ni.indexOf(n);r--)if(o=ni[r],ei[o].common&&t._adapter.diff(a,i,o)>=e-1)return o;return ni[n?ni.indexOf(n):0]}(i,d.length,l.minUnit,i.min,i.max)),i._majorUnit=s.major.enabled&&"year"!==i._unit?function(t){for(var e=ni.indexOf(t)+1,n=ni.length;e<n;++e)if(ei[ni[e]].common)return ni[e]}(i._unit):void 0,i._table=function(t,e,n,i){if("linear"===i||!t.length)return[{time:e,pos:0},{time:n,pos:1}];var a,r,o,s,l,u=[],d=[e];for(a=0,r=t.length;a<r;++a)(s=t[a])>e&&s<n&&d.push(s);for(d.push(n),a=0,r=d.length;a<r;++a)l=d[a+1],o=d[a-1],s=d[a],void 0!==o&&void 0!==l&&Math.round((l+o)/2)===s||u.push({time:s,pos:a/(r-1)});return u}(i._timestamps.data,a,r,f),i._offsets=function(t,e,n,i,a){var r,o,s=0,l=0;return a.offset&&e.length&&(r=oi(t,"time",e[0],"pos"),s=1===e.length?1-r:(oi(t,"time",e[1],"pos")-r)/2,o=oi(t,"time",e[e.length-1],"pos"),l=1===e.length?o:(o-oi(t,"time",e[e.length-2],"pos"))/2),{start:s,end:l,factor:1/(s+1+l)}}(i._table,d,0,0,o),s.reverse&&d.reverse(),di(i,d,i._majorUnit)},getLabelForIndex:function(t,e){var n=this,i=n._adapter,a=n.chart.data,r=n.options.time,o=a.labels&&t<a.labels.length?a.labels[t]:"",s=a.datasets[e].data[t];return H.isObject(s)&&(o=n.getRightValue(s)),r.tooltipFormat?i.format(si(n,o),r.tooltipFormat):"string"==typeof o?o:i.format(si(n,o),r.displayFormats.datetime)},tickFormatFunction:function(t,e,n,i){var a=this._adapter,r=this.options,o=r.time.displayFormats,s=o[this._unit],l=this._majorUnit,u=o[l],d=n[e],h=r.ticks,c=l&&u&&d&&d.major,f=a.format(t,i||(c?u:s)),g=c?h.major:h.minor,p=$n([g.callback,g.userCallback,h.callback,h.userCallback]);return p?p(f,e,n):f},convertTicksToLabels:function(t){var e,n,i=[];for(e=0,n=t.length;e<n;++e)i.push(this.tickFormatFunction(t[e].value,e,t));return i},getPixelForOffset:function(t){var e=this._offsets,n=oi(this._table,"time",t,"pos");return this.getPixelForDecimal((e.start+n)*e.factor)},getPixelForValue:function(t,e,n){var i=null;if(void 0!==e&&void 0!==n&&(i=this._timestamps.datasets[n][e]),null===i&&(i=li(this,t)),null!==i)return this.getPixelForOffset(i)},getPixelForTick:function(t){var e=this.getTicks();return t>=0&&t<e.length?this.getPixelForOffset(e[t].value):null},getValueForPixel:function(t){var e=this._offsets,n=this.getDecimalForPixel(t)/e.factor-e.end,i=oi(this._table,"pos",n,"time");return this._adapter._create(i)},_getLabelSize:function(t){var e=this.options.ticks,n=this.ctx.measureText(t).width,i=H.toRadians(this.isHorizontal()?e.maxRotation:e.minRotation),a=Math.cos(i),r=Math.sin(i),o=Jn(e.fontSize,N.global.defaultFontSize);return{w:n*a+o*r,h:n*r+o*a}},getLabelWidth:function(t){return this._getLabelSize(t).w},getLabelCapacity:function(t){var e=this,n=e.options.time,i=n.displayFormats,a=i[n.unit]||i.millisecond,r=e.tickFormatFunction(t,0,di(e,[t],e._majorUnit),a),o=e._getLabelSize(r),s=Math.floor(e.isHorizontal()?e.width/o.w:e.height/o.h);return e.options.offset&&s--,s>0?s:1}}),ci={position:"bottom",distribution:"linear",bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,displayFormat:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{autoSkip:!1,source:"auto",major:{enabled:!1}}};hi._defaults=ci;var fi={category:kn,linear:Tn,logarithmic:zn,radialLinear:Xn,time:hi},gi={datetime:"MMM D, YYYY, h:mm:ss a",millisecond:"h:mm:ss.SSS a",second:"h:mm:ss a",minute:"h:mm a",hour:"hA",day:"MMM D",week:"ll",month:"MMM YYYY",quarter:"[Q]Q - YYYY",year:"YYYY"};rn._date.override("function"==typeof t?{_id:"moment",formats:function(){return gi},parse:function(e,n){return"string"==typeof e&&"string"==typeof n?e=t(e,n):e instanceof t||(e=t(e)),e.isValid()?e.valueOf():null},format:function(e,n){return t(e).format(n)},add:function(e,n,i){return t(e).add(n,i).valueOf()},diff:function(e,n,i){return t(e).diff(t(n),i)},startOf:function(e,n,i){return e=t(e),"isoWeek"===n?e.isoWeekday(i).valueOf():e.startOf(n).valueOf()},endOf:function(e,n){return t(e).endOf(n).valueOf()},_create:function(e){return t(e)}}:{}),N._set("global",{plugins:{filler:{propagate:!0}}});var pi={dataset:function(t){var e=t.fill,n=t.chart,i=n.getDatasetMeta(e),a=i&&n.isDatasetVisible(e)&&i.dataset._children||[],r=a.length||0;return r?function(t,e){return e<r&&a[e]._view||null}:null},boundary:function(t){var e=t.boundary,n=e?e.x:null,i=e?e.y:null;return H.isArray(e)?function(t,n){return e[n]}:function(t){return{x:null===n?t.x:n,y:null===i?t.y:i}}}};function mi(t,e,n){var i,a=t._model||{},r=a.fill;if(void 0===r&&(r=!!a.backgroundColor),!1===r||null===r)return!1;if(!0===r)return"origin";if(i=parseFloat(r,10),isFinite(i)&&Math.floor(i)===i)return"-"!==r[0]&&"+"!==r[0]||(i=e+i),!(i===e||i<0||i>=n)&&i;switch(r){case"bottom":return"start";case"top":return"end";case"zero":return"origin";case"origin":case"start":case"end":return r;default:return!1}}function vi(t){return(t.el._scale||{}).getPointPositionForValue?function(t){var e,n,i,a,r,o=t.el._scale,s=o.options,l=o.chart.data.labels.length,u=t.fill,d=[];if(!l)return null;for(e=s.ticks.reverse?o.max:o.min,n=s.ticks.reverse?o.min:o.max,i=o.getPointPositionForValue(0,e),a=0;a<l;++a)r="start"===u||"end"===u?o.getPointPositionForValue(a,"start"===u?e:n):o.getBasePosition(a),s.gridLines.circular&&(r.cx=i.x,r.cy=i.y,r.angle=o.getIndexAngle(a)-Math.PI/2),d.push(r);return d}(t):function(t){var e,n=t.el._model||{},i=t.el._scale||{},a=t.fill,r=null;if(isFinite(a))return null;if("start"===a?r=void 0===n.scaleBottom?i.bottom:n.scaleBottom:"end"===a?r=void 0===n.scaleTop?i.top:n.scaleTop:void 0!==n.scaleZero?r=n.scaleZero:i.getBasePixel&&(r=i.getBasePixel()),null!=r){if(void 0!==r.x&&void 0!==r.y)return r;if(H.isFinite(r))return{x:(e=i.isHorizontal())?r:null,y:e?null:r}}return null}(t)}function bi(t,e,n){var i,a=t[e].fill,r=[e];if(!n)return a;for(;!1!==a&&-1===r.indexOf(a);){if(!isFinite(a))return a;if(!(i=t[a]))return!1;if(i.visible)return a;r.push(a),a=i.fill}return!1}function xi(t){var e=t.fill,n="dataset";return!1===e?null:(isFinite(e)||(n="boundary"),pi[n](t))}function yi(t){return t&&!t.skip}function _i(t,e,n,i,a){var r,o,s,l;if(i&&a){for(t.moveTo(e[0].x,e[0].y),r=1;r<i;++r)H.canvas.lineTo(t,e[r-1],e[r]);if(void 0===n[0].angle)for(t.lineTo(n[a-1].x,n[a-1].y),r=a-1;r>0;--r)H.canvas.lineTo(t,n[r],n[r-1],!0);else for(o=n[0].cx,s=n[0].cy,l=Math.sqrt(Math.pow(n[0].x-o,2)+Math.pow(n[0].y-s,2)),r=a-1;r>0;--r)t.arc(o,s,l,n[r].angle,n[r-1].angle,!0)}}function ki(t,e,n,i,a,r){var o,s,l,u,d,h,c,f,g=e.length,p=i.spanGaps,m=[],v=[],b=0,x=0;for(t.beginPath(),o=0,s=g;o<s;++o)d=n(u=e[l=o%g]._view,l,i),h=yi(u),c=yi(d),r&&void 0===f&&h&&(s=g+(f=o+1)),h&&c?(b=m.push(u),x=v.push(d)):b&&x&&(p?(h&&m.push(u),c&&v.push(d)):(_i(t,m,v,b,x),b=x=0,m=[],v=[]));_i(t,m,v,b,x),t.closePath(),t.fillStyle=a,t.fill()}var wi={id:"filler",afterDatasetsUpdate:function(t,e){var n,i,a,r,o=(t.data.datasets||[]).length,s=e.propagate,l=[];for(i=0;i<o;++i)r=null,(a=(n=t.getDatasetMeta(i)).dataset)&&a._model&&a instanceof kt.Line&&(r={visible:t.isDatasetVisible(i),fill:mi(a,i,o),chart:t,el:a}),n.$filler=r,l.push(r);for(i=0;i<o;++i)(r=l[i])&&(r.fill=bi(l,i,s),r.boundary=vi(r),r.mapper=xi(r))},beforeDatasetsDraw:function(t){var e,n,i,a,r,o,s,l=t._getSortedVisibleDatasetMetas(),u=t.ctx;for(n=l.length-1;n>=0;--n)(e=l[n].$filler)&&e.visible&&(a=(i=e.el)._view,r=i._children||[],o=e.mapper,s=a.backgroundColor||N.global.defaultColor,o&&s&&r.length&&(H.canvas.clipArea(u,t.chartArea),ki(u,r,o,a,s,i._loop),H.canvas.unclipArea(u)))}},Mi=H.rtl.getRtlAdapter,Si=H.noop,Ci=H.valueOrDefault;function Pi(t,e){return t.usePointStyle&&t.boxWidth>e?e:t.boxWidth}N._set("global",{legend:{display:!0,position:"top",align:"center",fullWidth:!0,reverse:!1,weight:1e3,onClick:function(t,e){var n=e.datasetIndex,i=this.chart,a=i.getDatasetMeta(n);a.hidden=null===a.hidden?!i.data.datasets[n].hidden:null,i.update()},onHover:null,onLeave:null,labels:{boxWidth:40,padding:10,generateLabels:function(t){var e=t.data.datasets,n=t.options.legend||{},i=n.labels&&n.labels.usePointStyle;return t._getSortedDatasetMetas().map((function(n){var a=n.controller.getStyle(i?0:void 0);return{text:e[n.index].label,fillStyle:a.backgroundColor,hidden:!t.isDatasetVisible(n.index),lineCap:a.borderCapStyle,lineDash:a.borderDash,lineDashOffset:a.borderDashOffset,lineJoin:a.borderJoinStyle,lineWidth:a.borderWidth,strokeStyle:a.borderColor,pointStyle:a.pointStyle,rotation:a.rotation,datasetIndex:n.index}}),this)}}},legendCallback:function(t){var e,n,i,a=document.createElement("ul"),r=t.data.datasets;for(a.setAttribute("class",t.id+"-legend"),e=0,n=r.length;e<n;e++)(i=a.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor=r[e].backgroundColor,r[e].label&&i.appendChild(document.createTextNode(r[e].label));return a.outerHTML}});var Ai=K.extend({initialize:function(t){H.extend(this,t),this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1},beforeUpdate:Si,update:function(t,e,n){var i=this;return i.beforeUpdate(),i.maxWidth=t,i.maxHeight=e,i.margins=n,i.beforeSetDimensions(),i.setDimensions(),i.afterSetDimensions(),i.beforeBuildLabels(),i.buildLabels(),i.afterBuildLabels(),i.beforeFit(),i.fit(),i.afterFit(),i.afterUpdate(),i.minSize},afterUpdate:Si,beforeSetDimensions:Si,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:Si,beforeBuildLabels:Si,buildLabels:function(){var t=this,e=t.options.labels||{},n=H.callback(e.generateLabels,[t.chart],t)||[];e.filter&&(n=n.filter((function(n){return e.filter(n,t.chart.data)}))),t.options.reverse&&n.reverse(),t.legendItems=n},afterBuildLabels:Si,beforeFit:Si,fit:function(){var t=this,e=t.options,n=e.labels,i=e.display,a=t.ctx,r=H.options._parseFont(n),o=r.size,s=t.legendHitBoxes=[],l=t.minSize,u=t.isHorizontal();if(u?(l.width=t.maxWidth,l.height=i?10:0):(l.width=i?10:0,l.height=t.maxHeight),i){if(a.font=r.string,u){var d=t.lineWidths=[0],h=0;a.textAlign="left",a.textBaseline="middle",H.each(t.legendItems,(function(t,e){var i=Pi(n,o)+o/2+a.measureText(t.text).width;(0===e||d[d.length-1]+i+2*n.padding>l.width)&&(h+=o+n.padding,d[d.length-(e>0?0:1)]=0),s[e]={left:0,top:0,width:i,height:o},d[d.length-1]+=i+n.padding})),l.height+=h}else{var c=n.padding,f=t.columnWidths=[],g=t.columnHeights=[],p=n.padding,m=0,v=0;H.each(t.legendItems,(function(t,e){var i=Pi(n,o)+o/2+a.measureText(t.text).width;e>0&&v+o+2*c>l.height&&(p+=m+n.padding,f.push(m),g.push(v),m=0,v=0),m=Math.max(m,i),v+=o+c,s[e]={left:0,top:0,width:i,height:o}})),p+=m,f.push(m),g.push(v),l.width+=p}t.width=l.width,t.height=l.height}else t.width=l.width=t.height=l.height=0},afterFit:Si,isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},draw:function(){var t=this,e=t.options,n=e.labels,i=N.global,a=i.defaultColor,r=i.elements.line,o=t.height,s=t.columnHeights,l=t.width,u=t.lineWidths;if(e.display){var d,h=Mi(e.rtl,t.left,t.minSize.width),c=t.ctx,f=Ci(n.fontColor,i.defaultFontColor),g=H.options._parseFont(n),p=g.size;c.textAlign=h.textAlign("left"),c.textBaseline="middle",c.lineWidth=.5,c.strokeStyle=f,c.fillStyle=f,c.font=g.string;var m=Pi(n,p),v=t.legendHitBoxes,b=function(t,i){switch(e.align){case"start":return n.padding;case"end":return t-i;default:return(t-i+n.padding)/2}},x=t.isHorizontal();d=x?{x:t.left+b(l,u[0]),y:t.top+n.padding,line:0}:{x:t.left+n.padding,y:t.top+b(o,s[0]),line:0},H.rtl.overrideTextDirection(t.ctx,e.textDirection);var y=p+n.padding;H.each(t.legendItems,(function(e,i){var f=c.measureText(e.text).width,g=m+p/2+f,_=d.x,k=d.y;h.setWidth(t.minSize.width),x?i>0&&_+g+n.padding>t.left+t.minSize.width&&(k=d.y+=y,d.line++,_=d.x=t.left+b(l,u[d.line])):i>0&&k+y>t.top+t.minSize.height&&(_=d.x=_+t.columnWidths[d.line]+n.padding,d.line++,k=d.y=t.top+b(o,s[d.line]));var w=h.x(_);!function(t,e,i){if(!(isNaN(m)||m<=0)){c.save();var o=Ci(i.lineWidth,r.borderWidth);if(c.fillStyle=Ci(i.fillStyle,a),c.lineCap=Ci(i.lineCap,r.borderCapStyle),c.lineDashOffset=Ci(i.lineDashOffset,r.borderDashOffset),c.lineJoin=Ci(i.lineJoin,r.borderJoinStyle),c.lineWidth=o,c.strokeStyle=Ci(i.strokeStyle,a),c.setLineDash&&c.setLineDash(Ci(i.lineDash,r.borderDash)),n&&n.usePointStyle){var s=m*Math.SQRT2/2,l=h.xPlus(t,m/2),u=e+p/2;H.canvas.drawPoint(c,i.pointStyle,s,l,u,i.rotation)}else c.fillRect(h.leftForLtr(t,m),e,m,p),0!==o&&c.strokeRect(h.leftForLtr(t,m),e,m,p);c.restore()}}(w,k,e),v[i].left=h.leftForLtr(w,v[i].width),v[i].top=k,function(t,e,n,i){var a=p/2,r=h.xPlus(t,m+a),o=e+a;c.fillText(n.text,r,o),n.hidden&&(c.beginPath(),c.lineWidth=2,c.moveTo(r,o),c.lineTo(h.xPlus(r,i),o),c.stroke())}(w,k,e,f),x?d.x+=g+n.padding:d.y+=y})),H.rtl.restoreTextDirection(t.ctx,e.textDirection)}},_getLegendItemAt:function(t,e){var n,i,a,r=this;if(t>=r.left&&t<=r.right&&e>=r.top&&e<=r.bottom)for(a=r.legendHitBoxes,n=0;n<a.length;++n)if(t>=(i=a[n]).left&&t<=i.left+i.width&&e>=i.top&&e<=i.top+i.height)return r.legendItems[n];return null},handleEvent:function(t){var e,n=this,i=n.options,a="mouseup"===t.type?"click":t.type;if("mousemove"===a){if(!i.onHover&&!i.onLeave)return}else{if("click"!==a)return;if(!i.onClick)return}e=n._getLegendItemAt(t.x,t.y),"click"===a?e&&i.onClick&&i.onClick.call(n,t.native,e):(i.onLeave&&e!==n._hoveredItem&&(n._hoveredItem&&i.onLeave.call(n,t.native,n._hoveredItem),n._hoveredItem=e),i.onHover&&e&&i.onHover.call(n,t.native,e))}});function Di(t,e){var n=new Ai({ctx:t.ctx,options:e,chart:t});pe.configure(t,n,e),pe.addBox(t,n),t.legend=n}var Ti={id:"legend",_element:Ai,beforeInit:function(t){var e=t.options.legend;e&&Di(t,e)},beforeUpdate:function(t){var e=t.options.legend,n=t.legend;e?(H.mergeIf(e,N.global.legend),n?(pe.configure(t,n,e),n.options=e):Di(t,e)):n&&(pe.removeBox(t,n),delete t.legend)},afterEvent:function(t,e){var n=t.legend;n&&n.handleEvent(e)}},Ii=H.noop;N._set("global",{title:{display:!1,fontStyle:"bold",fullWidth:!0,padding:10,position:"top",text:"",weight:2e3}});var Fi=K.extend({initialize:function(t){H.extend(this,t),this.legendHitBoxes=[]},beforeUpdate:Ii,update:function(t,e,n){var i=this;return i.beforeUpdate(),i.maxWidth=t,i.maxHeight=e,i.margins=n,i.beforeSetDimensions(),i.setDimensions(),i.afterSetDimensions(),i.beforeBuildLabels(),i.buildLabels(),i.afterBuildLabels(),i.beforeFit(),i.fit(),i.afterFit(),i.afterUpdate(),i.minSize},afterUpdate:Ii,beforeSetDimensions:Ii,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:Ii,beforeBuildLabels:Ii,buildLabels:Ii,afterBuildLabels:Ii,beforeFit:Ii,fit:function(){var t,e=this,n=e.options,i=e.minSize={},a=e.isHorizontal();n.display?(t=(H.isArray(n.text)?n.text.length:1)*H.options._parseFont(n).lineHeight+2*n.padding,e.width=i.width=a?e.maxWidth:t,e.height=i.height=a?t:e.maxHeight):e.width=i.width=e.height=i.height=0},afterFit:Ii,isHorizontal:function(){var t=this.options.position;return"top"===t||"bottom"===t},draw:function(){var t=this,e=t.ctx,n=t.options;if(n.display){var i,a,r,o=H.options._parseFont(n),s=o.lineHeight,l=s/2+n.padding,u=0,d=t.top,h=t.left,c=t.bottom,f=t.right;e.fillStyle=H.valueOrDefault(n.fontColor,N.global.defaultFontColor),e.font=o.string,t.isHorizontal()?(a=h+(f-h)/2,r=d+l,i=f-h):(a="left"===n.position?h+l:f-l,r=d+(c-d)/2,i=c-d,u=Math.PI*("left"===n.position?-.5:.5)),e.save(),e.translate(a,r),e.rotate(u),e.textAlign="center",e.textBaseline="middle";var g=n.text;if(H.isArray(g))for(var p=0,m=0;m<g.length;++m)e.fillText(g[m],0,p,i),p+=s;else e.fillText(g,0,0,i);e.restore()}}});function Oi(t,e){var n=new Fi({ctx:t.ctx,options:e,chart:t});pe.configure(t,n,e),pe.addBox(t,n),t.titleBlock=n}var Li={},Ri=wi,zi=Ti,Ni={id:"title",_element:Fi,beforeInit:function(t){var e=t.options.title;e&&Oi(t,e)},beforeUpdate:function(t){var e=t.options.title,n=t.titleBlock;e?(H.mergeIf(e,N.global.title),n?(pe.configure(t,n,e),n.options=e):Oi(t,e)):n&&(pe.removeBox(t,n),delete t.titleBlock)}};for(var Bi in Li.filler=Ri,Li.legend=zi,Li.title=Ni,en.helpers=H,function(){function t(t,e,n){var i;return"string"==typeof t?(i=parseInt(t,10),-1!==t.indexOf("%")&&(i=i/100*e.parentNode[n])):i=t,i}function e(t){return null!=t&&"none"!==t}function n(n,i,a){var r=document.defaultView,o=H._getParentNode(n),s=r.getComputedStyle(n)[i],l=r.getComputedStyle(o)[i],u=e(s),d=e(l),h=Number.POSITIVE_INFINITY;return u||d?Math.min(u?t(s,n,a):h,d?t(l,o,a):h):"none"}H.where=function(t,e){if(H.isArray(t)&&Array.prototype.filter)return t.filter(e);var n=[];return H.each(t,(function(t){e(t)&&n.push(t)})),n},H.findIndex=Array.prototype.findIndex?function(t,e,n){return t.findIndex(e,n)}:function(t,e,n){n=void 0===n?t:n;for(var i=0,a=t.length;i<a;++i)if(e.call(n,t[i],i,t))return i;return-1},H.findNextWhere=function(t,e,n){H.isNullOrUndef(n)&&(n=-1);for(var i=n+1;i<t.length;i++){var a=t[i];if(e(a))return a}},H.findPreviousWhere=function(t,e,n){H.isNullOrUndef(n)&&(n=t.length);for(var i=n-1;i>=0;i--){var a=t[i];if(e(a))return a}},H.isNumber=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},H.almostEquals=function(t,e,n){return Math.abs(t-e)<n},H.almostWhole=function(t,e){var n=Math.round(t);return n-e<=t&&n+e>=t},H.max=function(t){return t.reduce((function(t,e){return isNaN(e)?t:Math.max(t,e)}),Number.NEGATIVE_INFINITY)},H.min=function(t){return t.reduce((function(t,e){return isNaN(e)?t:Math.min(t,e)}),Number.POSITIVE_INFINITY)},H.sign=Math.sign?function(t){return Math.sign(t)}:function(t){return 0===(t=+t)||isNaN(t)?t:t>0?1:-1},H.toRadians=function(t){return t*(Math.PI/180)},H.toDegrees=function(t){return t*(180/Math.PI)},H._decimalPlaces=function(t){if(H.isFinite(t)){for(var e=1,n=0;Math.round(t*e)/e!==t;)e*=10,n++;return n}},H.getAngleFromPoint=function(t,e){var n=e.x-t.x,i=e.y-t.y,a=Math.sqrt(n*n+i*i),r=Math.atan2(i,n);return r<-.5*Math.PI&&(r+=2*Math.PI),{angle:r,distance:a}},H.distanceBetweenPoints=function(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))},H.aliasPixel=function(t){return t%2==0?0:.5},H._alignPixel=function(t,e,n){var i=t.currentDevicePixelRatio,a=n/2;return Math.round((e-a)*i)/i+a},H.splineCurve=function(t,e,n,i){var a=t.skip?e:t,r=e,o=n.skip?e:n,s=Math.sqrt(Math.pow(r.x-a.x,2)+Math.pow(r.y-a.y,2)),l=Math.sqrt(Math.pow(o.x-r.x,2)+Math.pow(o.y-r.y,2)),u=s/(s+l),d=l/(s+l),h=i*(u=isNaN(u)?0:u),c=i*(d=isNaN(d)?0:d);return{previous:{x:r.x-h*(o.x-a.x),y:r.y-h*(o.y-a.y)},next:{x:r.x+c*(o.x-a.x),y:r.y+c*(o.y-a.y)}}},H.EPSILON=Number.EPSILON||1e-14,H.splineCurveMonotone=function(t){var e,n,i,a,r,o,s,l,u,d=(t||[]).map((function(t){return{model:t._model,deltaK:0,mK:0}})),h=d.length;for(e=0;e<h;++e)if(!(i=d[e]).model.skip){if(n=e>0?d[e-1]:null,(a=e<h-1?d[e+1]:null)&&!a.model.skip){var c=a.model.x-i.model.x;i.deltaK=0!==c?(a.model.y-i.model.y)/c:0}!n||n.model.skip?i.mK=i.deltaK:!a||a.model.skip?i.mK=n.deltaK:this.sign(n.deltaK)!==this.sign(i.deltaK)?i.mK=0:i.mK=(n.deltaK+i.deltaK)/2}for(e=0;e<h-1;++e)i=d[e],a=d[e+1],i.model.skip||a.model.skip||(H.almostEquals(i.deltaK,0,this.EPSILON)?i.mK=a.mK=0:(r=i.mK/i.deltaK,o=a.mK/i.deltaK,(l=Math.pow(r,2)+Math.pow(o,2))<=9||(s=3/Math.sqrt(l),i.mK=r*s*i.deltaK,a.mK=o*s*i.deltaK)));for(e=0;e<h;++e)(i=d[e]).model.skip||(n=e>0?d[e-1]:null,a=e<h-1?d[e+1]:null,n&&!n.model.skip&&(u=(i.model.x-n.model.x)/3,i.model.controlPointPreviousX=i.model.x-u,i.model.controlPointPreviousY=i.model.y-u*i.mK),a&&!a.model.skip&&(u=(a.model.x-i.model.x)/3,i.model.controlPointNextX=i.model.x+u,i.model.controlPointNextY=i.model.y+u*i.mK))},H.nextItem=function(t,e,n){return n?e>=t.length-1?t[0]:t[e+1]:e>=t.length-1?t[t.length-1]:t[e+1]},H.previousItem=function(t,e,n){return n?e<=0?t[t.length-1]:t[e-1]:e<=0?t[0]:t[e-1]},H.niceNum=function(t,e){var n=Math.floor(H.log10(t)),i=t/Math.pow(10,n);return(e?i<1.5?1:i<3?2:i<7?5:10:i<=1?1:i<=2?2:i<=5?5:10)*Math.pow(10,n)},H.requestAnimFrame="undefined"==typeof window?function(t){t()}:window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)},H.getRelativePosition=function(t,e){var n,i,a=t.originalEvent||t,r=t.target||t.srcElement,o=r.getBoundingClientRect(),s=a.touches;s&&s.length>0?(n=s[0].clientX,i=s[0].clientY):(n=a.clientX,i=a.clientY);var l=parseFloat(H.getStyle(r,"padding-left")),u=parseFloat(H.getStyle(r,"padding-top")),d=parseFloat(H.getStyle(r,"padding-right")),h=parseFloat(H.getStyle(r,"padding-bottom")),c=o.right-o.left-l-d,f=o.bottom-o.top-u-h;return{x:n=Math.round((n-o.left-l)/c*r.width/e.currentDevicePixelRatio),y:i=Math.round((i-o.top-u)/f*r.height/e.currentDevicePixelRatio)}},H.getConstraintWidth=function(t){return n(t,"max-width","clientWidth")},H.getConstraintHeight=function(t){return n(t,"max-height","clientHeight")},H._calculatePadding=function(t,e,n){return(e=H.getStyle(t,e)).indexOf("%")>-1?n*parseInt(e,10)/100:parseInt(e,10)},H._getParentNode=function(t){var e=t.parentNode;return e&&"[object ShadowRoot]"===e.toString()&&(e=e.host),e},H.getMaximumWidth=function(t){var e=H._getParentNode(t);if(!e)return t.clientWidth;var n=e.clientWidth,i=n-H._calculatePadding(e,"padding-left",n)-H._calculatePadding(e,"padding-right",n),a=H.getConstraintWidth(t);return isNaN(a)?i:Math.min(i,a)},H.getMaximumHeight=function(t){var e=H._getParentNode(t);if(!e)return t.clientHeight;var n=e.clientHeight,i=n-H._calculatePadding(e,"padding-top",n)-H._calculatePadding(e,"padding-bottom",n),a=H.getConstraintHeight(t);return isNaN(a)?i:Math.min(i,a)},H.getStyle=function(t,e){return t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null).getPropertyValue(e)},H.retinaScale=function(t,e){var n=t.currentDevicePixelRatio=e||"undefined"!=typeof window&&window.devicePixelRatio||1;if(1!==n){var i=t.canvas,a=t.height,r=t.width;i.height=a*n,i.width=r*n,t.ctx.scale(n,n),i.style.height||i.style.width||(i.style.height=a+"px",i.style.width=r+"px")}},H.fontString=function(t,e,n){return e+" "+t+"px "+n},H.longestText=function(t,e,n,i){var a=(i=i||{}).data=i.data||{},r=i.garbageCollect=i.garbageCollect||[];i.font!==e&&(a=i.data={},r=i.garbageCollect=[],i.font=e),t.font=e;var o,s,l,u,d,h=0,c=n.length;for(o=0;o<c;o++)if(null!=(u=n[o])&&!0!==H.isArray(u))h=H.measureText(t,a,r,h,u);else if(H.isArray(u))for(s=0,l=u.length;s<l;s++)null==(d=u[s])||H.isArray(d)||(h=H.measureText(t,a,r,h,d));var f=r.length/2;if(f>n.length){for(o=0;o<f;o++)delete a[r[o]];r.splice(0,f)}return h},H.measureText=function(t,e,n,i,a){var r=e[a];return r||(r=e[a]=t.measureText(a).width,n.push(a)),r>i&&(i=r),i},H.numberOfLabelLines=function(t){var e=1;return H.each(t,(function(t){H.isArray(t)&&t.length>e&&(e=t.length)})),e},H.color=_?function(t){return t instanceof CanvasGradient&&(t=N.global.defaultColor),_(t)}:function(t){return console.error("Color.js not found!"),t},H.getHoverColor=function(t){return t instanceof CanvasPattern||t instanceof CanvasGradient?t:H.color(t).saturate(.5).darken(.1).rgbString()}}(),en._adapters=rn,en.Animation=$,en.animationService=J,en.controllers=Jt,en.DatasetController=it,en.defaults=N,en.Element=K,en.elements=kt,en.Interaction=re,en.layouts=pe,en.platform=Oe,en.plugins=Le,en.Scale=yn,en.scaleService=Re,en.Ticks=on,en.Tooltip=Ye,en.helpers.each(fi,(function(t,e){en.scaleService.registerScaleType(e,t,t._defaults)})),Li)Li.hasOwnProperty(Bi)&&en.plugins.register(Li[Bi]);en.platform.initialize();var Ei=en;return"undefined"!=typeof window&&(window.Chart=en),en.Chart=en,en.Legend=Li.legend._element,en.Title=Li.title._element,en.pluginService=en.plugins,en.PluginBase=en.Element.extend({}),en.canvasHelpers=en.helpers.canvas,en.layoutService=en.layouts,en.LinearScaleBase=Cn,en.helpers.each(["Bar","Bubble","Doughnut","Line","PolarArea","Radar","Scatter"],(function(t){en[t]=function(e,n){return new en(e,en.helpers.merge(n||{},{type:t.charAt(0).toLowerCase()+t.slice(1)}))}})),Ei}));

/*! forms2 2021-01-13  See forms2.js for license info */
!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";!function(a){"use strict";function b(a){var b=a.charCodeAt(0);return b===g||b===l?62:b===h||b===m?63:i>b?-1:i+10>b?b-i+26+26:k+26>b?b-k:j+26>b?b-j+26:void 0}function c(a){function c(a){j[l++]=a}var d,e,g,h,i,j;if(a.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var k=a.length;i="="===a.charAt(k-2)?2:"="===a.charAt(k-1)?1:0,j=new f(3*a.length/4-i),g=i>0?a.length-4:a.length;var l=0;for(d=0,e=0;g>d;d+=4,e+=3)h=b(a.charAt(d))<<18|b(a.charAt(d+1))<<12|b(a.charAt(d+2))<<6|b(a.charAt(d+3)),c((16711680&h)>>16),c((65280&h)>>8),c(255&h);return 2===i?(h=b(a.charAt(d))<<2|b(a.charAt(d+1))>>4,c(255&h)):1===i&&(h=b(a.charAt(d))<<10|b(a.charAt(d+1))<<4|b(a.charAt(d+2))>>2,c(h>>8&255),c(255&h)),j}function e(a){function b(a){return d.charAt(a)}function c(a){return b(a>>18&63)+b(a>>12&63)+b(a>>6&63)+b(63&a)}var e,f,g,h=a.length%3,i="";for(e=0,g=a.length-h;g>e;e+=3)f=(a[e]<<16)+(a[e+1]<<8)+a[e+2],i+=c(f);switch(h){case 1:f=a[a.length-1],i+=b(f>>2),i+=b(f<<4&63),i+="==";break;case 2:f=(a[a.length-2]<<8)+a[a.length-1],i+=b(f>>10),i+=b(f>>4&63),i+=b(f<<2&63),i+="="}return i}var f="undefined"!=typeof Uint8Array?Uint8Array:Array,g="+".charCodeAt(0),h="/".charCodeAt(0),i="0".charCodeAt(0),j="a".charCodeAt(0),k="A".charCodeAt(0),l="-".charCodeAt(0),m="_".charCodeAt(0);a.toByteArray=c,a.fromByteArray=e}("undefined"==typeof c?this.base64js={}:c)},{}],2:[function(a,b,c){(function(a){!function(d){function e(a){throw RangeError(H[a])}function f(a,b){for(var c=a.length;c--;)a[c]=b(a[c]);return a}function g(a,b){return f(a.split(G),b).join(".")}function h(a){for(var b,c,d=[],e=0,f=a.length;f>e;)b=a.charCodeAt(e++),b>=55296&&56319>=b&&f>e?(c=a.charCodeAt(e++),56320==(64512&c)?d.push(((1023&b)<<10)+(1023&c)+65536):(d.push(b),e--)):d.push(b);return d}function i(a){return f(a,function(a){var b="";return a>65535&&(a-=65536,b+=K(a>>>10&1023|55296),a=56320|1023&a),b+=K(a)}).join("")}function j(a){return 10>a-48?a-22:26>a-65?a-65:26>a-97?a-97:w}function k(a,b){return a+22+75*(26>a)-((0!=b)<<5)}function l(a,b,c){var d=0;for(a=c?J(a/A):a>>1,a+=J(a/b);a>I*y>>1;d+=w)a=J(a/I);return J(d+(I+1)*a/(a+z))}function m(a){var b,c,d,f,g,h,k,m,n,o,p=[],q=a.length,r=0,s=C,t=B;for(c=a.lastIndexOf(D),0>c&&(c=0),d=0;c>d;++d)a.charCodeAt(d)>=128&&e("not-basic"),p.push(a.charCodeAt(d));for(f=c>0?c+1:0;q>f;){for(g=r,h=1,k=w;f>=q&&e("invalid-input"),m=j(a.charCodeAt(f++)),(m>=w||m>J((v-r)/h))&&e("overflow"),r+=m*h,n=t>=k?x:k>=t+y?y:k-t,!(n>m);k+=w)o=w-n,h>J(v/o)&&e("overflow"),h*=o;b=p.length+1,t=l(r-g,b,0==g),J(r/b)>v-s&&e("overflow"),s+=J(r/b),r%=b,p.splice(r++,0,s)}return i(p)}function n(a){var b,c,d,f,g,i,j,m,n,o,p,q,r,s,t,u=[];for(a=h(a),q=a.length,b=C,c=0,g=B,i=0;q>i;++i)p=a[i],128>p&&u.push(K(p));for(d=f=u.length,f&&u.push(D);q>d;){for(j=v,i=0;q>i;++i)p=a[i],p>=b&&j>p&&(j=p);for(r=d+1,j-b>J((v-c)/r)&&e("overflow"),c+=(j-b)*r,b=j,i=0;q>i;++i)if(p=a[i],b>p&&++c>v&&e("overflow"),p==b){for(m=c,n=w;o=g>=n?x:n>=g+y?y:n-g,!(o>m);n+=w)t=m-o,s=w-o,u.push(K(k(o+t%s,0))),m=J(t/s);u.push(K(k(m,0))),g=l(c,r,d==f),c=0,++d}++c,++b}return u.join("")}function o(a){return g(a,function(a){return E.test(a)?m(a.slice(4).toLowerCase()):a})}function p(a){return g(a,function(a){return F.test(a)?"xn--"+n(a):a})}var q="object"==typeof c&&c,r="object"==typeof b&&b&&b.exports==q&&b,s="object"==typeof a&&a;(s.global===s||s.window===s)&&(d=s);var t,u,v=2147483647,w=36,x=1,y=26,z=38,A=700,B=72,C=128,D="-",E=/^xn--/,F=/[^ -~]/,G=/\x2E|\u3002|\uFF0E|\uFF61/g,H={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},I=w-x,J=Math.floor,K=String.fromCharCode;if(t={version:"1.2.4",ucs2:{decode:h,encode:i},decode:m,encode:n,toASCII:p,toUnicode:o},"function"==typeof define&&"object"==typeof define.amd&&define.amd)define("punycode",function(){return t});else if(q&&!q.nodeType)if(r)r.exports=t;else for(u in t)t.hasOwnProperty(u)&&(q[u]=t[u]);else d.punycode=t}(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],3:[function(a,b,c){(function(b){"use strict";function d(){function a(){}try{var b=new Uint8Array(1);return b.foo=function(){return 42},b.constructor=a,42===b.foo()&&b.constructor===a&&"function"==typeof b.subarray&&0===b.subarray(1,1).byteLength}catch(c){return!1}}function e(){return f.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function f(a){return this instanceof f?(f.TYPED_ARRAY_SUPPORT||(this.length=0,this.parent=void 0),"number"==typeof a?g(this,a):"string"==typeof a?h(this,a,arguments.length>1?arguments[1]:"utf8"):i(this,a)):arguments.length>1?new f(a,arguments[1]):new f(a)}function g(a,b){if(a=p(a,0>b?0:0|q(b)),!f.TYPED_ARRAY_SUPPORT)for(var c=0;b>c;c++)a[c]=0;return a}function h(a,b,c){("string"!=typeof c||""===c)&&(c="utf8");var d=0|s(b,c);return a=p(a,d),a.write(b,c),a}function i(a,b){if(f.isBuffer(b))return j(a,b);if(Y(b))return k(a,b);if(null==b)throw new TypeError("must start with number, buffer, array or string");if("undefined"!=typeof ArrayBuffer){if(b.buffer instanceof ArrayBuffer)return l(a,b);if(b instanceof ArrayBuffer)return m(a,b)}return b.length?n(a,b):o(a,b)}function j(a,b){var c=0|q(b.length);return a=p(a,c),b.copy(a,0,0,c),a}function k(a,b){var c=0|q(b.length);a=p(a,c);for(var d=0;c>d;d+=1)a[d]=255&b[d];return a}function l(a,b){var c=0|q(b.length);a=p(a,c);for(var d=0;c>d;d+=1)a[d]=255&b[d];return a}function m(a,b){return f.TYPED_ARRAY_SUPPORT?(b.byteLength,a=f._augment(new Uint8Array(b))):a=l(a,new Uint8Array(b)),a}function n(a,b){var c=0|q(b.length);a=p(a,c);for(var d=0;c>d;d+=1)a[d]=255&b[d];return a}function o(a,b){var c,d=0;"Buffer"===b.type&&Y(b.data)&&(c=b.data,d=0|q(c.length)),a=p(a,d);for(var e=0;d>e;e+=1)a[e]=255&c[e];return a}function p(a,b){f.TYPED_ARRAY_SUPPORT?(a=f._augment(new Uint8Array(b)),a.__proto__=f.prototype):(a.length=b,a._isBuffer=!0);var c=0!==b&&b<=f.poolSize>>>1;return c&&(a.parent=Z),a}function q(a){if(a>=e())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+e().toString(16)+" bytes");return 0|a}function r(a,b){if(!(this instanceof r))return new r(a,b);var c=new f(a,b);return delete c.parent,c}function s(a,b){"string"!=typeof a&&(a=""+a);var c=a.length;if(0===c)return 0;for(var d=!1;;)switch(b){case"ascii":case"binary":case"raw":case"raws":return c;case"utf8":case"utf-8":return R(a).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*c;case"hex":return c>>>1;case"base64":return U(a).length;default:if(d)return R(a).length;b=(""+b).toLowerCase(),d=!0}}function t(a,b,c){var d=!1;if(b=0|b,c=void 0===c||c===1/0?this.length:0|c,a||(a="utf8"),0>b&&(b=0),c>this.length&&(c=this.length),b>=c)return"";for(;;)switch(a){case"hex":return F(this,b,c);case"utf8":case"utf-8":return B(this,b,c);case"ascii":return D(this,b,c);case"binary":return E(this,b,c);case"base64":return A(this,b,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return G(this,b,c);default:if(d)throw new TypeError("Unknown encoding: "+a);a=(a+"").toLowerCase(),d=!0}}function u(a,b,c,d){c=Number(c)||0;var e=a.length-c;d?(d=Number(d),d>e&&(d=e)):d=e;var f=b.length;if(f%2!==0)throw new Error("Invalid hex string");d>f/2&&(d=f/2);for(var g=0;d>g;g++){var h=parseInt(b.substr(2*g,2),16);if(isNaN(h))throw new Error("Invalid hex string");a[c+g]=h}return g}function v(a,b,c,d){return V(R(b,a.length-c),a,c,d)}function w(a,b,c,d){return V(S(b),a,c,d)}function x(a,b,c,d){return w(a,b,c,d)}function y(a,b,c,d){return V(U(b),a,c,d)}function z(a,b,c,d){return V(T(b,a.length-c),a,c,d)}function A(a,b,c){return 0===b&&c===a.length?W.fromByteArray(a):W.fromByteArray(a.slice(b,c))}function B(a,b,c){c=Math.min(a.length,c);for(var d=[],e=b;c>e;){var f=a[e],g=null,h=f>239?4:f>223?3:f>191?2:1;if(c>=e+h){var i,j,k,l;switch(h){case 1:128>f&&(g=f);break;case 2:i=a[e+1],128===(192&i)&&(l=(31&f)<<6|63&i,l>127&&(g=l));break;case 3:i=a[e+1],j=a[e+2],128===(192&i)&&128===(192&j)&&(l=(15&f)<<12|(63&i)<<6|63&j,l>2047&&(55296>l||l>57343)&&(g=l));break;case 4:i=a[e+1],j=a[e+2],k=a[e+3],128===(192&i)&&128===(192&j)&&128===(192&k)&&(l=(15&f)<<18|(63&i)<<12|(63&j)<<6|63&k,l>65535&&1114112>l&&(g=l))}}null===g?(g=65533,h=1):g>65535&&(g-=65536,d.push(g>>>10&1023|55296),g=56320|1023&g),d.push(g),e+=h}return C(d)}function C(a){var b=a.length;if($>=b)return String.fromCharCode.apply(String,a);for(var c="",d=0;b>d;)c+=String.fromCharCode.apply(String,a.slice(d,d+=$));return c}function D(a,b,c){var d="";c=Math.min(a.length,c);for(var e=b;c>e;e++)d+=String.fromCharCode(127&a[e]);return d}function E(a,b,c){var d="";c=Math.min(a.length,c);for(var e=b;c>e;e++)d+=String.fromCharCode(a[e]);return d}function F(a,b,c){var d=a.length;(!b||0>b)&&(b=0),(!c||0>c||c>d)&&(c=d);for(var e="",f=b;c>f;f++)e+=Q(a[f]);return e}function G(a,b,c){for(var d=a.slice(b,c),e="",f=0;f<d.length;f+=2)e+=String.fromCharCode(d[f]+256*d[f+1]);return e}function H(a,b,c){if(a%1!==0||0>a)throw new RangeError("offset is not uint");if(a+b>c)throw new RangeError("Trying to access beyond buffer length")}function I(a,b,c,d,e,g){if(!f.isBuffer(a))throw new TypeError("buffer must be a Buffer instance");if(b>e||g>b)throw new RangeError("value is out of bounds");if(c+d>a.length)throw new RangeError("index out of range")}function J(a,b,c,d){0>b&&(b=65535+b+1);for(var e=0,f=Math.min(a.length-c,2);f>e;e++)a[c+e]=(b&255<<8*(d?e:1-e))>>>8*(d?e:1-e)}function K(a,b,c,d){0>b&&(b=4294967295+b+1);for(var e=0,f=Math.min(a.length-c,4);f>e;e++)a[c+e]=b>>>8*(d?e:3-e)&255}function L(a,b,c,d,e,f){if(b>e||f>b)throw new RangeError("value is out of bounds");if(c+d>a.length)throw new RangeError("index out of range");if(0>c)throw new RangeError("index out of range")}function M(a,b,c,d,e){return e||L(a,b,c,4,3.4028234663852886e38,-3.4028234663852886e38),X.write(a,b,c,d,23,4),c+4}function N(a,b,c,d,e){return e||L(a,b,c,8,1.7976931348623157e308,-1.7976931348623157e308),X.write(a,b,c,d,52,8),c+8}function O(a){if(a=P(a).replace(aa,""),a.length<2)return"";for(;a.length%4!==0;)a+="=";return a}function P(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")}function Q(a){return 16>a?"0"+a.toString(16):a.toString(16)}function R(a,b){b=b||1/0;for(var c,d=a.length,e=null,f=[],g=0;d>g;g++){if(c=a.charCodeAt(g),c>55295&&57344>c){if(!e){if(c>56319){(b-=3)>-1&&f.push(239,191,189);continue}if(g+1===d){(b-=3)>-1&&f.push(239,191,189);continue}e=c;continue}if(56320>c){(b-=3)>-1&&f.push(239,191,189),e=c;continue}c=(e-55296<<10|c-56320)+65536}else e&&(b-=3)>-1&&f.push(239,191,189);if(e=null,128>c){if((b-=1)<0)break;f.push(c)}else if(2048>c){if((b-=2)<0)break;f.push(c>>6|192,63&c|128)}else if(65536>c){if((b-=3)<0)break;f.push(c>>12|224,c>>6&63|128,63&c|128)}else{if(!(1114112>c))throw new Error("Invalid code point");if((b-=4)<0)break;f.push(c>>18|240,c>>12&63|128,c>>6&63|128,63&c|128)}}return f}function S(a){for(var b=[],c=0;c<a.length;c++)b.push(255&a.charCodeAt(c));return b}function T(a,b){for(var c,d,e,f=[],g=0;g<a.length&&!((b-=2)<0);g++)c=a.charCodeAt(g),d=c>>8,e=c%256,f.push(e),f.push(d);return f}function U(a){return W.toByteArray(O(a))}function V(a,b,c,d){for(var e=0;d>e&&!(e+c>=b.length||e>=a.length);e++)b[e+c]=a[e];return e}var W=a("base64-js"),X=a("ieee754"),Y=a("isarray");c.Buffer=f,c.SlowBuffer=r,c.INSPECT_MAX_BYTES=50,f.poolSize=8192;var Z={};f.TYPED_ARRAY_SUPPORT=void 0!==b.TYPED_ARRAY_SUPPORT?b.TYPED_ARRAY_SUPPORT:d(),f.TYPED_ARRAY_SUPPORT?(f.prototype.__proto__=Uint8Array.prototype,f.__proto__=Uint8Array):(f.prototype.length=void 0,f.prototype.parent=void 0),f.isBuffer=function(a){return!(null==a||!a._isBuffer)},f.compare=function(a,b){if(!f.isBuffer(a)||!f.isBuffer(b))throw new TypeError("Arguments must be Buffers");if(a===b)return 0;for(var c=a.length,d=b.length,e=0,g=Math.min(c,d);g>e&&a[e]===b[e];)++e;return e!==g&&(c=a[e],d=b[e]),d>c?-1:c>d?1:0},f.isEncoding=function(a){switch(String(a).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},f.concat=function(a,b){if(!Y(a))throw new TypeError("list argument must be an Array of Buffers.");if(0===a.length)return new f(0);var c;if(void 0===b)for(b=0,c=0;c<a.length;c++)b+=a[c].length;var d=new f(b),e=0;for(c=0;c<a.length;c++){var g=a[c];g.copy(d,e),e+=g.length}return d},f.byteLength=s,f.prototype.toString=function(){var a=0|this.length;return 0===a?"":0===arguments.length?B(this,0,a):t.apply(this,arguments)},f.prototype.equals=function(a){if(!f.isBuffer(a))throw new TypeError("Argument must be a Buffer");return this===a?!0:0===f.compare(this,a)},f.prototype.inspect=function(){var a="",b=c.INSPECT_MAX_BYTES;return this.length>0&&(a=this.toString("hex",0,b).match(/.{2}/g).join(" "),this.length>b&&(a+=" ... ")),"<Buffer "+a+">"},f.prototype.compare=function(a){if(!f.isBuffer(a))throw new TypeError("Argument must be a Buffer");return this===a?0:f.compare(this,a)},f.prototype.indexOf=function(a,b){function c(a,b,c){for(var d=-1,e=0;c+e<a.length;e++)if(a[c+e]===b[-1===d?0:e-d]){if(-1===d&&(d=e),e-d+1===b.length)return c+d}else d=-1;return-1}if(b>2147483647?b=2147483647:-2147483648>b&&(b=-2147483648),b>>=0,0===this.length)return-1;if(b>=this.length)return-1;if(0>b&&(b=Math.max(this.length+b,0)),"string"==typeof a)return 0===a.length?-1:String.prototype.indexOf.call(this,a,b);if(f.isBuffer(a))return c(this,a,b);if("number"==typeof a)return f.TYPED_ARRAY_SUPPORT&&"function"===Uint8Array.prototype.indexOf?Uint8Array.prototype.indexOf.call(this,a,b):c(this,[a],b);throw new TypeError("val must be string, number or Buffer")},f.prototype.get=function(a){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(a)},f.prototype.set=function(a,b){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(a,b)},f.prototype.write=function(a,b,c,d){if(void 0===b)d="utf8",c=this.length,b=0;else if(void 0===c&&"string"==typeof b)d=b,c=this.length,b=0;else if(isFinite(b))b=0|b,isFinite(c)?(c=0|c,void 0===d&&(d="utf8")):(d=c,c=void 0);else{var e=d;d=b,b=0|c,c=e}var f=this.length-b;if((void 0===c||c>f)&&(c=f),a.length>0&&(0>c||0>b)||b>this.length)throw new RangeError("attempt to write outside buffer bounds");d||(d="utf8");for(var g=!1;;)switch(d){case"hex":return u(this,a,b,c);case"utf8":case"utf-8":return v(this,a,b,c);case"ascii":return w(this,a,b,c);case"binary":return x(this,a,b,c);case"base64":return y(this,a,b,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return z(this,a,b,c);default:if(g)throw new TypeError("Unknown encoding: "+d);d=(""+d).toLowerCase(),g=!0}},f.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var $=4096;f.prototype.slice=function(a,b){var c=this.length;a=~~a,b=void 0===b?c:~~b,0>a?(a+=c,0>a&&(a=0)):a>c&&(a=c),0>b?(b+=c,0>b&&(b=0)):b>c&&(b=c),a>b&&(b=a);var d;if(f.TYPED_ARRAY_SUPPORT)d=f._augment(this.subarray(a,b));else{var e=b-a;d=new f(e,void 0);for(var g=0;e>g;g++)d[g]=this[g+a]}return d.length&&(d.parent=this.parent||this),d},f.prototype.readUIntLE=function(a,b,c){a=0|a,b=0|b,c||H(a,b,this.length);for(var d=this[a],e=1,f=0;++f<b&&(e*=256);)d+=this[a+f]*e;return d},f.prototype.readUIntBE=function(a,b,c){a=0|a,b=0|b,c||H(a,b,this.length);for(var d=this[a+--b],e=1;b>0&&(e*=256);)d+=this[a+--b]*e;return d},f.prototype.readUInt8=function(a,b){return b||H(a,1,this.length),this[a]},f.prototype.readUInt16LE=function(a,b){return b||H(a,2,this.length),this[a]|this[a+1]<<8},f.prototype.readUInt16BE=function(a,b){return b||H(a,2,this.length),this[a]<<8|this[a+1]},f.prototype.readUInt32LE=function(a,b){return b||H(a,4,this.length),(this[a]|this[a+1]<<8|this[a+2]<<16)+16777216*this[a+3]},f.prototype.readUInt32BE=function(a,b){return b||H(a,4,this.length),16777216*this[a]+(this[a+1]<<16|this[a+2]<<8|this[a+3])},f.prototype.readIntLE=function(a,b,c){a=0|a,b=0|b,c||H(a,b,this.length);for(var d=this[a],e=1,f=0;++f<b&&(e*=256);)d+=this[a+f]*e;return e*=128,d>=e&&(d-=Math.pow(2,8*b)),d},f.prototype.readIntBE=function(a,b,c){a=0|a,b=0|b,c||H(a,b,this.length);for(var d=b,e=1,f=this[a+--d];d>0&&(e*=256);)f+=this[a+--d]*e;return e*=128,f>=e&&(f-=Math.pow(2,8*b)),f},f.prototype.readInt8=function(a,b){return b||H(a,1,this.length),128&this[a]?-1*(255-this[a]+1):this[a]},f.prototype.readInt16LE=function(a,b){b||H(a,2,this.length);var c=this[a]|this[a+1]<<8;return 32768&c?4294901760|c:c},f.prototype.readInt16BE=function(a,b){b||H(a,2,this.length);var c=this[a+1]|this[a]<<8;return 32768&c?4294901760|c:c},f.prototype.readInt32LE=function(a,b){return b||H(a,4,this.length),this[a]|this[a+1]<<8|this[a+2]<<16|this[a+3]<<24},f.prototype.readInt32BE=function(a,b){return b||H(a,4,this.length),this[a]<<24|this[a+1]<<16|this[a+2]<<8|this[a+3]},f.prototype.readFloatLE=function(a,b){return b||H(a,4,this.length),X.read(this,a,!0,23,4)},f.prototype.readFloatBE=function(a,b){return b||H(a,4,this.length),X.read(this,a,!1,23,4)},f.prototype.readDoubleLE=function(a,b){return b||H(a,8,this.length),X.read(this,a,!0,52,8)},f.prototype.readDoubleBE=function(a,b){return b||H(a,8,this.length),X.read(this,a,!1,52,8)},f.prototype.writeUIntLE=function(a,b,c,d){a=+a,b=0|b,c=0|c,d||I(this,a,b,c,Math.pow(2,8*c),0);var e=1,f=0;for(this[b]=255&a;++f<c&&(e*=256);)this[b+f]=a/e&255;return b+c},f.prototype.writeUIntBE=function(a,b,c,d){a=+a,b=0|b,c=0|c,d||I(this,a,b,c,Math.pow(2,8*c),0);var e=c-1,f=1;for(this[b+e]=255&a;--e>=0&&(f*=256);)this[b+e]=a/f&255;return b+c},f.prototype.writeUInt8=function(a,b,c){return a=+a,b=0|b,c||I(this,a,b,1,255,0),f.TYPED_ARRAY_SUPPORT||(a=Math.floor(a)),this[b]=255&a,b+1},f.prototype.writeUInt16LE=function(a,b,c){return a=+a,b=0|b,c||I(this,a,b,2,65535,0),f.TYPED_ARRAY_SUPPORT?(this[b]=255&a,this[b+1]=a>>>8):J(this,a,b,!0),b+2},f.prototype.writeUInt16BE=function(a,b,c){return a=+a,b=0|b,c||I(this,a,b,2,65535,0),f.TYPED_ARRAY_SUPPORT?(this[b]=a>>>8,this[b+1]=255&a):J(this,a,b,!1),b+2},f.prototype.writeUInt32LE=function(a,b,c){return a=+a,b=0|b,c||I(this,a,b,4,4294967295,0),f.TYPED_ARRAY_SUPPORT?(this[b+3]=a>>>24,this[b+2]=a>>>16,this[b+1]=a>>>8,this[b]=255&a):K(this,a,b,!0),b+4},f.prototype.writeUInt32BE=function(a,b,c){return a=+a,b=0|b,c||I(this,a,b,4,4294967295,0),f.TYPED_ARRAY_SUPPORT?(this[b]=a>>>24,this[b+1]=a>>>16,this[b+2]=a>>>8,this[b+3]=255&a):K(this,a,b,!1),b+4},f.prototype.writeIntLE=function(a,b,c,d){if(a=+a,b=0|b,!d){var e=Math.pow(2,8*c-1);I(this,a,b,c,e-1,-e)}var f=0,g=1,h=0>a?1:0;for(this[b]=255&a;++f<c&&(g*=256);)this[b+f]=(a/g>>0)-h&255;return b+c},f.prototype.writeIntBE=function(a,b,c,d){if(a=+a,b=0|b,!d){var e=Math.pow(2,8*c-1);I(this,a,b,c,e-1,-e)}var f=c-1,g=1,h=0>a?1:0;for(this[b+f]=255&a;--f>=0&&(g*=256);)this[b+f]=(a/g>>0)-h&255;return b+c},f.prototype.writeInt8=function(a,b,c){return a=+a,b=0|b,c||I(this,a,b,1,127,-128),f.TYPED_ARRAY_SUPPORT||(a=Math.floor(a)),0>a&&(a=255+a+1),this[b]=255&a,b+1},f.prototype.writeInt16LE=function(a,b,c){return a=+a,b=0|b,c||I(this,a,b,2,32767,-32768),f.TYPED_ARRAY_SUPPORT?(this[b]=255&a,this[b+1]=a>>>8):J(this,a,b,!0),b+2},f.prototype.writeInt16BE=function(a,b,c){return a=+a,b=0|b,c||I(this,a,b,2,32767,-32768),f.TYPED_ARRAY_SUPPORT?(this[b]=a>>>8,this[b+1]=255&a):J(this,a,b,!1),b+2},f.prototype.writeInt32LE=function(a,b,c){return a=+a,b=0|b,c||I(this,a,b,4,2147483647,-2147483648),f.TYPED_ARRAY_SUPPORT?(this[b]=255&a,this[b+1]=a>>>8,this[b+2]=a>>>16,this[b+3]=a>>>24):K(this,a,b,!0),b+4},f.prototype.writeInt32BE=function(a,b,c){return a=+a,b=0|b,c||I(this,a,b,4,2147483647,-2147483648),0>a&&(a=4294967295+a+1),f.TYPED_ARRAY_SUPPORT?(this[b]=a>>>24,this[b+1]=a>>>16,this[b+2]=a>>>8,this[b+3]=255&a):K(this,a,b,!1),b+4},f.prototype.writeFloatLE=function(a,b,c){return M(this,a,b,!0,c)},f.prototype.writeFloatBE=function(a,b,c){return M(this,a,b,!1,c)},f.prototype.writeDoubleLE=function(a,b,c){return N(this,a,b,!0,c)},f.prototype.writeDoubleBE=function(a,b,c){return N(this,a,b,!1,c)},f.prototype.copy=function(a,b,c,d){if(c||(c=0),d||0===d||(d=this.length),b>=a.length&&(b=a.length),b||(b=0),d>0&&c>d&&(d=c),d===c)return 0;if(0===a.length||0===this.length)return 0;if(0>b)throw new RangeError("targetStart out of bounds");if(0>c||c>=this.length)throw new RangeError("sourceStart out of bounds");if(0>d)throw new RangeError("sourceEnd out of bounds");d>this.length&&(d=this.length),a.length-b<d-c&&(d=a.length-b+c);var e,g=d-c;if(this===a&&b>c&&d>b)for(e=g-1;e>=0;e--)a[e+b]=this[e+c];else if(1e3>g||!f.TYPED_ARRAY_SUPPORT)for(e=0;g>e;e++)a[e+b]=this[e+c];else a._set(this.subarray(c,c+g),b);return g},f.prototype.fill=function(a,b,c){if(a||(a=0),b||(b=0),c||(c=this.length),b>c)throw new RangeError("end < start");if(c!==b&&0!==this.length){if(0>b||b>=this.length)throw new RangeError("start out of bounds");if(0>c||c>this.length)throw new RangeError("end out of bounds");var d;if("number"==typeof a)for(d=b;c>d;d++)this[d]=a;else{var e=R(a.toString()),f=e.length;for(d=b;c>d;d++)this[d]=e[d%f]}return this}},f.prototype.toArrayBuffer=function(){if("undefined"!=typeof Uint8Array){if(f.TYPED_ARRAY_SUPPORT)return new f(this).buffer;for(var a=new Uint8Array(this.length),b=0,c=a.length;c>b;b+=1)a[b]=this[b];return a.buffer}throw new TypeError("Buffer.toArrayBuffer not supported in this browser")};var _=f.prototype;f._augment=function(a){return a.constructor=f,a._isBuffer=!0,a._set=a.set,a.get=_.get,a.set=_.set,a.write=_.write,a.toString=_.toString,a.toLocaleString=_.toString,a.toJSON=_.toJSON,a.equals=_.equals,a.compare=_.compare,a.indexOf=_.indexOf,a.copy=_.copy,a.slice=_.slice,a.readUIntLE=_.readUIntLE,a.readUIntBE=_.readUIntBE,a.readUInt8=_.readUInt8,a.readUInt16LE=_.readUInt16LE,a.readUInt16BE=_.readUInt16BE,a.readUInt32LE=_.readUInt32LE,a.readUInt32BE=_.readUInt32BE,a.readIntLE=_.readIntLE,a.readIntBE=_.readIntBE,a.readInt8=_.readInt8,a.readInt16LE=_.readInt16LE,a.readInt16BE=_.readInt16BE,a.readInt32LE=_.readInt32LE,a.readInt32BE=_.readInt32BE,a.readFloatLE=_.readFloatLE,a.readFloatBE=_.readFloatBE,a.readDoubleLE=_.readDoubleLE,a.readDoubleBE=_.readDoubleBE,a.writeUInt8=_.writeUInt8,a.writeUIntLE=_.writeUIntLE,a.writeUIntBE=_.writeUIntBE,a.writeUInt16LE=_.writeUInt16LE,a.writeUInt16BE=_.writeUInt16BE,a.writeUInt32LE=_.writeUInt32LE,a.writeUInt32BE=_.writeUInt32BE,a.writeIntLE=_.writeIntLE,a.writeIntBE=_.writeIntBE,a.writeInt8=_.writeInt8,a.writeInt16LE=_.writeInt16LE,a.writeInt16BE=_.writeInt16BE,a.writeInt32LE=_.writeInt32LE,a.writeInt32BE=_.writeInt32BE,a.writeFloatLE=_.writeFloatLE,a.writeFloatBE=_.writeFloatBE,a.writeDoubleLE=_.writeDoubleLE,a.writeDoubleBE=_.writeDoubleBE,a.fill=_.fill,a.inspect=_.inspect,a.toArrayBuffer=_.toArrayBuffer,a};var aa=/[^+\/0-9A-Za-z-_]/g}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"base64-js":1,ieee754:7,isarray:4}],4:[function(a,b,c){var d={}.toString;b.exports=Array.isArray||function(a){return"[object Array]"==d.call(a)}},{}],5:[function(a,b,c){var d=function(a,b,c){c=c||{};var d=c.encode||h,e=[a+"="+d(b)];return c.maxAge&&e.push("Max-Age="+c.maxAge),c.domain&&e.push("Domain="+c.domain),c.path&&e.push("Path="+c.path),c.expires&&e.push("Expires="+c.expires.toUTCString()),c.httpOnly&&e.push("HttpOnly"),c.secure&&e.push("Secure"),e.join("; ")},e=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,f=function(a){return a.trim?a.trim():a.replace(e,"")},g=function(a,b){b=b||{};for(var c={},d=a.split(/[;,] */),e=b.decode||i,g=d.length,h=0;g>h;h++){var j=d[h],k=j.indexOf("=");if(!(0>k)){var l=f(j.substr(0,k)),m=f(j.substr(++k,j.length));if('"'==m[0]&&(m=m.slice(1,-1)),void 0==c[l])try{c[l]=e(m)}catch(n){c[l]=m}}}return c},h=encodeURIComponent,i=decodeURIComponent;b.exports.serialize=d,b.exports.parse=g},{}],6:[function(a,b,c){function d(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function e(a){return"function"==typeof a}function f(a){return"number"==typeof a}function g(a){return"object"==typeof a&&null!==a}function h(a){return void 0===a}b.exports=d,d.EventEmitter=d,d.prototype._events=void 0,d.prototype._maxListeners=void 0,d.defaultMaxListeners=10,d.prototype.setMaxListeners=function(a){if(!f(a)||0>a||isNaN(a))throw TypeError("n must be a positive number");return this._maxListeners=a,this},d.prototype.emit=function(a){var b,c,d,f,i,j;if(this._events||(this._events={}),"error"===a&&(!this._events.error||g(this._events.error)&&!this._events.error.length)){if(b=arguments[1],b instanceof Error)throw b;throw TypeError('Uncaught, unspecified "error" event.')}if(c=this._events[a],h(c))return!1;if(e(c))switch(arguments.length){case 1:c.call(this);break;case 2:c.call(this,arguments[1]);break;case 3:c.call(this,arguments[1],arguments[2]);break;default:for(d=arguments.length,f=new Array(d-1),i=1;d>i;i++)f[i-1]=arguments[i];c.apply(this,f)}else if(g(c)){for(d=arguments.length,f=new Array(d-1),i=1;d>i;i++)f[i-1]=arguments[i];for(j=c.slice(),d=j.length,i=0;d>i;i++)j[i].apply(this,f)}return!0},d.prototype.addListener=function(a,b){var c;if(!e(b))throw TypeError("listener must be a function");if(this._events||(this._events={}),this._events.newListener&&this.emit("newListener",a,e(b.listener)?b.listener:b),this._events[a]?g(this._events[a])?this._events[a].push(b):this._events[a]=[this._events[a],b]:this._events[a]=b,g(this._events[a])&&!this._events[a].warned){var c;c=h(this._maxListeners)?d.defaultMaxListeners:this._maxListeners,c&&c>0&&this._events[a].length>c&&(this._events[a].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[a].length),"function"==typeof console.trace&&console.trace())}return this},d.prototype.on=d.prototype.addListener,d.prototype.once=function(a,b){function c(){this.removeListener(a,c),d||(d=!0,b.apply(this,arguments))}if(!e(b))throw TypeError("listener must be a function");var d=!1;return c.listener=b,this.on(a,c),this},d.prototype.removeListener=function(a,b){var c,d,f,h;if(!e(b))throw TypeError("listener must be a function");if(!this._events||!this._events[a])return this;if(c=this._events[a],f=c.length,d=-1,c===b||e(c.listener)&&c.listener===b)delete this._events[a],this._events.removeListener&&this.emit("removeListener",a,b);else if(g(c)){for(h=f;h-->0;)if(c[h]===b||c[h].listener&&c[h].listener===b){d=h;break}if(0>d)return this;1===c.length?(c.length=0,delete this._events[a]):c.splice(d,1),this._events.removeListener&&this.emit("removeListener",a,b)}return this},d.prototype.removeAllListeners=function(a){var b,c;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[a]&&delete this._events[a],this;if(0===arguments.length){for(b in this._events)"removeListener"!==b&&this.removeAllListeners(b);return this.removeAllListeners("removeListener"),this._events={},this}if(c=this._events[a],e(c))this.removeListener(a,c);else for(;c.length;)this.removeListener(a,c[c.length-1]);return delete this._events[a],this},d.prototype.listeners=function(a){var b;return b=this._events&&this._events[a]?e(this._events[a])?[this._events[a]]:this._events[a].slice():[]},d.listenerCount=function(a,b){var c;return c=a._events&&a._events[b]?e(a._events[b])?1:a._events[b].length:0}},{}],7:[function(a,b,c){c.read=function(a,b,c,d,e){var f,g,h=8*e-d-1,i=(1<<h)-1,j=i>>1,k=-7,l=c?e-1:0,m=c?-1:1,n=a[b+l];for(l+=m,f=n&(1<<-k)-1,n>>=-k,k+=h;k>0;f=256*f+a[b+l],l+=m,k-=8);for(g=f&(1<<-k)-1,f>>=-k,k+=d;k>0;g=256*g+a[b+l],l+=m,k-=8);if(0===f)f=1-j;else{if(f===i)return g?NaN:(n?-1:1)*(1/0);g+=Math.pow(2,d),f-=j}return(n?-1:1)*g*Math.pow(2,f-d)},c.write=function(a,b,c,d,e,f){var g,h,i,j=8*f-e-1,k=(1<<j)-1,l=k>>1,m=23===e?Math.pow(2,-24)-Math.pow(2,-77):0,n=d?0:f-1,o=d?1:-1,p=0>b||0===b&&0>1/b?1:0;for(b=Math.abs(b),isNaN(b)||b===1/0?(h=isNaN(b)?1:0,g=k):(g=Math.floor(Math.log(b)/Math.LN2),b*(i=Math.pow(2,-g))<1&&(g--,i*=2),b+=g+l>=1?m/i:m*Math.pow(2,1-l),b*i>=2&&(g++,i/=2),g+l>=k?(h=0,g=k):g+l>=1?(h=(b*i-1)*Math.pow(2,e),g+=l):(h=b*Math.pow(2,l-1)*Math.pow(2,e),g=0));e>=8;a[c+n]=255&h,n+=o,h/=256,e-=8);for(g=g<<e|h,j+=e;j>0;a[c+n]=255&g,n+=o,g/=256,j-=8);a[c+n-o]|=128*p}},{}],8:[function(a,b,c){"function"==typeof Object.create?b.exports=function(a,b){b&&(a.super_=b,a.prototype=Object.create(b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}))}:b.exports=function(a,b){if(b){a.super_=b;var c=function(){};c.prototype=b.prototype,a.prototype=new c,a.prototype.constructor=a}}},{}],9:[function(a,b,c){b.exports=a("./jquery.build.js")},{"./jquery.build.js":10}],10:[function(a,b,c){!function(){var a=function(a,b){var c=!0;try{var d=b.createElement("button");d.type="button"}catch(e){c=!1}var f=b.createElement("style");f.type="text/css";var g=f.styleSheet&&"cssText"in f.styleSheet,h=b.createElement("div");h.innerHTML=" s ";var i=h.childNodes[0].nodeValue,j=0!=i.indexOf(" "),k=2!=i.lastIndexOf(" "),l=/&apos;/g,m=/^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,n=/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,o=/\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/g,p=/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/g,q=/[\[\]]/g,r=function(a,c){j&&" "===c.charAt(0)&&a.appendChild(b.createTextNode(" ")),a.appendChild(b.createTextNode(c)),k&&" "===c.charAt(c.length-1)&&a.appendChild(b.createTextNode(" "))},s=function(b,c){if(c)if(c.jquery)b.appendChild(c.get(0));else if(1==c.nodeType||3==c.nodeType||11==c.nodeType)b.appendChild(c);else if(a.isArray(c)){var d=0,e=c.length;for(d=0;e>d;d++)s(b,c[d])}else r(b,c.toString())},t=function(c){var d=b.createDocumentFragment();if(c)if(a.isArray(c)){var e=0,f=c.length;for(e=0;f>e;e++)s(d,c[e])}else s(d,c);return d},u=function(a){var c=b.createDocumentFragment();if(a)if("undefined"!=typeof c.innerHTML)c.innerHTML=a;else{var d=b.createElement("div");for(d.innerHTML=a.replace(l,"'"),j&&0==a.indexOf(" ")&&c.appendChild(b.createTextNode(" "));d.hasChildNodes();)c.appendChild(d.firstChild);k&&a.lastIndexOf(" ")==a.length-1&&c.appendChild(b.createTextNode(" "))}return c};return a.build=function(d,e,f){2==arguments.length&&null!=e&&("string"==typeof e||a.isArray(e)||e.nodeType||e.jquery)&&(f=e,e=null),d=d||"";var h;h=d.match(m),h&&(h=h[0]);var i=null;if(-1!=d.indexOf("#")){var i=d.match(n);i=i?i[1]:null}var j;-1!=d.indexOf(".")&&(j=d.match(o));var k;-1!=d.indexOf("[")&&(k=d.match(p)),h=h||"div",k&&(e=e||{},a.each(k,function(a,b){var c=b.replace(q,"").split("=");c&&2==c.length&&(e[c[0]]=c[1])})),e=e||{};var l;if(c||"input"!==h&&"button"!==h)l=b.createElement(h);else{var r=e.type?'type="'+e.type+'"':"",s=e.name?'name="'+e.name+'"':"";l=b.createElement("<"+h+" "+r+" "+s+">"),delete e.type,delete e.name}var u=a(l);if(e&&u.attr(e),i&&(l.id=i),"img"===h&&(e.width||u.removeAttr("width"),e.height||u.removeAttr("height")),j){var v="";a.each(j,function(a,b){v+=b.replace(".","")+" "}),l.className=a.trim(l.className+" "+v)}return g&&"style"==h&&"string"==typeof f?(u.attr("type")||u.attr("type","text/css"),l.styleSheet.cssText=f):f&&(11==f.nodeType?l.appendChild(f):l.appendChild(t(f))),u},a.build.docFrag=t,a.build.html=u,a.build};"undefined"!=typeof b&&b.exports&&(b.exports=a),"undefined"!=typeof window&&window.jQuery&&window.document&&a(window.jQuery,window.document)}()},{}],11:[function(a,b,c){"use strict";function d(a,b){return Object.prototype.hasOwnProperty.call(a,b)}b.exports=function(a,b,c,f){b=b||"&",c=c||"=";var g={};if("string"!=typeof a||0===a.length)return g;var h=/\+/g;a=a.split(b);var i=1e3;f&&"number"==typeof f.maxKeys&&(i=f.maxKeys);
var j=a.length;i>0&&j>i&&(j=i);for(var k=0;j>k;++k){var l,m,n,o,p=a[k].replace(h,"%20"),q=p.indexOf(c);q>=0?(l=p.substr(0,q),m=p.substr(q+1)):(l=p,m=""),n=decodeURIComponent(l),o=decodeURIComponent(m),d(g,n)?e(g[n])?g[n].push(o):g[n]=[g[n],o]:g[n]=o}return g};var e=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)}},{}],12:[function(a,b,c){"use strict";function d(a,b){if(a.map)return a.map(b);for(var c=[],d=0;d<a.length;d++)c.push(b(a[d],d));return c}var e=function(a){switch(typeof a){case"string":return a;case"boolean":return a?"true":"false";case"number":return isFinite(a)?a:"";default:return""}};b.exports=function(a,b,c,h){return b=b||"&",c=c||"=",null===a&&(a=void 0),"object"==typeof a?d(g(a),function(g){var h=encodeURIComponent(e(g))+c;return f(a[g])?d(a[g],function(a){return h+encodeURIComponent(e(a))}).join(b):h+encodeURIComponent(e(a[g]))}).join(b):h?encodeURIComponent(e(h))+c+encodeURIComponent(e(a)):""};var f=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},g=Object.keys||function(a){var b=[];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.push(c);return b}},{}],13:[function(a,b,c){"use strict";c.decode=c.parse=a("./decode"),c.encode=c.stringify=a("./encode")},{"./decode":11,"./encode":12}],14:[function(a,b,c){function d(a,b){for(var c in a)b[c]=a[c]}function e(a,b,c){return g(a,b,c)}var f=a("buffer"),g=f.Buffer;g.from&&g.alloc&&g.allocUnsafe&&g.allocUnsafeSlow?b.exports=f:(d(f,c),c.Buffer=e),d(g,e),e.from=function(a,b,c){if("number"==typeof a)throw new TypeError("Argument must not be a number");return g(a,b,c)},e.alloc=function(a,b,c){if("number"!=typeof a)throw new TypeError("Argument must be a number");var d=g(a);return void 0!==b?"string"==typeof c?d.fill(b,c):d.fill(b):d.fill(0),d},e.allocUnsafe=function(a){if("number"!=typeof a)throw new TypeError("Argument must be a number");return g(a)},e.allocUnsafeSlow=function(a){if("number"!=typeof a)throw new TypeError("Argument must be a number");return f.SlowBuffer(a)}},{buffer:3}],15:[function(a,b,c){function d(a,b){this._block=e.alloc(a),this._finalSize=b,this._blockSize=a,this._len=0}var e=a("safe-buffer").Buffer;d.prototype.update=function(a,b){"string"==typeof a&&(b=b||"utf8",a=e.from(a,b));for(var c=this._block,d=this._blockSize,f=a.length,g=this._len,h=0;f>h;){for(var i=g%d,j=Math.min(f-h,d-i),k=0;j>k;k++)c[i+k]=a[h+k];g+=j,h+=j,g%d===0&&this._update(c)}return this._len+=f,this},d.prototype.digest=function(a){var b=this._len%this._blockSize;this._block[b]=128,this._block.fill(0,b+1),b>=this._finalSize&&(this._update(this._block),this._block.fill(0));var c=8*this._len;if(4294967295>=c)this._block.writeUInt32BE(c,this._blockSize-4);else{var d=(4294967295&c)>>>0,e=(c-d)/4294967296;this._block.writeUInt32BE(e,this._blockSize-8),this._block.writeUInt32BE(d,this._blockSize-4)}this._update(this._block);var f=this._hash();return a?f.toString(a):f},d.prototype._update=function(){throw new Error("_update must be implemented by subclass")},b.exports=d},{"safe-buffer":14}],16:[function(a,b,c){var c=b.exports=function(a){a=a.toLowerCase();var b=c[a];if(!b)throw new Error(a+" is not supported (we accept pull requests)");return new b};c.sha=a("./sha"),c.sha1=a("./sha1"),c.sha224=a("./sha224"),c.sha256=a("./sha256"),c.sha384=a("./sha384"),c.sha512=a("./sha512")},{"./sha":17,"./sha1":18,"./sha224":19,"./sha256":20,"./sha384":21,"./sha512":22}],17:[function(a,b,c){function d(){this.init(),this._w=l,i.call(this,64,56)}function e(a){return a<<5|a>>>27}function f(a){return a<<30|a>>>2}function g(a,b,c,d){return 0===a?b&c|~b&d:2===a?b&c|b&d|c&d:b^c^d}var h=a("inherits"),i=a("./hash"),j=a("safe-buffer").Buffer,k=[1518500249,1859775393,-1894007588,-899497514],l=new Array(80);h(d,i),d.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this},d.prototype._update=function(a){for(var b=this._w,c=0|this._a,d=0|this._b,h=0|this._c,i=0|this._d,j=0|this._e,l=0;16>l;++l)b[l]=a.readInt32BE(4*l);for(;80>l;++l)b[l]=b[l-3]^b[l-8]^b[l-14]^b[l-16];for(var m=0;80>m;++m){var n=~~(m/20),o=e(c)+g(n,d,h,i)+j+b[m]+k[n]|0;j=i,i=h,h=f(d),d=c,c=o}this._a=c+this._a|0,this._b=d+this._b|0,this._c=h+this._c|0,this._d=i+this._d|0,this._e=j+this._e|0},d.prototype._hash=function(){var a=j.allocUnsafe(20);return a.writeInt32BE(0|this._a,0),a.writeInt32BE(0|this._b,4),a.writeInt32BE(0|this._c,8),a.writeInt32BE(0|this._d,12),a.writeInt32BE(0|this._e,16),a},b.exports=d},{"./hash":15,inherits:8,"safe-buffer":14}],18:[function(a,b,c){function d(){this.init(),this._w=m,j.call(this,64,56)}function e(a){return a<<1|a>>>31}function f(a){return a<<5|a>>>27}function g(a){return a<<30|a>>>2}function h(a,b,c,d){return 0===a?b&c|~b&d:2===a?b&c|b&d|c&d:b^c^d}var i=a("inherits"),j=a("./hash"),k=a("safe-buffer").Buffer,l=[1518500249,1859775393,-1894007588,-899497514],m=new Array(80);i(d,j),d.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this},d.prototype._update=function(a){for(var b=this._w,c=0|this._a,d=0|this._b,i=0|this._c,j=0|this._d,k=0|this._e,m=0;16>m;++m)b[m]=a.readInt32BE(4*m);for(;80>m;++m)b[m]=e(b[m-3]^b[m-8]^b[m-14]^b[m-16]);for(var n=0;80>n;++n){var o=~~(n/20),p=f(c)+h(o,d,i,j)+k+b[n]+l[o]|0;k=j,j=i,i=g(d),d=c,c=p}this._a=c+this._a|0,this._b=d+this._b|0,this._c=i+this._c|0,this._d=j+this._d|0,this._e=k+this._e|0},d.prototype._hash=function(){var a=k.allocUnsafe(20);return a.writeInt32BE(0|this._a,0),a.writeInt32BE(0|this._b,4),a.writeInt32BE(0|this._c,8),a.writeInt32BE(0|this._d,12),a.writeInt32BE(0|this._e,16),a},b.exports=d},{"./hash":15,inherits:8,"safe-buffer":14}],19:[function(a,b,c){function d(){this.init(),this._w=i,g.call(this,64,56)}var e=a("inherits"),f=a("./sha256"),g=a("./hash"),h=a("safe-buffer").Buffer,i=new Array(64);e(d,f),d.prototype.init=function(){return this._a=3238371032,this._b=914150663,this._c=812702999,this._d=4144912697,this._e=4290775857,this._f=1750603025,this._g=1694076839,this._h=3204075428,this},d.prototype._hash=function(){var a=h.allocUnsafe(28);return a.writeInt32BE(this._a,0),a.writeInt32BE(this._b,4),a.writeInt32BE(this._c,8),a.writeInt32BE(this._d,12),a.writeInt32BE(this._e,16),a.writeInt32BE(this._f,20),a.writeInt32BE(this._g,24),a},b.exports=d},{"./hash":15,"./sha256":20,inherits:8,"safe-buffer":14}],20:[function(a,b,c){function d(){this.init(),this._w=o,l.call(this,64,56)}function e(a,b,c){return c^a&(b^c)}function f(a,b,c){return a&b|c&(a|b)}function g(a){return(a>>>2|a<<30)^(a>>>13|a<<19)^(a>>>22|a<<10)}function h(a){return(a>>>6|a<<26)^(a>>>11|a<<21)^(a>>>25|a<<7)}function i(a){return(a>>>7|a<<25)^(a>>>18|a<<14)^a>>>3}function j(a){return(a>>>17|a<<15)^(a>>>19|a<<13)^a>>>10}var k=a("inherits"),l=a("./hash"),m=a("safe-buffer").Buffer,n=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],o=new Array(64);k(d,l),d.prototype.init=function(){return this._a=1779033703,this._b=3144134277,this._c=1013904242,this._d=2773480762,this._e=1359893119,this._f=2600822924,this._g=528734635,this._h=1541459225,this},d.prototype._update=function(a){for(var b=this._w,c=0|this._a,d=0|this._b,k=0|this._c,l=0|this._d,m=0|this._e,o=0|this._f,p=0|this._g,q=0|this._h,r=0;16>r;++r)b[r]=a.readInt32BE(4*r);for(;64>r;++r)b[r]=j(b[r-2])+b[r-7]+i(b[r-15])+b[r-16]|0;for(var s=0;64>s;++s){var t=q+h(m)+e(m,o,p)+n[s]+b[s]|0,u=g(c)+f(c,d,k)|0;q=p,p=o,o=m,m=l+t|0,l=k,k=d,d=c,c=t+u|0}this._a=c+this._a|0,this._b=d+this._b|0,this._c=k+this._c|0,this._d=l+this._d|0,this._e=m+this._e|0,this._f=o+this._f|0,this._g=p+this._g|0,this._h=q+this._h|0},d.prototype._hash=function(){var a=m.allocUnsafe(32);return a.writeInt32BE(this._a,0),a.writeInt32BE(this._b,4),a.writeInt32BE(this._c,8),a.writeInt32BE(this._d,12),a.writeInt32BE(this._e,16),a.writeInt32BE(this._f,20),a.writeInt32BE(this._g,24),a.writeInt32BE(this._h,28),a},b.exports=d},{"./hash":15,inherits:8,"safe-buffer":14}],21:[function(a,b,c){function d(){this.init(),this._w=i,g.call(this,128,112)}var e=a("inherits"),f=a("./sha512"),g=a("./hash"),h=a("safe-buffer").Buffer,i=new Array(160);e(d,f),d.prototype.init=function(){return this._ah=3418070365,this._bh=1654270250,this._ch=2438529370,this._dh=355462360,this._eh=1731405415,this._fh=2394180231,this._gh=3675008525,this._hh=1203062813,this._al=3238371032,this._bl=914150663,this._cl=812702999,this._dl=4144912697,this._el=4290775857,this._fl=1750603025,this._gl=1694076839,this._hl=3204075428,this},d.prototype._hash=function(){function a(a,c,d){b.writeInt32BE(a,d),b.writeInt32BE(c,d+4)}var b=h.allocUnsafe(48);return a(this._ah,this._al,0),a(this._bh,this._bl,8),a(this._ch,this._cl,16),a(this._dh,this._dl,24),a(this._eh,this._el,32),a(this._fh,this._fl,40),b},b.exports=d},{"./hash":15,"./sha512":22,inherits:8,"safe-buffer":14}],22:[function(a,b,c){function d(){this.init(),this._w=r,o.call(this,128,112)}function e(a,b,c){return c^a&(b^c)}function f(a,b,c){return a&b|c&(a|b)}function g(a,b){return(a>>>28|b<<4)^(b>>>2|a<<30)^(b>>>7|a<<25)}function h(a,b){return(a>>>14|b<<18)^(a>>>18|b<<14)^(b>>>9|a<<23)}function i(a,b){return(a>>>1|b<<31)^(a>>>8|b<<24)^a>>>7}function j(a,b){return(a>>>1|b<<31)^(a>>>8|b<<24)^(a>>>7|b<<25)}function k(a,b){return(a>>>19|b<<13)^(b>>>29|a<<3)^a>>>6}function l(a,b){return(a>>>19|b<<13)^(b>>>29|a<<3)^(a>>>6|b<<26)}function m(a,b){return b>>>0>a>>>0?1:0}var n=a("inherits"),o=a("./hash"),p=a("safe-buffer").Buffer,q=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591],r=new Array(160);n(d,o),d.prototype.init=function(){return this._ah=1779033703,this._bh=3144134277,this._ch=1013904242,this._dh=2773480762,this._eh=1359893119,this._fh=2600822924,this._gh=528734635,this._hh=1541459225,this._al=4089235720,this._bl=2227873595,this._cl=4271175723,this._dl=1595750129,this._el=2917565137,this._fl=725511199,this._gl=4215389547,this._hl=327033209,this},d.prototype._update=function(a){for(var b=this._w,c=0|this._ah,d=0|this._bh,n=0|this._ch,o=0|this._dh,p=0|this._eh,r=0|this._fh,s=0|this._gh,t=0|this._hh,u=0|this._al,v=0|this._bl,w=0|this._cl,x=0|this._dl,y=0|this._el,z=0|this._fl,A=0|this._gl,B=0|this._hl,C=0;32>C;C+=2)b[C]=a.readInt32BE(4*C),b[C+1]=a.readInt32BE(4*C+4);for(;160>C;C+=2){var D=b[C-30],E=b[C-30+1],F=i(D,E),G=j(E,D);D=b[C-4],E=b[C-4+1];var H=k(D,E),I=l(E,D),J=b[C-14],K=b[C-14+1],L=b[C-32],M=b[C-32+1],N=G+K|0,O=F+J+m(N,G)|0;N=N+I|0,O=O+H+m(N,I)|0,N=N+M|0,O=O+L+m(N,M)|0,b[C]=O,b[C+1]=N}for(var P=0;160>P;P+=2){O=b[P],N=b[P+1];var Q=f(c,d,n),R=f(u,v,w),S=g(c,u),T=g(u,c),U=h(p,y),V=h(y,p),W=q[P],X=q[P+1],Y=e(p,r,s),Z=e(y,z,A),$=B+V|0,_=t+U+m($,B)|0;$=$+Z|0,_=_+Y+m($,Z)|0,$=$+X|0,_=_+W+m($,X)|0,$=$+N|0,_=_+O+m($,N)|0;var aa=T+R|0,ba=S+Q+m(aa,T)|0;t=s,B=A,s=r,A=z,r=p,z=y,y=x+$|0,p=o+_+m(y,x)|0,o=n,x=w,n=d,w=v,d=c,v=u,u=$+aa|0,c=_+ba+m(u,$)|0}this._al=this._al+u|0,this._bl=this._bl+v|0,this._cl=this._cl+w|0,this._dl=this._dl+x|0,this._el=this._el+y|0,this._fl=this._fl+z|0,this._gl=this._gl+A|0,this._hl=this._hl+B|0,this._ah=this._ah+c+m(this._al,u)|0,this._bh=this._bh+d+m(this._bl,v)|0,this._ch=this._ch+n+m(this._cl,w)|0,this._dh=this._dh+o+m(this._dl,x)|0,this._eh=this._eh+p+m(this._el,y)|0,this._fh=this._fh+r+m(this._fl,z)|0,this._gh=this._gh+s+m(this._gl,A)|0,this._hh=this._hh+t+m(this._hl,B)|0},d.prototype._hash=function(){function a(a,c,d){b.writeInt32BE(a,d),b.writeInt32BE(c,d+4)}var b=p.allocUnsafe(64);return a(this._ah,this._al,0),a(this._bh,this._bl,8),a(this._ch,this._cl,16),a(this._dh,this._dl,24),a(this._eh,this._el,32),a(this._fh,this._fl,40),a(this._gh,this._gl,48),a(this._hh,this._hl,56),b},b.exports=d},{"./hash":15,inherits:8,"safe-buffer":14}],23:[function(a,b,c){function d(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}function e(a,b,c){if(a&&j(a)&&a instanceof d)return a;var e=new d;return e.parse(a,b,c),e}function f(a){return i(a)&&(a=e(a)),a instanceof d?a.format():d.prototype.format.call(a)}function g(a,b){return e(a,!1,!0).resolve(b)}function h(a,b){return a?e(a,!1,!0).resolveObject(b):b}function i(a){return"string"==typeof a}function j(a){return"object"==typeof a&&null!==a}function k(a){return null===a}function l(a){return null==a}var m=a("punycode");c.parse=e,c.resolve=g,c.resolveObject=h,c.format=f,c.Url=d;var n=/^([a-z0-9.+-]+:)/i,o=/:[0-9]*$/,p=["<",">",'"',"`"," ","\r","\n","	"],q=["{","}","|","\\","^","`"].concat(p),r=["'"].concat(q),s=["%","/","?",";","#"].concat(r),t=["/","?","#"],u=255,v=/^[a-z0-9A-Z_-]{0,63}$/,w=/^([a-z0-9A-Z_-]{0,63})(.*)$/,x={javascript:!0,"javascript:":!0},y={javascript:!0,"javascript:":!0},z={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},A=a("querystring");d.prototype.parse=function(a,b,c){if(!i(a))throw new TypeError("Parameter 'url' must be a string, not "+typeof a);var d=a;d=d.trim();var e=n.exec(d);if(e){e=e[0];var f=e.toLowerCase();this.protocol=f,d=d.substr(e.length)}if(c||e||d.match(/^\/\/[^@\/]+@[^@\/]+/)){var g="//"===d.substr(0,2);!g||e&&y[e]||(d=d.substr(2),this.slashes=!0)}if(!y[e]&&(g||e&&!z[e])){for(var h=-1,j=0;j<t.length;j++){var k=d.indexOf(t[j]);-1!==k&&(-1===h||h>k)&&(h=k)}var l,o;o=-1===h?d.lastIndexOf("@"):d.lastIndexOf("@",h),-1!==o&&(l=d.slice(0,o),d=d.slice(o+1),this.auth=decodeURIComponent(l)),h=-1;for(var j=0;j<s.length;j++){var k=d.indexOf(s[j]);-1!==k&&(-1===h||h>k)&&(h=k)}-1===h&&(h=d.length),this.host=d.slice(0,h),d=d.slice(h),this.parseHost(),this.hostname=this.hostname||"";var p="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!p)for(var q=this.hostname.split(/\./),j=0,B=q.length;B>j;j++){var C=q[j];if(C&&!C.match(v)){for(var D="",E=0,F=C.length;F>E;E++)D+=C.charCodeAt(E)>127?"x":C[E];if(!D.match(v)){var G=q.slice(0,j),H=q.slice(j+1),I=C.match(w);I&&(G.push(I[1]),H.unshift(I[2])),H.length&&(d="/"+H.join(".")+d),this.hostname=G.join(".");break}}}if(this.hostname.length>u?this.hostname="":this.hostname=this.hostname.toLowerCase(),!p){for(var J=this.hostname.split("."),K=[],j=0;j<J.length;++j){var L=J[j];K.push(L.match(/[^A-Za-z0-9_-]/)?"xn--"+m.encode(L):L)}this.hostname=K.join(".")}var M=this.port?":"+this.port:"",N=this.hostname||"";this.host=N+M,this.href+=this.host,p&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==d[0]&&(d="/"+d))}if(!x[f])for(var j=0,B=r.length;B>j;j++){var O=r[j],P=encodeURIComponent(O);P===O&&(P=escape(O)),d=d.split(O).join(P)}var Q=d.indexOf("#");-1!==Q&&(this.hash=d.substr(Q),d=d.slice(0,Q));var R=d.indexOf("?");if(-1!==R?(this.search=d.substr(R),this.query=d.substr(R+1),b&&(this.query=A.parse(this.query)),d=d.slice(0,R)):b&&(this.search="",this.query={}),d&&(this.pathname=d),z[f]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var M=this.pathname||"",L=this.search||"";this.path=M+L}return this.href=this.format(),this},d.prototype.format=function(){var a=this.auth||"";a&&(a=encodeURIComponent(a),a=a.replace(/%3A/i,":"),a+="@");var b=this.protocol||"",c=this.pathname||"",d=this.hash||"",e=!1,f="";this.host?e=a+this.host:this.hostname&&(e=a+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(e+=":"+this.port)),this.query&&j(this.query)&&Object.keys(this.query).length&&(f=A.stringify(this.query));var g=this.search||f&&"?"+f||"";return b&&":"!==b.substr(-1)&&(b+=":"),this.slashes||(!b||z[b])&&e!==!1?(e="//"+(e||""),c&&"/"!==c.charAt(0)&&(c="/"+c)):e||(e=""),d&&"#"!==d.charAt(0)&&(d="#"+d),g&&"?"!==g.charAt(0)&&(g="?"+g),c=c.replace(/[?#]/g,function(a){return encodeURIComponent(a)}),g=g.replace("#","%23"),b+e+c+g+d},d.prototype.resolve=function(a){return this.resolveObject(e(a,!1,!0)).format()},d.prototype.resolveObject=function(a){if(i(a)){var b=new d;b.parse(a,!1,!0),a=b}var c=new d;if(Object.keys(this).forEach(function(a){c[a]=this[a]},this),c.hash=a.hash,""===a.href)return c.href=c.format(),c;if(a.slashes&&!a.protocol)return Object.keys(a).forEach(function(b){"protocol"!==b&&(c[b]=a[b])}),z[c.protocol]&&c.hostname&&!c.pathname&&(c.path=c.pathname="/"),c.href=c.format(),c;if(a.protocol&&a.protocol!==c.protocol){if(!z[a.protocol])return Object.keys(a).forEach(function(b){c[b]=a[b]}),c.href=c.format(),c;if(c.protocol=a.protocol,a.host||y[a.protocol])c.pathname=a.pathname;else{for(var e=(a.pathname||"").split("/");e.length&&!(a.host=e.shift()););a.host||(a.host=""),a.hostname||(a.hostname=""),""!==e[0]&&e.unshift(""),e.length<2&&e.unshift(""),c.pathname=e.join("/")}if(c.search=a.search,c.query=a.query,c.host=a.host||"",c.auth=a.auth,c.hostname=a.hostname||a.host,c.port=a.port,c.pathname||c.search){var f=c.pathname||"",g=c.search||"";c.path=f+g}return c.slashes=c.slashes||a.slashes,c.href=c.format(),c}var h=c.pathname&&"/"===c.pathname.charAt(0),j=a.host||a.pathname&&"/"===a.pathname.charAt(0),m=j||h||c.host&&a.pathname,n=m,o=c.pathname&&c.pathname.split("/")||[],e=a.pathname&&a.pathname.split("/")||[],p=c.protocol&&!z[c.protocol];if(p&&(c.hostname="",c.port=null,c.host&&(""===o[0]?o[0]=c.host:o.unshift(c.host)),c.host="",a.protocol&&(a.hostname=null,a.port=null,a.host&&(""===e[0]?e[0]=a.host:e.unshift(a.host)),a.host=null),m=m&&(""===e[0]||""===o[0])),j)c.host=a.host||""===a.host?a.host:c.host,c.hostname=a.hostname||""===a.hostname?a.hostname:c.hostname,c.search=a.search,c.query=a.query,o=e;else if(e.length)o||(o=[]),o.pop(),o=o.concat(e),c.search=a.search,c.query=a.query;else if(!l(a.search)){if(p){c.hostname=c.host=o.shift();var q=c.host&&c.host.indexOf("@")>0?c.host.split("@"):!1;q&&(c.auth=q.shift(),c.host=c.hostname=q.shift())}return c.search=a.search,c.query=a.query,k(c.pathname)&&k(c.search)||(c.path=(c.pathname?c.pathname:"")+(c.search?c.search:"")),c.href=c.format(),c}if(!o.length)return c.pathname=null,c.search?c.path="/"+c.search:c.path=null,c.href=c.format(),c;for(var r=o.slice(-1)[0],s=(c.host||a.host)&&("."===r||".."===r)||""===r,t=0,u=o.length;u>=0;u--)r=o[u],"."==r?o.splice(u,1):".."===r?(o.splice(u,1),t++):t&&(o.splice(u,1),t--);if(!m&&!n)for(;t--;t)o.unshift("..");!m||""===o[0]||o[0]&&"/"===o[0].charAt(0)||o.unshift(""),s&&"/"!==o.join("/").substr(-1)&&o.push("");var v=""===o[0]||o[0]&&"/"===o[0].charAt(0);if(p){c.hostname=c.host=v?"":o.length?o.shift():"";var q=c.host&&c.host.indexOf("@")>0?c.host.split("@"):!1;q&&(c.auth=q.shift(),c.host=c.hostname=q.shift())}return m=m||c.host&&o.length,m&&!v&&o.unshift(""),o.length?c.pathname=o.join("/"):(c.pathname=null,c.path=null),k(c.pathname)&&k(c.search)||(c.path=(c.pathname?c.pathname:"")+(c.search?c.search:"")),c.auth=a.auth||c.auth,c.slashes=c.slashes||a.slashes,c.href=c.format(),c},d.prototype.parseHost=function(){var a=this.host,b=o.exec(a);b&&(b=b[0],":"!==b&&(this.port=b.substr(1)),a=a.substr(0,a.length-b.length)),a&&(this.hostname=a)}},{punycode:2,querystring:13}],24:[function(a,b,c){function d(a,b){var c={};return h.each(a,function(a,d){if("hidden"!=d.Datatype&&"profiling"!=d.Datatype){var e=d.VisibilityRule;if(e){if("fieldset"==d.Datatype&&b.fieldsetRows.length>0){var f=j.flatten(b.fieldsetRows[""+d.Id]),g=c[d.Name];g||(g=[]),g=g.concat(h.map(f,function(a){return a.Name})),c[d.Name]=g}var i=e.rules||[e];h.each(i,function(a,b){if("string"!=typeof b){var e=c[b.subjectField];e||(e=[]),-1===h.inArray(d.Name,e)&&e.push(d.Name),c[b.subjectField]=e}})}}}),c}function e(a,b){for(var c=a.length,d=0;c>d;d++){var e=a[d];if(b(e))return e}return void 0}function f(a,b){if(b&&(a.PicklistValues||b.picklistKeys||b.altLabel)){if(a=h.extend(!0,{},a),a.PicklistValues)if(b.picklistFilterValues){var c={};h.each(b.picklistFilterValues,function(a,b){c.hasOwnProperty(b.value)||(c[b.value]=[]),c[b.value].push(b.label)}),a.PicklistValues=h.map(a.PicklistValues,function(a){return c.hasOwnProperty(a.value)&&-1!=h.inArray(a.label,c[a.value])?a:void 0})}else b.picklistKeys&&(a.PicklistValues=h.map(a.PicklistValues,function(a){return-1!=h.inArray(a.value,b.picklistKeys)?a:void 0}));b.altLabel&&(a.InputLabel=b.altLabel)}return a}function g(a,b){if(!a)return{show:!0};var c="show"==a.defaultVisibility,d=a.rules||[a],f=h.map(d,function(a){if("string"!=typeof a){var c=b[a.subjectField];h.isArray(c)||(c=c?[c]:[]);var d=i[a.operator],e=d(c,a.values);return e?a:null}}),g=e(f,function(a){return null!==a});return c?{show:!g,rule:g}:{show:!!g,rule:g}}var h=a("./jquery.js"),i=a("./comparators.js"),j=a("./fields/fieldhelpers.js");b.exports={getChangeMap:d,fieldChangeChecker:g,applyPicklistAlterations:f}},{"./comparators.js":26,"./fields/fieldhelpers.js":30,"./jquery.js":45}],25:[function(a,b,c){function d(a){var b,c=parseInt;return a=(a||"").replace(/\s\s*/g,""),(b=/^#([\da-f]{2})([\da-f]{2})([\da-f]{2})/i.exec(a))?[c(b[1],16),c(b[2],16),c(b[3],16),1]:(b=/^#([\da-f])([\da-f])([\da-f])/i.exec(a))?[17*c(b[1],16),17*c(b[2],16),17*c(b[3],16),1]:(b=/^rgba\(([\d]+),([\d]+),([\d]+),([\d]+|[\d]*.[\d]+)\)/i.exec(a))?[+b[1],+b[2],+b[3],+b[4]]:(b=/^rgb\(([\d]+),([\d]+),([\d]+)\)/i.exec(a))?[+b[1],+b[2],+b[3],1]:null}function e(a,b){var c=d(a),e=d(b);if(!c||!e)return!1;for(var f=0;4>f;f++)if(c[f]!==e[f])return!1;return!0}b.exports={parseColor:d,compareColor:e}},{}],26:[function(a,b,c){var d=function(a,b,c){for(var d=[],e=0;e<a.length;e++)for(var f=0;f<b.length;f++)if(c(a[e],b[f])){d.push(a[e]);break}return d},e={equal:function(a,b){var c=function(a,b){return a===b};return d(a,b,c).length>0},notEqual:function(a,b){var c=function(a,b){return a===b};return 0===d(a,b,c).length},empty:function(a,b){return 0===a.length},notEmpty:function(a,b){return a.length>0},any:function(a,b){return a.length>0},startsWith:function(a,b){var c=function(a,b){return 0===a.indexOf(b)};return d(a,b,c).length>0},notStartsWith:function(a,b){var c=function(a,b){return 0===a.indexOf(b)};return 0===d(a,b,c).length},endsWith:function(a,b){var c=function(a,b){return a.slice(-b.length)===b};return d(a,b,c).length>0},notEndsWith:function(a,b){var c=function(a,b){return a.slice(-b.length)===b};return 0===d(a,b,c).length},contains:function(a,b){var c=function(a,b){return a.match(new RegExp(b,"g"))};return d(a,b,c).length>0},notContains:function(a,b){var c=function(a,b){return a.match(new RegExp(b,"g"))};return 0===d(a,b,c).length},atLeast:function(a,b){return a[0]>=b[0]},atMost:function(a,b){return a[0]<=b[0]},greaterThan:function(a,b){return a[0]>b[0]},lessThan:function(a,b){return a[0]<b[0]},between:function(a,b){return a[0]>b[0]&&a[0]<b[1]},notBetween:function(a,b){return a[0]<b[0]||a[0]>b[1]},inTimeFrame:function(a,b){return new Date(a[0])>new Date(b[0])&&new Date(a[0])<new Date(b[1])},notInTimeFrame:function(a,b){return new Date(a[0])<new Date(b[0])||new Date(a[0])>new Date(b[1])},inPast:function(a,b){return new Date(a[0])<new Date},notInPast:function(a,b){return new Date(a[0])>=new Date},before:function(a,b){return new Date(a[0])<new Date(b[0])},after:function(a,b){return new Date(a[0])>new Date(b[0])},onOrBefore:function(a,b){return new Date(a[0])<=new Date(b[0])},onOrAfter:function(a,b){return new Date(a[0])>=new Date(b[0])}};b.exports=e},{}],27:[function(a,b,c){function d(a,b){b=b||location.hostname;var c=new Date;c.setFullYear(c.getFullYear()-1);var d=[];document.cookie=e.serialize(a,"",{expires:c,path:"/"}),d.push("");for(var f=b.split(".");f.length>1;){var g="."+f.join(".");document.cookie=e.serialize(a,"",{expires:c,path:"/",domain:g}),d.push(g),f.shift()}return d}var e=a("cookie");b.exports.removeCookieAllDomains=d},{cookie:5}],28:[function(a,b,c){var d=a("../jquery.js"),e=(d.build,a("./fieldHelpers.js")),f={};b.exports=f,f.fieldType="currency";var g=/[0-9]+/g,h=function(a){return a?a.match(g):!0};f.newField=function(a,b){var c=e.renderInput("text",a,b);return{name:a.Name,elem:e.formatStandardField(c,a,b),val:d.proxy(c.val,c),required:a.IsRequired,validator:h,validatorElem:c,onChange:function(a){c.on("change",a)}}}},{"../jquery.js":45,"./fieldHelpers.js":29}],29:[function(a,b,c){var d=a("../jquery.js"),e=d.build,f={};f.splitSemis=function(a){return a=""+a,a.split(/\s?;\s?/)},f.cap=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},f.first=function(){for(var a=0;a<arguments.length;a++){var b=arguments[a];if(null!==b&&void 0!==b)return b}return null},f.getLabelId=function(a,b){return void 0!==b&&a!=b?"Lbl"+a+" Lbl"+b:"Lbl"+a},f.getInstructionId=function(a){return void 0!==a?"Instruct"+a:void 0},f.getValidationMsgId=function(a){return void 0!==a?"ValidMsg"+a:void 0},f.formatStandardField=function(a,b,c){var d,g=f.first,h=e.docFrag([e(".mktoOffset").css({width:g(b.OffsetWidth,c.OffsetWidth,0)}),d=e(".mktoFieldWrap",[e("label.mktoLabel.mktoHasWidth",{"for":b.Name,id:f.getLabelId(b.Name)},[e(".mktoAsterix","*"),e.html(b.InputLabel)]).css({width:g(b.LabelWidth,c.LabelWidth,0)}),e(".mktoGutter.mktoHasWidth").css({width:g(b.GutterWidth,c.GutterWidth,0)}),a.addClass("mktoHasWidth").css({width:g(b.FieldWidth,c.FieldWidth,0)}),e("span.mktoInstruction",{id:f.getInstructionId(b.Name),tabindex:"-1"},b.Description),e(".mktoClear")]),e(".mktoClear")]);return b.IsRequired&&d.addClass("mktoRequiredField"),h},f.renderInput=function(a,b,c){var d=e("input[type="+a+"].mktoField.mkto"+f.cap(a)+"Field",{id:b.Name,name:b.Name,placeholder:b.PlaceholderText,maxlength:b.Maxlength||2e3,title:b.Description,"aria-labelledby":[f.getLabelId(b.Name),f.getInstructionId(b.Name)].join(" ")});return d},f.isSet=function(a){return null!==a&&void 0!==a},f.flatten=function(a,b){return b=b||[],d.each(a,function(a,c){d.isArray(c)?f.flatten(c,b):b.push(c)}),b},f.vals=function(a){return d.map(a,function(a){return a})},f.getFlattenedFields=function(a){var b=[];return b=f.flatten(a.rows),a.fieldsetRows&&(b=b.concat(f.flatten(f.vals(a.fieldsetRows)))),b},f.getFieldTypes=function(a){for(var b={},c=0;c<a.length;c++)b[a[c].Datatype]=!0;return b},f.anyFieldHasProperty=function(a,b){for(var c=0;c<a.length;c++)if(a[c][b])return!0;return!1},f.getFieldsByName=function(a){var b={};return d.each(a,function(a,c){b[c.Name]=c}),b},b.exports=f},{"../jquery.js":45}],30:[function(a,b,c){arguments[4][29][0].apply(c,arguments)},{"../jquery.js":45,dup:29}],31:[function(a,b,c){var d=a("../jquery.js"),e=d.build,f=a("./fieldHelpers.js"),g={};b.exports=g,g.fieldType="checkbox";var h={"true":"false",1:"0",Yes:"No",yes:"no"},i=function(a,b){return function(c){var e=a.find("input");if(0===arguments.length){if(b)return e.is(":checked")?b:h[b];e=a.find("input:checked");var g=[];return e.each(function(){g.push(d(this).val())}),g.length?1==g.length?g[0]:g:void 0}return b&&"boolean"==typeof c?void a.find("input").prop("checked",c):void(b&&null===c||(c&&!d.isArray(c)&&(c=""+c,c=f.splitSemis(""+c)),a.find("input").prop("checked",!1),c&&d.each(c,function(b,c){a.find("input[value='"+c+"']").prop("checked",!0)})))}};g.newField=function(a,b){var c=a.PicklistValues||[],g=e(".mktoLogicalField.mktoCheckboxList",{title:a.Description},[d.map(c,function(b,d){var g="mktoCheckbox_"+(a.Id||a.Name)+"_"+d,h=b.label||b.name;return 1!=c.length||h||(g=a.Name),e.docFrag([e("input.mktoField",{name:a.Name,id:g,type:"checkbox",value:b.value,"aria-required":a.IsRequired,"aria-labelledby":[f.getLabelId(a.Name,g),f.getInstructionId(a.Name)].join(" ")}),e("label",{"for":g,id:f.getLabelId(g)},[e.html(h)])])})]);a.IsLabelToLeft&&g.addClass("mktoLabelToLeft");var j="";return 1===c.length&&-1!==d.inArray(c[0].value,Object.keys(h))&&(j=c[0].value),{name:a.Name,elem:f.formatStandardField(g,a,b),val:i(g,j),required:a.IsRequired,requiredValFn:function(a){return a=d.trim(a),a&&j?a!==h[j]:!!a},validatorElem:g,validatorFocusElem:g.find("input:eq(0)"),onChange:function(a){g.on("change",a)}}}},{"../jquery.js":45,"./fieldHelpers.js":29}],32:[function(a,b,c){var d=a("../jquery.js"),e=(d.build,a("./fieldHelpers.js")),f={};b.exports=f,f.fieldType="date";var g=function(a){var b=a.get(0);return b.validity&&!b.validity.valid?!1:!0};f.newField=function(a,b){var c=e.renderInput("date",a,b),f="en_US";return b.ProcessOptions&&b.ProcessOptions.locale&&(f=b.ProcessOptions.locale),c.data("mktoLocale",f),{name:a.Name,elem:e.formatStandardField(c,a,b),val:d.proxy(c.val,c),validator:function(){return g(c)},required:a.IsRequired,validatorElem:c,onChange:function(a){c.on("change",a)}}}},{"../jquery.js":45,"./fieldHelpers.js":29}],33:[function(a,b,c){var d=a("../jquery.js"),e=(d.build,a("./fieldHelpers.js")),f=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,g={};b.exports=g,g.fieldType="email";var h=function(a){var b=a.val()||"";return b?b.match(f):!0};g.newField=function(a,b){var c=e.renderInput("email",a,b);return{name:a.Name,elem:e.formatStandardField(c,a,b),val:d.proxy(c.val,c),required:a.IsRequired,validator:function(){return h(c)},validatorElem:c,onChange:function(a){c.on("change",a)}}}},{"../jquery.js":45,"./fieldHelpers.js":29}],34:[function(a,b,c){function d(a){return a||0===a?""+a:""}function e(a,b,c){return""===a||null===a?!0:(a=parseFloat(a,10),isNaN(a)?!1:h.isSet(b)&&b>a?!1:h.isSet(c)&&a>c?!1:!0)}function f(a,b,c){return function(b){if(0===arguments.length){var c=a.val();if(h.isSet(c)){var d=parseFloat(c);return isNaN(d)?"":d}return null}a.val(b)}}var g=a("../jquery.js"),h=(g.build,a("./fieldHelpers.js")),g=a("../jquery.js"),h=(g.build,a("./fieldHelpers.js")),i={};b.exports=i,i.fieldType="number",i.newField=function(a,b){var c=h.renderInput("number",a,b);c.attr({min:d(a.MinimumNumber),max:d(a.MaximumNumber),step:d(a.StepNumber)});return{name:a.Name,val:f(c,a.MinimumNumber,a.MaximumNumber),elem:h.formatStandardField(c,a,b),required:a.IsRequired,validator:function(b){return e(b,a.MinimumNumber,a.MaximumNumber)},validatorElem:c,onChange:function(a){c.on("change",a)}}}},{"../jquery.js":45,"./fieldHelpers.js":29
}],35:[function(a,b,c){var d=a("../jquery.js"),e=d.build,f=a("./fieldHelpers.js"),g={};b.exports=g,g.fieldType="radio";var h=function(a){return function(b){if(0===arguments.length){var c=a.find("input:checked").val();return c}a.find("input").prop("checked",!1),""!==b?a.find("input[value='"+b+"']").prop("checked",!0):a.find("input").each(function(a,b){b=d(b),""===b.val()&&b.prop("checked",!0)})}};g.newField=function(a,b){var c=e(".mktoRadioList",{title:a.Description},[d.map(a.PicklistValues||[],function(b,c){var d="mktoRadio_"+a.Id+"_"+c;return c||(firstVal=b.value),e.docFrag([e("input[type=radio].mktoField",{name:a.Name,id:d,value:b.value,"aria-required":a.IsRequired,"aria-labelledby":[f.getLabelId(a.Name,d),f.getInstructionId(a.Name)].join(" ")}),e("label",{"for":d,id:f.getLabelId(d)},[e.html(b.label||b.name)])])})]);a.IsLabelToLeft&&c.addClass("mktoLabelToLeft");var g=h(c);return{name:a.Name,elem:f.formatStandardField(c,a,b),val:g,required:a.IsRequired,validatorElem:c,validatorFocusElem:c.find("input:eq(0)"),onChange:function(a){c.on("change",a)}}}},{"../jquery.js":45,"./fieldHelpers.js":29}],36:[function(a,b,c){var d=a("../jquery.js"),e=d.build,f=a("./fieldHelpers.js"),g=a("../modernizr.js"),h={};b.exports=h,h.fieldType="range";var i=function(a,b,c){var d=a.get(0);if(d.validity&&!d.validity.valid)return!1;var e=a.val();return e?j(e,b,c):!0},j=function(a,b,c){return a=parseFloat(a,10),isNaN(a)?!1:f.isSet(b)&&b>a?!1:f.isSet(c)&&a>c?!1:!0},k=function(a,b,c){return function(d){if(0===arguments.length){var e=a.val();if(f.isSet(e)){var g=parseFloat(e,10);return isNaN(g)?null:g}return null}null!==d&&void 0!==d&&""!==d&&j(d,b,c)&&(a.val(parseFloat(d,10)),a.trigger("change"))}};h.newField=function(a,b){var c,h,j,l,m=a.MinimumNumber||0,n=a.MaximumNumber||100,o=e(".mktoLogicalField.mktoRangeField",[j=e(".mktoRangeValue",[l=e(".mktoRangeValueArrowWrap",e(".mktoRangeValueArrow")),h=e(".mktoRangeValueText",""+a.MinimumNumber||0)]),c=e("input[type=range].mktoField",{id:a.Name,name:a.Name,min:m,max:n,step:a.StepNumber||1,title:a.Description,"aria-labelledby":[f.getLabelId(a.Name),f.getInstructionId(a.Name)].join(" ")}).addClass("mktoHasWidth").css({width:f.first(a.FieldWidth,b.FieldWidth,0)})]).hover(function(){o.addClass("mktoHover"),p()},function(){o.removeClass("mktoHover")});g.csstransforms||l.addClass("mktoArrowImage");var p=function(){var a=c.val()||0;h.html(""+a);var b=12,d=c.data("mktoNoCubicEase"),e=c.data("mktoPxAboveSlider")||0,f=(a-m)/(n-m),g=c.width()*f,i=0;d||(.5>f&&(i=Math.pow(1-f,3)*(b/2)),f>.5&&(i=-1*Math.pow(f,3)*(b/2)),g+=Math.floor(i));var k=g-j.outerWidth()/2,o=h.outerWidth()/2-l.outerWidth()/2;j.css("margin-left",k),j.css("margin-top",-1*(l.outerHeight()+h.outerHeight()+e)),l.css("margin-left",o)};return c.on("change",p),c.on("input",p),c.data("mktoRangeUpdate",p),d("body").on("mktoRender",p),{name:a.Name,val:k(c,a.MinimumNumber,a.MaximumNumber),elem:f.formatStandardField(o,a,b),required:a.IsRequired,validator:function(){return i(c,m,n)},validatorElem:c,onChange:function(a){c.on("change",a)}}}},{"../jquery.js":45,"../modernizr.js":48,"./fieldHelpers.js":29}],37:[function(a,b,c){var d=a("../jquery.js"),e=(d.build,a("./fieldHelpers.js")),f=/^([0-9()+. \t-])+(\s?(x|ext|extension)\s?([0-9()])+)?$/,g={};b.exports=g,g.fieldType="phone";var h=function(a){var b=a.val()||"";return b?b.match(f):!0};g.newField=function(a,b){var c=e.renderInput("tel",a,b);return{name:a.Name,elem:e.formatStandardField(c,a,b),val:d.proxy(c.val,c),required:a.IsRequired,validator:function(){return h(c)},validatorElem:c,onChange:function(a){c.on("change",a)}}}},{"../jquery.js":45,"./fieldHelpers.js":29}],38:[function(a,b,c){var d=a("../jquery.js"),e=(d.build,a("./fieldHelpers.js")),f={};b.exports=f,f.fieldType="string",f.newField=function(a,b){var c=a.Maxlength||255,d=e.renderInput("text",a,b);return a.FieldMask&&d.addClass("mktoInputMask").data("mktoInputMask",a.FieldMask),{name:a.Name,elem:e.formatStandardField(d,a,b),val:function(a){return 0===arguments.length?d.val():(a&&a.length>c&&(a=a.substring(0,c)),d.val(a))},required:a.IsRequired,validatorElem:d,onChange:function(a){d.on("change",a)}}}},{"../jquery.js":45,"./fieldHelpers.js":29}],39:[function(a,b,c){var d=a("../jquery.js"),e=(d.build,a("./fieldHelpers.js")),f={};b.exports=f,f.fieldType="url";var g=/^[a-zA-z0-9\.\-_~:\/\?#\[\]@!$&\'\(\)\*\+,;=%]*$/,h=function(a){if(!a)return!0;var b=a.indexOf("://");return 1>b?!1:a.match(g)};f.newField=function(a,b){var c=e.renderInput("url",a,b);return{name:a.Name,elem:e.formatStandardField(c,a,b),val:d.proxy(c.val,c),required:a.IsRequired,validatorElem:c,validator:h,onChange:function(a){c.on("change",a)}}}},{"../jquery.js":45,"./fieldHelpers.js":29}],40:[function(a,b,c){var d=a("../jquery.js"),e=d.build,f=a("./fieldHelpers.js"),g=function(a,b){return function(c){return 0===arguments.length?a.val():(b&&c&&!d.isArray(c)&&(c=f.splitSemis(c)),a.val(c))}},h={};b.exports=h,h.fieldType="picklist",h.newField=function(a,b){var c=e("select.mktoField",{id:a.Name,name:a.Name,title:a.Description,"aria-labelledby":[f.getLabelId(a.Name),f.getInstructionId(a.Name)].join(" ")},[d.map(a.PicklistValues||[],function(a,b){return!a.isDefault||a.selected?e("option",{value:a.value},a.label||a.name):void 0})]);return a.IsMultiselect&&(c.attr("multiple","multiple"),c.attr("size",a.VisibleRows||5)),{name:a.Name,elem:f.formatStandardField(c,a,b),val:g(c,a.IsMultiselect),required:a.IsRequired,validatorElem:c,onChange:function(a){c.on("change",a)}}}},{"../jquery.js":45,"./fieldHelpers.js":29}],41:[function(a,b,c){var d=a("../jquery.js"),e=d.build,f=a("./fieldHelpers.js"),g={};b.exports=g,g.fieldType="textarea",g.newField=function(a,b){var c=a.Maxlength||2e3,d=e("textarea.mktoField",{id:a.Name,name:a.Name,placeholder:a.PlaceholderText,rows:Math.max(2,a.VisibleRows||2),title:a.Description,"aria-labelledby":[f.getLabelId(a.Name),f.getInstructionId(a.Name)].join(" ")});try{d.attr("maxlength",c)}catch(g){d.get(0).setAttribute("maxlength",""+c)}return{name:a.Name,elem:f.formatStandardField(d,a,b),val:function(a){return 0===arguments.length?d.val():(a&&a.length>c&&(a=a.substring(0,c)),d.val(a))},required:a.IsRequired,validatorElem:d,onChange:function(a){d.on("change",a)}}}},{"../jquery.js":45,"./fieldHelpers.js":29}],42:[function(a,b,c){var d=a("./jquery.js"),e=d.build,f=a("./validation.js"),g=a("./measure.js"),h=a("./fields/fieldhelpers.js"),i=h.cap,j=h.isSet,k=h.first,l=a("querystring"),m=a("url"),n=a("cookie"),o=a("./cookiehelper.js"),p=a("./tokenTemplate.js"),q=a("./changeManager.js"),r=a("./urlhelper.js"),s=a("./prefillcoercer.js"),t=a("./iframeproxy.js"),u=a("./safelog.js"),v=a("sha.js"),w=[a("./fields/inputRadio.js"),a("./fields/inputDate.js"),a("./fields/inputEmail.js"),a("./fields/inputCheckbox.js"),a("./fields/select.js"),a("./fields/inputRange.js"),a("./fields/inputText.js"),a("./fields/inputUrl.js"),a("./fields/inputTel.js"),a("./fields/inputNumber.js"),a("./fields/textarea.js"),a("./fields/currency.js")],x={};d.each(w,function(a,b){x[b.fieldType]=b}),x["int"]=x.number,x["double"]=x.number,x.single_checkbox=x.checkbox;var y=(a("./comparators.js"),navigator.userAgent.match(/msie ([6789])/i)),z=y?"ie"+y[1]:"",A=location.href,B=function(a,b,c){var w={},y={};y.hiddenFields={formid:a.Id},y.onSuccess=[],y.onSubmit=[],y.onValidate=[],y.values={},y.fieldsByName=h.getFieldsByName(h.getFlattenedFields(a)),y.changeMap=q.getChangeMap(y.fieldsByName,a),y.fieldElemsByName={},y.latestFieldsByName={},y.canSubmit="draft"!=a.Status&&!a.isPreview;var B=function(a){var b=y.changeMap[a]||[],c=!1,f={defaultValuesToSet:{},fieldsToCheck:[]};d.each(b,function(a,b){var g=y.fieldElemsByName[b];if(g&&g[0]&&d.contains(y.formElem[0],g[0])){var h,i,j=!g.hasClass("mktoPlaceholder"),k=y.fieldsByName[b],l=q.fieldChangeChecker(k.VisibilityRule,w.getValues()),m=l.show,n=function(a,c){var d=C(a,f),e=E(d),g=e.elem;return g.hide(),c.replaceWith(g),I()&&J(g),y.latestFieldsByName[b]=a,g},o=function(a,b){var c=e(".mktoPlaceholder.mktoPlaceholder"+a.Name);return b.replaceWith(c),c};j&&m&&(h=q.applyPicklistAlterations(k,l.rule),JSON.stringify(h)!==JSON.stringify(y.latestFieldsByName[b])&&(i=n(h,g),i.show(),c=!0)),j&&!m&&(i=o(k,g),y.fieldElemsByName[b]=i,f.fieldsToCheck.push(k)),!j&&m&&(h=q.applyPicklistAlterations(k,l.rule),i=n(h,g),i.show(),f.fieldsToCheck.push(k),c=!0),i&&(y.fieldElemsByName[b]=i),"fieldset"==k.Datatype&&B(k.Name),c&&i&&y.validation&&y.validation.initScoped(i)}}),w.setValues(f.defaultValuesToSet),d.each(f.fieldsToCheck,function(a,b){B(b.Name)}),c&&d("body").data("mktoRendered")&&d("body").trigger("mktoRender",w)},C=function(b,c){var f=y.values[b.Name]||b.DefaultValue||b.InputInitialValue;if(x[b.Datatype]){var g=x[b.Datatype].newField(b,a);if(g.validationMessage=g.validationMessage||b.ValidationMessage,g.requiredMessage=g.requiredMessage||b.RequiredMessage,g.required){if(!g.validatorElem)throw new Error("Required fields must have a validatorElem");g.validatorElem.addClass("mktoRequired"),"single_checkbox"!=b.Datatype&&"checkbox"!=b.Datatype&&"radio"!=b.Datatype&&g.validatorElem.attr("aria-required","true")}y.changeMap[b.Name]&&g.onChange(function(a){B(b.Name)}),j(f)&&(c.defaultValuesToSet[b.Name]=f);var h=e(".mktoFieldDescriptor",g.elem);return h.data("mktoFieldDescriptor",g),h}if("htmltext"==b.Datatype||"richtext"==b.Datatype)return e.docFrag([e(".mktoOffset.mktoHasWidth").css({width:k(b.OffsetWidth,a.OffsetWidth,0)}),e(".mktoFieldWrap",[e(".mktoHtmlText.mktoHasWidth",[e.html(b.Htmltext||b.InputLabel)]).css({width:k(b.LabelWidth,a.LabelWidth,0)}),e(".mktoClear")]),e(".mktoClear")]);if("hidden"==b.Datatype){var i=b.InputSourceChannel,o=b.InputSourceSelector,p=b.Name,q="";if("url"==i&&o){var r=l.parse(location.search.replace("?",""));q=r[o]||""}else if("cookie"==i&&o){var s=n.parse(document.cookie);q=s[o]}else if("referrer"==i&&o){var t=m.parse(document.referrer,!0);q=t.query[o]}return!q&&f&&(q=f),c.defaultValuesToSet[p]=q,G(q,p)}if("fieldset"==b.Datatype){var v=a.fieldsetRows[b.Id.toString()]||[];if(!v.length)return null;var w=e("fieldset",[e("legend",e.html(b.InputLabel)),d.map(v,function(a,b){return F(a,b,c)})]);return v.length&&v[0].length&&w.css({"padding-right":k(v[0][0].OffsetWidth,a.OffsetWidth,0)}),w}"profiling"!=b.Datatype&&u("invalid data type: "+b.Datatype)},D=function(b,c){var f=a.ProcessOptions,g=0;f&&f.profiling&&f.profiling.numberOfProfilingFields&&(g=f.profiling.numberOfProfilingFields);var h=b.ProfilingFieldNumber||g,i=a.fieldsetRows[b.Id.toString()]||[],k=[],l=0;return d.each(i,function(b,c){var e=[],f=[];a.filledFields&&(f=a.filledFields),d.each(c,function(a,b){!j(y.values[b.Name])&&-1==d.inArray(b.Name,f)&&h>l&&(e.push(b),l++)}),e.length>0&&k.push(e)}),e.docFrag(d.map(k,function(a,b){return F(a,b,c)}))},E=function(b){var c,d=0;return c=11==b.nodeType?e(".mktoFormCol",b):b.addClass("mktoFormCol"),d+=g.measure(c).w,c.css("margin-bottom",a.LineMargin||0),{elem:c,width:d}},F=function(a,b,c){var f=0;if(1==a.length&&"profiling"==a[0].Datatype)return D(a[0],c);var g=d.map(a,function(a,b){var d=C(a,c);if(!d)return null;var e=E(d);return f+=e.width,a.VisibilityRule&&"hidden"!=a.Datatype&&c.fieldsToCheck.push(a),y.fieldElemsByName[a.Name]=e.elem,e.elem});if(0===g.length)return null;var h=e(".mktoFormRow",[g,e(".mktoClear")]);return f>y.formWidth&&(y.formWidth=f),h},G=function(a,b){var c=e("input.mktoField.mktoFieldDescriptor",{type:"hidden",name:b}),f={name:b,val:d.proxy(c.val,c),onChange:function(a){c.on("change",a)}};return y.changeMap[b]&&f.onChange(function(a){B(field.Name)}),c.data("mktoFieldDescriptor",f),c},H=function(a,b){var c={},f=function(a,b){c[a]=b};w.setValues(b,f);var g=d.map(c,G);a.append(e.docFrag(g)),w.setValues(b)},I=function(){return window.matchMedia&&d("body.mktoMobileShow").length?window.matchMedia("only screen and (max-width:480px), only screen and (max-device-width:480px), only screen and (max-device-height:480px)").matches:d(window).width()<=480},J=function(a){var b=a.find(".mktoHasWidth").andSelf();b.each(function(){var a=d(this);a.data("mktoFixedWidth",a.css("width")),a.css("width","")})},K=function(){if(y.formElem){d(window).width();y.hasRemovedWidths?I()||(y.formElem.find(".mktoHasWidth").andSelf().each(function(){var a=d(this);a.css("width",a.data("mktoFixedWidth"))}),y.hasRemovedWidths=!1):I()&&(J(y.formElem),y.hasRemovedWidths=!0)}},L=function(b){var c=a.ButtonStyle||{className:""},d=a.ButtonText||a.SubmitLabel||"Submit",f=a.ButtonLocation||"",g=parseInt(f,10)||0,h=e("span.mktoButtonWrap",[e("button.mktoButton",{type:"submit"},[d])]).addClass(c.className).css({"margin-left":g+"px"});return h},M=function(){var b=a.ProcessOptions;if(!(b&&b.socialSignOn&&b.socialSignOn.isEnabled&&b.socialSignOn.enabledNetworks.length))return"";var c=b.socialSignOn.cfId+"_SocialSignOn",d=e(".cf_widgetLoader.cf_w_"+c);return window.cf_scripts&&window.CF?(setTimeout(function(){CF.widget.restart(c)},10),d):e.docFrag([e("script",{src:a.loaderJsUrl,type:"text/javascript"}),d])},N=function(c){c.addClass("mktoForm mktoHasWidth mktoLayout"+i(a.Layout||"left")+(b.csschecked?"":" mktoNoCheckedSupport")),z&&c.addClass(z)},O=function(a,b){var c=!0;return d.each(y.onSuccess,function(d,e){e(a,b)===!1&&(c=!1)}),c},P=function(a){var b,c=a.__cdrop;return c&&(b=c.split("."),3==b.length)?b[2]:null},Q=function(a){var b={};return d.each(a,function(a,c){d.isArray(c)&&c.length>1?b[a+"[]"]=c:b[a]=c}),b},R=function(){var a=location;return-1!=a.hostname.indexOf(c.fbTabDomain)&&-1!=a.search.indexOf("fbTab=1")},S=function(b){var c=R(),d="";if(b){var e=w.getValues().followupLpId>0;e||"string"!=typeof a.FormFollowup?b.followUpUrl&&"string"==typeof b.followUpUrl?d=b.followUpUrl:b.followUpUrl&&b.followUpUrl.url&&(c&&b.followUpUrl.isLandingPage?(d=r.remapLandingPageUrl(b.followUpUrl.url,location.href),d=r.addQueryParams(d,{fbTab:"1"})):d=b.followUpUrl.url):(d=a.FormFollowup,c&&0!==d.indexOf("https://")&&(d=r.remapLandingPageUrl(d,location.href),d=r.addQueryParams(d,{fbTab:"1"})))}return d=d||location.href,b.aliId&&(d=r.addQueryParams(d,{aliId:b.aliId})),d},T=function(){function e(a,b,c){var d;if(a&&a.responseJSON)d=a.responseJSON;else if(a&&a.responseText)try{d=JSON.parse(a.responseText)}catch(e){d=c}else d=c;C(d)}var f=w.getValues();if(window.Munchkin)try{window.Munchkin.createTrackingCookie(!0)}catch(g){}var h=m.parse(A,!0).query,i=n.parse(document.cookie),j=m.parse(a.action).hostname,k=(j?"//"+j:"")+c.formSubmitPath;window.location;R()&&(k=c.formSubmitPath,j=location.hostname);var p="json",q="POST";void 0===f._mkt_trk&&(f._mkt_trk=i._mkto_trk),f.formVid=a.Vid,h.mkt_tok&&void 0===f.mkt_tok&&(f.mkt_tok=h.mkt_tok);var r=P(i);r&&(f.MarketoSocialSyndicationId=r),f._mktoReferrer=A;var s=[],u=[],x=function(a){var b=0;d.each(a,function(a,c){b>=20||(s.push(c),u.push(a),b++)})};x(f),f.checksumFields=u.join(","),f.checksum=v("sha256").update(s.join("|")).digest("hex");var z=l.stringify(Q(f)),B=function(a){if(a.error)C(a);else if(a.formId){var b=S(a);if(!1===O(f,b))return;o.removeCookieAllDomains("_mkto_purl"),location.href=b}},C=function(b){var c=a.formSubmitFailedMsg||"Submission failed, please try again later.";"invalid"===b.errorType&&(c=a.invalidInputMsg||"Invalid input");var d=!1;if(b&&b.errorFields&&b.errorFields.length){var e=b.errorFields[0];if(e){var f=y.fieldElemsByName[e];if(f){var g=f.data("mktoFieldDescriptor");g&&g.validatorElem&&(y.validation.showError(g.validatorElem,c),d=!0)}}}if(y.submitButton){var h=y.submitButton.find("button");h.removeAttr("disabled"),h.html(a.ButtonText||a.SubmitLabel||"Submit"),d||y.validation.showError(h,c)}},D={type:q,data:z,dataType:p,url:k,success:B,error:C};j&&j!=location.hostname?b.postmessage&&b.json?t.send(D):(D.dataType="jsonp",D.submitUrl+="?callback=?",D.type="GET",D.error=e,d.ajax(D)):(D.error=e,d.ajax(D))},U=function(b){var c=w.validate();if(y.canSubmit&&c&&y.onSubmit&&d.each(y.onSubmit,function(a,b){b(w)}),b.preventDefault(),y.canSubmit&&c){var e=y.submitButton.find("button");return e.attr("disabled","disabled"),a.ButtonSubmissionText&&e.html(a.ButtonSubmissionText),T(),!1}return b.stopPropagation(),!1},V=function(b){var c=a.ButtonStyle||{className:""},d=e("span.mktoButtonWrap",[e("button.mktoButton",{type:"submit"},[b["default"]||""])]).addClass(c.className);return d.click(function(a){a.preventDefault(),T()}),d},W=function(a){return e("a.mktoNotYou",[a["default"]||"Not You?"]).click(function(){o.removeCookieAllDomains("_mkto_trk"),location.href=r.removeQueryParams(location.href,["mkt_tok","aliId"])})},X=function(){var b=a.ProcessOptions.knownLead.template;b=b.replace(/\{\[\((.*?)\)\]\}/g,"{{$1}}");var c={},f=0,g=function(a){return function(){var b=a.apply(null,arguments);if(b.jquery||b.nodeType){var d="__tempSwap"+f;return f++,c[d]=b,"<span id='"+d+"'></span>"}return b}},h=function(a){return d.each(a,function(b,c){a[b]=d("<div />").text(a[b]).html()}),a},i={lead:h(a.knownLead),form:{Button:g(V),NotYou:g(W)}},j=e("div.mktoTemplateBox",e.html(p(b,i)));return d.each(c,function(a,b){j.find("#"+a).replaceWith(b)}),j};w.render=function(b){y.id=a.Vid||a.Id||1,b||(b=d("form#mktoForm_"+(a.Vid||a.Id))),b.length||(b=e("form#mktoForm_"+(a.Vid||a.Id))),y.formElem=b,b.attr({novalidate:"novalidate"}),b.css({"font-family":a.FontFamily||"","font-size":a.FontSize||"",color:a.FontColor||""}),N(b),g.init(y.formElem),y.formWidth=0;var c={defaultValuesToSet:{},fieldsToCheck:[]},h=d.map(a.rows,function(a,b){return F(a,b,c)}),i=M();d.each(c.fieldsToCheck,function(a,b){if(!q.fieldChangeChecker(b.VisibilityRule,c.defaultValuesToSet).show){var d=e(".mktoPlaceholder.mktoPlaceholder"+b.Name),f=y.fieldElemsByName[b.Name];f&&(f.replaceWith(d),y.fieldElemsByName[b.Name]=d)}});var j="",k=a.ButtonStyle;return k&&(k.css&&(j+=k.css),k.buttonColor&&(j+="\n.mktoForm .mktoButtonWrap."+k.className+" button.mktoButton {background:"+k.buttonColor+";}\n")),b.append(e("style",{type:"text/css"},j)),a.knownLead&&a.ProcessOptions&&a.ProcessOptions.knownLead&&"custom"==a.ProcessOptions.knownLead.type?b.append(X()):b.append(e.docFrag([i,h,e(".mktoButtonRow",[y.submitButton=L(b)])])),H(b,y.hiddenFields),w.setValues(c.defaultValuesToSet),b.css({width:Math.max(y.submitButton?y.submitButton.outerWidth():0,y.formWidth+1)}),b.on("submit",U),y.validation=f(b),y.validation.init(),setTimeout(function(){d("body").trigger("mktoRender",w).data("mktoRendered",!0)},0),d(window).on("resize",K),K(),"ie7"==z&&Y(b),b};var Y=function(a){var b=a.find(".mktoFormRow, .mktoFormCol"),c=b.length;b.each(function(){d(this).css("z-index",c--)}),a.css("z-index",b.length+1)};w.getId=function(){return y.id},w.getFormElem=function(){return y.formElem},w.getElem=w.getFormElem(),w.validate=function(){var a=y.validation.check();return d.each(y.onValidate,function(b,c){c(a)}),a},w.onValidate=function(a){return a?y.onValidate.push(a):y.onValidate=[],w},w.offValidate=function(a){return y.onValidate=y.onValidate.filter(function(b){return b!==a}),w},w.submit=function(a){if(a&&"function"==typeof a){var b=function(){w.offSuccess(b),a.apply(null,arguments)};y.onSuccess.push(b)}return y.formElem.trigger("submit"),w},w.onSubmit=function(a){return a?y.onSubmit.push(a):y.onSubmit=[],w},w.offSubmit=function(a){return y.onSubmit=y.onSubmit.filter(function(b){return b!==a}),w},w.onSuccess=function(a){return a?y.onSuccess.push(a):y.onSuccess=[],w},w.offSuccess=function(a){return y.onSuccess=y.onSuccess.filter(function(b){return b!==a}),w},w.submitable=function(a){return arguments.length?(y.canSubmit=a,w):y.canSubmit},w.submittable=w.submitable,w.allFieldsFilled=function(){var a=w.getValues(),b=!0;return d.each(a,function(a,c){d.isArray(c)&&0===c.length?b=!1:(void 0===c||null===c||""===c)&&(b=!1)}),b};var Z=function(){var a={};return y.formElem.find(".mktoFieldDescriptor").each(function(b,c){var e=d(c),f=e.data("mktoFieldDescriptor");a[f.name]=f.val}),a};return w.setValuesCoerced=function(b){var c=s.coerceTypes(b,a);w.setValues(c)},w.setValues=function(a,b){if(y.formElem){var c=[],e=Z();d.each(a,function(a,d){e[a]?e[a](d):b&&b(a,d),y.changeMap[a]&&c.push(a)}),d.each(c,function(b,c){B(c);var e=Z();d.each(y.changeMap[c],function(b,c){e[c]&&void 0!==a[c]&&e[c](a[c])})})}else y.values=a;return w},w.addHiddenFields=function(a){y.formElem?H(y.formElem,a):d.extend(y.hiddenFields,a)},w.getValues=function(){if(y.formElem){var a={},b=Z();return d.each(b,function(b,c){var d=c();a[b]=d}),a}return y.values},w.vals=function(){return 0===arguments.length?w.getValues():w.setValues.apply(null,arguments)},w.showErrorMessage=function(a,b){return y.validation&&(b||(b=y.submitButton),y.validation.showError(b,a)),w},w.setErrorMessages=function(a){d.each(a,function(a,b){if(y.fieldsByName[a].ValidationMessage=b,y.formElem){var c=y.fieldElemsByName[a];if(c){var d=c.data("mktoFieldDescriptor");d&&(d.validationMessage=b,c.data("mktoFieldDescriptor",d))}}})},w};b.exports=B},{"./changeManager.js":24,"./comparators.js":26,"./cookiehelper.js":27,"./fields/currency.js":28,"./fields/fieldhelpers.js":30,"./fields/inputCheckbox.js":31,"./fields/inputDate.js":32,"./fields/inputEmail.js":33,"./fields/inputNumber.js":34,"./fields/inputRadio.js":35,"./fields/inputRange.js":36,"./fields/inputTel.js":37,"./fields/inputText.js":38,"./fields/inputUrl.js":39,"./fields/select.js":40,"./fields/textarea.js":41,"./iframeproxy.js":44,"./jquery.js":45,"./measure.js":46,"./prefillcoercer.js":49,"./safelog.js":50,"./tokenTemplate.js":52,"./urlhelper.js":53,"./validation.js":54,cookie:5,querystring:13,"sha.js":16,url:23}],43:[function(a,b,c){if("undefined"!=typeof window&&window.MktoForms2)return void(b.exports=window.MktoForms2);var d=a("./jquery.js");d.noConflict();var e=a("jquery.build")(d,document),f=a("./form.js");a("./shimsham.js");var g={};g.$=d,g.$b=e,g.Modernizr=a("./modernizr.js");var h=g.Modernizr,i=a("querystring"),j=a("./fields/fieldhelpers.js"),k=a("cookie"),l=a("events"),m=new l.EventEmitter,n=a("url"),o=a("./iframeproxy.js"),p=a("./color.js"),q=a("./safelog.js"),r={rootUrl:"",baseUrl:"/js/forms2/",skipPolyfills:!1,formSubmitPath:"/index.php/leadCapture/save2",formXDPath:"/index.php/form/XDFrame",fbTabDomain:"marketo.com"},s=[];g.setOptions=function(a){d.extend(r,a)};var t=function(a){var b=e("#mktoStyleLoaded").css({display:"none","border-top-color":"#123456"}).appendTo(d("body")),c=0,f=1500,g=25,h=function(){var d=b.css("color"),e=b.css("background-color"),i=b.css("border-top-color");c>f/g?(q("Timeout loading CSS. #mktoStyleLoaded missing color #123456 for one of color, background-color, or border-top-color.",d,e,i),a()):p.compareColor(i,e)&&p.compareColor(i,d)?y(a):(c++,setTimeout(h,g))};h()},u=function(a,b){0===b.indexOf("//")&&(b=location.protocol+b);var c=e("link",{id:a,rel:"stylesheet",type:"text/css",href:b});d("head").append(c),document.createStyleSheet&&document.createStyleSheet(b)},v=function(a,b){window.console&&console.log("Error loading form:",a),b&&b(null)},w=function(a){return 0===a.indexOf("/")&&0!==a.indexOf("//")},x=function(a,b){var c="json";w(a)||(c="jsonp",a+="&callback=?"),d.ajax({dataType:c,url:a,success:b,error:function(a,c,d){v(d,b)}})};g.loadForm=function(a,b,c,d){g.setOptions({rootUrl:a,baseUrl:a+"/js/forms2/"});var e=function(c){c.action=(0===a.indexOf("http")?a:location.protocol+a)+r.formSubmitPath,g.newForm(c,function(a){a.addHiddenFields({munchkinId:b}),a.render(),d&&d(a)})},f=location.href.split("?")[0].split("#")[0];f.length>255&&(f=f.substring(0,255));var h=a+"/index.php/form/getForm?munchkinId="+b+"&form="+c+"&url="+encodeURIComponent(f);return x(h,function(a){a.error?v(a,d):e(a)}),g},g.lightbox=function(b,c){var d,e;return c=c||{},b.getFormElem?(b.getFormElem()||b.render(),d=b.getFormElem(),b.onSuccess(c.onSuccess||function(a,b){return e.hide(),b?void 0:!1})):d=b,e=a("./modal.js")(d,c)};var y=function(a){setTimeout(a,0)},z=function(a,b,c,e,f){if(window.mktoPreFillFields&&mktoPreFillFields.FirstName&&mktoPreFillFields.LastName)return void y(function(){e(mktoPreFillFields)});var g=k.parse(document.cookie),h=i.parse(location.search.replace("?","")),j=r.rootUrl+"/index.php/form/getKnownLead?";if(g._mkto_trk||h.mkt_tok){var l={form:a,lpId:f,munchkinId:b,filledFields:c};return g._mkto_trk&&(l._mkt_trk=g._mkto_trk),h.mkt_tok&&(l.mkt_tok=h.mkt_tok),j+=i.stringify(l),void x(j,function(a){a&&a.error?v(a,e):(window.mktoPreFillFields&&(a=d.extend({},window.mktoPrefillFields,a)),e(a))})}y(e)};g.newForm=function(a,b){if(0===d("#mktoForms2BaseStyle").length){var c=r.baseUrl+"css/forms2.css";u("mktoForms2BaseStyle",c)}0===d("#mktoForms2ThemeStyle").length&&a.ThemeStyle&&a.ThemeStyle.href?u("mktoForms2ThemeStyle",r.baseUrl+a.ThemeStyle.href):d("head").append(e("style","#mktoStyleLoaded {color:#123456;}")),a.FontUrl&&u("mktoFontUrl",a.FontUrl),a.ThemeStyleOverride&&d("head").append(e("style",a.ThemeStyleOverride)),g._polyfillsLoaded||(B(a),g._polyfillsLoaded=!0);var i=a.ProcessOptions,j=0,k=function(){var a=location;return-1!=a.hostname.indexOf(r.fbTabDomain)&&-1!=a.search.indexOf("fbTab=1")},l=function(){return-1!=location.hostname.indexOf(".marketodesigner.com")},p=function(){if(j--,0>=j){var c=f(a,h,r);s.push(c),b&&b(c),y(function(){if(a.action&&!k()&&!l()){var b=n.parse(a.action).hostname;b&&b!=location.hostname&&h.postmessage&&h.json&&o.init("//"+b+r.formXDPath)}}),y(function(){m.emit("mktoFormReady",c)})}},q=i&&i.profiling&&i.profiling.isEnabled,v=i&&i.knownLead&&"custom"==i.knownLead.type&&a.munchkinId;(v||q)&&(j++,z(a.Vid,a.munchkinId,q,function(b){b&&(a.filledFields=b.filledFields,b.FirstName&&b.LastName&&(a.knownLead=b)),p()},a.lpId)),j++,t(p)},g.getForm=function(a){for(var b=0;b<s.length;b++)if(""+s[b].getId()==""+a)return s[b]},g.getPageFields=function(){var a=i.parse(location.search.replace("?","")),b=i.parse(document.referrer.split("?")[0]);return{cr:a.cr||"",kw:a.kw||"",q:b.q||""}},g.allForms=function(){return s};var A=function(a){d.each(g.allForms(),function(b,c){y(function(){a(c)})})};g.whenReady=function(a){return m.on("mktoFormReady",a),A(a),g},g.onFormRender=function(a){return d("body").on("mktoRender",function(b,c){a(c)}),g},g.whenRendered=function(a){return g.onFormRender(a),A(a),g};var B=function(a){y(function(){var b=j.getFlattenedFields(a),c=j.getFieldTypes(b);if(!r.skipPolyfills){var d=r.baseUrl,e=h.load;e({test:h.input.placeholder,nope:[d+"polyfills/placeholder/placeholder.js",d+"polyfills/placeholder/placeholder.css"]}),e({test:c.date&&!h.inputtypes.date,yep:[d+"polyfills/datepicker/datepicker.js",d+"polyfills/datepicker/datepicker.css"]}),e({test:c.range&&!h.inputtypes.range,yep:[d+"polyfills/range/range.js",d+"polyfills/range/range.css"]}),e({test:c.textarea&&!h.textareamaxlength,yep:[d+"polyfills/maxlength/maxlength.js"]});var f=j.anyFieldHasProperty(b,"FieldMask");if(f){var g=/Android/i.test(navigator.userAgent);e({test:g,yep:[d+"polyfills/inputmask/jquery.mask.min.js"],nope:[d+"polyfills/inputmask/inputmask.min.js"]})}}})};"undefined"!=typeof window&&(window.MktoForms2=g),b.exports=g},{"./color.js":25,"./fields/fieldhelpers.js":30,"./form.js":42,"./iframeproxy.js":44,"./jquery.js":45,"./modal.js":47,"./modernizr.js":48,"./safelog.js":50,"./shimsham.js":51,cookie:5,events:6,"jquery.build":9,querystring:13,url:23}],44:[function(a,b,c){function d(a){return 0===a.indexOf("//")?a.match(/^\/\/app-.*?\.marketo\.com/i)?"https:"+a:location.protocol+a:0===a.indexOf("/")?location.protocol+"//"+location.hostname+a:a}function e(a){if(a.originalEvent&&a.originalEvent.data){var b=l.parse(j),c=l.parse(a.originalEvent.origin);if(b.protocol!==c.protocol||b.port!==c.port||b.hostname!==c.hostname)return;var d;try{d=k.parseJSON(a.originalEvent.data)}catch(e){return}d.mktoReady?g():d.mktoResponse&&f(d.mktoResponse)}}function f(a){var b=a["for"],c=t[b];c&&(a.error?c.error(a.data):c.success(a.data)),delete t[b]}function g(){r=!0,k.each(u,function(a,b){h(b)}),u=[]}function h(a){var b="mktoFormMessage"+q++;if(t[b]={error:a.error,success:a.success},a.complete)throw new Error("complete parameter not supported");a.error=null,a.success=null;var c=l.parse(j);p.postMessage(JSON.stringify({mktoRequest:{ajaxParams:a,id:b}}),c.protocol+"//"+c.hostname)}function i(a){r?h(a):u.push(a)}var j,k=a("./jquery.js"),l=a("url"),m=k.build,n={},o=null,p=null,q=0,r=!1,s="mktoFormsXDIframe"+Math.random(),t={},u=[];n.init=function(a){o||(j=d(a),k("body").append(o=m("iframe#MktoForms2XDIframe",{name:s}).css({display:"none"})),o.get(0).src=j,p=window.frames[s],p||(p=o.get(0).contentWindow),k(window).on("message",e))},n.send=function(a){i(a)},b.exports=n},{"./jquery.js":45,url:23}],45:[function(a,b,c){!function(a,c){"object"==typeof b&&"object"==typeof b.exports?b.exports=a.document?c(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return c(a)}:c(a)}("undefined"!=typeof window?window:this,function(a,b){function c(a){var b=!!a&&"length"in a&&a.length,c=na.type(a);return"function"===c||na.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}function d(a,b,c){if(na.isFunction(b))return na.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return na.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(xa.test(b))return na.filter(b,a,c);b=na.filter(b,a)}return na.grep(a,function(a){return na.inArray(a,b)>-1!==c})}function e(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}function f(a){var b={};return na.each(a.match(Da)||[],function(a,c){b[c]=!0}),b}function g(){da.addEventListener?(da.removeEventListener("DOMContentLoaded",h),a.removeEventListener("load",h)):(da.detachEvent("onreadystatechange",h),a.detachEvent("onload",h))}function h(){(da.addEventListener||"load"===a.event.type||"complete"===da.readyState)&&(g(),na.ready())}function i(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(Ia,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:Ha.test(c)?na.parseJSON(c):c}catch(e){}na.data(a,b,c)}else c=void 0}return c}function j(a){var b;for(b in a)if(("data"!==b||!na.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function k(a,b,c,d){if(Ga(a)){var e,f,g=na.expando,h=a.nodeType,i=h?na.cache:a,j=h?a[g]:a[g]&&g;if(j&&i[j]&&(d||i[j].data)||void 0!==c||"string"!=typeof b)return j||(j=h?a[g]=ca.pop()||na.guid++:g),i[j]||(i[j]=h?{}:{toJSON:na.noop}),("object"==typeof b||"function"==typeof b)&&(d?i[j]=na.extend(i[j],b):i[j].data=na.extend(i[j].data,b)),f=i[j],d||(f.data||(f.data={}),f=f.data),void 0!==c&&(f[na.camelCase(b)]=c),"string"==typeof b?(e=f[b],null==e&&(e=f[na.camelCase(b)])):e=f,e}}function l(a,b,c){if(Ga(a)){var d,e,f=a.nodeType,g=f?na.cache:a,h=f?a[na.expando]:na.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){na.isArray(b)?b=b.concat(na.map(b,na.camelCase)):b in d?b=[b]:(b=na.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;for(;e--;)delete d[b[e]];if(c?!j(d):!na.isEmptyObject(d))return}(c||(delete g[h].data,j(g[h])))&&(f?na.cleanData([a],!0):la.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}function m(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return na.css(a,b,"")},i=h(),j=c&&c[3]||(na.cssNumber[b]?"":"px"),k=(na.cssNumber[b]||"px"!==j&&+i)&&Ka.exec(na.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,na.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}function n(a){var b=Sa.split("|"),c=a.createDocumentFragment();if(c.createElement)for(;b.length;)c.createElement(b.pop());return c}function o(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||na.nodeName(d,b)?f.push(d):na.merge(f,o(d,b));return void 0===b||b&&na.nodeName(a,b)?na.merge([a],f):f}function p(a,b){for(var c,d=0;null!=(c=a[d]);d++)na._data(c,"globalEval",!b||na._data(b[d],"globalEval"))}function q(a){Oa.test(a.type)&&(a.defaultChecked=a.checked)}function r(a,b,c,d,e){for(var f,g,h,i,j,k,l,m=a.length,r=n(b),s=[],t=0;m>t;t++)if(g=a[t],
g||0===g)if("object"===na.type(g))na.merge(s,g.nodeType?[g]:g);else if(Ua.test(g)){for(i=i||r.appendChild(b.createElement("div")),j=(Pa.exec(g)||["",""])[1].toLowerCase(),l=Ta[j]||Ta._default,i.innerHTML=l[1]+na.htmlPrefilter(g)+l[2],f=l[0];f--;)i=i.lastChild;if(!la.leadingWhitespace&&Ra.test(g)&&s.push(b.createTextNode(Ra.exec(g)[0])),!la.tbody)for(g="table"!==j||Va.test(g)?"<table>"!==l[1]||Va.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;f--;)na.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k);for(na.merge(s,i.childNodes),i.textContent="";i.firstChild;)i.removeChild(i.firstChild);i=r.lastChild}else s.push(b.createTextNode(g));for(i&&r.removeChild(i),la.appendChecked||na.grep(o(s,"input"),q),t=0;g=s[t++];)if(d&&na.inArray(g,d)>-1)e&&e.push(g);else if(h=na.contains(g.ownerDocument,g),i=o(r.appendChild(g),"script"),h&&p(i),c)for(f=0;g=i[f++];)Qa.test(g.type||"")&&c.push(g);return i=null,r}function s(){return!0}function t(){return!1}function u(){try{return da.activeElement}catch(a){}}function v(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)v(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=t;else if(!e)return a;return 1===f&&(g=e,e=function(a){return na().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=na.guid++)),a.each(function(){na.event.add(this,b,e,d,c)})}function w(a,b){return na.nodeName(a,"table")&&na.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function x(a){return a.type=(null!==na.find.attr(a,"type"))+"/"+a.type,a}function y(a){var b=eb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function z(a,b){if(1===b.nodeType&&na.hasData(a)){var c,d,e,f=na._data(a),g=na._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)na.event.add(b,c,h[c][d])}g.data&&(g.data=na.extend({},g.data))}}function A(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!la.noCloneEvent&&b[na.expando]){e=na._data(b);for(d in e.events)na.removeEvent(b,d,e.handle);b.removeAttribute(na.expando)}"script"===c&&b.text!==a.text?(x(b).text=a.text,y(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),la.html5Clone&&a.innerHTML&&!na.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Oa.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}function B(a,b,c,d){b=fa.apply([],b);var e,f,g,h,i,j,k=0,l=a.length,m=l-1,n=b[0],p=na.isFunction(n);if(p||l>1&&"string"==typeof n&&!la.checkClone&&db.test(n))return a.each(function(e){var f=a.eq(e);p&&(b[0]=n.call(this,e,f.html())),B(f,b,c,d)});if(l&&(j=r(b,a[0].ownerDocument,!1,a,d),e=j.firstChild,1===j.childNodes.length&&(j=e),e||d)){for(h=na.map(o(j,"script"),x),g=h.length;l>k;k++)f=j,k!==m&&(f=na.clone(f,!0,!0),g&&na.merge(h,o(f,"script"))),c.call(a[k],f,k);if(g)for(i=h[h.length-1].ownerDocument,na.map(h,y),k=0;g>k;k++)f=h[k],Qa.test(f.type||"")&&!na._data(f,"globalEval")&&na.contains(i,f)&&(f.src?na._evalUrl&&na._evalUrl(f.src):na.globalEval((f.text||f.textContent||f.innerHTML||"").replace(fb,"")));j=e=null}return a}function C(a,b,c){for(var d,e=b?na.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||na.cleanData(o(d)),d.parentNode&&(c&&na.contains(d.ownerDocument,d)&&p(o(d,"script")),d.parentNode.removeChild(d));return a}function D(a,b){var c=na(b.createElement(a)).appendTo(b.body),d=na.css(c[0],"display");return c.detach(),d}function E(a){var b=da,c=jb[a];return c||(c=D(a,b),"none"!==c&&c||(ib=(ib||na("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(ib[0].contentWindow||ib[0].contentDocument).document,b.write(),b.close(),c=D(a,b),ib.detach()),jb[a]=c),c}function F(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}function G(a){if(a in yb)return a;for(var b=a.charAt(0).toUpperCase()+a.slice(1),c=xb.length;c--;)if(a=xb[c]+b,a in yb)return a}function H(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=na._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&Ma(d)&&(f[g]=na._data(d,"olddisplay",E(d.nodeName)))):(e=Ma(d),(c&&"none"!==c||!e)&&na._data(d,"olddisplay",e?c:na.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function I(a,b,c){var d=ub.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function J(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=na.css(a,c+La[f],!0,e)),d?("content"===c&&(g-=na.css(a,"padding"+La[f],!0,e)),"margin"!==c&&(g-=na.css(a,"border"+La[f]+"Width",!0,e))):(g+=na.css(a,"padding"+La[f],!0,e),"padding"!==c&&(g+=na.css(a,"border"+La[f]+"Width",!0,e)));return g}function K(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=ob(a),g=la.boxSizing&&"border-box"===na.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=pb(a,b,f),(0>e||null==e)&&(e=a.style[b]),lb.test(e))return e;d=g&&(la.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+J(a,b,c||(g?"border":"content"),d,f)+"px"}function L(a,b,c,d,e){return new L.prototype.init(a,b,c,d,e)}function M(){return a.setTimeout(function(){zb=void 0}),zb=na.now()}function N(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=La[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function O(a,b,c){for(var d,e=(R.tweeners[b]||[]).concat(R.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function P(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},n=a.style,o=a.nodeType&&Ma(a),p=na._data(a,"fxshow");c.queue||(h=na._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,na.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[n.overflow,n.overflowX,n.overflowY],j=na.css(a,"display"),k="none"===j?na._data(a,"olddisplay")||E(a.nodeName):j,"inline"===k&&"none"===na.css(a,"float")&&(la.inlineBlockNeedsLayout&&"inline"!==E(a.nodeName)?n.zoom=1:n.display="inline-block")),c.overflow&&(n.overflow="hidden",la.shrinkWrapBlocks()||l.always(function(){n.overflow=c.overflow[0],n.overflowX=c.overflow[1],n.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Bb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(o?"hide":"show")){if("show"!==e||!p||void 0===p[d])continue;o=!0}m[d]=p&&p[d]||na.style(a,d)}else j=void 0;if(na.isEmptyObject(m))"inline"===("none"===j?E(a.nodeName):j)&&(n.display=j);else{p?"hidden"in p&&(o=p.hidden):p=na._data(a,"fxshow",{}),f&&(p.hidden=!o),o?na(a).show():l.done(function(){na(a).hide()}),l.done(function(){var b;na._removeData(a,"fxshow");for(b in m)na.style(a,b,m[b])});for(d in m)g=O(o?p[d]:0,d,l),d in p||(p[d]=g.start,o&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Q(a,b){var c,d,e,f,g;for(c in a)if(d=na.camelCase(c),e=b[d],f=a[c],na.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=na.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function R(a,b,c){var d,e,f=0,g=R.prefilters.length,h=na.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=zb||M(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:na.extend({},b),opts:na.extend(!0,{specialEasing:{},easing:na.easing._default},c),originalProperties:b,originalOptions:c,startTime:zb||M(),duration:c.duration,tweens:[],createTween:function(b,c){var d=na.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Q(k,j.opts.specialEasing);g>f;f++)if(d=R.prefilters[f].call(j,a,k,j.opts))return na.isFunction(d.stop)&&(na._queueHooks(j.elem,j.opts.queue).stop=na.proxy(d.stop,d)),d;return na.map(k,O,j),na.isFunction(j.opts.start)&&j.opts.start.call(a,j),na.fx.timer(na.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function S(a){return na.attr(a,"class")||""}function T(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(Da)||[];if(na.isFunction(c))for(;d=f[e++];)"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function U(a,b,c,d){function e(h){var i;return f[h]=!0,na.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||g||f[j]?g?!(i=j):void 0:(b.dataTypes.unshift(j),e(j),!1)}),i}var f={},g=a===$b;return e(b.dataTypes[0])||!f["*"]&&e("*")}function V(a,b){var c,d,e=na.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&na.extend(!0,a,c),a}function W(a,b,c){for(var d,e,f,g,h=a.contents,i=a.dataTypes;"*"===i[0];)i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function X(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];for(f=k.shift();f;)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}function Y(a){return a.style&&a.style.display||na.css(a,"display")}function Z(a){if(!na.contains(a.ownerDocument||da,a))return!0;for(;a&&1===a.nodeType;){if("none"===Y(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}function $(a,b,c,d){var e;if(na.isArray(b))na.each(b,function(b,e){c||dc.test(a)?d(a,e):$(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==na.type(b))d(a,b);else for(e in b)$(a+"["+e+"]",b[e],c,d)}function _(){try{return new a.XMLHttpRequest}catch(b){}}function aa(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ba(a){return na.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}var ca=[],da=a.document,ea=ca.slice,fa=ca.concat,ga=ca.push,ha=ca.indexOf,ia={},ja=ia.toString,ka=ia.hasOwnProperty,la={},ma="1.12.4",na=function(a,b){return new na.fn.init(a,b)},oa=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,pa=/^-ms-/,qa=/-([\da-z])/gi,ra=function(a,b){return b.toUpperCase()};na.fn=na.prototype={jquery:ma,constructor:na,selector:"",length:0,toArray:function(){return ea.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:ea.call(this)},pushStack:function(a){var b=na.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return na.each(this,a)},map:function(a){return this.pushStack(na.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(ea.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:ga,sort:ca.sort,splice:ca.splice},na.extend=na.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||na.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(na.isPlainObject(c)||(b=na.isArray(c)))?(b?(b=!1,f=a&&na.isArray(a)?a:[]):f=a&&na.isPlainObject(a)?a:{},g[d]=na.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},na.extend({expando:"jQuery"+(ma+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===na.type(a)},isArray:Array.isArray||function(a){return"array"===na.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!na.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==na.type(a)||a.nodeType||na.isWindow(a))return!1;try{if(a.constructor&&!ka.call(a,"constructor")&&!ka.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!la.ownFirst)for(b in a)return ka.call(a,b);for(b in a);return void 0===b||ka.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?ia[ja.call(a)]||"object":typeof a},globalEval:function(b){b&&na.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(pa,"ms-").replace(qa,ra)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var d,e=0;if(c(a))for(d=a.length;d>e&&b.call(a[e],e,a[e])!==!1;e++);else for(e in a)if(b.call(a[e],e,a[e])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(oa,"")},makeArray:function(a,b){var d=b||[];return null!=a&&(c(Object(a))?na.merge(d,"string"==typeof a?[a]:a):ga.call(d,a)),d},inArray:function(a,b,c){var d;if(b){if(ha)return ha.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;)a[e++]=b[d++];if(c!==c)for(;void 0!==b[d];)a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,d){var e,f,g=0,h=[];if(c(a))for(e=a.length;e>g;g++)f=b(a[g],g,d),null!=f&&h.push(f);else for(g in a)f=b(a[g],g,d),null!=f&&h.push(f);return fa.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;return"string"==typeof b&&(e=a[b],b=a,a=e),na.isFunction(a)?(c=ea.call(arguments,2),d=function(){return a.apply(b||this,c.concat(ea.call(arguments)))},d.guid=a.guid=a.guid||na.guid++,d):void 0},now:function(){return+new Date},support:la}),"function"==typeof Symbol&&(na.fn[Symbol.iterator]=ca[Symbol.iterator]),na.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){ia["[object "+b+"]"]=b.toLowerCase()});var sa=function(a){function b(a,b,c,d){var e,f,g,h,i,j,l,n,o=b&&b.ownerDocument,p=b?b.nodeType:9;if(c=c||[],"string"!=typeof a||!a||1!==p&&9!==p&&11!==p)return c;if(!d&&((b?b.ownerDocument||b:O)!==G&&F(b),b=b||G,I)){if(11!==p&&(j=ra.exec(a)))if(e=j[1]){if(9===p){if(!(g=b.getElementById(e)))return c;if(g.id===e)return c.push(g),c}else if(o&&(g=o.getElementById(e))&&M(b,g)&&g.id===e)return c.push(g),c}else{if(j[2])return $.apply(c,b.getElementsByTagName(a)),c;if((e=j[3])&&v.getElementsByClassName&&b.getElementsByClassName)return $.apply(c,b.getElementsByClassName(e)),c}if(v.qsa&&!T[a+" "]&&(!J||!J.test(a))){if(1!==p)o=b,n=a;else if("object"!==b.nodeName.toLowerCase()){for((h=b.getAttribute("id"))?h=h.replace(ta,"\\$&"):b.setAttribute("id",h=N),l=z(a),f=l.length,i=ma.test(h)?"#"+h:"[id='"+h+"']";f--;)l[f]=i+" "+m(l[f]);n=l.join(","),o=sa.test(a)&&k(b.parentNode)||b}if(n)try{return $.apply(c,o.querySelectorAll(n)),c}catch(q){}finally{h===N&&b.removeAttribute("id")}}}return B(a.replace(ha,"$1"),b,c,d)}function c(){function a(c,d){return b.push(c+" ")>w.cacheLength&&delete a[b.shift()],a[c+" "]=d}var b=[];return a}function d(a){return a[N]=!0,a}function e(a){var b=G.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function f(a,b){for(var c=a.split("|"),d=c.length;d--;)w.attrHandle[c[d]]=b}function g(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||V)-(~a.sourceIndex||V);if(d)return d;if(c)for(;c=c.nextSibling;)if(c===b)return-1;return a?1:-1}function h(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function i(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function j(a){return d(function(b){return b=+b,d(function(c,d){for(var e,f=a([],c.length,b),g=f.length;g--;)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function k(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}function l(){}function m(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function n(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=Q++;return b.first?function(b,c,f){for(;b=b[d];)if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[P,f];if(g){for(;b=b[d];)if((1===b.nodeType||e)&&a(b,c,g))return!0}else for(;b=b[d];)if(1===b.nodeType||e){if(j=b[N]||(b[N]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===P&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function o(a){return a.length>1?function(b,c,d){for(var e=a.length;e--;)if(!a[e](b,c,d))return!1;return!0}:a[0]}function p(a,c,d){for(var e=0,f=c.length;f>e;e++)b(a,c[e],d);return d}function q(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function r(a,b,c,e,f,g){return e&&!e[N]&&(e=r(e)),f&&!f[N]&&(f=r(f,g)),d(function(d,g,h,i){var j,k,l,m=[],n=[],o=g.length,r=d||p(b||"*",h.nodeType?[h]:h,[]),s=!a||!d&&b?r:q(r,m,a,h,i),t=c?f||(d?a:o||e)?[]:g:s;if(c&&c(s,t,h,i),e)for(j=q(t,n),e(j,[],h,i),k=j.length;k--;)(l=j[k])&&(t[n[k]]=!(s[n[k]]=l));if(d){if(f||a){if(f){for(j=[],k=t.length;k--;)(l=t[k])&&j.push(s[k]=l);f(null,t=[],j,i)}for(k=t.length;k--;)(l=t[k])&&(j=f?aa(d,l):m[k])>-1&&(d[j]=!(g[j]=l))}}else t=q(t===g?t.splice(o,t.length):t),f?f(null,g,t,i):$.apply(g,t)})}function s(a){for(var b,c,d,e=a.length,f=w.relative[a[0].type],g=f||w.relative[" "],h=f?1:0,i=n(function(a){return a===b},g,!0),j=n(function(a){return aa(b,a)>-1},g,!0),k=[function(a,c,d){var e=!f&&(d||c!==C)||((b=c).nodeType?i(a,c,d):j(a,c,d));return b=null,e}];e>h;h++)if(c=w.relative[a[h].type])k=[n(o(k),c)];else{if(c=w.filter[a[h].type].apply(null,a[h].matches),c[N]){for(d=++h;e>d&&!w.relative[a[d].type];d++);return r(h>1&&o(k),h>1&&m(a.slice(0,h-1).concat({value:" "===a[h-2].type?"*":""})).replace(ha,"$1"),c,d>h&&s(a.slice(h,d)),e>d&&s(a=a.slice(d)),e>d&&m(a))}k.push(c)}return o(k)}function t(a,c){var e=c.length>0,f=a.length>0,g=function(d,g,h,i,j){var k,l,m,n=0,o="0",p=d&&[],r=[],s=C,t=d||f&&w.find.TAG("*",j),u=P+=null==s?1:Math.random()||.1,v=t.length;for(j&&(C=g===G||g||j);o!==v&&null!=(k=t[o]);o++){if(f&&k){for(l=0,g||k.ownerDocument===G||(F(k),h=!I);m=a[l++];)if(m(k,g||G,h)){i.push(k);break}j&&(P=u)}e&&((k=!m&&k)&&n--,d&&p.push(k))}if(n+=o,e&&o!==n){for(l=0;m=c[l++];)m(p,r,g,h);if(d){if(n>0)for(;o--;)p[o]||r[o]||(r[o]=Y.call(i));r=q(r)}$.apply(i,r),j&&!d&&r.length>0&&n+c.length>1&&b.uniqueSort(i)}return j&&(P=u,C=s),p};return e?d(g):g}var u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N="sizzle"+1*new Date,O=a.document,P=0,Q=0,R=c(),S=c(),T=c(),U=function(a,b){return a===b&&(E=!0),0},V=1<<31,W={}.hasOwnProperty,X=[],Y=X.pop,Z=X.push,$=X.push,_=X.slice,aa=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},ba="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ca="[\\x20\\t\\r\\n\\f]",da="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ea="\\["+ca+"*("+da+")(?:"+ca+"*([*^$|!~]?=)"+ca+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+da+"))|)"+ca+"*\\]",fa=":("+da+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ea+")*)|.*)\\)|)",ga=new RegExp(ca+"+","g"),ha=new RegExp("^"+ca+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ca+"+$","g"),ia=new RegExp("^"+ca+"*,"+ca+"*"),ja=new RegExp("^"+ca+"*([>+~]|"+ca+")"+ca+"*"),ka=new RegExp("="+ca+"*([^\\]'\"]*?)"+ca+"*\\]","g"),la=new RegExp(fa),ma=new RegExp("^"+da+"$"),na={ID:new RegExp("^#("+da+")"),CLASS:new RegExp("^\\.("+da+")"),TAG:new RegExp("^("+da+"|[*])"),ATTR:new RegExp("^"+ea),PSEUDO:new RegExp("^"+fa),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ca+"*(even|odd|(([+-]|)(\\d*)n|)"+ca+"*(?:([+-]|)"+ca+"*(\\d+)|))"+ca+"*\\)|)","i"),bool:new RegExp("^(?:"+ba+")$","i"),needsContext:new RegExp("^"+ca+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ca+"*((?:-\\d)?\\d*)"+ca+"*\\)|)(?=[^-]|$)","i")},oa=/^(?:input|select|textarea|button)$/i,pa=/^h\d$/i,qa=/^[^{]+\{\s*\[native \w/,ra=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,sa=/[+~]/,ta=/'|\\/g,ua=new RegExp("\\\\([\\da-f]{1,6}"+ca+"?|("+ca+")|.)","ig"),va=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},wa=function(){F()};try{$.apply(X=_.call(O.childNodes),O.childNodes),X[O.childNodes.length].nodeType}catch(xa){$={apply:X.length?function(a,b){Z.apply(a,_.call(b))}:function(a,b){for(var c=a.length,d=0;a[c++]=b[d++];);a.length=c-1}}}v=b.support={},y=b.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},F=b.setDocument=function(a){var b,c,d=a?a.ownerDocument||a:O;return d!==G&&9===d.nodeType&&d.documentElement?(G=d,H=G.documentElement,I=!y(G),(c=G.defaultView)&&c.top!==c&&(c.addEventListener?c.addEventListener("unload",wa,!1):c.attachEvent&&c.attachEvent("onunload",wa)),v.attributes=e(function(a){return a.className="i",!a.getAttribute("className")}),v.getElementsByTagName=e(function(a){return a.appendChild(G.createComment("")),!a.getElementsByTagName("*").length}),v.getElementsByClassName=qa.test(G.getElementsByClassName),v.getById=e(function(a){return H.appendChild(a).id=N,!G.getElementsByName||!G.getElementsByName(N).length}),v.getById?(w.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&I){var c=b.getElementById(a);return c?[c]:[]}},w.filter.ID=function(a){var b=a.replace(ua,va);return function(a){return a.getAttribute("id")===b}}):(delete w.find.ID,w.filter.ID=function(a){var b=a.replace(ua,va);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),w.find.TAG=v.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):v.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){for(;c=f[e++];)1===c.nodeType&&d.push(c);return d}return f},w.find.CLASS=v.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&I?b.getElementsByClassName(a):void 0},K=[],J=[],(v.qsa=qa.test(G.querySelectorAll))&&(e(function(a){H.appendChild(a).innerHTML="<a id='"+N+"'></a><select id='"+N+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&J.push("[*^$]="+ca+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||J.push("\\["+ca+"*(?:value|"+ba+")"),a.querySelectorAll("[id~="+N+"-]").length||J.push("~="),a.querySelectorAll(":checked").length||J.push(":checked"),a.querySelectorAll("a#"+N+"+*").length||J.push(".#.+[+~]")}),e(function(a){var b=G.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&J.push("name"+ca+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||J.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),J.push(",.*:")})),(v.matchesSelector=qa.test(L=H.matches||H.webkitMatchesSelector||H.mozMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&e(function(a){v.disconnectedMatch=L.call(a,"div"),L.call(a,"[s!='']:x"),K.push("!=",fa)}),J=J.length&&new RegExp(J.join("|")),K=K.length&&new RegExp(K.join("|")),b=qa.test(H.compareDocumentPosition),M=b||qa.test(H.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1},U=b?function(a,b){if(a===b)return E=!0,0;var c=!a.compareDocumentPosition-!b.compareDocumentPosition;return c?c:(c=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&c||!v.sortDetached&&b.compareDocumentPosition(a)===c?a===G||a.ownerDocument===O&&M(O,a)?-1:b===G||b.ownerDocument===O&&M(O,b)?1:D?aa(D,a)-aa(D,b):0:4&c?-1:1)}:function(a,b){if(a===b)return E=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===G?-1:b===G?1:e?-1:f?1:D?aa(D,a)-aa(D,b):0;if(e===f)return g(a,b);for(c=a;c=c.parentNode;)h.unshift(c);for(c=b;c=c.parentNode;)i.unshift(c);for(;h[d]===i[d];)d++;return d?g(h[d],i[d]):h[d]===O?-1:i[d]===O?1:0},G):G},b.matches=function(a,c){return b(a,null,null,c)},b.matchesSelector=function(a,c){if((a.ownerDocument||a)!==G&&F(a),c=c.replace(ka,"='$1']"),v.matchesSelector&&I&&!T[c+" "]&&(!K||!K.test(c))&&(!J||!J.test(c)))try{var d=L.call(a,c);if(d||v.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return b(c,G,null,[a]).length>0},b.contains=function(a,b){return(a.ownerDocument||a)!==G&&F(a),M(a,b)},b.attr=function(a,b){(a.ownerDocument||a)!==G&&F(a);var c=w.attrHandle[b.toLowerCase()],d=c&&W.call(w.attrHandle,b.toLowerCase())?c(a,b,!I):void 0;return void 0!==d?d:v.attributes||!I?a.getAttribute(b):(d=a.getAttributeNode(b))&&d.specified?d.value:null},b.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},b.uniqueSort=function(a){var b,c=[],d=0,e=0;if(E=!v.detectDuplicates,D=!v.sortStable&&a.slice(0),a.sort(U),E){for(;b=a[e++];)b===a[e]&&(d=c.push(e));for(;d--;)a.splice(c[d],1)}return D=null,a},x=b.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(1===e||9===e||11===e){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=x(a)}else if(3===e||4===e)return a.nodeValue}else for(;b=a[d++];)c+=x(b);return c},w=b.selectors={cacheLength:50,createPseudo:d,match:na,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ua,va),a[3]=(a[3]||a[4]||a[5]||"").replace(ua,va),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||b.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&b.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return na.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&la.test(c)&&(b=z(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ua,va).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=R[a+" "];return b||(b=new RegExp("(^|"+ca+")"+a+"("+ca+"|$)"))&&R(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,c,d){return function(e){var f=b.attr(e,a);return null==f?"!="===c:c?(f+="","="===c?f===d:"!="===c?f!==d:"^="===c?d&&0===f.indexOf(d):"*="===c?d&&f.indexOf(d)>-1:"$="===c?d&&f.slice(-d.length)===d:"~="===c?(" "+f.replace(ga," ")+" ").indexOf(d)>-1:"|="===c?f===d||f.slice(0,d.length+1)===d+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){for(;p;){for(m=b;m=m[p];)if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){for(m=q,l=m[N]||(m[N]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===P&&j[1],t=n&&j[2],m=n&&q.childNodes[n];m=++n&&m&&m[p]||(t=n=0)||o.pop();)if(1===m.nodeType&&++t&&m===b){k[a]=[P,n,t];break}}else if(s&&(m=b,l=m[N]||(m[N]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===P&&j[1],t=n),t===!1)for(;(m=++n&&m&&m[p]||(t=n=0)||o.pop())&&((h?m.nodeName.toLowerCase()!==r:1!==m.nodeType)||!++t||(s&&(l=m[N]||(m[N]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[P,t]),m!==b)););return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,c){var e,f=w.pseudos[a]||w.setFilters[a.toLowerCase()]||b.error("unsupported pseudo: "+a);return f[N]?f(c):f.length>1?(e=[a,a,"",c],w.setFilters.hasOwnProperty(a.toLowerCase())?d(function(a,b){for(var d,e=f(a,c),g=e.length;g--;)d=aa(a,e[g]),a[d]=!(b[d]=e[g])}):function(a){return f(a,0,e)}):f}},pseudos:{not:d(function(a){var b=[],c=[],e=A(a.replace(ha,"$1"));return e[N]?d(function(a,b,c,d){for(var f,g=e(a,null,d,[]),h=a.length;h--;)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,d,f){return b[0]=a,e(b,null,f,c),b[0]=null,!c.pop()}}),has:d(function(a){return function(c){return b(a,c).length>0}}),contains:d(function(a){return a=a.replace(ua,va),function(b){return(b.textContent||b.innerText||x(b)).indexOf(a)>-1}}),lang:d(function(a){return ma.test(a||"")||b.error("unsupported lang: "+a),a=a.replace(ua,va).toLowerCase(),function(b){var c;do if(c=I?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===H},focus:function(a){return a===G.activeElement&&(!G.hasFocus||G.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!w.pseudos.empty(a)},header:function(a){return pa.test(a.nodeName)},input:function(a){return oa.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:j(function(){return[0]}),last:j(function(a,b){return[b-1]}),eq:j(function(a,b,c){return[0>c?c+b:c]}),even:j(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:j(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:j(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:j(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},w.pseudos.nth=w.pseudos.eq;for(u in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})w.pseudos[u]=h(u);for(u in{submit:!0,reset:!0})w.pseudos[u]=i(u);return l.prototype=w.filters=w.pseudos,w.setFilters=new l,z=b.tokenize=function(a,c){var d,e,f,g,h,i,j,k=S[a+" "];if(k)return c?0:k.slice(0);for(h=a,i=[],j=w.preFilter;h;){(!d||(e=ia.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),d=!1,(e=ja.exec(h))&&(d=e.shift(),f.push({value:d,type:e[0].replace(ha," ")}),h=h.slice(d.length));for(g in w.filter)!(e=na[g].exec(h))||j[g]&&!(e=j[g](e))||(d=e.shift(),f.push({value:d,type:g,matches:e}),h=h.slice(d.length));if(!d)break}return c?h.length:h?b.error(a):S(a,i).slice(0)},A=b.compile=function(a,b){var c,d=[],e=[],f=T[a+" "];
if(!f){for(b||(b=z(a)),c=b.length;c--;)f=s(b[c]),f[N]?d.push(f):e.push(f);f=T(a,t(e,d)),f.selector=a}return f},B=b.select=function(a,b,c,d){var e,f,g,h,i,j="function"==typeof a&&a,l=!d&&z(a=j.selector||a);if(c=c||[],1===l.length){if(f=l[0]=l[0].slice(0),f.length>2&&"ID"===(g=f[0]).type&&v.getById&&9===b.nodeType&&I&&w.relative[f[1].type]){if(b=(w.find.ID(g.matches[0].replace(ua,va),b)||[])[0],!b)return c;j&&(b=b.parentNode),a=a.slice(f.shift().value.length)}for(e=na.needsContext.test(a)?0:f.length;e--&&(g=f[e],!w.relative[h=g.type]);)if((i=w.find[h])&&(d=i(g.matches[0].replace(ua,va),sa.test(f[0].type)&&k(b.parentNode)||b))){if(f.splice(e,1),a=d.length&&m(f),!a)return $.apply(c,d),c;break}}return(j||A(a,l))(d,b,!I,c,!b||sa.test(a)&&k(b.parentNode)||b),c},v.sortStable=N.split("").sort(U).join("")===N,v.detectDuplicates=!!E,F(),v.sortDetached=e(function(a){return 1&a.compareDocumentPosition(G.createElement("div"))}),e(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||f("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),v.attributes&&e(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||f("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),e(function(a){return null==a.getAttribute("disabled")})||f(ba,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),b}(a);na.find=sa,na.expr=sa.selectors,na.expr[":"]=na.expr.pseudos,na.uniqueSort=na.unique=sa.uniqueSort,na.text=sa.getText,na.isXMLDoc=sa.isXML,na.contains=sa.contains;var ta=function(a,b,c){for(var d=[],e=void 0!==c;(a=a[b])&&9!==a.nodeType;)if(1===a.nodeType){if(e&&na(a).is(c))break;d.push(a)}return d},ua=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},va=na.expr.match.needsContext,wa=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,xa=/^.[^:#\[\.,]*$/;na.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?na.find.matchesSelector(d,a)?[d]:[]:na.find.matches(a,na.grep(b,function(a){return 1===a.nodeType}))},na.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(na(a).filter(function(){for(b=0;e>b;b++)if(na.contains(d[b],this))return!0}));for(b=0;e>b;b++)na.find(a,d[b],c);return c=this.pushStack(e>1?na.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(d(this,a||[],!1))},not:function(a){return this.pushStack(d(this,a||[],!0))},is:function(a){return!!d(this,"string"==typeof a&&va.test(a)?na(a):a||[],!1).length}});var ya,za=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,Aa=na.fn.init=function(a,b,c){var d,e;if(!a)return this;if(c=c||ya,"string"==typeof a){if(d="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:za.exec(a),!d||!d[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(d[1]){if(b=b instanceof na?b[0]:b,na.merge(this,na.parseHTML(d[1],b&&b.nodeType?b.ownerDocument||b:da,!0)),wa.test(d[1])&&na.isPlainObject(b))for(d in b)na.isFunction(this[d])?this[d](b[d]):this.attr(d,b[d]);return this}if(e=da.getElementById(d[2]),e&&e.parentNode){if(e.id!==d[2])return ya.find(a);this.length=1,this[0]=e}return this.context=da,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):na.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(na):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),na.makeArray(a,this))};Aa.prototype=na.fn,ya=na(da);var Ba=/^(?:parents|prev(?:Until|All))/,Ca={children:!0,contents:!0,next:!0,prev:!0};na.fn.extend({has:function(a){var b,c=na(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(na.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=va.test(a)||"string"!=typeof a?na(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&na.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?na.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?na.inArray(this[0],na(a)):na.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(na.uniqueSort(na.merge(this.get(),na(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}}),na.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return ta(a,"parentNode")},parentsUntil:function(a,b,c){return ta(a,"parentNode",c)},next:function(a){return e(a,"nextSibling")},prev:function(a){return e(a,"previousSibling")},nextAll:function(a){return ta(a,"nextSibling")},prevAll:function(a){return ta(a,"previousSibling")},nextUntil:function(a,b,c){return ta(a,"nextSibling",c)},prevUntil:function(a,b,c){return ta(a,"previousSibling",c)},siblings:function(a){return ua((a.parentNode||{}).firstChild,a)},children:function(a){return ua(a.firstChild)},contents:function(a){return na.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:na.merge([],a.childNodes)}},function(a,b){na.fn[a]=function(c,d){var e=na.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=na.filter(d,e)),this.length>1&&(Ca[a]||(e=na.uniqueSort(e)),Ba.test(a)&&(e=e.reverse())),this.pushStack(e)}});var Da=/\S+/g;na.Callbacks=function(a){a="string"==typeof a?f(a):na.extend({},a);var b,c,d,e,g=[],h=[],i=-1,j=function(){for(e=a.once,d=b=!0;h.length;i=-1)for(c=h.shift();++i<g.length;)g[i].apply(c[0],c[1])===!1&&a.stopOnFalse&&(i=g.length,c=!1);a.memory||(c=!1),b=!1,e&&(g=c?[]:"")},k={add:function(){return g&&(c&&!b&&(i=g.length-1,h.push(c)),function d(b){na.each(b,function(b,c){na.isFunction(c)?a.unique&&k.has(c)||g.push(c):c&&c.length&&"string"!==na.type(c)&&d(c)})}(arguments),c&&!b&&j()),this},remove:function(){return na.each(arguments,function(a,b){for(var c;(c=na.inArray(b,g,c))>-1;)g.splice(c,1),i>=c&&i--}),this},has:function(a){return a?na.inArray(a,g)>-1:g.length>0},empty:function(){return g&&(g=[]),this},disable:function(){return e=h=[],g=c="",this},disabled:function(){return!g},lock:function(){return e=!0,c||k.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],h.push(c),b||j()),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},na.extend({Deferred:function(a){var b=[["resolve","done",na.Callbacks("once memory"),"resolved"],["reject","fail",na.Callbacks("once memory"),"rejected"],["notify","progress",na.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return na.Deferred(function(c){na.each(b,function(b,f){var g=na.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&na.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?na.extend(a,d):d}},e={};return d.pipe=d.then,na.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b,c,d,e=0,f=ea.call(arguments),g=f.length,h=1!==g||a&&na.isFunction(a.promise)?g:0,i=1===h?a:na.Deferred(),j=function(a,c,d){return function(e){c[a]=this,d[a]=arguments.length>1?ea.call(arguments):e,d===b?i.notifyWith(c,d):--h||i.resolveWith(c,d)}};if(g>1)for(b=new Array(g),c=new Array(g),d=new Array(g);g>e;e++)f[e]&&na.isFunction(f[e].promise)?f[e].promise().progress(j(e,c,b)).done(j(e,d,f)).fail(i.reject):--h;return h||i.resolveWith(d,f),i.promise()}});var Ea;na.fn.ready=function(a){return na.ready.promise().done(a),this},na.extend({isReady:!1,readyWait:1,holdReady:function(a){a?na.readyWait++:na.ready(!0)},ready:function(a){(a===!0?--na.readyWait:na.isReady)||(na.isReady=!0,a!==!0&&--na.readyWait>0||(Ea.resolveWith(da,[na]),na.fn.triggerHandler&&(na(da).triggerHandler("ready"),na(da).off("ready"))))}}),na.ready.promise=function(b){if(!Ea)if(Ea=na.Deferred(),"complete"===da.readyState||"loading"!==da.readyState&&!da.documentElement.doScroll)a.setTimeout(na.ready);else if(da.addEventListener)da.addEventListener("DOMContentLoaded",h),a.addEventListener("load",h);else{da.attachEvent("onreadystatechange",h),a.attachEvent("onload",h);var c=!1;try{c=null==a.frameElement&&da.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!na.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(e,50)}g(),na.ready()}}()}return Ea.promise(b)},na.ready.promise();var Fa;for(Fa in na(la))break;la.ownFirst="0"===Fa,la.inlineBlockNeedsLayout=!1,na(function(){var a,b,c,d;c=da.getElementsByTagName("body")[0],c&&c.style&&(b=da.createElement("div"),d=da.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",la.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=da.createElement("div");la.deleteExpando=!0;try{delete a.test}catch(b){la.deleteExpando=!1}a=null}();var Ga=function(a){var b=na.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},Ha=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ia=/([A-Z])/g;na.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?na.cache[a[na.expando]]:a[na.expando],!!a&&!j(a)},data:function(a,b,c){return k(a,b,c)},removeData:function(a,b){return l(a,b)},_data:function(a,b,c){return k(a,b,c,!0)},_removeData:function(a,b){return l(a,b,!0)}}),na.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=na.data(f),1===f.nodeType&&!na._data(f,"parsedAttrs"))){for(c=g.length;c--;)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=na.camelCase(d.slice(5)),i(f,d,e[d])));na._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){na.data(this,a)}):arguments.length>1?this.each(function(){na.data(this,a,b)}):f?i(f,a,na.data(f,a)):void 0},removeData:function(a){return this.each(function(){na.removeData(this,a)})}}),na.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=na._data(a,b),c&&(!d||na.isArray(c)?d=na._data(a,b,na.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=na.queue(a,b),d=c.length,e=c.shift(),f=na._queueHooks(a,b),g=function(){na.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return na._data(a,c)||na._data(a,c,{empty:na.Callbacks("once memory").add(function(){na._removeData(a,b+"queue"),na._removeData(a,c)})})}}),na.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?na.queue(this[0],a):void 0===b?this:this.each(function(){var c=na.queue(this,a,b);na._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&na.dequeue(this,a)})},dequeue:function(a){return this.each(function(){na.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=na.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};for("string"!=typeof a&&(b=a,a=void 0),a=a||"fx";g--;)c=na._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;la.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=da.getElementsByTagName("body")[0],c&&c.style?(b=da.createElement("div"),d=da.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(da.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ja=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ka=new RegExp("^(?:([+-])=|)("+Ja+")([a-z%]*)$","i"),La=["Top","Right","Bottom","Left"],Ma=function(a,b){return a=b||a,"none"===na.css(a,"display")||!na.contains(a.ownerDocument,a)},Na=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===na.type(c)){e=!0;for(h in c)Na(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,na.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(na(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Oa=/^(?:checkbox|radio)$/i,Pa=/<([\w:-]+)/,Qa=/^$|\/(?:java|ecma)script/i,Ra=/^\s+/,Sa="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";!function(){var a=da.createElement("div"),b=da.createDocumentFragment(),c=da.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",la.leadingWhitespace=3===a.firstChild.nodeType,la.tbody=!a.getElementsByTagName("tbody").length,la.htmlSerialize=!!a.getElementsByTagName("link").length,la.html5Clone="<:nav></:nav>"!==da.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),la.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",la.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=da.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),la.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,la.noCloneEvent=!!a.addEventListener,a[na.expando]=1,la.attributes=!a.getAttribute(na.expando)}();var Ta={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:la.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};Ta.optgroup=Ta.option,Ta.tbody=Ta.tfoot=Ta.colgroup=Ta.caption=Ta.thead,Ta.th=Ta.td;var Ua=/<|&#?\w+;/,Va=/<tbody/i;!function(){var b,c,d=da.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(la[b]=c in a)||(d.setAttribute(c,"t"),la[b]=d.attributes[c].expando===!1);d=null}();var Wa=/^(?:input|select|textarea)$/i,Xa=/^key/,Ya=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Za=/^(?:focusinfocus|focusoutblur)$/,$a=/^([^.]*)(?:\.(.+)|)/;na.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=na._data(a);if(q){for(c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=na.guid++),(g=q.events)||(g=q.events={}),(k=q.handle)||(k=q.handle=function(a){return"undefined"==typeof na||a&&na.event.triggered===a.type?void 0:na.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(Da)||[""],h=b.length;h--;)f=$a.exec(b[h])||[],n=p=f[1],o=(f[2]||"").split(".").sort(),n&&(j=na.event.special[n]||{},n=(e?j.delegateType:j.bindType)||n,j=na.event.special[n]||{},l=na.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&na.expr.match.needsContext.test(e),namespace:o.join(".")},i),(m=g[n])||(m=g[n]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,o,k)!==!1||(a.addEventListener?a.addEventListener(n,k,!1):a.attachEvent&&a.attachEvent("on"+n,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),na.event.global[n]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=na.hasData(a)&&na._data(a);if(q&&(k=q.events)){for(b=(b||"").match(Da)||[""],j=b.length;j--;)if(h=$a.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){for(l=na.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=k[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;f--;)g=m[f],!e&&p!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||na.removeEvent(a,n,q.handle),delete k[n])}else for(n in k)na.event.remove(a,n+b[j],c,d,!0);na.isEmptyObject(k)&&(delete q.handle,na._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,j,k,l,m=[d||da],n=ka.call(b,"type")?b.type:b,o=ka.call(b,"namespace")?b.namespace.split("."):[];if(h=k=d=d||da,3!==d.nodeType&&8!==d.nodeType&&!Za.test(n+na.event.triggered)&&(n.indexOf(".")>-1&&(o=n.split("."),n=o.shift(),o.sort()),g=n.indexOf(":")<0&&"on"+n,b=b[na.expando]?b:new na.Event(n,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=o.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:na.makeArray(c,[b]),j=na.event.special[n]||{},e||!j.trigger||j.trigger.apply(d,c)!==!1)){if(!e&&!j.noBubble&&!na.isWindow(d)){for(i=j.delegateType||n,Za.test(i+n)||(h=h.parentNode);h;h=h.parentNode)m.push(h),k=h;k===(d.ownerDocument||da)&&m.push(k.defaultView||k.parentWindow||a)}for(l=0;(h=m[l++])&&!b.isPropagationStopped();)b.type=l>1?i:j.bindType||n,f=(na._data(h,"events")||{})[b.type]&&na._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&Ga(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=n,!e&&!b.isDefaultPrevented()&&(!j._default||j._default.apply(m.pop(),c)===!1)&&Ga(d)&&g&&d[n]&&!na.isWindow(d)){k=d[g],k&&(d[g]=null),na.event.triggered=n;try{d[n]()}catch(p){}na.event.triggered=void 0,k&&(d[g]=k)}return b.result}},dispatch:function(a){a=na.event.fix(a);var b,c,d,e,f,g=[],h=ea.call(arguments),i=(na._data(this,"events")||{})[a.type]||[],j=na.event.special[a.type]||{};if(h[0]=a,a.delegateTarget=this,!j.preDispatch||j.preDispatch.call(this,a)!==!1){for(g=na.event.handlers.call(this,a,i),b=0;(e=g[b++])&&!a.isPropagationStopped();)for(a.currentTarget=e.elem,c=0;(f=e.handlers[c++])&&!a.isImmediatePropagationStopped();)(!a.rnamespace||a.rnamespace.test(f.namespace))&&(a.handleObj=f,a.data=f.data,d=((na.event.special[f.origType]||{}).handle||f.handler).apply(e.elem,h),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()));return j.postDispatch&&j.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?na(e,this).index(i)>-1:na.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[na.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];for(g||(this.fixHooks[e]=g=Ya.test(e)?this.mouseHooks:Xa.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new na.Event(f),b=d.length;b--;)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||da),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||da,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==u()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===u()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return na.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return na.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=na.extend(new na.Event,c,{type:a,isSimulated:!0});na.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},na.removeEvent=da.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},na.Event=function(a,b){return this instanceof na.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?s:t):this.type=a,b&&na.extend(this,b),this.timeStamp=a&&a.timeStamp||na.now(),void(this[na.expando]=!0)):new na.Event(a,b)},na.Event.prototype={constructor:na.Event,isDefaultPrevented:t,isPropagationStopped:t,isImmediatePropagationStopped:t,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=s,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=s,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=s,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},na.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){na.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!na.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),la.submit||(na.event.special.submit={setup:function(){return na.nodeName(this,"form")?!1:void na.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=na.nodeName(b,"input")||na.nodeName(b,"button")?na.prop(b,"form"):void 0;c&&!na._data(c,"submit")&&(na.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),na._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&na.event.simulate("submit",this.parentNode,a))},teardown:function(){return na.nodeName(this,"form")?!1:void na.event.remove(this,"._submit")}}),la.change||(na.event.special.change={setup:function(){return Wa.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(na.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),na.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),na.event.simulate("change",this,a)})),!1):void na.event.add(this,"beforeactivate._change",function(a){var b=a.target;Wa.test(b.nodeName)&&!na._data(b,"change")&&(na.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||na.event.simulate("change",this.parentNode,a)}),na._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return na.event.remove(this,"._change"),!Wa.test(this.nodeName)}}),la.focusin||na.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){na.event.simulate(b,a.target,na.event.fix(a))};na.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=na._data(d,b);e||d.addEventListener(a,c,!0),na._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=na._data(d,b)-1;e?na._data(d,b,e):(d.removeEventListener(a,c,!0),na._removeData(d,b))}}}),na.fn.extend({on:function(a,b,c,d){return v(this,a,b,c,d)},one:function(a,b,c,d){return v(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,na(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=t),this.each(function(){na.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){na.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?na.event.trigger(a,b,c,!0):void 0}});var _a=/ jQuery\d+="(?:null|\d+)"/g,ab=new RegExp("<(?:"+Sa+")[\\s/>]","i"),bb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,cb=/<script|<style|<link/i,db=/checked\s*(?:[^=]|=\s*.checked.)/i,eb=/^true\/(.*)/,fb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,gb=n(da),hb=gb.appendChild(da.createElement("div"));na.extend({htmlPrefilter:function(a){return a.replace(bb,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=na.contains(a.ownerDocument,a);if(la.html5Clone||na.isXMLDoc(a)||!ab.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(hb.innerHTML=a.outerHTML,hb.removeChild(f=hb.firstChild)),!(la.noCloneEvent&&la.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||na.isXMLDoc(a)))for(d=o(f),h=o(a),g=0;null!=(e=h[g]);++g)d[g]&&A(e,d[g]);if(b)if(c)for(h=h||o(a),d=d||o(f),g=0;null!=(e=h[g]);g++)z(e,d[g]);else z(a,f);return d=o(f,"script"),d.length>0&&p(d,!i&&o(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var c,d,e,f,g=0,h=na.expando,i=na.cache,j=la.attributes,k=na.event.special;null!=(c=a[g]);g++)if((b||Ga(c))&&(e=c[h],f=e&&i[e])){if(f.events)for(d in f.events)k[d]?na.event.remove(c,d):na.removeEvent(c,d,f.handle);i[e]&&(delete i[e],j||"undefined"==typeof c.removeAttribute?c[h]=void 0:c.removeAttribute(h),ca.push(e))}}}),na.fn.extend({domManip:B,detach:function(a){return C(this,a,!0)},remove:function(a){return C(this,a)},text:function(a){return Na(this,function(a){return void 0===a?na.text(this):this.empty().append((this[0]&&this[0].ownerDocument||da).createTextNode(a))},null,a,arguments.length)},append:function(){return B(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=w(this,a);b.appendChild(a)}})},prepend:function(){return B(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=w(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return B(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return B(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){for(1===a.nodeType&&na.cleanData(o(a,!1));a.firstChild;)a.removeChild(a.firstChild);a.options&&na.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return na.clone(this,a,b)})},html:function(a){return Na(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(_a,""):void 0;if("string"==typeof a&&!cb.test(a)&&(la.htmlSerialize||!ab.test(a))&&(la.leadingWhitespace||!Ra.test(a))&&!Ta[(Pa.exec(a)||["",""])[1].toLowerCase()]){a=na.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(na.cleanData(o(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return B(this,arguments,function(b){var c=this.parentNode;na.inArray(this,a)<0&&(na.cleanData(o(this)),c&&c.replaceChild(b,this))},a)}}),na.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){na.fn[a]=function(a){for(var c,d=0,e=[],f=na(a),g=f.length-1;g>=d;d++)c=d===g?this:this.clone(!0),na(f[d])[b](c),ga.apply(e,c.get());return this.pushStack(e)}});var ib,jb={HTML:"block",BODY:"block"},kb=/^margin/,lb=new RegExp("^("+Ja+")(?!px)[a-z%]+$","i"),mb=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},nb=da.documentElement;!function(){function b(){var b,k,l=da.documentElement;l.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",c=e=h=!1,d=g=!0,a.getComputedStyle&&(k=a.getComputedStyle(j),c="1%"!==(k||{}).top,h="2px"===(k||{}).marginLeft,e="4px"===(k||{width:"4px"}).width,j.style.marginRight="50%",d="4px"===(k||{marginRight:"4px"}).marginRight,b=j.appendChild(da.createElement("div")),b.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",b.style.marginRight=b.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(b)||{}).marginRight),j.removeChild(b)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",b=j.getElementsByTagName("td"),b[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===b[0].offsetHeight,f&&(b[0].style.display="",b[1].style.display="none",f=0===b[0].offsetHeight)),l.removeChild(i)}var c,d,e,f,g,h,i=da.createElement("div"),j=da.createElement("div");j.style&&(j.style.cssText="float:left;opacity:.5",la.opacity="0.5"===j.style.opacity,la.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",la.clearCloneStyle="content-box"===j.style.backgroundClip,i=da.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),la.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,na.extend(la,{reliableHiddenOffsets:function(){return null==c&&b(),f},boxSizingReliable:function(){return null==c&&b(),e},pixelMarginRight:function(){return null==c&&b(),d},pixelPosition:function(){return null==c&&b(),c},reliableMarginRight:function(){return null==c&&b(),g},reliableMarginLeft:function(){return null==c&&b(),h}}))}();var ob,pb,qb=/^(top|right|bottom|left)$/;a.getComputedStyle?(ob=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},pb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||ob(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||na.contains(a.ownerDocument,a)||(g=na.style(a,b)),c&&!la.pixelMarginRight()&&lb.test(g)&&kb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):nb.currentStyle&&(ob=function(a){return a.currentStyle},pb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||ob(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),lb.test(g)&&!qb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto";
});var rb=/alpha\([^)]*\)/i,sb=/opacity\s*=\s*([^)]*)/i,tb=/^(none|table(?!-c[ea]).+)/,ub=new RegExp("^("+Ja+")(.*)$","i"),vb={position:"absolute",visibility:"hidden",display:"block"},wb={letterSpacing:"0",fontWeight:"400"},xb=["Webkit","O","Moz","ms"],yb=da.createElement("div").style;na.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=pb(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":la.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=na.camelCase(b),i=a.style;if(b=na.cssProps[h]||(na.cssProps[h]=G(h)||h),g=na.cssHooks[b]||na.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Ka.exec(c))&&e[1]&&(c=m(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(na.cssNumber[h]?"":"px")),la.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=na.camelCase(b);return b=na.cssProps[h]||(na.cssProps[h]=G(h)||h),g=na.cssHooks[b]||na.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=pb(a,b,d)),"normal"===f&&b in wb&&(f=wb[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),na.each(["height","width"],function(a,b){na.cssHooks[b]={get:function(a,c,d){return c?tb.test(na.css(a,"display"))&&0===a.offsetWidth?mb(a,vb,function(){return K(a,b,d)}):K(a,b,d):void 0},set:function(a,c,d){var e=d&&ob(a);return I(a,c,d?J(a,b,d,la.boxSizing&&"border-box"===na.css(a,"boxSizing",!1,e),e):0)}}}),la.opacity||(na.cssHooks.opacity={get:function(a,b){return sb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=na.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===na.trim(f.replace(rb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=rb.test(f)?f.replace(rb,e):f+" "+e)}}),na.cssHooks.marginRight=F(la.reliableMarginRight,function(a,b){return b?mb(a,{display:"inline-block"},pb,[a,"marginRight"]):void 0}),na.cssHooks.marginLeft=F(la.reliableMarginLeft,function(a,b){return b?(parseFloat(pb(a,"marginLeft"))||(na.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-mb(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),na.each({margin:"",padding:"",border:"Width"},function(a,b){na.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+La[d]+b]=f[d]||f[d-2]||f[0];return e}},kb.test(a)||(na.cssHooks[a+b].set=I)}),na.fn.extend({css:function(a,b){return Na(this,function(a,b,c){var d,e,f={},g=0;if(na.isArray(b)){for(d=ob(a),e=b.length;e>g;g++)f[b[g]]=na.css(a,b[g],!1,d);return f}return void 0!==c?na.style(a,b,c):na.css(a,b)},a,b,arguments.length>1)},show:function(){return H(this,!0)},hide:function(){return H(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){Ma(this)?na(this).show():na(this).hide()})}}),na.Tween=L,L.prototype={constructor:L,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||na.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(na.cssNumber[c]?"":"px")},cur:function(){var a=L.propHooks[this.prop];return a&&a.get?a.get(this):L.propHooks._default.get(this)},run:function(a){var b,c=L.propHooks[this.prop];return this.options.duration?this.pos=b=na.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):L.propHooks._default.set(this),this}},L.prototype.init.prototype=L.prototype,L.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=na.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){na.fx.step[a.prop]?na.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[na.cssProps[a.prop]]&&!na.cssHooks[a.prop]?a.elem[a.prop]=a.now:na.style(a.elem,a.prop,a.now+a.unit)}}},L.propHooks.scrollTop=L.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},na.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},na.fx=L.prototype.init,na.fx.step={};var zb,Ab,Bb=/^(?:toggle|show|hide)$/,Cb=/queueHooks$/;na.Animation=na.extend(R,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return m(c.elem,a,Ka.exec(b),c),c}]},tweener:function(a,b){na.isFunction(a)?(b=a,a=["*"]):a=a.match(Da);for(var c,d=0,e=a.length;e>d;d++)c=a[d],R.tweeners[c]=R.tweeners[c]||[],R.tweeners[c].unshift(b)},prefilters:[P],prefilter:function(a,b){b?R.prefilters.unshift(a):R.prefilters.push(a)}}),na.speed=function(a,b,c){var d=a&&"object"==typeof a?na.extend({},a):{complete:c||!c&&b||na.isFunction(a)&&a,duration:a,easing:c&&b||b&&!na.isFunction(b)&&b};return d.duration=na.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in na.fx.speeds?na.fx.speeds[d.duration]:na.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){na.isFunction(d.old)&&d.old.call(this),d.queue&&na.dequeue(this,d.queue)},d},na.fn.extend({fadeTo:function(a,b,c,d){return this.filter(Ma).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=na.isEmptyObject(a),f=na.speed(b,c,d),g=function(){var b=R(this,na.extend({},a),f);(e||na._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=na.timers,g=na._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&na.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=na._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=na.timers,g=d?d.length:0;for(c.finish=!0,na.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),na.each(["toggle","show","hide"],function(a,b){var c=na.fn[b];na.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(N(b,!0),a,d,e)}}),na.each({slideDown:N("show"),slideUp:N("hide"),slideToggle:N("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){na.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),na.timers=[],na.fx.tick=function(){var a,b=na.timers,c=0;for(zb=na.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||na.fx.stop(),zb=void 0},na.fx.timer=function(a){na.timers.push(a),a()?na.fx.start():na.timers.pop()},na.fx.interval=13,na.fx.start=function(){Ab||(Ab=a.setInterval(na.fx.tick,na.fx.interval))},na.fx.stop=function(){a.clearInterval(Ab),Ab=null},na.fx.speeds={slow:600,fast:200,_default:400},na.fn.delay=function(b,c){return b=na.fx?na.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=da.createElement("input"),c=da.createElement("div"),d=da.createElement("select"),e=d.appendChild(da.createElement("option"));c=da.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",la.getSetAttribute="t"!==c.className,la.style=/top/.test(a.getAttribute("style")),la.hrefNormalized="/a"===a.getAttribute("href"),la.checkOn=!!b.value,la.optSelected=e.selected,la.enctype=!!da.createElement("form").enctype,d.disabled=!0,la.optDisabled=!e.disabled,b=da.createElement("input"),b.setAttribute("value",""),la.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),la.radioValue="t"===b.value}();var Db=/\r/g,Eb=/[\x20\t\r\n\f]+/g;na.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=na.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,na(this).val()):a,null==e?e="":"number"==typeof e?e+="":na.isArray(e)&&(e=na.map(e,function(a){return null==a?"":a+""})),b=na.valHooks[this.type]||na.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=na.valHooks[e.type]||na.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(Db,""):null==c?"":c)}}}),na.extend({valHooks:{option:{get:function(a){var b=na.find.attr(a,"value");return null!=b?b:na.trim(na.text(a)).replace(Eb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(la.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!na.nodeName(c.parentNode,"optgroup"))){if(b=na(c).val(),f)return b;g.push(b)}return g},set:function(a,b){for(var c,d,e=a.options,f=na.makeArray(b),g=e.length;g--;)if(d=e[g],na.inArray(na.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),na.each(["radio","checkbox"],function(){na.valHooks[this]={set:function(a,b){return na.isArray(b)?a.checked=na.inArray(na(a).val(),b)>-1:void 0}},la.checkOn||(na.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var Fb,Gb,Hb=na.expr.attrHandle,Ib=/^(?:checked|selected)$/i,Jb=la.getSetAttribute,Kb=la.input;na.fn.extend({attr:function(a,b){return Na(this,na.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){na.removeAttr(this,a)})}}),na.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?na.prop(a,b,c):(1===f&&na.isXMLDoc(a)||(b=b.toLowerCase(),e=na.attrHooks[b]||(na.expr.match.bool.test(b)?Gb:Fb)),void 0!==c?null===c?void na.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=na.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!la.radioValue&&"radio"===b&&na.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(Da);if(f&&1===a.nodeType)for(;c=f[e++];)d=na.propFix[c]||c,na.expr.match.bool.test(c)?Kb&&Jb||!Ib.test(c)?a[d]=!1:a[na.camelCase("default-"+c)]=a[d]=!1:na.attr(a,c,""),a.removeAttribute(Jb?c:d)}}),Gb={set:function(a,b,c){return b===!1?na.removeAttr(a,c):Kb&&Jb||!Ib.test(c)?a.setAttribute(!Jb&&na.propFix[c]||c,c):a[na.camelCase("default-"+c)]=a[c]=!0,c}},na.each(na.expr.match.bool.source.match(/\w+/g),function(a,b){var c=Hb[b]||na.find.attr;Kb&&Jb||!Ib.test(b)?Hb[b]=function(a,b,d){var e,f;return d||(f=Hb[b],Hb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,Hb[b]=f),e}:Hb[b]=function(a,b,c){return c?void 0:a[na.camelCase("default-"+b)]?b.toLowerCase():null}}),Kb&&Jb||(na.attrHooks.value={set:function(a,b,c){return na.nodeName(a,"input")?void(a.defaultValue=b):Fb&&Fb.set(a,b,c)}}),Jb||(Fb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},Hb.id=Hb.name=Hb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},na.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:Fb.set},na.attrHooks.contenteditable={set:function(a,b,c){Fb.set(a,""===b?!1:b,c)}},na.each(["width","height"],function(a,b){na.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),la.style||(na.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var Lb=/^(?:input|select|textarea|button|object)$/i,Mb=/^(?:a|area)$/i;na.fn.extend({prop:function(a,b){return Na(this,na.prop,a,b,arguments.length>1)},removeProp:function(a){return a=na.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),na.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&na.isXMLDoc(a)||(b=na.propFix[b]||b,e=na.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=na.find.attr(a,"tabindex");return b?parseInt(b,10):Lb.test(a.nodeName)||Mb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),la.hrefNormalized||na.each(["href","src"],function(a,b){na.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),la.optSelected||(na.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),na.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){na.propFix[this.toLowerCase()]=this}),la.enctype||(na.propFix.enctype="encoding");var Nb=/[\t\r\n\f]/g;na.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(na.isFunction(a))return this.each(function(b){na(this).addClass(a.call(this,b,S(this)))});if("string"==typeof a&&a)for(b=a.match(Da)||[];c=this[i++];)if(e=S(c),d=1===c.nodeType&&(" "+e+" ").replace(Nb," ")){for(g=0;f=b[g++];)d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=na.trim(d),e!==h&&na.attr(c,"class",h)}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(na.isFunction(a))return this.each(function(b){na(this).removeClass(a.call(this,b,S(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a)for(b=a.match(Da)||[];c=this[i++];)if(e=S(c),d=1===c.nodeType&&(" "+e+" ").replace(Nb," ")){for(g=0;f=b[g++];)for(;d.indexOf(" "+f+" ")>-1;)d=d.replace(" "+f+" "," ");h=na.trim(d),e!==h&&na.attr(c,"class",h)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):na.isFunction(a)?this.each(function(c){na(this).toggleClass(a.call(this,c,S(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c)for(d=0,e=na(this),f=a.match(Da)||[];b=f[d++];)e.hasClass(b)?e.removeClass(b):e.addClass(b);else(void 0===a||"boolean"===c)&&(b=S(this),b&&na._data(this,"__className__",b),na.attr(this,"class",b||a===!1?"":na._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;for(b=" "+a+" ";c=this[d++];)if(1===c.nodeType&&(" "+S(c)+" ").replace(Nb," ").indexOf(b)>-1)return!0;return!1}}),na.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){na.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),na.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Ob=a.location,Pb=na.now(),Qb=/\?/,Rb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;na.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=na.trim(b+"");return e&&!na.trim(e.replace(Rb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():na.error("Invalid JSON: "+b)},na.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||na.error("Invalid XML: "+b),c};var Sb=/#.*$/,Tb=/([?&])_=[^&]*/,Ub=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Vb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Wb=/^(?:GET|HEAD)$/,Xb=/^\/\//,Yb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Zb={},$b={},_b="*/".concat("*"),ac=Ob.href,bc=Yb.exec(ac.toLowerCase())||[];na.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ac,type:"GET",isLocal:Vb.test(bc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":_b,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":na.parseJSON,"text xml":na.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?V(V(a,na.ajaxSettings),b):V(na.ajaxSettings,a)},ajaxPrefilter:T(Zb),ajaxTransport:T($b),ajax:function(b,c){function d(b,c,d,e){var f,l,s,t,v,x=c;2!==u&&(u=2,i&&a.clearTimeout(i),k=void 0,h=e||"",w.readyState=b>0?4:0,f=b>=200&&300>b||304===b,d&&(t=W(m,w,d)),t=X(m,t,w,f),f?(m.ifModified&&(v=w.getResponseHeader("Last-Modified"),v&&(na.lastModified[g]=v),v=w.getResponseHeader("etag"),v&&(na.etag[g]=v)),204===b||"HEAD"===m.type?x="nocontent":304===b?x="notmodified":(x=t.state,l=t.data,s=t.error,f=!s)):(s=x,(b||!x)&&(x="error",0>b&&(b=0))),w.status=b,w.statusText=(c||x)+"",f?p.resolveWith(n,[l,x,w]):p.rejectWith(n,[w,x,s]),w.statusCode(r),r=void 0,j&&o.trigger(f?"ajaxSuccess":"ajaxError",[w,m,f?l:s]),q.fireWith(n,[w,x]),j&&(o.trigger("ajaxComplete",[w,m]),--na.active||na.event.trigger("ajaxStop")))}"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=na.ajaxSetup({},c),n=m.context||m,o=m.context&&(n.nodeType||n.jquery)?na(n):na.event,p=na.Deferred(),q=na.Callbacks("once memory"),r=m.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!l)for(l={};b=Ub.exec(h);)l[b[1].toLowerCase()]=b[2];b=l[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?h:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return k&&k.abort(b),d(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,m.url=((b||m.url||ac)+"").replace(Sb,"").replace(Xb,bc[1]+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=na.trim(m.dataType||"*").toLowerCase().match(Da)||[""],null==m.crossDomain&&(e=Yb.exec(m.url.toLowerCase()),m.crossDomain=!(!e||e[1]===bc[1]&&e[2]===bc[2]&&(e[3]||("http:"===e[1]?"80":"443"))===(bc[3]||("http:"===bc[1]?"80":"443")))),m.data&&m.processData&&"string"!=typeof m.data&&(m.data=na.param(m.data,m.traditional)),U(Zb,m,c,w),2===u)return w;j=na.event&&m.global,j&&0===na.active++&&na.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!Wb.test(m.type),g=m.url,m.hasContent||(m.data&&(g=m.url+=(Qb.test(g)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=Tb.test(g)?g.replace(Tb,"$1_="+Pb++):g+(Qb.test(g)?"&":"?")+"_="+Pb++)),m.ifModified&&(na.lastModified[g]&&w.setRequestHeader("If-Modified-Since",na.lastModified[g]),na.etag[g]&&w.setRequestHeader("If-None-Match",na.etag[g])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",m.contentType),w.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+_b+"; q=0.01":""):m.accepts["*"]);for(f in m.headers)w.setRequestHeader(f,m.headers[f]);if(m.beforeSend&&(m.beforeSend.call(n,w,m)===!1||2===u))return w.abort();v="abort";for(f in{success:1,error:1,complete:1})w[f](m[f]);if(k=U($b,m,c,w)){if(w.readyState=1,j&&o.trigger("ajaxSend",[w,m]),2===u)return w;m.async&&m.timeout>0&&(i=a.setTimeout(function(){w.abort("timeout")},m.timeout));try{u=1,k.send(s,d)}catch(x){if(!(2>u))throw x;d(-1,x)}}else d(-1,"No Transport");return w},getJSON:function(a,b,c){return na.get(a,b,c,"json")},getScript:function(a,b){return na.get(a,void 0,b,"script")}}),na.each(["get","post"],function(a,b){na[b]=function(a,c,d,e){return na.isFunction(c)&&(e=e||d,d=c,c=void 0),na.ajax(na.extend({url:a,type:b,dataType:e,data:c,success:d},na.isPlainObject(a)&&a))}}),na._evalUrl=function(a){return na.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},na.fn.extend({wrapAll:function(a){if(na.isFunction(a))return this.each(function(b){na(this).wrapAll(a.call(this,b))});if(this[0]){var b=na(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){for(var a=this;a.firstChild&&1===a.firstChild.nodeType;)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return na.isFunction(a)?this.each(function(b){na(this).wrapInner(a.call(this,b))}):this.each(function(){var b=na(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=na.isFunction(a);return this.each(function(c){na(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){na.nodeName(this,"body")||na(this).replaceWith(this.childNodes)}).end()}}),na.expr.filters.hidden=function(a){return la.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Z(a)},na.expr.filters.visible=function(a){return!na.expr.filters.hidden(a)};var cc=/%20/g,dc=/\[\]$/,ec=/\r?\n/g,fc=/^(?:submit|button|image|reset|file)$/i,gc=/^(?:input|select|textarea|keygen)/i;na.param=function(a,b){var c,d=[],e=function(a,b){b=na.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=na.ajaxSettings&&na.ajaxSettings.traditional),na.isArray(a)||a.jquery&&!na.isPlainObject(a))na.each(a,function(){e(this.name,this.value)});else for(c in a)$(c,a[c],b,e);return d.join("&").replace(cc,"+")},na.fn.extend({serialize:function(){return na.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=na.prop(this,"elements");return a?na.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!na(this).is(":disabled")&&gc.test(this.nodeName)&&!fc.test(a)&&(this.checked||!Oa.test(a))}).map(function(a,b){var c=na(this).val();return null==c?null:na.isArray(c)?na.map(c,function(a){return{name:b.name,value:a.replace(ec,"\r\n")}}):{name:b.name,value:c.replace(ec,"\r\n")}}).get()}}),na.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?aa():da.documentMode>8?_():/^(get|post|head|put|delete|options)$/i.test(this.type)&&_()||aa()}:_;var hc=0,ic={},jc=na.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in ic)ic[a](void 0,!0)}),la.cors=!!jc&&"withCredentials"in jc,jc=la.ajax=!!jc,jc&&na.ajaxTransport(function(b){if(!b.crossDomain||la.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++hc;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete ic[h],c=void 0,g.onreadystatechange=na.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=ic[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}}),na.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return na.globalEval(a),a}}}),na.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),na.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=da.head||na("head")[0]||da.documentElement;return{send:function(d,e){b=da.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var kc=[],lc=/(=)\?(?=&|$)|\?\?/;na.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=kc.pop()||na.expando+"_"+Pb++;return this[a]=!0,a}}),na.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(lc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&lc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=na.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(lc,"$1"+e):b.jsonp!==!1&&(b.url+=(Qb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||na.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?na(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,kc.push(e)),g&&na.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),na.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||da;var d=wa.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=r([a],b,e),e&&e.length&&na(e).remove(),na.merge([],d.childNodes))};var mc=na.fn.load;na.fn.load=function(a,b,c){if("string"!=typeof a&&mc)return mc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=na.trim(a.slice(h,a.length)),a=a.slice(0,h)),na.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&na.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?na("<div>").append(na.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},na.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){na.fn[b]=function(a){return this.on(b,a)}}),na.expr.filters.animated=function(a){return na.grep(na.timers,function(b){return a===b.elem}).length},na.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=na.css(a,"position"),l=na(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=na.css(a,"top"),i=na.css(a,"left"),j=("absolute"===k||"fixed"===k)&&na.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),na.isFunction(b)&&(b=b.call(a,c,na.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},na.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){na.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,na.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=ba(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===na.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),na.nodeName(a[0],"html")||(c=a.offset()),c.top+=na.css(a[0],"borderTopWidth",!0),c.left+=na.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-na.css(d,"marginTop",!0),left:b.left-c.left-na.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent;a&&!na.nodeName(a,"html")&&"static"===na.css(a,"position");)a=a.offsetParent;return a||nb})}}),na.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);na.fn[a]=function(d){return Na(this,function(a,d,e){var f=ba(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?na(f).scrollLeft():e,c?e:na(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),na.each(["top","left"],function(a,b){na.cssHooks[b]=F(la.pixelPosition,function(a,c){return c?(c=pb(a,b),lb.test(c)?na(a).position()[b]+"px":c):void 0})}),na.each({Height:"height",Width:"width"},function(a,b){na.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){na.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Na(this,function(b,c,d){var e;return na.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?na.css(b,c,g):na.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),na.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),na.fn.size=function(){return this.length},na.fn.andSelf=na.fn.addBack;var nc=a.jQuery,oc=a.$;return na.noConflict=function(b){return a.$===na&&(a.$=oc),b&&a.jQuery===na&&(a.jQuery=nc),na},b||(a.jQuery=a.$=na),na})},{}],46:[function(a,b,c){var d,e=a("./jquery.js"),f=(e.build,{});f.init=function(a){return d=a.clone().empty().removeAttr("id").css({visibility:"hidden",position:"absolute",top:-500,left:-1e3,width:e(window).width()}),e("body").append(d),f},f.measure=function(a,b){if(!d)throw new Error("Must call init before measure");var c=a.clone();d.append(c);var e=c.outerWidth(),f=c.outerHeight();return c.remove(),{w:e,h:f}},b.exports=f},{"./jquery.js":45}],47:[function(a,b,c){var d=a("./jquery.js"),e=d.build,f=a("./measure.js"),g=function(a,b){var c={};b=d.extend({closeBtn:!0},b);var g,h,i,j,k,l=function(){return g=e(".mktoModal",[h=e(".mktoModalMask"),i=e(".mktoModalContent",[k=e(".mktoModalClose",[" X "]).click(c.modalCloseClicked),j=e(".mktoModalMain")])])};c.modalCloseClicked=function(){c.hide()};var m=function(){var a=i.height(),b=i.width();if(!a||!b)return void setTimeout(m,25);var c=d(window).width(),e=d(window).height(),f=d(window).scrollTop(),g=d(document).height(),j=Math.max(0,c/2-b/2),k=Math.max(10,e/2-a/2);i.css({top:k+f+"px",left:j+"px"}),h.css("height",g)};return c.show=function(){var e=l(),g=f.measure(a);return j.css("width",g.w),j.append(a),b.closeBtn||k.remove(),h.hide(),i.hide(),m(),d("body").append(e),h.fadeIn(),i.fadeIn(),d(window).on("resize.mktoModal",m),c},c.hide=function(){return h.fadeOut(),i.fadeOut(function(){setTimeout(function(){a.detach(),g.remove(),d(window).off("resize.mktoModal")},10)}),c},c};b.exports=g},{"./jquery.js":45,"./measure.js":46}],48:[function(a,b,c){var d=function(a,b,c){function d(a){r.cssText=a}function e(a,b){return typeof a===b}function f(a,b){return!!~(""+a).indexOf(b)}function g(a,b){for(var d in a){var e=a[d];if(!f(e,"-")&&r[e]!==c)return"pfx"==b?e:!0}return!1}function h(a,b,d){for(var f in a){var g=b[a[f]];if(g!==c)return d===!1?a[f]:e(g,"function")?g.bind(d||b):g;
}return!1}function i(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),f=(a+" "+w.join(d+" ")+d).split(" ");return e(b,"string")||e(b,"undefined")?g(f,b):(f=(a+" "+x.join(d+" ")+d).split(" "),h(f,b,c))}function j(){n.input=function(c){for(var d=0,e=c.length;e>d;d++)A[c[d]]=!!(c[d]in s);return A.list&&(A.list=!(!b.createElement("datalist")||!a.HTMLDataListElement)),A}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),n.inputtypes=function(a){for(var d,e,f,g=0,h=a.length;h>g;g++){if(s.setAttribute("type",e=a[g]),d="text"!==s.type)if(s.value=t,s.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(e)&&s.style.WebkitAppearance!==c){if(o.appendChild(s),f=b.defaultView,f.getComputedStyle){var i=f.getComputedStyle(s,null);d=i&&"textfield"!==i.WebkitAppearance&&0!==s.offsetHeight}o.removeChild(s)}else/^(search|tel)$/.test(e)||(d=/^(url|email)$/.test(e)?s.checkValidity&&s.checkValidity()===!1:s.value!=t);z[a[g]]=!!d}return z}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var k,l,m="2.6.2",n={},o=b.documentElement,p="modernizr",q=b.createElement(p),r=q.style,s=b.createElement("input"),t=":)",u=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),v="Webkit Moz O ms",w=v.split(" "),x=v.toLowerCase().split(" "),y={},z={},A={},B=[],C=B.slice,D=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),k=b.body,l=k||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:p+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',p,'">',a,"</style>"].join(""),j.id=p,(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background="",l.style.overflow="hidden",i=o.style.overflow,o.style.overflow="hidden",o.appendChild(l)),g=c(j,a),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),o.style.overflow=i),!!g},E=function(){function a(a,f){f=f||b.createElement(d[a]||"div"),a="on"+a;var g=a in f;return g||(f.setAttribute||(f=b.createElement("div")),f.setAttribute&&f.removeAttribute&&(f.setAttribute(a,""),g=e(f[a],"function"),e(f[a],"undefined")||(f[a]=c),f.removeAttribute(a))),f=null,g}var d={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return a}(),F={}.hasOwnProperty;l=e(F,"undefined")||e(F.call,"undefined")?function(a,b){return b in a&&e(a.constructor.prototype[b],"undefined")}:function(a,b){return F.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=C.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(C.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(C.call(arguments)))};return d}),y.postmessage=function(){return!!a.postMessage},y.localstorage=function(){try{return localStorage.setItem(p,p),localStorage.removeItem(p),!0}catch(a){return!1}};for(var G in y)l(y,G)&&(k=G.toLowerCase(),n[k]=y[G](),B.push((n[k]?"":"no-")+k));return n.input||j(),n.addTest=function(a,b){if("object"==typeof a)for(var d in a)l(a,d)&&n.addTest(d,a[d]);else{if(a=a.toLowerCase(),n[a]!==c)return n;b="function"==typeof b?b():b,"undefined"!=typeof enableClasses&&enableClasses&&(o.className+=" "+(b?"":"no-")+a),n[a]=b}return n},d(""),q=s=null,n._version=m,n._prefixes=u,n._domPrefixes=x,n._cssomPrefixes=w,n.hasEvent=E,n.testProp=function(a){return g([a])},n.testAllProps=i,n.testStyles=D,n.prefixed=function(a,b,c){return b?i(a,b,c):i(a,"pfx")},n}(window,window.document),e=a("./yepnope.js");d.load=function(){e.apply(window,[].slice.call(arguments,0))},d.addTest("boxsizing",function(){return d.testAllProps("boxSizing")&&(void 0===document.documentMode||document.documentMode>7)}),d.addTest("borderradius",function(){return d.testAllProps("borderRadius")}),d.addTest("formvalidation",function(){var a=document.createElement("form");return"checkValidity"in a}),d.addTest("cors",function(){return!!(window.XMLHttpRequest&&"withCredentials"in new window.XMLHttpRequest)}),d.addTest("textareamaxlength",function(){var a=document.createElement("textarea");return"maxLength"in a}),d.addTest("csstransforms",function(){return!!d.testAllProps("transform")}),d.addTest("csschecked",function(){return d.testStyles("#modernizr input {width:100px} #modernizr input:checked {width:200px;display:block}",function(a,b){var c=document.createElement("input");return c.setAttribute("type","checkbox"),c.setAttribute("checked","checked"),a.appendChild(c),c.offsetWidth>=200})}),d.addTest("json",function(){return!(!(window.JSON&&JSON.stringify&&JSON.parse)||document.documentMode&&document.documentMode<9)}),b.exports=d},{"./yepnope.js":55}],49:[function(a,b,c){function d(a,b){var c=b;b=""+b;for(var d=q(r,b)?r:s,e=0;e<a.PicklistValues.length;e++){var f=a.PicklistValues[e].value||"";if(q(d,f))return f}return""+c}function e(a){for(var b=!1,c=!1,d=0;d<a.PicklistValues.length;d++){var e=a.PicklistValues[d].value||"";q(r,e)&&(b=!0),q(s,e)&&(c=!0)}return b&&c}function f(a){for(var b=0;b<a.PicklistValues.length;b++){var c=a.PicklistValues[b].value;if(""===c)return!0}return!1}function g(a){return!a.PicklistValues||a.IsMultiselect?!1:2==a.PicklistValues.length?e(a):3==a.PicklistValues.length?e(a)&&f(a):!1}function h(a){return a.PicklistValues?1==a.PicklistValues.length&&q(r,a.PicklistValues[0].value||""):!1}function i(a){return a.PicklistValues&&2==a.PicklistValues.length?e(a):!1}function j(a,b){if(null===b||void 0===b)return"";var c=g(a);return""===b&&c&&!f(a)&&(b=!1),""!==b&&c&&(b=d(a,b)),""+b}function k(a,b){if(null===b||void 0===b)return"";var c=i(a);return""===b&&c&&(b=!1),c&&(b=d(a,b)),""+b}function l(a,b){return null===b||void 0===b?"":(b=""+b,b.split(/\s|T/)[0])}function m(a,b){return null===b||void 0===b?"":(h(a)&&(b=d(a,b)),""+b)}function n(a,b){var c={},d=o.getFieldsByName(o.getFlattenedFields(b));return p.each(a,function(a,b){var e=d[a];if(e&&null!==b){var f=e.Datatype;"picklist"===f?c[a]=j(e,b):"radio"===f?c[a]=k(e,b):"checkbox"===f||"single_checkbox"===f?c[a]=m(e,b):"date"===f?c[a]=l(e,b):(b=""+b,c[a]=b)}}),c}var o=a("./fields/fieldHelpers.js"),p=a("./jquery.js"),q=function(a,b){return-1!=p.inArray(b,a)},r=["true","1","yes","Yes"],s=["false","0","no","No"];r.concat(s);b.exports.coerceTypes=n},{"./fields/fieldHelpers.js":29,"./jquery.js":45}],50:[function(a,b,c){function d(){try{if("undefined"!=typeof console&&"function"==typeof console.log)try{console.log.apply(console,arguments)}catch(a){console.log(Array.prototype.slice.call(arguments,0))}}catch(a){}}b.exports=d},{}],51:[function(a,b,c){function d(){}b.exports={};var e=a("./jquery.js");Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError("Function.prototype.bind called on incompatible "+b);for(var c=i.call(arguments,1),e=function(){if(this instanceof j){var d=b.apply(this,c.concat(i.call(arguments)));return Object(d)===d?d:this}return b.apply(a,c.concat(i.call(arguments)))},f=Math.max(0,b.length-c.length),g=[],h=0;f>h;h++)g.push("$"+h);var j=Function("binder","return function("+g.join(",")+"){return binder.apply(this,arguments)}")(e);return b.prototype&&(d.prototype=b.prototype,j.prototype=new d,d.prototype=null),j});var f=Function.prototype.call,g=Array.prototype,h=Object.prototype,i=g.slice,j=f.bind(h.toString),k=f.bind(h.hasOwnProperty);if(!Object.keys){var l=!0,m=function(){}.propertyIsEnumerable("prototype"),n=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],o=n.length;for(var p in{toString:null})l=!1;Object.keys=function r(a){var b="[object Function]"===j(a),c=null!==a&&"object"==typeof a;if(!c&&!b)throw new TypeError("Object.keys called on a non-object");var r=[],d=m&&b;for(var e in a)d&&"prototype"===e||!k(a,e)||r.push(e);if(l)for(var f=a.constructor,g=f&&f.prototype===a,h=0;o>h;h++){var i=n[h];g&&"constructor"===i||!k(a,i)||r.push(i)}return r}}if(String.prototype.trim||(String.prototype.trim=function(){return e.trim(this)}),Array.prototype.map||(Array.prototype.map=function(a){return e.map(this,a)}),"".substr&&"b"!=="0b".substr(-1)){var q=String.prototype.substr;String.prototype.substr=function(a,b){return q.call(this,0>a&&(a=this.length+a)<0?0:a,b)}}},{"./jquery.js":45}],52:[function(a,b,c){function d(a,b){var c=a.match(/\{\{.*?\}\}/g);if(!c)return a;var d={};e.each(c,function(a,c){var f=c.match(/\{\{\s?(\w*)\.(\w*)\s?:?\s?(.*?)\}\}/);if(f){var g=f[0],h=f[1],i=f[2],j=f[3]||"";if(!(h&&i&&b[h]&&b[h][i]))return;var k=b[h][i];if("function"==typeof k){attribParts=j.split("&");var l={};e.each(attribParts,function(a,b){var c=b.split("=");2==c.length&&(l[e.trim(decodeURIComponent(c[0]))]=e.trim(decodeURIComponent(c[1])))}),d[g]=k(l)}else d[g]=k.toString()}});var f=a;return e.each(d,function(a,b){f=f.split(a).join(b)}),f}var e=a("./jquery.js");b.exports=d},{"./jquery.js":45}],53:[function(a,b,c){function d(a,b){return a&&b?(a=h.parse(a),b=h.parse(b),a.protocol=b.protocol,a.host=b.host,h.format(a)):a}function e(a,b){return a&&b?(a=h.parse(a),b=h.parse(b),a.protocol=b.protocol,a.host=b.host,destPathParts=a.path.split("/"),sourcePathParts=b.path.split("/"),"lp"===sourcePathParts[1]&&sourcePathParts.length>=3&&"lp"!==destPathParts[1]&&(a.pathname=sourcePathParts.slice(0,3).join("/").concat(a.pathname)),h.format(a)):a}function f(a,b){var c=h.parse(a,!0);return i.extend(c.query,b),c.search="",a=h.format(c)}function g(a,b){if(!b)return a;i.isArray(b)||(b=[""+b]);var c=h.parse(a,!0);return i.each(b,function(a,b){delete c.query[b]}),c.search="",a=h.format(c)}var h=a("url"),i=a("./jquery.js");b.exports={swapHostsProtocols:d,addQueryParams:f,removeQueryParams:g,remapLandingPageUrl:e}},{"./jquery.js":45,url:23}],54:[function(a,b,c){var d=a("./jquery.js"),e=d.build,f=a("./measure.js"),g=a("./modernizr.js"),h=a("./fields/fieldHelpers.js"),i=function(a){var b={};b.currentErrorElem=null,b.currentErrorMsg=null;var c=".mktoFieldDescriptor";return b.checkOne=function(a){var b=!0,c=!0,e=a.data("mktoFieldDescriptor"),f=e.val();return e.required&&(b=e.requiredValFn?e.requiredValFn(f):!!d.trim(f)),e.validator&&(c=e.validator(e.val())),b&&c&&e.validatorElem?(e.validatorElem.removeClass("mktoInvalid"),e.validatorElem.addClass("mktoValid"),e.validatorElem.removeAttr("aria-describedby"),e.validatorElem.attr("aria-invalid","false")):e.validatorElem&&(e.validatorElem.removeClass("mktoValid"),e.validatorElem.addClass("mktoInvalid"),e.validatorElem.attr("aria-invalid","true")),b?c?null:e.validationMessage||"Validation failed":e.requiredMessage||e.validationMessage||"This field is required"},b.checkOneAndHide=function(){var a=d(this),c=b.checkOne(a);!c&&b.currentErrorMsg&&b.currentErrorMsg.fadeOut()},b.checkOneAndShow=function(){var a=d(this);if(a.data("mktoErrorShowBlocked"))return b.checkOneAndHide.call(this);var c=a.data("mktoFieldDescriptor").validatorElem,e=b.checkOne(a);e?b.currentErrorElem!=a&&(b.currentErrorMsg&&b.currentErrorMsg.fadeOut(),b.showError(c,e)):b.currentErrorMsg&&b.currentErrorMsg.fadeOut()},b.initScoped=function(a){var e=function(a,c){c=d(c),c.data("mktoErrorShowBlocked",!0);var e=function(){c.data("mktoErrorShowBlocked",!1),b.checkOneAndHide.call(this)},f=function(a){return function(b){"div"!=b.target.tagName.toLowerCase()&&a.apply(this,arguments)}};return c.find(".mktoLogicalField.mktoCheckboxList").length>0?void c.on("focusout",f(e)).on("keyup",e).on("click",b.checkOneAndHide):void c.on("focusin",f(b.checkOneAndShow)).on("focusout",f(e)).on("keyup",e).on("click",b.checkOneAndHide)};if(a.find(c).each(e),a.is(c)){var f=a.get(0);e.call(f,0,f)}},b.init=function(){b.clear(),b.initScoped(a)},b.showError=function(a,c){b.currentErrorMsg&&b.currentErrorMsg.remove();var d,i;("undefined"!=typeof a[0].name||a[0].childNodes[0]&&"undefined"!=typeof a[0].childNodes[0].name)&&(i="undefined"!=typeof a[0].name?a[0].name:a[0].childNodes[0].name);var j=e(".mktoError",[d=e(".mktoErrorArrowWrap",[e(".mktoErrorArrow")]),e(".mktoErrorMsg",{id:h.getValidationMsgId(i),role:"alert",tabindex:"-1"},e.html(c))]).hide();g.csstransforms||d.addClass("mktoArrowImage"),a.after(j),a.attr("aria-describedby",h.getValidationMsgId(i)),b.currentErrorElem=a,b.currentErrorMsg=j;var k,l=f.measure(j),m=a.outerWidth();k=m<l.w?-1*(l.w-m):(m-l.w)/2,j.css({right:k,bottom:-1*l.h}),j.fadeIn()},b.check=function(){b.clear();var e=null;if(a.find(c).each(function(){var a=d(this);a.data("mktoErrorShowBlocked",!1);var c=b.checkOne(a);c&&!e&&(e=a)}),e){var f=e.data("mktoFieldDescriptor"),g=f.validatorFocusElem||f.validatorElem;return g&&setTimeout(function(){g.focus(),e.find(".mktoLogicalField.mktoCheckboxList").length>0&&b.checkOneAndShow.call(e)},10),!1}return!0},b.clear=function(){b.currentErrorElem=null,b.currentErrorMsg=null,a.find(".mktoInvalid").removeClass("mktoInvalid"),a.find(".mktoValid").removeClass("mktoValid"),a.find(".mktoError").remove()},b};b.exports=i},{"./fields/fieldHelpers.js":29,"./jquery.js":45,"./measure.js":46,"./modernizr.js":48}],55:[function(a,b,c){!function(a,c,d){function e(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function f(a,b,d,f,g,i){var j,k,l=c.createElement("script");f=f||m.errorTimeout,l.src=a;for(k in d)l.setAttribute(k,d[k]);b=i?h:b||s,l.onreadystatechange=l.onload=function(){!j&&e(l.readyState)&&(j=1,b(),l.onload=l.onreadystatechange=null)},setTimeout(function(){j||(j=1,b(1))},f),F(),g?l.onload():o.parentNode.insertBefore(l,o)}function g(a,b,d,e,f,g){var i,j=c.createElement("link");e=e||m.errorTimeout,b=g?h:b||s,j.href=a,j.rel="stylesheet",j.type="text/css";for(i in d)j.setAttribute(i,d[i]);f||(F(),o.parentNode.insertBefore(j,o),setTimeout(b,0))}function h(){var a=q.shift();r=1,a?a.t?setTimeout(function(){("c"==a.t?m.injectCss:m.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):r=0}function i(a,b,d,f,g,i,j){function k(c){if(!n&&e(l.readyState)&&(s.r=n=1,!r&&h(),c)){"img"!=a&&setTimeout(function(){v.removeChild(l)},50);for(var d in H[b])H[b].hasOwnProperty(d)&&H[b][d].onload();l.onload=l.onreadystatechange=null}}j=j||m.errorTimeout;var l=c.createElement(a),n=0,p=0,s={t:d,s:b,e:g,a:i,x:j};1===H[b]&&(p=1,H[b]=[]),"object"==a?(l.data=b,l.setAttribute("type","text/css")):(l.src=b,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,p)},q.splice(f,0,s),"img"!=a&&(p||2===H[b]?(F(),v.insertBefore(l,u?null:o),setTimeout(k,j)):H[b].push(l))}function j(a,b,c,d,e){return r=0,b=b||"j",D(a)?i("c"==b?A:z,a,b,this.i++,c,d,e):(q.splice(this.i++,0,a),1==q.length&&h()),this}function k(){var a=m;return a.loader={load:j,i:0},a}var l,m,n=c.documentElement,o=(a.setTimeout,c.getElementsByTagName("script")[0]),p={}.toString,q=[],r=0,s=function(){},t="MozAppearance"in n.style,u=t&&!!c.createRange().compareNode,v=u?n:o.parentNode,w=a.opera&&"[object Opera]"==p.call(a.opera),x=!!c.attachEvent&&!w,y="webkitAppearance"in n.style&&!("async"in c.createElement("script")),z=t?"object":x||y?"script":"img",A=x?"script":y?"img":z,B=Array.isArray||function(a){return"[object Array]"==p.call(a)},C=function(a){return Object(a)===a},D=function(a){return"string"==typeof a},E=function(a){return"[object Function]"==p.call(a)},F=function(){o&&o.parentNode||(o=c.getElementsByTagName("script")[0])},G=[],H={},I={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}};m=function(a){function b(a){var b,c,d,e=a.split("!"),f=G.length,g=e.pop(),h=e.length,i={url:g,origUrl:g,prefixes:e};for(c=0;h>c;c++)d=e[c].split("="),b=I[d.shift()],b&&(i=b(i,d));for(c=0;f>c;c++)i=G[c](i);return i}function c(a){var b=a.split("?")[0];return b.substr(b.lastIndexOf(".")+1)}function e(a,e,f,g,h){var i=b(a),j=i.autoCallback;c(i.url);if(!i.bypass)return e&&(e=E(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(H[i.url]&&i.reexecute!==!0?i.noexec=!0:H[i.url]=1,a&&f.load(i.url,i.forceCSS||!i.forceJS&&"css"==c(i.url)?"c":d,i.noexec,i.attrs,i.timeout),(E(e)||E(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),H[i.url]=2}),void 0)}function f(a,b){function c(a,c){if(""===a||a){if(D(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),e(a,j,b,0,g);else if(C(a)){d=function(){var b,c=0;for(b in a)a.hasOwnProperty(b)&&c++;return c}();for(f in a)a.hasOwnProperty(f)&&(c||--d||(E(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[f]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[f])),e(a[f],j,b,f,g))}}else!c&&l()}var d,f,g=!!a.test,h=g?a.yep:a.nope,i=a.load||a.both,j=a.callback||s,k=j,l=a.complete||s;c(h,!!i||!!a.complete),i&&c(i),!i&&!!a.complete&&c("")}var g,h,i=m.loader;if(D(a))e(a,0,i,0);else if(B(a))for(g=0;g<a.length;g++)h=a[g],D(h)?e(h,0,i,0):B(h)?m(h):C(h)&&f(h,i);else C(a)&&f(a,i)},m.addPrefix=function(a,b){I[a]=b},m.addFilter=function(a){G.push(a)},m.errorTimeout=1e4,null==c.readyState&&c.addEventListener&&(c.readyState="loading",c.addEventListener("DOMContentLoaded",l=function(){c.removeEventListener("DOMContentLoaded",l,0),c.readyState="complete"},0)),b.exports=k(),b.exports.executeStack=h,b.exports.injectJs=f,b.exports.injectCss=g}(this,document)},{}]},{},[43]);
/*!
 * GSAP 3.5.1
 * https://greensock.com
 * 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){"use strict";function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function n(t){return"string"==typeof t}function o(t){return"function"==typeof t}function p(t){return"number"==typeof t}function q(t){return void 0===t}function r(t){return"object"==typeof t}function s(t){return!1!==t}function t(){return"undefined"!=typeof window}function u(t){return o(t)||n(t)}function K(t){return(l=mt(t,ot))&&ae}function L(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")}function M(t,e){return!e&&console.warn(t)}function N(t,e){return t&&(ot[t]=e)&&l&&(l[t]=e)||ot}function O(){return 0}function Y(t){var e,i,n=t[0];if(r(n)||o(n)||(t=[t]),!(e=(n._gsap||{}).harness)){for(i=_t.length;i--&&!_t[i].targetTest(n););e=_t[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new It(t[i],e)))||t.splice(i,1);return t}function Z(t){return t._gsap||Y(bt(t))[0]._gsap}function $(t,e,r){return(r=t[e])&&o(r)?t[e]():q(r)&&t.getAttribute&&t.getAttribute(e)||r}function _(t,e){return(t=t.split(",")).forEach(e)||t}function aa(t){return Math.round(1e5*t)/1e5||0}function ba(t,e){for(var r=e.length,i=0;t.indexOf(e[i])<0&&++i<r;);return i<r}function ca(t,e,r){var i,n=p(t[1]),a=(n?2:1)+(e<2?0:1),o=t[a];if(n&&(o.duration=t[1]),o.parent=r,e){for(i=o;r&&!("immediateRender"in i);)i=r.vars.defaults||{},r=s(r.vars.inherit)&&r.parent;o.immediateRender=s(i.immediateRender),e<2?o.runBackwards=1:o.startAt=t[a-1]}return o}function da(){var t,e,r=ht.length,i=ht.slice(0);for(lt={},t=ht.length=0;t<r;t++)(e=i[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)}function ea(t,e,r,i){ht.length&&da(),t.render(e,r,i),ht.length&&da()}function fa(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(st).length<2?e:n(t)?t.trim():t}function ga(t){return t}function ha(t,e){for(var r in e)r in t||(t[r]=e[r]);return t}function ia(t,e){for(var r in e)r in t||"duration"===r||"ease"===r||(t[r]=e[r])}function ka(t,e){for(var i in e)t[i]=r(e[i])?ka(t[i]||(t[i]={}),e[i]):e[i];return t}function la(t,e){var r,i={};for(r in t)r in e||(i[r]=t[r]);return i}function ma(t){var e=t.parent||E,r=t.keyframes?ia:ha;if(s(t.inherit))for(;e;)r(t,e.vars.defaults),e=e.parent||e._dp;return t}function pa(t,e,r,i){void 0===r&&(r="_first"),void 0===i&&(i="_last");var n=e._prev,a=e._next;n?n._next=a:t[r]===e&&(t[r]=a),a?a._prev=n:t[i]===e&&(t[i]=n),e._next=e._prev=e.parent=null}function qa(t,e){!t.parent||e&&!t.parent.autoRemoveChildren||t.parent.remove(t),t._act=0}function ra(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var r=t;r;)r._dirty=1,r=r.parent;return t}function ua(t){return t._repeat?gt(t._tTime,t=t.duration()+t._rDelay)*t:0}function wa(t,e){return(t-e._start)*e._ts+(0<=e._ts?0:e._dirty?e.totalDuration():e._tDur)}function xa(t){return t._end=aa(t._start+(t._tDur/Math.abs(t._ts||t._rts||U)||0))}function ya(t,e){var r=t._dp;return r&&r.smoothChildTiming&&t._ts&&(t._start=aa(t._dp._time-(0<t._ts?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),xa(t),r._dirty||ra(r,t)),t}function za(t,e){var r;if((e._time||e._initted&&!e._dur)&&(r=wa(t.rawTime(),e),(!e._dur||yt(0,e.totalDuration(),r)-e._tTime>U)&&e.render(r,!0)),ra(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)0<=r.rawTime()&&r.totalTime(r._tTime),r=r._dp;t._zTime=-U}}function Aa(t,e,r,i){return e.parent&&qa(e),e._start=aa(r+e._delay),e._end=aa(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),function _addLinkedListItem(t,e,r,i,n){void 0===r&&(r="_first"),void 0===i&&(i="_last");var a,s=t[i];if(n)for(a=e[n];s&&s[n]>a;)s=s._prev;s?(e._next=s._next,s._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[i]=e,e._prev=s,e.parent=e._dp=t}(t,e,"_first","_last",t._sort?"_start":0),t._recent=e,i||za(t,e),t}function Ba(t,e){return(ot.ScrollTrigger||L("scrollTrigger",e))&&ot.ScrollTrigger.create(e,t)}function Ca(t,e,r,i){return Nt(t,e),t._initted?!r&&t._pt&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&d!==At.frame?(ht.push(t),t._lazy=[e,i],1):void 0:1}function Fa(t,e,r,i){var n=t._repeat,a=aa(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=n?n<0?1e10:aa(a*(n+1)+t._rDelay*n):a,s&&!i?ya(t,t._tTime=t._tDur*s):t.parent&&xa(t),r||ra(t.parent,t),t}function Ga(t){return t instanceof Bt?ra(t):Fa(t,t._dur)}function Ia(t,e){var r,i,a=t.labels,s=t._recent||vt,o=t.duration()>=B?s.endTime(!1):t._dur;return n(e)&&(isNaN(e)||e in a)?"<"===(r=e.charAt(0))||">"===r?("<"===r?s._start:s.endTime(0<=s._repeat))+(parseFloat(e.substr(1))||0):(r=e.indexOf("="))<0?(e in a||(a[e]=o),a[e]):(i=+(e.charAt(r-1)+e.substr(r+1)),1<r?Ia(t,e.substr(0,r-1))+i:o+i):null==e?o:+e}function Ja(t,e){return t||0===t?e(t):e}function La(t){return(t=(t+"").substr((parseFloat(t)+"").length))&&isNaN(t)?t:""}function Oa(t,e){return t&&r(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&r(t[0]))&&!t.nodeType&&t!==i}function Ra(t){return t.sort(function(){return.5-Math.random()})}function Sa(t){if(o(t))return t;var _=r(t)?t:{each:t},c=Rt(_.ease),m=_.from||0,g=parseFloat(_.base)||0,v={},e=0<m&&m<1,y=isNaN(m)||e,T=_.axis,b=m,w=m;return n(m)?b=w={center:.5,edges:.5,end:1}[m]||0:!e&&y&&(b=m[0],w=m[1]),function(t,e,r){var i,n,a,s,o,u,h,l,f,d=(r||_).length,p=v[d];if(!p){if(!(f="auto"===_.grid?0:(_.grid||[1,B])[1])){for(h=-B;h<(h=r[f++].getBoundingClientRect().left)&&f<d;);f--}for(p=v[d]=[],i=y?Math.min(f,d)*b-.5:m%f,n=y?d*w/f-.5:m/f|0,l=B,u=h=0;u<d;u++)a=u%f-i,s=n-(u/f|0),p[u]=o=T?Math.abs("y"===T?s:a):J(a*a+s*s),h<o&&(h=o),o<l&&(l=o);"random"===m&&Ra(p),p.max=h-l,p.min=l,p.v=d=(parseFloat(_.amount)||parseFloat(_.each)*(d<f?d-1:T?"y"===T?d/f:f:Math.max(f,d/f))||0)*("edges"===m?-1:1),p.b=d<0?g-d:g,p.u=La(_.amount||_.each)||0,c=c&&d<0?Ft(c):c}return d=(p[t]-p.min)/p.max||0,aa(p.b+(c?c(d):d)*p.v)+p.u}}function Ta(e){var r=e<1?Math.pow(10,(e+"").length-2):1;return function(t){return Math.floor(Math.round(parseFloat(t)/e)*e*r)/r+(p(t)?0:La(t))}}function Ua(u,t){var h,l,e=tt(u);return!e&&r(u)&&(h=e=u.radius||B,u.values?(u=bt(u.values),(l=!p(u[0]))&&(h*=h)):u=Ta(u.increment)),Ja(t,e?o(u)?function(t){return l=u(t),Math.abs(l-t)<=h?l:t}:function(t){for(var e,r,i=parseFloat(l?t.x:t),n=parseFloat(l?t.y:0),a=B,s=0,o=u.length;o--;)(e=l?(e=u[o].x-i)*e+(r=u[o].y-n)*r:Math.abs(u[o]-i))<a&&(a=e,s=o);return s=!h||a<=h?u[s]:t,l||s===t||p(t)?s:s+La(t)}:Ta(u))}function Va(t,e,r,i){return Ja(tt(t)?!e:!0===r?!!(r=0):!i,function(){return tt(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((t+Math.random()*(e-t))/r)*r*i)/i})}function Za(e,r,t){return Ja(t,function(t){return e[~~r(t)]})}function ab(t){for(var e,r,i,n,a=0,s="";~(e=t.indexOf("random(",a));)i=t.indexOf(")",e),n="["===t.charAt(e+7),r=t.substr(e+7,i-e-7).match(n?st:et),s+=t.substr(a,e-a)+Va(n?r:+r[0],n?0:+r[1],+r[2]||1e-5),a=i+1;return s+t.substr(a,t.length-a)}function db(t,e,r){var i,n,a,s=t.labels,o=B;for(i in s)(n=s[i]-e)<0==!!r&&n&&o>(n=Math.abs(n))&&(a=i,o=n);return a}function fb(t){return qa(t),t.progress()<1&&xt(t,"onInterrupt"),t}function kb(t,e,r){return(6*(t=t<0?t+1:1<t?t-1:t)<1?e+(r-e)*t*6:t<.5?r:3*t<2?e+(r-e)*(2/3-t)*6:e)*kt+.5|0}function lb(t,e,r){var i,n,a,s,o,u,h,l,f,d,_=t?p(t)?[t>>16,t>>8&kt,t&kt]:0:Ot.black;if(!_){if(","===t.substr(-1)&&(t=t.substr(0,t.length-1)),Ot[t])_=Ot[t];else if("#"===t.charAt(0))4===t.length&&(t="#"+(i=t.charAt(1))+i+(n=t.charAt(2))+n+(a=t.charAt(3))+a),_=[(t=parseInt(t.substr(1),16))>>16,t>>8&kt,t&kt];else if("hsl"===t.substr(0,3))if(_=d=t.match(et),e){if(~t.indexOf("="))return _=t.match(rt),r&&_.length<4&&(_[3]=1),_}else s=+_[0]%360/360,o=_[1]/100,i=2*(u=_[2]/100)-(n=u<=.5?u*(o+1):u+o-u*o),3<_.length&&(_[3]*=1),_[0]=kb(s+1/3,i,n),_[1]=kb(s,i,n),_[2]=kb(s-1/3,i,n);else _=t.match(et)||Ot.transparent;_=_.map(Number)}return e&&!d&&(i=_[0]/kt,n=_[1]/kt,a=_[2]/kt,u=((h=Math.max(i,n,a))+(l=Math.min(i,n,a)))/2,h===l?s=o=0:(f=h-l,o=.5<u?f/(2-h-l):f/(h+l),s=h===i?(n-a)/f+(n<a?6:0):h===n?(a-i)/f+2:(i-n)/f+4,s*=60),_[0]=~~(s+.5),_[1]=~~(100*o+.5),_[2]=~~(100*u+.5)),r&&_.length<4&&(_[3]=1),_}function mb(t){var r=[],i=[],n=-1;return t.split(Mt).forEach(function(t){var e=t.match(it)||[];r.push.apply(r,e),i.push(n+=e.length+1)}),r.c=i,r}function nb(t,e,r){var i,n,a,s,o="",u=(t+o).match(Mt),h=e?"hsla(":"rgba(",l=0;if(!u)return t;if(u=u.map(function(t){return(t=lb(t,e,1))&&h+(e?t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]:t.join(","))+")"}),r&&(a=mb(t),(i=r.c).join(o)!==a.c.join(o)))for(s=(n=t.replace(Mt,"1").split(it)).length-1;l<s;l++)o+=n[l]+(~i.indexOf(l)?u.shift()||h+"0,0,0,0)":(a.length?a:u.length?u:r).shift());if(!n)for(s=(n=t.split(Mt)).length-1;l<s;l++)o+=n[l]+u[l];return o+n[s]}function qb(t){var e,r=t.join(" ");if(Mt.lastIndex=0,Mt.test(r))return e=Ct.test(r),t[1]=nb(t[1],e),t[0]=nb(t[0],e,mb(t[1])),!0}function zb(t){var e=(t+"").split("("),r=Dt[e[0]];return r&&1<e.length&&r.config?r.config.apply(null,~t.indexOf("{")?[function _parseObjectInString(t){for(var e,r,i,n={},a=t.substr(1,t.length-3).split(":"),s=a[0],o=1,u=a.length;o<u;o++)r=a[o],e=o!==u-1?r.lastIndexOf(","):r.length,i=r.substr(0,e),n[s]=isNaN(i)?i.replace(zt,"").trim():+i,s=r.substr(e+1).trim();return n}(e[1])]:function _valueInParentheses(t){var e=t.indexOf("(")+1,r=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<r?t.indexOf(")",r+1):r)}(t).split(",").map(fa)):Dt._CE&&St.test(t)?Dt._CE("",t):r}function Bb(t,e){for(var r,i=t._first;i;)i instanceof Bt?Bb(i,e):!i.vars.yoyoEase||i._yoyo&&i._repeat||i._yoyo===e||(i.timeline?Bb(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next}function Db(t,e,r,i){void 0===r&&(r=function easeOut(t){return 1-e(1-t)}),void 0===i&&(i=function easeInOut(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var n,a={easeIn:e,easeOut:r,easeInOut:i};return _(t,function(t){for(var e in Dt[t]=ot[t]=a,Dt[n=t.toLowerCase()]=r,a)Dt[n+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=Dt[t+"."+e]=a[e]}),a}function Eb(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}}function Fb(r,t,e){function ul(t){return 1===t?1:i*Math.pow(2,-10*t)*W((t-a)*n)+1}var i=1<=t?t:1,n=(e||(r?.3:.45))/(t<1?t:1),a=n/V*(Math.asin(1/i)||0),s="out"===r?ul:"in"===r?function(t){return 1-ul(1-t)}:Eb(ul);return n=V/n,s.config=function(t,e){return Fb(r,t,e)},s}function Gb(e,r){function Cl(t){return t?--t*t*((r+1)*t+r)+1:0}void 0===r&&(r=1.70158);var t="out"===e?Cl:"in"===e?function(t){return 1-Cl(1-t)}:Eb(Cl);return t.config=function(t){return Gb(e,t)},t}var E,i,a,h,l,f,d,c,m,g,v,y,T,b,w,x,k,C,A,P,D,S,z,F,R,j={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},I={duration:.5,overwrite:!1,delay:0},B=1e8,U=1/B,V=2*Math.PI,X=V/4,G=0,J=Math.sqrt,Q=Math.cos,W=Math.sin,H="function"==typeof ArrayBuffer&&ArrayBuffer.isView||function(){},tt=Array.isArray,et=/(?:-?\.?\d|\.)+/gi,rt=/[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,it=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,nt=/[-+=.]*\d+(?:\.|e-|e)*\d*/gi,at=/[+-]=-?[\.\d]+/,st=/[#\-+.]*\b[a-z\d-=+%.]+/gi,ot={},ut={},ht=[],lt={},ft={},dt={},pt=30,_t=[],ct="",mt=function _merge(t,e){for(var r in e)t[r]=e[r];return t},gt=function _animationCycle(t,e){return(t/=e)&&~~t===t?~~t-1:~~t},vt={_start:0,endTime:O},yt=function _clamp(t,e,r){return r<t?t:e<r?e:r},Tt=[].slice,bt=function toArray(t,e){return!n(t)||e||!a&&Pt()?tt(t)?function _flatten(t,e,r){return void 0===r&&(r=[]),t.forEach(function(t){return n(t)&&!e||Oa(t,1)?r.push.apply(r,bt(t)):r.push(t)})||r}(t,e):Oa(t)?Tt.call(t,0):t?[t]:[]:Tt.call(h.querySelectorAll(t),0)},wt=function mapRange(e,t,r,i,n){var a=t-e,s=i-r;return Ja(n,function(t){return r+((t-e)/a*s||0)})},xt=function _callback(t,e,r){var i,n,a=t.vars,s=a[e];if(s)return i=a[e+"Params"],n=a.callbackScope||t,r&&ht.length&&da(),i?s.apply(n,i):s.call(n)},kt=255,Ot={aqua:[0,kt,kt],lime:[0,kt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,kt],navy:[0,0,128],white:[kt,kt,kt],olive:[128,128,0],yellow:[kt,kt,0],orange:[kt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[kt,0,0],pink:[kt,192,203],cyan:[0,kt,kt],transparent:[kt,kt,kt,0]},Mt=function(){var t,e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(t in Ot)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),Ct=/hsl[a]?\(/,At=(x=Date.now,k=500,C=33,A=x(),P=A,S=D=1e3/240,T={time:0,frame:0,tick:function tick(){qk(!0)},deltaRatio:function deltaRatio(t){return b/(1e3/(t||60))},wake:function wake(){f&&(!a&&t()&&(i=a=window,h=i.document||{},ot.gsap=ae,(i.gsapVersions||(i.gsapVersions=[])).push(ae.version),K(l||i.GreenSockGlobals||!i.gsap&&i||{}),y=i.requestAnimationFrame),g&&T.sleep(),v=y||function(t){return setTimeout(t,S-1e3*T.time+1|0)},m=1,qk(2))},sleep:function sleep(){(y?i.cancelAnimationFrame:clearTimeout)(g),m=0,v=O},lagSmoothing:function lagSmoothing(t,e){k=t||1e8,C=Math.min(e,k,0)},fps:function fps(t){D=1e3/(t||240),S=1e3*T.time+D},add:function add(t){z.indexOf(t)<0&&z.push(t),Pt()},remove:function remove(t){var e;~(e=z.indexOf(t))&&z.splice(e,1)&&e<=w&&w--},_listeners:z=[]}),Pt=function _wake(){return!m&&At.wake()},Dt={},St=/^[\d.\-M][\d.\-,\s]/,zt=/["']/g,Ft=function _invertEase(e){return function(t){return 1-e(1-t)}},Rt=function _parseEase(t,e){return t&&(o(t)?t:Dt[t]||zb(t))||e};function qk(t){var e,r,i,n,a=x()-P,s=!0===t;if(k<a&&(A+=a-C),(0<(e=(i=(P+=a)-A)-S)||s)&&(n=++T.frame,b=i-1e3*T.time,T.time=i/=1e3,S+=e+(D<=e?4:D-e),r=1),s||(g=v(qk)),r)for(w=0;w<z.length;w++)z[w](i,b,n,t)}function Tl(t){return t<R?F*t*t:t<.7272727272727273?F*Math.pow(t-1.5/2.75,2)+.75:t<.9090909090909092?F*(t-=2.25/2.75)*t+.9375:F*Math.pow(t-2.625/2.75,2)+.984375}_("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;Db(t+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(2*t,r)/2:1-Math.pow(2*(1-t),r)/2})}),Dt.Linear.easeNone=Dt.none=Dt.Linear.easeIn,Db("Elastic",Fb("in"),Fb("out"),Fb()),F=7.5625,R=1/2.75,Db("Bounce",function(t){return 1-Tl(1-t)},Tl),Db("Expo",function(t){return t?Math.pow(2,10*(t-1)):0}),Db("Circ",function(t){return-(J(1-t*t)-1)}),Db("Sine",function(t){return 1===t?1:1-Q(t*X)}),Db("Back",Gb("in"),Gb("out"),Gb()),Dt.SteppedEase=Dt.steps=ot.SteppedEase={config:function config(t,e){void 0===t&&(t=1);var r=1/t,i=t+(e?0:1),n=e?1:0;return function(t){return((i*yt(0,.99999999,t)|0)+n)*r}}},I.ease=Dt["quad.out"],_("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return ct+=t+","+t+"Params,"});var Et,It=function GSCache(t,e){this.id=G++,(t._gsap=this).target=t,this.harness=e,this.get=e?e.get:$,this.set=e?e.getSetter:Qt},Lt=((Et=Animation.prototype).delay=function delay(t){return t||0===t?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},Et.duration=function duration(t){return arguments.length?this.totalDuration(0<this._repeat?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},Et.totalDuration=function totalDuration(t){return arguments.length?(this._dirty=0,Fa(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},Et.totalTime=function totalTime(t,e){if(Pt(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(ya(this,t);r.parent;)r.parent._time!==r._start+(0<=r._ts?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(0<this._ts&&t<this._tDur||this._ts<0&&0<t||!this._tDur&&!t)&&Aa(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===U||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),ea(this,t,e)),this},Et.time=function time(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+ua(this))%this._dur||(t?this._dur:0),e):this._time},Et.totalProgress=function totalProgress(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},Et.progress=function progress(t,e){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?t:1-t)+ua(this),e):this.duration()?Math.min(1,this._time/this._dur):this.ratio},Et.iteration=function iteration(t,e){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,e):this._repeat?gt(this._tTime,r)+1:1},Et.timeScale=function timeScale(t){if(!arguments.length)return this._rts===-U?0:this._rts;if(this._rts===t)return this;var e=this.parent&&this._ts?wa(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-U?0:this._rts,function _recacheAncestors(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t}(this.totalTime(yt(-this._delay,this._tDur,e),!0))},Et.paused=function paused(t){return arguments.length?(this._ps!==t&&((this._ps=t)?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Pt(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&(this._tTime-=U)&&Math.abs(this._zTime)!==U))),this):this._ps},Et.startTime=function startTime(t){if(arguments.length){this._start=t;var e=this.parent||this._dp;return!e||!e._sort&&this.parent||Aa(e,this,t-this._delay),this}return this._start},Et.endTime=function endTime(t){return this._start+(s(t)?this.totalDuration():this.duration())/Math.abs(this._ts)},Et.rawTime=function rawTime(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?wa(e.rawTime(t),this):this._tTime:this._tTime},Et.globalTime=function globalTime(t){for(var e=this,r=arguments.length?t:e.rawTime();e;)r=e._start+r/(e._ts||1),e=e._dp;return r},Et.repeat=function repeat(t){return arguments.length?(this._repeat=t,Ga(this)):this._repeat},Et.repeatDelay=function repeatDelay(t){return arguments.length?(this._rDelay=t,Ga(this)):this._rDelay},Et.yoyo=function yoyo(t){return arguments.length?(this._yoyo=t,this):this._yoyo},Et.seek=function seek(t,e){return this.totalTime(Ia(this,t),s(e))},Et.restart=function restart(t,e){return this.play().totalTime(t?-this._delay:0,s(e))},Et.play=function play(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},Et.reverse=function reverse(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},Et.pause=function pause(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},Et.resume=function resume(){return this.paused(!1)},Et.reversed=function reversed(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-U:0)),this):this._rts<0},Et.invalidate=function invalidate(){return this._initted=0,this._zTime=-U,this},Et.isActive=function isActive(){var t,e=this.parent||this._dp,r=this._start;return!(e&&!(this._ts&&this._initted&&e.isActive()&&(t=e.rawTime(!0))>=r&&t<this.endTime(!0)-U))},Et.eventCallback=function eventCallback(t,e,r){var i=this.vars;return 1<arguments.length?(e?(i[t]=e,r&&(i[t+"Params"]=r),"onUpdate"===t&&(this._onUpdate=e)):delete i[t],this):i[t]},Et.then=function then(t){var i=this;return new Promise(function(e){function jn(){var t=i.then;i.then=null,o(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=t),e(r),i.then=t}var r=o(t)?t:ga;i._initted&&1===i.totalProgress()&&0<=i._ts||!i._tTime&&i._ts<0?jn():i._prom=jn})},Et.kill=function kill(){fb(this)},Animation);function Animation(t,e){var r=t.parent||E;this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Fa(this,+t.duration,1,1),this.data=t.data,m||At.wake(),r&&Aa(r,this,e||0===e?e:r._time,1),t.reversed&&this.reverse(),t.paused&&this.paused(!0)}ha(Lt.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-U,_prom:0,_ps:!1,_rts:1});var Bt=function(i){function Timeline(t,e){var r;return void 0===t&&(t={}),(r=i.call(this,t,e)||this).labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=s(t.sortChildren),r.parent&&za(r.parent,_assertThisInitialized(r)),t.scrollTrigger&&Ba(_assertThisInitialized(r),t.scrollTrigger),r}_inheritsLoose(Timeline,i);var t=Timeline.prototype;return t.to=function to(t,e,r,i){return new Xt(t,ca(arguments,0,this),Ia(this,p(e)?i:r)),this},t.from=function from(t,e,r,i){return new Xt(t,ca(arguments,1,this),Ia(this,p(e)?i:r)),this},t.fromTo=function fromTo(t,e,r,i,n){return new Xt(t,ca(arguments,2,this),Ia(this,p(e)?n:i)),this},t.set=function set(t,e,r){return e.duration=0,e.parent=this,ma(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new Xt(t,e,Ia(this,r),1),this},t.call=function call(t,e,r){return Aa(this,Xt.delayedCall(0,t,e),Ia(this,r))},t.staggerTo=function staggerTo(t,e,r,i,n,a,s){return r.duration=e,r.stagger=r.stagger||i,r.onComplete=a,r.onCompleteParams=s,r.parent=this,new Xt(t,r,Ia(this,n)),this},t.staggerFrom=function staggerFrom(t,e,r,i,n,a,o){return r.runBackwards=1,ma(r).immediateRender=s(r.immediateRender),this.staggerTo(t,e,r,i,n,a,o)},t.staggerFromTo=function staggerFromTo(t,e,r,i,n,a,o,u){return i.startAt=r,ma(i).immediateRender=s(i.immediateRender),this.staggerTo(t,e,i,n,a,o,u)},t.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d,p,_,c=this._time,m=this._dirty?this.totalDuration():this._tDur,g=this._dur,v=this!==E&&m-U<t&&0<=t?m:t<U?0:t,y=this._zTime<0!=t<0&&(this._initted||!g);if(v!==this._tTime||r||y){if(c!==this._time&&g&&(v+=this._time-c,t+=this._time-c),i=v,f=this._start,u=!(l=this._ts),y&&(g||(c=this._zTime),!t&&e||(this._zTime=t)),this._repeat&&(p=this._yoyo,o=g+this._rDelay,i=aa(v%o),v===m?(s=this._repeat,i=g):((s=~~(v/o))&&s===v/o&&(i=g,s--),g<i&&(i=g)),d=gt(this._tTime,o),!c&&this._tTime&&d!==s&&(d=s),p&&1&s&&(i=g-i,_=1),s!==d&&!this._lock)){var T=p&&1&d,b=T===(p&&1&s);if(s<d&&(T=!T),c=T?0:g,this._lock=1,this.render(c||(_?0:aa(s*o)),e,!g)._lock=0,!e&&this.parent&&xt(this,"onRepeat"),this.vars.repeatRefresh&&!_&&(this.invalidate()._lock=1),c!==this._time||u!=!this._ts)return this;if(g=this._dur,m=this._tDur,b&&(this._lock=2,c=T?g:-1e-4,this.render(c,!0),this.vars.repeatRefresh&&!_&&this.invalidate()),this._lock=0,!this._ts&&!u)return this;Bb(this,_)}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=function _findNextPauseTween(t,e,r){var i;if(e<r)for(i=t._first;i&&i._start<=r;){if(!i._dur&&"isPause"===i.data&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=r;){if(!i._dur&&"isPause"===i.data&&i._start<e)return i;i=i._prev}}(this,aa(c),aa(i)))&&(v-=i-(i=h._start)),this._tTime=v,this._time=i,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=t),c||!i||e||xt(this,"onStart"),c<=i&&0<=t)for(n=this._first;n;){if(a=n._next,(n._act||i>=n._start)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(i-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(i-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=-U);break}}n=a}else{n=this._last;for(var w=t<0?t:i;n;){if(a=n._prev,(n._act||w<=n._end)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(w-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(w-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=w?-U:U);break}}n=a}}if(h&&!e&&(this.pause(),h.render(c<=i?0:-U)._zTime=c<=i?1:-1,this._ts))return this._start=f,xa(this),this.render(t,e,r);this._onUpdate&&!e&&xt(this,"onUpdate",!0),(v===m&&m>=this.totalDuration()||!v&&c)&&(f!==this._start&&Math.abs(l)===Math.abs(this._ts)||this._lock||(!t&&g||!(v===m&&0<this._ts||!v&&this._ts<0)||qa(this,1),e||t<0&&!c||!v&&!c||(xt(this,v===m?"onComplete":"onReverseComplete",!0),!this._prom||v<m&&0<this.timeScale()||this._prom())))}return this},t.add=function add(t,e){var r=this;if(p(e)||(e=Ia(this,e)),!(t instanceof Lt)){if(tt(t))return t.forEach(function(t){return r.add(t,e)}),this;if(n(t))return this.addLabel(t,e);if(!o(t))return this;t=Xt.delayedCall(0,t)}return this!==t?Aa(this,t,e):this},t.getChildren=function getChildren(t,e,r,i){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),void 0===i&&(i=-B);for(var n=[],a=this._first;a;)a._start>=i&&(a instanceof Xt?e&&n.push(a):(r&&n.push(a),t&&n.push.apply(n,a.getChildren(!0,e,r)))),a=a._next;return n},t.getById=function getById(t){for(var e=this.getChildren(1,1,1),r=e.length;r--;)if(e[r].vars.id===t)return e[r]},t.remove=function remove(t){return n(t)?this.removeLabel(t):o(t)?this.killTweensOf(t):(pa(this,t),t===this._recent&&(this._recent=this._last),ra(this))},t.totalTime=function totalTime(t,e){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=aa(At.time-(0<this._ts?t/this._ts:(this.totalDuration()-t)/-this._ts))),i.prototype.totalTime.call(this,t,e),this._forcing=0,this):this._tTime},t.addLabel=function addLabel(t,e){return this.labels[t]=Ia(this,e),this},t.removeLabel=function removeLabel(t){return delete this.labels[t],this},t.addPause=function addPause(t,e,r){var i=Xt.delayedCall(0,e||O,r);return i.data="isPause",this._hasPause=1,Aa(this,i,Ia(this,t))},t.removePause=function removePause(t){var e=this._first;for(t=Ia(this,t);e;)e._start===t&&"isPause"===e.data&&qa(e),e=e._next},t.killTweensOf=function killTweensOf(t,e,r){for(var i=this.getTweensOf(t,r),n=i.length;n--;)qt!==i[n]&&i[n].kill(t,e);return this},t.getTweensOf=function getTweensOf(t,e){for(var r,i=[],n=bt(t),a=this._first,s=p(e);a;)a instanceof Xt?ba(a._targets,n)&&(s?(!qt||a._initted&&a._ts)&&a.globalTime(0)<=e&&a.globalTime(a.totalDuration())>e:!e||a.isActive())&&i.push(a):(r=a.getTweensOf(n,e)).length&&i.push.apply(i,r),a=a._next;return i},t.tweenTo=function tweenTo(t,e){e=e||{};var r=this,i=Ia(r,t),n=e.startAt,a=e.onStart,s=e.onStartParams,o=Xt.to(r,ha(e,{ease:"none",lazy:!1,time:i,overwrite:"auto",duration:e.duration||Math.abs((i-(n&&"time"in n?n.time:r._time))/r.timeScale())||U,onStart:function onStart(){r.pause();var t=e.duration||Math.abs((i-r._time)/r.timeScale());o._dur!==t&&Fa(o,t,0,1).render(o._time,!0,!0),a&&a.apply(o,s||[])}}));return o},t.tweenFromTo=function tweenFromTo(t,e,r){return this.tweenTo(e,ha({startAt:{time:Ia(this,t)}},r))},t.recent=function recent(){return this._recent},t.nextLabel=function nextLabel(t){return void 0===t&&(t=this._time),db(this,Ia(this,t))},t.previousLabel=function previousLabel(t){return void 0===t&&(t=this._time),db(this,Ia(this,t),1)},t.currentLabel=function currentLabel(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+U)},t.shiftChildren=function shiftChildren(t,e,r){void 0===r&&(r=0);for(var i,n=this._first,a=this.labels;n;)n._start>=r&&(n._start+=t,n._end+=t),n=n._next;if(e)for(i in a)a[i]>=r&&(a[i]+=t);return ra(this)},t.invalidate=function invalidate(){var t=this._first;for(this._lock=0;t;)t.invalidate(),t=t._next;return i.prototype.invalidate.call(this)},t.clear=function clear(t){void 0===t&&(t=!0);for(var e,r=this._first;r;)e=r._next,this.remove(r),r=e;return this._time=this._tTime=this._pTime=0,t&&(this.labels={}),ra(this)},t.totalDuration=function totalDuration(t){var e,r,i,n=0,a=this,s=a._last,o=B;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-t:t));if(a._dirty){for(i=a.parent;s;)e=s._prev,s._dirty&&s.totalDuration(),o<(r=s._start)&&a._sort&&s._ts&&!a._lock?(a._lock=1,Aa(a,s,r-s._delay,1)._lock=0):o=r,r<0&&s._ts&&(n-=r,(!i&&!a._dp||i&&i.smoothChildTiming)&&(a._start+=r/a._ts,a._time-=r,a._tTime-=r),a.shiftChildren(-r,!1,-Infinity),o=0),s._end>n&&s._ts&&(n=s._end),s=e;Fa(a,a===E&&a._time>n?a._time:n,1,1),a._dirty=0}return a._tDur},Timeline.updateRoot=function updateRoot(t){if(E._ts&&(ea(E,wa(t,E)),d=At.frame),At.frame>=pt){pt+=j.autoSleep||120;var e=E._first;if((!e||!e._ts)&&j.autoSleep&&At._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||At.sleep()}}},Timeline}(Lt);ha(Bt.prototype,{_lock:0,_hasPause:0,_forcing:0});function Nb(t,e,i,a,s,u){var h,l,f,d;if(ft[t]&&!1!==(h=new ft[t]).init(s,h.rawVars?e[t]:function _processVars(t,e,i,a,s){if(o(t)&&(t=jt(t,s,e,i,a)),!r(t)||t.style&&t.nodeType||tt(t)||H(t))return n(t)?jt(t,s,e,i,a):t;var u,h={};for(u in t)h[u]=jt(t[u],s,e,i,a);return h}(e[t],a,s,u,i),i,a,u)&&(i._pt=l=new ie(i._pt,s,t,0,1,h.render,h,0,h.priority),i!==c))for(f=i._ptLookup[i._targets.indexOf(s)],d=h._props.length;d--;)f[h._props[d]]=l;return h}var qt,Yt=function _addPropTween(t,e,r,i,a,s,u,h,l){o(i)&&(i=i(a||0,t,s));var f,d=t[e],p="get"!==r?r:o(d)?l?t[e.indexOf("set")||!o(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():d,_=o(d)?l?Jt:Zt:Gt;if(n(i)&&(~i.indexOf("random(")&&(i=ab(i)),"="===i.charAt(1)&&(i=parseFloat(p)+parseFloat(i.substr(2))*("-"===i.charAt(0)?-1:1)+(La(p)||0))),p!==i)return isNaN(p*i)?(d||e in t||L(e,i),function _addComplexStringPropTween(t,e,r,i,n,a,s){var o,u,h,l,f,d,p,_,c=new ie(this._pt,t,e,0,1,Ht,null,n),m=0,g=0;for(c.b=r,c.e=i,r+="",(p=~(i+="").indexOf("random("))&&(i=ab(i)),a&&(a(_=[r,i],t,e),r=_[0],i=_[1]),u=r.match(nt)||[];o=nt.exec(i);)l=o[0],f=i.substring(m,o.index),h?h=(h+1)%5:"rgba("===f.substr(-5)&&(h=1),l!==u[g++]&&(d=parseFloat(u[g-1])||0,c._pt={_next:c._pt,p:f||1===g?f:",",s:d,c:"="===l.charAt(1)?parseFloat(l.substr(2))*("-"===l.charAt(0)?-1:1):parseFloat(l)-d,m:h&&h<4?Math.round:0},m=nt.lastIndex);return c.c=m<i.length?i.substring(m,i.length):"",c.fp=s,(at.test(i)||p)&&(c.e=0),this._pt=c}.call(this,t,e,p,i,_,h||j.stringFilter,l)):(f=new ie(this._pt,t,e,+p||0,i-(p||0),"boolean"==typeof d?$t:Wt,0,_),l&&(f.fp=l),u&&f.modifier(u,this,t),this._pt=f)},Nt=function _initTween(t,e){var r,i,n,a,o,u,h,l,f,d,p,_,c,m=t.vars,g=m.ease,v=m.startAt,y=m.immediateRender,T=m.lazy,b=m.onUpdate,w=m.onUpdateParams,x=m.callbackScope,k=m.runBackwards,O=m.yoyoEase,M=m.keyframes,C=m.autoRevert,A=t._dur,P=t._startAt,D=t._targets,S=t.parent,z=S&&"nested"===S.data?S.parent._targets:D,F="auto"===t._overwrite,R=t.timeline;if(!R||M&&g||(g="none"),t._ease=Rt(g,I.ease),t._yEase=O?Ft(Rt(!0===O?g:O,I.ease)):0,O&&t._yoyo&&!t._repeat&&(O=t._yEase,t._yEase=t._ease,t._ease=O),!R){if(_=(l=D[0]?Z(D[0]).harness:0)&&m[l.prop],r=la(m,ut),P&&P.render(-1,!0).kill(),v){if(qa(t._startAt=Xt.set(D,ha({data:"isStart",overwrite:!1,parent:S,immediateRender:!0,lazy:s(T),startAt:null,delay:0,onUpdate:b,onUpdateParams:w,callbackScope:x,stagger:0},v))),y)if(0<e)C||(t._startAt=0);else if(A&&!(e<0&&P))return void(e&&(t._zTime=e))}else if(k&&A)if(P)C||(t._startAt=0);else if(e&&(y=!1),n=ha({overwrite:!1,data:"isFromStart",lazy:y&&s(T),immediateRender:y,stagger:0,parent:S},r),_&&(n[l.prop]=_),qa(t._startAt=Xt.set(D,n)),y){if(!e)return}else _initTween(t._startAt,U);for(t._pt=0,T=A&&s(T)||T&&!A,i=0;i<D.length;i++){if(h=(o=D[i])._gsap||Y(D)[i]._gsap,t._ptLookup[i]=d={},lt[h.id]&&ht.length&&da(),p=z===D?i:z.indexOf(o),l&&!1!==(f=new l).init(o,_||r,t,p,z)&&(t._pt=a=new ie(t._pt,o,f.name,0,1,f.render,f,0,f.priority),f._props.forEach(function(t){d[t]=a}),f.priority&&(u=1)),!l||_)for(n in r)ft[n]&&(f=Nb(n,r,t,p,o,z))?f.priority&&(u=1):d[n]=a=Yt.call(t,o,n,"get",r[n],p,z,0,m.stringFilter);t._op&&t._op[i]&&t.kill(o,t._op[i]),F&&t._pt&&(qt=t,E.killTweensOf(o,d,t.globalTime(0)),c=!t.parent,qt=0),t._pt&&T&&(lt[h.id]=1)}u&&re(t),t._onInit&&t._onInit(t)}t._from=!R&&!!m.runBackwards,t._onUpdate=b,t._initted=(!t._op||t._pt)&&!c},jt=function _parseFuncOrString(t,e,r,i,a){return o(t)?t.call(e,r,i,a):n(t)&&~t.indexOf("random(")?ab(t):t},Ut=ct+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",Vt=(Ut+",id,stagger,delay,duration,paused,scrollTrigger").split(","),Xt=function(S){function Tween(t,e,i,n){var a;"number"==typeof e&&(i.duration=e,e=i,i=null);var o,h,l,f,d,_,c,m,g=(a=S.call(this,n?e:ma(e),i)||this).vars,v=g.duration,y=g.delay,T=g.immediateRender,b=g.stagger,w=g.overwrite,x=g.keyframes,k=g.defaults,C=g.scrollTrigger,A=g.yoyoEase,P=a.parent,D=(tt(t)||H(t)?p(t[0]):"length"in e)?[t]:bt(t);if(a._targets=D.length?Y(D):M("GSAP target "+t+" not found. https://greensock.com",!j.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=w,x||b||u(v)||u(y)){if(e=a.vars,(o=a.timeline=new Bt({data:"nested",defaults:k||{}})).kill(),o.parent=_assertThisInitialized(a),x)ha(o.vars.defaults,{ease:"none"}),x.forEach(function(t){return o.to(D,t,">")});else{if(f=D.length,c=b?Sa(b):O,r(b))for(d in b)~Ut.indexOf(d)&&((m=m||{})[d]=b[d]);for(h=0;h<f;h++){for(d in l={},e)Vt.indexOf(d)<0&&(l[d]=e[d]);l.stagger=0,A&&(l.yoyoEase=A),m&&mt(l,m),_=D[h],l.duration=+jt(v,_assertThisInitialized(a),h,_,D),l.delay=(+jt(y,_assertThisInitialized(a),h,_,D)||0)-a._delay,!b&&1===f&&l.delay&&(a._delay=y=l.delay,a._start+=y,l.delay=0),o.to(_,l,c(h,_,D))}o.duration()?v=y=0:a.timeline=0}v||a.duration(v=o.duration())}else a.timeline=0;return!0===w&&(qt=_assertThisInitialized(a),E.killTweensOf(D),qt=0),P&&za(P,_assertThisInitialized(a)),(T||!v&&!x&&a._start===aa(P._time)&&s(T)&&function _hasNoPausedAncestors(t){return!t||t._ts&&_hasNoPausedAncestors(t.parent)}(_assertThisInitialized(a))&&"nested"!==P.data)&&(a._tTime=-U,a.render(Math.max(0,-y))),C&&Ba(_assertThisInitialized(a),C),a}_inheritsLoose(Tween,S);var t=Tween.prototype;return t.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d=this._time,p=this._tDur,_=this._dur,c=p-U<t&&0<=t?p:t<U?0:t;if(_){if(c!==this._tTime||!t||r||this._startAt&&this._zTime<0!=t<0){if(i=c,l=this.timeline,this._repeat){if(s=_+this._rDelay,i=aa(c%s),c===p?(a=this._repeat,i=_):((a=~~(c/s))&&a===c/s&&(i=_,a--),_<i&&(i=_)),(u=this._yoyo&&1&a)&&(f=this._yEase,i=_-i),o=gt(this._tTime,s),i===d&&!r&&this._initted)return this;a!==o&&(l&&this._yEase&&Bb(l,u),!this.vars.repeatRefresh||u||this._lock||(this._lock=r=1,this.render(aa(s*a),!0).invalidate()._lock=0))}if(!this._initted){if(Ca(this,t<0?t:i,r,e))return this._tTime=0,this;if(_!==this._dur)return this.render(t,e,r)}for(this._tTime=c,this._time=i,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(f||this._ease)(i/_),this._from&&(this.ratio=h=1-h),!i||d||e||xt(this,"onStart"),n=this._pt;n;)n.r(h,n.d),n=n._next;l&&l.render(t<0?t:!i&&u?-U:l._dur*h,e,r)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(t<0&&this._startAt&&this._startAt.render(t,!0,r),xt(this,"onUpdate")),this._repeat&&a!==o&&this.vars.onRepeat&&!e&&this.parent&&xt(this,"onRepeat"),c!==this._tDur&&c||this._tTime!==c||(t<0&&this._startAt&&!this._onUpdate&&this._startAt.render(t,!0,!0),!t&&_||!(c===this._tDur&&0<this._ts||!c&&this._ts<0)||qa(this,1),e||t<0&&!d||!c&&!d||(xt(this,c===p?"onComplete":"onReverseComplete",!0),!this._prom||c<p&&0<this.timeScale()||this._prom()))}}else!function _renderZeroDurationTween(t,e,r,i){var n,a,s=t.ratio,o=e<0||!e&&s&&!t._start&&t._zTime>U&&!t._dp._lock||(t._ts<0||t._dp._ts<0)&&"isFromStart"!==t.data&&"isStart"!==t.data?0:1,u=t._rDelay,h=0;if(u&&t._repeat&&(h=yt(0,t._tDur,e),gt(h,u)!==(a=gt(t._tTime,u))&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||i||t._zTime===U||!e&&t._zTime){if(!t._initted&&Ca(t,e,i,r))return;for(a=t._zTime,t._zTime=e||(r?U:0),r=r||e&&!a,t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=h,r||xt(t,"onStart"),n=t._pt;n;)n.r(o,n.d),n=n._next;t._startAt&&e<0&&t._startAt.render(e,!0,!0),t._onUpdate&&!r&&xt(t,"onUpdate"),h&&t._repeat&&!r&&t.parent&&xt(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&qa(t,1),r||(xt(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)}(this,t,e,r);return this},t.targets=function targets(){return this._targets},t.invalidate=function invalidate(){return this._pt=this._op=this._startAt=this._onUpdate=this._act=this._lazy=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),S.prototype.invalidate.call(this)},t.kill=function kill(t,e){if(void 0===e&&(e="all"),!(t||e&&"all"!==e)&&(this._lazy=0,this.parent))return fb(this);if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(t,e,qt&&!0!==qt.vars.overwrite)._first||fb(this),this.parent&&r!==this.timeline.totalDuration()&&Fa(this,this._dur*this.timeline._tDur/r,0,1),this}var i,a,s,o,u,h,l,f=this._targets,d=t?bt(t):f,p=this._ptLookup,c=this._pt;if((!e||"all"===e)&&function _arraysMatch(t,e){for(var r=t.length,i=r===e.length;i&&r--&&t[r]===e[r];);return r<0}(f,d))return"all"===e&&(this._pt=0),fb(this);for(i=this._op=this._op||[],"all"!==e&&(n(e)&&(u={},_(e,function(t){return u[t]=1}),e=u),e=function _addAliasesToVars(t,e){var r,i,n,a,s=t[0]?Z(t[0]).harness:0,o=s&&s.aliases;if(!o)return e;for(i in r=mt({},e),o)if(i in r)for(n=(a=o[i].split(",")).length;n--;)r[a[n]]=r[i];return r}(f,e)),l=f.length;l--;)if(~d.indexOf(f[l]))for(u in a=p[l],"all"===e?(i[l]=e,o=a,s={}):(s=i[l]=i[l]||{},o=e),o)(h=a&&a[u])&&("kill"in h.d&&!0!==h.d.kill(u)||pa(this,h,"_pt"),delete a[u]),"all"!==s&&(s[u]=1);return this._initted&&!this._pt&&c&&fb(this),this},Tween.to=function to(t,e,r){return new Tween(t,e,r)},Tween.from=function from(t,e){return new Tween(t,ca(arguments,1))},Tween.delayedCall=function delayedCall(t,e,r,i){return new Tween(e,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:e,onReverseComplete:e,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},Tween.fromTo=function fromTo(t,e,r){return new Tween(t,ca(arguments,2))},Tween.set=function set(t,e){return e.duration=0,e.repeatDelay||(e.repeat=0),new Tween(t,e)},Tween.killTweensOf=function killTweensOf(t,e,r){return E.killTweensOf(t,e,r)},Tween}(Lt);ha(Xt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),_("staggerTo,staggerFrom,staggerFromTo",function(r){Xt[r]=function(){var t=new Bt,e=Tt.call(arguments,0);return e.splice("staggerFromTo"===r?5:4,0,0),t[r].apply(t,e)}});function Yb(t,e,r){return t.setAttribute(e,r)}function ec(t,e,r,i){i.mSet(t,e,i.m.call(i.tween,r,i.mt),i)}var Gt=function _setterPlain(t,e,r){return t[e]=r},Zt=function _setterFunc(t,e,r){return t[e](r)},Jt=function _setterFuncWithParam(t,e,r,i){return t[e](i.fp,r)},Qt=function _getSetter(t,e){return o(t[e])?Zt:q(t[e])&&t.setAttribute?Yb:Gt},Wt=function _renderPlain(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4,e)},$t=function _renderBoolean(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Ht=function _renderComplexString(t,e){var r=e._pt,i="";if(!t&&e.b)i=e.b;else if(1===t&&e.e)i=e.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*t):Math.round(1e4*(r.s+r.c*t))/1e4)+i,r=r._next;i+=e.c}e.set(e.t,e.p,i,e)},Kt=function _renderPropTweens(t,e){for(var r=e._pt;r;)r.r(t,r.d),r=r._next},te=function _addPluginModifier(t,e,r,i){for(var n,a=this._pt;a;)n=a._next,a.p===i&&a.modifier(t,e,r),a=n},ee=function _killPropTweensOf(t){for(var e,r,i=this._pt;i;)r=i._next,i.p===t&&!i.op||i.op===t?pa(this,i,"_pt"):i.dep||(e=1),i=r;return!e},re=function _sortPropTweensByPriority(t){for(var e,r,i,n,a=t._pt;a;){for(e=a._next,r=i;r&&r.pr>a.pr;)r=r._next;(a._prev=r?r._prev:n)?a._prev._next=a:i=a,(a._next=r)?r._prev=a:n=a,a=e}t._pt=i},ie=(PropTween.prototype.modifier=function modifier(t,e,r){this.mSet=this.mSet||this.set,this.set=ec,this.m=t,this.mt=r,this.tween=e},PropTween);function PropTween(t,e,r,i,n,a,s,o,u){this.t=e,this.s=i,this.c=n,this.p=r,this.r=a||Wt,this.d=s||this,this.set=o||Gt,this.pr=u||0,(this._next=t)&&(t._prev=this)}_(ct+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return ut[t]=1}),ot.TweenMax=ot.TweenLite=Xt,ot.TimelineLite=ot.TimelineMax=Bt,E=new Bt({sortChildren:!1,defaults:I,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),j.stringFilter=qb;var ne={registerPlugin:function registerPlugin(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){return function _createPlugin(t){var e=(t=!t.name&&t.default||t).name,r=o(t),i=e&&!r&&t.init?function(){this._props=[]}:t,n={init:O,render:Kt,add:Yt,kill:ee,modifier:te,rawVars:0},a={targetTest:0,get:0,getSetter:Qt,aliases:{},register:0};if(Pt(),t!==i){if(ft[e])return;ha(i,ha(la(t,n),a)),mt(i.prototype,mt(n,la(t,a))),ft[i.prop=e]=i,t.targetTest&&(_t.push(i),ut[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}N(e,i),t.register&&t.register(ae,i,ie)}(t)})},timeline:function timeline(t){return new Bt(t)},getTweensOf:function getTweensOf(t,e){return E.getTweensOf(t,e)},getProperty:function getProperty(i,t,e,r){n(i)&&(i=bt(i)[0]);var a=Z(i||{}).get,s=e?ga:fa;return"native"===e&&(e=""),i?t?s((ft[t]&&ft[t].get||a)(i,t,e,r)):function(t,e,r){return s((ft[t]&&ft[t].get||a)(i,t,e,r))}:i},quickSetter:function quickSetter(r,e,i){if(1<(r=bt(r)).length){var n=r.map(function(t){return ae.quickSetter(t,e,i)}),a=n.length;return function(t){for(var e=a;e--;)n[e](t)}}r=r[0]||{};var s=ft[e],o=Z(r),u=o.harness&&(o.harness.aliases||{})[e]||e,h=s?function(t){var e=new s;c._pt=0,e.init(r,i?t+i:t,c,0,[r]),e.render(1,e),c._pt&&Kt(1,c)}:o.set(r,u);return s?h:function(t){return h(r,u,i?t+i:t,o,1)}},isTweening:function isTweening(t){return 0<E.getTweensOf(t,!0).length},defaults:function defaults(t){return t&&t.ease&&(t.ease=Rt(t.ease,I.ease)),ka(I,t||{})},config:function config(t){return ka(j,t||{})},registerEffect:function registerEffect(t){var n=t.name,i=t.effect,e=t.plugins,a=t.defaults,s=t.extendTimeline;(e||"").split(",").forEach(function(t){return t&&!ft[t]&&!ot[t]&&M(n+" effect requires "+t+" plugin.")}),dt[n]=function(t,e,r){return i(bt(t),ha(e||{},a),r)},s&&(Bt.prototype[n]=function(t,e,i){return this.add(dt[n](t,r(e)?e:(i=e)&&{},this),i)})},registerEase:function registerEase(t,e){Dt[t]=Rt(e)},parseEase:function parseEase(t,e){return arguments.length?Rt(t,e):Dt},getById:function getById(t){return E.getById(t)},exportRoot:function exportRoot(t,e){void 0===t&&(t={});var r,i,n=new Bt(t);for(n.smoothChildTiming=s(t.smoothChildTiming),E.remove(n),n._dp=0,n._time=n._tTime=E._time,r=E._first;r;)i=r._next,!e&&!r._dur&&r instanceof Xt&&r.vars.onComplete===r._targets[0]||Aa(n,r,r._start-r._delay),r=i;return Aa(E,n,0),n},utils:{wrap:function wrap(e,t,r){var i=t-e;return tt(e)?Za(e,wrap(0,e.length),t):Ja(r,function(t){return(i+(t-e)%i)%i+e})},wrapYoyo:function wrapYoyo(e,t,r){var i=t-e,n=2*i;return tt(e)?Za(e,wrapYoyo(0,e.length-1),t):Ja(r,function(t){return e+(i<(t=(n+(t-e)%n)%n||0)?n-t:t)})},distribute:Sa,random:Va,snap:Ua,normalize:function normalize(t,e,r){return wt(t,e,0,1,r)},getUnit:La,clamp:function clamp(e,r,t){return Ja(t,function(t){return yt(e,r,t)})},splitColor:lb,toArray:bt,mapRange:wt,pipe:function pipe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return e.reduce(function(t,e){return e(t)},t)}},unitize:function unitize(e,r){return function(t){return e(parseFloat(t))+(r||La(t))}},interpolate:function interpolate(e,r,t,i){var a=isNaN(e+r)?0:function(t){return(1-t)*e+t*r};if(!a){var s,o,u,h,l,f=n(e),d={};if(!0===t&&(i=1)&&(t=null),f)e={p:e},r={p:r};else if(tt(e)&&!tt(r)){for(u=[],h=e.length,l=h-2,o=1;o<h;o++)u.push(interpolate(e[o-1],e[o]));h--,a=function func(t){t*=h;var e=Math.min(l,~~t);return u[e](t-e)},t=r}else i||(e=mt(tt(e)?[]:{},e));if(!u){for(s in r)Yt.call(d,e,s,"get",r[s]);a=function func(t){return Kt(t,d)||(f?e.p:e)}}}return Ja(t,a)},shuffle:Ra},install:K,effects:dt,ticker:At,updateRoot:Bt.updateRoot,plugins:ft,globalTimeline:E,core:{PropTween:ie,globals:N,Tween:Xt,Timeline:Bt,Animation:Lt,getCache:Z,_removeLinkedListItem:pa}};_("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return ne[t]=Xt[t]}),At.add(Bt.updateRoot),c=ne.to({},{duration:0});function ic(t,e){for(var r=t._pt;r&&r.p!==e&&r.op!==e&&r.fp!==e;)r=r._next;return r}function kc(t,a){return{name:t,rawVars:1,init:function init(t,i,e){e._onInit=function(t){var e,r;if(n(i)&&(e={},_(i,function(t){return e[t]=1}),i=e),a){for(r in e={},i)e[r]=a(i[r]);i=e}!function _addModifiers(t,e){var r,i,n,a=t._targets;for(r in e)for(i=a.length;i--;)(n=(n=t._ptLookup[i][r])&&n.d)&&(n._pt&&(n=ic(n,r)),n&&n.modifier&&n.modifier(e[r],t,a[i],r))}(t,i)}}}}var ae=ne.registerPlugin({name:"attr",init:function init(t,e,r,i,n){var a,s;for(a in e)(s=this.add(t,"setAttribute",(t.getAttribute(a)||0)+"",e[a],i,n,0,0,a))&&(s.op=a),this._props.push(a)}},{name:"endArray",init:function init(t,e){for(var r=e.length;r--;)this.add(t,r,t[r]||0,e[r])}},kc("roundProps",Ta),kc("modifiers"),kc("snap",Ua))||ne;Xt.version=Bt.version=ae.version="3.5.1",f=1,t()&&Pt();function Vc(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function Wc(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function Xc(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)}function Yc(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)}function Zc(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)}function $c(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)}function _c(t,e,r){return t.style[e]=r}function ad(t,e,r){return t.style.setProperty(e,r)}function bd(t,e,r){return t._gsap[e]=r}function cd(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r}function dd(t,e,r,i,n){var a=t._gsap;a.scaleX=a.scaleY=r,a.renderTransform(n,a)}function ed(t,e,r,i,n){var a=t._gsap;a[e]=r,a.renderTransform(n,a)}function id(t,e){var r=oe.createElementNS?oe.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):oe.createElement(t);return r.style?r:oe.createElement(t)}function jd(t,e,r){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Ie,"-$1").toLowerCase())||i.getPropertyValue(e)||!r&&jd(t,Ue(e)||e,1)||""}function md(){(function _windowExists(){return"undefined"!=typeof window})()&&window.document&&(se=window,oe=se.document,ue=oe.documentElement,le=id("div")||{style:{}},fe=id("div"),Ye=Ue(Ye),Ne=Ye+"Origin",le.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",pe=!!Ue("perspective"),he=1)}function nd(t){var e,r=id("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,a=this.style.cssText;if(ue.appendChild(r),r.appendChild(this),this.style.display="block",t)try{e=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=nd}catch(t){}else this._gsapBBox&&(e=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),ue.removeChild(r),this.style.cssText=a,e}function od(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])}function pd(e){var r;try{r=e.getBBox()}catch(t){r=nd.call(e,!0)}return r&&(r.width||r.height)||e.getBBox===nd||(r=nd.call(e,!0)),!r||r.width||r.x||r.y?r:{x:+od(e,["x","cx","x1"])||0,y:+od(e,["y","cy","y1"])||0,width:0,height:0}}function qd(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!pd(t))}function rd(t,e){if(e){var r=t.style;e in ze&&e!==Ne&&(e=Ye),r.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),r.removeProperty(e.replace(Ie,"-$1").toLowerCase())):r.removeAttribute(e)}}function sd(t,e,r,i,n,a){var s=new ie(t._pt,e,r,0,1,a?$c:Zc);return(t._pt=s).b=i,s.e=n,t._props.push(r),s}function ud(t,e,r,i){var n,a,s,o,u=parseFloat(r)||0,h=(r+"").trim().substr((u+"").length)||"px",l=le.style,f=Le.test(e),d="svg"===t.tagName.toLowerCase(),p=(d?"client":"offset")+(f?"Width":"Height"),_="px"===i,c="%"===i;return i===h||!u||Ve[i]||Ve[h]?u:("px"===h||_||(u=ud(t,e,r,"px")),o=t.getCTM&&qd(t),c&&(ze[e]||~e.indexOf("adius"))?aa(u/(o?t.getBBox()[f?"width":"height"]:t[p])*100):(l[f?"width":"height"]=100+(_?h:i),a=~e.indexOf("adius")||"em"===i&&t.appendChild&&!d?t:t.parentNode,o&&(a=(t.ownerSVGElement||{}).parentNode),a&&a!==oe&&a.appendChild||(a=oe.body),(s=a._gsap)&&c&&s.width&&f&&s.time===At.time?aa(u/s.width*100):(!c&&"%"!==h||(l.position=jd(t,"position")),a===t&&(l.position="static"),a.appendChild(le),n=le[p],a.removeChild(le),l.position="absolute",f&&c&&((s=Z(a)).time=At.time,s.width=a[p]),aa(_?n*u/100:n&&u?100/n*u:0))))}function vd(t,e,r,i){var n;return he||md(),e in qe&&"transform"!==e&&~(e=qe[e]).indexOf(",")&&(e=e.split(",")[0]),ze[e]&&"transform"!==e?(n=Qe(t,i),n="transformOrigin"!==e?n[e]:We(jd(t,Ne))+" "+n.zOrigin+"px"):(n=t.style[e])&&"auto"!==n&&!i&&!~(n+"").indexOf("calc(")||(n=Ge[e]&&Ge[e](t,e,r)||jd(t,e)||$(t,e)||("opacity"===e?1:0)),r&&!~(n+"").indexOf(" ")?ud(t,e,n,r)+r:n}function wd(t,e,r,i){if(!r||"none"===r){var n=Ue(e,t,1),a=n&&jd(t,n,1);a&&a!==r?(e=n,r=a):"borderColor"===e&&(r=jd(t,"borderTopColor"))}var s,o,u,h,l,f,d,p,_,c,m,g,v=new ie(this._pt,t.style,e,0,1,Ht),y=0,T=0;if(v.b=r,v.e=i,r+="","auto"===(i+="")&&(t.style[e]=i,i=jd(t,e)||i,t.style[e]=r),qb(s=[r,i]),i=s[1],u=(r=s[0]).match(it)||[],(i.match(it)||[]).length){for(;o=it.exec(i);)d=o[0],_=i.substring(y,o.index),l?l=(l+1)%5:"rgba("!==_.substr(-5)&&"hsla("!==_.substr(-5)||(l=1),d!==(f=u[T++]||"")&&(h=parseFloat(f)||0,m=f.substr((h+"").length),(g="="===d.charAt(1)?+(d.charAt(0)+"1"):0)&&(d=d.substr(2)),p=parseFloat(d),c=d.substr((p+"").length),y=it.lastIndex-c.length,c||(c=c||j.units[e]||m,y===i.length&&(i+=c,v.e+=c)),m!==c&&(h=ud(t,e,f,c)||0),v._pt={_next:v._pt,p:_||1===T?_:",",s:h,c:g?g*p:p-h,m:l&&l<4?Math.round:0});v.c=y<i.length?i.substring(y,i.length):""}else v.r="display"===e&&"none"===i?$c:Zc;return at.test(i)&&(v.e=0),this._pt=v}function yd(t){var e=t.split(" "),r=e[0],i=e[1]||"50%";return"top"!==r&&"bottom"!==r&&"left"!==i&&"right"!==i||(t=r,r=i,i=t),e[0]=Xe[r]||r,e[1]=Xe[i]||i,e.join(" ")}function zd(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r,i,n,a=e.t,s=a.style,o=e.u,u=a._gsap;if("all"===o||!0===o)s.cssText="",i=1;else for(n=(o=o.split(",")).length;-1<--n;)r=o[n],ze[r]&&(i=1,r="transformOrigin"===r?Ne:Ye),rd(a,r);i&&(rd(a,Ye),u&&(u.svg&&a.removeAttribute("transform"),Qe(a,1),u.uncache=1))}}function Dd(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t}function Ed(t){var e=jd(t,Ye);return Dd(e)?Ze:e.substr(7).match(rt).map(aa)}function Fd(t,e){var r,i,n,a,s=t._gsap||Z(t),o=t.style,u=Ed(t);return s.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(u=[(n=t.transform.baseVal.consolidate().matrix).a,n.b,n.c,n.d,n.e,n.f]).join(",")?Ze:u:(u!==Ze||t.offsetParent||t===ue||s.svg||(n=o.display,o.display="block",(r=t.parentNode)&&t.offsetParent||(a=1,i=t.nextSibling,ue.appendChild(t)),u=Ed(t),n?o.display=n:rd(t,"display"),a&&(i?r.insertBefore(t,i):r?r.appendChild(t):ue.removeChild(t))),e&&6<u.length?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)}function Gd(t,e,r,i,n,a){var s,o,u,h=t._gsap,l=n||Fd(t,!0),f=h.xOrigin||0,d=h.yOrigin||0,p=h.xOffset||0,_=h.yOffset||0,c=l[0],m=l[1],g=l[2],v=l[3],y=l[4],T=l[5],b=e.split(" "),w=parseFloat(b[0])||0,x=parseFloat(b[1])||0;r?l!==Ze&&(o=c*v-m*g)&&(u=w*(-m/o)+x*(c/o)-(c*T-m*y)/o,w=w*(v/o)+x*(-g/o)+(g*T-v*y)/o,x=u):(w=(s=pd(t)).x+(~b[0].indexOf("%")?w/100*s.width:w),x=s.y+(~(b[1]||b[0]).indexOf("%")?x/100*s.height:x)),i||!1!==i&&h.smooth?(y=w-f,T=x-d,h.xOffset=p+(y*c+T*g)-y,h.yOffset=_+(y*m+T*v)-T):h.xOffset=h.yOffset=0,h.xOrigin=w,h.yOrigin=x,h.smooth=!!i,h.origin=e,h.originIsAbsolute=!!r,t.style[Ne]="0px 0px",a&&(sd(a,h,"xOrigin",f,w),sd(a,h,"yOrigin",d,x),sd(a,h,"xOffset",p,h.xOffset),sd(a,h,"yOffset",_,h.yOffset)),t.setAttribute("data-svg-origin",w+" "+x)}function Jd(t,e,r){var i=La(e);return aa(parseFloat(e)+parseFloat(ud(t,"x",r+"px",i)))+i}function Qd(t,e,r,i,a,s){var o,u,h=360,l=n(a),f=parseFloat(a)*(l&&~a.indexOf("rad")?Fe:1),d=s?f*s:f-i,p=i+d+"deg";return l&&("short"===(o=a.split("_")[1])&&(d%=h)!==d%180&&(d+=d<0?h:-h),"cw"===o&&d<0?d=(d+36e9)%h-~~(d/h)*h:"ccw"===o&&0<d&&(d=(d-36e9)%h-~~(d/h)*h)),t._pt=u=new ie(t._pt,e,r,i,d,Wc),u.e=p,u.u="deg",t._props.push(r),u}function Rd(t,e,r){var i,n,a,s,o,u,h,l=fe.style,f=r._gsap;for(n in l.cssText=getComputedStyle(r).cssText+";position:absolute;display:block;",l[Ye]=e,oe.body.appendChild(fe),i=Qe(fe,1),ze)(a=f[n])!==(s=i[n])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(n)<0&&(o=La(a)!==(h=La(s))?ud(r,n,a,h):parseFloat(a),u=parseFloat(s),t._pt=new ie(t._pt,f,n,o,u-o,Vc),t._pt.u=h||0,t._props.push(n));oe.body.removeChild(fe)}var se,oe,ue,he,le,fe,de,pe,_e=Dt.Power0,ce=Dt.Power1,me=Dt.Power2,ge=Dt.Power3,ve=Dt.Power4,ye=Dt.Linear,Te=Dt.Quad,be=Dt.Cubic,we=Dt.Quart,xe=Dt.Quint,ke=Dt.Strong,Oe=Dt.Elastic,Me=Dt.Back,Ce=Dt.SteppedEase,Ae=Dt.Bounce,Pe=Dt.Sine,De=Dt.Expo,Se=Dt.Circ,ze={},Fe=180/Math.PI,Re=Math.PI/180,Ee=Math.atan2,Ie=/([A-Z])/g,Le=/(?:left|right|width|margin|padding|x)/i,Be=/[\s,\(]\S/,qe={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ye="transform",Ne=Ye+"Origin",je="O,Moz,ms,Ms,Webkit".split(","),Ue=function _checkPropPrefix(t,e,r){var i=(e||le).style,n=5;if(t in i&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);n--&&!(je[n]+t in i););return n<0?null:(3===n?"ms":0<=n?je[n]:"")+t},Ve={deg:1,rad:1,turn:1},Xe={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ge={clearProps:function clearProps(t,e,r,i,n){if("isFromStart"!==n.data){var a=t._pt=new ie(t._pt,e,r,0,0,zd);return a.u=i,a.pr=-10,a.tween=n,t._props.push(r),1}}},Ze=[1,0,0,1,0,0],Je={},Qe=function _parseTransform(t,e){var r=t._gsap||new It(t);if("x"in r&&!e&&!r.uncache)return r;var i,n,a,s,o,u,h,l,f,d,p,_,c,m,g,v,y,T,b,w,x,k,O,M,C,A,P,D,S,z,F,R,E=t.style,I=r.scaleX<0,L="deg",B=jd(t,Ne)||"0";return i=n=a=u=h=l=f=d=p=0,s=o=1,r.svg=!(!t.getCTM||!qd(t)),m=Fd(t,r.svg),r.svg&&(M=!r.uncache&&t.getAttribute("data-svg-origin"),Gd(t,M||B,!!M||r.originIsAbsolute,!1!==r.smooth,m)),_=r.xOrigin||0,c=r.yOrigin||0,m!==Ze&&(T=m[0],b=m[1],w=m[2],x=m[3],i=k=m[4],n=O=m[5],6===m.length?(s=Math.sqrt(T*T+b*b),o=Math.sqrt(x*x+w*w),u=T||b?Ee(b,T)*Fe:0,(f=w||x?Ee(w,x)*Fe+u:0)&&(o*=Math.cos(f*Re)),r.svg&&(i-=_-(_*T+c*w),n-=c-(_*b+c*x))):(R=m[6],z=m[7],P=m[8],D=m[9],S=m[10],F=m[11],i=m[12],n=m[13],a=m[14],h=(g=Ee(R,S))*Fe,g&&(M=k*(v=Math.cos(-g))+P*(y=Math.sin(-g)),C=O*v+D*y,A=R*v+S*y,P=k*-y+P*v,D=O*-y+D*v,S=R*-y+S*v,F=z*-y+F*v,k=M,O=C,R=A),l=(g=Ee(-w,S))*Fe,g&&(v=Math.cos(-g),F=x*(y=Math.sin(-g))+F*v,T=M=T*v-P*y,b=C=b*v-D*y,w=A=w*v-S*y),u=(g=Ee(b,T))*Fe,g&&(M=T*(v=Math.cos(g))+b*(y=Math.sin(g)),C=k*v+O*y,b=b*v-T*y,O=O*v-k*y,T=M,k=C),h&&359.9<Math.abs(h)+Math.abs(u)&&(h=u=0,l=180-l),s=aa(Math.sqrt(T*T+b*b+w*w)),o=aa(Math.sqrt(O*O+R*R)),g=Ee(k,O),f=2e-4<Math.abs(g)?g*Fe:0,p=F?1/(F<0?-F:F):0),r.svg&&(M=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!Dd(jd(t,Ye)),M&&t.setAttribute("transform",M))),90<Math.abs(f)&&Math.abs(f)<270&&(I?(s*=-1,f+=u<=0?180:-180,u+=u<=0?180:-180):(o*=-1,f+=f<=0?180:-180)),r.x=((r.xPercent=i&&Math.round(t.offsetWidth/2)===Math.round(-i)?-50:0)?0:i)+"px",r.y=((r.yPercent=n&&Math.round(t.offsetHeight/2)===Math.round(-n)?-50:0)?0:n)+"px",r.z=a+"px",r.scaleX=aa(s),r.scaleY=aa(o),r.rotation=aa(u)+L,r.rotationX=aa(h)+L,r.rotationY=aa(l)+L,r.skewX=f+L,r.skewY=d+L,r.transformPerspective=p+"px",(r.zOrigin=parseFloat(B.split(" ")[2])||0)&&(E[Ne]=We(B)),r.xOffset=r.yOffset=0,r.force3D=j.force3D,r.renderTransform=r.svg?rr:pe?er:$e,r.uncache=0,r},We=function _firstTwoOnly(t){return(t=t.split(" "))[0]+" "+t[1]},$e=function _renderNon3DTransforms(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,er(t,e)},He="0deg",Ke="0px",tr=") ",er=function _renderCSSTransforms(t,e){var r=e||this,i=r.xPercent,n=r.yPercent,a=r.x,s=r.y,o=r.z,u=r.rotation,h=r.rotationY,l=r.rotationX,f=r.skewX,d=r.skewY,p=r.scaleX,_=r.scaleY,c=r.transformPerspective,m=r.force3D,g=r.target,v=r.zOrigin,y="",T="auto"===m&&t&&1!==t||!0===m;if(v&&(l!==He||h!==He)){var b,w=parseFloat(h)*Re,x=Math.sin(w),k=Math.cos(w);w=parseFloat(l)*Re,b=Math.cos(w),a=Jd(g,a,x*b*-v),s=Jd(g,s,-Math.sin(w)*-v),o=Jd(g,o,k*b*-v+v)}c!==Ke&&(y+="perspective("+c+tr),(i||n)&&(y+="translate("+i+"%, "+n+"%) "),!T&&a===Ke&&s===Ke&&o===Ke||(y+=o!==Ke||T?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+tr),u!==He&&(y+="rotate("+u+tr),h!==He&&(y+="rotateY("+h+tr),l!==He&&(y+="rotateX("+l+tr),f===He&&d===He||(y+="skew("+f+", "+d+tr),1===p&&1===_||(y+="scale("+p+", "+_+tr),g.style[Ye]=y||"translate(0, 0)"},rr=function _renderSVGTransforms(t,e){var r,i,n,a,s,o=e||this,u=o.xPercent,h=o.yPercent,l=o.x,f=o.y,d=o.rotation,p=o.skewX,_=o.skewY,c=o.scaleX,m=o.scaleY,g=o.target,v=o.xOrigin,y=o.yOrigin,T=o.xOffset,b=o.yOffset,w=o.forceCSS,x=parseFloat(l),k=parseFloat(f);d=parseFloat(d),p=parseFloat(p),(_=parseFloat(_))&&(p+=_=parseFloat(_),d+=_),d||p?(d*=Re,p*=Re,r=Math.cos(d)*c,i=Math.sin(d)*c,n=Math.sin(d-p)*-m,a=Math.cos(d-p)*m,p&&(_*=Re,s=Math.tan(p-_),n*=s=Math.sqrt(1+s*s),a*=s,_&&(s=Math.tan(_),r*=s=Math.sqrt(1+s*s),i*=s)),r=aa(r),i=aa(i),n=aa(n),a=aa(a)):(r=c,a=m,i=n=0),(x&&!~(l+"").indexOf("px")||k&&!~(f+"").indexOf("px"))&&(x=ud(g,"x",l,"px"),k=ud(g,"y",f,"px")),(v||y||T||b)&&(x=aa(x+v-(v*r+y*n)+T),k=aa(k+y-(v*i+y*a)+b)),(u||h)&&(s=g.getBBox(),x=aa(x+u/100*s.width),k=aa(k+h/100*s.height)),s="matrix("+r+","+i+","+n+","+a+","+x+","+k+")",g.setAttribute("transform",s),w&&(g.style[Ye]=s)};_("padding,margin,Width,Radius",function(e,r){var t="Right",i="Bottom",n="Left",o=(r<3?["Top",t,i,n]:["Top"+n,"Top"+t,i+t,i+n]).map(function(t){return r<2?e+t:"border"+t+e});Ge[1<r?"border"+e:e]=function(e,t,r,i,n){var a,s;if(arguments.length<4)return a=o.map(function(t){return vd(e,t,r)}),5===(s=a.join(" ")).split(a[0]).length?a[0]:s;a=(i+"").split(" "),s={},o.forEach(function(t,e){return s[t]=a[e]=a[e]||a[(e-1)/2|0]}),e.init(t,s,n)}});var ir,nr,ar,sr={name:"css",register:md,targetTest:function targetTest(t){return t.style&&t.nodeType},init:function init(t,e,r,i,n){var a,s,o,u,h,l,f,d,p,_,c,m,g,v,y,T=this._props,b=t.style;for(f in he||md(),e)if("autoRound"!==f&&(s=e[f],!ft[f]||!Nb(f,e,r,i,t,n)))if(h=typeof s,l=Ge[f],"function"===h&&(h=typeof(s=s.call(r,i,t,n))),"string"===h&&~s.indexOf("random(")&&(s=ab(s)),l)l(this,t,f,s,r)&&(y=1);else if("--"===f.substr(0,2))this.add(b,"setProperty",getComputedStyle(t).getPropertyValue(f)+"",s+"",i,n,0,0,f);else if("undefined"!==h){if(a=vd(t,f),u=parseFloat(a),(_="string"===h&&"="===s.charAt(1)?+(s.charAt(0)+"1"):0)&&(s=s.substr(2)),o=parseFloat(s),f in qe&&("autoAlpha"===f&&(1===u&&"hidden"===vd(t,"visibility")&&o&&(u=0),sd(this,b,"visibility",u?"inherit":"hidden",o?"inherit":"hidden",!o)),"scale"!==f&&"transform"!==f&&~(f=qe[f]).indexOf(",")&&(f=f.split(",")[0])),c=f in ze)if(m||((g=t._gsap).renderTransform||Qe(t),v=!1!==e.smoothOrigin&&g.smooth,(m=this._pt=new ie(this._pt,b,Ye,0,1,g.renderTransform,g,0,-1)).dep=1),"scale"===f)this._pt=new ie(this._pt,g,"scaleY",g.scaleY,_?_*o:o-g.scaleY),T.push("scaleY",f),f+="X";else{if("transformOrigin"===f){s=yd(s),g.svg?Gd(t,s,0,v,0,this):((p=parseFloat(s.split(" ")[2])||0)!==g.zOrigin&&sd(this,g,"zOrigin",g.zOrigin,p),sd(this,b,f,We(a),We(s)));continue}if("svgOrigin"===f){Gd(t,s,1,v,0,this);continue}if(f in Je){Qd(this,g,f,u,s,_);continue}if("smoothOrigin"===f){sd(this,g,"smooth",g.smooth,s);continue}if("force3D"===f){g[f]=s;continue}if("transform"===f){Rd(this,s,t);continue}}else f in b||(f=Ue(f)||f);if(c||(o||0===o)&&(u||0===u)&&!Be.test(s)&&f in b)o=o||0,(d=(a+"").substr((u+"").length))!==(p=La(s)||(f in j.units?j.units[f]:d))&&(u=ud(t,f,a,p)),this._pt=new ie(this._pt,c?g:b,f,u,_?_*o:o-u,"px"!==p||!1===e.autoRound||c?Vc:Yc),this._pt.u=p||0,d!==p&&(this._pt.b=a,this._pt.r=Xc);else if(f in b)wd.call(this,t,f,a,s);else{if(!(f in t)){L(f,s);continue}this.add(t,f,t[f],s,i,n)}T.push(f)}y&&re(this)},get:vd,aliases:qe,getSetter:function getSetter(t,e,r){var i=qe[e];return i&&i.indexOf(",")<0&&(e=i),e in ze&&e!==Ne&&(t._gsap.x||vd(t,"x"))?r&&de===r?"scale"===e?cd:bd:(de=r||{})&&("scale"===e?dd:ed):t.style&&!q(t.style[e])?_c:~e.indexOf("-")?ad:Qt(t,e)},core:{_removeProperty:rd,_getMatrix:Fd}};ae.utils.checkPrefix=Ue,ar=_((ir="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(nr="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(t){ze[t]=1}),_(nr,function(t){j.units[t]="deg",Je[t]=1}),qe[ar[13]]=ir+","+nr,_("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",function(t){var e=t.split(":");qe[e[1]]=ar[e[0]]}),_("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){j.units[t]="px"}),ae.registerPlugin(sr);var or=ae.registerPlugin(sr)||ae,ur=or.core.Tween;e.Back=Me,e.Bounce=Ae,e.CSSPlugin=sr,e.Circ=Se,e.Cubic=be,e.Elastic=Oe,e.Expo=De,e.Linear=ye,e.Power0=_e,e.Power1=ce,e.Power2=me,e.Power3=ge,e.Power4=ve,e.Quad=Te,e.Quart=we,e.Quint=xe,e.Sine=Pe,e.SteppedEase=Ce,e.Strong=ke,e.TimelineLite=Bt,e.TimelineMax=Bt,e.TweenLite=Xt,e.TweenMax=ur,e.default=or,e.gsap=or;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});

/*!
 * ScrollTrigger 3.5.1
 * https://greensock.com
 * 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function H(e){return e}function I(){return"undefined"!=typeof window}function J(){return Me||I()&&(Me=window.gsap)&&Me.registerPlugin&&Me}function K(e){return!!~i.indexOf(e)}function L(e,t){return~Fe.indexOf(e)&&Fe[Fe.indexOf(e)+1][t]}function M(t,e){var r=e.s,n=e.sc,o=h.indexOf(t),i=n===rt.sc?1:2;return~o||(o=h.push(t)-1),h[o+i]||(h[o+i]=L(t,r)||(K(t)?n:function(e){return arguments.length?t[r]=e:t[r]}))}function N(e){return L(e,"getBoundingClientRect")||(K(e)?function(){return ut.width=ke.innerWidth,ut.height=ke.innerHeight,ut}:function(){return nt(e)})}function Q(e,t){var r=t.s,n=t.d2,o=t.d,i=t.a;return(r="scroll"+n)&&(i=L(e,r))?i()-N(e)()[o]:K(e)?Math.max(_e[r],Oe[r])-(ke["inner"+n]||_e["client"+n]||Oe["client"+n]):e[r]-e["offset"+n]}function R(e,t){for(var r=0;r<p.length;r+=3)t&&!~t.indexOf(p[r+1])||e(p[r],p[r+1],p[r+2])}function S(e){return"string"==typeof e}function T(e){return"function"==typeof e}function U(e){return"number"==typeof e}function V(e){return"object"==typeof e}function W(e){return T(e)&&e()}function X(r,n){return function(){var e=W(r),t=W(n);return function(){W(e),W(t)}}}function qa(e){return ke.getComputedStyle(e)}function sa(e,t){for(var r in t)r in e||(e[r]=t[r]);return e}function ua(e,t){var r=t.d2;return e["offset"+r]||e["client"+r]||0}function wa(t,r,e,n){return e.split(",").forEach(function(e){return t(r,e,n)})}function xa(e,t,r){return e.addEventListener(t,r,{passive:!0})}function ya(e,t,r){return e.removeEventListener(t,r)}function Ca(e,t){if(S(e)){var r=e.indexOf("="),n=~r?(e.charAt(r-1)+1)*parseFloat(e.substr(r+1)):0;n&&(e.indexOf("%")>r&&(n*=t/100),e=e.substr(0,r-1)),e=n+(e in m?m[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e}function Da(e,t,r,n,o,i,a){var s=o.startColor,l=o.endColor,c=o.fontSize,u=o.indent,f=o.fontWeight,d=Pe.createElement("div"),p=K(r)||"fixed"===L(r,"pinType"),g=-1!==e.indexOf("scroller"),h=p?Oe:r,v=-1!==e.indexOf("start"),b=v?s:l,m="border-color:"+b+";font-size:"+c+";color:"+b+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return m+="position:"+(g&&p?"fixed;":"absolute;"),!g&&p||(m+=(n===rt?x:y)+":"+(i+parseFloat(u))+"px;"),a&&(m+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),d._isStart=v,d.setAttribute("class","gsap-marker-"+e),d.style.cssText=m,d.innerText=t||0===t?e+"-"+t:e,h.insertBefore(d,h.children[0]),d._offset=d["offset"+n.op.d2],w(d,0,n,v),d}function Ha(){return l=l||s(B)}function Ia(){l||(l=s(B),De||_("scrollStart"),De=He())}function Ja(){return!Re&&a.restart(!0)}function Pa(e){var t,r=Me.ticker.frame,n=[],o=0;if(g!==r||Be){for(A();o<P.length;o+=4)(t=ke.matchMedia(P[o]).matches)!==P[o+3]&&((P[o+3]=t)?n.push(o):A(1,P[o])||T(P[o+2])&&P[o+2]());for(E(),o=0;o<n.length;o++)t=n[o],We=P[t],P[t+2]=P[t+1](e);z(We=0,1),g=r,_("matchMedia")}}function Qa(){return ya(Z,"scrollEnd",Qa)||z(!0)}function ab(e,t,r,n){if(e.parentNode!==t){for(var o,i=F.length,a=t.style,s=e.style;i--;)a[o=F[i]]=r[o];a.position="absolute"===r.position?"absolute":"relative","inline"===r.display&&(a.display="inline-block"),s[y]=s[x]="auto",a.overflow="visible",a.boxSizing="border-box",a[Ke]=ua(e,tt)+et,a[je]=ua(e,rt)+et,a[Ze]=s[$e]=s.top=s[b]="0",ct(n),s[Ke]=s.maxWidth=r[Ke],s[je]=s.maxHeight=r[je],s[Ze]=r[Ze],e.parentNode.insertBefore(t,e),t.appendChild(e)}}function db(e){for(var t=D.length,r=e.style,n=[],o=0;o<t;o++)n.push(D[o],r[D[o]]);return n.t=e,n}function gb(e,t,r,n,o,i,a,s,l,c,u,f){if(T(e)&&(e=e(s)),S(e)&&"max"===e.substr(0,3)&&(e=f+("="===e.charAt(4)?Ca("0"+e.substr(3),r):0)),U(e))a&&w(a,r,n,!0);else{T(t)&&(t=t(s));var d,p,g,h=Ee(t)[0]||Oe,v=nt(h)||{},b=e.split(" ");v&&(v.left||v.top)||"none"!==qa(h).display||(g=h.style.display,h.style.display="block",v=nt(h),g?h.style.display=g:h.style.removeProperty("display")),d=Ca(b[0],v[n.d]),p=Ca(b[1]||"0",r),e=v[n.p]-l[n.p]-c+d+o-p,a&&w(a,p,n,r-p<20||a._isStart&&20<p),r-=r-p}if(i){var m=e+r,x=i._isStart;f="scroll"+n.d2,w(i,m,n,x&&20<m||!x&&(u?Math.max(Oe[f],_e[f]):i.parentNode[f])<=m+1),u&&(l=nt(a),u&&(i.style[n.op.p]=l[n.op.p]-n.op.m-i._offset+et))}return Math.round(e)}function ib(e,t,r,n){if(e.parentNode!==t){var o,i,a=e.style;if(t===Oe){for(o in e._stOrig=a.cssText,i=qa(e))+o||Y.test(o)||!i[o]||"string"!=typeof a[o]||"0"===o||(a[o]=i[o]);a.top=r,a.left=n}else a.cssText=e._stOrig;Me.core.getCache(e).uncache=1,t.appendChild(e)}}function jb(l,e){var c,u,f=M(l,e),d="_scroll"+e.p2;return l[d]=f,function getTween(e,t,r,n,o){var i=getTween.tween,a=t.onComplete,s={};return i&&i.kill(),c=Math.round(r),t[d]=e,(t.modifiers=s)[d]=function(e){return(e=Math.round(f()))!==c&&e!==u?(i.kill(),getTween.tween=0):e=r+n*i.ratio+o*i.ratio*i.ratio,u=c,c=Math.round(e)},t.onComplete=function(){getTween.tween=0,a&&a.call(i)},i=getTween.tween=Me.to(l,t)}}var Me,o,ke,Pe,_e,Oe,i,a,s,l,Ee,Le,Ie,c,Re,Ae,u,ze,f,d,p,Ne,qe,We,g,Be=1,Fe=[],h=[],He=Date.now,v=He(),De=0,Je=1,Qe=Math.abs,t="scrollLeft",r="scrollTop",b="left",x="right",y="bottom",Ke="width",je="height",Ve="Right",Xe="Left",Ue="Top",Ye="Bottom",Ze="padding",$e="margin",Ge="Width",n="Height",et="px",tt={s:t,p:b,p2:Xe,os:x,os2:Ve,d:Ke,d2:Ge,a:"x",sc:function sc(e){return arguments.length?ke.scrollTo(e,rt.sc()):ke.pageXOffset||Pe[t]||_e[t]||Oe[t]||0}},rt={s:r,p:"top",p2:Ue,os:y,os2:Ye,d:je,d2:n,a:"y",op:tt,sc:function sc(e){return arguments.length?ke.scrollTo(tt.sc(),e):ke.pageYOffset||Pe[r]||_e[r]||Oe[r]||0}},nt=function _getBounds(e,t){var r=t&&"matrix(1, 0, 0, 1, 0, 0)"!==qa(e)[u]&&Me.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=e.getBoundingClientRect();return r&&r.progress(0).kill(),n},ot={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},it={toggleActions:"play",anticipatePin:0},m={top:0,left:0,center:.5,bottom:1,right:1},w=function _positionMarker(e,t,r,n){var o={display:"block"},i=r[n?"os2":"p2"],a=r[n?"p2":"os2"];e._isFlipped=n,o[r.a+"Percent"]=n?-100:0,o[r.a]=n?1:0,o["border"+i+Ge]=1,o["border"+a+Ge]=0,o[r.p]=t,Me.set(e,o)},at=[],st={},C={},k=[],P=[],_=function _dispatch(e){return C[e]&&C[e].map(function(e){return e()})||k},O=[],E=function _revertRecorded(e){for(var t=0;t<O.length;t+=4)e&&O[t+3]!==e||(O[t].style.cssText=O[t+1],O[t+2].uncache=1)},A=function _revertAll(e,t){var r;for(ze=0;ze<at.length;ze++)r=at[ze],t&&r.media!==t||(e?r.kill(1):(r.scroll.rec||(r.scroll.rec=r.scroll()),r.revert()));E(t),t||_("revert")},z=function _refreshAll(e,t){if(!De||e){var r=_("refreshInit");for(Ne&&Z.sort(),t||A(),ze=0;ze<at.length;ze++)at[ze].refresh();for(r.forEach(function(e){return e&&e.render&&e.render(-1)}),ze=at.length;ze--;)at[ze].scroll.rec=0;a.pause(),_("refresh")}else xa(Z,"scrollEnd",Qa)},q=0,lt=1,B=function _updateAll(){var e=at.length,t=He(),r=50<=t-v,n=e&&at[0].scroll();if(lt=n<q?-1:1,q=n,r&&(De&&!Ae&&200<t-De&&(De=0,_("scrollEnd")),Ie=v,v=t),lt<0){for(ze=e;ze--;)at[ze]&&at[ze].update(0,r);lt=1}else for(ze=0;ze<e;ze++)at[ze]&&at[ze].update(0,r);l=0},F=[b,"top",y,x,$e+Ye,$e+Ve,$e+Ue,$e+Xe,"display","flexShrink","float"],D=F.concat([Ke,je,"boxSizing","max"+Ge,"max"+n,"position",$e,Ze,Ze+Ue,Ze+Ve,Ze+Ye,Ze+Xe]),j=/([A-Z])/g,ct=function _setState(e){if(e)for(var t,r,n=e.t.style,o=e.length,i=0;i<o;i+=2)r=e[i+1],t=e[i],r?n[t]=r:n[t]&&n.removeProperty(t.replace(j,"-$1").toLowerCase())},ut={left:0,top:0},Y=/(?:webkit|moz|length|cssText)/i;tt.op=rt;var Z=(ScrollTrigger.prototype.init=function init(x,y){if(this.progress=0,this.vars&&this.kill(1),Je){var p,n,l,w,C,k,P,_,O,E,I,R,e,A,z,q,W,B,t,F,g,D,J,h,j,v,b,r,m,X,Y,o,c,Z,$,G,ee,te=(x=sa(S(x)||U(x)||x.nodeType?{trigger:x}:x,it)).horizontal?tt:rt,re=x.onUpdate,ne=x.toggleClass,i=x.id,oe=x.onToggle,ie=x.onRefresh,a=x.scrub,ae=x.trigger,se=x.pin,le=x.pinSpacing,ce=x.invalidateOnRefresh,ue=x.anticipatePin,s=x.onScrubComplete,u=x.onSnapComplete,fe=x.once,de=x.snap,pe=x.pinReparent,ge=!a&&0!==a,he=Ee(x.scroller||ke)[0],f=Me.core.getCache(he),ve=K(he),be="pinType"in x?"fixed"===x.pinType:ve||"fixed"===L(he,"pinType"),me=[x.onEnter,x.onLeave,x.onEnterBack,x.onLeaveBack],xe=ge&&x.toggleActions.split(" "),d="markers"in x?x.markers:it.markers,ye=ve?0:parseFloat(qa(he)["border"+te.p2+Ge])||0,Te=this,we=x.onRefreshInit&&function(){return x.onRefreshInit(Te)},Se=function _getSizeFunc(e,t,r){var n=r.d,o=r.d2,i=r.a;return(i=L(e,"getBoundingClientRect"))?function(){return i()[n]}:function(){return(t?ke["inner"+o]:e["client"+o])||0}}(he,ve,te),Ce=function _getOffsetsFunc(e,t){return!t||~Fe.indexOf(e)?N(e):function(){return ut}}(he,ve);Te.media=We,ue*=45,at.push(Te),Te.scroller=he,Te.scroll=M(he,te),C=Te.scroll(),Te.vars=x,y=y||x.animation,"refreshPriority"in x&&(Ne=1),f.tweenScroll=f.tweenScroll||{top:jb(he,rt),left:jb(he,tt)},Te.tweenTo=p=f.tweenScroll[te.p],y&&(y.vars.lazy=!1,y._initted||!1!==y.vars.immediateRender&&!1!==x.immediateRender&&y.render(0,!0,!0),Te.animation=y.pause(),y.scrollTrigger=Te,(o=U(a)&&a)&&(Y=Me.to(y,{ease:"power3",duration:o,onComplete:function onComplete(){return s&&s(Te)}})),m=0,i=i||y.vars.id),de&&(V(de)||(de={snapTo:de}),Me.set(ve?[Oe,_e]:he,{scrollBehavior:"auto"}),l=T(de.snapTo)?de.snapTo:"labels"===de.snapTo?function _getLabels(i){return function(e){var t,r=[],n=i.labels,o=i.duration();for(t in n)r.push(n[t]/o);return Me.utils.snap(r,e)}}(y):Me.utils.snap(de.snapTo),c=de.duration||{min:.1,max:2},c=V(c)?Le(c.min,c.max):Le(c,c),Z=Me.delayedCall(de.delay||o/2||.1,function(){if(Math.abs(Te.getVelocity())<10&&!Ae){var e=y&&!ge?y.totalProgress():Te.progress,t=(e-X)/(He()-Ie)*1e3||0,r=Qe(t/2)*t/.185,n=e+r,o=Le(0,1,l(n,Te)),i=Te.scroll(),a=Math.round(P+o*A),s=p.tween;if(i<=_&&P<=i&&a!==i){if(s&&!s._initted&&s.data<=Math.abs(a-i))return;p(a,{duration:c(Qe(.185*Math.max(Qe(n-e),Qe(o-e))/t/.05||0)),ease:de.ease||"power3",data:Math.abs(a-i),onComplete:function onComplete(){m=X=y&&!ge?y.totalProgress():Te.progress,u&&u(Te)}},i,r*A,a-i-r*A)}}else Te.isActive&&Z.restart(!0)}).pause()),i&&(st[i]=Te),ae=Te.trigger=Ee(ae||se)[0],se=!0===se?ae:Ee(se)[0],S(ne)&&(ne={targets:ae,className:ne}),se&&(!1===le||le===$e||(le=!(!le&&"flex"===qa(se.parentNode).display)&&Ze),Te.pin=se,!1!==x.force3D&&Me.set(se,{force3D:!0}),(n=Me.core.getCache(se)).spacer?z=n.pinState:(n.spacer=B=Pe.createElement("div"),B.setAttribute("class","pin-spacer"+(i?" pin-spacer-"+i:"")),n.pinState=z=db(se)),Te.spacer=B=n.spacer,r=qa(se),h=r[le+te.os2],F=Me.getProperty(se),g=Me.quickSetter(se,te.a,et),ab(se,B,r),W=db(se)),d&&(e=V(d)?sa(d,ot):ot,I=Da("scroller-start",i,he,te,e,0),R=Da("scroller-end",i,he,te,e,0,I),t=I["offset"+te.op.d2],O=Da("start",i,he,te,e,t),E=Da("end",i,he,te,e,t),be||(function _makePositionable(e){e.style.position="absolute"===qa(e).position?"absolute":"relative"}(he),Me.set([I,R],{force3D:!0}),v=Me.quickSetter(I,te.a,et),b=Me.quickSetter(R,te.a,et))),Te.revert=function(e){var t=!1!==e||!Te.enabled,r=Re;t!==w&&(t&&(G=Math.max(Te.scroll(),Te.scroll.rec||0),$=Te.progress,ee=y&&y.progress()),O&&[O,E,I,R].forEach(function(e){return e.style.display=t?"none":"block"}),t&&(Re=1),Te.update(t),Re=r,se&&(t?function _swapPinOut(e,t,r){if(ct(r),e.parentNode===t){var n=t.parentNode;n&&(n.insertBefore(e,t),n.removeChild(t))}}(se,B,z):pe&&Te.isActive||ab(se,B,qa(se),j)),w=t)},Te.refresh=function(e){if(!Re&&Te.enabled)if(se&&e&&De)xa(ScrollTrigger,"scrollEnd",Qa);else{Re=1,Y&&Y.kill(),ce&&y&&y.progress(0).invalidate(),w||Te.revert();for(var t,r,n,o,i,a,s,l,c=Se(),u=Ce(),f=Q(he,te),d=0,p=0,g=x.end,h=x.endTrigger||ae,v=x.start||(0===x.start?0:se||!ae?"0 0":"0 100%"),b=ae&&Math.max(0,at.indexOf(Te))||0,m=b;m--;)!(s=at[m].pin)||s!==ae&&s!==se||at[m].revert();for(P=gb(v,ae,c,te,Te.scroll(),O,I,Te,u,ye,be,f)||(se?-.001:0),T(g)&&(g=g(Te)),S(g)&&!g.indexOf("+=")&&(~g.indexOf(" ")?g=(S(v)?v.split(" ")[0]:"")+g:(d=Ca(g.substr(2),c),g=S(v)?v:P+d,h=ae)),_=Math.max(P,gb(g||(h?"100% 0":f),h,c,te,Te.scroll()+d,E,R,Te,u,ye,be,f))||-.001,A=_-P||(P-=.01)&&.001,d=0,m=b;m--;)(s=(a=at[m]).pin)&&a.start-a._pinPush<P&&(t=a.end-a.start,s===ae&&(d+=t),s===se&&(p+=t));if(P+=d,_+=d,Te._pinPush=p,O&&d&&((t={})[te.a]="+="+d,Me.set([O,E],t)),se)t=qa(se),o=te===rt,n=Te.scroll(),D=parseFloat(F(te.a))+p,!f&&1<_&&((ve?Oe:he).style["overflow-"+te.a]="scroll"),ab(se,B,t),W=db(se),r=nt(se,!0),l=be&&M(he,o?tt:rt)(),le&&((j=[le+te.os2,A+p+et]).t=B,(m=le===Ze?ua(se,te)+A+p:0)&&j.push(te.d,m+et),ct(j),be&&Te.scroll(G)),be&&((i={top:r.top+(o?n-P:l)+et,left:r.left+(o?l:n-P)+et,boxSizing:"border-box",position:"fixed"})[Ke]=i.maxWidth=Math.ceil(r.width)+et,i[je]=i.maxHeight=Math.ceil(r.height)+et,i[$e]=i[$e+Ue]=i[$e+Ve]=i[$e+Ye]=i[$e+Xe]="0",i[Ze]=t[Ze],i[Ze+Ue]=t[Ze+Ue],i[Ze+Ve]=t[Ze+Ve],i[Ze+Ye]=t[Ze+Ye],i[Ze+Xe]=t[Ze+Xe],q=function _copyState(e,t,r){for(var n,o=[],i=e.length,a=r?8:0;a<i;a+=2)n=e[a],o.push(n,n in t?t[n]:e[a+1]);return o.t=e.t,o}(z,i,pe)),y?(y.progress(1,!0),J=F(te.a)-D+A+p,A!==J&&q.splice(q.length-2,2),y.progress(0,!0)):J=A;else if(ae&&Te.scroll())for(r=ae.parentNode;r&&r!==Oe;)r._pinOffset&&(P-=r._pinOffset,_-=r._pinOffset),r=r.parentNode;for(m=0;m<b;m++)!(a=at[m].pin)||a!==ae&&a!==se||at[m].revert(!1);Te.start=P,Te.end=_,(C=k=Te.scroll())<G&&Te.scroll(G),Te.revert(!1),Re=0,ee&&ge&&y.progress(ee,!0),$!==Te.progress&&(Y&&y.totalProgress($,!0),Te.progress=$,Te.update()),se&&le&&(B._pinOffset=Math.round(Te.progress*J)),ie&&ie(Te)}},Te.getVelocity=function(){return(Te.scroll()-k)/(He()-Ie)*1e3||0},Te.update=function(e,t){var r,n,o,i,a,s=Te.scroll(),l=e?0:(s-P)/A,c=l<0?0:1<l?1:l||0,u=Te.progress;if(t&&(k=C,C=s,de&&(X=m,m=y&&!ge?y.totalProgress():c)),ue&&!c&&se&&!Re&&!Be&&De&&P<s+(s-k)/(He()-Ie)*ue&&(c=1e-4),c!==u&&Te.enabled){if(i=(a=(r=Te.isActive=!!c&&c<1)!=(!!u&&u<1))||!!c!=!!u,Te.direction=u<c?1:-1,Te.progress=c,ge||(!Y||Re||Be?y&&y.totalProgress(c,!!Re):(Y.vars.totalProgress=c,Y.invalidate().restart())),se)if(e&&le&&(B.style[le+te.os2]=h),be){if(i){if(o=!e&&u<c&&s<_+1&&s+1>=Q(he,te),pe)if(e||!r&&!o)ib(se,B);else{var f=nt(se,!0),d=s-P;ib(se,Oe,f.top+(te===rt?d:0)+et,f.left+(te===rt?0:d)+et)}ct(r||o?q:W),J!==A&&c<1&&r||g(D+(1!==c||o?0:J))}}else g(D+J*c);!de||p.tween||Re||Be||Z.restart(!0),ne&&(a||fe&&c&&(c<1||!qe))&&Ee(ne.targets).forEach(function(e){return e.classList[r||fe?"add":"remove"](ne.className)}),!re||ge||e||re(Te),i&&!Re?(n=c&&!u?0:1===c?1:1===u?2:3,ge&&(o=!a&&"none"!==xe[n+1]&&xe[n+1]||xe[n],y&&("complete"===o||"reset"===o||o in y)&&("complete"===o?y.pause().totalProgress(1):"reset"===o?y.restart(!0).pause():y[o]()),re&&re(Te)),!a&&qe||(oe&&a&&oe(Te),me[n]&&me[n](Te),fe&&(1===c?Te.kill(!1,1):me[n]=0),a||me[n=1===c?1:3]&&me[n](Te))):ge&&re&&!Re&&re(Te)}b&&(v(s+(I._isFlipped?1:0)),b(s))},Te.enable=function(){Te.enabled||(Te.enabled=!0,xa(he,"resize",Ja),xa(he,"scroll",Ia),we&&xa(ScrollTrigger,"refreshInit",we),y&&y.add?Me.delayedCall(.01,function(){return P||_||Te.refresh()})&&(A=.01)&&(P=_=0):Te.refresh())},Te.disable=function(e,t){if(Te.enabled&&(!1!==e&&Te.revert(),Te.enabled=Te.isActive=!1,t||Y&&Y.pause(),G=0,n&&(n.uncache=1),we&&ya(ScrollTrigger,"refreshInit",we),Z&&(Z.pause(),p.tween&&p.tween.kill()&&(p.tween=0)),!ve)){for(var r=at.length;r--;)if(at[r].scroller===he&&at[r]!==Te)return;ya(he,"resize",Ja),ya(he,"scroll",Ia)}},Te.kill=function(e,t){Te.disable(e,t),i&&delete st[i];var r=at.indexOf(Te);at.splice(r,1),r===ze&&0<lt&&ze--,y&&(y.scrollTrigger=null,e&&y.render(-1),t||y.kill()),O&&[O,E,I,R].forEach(function(e){return e.parentNode.removeChild(e)}),n&&(n.uncache=1)},Te.enable()}else this.update=this.refresh=this.kill=H},ScrollTrigger.register=function register(e){if(!o&&(Me=e||J(),I()&&window.document&&(ke=window,Pe=document,_e=Pe.documentElement,Oe=Pe.body),Me&&(Ee=Me.utils.toArray,Le=Me.utils.clamp,Me.core.globals("ScrollTrigger",ScrollTrigger),Oe))){s=ke.requestAnimationFrame||function(e){return setTimeout(e,16)},xa(ke,"mousewheel",Ia),i=[ke,Pe,_e,Oe],xa(Pe,"scroll",Ia);var t,r=Oe.style,n=r.borderTop;r.borderTop="1px solid #000",t=nt(Oe),rt.m=Math.round(t.top+rt.sc())||0,tt.m=Math.round(t.left+tt.sc())||0,n?r.borderTop=n:r.removeProperty("border-top"),c=setInterval(Ha,200),Me.delayedCall(.5,function(){return Be=0}),xa(Pe,"touchcancel",H),xa(Oe,"touchstart",H),wa(xa,Pe,"pointerdown,touchstart,mousedown",function(){return Ae=1}),wa(xa,Pe,"pointerup,touchend,mouseup",function(){return Ae=0}),u=Me.utils.checkPrefix("transform"),D.push(u),o=He(),a=Me.delayedCall(.2,z).pause(),p=[Pe,"visibilitychange",function(){var e=ke.innerWidth,t=ke.innerHeight;Pe.hidden?(f=e,d=t):f===e&&d===t||Ja()},Pe,"DOMContentLoaded",z,ke,"load",function(){return De||z()},ke,"resize",Ja],R(xa)}return o},ScrollTrigger.defaults=function defaults(e){for(var t in e)it[t]=e[t]},ScrollTrigger.kill=function kill(){Je=0,at.slice(0).forEach(function(e){return e.kill(1)})},ScrollTrigger.config=function config(e){"limitCallbacks"in e&&(qe=!!e.limitCallbacks);var t=e.syncInterval;t&&clearInterval(c)||(c=t)&&setInterval(Ha,t),"autoRefreshEvents"in e&&(R(ya)||R(xa,e.autoRefreshEvents||"none"))},ScrollTrigger.scrollerProxy=function scrollerProxy(e,t){var r=Ee(e)[0];K(r)?Fe.unshift(ke,t,Oe,t,_e,t):Fe.unshift(r,t)},ScrollTrigger.matchMedia=function matchMedia(e){var t,r,n,o,i;for(r in e)n=P.indexOf(r),o=e[r],"all"===(We=r)?o():(t=ke.matchMedia(r))&&(t.matches&&(i=o()),~n?(P[n+1]=X(P[n+1],o),P[n+2]=X(P[n+2],i)):(n=P.length,P.push(r,o,i),t.addListener?t.addListener(Pa):t.addEventListener("change",Pa)),P[n+3]=t.matches),We=0;return P},ScrollTrigger.clearMatchMedia=function clearMatchMedia(e){e||(P.length=0),0<=(e=P.indexOf(e))&&P.splice(e,4)},ScrollTrigger);function ScrollTrigger(e,t){o||ScrollTrigger.register(Me)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(e,t)}Z.version="3.5.1",Z.saveStyles=function(e){return e?Ee(e).forEach(function(e){var t=O.indexOf(e);0<=t&&O.splice(t,4),O.push(e,e.style.cssText,Me.core.getCache(e),We)}):O},Z.revert=function(e,t){return A(!e,t)},Z.create=function(e,t){return new Z(e,t)},Z.refresh=function(e){return e?Ja():z(!0)},Z.update=B,Z.maxScroll=function(e,t){return Q(e,t?tt:rt)},Z.getScrollFunc=function(e,t){return M(Ee(e)[0],t?tt:rt)},Z.getById=function(e){return st[e]},Z.getAll=function(){return at.slice(0)},Z.isScrolling=function(){return!!De},Z.addEventListener=function(e,t){var r=C[e]||(C[e]=[]);~r.indexOf(t)||r.push(t)},Z.removeEventListener=function(e,t){var r=C[e],n=r&&r.indexOf(t);0<=n&&r.splice(n,1)},Z.batch=function(e,t){function bi(e,t){var r=[],n=[],o=Me.delayedCall(i,function(){t(r,n),r=[],n=[]}).pause();return function(e){r.length||o.restart(!0),r.push(e.trigger),n.push(e),a<=r.length&&o.progress(1)}}var r,n=[],o={},i=t.interval||.016,a=t.batchMax||1e9;for(r in t)o[r]="on"===r.substr(0,2)&&T(t[r])&&"onRefreshInit"!==r?bi(0,t[r]):t[r];return T(a)&&(a=a(),xa(Z,"refresh",function(){return a=t.batchMax()})),Ee(e).forEach(function(e){var t={};for(r in o)t[r]=o[r];t.trigger=e,n.push(Z.create(t))}),n},Z.sort=function(e){return at.sort(e||function(e,t){return-1e6*(e.vars.refreshPriority||0)+e.start-(t.start+-1e6*(t.vars.refreshPriority||0))})},J()&&Me.registerPlugin(Z),e.ScrollTrigger=Z,e.default=Z;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});




(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.window = global.window || {}));
}(this, (function (exports) { 'use strict';

	/*!
	 * DrawSVGPlugin 3.5.1
	 * https://greensock.com
	 *
	 * @license Copyright 2008-2020, GreenSock. All rights reserved.
	 * Subject to the terms at https://greensock.com/standard-license or for
	 * Club GreenSock members, the agreement issued with that membership.
	 * @author: Jack Doyle, jack@greensock.com
	*/
	var gsap,
	    _toArray,
	    _win,
	    _isEdge,
	    _coreInitted,
	    _windowExists = function _windowExists() {
	  return typeof window !== "undefined";
	},
	    _getGSAP = function _getGSAP() {
	  return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
	},
	    _numExp = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
	    _types = {
	  rect: ["width", "height"],
	  circle: ["r", "r"],
	  ellipse: ["rx", "ry"],
	  line: ["x2", "y2"]
	},
	    _round = function _round(value) {
	  return Math.round(value * 10000) / 10000;
	},
	    _parseNum = function _parseNum(value) {
	  return parseFloat(value || 0);
	},
	    _getAttributeAsNumber = function _getAttributeAsNumber(target, attr) {
	  return _parseNum(target.getAttribute(attr));
	},
	    _sqrt = Math.sqrt,
	    _getDistance = function _getDistance(x1, y1, x2, y2, scaleX, scaleY) {
	  return _sqrt(Math.pow((_parseNum(x2) - _parseNum(x1)) * scaleX, 2) + Math.pow((_parseNum(y2) - _parseNum(y1)) * scaleY, 2));
	},
	    _warn = function _warn(message) {
	  return console.warn(message);
	},
	    _hasNonScalingStroke = function _hasNonScalingStroke(target) {
	  return target.getAttribute("vector-effect") === "non-scaling-stroke";
	},
	    _bonusValidated = 1,
	    _parse = function _parse(value, length, defaultStart) {
	  var i = value.indexOf(" "),
	      s,
	      e;

	  if (i < 0) {
	    s = defaultStart !== undefined ? defaultStart + "" : value;
	    e = value;
	  } else {
	    s = value.substr(0, i);
	    e = value.substr(i + 1);
	  }

	  s = ~s.indexOf("%") ? _parseNum(s) / 100 * length : _parseNum(s);
	  e = ~e.indexOf("%") ? _parseNum(e) / 100 * length : _parseNum(e);
	  return s > e ? [e, s] : [s, e];
	},
	    _getLength = function _getLength(target) {
	  target = _toArray(target)[0];

	  if (!target) {
	    return 0;
	  }

	  var type = target.tagName.toLowerCase(),
	      style = target.style,
	      scaleX = 1,
	      scaleY = 1,
	      length,
	      bbox,
	      points,
	      prevPoint,
	      i,
	      rx,
	      ry;

	  if (_hasNonScalingStroke(target)) {
	    scaleY = target.getScreenCTM();
	    scaleX = _sqrt(scaleY.a * scaleY.a + scaleY.b * scaleY.b);
	    scaleY = _sqrt(scaleY.d * scaleY.d + scaleY.c * scaleY.c);
	  }

	  try {
	    bbox = target.getBBox();
	  } catch (e) {
	    _warn("Some browsers won't measure invisible elements (like display:none or masks inside defs).");
	  }

	  var _ref = bbox || {
	    x: 0,
	    y: 0,
	    width: 0,
	    height: 0
	  },
	      x = _ref.x,
	      y = _ref.y,
	      width = _ref.width,
	      height = _ref.height;

	  if ((!bbox || !width && !height) && _types[type]) {
	    width = _getAttributeAsNumber(target, _types[type][0]);
	    height = _getAttributeAsNumber(target, _types[type][1]);

	    if (type !== "rect" && type !== "line") {
	      width *= 2;
	      height *= 2;
	    }

	    if (type === "line") {
	      x = _getAttributeAsNumber(target, "x1");
	      y = _getAttributeAsNumber(target, "y1");
	      width = Math.abs(width - x);
	      height = Math.abs(height - y);
	    }
	  }

	  if (type === "path") {
	    prevPoint = style.strokeDasharray;
	    style.strokeDasharray = "none";
	    length = target.getTotalLength() || 0;

	    if (scaleX !== scaleY) {
	      _warn("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled.");
	    }

	    length *= (scaleX + scaleY) / 2;
	    style.strokeDasharray = prevPoint;
	  } else if (type === "rect") {
	    length = width * 2 * scaleX + height * 2 * scaleY;
	  } else if (type === "line") {
	    length = _getDistance(x, y, x + width, y + height, scaleX, scaleY);
	  } else if (type === "polyline" || type === "polygon") {
	    points = target.getAttribute("points").match(_numExp) || [];

	    if (type === "polygon") {
	      points.push(points[0], points[1]);
	    }

	    length = 0;

	    for (i = 2; i < points.length; i += 2) {
	      length += _getDistance(points[i - 2], points[i - 1], points[i], points[i + 1], scaleX, scaleY) || 0;
	    }
	  } else if (type === "circle" || type === "ellipse") {
	    rx = width / 2 * scaleX;
	    ry = height / 2 * scaleY;
	    length = Math.PI * (3 * (rx + ry) - _sqrt((3 * rx + ry) * (rx + 3 * ry)));
	  }

	  return length || 0;
	},
	    _getPosition = function _getPosition(target, length) {
	  target = _toArray(target)[0];

	  if (!target) {
	    return [0, 0];
	  }

	  if (!length) {
	    length = _getLength(target) + 1;
	  }

	  var cs = _win.getComputedStyle(target),
	      dash = cs.strokeDasharray || "",
	      offset = _parseNum(cs.strokeDashoffset),
	      i = dash.indexOf(",");

	  if (i < 0) {
	    i = dash.indexOf(" ");
	  }

	  dash = i < 0 ? length : _parseNum(dash.substr(0, i)) || 1e-5;

	  if (dash > length) {
	    dash = length;
	  }

	  return [Math.max(0, -offset), Math.max(0, dash - offset)];
	},
	    _initCore = function _initCore() {
	  if (_windowExists()) {
	    _win = window;
	    _coreInitted = gsap = _getGSAP();
	    _toArray = gsap.utils.toArray;
	    _isEdge = ((_win.navigator || {}).userAgent || "").indexOf("Edge") !== -1;
	  }
	};

	var DrawSVGPlugin = {
	  version: "3.5.1",
	  name: "drawSVG",
	  register: function register(core) {
	    gsap = core;

	    _initCore();
	  },
	  init: function init(target, value, tween, index, targets) {
	    if (!target.getBBox) {
	      return false;
	    }

	    _coreInitted || _initCore();
	    var length = _getLength(target) + 1,
	        start,
	        end,
	        overage,
	        cs;
	    this._style = target.style;
	    this._target = target;

	    if (value + "" === "true") {
	      value = "0 100%";
	    } else if (!value) {
	      value = "0 0";
	    } else if ((value + "").indexOf(" ") === -1) {
	      value = "0 " + value;
	    }

	    start = _getPosition(target, length);
	    end = _parse(value, length, start[0]);
	    this._length = _round(length + 10);

	    if (start[0] === 0 && end[0] === 0) {
	      overage = Math.max(0.00001, end[1] - length);
	      this._dash = _round(length + overage);
	      this._offset = _round(length - start[1] + overage);
	      this._offsetPT = this.add(this, "_offset", this._offset, _round(length - end[1] + overage));
	    } else {
	      this._dash = _round(start[1] - start[0]) || 0.000001;
	      this._offset = _round(-start[0]);
	      this._dashPT = this.add(this, "_dash", this._dash, _round(end[1] - end[0]) || 0.00001);
	      this._offsetPT = this.add(this, "_offset", this._offset, _round(-end[0]));
	    }

	    if (_isEdge) {
	      cs = _win.getComputedStyle(target);

	      if (cs.strokeLinecap !== cs.strokeLinejoin) {
	        end = _parseNum(cs.strokeMiterlimit);
	        this.add(target.style, "strokeMiterlimit", end, end + 0.01);
	      }
	    }

	    this._live = _hasNonScalingStroke(target) || ~(value + "").indexOf("live");

	    this._props.push("drawSVG");

	    return _bonusValidated;
	  },
	  render: function render(ratio, data) {
	    var pt = data._pt,
	        style = data._style,
	        length,
	        lengthRatio,
	        dash,
	        offset;

	    if (pt) {
	      if (data._live) {
	        length = _getLength(data._target) + 11;

	        if (length !== data._length) {
	          lengthRatio = length / data._length;
	          data._length = length;
	          data._offsetPT.s *= lengthRatio;
	          data._offsetPT.c *= lengthRatio;

	          if (data._dashPT) {
	            data._dashPT.s *= lengthRatio;
	            data._dashPT.c *= lengthRatio;
	          } else {
	            data._dash *= lengthRatio;
	          }
	        }
	      }

	      while (pt) {
	        pt.r(ratio, pt.d);
	        pt = pt._next;
	      }

	      dash = data._dash;
	      offset = data._offset;
	      length = data._length;
	      style.strokeDashoffset = data._offset;

	      if (ratio === 1 || !ratio) {
	        if (dash - offset < 0.001 && length - dash <= 10) {
	          style.strokeDashoffset = offset + 1;
	        }

	        style.strokeDasharray = offset < 0.001 && length - dash <= 10 ? "none" : offset === dash ? "0px, 999999px" : dash + "px," + length + "px";
	      } else {
	        style.strokeDasharray = dash + "px," + length + "px";
	      }
	    }
	  },
	  getLength: _getLength,
	  getPosition: _getPosition
	};
	_getGSAP() && gsap.registerPlugin(DrawSVGPlugin);

	exports.DrawSVGPlugin = DrawSVGPlugin;
	exports.default = DrawSVGPlugin;

	Object.defineProperty(exports, '__esModule', { value: true });

})));

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).MicroModal=t()}(this,(function(){"use strict";function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var n,i,a,r,s,l=(n=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],i=function(){function o(e){var n=e.targetModal,i=e.triggers,a=void 0===i?[]:i,r=e.onShow,s=void 0===r?function(){}:r,l=e.onClose,c=void 0===l?function(){}:l,d=e.openTrigger,u=void 0===d?"data-micromodal-trigger":d,f=e.closeTrigger,h=void 0===f?"data-micromodal-close":f,v=e.openClass,m=void 0===v?"is-open":v,g=e.disableScroll,b=void 0!==g&&g,y=e.disableFocus,p=void 0!==y&&y,w=e.awaitCloseAnimation,E=void 0!==w&&w,k=e.awaitOpenAnimation,M=void 0!==k&&k,C=e.debugMode,A=void 0!==C&&C;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),this.modal=document.getElementById(n),this.config={debugMode:A,disableScroll:b,openTrigger:u,closeTrigger:h,openClass:m,onShow:s,onClose:c,awaitCloseAnimation:E,awaitOpenAnimation:M,disableFocus:p},a.length>0&&this.registerTriggers.apply(this,t(a)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}var i,a,r;return i=o,(a=[{key:"registerTriggers",value:function(){for(var e=this,t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];o.filter(Boolean).forEach((function(t){t.addEventListener("click",(function(t){return e.showModal(t)}))}))}},{key:"showModal",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add(this.config.openClass),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.awaitOpenAnimation){var o=function t(){e.modal.removeEventListener("animationend",t,!1),e.setFocusToFirstNode()};this.modal.addEventListener("animationend",o,!1)}else this.setFocusToFirstNode();this.config.onShow(this.modal,this.activeElement,t)}},{key:"closeModal",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this.modal;if(this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus&&this.activeElement.focus(),this.config.onClose(this.modal,this.activeElement,e),this.config.awaitCloseAnimation){var o=this.config.openClass;this.modal.addEventListener("animationend",(function e(){t.classList.remove(o),t.removeEventListener("animationend",e,!1)}),!1)}else t.classList.remove(this.config.openClass)}},{key:"closeModalById",value:function(e){this.modal=document.getElementById(e),this.modal&&this.closeModal()}},{key:"scrollBehaviour",value:function(e){if(this.config.disableScroll){var t=document.querySelector("body");switch(e){case"enable":Object.assign(t.style,{overflow:""});break;case"disable":Object.assign(t.style,{overflow:"hidden"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(e){e.target.hasAttribute(this.config.closeTrigger)&&this.closeModal(e)}},{key:"onKeydown",value:function(e){27===e.keyCode&&this.closeModal(e),9===e.keyCode&&this.retainFocus(e)}},{key:"getFocusableNodes",value:function(){var e=this.modal.querySelectorAll(n);return Array.apply(void 0,t(e))}},{key:"setFocusToFirstNode",value:function(){var e=this;if(!this.config.disableFocus){var t=this.getFocusableNodes();if(0!==t.length){var o=t.filter((function(t){return!t.hasAttribute(e.config.closeTrigger)}));o.length>0&&o[0].focus(),0===o.length&&t[0].focus()}}}},{key:"retainFocus",value:function(e){var t=this.getFocusableNodes();if(0!==t.length)if(t=t.filter((function(e){return null!==e.offsetParent})),this.modal.contains(document.activeElement)){var o=t.indexOf(document.activeElement);e.shiftKey&&0===o&&(t[t.length-1].focus(),e.preventDefault()),!e.shiftKey&&t.length>0&&o===t.length-1&&(t[0].focus(),e.preventDefault())}else t[0].focus()}}])&&e(i.prototype,a),r&&e(i,r),o}(),a=null,r=function(e){if(!document.getElementById(e))return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(e,"'"),"background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'.concat(e,'"></div>')),!1},s=function(e,t){if(function(e){e.length<=0&&(console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>'))}(e),!t)return!0;for(var o in t)r(o);return!0},{init:function(e){var o=Object.assign({},{openTrigger:"data-micromodal-trigger"},e),n=t(document.querySelectorAll("[".concat(o.openTrigger,"]"))),r=function(e,t){var o=[];return e.forEach((function(e){var n=e.attributes[t].value;void 0===o[n]&&(o[n]=[]),o[n].push(e)})),o}(n,o.openTrigger);if(!0!==o.debugMode||!1!==s(n,r))for(var l in r){var c=r[l];o.targetModal=l,o.triggers=t(c),a=new i(o)}},show:function(e,t){var o=t||{};o.targetModal=e,!0===o.debugMode&&!1===r(e)||(a&&a.removeEventListeners(),(a=new i(o)).showModal())},close:function(e){e?a.closeModalById(e):a.closeModal()}});return window.MicroModal=l,l}));

/*
 Copyright (C) Federico Zivolo 2019
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=e.ownerDocument.defaultView,n=o.getComputedStyle(e,null);return t?n[t]:n}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll|overlay)/.test(r+s+p)?e:n(o(e))}function r(e){return 11===e?pe:10===e?se:pe||se}function p(e){if(!e)return document.documentElement;for(var o=r(10)?document.body:null,n=e.offsetParent||null;n===o&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TH','TD','TABLE'].indexOf(n.nodeName)&&'static'===t(n,'position')?p(n):n:e?e.ownerDocument.documentElement:document.documentElement}function s(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||p(e.firstElementChild)===e)}function d(e){return null===e.parentNode?e:d(e.parentNode)}function a(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?e:t,i=o?t:e,r=document.createRange();r.setStart(n,0),r.setEnd(i,0);var l=r.commonAncestorContainer;if(e!==l&&t!==l||n.contains(i))return s(l)?l:p(l);var f=d(e);return f.host?a(f.host,t):a(e,d(t).host)}function l(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',n=e.nodeName;if('BODY'===n||'HTML'===n){var i=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||i;return r[o]}return e[o]}function f(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=l(t,'top'),i=l(t,'left'),r=o?-1:1;return e.top+=n*r,e.bottom+=n*r,e.left+=i*r,e.right+=i*r,e}function m(e,t){var o='x'===t?'Left':'Top',n='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+n+'Width'],10)}function h(e,t,o,n){return ee(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],r(10)?parseInt(o['offset'+e])+parseInt(n['margin'+('Height'===e?'Top':'Left')])+parseInt(n['margin'+('Height'===e?'Bottom':'Right')]):0)}function c(e){var t=e.body,o=e.documentElement,n=r(10)&&getComputedStyle(o);return{height:h('Height',t,o,n),width:h('Width',t,o,n)}}function g(e){return fe({},e,{right:e.left+e.width,bottom:e.top+e.height})}function u(e){var o={};try{if(r(10)){o=e.getBoundingClientRect();var n=l(e,'top'),i=l(e,'left');o.top+=n,o.left+=i,o.bottom+=n,o.right+=i}else o=e.getBoundingClientRect()}catch(t){}var p={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},s='HTML'===e.nodeName?c(e.ownerDocument):{},d=s.width||e.clientWidth||p.right-p.left,a=s.height||e.clientHeight||p.bottom-p.top,f=e.offsetWidth-d,h=e.offsetHeight-a;if(f||h){var u=t(e);f-=m(u,'x'),h-=m(u,'y'),p.width-=f,p.height-=h}return g(p)}function b(e,o){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],p=r(10),s='HTML'===o.nodeName,d=u(e),a=u(o),l=n(e),m=t(o),h=parseFloat(m.borderTopWidth,10),c=parseFloat(m.borderLeftWidth,10);i&&s&&(a.top=ee(a.top,0),a.left=ee(a.left,0));var b=g({top:d.top-a.top-h,left:d.left-a.left-c,width:d.width,height:d.height});if(b.marginTop=0,b.marginLeft=0,!p&&s){var w=parseFloat(m.marginTop,10),y=parseFloat(m.marginLeft,10);b.top-=h-w,b.bottom-=h-w,b.left-=c-y,b.right-=c-y,b.marginTop=w,b.marginLeft=y}return(p&&!i?o.contains(l):o===l&&'BODY'!==l.nodeName)&&(b=f(b,o)),b}function w(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=e.ownerDocument.documentElement,n=b(e,o),i=ee(o.clientWidth,window.innerWidth||0),r=ee(o.clientHeight,window.innerHeight||0),p=t?0:l(o),s=t?0:l(o,'left'),d={top:p-n.top+n.marginTop,left:s-n.left+n.marginLeft,width:i,height:r};return g(d)}function y(e){var n=e.nodeName;if('BODY'===n||'HTML'===n)return!1;if('fixed'===t(e,'position'))return!0;var i=o(e);return!!i&&y(i)}function E(e){if(!e||!e.parentElement||r())return document.documentElement;for(var o=e.parentElement;o&&'none'===t(o,'transform');)o=o.parentElement;return o||document.documentElement}function v(e,t,i,r){var p=4<arguments.length&&void 0!==arguments[4]&&arguments[4],s={top:0,left:0},d=p?E(e):a(e,t);if('viewport'===r)s=w(d,p);else{var l;'scrollParent'===r?(l=n(o(t)),'BODY'===l.nodeName&&(l=e.ownerDocument.documentElement)):'window'===r?l=e.ownerDocument.documentElement:l=r;var f=b(l,d,p);if('HTML'===l.nodeName&&!y(d)){var m=c(e.ownerDocument),h=m.height,g=m.width;s.top+=f.top-f.marginTop,s.bottom=h+f.top,s.left+=f.left-f.marginLeft,s.right=g+f.left}else s=f}i=i||0;var u='number'==typeof i;return s.left+=u?i:i.left||0,s.top+=u?i:i.top||0,s.right-=u?i:i.right||0,s.bottom-=u?i:i.bottom||0,s}function x(e){var t=e.width,o=e.height;return t*o}function O(e,t,o,n,i){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=v(o,n,r,i),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return fe({key:e},s[e],{area:x(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,n=e.height;return t>=o.clientWidth&&n>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function L(e,t,o){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,i=n?E(t):a(t,o);return b(o,i,n)}function S(e){var t=e.ownerDocument.defaultView,o=t.getComputedStyle(e),n=parseFloat(o.marginTop||0)+parseFloat(o.marginBottom||0),i=parseFloat(o.marginLeft||0)+parseFloat(o.marginRight||0),r={width:e.offsetWidth+i,height:e.offsetHeight+n};return r}function T(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function D(e,t,o){o=o.split('-')[0];var n=S(e),i={width:n.width,height:n.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return i[p]=t[p]+t[d]/2-n[d]/2,i[s]=o===s?t[s]-n[a]:t[T(s)],i}function C(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function N(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var n=C(e,function(e){return e[t]===o});return e.indexOf(n)}function P(t,o,n){var i=void 0===n?t:t.slice(0,N(t,'name',n));return i.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var n=t['function']||t.fn;t.enabled&&e(n)&&(o.offsets.popper=g(o.offsets.popper),o.offsets.reference=g(o.offsets.reference),o=n(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=L(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=O(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=D(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',e=P(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,n=e.enabled;return n&&o===t})}function H(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function B(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[H('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function A(e){var t=e.ownerDocument;return t?t.defaultView:window}function M(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||M(n(p.parentNode),t,o,i),i.push(p)}function F(e,t,o,i){o.updateBound=i,A(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return M(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function I(){this.state.eventsEnabled||(this.state=F(this.reference,this.options,this.state,this.scheduleUpdate))}function R(e,t){return A(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function U(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=R(this.reference,this.state))}function Y(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function j(e,t){Object.keys(t).forEach(function(o){var n='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&Y(t[o])&&(n='px'),e.style[o]=t[o]+n})}function V(e,t){Object.keys(t).forEach(function(o){var n=t[o];!1===n?e.removeAttribute(o):e.setAttribute(o,t[o])})}function q(e,t){var o=e.offsets,n=o.popper,i=o.reference,r=$,p=function(e){return e},s=r(i.width),d=r(n.width),a=-1!==['left','right'].indexOf(e.placement),l=-1!==e.placement.indexOf('-'),f=t?a||l||s%2==d%2?r:Z:p,m=t?r:p;return{left:f(1==s%2&&1==d%2&&!l&&t?n.left-1:n.left),top:m(n.top),bottom:m(n.bottom),right:f(n.right)}}function K(e,t,o){var n=C(e,function(e){var o=e.name;return o===t}),i=!!n&&e.some(function(e){return e.name===o&&e.enabled&&e.order<n.order});if(!i){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return i}function z(e){return'end'===e?'start':'start'===e?'end':e}function G(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=ce.indexOf(e),n=ce.slice(o+1).concat(ce.slice(0,o));return t?n.reverse():n}function _(e,t,o,n){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+i[1],p=i[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=n;}var d=g(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?ee(document.documentElement.clientHeight,window.innerHeight||0):ee(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function X(e,t,o,n){var i=[0,0],r=-1!==['right','left'].indexOf(n),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(C(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,n){var i=(1===n?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return _(e,i,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,n){Y(o)&&(i[t]+=o*('-'===e[n-1]?-1:1))})}),i}function J(e,t){var o,n=t.offset,i=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=i.split('-')[0];return o=Y(+n)?[+n,0]:X(n,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}for(var Q=Math.min,Z=Math.floor,$=Math.round,ee=Math.max,te='undefined'!=typeof window&&'undefined'!=typeof document,oe=['Edge','Trident','Firefox'],ne=0,ie=0;ie<oe.length;ie+=1)if(te&&0<=navigator.userAgent.indexOf(oe[ie])){ne=1;break}var i=te&&window.Promise,re=i?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},ne))}},pe=te&&!!(window.MSInputMethodContext&&document.documentMode),se=te&&/MSIE 10/.test(navigator.userAgent),de=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},ae=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),le=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},fe=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},me=te&&/Firefox/i.test(navigator.userAgent),he=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],ce=he.slice(3),ge={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},ue=function(){function t(o,n){var i=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};de(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=re(this.update.bind(this)),this.options=fe({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(fe({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){i.options.modifiers[e]=fe({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return fe({name:e},i.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return ae(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return B.call(this)}},{key:'enableEventListeners',value:function(){return I.call(this)}},{key:'disableEventListeners',value:function(){return U.call(this)}}]),t}();return ue.Utils=('undefined'==typeof window?global:window).PopperUtils,ue.placements=he,ue.Defaults={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],n=t.split('-')[1];if(n){var i=e.offsets,r=i.reference,p=i.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:le({},d,r[d]),end:le({},d,r[d]+r[a]-p[a])};e.offsets.popper=fe({},p,l[n])}return e}},offset:{order:200,enabled:!0,fn:J,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||p(e.instance.popper);e.instance.reference===o&&(o=p(o));var n=H('transform'),i=e.instance.popper.style,r=i.top,s=i.left,d=i[n];i.top='',i.left='',i[n]='';var a=v(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);i.top=r,i.left=s,i[n]=d,t.boundaries=a;var l=t.priority,f=e.offsets.popper,m={primary:function(e){var o=f[e];return f[e]<a[e]&&!t.escapeWithReference&&(o=ee(f[e],a[e])),le({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=f[o];return f[e]>a[e]&&!t.escapeWithReference&&(n=Q(f[o],a[e]-('right'===e?f.width:f.height))),le({},o,n)}};return l.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';f=fe({},f,m[t](e))}),e.offsets.popper=f,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,n=t.reference,i=e.placement.split('-')[0],r=Z,p=-1!==['top','bottom'].indexOf(i),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(n[d])&&(e.offsets.popper[d]=r(n[d])-o[a]),o[d]>r(n[s])&&(e.offsets.popper[d]=r(n[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var n;if(!K(e.instance.modifiers,'arrow','keepTogether'))return e;var i=o.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',c=a?'bottom':'right',u=S(i)[l];d[c]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[c]-u)),d[m]+u>s[c]&&(e.offsets.popper[m]+=d[m]+u-s[c]),e.offsets.popper=g(e.offsets.popper);var b=d[m]+d[l]/2-u/2,w=t(e.instance.popper),y=parseFloat(w['margin'+f],10),E=parseFloat(w['border'+f+'Width'],10),v=b-e.offsets.popper[m]-y-E;return v=ee(Q(s[l]-u,v),0),e.arrowElement=i,e.offsets.arrow=(n={},le(n,m,$(v)),le(n,h,''),n),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=v(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split('-')[0],i=T(n),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case ge.FLIP:p=[n,i];break;case ge.CLOCKWISE:p=G(n);break;case ge.COUNTERCLOCKWISE:p=G(n,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(n!==s||p.length===d+1)return e;n=e.placement.split('-')[0],i=T(n);var a=e.offsets.popper,l=e.offsets.reference,f=Z,m='left'===n&&f(a.right)>f(l.left)||'right'===n&&f(a.left)<f(l.right)||'top'===n&&f(a.bottom)>f(l.top)||'bottom'===n&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===n&&h||'right'===n&&c||'top'===n&&g||'bottom'===n&&u,w=-1!==['top','bottom'].indexOf(n),y=!!t.flipVariations&&(w&&'start'===r&&h||w&&'end'===r&&c||!w&&'start'===r&&g||!w&&'end'===r&&u);(m||b||y)&&(e.flipped=!0,(m||b)&&(n=p[d+1]),y&&(r=z(r)),e.placement=n+(r?'-'+r:''),e.offsets.popper=fe({},e.offsets.popper,D(e.instance.popper,e.offsets.reference,e.placement)),e=P(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],n=e.offsets,i=n.popper,r=n.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return i[p?'left':'top']=r[o]-(s?i[p?'width':'height']:0),e.placement=T(t),e.offsets.popper=g(i),e}},hide:{order:800,enabled:!0,fn:function(e){if(!K(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=C(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,n=t.y,i=e.offsets.popper,r=C(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===r?t.gpuAcceleration:r,l=p(e.instance.popper),f=u(l),m={position:i.position},h=q(e,2>window.devicePixelRatio||!me),c='bottom'===o?'top':'bottom',g='right'===n?'left':'right',b=H('transform');if(d='bottom'==c?'HTML'===l.nodeName?-l.clientHeight+h.bottom:-f.height+h.bottom:h.top,s='right'==g?'HTML'===l.nodeName?-l.clientWidth+h.right:-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[g]=0,m.willChange='transform';else{var w='bottom'==c?-1:1,y='right'==g?-1:1;m[c]=d*w,m[g]=s*y,m.willChange=c+', '+g}var E={"x-placement":e.placement};return e.attributes=fe({},E,e.attributes),e.styles=fe({},m,e.styles),e.arrowStyles=fe({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return j(e.instance.popper,e.styles),V(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&j(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,n,i){var r=L(i,t,e,o.positionFixed),p=O(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),j(t,{position:o.positionFixed?'fixed':'absolute'}),o},gpuAcceleration:void 0}}},ue});
//# sourceMappingURL=popper.min.js.map


!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery")):"function"==typeof define&&define.amd?define(["exports","jquery"],e):e((t=t||self).bootstrap={},t.jQuery)}(this,function(t,p){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function l(o){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},e=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.forEach(function(t){var e,n,i;e=o,i=r[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return o}p=p&&p.hasOwnProperty("default")?p.default:p;var e="transitionend";function n(t){var e=this,n=!1;return p(this).one(m.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||m.triggerTransitionEnd(e)},t),this}var m={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=p(t).css("transition-duration"),n=p(t).css("transition-delay"),i=parseFloat(e),o=parseFloat(n);return i||o?(e=e.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(e)+parseFloat(n))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){p(t).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],s=r&&m.isElement(r)?"element":(a=r,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var a},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"!=typeof t.getRootNode)return t instanceof ShadowRoot?t:t.parentNode?m.findShadowRoot(t.parentNode):null;var e=t.getRootNode();return e instanceof ShadowRoot?e:null}};p.fn.emulateTransitionEnd=n,p.event.special[m.TRANSITION_END]={bindType:e,delegateType:e,handle:function(t){if(p(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var o="alert",r="bs.alert",a="."+r,c=p.fn[o],h={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+".data-api"},u="alert",f="fade",d="show",g=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){p.removeData(this._element,r),this._element=null},t._getRootElement=function(t){var e=m.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n||(n=p(t).closest("."+u)[0]),n},t._triggerCloseEvent=function(t){var e=p.Event(h.CLOSE);return p(t).trigger(e),e},t._removeElement=function(e){var n=this;if(p(e).removeClass(d),p(e).hasClass(f)){var t=m.getTransitionDurationFromElement(e);p(e).one(m.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){p(t).detach().trigger(h.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=p(this),e=t.data(r);e||(e=new i(this),t.data(r,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();p(document).on(h.CLICK_DATA_API,'[data-dismiss="alert"]',g._handleDismiss(new g)),p.fn[o]=g._jQueryInterface,p.fn[o].Constructor=g,p.fn[o].noConflict=function(){return p.fn[o]=c,g._jQueryInterface};var _="button",v="bs.button",y="."+v,E=".data-api",b=p.fn[_],w="active",C="btn",T="focus",S='[data-toggle^="button"]',D='[data-toggle="buttons"]',I='input:not([type="hidden"])',A=".active",O=".btn",N={CLICK_DATA_API:"click"+y+E,FOCUS_BLUR_DATA_API:"focus"+y+E+" blur"+y+E},k=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=p(this._element).closest(D)[0];if(n){var i=this._element.querySelector(I);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(w))t=!1;else{var o=n.querySelector(A);o&&p(o).removeClass(w)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!this._element.classList.contains(w),p(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(w)),t&&p(this._element).toggleClass(w)},t.dispose=function(){p.removeData(this._element,v),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=p(this).data(v);t||(t=new n(this),p(this).data(v,t)),"toggle"===e&&t[e]()})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),n}();p(document).on(N.CLICK_DATA_API,S,function(t){t.preventDefault();var e=t.target;p(e).hasClass(C)||(e=p(e).closest(O)),k._jQueryInterface.call(p(e),"toggle")}).on(N.FOCUS_BLUR_DATA_API,S,function(t){var e=p(t.target).closest(O)[0];p(e).toggleClass(T,/^focus(in)?$/.test(t.type))}),p.fn[_]=k._jQueryInterface,p.fn[_].Constructor=k,p.fn[_].noConflict=function(){return p.fn[_]=b,k._jQueryInterface};var L="carousel",x="bs.carousel",P="."+x,H=".data-api",j=p.fn[L],R={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},F={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},M="next",W="prev",U="left",B="right",q={SLIDE:"slide"+P,SLID:"slid"+P,KEYDOWN:"keydown"+P,MOUSEENTER:"mouseenter"+P,MOUSELEAVE:"mouseleave"+P,TOUCHSTART:"touchstart"+P,TOUCHMOVE:"touchmove"+P,TOUCHEND:"touchend"+P,POINTERDOWN:"pointerdown"+P,POINTERUP:"pointerup"+P,DRAG_START:"dragstart"+P,LOAD_DATA_API:"load"+P+H,CLICK_DATA_API:"click"+P+H},K="carousel",Q="active",V="slide",Y="carousel-item-right",z="carousel-item-left",X="carousel-item-next",G="carousel-item-prev",$="pointer-event",J=".active",Z=".active.carousel-item",tt=".carousel-item",et=".carousel-item img",nt=".carousel-item-next, .carousel-item-prev",it=".carousel-indicators",ot="[data-slide], [data-slide-to]",rt='[data-ride="carousel"]',st={TOUCH:"touch",PEN:"pen"},at=function(){function r(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(it),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var t=r.prototype;return t.next=function(){this._isSliding||this._slide(M)},t.nextWhenVisible=function(){!document.hidden&&p(this._element).is(":visible")&&"hidden"!==p(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(W)},t.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(nt)&&(m.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=this._element.querySelector(Z);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)p(this._element).one(q.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?M:W;this._slide(i,this._items[t])}},t.dispose=function(){p(this._element).off(P),p.removeData(this._element,x),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=l({},R,t),m.typeCheckConfig(L,t,F),t},t._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;0<e&&this.prev(),e<0&&this.next()}},t._addEventListeners=function(){var e=this;this._config.keyboard&&p(this._element).on(q.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&p(this._element).on(q.MOUSEENTER,function(t){return e.pause(t)}).on(q.MOUSELEAVE,function(t){return e.cycle(t)}),this._config.touch&&this._addTouchEventListeners()},t._addTouchEventListeners=function(){var n=this;if(this._touchSupported){var e=function(t){n._pointerEvent&&st[t.originalEvent.pointerType.toUpperCase()]?n.touchStartX=t.originalEvent.clientX:n._pointerEvent||(n.touchStartX=t.originalEvent.touches[0].clientX)},i=function(t){n._pointerEvent&&st[t.originalEvent.pointerType.toUpperCase()]&&(n.touchDeltaX=t.originalEvent.clientX-n.touchStartX),n._handleSwipe(),"hover"===n._config.pause&&(n.pause(),n.touchTimeout&&clearTimeout(n.touchTimeout),n.touchTimeout=setTimeout(function(t){return n.cycle(t)},500+n._config.interval))};p(this._element.querySelectorAll(et)).on(q.DRAG_START,function(t){return t.preventDefault()}),this._pointerEvent?(p(this._element).on(q.POINTERDOWN,function(t){return e(t)}),p(this._element).on(q.POINTERUP,function(t){return i(t)}),this._element.classList.add($)):(p(this._element).on(q.TOUCHSTART,function(t){return e(t)}),p(this._element).on(q.TOUCHMOVE,function(t){var e;(e=t).originalEvent.touches&&1<e.originalEvent.touches.length?n.touchDeltaX=0:n.touchDeltaX=e.originalEvent.touches[0].clientX-n.touchStartX}),p(this._element).on(q.TOUCHEND,function(t){return i(t)}))}},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(tt)):[],this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===M,i=t===W,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var s=(o+(t===W?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(Z)),o=p.Event(q.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return p(this._element).trigger(o),o},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll(J));p(e).removeClass(Q);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&p(n).addClass(Q)}},t._slide=function(t,e){var n,i,o,r=this,s=this._element.querySelector(Z),a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(o=t===M?(n=z,i=X,U):(n=Y,i=G,B),l&&p(l).hasClass(Q))this._isSliding=!1;else if(!this._triggerSlideEvent(l,o).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=p.Event(q.SLID,{relatedTarget:l,direction:o,from:a,to:c});if(p(this._element).hasClass(V)){p(l).addClass(i),m.reflow(l),p(s).addClass(n),p(l).addClass(n);var f=parseInt(l.getAttribute("data-interval"),10);this._config.interval=f?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,f):this._config.defaultInterval||this._config.interval;var d=m.getTransitionDurationFromElement(s);p(s).one(m.TRANSITION_END,function(){p(l).removeClass(n+" "+i).addClass(Q),p(s).removeClass(Q+" "+i+" "+n),r._isSliding=!1,setTimeout(function(){return p(r._element).trigger(u)},0)}).emulateTransitionEnd(d)}else p(s).removeClass(Q),p(l).addClass(Q),this._isSliding=!1,p(this._element).trigger(u);h&&this.cycle()}},r._jQueryInterface=function(i){return this.each(function(){var t=p(this).data(x),e=l({},R,p(this).data());"object"==typeof i&&(e=l({},e,i));var n="string"==typeof i?i:e.slide;if(t||(t=new r(this,e),p(this).data(x,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&e.ride&&(t.pause(),t.cycle())})},r._dataApiClickHandler=function(t){var e=m.getSelectorFromElement(this);if(e){var n=p(e)[0];if(n&&p(n).hasClass(K)){var i=l({},p(n).data(),p(this).data()),o=this.getAttribute("data-slide-to");o&&(i.interval=!1),r._jQueryInterface.call(p(n),i),o&&p(n).data(x).to(o),t.preventDefault()}}},s(r,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return R}}]),r}();p(document).on(q.CLICK_DATA_API,ot,at._dataApiClickHandler),p(window).on(q.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(rt)),e=0,n=t.length;e<n;e++){var i=p(t[e]);at._jQueryInterface.call(i,i.data())}}),p.fn[L]=at._jQueryInterface,p.fn[L].Constructor=at,p.fn[L].noConflict=function(){return p.fn[L]=j,at._jQueryInterface};var lt="collapse",ct="bs.collapse",ht="."+ct,ut=p.fn[lt],ft={toggle:!0,parent:""},dt={toggle:"boolean",parent:"(string|element)"},pt={SHOW:"show"+ht,SHOWN:"shown"+ht,HIDE:"hide"+ht,HIDDEN:"hidden"+ht,CLICK_DATA_API:"click"+ht+".data-api"},mt="show",gt="collapse",_t="collapsing",vt="collapsed",yt="width",Et="height",bt=".show, .collapsing",wt='[data-toggle="collapse"]',Ct=function(){function a(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(wt)),i=0,o=n.length;i<o;i++){var r=n[i],s=m.getSelectorFromElement(r),a=[].slice.call(document.querySelectorAll(s)).filter(function(t){return t===e});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){p(this._element).hasClass(mt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!p(this._element).hasClass(mt)&&(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(bt)).filter(function(t){return"string"==typeof n._config.parent?t.getAttribute("data-parent")===n._config.parent:t.classList.contains(gt)})).length&&(t=null),!(t&&(e=p(t).not(this._selector).data(ct))&&e._isTransitioning))){var i=p.Event(pt.SHOW);if(p(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(p(t).not(this._selector),"hide"),e||p(t).data(ct,null));var o=this._getDimension();p(this._element).removeClass(gt).addClass(_t),this._element.style[o]=0,this._triggerArray.length&&p(this._triggerArray).removeClass(vt).attr("aria-expanded",!0),this.setTransitioning(!0);var r="scroll"+(o[0].toUpperCase()+o.slice(1)),s=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,function(){p(n._element).removeClass(_t).addClass(gt).addClass(mt),n._element.style[o]="",n.setTransitioning(!1),p(n._element).trigger(pt.SHOWN)}).emulateTransitionEnd(s),this._element.style[o]=this._element[r]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&p(this._element).hasClass(mt)){var e=p.Event(pt.HIDE);if(p(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",m.reflow(this._element),p(this._element).addClass(_t).removeClass(gt).removeClass(mt);var i=this._triggerArray.length;if(0<i)for(var o=0;o<i;o++){var r=this._triggerArray[o],s=m.getSelectorFromElement(r);if(null!==s)p([].slice.call(document.querySelectorAll(s))).hasClass(mt)||p(r).addClass(vt).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,function(){t.setTransitioning(!1),p(t._element).removeClass(_t).addClass(gt).trigger(pt.HIDDEN)}).emulateTransitionEnd(a)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){p.removeData(this._element,ct),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=l({},ft,t)).toggle=Boolean(t.toggle),m.typeCheckConfig(lt,t,dt),t},t._getDimension=function(){return p(this._element).hasClass(yt)?yt:Et},t._getParent=function(){var t,n=this;m.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(t.querySelectorAll(e));return p(i).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){var n=p(t).hasClass(mt);e.length&&p(e).toggleClass(vt,!n).attr("aria-expanded",n)},a._getTargetFromElement=function(t){var e=m.getSelectorFromElement(t);return e?document.querySelector(e):null},a._jQueryInterface=function(i){return this.each(function(){var t=p(this),e=t.data(ct),n=l({},ft,t.data(),"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(ct,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return ft}}]),a}();p(document).on(pt.CLICK_DATA_API,wt,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=p(this),e=m.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(e));p(i).each(function(){var t=p(this),e=t.data(ct)?"toggle":n.data();Ct._jQueryInterface.call(t,e)})}),p.fn[lt]=Ct._jQueryInterface,p.fn[lt].Constructor=Ct,p.fn[lt].noConflict=function(){return p.fn[lt]=ut,Ct._jQueryInterface};for(var Tt="undefined"!=typeof window&&"undefined"!=typeof document,St=["Edge","Trident","Firefox"],Dt=0,It=0;It<St.length;It+=1)if(Tt&&0<=navigator.userAgent.indexOf(St[It])){Dt=1;break}var At=Tt&&window.Promise?function(t){var e=!1;return function(){e||(e=!0,window.Promise.resolve().then(function(){e=!1,t()}))}}:function(t){var e=!1;return function(){e||(e=!0,setTimeout(function(){e=!1,t()},Dt))}};function Ot(t){return t&&"[object Function]"==={}.toString.call(t)}function Nt(t,e){if(1!==t.nodeType)return[];var n=t.ownerDocument.defaultView.getComputedStyle(t,null);return e?n[e]:n}function kt(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function Lt(t){if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}var e=Nt(t),n=e.overflow,i=e.overflowX,o=e.overflowY;return/(auto|scroll|overlay)/.test(n+o+i)?t:Lt(kt(t))}var xt=Tt&&!(!window.MSInputMethodContext||!document.documentMode),Pt=Tt&&/MSIE 10/.test(navigator.userAgent);function Ht(t){return 11===t?xt:10===t?Pt:xt||Pt}function jt(t){if(!t)return document.documentElement;for(var e=Ht(10)?document.body:null,n=t.offsetParent||null;n===e&&t.nextElementSibling;)n=(t=t.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&"BODY"!==i&&"HTML"!==i?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===Nt(n,"position")?jt(n):n:t?t.ownerDocument.documentElement:document.documentElement}function Rt(t){return null!==t.parentNode?Rt(t.parentNode):t}function Ft(t,e){if(!(t&&t.nodeType&&e&&e.nodeType))return document.documentElement;var n=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?t:e,o=n?e:t,r=document.createRange();r.setStart(i,0),r.setEnd(o,0);var s,a,l=r.commonAncestorContainer;if(t!==l&&e!==l||i.contains(o))return"BODY"===(a=(s=l).nodeName)||"HTML"!==a&&jt(s.firstElementChild)!==s?jt(l):l;var c=Rt(t);return c.host?Ft(c.host,e):Ft(t,Rt(e).host)}function Mt(t){var e="top"===(1<arguments.length&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",n=t.nodeName;if("BODY"!==n&&"HTML"!==n)return t[e];var i=t.ownerDocument.documentElement;return(t.ownerDocument.scrollingElement||i)[e]}function Wt(t,e){var n="x"===e?"Left":"Top",i="Left"===n?"Right":"Bottom";return parseFloat(t["border"+n+"Width"],10)+parseFloat(t["border"+i+"Width"],10)}function Ut(t,e,n,i){return Math.max(e["offset"+t],e["scroll"+t],n["client"+t],n["offset"+t],n["scroll"+t],Ht(10)?parseInt(n["offset"+t])+parseInt(i["margin"+("Height"===t?"Top":"Left")])+parseInt(i["margin"+("Height"===t?"Bottom":"Right")]):0)}function Bt(t){var e=t.body,n=t.documentElement,i=Ht(10)&&getComputedStyle(n);return{height:Ut("Height",e,n,i),width:Ut("Width",e,n,i)}}var qt=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}(),Kt=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},Qt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};function Vt(t){return Qt({},t,{right:t.left+t.width,bottom:t.top+t.height})}function Yt(t){var e={};try{if(Ht(10)){e=t.getBoundingClientRect();var n=Mt(t,"top"),i=Mt(t,"left");e.top+=n,e.left+=i,e.bottom+=n,e.right+=i}else e=t.getBoundingClientRect()}catch(t){}var o={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},r="HTML"===t.nodeName?Bt(t.ownerDocument):{},s=r.width||t.clientWidth||o.right-o.left,a=r.height||t.clientHeight||o.bottom-o.top,l=t.offsetWidth-s,c=t.offsetHeight-a;if(l||c){var h=Nt(t);l-=Wt(h,"x"),c-=Wt(h,"y"),o.width-=l,o.height-=c}return Vt(o)}function zt(t,e){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=Ht(10),o="HTML"===e.nodeName,r=Yt(t),s=Yt(e),a=Lt(t),l=Nt(e),c=parseFloat(l.borderTopWidth,10),h=parseFloat(l.borderLeftWidth,10);n&&o&&(s.top=Math.max(s.top,0),s.left=Math.max(s.left,0));var u=Vt({top:r.top-s.top-c,left:r.left-s.left-h,width:r.width,height:r.height});if(u.marginTop=0,u.marginLeft=0,!i&&o){var f=parseFloat(l.marginTop,10),d=parseFloat(l.marginLeft,10);u.top-=c-f,u.bottom-=c-f,u.left-=h-d,u.right-=h-d,u.marginTop=f,u.marginLeft=d}return(i&&!n?e.contains(a):e===a&&"BODY"!==a.nodeName)&&(u=function(t,e){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=Mt(e,"top"),o=Mt(e,"left"),r=n?-1:1;return t.top+=i*r,t.bottom+=i*r,t.left+=o*r,t.right+=o*r,t}(u,e)),u}function Xt(t){if(!t||!t.parentElement||Ht())return document.documentElement;for(var e=t.parentElement;e&&"none"===Nt(e,"transform");)e=e.parentElement;return e||document.documentElement}function Gt(t,e,n,i){var o=4<arguments.length&&void 0!==arguments[4]&&arguments[4],r={top:0,left:0},s=o?Xt(t):Ft(t,e);if("viewport"===i)r=function(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=t.ownerDocument.documentElement,i=zt(t,n),o=Math.max(n.clientWidth,window.innerWidth||0),r=Math.max(n.clientHeight,window.innerHeight||0),s=e?0:Mt(n),a=e?0:Mt(n,"left");return Vt({top:s-i.top+i.marginTop,left:a-i.left+i.marginLeft,width:o,height:r})}(s,o);else{var a=void 0;"scrollParent"===i?"BODY"===(a=Lt(kt(e))).nodeName&&(a=t.ownerDocument.documentElement):a="window"===i?t.ownerDocument.documentElement:i;var l=zt(a,s,o);if("HTML"!==a.nodeName||function t(e){var n=e.nodeName;if("BODY"===n||"HTML"===n)return!1;if("fixed"===Nt(e,"position"))return!0;var i=kt(e);return!!i&&t(i)}(s))r=l;else{var c=Bt(t.ownerDocument),h=c.height,u=c.width;r.top+=l.top-l.marginTop,r.bottom=h+l.top,r.left+=l.left-l.marginLeft,r.right=u+l.left}}var f="number"==typeof(n=n||0);return r.left+=f?n:n.left||0,r.top+=f?n:n.top||0,r.right-=f?n:n.right||0,r.bottom-=f?n:n.bottom||0,r}function $t(t,e,i,n,o){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===t.indexOf("auto"))return t;var s=Gt(i,n,r,o),a={top:{width:s.width,height:e.top-s.top},right:{width:s.right-e.right,height:s.height},bottom:{width:s.width,height:s.bottom-e.bottom},left:{width:e.left-s.left,height:s.height}},l=Object.keys(a).map(function(t){return Qt({key:t},a[t],{area:(e=a[t],e.width*e.height)});var e}).sort(function(t,e){return e.area-t.area}),c=l.filter(function(t){var e=t.width,n=t.height;return e>=i.clientWidth&&n>=i.clientHeight}),h=0<c.length?c[0].key:l[0].key,u=t.split("-")[1];return h+(u?"-"+u:"")}function Jt(t,e,n){var i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return zt(n,i?Xt(e):Ft(e,n),i)}function Zt(t){var e=t.ownerDocument.defaultView.getComputedStyle(t),n=parseFloat(e.marginTop||0)+parseFloat(e.marginBottom||0),i=parseFloat(e.marginLeft||0)+parseFloat(e.marginRight||0);return{width:t.offsetWidth+i,height:t.offsetHeight+n}}function te(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,function(t){return e[t]})}function ee(t,e,n){n=n.split("-")[0];var i=Zt(t),o={width:i.width,height:i.height},r=-1!==["right","left"].indexOf(n),s=r?"top":"left",a=r?"left":"top",l=r?"height":"width",c=r?"width":"height";return o[s]=e[s]+e[l]/2-i[l]/2,o[a]=n===a?e[a]-i[c]:e[te(a)],o}function ne(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function ie(t,n,e){return(void 0===e?t:t.slice(0,function(t,e,n){if(Array.prototype.findIndex)return t.findIndex(function(t){return t[e]===n});var i=ne(t,function(t){return t[e]===n});return t.indexOf(i)}(t,"name",e))).forEach(function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var e=t.function||t.fn;t.enabled&&Ot(e)&&(n.offsets.popper=Vt(n.offsets.popper),n.offsets.reference=Vt(n.offsets.reference),n=e(n,t))}),n}function oe(t,n){return t.some(function(t){var e=t.name;return t.enabled&&e===n})}function re(t){for(var e=[!1,"ms","Webkit","Moz","O"],n=t.charAt(0).toUpperCase()+t.slice(1),i=0;i<e.length;i++){var o=e[i],r=o?""+o+n:t;if("undefined"!=typeof document.body.style[r])return r}return null}function se(t){var e=t.ownerDocument;return e?e.defaultView:window}function ae(t,e,n,i){n.updateBound=i,se(t).addEventListener("resize",n.updateBound,{passive:!0});var o=Lt(t);return function t(e,n,i,o){var r="BODY"===e.nodeName,s=r?e.ownerDocument.defaultView:e;s.addEventListener(n,i,{passive:!0}),r||t(Lt(s.parentNode),n,i,o),o.push(s)}(o,"scroll",n.updateBound,n.scrollParents),n.scrollElement=o,n.eventsEnabled=!0,n}function le(){var t,e;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(t=this.reference,e=this.state,se(t).removeEventListener("resize",e.updateBound),e.scrollParents.forEach(function(t){t.removeEventListener("scroll",e.updateBound)}),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e))}function ce(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function he(n,i){Object.keys(i).forEach(function(t){var e="";-1!==["width","height","top","right","bottom","left"].indexOf(t)&&ce(i[t])&&(e="px"),n.style[t]=i[t]+e})}var ue=Tt&&/Firefox/i.test(navigator.userAgent);function fe(t,e,n){var i=ne(t,function(t){return t.name===e}),o=!!i&&t.some(function(t){return t.name===n&&t.enabled&&t.order<i.order});if(!o){var r="`"+e+"`",s="`"+n+"`";console.warn(s+" modifier is required by "+r+" modifier in order to work, be sure to include it before "+r+"!")}return o}var de=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],pe=de.slice(3);function me(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=pe.indexOf(t),i=pe.slice(n+1).concat(pe.slice(0,n));return e?i.reverse():i}var ge="flip",_e="clockwise",ve="counterclockwise";function ye(t,o,r,e){var s=[0,0],a=-1!==["right","left"].indexOf(e),n=t.split(/(\+|\-)/).map(function(t){return t.trim()}),i=n.indexOf(ne(n,function(t){return-1!==t.search(/,|\s/)}));n[i]&&-1===n[i].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l=/\s*,\s*|\s+/,c=-1!==i?[n.slice(0,i).concat([n[i].split(l)[0]]),[n[i].split(l)[1]].concat(n.slice(i+1))]:[n];return(c=c.map(function(t,e){var n=(1===e?!a:a)?"height":"width",i=!1;return t.reduce(function(t,e){return""===t[t.length-1]&&-1!==["+","-"].indexOf(e)?(t[t.length-1]=e,i=!0,t):i?(t[t.length-1]+=e,i=!1,t):t.concat(e)},[]).map(function(t){return function(t,e,n,i){var o=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+o[1],s=o[2];if(!r)return t;if(0!==s.indexOf("%"))return"vh"!==s&&"vw"!==s?r:("vh"===s?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*r;var a=void 0;switch(s){case"%p":a=n;break;case"%":case"%r":default:a=i}return Vt(a)[e]/100*r}(t,n,o,r)})})).forEach(function(n,i){n.forEach(function(t,e){ce(t)&&(s[i]+=t*("-"===n[e-1]?-1:1))})}),s}var Ee={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(t){var e=t.placement,n=e.split("-")[0],i=e.split("-")[1];if(i){var o=t.offsets,r=o.reference,s=o.popper,a=-1!==["bottom","top"].indexOf(n),l=a?"left":"top",c=a?"width":"height",h={start:Kt({},l,r[l]),end:Kt({},l,r[l]+r[c]-s[c])};t.offsets.popper=Qt({},s,h[i])}return t}},offset:{order:200,enabled:!0,fn:function(t,e){var n=e.offset,i=t.placement,o=t.offsets,r=o.popper,s=o.reference,a=i.split("-")[0],l=void 0;return l=ce(+n)?[+n,0]:ye(n,r,s,a),"left"===a?(r.top+=l[0],r.left-=l[1]):"right"===a?(r.top+=l[0],r.left+=l[1]):"top"===a?(r.left+=l[0],r.top-=l[1]):"bottom"===a&&(r.left+=l[0],r.top+=l[1]),t.popper=r,t},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(t,i){var e=i.boundariesElement||jt(t.instance.popper);t.instance.reference===e&&(e=jt(e));var n=re("transform"),o=t.instance.popper.style,r=o.top,s=o.left,a=o[n];o.top="",o.left="",o[n]="";var l=Gt(t.instance.popper,t.instance.reference,i.padding,e,t.positionFixed);o.top=r,o.left=s,o[n]=a,i.boundaries=l;var c=i.priority,h=t.offsets.popper,u={primary:function(t){var e=h[t];return h[t]<l[t]&&!i.escapeWithReference&&(e=Math.max(h[t],l[t])),Kt({},t,e)},secondary:function(t){var e="right"===t?"left":"top",n=h[e];return h[t]>l[t]&&!i.escapeWithReference&&(n=Math.min(h[e],l[t]-("right"===t?h.width:h.height))),Kt({},e,n)}};return c.forEach(function(t){var e=-1!==["left","top"].indexOf(t)?"primary":"secondary";h=Qt({},h,u[e](t))}),t.offsets.popper=h,t},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(t){var e=t.offsets,n=e.popper,i=e.reference,o=t.placement.split("-")[0],r=Math.floor,s=-1!==["top","bottom"].indexOf(o),a=s?"right":"bottom",l=s?"left":"top",c=s?"width":"height";return n[a]<r(i[l])&&(t.offsets.popper[l]=r(i[l])-n[c]),n[l]>r(i[a])&&(t.offsets.popper[l]=r(i[a])),t}},arrow:{order:500,enabled:!0,fn:function(t,e){var n;if(!fe(t.instance.modifiers,"arrow","keepTogether"))return t;var i=e.element;if("string"==typeof i){if(!(i=t.instance.popper.querySelector(i)))return t}else if(!t.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t;var o=t.placement.split("-")[0],r=t.offsets,s=r.popper,a=r.reference,l=-1!==["left","right"].indexOf(o),c=l?"height":"width",h=l?"Top":"Left",u=h.toLowerCase(),f=l?"left":"top",d=l?"bottom":"right",p=Zt(i)[c];a[d]-p<s[u]&&(t.offsets.popper[u]-=s[u]-(a[d]-p)),a[u]+p>s[d]&&(t.offsets.popper[u]+=a[u]+p-s[d]),t.offsets.popper=Vt(t.offsets.popper);var m=a[u]+a[c]/2-p/2,g=Nt(t.instance.popper),_=parseFloat(g["margin"+h],10),v=parseFloat(g["border"+h+"Width"],10),y=m-t.offsets.popper[u]-_-v;return y=Math.max(Math.min(s[c]-p,y),0),t.arrowElement=i,t.offsets.arrow=(Kt(n={},u,Math.round(y)),Kt(n,f,""),n),t},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(p,m){if(oe(p.instance.modifiers,"inner"))return p;if(p.flipped&&p.placement===p.originalPlacement)return p;var g=Gt(p.instance.popper,p.instance.reference,m.padding,m.boundariesElement,p.positionFixed),_=p.placement.split("-")[0],v=te(_),y=p.placement.split("-")[1]||"",E=[];switch(m.behavior){case ge:E=[_,v];break;case _e:E=me(_);break;case ve:E=me(_,!0);break;default:E=m.behavior}return E.forEach(function(t,e){if(_!==t||E.length===e+1)return p;_=p.placement.split("-")[0],v=te(_);var n,i=p.offsets.popper,o=p.offsets.reference,r=Math.floor,s="left"===_&&r(i.right)>r(o.left)||"right"===_&&r(i.left)<r(o.right)||"top"===_&&r(i.bottom)>r(o.top)||"bottom"===_&&r(i.top)<r(o.bottom),a=r(i.left)<r(g.left),l=r(i.right)>r(g.right),c=r(i.top)<r(g.top),h=r(i.bottom)>r(g.bottom),u="left"===_&&a||"right"===_&&l||"top"===_&&c||"bottom"===_&&h,f=-1!==["top","bottom"].indexOf(_),d=!!m.flipVariations&&(f&&"start"===y&&a||f&&"end"===y&&l||!f&&"start"===y&&c||!f&&"end"===y&&h);(s||u||d)&&(p.flipped=!0,(s||u)&&(_=E[e+1]),d&&(y="end"===(n=y)?"start":"start"===n?"end":n),p.placement=_+(y?"-"+y:""),p.offsets.popper=Qt({},p.offsets.popper,ee(p.instance.popper,p.offsets.reference,p.placement)),p=ie(p.instance.modifiers,p,"flip"))}),p},behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:function(t){var e=t.placement,n=e.split("-")[0],i=t.offsets,o=i.popper,r=i.reference,s=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n);return o[s?"left":"top"]=r[n]-(a?o[s?"width":"height"]:0),t.placement=te(e),t.offsets.popper=Vt(o),t}},hide:{order:800,enabled:!0,fn:function(t){if(!fe(t.instance.modifiers,"hide","preventOverflow"))return t;var e=t.offsets.reference,n=ne(t.instance.modifiers,function(t){return"preventOverflow"===t.name}).boundaries;if(e.bottom<n.top||e.left>n.right||e.top>n.bottom||e.right<n.left){if(!0===t.hide)return t;t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t;t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}},computeStyle:{order:850,enabled:!0,fn:function(t,e){var n=e.x,i=e.y,o=t.offsets.popper,r=ne(t.instance.modifiers,function(t){return"applyStyle"===t.name}).gpuAcceleration;void 0!==r&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s,a,l,c,h,u,f,d,p,m,g,_,v,y,E=void 0!==r?r:e.gpuAcceleration,b=jt(t.instance.popper),w=Yt(b),C={position:o.position},T=(s=t,a=window.devicePixelRatio<2||!ue,l=s.offsets,c=l.popper,h=l.reference,u=Math.round,f=Math.floor,d=function(t){return t},p=u(h.width),m=u(c.width),g=-1!==["left","right"].indexOf(s.placement),_=-1!==s.placement.indexOf("-"),y=a?u:d,{left:(v=a?g||_||p%2==m%2?u:f:d)(p%2==1&&m%2==1&&!_&&a?c.left-1:c.left),top:y(c.top),bottom:y(c.bottom),right:v(c.right)}),S="bottom"===n?"top":"bottom",D="right"===i?"left":"right",I=re("transform"),A=void 0,O=void 0;if(O="bottom"===S?"HTML"===b.nodeName?-b.clientHeight+T.bottom:-w.height+T.bottom:T.top,A="right"===D?"HTML"===b.nodeName?-b.clientWidth+T.right:-w.width+T.right:T.left,E&&I)C[I]="translate3d("+A+"px, "+O+"px, 0)",C[S]=0,C[D]=0,C.willChange="transform";else{var N="bottom"===S?-1:1,k="right"===D?-1:1;C[S]=O*N,C[D]=A*k,C.willChange=S+", "+D}var L={"x-placement":t.placement};return t.attributes=Qt({},L,t.attributes),t.styles=Qt({},C,t.styles),t.arrowStyles=Qt({},t.offsets.arrow,t.arrowStyles),t},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(t){var e,n;return he(t.instance.popper,t.styles),e=t.instance.popper,n=t.attributes,Object.keys(n).forEach(function(t){!1!==n[t]?e.setAttribute(t,n[t]):e.removeAttribute(t)}),t.arrowElement&&Object.keys(t.arrowStyles).length&&he(t.arrowElement,t.arrowStyles),t},onLoad:function(t,e,n,i,o){var r=Jt(o,e,t,n.positionFixed),s=$t(n.placement,r,e,t,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return e.setAttribute("x-placement",s),he(e,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},be=function(){function r(t,e){var n=this,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=At(this.update.bind(this)),this.options=Qt({},r.Defaults,i),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=e&&e.jquery?e[0]:e,this.options.modifiers={},Object.keys(Qt({},r.Defaults.modifiers,i.modifiers)).forEach(function(t){n.options.modifiers[t]=Qt({},r.Defaults.modifiers[t]||{},i.modifiers?i.modifiers[t]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(t){return Qt({name:t},n.options.modifiers[t])}).sort(function(t,e){return t.order-e.order}),this.modifiers.forEach(function(t){t.enabled&&Ot(t.onLoad)&&t.onLoad(n.reference,n.popper,n.options,t,n.state)}),this.update();var o=this.options.eventsEnabled;o&&this.enableEventListeners(),this.state.eventsEnabled=o}return qt(r,[{key:"update",value:function(){return function(){if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};t.offsets.reference=Jt(this.state,this.popper,this.reference,this.options.positionFixed),t.placement=$t(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.positionFixed=this.options.positionFixed,t.offsets.popper=ee(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",t=ie(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}.call(this)}},{key:"destroy",value:function(){return function(){return this.state.isDestroyed=!0,oe(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[re("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}},{key:"enableEventListeners",value:function(){return function(){this.state.eventsEnabled||(this.state=ae(this.reference,this.options,this.state,this.scheduleUpdate))}.call(this)}},{key:"disableEventListeners",value:function(){return le.call(this)}}]),r}();be.Utils=("undefined"!=typeof window?window:global).PopperUtils,be.placements=de,be.Defaults=Ee;var we="dropdown",Ce="bs.dropdown",Te="."+Ce,Se=".data-api",De=p.fn[we],Ie=new RegExp("38|40|27"),Ae={HIDE:"hide"+Te,HIDDEN:"hidden"+Te,SHOW:"show"+Te,SHOWN:"shown"+Te,CLICK:"click"+Te,CLICK_DATA_API:"click"+Te+Se,KEYDOWN_DATA_API:"keydown"+Te+Se,KEYUP_DATA_API:"keyup"+Te+Se},Oe="disabled",Ne="show",ke="dropup",Le="dropright",xe="dropleft",Pe="dropdown-menu-right",He="position-static",je='[data-toggle="dropdown"]',Re=".dropdown form",Fe=".dropdown-menu",Me=".navbar-nav",We=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Ue="top-start",Be="top-end",qe="bottom-start",Ke="bottom-end",Qe="right-start",Ve="left-start",Ye={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},ze={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},Xe=function(){function c(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=c.prototype;return t.toggle=function(){if(!this._element.disabled&&!p(this._element).hasClass(Oe)){var t=c._getParentFromElement(this._element),e=p(this._menu).hasClass(Ne);if(c._clearMenus(),!e){var n={relatedTarget:this._element},i=p.Event(Ae.SHOW,n);if(p(t).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof be)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var o=this._element;"parent"===this._config.reference?o=t:m.isElement(this._config.reference)&&(o=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(o=this._config.reference[0])),"scrollParent"!==this._config.boundary&&p(t).addClass(He),this._popper=new be(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===p(t).closest(Me).length&&p(document.body).children().on("mouseover",null,p.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),p(this._menu).toggleClass(Ne),p(t).toggleClass(Ne).trigger(p.Event(Ae.SHOWN,n))}}}},t.show=function(){if(!(this._element.disabled||p(this._element).hasClass(Oe)||p(this._menu).hasClass(Ne))){var t={relatedTarget:this._element},e=p.Event(Ae.SHOW,t),n=c._getParentFromElement(this._element);p(n).trigger(e),e.isDefaultPrevented()||(p(this._menu).toggleClass(Ne),p(n).toggleClass(Ne).trigger(p.Event(Ae.SHOWN,t)))}},t.hide=function(){if(!this._element.disabled&&!p(this._element).hasClass(Oe)&&p(this._menu).hasClass(Ne)){var t={relatedTarget:this._element},e=p.Event(Ae.HIDE,t),n=c._getParentFromElement(this._element);p(n).trigger(e),e.isDefaultPrevented()||(p(this._menu).toggleClass(Ne),p(n).toggleClass(Ne).trigger(p.Event(Ae.HIDDEN,t)))}},t.dispose=function(){p.removeData(this._element,Ce),p(this._element).off(Te),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;p(this._element).on(Ae.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=l({},this.constructor.Default,p(this._element).data(),t),m.typeCheckConfig(we,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=c._getParentFromElement(this._element);t&&(this._menu=t.querySelector(Fe))}return this._menu},t._getPlacement=function(){var t=p(this._element.parentNode),e=qe;return t.hasClass(ke)?(e=Ue,p(this._menu).hasClass(Pe)&&(e=Be)):t.hasClass(Le)?e=Qe:t.hasClass(xe)?e=Ve:p(this._menu).hasClass(Pe)&&(e=Ke),e},t._detectNavbar=function(){return 0<p(this._element).closest(".navbar").length},t._getOffset=function(){var e=this,t={};return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e._config.offset(t.offsets,e._element)||{}),t}:t.offset=this._config.offset,t},t._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),t},c._jQueryInterface=function(e){return this.each(function(){var t=p(this).data(Ce);if(t||(t=new c(this,"object"==typeof e?e:null),p(this).data(Ce,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},c._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=[].slice.call(document.querySelectorAll(je)),n=0,i=e.length;n<i;n++){var o=c._getParentFromElement(e[n]),r=p(e[n]).data(Ce),s={relatedTarget:e[n]};if(t&&"click"===t.type&&(s.clickEvent=t),r){var a=r._menu;if(p(o).hasClass(Ne)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&p.contains(o,t.target))){var l=p.Event(Ae.HIDE,s);p(o).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&p(document.body).children().off("mouseover",null,p.noop),e[n].setAttribute("aria-expanded","false"),p(a).removeClass(Ne),p(o).removeClass(Ne).trigger(p.Event(Ae.HIDDEN,s)))}}}},c._getParentFromElement=function(t){var e,n=m.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},c._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||p(t.target).closest(Fe).length)):Ie.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!p(this).hasClass(Oe))){var e=c._getParentFromElement(this),n=p(e).hasClass(Ne);if(n&&(!n||27!==t.which&&32!==t.which)){var i=[].slice.call(e.querySelectorAll(We));if(0!==i.length){var o=i.indexOf(t.target);38===t.which&&0<o&&o--,40===t.which&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}}else{if(27===t.which){var r=e.querySelector(je);p(r).trigger("focus")}p(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Ye}},{key:"DefaultType",get:function(){return ze}}]),c}();p(document).on(Ae.KEYDOWN_DATA_API,je,Xe._dataApiKeydownHandler).on(Ae.KEYDOWN_DATA_API,Fe,Xe._dataApiKeydownHandler).on(Ae.CLICK_DATA_API+" "+Ae.KEYUP_DATA_API,Xe._clearMenus).on(Ae.CLICK_DATA_API,je,function(t){t.preventDefault(),t.stopPropagation(),Xe._jQueryInterface.call(p(this),"toggle")}).on(Ae.CLICK_DATA_API,Re,function(t){t.stopPropagation()}),p.fn[we]=Xe._jQueryInterface,p.fn[we].Constructor=Xe,p.fn[we].noConflict=function(){return p.fn[we]=De,Xe._jQueryInterface};var Ge="modal",$e="bs.modal",Je="."+$e,Ze=p.fn[Ge],tn={backdrop:!0,keyboard:!0,focus:!0,show:!0},en={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},nn={HIDE:"hide"+Je,HIDDEN:"hidden"+Je,SHOW:"show"+Je,SHOWN:"shown"+Je,FOCUSIN:"focusin"+Je,RESIZE:"resize"+Je,CLICK_DISMISS:"click.dismiss"+Je,KEYDOWN_DISMISS:"keydown.dismiss"+Je,MOUSEUP_DISMISS:"mouseup.dismiss"+Je,MOUSEDOWN_DISMISS:"mousedown.dismiss"+Je,CLICK_DATA_API:"click"+Je+".data-api"},on="modal-dialog-scrollable",rn="modal-scrollbar-measure",sn="modal-backdrop",an="modal-open",ln="fade",cn="show",hn=".modal-dialog",un=".modal-body",fn='[data-toggle="modal"]',dn='[data-dismiss="modal"]',pn=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",mn=".sticky-top",gn=function(){function o(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(hn),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var t=o.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isShown&&!this._isTransitioning){p(this._element).hasClass(ln)&&(this._isTransitioning=!0);var n=p.Event(nn.SHOW,{relatedTarget:t});p(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),p(this._element).on(nn.CLICK_DISMISS,dn,function(t){return e.hide(t)}),p(this._dialog).on(nn.MOUSEDOWN_DISMISS,function(){p(e._element).one(nn.MOUSEUP_DISMISS,function(t){p(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var n=p.Event(nn.HIDE);if(p(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=p(this._element).hasClass(ln);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),p(document).off(nn.FOCUSIN),p(this._element).removeClass(cn),p(this._element).off(nn.CLICK_DISMISS),p(this._dialog).off(nn.MOUSEDOWN_DISMISS),i){var o=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(o)}else this._hideModal()}}},t.dispose=function(){[window,this._element,this._dialog].forEach(function(t){return p(t).off(Je)}),p(document).off(nn.FOCUSIN),p.removeData(this._element,$e),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=l({},tn,t),m.typeCheckConfig(Ge,t,en),t},t._showElement=function(t){var e=this,n=p(this._element).hasClass(ln);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),p(this._dialog).hasClass(on)?this._dialog.querySelector(un).scrollTop=0:this._element.scrollTop=0,n&&m.reflow(this._element),p(this._element).addClass(cn),this._config.focus&&this._enforceFocus();var i=p.Event(nn.SHOWN,{relatedTarget:t}),o=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,p(e._element).trigger(i)};if(n){var r=m.getTransitionDurationFromElement(this._dialog);p(this._dialog).one(m.TRANSITION_END,o).emulateTransitionEnd(r)}else o()},t._enforceFocus=function(){var e=this;p(document).off(nn.FOCUSIN).on(nn.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===p(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?p(this._element).on(nn.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||p(this._element).off(nn.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?p(window).on(nn.RESIZE,function(t){return e.handleUpdate(t)}):p(window).off(nn.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){p(document.body).removeClass(an),t._resetAdjustments(),t._resetScrollbar(),p(t._element).trigger(nn.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&(p(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=p(this._element).hasClass(ln)?ln:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=sn,n&&this._backdrop.classList.add(n),p(this._backdrop).appendTo(document.body),p(this._element).on(nn.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),n&&m.reflow(this._backdrop),p(this._backdrop).addClass(cn),!t)return;if(!n)return void t();var i=m.getTransitionDurationFromElement(this._backdrop);p(this._backdrop).one(m.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){p(this._backdrop).removeClass(cn);var o=function(){e._removeBackdrop(),t&&t()};if(p(this._element).hasClass(ln)){var r=m.getTransitionDurationFromElement(this._backdrop);p(this._backdrop).one(m.TRANSITION_END,o).emulateTransitionEnd(r)}else o()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var o=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(pn)),e=[].slice.call(document.querySelectorAll(mn));p(t).each(function(t,e){var n=e.style.paddingRight,i=p(e).css("padding-right");p(e).data("padding-right",n).css("padding-right",parseFloat(i)+o._scrollbarWidth+"px")}),p(e).each(function(t,e){var n=e.style.marginRight,i=p(e).css("margin-right");p(e).data("margin-right",n).css("margin-right",parseFloat(i)-o._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=p(document.body).css("padding-right");p(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}p(document.body).addClass(an)},t._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(pn));p(t).each(function(t,e){var n=p(e).data("padding-right");p(e).removeData("padding-right"),e.style.paddingRight=n||""});var e=[].slice.call(document.querySelectorAll(""+mn));p(e).each(function(t,e){var n=p(e).data("margin-right");"undefined"!=typeof n&&p(e).css("margin-right",n).removeData("margin-right")});var n=p(document.body).data("padding-right");p(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=rn,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(n,i){return this.each(function(){var t=p(this).data($e),e=l({},tn,p(this).data(),"object"==typeof n&&n?n:{});if(t||(t=new o(this,e),p(this).data($e,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return tn}}]),o}();p(document).on(nn.CLICK_DATA_API,fn,function(t){var e,n=this,i=m.getSelectorFromElement(this);i&&(e=document.querySelector(i));var o=p(e).data($e)?"toggle":l({},p(e).data(),p(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=p(e).one(nn.SHOW,function(t){t.isDefaultPrevented()||r.one(nn.HIDDEN,function(){p(n).is(":visible")&&n.focus()})});gn._jQueryInterface.call(p(e),o,this)}),p.fn[Ge]=gn._jQueryInterface,p.fn[Ge].Constructor=gn,p.fn[Ge].noConflict=function(){return p.fn[Ge]=Ze,gn._jQueryInterface};var _n=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],vn={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},yn=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,En=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function bn(t,s,e){if(0===t.length)return t;if(e&&"function"==typeof e)return e(t);for(var n=(new window.DOMParser).parseFromString(t,"text/html"),a=Object.keys(s),l=[].slice.call(n.body.querySelectorAll("*")),i=function(t,e){var n=l[t],i=n.nodeName.toLowerCase();if(-1===a.indexOf(n.nodeName.toLowerCase()))return n.parentNode.removeChild(n),"continue";var o=[].slice.call(n.attributes),r=[].concat(s["*"]||[],s[i]||[]);o.forEach(function(t){(function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===_n.indexOf(n)||Boolean(t.nodeValue.match(yn)||t.nodeValue.match(En));for(var i=e.filter(function(t){return t instanceof RegExp}),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return!0;return!1})(t,r)||n.removeAttribute(t.nodeName)})},o=0,r=l.length;o<r;o++)i(o);return n.body.innerHTML}var wn="tooltip",Cn="bs.tooltip",Tn="."+Cn,Sn=p.fn[wn],Dn="bs-tooltip",In=new RegExp("(^|\\s)"+Dn+"\\S+","g"),An=["sanitize","whiteList","sanitizeFn"],On={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object"},Nn={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},kn={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:vn},Ln="show",xn="out",Pn={HIDE:"hide"+Tn,HIDDEN:"hidden"+Tn,SHOW:"show"+Tn,SHOWN:"shown"+Tn,INSERTED:"inserted"+Tn,CLICK:"click"+Tn,FOCUSIN:"focusin"+Tn,FOCUSOUT:"focusout"+Tn,MOUSEENTER:"mouseenter"+Tn,MOUSELEAVE:"mouseleave"+Tn},Hn="fade",jn="show",Rn=".tooltip-inner",Fn=".arrow",Mn="hover",Wn="focus",Un="click",Bn="manual",qn=function(){function i(t,e){if("undefined"==typeof be)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=p(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),p(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(p(this.getTipElement()).hasClass(jn))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),p.removeData(this.element,this.constructor.DATA_KEY),p(this.element).off(this.constructor.EVENT_KEY),p(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&p(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===p(this.element).css("display"))throw new Error("Please use show on visible elements");var t=p.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){p(this.element).trigger(t);var n=m.findShadowRoot(this.element),i=p.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!i)return;var o=this.getTipElement(),r=m.getUID(this.constructor.NAME);o.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&p(o).addClass(Hn);var s="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,a=this._getAttachment(s);this.addAttachmentClass(a);var l=this._getContainer();p(o).data(this.constructor.DATA_KEY,this),p.contains(this.element.ownerDocument.documentElement,this.tip)||p(o).appendTo(l),p(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new be(this.element,o,{placement:a,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:Fn},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}}),p(o).addClass(jn),"ontouchstart"in document.documentElement&&p(document.body).children().on("mouseover",null,p.noop);var c=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,p(e.element).trigger(e.constructor.Event.SHOWN),t===xn&&e._leave(null,e)};if(p(this.tip).hasClass(Hn)){var h=m.getTransitionDurationFromElement(this.tip);p(this.tip).one(m.TRANSITION_END,c).emulateTransitionEnd(h)}else c()}},t.hide=function(t){var e=this,n=this.getTipElement(),i=p.Event(this.constructor.Event.HIDE),o=function(){e._hoverState!==Ln&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),p(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(p(this.element).trigger(i),!i.isDefaultPrevented()){if(p(n).removeClass(jn),"ontouchstart"in document.documentElement&&p(document.body).children().off("mouseover",null,p.noop),this._activeTrigger[Un]=!1,this._activeTrigger[Wn]=!1,this._activeTrigger[Mn]=!1,p(this.tip).hasClass(Hn)){var r=m.getTransitionDurationFromElement(n);p(n).one(m.TRANSITION_END,o).emulateTransitionEnd(r)}else o();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){p(this.getTipElement()).addClass(Dn+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||p(this.config.template)[0],this.tip},t.setContent=function(){var t=this.getTipElement();this.setElementContent(p(t.querySelectorAll(Rn)),this.getTitle()),p(t).removeClass(Hn+" "+jn)},t.setElementContent=function(t,e){"object"!=typeof e||!e.nodeType&&!e.jquery?this.config.html?(this.config.sanitize&&(e=bn(e,this.config.whiteList,this.config.sanitizeFn)),t.html(e)):t.text(e):this.config.html?p(e).parent().is(t)||t.empty().append(e):t.text(p(e).text())},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},t._getOffset=function(){var e=this,t={};return"function"==typeof this.config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e.config.offset(t.offsets,e.element)||{}),t}:t.offset=this.config.offset,t},t._getContainer=function(){return!1===this.config.container?document.body:m.isElement(this.config.container)?p(this.config.container):p(document).find(this.config.container)},t._getAttachment=function(t){return Nn[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)p(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==Bn){var e=t===Mn?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===Mn?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;p(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}}),p(this.element).closest(".modal").on("hide.bs.modal",function(){i.element&&i.hide()}),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||p(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),p(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Wn:Mn]=!0),p(e.getTipElement()).hasClass(jn)||e._hoverState===Ln?e._hoverState=Ln:(clearTimeout(e._timeout),e._hoverState=Ln,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===Ln&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||p(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),p(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Wn:Mn]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=xn,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===xn&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){var e=p(this.element).data();return Object.keys(e).forEach(function(t){-1!==An.indexOf(t)&&delete e[t]}),"number"==typeof(t=l({},this.constructor.Default,e,"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),m.typeCheckConfig(wn,t,this.constructor.DefaultType),t.sanitize&&(t.template=bn(t.template,t.whiteList,t.sanitizeFn)),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=p(this.getTipElement()),e=t.attr("class").match(In);null!==e&&e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(p(t).removeClass(Hn),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=p(this).data(Cn),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),p(this).data(Cn,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return kn}},{key:"NAME",get:function(){return wn}},{key:"DATA_KEY",get:function(){return Cn}},{key:"Event",get:function(){return Pn}},{key:"EVENT_KEY",get:function(){return Tn}},{key:"DefaultType",get:function(){return On}}]),i}();p.fn[wn]=qn._jQueryInterface,p.fn[wn].Constructor=qn,p.fn[wn].noConflict=function(){return p.fn[wn]=Sn,qn._jQueryInterface};var Kn="popover",Qn="bs.popover",Vn="."+Qn,Yn=p.fn[Kn],zn="bs-popover",Xn=new RegExp("(^|\\s)"+zn+"\\S+","g"),Gn=l({},qn.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),$n=l({},qn.DefaultType,{content:"(string|element|function)"}),Jn="fade",Zn="show",ti=".popover-header",ei=".popover-body",ni={HIDE:"hide"+Vn,HIDDEN:"hidden"+Vn,SHOW:"show"+Vn,SHOWN:"shown"+Vn,INSERTED:"inserted"+Vn,CLICK:"click"+Vn,FOCUSIN:"focusin"+Vn,FOCUSOUT:"focusout"+Vn,MOUSEENTER:"mouseenter"+Vn,MOUSELEAVE:"mouseleave"+Vn},ii=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n;var o=i.prototype;return o.isWithContent=function(){return this.getTitle()||this._getContent()},o.addAttachmentClass=function(t){p(this.getTipElement()).addClass(zn+"-"+t)},o.getTipElement=function(){return this.tip=this.tip||p(this.config.template)[0],this.tip},o.setContent=function(){var t=p(this.getTipElement());this.setElementContent(t.find(ti),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(ei),e),t.removeClass(Jn+" "+Zn)},o._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},o._cleanTipClass=function(){var t=p(this.getTipElement()),e=t.attr("class").match(Xn);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=p(this).data(Qn),e="object"==typeof n?n:null;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),p(this).data(Qn,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Gn}},{key:"NAME",get:function(){return Kn}},{key:"DATA_KEY",get:function(){return Qn}},{key:"Event",get:function(){return ni}},{key:"EVENT_KEY",get:function(){return Vn}},{key:"DefaultType",get:function(){return $n}}]),i}(qn);p.fn[Kn]=ii._jQueryInterface,p.fn[Kn].Constructor=ii,p.fn[Kn].noConflict=function(){return p.fn[Kn]=Yn,ii._jQueryInterface};var oi="scrollspy",ri="bs.scrollspy",si="."+ri,ai=p.fn[oi],li={offset:10,method:"auto",target:""},ci={offset:"number",method:"string",target:"(string|element)"},hi={ACTIVATE:"activate"+si,SCROLL:"scroll"+si,LOAD_DATA_API:"load"+si+".data-api"},ui="dropdown-item",fi="active",di='[data-spy="scroll"]',pi=".nav, .list-group",mi=".nav-link",gi=".nav-item",_i=".list-group-item",vi=".dropdown",yi=".dropdown-item",Ei=".dropdown-toggle",bi="offset",wi="position",Ci=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+mi+","+this._config.target+" "+_i+","+this._config.target+" "+yi,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,p(this._scrollElement).on(hi.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?bi:wi,o="auto"===this._config.method?t:this._config.method,r=o===wi?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,n=m.getSelectorFromElement(t);if(n&&(e=document.querySelector(n)),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[p(e)[o]().top+r,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){p.removeData(this._element,ri),p(this._scrollElement).off(si),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=l({},li,"object"==typeof t&&t?t:{})).target){var e=p(t.target).attr("id");e||(e=m.getUID(oi),p(t.target).attr("id",e)),t.target="#"+e}return m.typeCheckConfig(oi,t,ci),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",").map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'}),n=p([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(ui)?(n.closest(vi).find(Ei).addClass(fi),n.addClass(fi)):(n.addClass(fi),n.parents(pi).prev(mi+", "+_i).addClass(fi),n.parents(pi).prev(gi).children(mi).addClass(fi)),p(this._scrollElement).trigger(hi.ACTIVATE,{relatedTarget:e})},t._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(t){return t.classList.contains(fi)}).forEach(function(t){return t.classList.remove(fi)})},n._jQueryInterface=function(e){return this.each(function(){var t=p(this).data(ri);if(t||(t=new n(this,"object"==typeof e&&e),p(this).data(ri,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return li}}]),n}();p(window).on(hi.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(di)),e=t.length;e--;){var n=p(t[e]);Ci._jQueryInterface.call(n,n.data())}}),p.fn[oi]=Ci._jQueryInterface,p.fn[oi].Constructor=Ci,p.fn[oi].noConflict=function(){return p.fn[oi]=ai,Ci._jQueryInterface};var Ti="bs.tab",Si="."+Ti,Di=p.fn.tab,Ii={HIDE:"hide"+Si,HIDDEN:"hidden"+Si,SHOW:"show"+Si,SHOWN:"shown"+Si,CLICK_DATA_API:"click"+Si+".data-api"},Ai="dropdown-menu",Oi="active",Ni="disabled",ki="fade",Li="show",xi=".dropdown",Pi=".nav, .list-group",Hi=".active",ji="> li > .active",Ri='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',Fi=".dropdown-toggle",Mi="> .dropdown-menu .active",Wi=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&p(this._element).hasClass(Oi)||p(this._element).hasClass(Ni))){var t,i,e=p(this._element).closest(Pi)[0],o=m.getSelectorFromElement(this._element);if(e){var r="UL"===e.nodeName||"OL"===e.nodeName?ji:Hi;i=(i=p.makeArray(p(e).find(r)))[i.length-1]}var s=p.Event(Ii.HIDE,{relatedTarget:this._element}),a=p.Event(Ii.SHOW,{relatedTarget:i});if(i&&p(i).trigger(s),p(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){o&&(t=document.querySelector(o)),this._activate(this._element,e);var l=function(){var t=p.Event(Ii.HIDDEN,{relatedTarget:n._element}),e=p.Event(Ii.SHOWN,{relatedTarget:i});p(i).trigger(t),p(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){p.removeData(this._element,Ti),this._element=null},t._activate=function(t,e,n){var i=this,o=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?p(e).children(Hi):p(e).find(ji))[0],r=n&&o&&p(o).hasClass(ki),s=function(){return i._transitionComplete(t,o,n)};if(o&&r){var a=m.getTransitionDurationFromElement(o);p(o).removeClass(Li).one(m.TRANSITION_END,s).emulateTransitionEnd(a)}else s()},t._transitionComplete=function(t,e,n){if(e){p(e).removeClass(Oi);var i=p(e.parentNode).find(Mi)[0];i&&p(i).removeClass(Oi),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(p(t).addClass(Oi),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),m.reflow(t),t.classList.contains(ki)&&t.classList.add(Li),t.parentNode&&p(t.parentNode).hasClass(Ai)){var o=p(t).closest(xi)[0];if(o){var r=[].slice.call(o.querySelectorAll(Fi));p(r).addClass(Oi)}t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=p(this),e=t.data(Ti);if(e||(e=new i(this),t.data(Ti,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();p(document).on(Ii.CLICK_DATA_API,Ri,function(t){t.preventDefault(),Wi._jQueryInterface.call(p(this),"show")}),p.fn.tab=Wi._jQueryInterface,p.fn.tab.Constructor=Wi,p.fn.tab.noConflict=function(){return p.fn.tab=Di,Wi._jQueryInterface};var Ui="toast",Bi="bs.toast",qi="."+Bi,Ki=p.fn[Ui],Qi={CLICK_DISMISS:"click.dismiss"+qi,HIDE:"hide"+qi,HIDDEN:"hidden"+qi,SHOW:"show"+qi,SHOWN:"shown"+qi},Vi="fade",Yi="hide",zi="show",Xi="showing",Gi={animation:"boolean",autohide:"boolean",delay:"number"},$i={animation:!0,autohide:!0,delay:500},Ji='[data-dismiss="toast"]',Zi=function(){function i(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var t=i.prototype;return t.show=function(){var t=this;p(this._element).trigger(Qi.SHOW),this._config.animation&&this._element.classList.add(Vi);var e=function(){t._element.classList.remove(Xi),t._element.classList.add(zi),p(t._element).trigger(Qi.SHOWN),t._config.autohide&&t.hide()};if(this._element.classList.remove(Yi),this._element.classList.add(Xi),this._config.animation){var n=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},t.hide=function(t){var e=this;this._element.classList.contains(zi)&&(p(this._element).trigger(Qi.HIDE),t?this._close():this._timeout=setTimeout(function(){e._close()},this._config.delay))},t.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(zi)&&this._element.classList.remove(zi),p(this._element).off(Qi.CLICK_DISMISS),p.removeData(this._element,Bi),this._element=null,this._config=null},t._getConfig=function(t){return t=l({},$i,p(this._element).data(),"object"==typeof t&&t?t:{}),m.typeCheckConfig(Ui,t,this.constructor.DefaultType),t},t._setListeners=function(){var t=this;p(this._element).on(Qi.CLICK_DISMISS,Ji,function(){return t.hide(!0)})},t._close=function(){var t=this,e=function(){t._element.classList.add(Yi),p(t._element).trigger(Qi.HIDDEN)};if(this._element.classList.remove(zi),this._config.animation){var n=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},i._jQueryInterface=function(n){return this.each(function(){var t=p(this),e=t.data(Bi);if(e||(e=new i(this,"object"==typeof n&&n),t.data(Bi,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n](this)}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"DefaultType",get:function(){return Gi}},{key:"Default",get:function(){return $i}}]),i}();p.fn[Ui]=Zi._jQueryInterface,p.fn[Ui].Constructor=Zi,p.fn[Ui].noConflict=function(){return p.fn[Ui]=Ki,Zi._jQueryInterface},function(){if("undefined"==typeof p)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=p.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||4<=t[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(),t.Util=m,t.Alert=g,t.Button=k,t.Carousel=at,t.Collapse=Ct,t.Dropdown=Xe,t.Modal=gn,t.Popover=ii,t.Scrollspy=Ci,t.Tab=Wi,t.Toast=Zi,t.Tooltip=qn,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.bundle.min.js.map

/*!
 * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2016 Edson Hilios
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";function b(a){if(a instanceof Date)return a;if(String(a).match(g))return String(a).match(/^[0-9]*$/)&&(a=Number(a)),String(a).match(/\-/)&&(a=String(a).replace(/\-/g,"/")),new Date(a);throw new Error("Couldn't cast `"+a+"` to a date object.")}function c(a){var b=a.toString().replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1");return new RegExp(b)}function d(a){return function(b){var d=b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);if(d)for(var f=0,g=d.length;f<g;++f){var h=d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),j=c(h[0]),k=h[1]||"",l=h[3]||"",m=null;h=h[2],i.hasOwnProperty(h)&&(m=i[h],m=Number(a[m])),null!==m&&("!"===k&&(m=e(l,m)),""===k&&m<10&&(m="0"+m.toString()),b=b.replace(j,m.toString()))}return b=b.replace(/%%/,"%")}}function e(a,b){var c="s",d="";return a&&(a=a.replace(/(:|;|\s)/gi,"").split(/\,/),1===a.length?c=a[0]:(d=a[0],c=a[1])),Math.abs(b)>1?c:d}var f=[],g=[],h={precision:100,elapse:!1,defer:!1};g.push(/^[0-9]*$/.source),g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g=new RegExp(g.join("|"));var i={Y:"years",m:"months",n:"daysToMonth",d:"daysToWeek",w:"weeks",W:"weeksToMonth",H:"hours",M:"minutes",S:"seconds",D:"totalDays",I:"totalHours",N:"totalMinutes",T:"totalSeconds"},j=function(b,c,d){this.el=b,this.$el=a(b),this.interval=null,this.offset={},this.options=a.extend({},h),this.instanceNumber=f.length,f.push(this),this.$el.data("countdown-instance",this.instanceNumber),d&&("function"==typeof d?(this.$el.on("update.countdown",d),this.$el.on("stoped.countdown",d),this.$el.on("finish.countdown",d)):this.options=a.extend({},h,d)),this.setFinalDate(c),this.options.defer===!1&&this.start()};a.extend(j.prototype,{start:function(){null!==this.interval&&clearInterval(this.interval);var a=this;this.update(),this.interval=setInterval(function(){a.update.call(a)},this.options.precision)},stop:function(){clearInterval(this.interval),this.interval=null,this.dispatchEvent("stoped")},toggle:function(){this.interval?this.stop():this.start()},pause:function(){this.stop()},resume:function(){this.start()},remove:function(){this.stop.call(this),f[this.instanceNumber]=null,delete this.$el.data().countdownInstance},setFinalDate:function(a){this.finalDate=b(a)},update:function(){if(0===this.$el.closest("html").length)return void this.remove();var b,c=void 0!==a._data(this.el,"events"),d=new Date;b=this.finalDate.getTime()-d.getTime(),b=Math.ceil(b/1e3),b=!this.options.elapse&&b<0?0:Math.abs(b),this.totalSecsLeft!==b&&c&&(this.totalSecsLeft=b,this.elapsed=d>=this.finalDate,this.offset={seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToWeek:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToMonth:Math.floor(this.totalSecsLeft/60/60/24%30.4368),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),weeksToMonth:Math.floor(this.totalSecsLeft/60/60/24/7)%4,months:Math.floor(this.totalSecsLeft/60/60/24/30.4368),years:Math.abs(this.finalDate.getFullYear()-d.getFullYear()),totalDays:Math.floor(this.totalSecsLeft/60/60/24),totalHours:Math.floor(this.totalSecsLeft/60/60),totalMinutes:Math.floor(this.totalSecsLeft/60),totalSeconds:this.totalSecsLeft},this.options.elapse||0!==this.totalSecsLeft?this.dispatchEvent("update"):(this.stop(),this.dispatchEvent("finish")))},dispatchEvent:function(b){var c=a.Event(b+".countdown");c.finalDate=this.finalDate,c.elapsed=this.elapsed,c.offset=a.extend({},this.offset),c.strftime=d(this.offset),this.$el.trigger(c)}}),a.fn.countdown=function(){var b=Array.prototype.slice.call(arguments,0);return this.each(function(){var c=a(this).data("countdown-instance");if(void 0!==c){var d=f[c],e=b[0];j.prototype.hasOwnProperty(e)?d[e].apply(d,b.slice(1)):null===String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i)?(d.setFinalDate.call(d,e),d.start()):a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi,e))}else new j(this,b[0],b[1])})}});


/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.12
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Typed"] = factory();
	else
		root["Typed"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _initializerJs = __webpack_require__(1);
	
	var _htmlParserJs = __webpack_require__(3);
	
	/**
	 * Welcome to Typed.js!
	 * @param {string} elementId HTML element ID _OR_ HTML element
	 * @param {object} options options object
	 * @returns {object} a new Typed object
	 */
	
	var Typed = (function () {
	  function Typed(elementId, options) {
	    _classCallCheck(this, Typed);
	
	    // Initialize it up
	    _initializerJs.initializer.load(this, options, elementId);
	    // All systems go!
	    this.begin();
	  }
	
	  /**
	   * Toggle start() and stop() of the Typed instance
	   * @public
	   */
	
	  _createClass(Typed, [{
	    key: 'toggle',
	    value: function toggle() {
	      this.pause.status ? this.start() : this.stop();
	    }
	
	    /**
	     * Stop typing / backspacing and enable cursor blinking
	     * @public
	     */
	  }, {
	    key: 'stop',
	    value: function stop() {
	      if (this.typingComplete) return;
	      if (this.pause.status) return;
	      this.toggleBlinking(true);
	      this.pause.status = true;
	      this.options.onStop(this.arrayPos, this);
	    }
	
	    /**
	     * Start typing / backspacing after being stopped
	     * @public
	     */
	  }, {
	    key: 'start',
	    value: function start() {
	      if (this.typingComplete) return;
	      if (!this.pause.status) return;
	      this.pause.status = false;
	      if (this.pause.typewrite) {
	        this.typewrite(this.pause.curString, this.pause.curStrPos);
	      } else {
	        this.backspace(this.pause.curString, this.pause.curStrPos);
	      }
	      this.options.onStart(this.arrayPos, this);
	    }
	
	    /**
	     * Destroy this instance of Typed
	     * @public
	     */
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.reset(false);
	      this.options.onDestroy(this);
	    }
	
	    /**
	     * Reset Typed and optionally restarts
	     * @param {boolean} restart
	     * @public
	     */
	  }, {
	    key: 'reset',
	    value: function reset() {
	      var restart = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
	
	      clearInterval(this.timeout);
	      this.replaceText('');
	      if (this.cursor && this.cursor.parentNode) {
	        this.cursor.parentNode.removeChild(this.cursor);
	        this.cursor = null;
	      }
	      this.strPos = 0;
	      this.arrayPos = 0;
	      this.curLoop = 0;
	      if (restart) {
	        this.insertCursor();
	        this.options.onReset(this);
	        this.begin();
	      }
	    }
	
	    /**
	     * Begins the typing animation
	     * @private
	     */
	  }, {
	    key: 'begin',
	    value: function begin() {
	      var _this = this;
	
	      this.options.onBegin(this);
	      this.typingComplete = false;
	      this.shuffleStringsIfNeeded(this);
	      this.insertCursor();
	      if (this.bindInputFocusEvents) this.bindFocusEvents();
	      this.timeout = setTimeout(function () {
	        // Check if there is some text in the element, if yes start by backspacing the default message
	        if (!_this.currentElContent || _this.currentElContent.length === 0) {
	          _this.typewrite(_this.strings[_this.sequence[_this.arrayPos]], _this.strPos);
	        } else {
	          // Start typing
	          _this.backspace(_this.currentElContent, _this.currentElContent.length);
	        }
	      }, this.startDelay);
	    }
	
	    /**
	     * Called for each character typed
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'typewrite',
	    value: function typewrite(curString, curStrPos) {
	      var _this2 = this;
	
	      if (this.fadeOut && this.el.classList.contains(this.fadeOutClass)) {
	        this.el.classList.remove(this.fadeOutClass);
	        if (this.cursor) this.cursor.classList.remove(this.fadeOutClass);
	      }
	
	      var humanize = this.humanizer(this.typeSpeed);
	      var numChars = 1;
	
	      if (this.pause.status === true) {
	        this.setPauseStatus(curString, curStrPos, true);
	        return;
	      }
	
	      // contain typing function in a timeout humanize'd delay
	      this.timeout = setTimeout(function () {
	        // skip over any HTML chars
	        curStrPos = _htmlParserJs.htmlParser.typeHtmlChars(curString, curStrPos, _this2);
	
	        var pauseTime = 0;
	        var substr = curString.substr(curStrPos);
	        // check for an escape character before a pause value
	        // format: \^\d+ .. eg: ^1000 .. should be able to print the ^ too using ^^
	        // single ^ are removed from string
	        if (substr.charAt(0) === '^') {
	          if (/^\^\d+/.test(substr)) {
	            var skip = 1; // skip at least 1
	            substr = /\d+/.exec(substr)[0];
	            skip += substr.length;
	            pauseTime = parseInt(substr);
	            _this2.temporaryPause = true;
	            _this2.options.onTypingPaused(_this2.arrayPos, _this2);
	            // strip out the escape character and pause value so they're not printed
	            curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
	            _this2.toggleBlinking(true);
	          }
	        }
	
	        // check for skip characters formatted as
	        // "this is a `string to print NOW` ..."
	        if (substr.charAt(0) === '`') {
	          while (curString.substr(curStrPos + numChars).charAt(0) !== '`') {
	            numChars++;
	            if (curStrPos + numChars > curString.length) break;
	          }
	          // strip out the escape characters and append all the string in between
	          var stringBeforeSkip = curString.substring(0, curStrPos);
	          var stringSkipped = curString.substring(stringBeforeSkip.length + 1, curStrPos + numChars);
	          var stringAfterSkip = curString.substring(curStrPos + numChars + 1);
	          curString = stringBeforeSkip + stringSkipped + stringAfterSkip;
	          numChars--;
	        }
	
	        // timeout for any pause after a character
	        _this2.timeout = setTimeout(function () {
	          // Accounts for blinking while paused
	          _this2.toggleBlinking(false);
	
	          // We're done with this sentence!
	          if (curStrPos >= curString.length) {
	            _this2.doneTyping(curString, curStrPos);
	          } else {
	            _this2.keepTyping(curString, curStrPos, numChars);
	          }
	          // end of character pause
	          if (_this2.temporaryPause) {
	            _this2.temporaryPause = false;
	            _this2.options.onTypingResumed(_this2.arrayPos, _this2);
	          }
	        }, pauseTime);
	
	        // humanized value for typing
	      }, humanize);
	    }
	
	    /**
	     * Continue to the next string & begin typing
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'keepTyping',
	    value: function keepTyping(curString, curStrPos, numChars) {
	      // call before functions if applicable
	      if (curStrPos === 0) {
	        this.toggleBlinking(false);
	        this.options.preStringTyped(this.arrayPos, this);
	      }
	      // start typing each new char into existing string
	      // curString: arg, this.el.html: original text inside element
	      curStrPos += numChars;
	      var nextString = curString.substr(0, curStrPos);
	      this.replaceText(nextString);
	      // loop the function
	      this.typewrite(curString, curStrPos);
	    }
	
	    /**
	     * We're done typing the current string
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'doneTyping',
	    value: function doneTyping(curString, curStrPos) {
	      var _this3 = this;
	
	      // fires callback function
	      this.options.onStringTyped(this.arrayPos, this);
	      this.toggleBlinking(true);
	      // is this the final string
	      if (this.arrayPos === this.strings.length - 1) {
	        // callback that occurs on the last typed string
	        this.complete();
	        // quit if we wont loop back
	        if (this.loop === false || this.curLoop === this.loopCount) {
	          return;
	        }
	      }
	      this.timeout = setTimeout(function () {
	        _this3.backspace(curString, curStrPos);
	      }, this.backDelay);
	    }
	
	    /**
	     * Backspaces 1 character at a time
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'backspace',
	    value: function backspace(curString, curStrPos) {
	      var _this4 = this;
	
	      if (this.pause.status === true) {
	        this.setPauseStatus(curString, curStrPos, false);
	        return;
	      }
	      if (this.fadeOut) return this.initFadeOut();
	
	      this.toggleBlinking(false);
	      var humanize = this.humanizer(this.backSpeed);
	
	      this.timeout = setTimeout(function () {
	        curStrPos = _htmlParserJs.htmlParser.backSpaceHtmlChars(curString, curStrPos, _this4);
	        // replace text with base text + typed characters
	        var curStringAtPosition = curString.substr(0, curStrPos);
	        _this4.replaceText(curStringAtPosition);
	
	        // if smartBack is enabled
	        if (_this4.smartBackspace) {
	          // the remaining part of the current string is equal of the same part of the new string
	          var nextString = _this4.strings[_this4.arrayPos + 1];
	          if (nextString && curStringAtPosition === nextString.substr(0, curStrPos)) {
	            _this4.stopNum = curStrPos;
	          } else {
	            _this4.stopNum = 0;
	          }
	        }
	
	        // if the number (id of character in current string) is
	        // less than the stop number, keep going
	        if (curStrPos > _this4.stopNum) {
	          // subtract characters one by one
	          curStrPos--;
	          // loop the function
	          _this4.backspace(curString, curStrPos);
	        } else if (curStrPos <= _this4.stopNum) {
	          // if the stop number has been reached, increase
	          // array position to next string
	          _this4.arrayPos++;
	          // When looping, begin at the beginning after backspace complete
	          if (_this4.arrayPos === _this4.strings.length) {
	            _this4.arrayPos = 0;
	            _this4.options.onLastStringBackspaced();
	            _this4.shuffleStringsIfNeeded();
	            _this4.begin();
	          } else {
	            _this4.typewrite(_this4.strings[_this4.sequence[_this4.arrayPos]], curStrPos);
	          }
	        }
	        // humanized value for typing
	      }, humanize);
	    }
	
	    /**
	     * Full animation is complete
	     * @private
	     */
	  }, {
	    key: 'complete',
	    value: function complete() {
	      this.options.onComplete(this);
	      if (this.loop) {
	        this.curLoop++;
	      } else {
	        this.typingComplete = true;
	      }
	    }
	
	    /**
	     * Has the typing been stopped
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @param {boolean} isTyping
	     * @private
	     */
	  }, {
	    key: 'setPauseStatus',
	    value: function setPauseStatus(curString, curStrPos, isTyping) {
	      this.pause.typewrite = isTyping;
	      this.pause.curString = curString;
	      this.pause.curStrPos = curStrPos;
	    }
	
	    /**
	     * Toggle the blinking cursor
	     * @param {boolean} isBlinking
	     * @private
	     */
	  }, {
	    key: 'toggleBlinking',
	    value: function toggleBlinking(isBlinking) {
	      if (!this.cursor) return;
	      // if in paused state, don't toggle blinking a 2nd time
	      if (this.pause.status) return;
	      if (this.cursorBlinking === isBlinking) return;
	      this.cursorBlinking = isBlinking;
	      if (isBlinking) {
	        this.cursor.classList.add('typed-cursor--blink');
	      } else {
	        this.cursor.classList.remove('typed-cursor--blink');
	      }
	    }
	
	    /**
	     * Speed in MS to type
	     * @param {number} speed
	     * @private
	     */
	  }, {
	    key: 'humanizer',
	    value: function humanizer(speed) {
	      return Math.round(Math.random() * speed / 2) + speed;
	    }
	
	    /**
	     * Shuffle the sequence of the strings array
	     * @private
	     */
	  }, {
	    key: 'shuffleStringsIfNeeded',
	    value: function shuffleStringsIfNeeded() {
	      if (!this.shuffle) return;
	      this.sequence = this.sequence.sort(function () {
	        return Math.random() - 0.5;
	      });
	    }
	
	    /**
	     * Adds a CSS class to fade out current string
	     * @private
	     */
	  }, {
	    key: 'initFadeOut',
	    value: function initFadeOut() {
	      var _this5 = this;
	
	      this.el.className += ' ' + this.fadeOutClass;
	      if (this.cursor) this.cursor.className += ' ' + this.fadeOutClass;
	      return setTimeout(function () {
	        _this5.arrayPos++;
	        _this5.replaceText('');
	
	        // Resets current string if end of loop reached
	        if (_this5.strings.length > _this5.arrayPos) {
	          _this5.typewrite(_this5.strings[_this5.sequence[_this5.arrayPos]], 0);
	        } else {
	          _this5.typewrite(_this5.strings[0], 0);
	          _this5.arrayPos = 0;
	        }
	      }, this.fadeOutDelay);
	    }
	
	    /**
	     * Replaces current text in the HTML element
	     * depending on element type
	     * @param {string} str
	     * @private
	     */
	  }, {
	    key: 'replaceText',
	    value: function replaceText(str) {
	      if (this.attr) {
	        this.el.setAttribute(this.attr, str);
	      } else {
	        if (this.isInput) {
	          this.el.value = str;
	        } else if (this.contentType === 'html') {
	          this.el.innerHTML = str;
	        } else {
	          this.el.textContent = str;
	        }
	      }
	    }
	
	    /**
	     * If using input elements, bind focus in order to
	     * start and stop the animation
	     * @private
	     */
	  }, {
	    key: 'bindFocusEvents',
	    value: function bindFocusEvents() {
	      var _this6 = this;
	
	      if (!this.isInput) return;
	      this.el.addEventListener('focus', function (e) {
	        _this6.stop();
	      });
	      this.el.addEventListener('blur', function (e) {
	        if (_this6.el.value && _this6.el.value.length !== 0) {
	          return;
	        }
	        _this6.start();
	      });
	    }
	
	    /**
	     * On init, insert the cursor element
	     * @private
	     */
	  }, {
	    key: 'insertCursor',
	    value: function insertCursor() {
	      if (!this.showCursor) return;
	      if (this.cursor) return;
	      this.cursor = document.createElement('span');
	      this.cursor.className = 'typed-cursor';
	      this.cursor.setAttribute('aria-hidden', true);
	      this.cursor.innerHTML = this.cursorChar;
	      this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling);
	    }
	  }]);
	
	  return Typed;
	})();
	
	exports['default'] = Typed;
	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _defaultsJs = __webpack_require__(2);
	
	var _defaultsJs2 = _interopRequireDefault(_defaultsJs);
	
	/**
	 * Initialize the Typed object
	 */
	
	var Initializer = (function () {
	  function Initializer() {
	    _classCallCheck(this, Initializer);
	  }
	
	  _createClass(Initializer, [{
	    key: 'load',
	
	    /**
	     * Load up defaults & options on the Typed instance
	     * @param {Typed} self instance of Typed
	     * @param {object} options options object
	     * @param {string} elementId HTML element ID _OR_ instance of HTML element
	     * @private
	     */
	
	    value: function load(self, options, elementId) {
	      // chosen element to manipulate text
	      if (typeof elementId === 'string') {
	        self.el = document.querySelector(elementId);
	      } else {
	        self.el = elementId;
	      }
	
	      self.options = _extends({}, _defaultsJs2['default'], options);
	
	      // attribute to type into
	      self.isInput = self.el.tagName.toLowerCase() === 'input';
	      self.attr = self.options.attr;
	      self.bindInputFocusEvents = self.options.bindInputFocusEvents;
	
	      // show cursor
	      self.showCursor = self.isInput ? false : self.options.showCursor;
	
	      // custom cursor
	      self.cursorChar = self.options.cursorChar;
	
	      // Is the cursor blinking
	      self.cursorBlinking = true;
	
	      // text content of element
	      self.elContent = self.attr ? self.el.getAttribute(self.attr) : self.el.textContent;
	
	      // html or plain text
	      self.contentType = self.options.contentType;
	
	      // typing speed
	      self.typeSpeed = self.options.typeSpeed;
	
	      // add a delay before typing starts
	      self.startDelay = self.options.startDelay;
	
	      // backspacing speed
	      self.backSpeed = self.options.backSpeed;
	
	      // only backspace what doesn't match the previous string
	      self.smartBackspace = self.options.smartBackspace;
	
	      // amount of time to wait before backspacing
	      self.backDelay = self.options.backDelay;
	
	      // Fade out instead of backspace
	      self.fadeOut = self.options.fadeOut;
	      self.fadeOutClass = self.options.fadeOutClass;
	      self.fadeOutDelay = self.options.fadeOutDelay;
	
	      // variable to check whether typing is currently paused
	      self.isPaused = false;
	
	      // input strings of text
	      self.strings = self.options.strings.map(function (s) {
	        return s.trim();
	      });
	
	      // div containing strings
	      if (typeof self.options.stringsElement === 'string') {
	        self.stringsElement = document.querySelector(self.options.stringsElement);
	      } else {
	        self.stringsElement = self.options.stringsElement;
	      }
	
	      if (self.stringsElement) {
	        self.strings = [];
	        self.stringsElement.style.display = 'none';
	        var strings = Array.prototype.slice.apply(self.stringsElement.children);
	        var stringsLength = strings.length;
	
	        if (stringsLength) {
	          for (var i = 0; i < stringsLength; i += 1) {
	            var stringEl = strings[i];
	            self.strings.push(stringEl.innerHTML.trim());
	          }
	        }
	      }
	
	      // character number position of current string
	      self.strPos = 0;
	
	      // current array position
	      self.arrayPos = 0;
	
	      // index of string to stop backspacing on
	      self.stopNum = 0;
	
	      // Looping logic
	      self.loop = self.options.loop;
	      self.loopCount = self.options.loopCount;
	      self.curLoop = 0;
	
	      // shuffle the strings
	      self.shuffle = self.options.shuffle;
	      // the order of strings
	      self.sequence = [];
	
	      self.pause = {
	        status: false,
	        typewrite: true,
	        curString: '',
	        curStrPos: 0
	      };
	
	      // When the typing is complete (when not looped)
	      self.typingComplete = false;
	
	      // Set the order in which the strings are typed
	      for (var i in self.strings) {
	        self.sequence[i] = i;
	      }
	
	      // If there is some text in the element
	      self.currentElContent = this.getCurrentElContent(self);
	
	      self.autoInsertCss = self.options.autoInsertCss;
	
	      this.appendAnimationCss(self);
	    }
	  }, {
	    key: 'getCurrentElContent',
	    value: function getCurrentElContent(self) {
	      var elContent = '';
	      if (self.attr) {
	        elContent = self.el.getAttribute(self.attr);
	      } else if (self.isInput) {
	        elContent = self.el.value;
	      } else if (self.contentType === 'html') {
	        elContent = self.el.innerHTML;
	      } else {
	        elContent = self.el.textContent;
	      }
	      return elContent;
	    }
	  }, {
	    key: 'appendAnimationCss',
	    value: function appendAnimationCss(self) {
	      var cssDataName = 'data-typed-js-css';
	      if (!self.autoInsertCss) {
	        return;
	      }
	      if (!self.showCursor && !self.fadeOut) {
	        return;
	      }
	      if (document.querySelector('[' + cssDataName + ']')) {
	        return;
	      }
	
	      var css = document.createElement('style');
	      css.type = 'text/css';
	      css.setAttribute(cssDataName, true);
	
	      var innerCss = '';
	      if (self.showCursor) {
	        innerCss += '\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ';
	      }
	      if (self.fadeOut) {
	        innerCss += '\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ';
	      }
	      if (css.length === 0) {
	        return;
	      }
	      css.innerHTML = innerCss;
	      document.body.appendChild(css);
	    }
	  }]);
	
	  return Initializer;
	})();
	
	exports['default'] = Initializer;
	var initializer = new Initializer();
	exports.initializer = initializer;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	/**
	 * Defaults & options
	 * @returns {object} Typed defaults & options
	 * @public
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var defaults = {
	  /**
	   * @property {array} strings strings to be typed
	   * @property {string} stringsElement ID of element containing string children
	   */
	  strings: ['These are the default values...', 'You know what you should do?', 'Use your own!', 'Have a great day!'],
	  stringsElement: null,
	
	  /**
	   * @property {number} typeSpeed type speed in milliseconds
	   */
	  typeSpeed: 0,
	
	  /**
	   * @property {number} startDelay time before typing starts in milliseconds
	   */
	  startDelay: 0,
	
	  /**
	   * @property {number} backSpeed backspacing speed in milliseconds
	   */
	  backSpeed: 0,
	
	  /**
	   * @property {boolean} smartBackspace only backspace what doesn't match the previous string
	   */
	  smartBackspace: true,
	
	  /**
	   * @property {boolean} shuffle shuffle the strings
	   */
	  shuffle: false,
	
	  /**
	   * @property {number} backDelay time before backspacing in milliseconds
	   */
	  backDelay: 700,
	
	  /**
	   * @property {boolean} fadeOut Fade out instead of backspace
	   * @property {string} fadeOutClass css class for fade animation
	   * @property {boolean} fadeOutDelay Fade out delay in milliseconds
	   */
	  fadeOut: false,
	  fadeOutClass: 'typed-fade-out',
	  fadeOutDelay: 500,
	
	  /**
	   * @property {boolean} loop loop strings
	   * @property {number} loopCount amount of loops
	   */
	  loop: false,
	  loopCount: Infinity,
	
	  /**
	   * @property {boolean} showCursor show cursor
	   * @property {string} cursorChar character for cursor
	   * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
	   */
	  showCursor: true,
	  cursorChar: '|',
	  autoInsertCss: true,
	
	  /**
	   * @property {string} attr attribute for typing
	   * Ex: input placeholder, value, or just HTML text
	   */
	  attr: null,
	
	  /**
	   * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
	   */
	  bindInputFocusEvents: false,
	
	  /**
	   * @property {string} contentType 'html' or 'null' for plaintext
	   */
	  contentType: 'html',
	
	  /**
	   * Before it begins typing
	   * @param {Typed} self
	   */
	  onBegin: function onBegin(self) {},
	
	  /**
	   * All typing is complete
	   * @param {Typed} self
	   */
	  onComplete: function onComplete(self) {},
	
	  /**
	   * Before each string is typed
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  preStringTyped: function preStringTyped(arrayPos, self) {},
	
	  /**
	   * After each string is typed
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onStringTyped: function onStringTyped(arrayPos, self) {},
	
	  /**
	   * During looping, after last string is typed
	   * @param {Typed} self
	   */
	  onLastStringBackspaced: function onLastStringBackspaced(self) {},
	
	  /**
	   * Typing has been stopped
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onTypingPaused: function onTypingPaused(arrayPos, self) {},
	
	  /**
	   * Typing has been started after being stopped
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onTypingResumed: function onTypingResumed(arrayPos, self) {},
	
	  /**
	   * After reset
	   * @param {Typed} self
	   */
	  onReset: function onReset(self) {},
	
	  /**
	   * After stop
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onStop: function onStop(arrayPos, self) {},
	
	  /**
	   * After start
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onStart: function onStart(arrayPos, self) {},
	
	  /**
	   * After destroy
	   * @param {Typed} self
	   */
	  onDestroy: function onDestroy(self) {}
	};
	
	exports['default'] = defaults;
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/**
	 * TODO: These methods can probably be combined somehow
	 * Parse HTML tags & HTML Characters
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var HTMLParser = (function () {
	  function HTMLParser() {
	    _classCallCheck(this, HTMLParser);
	  }
	
	  _createClass(HTMLParser, [{
	    key: 'typeHtmlChars',
	
	    /**
	     * Type HTML tags & HTML Characters
	     * @param {string} curString Current string
	     * @param {number} curStrPos Position in current string
	     * @param {Typed} self instance of Typed
	     * @returns {number} a new string position
	     * @private
	     */
	
	    value: function typeHtmlChars(curString, curStrPos, self) {
	      if (self.contentType !== 'html') return curStrPos;
	      var curChar = curString.substr(curStrPos).charAt(0);
	      if (curChar === '<' || curChar === '&') {
	        var endTag = '';
	        if (curChar === '<') {
	          endTag = '>';
	        } else {
	          endTag = ';';
	        }
	        while (curString.substr(curStrPos + 1).charAt(0) !== endTag) {
	          curStrPos++;
	          if (curStrPos + 1 > curString.length) {
	            break;
	          }
	        }
	        curStrPos++;
	      }
	      return curStrPos;
	    }
	
	    /**
	     * Backspace HTML tags and HTML Characters
	     * @param {string} curString Current string
	     * @param {number} curStrPos Position in current string
	     * @param {Typed} self instance of Typed
	     * @returns {number} a new string position
	     * @private
	     */
	  }, {
	    key: 'backSpaceHtmlChars',
	    value: function backSpaceHtmlChars(curString, curStrPos, self) {
	      if (self.contentType !== 'html') return curStrPos;
	      var curChar = curString.substr(curStrPos).charAt(0);
	      if (curChar === '>' || curChar === ';') {
	        var endTag = '';
	        if (curChar === '>') {
	          endTag = '<';
	        } else {
	          endTag = '&';
	        }
	        while (curString.substr(curStrPos - 1).charAt(0) !== endTag) {
	          curStrPos--;
	          if (curStrPos < 0) {
	            break;
	          }
	        }
	        curStrPos--;
	      }
	      return curStrPos;
	    }
	  }]);
	
	  return HTMLParser;
	})();
	
	exports['default'] = HTMLParser;
	var htmlParser = new HTMLParser();
	exports.htmlParser = htmlParser;

/***/ })
/******/ ])
});
;