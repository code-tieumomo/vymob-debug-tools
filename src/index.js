// Using HystModal - Lightweight and flexible JavaScript modal library
!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}n.d(t,"a",(function(){return l}));var s,r,a,l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);this.config=i({backscroll:!0,linkAttributeName:"data-hystmodal",closeOnOverlay:!0,closeOnEsc:!0,closeOnButton:!0,waitTransitions:!1,catchFocus:!0,fixedSelectors:"*[data-hystfixed]",beforeOpen:function(){},afterClose:function(){}},t),this.config.linkAttributeName&&this.init(),this._closeAfterTransition=this._closeAfterTransition.bind(this)}var t,n,s;return t=e,(n=[{key:"init",value:function(){this.isOpened=!1,this.openedWindow=!1,this.starter=!1,this._nextWindows=!1,this._scrollPosition=0,this._reopenTrigger=!1,this._overlayChecker=!1,this._isMoved=!1,this._focusElements=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],this._modalBlock=!1,e._shadow||(e._shadow=document.createElement("button"),e._shadow.classList.add("hystmodal__shadow"),document.body.appendChild(e._shadow)),this.eventsFeeler()}},{key:"eventsFeeler",value:function(){document.addEventListener("click",function(e){var t=e.target.closest("["+this.config.linkAttributeName+"]");if(!this._isMoved&&t){e.preventDefault(),this.starter=t;var n=this.starter.getAttribute(this.config.linkAttributeName);return this._nextWindows=document.querySelector(n),void this.open()}this.config.closeOnButton&&e.target.closest("[data-hystclose]")&&this.close()}.bind(this)),this.config.closeOnOverlay&&(document.addEventListener("mousedown",function(e){!this._isMoved&&e.target instanceof Element&&!e.target.classList.contains("hystmodal__wrap")||(this._overlayChecker=!0)}.bind(this)),document.addEventListener("mouseup",function(e){if(!this._isMoved&&e.target instanceof Element&&this._overlayChecker&&e.target.classList.contains("hystmodal__wrap"))return e.preventDefault(),this._overlayChecker,void this.close();this._overlayChecker=!1}.bind(this))),window.addEventListener("keydown",function(e){if(!this._isMoved&&this.config.closeOnEsc&&27==e.which&&this.isOpened)return e.preventDefault(),void this.close();!this._isMoved&&this.config.catchFocus&&9==e.which&&this.isOpened&&this.focusCatcher(e)}.bind(this))}},{key:"open",value:function(t){if(t&&(this._nextWindows="string"==typeof t?document.querySelector(t):t),this._nextWindows){if(this.isOpened)return this._reopenTrigger=!0,void this.close();this.openedWindow=this._nextWindows,this._modalBlock=this.openedWindow.querySelector(".hystmodal__window"),this.config.beforeOpen(this),this._bodyScrollControl(),e._shadow.classList.add("hystmodal__shadow--show"),this.openedWindow.classList.add("hystmodal--active"),this.openedWindow.setAttribute("aria-hidden","false"),this.config.catchFocus&&this.focusContol(),this.isOpened=!0}else console.log("Warinig: hustModal selector is not found")}},{key:"close",value:function(){this.isOpened&&(this.config.waitTransitions?(this.openedWindow.classList.add("hystmodal--moved"),this._isMoved=!0,this.openedWindow.addEventListener("transitionend",this._closeAfterTransition),this.openedWindow.classList.remove("hystmodal--active")):(this.openedWindow.classList.remove("hystmodal--active"),this._closeAfterTransition()))}},{key:"_closeAfterTransition",value:function(){this.openedWindow.classList.remove("hystmodal--moved"),this.openedWindow.removeEventListener("transitionend",this._closeAfterTransition),this._isMoved=!1,e._shadow.classList.remove("hystmodal__shadow--show"),this.openedWindow.setAttribute("aria-hidden","true"),this.config.catchFocus&&this.focusContol(),this._bodyScrollControl(),this.isOpened=!1,this.openedWindow.scrollTop=0,this.config.afterClose(this),this._reopenTrigger&&(this._reopenTrigger=!1,this.open())}},{key:"focusContol",value:function(){var e=this.openedWindow.querySelectorAll(this._focusElements);this.isOpened&&this.starter?this.starter.focus():e.length&&e[0].focus()}},{key:"focusCatcher",value:function(e){var t=this.openedWindow.querySelectorAll(this._focusElements),n=Array.prototype.slice.call(t);if(this.openedWindow.contains(document.activeElement)){var i=n.indexOf(document.activeElement);console.log(i),e.shiftKey&&0===i&&(n[n.length-1].focus(),e.preventDefault()),e.shiftKey||i!==n.length-1||(n[0].focus(),e.preventDefault())}else n[0].focus(),e.preventDefault()}},{key:"_bodyScrollControl",value:function(){if(this.config.backscroll){var e=Array.prototype.slice.call(document.querySelectorAll(this.config.fixedSelectors)),t=document.documentElement;if(!0===this.isOpened)return t.classList.remove("hystmodal__opened"),t.style.marginRight="",e.map((function(e){e.style.marginRight=""})),window.scrollTo(0,this._scrollPosition),void(t.style.top="");this._scrollPosition=window.pageYOffset;var n=window.innerWidth-t.clientWidth;t.style.top=-this._scrollPosition+"px",n&&(t.style.marginRight=n+"px",e.map((function(e){e.style.marginRight=parseInt(getComputedStyle(e).marginRight)+n+"px"}))),t.classList.add("hystmodal__opened")}}}])&&o(t.prototype,n),s&&o(t,s),e}();a=!1,(r="_shadow")in(s=l)?Object.defineProperty(s,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):s[r]=a},function(e,t,n){"use strict";n.r(t),function(e){var t=n(0);n(3),n(4);e.HystModal=t.a}.call(this,n(2))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null})},function(e,t,n){}]);

