/*
Copyright (c) 2019 Daybrush
name: moveable
license: MIT
author: Daybrush
repository: git+https://github.com/daybrush/moveable.git
version: 0.9.8
*/
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.Moveable = factory());
}(this, function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    /*
    Copyright (c) 2017 NAVER Corp.
    @egjs/component project is licensed under the MIT license

    @egjs/component JavaScript library
    https://naver.github.io/egjs-component

    @version 2.1.2
    */
    /**
     * Copyright (c) 2015 NAVER Corp.
     * egjs projects are licensed under the MIT license
     */
    function isUndefined(value) {
      return typeof value === "undefined";
    }
    /**
     * A class used to manage events in a component
     * @ko 컴포넌트의 이벤트을 관리할 수 있게 하는 클래스
     * @alias eg.Component
     */


    var Component =
    /*#__PURE__*/
    function () {
      var Component =
      /*#__PURE__*/
      function () {
        /**
        * Version info string
        * @ko 버전정보 문자열
        * @name VERSION
        * @static
        * @type {String}
        * @example
        * eg.Component.VERSION;  // ex) 2.0.0
        * @memberof eg.Component
        */

        /**
         * @support {"ie": "7+", "ch" : "latest", "ff" : "latest",  "sf" : "latest", "edge" : "latest", "ios" : "7+", "an" : "2.1+ (except 3.x)"}
         */
        function Component() {
          this._eventHandler = {};
          this.options = {};
        }
        /**
         * Triggers a custom event.
         * @ko 커스텀 이벤트를 발생시킨다
         * @param {String} eventName The name of the custom event to be triggered <ko>발생할 커스텀 이벤트의 이름</ko>
         * @param {Object} customEvent Event data to be sent when triggering a custom event <ko>커스텀 이벤트가 발생할 때 전달할 데이터</ko>
         * @return {Boolean} Indicates whether the event has occurred. If the stop() method is called by a custom event handler, it will return false and prevent the event from occurring. <a href="https://github.com/naver/egjs-component/wiki/How-to-make-Component-event-design%3F">Ref</a> <ko>이벤트 발생 여부. 커스텀 이벤트 핸들러에서 stop() 메서드를 호출하면 'false'를 반환하고 이벤트 발생을 중단한다. <a href="https://github.com/naver/egjs-component/wiki/How-to-make-Component-event-design%3F">참고</a></ko>
         * @example
        class Some extends eg.Component {
         some(){
         	if(this.trigger("beforeHi")){ // When event call to stop return false.
        	this.trigger("hi");// fire hi event.
         	}
         }
        }
        const some = new Some();
        some.on("beforeHi", (e) => {
        if(condition){
        	e.stop(); // When event call to stop, `hi` event not call.
        }
        });
        some.on("hi", (e) => {
        // `currentTarget` is component instance.
        console.log(some === e.currentTarget); // true
        });
        // If you want to more know event design. You can see article.
        // https://github.com/naver/egjs-component/wiki/How-to-make-Component-event-design%3F
         */


        var _proto = Component.prototype;

        _proto.trigger = function trigger(eventName, customEvent) {
          if (customEvent === void 0) {
            customEvent = {};
          }

          var handlerList = this._eventHandler[eventName] || [];
          var hasHandlerList = handlerList.length > 0;

          if (!hasHandlerList) {
            return true;
          } // If detach method call in handler in first time then handler list calls.


          handlerList = handlerList.concat();
          customEvent.eventType = eventName;
          var isCanceled = false;
          var arg = [customEvent];
          var i = 0;

          customEvent.stop = function () {
            isCanceled = true;
          };

          customEvent.currentTarget = this;

          for (var _len = arguments.length, restParam = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            restParam[_key - 2] = arguments[_key];
          }

          if (restParam.length >= 1) {
            arg = arg.concat(restParam);
          }

          for (i = 0; handlerList[i]; i++) {
            handlerList[i].apply(this, arg);
          }

          return !isCanceled;
        };
        /**
         * Executed event just one time.
         * @ko 이벤트가 한번만 실행된다.
         * @param {eventName} eventName The name of the event to be attached <ko>등록할 이벤트의 이름</ko>
         * @param {Function} handlerToAttach The handler function of the event to be attached <ko>등록할 이벤트의 핸들러 함수</ko>
         * @return {eg.Component} An instance of a component itself<ko>컴포넌트 자신의 인스턴스</ko>
         * @example
        class Some extends eg.Component {
         hi() {
           alert("hi");
         }
         thing() {
           this.once("hi", this.hi);
         }
        }
        var some = new Some();
        some.thing();
        some.trigger("hi");
        // fire alert("hi");
        some.trigger("hi");
        // Nothing happens
         */


        _proto.once = function once(eventName, handlerToAttach) {
          if (typeof eventName === "object" && isUndefined(handlerToAttach)) {
            var eventHash = eventName;
            var i;

            for (i in eventHash) {
              this.once(i, eventHash[i]);
            }

            return this;
          } else if (typeof eventName === "string" && typeof handlerToAttach === "function") {
            var self = this;
            this.on(eventName, function listener() {
              for (var _len2 = arguments.length, arg = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                arg[_key2] = arguments[_key2];
              }

              handlerToAttach.apply(self, arg);
              self.off(eventName, listener);
            });
          }

          return this;
        };
        /**
         * Checks whether an event has been attached to a component.
         * @ko 컴포넌트에 이벤트가 등록됐는지 확인한다.
         * @param {String} eventName The name of the event to be attached <ko>등록 여부를 확인할 이벤트의 이름</ko>
         * @return {Boolean} Indicates whether the event is attached. <ko>이벤트 등록 여부</ko>
         * @example
        class Some extends eg.Component {
         some() {
           this.hasOn("hi");// check hi event.
         }
        }
         */


        _proto.hasOn = function hasOn(eventName) {
          return !!this._eventHandler[eventName];
        };
        /**
         * Attaches an event to a component.
         * @ko 컴포넌트에 이벤트를 등록한다.
         * @param {eventName} eventName The name of the event to be attached <ko>등록할 이벤트의 이름</ko>
         * @param {Function} handlerToAttach The handler function of the event to be attached <ko>등록할 이벤트의 핸들러 함수</ko>
         * @return {eg.Component} An instance of a component itself<ko>컴포넌트 자신의 인스턴스</ko>
         * @example
        class Some extends eg.Component {
         hi() {
           console.log("hi");
         }
         some() {
           this.on("hi",this.hi); //attach event
         }
        }
        */


        _proto.on = function on(eventName, handlerToAttach) {
          if (typeof eventName === "object" && isUndefined(handlerToAttach)) {
            var eventHash = eventName;
            var name;

            for (name in eventHash) {
              this.on(name, eventHash[name]);
            }

            return this;
          } else if (typeof eventName === "string" && typeof handlerToAttach === "function") {
            var handlerList = this._eventHandler[eventName];

            if (isUndefined(handlerList)) {
              this._eventHandler[eventName] = [];
              handlerList = this._eventHandler[eventName];
            }

            handlerList.push(handlerToAttach);
          }

          return this;
        };
        /**
         * Detaches an event from the component.
         * @ko 컴포넌트에 등록된 이벤트를 해제한다
         * @param {eventName} eventName The name of the event to be detached <ko>해제할 이벤트의 이름</ko>
         * @param {Function} handlerToDetach The handler function of the event to be detached <ko>해제할 이벤트의 핸들러 함수</ko>
         * @return {eg.Component} An instance of a component itself <ko>컴포넌트 자신의 인스턴스</ko>
         * @example
        class Some extends eg.Component {
         hi() {
           console.log("hi");
         }
         some() {
           this.off("hi",this.hi); //detach event
         }
        }
         */


        _proto.off = function off(eventName, handlerToDetach) {
          // All event detach.
          if (isUndefined(eventName)) {
            this._eventHandler = {};
            return this;
          } // All handler of specific event detach.


          if (isUndefined(handlerToDetach)) {
            if (typeof eventName === "string") {
              this._eventHandler[eventName] = undefined;
              return this;
            } else {
              var eventHash = eventName;
              var name;

              for (name in eventHash) {
                this.off(name, eventHash[name]);
              }

              return this;
            }
          } // The handler of specific event detach.


          var handlerList = this._eventHandler[eventName];

          if (handlerList) {
            var k;
            var handlerFunction;

            for (k = 0; (handlerFunction = handlerList[k]) !== undefined; k++) {
              if (handlerFunction === handlerToDetach) {
                handlerList = handlerList.splice(k, 1);
                break;
              }
            }
          }

          return this;
        };

        return Component;
      }();

      Component.VERSION = "2.1.2";
      return Component;
    }();

    /*
    Copyright (c) 2019 Daybrush
    name: framework-utils
    license: MIT
    author: Daybrush
    repository: git+https://github.com/daybrush/framework-utils.git
    version: 0.2.1
    */
    function prefixNames(prefix) {
      var classNames = [];

      for (var _i = 1; _i < arguments.length; _i++) {
        classNames[_i - 1] = arguments[_i];
      }

      return classNames.map(function (className) {
        return className.split(" ").map(function (name) {
          return name ? "" + prefix + name : "";
        }).join(" ");
      }).join(" ");
    }
    function prefixCSS(prefix, css) {
      return css.replace(/\.([^{,\s\d.]+)/g, "." + prefix + "$1");
    }
    /* react */

    function ref(target, name) {
      return function (e) {
        e && (target[name] = e);
      };
    }
    function refs(target, name, i) {
      return function (e) {
        e && (target[name][i] = e);
      };
    }
    /* Class Decorator */

    function Properties(properties, action) {
      return function (component) {
        var prototype = component.prototype;
        properties.forEach(function (property) {
          action(prototype, property);
        });
      };
    }

    var n,u,t,i,r,o,f={},e=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function a(n){var l=n.parentNode;l&&l.removeChild(n);}function h(n,l,u){var t,i,r,o,f=arguments;if(l=s({},l),arguments.length>3)for(u=[u],t=3;t<arguments.length;t++)u.push(f[t]);if(null!=u&&(l.children=u),null!=n&&null!=n.defaultProps)for(i in n.defaultProps)void 0===l[i]&&(l[i]=n.defaultProps[i]);return o=l.key,null!=(r=l.ref)&&delete l.ref,null!=o&&delete l.key,v(n,l,o,r)}function v(l,u,t,i){var r={type:l,props:u,key:t,ref:i,__k:null,__p:null,__b:0,__e:null,l:null,__c:null,constructor:void 0};return n.vnode&&n.vnode(r),r}function p(){return {}}function d(n){return n.children}function y(n){if(null==n||"boolean"==typeof n)return null;if("string"==typeof n||"number"==typeof n)return v(null,n,null,null);if(null!=n.__e||null!=n.__c){var l=v(n.type,n.props,n.key,null);return l.__e=n.__e,l}return n}function m(n,l){this.props=n,this.context=l;}function w(n,l){if(null==l)return n.__p?w(n.__p,n.__p.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?w(n):null}function g(n){var l,u;if(null!=(n=n.__p)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return g(n)}}function k(l){(!l.__d&&(l.__d=!0)&&1===u.push(l)||i!==n.debounceRendering)&&(i=n.debounceRendering,(n.debounceRendering||t)(_));}function _(){var n,l,t,i,r,o,f,e;for(u.sort(function(n,l){return l.__v.__b-n.__v.__b});n=u.pop();)n.__d&&(t=void 0,i=void 0,o=(r=(l=n).__v).__e,f=l.__P,e=l.u,l.u=!1,f&&(t=[],i=$(f,r,s({},r),l.__n,void 0!==f.ownerSVGElement,null,t,e,null==o?w(r):o),j(t,r),i!=o&&g(r)));}function b(n,l,u,t,i,r,o,c,s){var h,v,p,d,y,m,g,k=u&&u.__k||e,_=k.length;if(c==f&&(c=null!=r?r[0]:_?w(u,0):null),h=0,l.__k=x(l.__k,function(u){if(null!=u){if(u.__p=l,u.__b=l.__b+1,null===(p=k[h])||p&&u.key==p.key&&u.type===p.type)k[h]=void 0;else for(v=0;v<_;v++){if((p=k[v])&&u.key==p.key&&u.type===p.type){k[v]=void 0;break}p=null;}if(d=$(n,u,p=p||f,t,i,r,o,null,c,s),(v=u.ref)&&p.ref!=v&&(g||(g=[])).push(v,u.__c||d,u),null!=d){if(null==m&&(m=d),null!=u.l)d=u.l,u.l=null;else if(r==p||d!=c||null==d.parentNode){n:if(null==c||c.parentNode!==n)n.appendChild(d);else{for(y=c,v=0;(y=y.nextSibling)&&v<_;v+=2)if(y==d)break n;n.insertBefore(d,c);}"option"==l.type&&(n.value="");}c=d.nextSibling,"function"==typeof l.type&&(l.l=d);}}return h++,u}),l.__e=m,null!=r&&"function"!=typeof l.type)for(h=r.length;h--;)null!=r[h]&&a(r[h]);for(h=_;h--;)null!=k[h]&&D(k[h],k[h]);if(g)for(h=0;h<g.length;h++)A(g[h],g[++h],g[++h]);}function x(n,l,u){if(null==u&&(u=[]),null==n||"boolean"==typeof n)l&&u.push(l(null));else if(Array.isArray(n))for(var t=0;t<n.length;t++)x(n[t],l,u);else u.push(l?l(y(n)):n);return u}function C(n,l,u,t,i){var r;for(r in u)r in l||N(n,r,null,u[r],t);for(r in l)i&&"function"!=typeof l[r]||"value"===r||"checked"===r||u[r]===l[r]||N(n,r,l[r],u[r],t);}function P(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]="number"==typeof u&&!1===c.test(l)?u+"px":null==u?"":u;}function N(n,l,u,t,i){var r,o,f,e,c;if("key"===(l=i?"className"===l?"class":l:"class"===l?"className":l)||"children"===l);else if("style"===l)if(r=n.style,"string"==typeof u)r.cssText=u;else{if("string"==typeof t&&(r.cssText="",t=null),t)for(o in t)u&&o in u||P(r,o,"");if(u)for(f in u)t&&u[f]===t[f]||P(r,f,u[f]);}else"o"===l[0]&&"n"===l[1]?(e=l!==(l=l.replace(/Capture$/,"")),c=l.toLowerCase(),l=(c in n?c:l).slice(2),u?(t||n.addEventListener(l,T,e),(n.t||(n.t={}))[l]=u):n.removeEventListener(l,T,e)):"list"!==l&&"tagName"!==l&&"form"!==l&&!i&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/^xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u?n.removeAttribute(l):n.setAttribute(l,u));}function T(l){return this.t[l.type](n.event?n.event(l):l)}function $(l,u,t,i,r,o,f,e,c,a){var h,v,p,y,w,g,k,_,C,P,N=u.type;if(void 0!==u.constructor)return null;(h=n.__b)&&h(u);try{n:if("function"==typeof N){if(_=u.props,C=(h=N.contextType)&&i[h.__c],P=h?C?C.props.value:h.__p:i,t.__c?k=(v=u.__c=t.__c).__p=v.__E:("prototype"in N&&N.prototype.render?u.__c=v=new N(_,P):(u.__c=v=new m(_,P),v.constructor=N,v.render=H),C&&C.sub(v),v.props=_,v.state||(v.state={}),v.context=P,v.__n=i,p=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=N.getDerivedStateFromProps&&s(v.__s==v.state?v.__s=s({},v.__s):v.__s,N.getDerivedStateFromProps(_,v.__s)),p)null==N.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&f.push(v);else{if(null==N.getDerivedStateFromProps&&null==e&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(_,P),!e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(_,v.__s,P)){for(v.props=_,v.state=v.__s,v.__d=!1,v.__v=u,u.__e=null!=c?c!==t.__e?c:t.__e:null,u.__k=t.__k,h=0;h<u.__k.length;h++)u.__k[h]&&(u.__k[h].__p=u);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(_,v.__s,P);}for(y=v.props,w=v.state,v.context=P,v.props=_,v.state=v.__s,(h=n.__r)&&h(u),v.__d=!1,v.__v=u,v.__P=l,h=v.render(v.props,v.state,v.context),u.__k=x(null!=h&&h.type==d&&null==h.key?h.props.children:h),null!=v.getChildContext&&(i=s(s({},i),v.getChildContext())),p||null==v.getSnapshotBeforeUpdate||(g=v.getSnapshotBeforeUpdate(y,w)),b(l,u,t,i,r,o,f,c,a),v.base=u.__e;h=v.__h.pop();)v.__s&&(v.state=v.__s),h.call(v);p||null==y||null==v.componentDidUpdate||v.componentDidUpdate(y,w,g),k&&(v.__E=v.__p=null);}else u.__e=z(t.__e,u,t,i,r,o,f,a);(h=n.diffed)&&h(u);}catch(l){n.__e(l,u,t);}return u.__e}function j(l,u){for(var t;t=l.pop();)try{t.componentDidMount();}catch(l){n.__e(l,t.__v);}n.__c&&n.__c(u);}function z(n,l,u,t,i,r,o,c){var s,a,h,v,p=u.props,d=l.props;if(i="svg"===l.type||i,null==n&&null!=r)for(s=0;s<r.length;s++)if(null!=(a=r[s])&&(null===l.type?3===a.nodeType:a.localName===l.type)){n=a,r[s]=null;break}if(null==n){if(null===l.type)return document.createTextNode(d);n=i?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type),r=null;}return null===l.type?p!==d&&(null!=r&&(r[r.indexOf(n)]=null),n.data=d):l!==u&&(null!=r&&(r=e.slice.call(n.childNodes)),h=(p=u.props||f).dangerouslySetInnerHTML,v=d.dangerouslySetInnerHTML,c||(v||h)&&(v&&h&&v.__html==h.__html||(n.innerHTML=v&&v.__html||"")),C(n,d,p,i,c),l.__k=l.props.children,v||b(n,l,u,t,"foreignObject"!==l.type&&i,r,o,f,c),c||("value"in d&&void 0!==d.value&&d.value!==n.value&&(n.value=null==d.value?"":d.value),"checked"in d&&void 0!==d.checked&&d.checked!==n.checked&&(n.checked=d.checked))),n}function A(l,u,t){try{"function"==typeof l?l(u):l.current=u;}catch(l){n.__e(l,t);}}function D(l,u,t){var i,r,o;if(n.unmount&&n.unmount(l),(i=l.ref)&&A(i,null,u),t||"function"==typeof l.type||(t=null!=(r=l.__e)),l.__e=l.l=null,null!=(i=l.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount();}catch(l){n.__e(l,u);}i.base=i.__P=null;}if(i=l.__k)for(o=0;o<i.length;o++)i[o]&&D(i[o],u,t);null!=r&&a(r);}function H(n,l,u){return this.constructor(n,u)}function I(l,u,t){var i,o,c;n.__p&&n.__p(l,u),o=(i=t===r)?null:t&&t.__k||u.__k,l=h(d,null,[l]),c=[],$(u,i?u.__k=l:(t||u).__k=l,o||f,f,void 0!==u.ownerSVGElement,t&&!i?[t]:o?null:e.slice.call(u.childNodes),c,!1,t||f,i),j(c,l);}function L(n,l){I(n,l,r);}function M(n,l){return l=s(s({},n.props),l),arguments.length>2&&(l.children=e.slice.call(arguments,2)),v(n.type,l,l.key||n.key,l.ref||n.ref)}function O(n){var l={},u={__c:"__cC"+o++,__p:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var t,i=this;return this.getChildContext||(t=[],this.getChildContext=function(){return l[u.__c]=i,l},this.shouldComponentUpdate=function(i){n.value!==i.value&&(l[u.__c].props.value=i.value,t.some(function(n){n.__P&&(n.context=i.value,k(n));}));},this.sub=function(n){t.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){t.splice(t.indexOf(n),1),l&&l.call(n);};}),n.children}};return u.Consumer.contextType=u,u}n={},m.prototype.setState=function(n,l){var u=this.__s!==this.state&&this.__s||(this.__s=s({},this.state));("function"!=typeof n||(n=n(u,this.props)))&&s(u,n),null!=n&&this.__v&&(this.u=!1,l&&this.__h.push(l),k(this));},m.prototype.forceUpdate=function(n){this.__v&&(n&&this.__h.push(n),this.u=!0,k(this));},m.prototype.render=d,u=[],t="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,i=n.debounceRendering,n.__e=function(n,l,u){for(var t;l=l.__p;)if((t=l.__c)&&!t.__p)try{if(t.constructor&&null!=t.constructor.getDerivedStateFromError)t.setState(t.constructor.getDerivedStateFromError(n));else{if(null==t.componentDidCatch)continue;t.componentDidCatch(n);}return k(t.__E=t)}catch(l){n=l;}throw n},r=f,o=0;

    var t$1,r$1,u$1=[],i$1=n.__r;n.__r=function(n){i$1&&i$1(n),t$1=0,(r$1=n.__c).__H&&(r$1.__H.t=A$1(r$1.__H.t));};var f$1=n.diffed;n.diffed=function(n){f$1&&f$1(n);var t=n.__c;if(t){var r=t.__H;r&&(r.u=(r.u.some(function(n){n.ref&&(n.ref.current=n.createHandle());}),[]),r.i=A$1(r.i));}};var o$1=n.unmount;function e$1(t){n.__h&&n.__h(r$1);var u=r$1.__H||(r$1.__H={o:[],t:[],i:[],u:[]});return t>=u.o.length&&u.o.push({}),u.o[t]}function c$1(n){return a$1(q,n)}function a$1(n,u,i){var f=e$1(t$1++);return f.__c||(f.__c=r$1,f.v=[i?i(u):q(void 0,u),function(t){var r=n(f.v[0],t);f.v[0]!==r&&(f.v[0]=r,f.__c.setState({}));}]),f.v}function v$1(n,u){var i=e$1(t$1++);h$1(i.m,u)&&(i.v=n,i.m=u,r$1.__H.t.push(i),T$1(r$1));}function m$1(n,u){var i=e$1(t$1++);h$1(i.m,u)&&(i.v=n,i.m=u,r$1.__H.i.push(i));}function d$1(n){return l(function(){return {current:n}},[])}function p$1(n,u,i){var f=e$1(t$1++);h$1(f.m,i)&&(f.m=i,r$1.__H.u.push({ref:n,createHandle:u}));}function l(n,r){var u=e$1(t$1++);return h$1(u.m,r)?(u.m=r,u.p=n,u.v=n()):u.v}function s$1(n,t){return l(function(){return n},t)}function y$1(n){var u=r$1.context[n.__c];if(!u)return n.__p;var i=e$1(t$1++);return null==i.v&&(i.v=!0,u.sub(r$1)),u.props.value}function _$1(t,r){n.useDebugValue&&n.useDebugValue(r?r(t):t);}n.unmount=function(n){o$1&&o$1(n);var t=n.__c;if(t){var r=t.__H;r&&r.o.forEach(function(n){return n.l&&n.l()});}};var T$1=function(){};function g$1(){u$1.some(function(n){n.s=!1,n.__P&&(n.__H.t=A$1(n.__H.t));}),u$1=[];}if("undefined"!=typeof window){var w$1=n.requestAnimationFrame;T$1=function(t){(!t.s&&(t.s=!0)&&1===u$1.push(t)||w$1!==n.requestAnimationFrame)&&(w$1=n.requestAnimationFrame,(n.requestAnimationFrame||function(n){var t=function(){clearTimeout(r),cancelAnimationFrame(u),setTimeout(n);},r=setTimeout(t,100),u=requestAnimationFrame(t);})(g$1));};}function A$1(n){return n.forEach(E),n.forEach(F),[]}function E(n){n.l&&n.l();}function F(n){var t=n.v();"function"==typeof t&&(n.l=t);}function h$1(n,t){return !n||t.some(function(t,r){return t!==n[r]})}function q(n,t){return "function"==typeof t?t(n):t}

    var n$1 = ({
        __proto__: null,
        useState: c$1,
        useReducer: a$1,
        useEffect: v$1,
        useLayoutEffect: m$1,
        useRef: d$1,
        useImperativeHandle: p$1,
        useMemo: l,
        useCallback: s$1,
        useContext: y$1,
        useDebugValue: _$1
    });

    function d$2(n,t){for(var r in t)n[r]=t[r];return n}function p$2(n){var t=n.parentNode;t&&t.removeChild(n);}var h$2=n.__e;function m$2(){this.t=[];}function y$2(n){var t,e,o;function i(i){if(t||(t=n()).then(function(n){e=n.default;},function(n){o=n;}),o)throw o;if(!e)throw t;return h(e,i)}return i.displayName="Lazy",i.o=!0,i}n.__e=function(n,t,r){if(n.then&&r)for(var e,o=t;o=o.__p;)if((e=o.__c)&&e.i)return r&&(t.__e=r.__e,t.__k=r.__k),void e.i(n);h$2(n,t,r);},(m$2.prototype=new m).i=function(n){var t=this;t.t.push(n);var r=function(){t.t[t.t.indexOf(n)]=t.t[t.t.length-1],t.t.pop(),0==t.t.length&&(D(t.props.fallback),t.__v.__e=null,t.__v.__k=t.state.u,t.setState({u:null}));};null==t.state.u&&(t.setState({u:t.__v.__k}),function n(t){for(var r=0;r<t.length;r++){var e=t[r];null!=e&&("function"!=typeof e.type&&e.__e?p$2(e.__e):e.__k&&n(e.__k));}}(t.__v.__k),t.__v.__k=[]),n.then(r,r);},m$2.prototype.render=function(n,t){return t.u?n.fallback:n.children};var b$1="16.8.0",g$2="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,x$1=/^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/,C$1=n.event;function E$1(n){return S.bind(null,n)}function _$2(n,t,r){if(null==t.__k)for(;t.firstChild;)p$2(t.firstChild);return I(n,t),"function"==typeof r&&r(),n?n.__c:null}n.event=function(n){return C$1&&(n=C$1(n)),n.persist=function(){},n.nativeEvent=n};var w$2=function(){};function A$2(n){var t=this,r=n.container,o=h(w$2,{context:t.context},n.vnode);return t.l&&t.l!==r&&(t.s.parentNode&&t.l.removeChild(t.s),D(t.v),t.p=!1),n.vnode?t.p?(r.__k=t.__k,I(o,r),t.__k=r.__k):(t.s=document.createTextNode(""),L("",r),r.insertBefore(t.s,r.firstChild),t.p=!0,t.l=r,I(o,r,t.s),t.__k=this.s.__k):t.p&&(t.s.parentNode&&t.l.removeChild(t.s),D(t.v)),t.v=o,t.componentWillUnmount=function(){t.s.parentNode&&t.l.removeChild(t.s),D(t.v);},null}function k$1(n,t){return h(A$2,{vnode:n,container:t})}w$2.prototype.getChildContext=function(){return this.props.context},w$2.prototype.render=function(n){return n.children};var F$1=function(n,t){return n?x(n).map(t):null},N$1={map:F$1,forEach:F$1,count:function(n){return n?x(n).length:0},only:function(n){if(1!==(n=x(n)).length)throw new Error("Children.only() expects only one child.");return n[0]},toArray:x};function S(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];var r=h.apply(void 0,n),e=r.type,o=r.props;return "function"!=typeof e&&(o.defaultValue&&(o.value||0===o.value||(o.value=o.defaultValue),delete o.defaultValue),Array.isArray(o.value)&&o.multiple&&"select"===e&&(x(o.children).forEach(function(n){-1!=o.value.indexOf(n.props.value)&&(n.props.selected=!0);}),delete o.value),function(n,t){var r,e,o;for(o in t)if(r=x$1.test(o))break;if(r)for(o in e=n.props={},t)e[x$1.test(o)?o.replace(/([A-Z0-9])/,"-$1").toLowerCase():o]=t[o];}(r,o)),r.preactCompatNormalized=!1,R(r)}function R(n){return n.preactCompatNormalized=!0,function(n){var t=n.props;(t.class||t.className)&&(z$1.enumerable="className"in t,t.className&&(t.class=t.className),Object.defineProperty(t,"className",z$1));}(n),n}function U(n){return O$1(n)?R(M.apply(null,arguments)):n}function O$1(n){return !!n&&n.$$typeof===g$2}function j$1(n){return !!n.__k&&(I(null,n),!0)}var z$1={configurable:!0,get:function(){return this.class}};function M$1(n,t){for(var r in n)if("__source"!==r&&!(r in t))return !0;for(var e in t)if("__source"!==e&&n[e]!==t[e])return !0;return !1}function P$1(n){return n&&(n.base||1===n.nodeType&&n)||null}var W=function(n){function t(t){n.call(this,t),this.isPureReactComponent=!0;}return n&&(t.__proto__=n),(t.prototype=Object.create(n&&n.prototype)).constructor=t,t.prototype.shouldComponentUpdate=function(n,t){return M$1(this.props,n)||M$1(this.state,t)},t}(m);function Z(n,t){function r(n){var r=this.props.ref,e=r==n.ref;return !e&&r&&(r.call?r(null):r.current=null),(t?!t(this.props,n):M$1(this.props,n))||!e}function e(t){return this.shouldComponentUpdate=r,h(n,d$2({},t))}return e.prototype.isReactComponent=!0,e.displayName="Memo("+(n.displayName||n.name)+")",e.o=!0,e}function D$1(n){function t(t){var r=t.ref;return delete t.ref,n(t,r)}return t.prototype.isReactComponent=!0,t.o=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}function L$1(n,t){n["UNSAFE_"+t]&&!n[t]&&Object.defineProperty(n,t,{configurable:!1,get:function(){return this["UNSAFE_"+t]},set:function(n){this["UNSAFE_"+t]=n;}});}m.prototype.isReactComponent={};var T$2=n.vnode;n.vnode=function(n){n.$$typeof=g$2,function(t){var r=n.type,e=n.props;if(e&&"string"==typeof r){var o={};for(var i in e)/^on(Ani|Tra)/.test(i)&&(e[i.toLowerCase()]=e[i],delete e[i]),o[i.toLowerCase()]=i;if(o.ondoubleclick&&(e.ondblclick=e[o.ondoubleclick],delete e[o.ondoubleclick]),o.onbeforeinput&&(e.onbeforeinput=e[o.onbeforeinput],delete e[o.onbeforeinput]),o.onchange&&("textarea"===r||"input"===r.toLowerCase()&&!/^fil|che|ra/i.test(e.type))){var u=o.oninput||"oninput";e[u]||(e[u]=e[o.onchange],delete e[o.onchange]);}}}();var t=n.type;t&&t.o&&n.ref&&(n.props.ref=n.ref,n.ref=null),"function"==typeof t&&!t.h&&t.prototype&&(L$1(t.prototype,"componentWillMount"),L$1(t.prototype,"componentWillReceiveProps"),L$1(t.prototype,"componentWillUpdate"),t.h=!0),T$2&&T$2(n);};var V=function(n,t){return n(t)};var compat_module = d$2({version:"16.8.0",Children:N$1,render:_$2,hydrate:_$2,unmountComponentAtNode:j$1,createPortal:k$1,createElement:S,createContext:O,createFactory:E$1,cloneElement:U,createRef:p,Fragment:d,isValidElement:O$1,findDOMNode:P$1,Component:m,PureComponent:W,memo:Z,forwardRef:D$1,unstable_batchedUpdates:V,Suspense:m$2,lazy:y$2},n$1);

    var React = ({
        __proto__: null,
        'default': compat_module,
        version: b$1,
        Children: N$1,
        render: _$2,
        hydrate: _$2,
        unmountComponentAtNode: j$1,
        createPortal: k$1,
        createElement: S,
        createFactory: E$1,
        cloneElement: U,
        isValidElement: O$1,
        findDOMNode: P$1,
        PureComponent: W,
        memo: Z,
        forwardRef: D$1,
        unstable_batchedUpdates: V,
        Suspense: m$2,
        lazy: y$2,
        createContext: O,
        createRef: p,
        Fragment: d,
        Component: m,
        useState: c$1,
        useReducer: a$1,
        useEffect: v$1,
        useLayoutEffect: m$1,
        useRef: d$1,
        useImperativeHandle: p$1,
        useMemo: l,
        useCallback: s$1,
        useContext: y$1,
        useDebugValue: _$1
    });

    /*
    Copyright (c) 2017 NAVER Corp.
    @egjs/agent project is licensed under the MIT license

    @egjs/agent JavaScript library


    @version 2.1.5
    */
    var win = typeof window !== "undefined" && window || {};
    var navigator = win.navigator;

    var parseRules = {
    	browser: [{
    		criteria: "PhantomJS",
    		identity: "PhantomJS"
    	}, {
    		criteria: /Whale/,
    		identity: "Whale",
    		versionSearch: "Whale"
    	}, {
    		criteria: /Edge/,
    		identity: "Edge",
    		versionSearch: "Edge"
    	}, {
    		criteria: /MSIE|Trident|Windows Phone/,
    		identity: "IE",
    		versionSearch: "IEMobile|MSIE|rv"
    	}, {
    		criteria: /MiuiBrowser/,
    		identity: "MIUI Browser",
    		versionSearch: "MiuiBrowser"
    	}, {
    		criteria: /SamsungBrowser/,
    		identity: "Samsung Internet",
    		versionSearch: "SamsungBrowser"
    	}, {
    		criteria: /SAMSUNG /,
    		identity: "Samsung Internet",
    		versionSearch: "Version"
    	}, {
    		criteria: /Chrome|CriOS/,
    		identity: "Chrome"
    	}, {
    		criteria: /Android/,
    		identity: "Android Browser",
    		versionSearch: "Version"
    	}, {
    		criteria: /iPhone|iPad/,
    		identity: "Safari",
    		versionSearch: "Version"
    	}, {
    		criteria: "Apple",
    		identity: "Safari",
    		versionSearch: "Version"
    	}, {
    		criteria: "Firefox",
    		identity: "Firefox"
    	}],
    	os: [{
    		criteria: /Windows Phone/,
    		identity: "Windows Phone",
    		versionSearch: "Windows Phone"
    	}, {
    		criteria: "Windows 2000",
    		identity: "Window",
    		versionAlias: "5.0"
    	}, {
    		criteria: /Windows NT/,
    		identity: "Window",
    		versionSearch: "Windows NT"
    	}, {
    		criteria: /iPhone|iPad/,
    		identity: "iOS",
    		versionSearch: "iPhone OS|CPU OS"
    	}, {
    		criteria: "Mac",
    		versionSearch: "OS X",
    		identity: "MAC"
    	}, {
    		criteria: /Android/,
    		identity: "Android"
    	}, {
    		criteria: /Tizen/,
    		identity: "Tizen"
    	}, {
    		criteria: /Web0S/,
    		identity: "WebOS"
    	}],

    	// Webview check condition
    	// ios: If has no version information
    	// Android 5.0 && chrome 40+: Presence of "; wv" in userAgent
    	// Under android 5.0: Presence of "NAVER" or "Daum" in userAgent
    	webview: [{
    		criteria: /iPhone|iPad/,
    		browserVersionSearch: "Version",
    		webviewBrowserVersion: /-1/
    	}, {
    		criteria: /iPhone|iPad|Android/,
    		webviewToken: /NAVER|DAUM|; wv/

    	}],
    	defaultString: {
    		browser: {
    			version: "-1",
    			name: "unknown"
    		},
    		os: {
    			version: "-1",
    			name: "unknown"
    		}
    	}
    };

    function filter(arr, compare) {
    	var result = [];

    	for (var i = 0; i < arr.length; i++) {
    		compare(arr[i]) && result.push(arr[i]);
    	}
    	return result;
    }

    function some(arr, compare) {
    	for (var i = 0; i < arr.length; i++) {
    		if (compare(arr[i])) {
    			return true;
    		}
    	}
    	return false;
    }

    var UA = void 0;

    function setUa(ua) {
    	UA = ua;
    }

    function isMatched(base, target) {
    	return target && target.test ? !!target.test(base) : base.indexOf(target) > -1;
    }

    function getIdentityStringFromArray(rules, defaultStrings) {
    	var matchedRule = filter(rules, function (rule) {
    		return isMatched(UA, rule.criteria);
    	})[0];

    	return matchedRule && matchedRule.identity || defaultStrings.name;
    }

    function getRule(rules, targetIdentity) {
    	return filter(rules, function (rule) {
    		var criteria = rule.criteria;
    		var identityMatched = new RegExp(rule.identity, "i").test(targetIdentity);

    		if (criteria ? identityMatched && isMatched(UA, criteria) : identityMatched) {
    			return true;
    		} else {
    			return false;
    		}
    	})[0];
    }

    function getBrowserName() {
    	return getIdentityStringFromArray(parseRules.browser, parseRules.defaultString.browser);
    }

    function getBrowserRule(browserName) {
    	var rule = getRule(parseRules.browser, browserName);

    	if (!rule) {
    		rule = {
    			criteria: browserName,
    			versionSearch: browserName,
    			identity: browserName
    		};
    	}

    	return rule;
    }

    function extractBrowserVersion(versionToken, ua) {
    	var browserVersion = parseRules.defaultString.browser.version;
    	var versionRegexResult = new RegExp("(" + versionToken + ")", "i").exec(ua);

    	if (!versionRegexResult) {
    		return browserVersion;
    	}

    	var versionTokenIndex = versionRegexResult.index;
    	var verTkn = versionRegexResult[0];

    	if (versionTokenIndex > -1) {
    		var versionIndex = versionTokenIndex + verTkn.length + 1;

    		browserVersion = ua.substring(versionIndex).split(" ")[0].replace(/_/g, ".").replace(/;|\)/g, "");
    	}
    	return browserVersion;
    }

    function getBrowserVersion(browserName) {
    	if (!browserName) {
    		return undefined;
    	}

    	// console.log(browserRule);
    	// const versionToken = browserRule ? browserRule.versionSearch : browserName;
    	var browserRule = getBrowserRule(browserName);
    	var versionToken = browserRule.versionSearch || browserName;
    	var browserVersion = extractBrowserVersion(versionToken, UA);

    	return browserVersion;
    }

    function isWebview() {
    	var webviewRules = parseRules.webview;
    	var browserVersion = void 0;

    	return some(filter(webviewRules, function (rule) {
    		return isMatched(UA, rule.criteria);
    	}), function (rule) {
    		browserVersion = extractBrowserVersion(rule.browserVersionSearch, UA);
    		if (isMatched(UA, rule.webviewToken) || isMatched(browserVersion, rule.webviewBrowserVersion)) {
    			return true;
    		} else {
    			return false;
    		}
    	});
    }

    function getOSRule(osName) {
    	return getRule(parseRules.os, osName);
    }

    function getOsName() {
    	return getIdentityStringFromArray(parseRules.os, parseRules.defaultString.os);
    }

    function getOsVersion(osName) {
    	var osRule = getOSRule(osName) || {};
    	var defaultOSVersion = parseRules.defaultString.os.version;
    	var osVersion = void 0;

    	if (!osName) {
    		return undefined;
    	}
    	if (osRule.versionAlias) {
    		return osRule.versionAlias;
    	}
    	var osVersionToken = osRule.versionSearch || osName;
    	var osVersionRegex = new RegExp("(" + osVersionToken + ")\\s([\\d_\\.]+|\\d_0)", "i");
    	var osVersionRegexResult = osVersionRegex.exec(UA);

    	if (osVersionRegexResult) {
    		osVersion = osVersionRegex.exec(UA)[2].replace(/_/g, ".").replace(/;|\)/g, "");
    	}
    	return osVersion || defaultOSVersion;
    }

    function getOs() {
    	var name = getOsName();
    	var version = getOsVersion(name);

    	return { name: name, version: version };
    }

    function getBrowser() {
    	var name = getBrowserName();
    	var version = getBrowserVersion(name);

    	return { name: name, version: version, webview: isWebview() };
    }

    function getIsMobile() {
    	return UA.indexOf("Mobi") !== -1;
    }

    /**
     * Copyright (c) NAVER Corp.
     * egjs-agent projects are licensed under the MIT license
     */

    /**
     * @namespace eg.agent
     */
    /**
     * Extracts browser and operating system information from the user agent string.
     * @ko 유저 에이전트 문자열에서 브라우저와 운영체제 정보를 추출한다.
     * @function eg.agent#agent
     * @param {String} [userAgent=navigator.userAgent] user agent string to parse <ko>파싱할 유저에이전트 문자열</ko>
     * @return {Object} agentInfo
     * @return {Object} agentInfo.os os Operating system information <ko>운영체제 정보</ko>
     * @return {String} agentInfo.os.name Operating system name (android, ios, window, mac, unknown) <ko>운영체제 이름 (android, ios, window, mac, unknown)</ko>
     * @return {String} agentInfo.os.version Operating system version <ko>운영체제 버전</ko>
     * @return {String} agentInfo.browser Browser information <ko>브라우저 정보</ko>
     * @return {String} agentInfo.browser.name Browser name (safari, chrome, sbrowser, ie, firefox, unknown) <ko>브라우저 이름 (safari, chrome, sbrowser, ie, firefox, unknown)</ko>
     * @return {String} agentInfo.browser.version Browser version <ko>브라우저 버전 </ko>
     * @return {Boolean} agentInfo.browser.webview Indicates whether the browser is inapp<ko>웹뷰 브라우저 여부</ko>
     * @return {Boolean} agentInfo.isMobile Indicates whether the browser is for mobile<ko>모바일 브라우저 여부</ko>
     * @example
    import agent from "@egjs/agent";

    const {os, browser, isMobile} = agent();
     */
    function agent() {
      var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : navigator.userAgent;

      setUa(ua);

      var agentInfo = {
        os: getOs(),
        browser: getBrowser(),
        isMobile: getIsMobile()
      };

      agentInfo.browser.name = agentInfo.browser.name.toLowerCase();
      agentInfo.os.name = agentInfo.os.name.toLowerCase();
      agentInfo.os.version = agentInfo.os.version.toLowerCase();

      if (agentInfo.os.name === "ios" && agentInfo.browser.webview) {
        agentInfo.browser.version = "-1";
      }

      return agentInfo;
    }
    /**
     * Version info string
     * @ko 버전정보 문자열
     * @name VERSION
     * @static
     * @type {String}
     * @example
     * eg.agent.VERSION;  // ex) 2.2.0
     * @memberof eg.agent
     */
    agent.VERSION = "2.1.5";

    /*
    Copyright (c) 2018 Daybrush
    @name: @daybrush/utils
    license: MIT
    author: Daybrush
    repository: https://github.com/daybrush/utils
    @version 0.10.1
    */
    /**
    * get string "function"
    * @memberof Consts
    * @example
    import {FUNCTION} from "@daybrush/utils";

    console.log(FUNCTION); // "function"
    */

    var FUNCTION = "function";
    /**
    * get string "object"
    * @memberof Consts
    * @example
    import {OBJECT} from "@daybrush/utils";

    console.log(OBJECT); // "object"
    */

    var OBJECT = "object";
    /**
    * get string "undefined"
    * @memberof Consts
    * @example
    import {UNDEFINED} from "@daybrush/utils";

    console.log(UNDEFINED); // "undefined"
    */

    var UNDEFINED = "undefined";

    /**
    * @namespace
    * @name Utils
    */

    /**
     * Returns the inner product of two numbers(`a1`, `a2`) by two criteria(`b1`, `b2`).
     * @memberof Utils
     * @param - The first number
     * @param - The second number
     * @param - The first number to base on the inner product
     * @param - The second number to base on the inner product
     * @return - Returns the inner product
    import { dot } from "@daybrush/utils";

    console.log(dot(0, 15, 2, 3)); // 6
    console.log(dot(5, 15, 2, 3)); // 9
    console.log(dot(5, 15, 1, 1)); // 10
     */

    function dot(a1, a2, b1, b2) {
      return (a1 * b2 + a2 * b1) / (b1 + b2);
    }
    /**
    * Check the type that the value is undefined.
    * @memberof Utils
    * @param {string} value - Value to check the type
    * @return {boolean} true if the type is correct, false otherwise
    * @example
    import {isUndefined} from "@daybrush/utils";

    console.log(isUndefined(undefined)); // true
    console.log(isUndefined("")); // false
    console.log(isUndefined(1)); // false
    console.log(isUndefined(null)); // false
    */

    function isUndefined$1(value) {
      return typeof value === UNDEFINED;
    }
    /**
    * Check the type that the value is object.
    * @memberof Utils
    * @param {string} value - Value to check the type
    * @return {} true if the type is correct, false otherwise
    * @example
    import {isObject} from "@daybrush/utils";

    console.log(isObject({})); // true
    console.log(isObject(undefined)); // false
    console.log(isObject("")); // false
    console.log(isObject(null)); // false
    */

    function isObject(value) {
      return value && typeof value === OBJECT;
    }
    /**
    * Check the type that the value is isArray.
    * @memberof Utils
    * @param {string} value - Value to check the type
    * @return {} true if the type is correct, false otherwise
    * @example
    import {isArray} from "@daybrush/utils";

    console.log(isArray([])); // true
    console.log(isArray({})); // false
    console.log(isArray(undefined)); // false
    console.log(isArray(null)); // false
    */

    function isArray(value) {
      return Array.isArray(value);
    }
    /**
    * Check the type that the value is function.
    * @memberof Utils
    * @param {string} value - Value to check the type
    * @return {} true if the type is correct, false otherwise
    * @example
    import {isFunction} from "@daybrush/utils";

    console.log(isFunction(function a() {})); // true
    console.log(isFunction(() => {})); // true
    console.log(isFunction("1234")); // false
    console.log(isFunction(1)); // false
    console.log(isFunction(null)); // false
    */

    function isFunction(value) {
      return typeof value === FUNCTION;
    }
    /**
    * divide text by bracket "(", ")".
    * @memberof Utils
    * @param {string} text - text to divide
    * @return {object} divided texts
    * @example
    import {splitBracket} from "@daybrush/utils";

    console.log(splitBracket("a(1, 2)"));
    // {prefix: "a", value: "1, 2", suffix: ""}
    console.log(splitBracket("a(1, 2)b"));
    // {prefix: "a", value: "1, 2", suffix: "b"}
    */

    function splitBracket(text) {
      var matches = /([^(]*)\(([\s\S]*)\)([\s\S]*)/g.exec(text);

      if (!matches || matches.length < 4) {
        return {};
      } else {
        return {
          prefix: matches[1],
          value: matches[2],
          suffix: matches[3]
        };
      }
    }
    /**
    * divide text by number and unit.
    * @memberof Utils
    * @param {string} text - text to divide
    * @return {} divided texts
    * @example
    import {splitUnit} from "@daybrush/utils";

    console.log(splitUnit("10px"));
    // {prefix: "", value: 10, unit: "px"}
    console.log(splitUnit("-10px"));
    // {prefix: "", value: -10, unit: "px"}
    console.log(splitUnit("a10%"));
    // {prefix: "a", value: 10, unit: "%"}
    */

    function splitUnit(text) {
      var matches = /^([^\d|e|\-|\+]*)((?:\d|\.|-|e-|e\+)+)(\S*)$/g.exec(text);

      if (!matches) {
        return {
          prefix: "",
          unit: "",
          value: NaN
        };
      }

      var prefix = matches[1];
      var value = matches[2];
      var unit = matches[3];
      return {
        prefix: prefix,
        unit: unit,
        value: parseFloat(value)
      };
    }
    /**
    * transform strings to camel-case
    * @memberof Utils
    * @param {String} text - string
    * @return {String} camel-case string
    * @example
    import {camelize} from "@daybrush/utils";

    console.log(camelize("transform-origin")); // transformOrigin
    console.log(camelize("abcd_efg")); // abcdEfg
    console.log(camelize("abcd efg")); // abcdEfg
    */

    function camelize(str) {
      return str.replace(/[\s-_]([a-z])/g, function (all, letter) {
        return letter.toUpperCase();
      });
    }
    /**
    * Returns the index of the first element in the array that satisfies the provided testing function.
    * @function
    * @memberof CrossBrowser
    * @param - The array `findIndex` was called upon.
    * @param - A function to execute on each value in the array until the function returns true, indicating that the satisfying element was found.
    * @param - Returns defaultIndex if not found by the function.
    * @example
    import { findIndex } from "@daybrush/utils";

    findIndex([{a: 1}, {a: 2}, {a: 3}, {a: 4}], ({ a }) => a === 2); // 1
    */

    function findIndex(arr, callback, defaultIndex) {
      if (defaultIndex === void 0) {
        defaultIndex = -1;
      }

      var length = arr.length;

      for (var i = 0; i < length; ++i) {
        if (callback(arr[i], i, arr)) {
          return i;
        }
      }

      return defaultIndex;
    }
    /**
    * Checks if the specified class value exists in the element's class attribute.
    * @memberof DOM
    * @param element - target
    * @param className - the class name to search
    * @return {boolean} return false if the class is not found.
    * @example
    import {hasClass} from "@daybrush/utils";

    console.log(hasClass(element, "start")); // true or false
    */

    function hasClass(element, className) {
      if (element.classList) {
        return element.classList.contains(className);
      }

      return !!element.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
    }
    /**
    * Add the specified class value. If these classe already exist in the element's class attribute they are ignored.
    * @memberof DOM
    * @param element - target
    * @param className - the class name to add
    * @example
    import {addClass} from "@daybrush/utils";

    addClass(element, "start");
    */

    function addClass(element, className) {
      if (element.classList) {
        element.classList.add(className);
      } else {
        element.className += " " + className;
      }
    }
    /**
    * Removes the specified class value.
    * @memberof DOM
    * @param element - target
    * @param className - the class name to remove
    * @example
    import {removeClass} from "@daybrush/utils";

    removeClass(element, "start");
    */

    function removeClass(element, className) {
      if (element.classList) {
        element.classList.remove(className);
      } else {
        var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
        element.className = element.className.replace(reg, " ");
      }
    }
    /**
    * Sets up a function that will be called whenever the specified event is delivered to the target
    * @memberof DOM
    * @param - event target
    * @param - A case-sensitive string representing the event type to listen for.
    * @param - The object which receives a notification (an object that implements the Event interface) when an event of the specified type occurs
    * @param - An options object that specifies characteristics about the event listener. The available options are:
    * @example
    import {addEvent} from "@daybrush/utils";

    addEvent(el, "click", e => {
      console.log(e);
    });
    */

    function addEvent(el, type, listener, options) {
      el.addEventListener(type, listener, options);
    }
    /**
    * removes from the EventTarget an event listener previously registered with EventTarget.addEventListener()
    * @memberof DOM
    * @param - event target
    * @param - A case-sensitive string representing the event type to listen for.
    * @param - The EventListener function of the event handler to remove from the event target.
    * @example
    import {addEvent, removeEvent} from "@daybrush/utils";
    const listener = e => {
      console.log(e);
    };
    addEvent(el, "click", listener);
    removeEvent(el, "click", listener);
    */

    function removeEvent(el, type, listener) {
      el.removeEventListener(type, listener);
    }

    /*
    Copyright (c) 2019 Daybrush
    name: preact-css-styler
    license: MIT
    author: Daybrush
    repository: https://github.com/daybrush/css-styler/tree/master/preact-css-styler
    version: 0.4.1
    */

    /*
    Copyright (c) 2018 Daybrush
    @name: @daybrush/utils
    license: MIT
    author: Daybrush
    repository: https://github.com/daybrush/utils
    @version 0.10.0
    */
    /**
    * divide text by comma.
    * @memberof Utils
    * @param {string} text - text to divide
    * @return {Array} divided texts
    * @example
    import {splitComma} from "@daybrush/utils";

    console.log(splitComma("a,b,c,d,e,f,g"));
    // ["a", "b", "c", "d", "e", "f", "g"]
    console.log(splitComma("'a,b',c,'d,e',f,g"));
    // ["'a,b'", "c", "'d,e'", "f", "g"]
    */

    function splitComma(text) {
      // divide comma(,)
      // "[^"]*"|'[^']*'
      var matches = text.match(/("[^"]*"|'[^']*'|[^,\s()]*\((?:[^()]*|\([^()]*\))*\)[^,\s()]*|[^,])+/g);
      return matches ? matches.map(function (str) {
        return str.trim();
      }) : [];
    }

    /*
    Copyright (c) 2019 Daybrush
    name: react-css-styler
    license: MIT
    author: Daybrush
    repository: https://github.com/daybrush/css-styler/tree/master/react-css-styler
    version: 0.4.0
    */

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */
    var extendStatics$1 = function (d, b) {
      extendStatics$1 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return extendStatics$1(d, b);
    };

    function __extends$1(d, b) {
      extendStatics$1(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign$1 = function () {
      __assign$1 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return __assign$1.apply(this, arguments);
    };
    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function hash(str) {
      var hash = 5381,
          i    = str.length;

      while(i) {
        hash = (hash * 33) ^ str.charCodeAt(--i);
      }

      /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
       * integers. Since we want the results to be always positive, convert the
       * signed int to an unsigned by doing an unsigned bitshift. */
      return hash >>> 0;
    }

    var stringHash = hash;

    function getHash(str) {
      return stringHash(str).toString(36);
    }
    function injectStyle(className, css) {
      var style = document.createElement("style");
      style.setAttribute("type", "text/css");
      style.innerHTML = css.replace(/([^}{]*){/mg, function (all, selector) {
        return splitComma(selector).map(function (subSelector) {
          if (subSelector.indexOf(":global") > -1) {
            return subSelector.replace(/\:global/g, "");
          } else if (subSelector.indexOf(":host") > -1) {
            return "" + subSelector.replace(/\:host/g, "." + className);
          }

          return "." + className + " " + subSelector;
        }).join(", ") + "{";
      });
      (document.head || document.body).appendChild(style);
      return style;
    }

    function styled(Tag, css) {
      var injectClassName = "rCS" + getHash(css);
      var injectCount = 0;
      var injectElement;
      return (
        /*#__PURE__*/
        function (_super) {
          __extends$1(Styler, _super);

          function Styler(props) {
            return _super.call(this, props) || this;
          }

          Styler.prototype.render = function () {
            var _a = this.props,
                className = _a.className,
                attributes = __rest(_a, ["className"]);

            return S(Tag, __assign$1({
              className: className + " " + injectClassName
            }, attributes));
          };

          Styler.prototype.componentDidMount = function () {
            if (injectCount === 0) {
              injectElement = injectStyle(injectClassName, css);
            }

            ++injectCount;
          };

          Styler.prototype.componentWillUnmount = function () {
            --injectCount;

            if (injectCount === 0 && injectElement) {
              injectElement.parentNode.removeChild(injectElement);
            }
          };

          Styler.prototype.getElement = function () {
            return this.element || (this.element = P$1(this));
          };

          return Styler;
        }(m)
      );
    }

    /*
    Copyright (c) 2019 Daybrush
    name: @daybrush/drag
    license: MIT
    author: Daybrush
    repository: git+https://github.com/daybrush/drag.git
    version: 0.10.2
    */

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign$2 = function () {
      __assign$2 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return __assign$2.apply(this, arguments);
    };

    function getPinchDragPosition(clients, prevClients, startClients, startPinchClients) {
      var nowCenter = getAverageClient(clients);
      var prevCenter = getAverageClient(prevClients);
      var startCenter = getAverageClient(startPinchClients);
      var pinchClient = getAddClient(startPinchClients[0], getMinusClient(nowCenter, startCenter));
      var pinchPrevClient = getAddClient(startPinchClients[0], getMinusClient(prevCenter, startCenter));
      return getPosition(pinchClient, pinchPrevClient, startClients[0]);
    }
    function isMultiTouch(e) {
      return e.touches && e.touches.length >= 2;
    }
    function getPositionEvent(e) {
      if (e.touches) {
        return getClients(e.touches);
      } else {
        return [getClient(e)];
      }
    }
    function getPosition(client, prevClient, startClient) {
      var clientX = client.clientX,
          clientY = client.clientY;
      var prevX = prevClient.clientX,
          prevY = prevClient.clientY;
      var startX = startClient.clientX,
          startY = startClient.clientY;
      var deltaX = clientX - prevX;
      var deltaY = clientY - prevY;
      var distX = clientX - startX;
      var distY = clientY - startY;
      return {
        clientX: clientX,
        clientY: clientY,
        deltaX: deltaX,
        deltaY: deltaY,
        distX: distX,
        distY: distY
      };
    }
    function getDist(clients) {
      return Math.sqrt(Math.pow(clients[0].clientX - clients[1].clientX, 2) + Math.pow(clients[0].clientY - clients[1].clientY, 2));
    }
    function getPositions(clients, prevClients, startClients) {
      return clients.map(function (client, i) {
        return getPosition(client, prevClients[i], startClients[i]);
      });
    }
    function getClients(touches) {
      var length = Math.min(touches.length, 2);
      var clients = [];

      for (var i = 0; i < length; ++i) {
        clients.push(getClient(touches[i]));
      }

      return clients;
    }
    function getClient(e) {
      return {
        clientX: e.clientX,
        clientY: e.clientY
      };
    }
    function getAverageClient(clients) {
      return {
        clientX: (clients[0].clientX + clients[1].clientX) / 2,
        clientY: (clients[0].clientY + clients[1].clientY) / 2
      };
    }
    function getAddClient(client1, client2) {
      return {
        clientX: client1.clientX + client2.clientX,
        clientY: client1.clientY + client2.clientY
      };
    }
    function getMinusClient(client1, client2) {
      return {
        clientX: client1.clientX - client2.clientX,
        clientY: client1.clientY - client2.clientY
      };
    }

    var Dragger =
    /*#__PURE__*/
    function () {
      function Dragger(el, options) {
        var _this = this;

        if (options === void 0) {
          options = {};
        }

        this.el = el;
        this.options = {};
        this.flag = false;
        this.pinchFlag = false;
        this.datas = {};
        this.isDrag = false;
        this.isPinch = false;
        this.isMouse = false;
        this.isTouch = false;
        this.prevClients = [];
        this.startClients = [];
        this.movement = 0;
        this.startPinchClients = [];
        this.startDistance = 0;
        this.customDist = [0, 0];

        this.onDragStart = function (e) {
          if (!_this.flag && e.cancelable === false) {
            return;
          }

          if (isMultiTouch(e)) {
            if (!_this.flag && e.touches.length !== e.changedTouches.length) {
              return;
            }

            if (!_this.pinchFlag) {
              _this.onPinchStart(e);
            }
          }

          if (_this.flag) {
            return;
          }

          var clients = _this.startClients[0] ? _this.startClients : getPositionEvent(e);
          _this.customDist = [0, 0];
          _this.flag = true;
          _this.isDrag = false;
          _this.startClients = clients;
          _this.prevClients = clients;
          _this.datas = {};
          _this.movement = 0;
          var position = getPosition(clients[0], _this.prevClients[0], _this.startClients[0]);
          var _a = _this.options,
              dragstart = _a.dragstart,
              preventRightClick = _a.preventRightClick;

          if (preventRightClick && e.which === 3 || (dragstart && dragstart(__assign$2({
            datas: _this.datas,
            inputEvent: e
          }, position))) === false) {
            _this.startClients = [];
            _this.prevClients = [];
            _this.flag = false;
          }

          _this.flag && e.preventDefault();
        };

        this.onDrag = function (e) {
          if (!_this.flag) {
            return;
          }

          var clients = getPositionEvent(e);

          if (_this.pinchFlag) {
            _this.onPinch(e, clients);
          }

          var result = _this.move([0, 0], e, clients);

          if (!result || !result.deltaX && !result.deltaY) {
            return;
          }

          var drag = _this.options.drag;
          drag && drag(__assign$2({}, result, {
            inputEvent: e
          }));
        };

        this.onDragEnd = function (e) {
          if (!_this.flag) {
            return;
          }

          if (_this.pinchFlag) {
            _this.onPinchEnd(e);
          }

          _this.flag = false;
          var dragend = _this.options.dragend;
          var prevClients = _this.prevClients;
          var startClients = _this.startClients;
          var position = _this.pinchFlag ? getPinchDragPosition(prevClients, prevClients, startClients, _this.startPinchClients) : getPosition(prevClients[0], prevClients[0], startClients[0]);
          _this.startClients = [];
          _this.prevClients = [];
          dragend && dragend(__assign$2({
            datas: _this.datas,
            isDrag: _this.isDrag,
            inputEvent: e
          }, position));
        };

        this.options = __assign$2({
          container: el,
          preventRightClick: true,
          pinchThreshold: 0,
          events: ["touch", "mouse"]
        }, options);
        var _a = this.options,
            container = _a.container,
            events = _a.events;
        this.isTouch = events.indexOf("touch") > -1;
        this.isMouse = events.indexOf("mouse") > -1;
        this.customDist = [0, 0];

        if (this.isMouse) {
          addEvent(el, "mousedown", this.onDragStart);
          addEvent(container, "mousemove", this.onDrag);
          addEvent(container, "mouseup", this.onDragEnd);
        }

        if (this.isTouch) {
          addEvent(el, "touchstart", this.onDragStart);
          addEvent(container, "touchmove", this.onDrag);
          addEvent(container, "touchend", this.onDragEnd);
        }
      }

      var __proto = Dragger.prototype;

      __proto.isDragging = function () {
        return this.isDrag;
      };

      __proto.isPinching = function () {
        return this.isPinch;
      };

      __proto.move = function (_a, inputEvent, clients) {
        var deltaX = _a[0],
            deltaY = _a[1];

        if (clients === void 0) {
          clients = this.prevClients;
        }

        var customDist = this.customDist;
        var prevClients = this.prevClients;
        var startClients = this.startClients;
        var position = this.pinchFlag ? getPinchDragPosition(clients, prevClients, startClients, this.startPinchClients) : getPosition(clients[0], prevClients[0], startClients[0]);
        customDist[0] += deltaX;
        customDist[1] += deltaY;
        position.deltaX += deltaX;
        position.deltaY += deltaY;
        var positionDeltaX = position.deltaX,
            positionDeltaY = position.deltaY;
        position.distX += customDist[0];
        position.distY += customDist[1];
        this.movement += Math.sqrt(positionDeltaX * positionDeltaX + positionDeltaY * positionDeltaY);
        this.prevClients = clients;
        this.isDrag = true;
        return __assign$2({
          datas: this.datas
        }, position, {
          inputEvent: inputEvent
        });
      };

      __proto.onPinchStart = function (e) {
        var _a, _b;

        var _c = this.options,
            pinchstart = _c.pinchstart,
            pinchThreshold = _c.pinchThreshold;

        if (this.isDrag && this.movement > pinchThreshold) {
          return;
        }

        var pinchClients = getClients(e.changedTouches);
        this.pinchFlag = true;

        (_a = this.startClients).push.apply(_a, pinchClients);

        (_b = this.prevClients).push.apply(_b, pinchClients);

        this.startDistance = getDist(this.prevClients);
        this.startPinchClients = this.prevClients.slice();

        if (!pinchstart) {
          return;
        }

        var startClients = this.prevClients;
        var startAverageClient = getAverageClient(startClients);
        var centerPosition = getPosition(startAverageClient, startAverageClient, startAverageClient);
        pinchstart(__assign$2({
          datas: this.datas,
          touches: getPositions(startClients, startClients, startClients)
        }, centerPosition, {
          inputEvent: e
        }));
      };

      __proto.onPinch = function (e, clients) {
        if (!this.flag || !this.pinchFlag) {
          return;
        }

        this.isPinch = true;
        var pinch = this.options.pinch;

        if (!pinch) {
          return;
        }

        var prevClients = this.prevClients;
        var startClients = this.startClients;
        var centerPosition = getPosition(getAverageClient(clients), getAverageClient(prevClients), getAverageClient(startClients));
        var distance = getDist(clients);
        pinch(__assign$2({
          datas: this.datas,
          touches: getPositions(clients, prevClients, startClients),
          scale: distance / this.startDistance,
          distance: distance
        }, centerPosition, {
          inputEvent: e
        }));
      };

      __proto.onPinchEnd = function (e) {
        if (!this.flag || !this.pinchFlag) {
          return;
        }

        var isPinch = this.isPinch;
        this.isPinch = false;
        this.pinchFlag = false;
        var pinchend = this.options.pinchend;

        if (!pinchend) {
          return;
        }

        var prevClients = this.prevClients;
        var startClients = this.startClients;
        var centerPosition = getPosition(getAverageClient(prevClients), getAverageClient(prevClients), getAverageClient(startClients));
        pinchend(__assign$2({
          datas: this.datas,
          isPinch: isPinch,
          touches: getPositions(prevClients, prevClients, startClients)
        }, centerPosition, {
          inputEvent: e
        }));
        this.isPinch = false;
        this.pinchFlag = false;
      };

      __proto.unset = function () {
        var el = this.el;
        var container = this.options.container;

        if (this.isMouse) {
          removeEvent(el, "mousedown", this.onDragStart);
          removeEvent(container, "mousemove", this.onDrag);
          removeEvent(container, "mouseup", this.onDragEnd);
        }

        if (this.isTouch) {
          removeEvent(el, "touchstart", this.onDragStart);
          removeEvent(container, "touchmove", this.onDrag);
          removeEvent(container, "touchend", this.onDragEnd);
        }
      };

      return Dragger;
    }();

    /*
    Copyright (c) 2019-present NAVER Corp.
    name: @egjs/list-differ
    license: MIT
    author: NAVER Corp.
    repository: https://github.com/naver/egjs-list-differ
    version: 1.0.0
    */
    /*
    egjs-list-differ
    Copyright (c) 2019-present NAVER Corp.
    MIT license
    */
    var PolyMap =
    /*#__PURE__*/
    function () {
      function PolyMap() {
        this.keys = [];
        this.values = [];
      }

      var __proto = PolyMap.prototype;

      __proto.get = function (key) {
        return this.values[this.keys.indexOf(key)];
      };

      __proto.set = function (key, value) {
        var keys = this.keys;
        var values = this.values;
        var prevIndex = keys.indexOf(key);
        var index = prevIndex === -1 ? keys.length : prevIndex;
        keys[index] = key;
        values[index] = value;
      };

      return PolyMap;
    }();

    /*
    egjs-list-differ
    Copyright (c) 2019-present NAVER Corp.
    MIT license
    */
    var HashMap =
    /*#__PURE__*/
    function () {
      function HashMap() {
        this.object = {};
      }

      var __proto = HashMap.prototype;

      __proto.get = function (key) {
        return this.object[key];
      };

      __proto.set = function (key, value) {
        this.object[key] = value;
      };

      return HashMap;
    }();

    /*
    egjs-list-differ
    Copyright (c) 2019-present NAVER Corp.
    MIT license
    */
    var SUPPORT_MAP = typeof Map === "function";

    /*
    egjs-list-differ
    Copyright (c) 2019-present NAVER Corp.
    MIT license
    */
    var Link =
    /*#__PURE__*/
    function () {
      function Link() {}

      var __proto = Link.prototype;

      __proto.connect = function (prevLink, nextLink) {
        this.prev = prevLink;
        this.next = nextLink;
        prevLink && (prevLink.next = this);
        nextLink && (nextLink.prev = this);
      };

      __proto.disconnect = function () {
        // In double linked list, diconnect the interconnected relationship.
        var prevLink = this.prev;
        var nextLink = this.next;
        prevLink && (prevLink.next = nextLink);
        nextLink && (nextLink.prev = prevLink);
      };

      __proto.getIndex = function () {
        var link = this;
        var index = -1;

        while (link) {
          link = link.prev;
          ++index;
        }

        return index;
      };

      return Link;
    }();

    /*
    egjs-list-differ
    Copyright (c) 2019-present NAVER Corp.
    MIT license
    */

    function orderChanged(changed, fixed) {
      // It is roughly in the order of these examples.
      // 4, 6, 0, 2, 1, 3, 5, 7
      var fromLinks = []; // 0, 1, 2, 3, 4, 5, 6, 7

      var toLinks = [];
      changed.forEach(function (_a) {
        var from = _a[0],
            to = _a[1];
        var link = new Link();
        fromLinks[from] = link;
        toLinks[to] = link;
      }); // `fromLinks` are connected to each other by double linked list.

      fromLinks.forEach(function (link, i) {
        link.connect(fromLinks[i - 1]);
      });
      return changed.filter(function (_, i) {
        return !fixed[i];
      }).map(function (_a, i) {
        var from = _a[0],
            to = _a[1];

        if (from === to) {
          return [0, 0];
        }

        var fromLink = fromLinks[from];
        var toLink = toLinks[to - 1];
        var fromIndex = fromLink.getIndex(); // Disconnect the link connected to `fromLink`.

        fromLink.disconnect(); // Connect `fromLink` to the right of `toLink`.

        if (!toLink) {
          fromLink.connect(undefined, fromLinks[0]);
        } else {
          fromLink.connect(toLink, toLink.next);
        }

        var toIndex = fromLink.getIndex();
        return [fromIndex, toIndex];
      });
    }

    var Result =
    /*#__PURE__*/
    function () {
      function Result(prevList, list, added, removed, changed, maintained, changedBeforeAdded, fixed) {
        this.prevList = prevList;
        this.list = list;
        this.added = added;
        this.removed = removed;
        this.changed = changed;
        this.maintained = maintained;
        this.changedBeforeAdded = changedBeforeAdded;
        this.fixed = fixed;
      }

      var __proto = Result.prototype;
      Object.defineProperty(__proto, "ordered", {
        get: function () {
          if (!this.cacheOrdered) {
            this.caculateOrdered();
          }

          return this.cacheOrdered;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(__proto, "pureChanged", {
        get: function () {
          if (!this.cachePureChanged) {
            this.caculateOrdered();
          }

          return this.cachePureChanged;
        },
        enumerable: true,
        configurable: true
      });

      __proto.caculateOrdered = function () {
        var ordered = orderChanged(this.changedBeforeAdded, this.fixed);
        var changed = this.changed;
        var pureChanged = [];
        this.cacheOrdered = ordered.filter(function (_a, i) {
          var from = _a[0],
              to = _a[1];
          var _b = changed[i],
              fromBefore = _b[0],
              toBefore = _b[1];

          if (from !== to) {
            pureChanged.push([fromBefore, toBefore]);
            return true;
          }
        });
        this.cachePureChanged = pureChanged;
      };

      return Result;
    }();

    /**
     *
     * @memberof eg.ListDiffer
     * @static
     * @function
     * @param - Previous List <ko> 이전 목록 </ko>
     * @param - List to Update <ko> 업데이트 할 목록 </ko>
     * @param - This callback function returns the key of the item. <ko> 아이템의 키를 반환하는 콜백 함수입니다.</ko>
     * @return - Returns the diff between `prevList` and `list` <ko> `prevList`와 `list`의 다른 점을 반환한다.</ko>
     * @example
     * import { diff } from "@egjs/list-differ";
     * // script => eg.ListDiffer.diff
     * const result = diff([0, 1, 2, 3, 4, 5], [7, 8, 0, 4, 3, 6, 2, 1], e => e);
     * // List before update
     * // [1, 2, 3, 4, 5]
     * console.log(result.prevList);
     * // Updated list
     * // [4, 3, 6, 2, 1]
     * console.log(result.list);
     * // Index array of values added to `list`
     * // [0, 1, 5]
     * console.log(result.added);
     * // Index array of values removed in `prevList`
     * // [5]
     * console.log(result.removed);
     * // An array of index pairs of `prevList` and `list` with different indexes from `prevList` and `list`
     * // [[0, 2], [4, 3], [3, 4], [2, 6], [1, 7]]
     * console.log(result.changed);
     * // The subset of `changed` and an array of index pairs that moved data directly. Indicate an array of absolute index pairs of `ordered`.(Formatted by: Array<[index of prevList, index of list]>)
     * // [[4, 3], [3, 4], [2, 6]]
     * console.log(result.pureChanged);
     * // An array of index pairs to be `ordered` that can synchronize `list` before adding data. (Formatted by: Array<[prevIndex, nextIndex]>)
     * // [[4, 1], [4, 2], [4, 3]]
     * console.log(result.ordered);
     * // An array of index pairs of `prevList` and `list` that have not been added/removed so data is preserved
     * // [[0, 2], [4, 3], [3, 4], [2, 6], [1, 7]]
     * console.log(result.maintained);
     */

    function diff(prevList, list, findKeyCallback) {
      var mapClass = SUPPORT_MAP ? Map : findKeyCallback ? HashMap : PolyMap;

      var callback = findKeyCallback || function (e) {
        return e;
      };

      var added = [];
      var removed = [];
      var maintained = [];
      var prevKeys = prevList.map(callback);
      var keys = list.map(callback);
      var prevKeyMap = new mapClass();
      var keyMap = new mapClass();
      var changedBeforeAdded = [];
      var fixed = [];
      var removedMap = {};
      var changed = [];
      var addedCount = 0;
      var removedCount = 0; // Add prevKeys and keys to the hashmap.

      prevKeys.forEach(function (key, prevListIndex) {
        prevKeyMap.set(key, prevListIndex);
      });
      keys.forEach(function (key, listIndex) {
        keyMap.set(key, listIndex);
      }); // Compare `prevKeys` and `keys` and add them to `removed` if they are not in `keys`.

      prevKeys.forEach(function (key, prevListIndex) {
        var listIndex = keyMap.get(key); // In prevList, but not in list, it is removed.

        if (typeof listIndex === "undefined") {
          ++removedCount;
          removed.push(prevListIndex);
        } else {
          removedMap[listIndex] = removedCount;
        }
      }); // Compare `prevKeys` and `keys` and add them to `added` if they are not in `prevKeys`.

      keys.forEach(function (key, listIndex) {
        var prevListIndex = prevKeyMap.get(key); // In list, but not in prevList, it is added.

        if (typeof prevListIndex === "undefined") {
          added.push(listIndex);
          ++addedCount;
        } else {
          maintained.push([prevListIndex, listIndex]);
          removedCount = removedMap[listIndex] || 0;
          changedBeforeAdded.push([prevListIndex - removedCount, listIndex - addedCount]);
          fixed.push(listIndex === prevListIndex);

          if (prevListIndex !== listIndex) {
            changed.push([prevListIndex, listIndex]);
          }
        }
      }); // Sort by ascending order of 'to(list's index).

      removed.reverse();
      return new Result(prevList, list, added, removed, changed, maintained, changedBeforeAdded, fixed);
    }

    /**
     * A module that checks diff when values are added, removed, or changed in an array.
     * @ko 배열 또는 오브젝트에서 값이 추가되거나 삭제되거나 순서가 변경사항을 체크하는 모듈입니다.
     * @memberof eg
     */

    var ListDiffer =
    /*#__PURE__*/
    function () {
      /**
       * @param - Initializing Data Array. <ko> 초기 설정할 데이터 배열.</ko>
       * @param - This callback function returns the key of the item. <ko> 아이템의 키를 반환하는 콜백 함수입니다.</ko>
       * @example
       * import ListDiffer from "@egjs/list-differ";
       * // script => eg.ListDiffer
       * const differ = new ListDiffer([0, 1, 2, 3, 4, 5], e => e);
       * const result = differ.update([7, 8, 0, 4, 3, 6, 2, 1]);
       * // List before update
       * // [1, 2, 3, 4, 5]
       * console.log(result.prevList);
       * // Updated list
       * // [4, 3, 6, 2, 1]
       * console.log(result.list);
       * // Index array of values added to `list`.
       * // [0, 1, 5]
       * console.log(result.added);
       * // Index array of values removed in `prevList`.
       * // [5]
       * console.log(result.removed);
       * // An array of index pairs of `prevList` and `list` with different indexes from `prevList` and `list`.
       * // [[0, 2], [4, 3], [3, 4], [2, 6], [1, 7]]
       * console.log(result.changed);
       * // The subset of `changed` and an array of index pairs that moved data directly. Indicate an array of absolute index pairs of `ordered`.(Formatted by: Array<[index of prevList, index of list]>)
       * // [[4, 3], [3, 4], [2, 6]]
       * console.log(result.pureChanged);
       * // An array of index pairs to be `ordered` that can synchronize `list` before adding data. (Formatted by: Array<[prevIndex, nextIndex]>)
       * // [[4, 1], [4, 2], [4, 3]]
       * console.log(result.ordered);
       * // An array of index pairs of `prevList` and `list` that have not been added/removed so data is preserved.
       * // [[0, 2], [4, 3], [3, 4], [2, 6], [1, 7]]
       * console.log(result.maintained);
       */
      function ListDiffer(list, findKeyCallback) {
        if (list === void 0) {
          list = [];
        }

        this.findKeyCallback = findKeyCallback;
        this.list = [].slice.call(list);
      }
      /**
       * Update list.
       * @ko 리스트를 업데이트를 합니다.
       * @param - List to update <ko> 업데이트할 리스트 </ko>
       * @return - Returns the results of an update from `prevList` to `list`.<ko> `prevList`에서 `list`로 업데이트한 결과를 반환한다. </ko>
       */


      var __proto = ListDiffer.prototype;

      __proto.update = function (list) {
        var newData = [].slice.call(list);
        var result = diff(this.list, newData, this.findKeyCallback);
        this.list = newData;
        return result;
      };

      return ListDiffer;
    }();

    /*
    Copyright (c) 2019-present NAVER Corp.
    name: @egjs/children-differ
    license: MIT
    author: NAVER Corp.
    repository: https://github.com/naver/egjs-children-differ
    version: 1.0.0
    */

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */
    var extendStatics$2 = function (d, b) {
      extendStatics$2 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return extendStatics$2(d, b);
    };

    function __extends$2(d, b) {
      extendStatics$2(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /*
    egjs-children-differ
    Copyright (c) 2019-present NAVER Corp.
    MIT license
    */
    var findKeyCallback = typeof Map === "function" ? undefined : function () {
      var childrenCount = 0;
      return function (el) {
        return el.__DIFF_KEY__ || (el.__DIFF_KEY__ = ++childrenCount);
      };
    }();

    /**
     * A module that checks diff when child are added, removed, or changed .
     * @ko 자식 노드들에서 자식 노드가 추가되거나 삭제되거나 순서가 변경된 사항을 체크하는 모듈입니다.
     * @memberof eg
     * @extends eg.ListDiffer
     */

    var ChildrenDiffer =
    /*#__PURE__*/
    function (_super) {
      __extends$2(ChildrenDiffer, _super);
      /**
       * @param - Initializing Children <ko> 초기 설정할 자식 노드들</ko>
       */


      function ChildrenDiffer(list) {
        if (list === void 0) {
          list = [];
        }

        return _super.call(this, list, findKeyCallback) || this;
      }

      return ChildrenDiffer;
    }(ListDiffer);

    /*
    Copyright (c) 2019 Daybrush
    name: preact-moveable
    license: MIT
    author: Daybrush
    repository: https://github.com/daybrush/moveable/blob/master/packages/preact-moveable
    version: 0.11.14
    */

    /*
    Copyright (c) 2019 Daybrush
    name: @moveable/matrix
    license: MIT
    author: Daybrush
    repository: git+https://github.com/daybrush/moveable.git
    version: 0.3.0
    */
    function add(matrix, inverseMatrix, startIndex, endIndex, fromStart, k) {
      for (var i = startIndex; i < endIndex; ++i) {
        matrix[i] += matrix[fromStart + i - startIndex] * k;
        inverseMatrix[i] += inverseMatrix[fromStart + i - startIndex] * k;
      }
    }

    function swap(matrix, inverseMatrix, startIndex, endIndex, fromStart) {
      for (var i = startIndex; i < endIndex; ++i) {
        var v = matrix[i];
        var iv = inverseMatrix[i];
        matrix[i] = matrix[fromStart + i - startIndex];
        matrix[fromStart + i - startIndex] = v;
        inverseMatrix[i] = inverseMatrix[fromStart + i - startIndex];
        inverseMatrix[fromStart + i - startIndex] = iv;
      }
    }

    function divide(matrix, inverseMatrix, startIndex, endIndex, k) {
      for (var i = startIndex; i < endIndex; ++i) {
        matrix[i] /= k;
        inverseMatrix[i] /= k;
      }
    }

    function ignoreDimension(matrix, m, n) {
      if (n === void 0) {
        n = Math.sqrt(matrix.length);
      }

      var newMatrix = matrix.slice();

      for (var i = 0; i < n; ++i) {
        newMatrix[i * n + m - 1] = 0;
        newMatrix[(m - 1) * n + i] = 0;
      }

      newMatrix[(m - 1) * (n + 1)] = 1;
      return newMatrix;
    }
    function invert(matrix, n) {
      if (n === void 0) {
        n = Math.sqrt(matrix.length);
      }

      var newMatrix = matrix.slice();
      var inverseMatrix = createIdentityMatrix(n);

      for (var i = 0; i < n; ++i) {
        var startIndex = n * i;
        var endIndex = n * (i + 1);
        var identityIndex = startIndex + i;

        if (newMatrix[identityIndex] === 0) {
          for (var j = i + 1; j < n; ++j) {
            if (newMatrix[n * j + i]) {
              swap(newMatrix, inverseMatrix, startIndex, endIndex, n * j);
              break;
            }
          }
        }

        if (newMatrix[identityIndex]) {
          divide(newMatrix, inverseMatrix, startIndex, endIndex, newMatrix[identityIndex]);
        } else {
          // no inverse matrix
          return [];
        }

        for (var j = 0; j < n; ++j) {
          var targetStartIndex = n * j;
          var targetEndIndex = targetStartIndex + n;
          var targetIndex = targetStartIndex + i;
          var target = newMatrix[targetIndex];

          if (target === 0 || i === j) {
            continue;
          }

          add(newMatrix, inverseMatrix, targetStartIndex, targetEndIndex, startIndex, -target);
        }
      }

      return inverseMatrix;
    }
    function transpose(matrix, n) {
      if (n === void 0) {
        n = Math.sqrt(matrix.length);
      }

      var newMatrix = [];

      for (var i = 0; i < n; ++i) {
        for (var j = 0; j < n; ++j) {
          newMatrix[j * n + i] = matrix[n * i + j];
        }
      }

      return newMatrix;
    }
    function getRad(pos1, pos2) {
      var distX = pos2[0] - pos1[0];
      var distY = pos2[1] - pos1[1];
      var rad = Math.atan2(distY, distX);
      return rad > 0 ? rad : rad + Math.PI * 2;
    }
    function getOrigin(matrix, n) {
      if (n === void 0) {
        n = Math.sqrt(matrix.length);
      }

      var originMatrix = [];

      for (var i = 0; i < n - 1; ++i) {
        originMatrix[i] = matrix[(i + 1) * n - 1];
      }

      originMatrix[n - 1] = 0;
      return originMatrix;
    }
    function convertPositionMatrix(matrix, n) {
      var newMatrix = matrix.slice();

      for (var i = matrix.length; i < n - 1; ++i) {
        newMatrix[i] = 0;
      }

      newMatrix[n - 1] = 1;
      return newMatrix;
    }
    function convertDimension(matrix, n, m) {
      if (n === void 0) {
        n = Math.sqrt(matrix.length);
      } // n < m


      if (n === m) {
        return matrix;
      }

      var newMatrix = createIdentityMatrix(m);
      var length = Math.min(n, m);

      for (var i = 0; i < length - 1; ++i) {
        for (var j = 0; j < length - 1; ++j) {
          newMatrix[i * m + j] = matrix[i * n + j];
        }

        newMatrix[(i + 1) * m - 1] = matrix[(i + 1) * n - 1];
        newMatrix[(m - 1) * m + i] = matrix[(n - 1) * n + i];
      }

      newMatrix[m * m - 1] = matrix[n * n - 1];
      return newMatrix;
    }
    function multiplies(n) {
      var matrixes = [];

      for (var _i = 1; _i < arguments.length; _i++) {
        matrixes[_i - 1] = arguments[_i];
      }

      var m = createIdentityMatrix(n);
      matrixes.forEach(function (matrix) {
        m = multiply(m, matrix, n);
      });
      return m;
    }
    function multiply(matrix, matrix2, n) {
      var newMatrix = []; // n * m X m * k

      var m = matrix.length / n;
      var k = matrix2.length / m;

      if (!m) {
        return matrix2;
      } else if (!k) {
        return matrix;
      }

      for (var i = 0; i < n; ++i) {
        for (var j = 0; j < k; ++j) {
          newMatrix[i * k + j] = 0;

          for (var l = 0; l < m; ++l) {
            newMatrix[i * k + j] += matrix[i * m + l] * matrix2[l * k + j];
          }
        }
      } // n * k


      return newMatrix;
    }
    function multiplyCSS(matrix, matrix2, n) {
      if (n === void 0) {
        n = Math.sqrt(matrix.length);
      }

      var newMatrix = []; // n(y) * m(x) X m(y) * k(x)

      var m = matrix.length / n;
      var k = matrix2.length / m;

      for (var i = 0; i < n; ++i) {
        for (var j = 0; j < k; ++j) {
          newMatrix[i + j * k] = 0;

          for (var l = 0; l < m; ++l) {
            newMatrix[i + j * k] += matrix[i + l * m] * matrix2[l + j * k];
          }
        }
      } // n * k


      return newMatrix;
    }
    function average() {
      var nums = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
      }

      var length = nums.length;
      var total = 0;

      for (var i = length - 1; i >= 0; --i) {
        total += nums[i];
      }

      return length ? total / length : 0;
    }
    function plus(pos1, pos2) {
      var length = Math.min(pos1.length, pos2.length);
      var nextPos = pos1.slice();

      for (var i = 0; i < length; ++i) {
        nextPos[i] = nextPos[i] + pos2[i];
      }

      return nextPos;
    }
    function minus(pos1, pos2) {
      var length = Math.min(pos1.length, pos2.length);
      var nextPos = pos1.slice();

      for (var i = 0; i < length; ++i) {
        nextPos[i] = nextPos[i] - pos2[i];
      }

      return nextPos;
    }
    function caculate(matrix, matrix2, n) {
      if (n === void 0) {
        n = matrix2.length;
      }

      var result = multiply(matrix, matrix2, n);
      var k = result[n - 1];
      return result.map(function (v) {
        return v / k;
      });
    }
    function rotate(pos, rad) {
      return caculate(createRotateMatrix(rad, 3), convertPositionMatrix(pos, 3));
    }
    function convertCSStoMatrix(a) {
      if (a.length === 6) {
        return [a[0], a[2], a[4], a[1], a[3], a[5], 0, 0, 1];
      }

      return transpose(a);
    }
    function convertMatrixtoCSS(a) {
      if (a.length === 9) {
        return [a[0], a[3], a[1], a[4], a[2], a[5]];
      }

      return transpose(a);
    }
    function createRotateMatrix(rad, n) {
      var cos = Math.cos(rad);
      var sin = Math.sin(rad);
      var m = createIdentityMatrix(n);
      m[0] = cos;
      m[1] = -sin;
      m[n] = sin;
      m[n + 1] = cos;
      return m;
    }
    function createIdentityMatrix(n) {
      var length = n * n;
      var matrix = [];

      for (var i = 0; i < length; ++i) {
        matrix[i] = i % (n + 1) ? 0 : 1;
      }

      return matrix;
    }
    function createScaleMatrix(scale, n) {
      var m = createIdentityMatrix(n);
      var length = Math.min(scale.length, n - 1);

      for (var i = 0; i < length; ++i) {
        m[(n + 1) * i] = scale[i];
      }

      return m;
    }
    function createOriginMatrix(origin, n) {
      var m = createIdentityMatrix(n);
      var length = Math.min(origin.length, n - 1);

      for (var i = 0; i < length; ++i) {
        m[n * (i + 1) - 1] = origin[i];
      }

      return m;
    }
    function createWarpMatrix(pos0, pos1, pos2, pos3, nextPos0, nextPos1, nextPos2, nextPos3) {
      var x0 = pos0[0],
          y0 = pos0[1];
      var x1 = pos1[0],
          y1 = pos1[1];
      var x2 = pos2[0],
          y2 = pos2[1];
      var x3 = pos3[0],
          y3 = pos3[1];
      var u0 = nextPos0[0],
          v0 = nextPos0[1];
      var u1 = nextPos1[0],
          v1 = nextPos1[1];
      var u2 = nextPos2[0],
          v2 = nextPos2[1];
      var u3 = nextPos3[0],
          v3 = nextPos3[1];
      var matrix = [x0, y0, 1, 0, 0, 0, -u0 * x0, -u0 * y0, 0, 0, 0, x0, y0, 1, -v0 * x0, -v0 * y0, x1, y1, 1, 0, 0, 0, -u1 * x1, -u1 * y1, 0, 0, 0, x1, y1, 1, -v1 * x1, -v1 * y1, x2, y2, 1, 0, 0, 0, -u2 * x2, -u2 * y2, 0, 0, 0, x2, y2, 1, -v2 * x2, -v2 * y2, x3, y3, 1, 0, 0, 0, -u3 * x3, -u3 * y3, 0, 0, 0, x3, y3, 1, -v3 * x3, -v3 * y3];
      var inverseMatrix = invert(matrix, 8);

      if (!inverseMatrix.length) {
        return [];
      }

      var h = multiply(inverseMatrix, [u0, v0, u1, v1, u2, v2, u3, v3], 8);
      h[8] = 1;
      return convertDimension(h, 3, 4);
    }

    /*
    Copyright (c) 2019 Daybrush
    name: react-moveable
    license: MIT
    author: Daybrush
    repository: https://github.com/daybrush/moveable/blob/master/packages/react-moveable
    version: 0.12.14
    */

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */
    var extendStatics$3 = function (d, b) {
      extendStatics$3 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return extendStatics$3(d, b);
    };

    function __extends$3(d, b) {
      extendStatics$3(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign$3 = function () {
      __assign$3 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return __assign$3.apply(this, arguments);
    };

    var agent$1 = agent();
    var isWebkit = agent$1.os.name.indexOf("ios") > -1 || agent$1.browser.name.indexOf("safari") > -1;
    var PREFIX = "moveable-";
    var MOVEABLE_CSS = prefixCSS(PREFIX, "\n{\n\tposition: fixed;\n\twidth: 0;\n\theight: 0;\n\tleft: 0;\n\ttop: 0;\n\tz-index: 3000;\n}\n.control-box {\n    z-index: 0;\n}\n.line, .control {\n\tleft: 0;\n\ttop: 0;\n}\n.control {\n\tposition: absolute;\n\twidth: 14px;\n\theight: 14px;\n\tborder-radius: 50%;\n\tborder: 2px solid #fff;\n\tbox-sizing: border-box;\n\tbackground: #4af;\n\tmargin-top: -7px;\n    margin-left: -7px;\n    z-index: 10;\n}\n.line {\n\tposition: absolute;\n\twidth: 1px;\n\theight: 1px;\n\tbackground: #4af;\n\ttransform-origin: 0px 0.5px;\n}\n.line.rotation-line {\n\theight: 40px;\n\twidth: 1px;\n\ttransform-origin: 0.5px 39.5px;\n}\n.line.rotation-line .control {\n\tborder-color: #4af;\n\tbackground:#fff;\n\tcursor: alias;\n}\n.line.vertical.bold {\n    width: 2px;\n    margin-left: -1px;\n}\n.line.horizontal.bold {\n    height: 2px;\n    margin-top: -1px;\n}\n.control.origin {\n\tborder-color: #f55;\n\tbackground: #fff;\n\twidth: 12px;\n\theight: 12px;\n\tmargin-top: -6px;\n\tmargin-left: -6px;\n\tpointer-events: none;\n}\n.direction.e, .direction.w {\n\tcursor: ew-resize;\n}\n.direction.s, .direction.n {\n\tcursor: ns-resize;\n}\n.direction.nw, .direction.se, :host.reverse .direction.ne, :host.reverse .direction.sw {\n\tcursor: nwse-resize;\n}\n.direction.ne, .direction.sw, :host.reverse .direction.nw, :host.reverse .direction.se {\n\tcursor: nesw-resize;\n}\n.group {\n    z-index: -1;\n}\n.area {\n    position: absolute;\n}\n.area.avoid, .area.avoid:before, .area.avoid:after {\n    transform-origin: 50% calc(100% + 20px);\n}\n.area.avoid:before, .area.avoid:after {\n    content: \"\";\n    top: 0px;\n    left: 0px;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n}\n\n.area.avoid:before {\n    transform: rotate(120deg);\n}\n.area.avoid:after {\n    transform: rotate(-120deg);\n}\n" + (isWebkit ? ":global svg *:before {\n\tcontent:\"\";\n\ttransform-origin: inherit;\n}" : "") + "\n");
    var NEARBY_POS = [[0, 1, 2], [1, 0, 3], [2, 0, 3], [3, 1, 2]];
    var TINY_NUM = 0.0000001;
    var MIN_SCALE = 0.000000001;
    var MAX_NUM = Math.pow(10, 10);
    var MIN_NUM = -MAX_NUM;
    var DIRECTION_INDEXES = {
      n: [0, 1],
      s: [2, 3],
      w: [2, 0],
      e: [1, 3],
      nw: [0],
      ne: [1],
      sw: [2],
      se: [3]
    };

    function multiply2(pos1, pos2) {
      return [pos1[0] * pos2[0], pos1[1] * pos2[1]];
    }
    function prefix() {
      var classNames = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        classNames[_i] = arguments[_i];
      }

      return prefixNames.apply(void 0, [PREFIX].concat(classNames));
    }
    function createIdentityMatrix3() {
      return createIdentityMatrix(3);
    }
    function getTransformMatrix(transform) {
      if (!transform || transform === "none") {
        return [1, 0, 0, 1, 0, 0];
      }

      if (isObject(transform)) {
        return transform;
      }

      var value = splitBracket(transform).value;
      return value.split(/s*,\s*/g).map(function (v) {
        return parseFloat(v);
      });
    }
    function getAbsoluteMatrix(matrix, n, origin) {
      return multiplies(n, createOriginMatrix(origin, n), matrix, createOriginMatrix(origin.map(function (a) {
        return -a;
      }), n));
    }
    function measureSVGSize(el, unit, isHorizontal) {
      if (unit === "%") {
        var viewBox = el.ownerSVGElement.viewBox.baseVal;
        return viewBox[isHorizontal ? "width" : "height"] / 100;
      }

      return 1;
    }
    function getBeforeTransformOrigin(el) {
      var relativeOrigin = getTransformOrigin(getComputedStyle(el, ":before"));
      return relativeOrigin.map(function (o, i) {
        var _a = splitUnit(o),
            value = _a.value,
            unit = _a.unit;

        return value * measureSVGSize(el, unit, i === 0);
      });
    }
    function getTransformOrigin(style) {
      var transformOrigin = style.transformOrigin;
      return transformOrigin ? transformOrigin.split(" ") : ["0", "0"];
    }
    function getOffsetInfo(el, lastParent, isParent) {
      var body = document.body;
      var target = !el || isParent ? el : el.parentElement;
      var isEnd = false;

      while (target && target !== body) {
        if (lastParent === target) {
          isEnd = true;
        }

        var _a = getComputedStyle(target),
            position = _a.position,
            transform = _a.transform;

        if (position !== "static" || transform && transform !== "none") {
          break;
        }

        target = target.parentElement;
      }

      return {
        isEnd: isEnd || !target || target === body,
        offsetParent: target || body
      };
    }
    function caculateMatrixStack(target, container, prevMatrix, prevN) {
      var _a;

      var el = target;
      var matrixes = [];
      var isSVGGraphicElement = el.tagName.toLowerCase() !== "svg" && "ownerSVGElement" in el;
      var originalContainer = container || document.body;
      var isEnd = false;
      var is3d = false;
      var n = 3;
      var transformOrigin;
      var targetMatrix;

      if (prevMatrix) {
        container = target.parentElement;
      }

      while (el && !isEnd) {
        var style = getComputedStyle(el);
        var tagName = el.tagName.toLowerCase();
        var position = style.position;
        var isFixed = position === "fixed";
        var transform_1 = style.transform;
        var matrix = convertCSStoMatrix(getTransformMatrix(transform_1));

        if (!is3d && matrix.length === 16) {
          is3d = true;
          n = 4;
          var matrixesLength = matrixes.length;

          for (var i = 0; i < matrixesLength; ++i) {
            matrixes[i] = convertDimension(matrixes[i], 3, 4);
          }
        }

        if (is3d && matrix.length === 9) {
          matrix = convertDimension(matrix, 3, 4);
        }

        var offsetLeft = el.offsetLeft;
        var offsetTop = el.offsetTop;

        if (isFixed) {
          var containerRect = (container || document.documentElement).getBoundingClientRect();
          offsetLeft -= containerRect.left;
          offsetTop -= containerRect.top;
        } // svg


        var isSVG = isUndefined$1(offsetLeft);
        var hasNotOffset = isSVG;
        var origin = void 0; // inner svg element

        if (hasNotOffset && tagName !== "svg") {
          origin = isWebkit ? getBeforeTransformOrigin(el) : getTransformOrigin(style).map(function (pos) {
            return parseFloat(pos);
          });
          hasNotOffset = false;

          if (tagName === "g") {
            offsetLeft = 0;
            offsetTop = 0;
          } else {
            _a = getSVGGraphicsOffset(el, origin), offsetLeft = _a[0], offsetTop = _a[1], origin[0] = _a[2], origin[1] = _a[3];
          }
        } else {
          origin = getTransformOrigin(style).map(function (pos) {
            return parseFloat(pos);
          });
        }

        if (tagName === "svg" && targetMatrix) {
          matrixes.push(getSVGMatrix(el, n), createIdentityMatrix(n));
        }

        var parentElement = el.parentElement;

        if (isWebkit && !hasNotOffset && !isSVG) {
          var _b = getOffsetInfo(el, container),
              isWebkitEnd = _b.isEnd,
              offsetParent = _b.offsetParent;

          parentElement = offsetParent;
          offsetLeft -= (parentElement || container || document.body).offsetLeft;
          offsetTop -= (parentElement || container || document.body).offsetTop;
          isEnd = isEnd || isWebkitEnd;
        }

        matrixes.push(getAbsoluteMatrix(matrix, n, origin), createOriginMatrix([hasNotOffset ? el : offsetLeft, hasNotOffset ? origin : offsetTop], n));

        if (!targetMatrix) {
          targetMatrix = matrix;
        }

        if (!transformOrigin) {
          transformOrigin = origin;
        }

        if (isEnd || isFixed) {
          break;
        } else if (isWebkit) {
          el = parentElement;
        } else {
          var _c = getOffsetInfo(el, container),
              offsetParent = _c.offsetParent,
              isOffsetEnd = _c.isEnd;

          el = offsetParent;
          isEnd = isOffsetEnd;
        }
      }

      var mat = prevMatrix ? convertDimension(prevMatrix, prevN, n) : createIdentityMatrix(n);
      var beforeMatrix = prevMatrix ? convertDimension(prevMatrix, prevN, n) : createIdentityMatrix(n);
      var offsetMatrix = createIdentityMatrix(n);
      var length = matrixes.length;
      var endContainer = getOffsetInfo(originalContainer, originalContainer, true).offsetParent;
      matrixes.reverse();
      matrixes.forEach(function (matrix, i) {
        var _a;

        if (length - 2 === i) {
          beforeMatrix = mat.slice();
        }

        if (length - 1 === i) {
          offsetMatrix = mat.slice();
        }

        if (isObject(matrix[n - 1])) {
          _a = getSVGOffset(matrix[n - 1], endContainer, n, matrix[2 * n - 1], mat, matrixes[i + 1]), matrix[n - 1] = _a[0], matrix[2 * n - 1] = _a[1];
        }

        mat = multiply(mat, matrix, n);
      });
      var isMatrix3d = !isSVGGraphicElement && is3d;
      var transform = (isMatrix3d ? "matrix3d" : "matrix") + "(" + convertMatrixtoCSS(isSVGGraphicElement && targetMatrix.length === 16 ? convertDimension(targetMatrix, 4, 3) : targetMatrix) + ")";
      return [beforeMatrix, offsetMatrix, mat, targetMatrix, transform, transformOrigin, is3d];
    }
    function getSVGMatrix(el, n) {
      var clientWidth = el.clientWidth;
      var clientHeight = el.clientHeight;
      var viewBox = el.viewBox.baseVal;
      var viewBoxWidth = viewBox.width || clientWidth;
      var viewBoxHeight = viewBox.height || clientHeight;
      var scaleX = clientWidth / viewBoxWidth;
      var scaleY = clientHeight / viewBoxHeight;
      var preserveAspectRatio = el.preserveAspectRatio.baseVal; // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio

      var align = preserveAspectRatio.align; // 1 : meet 2: slice

      var meetOrSlice = preserveAspectRatio.meetOrSlice;
      var svgOrigin = [0, 0];
      var scale = [scaleX, scaleY];
      var translate = [0, 0];

      if (align !== 1) {
        var xAlign = (align - 2) % 3;
        var yAlign = Math.floor((align - 2) / 3);
        svgOrigin[0] = viewBoxWidth * xAlign / 2;
        svgOrigin[1] = viewBoxHeight * yAlign / 2;
        var scaleDimension = meetOrSlice === 2 ? Math.max(scaleY, scaleX) : Math.min(scaleX, scaleY);
        scale[0] = scaleDimension;
        scale[1] = scaleDimension;
        translate[0] = (clientWidth - viewBoxWidth) / 2 * xAlign;
        translate[1] = (clientHeight - viewBoxHeight) / 2 * yAlign;
      }

      var scaleMatrix = createScaleMatrix(scale, n);
      scaleMatrix[n - 1] = translate[0], scaleMatrix[2 * n - 1] = translate[1];
      return getAbsoluteMatrix(scaleMatrix, n, svgOrigin);
    }
    function getSVGGraphicsOffset(el, origin) {
      if (!el.getBBox) {
        return [0, 0];
      }

      var bbox = el.getBBox();
      var svgElement = el.ownerSVGElement;
      var viewBox = svgElement.viewBox.baseVal;
      var left = bbox.x - viewBox.x;
      var top = bbox.y - viewBox.y;
      return [left, top, origin[0] - left, origin[1] - top];
    }
    function caculatePosition(matrix, pos, n) {
      return caculate(matrix, convertPositionMatrix(pos, n), n);
    }
    function caculatePoses(matrix, width, height, n) {
      var pos1 = caculatePosition(matrix, [0, 0], n);
      var pos2 = caculatePosition(matrix, [width, 0], n);
      var pos3 = caculatePosition(matrix, [0, height], n);
      var pos4 = caculatePosition(matrix, [width, height], n);
      return [pos1, pos2, pos3, pos4];
    }
    function getRect(poses) {
      var posesX = poses.map(function (pos) {
        return pos[0];
      });
      var posesY = poses.map(function (pos) {
        return pos[1];
      });
      var left = Math.min.apply(Math, posesX);
      var top = Math.min.apply(Math, posesY);
      var right = Math.max.apply(Math, posesX);
      var bottom = Math.max.apply(Math, posesY);
      var rectWidth = right - left;
      var rectHeight = bottom - top;
      return {
        left: left,
        top: top,
        right: right,
        bottom: bottom,
        width: rectWidth,
        height: rectHeight
      };
    }
    function caculateRect(matrix, width, height, n) {
      var poses = caculatePoses(matrix, width, height, n);
      return getRect(poses);
    }
    function getSVGOffset(el, container, n, origin, beforeMatrix, absoluteMatrix) {
      var _a;

      var _b = getSize(el),
          width = _b[0],
          height = _b[1];

      var containerRect = (container || document.documentElement).getBoundingClientRect();
      var rect = el.getBoundingClientRect();
      var rectLeft = rect.left - containerRect.left;
      var rectTop = rect.top - containerRect.top;
      var rectWidth = rect.width;
      var rectHeight = rect.height;
      var mat = multiplies(n, beforeMatrix, absoluteMatrix);

      var _c = caculateRect(mat, width, height, n),
          prevLeft = _c.left,
          prevTop = _c.top,
          prevWidth = _c.width,
          prevHeight = _c.height;

      var posOrigin = caculatePosition(mat, origin, n);
      var prevOrigin = minus(posOrigin, [prevLeft, prevTop]);
      var rectOrigin = [rectLeft + prevOrigin[0] * rectWidth / prevWidth, rectTop + prevOrigin[1] * rectHeight / prevHeight];
      var offset = [0, 0];
      var count = 0;

      while (++count < 10) {
        var inverseBeforeMatrix = invert(beforeMatrix, n);
        _a = minus(caculatePosition(inverseBeforeMatrix, rectOrigin, n), caculatePosition(inverseBeforeMatrix, posOrigin, n)), offset[0] = _a[0], offset[1] = _a[1];
        var mat2 = multiplies(n, beforeMatrix, createOriginMatrix(offset, n), absoluteMatrix);

        var _d = caculateRect(mat2, width, height, n),
            nextLeft = _d.left,
            nextTop = _d.top;

        var distLeft = nextLeft - rectLeft;
        var distTop = nextTop - rectTop;

        if (Math.abs(distLeft) < 2 && Math.abs(distTop) < 2) {
          break;
        }

        rectOrigin[0] -= distLeft;
        rectOrigin[1] -= distTop;
      }

      return offset.map(function (p) {
        return Math.round(p);
      });
    }
    function caculateMoveablePosition(matrix, origin, width, height) {
      var is3d = matrix.length === 16;
      var n = is3d ? 4 : 3;

      var _a = caculatePoses(matrix, width, height, n),
          _b = _a[0],
          x1 = _b[0],
          y1 = _b[1],
          _c = _a[1],
          x2 = _c[0],
          y2 = _c[1],
          _d = _a[2],
          x3 = _d[0],
          y3 = _d[1],
          _e = _a[3],
          x4 = _e[0],
          y4 = _e[1];

      var _f = caculatePosition(matrix, origin, n),
          originX = _f[0],
          originY = _f[1];

      var left = Math.min(x1, x2, x3, x4);
      var top = Math.min(y1, y2, y3, y4);
      var right = Math.max(x1, x2, x3, x4);
      var bottom = Math.max(y1, y2, y3, y4);
      x1 = x1 - left || 0;
      x2 = x2 - left || 0;
      x3 = x3 - left || 0;
      x4 = x4 - left || 0;
      y1 = y1 - top || 0;
      y2 = y2 - top || 0;
      y3 = y3 - top || 0;
      y4 = y4 - top || 0;
      originX = originX - left || 0;
      originY = originY - top || 0;
      var center = [(x1 + x2 + x3 + x4) / 4, (y1 + y2 + y3 + y4) / 4];
      var pos1Rad = getRad(center, [x1, y1]);
      var pos2Rad = getRad(center, [x2, y2]);
      var direction = pos1Rad < pos2Rad && pos2Rad - pos1Rad < Math.PI || pos1Rad > pos2Rad && pos2Rad - pos1Rad < -Math.PI ? 1 : -1;
      return [[left, top, right, bottom], [originX, originY], [x1, y1], [x2, y2], [x3, y3], [x4, y4], direction];
    }
    function getLineStyle(pos1, pos2) {
      var distX = pos2[0] - pos1[0];
      var distY = pos2[1] - pos1[1];
      var width = Math.sqrt(distX * distX + distY * distY);
      var rad = getRad(pos1, pos2);
      return {
        transform: "translate(" + pos1[0] + "px, " + pos1[1] + "px) rotate(" + rad + "rad)",
        width: width + "px"
      };
    }
    function getControlTransform() {
      var poses = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        poses[_i] = arguments[_i];
      }

      var length = poses.length;
      var x = poses.reduce(function (prev, pos) {
        return prev + pos[0];
      }, 0) / length;
      var y = poses.reduce(function (prev, pos) {
        return prev + pos[1];
      }, 0) / length;
      return {
        transform: "translate(" + x + "px, " + y + "px)"
      };
    }
    function getSize(target, style, isOffset, isBoxSizing) {
      if (style === void 0) {
        style = getComputedStyle(target);
      }

      if (isBoxSizing === void 0) {
        isBoxSizing = isOffset || style.boxSizing === "border-box";
      }

      var width = target.offsetWidth;
      var height = target.offsetHeight;
      var hasOffset = !isUndefined$1(width);

      if ((isOffset || isBoxSizing) && hasOffset) {
        return [width, height];
      }

      width = target.clientWidth;
      height = target.clientHeight;

      if (!hasOffset && !width && !height) {
        var bbox = target.getBBox();
        return [bbox.width, bbox.height];
      }

      if (isOffset || isBoxSizing) {
        var borderLeft = parseFloat(style.borderLeftWidth) || 0;
        var borderRight = parseFloat(style.borderRightWidth) || 0;
        var borderTop = parseFloat(style.borderTopWidth) || 0;
        var borderBottom = parseFloat(style.borderBottomWidth) || 0;
        return [width + borderLeft + borderRight, height + borderTop + borderBottom];
      } else {
        var paddingLeft = parseFloat(style.paddingLeft) || 0;
        var paddingRight = parseFloat(style.paddingRight) || 0;
        var paddingTop = parseFloat(style.paddingTop) || 0;
        var paddingBottom = parseFloat(style.paddingBottom) || 0;
        return [width - paddingLeft - paddingRight, height - paddingTop - paddingBottom];
      }
    }
    function getTargetInfo(target, container, state) {
      var _a, _b, _c, _d, _e;

      var left = 0;
      var top = 0;
      var right = 0;
      var bottom = 0;
      var origin = [0, 0];
      var pos1 = [0, 0];
      var pos2 = [0, 0];
      var pos3 = [0, 0];
      var pos4 = [0, 0];
      var offsetMatrix = createIdentityMatrix3();
      var beforeMatrix = createIdentityMatrix3();
      var matrix = createIdentityMatrix3();
      var targetMatrix = createIdentityMatrix3();
      var width = 0;
      var height = 0;
      var transformOrigin = [0, 0];
      var direction = 1;
      var beforeDirection = 1;
      var is3d = false;
      var targetTransform = "";
      var beforeOrigin = [0, 0];
      var prevMatrix = state ? state.beforeMatrix : undefined;
      var prevN = state ? state.is3d ? 4 : 3 : undefined;

      if (target) {
        if (state) {
          width = state.width;
          height = state.height;
        } else {
          var style = getComputedStyle(target);
          width = target.offsetWidth;
          height = target.offsetHeight;

          if (isUndefined$1(width)) {
            _a = getSize(target, style, true), width = _a[0], height = _a[1];
          }
        }

        _b = caculateMatrixStack(target, container, prevMatrix, prevN), beforeMatrix = _b[0], offsetMatrix = _b[1], matrix = _b[2], targetMatrix = _b[3], targetTransform = _b[4], transformOrigin = _b[5], is3d = _b[6];
        _c = caculateMoveablePosition(matrix, transformOrigin, width, height), _d = _c[0], left = _d[0], top = _d[1], right = _d[2], bottom = _d[3], origin = _c[1], pos1 = _c[2], pos2 = _c[3], pos3 = _c[4], pos4 = _c[5], direction = _c[6];
        var n = is3d ? 4 : 3;
        var beforePos = [0, 0];
        _e = caculateMoveablePosition(offsetMatrix, plus(transformOrigin, getOrigin(targetMatrix, n)), width, height), beforePos = _e[0], beforeOrigin = _e[1], beforeDirection = _e[6];
        beforeOrigin = [beforeOrigin[0] + beforePos[0] - left, beforeOrigin[1] + beforePos[1] - top];
      }

      return {
        beforeDirection: beforeDirection,
        direction: direction,
        target: target,
        left: left,
        top: top,
        right: right,
        bottom: bottom,
        pos1: pos1,
        pos2: pos2,
        pos3: pos3,
        pos4: pos4,
        width: width,
        height: height,
        beforeMatrix: beforeMatrix,
        matrix: matrix,
        targetTransform: targetTransform,
        offsetMatrix: offsetMatrix,
        targetMatrix: targetMatrix,
        is3d: is3d,
        beforeOrigin: beforeOrigin,
        origin: origin,
        transformOrigin: transformOrigin
      };
    }
    function getDirection(target) {
      if (!target) {
        return;
      }

      var direciton = target.getAttribute("data-direction");

      if (!direciton) {
        return;
      }

      var dir = [0, 0];
      direciton.indexOf("w") > -1 && (dir[0] = -1);
      direciton.indexOf("e") > -1 && (dir[0] = 1);
      direciton.indexOf("n") > -1 && (dir[1] = -1);
      direciton.indexOf("s") > -1 && (dir[1] = 1);
      return dir;
    }
    function getAbsolutePoses(poses, dist) {
      return [plus(dist, poses[0]), plus(dist, poses[1]), plus(dist, poses[2]), plus(dist, poses[3])];
    }
    function getAbsolutePosesByState(_a) {
      var left = _a.left,
          top = _a.top,
          pos1 = _a.pos1,
          pos2 = _a.pos2,
          pos3 = _a.pos3,
          pos4 = _a.pos4;
      return getAbsolutePoses([pos1, pos2, pos3, pos4], [left, top]);
    }
    function throttle(num, unit) {
      if (!unit) {
        return num;
      }

      return Math.round(num / unit) * unit;
    }
    function throttleArray(nums, unit) {
      nums.forEach(function (_, i) {
        nums[i] = throttle(nums[i], unit);
      });
      return nums;
    }
    function unset(self, name) {
      if (self[name]) {
        self[name].unset();
        self[name] = null;
      }
    }
    function getOrientationDirection(pos, pos1, pos2) {
      return (pos[0] - pos1[0]) * (pos2[1] - pos1[1]) - (pos[1] - pos1[1]) * (pos2[0] - pos1[0]);
    }
    function isInside(pos, pos1, pos2, pos3, pos4) {
      var k1 = getOrientationDirection(pos, pos1, pos2);
      var k2 = getOrientationDirection(pos, pos2, pos4);
      var k3 = getOrientationDirection(pos, pos4, pos1);
      var k4 = getOrientationDirection(pos, pos2, pos4);
      var k5 = getOrientationDirection(pos, pos4, pos3);
      var k6 = getOrientationDirection(pos, pos3, pos2);
      var signs1 = [k1, k2, k3];
      var signs2 = [k4, k5, k6];

      if (signs1.every(function (sign) {
        return sign >= 0;
      }) || signs1.every(function (sign) {
        return sign <= 0;
      }) || signs2.every(function (sign) {
        return sign >= 0;
      }) || signs2.every(function (sign) {
        return sign <= 0;
      })) {
        return true;
      }

      return false;
    }
    function triggerEvent(moveable, name, e) {
      return moveable.triggerEvent(name, e);
    }
    function getComputedStyle(el, pseudoElt) {
      return window.getComputedStyle(el, pseudoElt);
    }
    function filterAbles(ables, methods) {
      var enabledAbles = {};
      var ableGroups = {};
      return ables.filter(function (able) {
        var name = able.name;

        if (enabledAbles[name] || !methods.some(function (method) {
          return able[method];
        })) {
          return false;
        }

        if (able.ableGroup) {
          if (ableGroups[name]) {
            return false;
          }

          ableGroups[name] = true;
        }

        enabledAbles[name] = true;
        return true;
      });
    } // export function createMoveable<T>(customCSS: string) {
    //     const ControlBoxElement = styler("div", MOVEABLE_CSS + customCSS);
    // }

    var Origin = {
      name: "origin",
      render: function (moveable, React) {
        if (!moveable.props.origin) {
          return null;
        }

        var beforeOrigin = moveable.state.beforeOrigin;
        return [React.createElement("div", {
          className: prefix("control", "origin"),
          style: getControlTransform(beforeOrigin),
          key: "beforeOrigin"
        })];
      }
    };

    function triggerRenderStart(moveable, eventAffix, _a) {
      var clientX = _a.clientX,
          clientY = _a.clientY,
          datas = _a.datas,
          isPinch = _a.isPinch;
      var params = {
        clientX: clientX,
        clientY: clientY,
        datas: datas,
        target: moveable.state.target,
        isPinch: !!isPinch
      };

      if (eventAffix === "Group") {
        params.targets = moveable.props.targets;
      }

      triggerEvent(moveable, "onRender" + eventAffix + "Start", params);
    }
    function triggerRender(moveable, eventAffix, _a) {
      var clientX = _a.clientX,
          clientY = _a.clientY,
          datas = _a.datas,
          isPinch = _a.isPinch;
      var params = {
        clientX: clientX,
        clientY: clientY,
        datas: datas,
        target: moveable.state.target,
        isPinch: !!isPinch
      };

      if (eventAffix === "Group") {
        params.targets = moveable.props.targets;
      }

      triggerEvent(moveable, "onRender" + eventAffix, params);
    }
    function triggerRenderEnd(moveable, eventAffix, _a) {
      var clientX = _a.clientX,
          clientY = _a.clientY,
          datas = _a.datas,
          isPinch = _a.isPinch,
          isDrag = _a.isDrag;
      var params = {
        clientX: clientX,
        clientY: clientY,
        datas: datas,
        target: moveable.state.target,
        isPinch: !!isPinch,
        isDrag: isDrag
      };

      if (eventAffix === "Group") {
        params.targets = moveable.props.targets;
      }

      triggerEvent(moveable, "onRender" + eventAffix + "End", params);
    }

    function triggerAble(moveable, ableType, eventOperation, eventAffix, eventType, e) {
      var eventName = "" + eventOperation + eventAffix + eventType;
      var conditionName = "" + eventOperation + eventAffix + "Condition";
      var isStart = eventType === "Start";
      var isEnd = eventType === "End";
      var isGroup = eventAffix.indexOf("Group") > -1;
      var ables = moveable[ableType];
      var results = ables.filter(function (able) {
        var condition = isStart && able[conditionName];

        if (able[eventName] && (!condition || condition(e.inputEvent.target, moveable))) {
          return able[eventName](moveable, e);
        }

        return false;
      });
      var isUpdate = results.length;

      if (isStart) {
        triggerRenderStart(moveable, eventAffix, e);
      } else if (isEnd) {
        triggerRenderEnd(moveable, eventAffix, e);
      } else {
        triggerRender(moveable, eventAffix, e);
      }

      if (isEnd) {
        moveable.state.dragger = null;
      }

      if (!isStart && isUpdate) {
        if (results.some(function (able) {
          return able.updateRect;
        }) && !isGroup) {
          moveable.updateRect(eventType);
        } else {
          moveable.updateTarget(eventType);
        }
      } else if (isEnd && !isUpdate) {
        moveable.forceUpdate();
      }
    }

    function getAbleDragger(moveable, target, ableType, eventAffix) {
      var options = {
        container: window,
        pinchThreshold: moveable.props.pinchThreshold
      };
      ["drag", "pinch"].forEach(function (eventOperation) {
        ["Start", "", "End"].forEach(function (eventType) {
          options["" + eventOperation + eventType.toLowerCase()] = function (e) {
            return triggerAble(moveable, ableType, eventOperation, eventAffix, eventType, e);
          };
        });
      });
      return new Dragger(target, options);
    }

    var DragArea = {
      name: "dragArea",
      render: function (moveable, React) {
        var _a = moveable.props,
            target = _a.target,
            dragArea = _a.dragArea,
            groupable = _a.groupable;
        var _b = moveable.state,
            width = _b.width,
            height = _b.height,
            pos1 = _b.pos1,
            pos2 = _b.pos2,
            pos3 = _b.pos3,
            pos4 = _b.pos4;

        if (groupable) {
          return [React.createElement("div", {
            key: "area",
            ref: ref(moveable, "areaElement"),
            className: prefix("area")
          })];
        }

        if (!target || !dragArea) {
          return [];
        }

        var h = createWarpMatrix([0, 0], [width, 0], [0, height], [width, height], pos1, pos2, pos3, pos4);

        if (!h.length) {
          return [];
        }

        return [React.createElement("div", {
          key: "area",
          ref: ref(moveable, "areaElement"),
          className: prefix("area"),
          style: {
            top: "0px",
            left: "0px",
            width: width + "px",
            height: height + "px",
            transformOrigin: "0 0",
            transform: "matrix3d(" + convertMatrixtoCSS(h).join(",") + ")"
          }
        })];
      }
    };

    var ControlBoxElement = styled("div", MOVEABLE_CSS);

    function renderLine(direction, pos1, pos2, index) {
      return S("div", {
        key: "line" + index,
        className: prefix("line", "direction", direction),
        "data-direction": direction,
        style: getLineStyle(pos1, pos2)
      });
    }

    var MoveableManager =
    /*#__PURE__*/
    function (_super) {
      __extends$3(MoveableManager, _super);

      function MoveableManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.state = {
          conatainer: null,
          target: null,
          beforeMatrix: createIdentityMatrix3(),
          matrix: createIdentityMatrix3(),
          targetMatrix: createIdentityMatrix3(),
          targetTransform: "",
          is3d: false,
          left: 0,
          top: 0,
          width: 0,
          height: 0,
          transformOrigin: [0, 0],
          direction: 1,
          beforeDirection: 1,
          beforeOrigin: [0, 0],
          origin: [0, 0],
          pos1: [0, 0],
          pos2: [0, 0],
          pos3: [0, 0],
          pos4: [0, 0]
        };
        _this.targetAbles = [];
        _this.controlAbles = [];
        return _this;
      }

      var __proto = MoveableManager.prototype;

      __proto.render = function () {
        var _a = this.props,
            edge = _a.edge,
            parentPosition = _a.parentPosition,
            className = _a.className;
        this.checkUpdate();

        var _b = parentPosition || {
          left: 0,
          top: 0
        },
            parentLeft = _b.left,
            parentTop = _b.top;

        var _c = this.state,
            left = _c.left,
            top = _c.top,
            pos1 = _c.pos1,
            pos2 = _c.pos2,
            pos3 = _c.pos3,
            pos4 = _c.pos4,
            target = _c.target,
            direction = _c.direction;
        return S(ControlBoxElement, {
          ref: ref(this, "controlBox"),
          className: prefix("control-box", direction === -1 ? "reverse" : "") + " " + className,
          style: {
            position: "absolute",
            display: target ? "block" : "none",
            transform: "translate(" + (left - parentLeft) + "px, " + (top - parentTop) + "px) translateZ(50px)"
          }
        }, this.renderAbles(), renderLine(edge ? "n" : "", pos1, pos2, 0), renderLine(edge ? "e" : "", pos2, pos4, 1), renderLine(edge ? "w" : "", pos1, pos3, 2), renderLine(edge ? "s" : "", pos3, pos4, 3));
      };

      __proto.componentDidMount = function () {
        this.controlBox.getElement();
        var props = this.props;
        var parentMoveable = props.parentMoveable,
            container = props.container;
        this.updateEvent(props);

        if (!container && !parentMoveable) {
          this.updateRect("End", false, true);
        }
      };

      __proto.componentDidUpdate = function (prevProps) {
        this.updateEvent(prevProps);
      };

      __proto.componentWillUnmount = function () {
        unset(this, "targetDragger");
        unset(this, "controlDragger");
      };

      __proto.getContainer = function () {
        var _a = this.props,
            parentMoveable = _a.parentMoveable,
            container = _a.container;
        return container || parentMoveable && parentMoveable.getContainer() || this.controlBox.getElement().offsetParent;
      };

      __proto.isMoveableElement = function (target) {
        return target && (target.getAttribute("class") || "").indexOf(PREFIX) > -1;
      };

      __proto.dragStart = function (e) {
        this.targetDragger.onDragStart(e);
      };

      __proto.isInside = function (clientX, clientY) {
        var _a = this.state,
            pos1 = _a.pos1,
            pos2 = _a.pos2,
            pos3 = _a.pos3,
            pos4 = _a.pos4,
            target = _a.target;

        if (!target) {
          return false;
        }

        var _b = target.getBoundingClientRect(),
            left = _b.left,
            top = _b.top;

        var pos = [clientX - left, clientY - top];
        return isInside(pos, pos1, pos2, pos4, pos3);
      };

      __proto.updateRect = function (type, isTarget, isSetState) {
        if (isSetState === void 0) {
          isSetState = true;
        }

        var parentMoveable = this.props.parentMoveable;
        var state = this.state;
        var target = state.target || this.props.target;
        this.updateState(getTargetInfo(target, this.getContainer(), isTarget ? state : undefined), parentMoveable ? false : isSetState);
      };

      __proto.updateEvent = function (prevProps) {
        var controlBoxElement = this.controlBox.getElement();
        var hasTargetAble = this.targetAbles.length;
        var hasControlAble = this.controlAbles.length;
        var target = this.props.target;
        var prevTarget = prevProps.target;
        var dragArea = this.props.dragArea;
        var prevDragArea = prevProps.dragArea;
        var isTargetChanged = !dragArea && prevTarget !== target;
        var isUnset = !hasTargetAble && this.targetDragger || isTargetChanged || prevDragArea !== dragArea;

        if (isUnset) {
          unset(this, "targetDragger");
          this.updateState({
            dragger: null
          });
        }

        if (!hasControlAble) {
          unset(this, "controlDragger");
        }

        if (target && hasTargetAble && !this.targetDragger) {
          if (dragArea) {
            this.targetDragger = getAbleDragger(this, this.areaElement, "targetAbles", "");
          } else {
            this.targetDragger = getAbleDragger(this, target, "targetAbles", "");
          }
        }

        if (!this.controlDragger && hasControlAble) {
          this.controlDragger = getAbleDragger(this, controlBoxElement, "controlAbles", "Control");
        }

        if (isUnset) {
          this.unsetAbles();
        }
      };

      __proto.updateTarget = function (type) {
        this.updateRect(type, true);
      };

      __proto.getRect = function () {
        var poses = getAbsolutePosesByState(this.state);
        var pos1 = poses[0],
            pos2 = poses[1],
            pos3 = poses[2],
            pos4 = poses[3];
        var rect = getRect(poses);
        var width = rect.width,
            height = rect.height,
            left = rect.left,
            top = rect.top;
        return {
          width: width,
          height: height,
          left: left,
          top: top,
          pos1: pos1,
          pos2: pos2,
          pos3: pos3,
          pos4: pos4
        };
      };

      __proto.checkUpdate = function () {
        var _a = this.props,
            target = _a.target,
            container = _a.container,
            parentMoveable = _a.parentMoveable;
        var _b = this.state,
            stateTarget = _b.target,
            stateContainer = _b.container;

        if (!stateTarget && !target) {
          return;
        }

        this.updateAbles();
        var isChanged = stateTarget !== target || stateContainer !== container;

        if (!isChanged) {
          return;
        }

        this.updateState({
          target: target,
          container: container
        });

        if (!parentMoveable && (container || this.controlBox)) {
          this.updateRect("End", false, false);
        }
      };

      __proto.triggerEvent = function (name, e) {
        var callback = this.props[name];
        return callback && callback(e);
      };

      __proto.unsetAbles = function () {
        var _this = this;

        if (this.targetAbles.filter(function (able) {
          if (able.unset) {
            able.unset(_this);
            return true;
          }

          return false;
        }).length) {
          this.forceUpdate();
        }
      };

      __proto.updateAbles = function (ables, eventAffix) {
        if (ables === void 0) {
          ables = this.props.ables;
        }

        if (eventAffix === void 0) {
          eventAffix = "";
        }

        var props = this.props;
        var enabledAbles = ables.filter(function (able) {
          return able && props[able.name];
        });
        var dragStart = "drag" + eventAffix + "Start";
        var pinchStart = "pinch" + eventAffix + "Start";
        var dragControlStart = "drag" + eventAffix + "ControlStart";
        var targetAbles = filterAbles(enabledAbles, [dragStart, pinchStart]);
        var controlAbles = filterAbles(enabledAbles, [dragControlStart]);
        this.targetAbles = targetAbles;
        this.controlAbles = controlAbles;
      };

      __proto.updateState = function (nextState, isSetState) {
        if (isSetState) {
          this.setState(nextState);
        } else {
          var state = this.state;

          for (var name in nextState) {
            state[name] = nextState[name];
          }
        }
      };

      __proto.renderAbles = function () {
        var _this = this;

        var ables = this.targetAbles.concat(this.controlAbles, [Origin, DragArea]);
        return filterAbles(ables, ["render"]).map(function (_a) {
          var render = _a.render;
          return render(_this, React);
        });
      };

      MoveableManager.defaultProps = {
        target: null,
        container: null,
        origin: true,
        keepRatio: false,
        edge: false,
        parentMoveable: null,
        parentPosition: null,
        ables: [],
        pinchThreshold: 20,
        dragArea: false,
        transformOrigin: "",
        className: ""
      };
      return MoveableManager;
    }(W);

    function getRotatiion(touches) {
      return getRad([touches[0].clientX, touches[0].clientY], [touches[1].clientX, touches[1].clientY]) / Math.PI * 180;
    }

    var Pinchable = {
      name: "pinchable",
      updateRect: true,
      pinchStart: function (moveable, _a) {
        var _b;

        var datas = _a.datas,
            clientX = _a.clientX,
            clientY = _a.clientY,
            touches = _a.touches,
            inputEvent = _a.inputEvent,
            targets = _a.targets;
        var _c = moveable.props,
            pinchable = _c.pinchable,
            ables = _c.ables;

        if (!pinchable) {
          return false;
        }

        var state = moveable.state;
        var eventName = "onPinch" + (targets ? "Group" : "") + "Start";
        var controlEventName = "drag" + (targets ? "Group" : "") + "ControlStart";
        var pinchAbles = (pinchable === true ? moveable.controlAbles : ables.filter(function (able) {
          return pinchable.indexOf(able.name) > -1;
        })).filter(function (able) {
          return able.canPinch && able[controlEventName];
        });
        datas.pinchableDatas = {};
        var result = triggerEvent(moveable, eventName, (_b = {}, _b[targets ? "targets" : "target"] = targets ? targets : state.target, _b.clientX = clientX, _b.clientY = clientY, _b.datas = datas.pinchableDatas, _b));
        datas.isPinch = result !== false;
        datas.ables = pinchAbles;
        var isPinch = datas.isPinch;

        if (!isPinch) {
          return false;
        }

        var parentRotate = getRotatiion(touches);
        pinchAbles.forEach(function (able) {
          datas[able.name + "Datas"] = {};
          var e = {
            datas: datas[able.name + "Datas"],
            clientX: clientX,
            clientY: clientY,
            inputEvent: inputEvent,
            parentRotate: parentRotate,
            pinchFlag: true
          };
          able[controlEventName](moveable, e);
        });
        moveable.state.snapDirection = [0, 0];
        return isPinch;
      },
      pinch: function (moveable, _a) {
        var _b;

        var datas = _a.datas,
            clientX = _a.clientX,
            clientY = _a.clientY,
            pinchScale = _a.scale,
            distance = _a.distance,
            touches = _a.touches,
            inputEvent = _a.inputEvent,
            targets = _a.targets;

        if (!datas.isPinch) {
          return;
        }

        var parentRotate = getRotatiion(touches);
        var parentDistance = distance * (1 - 1 / pinchScale);
        var target = moveable.state.target;
        var params = (_b = {}, _b[targets ? "targets" : "target"] = targets ? targets : target, _b.clientX = clientX, _b.clientY = clientY, _b.datas = datas.pinchableDatas, _b);
        var eventName = "onPinch" + (targets ? "Group" : "");
        triggerEvent(moveable, eventName, params);
        var ables = datas.ables;
        var controlEventName = "drag" + (targets ? "Group" : "") + "Control";
        ables.forEach(function (able) {
          able[controlEventName](moveable, {
            clientX: clientX,
            clientY: clientY,
            datas: datas[able.name + "Datas"],
            inputEvent: inputEvent,
            parentDistance: parentDistance,
            parentRotate: parentRotate,
            pinchFlag: true
          });
        });
        return params;
      },
      pinchEnd: function (moveable, _a) {
        var _b;

        var datas = _a.datas,
            clientX = _a.clientX,
            clientY = _a.clientY,
            isPinch = _a.isPinch,
            inputEvent = _a.inputEvent,
            targets = _a.targets;

        if (!datas.isPinch) {
          return;
        }

        var target = moveable.state.target;
        var eventName = "onPinch" + (targets ? "Group" : "") + "End";
        triggerEvent(moveable, eventName, (_b = {}, _b[targets ? "targets" : "target"] = targets ? targets : target, _b.isDrag = isPinch, _b.clientX = clientX, _b.clientY = clientY, _b.datas = datas.pinchableDatas, _b));
        var ables = datas.ables;
        var controlEventName = "drag" + (targets ? "Group" : "") + "ControlEnd";
        ables.forEach(function (able) {
          able[controlEventName](moveable, {
            clientX: clientX,
            clientY: clientY,
            isDrag: isPinch,
            datas: datas[able.name + "Datas"],
            inputEvent: inputEvent,
            pinchFlag: true
          });
        });
        return isPinch;
      },
      pinchGroupStart: function (moveable, e) {
        return this.pinchStart(moveable, __assign$3({}, e, {
          targets: moveable.props.targets
        }));
      },
      pinchGroup: function (moveable, e) {
        return this.pinch(moveable, __assign$3({}, e, {
          targets: moveable.props.targets
        }));
      },
      pinchGroupEnd: function (moveable, e) {
        return this.pinchEnd(moveable, __assign$3({}, e, {
          targets: moveable.props.targets
        }));
      }
    };

    function triggerChildAble(moveable, able, type, datas, eachEvent, callback) {
      var name = able.name;
      var ableDatas = datas[name] || (datas[name] = []);
      var isEnd = !!type.match(/End$/g);
      var childs = moveable.moveables.map(function (child, i) {
        var childDatas = ableDatas[i] || (ableDatas[i] = {});
        var childEvent = isFunction(eachEvent) ? eachEvent(child, childDatas) : eachEvent;
        var result = able[type](child, __assign$3({}, childEvent, {
          datas: childDatas,
          parentFlag: true
        }));
        result && callback && callback(child, childDatas, result, i);

        if (isEnd) {
          child.state.dragger = null;
        }

        return result;
      });
      return childs;
    }
    function directionCondition(target) {
      return hasClass(target, prefix("direction"));
    }

    function setDragStart(moveable, _a) {
      var datas = _a.datas;
      var _b = moveable.state,
          matrix = _b.matrix,
          beforeMatrix = _b.beforeMatrix,
          is3d = _b.is3d,
          left = _b.left,
          top = _b.top,
          origin = _b.origin,
          offsetMatrix = _b.offsetMatrix,
          targetMatrix = _b.targetMatrix,
          transformOrigin = _b.transformOrigin;
      var n = is3d ? 4 : 3;
      datas.is3d = is3d;
      datas.matrix = matrix;
      datas.targetMatrix = targetMatrix;
      datas.beforeMatrix = beforeMatrix;
      datas.offsetMatrix = offsetMatrix;
      datas.transformOrigin = transformOrigin;
      datas.inverseMatrix = invert(matrix, n);
      datas.inverseBeforeMatrix = invert(beforeMatrix, n);
      datas.absoluteOrigin = convertPositionMatrix(plus([left, top], origin), n);
      datas.startDragBeforeDist = caculate(datas.inverseBeforeMatrix, datas.absoluteOrigin, n);
      datas.startDragDist = caculate(datas.inverseMatrix, datas.absoluteOrigin, n);
    }
    function getDragDist(_a, isBefore) {
      var datas = _a.datas,
          distX = _a.distX,
          distY = _a.distY;
      var inverseBeforeMatrix = datas.inverseBeforeMatrix,
          inverseMatrix = datas.inverseMatrix,
          is3d = datas.is3d,
          startDragBeforeDist = datas.startDragBeforeDist,
          startDragDist = datas.startDragDist,
          absoluteOrigin = datas.absoluteOrigin;
      var n = is3d ? 4 : 3;
      return minus(caculate(isBefore ? inverseBeforeMatrix : inverseMatrix, plus(absoluteOrigin, [distX, distY]), n), isBefore ? startDragBeforeDist : startDragDist);
    }
    function caculateTransformOrigin(transformOrigin, width, height, prevWidth, prevHeight, prevOrigin) {
      if (prevWidth === void 0) {
        prevWidth = width;
      }

      if (prevHeight === void 0) {
        prevHeight = height;
      }

      if (prevOrigin === void 0) {
        prevOrigin = [0, 0];
      }

      if (!transformOrigin) {
        return prevOrigin;
      }

      return transformOrigin.map(function (pos, i) {
        var _a = splitUnit(pos),
            value = _a.value,
            unit = _a.unit;

        var prevSize = i ? prevHeight : prevWidth;
        var size = i ? height : width;

        if (pos === "%" || isNaN(value)) {
          // no value but %
          var measureRatio = prevSize ? prevOrigin[i] / prevSize : 0;
          return size * measureRatio;
        } else if (unit !== "%") {
          return value;
        }

        return size * value / 100;
      });
    }
    function getPosIndexesByDirection(direction) {
      var indexes = [];

      if (direction[1] >= 0) {
        if (direction[0] >= 0) {
          indexes.push(3);
        }

        if (direction[0] <= 0) {
          indexes.push(2);
        }
      }

      if (direction[1] <= 0) {
        if (direction[0] >= 0) {
          indexes.push(1);
        }

        if (direction[0] <= 0) {
          indexes.push(0);
        }
      }

      return indexes;
    }
    function getPosesByDirection(poses, direction) {
      /*
      [-1, -1](pos1)       [0, -1](pos1,pos2)       [1, -1](pos2)
      [-1, 0](pos1, pos3)                           [1, 0](pos2, pos4)
      [-1, 1](pos3)        [0, 1](pos3, pos4)       [1, 1](pos4)
      */
      return getPosIndexesByDirection(direction).map(function (index) {
        return poses[index];
      });
    }
    function getPosByDirection(poses, direction) {
      /*
      [-1, -1](pos1)       [0, -1](pos1,pos2)       [1, -1](pos2)
      [-1, 0](pos1, pos3)                           [1, 0](pos2, pos4)
      [-1, 1](pos3)        [0, 1](pos3, pos4)       [1, 1](pos4)
      */
      var nextPoses = getPosesByDirection(poses, direction);
      return [average.apply(void 0, nextPoses.map(function (pos) {
        return pos[0];
      })), average.apply(void 0, nextPoses.map(function (pos) {
        return pos[1];
      }))];
    }
    function getPosByReverseDirection(_a, direction) {
      /*
      [-1, -1](pos4)       [0, -1](pos3,pos4)       [1, -1](pos3)
      [-1, 0](pos2, pos4)                           [1, 0](pos3, pos1)
      [-1, 1](pos2)        [0, 1](pos1, pos2)       [1, 1](pos1)
      */
      var pos1 = _a[0],
          pos2 = _a[1],
          pos3 = _a[2],
          pos4 = _a[3];
      return getPosByDirection([pos4, pos3, pos2, pos1], direction);
    }

    function getStartPos(poses, direction) {
      var startPos1 = poses[0],
          startPos2 = poses[1],
          startPos3 = poses[2],
          startPos4 = poses[3];
      return getPosByReverseDirection([startPos1, startPos2, startPos3, startPos4], direction);
    }

    function getDist$1(startPos, matrix, width, height, n, direction) {
      var poses = caculatePoses(matrix, width, height, n);
      var pos = getPosByReverseDirection(poses, direction);
      var distX = startPos[0] - pos[0];
      var distY = startPos[1] - pos[1];
      return [distX, distY];
    }

    function getNextMatrix(offsetMatrix, targetMatrix, origin, n) {
      return multiply(offsetMatrix, getAbsoluteMatrix(targetMatrix, n, origin), n);
    }
    function scaleMatrix(state, scale) {
      var transformOrigin = state.transformOrigin,
          offsetMatrix = state.offsetMatrix,
          is3d = state.is3d,
          targetMatrix = state.targetMatrix;
      var n = is3d ? 4 : 3;
      return getNextMatrix(offsetMatrix, multiply(targetMatrix, createScaleMatrix(scale, n), n), transformOrigin, n);
    }
    function getScaleDist(moveable, scale, direction, dragClient) {
      var state = moveable.state;
      var is3d = state.is3d,
          left = state.left,
          top = state.top,
          width = state.width,
          height = state.height;
      var n = is3d ? 4 : 3;
      var groupable = moveable.props.groupable;
      var nextMatrix = scaleMatrix(moveable.state, scale);
      var groupLeft = groupable ? left : 0;
      var groupTop = groupable ? top : 0;
      var startPos = dragClient ? dragClient : getStartPos(getAbsolutePosesByState(moveable.state), direction);
      var dist = getDist$1(startPos, nextMatrix, width, height, n, direction);
      return minus(dist, [groupLeft, groupTop]);
    }
    function getResizeDist(moveable, width, height, direction, transformOrigin, dragClient) {
      var groupable = moveable.props.groupable;
      var _a = moveable.state,
          prevOrigin = _a.transformOrigin,
          targetMatrix = _a.targetMatrix,
          offsetMatrix = _a.offsetMatrix,
          is3d = _a.is3d,
          prevWidth = _a.width,
          prevheight = _a.height,
          left = _a.left,
          top = _a.top;
      var n = is3d ? 4 : 3;
      var nextOrigin = caculateTransformOrigin(transformOrigin, width, height, prevWidth, prevheight, prevOrigin);
      var groupLeft = groupable ? left : 0;
      var groupTop = groupable ? top : 0;
      var nextMatrix = getNextMatrix(offsetMatrix, targetMatrix, nextOrigin, n);
      var startPos = dragClient ? dragClient : getStartPos(getAbsolutePosesByState(moveable.state), direction);
      var dist = getDist$1(startPos, nextMatrix, width, height, n, direction);
      return minus(dist, [groupLeft, groupTop]);
    }

    function snapStart(moveable) {
      var state = moveable.state;

      if (state.guidelines && state.guidelines.length) {
        return;
      }

      var _a = moveable.props,
          _b = _a.horizontalGuidelines,
          horizontalGuidelines = _b === void 0 ? [] : _b,
          _c = _a.verticalGuidelines,
          verticalGuidelines = _c === void 0 ? [] : _c,
          _d = _a.elementGuidelines,
          elementGuidelines = _d === void 0 ? [] : _d,
          bounds = _a.bounds,
          container = _a.container,
          snapCenter = _a.snapCenter;

      if (!bounds && !horizontalGuidelines.length && !verticalGuidelines.length && !elementGuidelines.length) {
        return;
      }

      var containerRect = getOffsetInfo(container, container, true).offsetParent.getBoundingClientRect();
      var containerTop = containerRect.top,
          containerLeft = containerRect.left,
          containerWidth = containerRect.width,
          containerHeight = containerRect.height;
      var guidelines = [];
      horizontalGuidelines.forEach(function (pos) {
        guidelines.push({
          type: "horizontal",
          pos: [0, pos],
          size: containerWidth
        });
      });
      verticalGuidelines.forEach(function (pos) {
        guidelines.push({
          type: "vertical",
          pos: [pos, 0],
          size: containerHeight
        });
      });
      elementGuidelines.forEach(function (el) {
        var rect = el.getBoundingClientRect();
        var top = rect.top,
            left = rect.left,
            width = rect.width,
            height = rect.height;
        var elementTop = top - containerTop;
        var elementBottom = elementTop + height;
        var elementLeft = left - containerLeft;
        var elementRight = elementLeft + width;
        guidelines.push({
          type: "vertical",
          element: el,
          pos: [elementLeft, elementTop],
          size: height
        });
        guidelines.push({
          type: "vertical",
          element: el,
          pos: [elementRight, elementTop],
          size: height
        });
        guidelines.push({
          type: "horizontal",
          element: el,
          pos: [elementLeft, elementTop],
          size: width
        });
        guidelines.push({
          type: "horizontal",
          element: el,
          pos: [elementLeft, elementBottom],
          size: width
        });

        if (snapCenter) {
          guidelines.push({
            type: "vertical",
            element: el,
            pos: [(elementLeft + elementRight) / 2, elementTop],
            size: height,
            center: true
          });
          guidelines.push({
            type: "horizontal",
            element: el,
            pos: [elementLeft, (elementTop + elementBottom) / 2],
            size: width,
            center: true
          });
        }
      });
      state.guidelines = guidelines;
      state.enableSnap = true;
    }

    function checkBounds(moveable, verticalPoses, horizontalPoses, snapThreshold) {
      return {
        vertical: checkBound(moveable, verticalPoses, true, snapThreshold),
        horizontal: checkBound(moveable, horizontalPoses, false, snapThreshold)
      };
    }

    function checkBound(moveable, poses, isVertical, snapThreshold) {
      if (snapThreshold === void 0) {
        snapThreshold = 0;
      }

      var bounds = moveable.props.bounds;

      if (bounds) {
        var startPos = bounds[isVertical ? "left" : "top"];
        var endPos = bounds[isVertical ? "right" : "bottom"];
        var minPos = Math.min.apply(Math, poses);
        var maxPos = Math.max.apply(Math, poses);

        if (!isUndefined$1(startPos) && startPos + snapThreshold > minPos) {
          return {
            isBound: true,
            offset: minPos - startPos,
            pos: startPos
          };
        }

        if (!isUndefined$1(endPos) && endPos - snapThreshold < maxPos) {
          return {
            isBound: true,
            offset: maxPos - endPos,
            pos: endPos
          };
        }
      }

      return {
        isBound: false,
        offset: 0,
        pos: 0
      };
    }

    function checkSnap(guidelines, targetType, targetPoses, isSnapCenter, snapThreshold) {
      if (!guidelines) {
        return {
          isSnap: false,
          dist: -1,
          offset: 0,
          guidelines: [],
          snapPoses: []
        };
      }

      var snapGuidelines = [];
      var snapDist = Infinity;
      var snapOffset = 0;
      var isVertical = targetType === "vertical";
      var posType = isVertical ? 0 : 1;
      var snapPoses = targetPoses.filter(function (targetPos) {
        return guidelines.filter(function (guideline) {
          var type = guideline.type,
              pos = guideline.pos,
              center = guideline.center;

          if (!isSnapCenter && center || type !== targetType) {
            return false;
          }

          var offset = targetPos - pos[posType];
          var dist = Math.abs(offset);

          if (dist > snapThreshold) {
            return false;
          }

          if (snapDist > dist) {
            snapDist = dist;
            snapGuidelines = [];
          }

          if (snapDist === dist) {
            snapOffset = offset;
            snapGuidelines.push(guideline);
          }

          return true;
        }).length;
      });
      return {
        isSnap: !!snapGuidelines.length,
        dist: isFinite(snapDist) ? snapDist : -1,
        offset: snapOffset,
        guidelines: snapGuidelines,
        snapPoses: snapPoses
      };
    }

    function hasGuidelines(moveable, ableName) {
      var _a = moveable.props,
          snappable = _a.snappable,
          bounds = _a.bounds,
          _b = moveable.state,
          guidelines = _b.guidelines,
          enableSnap = _b.enableSnap;

      if (!snappable || !enableSnap || ableName && snappable !== true && snappable.indexOf(ableName) || !bounds && (!guidelines || !guidelines.length)) {
        return false;
      }

      return true;
    }
    function checkSnapPoses(moveable, posesX, posesY, isSnapCenter, customSnapThreshold) {
      var guidelines = moveable.state.guidelines;
      var snapThreshold = !isUndefined$1(customSnapThreshold) ? customSnapThreshold : !isUndefined$1(moveable.props.snapThreshold) ? moveable.props.snapThreshold : 5;
      return {
        vertical: checkSnap(guidelines, "vertical", posesX, isSnapCenter, snapThreshold),
        horizontal: checkSnap(guidelines, "horizontal", posesY, isSnapCenter, snapThreshold)
      };
    }
    function checkSnaps(moveable, rect, isCenter, customSnapThreshold) {
      var snapCenter = moveable.props.snapCenter;
      var isSnapCenter = snapCenter && isCenter;
      var verticalNames = ["left", "right"];
      var horizontalNames = ["top", "bottom"];

      if (isSnapCenter) {
        verticalNames.push("center");
        horizontalNames.push("middle");
      }

      verticalNames = verticalNames.filter(function (name) {
        return name in rect;
      });
      horizontalNames = horizontalNames.filter(function (name) {
        return name in rect;
      });
      return checkSnapPoses(moveable, verticalNames.map(function (name) {
        return rect[name];
      }), horizontalNames.map(function (name) {
        return rect[name];
      }), isSnapCenter, customSnapThreshold);
    }

    function checkBoundOneWayDist(moveable, pos) {
      var _a = checkBounds(moveable, [pos[0]], [pos[1]]),
          _b = _a.horizontal,
          isHorizontalBound = _b.isBound,
          horizontalBoundOffset = _b.offset,
          _c = _a.vertical,
          isVerticalBound = _c.isBound,
          verticalBoundOffset = _c.offset;

      if (isHorizontalBound || isVerticalBound) {
        var isVertical = void 0;

        if (isHorizontalBound && isVerticalBound) {
          isVertical = Math.abs(horizontalBoundOffset) < Math.abs(verticalBoundOffset);
        } else {
          isVertical = isVerticalBound;
        }

        var offset = isVertical ? verticalBoundOffset : horizontalBoundOffset;
        return {
          isVertical: isVertical,
          offset: offset,
          dist: Math.abs(offset)
        };
      }

      return;
    }

    function solveNextDist(pos1, pos2, offset, isVertical, isDirectionVertical, datas) {
      var sizeOffset = solveEquation(pos1, pos2, -offset, isVertical);

      if (!sizeOffset) {
        return NaN;
      }

      var _a = getDragDist({
        datas: datas,
        distX: sizeOffset[0],
        distY: sizeOffset[1]
      }),
          widthDist = _a[0],
          heightDist = _a[1];

      return isDirectionVertical ? heightDist : widthDist;
    }

    function getFixedPoses(matrix, width, height, fixedPos, direction, is3d) {
      var nextPoses = caculatePoses(matrix, width, height, is3d ? 4 : 3);
      var nextPos = getPosByReverseDirection(nextPoses, direction);
      return getAbsolutePoses(nextPoses, minus(fixedPos, nextPos));
    }

    function checkBoundOneWayPos(moveable, pos, reversePos, isDirectionVertical, datas) {
      var _a = checkSnapPoses(moveable, [pos[0]], [pos[1]]),
          _b = _a.horizontal,
          isHorizontalSnap = _b.isSnap,
          horizontalOffset = _b.offset,
          horizontalDist = _b.dist,
          _c = _a.vertical,
          isVerticalSnap = _c.isSnap,
          verticalOffset = _c.offset,
          verticalDist = _c.dist;

      var fixedHorizontal = reversePos[1] === pos[1];
      var fixedVertical = reversePos[0] === pos[0];
      var isVertical;

      if (!isHorizontalSnap && !isVerticalSnap) {
        // no snap
        return NaN;
      } else if (isHorizontalSnap && isVerticalSnap) {
        if (horizontalDist === 0 && fixedHorizontal) {
          isVertical = true;
        } else if (verticalOffset === 0 && fixedVertical) {
          isVertical = false;
        } else {
          isVertical = horizontalDist > verticalDist;
        }
      } else {
        isVertical = isVerticalSnap;
      }

      return solveNextDist(reversePos, pos, isVertical ? verticalOffset : horizontalOffset, isVertical, isDirectionVertical, datas);
    }

    function checkOneWayPos(moveable, poses, reversePoses, isDirectionVertical, datas) {
      var posOffset = 0;
      var boundInfo;
      var boundIndex = -1;
      var boundInfos = poses.map(function (pos) {
        return checkBoundOneWayDist(moveable, pos);
      });
      boundInfos.forEach(function (info, i) {
        if (!info) {
          return;
        }

        if (!boundInfo || boundInfo.dist < info.dist) {
          boundInfo = info;
          boundIndex = i;
        }
      });

      if (boundInfo) {
        var nextDist = solveNextDist(reversePoses[boundIndex], poses[boundIndex], boundInfo.offset, boundInfo.isVertical, isDirectionVertical, datas);

        if (!isNaN(nextDist)) {
          posOffset = nextDist;
        }
      } else {
        poses.some(function (pos, i) {
          var nextDist = checkBoundOneWayPos(moveable, pos, reversePoses[i], isDirectionVertical, datas);

          if (isNaN(nextDist)) {
            return false;
          }

          posOffset = nextDist;
          return true;
        });
      }

      return posOffset;
    }
    function checkOneWayDist(moveable, poses, direction, datas) {
      var directionPoses = getPosesByDirection(poses, direction);
      var reversePoses = poses.slice().reverse();
      var directionIndex = direction[0] !== 0 ? 0 : 1;
      var isDirectionVertical = directionIndex > 0;
      var reverseDirectionPoses = getPosesByDirection(reversePoses, direction);
      directionPoses.push([(directionPoses[0][0] + directionPoses[1][0]) / 2, (directionPoses[0][1] + directionPoses[1][1]) / 2]);
      reverseDirectionPoses.reverse();
      reverseDirectionPoses.push([(reverseDirectionPoses[0][0] + reverseDirectionPoses[1][0]) / 2, (reverseDirectionPoses[0][1] + reverseDirectionPoses[1][1]) / 2]);
      var posOffset = checkOneWayPos(moveable, directionPoses, reverseDirectionPoses, isDirectionVertical, datas);
      var offset = [0, 0];
      offset[directionIndex] = direction[directionIndex] * posOffset;
      return offset;
    }
    function checkTwoWayDist(moveable, poses, direction, datas, matrix, width, height, fixedPos, is3d) {
      var _a;

      var directionPoses = getPosesByDirection(poses, direction);
      var verticalDirection = [direction[0], direction[1] * -1];
      var horizontalDirection = [direction[0] * -1, direction[1]];
      var verticalPos = getPosByDirection(poses, verticalDirection);
      var horizontalPos = getPosByDirection(poses, horizontalDirection);

      var _b = checkBounds(moveable, [directionPoses[0][0]], [directionPoses[0][1]]),
          _c = _b.horizontal,
          isHorizontalBound = _c.isBound,
          horizontalBoundOffset = _c.offset,
          _d = _b.vertical,
          isVerticalBound = _d.isBound,
          verticalBoundOffset = _d.offset; // share drag event


      var widthDist = 0;
      var heightDist = 0;
      var verticalBoundInfo = checkBoundOneWayDist(moveable, verticalPos);
      var horizontalBoundInfo = checkBoundOneWayDist(moveable, horizontalPos);
      var isVeritcalDirectionBound = verticalBoundInfo && verticalBoundInfo.dist > Math.abs(verticalBoundOffset);
      var isHorizontalDirectionBound = horizontalBoundInfo && horizontalBoundInfo.dist > Math.abs(horizontalBoundOffset);

      if (!isVeritcalDirectionBound && !isHorizontalDirectionBound) {
        var _e = checkSnapPoses(moveable, [directionPoses[0][0]], [directionPoses[0][1]]),
            horizontalOffset = _e.horizontal.offset,
            verticalOffset = _e.vertical.offset;

        _a = getDragDist({
          datas: datas,
          distX: -(isVerticalBound ? verticalBoundOffset : verticalOffset),
          distY: -(isHorizontalBound ? horizontalBoundOffset : horizontalOffset)
        }), widthDist = _a[0], heightDist = _a[1];
      } else if (isVeritcalDirectionBound) {
        // left to right, right to left
        var reversePos = getPosByDirection(poses, [verticalDirection[0] * -1, verticalDirection[1]]);
        var nextDist = solveNextDist(reversePos, verticalPos, verticalBoundInfo.offset, verticalBoundInfo.isVertical, false, datas);

        if (!isNaN(nextDist)) {
          widthDist = nextDist;
        }

        var nextPoses = getFixedPoses(matrix, width + direction[0] * widthDist, height + direction[1] * heightDist, fixedPos, direction, is3d);
        heightDist = checkOneWayPos(moveable, [getPosByDirection(nextPoses, direction)], [getPosByDirection(nextPoses, verticalDirection)], true, datas);
      } else {
        // top to bottom, bottom to top
        var reversePos = getPosByDirection(poses, [horizontalDirection[0] * -1, horizontalDirection[1]]);
        var nextDist = solveNextDist(reversePos, verticalPos, horizontalBoundInfo.offset, horizontalBoundInfo.isVertical, true, datas);

        if (!isNaN(nextDist)) {
          heightDist = nextDist;
        }

        var nextPoses = getFixedPoses(matrix, width + direction[0] * widthDist, height + direction[1] * heightDist, fixedPos, direction, is3d);
        widthDist = checkOneWayPos(moveable, [getPosByDirection(nextPoses, direction)], [getPosByDirection(nextPoses, horizontalDirection)], false, datas);
      }

      return [direction[0] * widthDist, direction[1] * heightDist];
    }
    function checkSizeDist(moveable, matrix, width, height, direction, snapDirection, datas, is3d) {
      var poses = getAbsolutePosesByState(moveable.state);
      var fixedPos = getPosByReverseDirection(poses, snapDirection);
      var nextPoses = getFixedPoses(matrix, width, height, fixedPos, direction, is3d);

      if (direction[0] && direction[1]) {
        return checkTwoWayDist(moveable, nextPoses, direction, datas, matrix, width, height, fixedPos, is3d);
      } else {
        return checkOneWayDist(moveable, nextPoses, direction, datas);
      }
    }
    function checkSnapSize(moveable, width, height, direction, datas) {
      var nextSizes = [width, height];

      if (!hasGuidelines(moveable, "resizable")) {
        return nextSizes;
      }

      var _a = moveable.state,
          matrix = _a.matrix,
          is3d = _a.is3d;
      return plus(nextSizes, checkSizeDist(moveable, matrix, width, height, direction, direction, datas, is3d));
    }
    function checkSnapScale(moveable, scale, direction, snapDirection, datas) {
      var width = datas.width,
          height = datas.height;
      var nextScale = scale.slice();

      if (!hasGuidelines(moveable, "scalable")) {
        return nextScale;
      }

      var sizeDist = checkSizeDist(moveable, scaleMatrix(datas, scale), width, height, direction, snapDirection, datas, datas.is3d);
      return [scale[0] + sizeDist[0] / width, scale[1] + sizeDist[1] / height];
    }
    function solveEquation(pos1, pos2, snapOffset, isVertical) {
      var dx = pos2[0] - pos1[0];
      var dy = pos2[1] - pos1[1];

      if (!dx) {
        // y = 0 * x + b
        // only horizontal
        if (!isVertical) {
          return [0, snapOffset];
        }

        return;
      }

      if (!dy) {
        // only vertical
        if (isVertical) {
          return [snapOffset, 0];
        }

        return;
      } // y = ax + b


      var a = dy / dx;
      var b = pos1[1] - a * pos1[0];

      if (isVertical) {
        // y = a * x + b
        var y = a * (pos2[0] + snapOffset) + b;
        return [snapOffset, y - pos2[1]];
      } else {
        // x = (y - b) / a
        var x = (pos2[1] + snapOffset - b) / a;
        return [x - pos2[0], snapOffset];
      }
    }
    function getSnapInfosByDirection(moveable, poses, snapDirection) {
      if (snapDirection === true) {
        var rect = getRect(poses);
        rect.middle = (rect.top + rect.bottom) / 2;
        rect.center = (rect.left + rect.right) / 2;
        return checkSnaps(moveable, rect, true, 1);
      } else if (!snapDirection[0] && !snapDirection[1]) {
        var alignPoses = [poses[0], poses[1], poses[3], poses[2], poses[0]];
        var nextPoses = [];

        for (var i = 0; i < 4; ++i) {
          nextPoses.push(alignPoses[i]);
          poses.push([(alignPoses[i][0] + alignPoses[i + 1][0]) / 2, (alignPoses[i][1] + alignPoses[i + 1][1]) / 2]);
        }

        return checkSnapPoses(moveable, nextPoses.map(function (pos) {
          return pos[0];
        }), nextPoses.map(function (pos) {
          return pos[1];
        }), true, 1);
      } else {
        var nextPoses = getPosesByDirection(poses, snapDirection);

        if (nextPoses.length > 1) {
          nextPoses.push([(nextPoses[0][0] + nextPoses[1][0]) / 2, (nextPoses[0][1] + nextPoses[1][1]) / 2]);
        }

        return checkSnapPoses(moveable, nextPoses.map(function (pos) {
          return pos[0];
        }), nextPoses.map(function (pos) {
          return pos[1];
        }), true, 1);
      }
    }
    function startCheckSnapDrag(moveable, datas) {
      datas.absolutePoses = getAbsolutePosesByState(moveable.state);
    }
    function checkSnapDrag(moveable, distX, distY, datas) {
      var snapVerticalInfo = {
        isSnap: false,
        offset: 0
      };
      var snapHorizontalInfo = {
        isSnap: false,
        offset: 0
      };

      if (!hasGuidelines(moveable, "draggable")) {
        return [snapVerticalInfo, snapHorizontalInfo];
      }

      var poses = getAbsolutePoses(datas.absolutePoses, [distX, distY]);

      var _a = getRect(poses),
          left = _a.left,
          right = _a.right,
          top = _a.top,
          bottom = _a.bottom;

      var snapInfos = checkSnaps(moveable, {
        left: left,
        right: right,
        top: top,
        bottom: bottom,
        center: (left + right) / 2,
        middle: (top + bottom) / 2
      }, true);
      var boundInfos = checkBounds(moveable, [left, right], [top, bottom]);

      if (boundInfos.vertical.isBound) {
        snapVerticalInfo.offset = boundInfos.vertical.offset;
        snapVerticalInfo.isSnap = true;
      } else if (snapInfos.vertical.isSnap) {
        // has vertical guidelines
        snapVerticalInfo.offset = snapInfos.vertical.offset;
        snapVerticalInfo.isSnap = true;
      }

      if (boundInfos.horizontal.isBound) {
        snapHorizontalInfo.offset = boundInfos.horizontal.offset;
        snapHorizontalInfo.isSnap = true;
      } else if (snapInfos.horizontal.isSnap) {
        // has horizontal guidelines
        snapHorizontalInfo.offset = snapInfos.horizontal.offset;
        snapHorizontalInfo.isSnap = true;
      }

      return [snapVerticalInfo, snapHorizontalInfo];
    }
    var Snappable = {
      name: "snappable",
      render: function (moveable, React) {
        var _a = moveable.state,
            targetLeft = _a.left,
            targetTop = _a.top,
            snapDirection = _a.snapDirection;

        if (!snapDirection || !hasGuidelines(moveable, "")) {
          return [];
        }

        var poses = getAbsolutePosesByState(moveable.state);

        var _b = getRect(poses),
            width = _b.width,
            height = _b.height,
            top = _b.top,
            left = _b.left,
            bottom = _b.bottom,
            right = _b.right;

        var _c = getSnapInfosByDirection(moveable, poses, snapDirection),
            _d = _c.vertical,
            verticalGuildelines = _d.guidelines,
            verticalSnapPoses = _d.snapPoses,
            _e = _c.horizontal,
            horizontalGuidelines = _e.guidelines,
            horizontalSnapPoses = _e.snapPoses;

        var _f = checkBounds(moveable, [left, right], [top, bottom], 1),
            _g = _f.vertical,
            isVerticalBound = _g.isBound,
            verticalBoundPos = _g.pos,
            _h = _f.horizontal,
            isHorizontalBound = _h.isBound,
            horizontalBoundPos = _h.pos;

        if (isVerticalBound && verticalSnapPoses.indexOf(verticalBoundPos) < 0) {
          verticalGuildelines.push({
            type: "vertical",
            pos: [verticalBoundPos, top],
            size: height
          });
          verticalSnapPoses.push(verticalBoundPos);
        }

        if (isHorizontalBound && horizontalSnapPoses.indexOf(horizontalBoundPos) < 0) {
          horizontalGuidelines.push({
            type: "horizontal",
            pos: [left, horizontalBoundPos],
            size: width
          });
          horizontalSnapPoses.push(horizontalBoundPos);
        }

        return verticalSnapPoses.map(function (pos, i) {
          return React.createElement("div", {
            className: prefix("line", "vertical", "guideline", "target", "bold"),
            key: "verticalTargetGuidline" + i,
            style: {
              top: 0 + "px",
              left: -targetLeft + pos + "px",
              height: height + "px"
            }
          });
        }).concat(horizontalSnapPoses.map(function (pos, i) {
          return React.createElement("div", {
            className: prefix("line", "horizontal", "guideline", "target", "bold"),
            key: "horizontalTargetGuidline" + i,
            style: {
              top: -targetTop + pos + "px",
              left: 0 + "px",
              width: width + "px"
            }
          });
        }), verticalGuildelines.map(function (guideline, i) {
          var pos = guideline.pos,
              size = guideline.size,
              element = guideline.element;
          return React.createElement("div", {
            className: prefix("line", "vertical", "guideline", element ? "bold" : ""),
            key: "verticalGuidline" + i,
            style: {
              top: -targetTop + pos[1] + "px",
              left: -targetLeft + pos[0] + "px",
              height: size + "px"
            }
          });
        }), horizontalGuidelines.map(function (guideline, i) {
          var pos = guideline.pos,
              size = guideline.size,
              element = guideline.element;
          return React.createElement("div", {
            className: prefix("line", "horizontal", "guideline", element ? "bold" : ""),
            key: "horizontalGuidline" + i,
            style: {
              top: -targetTop + pos[1] + "px",
              left: -targetLeft + pos[0] + "px",
              width: size + "px"
            }
          });
        }));
      },
      dragStart: function (moveable, e) {
        moveable.state.snapDirection = true;
        snapStart(moveable);
      },
      pinchStart: function (moveable) {
        this.unset(moveable);
      },
      dragEnd: function (moveable) {
        this.unset(moveable);
      },
      dragControlCondition: directionCondition,
      dragControlStart: function (moveable, e) {
        moveable.state.snapDirection = null;
        snapStart(moveable);
      },
      dragControlEnd: function (moveable) {
        this.unset(moveable);
      },
      dragGroupStart: function (moveable, e) {
        moveable.state.snapDirection = true;
        snapStart(moveable);
      },
      dragGroupEnd: function (moveable) {
        this.unset(moveable);
      },
      dragGroupControlStart: function (moveable, e) {
        moveable.state.snapDirection = null;
        snapStart(moveable);
      },
      dragGroupControlEnd: function (moveable) {
        this.unset(moveable);
      },
      unset: function (moveable) {
        var state = moveable.state;
        state.enableSnap = false;
        state.guidelines = [];
        state.snapDirection = null;
      }
    };

    var Draggable = {
      name: "draggable",
      dragStart: function (moveable, _a) {
        var datas = _a.datas,
            clientX = _a.clientX,
            clientY = _a.clientY,
            parentEvent = _a.parentEvent,
            parentDragger = _a.parentDragger;
        var state = moveable.state;
        var targetTransform = state.targetTransform,
            target = state.target,
            dragger = state.dragger;

        if (dragger) {
          return false;
        }

        state.dragger = parentDragger || moveable.targetDragger;
        var style = window.getComputedStyle(target);
        datas.datas = {};
        datas.left = parseFloat(style.left || "") || 0;
        datas.top = parseFloat(style.top || "") || 0;
        datas.bottom = parseFloat(style.bottom || "") || 0;
        datas.right = parseFloat(style.right || "") || 0;
        datas.transform = targetTransform;
        datas.startTranslate = [0, 0];
        setDragStart(moveable, {
          datas: datas
        });
        datas.prevDist = [0, 0];
        datas.prevBeforeDist = [0, 0];
        datas.isDrag = false;
        startCheckSnapDrag(moveable, datas);
        var params = {
          datas: datas.datas,
          target: target,
          clientX: clientX,
          clientY: clientY,
          set: function (translate) {
            datas.startTranslate = translate;
          }
        };
        var result = parentEvent || triggerEvent(moveable, "onDragStart", params);

        if (result !== false) {
          datas.isDrag = true;
        } else {
          state.dragger = null;
          datas.isPinch = false;
        }

        return datas.isDrag ? params : false;
      },
      drag: function (moveable, _a) {
        var datas = _a.datas,
            distX = _a.distX,
            distY = _a.distY,
            clientX = _a.clientX,
            clientY = _a.clientY,
            parentEvent = _a.parentEvent,
            parentFlag = _a.parentFlag;
        var isPinch = datas.isPinch,
            isDrag = datas.isDrag,
            prevDist = datas.prevDist,
            prevBeforeDist = datas.prevBeforeDist,
            transform = datas.transform,
            startTranslate = datas.startTranslate;

        if (!isDrag) {
          return;
        }

        var props = moveable.props;
        var parentMoveable = props.parentMoveable;
        var throttleDrag = parentEvent ? 0 : props.throttleDrag || 0;
        var target = moveable.state.target;
        var isSnap = false;

        if (!isPinch && !parentEvent && !parentFlag) {
          var _b = checkSnapDrag(moveable, distX, distY, datas),
              verticalInfo = _b[0],
              horizontalInfo = _b[1];

          isSnap = verticalInfo.isSnap || horizontalInfo.isSnap;
          distX -= verticalInfo.offset;
          distY -= horizontalInfo.offset;
        }

        var beforeTranslate = plus(getDragDist({
          datas: datas,
          distX: distX,
          distY: distY
        }, true), startTranslate);
        var translate = plus(getDragDist({
          datas: datas,
          distX: distX,
          distY: distY
        }, false), startTranslate);

        if (!isSnap) {
          throttleArray(translate, throttleDrag);
          throttleArray(beforeTranslate, throttleDrag);
        }

        var beforeDist = minus(beforeTranslate, startTranslate);
        var dist = minus(translate, startTranslate);
        var delta = minus(dist, prevDist);
        var beforeDelta = minus(beforeDist, prevBeforeDist);
        datas.prevDist = dist;
        datas.prevBeforeDist = beforeDist;
        var left = datas.left + beforeDist[0];
        var top = datas.top + beforeDist[1];
        var right = datas.right - beforeDist[0];
        var bottom = datas.bottom - beforeDist[1];
        var nextTransform = transform + " translate(" + dist[0] + "px, " + dist[1] + "px)";

        if (!parentEvent && !parentMoveable && delta.every(function (num) {
          return !num;
        }) && beforeDelta.some(function (num) {
          return !num;
        })) {
          return;
        }

        var params = {
          datas: datas.datas,
          target: target,
          transform: nextTransform,
          dist: dist,
          delta: delta,
          translate: translate,
          beforeDist: beforeDist,
          beforeDelta: beforeDelta,
          beforeTranslate: beforeTranslate,
          left: left,
          top: top,
          right: right,
          bottom: bottom,
          clientX: clientX,
          clientY: clientY,
          isPinch: isPinch
        };
        !parentEvent && triggerEvent(moveable, "onDrag", params);
        return params;
      },
      dragEnd: function (moveable, _a) {
        var parentEvent = _a.parentEvent,
            datas = _a.datas,
            isDrag = _a.isDrag,
            clientX = _a.clientX,
            clientY = _a.clientY;

        if (!datas.isDrag) {
          return;
        }

        moveable.state.dragger = null;
        datas.isDrag = false;
        !parentEvent && triggerEvent(moveable, "onDragEnd", {
          target: moveable.state.target,
          isDrag: isDrag,
          clientX: clientX,
          clientY: clientY,
          datas: datas.datas
        });
        return isDrag;
      },
      dragGroupCondition: function (target) {
        return hasClass(target, prefix("area"));
      },
      dragGroupStart: function (moveable, e) {
        var datas = e.datas;
        var params = this.dragStart(moveable, e);

        if (!params) {
          return false;
        }

        var events = triggerChildAble(moveable, this, "dragStart", datas, e);

        var nextParams = __assign$3({}, params, {
          targets: moveable.props.targets,
          events: events
        });

        var result = triggerEvent(moveable, "onDragGroupStart", nextParams);
        datas.isDrag = result !== false;
        return datas.isDrag ? params : false;
      },
      dragGroup: function (moveable, e) {
        var datas = e.datas;

        if (!datas.isDrag) {
          return;
        }

        var events = triggerChildAble(moveable, this, "drag", datas, e);
        var params = this.drag(moveable, e);

        if (!params) {
          return;
        }

        var nextParams = __assign$3({
          targets: moveable.props.targets,
          events: events
        }, params);

        triggerEvent(moveable, "onDragGroup", nextParams);
        return nextParams;
      },
      dragGroupEnd: function (moveable, e) {
        var clientX = e.clientX,
            clientY = e.clientY,
            isDrag = e.isDrag,
            datas = e.datas;

        if (!datas.isDrag) {
          return;
        }

        this.dragEnd(moveable, e);
        triggerChildAble(moveable, this, "dragEnd", datas, e);
        triggerEvent(moveable, "onDragGroupEnd", {
          targets: moveable.props.targets,
          isDrag: isDrag,
          clientX: clientX,
          clientY: clientY,
          datas: datas.datas
        });
        return isDrag;
      }
    };

    function setCustomDrag(state, delta, inputEvent) {
      return __assign$3({}, state.dragger.move(delta, inputEvent), {
        parentEvent: true
      });
    }

    var CustomDragger =
    /*#__PURE__*/
    function () {
      function CustomDragger() {
        this.prevX = 0;
        this.prevY = 0;
        this.startX = 0;
        this.startY = 0;
        this.isDrag = false;
        this.isFlag = false;
        this.datas = {};
      }

      var __proto = CustomDragger.prototype;

      __proto.dragStart = function (client, inputEvent) {
        this.isDrag = false;
        this.isFlag = false;
        this.datas = {};
        return this.move(client, inputEvent);
      };

      __proto.drag = function (client, inputEvent) {
        return this.move([client[0] - this.prevX, client[1] - this.prevY], inputEvent);
      };

      __proto.move = function (delta, inputEvent) {
        var clientX;
        var clientY;

        if (!this.isFlag) {
          this.prevX = delta[0];
          this.prevY = delta[1];
          this.startX = delta[0];
          this.startY = delta[1];
          clientX = delta[0];
          clientY = delta[1];
          this.isFlag = true;
        } else {
          clientX = this.prevX + delta[0];
          clientY = this.prevY + delta[1];
          this.isDrag = true;
        }

        this.prevX = clientX;
        this.prevY = clientY;
        return {
          clientX: clientX,
          clientY: clientY,
          inputEvent: inputEvent,
          isDrag: this.isDrag,
          distX: clientX - this.startX,
          distY: clientY - this.startY,
          deltaX: delta[0],
          deltaY: delta[1],
          datas: this.datas,
          parentEvent: true,
          parentDragger: this
        };
      };

      return CustomDragger;
    }();

    function setRotateStartInfo(datas, clientX, clientY, origin, rotationPos) {
      datas.startAbsoluteOrigin = [clientX - rotationPos[0] + origin[0], clientY - rotationPos[1] + origin[1]];
      datas.prevDeg = getRad(datas.startAbsoluteOrigin, [clientX, clientY]) / Math.PI * 180;
      datas.startDeg = datas.prevDeg;
      datas.loop = 0;
    }

    function getDeg(datas, deg, direction, startRotate, throttleRotate) {
      var prevDeg = datas.prevDeg,
          startDeg = datas.startDeg,
          prevLoop = datas.loop;

      if (prevDeg > deg && prevDeg > 270 && deg < 90) {
        // 360 => 0
        ++datas.loop;
      } else if (prevDeg < deg && prevDeg < 90 && deg > 270) {
        // 0 => 360
        --datas.loop;
      }

      var loop = datas.loop;
      var absolutePrevDeg = prevLoop * 360 + prevDeg - startDeg + startRotate;
      var absoluteDeg = loop * 360 + deg - startDeg + startRotate;
      absoluteDeg = throttle(absoluteDeg, throttleRotate);
      var delta = direction * (absoluteDeg - absolutePrevDeg);
      var dist = direction * (absoluteDeg - startRotate);
      datas.prevDeg = absoluteDeg - loop * 360 + startDeg - startRotate;
      return [delta, dist, absoluteDeg];
    }

    function getRotateInfo(datas, direction, clientX, clientY, startRotate, throttleRotate) {
      return getDeg(datas, getRad(datas.startAbsoluteOrigin, [clientX, clientY]) / Math.PI * 180, direction, startRotate, throttleRotate);
    }

    function getPositions$1(rotationPosition, pos1, pos2, pos3, pos4) {
      if (rotationPosition === "left") {
        return [pos3, pos1];
      } else if (rotationPosition === "right") {
        return [pos2, pos4];
      } else if (rotationPosition === "bottom") {
        return [pos4, pos3];
      }

      return [pos1, pos2];
    }
    function getRotationRad(poses, direction) {
      return getRad(direction > 0 ? poses[0] : poses[1], direction > 0 ? poses[1] : poses[0]);
    }
    function getRotationPosition(_a, rad) {
      var pos1 = _a[0],
          pos2 = _a[1];
      var relativeRotationPos = rotate([0, -40, 1], rad);
      var rotationPos = [(pos1[0] + pos2[0]) / 2 + relativeRotationPos[0], (pos1[1] + pos2[1]) / 2 + relativeRotationPos[1]];
      return rotationPos;
    }

    function dragControlCondition(target) {
      return hasClass(target, prefix("rotation"));
    }

    var Rotatable = {
      name: "rotatable",
      canPinch: true,
      render: function (moveable, React) {
        var _a = moveable.props,
            rotatable = _a.rotatable,
            rotationPosition = _a.rotationPosition;

        if (!rotatable) {
          return null;
        }

        var _b = moveable.state,
            pos1 = _b.pos1,
            pos2 = _b.pos2,
            pos3 = _b.pos3,
            pos4 = _b.pos4,
            direction = _b.direction;
        var poses = getPositions$1(rotationPosition, pos1, pos2, pos3, pos4);
        var rotationRad = getRotationRad(poses, direction);
        return React.createElement("div", {
          key: "rotation",
          className: prefix("line rotation-line"),
          style: {
            // tslint:disable-next-line: max-line-length
            transform: "translate(" + (poses[0][0] + poses[1][0]) / 2 + "px, " + (poses[0][1] + poses[1][1]) / 2 + "px) translateY(-40px) rotate(" + rotationRad + "rad)"
          }
        }, React.createElement("div", {
          className: prefix("control", "rotation")
        }));
      },
      dragControlCondition: dragControlCondition,
      dragControlStart: function (moveable, _a) {
        var datas = _a.datas,
            clientX = _a.clientX,
            clientY = _a.clientY,
            parentRotate = _a.parentRotate,
            parentFlag = _a.parentFlag,
            pinchFlag = _a.pinchFlag;
        var _b = moveable.state,
            target = _b.target,
            left = _b.left,
            top = _b.top,
            origin = _b.origin,
            beforeOrigin = _b.beforeOrigin,
            direction = _b.direction,
            beforeDirection = _b.beforeDirection,
            targetTransform = _b.targetTransform,
            pos1 = _b.pos1,
            pos2 = _b.pos2,
            pos3 = _b.pos3,
            pos4 = _b.pos4;

        if (!target) {
          return false;
        }

        datas.transform = targetTransform;
        datas.left = left;
        datas.top = top;
        var poses = getPositions$1(moveable.props.rotationPosition, pos1, pos2, pos3, pos4);
        var rotationPos = getRotationPosition(poses, getRotationRad(poses, direction));

        if (pinchFlag || parentFlag) {
          datas.beforeInfo = {
            prevDeg: parentRotate,
            startDeg: parentRotate,
            loop: 0
          };
          datas.afterInfo = {
            prevDeg: parentRotate,
            startDeg: parentRotate,
            loop: 0
          };
        } else {
          datas.afterInfo = {};
          datas.beforeInfo = {};
          setRotateStartInfo(datas.afterInfo, clientX, clientY, origin, rotationPos);
          setRotateStartInfo(datas.beforeInfo, clientX, clientY, beforeOrigin, rotationPos);
        }

        datas.direction = direction;
        datas.beforeDirection = beforeDirection;
        datas.startRotate = 0;
        datas.datas = {};
        var params = {
          datas: datas.datas,
          target: target,
          clientX: clientX,
          clientY: clientY,
          set: function (rotatation) {
            datas.startRotate = rotatation;
          }
        };
        var result = triggerEvent(moveable, "onRotateStart", params);
        datas.isRotate = result !== false;
        return datas.isRotate ? params : false;
      },
      dragControl: function (moveable, _a) {
        var _b, _c, _d, _e;

        var datas = _a.datas,
            clientX = _a.clientX,
            clientY = _a.clientY,
            parentRotate = _a.parentRotate,
            parentFlag = _a.parentFlag,
            pinchFlag = _a.pinchFlag;
        var direction = datas.direction,
            beforeDirection = datas.beforeDirection,
            beforeInfo = datas.beforeInfo,
            afterInfo = datas.afterInfo,
            isRotate = datas.isRotate,
            startRotate = datas.startRotate;

        if (!isRotate) {
          return;
        }

        var _f = moveable.props,
            _g = _f.throttleRotate,
            throttleRotate = _g === void 0 ? 0 : _g,
            parentMoveable = _f.parentMoveable;
        var delta;
        var dist;
        var rotate;
        var beforeDelta;
        var beforeDist;
        var beforeRotate;

        if (pinchFlag || parentFlag) {
          _b = getDeg(afterInfo, parentRotate, direction, startRotate, throttleRotate), delta = _b[0], dist = _b[1], rotate = _b[2];
          _c = getDeg(beforeInfo, parentRotate, direction, startRotate, throttleRotate), beforeDelta = _c[0], beforeDist = _c[1], beforeRotate = _c[2];
        } else {
          _d = getRotateInfo(afterInfo, direction, clientX, clientY, startRotate, throttleRotate), delta = _d[0], dist = _d[1], rotate = _d[2];
          _e = getRotateInfo(beforeInfo, beforeDirection, clientX, clientY, startRotate, throttleRotate), beforeDelta = _e[0], beforeDist = _e[1], beforeRotate = _e[2];
        }

        if (!delta && !beforeDelta && !parentMoveable) {
          return;
        }

        var params = {
          target: moveable.props.target,
          datas: datas.datas,
          clientX: clientX,
          clientY: clientY,
          delta: delta,
          dist: dist,
          rotate: rotate,
          beforeDist: beforeDist,
          beforeDelta: beforeDelta,
          beforeRotate: beforeRotate,
          transform: datas.transform + " rotate(" + dist + "deg)",
          isPinch: !!pinchFlag
        };
        triggerEvent(moveable, "onRotate", params);
        return params;
      },
      dragControlEnd: function (moveable, _a) {
        var datas = _a.datas,
            isDrag = _a.isDrag,
            clientX = _a.clientX,
            clientY = _a.clientY;

        if (!datas.isRotate) {
          return false;
        }

        datas.isRotate = false;
        triggerEvent(moveable, "onRotateEnd", {
          datas: datas.datas,
          clientX: clientX,
          clientY: clientY,
          target: moveable.state.target,
          isDrag: isDrag
        });
        return isDrag;
      },
      dragGroupControlCondition: dragControlCondition,
      dragGroupControlStart: function (moveable, e) {
        var datas = e.datas,
            inputEvent = e.inputEvent;
        var _a = moveable.state,
            parentLeft = _a.left,
            parentTop = _a.top,
            parentBeforeOrigin = _a.beforeOrigin;
        var params = this.dragControlStart(moveable, e);

        if (!params) {
          return false;
        }

        var events = triggerChildAble(moveable, this, "dragControlStart", datas, __assign$3({}, e, {
          parentRotate: 0
        }), function (child, childDatas, eventParams) {
          var _a = child.state,
              left = _a.left,
              top = _a.top,
              beforeOrigin = _a.beforeOrigin;
          var childClient = plus(minus([left, top], [parentLeft, parentTop]), minus(beforeOrigin, parentBeforeOrigin));
          childDatas.prevClient = childClient;
          eventParams.dragStart = Draggable.dragStart(child, new CustomDragger().dragStart(childClient, inputEvent));
        });

        var nextParams = __assign$3({}, params, {
          targets: moveable.props.targets,
          events: events
        });

        var result = triggerEvent(moveable, "onRotateGroupStart", nextParams);
        datas.isRotate = result !== false;
        return datas.isDrag ? params : false;
      },
      dragGroupControl: function (moveable, e) {
        var inputEvent = e.inputEvent,
            datas = e.datas;

        if (!datas.isRotate) {
          return;
        }

        var params = this.dragControl(moveable, e);

        if (!params) {
          return;
        }

        var parentRotate = params.beforeDist;
        var deg = params.beforeDelta;
        var rad = deg / 180 * Math.PI;
        var events = triggerChildAble(moveable, this, "dragControl", datas, __assign$3({}, e, {
          parentRotate: parentRotate
        }), function (child, childDatas, result, i) {
          var _a = childDatas.prevClient,
              prevX = _a[0],
              prevY = _a[1];

          var _b = rotate([prevX, prevY], rad),
              clientX = _b[0],
              clientY = _b[1];

          var delta = [clientX - prevX, clientY - prevY];
          childDatas.prevClient = [clientX, clientY];
          var dragResult = Draggable.drag(child, setCustomDrag(child.state, delta, inputEvent));
          result.drag = dragResult;
        });

        var nextParams = __assign$3({
          targets: moveable.props.targets,
          events: events
        }, params);

        moveable.rotation += params.beforeDelta;
        triggerEvent(moveable, "onRotateGroup", nextParams);
        return nextParams;
      },
      dragGroupControlEnd: function (moveable, e) {
        var clientX = e.clientX,
            clientY = e.clientY,
            isDrag = e.isDrag,
            datas = e.datas;

        if (!datas.isRotate) {
          return;
        }

        this.dragControlEnd(moveable, e);
        triggerChildAble(moveable, this, "dragControlEnd", datas, e);
        var nextParams = {
          targets: moveable.props.targets,
          clientX: clientX,
          clientY: clientY,
          isDrag: isDrag,
          datas: datas.datas
        };
        triggerEvent(moveable, "onRotateGroupEnd", nextParams);
        return isDrag;
      }
    };

    function renderDirections(moveable, directions, React) {
      var _a = moveable.state,
          pos1 = _a.pos1,
          pos2 = _a.pos2,
          pos3 = _a.pos3,
          pos4 = _a.pos4;
      var _b = moveable.props.renderDirections,
          renderDirections = _b === void 0 ? directions : _b;
      var poses = [pos1, pos2, pos3, pos4];
      var directionMap = {};
      directions.forEach(function (direction) {
        directionMap[direction] = true;
      });
      return renderDirections.map(function (direction) {
        var indexes = DIRECTION_INDEXES[direction];

        if (!indexes || !directionMap[direction]) {
          return null;
        }

        return React.createElement("div", {
          className: prefix("control", "direction", direction),
          "data-direction": direction,
          key: direction,
          style: getControlTransform.apply(void 0, indexes.map(function (index) {
            return poses[index];
          }))
        });
      });
    }
    function renderAllDirection(moveable, React) {
      return renderDirections(moveable, ["nw", "ne", "sw", "se", "n", "w", "s", "e"], React);
    }
    function renderDiagonalDirection(moveable, React) {
      return renderDirections(moveable, ["nw", "ne", "sw", "se"], React);
    }

    var Resizable = {
      name: "resizable",
      ableGroup: "size",
      updateRect: true,
      canPinch: true,
      render: function (moveable, React) {
        var _a = moveable.props,
            resizable = _a.resizable,
            edge = _a.edge;

        if (resizable) {
          if (edge) {
            return renderDiagonalDirection(moveable, React);
          }

          return renderAllDirection(moveable, React);
        }
      },
      dragControlCondition: directionCondition,
      dragControlStart: function (moveable, e) {
        var inputEvent = e.inputEvent,
            pinchFlag = e.pinchFlag,
            clientX = e.clientX,
            clientY = e.clientY,
            datas = e.datas;
        var inputTarget = inputEvent.target;
        var direction = pinchFlag ? [1, 1] : getDirection(inputTarget);
        var _a = moveable.state,
            target = _a.target,
            width = _a.width,
            height = _a.height;

        if (!direction || !target) {
          return false;
        }

        !pinchFlag && setDragStart(moveable, {
          datas: datas
        });
        datas.datas = {};
        datas.direction = direction;
        datas.offsetWidth = width;
        datas.offsetHeight = height;
        datas.prevWidth = 0;
        datas.prevHeight = 0;
        datas.width = width;
        datas.height = height;
        datas.transformOrigin = moveable.props.transformOrigin;
        var params = {
          datas: datas.datas,
          target: target,
          clientX: clientX,
          clientY: clientY,
          direction: direction,
          set: function (_a) {
            var startWidth = _a[0],
                startHeight = _a[1];
            datas.width = startWidth;
            datas.height = startHeight;
          },
          setOrigin: function (origin) {
            datas.transformOrigin = origin;
          },
          dragStart: Draggable.dragStart(moveable, new CustomDragger().dragStart([0, 0], inputEvent))
        };
        var result = triggerEvent(moveable, "onResizeStart", params);

        if (result !== false) {
          datas.isResize = true;
          moveable.state.snapDirection = direction;
        }

        return datas.isResize ? params : false;
      },
      dragControl: function (moveable, e) {
        var _a;

        var datas = e.datas,
            clientX = e.clientX,
            clientY = e.clientY,
            distX = e.distX,
            distY = e.distY,
            parentFlag = e.parentFlag,
            pinchFlag = e.pinchFlag,
            parentDistance = e.parentDistance,
            parentScale = e.parentScale,
            inputEvent = e.inputEvent,
            dragClient = e.dragClient;
        var direction = datas.direction,
            width = datas.width,
            height = datas.height,
            offsetWidth = datas.offsetWidth,
            offsetHeight = datas.offsetHeight,
            prevWidth = datas.prevWidth,
            prevHeight = datas.prevHeight,
            isResize = datas.isResize,
            transformOrigin = datas.transformOrigin;

        if (!isResize) {
          return;
        }

        var _b = moveable.props,
            keepRatio = _b.keepRatio,
            _c = _b.throttleResize,
            throttleResize = _c === void 0 ? 0 : _c,
            parentMoveable = _b.parentMoveable;
        var target = moveable.state.target;
        var distWidth = 0;
        var distHeight = 0; // diagonal

        if (parentScale) {
          distWidth = (parentScale[0] - 1) * offsetWidth;
          distHeight = (parentScale[1] - 1) * offsetHeight;
        } else if (pinchFlag) {
          if (parentDistance) {
            distWidth = parentDistance;
            distHeight = parentDistance * offsetHeight / offsetWidth;
          }
        } else {
          var dist = getDragDist({
            datas: datas,
            distX: distX,
            distY: distY
          });
          distWidth = direction[0] * dist[0];
          distHeight = direction[1] * dist[1];

          if (keepRatio && offsetWidth && offsetHeight) {
            var size = Math.sqrt(distWidth * distWidth + distHeight * distHeight);
            var rad = getRad([0, 0], dist);
            var standardRad = getRad([0, 0], direction);
            var distDiagonal = Math.cos(rad - standardRad) * size;
            var isWidth = direction[0] || !direction[1];
            distWidth = isWidth ? distDiagonal : distDiagonal * offsetWidth / offsetHeight;
            distHeight = isWidth ? distDiagonal * offsetHeight / offsetWidth : distDiagonal;
          }
        }

        var nextWidth = direction[0] ? throttle(Math.max(offsetWidth + distWidth, 0), throttleResize) : offsetWidth;
        var nextHeight = direction[1] ? throttle(Math.max(offsetHeight + distHeight, 0), throttleResize) : offsetHeight;

        if (!pinchFlag) {
          _a = checkSnapSize(moveable, nextWidth, nextHeight, direction, datas), nextWidth = _a[0], nextHeight = _a[1];
        }

        if (keepRatio && (!direction[0] || !direction[1])) {
          if (direction[0]) {
            nextHeight = throttle(nextWidth * offsetHeight / offsetWidth, throttleResize);
          } else {
            nextWidth = throttle(nextHeight * offsetWidth / offsetHeight, throttleResize);
          }
        }

        nextWidth = Math.round(nextWidth);
        nextHeight = Math.round(nextHeight);
        distWidth = nextWidth - offsetWidth;
        distHeight = nextHeight - offsetHeight;
        var delta = [distWidth - prevWidth, distHeight - prevHeight];
        datas.prevWidth = distWidth;
        datas.prevHeight = distHeight;

        if (!parentMoveable && delta.every(function (num) {
          return !num;
        })) {
          return;
        }

        var inverseDelta = !parentFlag && pinchFlag ? [0, 0] : getResizeDist(moveable, nextWidth, nextHeight, direction, transformOrigin, dragClient);
        var params = {
          target: target,
          width: width + distWidth,
          height: height + distHeight,
          offsetWidth: nextWidth,
          offsetHeight: nextHeight,
          direction: direction,
          dist: [distWidth, distHeight],
          datas: datas.datas,
          delta: delta,
          clientX: clientX,
          clientY: clientY,
          isPinch: !!pinchFlag,
          drag: Draggable.drag(moveable, setCustomDrag(moveable.state, inverseDelta, inputEvent))
        };
        triggerEvent(moveable, "onResize", params);
        return params;
      },
      dragControlEnd: function (moveable, _a) {
        var datas = _a.datas,
            isDrag = _a.isDrag,
            clientX = _a.clientX,
            clientY = _a.clientY;

        if (!datas.isResize) {
          return false;
        }

        datas.isResize = false;
        triggerEvent(moveable, "onResizeEnd", {
          target: moveable.state.target,
          datas: datas.datas,
          clientX: clientX,
          clientY: clientY,
          isDrag: isDrag
        });
        return isDrag;
      },
      dragGroupControlCondition: directionCondition,
      dragGroupControlStart: function (moveable, e) {
        var datas = e.datas;
        var params = this.dragControlStart(moveable, e);

        if (!params) {
          return false;
        }

        var direction = params.direction;
        var startPos = getPosByReverseDirection(getAbsolutePosesByState(moveable.state), direction);
        var events = triggerChildAble(moveable, this, "dragControlStart", datas, function (child, childDatas) {
          var pos = getPosByReverseDirection(getAbsolutePosesByState(child.state), direction);

          var _a = caculate(createRotateMatrix(-moveable.rotation / 180 * Math.PI, 3), [pos[0] - startPos[0], pos[1] - startPos[1], 1], 3),
              originalX = _a[0],
              originalY = _a[1];

          childDatas.originalX = originalX;
          childDatas.originalY = originalY;
          return e;
        });

        var nextParams = __assign$3({}, params, {
          targets: moveable.props.targets,
          events: events
        });

        var result = triggerEvent(moveable, "onResizeGroupStart", nextParams);
        datas.isResize = result !== false;
        return datas.isResize ? params : false;
      },
      dragGroupControl: function (moveable, e) {
        var datas = e.datas;

        if (!datas.isResize) {
          return;
        }

        var params = this.dragControl(moveable, e);

        if (!params) {
          return;
        }

        var offsetWidth = params.offsetWidth,
            offsetHeight = params.offsetHeight,
            dist = params.dist,
            direction = params.direction;
        var parentScale = [offsetWidth / (offsetWidth - dist[0]), offsetHeight / (offsetHeight - dist[1])];
        var prevPos = getPosByReverseDirection(getAbsolutePosesByState(moveable.state), direction);
        var events = triggerChildAble(moveable, this, "dragControl", datas, function (_, childDatas) {
          var _a = caculate(createRotateMatrix(moveable.rotation / 180 * Math.PI, 3), [childDatas.originalX * parentScale[0], childDatas.originalY * parentScale[1], 1], 3),
              clientX = _a[0],
              clientY = _a[1];

          return __assign$3({}, e, {
            parentScale: parentScale,
            dragClient: plus(prevPos, [clientX, clientY])
          });
        });

        var nextParams = __assign$3({
          targets: moveable.props.targets,
          events: events
        }, params);

        triggerEvent(moveable, "onResizeGroup", nextParams);
        return nextParams;
      },
      dragGroupControlEnd: function (moveable, e) {
        var clientX = e.clientX,
            clientY = e.clientY,
            isDrag = e.isDrag,
            datas = e.datas;

        if (!datas.isResize) {
          return;
        }

        this.dragControlEnd(moveable, e);
        triggerChildAble(moveable, this, "dragControlEnd", datas, e);
        var nextParams = {
          targets: moveable.props.targets,
          clientX: clientX,
          clientY: clientY,
          isDrag: isDrag,
          datas: datas.datas
        };
        triggerEvent(moveable, "onResizeGroupEnd", nextParams);
        return isDrag;
      }
    };

    var Scalable = {
      name: "scalable",
      ableGroup: "size",
      canPinch: true,
      render: function (moveable, React) {
        var _a = moveable.props,
            resizable = _a.resizable,
            scalable = _a.scalable,
            edge = _a.edge;

        if (!resizable && scalable) {
          if (edge) {
            return renderDiagonalDirection(moveable, React);
          }

          return renderAllDirection(moveable, React);
        }
      },
      dragControlCondition: directionCondition,
      dragControlStart: function (moveable, e) {
        var datas = e.datas,
            clientX = e.clientX,
            clientY = e.clientY,
            pinchFlag = e.pinchFlag,
            inputEvent = e.inputEvent;
        var inputTarget = inputEvent.target;
        var direction = pinchFlag ? [1, 1] : getDirection(inputTarget);
        var _a = moveable.state,
            width = _a.width,
            height = _a.height,
            targetTransform = _a.targetTransform,
            target = _a.target;

        if (!direction || !target) {
          return false;
        }

        if (!pinchFlag) {
          setDragStart(moveable, {
            datas: datas
          });
        }

        datas.datas = {};
        datas.transform = targetTransform;
        datas.prevDist = [1, 1];
        datas.direction = direction;
        datas.width = width;
        datas.height = height;
        datas.startScale = [1, 1];
        var params = {
          target: target,
          clientX: clientX,
          clientY: clientY,
          datas: datas.datas,
          direction: direction,
          set: function (scale) {
            datas.startScale = scale;
          },
          dragStart: Draggable.dragStart(moveable, new CustomDragger().dragStart([0, 0], inputEvent))
        };
        var result = triggerEvent(moveable, "onScaleStart", params);

        if (result !== false) {
          datas.isScale = true;
          moveable.state.snapDirection = direction;
        }

        return datas.isScale ? params : false;
      },
      dragControl: function (moveable, e) {
        var datas = e.datas,
            clientX = e.clientX,
            clientY = e.clientY,
            distX = e.distX,
            distY = e.distY,
            parentScale = e.parentScale,
            parentDistance = e.parentDistance,
            parentFlag = e.parentFlag,
            pinchFlag = e.pinchFlag,
            inputEvent = e.inputEvent,
            dragClient = e.dragClient;
        var prevDist = datas.prevDist,
            direction = datas.direction,
            width = datas.width,
            height = datas.height,
            transform = datas.transform,
            isScale = datas.isScale,
            startScale = datas.startScale;

        if (!isScale) {
          return false;
        }

        var _a = moveable.props,
            keepRatio = _a.keepRatio,
            throttleScale = _a.throttleScale,
            parentMoveable = _a.parentMoveable;
        var state = moveable.state;
        var target = state.target;
        var scaleX = 1;
        var scaleY = 1;

        if (parentScale) {
          scaleX = parentScale[0];
          scaleY = parentScale[1];
        } else if (pinchFlag) {
          if (parentDistance) {
            scaleX = (width + parentDistance) / width;
            scaleY = (height + parentDistance * height / width) / height;
          }
        } else {
          var dist = getDragDist({
            datas: datas,
            distX: distX,
            distY: distY
          });
          var distWidth = direction[0] * dist[0];
          var distHeight = direction[1] * dist[1]; // diagonal

          if (keepRatio && width && height) {
            var size = Math.sqrt(distWidth * distWidth + distHeight * distHeight);
            var rad = getRad([0, 0], dist);
            var standardRad = getRad([0, 0], direction);
            var distDiagonal = Math.cos(rad - standardRad) * size;
            var isWidth = direction[0] || !direction[1];
            distWidth = isWidth ? distDiagonal : distDiagonal * width / height;
            distHeight = isWidth ? distDiagonal * height / width : distDiagonal;
          }

          scaleX = (width + distWidth) / width;
          scaleY = (height + distHeight) / height;
        }

        scaleX = direction[0] ? throttle(scaleX * startScale[0], throttleScale) : startScale[0];
        scaleY = direction[1] ? throttle(scaleY * startScale[1], throttleScale) : startScale[1];

        if (scaleX === 0) {
          scaleX = (prevDist[0] > 0 ? 1 : -1) * MIN_SCALE;
        }

        if (scaleY === 0) {
          scaleY = (prevDist[1] > 0 ? 1 : -1) * MIN_SCALE;
        }

        var scale = [scaleX, scaleY];
        var nowDist = [scaleX / startScale[0], scaleY / startScale[1]];
        var snapDirection = direction;

        if (moveable.props.groupable) {
          snapDirection = [(nowDist[0] >= 0 ? 1 : -1) * direction[0], (nowDist[1] >= 0 ? 1 : -1) * direction[1]];
          var stateDirection = state.snapDirection;

          if (isArray(stateDirection) && (stateDirection[0] || stateDirection[1])) {
            state.snapDirection = snapDirection;
          }
        }

        if (!pinchFlag) {
          nowDist = checkSnapScale(moveable, nowDist, direction, snapDirection, datas);
        }

        if (keepRatio && !parentScale && !pinchFlag && (!direction[0] || !direction[1])) {
          var distWidth = width * nowDist[0] - width;
          var distHeight = height * nowDist[1] - height;

          if (direction[0]) {
            nowDist[1] = throttle((height + distWidth * height / width) / height, throttleScale);
          } else {
            nowDist[0] = throttle((width + distHeight * width / height) / width, throttleScale);
          }
        }

        var delta = [nowDist[0] / prevDist[0], nowDist[1] / prevDist[1]]; // const prevScale = scale;

        scale = multiply2(nowDist, startScale);
        datas.prevDist = nowDist;

        if (scaleX === prevDist[0] && scaleY === prevDist[1] && !parentMoveable) {
          return false;
        }

        var inverseDelta = !parentFlag && pinchFlag ? [0, 0] : getScaleDist(moveable, delta, direction, dragClient);
        var params = {
          target: target,
          scale: scale,
          direction: direction,
          dist: nowDist,
          delta: delta,
          transform: transform + " scale(" + scaleX + ", " + scaleY + ")",
          clientX: clientX,
          clientY: clientY,
          datas: datas.datas,
          isPinch: !!pinchFlag,
          drag: Draggable.drag(moveable, setCustomDrag(moveable.state, inverseDelta, inputEvent))
        };
        triggerEvent(moveable, "onScale", params);
        return params;
      },
      dragControlEnd: function (moveable, _a) {
        var datas = _a.datas,
            isDrag = _a.isDrag,
            clientX = _a.clientX,
            clientY = _a.clientY;

        if (!datas.isScale) {
          return false;
        }

        datas.isScale = false;
        triggerEvent(moveable, "onScaleEnd", {
          target: moveable.state.target,
          isDrag: isDrag,
          clientX: clientX,
          clientY: clientY,
          datas: datas.datas
        });
        return isDrag;
      },
      dragGroupControlCondition: directionCondition,
      dragGroupControlStart: function (moveable, e) {
        var datas = e.datas;
        var params = this.dragControlStart(moveable, e);

        if (!params) {
          return false;
        }

        var direction = params.direction;
        var startPos = getPosByReverseDirection(getAbsolutePosesByState(moveable.state), direction);
        var events = triggerChildAble(moveable, this, "dragControlStart", datas, function (child, childDatas) {
          var pos = getPosByReverseDirection(getAbsolutePosesByState(child.state), direction);

          var _a = caculate(createRotateMatrix(-moveable.rotation / 180 * Math.PI, 3), [pos[0] - startPos[0], pos[1] - startPos[1], 1], 3),
              originalX = _a[0],
              originalY = _a[1];

          childDatas.originalX = originalX;
          childDatas.originalY = originalY;
          return e;
        });

        var nextParams = __assign$3({}, params, {
          targets: moveable.props.targets,
          events: events
        });

        var result = triggerEvent(moveable, "onScaleGroupStart", nextParams);
        datas.isScale = result !== false;
        return datas.isScale ? nextParams : false;
      },
      dragGroupControl: function (moveable, e) {
        var datas = e.datas;

        if (!datas.isScale) {
          return;
        }

        var params = this.dragControl(moveable, e);

        if (!params) {
          return;
        }

        var scale = params.scale,
            direction = params.direction,
            dist = params.dist;
        var prevPos = getPosByReverseDirection(getAbsolutePosesByState(moveable.state), multiply2(direction, dist));
        var events = triggerChildAble(moveable, this, "dragControl", datas, function (_, childDatas) {
          var _a = caculate(createRotateMatrix(moveable.rotation / 180 * Math.PI, 3), [childDatas.originalX * scale[0], childDatas.originalY * scale[1], 1], 3),
              clientX = _a[0],
              clientY = _a[1];

          return __assign$3({}, e, {
            parentScale: scale,
            dragClient: plus(prevPos, [clientX, clientY])
          });
        });

        var nextParams = __assign$3({
          targets: moveable.props.targets,
          events: events
        }, params);

        triggerEvent(moveable, "onScaleGroup", nextParams);
        return nextParams;
      },
      dragGroupControlEnd: function (moveable, e) {
        var clientX = e.clientX,
            clientY = e.clientY,
            isDrag = e.isDrag,
            datas = e.datas;

        if (!datas.isScale) {
          return;
        }

        this.dragControlEnd(moveable, e);
        triggerChildAble(moveable, this, "dragControlEnd", datas, e);
        var nextParams = {
          targets: moveable.props.targets,
          clientX: clientX,
          clientY: clientY,
          isDrag: isDrag,
          datas: datas.datas
        };
        triggerEvent(moveable, "onScaleGroupEnd", nextParams);
        return isDrag;
      }
    };

    function getMiddleLinePos(pos1, pos2) {
      return pos1.map(function (pos, i) {
        return dot(pos, pos2[i], 1, 2);
      });
    }

    function getTriangleRad(pos1, pos2, pos3) {
      // pos1 Rad
      var rad1 = getRad(pos1, pos2);
      var rad2 = getRad(pos1, pos3);
      var rad = rad2 - rad1;
      return rad >= 0 ? rad : rad + 2 * Math.PI;
    }

    function isValidPos(poses1, poses2) {
      var rad1 = getTriangleRad(poses1[0], poses1[1], poses1[2]);
      var rad2 = getTriangleRad(poses2[0], poses2[1], poses2[2]);
      var pi = Math.PI;

      if (rad1 >= pi && rad2 <= pi || rad1 <= pi && rad2 >= pi) {
        return false;
      }

      return true;
    }

    var Warpable = {
      name: "warpable",
      ableGroup: "size",
      render: function (moveable, React) {
        var _a = moveable.props,
            resizable = _a.resizable,
            scalable = _a.scalable,
            warpable = _a.warpable;

        if (resizable || scalable || !warpable) {
          return;
        }

        var _b = moveable.state,
            pos1 = _b.pos1,
            pos2 = _b.pos2,
            pos3 = _b.pos3,
            pos4 = _b.pos4;
        var linePosFrom1 = getMiddleLinePos(pos1, pos2);
        var linePosFrom2 = getMiddleLinePos(pos2, pos1);
        var linePosFrom3 = getMiddleLinePos(pos1, pos3);
        var linePosFrom4 = getMiddleLinePos(pos3, pos1);
        var linePosTo1 = getMiddleLinePos(pos3, pos4);
        var linePosTo2 = getMiddleLinePos(pos4, pos3);
        var linePosTo3 = getMiddleLinePos(pos2, pos4);
        var linePosTo4 = getMiddleLinePos(pos4, pos2);
        return [React.createElement("div", {
          className: prefix("line"),
          key: "middeLine1",
          style: getLineStyle(linePosFrom1, linePosTo1)
        }), React.createElement("div", {
          className: prefix("line"),
          key: "middeLine2",
          style: getLineStyle(linePosFrom2, linePosTo2)
        }), React.createElement("div", {
          className: prefix("line"),
          key: "middeLine3",
          style: getLineStyle(linePosFrom3, linePosTo3)
        }), React.createElement("div", {
          className: prefix("line"),
          key: "middeLine4",
          style: getLineStyle(linePosFrom4, linePosTo4)
        })].concat(renderAllDirection(moveable, React));
      },
      dragControlCondition: function (target) {
        return hasClass(target, prefix("direction"));
      },
      dragControlStart: function (moveable, _a) {
        var datas = _a.datas,
            clientX = _a.clientX,
            clientY = _a.clientY,
            inputTarget = _a.inputEvent.target;
        var target = moveable.props.target;
        var direction = getDirection(inputTarget);

        if (!direction || !target) {
          return false;
        }

        var state = moveable.state;
        var transformOrigin = state.transformOrigin,
            is3d = state.is3d,
            targetTransform = state.targetTransform,
            targetMatrix = state.targetMatrix,
            width = state.width,
            height = state.height,
            left = state.left,
            top = state.top;
        datas.datas = {};
        datas.targetTransform = targetTransform;
        datas.warpTargetMatrix = is3d ? targetMatrix : convertDimension(targetMatrix, 3, 4);
        datas.targetInverseMatrix = ignoreDimension(invert(datas.warpTargetMatrix, 4), 3, 4);
        datas.direction = direction;
        datas.left = left;
        datas.top = top;
        setDragStart(moveable, {
          datas: datas
        });
        datas.poses = [[0, 0], [width, 0], [0, height], [width, height]].map(function (p, i) {
          return minus(p, transformOrigin);
        });
        datas.nextPoses = datas.poses.map(function (_a) {
          var x = _a[0],
              y = _a[1];
          return caculate(datas.warpTargetMatrix, [x, y, 0, 1], 4);
        });
        datas.startMatrix = createIdentityMatrix(4);
        datas.prevMatrix = createIdentityMatrix(4);
        datas.absolutePoses = getAbsolutePosesByState(state);
        datas.posIndexes = getPosIndexesByDirection(direction);
        state.snapDirection = direction;
        var result = triggerEvent(moveable, "onWarpStart", {
          target: target,
          clientX: clientX,
          clientY: clientY,
          datas: datas.datas,
          set: function (matrix) {
            datas.startMatrix = matrix;
          }
        });

        if (result !== false) {
          datas.isWarp = true;
        }

        return result;
      },
      dragControl: function (moveable, _a) {
        var datas = _a.datas,
            clientX = _a.clientX,
            clientY = _a.clientY,
            distX = _a.distX,
            distY = _a.distY;
        var targetInverseMatrix = datas.targetInverseMatrix,
            prevMatrix = datas.prevMatrix,
            isWarp = datas.isWarp,
            startMatrix = datas.startMatrix,
            poses = datas.poses,
            posIndexes = datas.posIndexes,
            absolutePoses = datas.absolutePoses;

        if (!isWarp) {
          return false;
        }

        var target = moveable.props.target;

        if (hasGuidelines(moveable, "warpable")) {
          var selectedPoses = posIndexes.map(function (index) {
            return absolutePoses[index];
          });

          if (selectedPoses.length > 1) {
            selectedPoses.push([(selectedPoses[0][0] + selectedPoses[1][0]) / 2, (selectedPoses[0][1] + selectedPoses[1][1]) / 2]);
          }

          var snapInfos = checkSnapPoses(moveable, selectedPoses.map(function (pos) {
            return pos[0] + distX;
          }), selectedPoses.map(function (pos) {
            return pos[1] + distY;
          }));
          var horizontalOffset = snapInfos.horizontal.offset,
              verticalOffset = snapInfos.vertical.offset;
          distY -= horizontalOffset;
          distX -= verticalOffset;
        }

        var dist = getDragDist({
          datas: datas,
          distX: distX,
          distY: distY
        }, true);
        var nextPoses = datas.nextPoses.slice();
        posIndexes.forEach(function (index) {
          nextPoses[index] = plus(nextPoses[index], dist);
        });

        if (!NEARBY_POS.every(function (nearByPoses) {
          return isValidPos(nearByPoses.map(function (i) {
            return poses[i];
          }), nearByPoses.map(function (i) {
            return nextPoses[i];
          }));
        })) {
          return false;
        }

        var h = createWarpMatrix(poses[0], poses[1], poses[2], poses[3], nextPoses[0], nextPoses[1], nextPoses[2], nextPoses[3]);

        if (!h.length) {
          return false;
        }

        var matrix = convertMatrixtoCSS(multiply(targetInverseMatrix, h, 4));
        var transform = datas.targetTransform + " matrix3d(" + matrix.join(",") + ")";
        var delta = multiplyCSS(invert(prevMatrix, 4), matrix, 4);
        datas.prevMatrix = matrix;
        triggerEvent(moveable, "onWarp", {
          target: target,
          clientX: clientX,
          clientY: clientY,
          delta: delta,
          matrix: multiplyCSS(startMatrix, matrix, 4),
          multiply: multiplyCSS,
          dist: matrix,
          transform: transform,
          datas: datas.datas
        });
        return true;
      },
      dragControlEnd: function (moveable, _a) {
        var datas = _a.datas,
            isDrag = _a.isDrag,
            clientX = _a.clientX,
            clientY = _a.clientY;

        if (!datas.isWarp) {
          return false;
        }

        datas.isWarp = false;
        var target = moveable.props.target;
        triggerEvent(moveable, "onWarpEnd", {
          target: target,
          clientX: clientX,
          clientY: clientY,
          isDrag: isDrag,
          datas: datas.datas
        });
        return isDrag;
      }
    };

    var MOVEABLE_ABLES = [Snappable, Pinchable, Draggable, Rotatable, Resizable, Scalable, Warpable];

    function restoreStyle(moveable) {
      var el = moveable.areaElement;
      var _a = moveable.state,
          width = _a.width,
          height = _a.height;
      removeClass(el, prefix("avoid"));
      el.style.cssText += "left: 0px; top: 0px; width: " + width + "px; height: " + height + "px";
    }

    var Groupable = {
      name: "groupable",
      render: function (moveable, React) {
        var targets = moveable.props.targets || [];
        moveable.moveables = [];
        var _a = moveable.state,
            left = _a.left,
            top = _a.top;
        var position = {
          left: left,
          top: top
        };
        return targets.map(function (target, i) {
          return React.createElement(MoveableManager, {
            key: i,
            ref: refs(moveable, "moveables", i),
            target: target,
            origin: false,
            parentMoveable: moveable,
            parentPosition: position
          });
        }).slice();
      },
      dragGroupStart: function (moveable, _a) {
        var datas = _a.datas,
            clientX = _a.clientX,
            clientY = _a.clientY;
        datas.isDrag = false;
        var areaElement = moveable.areaElement;
        var moveableElement = moveable.controlBox.getElement();

        var _b = moveableElement.getBoundingClientRect(),
            left = _b.left,
            top = _b.top;

        var _c = moveable.state,
            width = _c.width,
            height = _c.height;
        var size = Math.max(width, height) * 2;
        var posX = clientX - left - size / 2;
        var posY = clientY - top - size - 10;
        areaElement.style.cssText += "width: " + size + "px; height: " + size + "px;left: " + posX + "px;top: " + posY + "px;";
        addClass(areaElement, prefix("avoid"));
      },
      dragGroup: function (moveable, _a) {
        var datas = _a.datas;

        if (!datas.isDrag) {
          datas.isDrag = true;
          restoreStyle(moveable);
        }
      },
      dragGroupEnd: function (moveable, _a) {
        var inputEvent = _a.inputEvent,
            isDrag = _a.isDrag,
            datas = _a.datas;

        if (!datas.isDrag) {
          restoreStyle(moveable);
        }

        var target = inputEvent.target;

        if (isDrag || moveable.isMoveableElement(target)) {
          return;
        }

        var targets = moveable.props.targets;
        var targetIndex = targets.indexOf(target);
        var hasTarget = targetIndex > -1;
        var containsTarget = false;

        if (targetIndex === -1) {
          targetIndex = findIndex(targets, function (parentTarget) {
            return parentTarget.contains(target);
          });
          containsTarget = targetIndex > -1;
        }

        triggerEvent(moveable, "onClickGroup", {
          targets: targets,
          target: target,
          targetIndex: targetIndex,
          hasTarget: hasTarget,
          containsTarget: containsTarget
        });
      }
    };

    function getMaxPos(poses, index) {
      return Math.max.apply(Math, poses.map(function (_a) {
        var pos1 = _a[0],
            pos2 = _a[1],
            pos3 = _a[2],
            pos4 = _a[3];
        return Math.max(pos1[index], pos2[index], pos3[index], pos4[index]);
      }));
    }

    function getMinPos(poses, index) {
      return Math.min.apply(Math, poses.map(function (_a) {
        var pos1 = _a[0],
            pos2 = _a[1],
            pos3 = _a[2],
            pos4 = _a[3];
        return Math.min(pos1[index], pos2[index], pos3[index], pos4[index]);
      }));
    }

    function getGroupRect(moveables, rotation) {
      if (!moveables.length) {
        return [0, 0, 0, 0];
      }

      var moveablePoses = moveables.map(function (_a) {
        var state = _a.state;
        return getAbsolutePosesByState(state);
      });
      var minX = MAX_NUM;
      var minY = MAX_NUM;
      var groupWidth = 0;
      var groupHeight = 0;
      var fixedRotation = throttle(rotation, TINY_NUM);

      if (fixedRotation % 90) {
        var rad_1 = rotation / 180 * Math.PI;
        var a1_1 = Math.tan(rad_1);
        var a2_1 = -1 / a1_1;
        var b1s_1 = [MIN_NUM, MAX_NUM];
        var b2s_1 = [MIN_NUM, MAX_NUM];
        moveablePoses.forEach(function (poses) {
          poses.forEach(function (pos) {
            // ax + b = y
            // ㅠ = y - ax
            var b1 = pos[1] - a1_1 * pos[0];
            var b2 = pos[1] - a2_1 * pos[0];
            b1s_1[0] = Math.max(b1s_1[0], b1);
            b1s_1[1] = Math.min(b1s_1[1], b1);
            b2s_1[0] = Math.max(b2s_1[0], b2);
            b2s_1[1] = Math.min(b2s_1[1], b2);
          });
        });
        b1s_1.forEach(function (b1) {
          // a1x + b1 = a2x + b2
          b2s_1.forEach(function (b2) {
            // (a1 - a2)x = b2 - b1
            var x = (b2 - b1) / (a1_1 - a2_1);
            var y = a1_1 * x + b1;
            minX = Math.min(minX, x);
            minY = Math.min(minY, y);
          });
        });
        var rotatePoses = moveablePoses.map(function (_a) {
          var pos1 = _a[0],
              pos2 = _a[1],
              pos3 = _a[2],
              pos4 = _a[3];
          return [rotate(pos1, -rad_1), rotate(pos2, -rad_1), rotate(pos3, -rad_1), rotate(pos4, -rad_1)];
        });
        groupWidth = getMaxPos(rotatePoses, 0) - getMinPos(rotatePoses, 0);
        groupHeight = getMaxPos(rotatePoses, 1) - getMinPos(rotatePoses, 1);
      } else {
        minX = getMinPos(moveablePoses, 0);
        minY = getMinPos(moveablePoses, 1);
        groupWidth = getMaxPos(moveablePoses, 0) - minX;
        groupHeight = getMaxPos(moveablePoses, 1) - minY;

        if (fixedRotation % 180) {
          var changedWidth = groupWidth;
          groupWidth = groupHeight;
          groupHeight = changedWidth;
        }
      }

      return [minX, minY, groupWidth, groupHeight];
    }

    var MoveableGroup =
    /*#__PURE__*/
    function (_super) {
      __extends$3(MoveableGroup, _super);

      function MoveableGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.differ = new ChildrenDiffer();
        _this.moveables = [];
        _this.rotation = 0;
        return _this;
      }

      var __proto = MoveableGroup.prototype;

      __proto.updateEvent = function (prevProps) {
        var state = this.state;
        var props = this.props;

        if (!state.target) {
          state.target = this.areaElement;
          this.controlBox.getElement().style.display = "block";
          this.targetDragger = getAbleDragger(this, state.target, "targetAbles", "Group");
          this.controlDragger = getAbleDragger(this, this.controlBox.getElement(), "controlAbles", "GroupControl");
        }

        var isContainerChanged = prevProps.container !== props.container;

        if (isContainerChanged) {
          state.container = props.container;
        }

        var _a = this.differ.update(props.targets),
            added = _a.added,
            changed = _a.changed,
            removed = _a.removed;

        if (isContainerChanged || added.length || changed.length || removed.length) {
          this.updateRect();
        }
      };

      __proto.checkUpdate = function () {
        this.updateAbles();
      };

      __proto.updateRect = function (type, isTarget) {
        var _a;

        if (!this.controlBox) {
          return;
        }

        this.moveables.forEach(function (moveable) {
          moveable.updateRect(type, false, false);
        });
        var state = this.state;
        var target = state.target || this.props.target;

        if (!isTarget || type !== "" && this.props.updateGroup) {
          // reset rotataion
          this.rotation = 0;
        }

        var rotation = this.rotation;

        var _b = getGroupRect(this.moveables, rotation),
            left = _b[0],
            top = _b[1],
            width = _b[2],
            height = _b[3]; // tslint:disable-next-line: max-line-length


        target.style.cssText += "left:0px;top:0px;width:" + width + "px; height:" + height + "px;transform:rotate(" + rotation + "deg)";
        state.width = width;
        state.height = height;
        var info = getTargetInfo(target, this.controlBox.getElement(), state);
        var pos = [info.left, info.top];
        _a = getAbsolutePosesByState(info), info.pos1 = _a[0], info.pos2 = _a[1], info.pos3 = _a[2], info.pos4 = _a[3];
        info.origin = plus(pos, info.origin);
        info.beforeOrigin = plus(pos, info.beforeOrigin);
        this.updateState(__assign$3({}, info, {
          left: left - info.left,
          top: top - info.top
        }), true);
      };

      __proto.triggerEvent = function (name, e) {
        if (name.indexOf("Group") > -1) {
          return _super.prototype.triggerEvent.call(this, name, e);
        }
      };

      __proto.updateAbles = function () {
        _super.prototype.updateAbles.call(this, this.props.ables.concat([Groupable]), "Group");
      };

      MoveableGroup.defaultProps = __assign$3({}, MoveableManager.defaultProps, {
        transformOrigin: ["50%", "50%"],
        groupable: true,
        dragArea: true,
        ables: MOVEABLE_ABLES,
        targets: []
      });
      return MoveableGroup;
    }(MoveableManager);

    var Moveable =
    /*#__PURE__*/
    function (_super) {
      __extends$3(Moveable, _super);

      function Moveable() {
        return _super !== null && _super.apply(this, arguments) || this;
      }

      var __proto = Moveable.prototype;

      __proto.render = function () {
        var props = this.props;
        var ables = props.ables || [];
        var target = this.props.target || this.props.targets;
        var isArr = isArray(target);
        var isGroup = isArr && target.length > 1;

        if (isGroup) {
          return S(MoveableGroup, __assign$3({
            key: "group",
            ref: ref(this, "moveable")
          }, __assign$3({}, this.props, {
            target: null,
            targets: target,
            ables: MOVEABLE_ABLES.concat(ables)
          })));
        } else {
          var moveableTarget = isArr ? target[0] : target;
          return S(MoveableManager, __assign$3({
            key: "single",
            ref: ref(this, "moveable")
          }, __assign$3({}, this.props, {
            target: moveableTarget,
            ables: MOVEABLE_ABLES.concat(ables)
          })));
        }
      };

      __proto.isMoveableElement = function (target) {
        return this.moveable.isMoveableElement(target);
      };

      __proto.dragStart = function (e) {
        this.moveable.dragStart(e);
      };

      __proto.isInside = function (clientX, clientY) {
        return this.moveable.isInside(clientX, clientY);
      };

      __proto.updateRect = function () {
        this.moveable.updateRect();
      };

      __proto.updateTarget = function () {
        this.moveable.updateTarget();
      };

      __proto.getRect = function () {
        return this.moveable.getRect();
      };

      __proto.destroy = function () {
        this.moveable.componentWillUnmount();
      };

      return Moveable;
    }(W);

    var InnerMoveable =
    /*#__PURE__*/
    function (_super) {
      __extends(InnerMoveable, _super);

      function InnerMoveable(props) {
        var _this = _super.call(this, props) || this;

        _this.state = {};
        _this.state = _this.props;
        return _this;
      }

      var __proto = InnerMoveable.prototype;

      __proto.render = function () {
        return h(Moveable, __assign({
          ref: ref(this, "preactMoveable")
        }, this.state));
      };

      return InnerMoveable;
    }(m);

    var PROPERTIES = ["draggable", "resizable", "scalable", "rotatable", "warpable", "pinchable", "snappable", "origin", "target", "edge", "throttleDrag", "throttleResize", "throttleScale", "throttleRotate", "keepRatio", "dragArea", "pinchThreshold", "snapCenter", "snapThreshold", "horizontalGuidelines", "verticalGuidelines", "elementGuidelines", "bounds"];
    var EVENTS = ["dragStart", "drag", "dragEnd", "resizeStart", "resize", "resizeEnd", "scaleStart", "scale", "scaleEnd", "rotateStart", "rotate", "rotateEnd", "warpStart", "warp", "warpEnd", "pinchStart", "pinch", "pinchEnd", "dragGroupStart", "dragGroup", "dragGroupEnd", "resizeGroupStart", "resizeGroup", "resizeGroupEnd", "scaleGroupStart", "scaleGroup", "scaleGroupEnd", "rotateGroupStart", "rotateGroup", "rotateGroupEnd", "pinchGroupStart", "pinchGroup", "pinchGroupEnd", "clickGroup", "renderStart", "render", "renderEnd"];

    /**
     * Moveable is Draggable! Resizable! Scalable! Rotatable!
     * @sort 1
     * @extends eg.Component
     */

    var Moveable$1 =
    /*#__PURE__*/
    function (_super) {
      __extends(Moveable, _super);
      /**
       *
       */


      function Moveable(parentElement, options) {
        if (options === void 0) {
          options = {};
        }

        var _this = _super.call(this) || this;

        var element = document.createElement("div");

        var nextOptions = __assign({
          container: parentElement
        }, options);

        var events = {};
        EVENTS.forEach(function (name) {
          events[camelize("on " + name)] = function (e) {
            return _this.trigger(name, e);
          };
        });
        I(h(InnerMoveable, __assign({
          ref: ref(_this, "innerMoveable")
        }, nextOptions, events)), element);
        parentElement.appendChild(element.children[0]);
        var target = nextOptions.target;

        if (isArray(target) && target.length > 1) {
          _this.updateRect();
        }

        return _this;
      }
      /**
       * Check if the target is an element included in the moveable.
       * @param - the target
       * @example
       * import Moveable from "moveable";
       *
       * const moveable = new Moveable(document.body);
       *
       * window.addEventListener("click", e => {
       *     if (!moveable.isMoveableElement(e.target)) {
       *         moveable.target = e.target;
       *     }
       * });
       */


      var __proto = Moveable.prototype;

      __proto.isMoveableElement = function (target) {
        return this.getMoveable().isMoveableElement(target);
      };
      /**
       * If the width, height, left, and top of all elements change, update the shape of the moveable.
       * @example
       * import Moveable from "moveable";
       *
       * const moveable = new Moveable(document.body);
       *
       * window.addEventListener("resize", e => {
       *     moveable.updateRect();
       * });
       */


      __proto.updateRect = function () {
        this.getMoveable().updateRect();
      };
      /**
       * You can move the Moveable through the external `MouseEvent`or `TouchEvent`.
       * @param - external `MouseEvent`or `TouchEvent`
       * @example
       * import Moveable from "moveable";
       *
       * const moveable = new Moveable(document.body);
       *
       * document.body.addEventListener("mousedown", e => {
       *     if (!moveable.isMoveableElement(e.target)) {
       *          moveable.dragStart(e);
       *     }
       * });
       */


      __proto.dragStart = function (e) {
        this.getMoveable().dragStart(e);
      };
      /**
       * Whether the coordinates are inside Moveable
       * @param - x coordinate
       * @param - y coordinate
       * @return - True if the coordinate is in moveable or false
       * @example
       * import Moveable from "moveable";
       *
       * const moveable = new Moveable(document.body);
       *
       * document.body.addEventListener("mousedown", e => {
       *     if (moveable.isInside(e.clientX, e.clientY)) {
       *          console.log("inside");
       *     }
       * });
       */


      __proto.isInside = function (clientX, clientY) {
        return this.getMoveable().isInside(clientX, clientY);
      };

      __proto.getRect = function () {
        return this.getMoveable().getRect();
      };
      /**
       * If the width, height, left, and top of the only target change, update the shape of the moveable.
       * @param - the values of x and y to move moveable.
       * @example
       * import Moveable from "moveable";
       *
       * const moveable = new Moveable(document.body);
       *
       * moveable.updateTarget();
       */


      __proto.updateTarget = function () {
        this.getMoveable().updateTarget();
      };
      /**
       * Remove the Moveable object and the events.
       * @example
       * import Moveable from "moveable";
       *
       * const moveable = new Moveable(document.body);
       *
       * moveable.destroy();
       */


      __proto.destroy = function () {
        var el = this.getMoveable().base;
        el.remove ? el.remove() : el.parentElement.removeChild(el);
        this.off();
        this.getMoveable().destroy();
        this.innerMoveable = null;
      };

      __proto.getMoveable = function () {
        return this.innerMoveable.preactMoveable;
      };

      Moveable = __decorate([Properties(PROPERTIES, function (prototype, property) {
        Object.defineProperty(prototype, property, {
          get: function () {
            return this.getMoveable().props[property];
          },
          set: function (value) {
            var _a;

            this.innerMoveable.setState((_a = {}, _a[property] = value, _a));
          },
          enumerable: true,
          configurable: true
        });
      })], Moveable);
      return Moveable;
    }(Component);

    Moveable$1.PROPERTIES = PROPERTIES;
    Moveable$1.EVENTS = EVENTS;

    return Moveable$1;

}));
//# sourceMappingURL=moveable.js.map