// Extract query params from url
var urlParams;
document.addEventListener('DOMContentLoaded', function () {
    document.head.insertAdjacentHTML('beforeend', `
		<style>
			/* Using HystModal - Lightweight and flexible JavaScript modal library */
			.hystmodal__opened,
			.hystmodal__shadow {
			    position: fixed;
			    right: 0;
			    left: 0;
			    overflow: hidden
			}
			
			.hystmodal__shadow {
			    border: none;
			    display: block;
			    width: 100%;
			    top: 0;
			    bottom: 0;
			    pointer-events: none;
			    z-index: 98;
			    opacity: 0;
			    transition: opacity .15s ease;
			    background-color: #000
			}
			
			.hystmodal__shadow--show {
			    pointer-events: auto;
			    opacity: .6
			}
			
			.hystmodal {
			    position: fixed;
			    top: 0;
			    bottom: 0;
			    right: 0;
			    left: 0;
			    overflow: hidden;
			    overflow-y: auto;
			    -webkit-overflow-scrolling: touch;
			    opacity: 1;
			    pointer-events: none;
			    display: flex;
			    flex-flow: column nowrap;
			    justify-content: flex-start;
			    z-index: 123456;
			    visibility: hidden
			}
			
			.hystmodal--active {
			    opacity: 1
			}
			
			.hystmodal--active,
			.hystmodal--moved {
			    pointer-events: auto;
			    visibility: visible
			}
			
			.hystmodal__wrap {
			    flex-shrink: 0;
			    flex-grow: 0;
			    width: 100%;
			    min-height: 100%;
			    margin: auto;
			    display: flex;
			    flex-flow: column nowrap;
			    align-items: center;
			    justify-content: center
			}
			
			.hystmodal__window {
			    margin: 50px 0;
			    box-sizing: border-box;
			    flex-shrink: 0;
			    flex-grow: 0;
			    background: #fff;
			    width: 70%;
			    overflow: visible;
			    transition: transform .2s ease 0s, opacity .2s ease 0s;
			    transform: scale(.9);
			    opacity: 0
			}
			
			.hystmodal--active .hystmodal__window {
			    transform: scale(1);
			    opacity: 1
			}
			
			.hystmodal__close {
			    position: absolute;
			    z-index: 10;
			    display: block;
			    background-color: transparent;
			    background-position: 50%;
			    background-repeat: no-repeat;
			    background-size: 100% 100%;
			    border: none;
			    font-size: 0;
			    cursor: pointer;
			    outline: none
			}
			
			.hystmodal__close {
			    top: 10px;
			    right: 10px;
			    width: 15px;
			    height: 15px;
			    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23fff' stroke='%23111' stroke-linecap='square' stroke-miterlimit='50' stroke-width='2' d='M22 2L2 22'/%3E%3Cpath fill='none' stroke='%23111' stroke-linecap='square' stroke-miterlimit='50' stroke-width='2' d='M2 2l20 20'/%3E%3C/svg%3E");
				transition: .2s linear;
			}
			
			.hystmodal__close:hover {
				transform: rotate(270deg);
			}
			
			@media (max-width:767px) {
			    .hystmodal__window {
			        margin: 0
			    }
			}
			
			/* Main */
			button.debug-button {
				--shadow-color: #D6D6E7;
				position: fixed;
				right: 30px;
				bottom: 30px;
				align-items: center;
				appearance: none;
				background-color: #FCFCFD;
				border-radius: 4px;
				border-width: 0;
				box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,var(--shadow-color) 0 -3px 0 inset;
				box-sizing: border-box;
				color: #36395A;
				cursor: pointer;
				display: inline-flex;
				font-family: "Fira Code",monospace;
				height: 30px;
				justify-content: center;
				line-height: 1;
				list-style: none;
				overflow: hidden;
				padding: 7px 16px 9px;
				text-align: left;
				text-decoration: none;
				transition: box-shadow .15s,transform .15s;
				user-select: none;
				-webkit-user-select: none;
				touch-action: manipulation;
				white-space: nowrap;
				will-change: box-shadow,transform;
				font-size: 13px;
				outline: none !important;
			}
			
			button.debug-button:hover {
				box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, var(--shadow-color) 0 -3px 0 inset;
				transform: translateY(-2px);
			}
			
			button.debug-button:active {
				box-shadow: var(--shadow-color) 0 3px 7px inset;
				transform: translateY(2px);
			}
			
			button.debug-button#debug-switch[data-status="on"] {
				color: #ffffff;
				background-color: #52b788;
				--shadow-color: #40916c;
			}
			
			button.debug-button#debug-switch[data-status="off"] {
				color: #ffffff;
				background-color: #ff4d6d;
				--shadow-color: #c9184a;
			}
			
			button.debug-button#debug-preview {
				right: 30px;
				bottom: 70px;
			}
			
			main#debug-preview-modal-content {
				padding: 30px;
			}
			
			main#debug-preview-modal-content * {
				white-space: normal;
			}
			
			button.debug-button-v2#debug-preview {
                min-width: 130px;
                height: 40px;
                color: #fff;
                padding: 5px 10px;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.3s ease;
                position: fixed;
                right: 30px;
				bottom: 70px;
                display: inline-block;
                outline: none;
                border-radius: 5px;
                z-index: 0;
                background: #fff;
                overflow: hidden;
                border: 2px solid #212529;
                color: #212529;
            }
            button.debug-button-v2#debug-preview:hover {
                color: #fff;
            }
            button.debug-button-v2#debug-preview:hover:after {
                height: 100%;
            }
            button.debug-button-v2#debug-preview:after {
                content: "";
                position: absolute;
                z-index: -1;
                transition: all 0.3s ease;
                left: 0;
                bottom: 0;
                height: 0;
                width: 100%;
                background: #212529;
            }
		</style>
	`);

    urlParams = {};
    const getQueryStringParams = (query) => {
        return query
            ? (/^[?#]/.test(query) ? query.slice(1) : query)
                .split('&')
                .reduce((params, param) => {
                        let [key, value] = param.split('=');
                        params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
                        return params;
                    }, {}
                )
            : {}
    };
    urlParams = getQueryStringParams(window.location.search);

    const attachUrlToSwitch = (button, url, status) => {
        button.addEventListener('click', function (event) {
            event.preventDefault();

            button.setAttribute('disabled', true);
            button.style.cursor = 'not-allowed';
            button.setAttribute('data-status', status == 'on' ? 'on' : 'off');
            button.textContent = 'Turning ' + (status == 'on' ? 'on' : 'off') + ' debug ...';

            window.location.href = url;
        });
    }

    const renderSwitch = (button, status) => {
        if (status == 'on') {
            button.textContent = 'Debug: ON';
            button.setAttribute('data-status', 'on');
        } else {
            button.textContent = 'Debug: OFF';
            button.setAttribute('data-status', 'off');
        }
    }

    const generateUrl = (curUrl, urlParams, status) => {
        if (status == 'on')
            urlParams.vyDebug = 1;
        else
            delete urlParams.vyDebug;

        let desUrl = '';
        if (urlParams && Object.keys(urlParams).length === 0 && Object.getPrototypeOf(urlParams) === Object.prototype) {
            desUrl = curUrl;
        } else {
            desUrl = `${curUrl}?${Object.entries(urlParams).map(function (param) {
                return `${param[0]}=${param[1]}`;
            }).join('&')}`;
        }

        return desUrl;
    }

    // Main process
    let desUrl = '';
    let curUrl = `${window.location.origin}${window.location.pathname}`;
    const start = performance.now();

    document.body.insertAdjacentHTML('beforeend', `<button class="debug-button" id="debug-switch" data-status="rendering">Rendering ...</button>`);

    let debugSwitch = document.getElementById('debug-switch');
    if (urlParams.vyDebug) {
        renderSwitch(debugSwitch, 'on');
        desUrl = generateUrl(curUrl, urlParams, 'off');
        attachUrlToSwitch(debugSwitch, desUrl, 'off');
    } else {
        renderSwitch(debugSwitch, 'off');
        desUrl = generateUrl(curUrl, urlParams, 'on');
        attachUrlToSwitch(debugSwitch, desUrl, 'on');
    }

    const end = performance.now();
    console.log(
        `%c ༼ つ ◕_◕ ༽つ code-tieumomo %c ✔ Attached debug switch button in ${Math.round((end - start) * 1000) / 1000} ms %c`,
        'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px; color: #fff; display: block;',
        'background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0; color: #fff; display: block;',
        'background:transparent'
    );

    if (urlParams.vyDebug) {
        document.body.insertAdjacentHTML('beforeend', `<button class="debug-button" id="debug-preview">Fetching preview ...</button>`);
        document.body.insertAdjacentHTML('beforeend', `
			<div class="hystmodal" id="debug-preview-modal" aria-hidden="true">
			    <div class="hystmodal__wrap">
			        <div class="hystmodal__window" role="dialog" aria-modal="true">
			            <button data-hystclose class="hystmodal__close">Закрыть</button>
			            <main id="debug-preview-modal-content"></main>
			        </div>
			    </div>
			</div>
		`);

        fetch(desUrl).then(raw => raw.text()).then(res => {
            let previewButton = document.getElementById('debug-preview');
            previewButton.setAttribute('data-hystmodal', '#debug-preview-modal');
            previewButton.textContent = 'Preview debug';
            const myModal = new HystModal({
                linkAttributeName: "data-hystmodal"
            });

            res = res.replace(/<script(.*)<\/script>/gs, '');
            const index = res.indexOf('<!DOCTYPE html>');
            if (index >= 0) {
                document.getElementById('debug-preview-modal-content').innerHTML = res.substring(0, index);
            } else {
                document.getElementById('debug-preview-modal-content').innerHTML = res;
            }
        });
    }
});