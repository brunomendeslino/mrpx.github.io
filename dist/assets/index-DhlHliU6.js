var Cx=Object.defineProperty;var Px=(i,e,t)=>e in i?Cx(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Je=(i,e,t)=>Px(i,typeof e!="symbol"?e+"":e,t);function Lx(i,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in i)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(i,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var kl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ph(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Hf={exports:{}},aa={},Vf={exports:{}},St={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _g;function Dx(){if(_g)return St;_g=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function y(W){return W===null||typeof W!="object"?null:(W=g&&W[g]||W["@@iterator"],typeof W=="function"?W:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function v(W,oe,Ce){this.props=W,this.context=oe,this.refs=M,this.updater=Ce||x}v.prototype.isReactComponent={},v.prototype.setState=function(W,oe){if(typeof W!="object"&&typeof W!="function"&&W!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,W,oe,"setState")},v.prototype.forceUpdate=function(W){this.updater.enqueueForceUpdate(this,W,"forceUpdate")};function _(){}_.prototype=v.prototype;function R(W,oe,Ce){this.props=W,this.context=oe,this.refs=M,this.updater=Ce||x}var C=R.prototype=new _;C.constructor=R,E(C,v.prototype),C.isPureReactComponent=!0;var b=Array.isArray,F=Object.prototype.hasOwnProperty,I={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function V(W,oe,Ce){var te,ye={},Me=null,xe=null;if(oe!=null)for(te in oe.ref!==void 0&&(xe=oe.ref),oe.key!==void 0&&(Me=""+oe.key),oe)F.call(oe,te)&&!O.hasOwnProperty(te)&&(ye[te]=oe[te]);var Se=arguments.length-2;if(Se===1)ye.children=Ce;else if(1<Se){for(var Le=Array(Se),Ne=0;Ne<Se;Ne++)Le[Ne]=arguments[Ne+2];ye.children=Le}if(W&&W.defaultProps)for(te in Se=W.defaultProps,Se)ye[te]===void 0&&(ye[te]=Se[te]);return{$$typeof:i,type:W,key:Me,ref:xe,props:ye,_owner:I.current}}function L(W,oe){return{$$typeof:i,type:W.type,key:oe,ref:W.ref,props:W.props,_owner:W._owner}}function T(W){return typeof W=="object"&&W!==null&&W.$$typeof===i}function U(W){var oe={"=":"=0",":":"=2"};return"$"+W.replace(/[=:]/g,function(Ce){return oe[Ce]})}var D=/\/+/g;function B(W,oe){return typeof W=="object"&&W!==null&&W.key!=null?U(""+W.key):oe.toString(36)}function z(W,oe,Ce,te,ye){var Me=typeof W;(Me==="undefined"||Me==="boolean")&&(W=null);var xe=!1;if(W===null)xe=!0;else switch(Me){case"string":case"number":xe=!0;break;case"object":switch(W.$$typeof){case i:case e:xe=!0}}if(xe)return xe=W,ye=ye(xe),W=te===""?"."+B(xe,0):te,b(ye)?(Ce="",W!=null&&(Ce=W.replace(D,"$&/")+"/"),z(ye,oe,Ce,"",function(Ne){return Ne})):ye!=null&&(T(ye)&&(ye=L(ye,Ce+(!ye.key||xe&&xe.key===ye.key?"":(""+ye.key).replace(D,"$&/")+"/")+W)),oe.push(ye)),1;if(xe=0,te=te===""?".":te+":",b(W))for(var Se=0;Se<W.length;Se++){Me=W[Se];var Le=te+B(Me,Se);xe+=z(Me,oe,Ce,Le,ye)}else if(Le=y(W),typeof Le=="function")for(W=Le.call(W),Se=0;!(Me=W.next()).done;)Me=Me.value,Le=te+B(Me,Se++),xe+=z(Me,oe,Ce,Le,ye);else if(Me==="object")throw oe=String(W),Error("Objects are not valid as a React child (found: "+(oe==="[object Object]"?"object with keys {"+Object.keys(W).join(", ")+"}":oe)+"). If you meant to render a collection of children, use an array instead.");return xe}function le(W,oe,Ce){if(W==null)return W;var te=[],ye=0;return z(W,te,"","",function(Me){return oe.call(Ce,Me,ye++)}),te}function ne(W){if(W._status===-1){var oe=W._result;oe=oe(),oe.then(function(Ce){(W._status===0||W._status===-1)&&(W._status=1,W._result=Ce)},function(Ce){(W._status===0||W._status===-1)&&(W._status=2,W._result=Ce)}),W._status===-1&&(W._status=0,W._result=oe)}if(W._status===1)return W._result.default;throw W._result}var he={current:null},X={transition:null},pe={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:X,ReactCurrentOwner:I};function ce(){throw Error("act(...) is not supported in production builds of React.")}return St.Children={map:le,forEach:function(W,oe,Ce){le(W,function(){oe.apply(this,arguments)},Ce)},count:function(W){var oe=0;return le(W,function(){oe++}),oe},toArray:function(W){return le(W,function(oe){return oe})||[]},only:function(W){if(!T(W))throw Error("React.Children.only expected to receive a single React element child.");return W}},St.Component=v,St.Fragment=t,St.Profiler=o,St.PureComponent=R,St.StrictMode=r,St.Suspense=d,St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pe,St.act=ce,St.cloneElement=function(W,oe,Ce){if(W==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+W+".");var te=E({},W.props),ye=W.key,Me=W.ref,xe=W._owner;if(oe!=null){if(oe.ref!==void 0&&(Me=oe.ref,xe=I.current),oe.key!==void 0&&(ye=""+oe.key),W.type&&W.type.defaultProps)var Se=W.type.defaultProps;for(Le in oe)F.call(oe,Le)&&!O.hasOwnProperty(Le)&&(te[Le]=oe[Le]===void 0&&Se!==void 0?Se[Le]:oe[Le])}var Le=arguments.length-2;if(Le===1)te.children=Ce;else if(1<Le){Se=Array(Le);for(var Ne=0;Ne<Le;Ne++)Se[Ne]=arguments[Ne+2];te.children=Se}return{$$typeof:i,type:W.type,key:ye,ref:Me,props:te,_owner:xe}},St.createContext=function(W){return W={$$typeof:u,_currentValue:W,_currentValue2:W,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},W.Provider={$$typeof:l,_context:W},W.Consumer=W},St.createElement=V,St.createFactory=function(W){var oe=V.bind(null,W);return oe.type=W,oe},St.createRef=function(){return{current:null}},St.forwardRef=function(W){return{$$typeof:f,render:W}},St.isValidElement=T,St.lazy=function(W){return{$$typeof:m,_payload:{_status:-1,_result:W},_init:ne}},St.memo=function(W,oe){return{$$typeof:h,type:W,compare:oe===void 0?null:oe}},St.startTransition=function(W){var oe=X.transition;X.transition={};try{W()}finally{X.transition=oe}},St.unstable_act=ce,St.useCallback=function(W,oe){return he.current.useCallback(W,oe)},St.useContext=function(W){return he.current.useContext(W)},St.useDebugValue=function(){},St.useDeferredValue=function(W){return he.current.useDeferredValue(W)},St.useEffect=function(W,oe){return he.current.useEffect(W,oe)},St.useId=function(){return he.current.useId()},St.useImperativeHandle=function(W,oe,Ce){return he.current.useImperativeHandle(W,oe,Ce)},St.useInsertionEffect=function(W,oe){return he.current.useInsertionEffect(W,oe)},St.useLayoutEffect=function(W,oe){return he.current.useLayoutEffect(W,oe)},St.useMemo=function(W,oe){return he.current.useMemo(W,oe)},St.useReducer=function(W,oe,Ce){return he.current.useReducer(W,oe,Ce)},St.useRef=function(W){return he.current.useRef(W)},St.useState=function(W){return he.current.useState(W)},St.useSyncExternalStore=function(W,oe,Ce){return he.current.useSyncExternalStore(W,oe,Ce)},St.useTransition=function(){return he.current.useTransition()},St.version="18.3.1",St}var yg;function cr(){return yg||(yg=1,Vf.exports=Dx()),Vf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xg;function Nx(){if(xg)return aa;xg=1;var i=cr(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,d,h){var m,g={},y=null,x=null;h!==void 0&&(y=""+h),d.key!==void 0&&(y=""+d.key),d.ref!==void 0&&(x=d.ref);for(m in d)r.call(d,m)&&!l.hasOwnProperty(m)&&(g[m]=d[m]);if(f&&f.defaultProps)for(m in d=f.defaultProps,d)g[m]===void 0&&(g[m]=d[m]);return{$$typeof:e,type:f,key:y,ref:x,props:g,_owner:o.current}}return aa.Fragment=t,aa.jsx=u,aa.jsxs=u,aa}var Sg;function Ux(){return Sg||(Sg=1,Hf.exports=Nx()),Hf.exports}var Z=Ux(),nt=cr();const Zt=Ph(nt),Ix=Lx({__proto__:null,default:Zt},[nt]);var Bl={},Gf={exports:{}},Vn={},Wf={exports:{}},jf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eg;function Ox(){return Eg||(Eg=1,function(i){function e(X,pe){var ce=X.length;X.push(pe);e:for(;0<ce;){var W=ce-1>>>1,oe=X[W];if(0<o(oe,pe))X[W]=pe,X[ce]=oe,ce=W;else break e}}function t(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var pe=X[0],ce=X.pop();if(ce!==pe){X[0]=ce;e:for(var W=0,oe=X.length,Ce=oe>>>1;W<Ce;){var te=2*(W+1)-1,ye=X[te],Me=te+1,xe=X[Me];if(0>o(ye,ce))Me<oe&&0>o(xe,ye)?(X[W]=xe,X[Me]=ce,W=Me):(X[W]=ye,X[te]=ce,W=te);else if(Me<oe&&0>o(xe,ce))X[W]=xe,X[Me]=ce,W=Me;else break e}}return pe}function o(X,pe){var ce=X.sortIndex-pe.sortIndex;return ce!==0?ce:X.id-pe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();i.unstable_now=function(){return u.now()-f}}var d=[],h=[],m=1,g=null,y=3,x=!1,E=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(X){for(var pe=t(h);pe!==null;){if(pe.callback===null)r(h);else if(pe.startTime<=X)r(h),pe.sortIndex=pe.expirationTime,e(d,pe);else break;pe=t(h)}}function b(X){if(M=!1,C(X),!E)if(t(d)!==null)E=!0,ne(F);else{var pe=t(h);pe!==null&&he(b,pe.startTime-X)}}function F(X,pe){E=!1,M&&(M=!1,_(V),V=-1),x=!0;var ce=y;try{for(C(pe),g=t(d);g!==null&&(!(g.expirationTime>pe)||X&&!U());){var W=g.callback;if(typeof W=="function"){g.callback=null,y=g.priorityLevel;var oe=W(g.expirationTime<=pe);pe=i.unstable_now(),typeof oe=="function"?g.callback=oe:g===t(d)&&r(d),C(pe)}else r(d);g=t(d)}if(g!==null)var Ce=!0;else{var te=t(h);te!==null&&he(b,te.startTime-pe),Ce=!1}return Ce}finally{g=null,y=ce,x=!1}}var I=!1,O=null,V=-1,L=5,T=-1;function U(){return!(i.unstable_now()-T<L)}function D(){if(O!==null){var X=i.unstable_now();T=X;var pe=!0;try{pe=O(!0,X)}finally{pe?B():(I=!1,O=null)}}else I=!1}var B;if(typeof R=="function")B=function(){R(D)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,le=z.port2;z.port1.onmessage=D,B=function(){le.postMessage(null)}}else B=function(){v(D,0)};function ne(X){O=X,I||(I=!0,B())}function he(X,pe){V=v(function(){X(i.unstable_now())},pe)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(X){X.callback=null},i.unstable_continueExecution=function(){E||x||(E=!0,ne(F))},i.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<X?Math.floor(1e3/X):5},i.unstable_getCurrentPriorityLevel=function(){return y},i.unstable_getFirstCallbackNode=function(){return t(d)},i.unstable_next=function(X){switch(y){case 1:case 2:case 3:var pe=3;break;default:pe=y}var ce=y;y=pe;try{return X()}finally{y=ce}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(X,pe){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var ce=y;y=X;try{return pe()}finally{y=ce}},i.unstable_scheduleCallback=function(X,pe,ce){var W=i.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?W+ce:W):ce=W,X){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=ce+oe,X={id:m++,callback:pe,priorityLevel:X,startTime:ce,expirationTime:oe,sortIndex:-1},ce>W?(X.sortIndex=ce,e(h,X),t(d)===null&&X===t(h)&&(M?(_(V),V=-1):M=!0,he(b,ce-W))):(X.sortIndex=oe,e(d,X),E||x||(E=!0,ne(F))),X},i.unstable_shouldYield=U,i.unstable_wrapCallback=function(X){var pe=y;return function(){var ce=y;y=pe;try{return X.apply(this,arguments)}finally{y=ce}}}}(jf)),jf}var Mg;function Fx(){return Mg||(Mg=1,Wf.exports=Ox()),Wf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wg;function kx(){if(wg)return Vn;wg=1;var i=cr(),e=Fx();function t(n){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,s){u(n,s),u(n+"Capture",s)}function u(n,s){for(o[n]=s,n=0;n<s.length;n++)r.add(s[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function y(n){return d.call(g,n)?!0:d.call(m,n)?!1:h.test(n)?g[n]=!0:(m[n]=!0,!1)}function x(n,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,s,a,c){if(s===null||typeof s>"u"||x(n,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function M(n,s,a,c,p,S,A){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=n,this.type=s,this.sanitizeURL=S,this.removeEmptyString=A}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){v[n]=new M(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var s=n[0];v[s]=new M(s,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){v[n]=new M(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){v[n]=new M(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){v[n]=new M(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){v[n]=new M(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){v[n]=new M(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){v[n]=new M(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){v[n]=new M(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function R(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var s=n.replace(_,R);v[s]=new M(s,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var s=n.replace(_,R);v[s]=new M(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var s=n.replace(_,R);v[s]=new M(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){v[n]=new M(n,1,!1,n.toLowerCase(),null,!1,!1)}),v.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){v[n]=new M(n,1,!1,n.toLowerCase(),null,!0,!0)});function C(n,s,a,c){var p=v.hasOwnProperty(s)?v[s]:null;(p!==null?p.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(E(s,a,p,c)&&(a=null),c||p===null?y(s)&&(a===null?n.removeAttribute(s):n.setAttribute(s,""+a)):p.mustUseProperty?n[p.propertyName]=a===null?p.type===3?!1:"":a:(s=p.attributeName,c=p.attributeNamespace,a===null?n.removeAttribute(s):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,c?n.setAttributeNS(c,s,a):n.setAttribute(s,a))))}var b=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,F=Symbol.for("react.element"),I=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),U=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),he=Symbol.for("react.offscreen"),X=Symbol.iterator;function pe(n){return n===null||typeof n!="object"?null:(n=X&&n[X]||n["@@iterator"],typeof n=="function"?n:null)}var ce=Object.assign,W;function oe(n){if(W===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);W=s&&s[1]||""}return`
`+W+n}var Ce=!1;function te(n,s){if(!n||Ce)return"";Ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(fe){var c=fe}Reflect.construct(n,[],s)}else{try{s.call()}catch(fe){c=fe}n.call(s.prototype)}else{try{throw Error()}catch(fe){c=fe}n()}}catch(fe){if(fe&&c&&typeof fe.stack=="string"){for(var p=fe.stack.split(`
`),S=c.stack.split(`
`),A=p.length-1,H=S.length-1;1<=A&&0<=H&&p[A]!==S[H];)H--;for(;1<=A&&0<=H;A--,H--)if(p[A]!==S[H]){if(A!==1||H!==1)do if(A--,H--,0>H||p[A]!==S[H]){var q=`
`+p[A].replace(" at new "," at ");return n.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",n.displayName)),q}while(1<=A&&0<=H);break}}}finally{Ce=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?oe(n):""}function ye(n){switch(n.tag){case 5:return oe(n.type);case 16:return oe("Lazy");case 13:return oe("Suspense");case 19:return oe("SuspenseList");case 0:case 2:case 15:return n=te(n.type,!1),n;case 11:return n=te(n.type.render,!1),n;case 1:return n=te(n.type,!0),n;default:return""}}function Me(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case I:return"Portal";case L:return"Profiler";case V:return"StrictMode";case B:return"Suspense";case z:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case U:return(n.displayName||"Context")+".Consumer";case T:return(n._context.displayName||"Context")+".Provider";case D:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case le:return s=n.displayName||null,s!==null?s:Me(n.type)||"Memo";case ne:s=n._payload,n=n._init;try{return Me(n(s))}catch{}}return null}function xe(n){var s=n.type;switch(n.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=s.render,n=n.displayName||n.name||"",s.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(s);case 8:return s===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Se(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Le(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Ne(n){var s=Le(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),c=""+n[s];if(!n.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,S=a.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return p.call(this)},set:function(A){c=""+A,S.call(this,A)}}),Object.defineProperty(n,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(A){c=""+A},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function ct(n){n._valueTracker||(n._valueTracker=Ne(n))}function _t(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return n&&(c=Le(n)?n.checked?"true":"false":n.value),n=c,n!==a?(s.setValue(n),!0):!1}function je(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function G(n,s){var a=s.checked;return ce({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Lt(n,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=Se(s.value!=null?s.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function lt(n,s){s=s.checked,s!=null&&C(n,"checked",s,!1)}function pt(n,s){lt(n,s);var a=Se(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}s.hasOwnProperty("value")?J(n,s.type,a):s.hasOwnProperty("defaultValue")&&J(n,s.type,Se(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(n.defaultChecked=!!s.defaultChecked)}function k(n,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+n._wrapperState.initialValue,a||s===n.value||(n.value=s),n.defaultValue=s}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function J(n,s,a){(s!=="number"||je(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var K=Array.isArray;function P(n,s,a,c){if(n=n.options,s){s={};for(var p=0;p<a.length;p++)s["$"+a[p]]=!0;for(a=0;a<n.length;a++)p=s.hasOwnProperty("$"+n[a].value),n[a].selected!==p&&(n[a].selected=p),p&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Se(a),s=null,p=0;p<n.length;p++){if(n[p].value===a){n[p].selected=!0,c&&(n[p].defaultSelected=!0);return}s!==null||n[p].disabled||(s=n[p])}s!==null&&(s.selected=!0)}}function w(n,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ce({},s,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function j(n,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(K(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}n._wrapperState={initialValue:Se(a)}}function se(n,s){var a=Se(s.value),c=Se(s.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),s.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function me(n){var s=n.textContent;s===n._wrapperState.initialValue&&s!==""&&s!==null&&(n.value=s)}function ge(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ue(n,s){return n==null||n==="http://www.w3.org/1999/xhtml"?ge(s):n==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var De,Ve=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,p){MSApp.execUnsafeLocalFunction(function(){return n(s,a,c,p)})}:n}(function(n,s){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=s;else{for(De=De||document.createElement("div"),De.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=De.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;s.firstChild;)n.appendChild(s.firstChild)}});function ht(n,s){if(s){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=s;return}}n.textContent=s}var Ae={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},We=["Webkit","ms","Moz","O"];Object.keys(Ae).forEach(function(n){We.forEach(function(s){s=s+n.charAt(0).toUpperCase()+n.substring(1),Ae[s]=Ae[n]})});function tt(n,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Ae.hasOwnProperty(n)&&Ae[n]?(""+s).trim():s+"px"}function st(n,s){n=n.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,p=tt(a,s[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,p):n[a]=p}}var Ge=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xt(n,s){if(s){if(Ge[n]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function ft(n,s){if(n.indexOf("-")===-1)return typeof s.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dt=null;function $(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ie=null,ve=null,Ee=null;function Be(n){if(n=Xo(n)){if(typeof Ie!="function")throw Error(t(280));var s=n.stateNode;s&&(s=Ja(s),Ie(n.stateNode,n.type,s))}}function ke(n){ve?Ee?Ee.push(n):Ee=[n]:ve=n}function dt(){if(ve){var n=ve,s=Ee;if(Ee=ve=null,Be(n),s)for(n=0;n<s.length;n++)Be(s[n])}}function kt(n,s){return n(s)}function on(){}var At=!1;function On(n,s,a){if(At)return n(s,a);At=!0;try{return kt(n,s,a)}finally{At=!1,(ve!==null||Ee!==null)&&(on(),dt())}}function Pn(n,s){var a=n.stateNode;if(a===null)return null;var c=Ja(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Rs=!1;if(f)try{var dr={};Object.defineProperty(dr,"passive",{get:function(){Rs=!0}}),window.addEventListener("test",dr,dr),window.removeEventListener("test",dr,dr)}catch{Rs=!1}function Bi(n,s,a,c,p,S,A,H,q){var fe=Array.prototype.slice.call(arguments,3);try{s.apply(a,fe)}catch(Te){this.onError(Te)}}var zi=!1,$r=null,Kr=!1,hr=null,La={onError:function(n){zi=!0,$r=n}};function Cs(n,s,a,c,p,S,A,H,q){zi=!1,$r=null,Bi.apply(La,arguments)}function Da(n,s,a,c,p,S,A,H,q){if(Cs.apply(this,arguments),zi){if(zi){var fe=$r;zi=!1,$r=null}else throw Error(t(198));Kr||(Kr=!0,hr=fe)}}function Ai(n){var s=n,a=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(a=s.return),n=s.return;while(n)}return s.tag===3?a:null}function Na(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function Ua(n){if(Ai(n)!==n)throw Error(t(188))}function uc(n){var s=n.alternate;if(!s){if(s=Ai(n),s===null)throw Error(t(188));return s!==n?null:n}for(var a=n,c=s;;){var p=a.return;if(p===null)break;var S=p.alternate;if(S===null){if(c=p.return,c!==null){a=c;continue}break}if(p.child===S.child){for(S=p.child;S;){if(S===a)return Ua(p),n;if(S===c)return Ua(p),s;S=S.sibling}throw Error(t(188))}if(a.return!==c.return)a=p,c=S;else{for(var A=!1,H=p.child;H;){if(H===a){A=!0,a=p,c=S;break}if(H===c){A=!0,c=p,a=S;break}H=H.sibling}if(!A){for(H=S.child;H;){if(H===a){A=!0,a=S,c=p;break}if(H===c){A=!0,c=S,a=p;break}H=H.sibling}if(!A)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:s}function Ia(n){return n=uc(n),n!==null?Oa(n):null}function Oa(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var s=Oa(n);if(s!==null)return s;n=n.sibling}return null}var Fa=e.unstable_scheduleCallback,N=e.unstable_cancelCallback,Q=e.unstable_shouldYield,ue=e.unstable_requestPaint,re=e.unstable_now,ee=e.unstable_getCurrentPriorityLevel,Re=e.unstable_ImmediatePriority,Oe=e.unstable_UserBlockingPriority,ze=e.unstable_NormalPriority,qe=e.unstable_LowPriority,at=e.unstable_IdlePriority,ot=null,Ke=null;function Mt(n){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(ot,n,void 0,(n.current.flags&128)===128)}catch{}}var mt=Math.clz32?Math.clz32:Tt,qt=Math.log,Vt=Math.LN2;function Tt(n){return n>>>=0,n===0?32:31-(qt(n)/Vt|0)|0}var et=64,Yt=4194304;function Et(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Sn(n,s){var a=n.pendingLanes;if(a===0)return 0;var c=0,p=n.suspendedLanes,S=n.pingedLanes,A=a&268435455;if(A!==0){var H=A&~p;H!==0?c=Et(H):(S&=A,S!==0&&(c=Et(S)))}else A=a&~p,A!==0?c=Et(A):S!==0&&(c=Et(S));if(c===0)return 0;if(s!==0&&s!==c&&(s&p)===0&&(p=c&-c,S=s&-s,p>=S||p===16&&(S&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=n.entangledLanes,s!==0)for(n=n.entanglements,s&=c;0<s;)a=31-mt(s),p=1<<a,c|=n[a],s&=~p;return c}function pr(n,s){switch(n){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ln(n,s){for(var a=n.suspendedLanes,c=n.pingedLanes,p=n.expirationTimes,S=n.pendingLanes;0<S;){var A=31-mt(S),H=1<<A,q=p[A];q===-1?((H&a)===0||(H&c)!==0)&&(p[A]=pr(H,s)):q<=s&&(n.expiredLanes|=H),S&=~H}}function Hi(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function It(){var n=et;return et<<=1,(et&4194240)===0&&(et=64),n}function En(n){for(var s=[],a=0;31>a;a++)s.push(n);return s}function dn(n,s,a){n.pendingLanes|=s,s!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,s=31-mt(s),n[s]=a}function _n(n,s){var a=n.pendingLanes&~s;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=s,n.mutableReadLanes&=s,n.entangledLanes&=s,s=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var p=31-mt(a),S=1<<p;s[p]=0,c[p]=-1,n[p]=-1,a&=~S}}function hn(n,s){var a=n.entangledLanes|=s;for(n=n.entanglements;a;){var c=31-mt(a),p=1<<c;p&s|n[c]&s&&(n[c]|=s),a&=~p}}var bt=0;function bi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Zh,cc,Qh,Jh,ep,fc=!1,ka=[],mr=null,gr=null,vr=null,Po=new Map,Lo=new Map,_r=[],Z0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tp(n,s){switch(n){case"focusin":case"focusout":mr=null;break;case"dragenter":case"dragleave":gr=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":Po.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(s.pointerId)}}function Do(n,s,a,c,p,S){return n===null||n.nativeEvent!==S?(n={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:S,targetContainers:[p]},s!==null&&(s=Xo(s),s!==null&&cc(s)),n):(n.eventSystemFlags|=c,s=n.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),n)}function Q0(n,s,a,c,p){switch(s){case"focusin":return mr=Do(mr,n,s,a,c,p),!0;case"dragenter":return gr=Do(gr,n,s,a,c,p),!0;case"mouseover":return vr=Do(vr,n,s,a,c,p),!0;case"pointerover":var S=p.pointerId;return Po.set(S,Do(Po.get(S)||null,n,s,a,c,p)),!0;case"gotpointercapture":return S=p.pointerId,Lo.set(S,Do(Lo.get(S)||null,n,s,a,c,p)),!0}return!1}function np(n){var s=Zr(n.target);if(s!==null){var a=Ai(s);if(a!==null){if(s=a.tag,s===13){if(s=Na(a),s!==null){n.blockedOn=s,ep(n.priority,function(){Qh(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ba(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var a=hc(n.domEventName,n.eventSystemFlags,s[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Dt=c,a.target.dispatchEvent(c),Dt=null}else return s=Xo(a),s!==null&&cc(s),n.blockedOn=a,!1;s.shift()}return!0}function ip(n,s,a){Ba(n)&&a.delete(s)}function J0(){fc=!1,mr!==null&&Ba(mr)&&(mr=null),gr!==null&&Ba(gr)&&(gr=null),vr!==null&&Ba(vr)&&(vr=null),Po.forEach(ip),Lo.forEach(ip)}function No(n,s){n.blockedOn===s&&(n.blockedOn=null,fc||(fc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,J0)))}function Uo(n){function s(p){return No(p,n)}if(0<ka.length){No(ka[0],n);for(var a=1;a<ka.length;a++){var c=ka[a];c.blockedOn===n&&(c.blockedOn=null)}}for(mr!==null&&No(mr,n),gr!==null&&No(gr,n),vr!==null&&No(vr,n),Po.forEach(s),Lo.forEach(s),a=0;a<_r.length;a++)c=_r[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<_r.length&&(a=_r[0],a.blockedOn===null);)np(a),a.blockedOn===null&&_r.shift()}var Ps=b.ReactCurrentBatchConfig,za=!0;function ey(n,s,a,c){var p=bt,S=Ps.transition;Ps.transition=null;try{bt=1,dc(n,s,a,c)}finally{bt=p,Ps.transition=S}}function ty(n,s,a,c){var p=bt,S=Ps.transition;Ps.transition=null;try{bt=4,dc(n,s,a,c)}finally{bt=p,Ps.transition=S}}function dc(n,s,a,c){if(za){var p=hc(n,s,a,c);if(p===null)Pc(n,s,c,Ha,a),tp(n,c);else if(Q0(p,n,s,a,c))c.stopPropagation();else if(tp(n,c),s&4&&-1<Z0.indexOf(n)){for(;p!==null;){var S=Xo(p);if(S!==null&&Zh(S),S=hc(n,s,a,c),S===null&&Pc(n,s,c,Ha,a),S===p)break;p=S}p!==null&&c.stopPropagation()}else Pc(n,s,c,null,a)}}var Ha=null;function hc(n,s,a,c){if(Ha=null,n=$(c),n=Zr(n),n!==null)if(s=Ai(n),s===null)n=null;else if(a=s.tag,a===13){if(n=Na(s),n!==null)return n;n=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null);return Ha=n,null}function rp(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ee()){case Re:return 1;case Oe:return 4;case ze:case qe:return 16;case at:return 536870912;default:return 16}default:return 16}}var yr=null,pc=null,Va=null;function sp(){if(Va)return Va;var n,s=pc,a=s.length,c,p="value"in yr?yr.value:yr.textContent,S=p.length;for(n=0;n<a&&s[n]===p[n];n++);var A=a-n;for(c=1;c<=A&&s[a-c]===p[S-c];c++);return Va=p.slice(n,1<c?1-c:void 0)}function Ga(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function Wa(){return!0}function op(){return!1}function $n(n){function s(a,c,p,S,A){this._reactName=a,this._targetInst=p,this.type=c,this.nativeEvent=S,this.target=A,this.currentTarget=null;for(var H in n)n.hasOwnProperty(H)&&(a=n[H],this[H]=a?a(S):S[H]);return this.isDefaultPrevented=(S.defaultPrevented!=null?S.defaultPrevented:S.returnValue===!1)?Wa:op,this.isPropagationStopped=op,this}return ce(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wa)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wa)},persist:function(){},isPersistent:Wa}),s}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mc=$n(Ls),Io=ce({},Ls,{view:0,detail:0}),ny=$n(Io),gc,vc,Oo,ja=ce({},Io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Oo&&(Oo&&n.type==="mousemove"?(gc=n.screenX-Oo.screenX,vc=n.screenY-Oo.screenY):vc=gc=0,Oo=n),gc)},movementY:function(n){return"movementY"in n?n.movementY:vc}}),ap=$n(ja),iy=ce({},ja,{dataTransfer:0}),ry=$n(iy),sy=ce({},Io,{relatedTarget:0}),_c=$n(sy),oy=ce({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),ay=$n(oy),ly=ce({},Ls,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),uy=$n(ly),cy=ce({},Ls,{data:0}),lp=$n(cy),fy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function py(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=hy[n])?!!s[n]:!1}function yc(){return py}var my=ce({},Io,{key:function(n){if(n.key){var s=fy[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=Ga(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?dy[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yc,charCode:function(n){return n.type==="keypress"?Ga(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ga(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),gy=$n(my),vy=ce({},ja,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),up=$n(vy),_y=ce({},Io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yc}),yy=$n(_y),xy=ce({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sy=$n(xy),Ey=ce({},ja,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),My=$n(Ey),wy=[9,13,27,32],xc=f&&"CompositionEvent"in window,Fo=null;f&&"documentMode"in document&&(Fo=document.documentMode);var Ty=f&&"TextEvent"in window&&!Fo,cp=f&&(!xc||Fo&&8<Fo&&11>=Fo),fp=" ",dp=!1;function hp(n,s){switch(n){case"keyup":return wy.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ds=!1;function Ay(n,s){switch(n){case"compositionend":return pp(s);case"keypress":return s.which!==32?null:(dp=!0,fp);case"textInput":return n=s.data,n===fp&&dp?null:n;default:return null}}function by(n,s){if(Ds)return n==="compositionend"||!xc&&hp(n,s)?(n=sp(),Va=pc=yr=null,Ds=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return cp&&s.locale!=="ko"?null:s.data;default:return null}}var Ry={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mp(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!Ry[n.type]:s==="textarea"}function gp(n,s,a,c){ke(c),s=Ka(s,"onChange"),0<s.length&&(a=new mc("onChange","change",null,a,c),n.push({event:a,listeners:s}))}var ko=null,Bo=null;function Cy(n){Up(n,0)}function Xa(n){var s=Fs(n);if(_t(s))return n}function Py(n,s){if(n==="change")return s}var vp=!1;if(f){var Sc;if(f){var Ec="oninput"in document;if(!Ec){var _p=document.createElement("div");_p.setAttribute("oninput","return;"),Ec=typeof _p.oninput=="function"}Sc=Ec}else Sc=!1;vp=Sc&&(!document.documentMode||9<document.documentMode)}function yp(){ko&&(ko.detachEvent("onpropertychange",xp),Bo=ko=null)}function xp(n){if(n.propertyName==="value"&&Xa(Bo)){var s=[];gp(s,Bo,n,$(n)),On(Cy,s)}}function Ly(n,s,a){n==="focusin"?(yp(),ko=s,Bo=a,ko.attachEvent("onpropertychange",xp)):n==="focusout"&&yp()}function Dy(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Xa(Bo)}function Ny(n,s){if(n==="click")return Xa(s)}function Uy(n,s){if(n==="input"||n==="change")return Xa(s)}function Iy(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var di=typeof Object.is=="function"?Object.is:Iy;function zo(n,s){if(di(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var a=Object.keys(n),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var p=a[c];if(!d.call(s,p)||!di(n[p],s[p]))return!1}return!0}function Sp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ep(n,s){var a=Sp(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=s&&c>=s)return{node:a,offset:s-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Sp(a)}}function Mp(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?Mp(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function wp(){for(var n=window,s=je();s instanceof n.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)n=s.contentWindow;else break;s=je(n.document)}return s}function Mc(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}function Oy(n){var s=wp(),a=n.focusedElem,c=n.selectionRange;if(s!==a&&a&&a.ownerDocument&&Mp(a.ownerDocument.documentElement,a)){if(c!==null&&Mc(a)){if(s=c.start,n=c.end,n===void 0&&(n=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(n,a.value.length);else if(n=(s=a.ownerDocument||document)&&s.defaultView||window,n.getSelection){n=n.getSelection();var p=a.textContent.length,S=Math.min(c.start,p);c=c.end===void 0?S:Math.min(c.end,p),!n.extend&&S>c&&(p=c,c=S,S=p),p=Ep(a,S);var A=Ep(a,c);p&&A&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==A.node||n.focusOffset!==A.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),n.removeAllRanges(),S>c?(n.addRange(s),n.extend(A.node,A.offset)):(s.setEnd(A.node,A.offset),n.addRange(s)))}}for(s=[],n=a;n=n.parentNode;)n.nodeType===1&&s.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)n=s[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Fy=f&&"documentMode"in document&&11>=document.documentMode,Ns=null,wc=null,Ho=null,Tc=!1;function Tp(n,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Tc||Ns==null||Ns!==je(c)||(c=Ns,"selectionStart"in c&&Mc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ho&&zo(Ho,c)||(Ho=c,c=Ka(wc,"onSelect"),0<c.length&&(s=new mc("onSelect","select",null,s,a),n.push({event:s,listeners:c}),s.target=Ns)))}function qa(n,s){var a={};return a[n.toLowerCase()]=s.toLowerCase(),a["Webkit"+n]="webkit"+s,a["Moz"+n]="moz"+s,a}var Us={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionend:qa("Transition","TransitionEnd")},Ac={},Ap={};f&&(Ap=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function Ya(n){if(Ac[n])return Ac[n];if(!Us[n])return n;var s=Us[n],a;for(a in s)if(s.hasOwnProperty(a)&&a in Ap)return Ac[n]=s[a];return n}var bp=Ya("animationend"),Rp=Ya("animationiteration"),Cp=Ya("animationstart"),Pp=Ya("transitionend"),Lp=new Map,Dp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(n,s){Lp.set(n,s),l(s,[n])}for(var bc=0;bc<Dp.length;bc++){var Rc=Dp[bc],ky=Rc.toLowerCase(),By=Rc[0].toUpperCase()+Rc.slice(1);xr(ky,"on"+By)}xr(bp,"onAnimationEnd"),xr(Rp,"onAnimationIteration"),xr(Cp,"onAnimationStart"),xr("dblclick","onDoubleClick"),xr("focusin","onFocus"),xr("focusout","onBlur"),xr(Pp,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vo));function Np(n,s,a){var c=n.type||"unknown-event";n.currentTarget=a,Da(c,s,void 0,n),n.currentTarget=null}function Up(n,s){s=(s&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],p=c.event;c=c.listeners;e:{var S=void 0;if(s)for(var A=c.length-1;0<=A;A--){var H=c[A],q=H.instance,fe=H.currentTarget;if(H=H.listener,q!==S&&p.isPropagationStopped())break e;Np(p,H,fe),S=q}else for(A=0;A<c.length;A++){if(H=c[A],q=H.instance,fe=H.currentTarget,H=H.listener,q!==S&&p.isPropagationStopped())break e;Np(p,H,fe),S=q}}}if(Kr)throw n=hr,Kr=!1,hr=null,n}function Bt(n,s){var a=s[Oc];a===void 0&&(a=s[Oc]=new Set);var c=n+"__bubble";a.has(c)||(Ip(s,n,2,!1),a.add(c))}function Cc(n,s,a){var c=0;s&&(c|=4),Ip(a,n,c,s)}var $a="_reactListening"+Math.random().toString(36).slice(2);function Go(n){if(!n[$a]){n[$a]=!0,r.forEach(function(a){a!=="selectionchange"&&(zy.has(a)||Cc(a,!1,n),Cc(a,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[$a]||(s[$a]=!0,Cc("selectionchange",!1,s))}}function Ip(n,s,a,c){switch(rp(s)){case 1:var p=ey;break;case 4:p=ty;break;default:p=dc}a=p.bind(null,s,a,n),p=void 0,!Rs||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),c?p!==void 0?n.addEventListener(s,a,{capture:!0,passive:p}):n.addEventListener(s,a,!0):p!==void 0?n.addEventListener(s,a,{passive:p}):n.addEventListener(s,a,!1)}function Pc(n,s,a,c,p){var S=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var A=c.tag;if(A===3||A===4){var H=c.stateNode.containerInfo;if(H===p||H.nodeType===8&&H.parentNode===p)break;if(A===4)for(A=c.return;A!==null;){var q=A.tag;if((q===3||q===4)&&(q=A.stateNode.containerInfo,q===p||q.nodeType===8&&q.parentNode===p))return;A=A.return}for(;H!==null;){if(A=Zr(H),A===null)return;if(q=A.tag,q===5||q===6){c=S=A;continue e}H=H.parentNode}}c=c.return}On(function(){var fe=S,Te=$(a),be=[];e:{var we=Lp.get(n);if(we!==void 0){var He=mc,Ye=n;switch(n){case"keypress":if(Ga(a)===0)break e;case"keydown":case"keyup":He=gy;break;case"focusin":Ye="focus",He=_c;break;case"focusout":Ye="blur",He=_c;break;case"beforeblur":case"afterblur":He=_c;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":He=ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":He=ry;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":He=yy;break;case bp:case Rp:case Cp:He=ay;break;case Pp:He=Sy;break;case"scroll":He=ny;break;case"wheel":He=My;break;case"copy":case"cut":case"paste":He=uy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":He=up}var Ze=(s&4)!==0,Kt=!Ze&&n==="scroll",ie=Ze?we!==null?we+"Capture":null:we;Ze=[];for(var Y=fe,ae;Y!==null;){ae=Y;var Pe=ae.stateNode;if(ae.tag===5&&Pe!==null&&(ae=Pe,ie!==null&&(Pe=Pn(Y,ie),Pe!=null&&Ze.push(Wo(Y,Pe,ae)))),Kt)break;Y=Y.return}0<Ze.length&&(we=new He(we,Ye,null,a,Te),be.push({event:we,listeners:Ze}))}}if((s&7)===0){e:{if(we=n==="mouseover"||n==="pointerover",He=n==="mouseout"||n==="pointerout",we&&a!==Dt&&(Ye=a.relatedTarget||a.fromElement)&&(Zr(Ye)||Ye[Vi]))break e;if((He||we)&&(we=Te.window===Te?Te:(we=Te.ownerDocument)?we.defaultView||we.parentWindow:window,He?(Ye=a.relatedTarget||a.toElement,He=fe,Ye=Ye?Zr(Ye):null,Ye!==null&&(Kt=Ai(Ye),Ye!==Kt||Ye.tag!==5&&Ye.tag!==6)&&(Ye=null)):(He=null,Ye=fe),He!==Ye)){if(Ze=ap,Pe="onMouseLeave",ie="onMouseEnter",Y="mouse",(n==="pointerout"||n==="pointerover")&&(Ze=up,Pe="onPointerLeave",ie="onPointerEnter",Y="pointer"),Kt=He==null?we:Fs(He),ae=Ye==null?we:Fs(Ye),we=new Ze(Pe,Y+"leave",He,a,Te),we.target=Kt,we.relatedTarget=ae,Pe=null,Zr(Te)===fe&&(Ze=new Ze(ie,Y+"enter",Ye,a,Te),Ze.target=ae,Ze.relatedTarget=Kt,Pe=Ze),Kt=Pe,He&&Ye)t:{for(Ze=He,ie=Ye,Y=0,ae=Ze;ae;ae=Is(ae))Y++;for(ae=0,Pe=ie;Pe;Pe=Is(Pe))ae++;for(;0<Y-ae;)Ze=Is(Ze),Y--;for(;0<ae-Y;)ie=Is(ie),ae--;for(;Y--;){if(Ze===ie||ie!==null&&Ze===ie.alternate)break t;Ze=Is(Ze),ie=Is(ie)}Ze=null}else Ze=null;He!==null&&Op(be,we,He,Ze,!1),Ye!==null&&Kt!==null&&Op(be,Kt,Ye,Ze,!0)}}e:{if(we=fe?Fs(fe):window,He=we.nodeName&&we.nodeName.toLowerCase(),He==="select"||He==="input"&&we.type==="file")var Qe=Py;else if(mp(we))if(vp)Qe=Uy;else{Qe=Dy;var it=Ly}else(He=we.nodeName)&&He.toLowerCase()==="input"&&(we.type==="checkbox"||we.type==="radio")&&(Qe=Ny);if(Qe&&(Qe=Qe(n,fe))){gp(be,Qe,a,Te);break e}it&&it(n,we,fe),n==="focusout"&&(it=we._wrapperState)&&it.controlled&&we.type==="number"&&J(we,"number",we.value)}switch(it=fe?Fs(fe):window,n){case"focusin":(mp(it)||it.contentEditable==="true")&&(Ns=it,wc=fe,Ho=null);break;case"focusout":Ho=wc=Ns=null;break;case"mousedown":Tc=!0;break;case"contextmenu":case"mouseup":case"dragend":Tc=!1,Tp(be,a,Te);break;case"selectionchange":if(Fy)break;case"keydown":case"keyup":Tp(be,a,Te)}var rt;if(xc)e:{switch(n){case"compositionstart":var ut="onCompositionStart";break e;case"compositionend":ut="onCompositionEnd";break e;case"compositionupdate":ut="onCompositionUpdate";break e}ut=void 0}else Ds?hp(n,a)&&(ut="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ut="onCompositionStart");ut&&(cp&&a.locale!=="ko"&&(Ds||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&Ds&&(rt=sp()):(yr=Te,pc="value"in yr?yr.value:yr.textContent,Ds=!0)),it=Ka(fe,ut),0<it.length&&(ut=new lp(ut,n,null,a,Te),be.push({event:ut,listeners:it}),rt?ut.data=rt:(rt=pp(a),rt!==null&&(ut.data=rt)))),(rt=Ty?Ay(n,a):by(n,a))&&(fe=Ka(fe,"onBeforeInput"),0<fe.length&&(Te=new lp("onBeforeInput","beforeinput",null,a,Te),be.push({event:Te,listeners:fe}),Te.data=rt))}Up(be,s)})}function Wo(n,s,a){return{instance:n,listener:s,currentTarget:a}}function Ka(n,s){for(var a=s+"Capture",c=[];n!==null;){var p=n,S=p.stateNode;p.tag===5&&S!==null&&(p=S,S=Pn(n,a),S!=null&&c.unshift(Wo(n,S,p)),S=Pn(n,s),S!=null&&c.push(Wo(n,S,p))),n=n.return}return c}function Is(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Op(n,s,a,c,p){for(var S=s._reactName,A=[];a!==null&&a!==c;){var H=a,q=H.alternate,fe=H.stateNode;if(q!==null&&q===c)break;H.tag===5&&fe!==null&&(H=fe,p?(q=Pn(a,S),q!=null&&A.unshift(Wo(a,q,H))):p||(q=Pn(a,S),q!=null&&A.push(Wo(a,q,H)))),a=a.return}A.length!==0&&n.push({event:s,listeners:A})}var Hy=/\r\n?/g,Vy=/\u0000|\uFFFD/g;function Fp(n){return(typeof n=="string"?n:""+n).replace(Hy,`
`).replace(Vy,"")}function Za(n,s,a){if(s=Fp(s),Fp(n)!==s&&a)throw Error(t(425))}function Qa(){}var Lc=null,Dc=null;function Nc(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Uc=typeof setTimeout=="function"?setTimeout:void 0,Gy=typeof clearTimeout=="function"?clearTimeout:void 0,kp=typeof Promise=="function"?Promise:void 0,Wy=typeof queueMicrotask=="function"?queueMicrotask:typeof kp<"u"?function(n){return kp.resolve(null).then(n).catch(jy)}:Uc;function jy(n){setTimeout(function(){throw n})}function Ic(n,s){var a=s,c=0;do{var p=a.nextSibling;if(n.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(c===0){n.removeChild(p),Uo(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=p}while(a);Uo(s)}function Sr(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return n}function Bp(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return n;s--}else a==="/$"&&s++}n=n.previousSibling}return null}var Os=Math.random().toString(36).slice(2),Ri="__reactFiber$"+Os,jo="__reactProps$"+Os,Vi="__reactContainer$"+Os,Oc="__reactEvents$"+Os,Xy="__reactListeners$"+Os,qy="__reactHandles$"+Os;function Zr(n){var s=n[Ri];if(s)return s;for(var a=n.parentNode;a;){if(s=a[Vi]||a[Ri]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(n=Bp(n);n!==null;){if(a=n[Ri])return a;n=Bp(n)}return s}n=a,a=n.parentNode}return null}function Xo(n){return n=n[Ri]||n[Vi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Fs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ja(n){return n[jo]||null}var Fc=[],ks=-1;function Er(n){return{current:n}}function zt(n){0>ks||(n.current=Fc[ks],Fc[ks]=null,ks--)}function Ft(n,s){ks++,Fc[ks]=n.current,n.current=s}var Mr={},Mn=Er(Mr),Fn=Er(!1),Qr=Mr;function Bs(n,s){var a=n.type.contextTypes;if(!a)return Mr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var p={},S;for(S in a)p[S]=s[S];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=s,n.__reactInternalMemoizedMaskedChildContext=p),p}function kn(n){return n=n.childContextTypes,n!=null}function el(){zt(Fn),zt(Mn)}function zp(n,s,a){if(Mn.current!==Mr)throw Error(t(168));Ft(Mn,s),Ft(Fn,a)}function Hp(n,s,a){var c=n.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var p in c)if(!(p in s))throw Error(t(108,xe(n)||"Unknown",p));return ce({},a,c)}function tl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Mr,Qr=Mn.current,Ft(Mn,n),Ft(Fn,Fn.current),!0}function Vp(n,s,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Hp(n,s,Qr),c.__reactInternalMemoizedMergedChildContext=n,zt(Fn),zt(Mn),Ft(Mn,n)):zt(Fn),Ft(Fn,a)}var Gi=null,nl=!1,kc=!1;function Gp(n){Gi===null?Gi=[n]:Gi.push(n)}function Yy(n){nl=!0,Gp(n)}function wr(){if(!kc&&Gi!==null){kc=!0;var n=0,s=bt;try{var a=Gi;for(bt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Gi=null,nl=!1}catch(p){throw Gi!==null&&(Gi=Gi.slice(n+1)),Fa(Re,wr),p}finally{bt=s,kc=!1}}return null}var zs=[],Hs=0,il=null,rl=0,ni=[],ii=0,Jr=null,Wi=1,ji="";function es(n,s){zs[Hs++]=rl,zs[Hs++]=il,il=n,rl=s}function Wp(n,s,a){ni[ii++]=Wi,ni[ii++]=ji,ni[ii++]=Jr,Jr=n;var c=Wi;n=ji;var p=32-mt(c)-1;c&=~(1<<p),a+=1;var S=32-mt(s)+p;if(30<S){var A=p-p%5;S=(c&(1<<A)-1).toString(32),c>>=A,p-=A,Wi=1<<32-mt(s)+p|a<<p|c,ji=S+n}else Wi=1<<S|a<<p|c,ji=n}function Bc(n){n.return!==null&&(es(n,1),Wp(n,1,0))}function zc(n){for(;n===il;)il=zs[--Hs],zs[Hs]=null,rl=zs[--Hs],zs[Hs]=null;for(;n===Jr;)Jr=ni[--ii],ni[ii]=null,ji=ni[--ii],ni[ii]=null,Wi=ni[--ii],ni[ii]=null}var Kn=null,Zn=null,Gt=!1,hi=null;function jp(n,s){var a=ai(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=n,s=n.deletions,s===null?(n.deletions=[a],n.flags|=16):s.push(a)}function Xp(n,s){switch(n.tag){case 5:var a=n.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(n.stateNode=s,Kn=n,Zn=Sr(s.firstChild),!0):!1;case 6:return s=n.pendingProps===""||s.nodeType!==3?null:s,s!==null?(n.stateNode=s,Kn=n,Zn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Jr!==null?{id:Wi,overflow:ji}:null,n.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=ai(18,null,null,0),a.stateNode=s,a.return=n,n.child=a,Kn=n,Zn=null,!0):!1;default:return!1}}function Hc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Vc(n){if(Gt){var s=Zn;if(s){var a=s;if(!Xp(n,s)){if(Hc(n))throw Error(t(418));s=Sr(a.nextSibling);var c=Kn;s&&Xp(n,s)?jp(c,a):(n.flags=n.flags&-4097|2,Gt=!1,Kn=n)}}else{if(Hc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Gt=!1,Kn=n}}}function qp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Kn=n}function sl(n){if(n!==Kn)return!1;if(!Gt)return qp(n),Gt=!0,!1;var s;if((s=n.tag!==3)&&!(s=n.tag!==5)&&(s=n.type,s=s!=="head"&&s!=="body"&&!Nc(n.type,n.memoizedProps)),s&&(s=Zn)){if(Hc(n))throw Yp(),Error(t(418));for(;s;)jp(n,s),s=Sr(s.nextSibling)}if(qp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(s===0){Zn=Sr(n.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}n=n.nextSibling}Zn=null}}else Zn=Kn?Sr(n.stateNode.nextSibling):null;return!0}function Yp(){for(var n=Zn;n;)n=Sr(n.nextSibling)}function Vs(){Zn=Kn=null,Gt=!1}function Gc(n){hi===null?hi=[n]:hi.push(n)}var $y=b.ReactCurrentBatchConfig;function qo(n,s,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var p=c,S=""+n;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===S?s.ref:(s=function(A){var H=p.refs;A===null?delete H[S]:H[S]=A},s._stringRef=S,s)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function ol(n,s){throw n=Object.prototype.toString.call(s),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n))}function $p(n){var s=n._init;return s(n._payload)}function Kp(n){function s(ie,Y){if(n){var ae=ie.deletions;ae===null?(ie.deletions=[Y],ie.flags|=16):ae.push(Y)}}function a(ie,Y){if(!n)return null;for(;Y!==null;)s(ie,Y),Y=Y.sibling;return null}function c(ie,Y){for(ie=new Map;Y!==null;)Y.key!==null?ie.set(Y.key,Y):ie.set(Y.index,Y),Y=Y.sibling;return ie}function p(ie,Y){return ie=Dr(ie,Y),ie.index=0,ie.sibling=null,ie}function S(ie,Y,ae){return ie.index=ae,n?(ae=ie.alternate,ae!==null?(ae=ae.index,ae<Y?(ie.flags|=2,Y):ae):(ie.flags|=2,Y)):(ie.flags|=1048576,Y)}function A(ie){return n&&ie.alternate===null&&(ie.flags|=2),ie}function H(ie,Y,ae,Pe){return Y===null||Y.tag!==6?(Y=If(ae,ie.mode,Pe),Y.return=ie,Y):(Y=p(Y,ae),Y.return=ie,Y)}function q(ie,Y,ae,Pe){var Qe=ae.type;return Qe===O?Te(ie,Y,ae.props.children,Pe,ae.key):Y!==null&&(Y.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===ne&&$p(Qe)===Y.type)?(Pe=p(Y,ae.props),Pe.ref=qo(ie,Y,ae),Pe.return=ie,Pe):(Pe=Pl(ae.type,ae.key,ae.props,null,ie.mode,Pe),Pe.ref=qo(ie,Y,ae),Pe.return=ie,Pe)}function fe(ie,Y,ae,Pe){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==ae.containerInfo||Y.stateNode.implementation!==ae.implementation?(Y=Of(ae,ie.mode,Pe),Y.return=ie,Y):(Y=p(Y,ae.children||[]),Y.return=ie,Y)}function Te(ie,Y,ae,Pe,Qe){return Y===null||Y.tag!==7?(Y=ls(ae,ie.mode,Pe,Qe),Y.return=ie,Y):(Y=p(Y,ae),Y.return=ie,Y)}function be(ie,Y,ae){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Y=If(""+Y,ie.mode,ae),Y.return=ie,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case F:return ae=Pl(Y.type,Y.key,Y.props,null,ie.mode,ae),ae.ref=qo(ie,null,Y),ae.return=ie,ae;case I:return Y=Of(Y,ie.mode,ae),Y.return=ie,Y;case ne:var Pe=Y._init;return be(ie,Pe(Y._payload),ae)}if(K(Y)||pe(Y))return Y=ls(Y,ie.mode,ae,null),Y.return=ie,Y;ol(ie,Y)}return null}function we(ie,Y,ae,Pe){var Qe=Y!==null?Y.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number")return Qe!==null?null:H(ie,Y,""+ae,Pe);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case F:return ae.key===Qe?q(ie,Y,ae,Pe):null;case I:return ae.key===Qe?fe(ie,Y,ae,Pe):null;case ne:return Qe=ae._init,we(ie,Y,Qe(ae._payload),Pe)}if(K(ae)||pe(ae))return Qe!==null?null:Te(ie,Y,ae,Pe,null);ol(ie,ae)}return null}function He(ie,Y,ae,Pe,Qe){if(typeof Pe=="string"&&Pe!==""||typeof Pe=="number")return ie=ie.get(ae)||null,H(Y,ie,""+Pe,Qe);if(typeof Pe=="object"&&Pe!==null){switch(Pe.$$typeof){case F:return ie=ie.get(Pe.key===null?ae:Pe.key)||null,q(Y,ie,Pe,Qe);case I:return ie=ie.get(Pe.key===null?ae:Pe.key)||null,fe(Y,ie,Pe,Qe);case ne:var it=Pe._init;return He(ie,Y,ae,it(Pe._payload),Qe)}if(K(Pe)||pe(Pe))return ie=ie.get(ae)||null,Te(Y,ie,Pe,Qe,null);ol(Y,Pe)}return null}function Ye(ie,Y,ae,Pe){for(var Qe=null,it=null,rt=Y,ut=Y=0,gn=null;rt!==null&&ut<ae.length;ut++){rt.index>ut?(gn=rt,rt=null):gn=rt.sibling;var Ct=we(ie,rt,ae[ut],Pe);if(Ct===null){rt===null&&(rt=gn);break}n&&rt&&Ct.alternate===null&&s(ie,rt),Y=S(Ct,Y,ut),it===null?Qe=Ct:it.sibling=Ct,it=Ct,rt=gn}if(ut===ae.length)return a(ie,rt),Gt&&es(ie,ut),Qe;if(rt===null){for(;ut<ae.length;ut++)rt=be(ie,ae[ut],Pe),rt!==null&&(Y=S(rt,Y,ut),it===null?Qe=rt:it.sibling=rt,it=rt);return Gt&&es(ie,ut),Qe}for(rt=c(ie,rt);ut<ae.length;ut++)gn=He(rt,ie,ut,ae[ut],Pe),gn!==null&&(n&&gn.alternate!==null&&rt.delete(gn.key===null?ut:gn.key),Y=S(gn,Y,ut),it===null?Qe=gn:it.sibling=gn,it=gn);return n&&rt.forEach(function(Nr){return s(ie,Nr)}),Gt&&es(ie,ut),Qe}function Ze(ie,Y,ae,Pe){var Qe=pe(ae);if(typeof Qe!="function")throw Error(t(150));if(ae=Qe.call(ae),ae==null)throw Error(t(151));for(var it=Qe=null,rt=Y,ut=Y=0,gn=null,Ct=ae.next();rt!==null&&!Ct.done;ut++,Ct=ae.next()){rt.index>ut?(gn=rt,rt=null):gn=rt.sibling;var Nr=we(ie,rt,Ct.value,Pe);if(Nr===null){rt===null&&(rt=gn);break}n&&rt&&Nr.alternate===null&&s(ie,rt),Y=S(Nr,Y,ut),it===null?Qe=Nr:it.sibling=Nr,it=Nr,rt=gn}if(Ct.done)return a(ie,rt),Gt&&es(ie,ut),Qe;if(rt===null){for(;!Ct.done;ut++,Ct=ae.next())Ct=be(ie,Ct.value,Pe),Ct!==null&&(Y=S(Ct,Y,ut),it===null?Qe=Ct:it.sibling=Ct,it=Ct);return Gt&&es(ie,ut),Qe}for(rt=c(ie,rt);!Ct.done;ut++,Ct=ae.next())Ct=He(rt,ie,ut,Ct.value,Pe),Ct!==null&&(n&&Ct.alternate!==null&&rt.delete(Ct.key===null?ut:Ct.key),Y=S(Ct,Y,ut),it===null?Qe=Ct:it.sibling=Ct,it=Ct);return n&&rt.forEach(function(Rx){return s(ie,Rx)}),Gt&&es(ie,ut),Qe}function Kt(ie,Y,ae,Pe){if(typeof ae=="object"&&ae!==null&&ae.type===O&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case F:e:{for(var Qe=ae.key,it=Y;it!==null;){if(it.key===Qe){if(Qe=ae.type,Qe===O){if(it.tag===7){a(ie,it.sibling),Y=p(it,ae.props.children),Y.return=ie,ie=Y;break e}}else if(it.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===ne&&$p(Qe)===it.type){a(ie,it.sibling),Y=p(it,ae.props),Y.ref=qo(ie,it,ae),Y.return=ie,ie=Y;break e}a(ie,it);break}else s(ie,it);it=it.sibling}ae.type===O?(Y=ls(ae.props.children,ie.mode,Pe,ae.key),Y.return=ie,ie=Y):(Pe=Pl(ae.type,ae.key,ae.props,null,ie.mode,Pe),Pe.ref=qo(ie,Y,ae),Pe.return=ie,ie=Pe)}return A(ie);case I:e:{for(it=ae.key;Y!==null;){if(Y.key===it)if(Y.tag===4&&Y.stateNode.containerInfo===ae.containerInfo&&Y.stateNode.implementation===ae.implementation){a(ie,Y.sibling),Y=p(Y,ae.children||[]),Y.return=ie,ie=Y;break e}else{a(ie,Y);break}else s(ie,Y);Y=Y.sibling}Y=Of(ae,ie.mode,Pe),Y.return=ie,ie=Y}return A(ie);case ne:return it=ae._init,Kt(ie,Y,it(ae._payload),Pe)}if(K(ae))return Ye(ie,Y,ae,Pe);if(pe(ae))return Ze(ie,Y,ae,Pe);ol(ie,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"?(ae=""+ae,Y!==null&&Y.tag===6?(a(ie,Y.sibling),Y=p(Y,ae),Y.return=ie,ie=Y):(a(ie,Y),Y=If(ae,ie.mode,Pe),Y.return=ie,ie=Y),A(ie)):a(ie,Y)}return Kt}var Gs=Kp(!0),Zp=Kp(!1),al=Er(null),ll=null,Ws=null,Wc=null;function jc(){Wc=Ws=ll=null}function Xc(n){var s=al.current;zt(al),n._currentValue=s}function qc(n,s,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),n===a)break;n=n.return}}function js(n,s){ll=n,Wc=Ws=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&s)!==0&&(Bn=!0),n.firstContext=null)}function ri(n){var s=n._currentValue;if(Wc!==n)if(n={context:n,memoizedValue:s,next:null},Ws===null){if(ll===null)throw Error(t(308));Ws=n,ll.dependencies={lanes:0,firstContext:n}}else Ws=Ws.next=n;return s}var ts=null;function Yc(n){ts===null?ts=[n]:ts.push(n)}function Qp(n,s,a,c){var p=s.interleaved;return p===null?(a.next=a,Yc(s)):(a.next=p.next,p.next=a),s.interleaved=a,Xi(n,c)}function Xi(n,s){n.lanes|=s;var a=n.alternate;for(a!==null&&(a.lanes|=s),a=n,n=n.return;n!==null;)n.childLanes|=s,a=n.alternate,a!==null&&(a.childLanes|=s),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Tr=!1;function $c(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jp(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function qi(n,s){return{eventTime:n,lane:s,tag:0,payload:null,callback:null,next:null}}function Ar(n,s,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Rt&2)!==0){var p=c.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),c.pending=s,Xi(n,a)}return p=c.interleaved,p===null?(s.next=s,Yc(c)):(s.next=p.next,p.next=s),c.interleaved=s,Xi(n,a)}function ul(n,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=n.pendingLanes,a|=c,s.lanes=a,hn(n,a)}}function em(n,s){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var p=null,S=null;if(a=a.firstBaseUpdate,a!==null){do{var A={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};S===null?p=S=A:S=S.next=A,a=a.next}while(a!==null);S===null?p=S=s:S=S.next=s}else p=S=s;a={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:S,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=s:n.next=s,a.lastBaseUpdate=s}function cl(n,s,a,c){var p=n.updateQueue;Tr=!1;var S=p.firstBaseUpdate,A=p.lastBaseUpdate,H=p.shared.pending;if(H!==null){p.shared.pending=null;var q=H,fe=q.next;q.next=null,A===null?S=fe:A.next=fe,A=q;var Te=n.alternate;Te!==null&&(Te=Te.updateQueue,H=Te.lastBaseUpdate,H!==A&&(H===null?Te.firstBaseUpdate=fe:H.next=fe,Te.lastBaseUpdate=q))}if(S!==null){var be=p.baseState;A=0,Te=fe=q=null,H=S;do{var we=H.lane,He=H.eventTime;if((c&we)===we){Te!==null&&(Te=Te.next={eventTime:He,lane:0,tag:H.tag,payload:H.payload,callback:H.callback,next:null});e:{var Ye=n,Ze=H;switch(we=s,He=a,Ze.tag){case 1:if(Ye=Ze.payload,typeof Ye=="function"){be=Ye.call(He,be,we);break e}be=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=Ze.payload,we=typeof Ye=="function"?Ye.call(He,be,we):Ye,we==null)break e;be=ce({},be,we);break e;case 2:Tr=!0}}H.callback!==null&&H.lane!==0&&(n.flags|=64,we=p.effects,we===null?p.effects=[H]:we.push(H))}else He={eventTime:He,lane:we,tag:H.tag,payload:H.payload,callback:H.callback,next:null},Te===null?(fe=Te=He,q=be):Te=Te.next=He,A|=we;if(H=H.next,H===null){if(H=p.shared.pending,H===null)break;we=H,H=we.next,we.next=null,p.lastBaseUpdate=we,p.shared.pending=null}}while(!0);if(Te===null&&(q=be),p.baseState=q,p.firstBaseUpdate=fe,p.lastBaseUpdate=Te,s=p.shared.interleaved,s!==null){p=s;do A|=p.lane,p=p.next;while(p!==s)}else S===null&&(p.shared.lanes=0);rs|=A,n.lanes=A,n.memoizedState=be}}function tm(n,s,a){if(n=s.effects,s.effects=null,n!==null)for(s=0;s<n.length;s++){var c=n[s],p=c.callback;if(p!==null){if(c.callback=null,c=a,typeof p!="function")throw Error(t(191,p));p.call(c)}}}var Yo={},Ci=Er(Yo),$o=Er(Yo),Ko=Er(Yo);function ns(n){if(n===Yo)throw Error(t(174));return n}function Kc(n,s){switch(Ft(Ko,s),Ft($o,n),Ft(Ci,Yo),n=s.nodeType,n){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Ue(null,"");break;default:n=n===8?s.parentNode:s,s=n.namespaceURI||null,n=n.tagName,s=Ue(s,n)}zt(Ci),Ft(Ci,s)}function Xs(){zt(Ci),zt($o),zt(Ko)}function nm(n){ns(Ko.current);var s=ns(Ci.current),a=Ue(s,n.type);s!==a&&(Ft($o,n),Ft(Ci,a))}function Zc(n){$o.current===n&&(zt(Ci),zt($o))}var jt=Er(0);function fl(n){for(var s=n;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Qc=[];function Jc(){for(var n=0;n<Qc.length;n++)Qc[n]._workInProgressVersionPrimary=null;Qc.length=0}var dl=b.ReactCurrentDispatcher,ef=b.ReactCurrentBatchConfig,is=0,Xt=null,an=null,pn=null,hl=!1,Zo=!1,Qo=0,Ky=0;function wn(){throw Error(t(321))}function tf(n,s){if(s===null)return!1;for(var a=0;a<s.length&&a<n.length;a++)if(!di(n[a],s[a]))return!1;return!0}function nf(n,s,a,c,p,S){if(is=S,Xt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,dl.current=n===null||n.memoizedState===null?ex:tx,n=a(c,p),Zo){S=0;do{if(Zo=!1,Qo=0,25<=S)throw Error(t(301));S+=1,pn=an=null,s.updateQueue=null,dl.current=nx,n=a(c,p)}while(Zo)}if(dl.current=gl,s=an!==null&&an.next!==null,is=0,pn=an=Xt=null,hl=!1,s)throw Error(t(300));return n}function rf(){var n=Qo!==0;return Qo=0,n}function Pi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?Xt.memoizedState=pn=n:pn=pn.next=n,pn}function si(){if(an===null){var n=Xt.alternate;n=n!==null?n.memoizedState:null}else n=an.next;var s=pn===null?Xt.memoizedState:pn.next;if(s!==null)pn=s,an=n;else{if(n===null)throw Error(t(310));an=n,n={memoizedState:an.memoizedState,baseState:an.baseState,baseQueue:an.baseQueue,queue:an.queue,next:null},pn===null?Xt.memoizedState=pn=n:pn=pn.next=n}return pn}function Jo(n,s){return typeof s=="function"?s(n):s}function sf(n){var s=si(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=an,p=c.baseQueue,S=a.pending;if(S!==null){if(p!==null){var A=p.next;p.next=S.next,S.next=A}c.baseQueue=p=S,a.pending=null}if(p!==null){S=p.next,c=c.baseState;var H=A=null,q=null,fe=S;do{var Te=fe.lane;if((is&Te)===Te)q!==null&&(q=q.next={lane:0,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),c=fe.hasEagerState?fe.eagerState:n(c,fe.action);else{var be={lane:Te,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null};q===null?(H=q=be,A=c):q=q.next=be,Xt.lanes|=Te,rs|=Te}fe=fe.next}while(fe!==null&&fe!==S);q===null?A=c:q.next=H,di(c,s.memoizedState)||(Bn=!0),s.memoizedState=c,s.baseState=A,s.baseQueue=q,a.lastRenderedState=c}if(n=a.interleaved,n!==null){p=n;do S=p.lane,Xt.lanes|=S,rs|=S,p=p.next;while(p!==n)}else p===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function of(n){var s=si(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,p=a.pending,S=s.memoizedState;if(p!==null){a.pending=null;var A=p=p.next;do S=n(S,A.action),A=A.next;while(A!==p);di(S,s.memoizedState)||(Bn=!0),s.memoizedState=S,s.baseQueue===null&&(s.baseState=S),a.lastRenderedState=S}return[S,c]}function im(){}function rm(n,s){var a=Xt,c=si(),p=s(),S=!di(c.memoizedState,p);if(S&&(c.memoizedState=p,Bn=!0),c=c.queue,af(am.bind(null,a,c,n),[n]),c.getSnapshot!==s||S||pn!==null&&pn.memoizedState.tag&1){if(a.flags|=2048,ea(9,om.bind(null,a,c,p,s),void 0,null),mn===null)throw Error(t(349));(is&30)!==0||sm(a,s,p)}return p}function sm(n,s,a){n.flags|=16384,n={getSnapshot:s,value:a},s=Xt.updateQueue,s===null?(s={lastEffect:null,stores:null},Xt.updateQueue=s,s.stores=[n]):(a=s.stores,a===null?s.stores=[n]:a.push(n))}function om(n,s,a,c){s.value=a,s.getSnapshot=c,lm(s)&&um(n)}function am(n,s,a){return a(function(){lm(s)&&um(n)})}function lm(n){var s=n.getSnapshot;n=n.value;try{var a=s();return!di(n,a)}catch{return!0}}function um(n){var s=Xi(n,1);s!==null&&vi(s,n,1,-1)}function cm(n){var s=Pi();return typeof n=="function"&&(n=n()),s.memoizedState=s.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jo,lastRenderedState:n},s.queue=n,n=n.dispatch=Jy.bind(null,Xt,n),[s.memoizedState,n]}function ea(n,s,a,c){return n={tag:n,create:s,destroy:a,deps:c,next:null},s=Xt.updateQueue,s===null?(s={lastEffect:null,stores:null},Xt.updateQueue=s,s.lastEffect=n.next=n):(a=s.lastEffect,a===null?s.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,s.lastEffect=n)),n}function fm(){return si().memoizedState}function pl(n,s,a,c){var p=Pi();Xt.flags|=n,p.memoizedState=ea(1|s,a,void 0,c===void 0?null:c)}function ml(n,s,a,c){var p=si();c=c===void 0?null:c;var S=void 0;if(an!==null){var A=an.memoizedState;if(S=A.destroy,c!==null&&tf(c,A.deps)){p.memoizedState=ea(s,a,S,c);return}}Xt.flags|=n,p.memoizedState=ea(1|s,a,S,c)}function dm(n,s){return pl(8390656,8,n,s)}function af(n,s){return ml(2048,8,n,s)}function hm(n,s){return ml(4,2,n,s)}function pm(n,s){return ml(4,4,n,s)}function mm(n,s){if(typeof s=="function")return n=n(),s(n),function(){s(null)};if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function gm(n,s,a){return a=a!=null?a.concat([n]):null,ml(4,4,mm.bind(null,s,n),a)}function lf(){}function vm(n,s){var a=si();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&tf(s,c[1])?c[0]:(a.memoizedState=[n,s],n)}function _m(n,s){var a=si();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&tf(s,c[1])?c[0]:(n=n(),a.memoizedState=[n,s],n)}function ym(n,s,a){return(is&21)===0?(n.baseState&&(n.baseState=!1,Bn=!0),n.memoizedState=a):(di(a,s)||(a=It(),Xt.lanes|=a,rs|=a,n.baseState=!0),s)}function Zy(n,s){var a=bt;bt=a!==0&&4>a?a:4,n(!0);var c=ef.transition;ef.transition={};try{n(!1),s()}finally{bt=a,ef.transition=c}}function xm(){return si().memoizedState}function Qy(n,s,a){var c=Pr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Sm(n))Em(s,a);else if(a=Qp(n,s,a,c),a!==null){var p=Nn();vi(a,n,c,p),Mm(a,s,c)}}function Jy(n,s,a){var c=Pr(n),p={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Sm(n))Em(s,p);else{var S=n.alternate;if(n.lanes===0&&(S===null||S.lanes===0)&&(S=s.lastRenderedReducer,S!==null))try{var A=s.lastRenderedState,H=S(A,a);if(p.hasEagerState=!0,p.eagerState=H,di(H,A)){var q=s.interleaved;q===null?(p.next=p,Yc(s)):(p.next=q.next,q.next=p),s.interleaved=p;return}}catch{}finally{}a=Qp(n,s,p,c),a!==null&&(p=Nn(),vi(a,n,c,p),Mm(a,s,c))}}function Sm(n){var s=n.alternate;return n===Xt||s!==null&&s===Xt}function Em(n,s){Zo=hl=!0;var a=n.pending;a===null?s.next=s:(s.next=a.next,a.next=s),n.pending=s}function Mm(n,s,a){if((a&4194240)!==0){var c=s.lanes;c&=n.pendingLanes,a|=c,s.lanes=a,hn(n,a)}}var gl={readContext:ri,useCallback:wn,useContext:wn,useEffect:wn,useImperativeHandle:wn,useInsertionEffect:wn,useLayoutEffect:wn,useMemo:wn,useReducer:wn,useRef:wn,useState:wn,useDebugValue:wn,useDeferredValue:wn,useTransition:wn,useMutableSource:wn,useSyncExternalStore:wn,useId:wn,unstable_isNewReconciler:!1},ex={readContext:ri,useCallback:function(n,s){return Pi().memoizedState=[n,s===void 0?null:s],n},useContext:ri,useEffect:dm,useImperativeHandle:function(n,s,a){return a=a!=null?a.concat([n]):null,pl(4194308,4,mm.bind(null,s,n),a)},useLayoutEffect:function(n,s){return pl(4194308,4,n,s)},useInsertionEffect:function(n,s){return pl(4,2,n,s)},useMemo:function(n,s){var a=Pi();return s=s===void 0?null:s,n=n(),a.memoizedState=[n,s],n},useReducer:function(n,s,a){var c=Pi();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:s},c.queue=n,n=n.dispatch=Qy.bind(null,Xt,n),[c.memoizedState,n]},useRef:function(n){var s=Pi();return n={current:n},s.memoizedState=n},useState:cm,useDebugValue:lf,useDeferredValue:function(n){return Pi().memoizedState=n},useTransition:function(){var n=cm(!1),s=n[0];return n=Zy.bind(null,n[1]),Pi().memoizedState=n,[s,n]},useMutableSource:function(){},useSyncExternalStore:function(n,s,a){var c=Xt,p=Pi();if(Gt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),mn===null)throw Error(t(349));(is&30)!==0||sm(c,s,a)}p.memoizedState=a;var S={value:a,getSnapshot:s};return p.queue=S,dm(am.bind(null,c,S,n),[n]),c.flags|=2048,ea(9,om.bind(null,c,S,a,s),void 0,null),a},useId:function(){var n=Pi(),s=mn.identifierPrefix;if(Gt){var a=ji,c=Wi;a=(c&~(1<<32-mt(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=Qo++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=Ky++,s=":"+s+"r"+a.toString(32)+":";return n.memoizedState=s},unstable_isNewReconciler:!1},tx={readContext:ri,useCallback:vm,useContext:ri,useEffect:af,useImperativeHandle:gm,useInsertionEffect:hm,useLayoutEffect:pm,useMemo:_m,useReducer:sf,useRef:fm,useState:function(){return sf(Jo)},useDebugValue:lf,useDeferredValue:function(n){var s=si();return ym(s,an.memoizedState,n)},useTransition:function(){var n=sf(Jo)[0],s=si().memoizedState;return[n,s]},useMutableSource:im,useSyncExternalStore:rm,useId:xm,unstable_isNewReconciler:!1},nx={readContext:ri,useCallback:vm,useContext:ri,useEffect:af,useImperativeHandle:gm,useInsertionEffect:hm,useLayoutEffect:pm,useMemo:_m,useReducer:of,useRef:fm,useState:function(){return of(Jo)},useDebugValue:lf,useDeferredValue:function(n){var s=si();return an===null?s.memoizedState=n:ym(s,an.memoizedState,n)},useTransition:function(){var n=of(Jo)[0],s=si().memoizedState;return[n,s]},useMutableSource:im,useSyncExternalStore:rm,useId:xm,unstable_isNewReconciler:!1};function pi(n,s){if(n&&n.defaultProps){s=ce({},s),n=n.defaultProps;for(var a in n)s[a]===void 0&&(s[a]=n[a]);return s}return s}function uf(n,s,a,c){s=n.memoizedState,a=a(c,s),a=a==null?s:ce({},s,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var vl={isMounted:function(n){return(n=n._reactInternals)?Ai(n)===n:!1},enqueueSetState:function(n,s,a){n=n._reactInternals;var c=Nn(),p=Pr(n),S=qi(c,p);S.payload=s,a!=null&&(S.callback=a),s=Ar(n,S,p),s!==null&&(vi(s,n,p,c),ul(s,n,p))},enqueueReplaceState:function(n,s,a){n=n._reactInternals;var c=Nn(),p=Pr(n),S=qi(c,p);S.tag=1,S.payload=s,a!=null&&(S.callback=a),s=Ar(n,S,p),s!==null&&(vi(s,n,p,c),ul(s,n,p))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var a=Nn(),c=Pr(n),p=qi(a,c);p.tag=2,s!=null&&(p.callback=s),s=Ar(n,p,c),s!==null&&(vi(s,n,c,a),ul(s,n,c))}};function wm(n,s,a,c,p,S,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,S,A):s.prototype&&s.prototype.isPureReactComponent?!zo(a,c)||!zo(p,S):!0}function Tm(n,s,a){var c=!1,p=Mr,S=s.contextType;return typeof S=="object"&&S!==null?S=ri(S):(p=kn(s)?Qr:Mn.current,c=s.contextTypes,S=(c=c!=null)?Bs(n,p):Mr),s=new s(a,S),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=vl,n.stateNode=s,s._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=S),s}function Am(n,s,a,c){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==n&&vl.enqueueReplaceState(s,s.state,null)}function cf(n,s,a,c){var p=n.stateNode;p.props=a,p.state=n.memoizedState,p.refs={},$c(n);var S=s.contextType;typeof S=="object"&&S!==null?p.context=ri(S):(S=kn(s)?Qr:Mn.current,p.context=Bs(n,S)),p.state=n.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(uf(n,s,S,a),p.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&vl.enqueueReplaceState(p,p.state,null),cl(n,a,p,c),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function qs(n,s){try{var a="",c=s;do a+=ye(c),c=c.return;while(c);var p=a}catch(S){p=`
Error generating stack: `+S.message+`
`+S.stack}return{value:n,source:s,stack:p,digest:null}}function ff(n,s,a){return{value:n,source:null,stack:a??null,digest:s??null}}function df(n,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var ix=typeof WeakMap=="function"?WeakMap:Map;function bm(n,s,a){a=qi(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){wl||(wl=!0,bf=c),df(n,s)},a}function Rm(n,s,a){a=qi(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var p=s.value;a.payload=function(){return c(p)},a.callback=function(){df(n,s)}}var S=n.stateNode;return S!==null&&typeof S.componentDidCatch=="function"&&(a.callback=function(){df(n,s),typeof c!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})}),a}function Cm(n,s,a){var c=n.pingCache;if(c===null){c=n.pingCache=new ix;var p=new Set;c.set(s,p)}else p=c.get(s),p===void 0&&(p=new Set,c.set(s,p));p.has(a)||(p.add(a),n=vx.bind(null,n,s,a),s.then(n,n))}function Pm(n){do{var s;if((s=n.tag===13)&&(s=n.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return n;n=n.return}while(n!==null);return null}function Lm(n,s,a,c,p){return(n.mode&1)===0?(n===s?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=qi(-1,1),s.tag=2,Ar(a,s,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var rx=b.ReactCurrentOwner,Bn=!1;function Dn(n,s,a,c){s.child=n===null?Zp(s,null,a,c):Gs(s,n.child,a,c)}function Dm(n,s,a,c,p){a=a.render;var S=s.ref;return js(s,p),c=nf(n,s,a,c,S,p),a=rf(),n!==null&&!Bn?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~p,Yi(n,s,p)):(Gt&&a&&Bc(s),s.flags|=1,Dn(n,s,c,p),s.child)}function Nm(n,s,a,c,p){if(n===null){var S=a.type;return typeof S=="function"&&!Uf(S)&&S.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=S,Um(n,s,S,c,p)):(n=Pl(a.type,null,c,s,s.mode,p),n.ref=s.ref,n.return=s,s.child=n)}if(S=n.child,(n.lanes&p)===0){var A=S.memoizedProps;if(a=a.compare,a=a!==null?a:zo,a(A,c)&&n.ref===s.ref)return Yi(n,s,p)}return s.flags|=1,n=Dr(S,c),n.ref=s.ref,n.return=s,s.child=n}function Um(n,s,a,c,p){if(n!==null){var S=n.memoizedProps;if(zo(S,c)&&n.ref===s.ref)if(Bn=!1,s.pendingProps=c=S,(n.lanes&p)!==0)(n.flags&131072)!==0&&(Bn=!0);else return s.lanes=n.lanes,Yi(n,s,p)}return hf(n,s,a,c,p)}function Im(n,s,a){var c=s.pendingProps,p=c.children,S=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ft($s,Qn),Qn|=a;else{if((a&1073741824)===0)return n=S!==null?S.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:n,cachePool:null,transitions:null},s.updateQueue=null,Ft($s,Qn),Qn|=n,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=S!==null?S.baseLanes:a,Ft($s,Qn),Qn|=c}else S!==null?(c=S.baseLanes|a,s.memoizedState=null):c=a,Ft($s,Qn),Qn|=c;return Dn(n,s,p,a),s.child}function Om(n,s){var a=s.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function hf(n,s,a,c,p){var S=kn(a)?Qr:Mn.current;return S=Bs(s,S),js(s,p),a=nf(n,s,a,c,S,p),c=rf(),n!==null&&!Bn?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~p,Yi(n,s,p)):(Gt&&c&&Bc(s),s.flags|=1,Dn(n,s,a,p),s.child)}function Fm(n,s,a,c,p){if(kn(a)){var S=!0;tl(s)}else S=!1;if(js(s,p),s.stateNode===null)yl(n,s),Tm(s,a,c),cf(s,a,c,p),c=!0;else if(n===null){var A=s.stateNode,H=s.memoizedProps;A.props=H;var q=A.context,fe=a.contextType;typeof fe=="object"&&fe!==null?fe=ri(fe):(fe=kn(a)?Qr:Mn.current,fe=Bs(s,fe));var Te=a.getDerivedStateFromProps,be=typeof Te=="function"||typeof A.getSnapshotBeforeUpdate=="function";be||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(H!==c||q!==fe)&&Am(s,A,c,fe),Tr=!1;var we=s.memoizedState;A.state=we,cl(s,c,A,p),q=s.memoizedState,H!==c||we!==q||Fn.current||Tr?(typeof Te=="function"&&(uf(s,a,Te,c),q=s.memoizedState),(H=Tr||wm(s,a,H,c,we,q,fe))?(be||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(s.flags|=4194308)):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=q),A.props=c,A.state=q,A.context=fe,c=H):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{A=s.stateNode,Jp(n,s),H=s.memoizedProps,fe=s.type===s.elementType?H:pi(s.type,H),A.props=fe,be=s.pendingProps,we=A.context,q=a.contextType,typeof q=="object"&&q!==null?q=ri(q):(q=kn(a)?Qr:Mn.current,q=Bs(s,q));var He=a.getDerivedStateFromProps;(Te=typeof He=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(H!==be||we!==q)&&Am(s,A,c,q),Tr=!1,we=s.memoizedState,A.state=we,cl(s,c,A,p);var Ye=s.memoizedState;H!==be||we!==Ye||Fn.current||Tr?(typeof He=="function"&&(uf(s,a,He,c),Ye=s.memoizedState),(fe=Tr||wm(s,a,fe,c,we,Ye,q)||!1)?(Te||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(c,Ye,q),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(c,Ye,q)),typeof A.componentDidUpdate=="function"&&(s.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof A.componentDidUpdate!="function"||H===n.memoizedProps&&we===n.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||H===n.memoizedProps&&we===n.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=Ye),A.props=c,A.state=Ye,A.context=q,c=fe):(typeof A.componentDidUpdate!="function"||H===n.memoizedProps&&we===n.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||H===n.memoizedProps&&we===n.memoizedState||(s.flags|=1024),c=!1)}return pf(n,s,a,c,S,p)}function pf(n,s,a,c,p,S){Om(n,s);var A=(s.flags&128)!==0;if(!c&&!A)return p&&Vp(s,a,!1),Yi(n,s,S);c=s.stateNode,rx.current=s;var H=A&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,n!==null&&A?(s.child=Gs(s,n.child,null,S),s.child=Gs(s,null,H,S)):Dn(n,s,H,S),s.memoizedState=c.state,p&&Vp(s,a,!0),s.child}function km(n){var s=n.stateNode;s.pendingContext?zp(n,s.pendingContext,s.pendingContext!==s.context):s.context&&zp(n,s.context,!1),Kc(n,s.containerInfo)}function Bm(n,s,a,c,p){return Vs(),Gc(p),s.flags|=256,Dn(n,s,a,c),s.child}var mf={dehydrated:null,treeContext:null,retryLane:0};function gf(n){return{baseLanes:n,cachePool:null,transitions:null}}function zm(n,s,a){var c=s.pendingProps,p=jt.current,S=!1,A=(s.flags&128)!==0,H;if((H=A)||(H=n!==null&&n.memoizedState===null?!1:(p&2)!==0),H?(S=!0,s.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Ft(jt,p&1),n===null)return Vc(s),n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((s.mode&1)===0?s.lanes=1:n.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(A=c.children,n=c.fallback,S?(c=s.mode,S=s.child,A={mode:"hidden",children:A},(c&1)===0&&S!==null?(S.childLanes=0,S.pendingProps=A):S=Ll(A,c,0,null),n=ls(n,c,a,null),S.return=s,n.return=s,S.sibling=n,s.child=S,s.child.memoizedState=gf(a),s.memoizedState=mf,n):vf(s,A));if(p=n.memoizedState,p!==null&&(H=p.dehydrated,H!==null))return sx(n,s,A,c,H,p,a);if(S){S=c.fallback,A=s.mode,p=n.child,H=p.sibling;var q={mode:"hidden",children:c.children};return(A&1)===0&&s.child!==p?(c=s.child,c.childLanes=0,c.pendingProps=q,s.deletions=null):(c=Dr(p,q),c.subtreeFlags=p.subtreeFlags&14680064),H!==null?S=Dr(H,S):(S=ls(S,A,a,null),S.flags|=2),S.return=s,c.return=s,c.sibling=S,s.child=c,c=S,S=s.child,A=n.child.memoizedState,A=A===null?gf(a):{baseLanes:A.baseLanes|a,cachePool:null,transitions:A.transitions},S.memoizedState=A,S.childLanes=n.childLanes&~a,s.memoizedState=mf,c}return S=n.child,n=S.sibling,c=Dr(S,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,n!==null&&(a=s.deletions,a===null?(s.deletions=[n],s.flags|=16):a.push(n)),s.child=c,s.memoizedState=null,c}function vf(n,s){return s=Ll({mode:"visible",children:s},n.mode,0,null),s.return=n,n.child=s}function _l(n,s,a,c){return c!==null&&Gc(c),Gs(s,n.child,null,a),n=vf(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function sx(n,s,a,c,p,S,A){if(a)return s.flags&256?(s.flags&=-257,c=ff(Error(t(422))),_l(n,s,A,c)):s.memoizedState!==null?(s.child=n.child,s.flags|=128,null):(S=c.fallback,p=s.mode,c=Ll({mode:"visible",children:c.children},p,0,null),S=ls(S,p,A,null),S.flags|=2,c.return=s,S.return=s,c.sibling=S,s.child=c,(s.mode&1)!==0&&Gs(s,n.child,null,A),s.child.memoizedState=gf(A),s.memoizedState=mf,S);if((s.mode&1)===0)return _l(n,s,A,null);if(p.data==="$!"){if(c=p.nextSibling&&p.nextSibling.dataset,c)var H=c.dgst;return c=H,S=Error(t(419)),c=ff(S,c,void 0),_l(n,s,A,c)}if(H=(A&n.childLanes)!==0,Bn||H){if(c=mn,c!==null){switch(A&-A){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(c.suspendedLanes|A))!==0?0:p,p!==0&&p!==S.retryLane&&(S.retryLane=p,Xi(n,p),vi(c,n,p,-1))}return Nf(),c=ff(Error(t(421))),_l(n,s,A,c)}return p.data==="$?"?(s.flags|=128,s.child=n.child,s=_x.bind(null,n),p._reactRetry=s,null):(n=S.treeContext,Zn=Sr(p.nextSibling),Kn=s,Gt=!0,hi=null,n!==null&&(ni[ii++]=Wi,ni[ii++]=ji,ni[ii++]=Jr,Wi=n.id,ji=n.overflow,Jr=s),s=vf(s,c.children),s.flags|=4096,s)}function Hm(n,s,a){n.lanes|=s;var c=n.alternate;c!==null&&(c.lanes|=s),qc(n.return,s,a)}function _f(n,s,a,c,p){var S=n.memoizedState;S===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:p}:(S.isBackwards=s,S.rendering=null,S.renderingStartTime=0,S.last=c,S.tail=a,S.tailMode=p)}function Vm(n,s,a){var c=s.pendingProps,p=c.revealOrder,S=c.tail;if(Dn(n,s,c.children,a),c=jt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Hm(n,a,s);else if(n.tag===19)Hm(n,a,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ft(jt,c),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(a=s.child,p=null;a!==null;)n=a.alternate,n!==null&&fl(n)===null&&(p=a),a=a.sibling;a=p,a===null?(p=s.child,s.child=null):(p=a.sibling,a.sibling=null),_f(s,!1,p,a,S);break;case"backwards":for(a=null,p=s.child,s.child=null;p!==null;){if(n=p.alternate,n!==null&&fl(n)===null){s.child=p;break}n=p.sibling,p.sibling=a,a=p,p=n}_f(s,!0,a,null,S);break;case"together":_f(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function yl(n,s){(s.mode&1)===0&&n!==null&&(n.alternate=null,s.alternate=null,s.flags|=2)}function Yi(n,s,a){if(n!==null&&(s.dependencies=n.dependencies),rs|=s.lanes,(a&s.childLanes)===0)return null;if(n!==null&&s.child!==n.child)throw Error(t(153));if(s.child!==null){for(n=s.child,a=Dr(n,n.pendingProps),s.child=a,a.return=s;n.sibling!==null;)n=n.sibling,a=a.sibling=Dr(n,n.pendingProps),a.return=s;a.sibling=null}return s.child}function ox(n,s,a){switch(s.tag){case 3:km(s),Vs();break;case 5:nm(s);break;case 1:kn(s.type)&&tl(s);break;case 4:Kc(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,p=s.memoizedProps.value;Ft(al,c._currentValue),c._currentValue=p;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(Ft(jt,jt.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?zm(n,s,a):(Ft(jt,jt.current&1),n=Yi(n,s,a),n!==null?n.sibling:null);Ft(jt,jt.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(n.flags&128)!==0){if(c)return Vm(n,s,a);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Ft(jt,jt.current),c)break;return null;case 22:case 23:return s.lanes=0,Im(n,s,a)}return Yi(n,s,a)}var Gm,yf,Wm,jm;Gm=function(n,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},yf=function(){},Wm=function(n,s,a,c){var p=n.memoizedProps;if(p!==c){n=s.stateNode,ns(Ci.current);var S=null;switch(a){case"input":p=G(n,p),c=G(n,c),S=[];break;case"select":p=ce({},p,{value:void 0}),c=ce({},c,{value:void 0}),S=[];break;case"textarea":p=w(n,p),c=w(n,c),S=[];break;default:typeof p.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Qa)}xt(a,c);var A;a=null;for(fe in p)if(!c.hasOwnProperty(fe)&&p.hasOwnProperty(fe)&&p[fe]!=null)if(fe==="style"){var H=p[fe];for(A in H)H.hasOwnProperty(A)&&(a||(a={}),a[A]="")}else fe!=="dangerouslySetInnerHTML"&&fe!=="children"&&fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&fe!=="autoFocus"&&(o.hasOwnProperty(fe)?S||(S=[]):(S=S||[]).push(fe,null));for(fe in c){var q=c[fe];if(H=p!=null?p[fe]:void 0,c.hasOwnProperty(fe)&&q!==H&&(q!=null||H!=null))if(fe==="style")if(H){for(A in H)!H.hasOwnProperty(A)||q&&q.hasOwnProperty(A)||(a||(a={}),a[A]="");for(A in q)q.hasOwnProperty(A)&&H[A]!==q[A]&&(a||(a={}),a[A]=q[A])}else a||(S||(S=[]),S.push(fe,a)),a=q;else fe==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,H=H?H.__html:void 0,q!=null&&H!==q&&(S=S||[]).push(fe,q)):fe==="children"?typeof q!="string"&&typeof q!="number"||(S=S||[]).push(fe,""+q):fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&(o.hasOwnProperty(fe)?(q!=null&&fe==="onScroll"&&Bt("scroll",n),S||H===q||(S=[])):(S=S||[]).push(fe,q))}a&&(S=S||[]).push("style",a);var fe=S;(s.updateQueue=fe)&&(s.flags|=4)}},jm=function(n,s,a,c){a!==c&&(s.flags|=4)};function ta(n,s){if(!Gt)switch(n.tailMode){case"hidden":s=n.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Tn(n){var s=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(s)for(var p=n.child;p!==null;)a|=p.lanes|p.childLanes,c|=p.subtreeFlags&14680064,c|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)a|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=c,n.childLanes=a,s}function ax(n,s,a){var c=s.pendingProps;switch(zc(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tn(s),null;case 1:return kn(s.type)&&el(),Tn(s),null;case 3:return c=s.stateNode,Xs(),zt(Fn),zt(Mn),Jc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(sl(s)?s.flags|=4:n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,hi!==null&&(Pf(hi),hi=null))),yf(n,s),Tn(s),null;case 5:Zc(s);var p=ns(Ko.current);if(a=s.type,n!==null&&s.stateNode!=null)Wm(n,s,a,c,p),n.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Tn(s),null}if(n=ns(Ci.current),sl(s)){c=s.stateNode,a=s.type;var S=s.memoizedProps;switch(c[Ri]=s,c[jo]=S,n=(s.mode&1)!==0,a){case"dialog":Bt("cancel",c),Bt("close",c);break;case"iframe":case"object":case"embed":Bt("load",c);break;case"video":case"audio":for(p=0;p<Vo.length;p++)Bt(Vo[p],c);break;case"source":Bt("error",c);break;case"img":case"image":case"link":Bt("error",c),Bt("load",c);break;case"details":Bt("toggle",c);break;case"input":Lt(c,S),Bt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!S.multiple},Bt("invalid",c);break;case"textarea":j(c,S),Bt("invalid",c)}xt(a,S),p=null;for(var A in S)if(S.hasOwnProperty(A)){var H=S[A];A==="children"?typeof H=="string"?c.textContent!==H&&(S.suppressHydrationWarning!==!0&&Za(c.textContent,H,n),p=["children",H]):typeof H=="number"&&c.textContent!==""+H&&(S.suppressHydrationWarning!==!0&&Za(c.textContent,H,n),p=["children",""+H]):o.hasOwnProperty(A)&&H!=null&&A==="onScroll"&&Bt("scroll",c)}switch(a){case"input":ct(c),k(c,S,!0);break;case"textarea":ct(c),me(c);break;case"select":case"option":break;default:typeof S.onClick=="function"&&(c.onclick=Qa)}c=p,s.updateQueue=c,c!==null&&(s.flags|=4)}else{A=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ge(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=A.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=A.createElement(a,{is:c.is}):(n=A.createElement(a),a==="select"&&(A=n,c.multiple?A.multiple=!0:c.size&&(A.size=c.size))):n=A.createElementNS(n,a),n[Ri]=s,n[jo]=c,Gm(n,s,!1,!1),s.stateNode=n;e:{switch(A=ft(a,c),a){case"dialog":Bt("cancel",n),Bt("close",n),p=c;break;case"iframe":case"object":case"embed":Bt("load",n),p=c;break;case"video":case"audio":for(p=0;p<Vo.length;p++)Bt(Vo[p],n);p=c;break;case"source":Bt("error",n),p=c;break;case"img":case"image":case"link":Bt("error",n),Bt("load",n),p=c;break;case"details":Bt("toggle",n),p=c;break;case"input":Lt(n,c),p=G(n,c),Bt("invalid",n);break;case"option":p=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},p=ce({},c,{value:void 0}),Bt("invalid",n);break;case"textarea":j(n,c),p=w(n,c),Bt("invalid",n);break;default:p=c}xt(a,p),H=p;for(S in H)if(H.hasOwnProperty(S)){var q=H[S];S==="style"?st(n,q):S==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,q!=null&&Ve(n,q)):S==="children"?typeof q=="string"?(a!=="textarea"||q!=="")&&ht(n,q):typeof q=="number"&&ht(n,""+q):S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&S!=="autoFocus"&&(o.hasOwnProperty(S)?q!=null&&S==="onScroll"&&Bt("scroll",n):q!=null&&C(n,S,q,A))}switch(a){case"input":ct(n),k(n,c,!1);break;case"textarea":ct(n),me(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Se(c.value));break;case"select":n.multiple=!!c.multiple,S=c.value,S!=null?P(n,!!c.multiple,S,!1):c.defaultValue!=null&&P(n,!!c.multiple,c.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=Qa)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Tn(s),null;case 6:if(n&&s.stateNode!=null)jm(n,s,n.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=ns(Ko.current),ns(Ci.current),sl(s)){if(c=s.stateNode,a=s.memoizedProps,c[Ri]=s,(S=c.nodeValue!==a)&&(n=Kn,n!==null))switch(n.tag){case 3:Za(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Za(c.nodeValue,a,(n.mode&1)!==0)}S&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Ri]=s,s.stateNode=c}return Tn(s),null;case 13:if(zt(jt),c=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Gt&&Zn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Yp(),Vs(),s.flags|=98560,S=!1;else if(S=sl(s),c!==null&&c.dehydrated!==null){if(n===null){if(!S)throw Error(t(318));if(S=s.memoizedState,S=S!==null?S.dehydrated:null,!S)throw Error(t(317));S[Ri]=s}else Vs(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Tn(s),S=!1}else hi!==null&&(Pf(hi),hi=null),S=!0;if(!S)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(n===null||(jt.current&1)!==0?ln===0&&(ln=3):Nf())),s.updateQueue!==null&&(s.flags|=4),Tn(s),null);case 4:return Xs(),yf(n,s),n===null&&Go(s.stateNode.containerInfo),Tn(s),null;case 10:return Xc(s.type._context),Tn(s),null;case 17:return kn(s.type)&&el(),Tn(s),null;case 19:if(zt(jt),S=s.memoizedState,S===null)return Tn(s),null;if(c=(s.flags&128)!==0,A=S.rendering,A===null)if(c)ta(S,!1);else{if(ln!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(A=fl(n),A!==null){for(s.flags|=128,ta(S,!1),c=A.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)S=a,n=c,S.flags&=14680066,A=S.alternate,A===null?(S.childLanes=0,S.lanes=n,S.child=null,S.subtreeFlags=0,S.memoizedProps=null,S.memoizedState=null,S.updateQueue=null,S.dependencies=null,S.stateNode=null):(S.childLanes=A.childLanes,S.lanes=A.lanes,S.child=A.child,S.subtreeFlags=0,S.deletions=null,S.memoizedProps=A.memoizedProps,S.memoizedState=A.memoizedState,S.updateQueue=A.updateQueue,S.type=A.type,n=A.dependencies,S.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ft(jt,jt.current&1|2),s.child}n=n.sibling}S.tail!==null&&re()>Ks&&(s.flags|=128,c=!0,ta(S,!1),s.lanes=4194304)}else{if(!c)if(n=fl(A),n!==null){if(s.flags|=128,c=!0,a=n.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),ta(S,!0),S.tail===null&&S.tailMode==="hidden"&&!A.alternate&&!Gt)return Tn(s),null}else 2*re()-S.renderingStartTime>Ks&&a!==1073741824&&(s.flags|=128,c=!0,ta(S,!1),s.lanes=4194304);S.isBackwards?(A.sibling=s.child,s.child=A):(a=S.last,a!==null?a.sibling=A:s.child=A,S.last=A)}return S.tail!==null?(s=S.tail,S.rendering=s,S.tail=s.sibling,S.renderingStartTime=re(),s.sibling=null,a=jt.current,Ft(jt,c?a&1|2:a&1),s):(Tn(s),null);case 22:case 23:return Df(),c=s.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(Qn&1073741824)!==0&&(Tn(s),s.subtreeFlags&6&&(s.flags|=8192)):Tn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function lx(n,s){switch(zc(s),s.tag){case 1:return kn(s.type)&&el(),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return Xs(),zt(Fn),zt(Mn),Jc(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 5:return Zc(s),null;case 13:if(zt(jt),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Vs()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return zt(jt),null;case 4:return Xs(),null;case 10:return Xc(s.type._context),null;case 22:case 23:return Df(),null;case 24:return null;default:return null}}var xl=!1,An=!1,ux=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function Ys(n,s){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){$t(n,s,c)}else a.current=null}function xf(n,s,a){try{a()}catch(c){$t(n,s,c)}}var Xm=!1;function cx(n,s){if(Lc=za,n=wp(),Mc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var p=c.anchorOffset,S=c.focusNode;c=c.focusOffset;try{a.nodeType,S.nodeType}catch{a=null;break e}var A=0,H=-1,q=-1,fe=0,Te=0,be=n,we=null;t:for(;;){for(var He;be!==a||p!==0&&be.nodeType!==3||(H=A+p),be!==S||c!==0&&be.nodeType!==3||(q=A+c),be.nodeType===3&&(A+=be.nodeValue.length),(He=be.firstChild)!==null;)we=be,be=He;for(;;){if(be===n)break t;if(we===a&&++fe===p&&(H=A),we===S&&++Te===c&&(q=A),(He=be.nextSibling)!==null)break;be=we,we=be.parentNode}be=He}a=H===-1||q===-1?null:{start:H,end:q}}else a=null}a=a||{start:0,end:0}}else a=null;for(Dc={focusedElem:n,selectionRange:a},za=!1,Xe=s;Xe!==null;)if(s=Xe,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,Xe=n;else for(;Xe!==null;){s=Xe;try{var Ye=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(Ye!==null){var Ze=Ye.memoizedProps,Kt=Ye.memoizedState,ie=s.stateNode,Y=ie.getSnapshotBeforeUpdate(s.elementType===s.type?Ze:pi(s.type,Ze),Kt);ie.__reactInternalSnapshotBeforeUpdate=Y}break;case 3:var ae=s.stateNode.containerInfo;ae.nodeType===1?ae.textContent="":ae.nodeType===9&&ae.documentElement&&ae.removeChild(ae.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Pe){$t(s,s.return,Pe)}if(n=s.sibling,n!==null){n.return=s.return,Xe=n;break}Xe=s.return}return Ye=Xm,Xm=!1,Ye}function na(n,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var p=c=c.next;do{if((p.tag&n)===n){var S=p.destroy;p.destroy=void 0,S!==void 0&&xf(s,a,S)}p=p.next}while(p!==c)}}function Sl(n,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function Sf(n){var s=n.ref;if(s!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof s=="function"?s(n):s.current=n}}function qm(n){var s=n.alternate;s!==null&&(n.alternate=null,qm(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&(delete s[Ri],delete s[jo],delete s[Oc],delete s[Xy],delete s[qy])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Ym(n){return n.tag===5||n.tag===3||n.tag===4}function $m(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Ym(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ef(n,s,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(n,s):a.insertBefore(n,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(n,a)):(s=a,s.appendChild(n)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Qa));else if(c!==4&&(n=n.child,n!==null))for(Ef(n,s,a),n=n.sibling;n!==null;)Ef(n,s,a),n=n.sibling}function Mf(n,s,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?a.insertBefore(n,s):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Mf(n,s,a),n=n.sibling;n!==null;)Mf(n,s,a),n=n.sibling}var yn=null,mi=!1;function br(n,s,a){for(a=a.child;a!==null;)Km(n,s,a),a=a.sibling}function Km(n,s,a){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(ot,a)}catch{}switch(a.tag){case 5:An||Ys(a,s);case 6:var c=yn,p=mi;yn=null,br(n,s,a),yn=c,mi=p,yn!==null&&(mi?(n=yn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):yn.removeChild(a.stateNode));break;case 18:yn!==null&&(mi?(n=yn,a=a.stateNode,n.nodeType===8?Ic(n.parentNode,a):n.nodeType===1&&Ic(n,a),Uo(n)):Ic(yn,a.stateNode));break;case 4:c=yn,p=mi,yn=a.stateNode.containerInfo,mi=!0,br(n,s,a),yn=c,mi=p;break;case 0:case 11:case 14:case 15:if(!An&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){p=c=c.next;do{var S=p,A=S.destroy;S=S.tag,A!==void 0&&((S&2)!==0||(S&4)!==0)&&xf(a,s,A),p=p.next}while(p!==c)}br(n,s,a);break;case 1:if(!An&&(Ys(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(H){$t(a,s,H)}br(n,s,a);break;case 21:br(n,s,a);break;case 22:a.mode&1?(An=(c=An)||a.memoizedState!==null,br(n,s,a),An=c):br(n,s,a);break;default:br(n,s,a)}}function Zm(n){var s=n.updateQueue;if(s!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new ux),s.forEach(function(c){var p=yx.bind(null,n,c);a.has(c)||(a.add(c),c.then(p,p))})}}function gi(n,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var p=a[c];try{var S=n,A=s,H=A;e:for(;H!==null;){switch(H.tag){case 5:yn=H.stateNode,mi=!1;break e;case 3:yn=H.stateNode.containerInfo,mi=!0;break e;case 4:yn=H.stateNode.containerInfo,mi=!0;break e}H=H.return}if(yn===null)throw Error(t(160));Km(S,A,p),yn=null,mi=!1;var q=p.alternate;q!==null&&(q.return=null),p.return=null}catch(fe){$t(p,s,fe)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Qm(s,n),s=s.sibling}function Qm(n,s){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(gi(s,n),Li(n),c&4){try{na(3,n,n.return),Sl(3,n)}catch(Ze){$t(n,n.return,Ze)}try{na(5,n,n.return)}catch(Ze){$t(n,n.return,Ze)}}break;case 1:gi(s,n),Li(n),c&512&&a!==null&&Ys(a,a.return);break;case 5:if(gi(s,n),Li(n),c&512&&a!==null&&Ys(a,a.return),n.flags&32){var p=n.stateNode;try{ht(p,"")}catch(Ze){$t(n,n.return,Ze)}}if(c&4&&(p=n.stateNode,p!=null)){var S=n.memoizedProps,A=a!==null?a.memoizedProps:S,H=n.type,q=n.updateQueue;if(n.updateQueue=null,q!==null)try{H==="input"&&S.type==="radio"&&S.name!=null&&lt(p,S),ft(H,A);var fe=ft(H,S);for(A=0;A<q.length;A+=2){var Te=q[A],be=q[A+1];Te==="style"?st(p,be):Te==="dangerouslySetInnerHTML"?Ve(p,be):Te==="children"?ht(p,be):C(p,Te,be,fe)}switch(H){case"input":pt(p,S);break;case"textarea":se(p,S);break;case"select":var we=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!S.multiple;var He=S.value;He!=null?P(p,!!S.multiple,He,!1):we!==!!S.multiple&&(S.defaultValue!=null?P(p,!!S.multiple,S.defaultValue,!0):P(p,!!S.multiple,S.multiple?[]:"",!1))}p[jo]=S}catch(Ze){$t(n,n.return,Ze)}}break;case 6:if(gi(s,n),Li(n),c&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,S=n.memoizedProps;try{p.nodeValue=S}catch(Ze){$t(n,n.return,Ze)}}break;case 3:if(gi(s,n),Li(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Uo(s.containerInfo)}catch(Ze){$t(n,n.return,Ze)}break;case 4:gi(s,n),Li(n);break;case 13:gi(s,n),Li(n),p=n.child,p.flags&8192&&(S=p.memoizedState!==null,p.stateNode.isHidden=S,!S||p.alternate!==null&&p.alternate.memoizedState!==null||(Af=re())),c&4&&Zm(n);break;case 22:if(Te=a!==null&&a.memoizedState!==null,n.mode&1?(An=(fe=An)||Te,gi(s,n),An=fe):gi(s,n),Li(n),c&8192){if(fe=n.memoizedState!==null,(n.stateNode.isHidden=fe)&&!Te&&(n.mode&1)!==0)for(Xe=n,Te=n.child;Te!==null;){for(be=Xe=Te;Xe!==null;){switch(we=Xe,He=we.child,we.tag){case 0:case 11:case 14:case 15:na(4,we,we.return);break;case 1:Ys(we,we.return);var Ye=we.stateNode;if(typeof Ye.componentWillUnmount=="function"){c=we,a=we.return;try{s=c,Ye.props=s.memoizedProps,Ye.state=s.memoizedState,Ye.componentWillUnmount()}catch(Ze){$t(c,a,Ze)}}break;case 5:Ys(we,we.return);break;case 22:if(we.memoizedState!==null){tg(be);continue}}He!==null?(He.return=we,Xe=He):tg(be)}Te=Te.sibling}e:for(Te=null,be=n;;){if(be.tag===5){if(Te===null){Te=be;try{p=be.stateNode,fe?(S=p.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none"):(H=be.stateNode,q=be.memoizedProps.style,A=q!=null&&q.hasOwnProperty("display")?q.display:null,H.style.display=tt("display",A))}catch(Ze){$t(n,n.return,Ze)}}}else if(be.tag===6){if(Te===null)try{be.stateNode.nodeValue=fe?"":be.memoizedProps}catch(Ze){$t(n,n.return,Ze)}}else if((be.tag!==22&&be.tag!==23||be.memoizedState===null||be===n)&&be.child!==null){be.child.return=be,be=be.child;continue}if(be===n)break e;for(;be.sibling===null;){if(be.return===null||be.return===n)break e;Te===be&&(Te=null),be=be.return}Te===be&&(Te=null),be.sibling.return=be.return,be=be.sibling}}break;case 19:gi(s,n),Li(n),c&4&&Zm(n);break;case 21:break;default:gi(s,n),Li(n)}}function Li(n){var s=n.flags;if(s&2){try{e:{for(var a=n.return;a!==null;){if(Ym(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var p=c.stateNode;c.flags&32&&(ht(p,""),c.flags&=-33);var S=$m(n);Mf(n,S,p);break;case 3:case 4:var A=c.stateNode.containerInfo,H=$m(n);Ef(n,H,A);break;default:throw Error(t(161))}}catch(q){$t(n,n.return,q)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function fx(n,s,a){Xe=n,Jm(n)}function Jm(n,s,a){for(var c=(n.mode&1)!==0;Xe!==null;){var p=Xe,S=p.child;if(p.tag===22&&c){var A=p.memoizedState!==null||xl;if(!A){var H=p.alternate,q=H!==null&&H.memoizedState!==null||An;H=xl;var fe=An;if(xl=A,(An=q)&&!fe)for(Xe=p;Xe!==null;)A=Xe,q=A.child,A.tag===22&&A.memoizedState!==null?ng(p):q!==null?(q.return=A,Xe=q):ng(p);for(;S!==null;)Xe=S,Jm(S),S=S.sibling;Xe=p,xl=H,An=fe}eg(n)}else(p.subtreeFlags&8772)!==0&&S!==null?(S.return=p,Xe=S):eg(n)}}function eg(n){for(;Xe!==null;){var s=Xe;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:An||Sl(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!An)if(a===null)c.componentDidMount();else{var p=s.elementType===s.type?a.memoizedProps:pi(s.type,a.memoizedProps);c.componentDidUpdate(p,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var S=s.updateQueue;S!==null&&tm(s,S,c);break;case 3:var A=s.updateQueue;if(A!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}tm(s,A,a)}break;case 5:var H=s.stateNode;if(a===null&&s.flags&4){a=H;var q=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":q.autoFocus&&a.focus();break;case"img":q.src&&(a.src=q.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var fe=s.alternate;if(fe!==null){var Te=fe.memoizedState;if(Te!==null){var be=Te.dehydrated;be!==null&&Uo(be)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}An||s.flags&512&&Sf(s)}catch(we){$t(s,s.return,we)}}if(s===n){Xe=null;break}if(a=s.sibling,a!==null){a.return=s.return,Xe=a;break}Xe=s.return}}function tg(n){for(;Xe!==null;){var s=Xe;if(s===n){Xe=null;break}var a=s.sibling;if(a!==null){a.return=s.return,Xe=a;break}Xe=s.return}}function ng(n){for(;Xe!==null;){var s=Xe;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Sl(4,s)}catch(q){$t(s,a,q)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var p=s.return;try{c.componentDidMount()}catch(q){$t(s,p,q)}}var S=s.return;try{Sf(s)}catch(q){$t(s,S,q)}break;case 5:var A=s.return;try{Sf(s)}catch(q){$t(s,A,q)}}}catch(q){$t(s,s.return,q)}if(s===n){Xe=null;break}var H=s.sibling;if(H!==null){H.return=s.return,Xe=H;break}Xe=s.return}}var dx=Math.ceil,El=b.ReactCurrentDispatcher,wf=b.ReactCurrentOwner,oi=b.ReactCurrentBatchConfig,Rt=0,mn=null,nn=null,xn=0,Qn=0,$s=Er(0),ln=0,ia=null,rs=0,Ml=0,Tf=0,ra=null,zn=null,Af=0,Ks=1/0,$i=null,wl=!1,bf=null,Rr=null,Tl=!1,Cr=null,Al=0,sa=0,Rf=null,bl=-1,Rl=0;function Nn(){return(Rt&6)!==0?re():bl!==-1?bl:bl=re()}function Pr(n){return(n.mode&1)===0?1:(Rt&2)!==0&&xn!==0?xn&-xn:$y.transition!==null?(Rl===0&&(Rl=It()),Rl):(n=bt,n!==0||(n=window.event,n=n===void 0?16:rp(n.type)),n)}function vi(n,s,a,c){if(50<sa)throw sa=0,Rf=null,Error(t(185));dn(n,a,c),((Rt&2)===0||n!==mn)&&(n===mn&&((Rt&2)===0&&(Ml|=a),ln===4&&Lr(n,xn)),Hn(n,c),a===1&&Rt===0&&(s.mode&1)===0&&(Ks=re()+500,nl&&wr()))}function Hn(n,s){var a=n.callbackNode;Ln(n,s);var c=Sn(n,n===mn?xn:0);if(c===0)a!==null&&N(a),n.callbackNode=null,n.callbackPriority=0;else if(s=c&-c,n.callbackPriority!==s){if(a!=null&&N(a),s===1)n.tag===0?Yy(rg.bind(null,n)):Gp(rg.bind(null,n)),Wy(function(){(Rt&6)===0&&wr()}),a=null;else{switch(bi(c)){case 1:a=Re;break;case 4:a=Oe;break;case 16:a=ze;break;case 536870912:a=at;break;default:a=ze}a=dg(a,ig.bind(null,n))}n.callbackPriority=s,n.callbackNode=a}}function ig(n,s){if(bl=-1,Rl=0,(Rt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Zs()&&n.callbackNode!==a)return null;var c=Sn(n,n===mn?xn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||s)s=Cl(n,c);else{s=c;var p=Rt;Rt|=2;var S=og();(mn!==n||xn!==s)&&($i=null,Ks=re()+500,os(n,s));do try{mx();break}catch(H){sg(n,H)}while(!0);jc(),El.current=S,Rt=p,nn!==null?s=0:(mn=null,xn=0,s=ln)}if(s!==0){if(s===2&&(p=Hi(n),p!==0&&(c=p,s=Cf(n,p))),s===1)throw a=ia,os(n,0),Lr(n,c),Hn(n,re()),a;if(s===6)Lr(n,c);else{if(p=n.current.alternate,(c&30)===0&&!hx(p)&&(s=Cl(n,c),s===2&&(S=Hi(n),S!==0&&(c=S,s=Cf(n,S))),s===1))throw a=ia,os(n,0),Lr(n,c),Hn(n,re()),a;switch(n.finishedWork=p,n.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:as(n,zn,$i);break;case 3:if(Lr(n,c),(c&130023424)===c&&(s=Af+500-re(),10<s)){if(Sn(n,0)!==0)break;if(p=n.suspendedLanes,(p&c)!==c){Nn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Uc(as.bind(null,n,zn,$i),s);break}as(n,zn,$i);break;case 4:if(Lr(n,c),(c&4194240)===c)break;for(s=n.eventTimes,p=-1;0<c;){var A=31-mt(c);S=1<<A,A=s[A],A>p&&(p=A),c&=~S}if(c=p,c=re()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*dx(c/1960))-c,10<c){n.timeoutHandle=Uc(as.bind(null,n,zn,$i),c);break}as(n,zn,$i);break;case 5:as(n,zn,$i);break;default:throw Error(t(329))}}}return Hn(n,re()),n.callbackNode===a?ig.bind(null,n):null}function Cf(n,s){var a=ra;return n.current.memoizedState.isDehydrated&&(os(n,s).flags|=256),n=Cl(n,s),n!==2&&(s=zn,zn=a,s!==null&&Pf(s)),n}function Pf(n){zn===null?zn=n:zn.push.apply(zn,n)}function hx(n){for(var s=n;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var p=a[c],S=p.getSnapshot;p=p.value;try{if(!di(S(),p))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Lr(n,s){for(s&=~Tf,s&=~Ml,n.suspendedLanes|=s,n.pingedLanes&=~s,n=n.expirationTimes;0<s;){var a=31-mt(s),c=1<<a;n[a]=-1,s&=~c}}function rg(n){if((Rt&6)!==0)throw Error(t(327));Zs();var s=Sn(n,0);if((s&1)===0)return Hn(n,re()),null;var a=Cl(n,s);if(n.tag!==0&&a===2){var c=Hi(n);c!==0&&(s=c,a=Cf(n,c))}if(a===1)throw a=ia,os(n,0),Lr(n,s),Hn(n,re()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=s,as(n,zn,$i),Hn(n,re()),null}function Lf(n,s){var a=Rt;Rt|=1;try{return n(s)}finally{Rt=a,Rt===0&&(Ks=re()+500,nl&&wr())}}function ss(n){Cr!==null&&Cr.tag===0&&(Rt&6)===0&&Zs();var s=Rt;Rt|=1;var a=oi.transition,c=bt;try{if(oi.transition=null,bt=1,n)return n()}finally{bt=c,oi.transition=a,Rt=s,(Rt&6)===0&&wr()}}function Df(){Qn=$s.current,zt($s)}function os(n,s){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Gy(a)),nn!==null)for(a=nn.return;a!==null;){var c=a;switch(zc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&el();break;case 3:Xs(),zt(Fn),zt(Mn),Jc();break;case 5:Zc(c);break;case 4:Xs();break;case 13:zt(jt);break;case 19:zt(jt);break;case 10:Xc(c.type._context);break;case 22:case 23:Df()}a=a.return}if(mn=n,nn=n=Dr(n.current,null),xn=Qn=s,ln=0,ia=null,Tf=Ml=rs=0,zn=ra=null,ts!==null){for(s=0;s<ts.length;s++)if(a=ts[s],c=a.interleaved,c!==null){a.interleaved=null;var p=c.next,S=a.pending;if(S!==null){var A=S.next;S.next=p,c.next=A}a.pending=c}ts=null}return n}function sg(n,s){do{var a=nn;try{if(jc(),dl.current=gl,hl){for(var c=Xt.memoizedState;c!==null;){var p=c.queue;p!==null&&(p.pending=null),c=c.next}hl=!1}if(is=0,pn=an=Xt=null,Zo=!1,Qo=0,wf.current=null,a===null||a.return===null){ln=1,ia=s,nn=null;break}e:{var S=n,A=a.return,H=a,q=s;if(s=xn,H.flags|=32768,q!==null&&typeof q=="object"&&typeof q.then=="function"){var fe=q,Te=H,be=Te.tag;if((Te.mode&1)===0&&(be===0||be===11||be===15)){var we=Te.alternate;we?(Te.updateQueue=we.updateQueue,Te.memoizedState=we.memoizedState,Te.lanes=we.lanes):(Te.updateQueue=null,Te.memoizedState=null)}var He=Pm(A);if(He!==null){He.flags&=-257,Lm(He,A,H,S,s),He.mode&1&&Cm(S,fe,s),s=He,q=fe;var Ye=s.updateQueue;if(Ye===null){var Ze=new Set;Ze.add(q),s.updateQueue=Ze}else Ye.add(q);break e}else{if((s&1)===0){Cm(S,fe,s),Nf();break e}q=Error(t(426))}}else if(Gt&&H.mode&1){var Kt=Pm(A);if(Kt!==null){(Kt.flags&65536)===0&&(Kt.flags|=256),Lm(Kt,A,H,S,s),Gc(qs(q,H));break e}}S=q=qs(q,H),ln!==4&&(ln=2),ra===null?ra=[S]:ra.push(S),S=A;do{switch(S.tag){case 3:S.flags|=65536,s&=-s,S.lanes|=s;var ie=bm(S,q,s);em(S,ie);break e;case 1:H=q;var Y=S.type,ae=S.stateNode;if((S.flags&128)===0&&(typeof Y.getDerivedStateFromError=="function"||ae!==null&&typeof ae.componentDidCatch=="function"&&(Rr===null||!Rr.has(ae)))){S.flags|=65536,s&=-s,S.lanes|=s;var Pe=Rm(S,H,s);em(S,Pe);break e}}S=S.return}while(S!==null)}lg(a)}catch(Qe){s=Qe,nn===a&&a!==null&&(nn=a=a.return);continue}break}while(!0)}function og(){var n=El.current;return El.current=gl,n===null?gl:n}function Nf(){(ln===0||ln===3||ln===2)&&(ln=4),mn===null||(rs&268435455)===0&&(Ml&268435455)===0||Lr(mn,xn)}function Cl(n,s){var a=Rt;Rt|=2;var c=og();(mn!==n||xn!==s)&&($i=null,os(n,s));do try{px();break}catch(p){sg(n,p)}while(!0);if(jc(),Rt=a,El.current=c,nn!==null)throw Error(t(261));return mn=null,xn=0,ln}function px(){for(;nn!==null;)ag(nn)}function mx(){for(;nn!==null&&!Q();)ag(nn)}function ag(n){var s=fg(n.alternate,n,Qn);n.memoizedProps=n.pendingProps,s===null?lg(n):nn=s,wf.current=null}function lg(n){var s=n;do{var a=s.alternate;if(n=s.return,(s.flags&32768)===0){if(a=ax(a,s,Qn),a!==null){nn=a;return}}else{if(a=lx(a,s),a!==null){a.flags&=32767,nn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ln=6,nn=null;return}}if(s=s.sibling,s!==null){nn=s;return}nn=s=n}while(s!==null);ln===0&&(ln=5)}function as(n,s,a){var c=bt,p=oi.transition;try{oi.transition=null,bt=1,gx(n,s,a,c)}finally{oi.transition=p,bt=c}return null}function gx(n,s,a,c){do Zs();while(Cr!==null);if((Rt&6)!==0)throw Error(t(327));a=n.finishedWork;var p=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var S=a.lanes|a.childLanes;if(_n(n,S),n===mn&&(nn=mn=null,xn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Tl||(Tl=!0,dg(ze,function(){return Zs(),null})),S=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||S){S=oi.transition,oi.transition=null;var A=bt;bt=1;var H=Rt;Rt|=4,wf.current=null,cx(n,a),Qm(a,n),Oy(Dc),za=!!Lc,Dc=Lc=null,n.current=a,fx(a),ue(),Rt=H,bt=A,oi.transition=S}else n.current=a;if(Tl&&(Tl=!1,Cr=n,Al=p),S=n.pendingLanes,S===0&&(Rr=null),Mt(a.stateNode),Hn(n,re()),s!==null)for(c=n.onRecoverableError,a=0;a<s.length;a++)p=s[a],c(p.value,{componentStack:p.stack,digest:p.digest});if(wl)throw wl=!1,n=bf,bf=null,n;return(Al&1)!==0&&n.tag!==0&&Zs(),S=n.pendingLanes,(S&1)!==0?n===Rf?sa++:(sa=0,Rf=n):sa=0,wr(),null}function Zs(){if(Cr!==null){var n=bi(Al),s=oi.transition,a=bt;try{if(oi.transition=null,bt=16>n?16:n,Cr===null)var c=!1;else{if(n=Cr,Cr=null,Al=0,(Rt&6)!==0)throw Error(t(331));var p=Rt;for(Rt|=4,Xe=n.current;Xe!==null;){var S=Xe,A=S.child;if((Xe.flags&16)!==0){var H=S.deletions;if(H!==null){for(var q=0;q<H.length;q++){var fe=H[q];for(Xe=fe;Xe!==null;){var Te=Xe;switch(Te.tag){case 0:case 11:case 15:na(8,Te,S)}var be=Te.child;if(be!==null)be.return=Te,Xe=be;else for(;Xe!==null;){Te=Xe;var we=Te.sibling,He=Te.return;if(qm(Te),Te===fe){Xe=null;break}if(we!==null){we.return=He,Xe=we;break}Xe=He}}}var Ye=S.alternate;if(Ye!==null){var Ze=Ye.child;if(Ze!==null){Ye.child=null;do{var Kt=Ze.sibling;Ze.sibling=null,Ze=Kt}while(Ze!==null)}}Xe=S}}if((S.subtreeFlags&2064)!==0&&A!==null)A.return=S,Xe=A;else e:for(;Xe!==null;){if(S=Xe,(S.flags&2048)!==0)switch(S.tag){case 0:case 11:case 15:na(9,S,S.return)}var ie=S.sibling;if(ie!==null){ie.return=S.return,Xe=ie;break e}Xe=S.return}}var Y=n.current;for(Xe=Y;Xe!==null;){A=Xe;var ae=A.child;if((A.subtreeFlags&2064)!==0&&ae!==null)ae.return=A,Xe=ae;else e:for(A=Y;Xe!==null;){if(H=Xe,(H.flags&2048)!==0)try{switch(H.tag){case 0:case 11:case 15:Sl(9,H)}}catch(Qe){$t(H,H.return,Qe)}if(H===A){Xe=null;break e}var Pe=H.sibling;if(Pe!==null){Pe.return=H.return,Xe=Pe;break e}Xe=H.return}}if(Rt=p,wr(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(ot,n)}catch{}c=!0}return c}finally{bt=a,oi.transition=s}}return!1}function ug(n,s,a){s=qs(a,s),s=bm(n,s,1),n=Ar(n,s,1),s=Nn(),n!==null&&(dn(n,1,s),Hn(n,s))}function $t(n,s,a){if(n.tag===3)ug(n,n,a);else for(;s!==null;){if(s.tag===3){ug(s,n,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Rr===null||!Rr.has(c))){n=qs(a,n),n=Rm(s,n,1),s=Ar(s,n,1),n=Nn(),s!==null&&(dn(s,1,n),Hn(s,n));break}}s=s.return}}function vx(n,s,a){var c=n.pingCache;c!==null&&c.delete(s),s=Nn(),n.pingedLanes|=n.suspendedLanes&a,mn===n&&(xn&a)===a&&(ln===4||ln===3&&(xn&130023424)===xn&&500>re()-Af?os(n,0):Tf|=a),Hn(n,s)}function cg(n,s){s===0&&((n.mode&1)===0?s=1:(s=Yt,Yt<<=1,(Yt&130023424)===0&&(Yt=4194304)));var a=Nn();n=Xi(n,s),n!==null&&(dn(n,s,a),Hn(n,a))}function _x(n){var s=n.memoizedState,a=0;s!==null&&(a=s.retryLane),cg(n,a)}function yx(n,s){var a=0;switch(n.tag){case 13:var c=n.stateNode,p=n.memoizedState;p!==null&&(a=p.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),cg(n,a)}var fg;fg=function(n,s,a){if(n!==null)if(n.memoizedProps!==s.pendingProps||Fn.current)Bn=!0;else{if((n.lanes&a)===0&&(s.flags&128)===0)return Bn=!1,ox(n,s,a);Bn=(n.flags&131072)!==0}else Bn=!1,Gt&&(s.flags&1048576)!==0&&Wp(s,rl,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;yl(n,s),n=s.pendingProps;var p=Bs(s,Mn.current);js(s,a),p=nf(null,s,c,n,p,a);var S=rf();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,kn(c)?(S=!0,tl(s)):S=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,$c(s),p.updater=vl,s.stateNode=p,p._reactInternals=s,cf(s,c,n,a),s=pf(null,s,c,!0,S,a)):(s.tag=0,Gt&&S&&Bc(s),Dn(null,s,p,a),s=s.child),s;case 16:c=s.elementType;e:{switch(yl(n,s),n=s.pendingProps,p=c._init,c=p(c._payload),s.type=c,p=s.tag=Sx(c),n=pi(c,n),p){case 0:s=hf(null,s,c,n,a);break e;case 1:s=Fm(null,s,c,n,a);break e;case 11:s=Dm(null,s,c,n,a);break e;case 14:s=Nm(null,s,c,pi(c.type,n),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:pi(c,p),hf(n,s,c,p,a);case 1:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:pi(c,p),Fm(n,s,c,p,a);case 3:e:{if(km(s),n===null)throw Error(t(387));c=s.pendingProps,S=s.memoizedState,p=S.element,Jp(n,s),cl(s,c,null,a);var A=s.memoizedState;if(c=A.element,S.isDehydrated)if(S={element:c,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},s.updateQueue.baseState=S,s.memoizedState=S,s.flags&256){p=qs(Error(t(423)),s),s=Bm(n,s,c,a,p);break e}else if(c!==p){p=qs(Error(t(424)),s),s=Bm(n,s,c,a,p);break e}else for(Zn=Sr(s.stateNode.containerInfo.firstChild),Kn=s,Gt=!0,hi=null,a=Zp(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Vs(),c===p){s=Yi(n,s,a);break e}Dn(n,s,c,a)}s=s.child}return s;case 5:return nm(s),n===null&&Vc(s),c=s.type,p=s.pendingProps,S=n!==null?n.memoizedProps:null,A=p.children,Nc(c,p)?A=null:S!==null&&Nc(c,S)&&(s.flags|=32),Om(n,s),Dn(n,s,A,a),s.child;case 6:return n===null&&Vc(s),null;case 13:return zm(n,s,a);case 4:return Kc(s,s.stateNode.containerInfo),c=s.pendingProps,n===null?s.child=Gs(s,null,c,a):Dn(n,s,c,a),s.child;case 11:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:pi(c,p),Dm(n,s,c,p,a);case 7:return Dn(n,s,s.pendingProps,a),s.child;case 8:return Dn(n,s,s.pendingProps.children,a),s.child;case 12:return Dn(n,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,p=s.pendingProps,S=s.memoizedProps,A=p.value,Ft(al,c._currentValue),c._currentValue=A,S!==null)if(di(S.value,A)){if(S.children===p.children&&!Fn.current){s=Yi(n,s,a);break e}}else for(S=s.child,S!==null&&(S.return=s);S!==null;){var H=S.dependencies;if(H!==null){A=S.child;for(var q=H.firstContext;q!==null;){if(q.context===c){if(S.tag===1){q=qi(-1,a&-a),q.tag=2;var fe=S.updateQueue;if(fe!==null){fe=fe.shared;var Te=fe.pending;Te===null?q.next=q:(q.next=Te.next,Te.next=q),fe.pending=q}}S.lanes|=a,q=S.alternate,q!==null&&(q.lanes|=a),qc(S.return,a,s),H.lanes|=a;break}q=q.next}}else if(S.tag===10)A=S.type===s.type?null:S.child;else if(S.tag===18){if(A=S.return,A===null)throw Error(t(341));A.lanes|=a,H=A.alternate,H!==null&&(H.lanes|=a),qc(A,a,s),A=S.sibling}else A=S.child;if(A!==null)A.return=S;else for(A=S;A!==null;){if(A===s){A=null;break}if(S=A.sibling,S!==null){S.return=A.return,A=S;break}A=A.return}S=A}Dn(n,s,p.children,a),s=s.child}return s;case 9:return p=s.type,c=s.pendingProps.children,js(s,a),p=ri(p),c=c(p),s.flags|=1,Dn(n,s,c,a),s.child;case 14:return c=s.type,p=pi(c,s.pendingProps),p=pi(c.type,p),Nm(n,s,c,p,a);case 15:return Um(n,s,s.type,s.pendingProps,a);case 17:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:pi(c,p),yl(n,s),s.tag=1,kn(c)?(n=!0,tl(s)):n=!1,js(s,a),Tm(s,c,p),cf(s,c,p,a),pf(null,s,c,!0,n,a);case 19:return Vm(n,s,a);case 22:return Im(n,s,a)}throw Error(t(156,s.tag))};function dg(n,s){return Fa(n,s)}function xx(n,s,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(n,s,a,c){return new xx(n,s,a,c)}function Uf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Sx(n){if(typeof n=="function")return Uf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===D)return 11;if(n===le)return 14}return 2}function Dr(n,s){var a=n.alternate;return a===null?(a=ai(n.tag,s,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=s,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,s=n.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Pl(n,s,a,c,p,S){var A=2;if(c=n,typeof n=="function")Uf(n)&&(A=1);else if(typeof n=="string")A=5;else e:switch(n){case O:return ls(a.children,p,S,s);case V:A=8,p|=8;break;case L:return n=ai(12,a,s,p|2),n.elementType=L,n.lanes=S,n;case B:return n=ai(13,a,s,p),n.elementType=B,n.lanes=S,n;case z:return n=ai(19,a,s,p),n.elementType=z,n.lanes=S,n;case he:return Ll(a,p,S,s);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case T:A=10;break e;case U:A=9;break e;case D:A=11;break e;case le:A=14;break e;case ne:A=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return s=ai(A,a,s,p),s.elementType=n,s.type=c,s.lanes=S,s}function ls(n,s,a,c){return n=ai(7,n,c,s),n.lanes=a,n}function Ll(n,s,a,c){return n=ai(22,n,c,s),n.elementType=he,n.lanes=a,n.stateNode={isHidden:!1},n}function If(n,s,a){return n=ai(6,n,null,s),n.lanes=a,n}function Of(n,s,a){return s=ai(4,n.children!==null?n.children:[],n.key,s),s.lanes=a,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}function Ex(n,s,a,c,p){this.tag=s,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=En(0),this.expirationTimes=En(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=En(0),this.identifierPrefix=c,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Ff(n,s,a,c,p,S,A,H,q){return n=new Ex(n,s,a,H,q),s===1?(s=1,S===!0&&(s|=8)):s=0,S=ai(3,null,null,s),n.current=S,S.stateNode=n,S.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},$c(S),n}function Mx(n,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:c==null?null:""+c,children:n,containerInfo:s,implementation:a}}function hg(n){if(!n)return Mr;n=n._reactInternals;e:{if(Ai(n)!==n||n.tag!==1)throw Error(t(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(kn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(kn(a))return Hp(n,a,s)}return s}function pg(n,s,a,c,p,S,A,H,q){return n=Ff(a,c,!0,n,p,S,A,H,q),n.context=hg(null),a=n.current,c=Nn(),p=Pr(a),S=qi(c,p),S.callback=s??null,Ar(a,S,p),n.current.lanes=p,dn(n,p,c),Hn(n,c),n}function Dl(n,s,a,c){var p=s.current,S=Nn(),A=Pr(p);return a=hg(a),s.context===null?s.context=a:s.pendingContext=a,s=qi(S,A),s.payload={element:n},c=c===void 0?null:c,c!==null&&(s.callback=c),n=Ar(p,s,A),n!==null&&(vi(n,p,A,S),ul(n,p,A)),A}function Nl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function mg(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<s?a:s}}function kf(n,s){mg(n,s),(n=n.alternate)&&mg(n,s)}function wx(){return null}var gg=typeof reportError=="function"?reportError:function(n){console.error(n)};function Bf(n){this._internalRoot=n}Ul.prototype.render=Bf.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(t(409));Dl(n,s,null,null)},Ul.prototype.unmount=Bf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;ss(function(){Dl(null,n,null,null)}),s[Vi]=null}};function Ul(n){this._internalRoot=n}Ul.prototype.unstable_scheduleHydration=function(n){if(n){var s=Jh();n={blockedOn:null,target:n,priority:s};for(var a=0;a<_r.length&&s!==0&&s<_r[a].priority;a++);_r.splice(a,0,n),a===0&&np(n)}};function zf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Il(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function vg(){}function Tx(n,s,a,c,p){if(p){if(typeof c=="function"){var S=c;c=function(){var fe=Nl(A);S.call(fe)}}var A=pg(s,c,n,0,null,!1,!1,"",vg);return n._reactRootContainer=A,n[Vi]=A.current,Go(n.nodeType===8?n.parentNode:n),ss(),A}for(;p=n.lastChild;)n.removeChild(p);if(typeof c=="function"){var H=c;c=function(){var fe=Nl(q);H.call(fe)}}var q=Ff(n,0,!1,null,null,!1,!1,"",vg);return n._reactRootContainer=q,n[Vi]=q.current,Go(n.nodeType===8?n.parentNode:n),ss(function(){Dl(s,q,a,c)}),q}function Ol(n,s,a,c,p){var S=a._reactRootContainer;if(S){var A=S;if(typeof p=="function"){var H=p;p=function(){var q=Nl(A);H.call(q)}}Dl(s,A,n,p)}else A=Tx(a,s,n,p,c);return Nl(A)}Zh=function(n){switch(n.tag){case 3:var s=n.stateNode;if(s.current.memoizedState.isDehydrated){var a=Et(s.pendingLanes);a!==0&&(hn(s,a|1),Hn(s,re()),(Rt&6)===0&&(Ks=re()+500,wr()))}break;case 13:ss(function(){var c=Xi(n,1);if(c!==null){var p=Nn();vi(c,n,1,p)}}),kf(n,1)}},cc=function(n){if(n.tag===13){var s=Xi(n,134217728);if(s!==null){var a=Nn();vi(s,n,134217728,a)}kf(n,134217728)}},Qh=function(n){if(n.tag===13){var s=Pr(n),a=Xi(n,s);if(a!==null){var c=Nn();vi(a,n,s,c)}kf(n,s)}},Jh=function(){return bt},ep=function(n,s){var a=bt;try{return bt=n,s()}finally{bt=a}},Ie=function(n,s,a){switch(s){case"input":if(pt(n,a),s=a.name,a.type==="radio"&&s!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==n&&c.form===n.form){var p=Ja(c);if(!p)throw Error(t(90));_t(c),pt(c,p)}}}break;case"textarea":se(n,a);break;case"select":s=a.value,s!=null&&P(n,!!a.multiple,s,!1)}},kt=Lf,on=ss;var Ax={usingClientEntryPoint:!1,Events:[Xo,Fs,Ja,ke,dt,Lf]},oa={findFiberByHostInstance:Zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bx={bundleType:oa.bundleType,version:oa.version,rendererPackageName:oa.rendererPackageName,rendererConfig:oa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ia(n),n===null?null:n.stateNode},findFiberByHostInstance:oa.findFiberByHostInstance||wx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fl.isDisabled&&Fl.supportsFiber)try{ot=Fl.inject(bx),Ke=Fl}catch{}}return Vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ax,Vn.createPortal=function(n,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zf(s))throw Error(t(200));return Mx(n,s,null,a)},Vn.createRoot=function(n,s){if(!zf(n))throw Error(t(299));var a=!1,c="",p=gg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=Ff(n,1,!1,null,null,a,!1,c,p),n[Vi]=s.current,Go(n.nodeType===8?n.parentNode:n),new Bf(s)},Vn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ia(s),n=n===null?null:n.stateNode,n},Vn.flushSync=function(n){return ss(n)},Vn.hydrate=function(n,s,a){if(!Il(s))throw Error(t(200));return Ol(null,n,s,!0,a)},Vn.hydrateRoot=function(n,s,a){if(!zf(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,p=!1,S="",A=gg;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(S=a.identifierPrefix),a.onRecoverableError!==void 0&&(A=a.onRecoverableError)),s=pg(s,null,n,1,a??null,p,!1,S,A),n[Vi]=s.current,Go(n),c)for(n=0;n<c.length;n++)a=c[n],p=a._getVersion,p=p(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,p]:s.mutableSourceEagerHydrationData.push(a,p);return new Ul(s)},Vn.render=function(n,s,a){if(!Il(s))throw Error(t(200));return Ol(null,n,s,!1,a)},Vn.unmountComponentAtNode=function(n){if(!Il(n))throw Error(t(40));return n._reactRootContainer?(ss(function(){Ol(null,null,n,!1,function(){n._reactRootContainer=null,n[Vi]=null})}),!0):!1},Vn.unstable_batchedUpdates=Lf,Vn.unstable_renderSubtreeIntoContainer=function(n,s,a,c){if(!Il(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Ol(n,s,a,!1,c)},Vn.version="18.3.1-next-f1338f8080-20240426",Vn}var Tg;function Yu(){if(Tg)return Gf.exports;Tg=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Gf.exports=kx(),Gf.exports}var Ag;function Bx(){if(Ag)return Bl;Ag=1;var i=Yu();return Bl.createRoot=i.createRoot,Bl.hydrateRoot=i.hydrateRoot,Bl}var zx=Bx();const Hx=Ph(zx);Yu();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Iu(){return Iu=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},Iu.apply(this,arguments)}var ys;(function(i){i.Pop="POP",i.Push="PUSH",i.Replace="REPLACE"})(ys||(ys={}));const bg="popstate";function Vx(i){i===void 0&&(i={});function e(r,o){let{pathname:l,search:u,hash:f}=r.location;return Ud("",{pathname:l,search:u,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(r,o){return typeof o=="string"?o:b_(o)}return Wx(e,t,null,i)}function A_(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function Gx(){return Math.random().toString(36).substr(2,8)}function Rg(i,e){return{usr:i.state,key:i.key,idx:e}}function Ud(i,e,t,r){return t===void 0&&(t=null),Iu({pathname:typeof i=="string"?i:i.pathname,search:"",hash:""},typeof e=="string"?R_(e):e,{state:t,key:e&&e.key||r||Gx()})}function b_(i){let{pathname:e="/",search:t="",hash:r=""}=i;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function R_(i){let e={};if(i){let t=i.indexOf("#");t>=0&&(e.hash=i.substr(t),i=i.substr(0,t));let r=i.indexOf("?");r>=0&&(e.search=i.substr(r),i=i.substr(0,r)),i&&(e.pathname=i)}return e}function Wx(i,e,t,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:l=!1}=r,u=o.history,f=ys.Pop,d=null,h=m();h==null&&(h=0,u.replaceState(Iu({},u.state,{idx:h}),""));function m(){return(u.state||{idx:null}).idx}function g(){f=ys.Pop;let v=m(),_=v==null?null:v-h;h=v,d&&d({action:f,location:M.location,delta:_})}function y(v,_){f=ys.Push;let R=Ud(M.location,v,_);h=m()+1;let C=Rg(R,h),b=M.createHref(R);try{u.pushState(C,"",b)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;o.location.assign(b)}l&&d&&d({action:f,location:M.location,delta:1})}function x(v,_){f=ys.Replace;let R=Ud(M.location,v,_);h=m();let C=Rg(R,h),b=M.createHref(R);u.replaceState(C,"",b),l&&d&&d({action:f,location:M.location,delta:0})}function E(v){let _=o.location.origin!=="null"?o.location.origin:o.location.href,R=typeof v=="string"?v:b_(v);return R=R.replace(/ $/,"%20"),A_(_,"No window.location.(origin|href) available to create URL for href: "+R),new URL(R,_)}let M={get action(){return f},get location(){return i(o,u)},listen(v){if(d)throw new Error("A history only accepts one active listener");return o.addEventListener(bg,g),d=v,()=>{o.removeEventListener(bg,g),d=null}},createHref(v){return e(o,v)},createURL:E,encodeLocation(v){let _=E(v);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:y,replace:x,go(v){return u.go(v)}};return M}var Cg;(function(i){i.data="data",i.deferred="deferred",i.redirect="redirect",i.error="error"})(Cg||(Cg={}));function jx(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=i.charAt(t);return r&&r!=="/"?null:i.slice(t)||"/"}const C_=["post","put","patch","delete"];new Set(C_);const Xx=["get",...C_];new Set(Xx);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Id(){return Id=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},Id.apply(this,arguments)}const qx=nt.createContext(null),P_=nt.createContext(null);function Yx(){return nt.useContext(P_)!=null}function $x(i,e){i==null||i.v7_startTransition,i==null||i.v7_relativeSplatPath}function Kx(i){let{basename:e="/",children:t=null,location:r,navigationType:o=ys.Pop,navigator:l,static:u=!1,future:f}=i;Yx()&&A_(!1);let d=e.replace(/^\/*/,"/"),h=nt.useMemo(()=>({basename:d,navigator:l,static:u,future:Id({v7_relativeSplatPath:!1},f)}),[d,f,l,u]);typeof r=="string"&&(r=R_(r));let{pathname:m="/",search:g="",hash:y="",state:x=null,key:E="default"}=r,M=nt.useMemo(()=>{let v=jx(m,d);return v==null?null:{location:{pathname:v,search:g,hash:y,state:x,key:E},navigationType:o}},[d,m,g,y,x,E,o]);return M==null?null:nt.createElement(qx.Provider,{value:h},nt.createElement(P_.Provider,{children:t,value:M}))}new Promise(()=>{});/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Zx="6";try{window.__reactRouterVersion=Zx}catch{}const Qx="startTransition",Pg=Ix[Qx];function Jx(i){let{basename:e,children:t,future:r,window:o}=i,l=nt.useRef();l.current==null&&(l.current=Vx({window:o,v5Compat:!0}));let u=l.current,[f,d]=nt.useState({action:u.action,location:u.location}),{v7_startTransition:h}=r||{},m=nt.useCallback(g=>{h&&Pg?Pg(()=>d(g)):d(g)},[d,h]);return nt.useLayoutEffect(()=>u.listen(m),[u,m]),nt.useEffect(()=>$x(r),[r]),nt.createElement(Kx,{basename:e,children:t,location:f.location,navigationType:f.action,navigator:u,future:r})}var Lg;(function(i){i.UseScrollRestoration="useScrollRestoration",i.UseSubmit="useSubmit",i.UseSubmitFetcher="useSubmitFetcher",i.UseFetcher="useFetcher",i.useViewTransitionState="useViewTransitionState"})(Lg||(Lg={}));var Dg;(function(i){i.UseFetcher="useFetcher",i.UseFetchers="useFetchers",i.UseScrollRestoration="useScrollRestoration"})(Dg||(Dg={}));var Wt={},zl={},Hl={},Vl={},Xf,Ng;function eS(){if(Ng)return Xf;Ng=1;var i="Expected a function",e=NaN,t="[object Symbol]",r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,d=typeof kl=="object"&&kl&&kl.Object===Object&&kl,h=typeof self=="object"&&self&&self.Object===Object&&self,m=d||h||Function("return this")(),g=Object.prototype,y=g.toString,x=Math.max,E=Math.min,M=function(){return m.Date.now()};function v(I,O,V){var L,T,U,D,B,z,le=0,ne=!1,he=!1,X=!0;if(typeof I!="function")throw new TypeError(i);O=F(O)||0,R(V)&&(ne=!!V.leading,he="maxWait"in V,U=he?x(F(V.maxWait)||0,O):U,X="trailing"in V?!!V.trailing:X);function pe(Se){var Le=L,Ne=T;return L=T=void 0,le=Se,D=I.apply(Ne,Le),D}function ce(Se){return le=Se,B=setTimeout(Ce,O),ne?pe(Se):D}function W(Se){var Le=Se-z,Ne=Se-le,ct=O-Le;return he?E(ct,U-Ne):ct}function oe(Se){var Le=Se-z,Ne=Se-le;return z===void 0||Le>=O||Le<0||he&&Ne>=U}function Ce(){var Se=M();if(oe(Se))return te(Se);B=setTimeout(Ce,W(Se))}function te(Se){return B=void 0,X&&L?pe(Se):(L=T=void 0,D)}function ye(){B!==void 0&&clearTimeout(B),le=0,L=z=T=B=void 0}function Me(){return B===void 0?D:te(M())}function xe(){var Se=M(),Le=oe(Se);if(L=arguments,T=this,z=Se,Le){if(B===void 0)return ce(z);if(he)return B=setTimeout(Ce,O),pe(z)}return B===void 0&&(B=setTimeout(Ce,O)),D}return xe.cancel=ye,xe.flush=Me,xe}function _(I,O,V){var L=!0,T=!0;if(typeof I!="function")throw new TypeError(i);return R(V)&&(L="leading"in V?!!V.leading:L,T="trailing"in V?!!V.trailing:T),v(I,O,{leading:L,maxWait:O,trailing:T})}function R(I){var O=typeof I;return!!I&&(O=="object"||O=="function")}function C(I){return!!I&&typeof I=="object"}function b(I){return typeof I=="symbol"||C(I)&&y.call(I)==t}function F(I){if(typeof I=="number")return I;if(b(I))return e;if(R(I)){var O=typeof I.valueOf=="function"?I.valueOf():I;I=R(O)?O+"":O}if(typeof I!="string")return I===0?I:+I;I=I.replace(r,"");var V=l.test(I);return V||u.test(I)?f(I.slice(2),V?2:8):o.test(I)?e:+I}return Xf=_,Xf}var la={},Ug;function Lh(){if(Ug)return la;Ug=1,Object.defineProperty(la,"__esModule",{value:!0}),la.addPassiveEventListener=function(t,r,o){var l=o.name;l||(l=r,console.warn("Listener must be a named function.")),i.has(r)||i.set(r,new Set);var u=i.get(r);if(!u.has(l)){var f=function(){var d=!1;try{var h=Object.defineProperty({},"passive",{get:function(){d=!0}});window.addEventListener("test",null,h)}catch{}return d}();t.addEventListener(r,o,f?{passive:!0}:!1),u.add(l)}},la.removePassiveEventListener=function(t,r,o){t.removeEventListener(r,o),i.get(r).delete(o.name||r)};var i=new Map;return la}var Ig;function Dh(){if(Ig)return Vl;Ig=1,Object.defineProperty(Vl,"__esModule",{value:!0});var i=eS(),e=r(i),t=Lh();function r(u){return u&&u.__esModule?u:{default:u}}var o=function(f){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,e.default)(f,d)},l={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(f,d){if(f){var h=o(function(m){l.scrollHandler(f)},d);return l.scrollSpyContainers.push(f),(0,t.addPassiveEventListener)(f,"scroll",h),function(){(0,t.removePassiveEventListener)(f,"scroll",h),l.scrollSpyContainers.splice(l.scrollSpyContainers.indexOf(f),1)}}return function(){}},isMounted:function(f){return l.scrollSpyContainers.indexOf(f)!==-1},currentPositionX:function(f){if(f===document){var d=window.scrollY!==void 0,h=(document.compatMode||"")==="CSS1Compat";return d?window.scrollX:h?document.documentElement.scrollLeft:document.body.scrollLeft}else return f.scrollLeft},currentPositionY:function(f){if(f===document){var d=window.scrollX!==void 0,h=(document.compatMode||"")==="CSS1Compat";return d?window.scrollY:h?document.documentElement.scrollTop:document.body.scrollTop}else return f.scrollTop},scrollHandler:function(f){var d=l.scrollSpyContainers[l.scrollSpyContainers.indexOf(f)].spyCallbacks||[];d.forEach(function(h){return h(l.currentPositionX(f),l.currentPositionY(f))})},addStateHandler:function(f){l.spySetState.push(f)},addSpyHandler:function(f,d){var h=l.scrollSpyContainers[l.scrollSpyContainers.indexOf(d)];h.spyCallbacks||(h.spyCallbacks=[]),h.spyCallbacks.push(f)},updateStates:function(){l.spySetState.forEach(function(f){return f()})},unmount:function(f,d){l.scrollSpyContainers.forEach(function(h){return h.spyCallbacks&&h.spyCallbacks.length&&h.spyCallbacks.indexOf(d)>-1&&h.spyCallbacks.splice(h.spyCallbacks.indexOf(d),1)}),l.spySetState&&l.spySetState.length&&l.spySetState.indexOf(f)>-1&&l.spySetState.splice(l.spySetState.indexOf(f),1),document.removeEventListener("scroll",l.scrollHandler)},update:function(){return l.scrollSpyContainers.forEach(function(f){return l.scrollHandler(f)})}};return Vl.default=l,Vl}var Gl={},Wl={},Og;function $u(){if(Og)return Wl;Og=1,Object.defineProperty(Wl,"__esModule",{value:!0});var i=function(f,d){var h=f.indexOf("#")===0?f.substring(1):f,m=h?"#"+h:"",g=window&&window.location,y=m?g.pathname+g.search+m:g.pathname+g.search;d?history.pushState(history.state,"",y):history.replaceState(history.state,"",y)},e=function(){return window.location.hash.replace(/^#/,"")},t=function(f){return function(d){return f.contains?f!=d&&f.contains(d):!!(f.compareDocumentPosition(d)&16)}},r=function(f){return getComputedStyle(f).position!=="static"},o=function(f,d){for(var h=f.offsetTop,m=f.offsetParent;m&&!d(m);)h+=m.offsetTop,m=m.offsetParent;return{offsetTop:h,offsetParent:m}},l=function(f,d,h){if(h)return f===document?d.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(f).position!=="static"?d.offsetLeft:d.offsetLeft-f.offsetLeft;if(f===document)return d.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(r(f)){if(d.offsetParent!==f){var m=function(v){return v===f||v===document},g=o(d,m),y=g.offsetTop,x=g.offsetParent;if(x!==f)throw new Error("Seems containerElement is not an ancestor of the Element");return y}return d.offsetTop}if(d.offsetParent===f.offsetParent)return d.offsetTop-f.offsetTop;var E=function(v){return v===document};return o(d,E).offsetTop-o(f,E).offsetTop};return Wl.default={updateHash:i,getHash:e,filterElementInContainer:t,scrollOffset:l},Wl}var jl={},Xl={},Fg;function tS(){return Fg||(Fg=1,Object.defineProperty(Xl,"__esModule",{value:!0}),Xl.default={defaultEasing:function(e){return e<.5?Math.pow(e*2,2)/2:1-Math.pow((1-e)*2,2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:-1+(4-2*e)*e},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}}),Xl}var ql={},kg;function nS(){if(kg)return ql;kg=1,Object.defineProperty(ql,"__esModule",{value:!0});var i=Lh(),e=["mousedown","wheel","touchmove","keydown"];return ql.default={subscribe:function(r){return typeof document<"u"&&e.forEach(function(o){return(0,i.addPassiveEventListener)(document,o,r)})}},ql}var Yl={},Bg;function Nh(){if(Bg)return Yl;Bg=1,Object.defineProperty(Yl,"__esModule",{value:!0});var i={registered:{},scrollEvent:{register:function(t,r){i.registered[t]=r},remove:function(t){i.registered[t]=null}}};return Yl.default=i,Yl}var zg;function L_(){if(zg)return jl;zg=1,Object.defineProperty(jl,"__esModule",{value:!0});var i=Object.assign||function(T){for(var U=1;U<arguments.length;U++){var D=arguments[U];for(var B in D)Object.prototype.hasOwnProperty.call(D,B)&&(T[B]=D[B])}return T},e=$u();d(e);var t=tS(),r=d(t),o=nS(),l=d(o),u=Nh(),f=d(u);function d(T){return T&&T.__esModule?T:{default:T}}var h=function(U){return r.default[U.smooth]||r.default.defaultEasing},m=function(U){return typeof U=="function"?U:function(){return U}},g=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},y=function(){return g()||function(T,U,D){window.setTimeout(T,D||1e3/60,new Date().getTime())}}(),x=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},E=function(U){var D=U.data.containerElement;if(D&&D!==document&&D!==document.body)return D.scrollLeft;var B=window.pageXOffset!==void 0,z=(document.compatMode||"")==="CSS1Compat";return B?window.pageXOffset:z?document.documentElement.scrollLeft:document.body.scrollLeft},M=function(U){var D=U.data.containerElement;if(D&&D!==document&&D!==document.body)return D.scrollTop;var B=window.pageXOffset!==void 0,z=(document.compatMode||"")==="CSS1Compat";return B?window.pageYOffset:z?document.documentElement.scrollTop:document.body.scrollTop},v=function(U){var D=U.data.containerElement;if(D&&D!==document&&D!==document.body)return D.scrollWidth-D.offsetWidth;var B=document.body,z=document.documentElement;return Math.max(B.scrollWidth,B.offsetWidth,z.clientWidth,z.scrollWidth,z.offsetWidth)},_=function(U){var D=U.data.containerElement;if(D&&D!==document&&D!==document.body)return D.scrollHeight-D.offsetHeight;var B=document.body,z=document.documentElement;return Math.max(B.scrollHeight,B.offsetHeight,z.clientHeight,z.scrollHeight,z.offsetHeight)},R=function T(U,D,B){var z=D.data;if(!D.ignoreCancelEvents&&z.cancel){f.default.registered.end&&f.default.registered.end(z.to,z.target,z.currentPositionY);return}if(z.delta=Math.round(z.targetPosition-z.startPosition),z.start===null&&(z.start=B),z.progress=B-z.start,z.percent=z.progress>=z.duration?1:U(z.progress/z.duration),z.currentPosition=z.startPosition+Math.ceil(z.delta*z.percent),z.containerElement&&z.containerElement!==document&&z.containerElement!==document.body?D.horizontal?z.containerElement.scrollLeft=z.currentPosition:z.containerElement.scrollTop=z.currentPosition:D.horizontal?window.scrollTo(z.currentPosition,0):window.scrollTo(0,z.currentPosition),z.percent<1){var le=T.bind(null,U,D);y.call(window,le);return}f.default.registered.end&&f.default.registered.end(z.to,z.target,z.currentPosition)},C=function(U){U.data.containerElement=U?U.containerId?document.getElementById(U.containerId):U.container&&U.container.nodeType?U.container:document:null},b=function(U,D,B,z){D.data=D.data||x(),window.clearTimeout(D.data.delayTimeout);var le=function(){D.data.cancel=!0};if(l.default.subscribe(le),C(D),D.data.start=null,D.data.cancel=!1,D.data.startPosition=D.horizontal?E(D):M(D),D.data.targetPosition=D.absolute?U:U+D.data.startPosition,D.data.startPosition===D.data.targetPosition){f.default.registered.end&&f.default.registered.end(D.data.to,D.data.target,D.data.currentPosition);return}D.data.delta=Math.round(D.data.targetPosition-D.data.startPosition),D.data.duration=m(D.duration)(D.data.delta),D.data.duration=isNaN(parseFloat(D.data.duration))?1e3:parseFloat(D.data.duration),D.data.to=B,D.data.target=z;var ne=h(D),he=R.bind(null,ne,D);if(D&&D.delay>0){D.data.delayTimeout=window.setTimeout(function(){f.default.registered.begin&&f.default.registered.begin(D.data.to,D.data.target),y.call(window,he)},D.delay);return}f.default.registered.begin&&f.default.registered.begin(D.data.to,D.data.target),y.call(window,he)},F=function(U){return U=i({},U),U.data=U.data||x(),U.absolute=!0,U},I=function(U){b(0,F(U))},O=function(U,D){b(U,F(D))},V=function(U){U=F(U),C(U),b(U.horizontal?v(U):_(U),U)},L=function(U,D){D=F(D),C(D);var B=D.horizontal?E(D):M(D);b(U+B,D)};return jl.default={animateTopScroll:b,getAnimationType:h,scrollToTop:I,scrollToBottom:V,scrollTo:O,scrollMore:L},jl}var Hg;function Ku(){if(Hg)return Gl;Hg=1,Object.defineProperty(Gl,"__esModule",{value:!0});var i=Object.assign||function(m){for(var g=1;g<arguments.length;g++){var y=arguments[g];for(var x in y)Object.prototype.hasOwnProperty.call(y,x)&&(m[x]=y[x])}return m},e=$u(),t=f(e),r=L_(),o=f(r),l=Nh(),u=f(l);function f(m){return m&&m.__esModule?m:{default:m}}var d={},h=void 0;return Gl.default={unmount:function(){d={}},register:function(g,y){d[g]=y},unregister:function(g){delete d[g]},get:function(g){return d[g]||document.getElementById(g)||document.getElementsByName(g)[0]||document.getElementsByClassName(g)[0]},setActiveLink:function(g){return h=g},getActiveLink:function(){return h},scrollTo:function(g,y){var x=this.get(g);if(!x){console.warn("target Element not found");return}y=i({},y,{absolute:!1});var E=y.containerId,M=y.container,v=void 0;E?v=document.getElementById(E):M&&M.nodeType?v=M:v=document,y.absolute=!0;var _=y.horizontal,R=t.default.scrollOffset(v,x,_)+(y.offset||0);if(!y.smooth){u.default.registered.begin&&u.default.registered.begin(g,x),v===document?y.horizontal?window.scrollTo(R,0):window.scrollTo(0,R):v.scrollTop=R,u.default.registered.end&&u.default.registered.end(g,x);return}o.default.animateTopScroll(R,y,g,x)}},Gl}var qf={exports:{}},Yf,Vg;function iS(){if(Vg)return Yf;Vg=1;var i="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Yf=i,Yf}var $f,Gg;function rS(){if(Gg)return $f;Gg=1;var i=iS();function e(){}function t(){}return t.resetWarningCache=e,$f=function(){function r(u,f,d,h,m,g){if(g!==i){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}}r.isRequired=r;function o(){return r}var l={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:o,element:r,elementType:r,instanceOf:o,node:r,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:e};return l.PropTypes=l,l},$f}var Wg;function Zu(){return Wg||(Wg=1,qf.exports=rS()()),qf.exports}var $l={},jg;function D_(){if(jg)return $l;jg=1,Object.defineProperty($l,"__esModule",{value:!0}),Lh();var i=$u(),e=t(i);function t(o){return o&&o.__esModule?o:{default:o}}var r={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(l){this.scroller=l,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(l,u){this.containers[l]=u},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var l=this,u=this.getHash();u?window.setTimeout(function(){l.scrollTo(u,!0),l.initialized=!0},10):this.initialized=!0},scrollTo:function(l,u){var f=this.scroller,d=f.get(l);if(d&&(u||l!==f.getActiveLink())){var h=this.containers[l]||document;f.scrollTo(l,{container:h})}},getHash:function(){return e.default.getHash()},changeHash:function(l,u){this.isInitialized()&&e.default.getHash()!==l&&e.default.updateHash(l,u)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};return $l.default=r,$l}var Xg;function Uh(){if(Xg)return Hl;Xg=1,Object.defineProperty(Hl,"__esModule",{value:!0});var i=Object.assign||function(_){for(var R=1;R<arguments.length;R++){var C=arguments[R];for(var b in C)Object.prototype.hasOwnProperty.call(C,b)&&(_[b]=C[b])}return _},e=function(){function _(R,C){for(var b=0;b<C.length;b++){var F=C[b];F.enumerable=F.enumerable||!1,F.configurable=!0,"value"in F&&(F.writable=!0),Object.defineProperty(R,F.key,F)}}return function(R,C,b){return C&&_(R.prototype,C),b&&_(R,b),R}}(),t=cr(),r=y(t),o=Dh(),l=y(o),u=Ku(),f=y(u),d=Zu(),h=y(d),m=D_(),g=y(m);function y(_){return _&&_.__esModule?_:{default:_}}function x(_,R){if(!(_ instanceof R))throw new TypeError("Cannot call a class as a function")}function E(_,R){if(!_)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return R&&(typeof R=="object"||typeof R=="function")?R:_}function M(_,R){if(typeof R!="function"&&R!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof R);_.prototype=Object.create(R&&R.prototype,{constructor:{value:_,enumerable:!1,writable:!0,configurable:!0}}),R&&(Object.setPrototypeOf?Object.setPrototypeOf(_,R):_.__proto__=R)}var v={to:h.default.string.isRequired,containerId:h.default.string,container:h.default.object,activeClass:h.default.string,activeStyle:h.default.object,spy:h.default.bool,horizontal:h.default.bool,smooth:h.default.oneOfType([h.default.bool,h.default.string]),offset:h.default.number,delay:h.default.number,isDynamic:h.default.bool,onClick:h.default.func,duration:h.default.oneOfType([h.default.number,h.default.func]),absolute:h.default.bool,onSetActive:h.default.func,onSetInactive:h.default.func,ignoreCancelEvents:h.default.bool,hashSpy:h.default.bool,saveHashHistory:h.default.bool,spyThrottle:h.default.number};return Hl.default=function(_,R){var C=R||f.default,b=function(I){M(O,I);function O(V){x(this,O);var L=E(this,(O.__proto__||Object.getPrototypeOf(O)).call(this,V));return F.call(L),L.state={active:!1},L.beforeUnmountCallbacks=[],L}return e(O,[{key:"getScrollSpyContainer",value:function(){var L=this.props.containerId,T=this.props.container;return L&&!T?document.getElementById(L):T&&T.nodeType?T:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var L=this.getScrollSpyContainer();if(!l.default.isMounted(L)){var T=l.default.mount(L,this.props.spyThrottle);this.beforeUnmountCallbacks.push(T)}this.props.hashSpy&&(g.default.isMounted()||g.default.mount(C),g.default.mapContainer(this.props.to,L)),l.default.addSpyHandler(this.spyHandler,L),this.setState({container:L})}}},{key:"componentWillUnmount",value:function(){l.default.unmount(this.stateHandler,this.spyHandler),this.beforeUnmountCallbacks.forEach(function(L){return L()})}},{key:"render",value:function(){var L="";this.state&&this.state.active?L=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():L=this.props.className;var T={};this.state&&this.state.active?T=i({},this.props.style,this.props.activeStyle):T=i({},this.props.style);var U=i({},this.props);for(var D in v)U.hasOwnProperty(D)&&delete U[D];return U.className=L,U.style=T,U.onClick=this.handleClick,r.default.createElement(_,U)}}]),O}(r.default.PureComponent),F=function(){var O=this;this.scrollTo=function(V,L){C.scrollTo(V,i({},O.state,L))},this.handleClick=function(V){O.props.onClick&&O.props.onClick(V),V.stopPropagation&&V.stopPropagation(),V.preventDefault&&V.preventDefault(),O.scrollTo(O.props.to,O.props)},this.spyHandler=function(V,L){var T=O.getScrollSpyContainer();if(!(g.default.isMounted()&&!g.default.isInitialized())){var U=O.props.horizontal,D=O.props.to,B=null,z=void 0,le=void 0;if(U){var ne=0,he=0,X=0;if(T.getBoundingClientRect){var pe=T.getBoundingClientRect();X=pe.left}if(!B||O.props.isDynamic){if(B=C.get(D),!B)return;var ce=B.getBoundingClientRect();ne=ce.left-X+V,he=ne+ce.width}var W=V-O.props.offset;z=W>=Math.floor(ne)&&W<Math.floor(he),le=W<Math.floor(ne)||W>=Math.floor(he)}else{var oe=0,Ce=0,te=0;if(T.getBoundingClientRect){var ye=T.getBoundingClientRect();te=ye.top}if(!B||O.props.isDynamic){if(B=C.get(D),!B)return;var Me=B.getBoundingClientRect();oe=Me.top-te+L,Ce=oe+Me.height}var xe=L-O.props.offset;z=xe>=Math.floor(oe)&&xe<Math.floor(Ce),le=xe<Math.floor(oe)||xe>=Math.floor(Ce)}var Se=C.getActiveLink();if(le){if(D===Se&&C.setActiveLink(void 0),O.props.hashSpy&&g.default.getHash()===D){var Le=O.props.saveHashHistory,Ne=Le===void 0?!1:Le;g.default.changeHash("",Ne)}O.props.spy&&O.state.active&&(O.setState({active:!1}),O.props.onSetInactive&&O.props.onSetInactive(D,B))}if(z&&(Se!==D||O.state.active===!1)){C.setActiveLink(D);var ct=O.props.saveHashHistory,_t=ct===void 0?!1:ct;O.props.hashSpy&&g.default.changeHash(D,_t),O.props.spy&&(O.setState({active:!0}),O.props.onSetActive&&O.props.onSetActive(D,B))}}}};return b.propTypes=v,b.defaultProps={offset:0},b},Hl}var qg;function sS(){if(qg)return zl;qg=1,Object.defineProperty(zl,"__esModule",{value:!0});var i=cr(),e=o(i),t=Uh(),r=o(t);function o(h){return h&&h.__esModule?h:{default:h}}function l(h,m){if(!(h instanceof m))throw new TypeError("Cannot call a class as a function")}function u(h,m){if(!h)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return m&&(typeof m=="object"||typeof m=="function")?m:h}function f(h,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof m);h.prototype=Object.create(m&&m.prototype,{constructor:{value:h,enumerable:!1,writable:!0,configurable:!0}}),m&&(Object.setPrototypeOf?Object.setPrototypeOf(h,m):h.__proto__=m)}var d=function(h){f(m,h);function m(){var g,y,x,E;l(this,m);for(var M=arguments.length,v=Array(M),_=0;_<M;_++)v[_]=arguments[_];return E=(y=(x=u(this,(g=m.__proto__||Object.getPrototypeOf(m)).call.apply(g,[this].concat(v))),x),x.render=function(){return e.default.createElement("a",x.props,x.props.children)},y),u(x,E)}return m}(e.default.Component);return zl.default=(0,r.default)(d),zl}var Kl={},Yg;function oS(){if(Yg)return Kl;Yg=1,Object.defineProperty(Kl,"__esModule",{value:!0});var i=function(){function m(g,y){for(var x=0;x<y.length;x++){var E=y[x];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(g,E.key,E)}}return function(g,y,x){return y&&m(g.prototype,y),x&&m(g,x),g}}(),e=cr(),t=l(e),r=Uh(),o=l(r);function l(m){return m&&m.__esModule?m:{default:m}}function u(m,g){if(!(m instanceof g))throw new TypeError("Cannot call a class as a function")}function f(m,g){if(!m)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return g&&(typeof g=="object"||typeof g=="function")?g:m}function d(m,g){if(typeof g!="function"&&g!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof g);m.prototype=Object.create(g&&g.prototype,{constructor:{value:m,enumerable:!1,writable:!0,configurable:!0}}),g&&(Object.setPrototypeOf?Object.setPrototypeOf(m,g):m.__proto__=g)}var h=function(m){d(g,m);function g(){return u(this,g),f(this,(g.__proto__||Object.getPrototypeOf(g)).apply(this,arguments))}return i(g,[{key:"render",value:function(){return t.default.createElement("button",this.props,this.props.children)}}]),g}(t.default.Component);return Kl.default=(0,o.default)(h),Kl}var Zl={},Ql={},$g;function N_(){if($g)return Ql;$g=1,Object.defineProperty(Ql,"__esModule",{value:!0});var i=Object.assign||function(x){for(var E=1;E<arguments.length;E++){var M=arguments[E];for(var v in M)Object.prototype.hasOwnProperty.call(M,v)&&(x[v]=M[v])}return x},e=function(){function x(E,M){for(var v=0;v<M.length;v++){var _=M[v];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(E,_.key,_)}}return function(E,M,v){return M&&x(E.prototype,M),v&&x(E,v),E}}(),t=cr(),r=h(t),o=Yu();h(o);var l=Ku(),u=h(l),f=Zu(),d=h(f);function h(x){return x&&x.__esModule?x:{default:x}}function m(x,E){if(!(x instanceof E))throw new TypeError("Cannot call a class as a function")}function g(x,E){if(!x)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return E&&(typeof E=="object"||typeof E=="function")?E:x}function y(x,E){if(typeof E!="function"&&E!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof E);x.prototype=Object.create(E&&E.prototype,{constructor:{value:x,enumerable:!1,writable:!0,configurable:!0}}),E&&(Object.setPrototypeOf?Object.setPrototypeOf(x,E):x.__proto__=E)}return Ql.default=function(x){var E=function(M){y(v,M);function v(_){m(this,v);var R=g(this,(v.__proto__||Object.getPrototypeOf(v)).call(this,_));return R.childBindings={domNode:null},R}return e(v,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(R){this.props.name!==R.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;u.default.unregister(this.props.name)}},{key:"registerElems",value:function(R){u.default.register(R,this.childBindings.domNode)}},{key:"render",value:function(){return r.default.createElement(x,i({},this.props,{parentBindings:this.childBindings}))}}]),v}(r.default.Component);return E.propTypes={name:d.default.string,id:d.default.string},E},Ql}var Kg;function aS(){if(Kg)return Zl;Kg=1,Object.defineProperty(Zl,"__esModule",{value:!0});var i=Object.assign||function(x){for(var E=1;E<arguments.length;E++){var M=arguments[E];for(var v in M)Object.prototype.hasOwnProperty.call(M,v)&&(x[v]=M[v])}return x},e=function(){function x(E,M){for(var v=0;v<M.length;v++){var _=M[v];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(E,_.key,_)}}return function(E,M,v){return M&&x(E.prototype,M),v&&x(E,v),E}}(),t=cr(),r=d(t),o=N_(),l=d(o),u=Zu(),f=d(u);function d(x){return x&&x.__esModule?x:{default:x}}function h(x,E){if(!(x instanceof E))throw new TypeError("Cannot call a class as a function")}function m(x,E){if(!x)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return E&&(typeof E=="object"||typeof E=="function")?E:x}function g(x,E){if(typeof E!="function"&&E!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof E);x.prototype=Object.create(E&&E.prototype,{constructor:{value:x,enumerable:!1,writable:!0,configurable:!0}}),E&&(Object.setPrototypeOf?Object.setPrototypeOf(x,E):x.__proto__=E)}var y=function(x){g(E,x);function E(){return h(this,E),m(this,(E.__proto__||Object.getPrototypeOf(E)).apply(this,arguments))}return e(E,[{key:"render",value:function(){var v=this,_=i({},this.props);return delete _.name,_.parentBindings&&delete _.parentBindings,r.default.createElement("div",i({},_,{ref:function(C){v.props.parentBindings.domNode=C}}),this.props.children)}}]),E}(r.default.Component);return y.propTypes={name:f.default.string,id:f.default.string},Zl.default=(0,l.default)(y),Zl}var Kf,Zg;function lS(){if(Zg)return Kf;Zg=1;var i=Object.assign||function(y){for(var x=1;x<arguments.length;x++){var E=arguments[x];for(var M in E)Object.prototype.hasOwnProperty.call(E,M)&&(y[M]=E[M])}return y},e=function(){function y(x,E){for(var M=0;M<E.length;M++){var v=E[M];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(x,v.key,v)}}return function(x,E,M){return E&&y(x.prototype,E),M&&y(x,M),x}}();function t(y,x){if(!(y instanceof x))throw new TypeError("Cannot call a class as a function")}function r(y,x){if(!y)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return x&&(typeof x=="object"||typeof x=="function")?x:y}function o(y,x){if(typeof x!="function"&&x!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof x);y.prototype=Object.create(x&&x.prototype,{constructor:{value:y,enumerable:!1,writable:!0,configurable:!0}}),x&&(Object.setPrototypeOf?Object.setPrototypeOf(y,x):y.__proto__=x)}var l=cr();Yu(),$u();var u=Dh(),f=Ku(),d=Zu(),h=D_(),m={to:d.string.isRequired,containerId:d.string,container:d.object,activeClass:d.string,spy:d.bool,smooth:d.oneOfType([d.bool,d.string]),offset:d.number,delay:d.number,isDynamic:d.bool,onClick:d.func,duration:d.oneOfType([d.number,d.func]),absolute:d.bool,onSetActive:d.func,onSetInactive:d.func,ignoreCancelEvents:d.bool,hashSpy:d.bool,spyThrottle:d.number},g={Scroll:function(x,E){console.warn("Helpers.Scroll is deprecated since v1.7.0");var M=E||f,v=function(R){o(C,R);function C(b){t(this,C);var F=r(this,(C.__proto__||Object.getPrototypeOf(C)).call(this,b));return _.call(F),F.state={active:!1},F}return e(C,[{key:"getScrollSpyContainer",value:function(){var F=this.props.containerId,I=this.props.container;return F?document.getElementById(F):I&&I.nodeType?I:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var F=this.getScrollSpyContainer();u.isMounted(F)||u.mount(F,this.props.spyThrottle),this.props.hashSpy&&(h.isMounted()||h.mount(M),h.mapContainer(this.props.to,F)),this.props.spy&&u.addStateHandler(this.stateHandler),u.addSpyHandler(this.spyHandler,F),this.setState({container:F})}}},{key:"componentWillUnmount",value:function(){u.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var F="";this.state&&this.state.active?F=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():F=this.props.className;var I=i({},this.props);for(var O in m)I.hasOwnProperty(O)&&delete I[O];return I.className=F,I.onClick=this.handleClick,l.createElement(x,I)}}]),C}(l.Component),_=function(){var C=this;this.scrollTo=function(b,F){M.scrollTo(b,i({},C.state,F))},this.handleClick=function(b){C.props.onClick&&C.props.onClick(b),b.stopPropagation&&b.stopPropagation(),b.preventDefault&&b.preventDefault(),C.scrollTo(C.props.to,C.props)},this.stateHandler=function(){M.getActiveLink()!==C.props.to&&(C.state!==null&&C.state.active&&C.props.onSetInactive&&C.props.onSetInactive(),C.setState({active:!1}))},this.spyHandler=function(b){var F=C.getScrollSpyContainer();if(!(h.isMounted()&&!h.isInitialized())){var I=C.props.to,O=null,V=0,L=0,T=0;if(F.getBoundingClientRect){var U=F.getBoundingClientRect();T=U.top}if(!O||C.props.isDynamic){if(O=M.get(I),!O)return;var D=O.getBoundingClientRect();V=D.top-T+b,L=V+D.height}var B=b-C.props.offset,z=B>=Math.floor(V)&&B<Math.floor(L),le=B<Math.floor(V)||B>=Math.floor(L),ne=M.getActiveLink();if(le)return I===ne&&M.setActiveLink(void 0),C.props.hashSpy&&h.getHash()===I&&h.changeHash(),C.props.spy&&C.state.active&&(C.setState({active:!1}),C.props.onSetInactive&&C.props.onSetInactive()),u.updateStates();if(z&&ne!==I)return M.setActiveLink(I),C.props.hashSpy&&h.changeHash(I),C.props.spy&&(C.setState({active:!0}),C.props.onSetActive&&C.props.onSetActive(I)),u.updateStates()}}};return v.propTypes=m,v.defaultProps={offset:0},v},Element:function(x){console.warn("Helpers.Element is deprecated since v1.7.0");var E=function(M){o(v,M);function v(_){t(this,v);var R=r(this,(v.__proto__||Object.getPrototypeOf(v)).call(this,_));return R.childBindings={domNode:null},R}return e(v,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(R){this.props.name!==R.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;f.unregister(this.props.name)}},{key:"registerElems",value:function(R){f.register(R,this.childBindings.domNode)}},{key:"render",value:function(){return l.createElement(x,i({},this.props,{parentBindings:this.childBindings}))}}]),v}(l.Component);return E.propTypes={name:d.string,id:d.string},E}};return Kf=g,Kf}var Qg;function uS(){if(Qg)return Wt;Qg=1,Object.defineProperty(Wt,"__esModule",{value:!0}),Wt.Helpers=Wt.ScrollElement=Wt.ScrollLink=Wt.animateScroll=Wt.scrollSpy=Wt.Events=Wt.scroller=Wt.Element=Wt.Button=Wt.Link=void 0;var i=sS(),e=b(i),t=oS(),r=b(t),o=aS(),l=b(o),u=Ku(),f=b(u),d=Nh(),h=b(d),m=Dh(),g=b(m),y=L_(),x=b(y),E=Uh(),M=b(E),v=N_(),_=b(v),R=lS(),C=b(R);function b(F){return F&&F.__esModule?F:{default:F}}return Wt.Link=e.default,Wt.Button=r.default,Wt.Element=l.default,Wt.scroller=f.default,Wt.Events=h.default,Wt.scrollSpy=g.default,Wt.animateScroll=x.default,Wt.ScrollLink=M.default,Wt.ScrollElement=_.default,Wt.Helpers=C.default,Wt.default={Link:e.default,Button:r.default,Element:l.default,scroller:f.default,Events:h.default,scrollSpy:g.default,animateScroll:x.default,ScrollLink:M.default,ScrollElement:_.default,Helpers:C.default},Wt}var Gr=uS(),cS="1.2.3";function U_(i,e,t){return Math.max(i,Math.min(e,t))}function fS(i,e,t){return(1-t)*i+t*e}function dS(i,e,t,r){return fS(i,e,1-Math.exp(-t*r))}function hS(i,e){return(i%e+e)%e}var pS=class{constructor(){Je(this,"isRunning",!1);Je(this,"value",0);Je(this,"from",0);Je(this,"to",0);Je(this,"currentTime",0);Je(this,"lerp");Je(this,"duration");Je(this,"easing");Je(this,"onUpdate")}advance(i){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=i;const r=U_(0,this.currentTime/this.duration,1);e=r>=1;const o=e?1:this.easing(r);this.value=this.from+(this.to-this.from)*o}else this.lerp?(this.value=dS(this.value,this.to,this.lerp*60,i),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(i,e,{lerp:t,duration:r,easing:o,onStart:l,onUpdate:u}){this.from=this.value=i,this.to=e,this.lerp=t,this.duration=r,this.easing=o,this.currentTime=0,this.isRunning=!0,l==null||l(),this.onUpdate=u}};function mS(i,e){let t;return function(...r){let o=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,i.apply(o,r)},e)}}var gS=class{constructor(i,e,{autoResize:t=!0,debounce:r=250}={}){Je(this,"width",0);Je(this,"height",0);Je(this,"scrollHeight",0);Je(this,"scrollWidth",0);Je(this,"debouncedResize");Je(this,"wrapperResizeObserver");Je(this,"contentResizeObserver");Je(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Je(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Je(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=i,this.content=e,t&&(this.debouncedResize=mS(this.resize,r),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var i,e;(i=this.wrapperResizeObserver)==null||i.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},I_=class{constructor(){Je(this,"events",{})}emit(i,...e){var r;let t=this.events[i]||[];for(let o=0,l=t.length;o<l;o++)(r=t[o])==null||r.call(t,...e)}on(i,e){var t;return(t=this.events[i])!=null&&t.push(e)||(this.events[i]=[e]),()=>{var r;this.events[i]=(r=this.events[i])==null?void 0:r.filter(o=>e!==o)}}off(i,e){var t;this.events[i]=(t=this.events[i])==null?void 0:t.filter(r=>e!==r)}destroy(){this.events={}}},Jg=100/6,Ur={passive:!1},vS=class{constructor(i,e={wheelMultiplier:1,touchMultiplier:1}){Je(this,"touchStart",{x:0,y:0});Je(this,"lastDelta",{x:0,y:0});Je(this,"window",{width:0,height:0});Je(this,"emitter",new I_);Je(this,"onTouchStart",i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})});Je(this,"onTouchMove",i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i,r=-(e-this.touchStart.x)*this.options.touchMultiplier,o=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:r,y:o},this.emitter.emit("scroll",{deltaX:r,deltaY:o,event:i})});Je(this,"onTouchEnd",i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})});Je(this,"onWheel",i=>{let{deltaX:e,deltaY:t,deltaMode:r}=i;const o=r===1?Jg:r===2?this.window.width:1,l=r===1?Jg:r===2?this.window.height:1;e*=o,t*=l,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:i})});Je(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=i,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Ur),this.element.addEventListener("touchstart",this.onTouchStart,Ur),this.element.addEventListener("touchmove",this.onTouchMove,Ur),this.element.addEventListener("touchend",this.onTouchEnd,Ur)}on(i,e){return this.emitter.on(i,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,Ur),this.element.removeEventListener("touchstart",this.onTouchStart,Ur),this.element.removeEventListener("touchmove",this.onTouchMove,Ur),this.element.removeEventListener("touchend",this.onTouchEnd,Ur)}},_S=class{constructor({wrapper:i=window,content:e=document.documentElement,eventsTarget:t=i,smoothWheel:r=!0,syncTouch:o=!1,syncTouchLerp:l=.075,touchInertiaMultiplier:u=35,duration:f,easing:d=I=>Math.min(1,1.001-Math.pow(2,-10*I)),lerp:h=.1,infinite:m=!1,orientation:g="vertical",gestureOrientation:y="vertical",touchMultiplier:x=1,wheelMultiplier:E=1,autoResize:M=!0,prevent:v,virtualScroll:_,overscroll:R=!0,autoRaf:C=!1,anchors:b=!1,__experimental__naiveDimensions:F=!1}={}){Je(this,"_isScrolling",!1);Je(this,"_isStopped",!1);Je(this,"_isLocked",!1);Je(this,"_preventNextNativeScrollEvent",!1);Je(this,"_resetVelocityTimeout",null);Je(this,"__rafID",null);Je(this,"isTouching");Je(this,"time",0);Je(this,"userData",{});Je(this,"lastVelocity",0);Je(this,"velocity",0);Je(this,"direction",0);Je(this,"options");Je(this,"targetScroll");Je(this,"animatedScroll");Je(this,"animate",new pS);Je(this,"emitter",new I_);Je(this,"dimensions");Je(this,"virtualScroll");Je(this,"onScrollEnd",i=>{i instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&i.stopPropagation()});Je(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Je(this,"onClick",i=>{const t=i.composedPath().find(r=>{var o,l,u;return r instanceof HTMLAnchorElement&&(((o=r.getAttribute("href"))==null?void 0:o.startsWith("#"))||((l=r.getAttribute("href"))==null?void 0:l.startsWith("/#"))||((u=r.getAttribute("href"))==null?void 0:u.startsWith("./#")))});if(t){const r=t.getAttribute("href");if(r){const o=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0;this.scrollTo(`#${r.split("#")[1]}`,o)}}});Je(this,"onPointerDown",i=>{i.button===1&&this.reset()});Je(this,"onVirtualScroll",i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;const{deltaX:e,deltaY:t,event:r}=i;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:r}),r.ctrlKey||r.lenisStopPropagation)return;const o=r.type.includes("touch"),l=r.type.includes("wheel");this.isTouching=r.type==="touchstart"||r.type==="touchmove";const u=e===0&&t===0;if(this.options.syncTouch&&o&&r.type==="touchstart"&&u&&!this.isStopped&&!this.isLocked){this.reset();return}const d=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(u||d)return;let h=r.composedPath();h=h.slice(0,h.indexOf(this.rootElement));const m=this.options.prevent;if(h.find(v=>{var _,R,C;return v instanceof HTMLElement&&(typeof m=="function"&&(m==null?void 0:m(v))||((_=v.hasAttribute)==null?void 0:_.call(v,"data-lenis-prevent"))||o&&((R=v.hasAttribute)==null?void 0:R.call(v,"data-lenis-prevent-touch"))||l&&((C=v.hasAttribute)==null?void 0:C.call(v,"data-lenis-prevent-wheel")))}))return;if(this.isStopped||this.isLocked){r.preventDefault();return}if(!(this.options.syncTouch&&o||this.options.smoothWheel&&l)){this.isScrolling="native",this.animate.stop(),r.lenisStopPropagation=!0;return}let y=t;this.options.gestureOrientation==="both"?y=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(y=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(r.lenisStopPropagation=!0),r.preventDefault();const x=o&&this.options.syncTouch,M=o&&r.type==="touchend"&&Math.abs(y)>5;M&&(y=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+y,{programmatic:!1,...x?{lerp:M?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Je(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Je(this,"raf",i=>{const e=i-(this.time||i);this.time=i,this.animate.advance(e*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=cS,(!i||i===document.documentElement)&&(i=window),this.options={wrapper:i,content:e,eventsTarget:t,smoothWheel:r,syncTouch:o,syncTouchLerp:l,touchInertiaMultiplier:u,duration:f,easing:d,lerp:h,infinite:m,gestureOrientation:y,orientation:g,touchMultiplier:x,wheelMultiplier:E,autoResize:M,prevent:v,virtualScroll:_,overscroll:R,autoRaf:C,anchors:b,__experimental__naiveDimensions:F},this.dimensions=new gS(i,e,{autoResize:M}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new vS(t,{touchMultiplier:x,wheelMultiplier:E}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(i,e){return this.emitter.on(i,e)}off(i,e){return this.emitter.off(i,e)}setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.reset(),this.isStopped=!1)}stop(){this.isStopped||(this.reset(),this.isStopped=!0)}scrollTo(i,{offset:e=0,immediate:t=!1,lock:r=!1,duration:o=this.options.duration,easing:l=this.options.easing,lerp:u=this.options.lerp,onStart:f,onComplete:d,force:h=!1,programmatic:m=!0,userData:g}={}){if(!((this.isStopped||this.isLocked)&&!h)){if(typeof i=="string"&&["top","left","start"].includes(i))i=0;else if(typeof i=="string"&&["bottom","right","end"].includes(i))i=this.limit;else{let y;if(typeof i=="string"?y=document.querySelector(i):i instanceof HTMLElement&&(i!=null&&i.nodeType)&&(y=i),y){if(this.options.wrapper!==window){const E=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?E.left:E.top}const x=y.getBoundingClientRect();i=(this.isHorizontal?x.left:x.top)+this.animatedScroll}}if(typeof i=="number"){if(i+=e,i=Math.round(i),this.options.infinite?m&&(this.targetScroll=this.animatedScroll=this.scroll):i=U_(0,i,this.limit),i===this.targetScroll){f==null||f(this),d==null||d(this);return}if(this.userData=g??{},t){this.animatedScroll=this.targetScroll=i,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),d==null||d(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}m||(this.targetScroll=i),this.animate.fromTo(this.animatedScroll,i,{duration:o,easing:l,lerp:u,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling="smooth",f==null||f(this)},onUpdate:(y,x)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=y-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=y,this.setScroll(this.scroll),m&&(this.targetScroll=y),x||this.emit(),x&&(this.reset(),this.emit(),d==null||d(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const i=this.options.wrapper;return this.isHorizontal?i.scrollX??i.scrollLeft:i.scrollY??i.scrollTop}get scroll(){return this.options.infinite?hS(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let i="lenis";return this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}},yS=class{constructor(i){Je(this,"listeners",[]);this.state=i}set(i){this.state=i;for(let e of this.listeners)e(this.state)}subscribe(i){return this.listeners=[...this.listeners,i],()=>{this.listeners=this.listeners.filter(e=>e!==i)}}get(){return this.state}},xS=nt.createContext(null),ev=new yS(null),SS=nt.forwardRef(({children:i,root:e=!1,options:t={},className:r,autoRaf:o=!0,style:l,props:u},f)=>{const d=nt.useRef(null),h=nt.useRef(null),[m,g]=nt.useState(void 0);nt.useImperativeHandle(f,()=>({wrapper:d.current,content:h.current,lenis:m}),[m]),nt.useEffect(()=>{const M=new _S({...t,...!e&&{wrapper:d.current,content:h.current},autoRaf:(t==null?void 0:t.autoRaf)??o});return g(M),()=>{M.destroy(),g(void 0)}},[e,JSON.stringify(t)]);const y=nt.useRef([]),x=nt.useCallback((M,v)=>{y.current.push({callback:M,priority:v}),y.current.sort((_,R)=>_.priority-R.priority)},[]),E=nt.useCallback(M=>{y.current=y.current.filter(v=>v.callback!==M)},[]);return nt.useEffect(()=>{if(e&&m)return ev.set({lenis:m,addCallback:x,removeCallback:E}),()=>ev.set(null)},[e,m,x,E]),nt.useEffect(()=>{if(!m)return;const M=v=>{var _;for(let R=0;R<y.current.length;R++)(_=y.current[R])==null||_.callback(v)};return m.on("scroll",M),()=>{m.off("scroll",M)}},[m]),Z.jsx(xS.Provider,{value:{lenis:m,addCallback:x,removeCallback:E},children:e?i:Z.jsx("div",{ref:d,className:r,style:l,...u,children:Z.jsx("div",{ref:h,children:i})})})});const ES=({children:i})=>Z.jsx(SS,{root:!0,children:i});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ih="173",MS=0,tv=1,wS=2,O_=1,TS=2,nr=3,qr=0,jn=1,ir=2,Wr=0,go=1,nv=2,iv=3,rv=4,AS=5,vs=100,bS=101,RS=102,CS=103,PS=104,LS=200,DS=201,NS=202,US=203,Od=204,Fd=205,IS=206,OS=207,FS=208,kS=209,BS=210,zS=211,HS=212,VS=213,GS=214,kd=0,Bd=1,zd=2,yo=3,Hd=4,Vd=5,Gd=6,Wd=7,F_=0,WS=1,jS=2,jr=0,XS=1,qS=2,YS=3,$S=4,KS=5,ZS=6,QS=7,k_=300,xo=301,So=302,jd=303,Xd=304,Qu=306,qd=1e3,xs=1001,Yd=1002,wi=1003,JS=1004,Jl=1005,Oi=1006,Zf=1007,Ss=1008,lr=1009,B_=1010,z_=1011,xa=1012,Oh=1013,Ts=1014,rr=1015,Ea=1016,Fh=1017,kh=1018,Eo=1020,H_=35902,V_=1021,G_=1022,Mi=1023,W_=1024,j_=1025,vo=1026,Mo=1027,X_=1028,Bh=1029,q_=1030,zh=1031,Hh=1033,Mu=33776,wu=33777,Tu=33778,Au=33779,$d=35840,Kd=35841,Zd=35842,Qd=35843,Jd=36196,eh=37492,th=37496,nh=37808,ih=37809,rh=37810,sh=37811,oh=37812,ah=37813,lh=37814,uh=37815,ch=37816,fh=37817,dh=37818,hh=37819,ph=37820,mh=37821,bu=36492,gh=36494,vh=36495,Y_=36283,_h=36284,yh=36285,xh=36286,eE=3200,tE=3201,nE=0,iE=1,Hr="",ci="srgb",wo="srgb-linear",Ou="linear",Ut="srgb",Qs=7680,sv=519,rE=512,sE=513,oE=514,$_=515,aE=516,lE=517,uE=518,cE=519,ov=35044,av="300 es",sr=2e3,Fu=2001;class Ao{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qf=Math.PI/180,Sh=180/Math.PI;function Ma(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[r&255]+bn[r>>8&255]+bn[r>>16&255]+bn[r>>24&255]).toLowerCase()}function wt(i,e,t){return Math.max(e,Math.min(t,i))}function fE(i,e){return(i%e+e)%e}function Jf(i,e,t){return(1-t)*i+t*e}function ua(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Gn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ot{constructor(e=0,t=0){Ot.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(wt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(wt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vt{constructor(e,t,r,o,l,u,f,d,h){vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,d,h)}set(e,t,r,o,l,u,f,d,h){const m=this.elements;return m[0]=e,m[1]=o,m[2]=f,m[3]=t,m[4]=l,m[5]=d,m[6]=r,m[7]=u,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[3],d=r[6],h=r[1],m=r[4],g=r[7],y=r[2],x=r[5],E=r[8],M=o[0],v=o[3],_=o[6],R=o[1],C=o[4],b=o[7],F=o[2],I=o[5],O=o[8];return l[0]=u*M+f*R+d*F,l[3]=u*v+f*C+d*I,l[6]=u*_+f*b+d*O,l[1]=h*M+m*R+g*F,l[4]=h*v+m*C+g*I,l[7]=h*_+m*b+g*O,l[2]=y*M+x*R+E*F,l[5]=y*v+x*C+E*I,l[8]=y*_+x*b+E*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],m=e[8];return t*u*m-t*f*h-r*l*m+r*f*d+o*l*h-o*u*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],m=e[8],g=m*u-f*h,y=f*d-m*l,x=h*l-u*d,E=t*g+r*y+o*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=g*M,e[1]=(o*h-m*r)*M,e[2]=(f*r-o*u)*M,e[3]=y*M,e[4]=(m*t-o*d)*M,e[5]=(o*l-f*t)*M,e[6]=x*M,e[7]=(r*d-h*t)*M,e[8]=(u*t-r*l)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,f){const d=Math.cos(l),h=Math.sin(l);return this.set(r*d,r*h,-r*(d*u+h*f)+u+e,-o*h,o*d,-o*(-h*u+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(ed.makeScale(e,t)),this}rotate(e){return this.premultiply(ed.makeRotation(-e)),this}translate(e,t){return this.premultiply(ed.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ed=new vt;function K_(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ku(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function dE(){const i=ku("canvas");return i.style.display="block",i}const lv={};function po(i){i in lv||(lv[i]=!0,console.warn(i))}function hE(i,e,t){return new Promise(function(r,o){function l(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function pE(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function mE(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const uv=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cv=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gE(){const i={enabled:!0,workingColorSpace:wo,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Ut&&(o.r=ar(o.r),o.g=ar(o.g),o.b=ar(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ut&&(o.r=_o(o.r),o.g=_o(o.g),o.b=_o(o.b))),o},fromWorkingColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},toWorkingColorSpace:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Hr?Ou:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return i.define({[wo]:{primaries:e,whitePoint:r,transfer:Ou,toXYZ:uv,fromXYZ:cv,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:e,whitePoint:r,transfer:Ut,toXYZ:uv,fromXYZ:cv,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),i}const Pt=gE();function ar(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _o(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Js;class vE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Js===void 0&&(Js=ku("canvas")),Js.width=e.width,Js.height=e.height;const r=Js.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Js}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ku("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=ar(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(ar(t[r]/255)*255):t[r]=ar(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _E=0;class Z_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=Ma(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(td(o[u].image)):l.push(td(o[u]))}else l=td(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function td(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vE.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yE=0;class Xn extends Ao{constructor(e=Xn.DEFAULT_IMAGE,t=Xn.DEFAULT_MAPPING,r=xs,o=xs,l=Oi,u=Ss,f=Mi,d=lr,h=Xn.DEFAULT_ANISOTROPY,m=Hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yE++}),this.uuid=Ma(),this.name="",this.source=new Z_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==k_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qd:e.x=e.x-Math.floor(e.x);break;case xs:e.x=e.x<0?0:1;break;case Yd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qd:e.y=e.y-Math.floor(e.y);break;case xs:e.y=e.y<0?0:1;break;case Yd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=k_;Xn.DEFAULT_ANISOTROPY=1;class Qt{constructor(e=0,t=0,r=0,o=1){Qt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const d=e.elements,h=d[0],m=d[4],g=d[8],y=d[1],x=d[5],E=d[9],M=d[2],v=d[6],_=d[10];if(Math.abs(m-y)<.01&&Math.abs(g-M)<.01&&Math.abs(E-v)<.01){if(Math.abs(m+y)<.1&&Math.abs(g+M)<.1&&Math.abs(E+v)<.1&&Math.abs(h+x+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(h+1)/2,b=(x+1)/2,F=(_+1)/2,I=(m+y)/4,O=(g+M)/4,V=(E+v)/4;return C>b&&C>F?C<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(C),o=I/r,l=O/r):b>F?b<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(b),r=I/o,l=V/o):F<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(F),r=O/l,o=V/l),this.set(r,o,l,t),this}let R=Math.sqrt((v-E)*(v-E)+(g-M)*(g-M)+(y-m)*(y-m));return Math.abs(R)<.001&&(R=1),this.x=(v-E)/R,this.y=(g-M)/R,this.z=(y-m)/R,this.w=Math.acos((h+x+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this.w=wt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this.w=wt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(wt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xE extends Ao{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qt(0,0,e,t),this.scissorTest=!1,this.viewport=new Qt(0,0,e,t);const o={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new Xn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Z_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class As extends xE{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Q_ extends Xn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=wi,this.minFilter=wi,this.wrapR=xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class SE extends Xn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=wi,this.minFilter=wi,this.wrapR=xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wa{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,f){let d=r[o+0],h=r[o+1],m=r[o+2],g=r[o+3];const y=l[u+0],x=l[u+1],E=l[u+2],M=l[u+3];if(f===0){e[t+0]=d,e[t+1]=h,e[t+2]=m,e[t+3]=g;return}if(f===1){e[t+0]=y,e[t+1]=x,e[t+2]=E,e[t+3]=M;return}if(g!==M||d!==y||h!==x||m!==E){let v=1-f;const _=d*y+h*x+m*E+g*M,R=_>=0?1:-1,C=1-_*_;if(C>Number.EPSILON){const F=Math.sqrt(C),I=Math.atan2(F,_*R);v=Math.sin(v*I)/F,f=Math.sin(f*I)/F}const b=f*R;if(d=d*v+y*b,h=h*v+x*b,m=m*v+E*b,g=g*v+M*b,v===1-f){const F=1/Math.sqrt(d*d+h*h+m*m+g*g);d*=F,h*=F,m*=F,g*=F}}e[t]=d,e[t+1]=h,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,r,o,l,u){const f=r[o],d=r[o+1],h=r[o+2],m=r[o+3],g=l[u],y=l[u+1],x=l[u+2],E=l[u+3];return e[t]=f*E+m*g+d*x-h*y,e[t+1]=d*E+m*y+h*g-f*x,e[t+2]=h*E+m*x+f*y-d*g,e[t+3]=m*E-f*g-d*y-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,d=Math.sin,h=f(r/2),m=f(o/2),g=f(l/2),y=d(r/2),x=d(o/2),E=d(l/2);switch(u){case"XYZ":this._x=y*m*g+h*x*E,this._y=h*x*g-y*m*E,this._z=h*m*E+y*x*g,this._w=h*m*g-y*x*E;break;case"YXZ":this._x=y*m*g+h*x*E,this._y=h*x*g-y*m*E,this._z=h*m*E-y*x*g,this._w=h*m*g+y*x*E;break;case"ZXY":this._x=y*m*g-h*x*E,this._y=h*x*g+y*m*E,this._z=h*m*E+y*x*g,this._w=h*m*g-y*x*E;break;case"ZYX":this._x=y*m*g-h*x*E,this._y=h*x*g+y*m*E,this._z=h*m*E-y*x*g,this._w=h*m*g+y*x*E;break;case"YZX":this._x=y*m*g+h*x*E,this._y=h*x*g+y*m*E,this._z=h*m*E-y*x*g,this._w=h*m*g-y*x*E;break;case"XZY":this._x=y*m*g-h*x*E,this._y=h*x*g-y*m*E,this._z=h*m*E+y*x*g,this._w=h*m*g+y*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],f=t[5],d=t[9],h=t[2],m=t[6],g=t[10],y=r+f+g;if(y>0){const x=.5/Math.sqrt(y+1);this._w=.25/x,this._x=(m-d)*x,this._y=(l-h)*x,this._z=(u-o)*x}else if(r>f&&r>g){const x=2*Math.sqrt(1+r-f-g);this._w=(m-d)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(l+h)/x}else if(f>g){const x=2*Math.sqrt(1+f-r-g);this._w=(l-h)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(d+m)/x}else{const x=2*Math.sqrt(1+g-r-f);this._w=(u-o)/x,this._x=(l+h)/x,this._y=(d+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,f=t._x,d=t._y,h=t._z,m=t._w;return this._x=r*m+u*f+o*h-l*d,this._y=o*m+u*d+l*f-r*h,this._z=l*m+u*h+r*d-o*f,this._w=u*m-r*f-o*d-l*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,u=this._w;let f=u*e._w+r*e._x+o*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=u,this._x=r,this._y=o,this._z=l,this;const d=1-f*f;if(d<=Number.EPSILON){const x=1-t;return this._w=x*u+t*this._w,this._x=x*r+t*this._x,this._y=x*o+t*this._y,this._z=x*l+t*this._z,this.normalize(),this}const h=Math.sqrt(d),m=Math.atan2(h,f),g=Math.sin((1-t)*m)/h,y=Math.sin(t*m)/h;return this._w=u*g+this._w*y,this._x=r*g+this._x*y,this._y=o*g+this._y*y,this._z=l*g+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class de{constructor(e=0,t=0,r=0){de.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,d=e.w,h=2*(u*o-f*r),m=2*(f*t-l*o),g=2*(l*r-u*t);return this.x=t+d*h+u*g-f*m,this.y=r+d*m+f*h-l*g,this.z=o+d*g+l*m-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(wt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,f=t.y,d=t.z;return this.x=o*d-l*f,this.y=l*u-r*d,this.z=r*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return nd.copy(this).projectOnVector(e),this.sub(nd)}reflect(e){return this.sub(nd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(wt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nd=new de,fv=new wa;class Ta{constructor(e=new de(1/0,1/0,1/0),t=new de(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(_i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(_i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,_i):_i.fromBufferAttribute(l,u),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),eu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),eu.copy(r.boundingBox)),eu.applyMatrix4(e.matrixWorld),this.union(eu)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ca),tu.subVectors(this.max,ca),eo.subVectors(e.a,ca),to.subVectors(e.b,ca),no.subVectors(e.c,ca),Ir.subVectors(to,eo),Or.subVectors(no,to),us.subVectors(eo,no);let t=[0,-Ir.z,Ir.y,0,-Or.z,Or.y,0,-us.z,us.y,Ir.z,0,-Ir.x,Or.z,0,-Or.x,us.z,0,-us.x,-Ir.y,Ir.x,0,-Or.y,Or.x,0,-us.y,us.x,0];return!id(t,eo,to,no,tu)||(t=[1,0,0,0,1,0,0,0,1],!id(t,eo,to,no,tu))?!1:(nu.crossVectors(Ir,Or),t=[nu.x,nu.y,nu.z],id(t,eo,to,no,tu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ki=[new de,new de,new de,new de,new de,new de,new de,new de],_i=new de,eu=new Ta,eo=new de,to=new de,no=new de,Ir=new de,Or=new de,us=new de,ca=new de,tu=new de,nu=new de,cs=new de;function id(i,e,t,r,o){for(let l=0,u=i.length-3;l<=u;l+=3){cs.fromArray(i,l);const f=o.x*Math.abs(cs.x)+o.y*Math.abs(cs.y)+o.z*Math.abs(cs.z),d=e.dot(cs),h=t.dot(cs),m=r.dot(cs);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>f)return!1}return!0}const EE=new Ta,fa=new de,rd=new de;class Ju{constructor(e=new de,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):EE.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fa.subVectors(e,this.center);const t=fa.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(fa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fa.copy(e.center).add(rd)),this.expandByPoint(fa.copy(e.center).sub(rd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zi=new de,sd=new de,iu=new de,Fr=new de,od=new de,ru=new de,ad=new de;class J_{constructor(e=new de,t=new de(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,t),Zi.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){sd.copy(e).add(t).multiplyScalar(.5),iu.copy(t).sub(e).normalize(),Fr.copy(this.origin).sub(sd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(iu),f=Fr.dot(this.direction),d=-Fr.dot(iu),h=Fr.lengthSq(),m=Math.abs(1-u*u);let g,y,x,E;if(m>0)if(g=u*d-f,y=u*f-d,E=l*m,g>=0)if(y>=-E)if(y<=E){const M=1/m;g*=M,y*=M,x=g*(g+u*y+2*f)+y*(u*g+y+2*d)+h}else y=l,g=Math.max(0,-(u*y+f)),x=-g*g+y*(y+2*d)+h;else y=-l,g=Math.max(0,-(u*y+f)),x=-g*g+y*(y+2*d)+h;else y<=-E?(g=Math.max(0,-(-u*l+f)),y=g>0?-l:Math.min(Math.max(-l,-d),l),x=-g*g+y*(y+2*d)+h):y<=E?(g=0,y=Math.min(Math.max(-l,-d),l),x=y*(y+2*d)+h):(g=Math.max(0,-(u*l+f)),y=g>0?l:Math.min(Math.max(-l,-d),l),x=-g*g+y*(y+2*d)+h);else y=u>0?-l:l,g=Math.max(0,-(u*y+f)),x=-g*g+y*(y+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(sd).addScaledVector(iu,y),x}intersectSphere(e,t){Zi.subVectors(e.center,this.origin);const r=Zi.dot(this.direction),o=Zi.dot(Zi)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,d=r+u;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,f,d;const h=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,y=this.origin;return h>=0?(r=(e.min.x-y.x)*h,o=(e.max.x-y.x)*h):(r=(e.max.x-y.x)*h,o=(e.min.x-y.x)*h),m>=0?(l=(e.min.y-y.y)*m,u=(e.max.y-y.y)*m):(l=(e.max.y-y.y)*m,u=(e.min.y-y.y)*m),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),g>=0?(f=(e.min.z-y.z)*g,d=(e.max.z-y.z)*g):(f=(e.max.z-y.z)*g,d=(e.min.z-y.z)*g),r>d||f>o)||((f>r||r!==r)&&(r=f),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,t,r,o,l){od.subVectors(t,e),ru.subVectors(r,e),ad.crossVectors(od,ru);let u=this.direction.dot(ad),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Fr.subVectors(this.origin,e);const d=f*this.direction.dot(ru.crossVectors(Fr,ru));if(d<0)return null;const h=f*this.direction.dot(od.cross(Fr));if(h<0||d+h>u)return null;const m=-f*Fr.dot(ad);return m<0?null:this.at(m/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(e,t,r,o,l,u,f,d,h,m,g,y,x,E,M,v){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,d,h,m,g,y,x,E,M,v)}set(e,t,r,o,l,u,f,d,h,m,g,y,x,E,M,v){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=o,_[1]=l,_[5]=u,_[9]=f,_[13]=d,_[2]=h,_[6]=m,_[10]=g,_[14]=y,_[3]=x,_[7]=E,_[11]=M,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/io.setFromMatrixColumn(e,0).length(),l=1/io.setFromMatrixColumn(e,1).length(),u=1/io.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),d=Math.cos(o),h=Math.sin(o),m=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const y=u*m,x=u*g,E=f*m,M=f*g;t[0]=d*m,t[4]=-d*g,t[8]=h,t[1]=x+E*h,t[5]=y-M*h,t[9]=-f*d,t[2]=M-y*h,t[6]=E+x*h,t[10]=u*d}else if(e.order==="YXZ"){const y=d*m,x=d*g,E=h*m,M=h*g;t[0]=y+M*f,t[4]=E*f-x,t[8]=u*h,t[1]=u*g,t[5]=u*m,t[9]=-f,t[2]=x*f-E,t[6]=M+y*f,t[10]=u*d}else if(e.order==="ZXY"){const y=d*m,x=d*g,E=h*m,M=h*g;t[0]=y-M*f,t[4]=-u*g,t[8]=E+x*f,t[1]=x+E*f,t[5]=u*m,t[9]=M-y*f,t[2]=-u*h,t[6]=f,t[10]=u*d}else if(e.order==="ZYX"){const y=u*m,x=u*g,E=f*m,M=f*g;t[0]=d*m,t[4]=E*h-x,t[8]=y*h+M,t[1]=d*g,t[5]=M*h+y,t[9]=x*h-E,t[2]=-h,t[6]=f*d,t[10]=u*d}else if(e.order==="YZX"){const y=u*d,x=u*h,E=f*d,M=f*h;t[0]=d*m,t[4]=M-y*g,t[8]=E*g+x,t[1]=g,t[5]=u*m,t[9]=-f*m,t[2]=-h*m,t[6]=x*g+E,t[10]=y-M*g}else if(e.order==="XZY"){const y=u*d,x=u*h,E=f*d,M=f*h;t[0]=d*m,t[4]=-g,t[8]=h*m,t[1]=y*g+M,t[5]=u*m,t[9]=x*g-E,t[2]=E*g-x,t[6]=f*m,t[10]=M*g+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ME,e,wE)}lookAt(e,t,r){const o=this.elements;return Jn.subVectors(e,t),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),kr.crossVectors(r,Jn),kr.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),kr.crossVectors(r,Jn)),kr.normalize(),su.crossVectors(Jn,kr),o[0]=kr.x,o[4]=su.x,o[8]=Jn.x,o[1]=kr.y,o[5]=su.y,o[9]=Jn.y,o[2]=kr.z,o[6]=su.z,o[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[4],d=r[8],h=r[12],m=r[1],g=r[5],y=r[9],x=r[13],E=r[2],M=r[6],v=r[10],_=r[14],R=r[3],C=r[7],b=r[11],F=r[15],I=o[0],O=o[4],V=o[8],L=o[12],T=o[1],U=o[5],D=o[9],B=o[13],z=o[2],le=o[6],ne=o[10],he=o[14],X=o[3],pe=o[7],ce=o[11],W=o[15];return l[0]=u*I+f*T+d*z+h*X,l[4]=u*O+f*U+d*le+h*pe,l[8]=u*V+f*D+d*ne+h*ce,l[12]=u*L+f*B+d*he+h*W,l[1]=m*I+g*T+y*z+x*X,l[5]=m*O+g*U+y*le+x*pe,l[9]=m*V+g*D+y*ne+x*ce,l[13]=m*L+g*B+y*he+x*W,l[2]=E*I+M*T+v*z+_*X,l[6]=E*O+M*U+v*le+_*pe,l[10]=E*V+M*D+v*ne+_*ce,l[14]=E*L+M*B+v*he+_*W,l[3]=R*I+C*T+b*z+F*X,l[7]=R*O+C*U+b*le+F*pe,l[11]=R*V+C*D+b*ne+F*ce,l[15]=R*L+C*B+b*he+F*W,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],d=e[9],h=e[13],m=e[2],g=e[6],y=e[10],x=e[14],E=e[3],M=e[7],v=e[11],_=e[15];return E*(+l*d*g-o*h*g-l*f*y+r*h*y+o*f*x-r*d*x)+M*(+t*d*x-t*h*y+l*u*y-o*u*x+o*h*m-l*d*m)+v*(+t*h*g-t*f*x-l*u*g+r*u*x+l*f*m-r*h*m)+_*(-o*f*m-t*d*g+t*f*y+o*u*g-r*u*y+r*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],m=e[8],g=e[9],y=e[10],x=e[11],E=e[12],M=e[13],v=e[14],_=e[15],R=g*v*h-M*y*h+M*d*x-f*v*x-g*d*_+f*y*_,C=E*y*h-m*v*h-E*d*x+u*v*x+m*d*_-u*y*_,b=m*M*h-E*g*h+E*f*x-u*M*x-m*f*_+u*g*_,F=E*g*d-m*M*d-E*f*y+u*M*y+m*f*v-u*g*v,I=t*R+r*C+o*b+l*F;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/I;return e[0]=R*O,e[1]=(M*y*l-g*v*l-M*o*x+r*v*x+g*o*_-r*y*_)*O,e[2]=(f*v*l-M*d*l+M*o*h-r*v*h-f*o*_+r*d*_)*O,e[3]=(g*d*l-f*y*l-g*o*h+r*y*h+f*o*x-r*d*x)*O,e[4]=C*O,e[5]=(m*v*l-E*y*l+E*o*x-t*v*x-m*o*_+t*y*_)*O,e[6]=(E*d*l-u*v*l-E*o*h+t*v*h+u*o*_-t*d*_)*O,e[7]=(u*y*l-m*d*l+m*o*h-t*y*h-u*o*x+t*d*x)*O,e[8]=b*O,e[9]=(E*g*l-m*M*l-E*r*x+t*M*x+m*r*_-t*g*_)*O,e[10]=(u*M*l-E*f*l+E*r*h-t*M*h-u*r*_+t*f*_)*O,e[11]=(m*f*l-u*g*l-m*r*h+t*g*h+u*r*x-t*f*x)*O,e[12]=F*O,e[13]=(m*M*o-E*g*o+E*r*y-t*M*y-m*r*v+t*g*v)*O,e[14]=(E*f*o-u*M*o-E*r*d+t*M*d+u*r*v-t*f*v)*O,e[15]=(u*g*o-m*f*o+m*r*d-t*g*d-u*r*y+t*f*y)*O,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,f=e.y,d=e.z,h=l*u,m=l*f;return this.set(h*u+r,h*f-o*d,h*d+o*f,0,h*f+o*d,m*f+r,m*d-o*u,0,h*d-o*f,m*d+o*u,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,f=t._z,d=t._w,h=l+l,m=u+u,g=f+f,y=l*h,x=l*m,E=l*g,M=u*m,v=u*g,_=f*g,R=d*h,C=d*m,b=d*g,F=r.x,I=r.y,O=r.z;return o[0]=(1-(M+_))*F,o[1]=(x+b)*F,o[2]=(E-C)*F,o[3]=0,o[4]=(x-b)*I,o[5]=(1-(y+_))*I,o[6]=(v+R)*I,o[7]=0,o[8]=(E+C)*O,o[9]=(v-R)*O,o[10]=(1-(y+M))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=io.set(o[0],o[1],o[2]).length();const u=io.set(o[4],o[5],o[6]).length(),f=io.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],yi.copy(this);const h=1/l,m=1/u,g=1/f;return yi.elements[0]*=h,yi.elements[1]*=h,yi.elements[2]*=h,yi.elements[4]*=m,yi.elements[5]*=m,yi.elements[6]*=m,yi.elements[8]*=g,yi.elements[9]*=g,yi.elements[10]*=g,t.setFromRotationMatrix(yi),r.x=l,r.y=u,r.z=f,this}makePerspective(e,t,r,o,l,u,f=sr){const d=this.elements,h=2*l/(t-e),m=2*l/(r-o),g=(t+e)/(t-e),y=(r+o)/(r-o);let x,E;if(f===sr)x=-(u+l)/(u-l),E=-2*u*l/(u-l);else if(f===Fu)x=-u/(u-l),E=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=h,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=m,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=x,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,r,o,l,u,f=sr){const d=this.elements,h=1/(t-e),m=1/(r-o),g=1/(u-l),y=(t+e)*h,x=(r+o)*m;let E,M;if(f===sr)E=(u+l)*g,M=-2*g;else if(f===Fu)E=l*g,M=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=2*h,d[4]=0,d[8]=0,d[12]=-y,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-x,d[2]=0,d[6]=0,d[10]=M,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const io=new de,yi=new Jt,ME=new de(0,0,0),wE=new de(1,1,1),kr=new de,su=new de,Jn=new de,dv=new Jt,hv=new wa;class ur{constructor(e=0,t=0,r=0,o=ur.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],d=o[1],h=o[5],m=o[9],g=o[2],y=o[6],x=o[10];switch(t){case"XYZ":this._y=Math.asin(wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(y,h),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(wt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-wt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,x),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(y,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return dv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dv,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hv.setFromEuler(this),this.setFromQuaternion(hv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ur.DEFAULT_ORDER="XYZ";class e0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let TE=0;const pv=new de,ro=new wa,Qi=new Jt,ou=new de,da=new de,AE=new de,bE=new wa,mv=new de(1,0,0),gv=new de(0,1,0),vv=new de(0,0,1),_v={type:"added"},RE={type:"removed"},so={type:"childadded",child:null},ld={type:"childremoved",child:null};class qn extends Ao{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:TE++}),this.uuid=Ma(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const e=new de,t=new ur,r=new wa,o=new de(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Jt},normalMatrix:{value:new vt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new e0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ro.setFromAxisAngle(e,t),this.quaternion.multiply(ro),this}rotateOnWorldAxis(e,t){return ro.setFromAxisAngle(e,t),this.quaternion.premultiply(ro),this}rotateX(e){return this.rotateOnAxis(mv,e)}rotateY(e){return this.rotateOnAxis(gv,e)}rotateZ(e){return this.rotateOnAxis(vv,e)}translateOnAxis(e,t){return pv.copy(e).applyQuaternion(this.quaternion),this.position.add(pv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mv,e)}translateY(e){return this.translateOnAxis(gv,e)}translateZ(e){return this.translateOnAxis(vv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?ou.copy(e):ou.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(da,ou,this.up):Qi.lookAt(ou,da,this.up),this.quaternion.setFromRotationMatrix(Qi),o&&(Qi.extractRotation(o.matrixWorld),ro.setFromRotationMatrix(Qi),this.quaternion.premultiply(ro.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_v),so.child=e,this.dispatchEvent(so),so.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(RE),ld.child=e,this.dispatchEvent(ld),ld.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_v),so.child=e,this.dispatchEvent(so),so.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,e,AE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,bE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const g=d[h];l(e.shapes,g)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(l(e.materials,this.material[d]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];o.animations.push(l(e.animations,d))}}if(t){const f=u(e.geometries),d=u(e.materials),h=u(e.textures),m=u(e.images),g=u(e.shapes),y=u(e.skeletons),x=u(e.animations),E=u(e.nodes);f.length>0&&(r.geometries=f),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),m.length>0&&(r.images=m),g.length>0&&(r.shapes=g),y.length>0&&(r.skeletons=y),x.length>0&&(r.animations=x),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(f){const d=[];for(const h in f){const m=f[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}qn.DEFAULT_UP=new de(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new de,Ji=new de,ud=new de,er=new de,oo=new de,ao=new de,yv=new de,cd=new de,fd=new de,dd=new de,hd=new Qt,pd=new Qt,md=new Qt;class Si{constructor(e=new de,t=new de,r=new de){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),xi.subVectors(e,t),o.cross(xi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){xi.subVectors(o,t),Ji.subVectors(r,t),ud.subVectors(e,t);const u=xi.dot(xi),f=xi.dot(Ji),d=xi.dot(ud),h=Ji.dot(Ji),m=Ji.dot(ud),g=u*h-f*f;if(g===0)return l.set(0,0,0),null;const y=1/g,x=(h*d-f*m)*y,E=(u*m-f*d)*y;return l.set(1-x-E,E,x)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,er)===null?!1:er.x>=0&&er.y>=0&&er.x+er.y<=1}static getInterpolation(e,t,r,o,l,u,f,d){return this.getBarycoord(e,t,r,o,er)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,er.x),d.addScaledVector(u,er.y),d.addScaledVector(f,er.z),d)}static getInterpolatedAttribute(e,t,r,o,l,u){return hd.setScalar(0),pd.setScalar(0),md.setScalar(0),hd.fromBufferAttribute(e,t),pd.fromBufferAttribute(e,r),md.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(hd,l.x),u.addScaledVector(pd,l.y),u.addScaledVector(md,l.z),u}static isFrontFacing(e,t,r,o){return xi.subVectors(r,t),Ji.subVectors(e,t),xi.cross(Ji).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),xi.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Si.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Si.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,f;oo.subVectors(o,r),ao.subVectors(l,r),cd.subVectors(e,r);const d=oo.dot(cd),h=ao.dot(cd);if(d<=0&&h<=0)return t.copy(r);fd.subVectors(e,o);const m=oo.dot(fd),g=ao.dot(fd);if(m>=0&&g<=m)return t.copy(o);const y=d*g-m*h;if(y<=0&&d>=0&&m<=0)return u=d/(d-m),t.copy(r).addScaledVector(oo,u);dd.subVectors(e,l);const x=oo.dot(dd),E=ao.dot(dd);if(E>=0&&x<=E)return t.copy(l);const M=x*h-d*E;if(M<=0&&h>=0&&E<=0)return f=h/(h-E),t.copy(r).addScaledVector(ao,f);const v=m*E-x*g;if(v<=0&&g-m>=0&&x-E>=0)return yv.subVectors(l,o),f=(g-m)/(g-m+(x-E)),t.copy(o).addScaledVector(yv,f);const _=1/(v+M+y);return u=M*_,f=y*_,t.copy(r).addScaledVector(oo,u).addScaledVector(ao,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const t0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Br={h:0,s:0,l:0},au={h:0,s:0,l:0};function gd(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Nt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Pt.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=Pt.workingColorSpace){if(e=fE(e,1),t=wt(t,0,1),r=wt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=gd(u,l,e+1/3),this.g=gd(u,l,e),this.b=gd(u,l,e-1/3)}return Pt.toWorkingColorSpace(this,o),this}setStyle(e,t=ci){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ci){const r=t0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}copyLinearToSRGB(e){return this.r=_o(e.r),this.g=_o(e.g),this.b=_o(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ci){return Pt.fromWorkingColorSpace(Rn.copy(this),e),Math.round(wt(Rn.r*255,0,255))*65536+Math.round(wt(Rn.g*255,0,255))*256+Math.round(wt(Rn.b*255,0,255))}getHexString(e=ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.fromWorkingColorSpace(Rn.copy(this),t);const r=Rn.r,o=Rn.g,l=Rn.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let d,h;const m=(f+u)/2;if(f===u)d=0,h=0;else{const g=u-f;switch(h=m<=.5?g/(u+f):g/(2-u-f),u){case r:d=(o-l)/g+(o<l?6:0);break;case o:d=(l-r)/g+2;break;case l:d=(r-o)/g+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,t=Pt.workingColorSpace){return Pt.fromWorkingColorSpace(Rn.copy(this),t),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=ci){Pt.fromWorkingColorSpace(Rn.copy(this),e);const t=Rn.r,r=Rn.g,o=Rn.b;return e!==ci?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Br),this.setHSL(Br.h+e,Br.s+t,Br.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Br),e.getHSL(au);const r=Jf(Br.h,au.h,t),o=Jf(Br.s,au.s,t),l=Jf(Br.l,au.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new Nt;Nt.NAMES=t0;let CE=0;class Aa extends Ao{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CE++}),this.uuid=Ma(),this.name="",this.type="Material",this.blending=go,this.side=qr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Od,this.blendDst=Fd,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qs,this.stencilZFail=Qs,this.stencilZPass=Qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==go&&(r.blending=this.blending),this.side!==qr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Od&&(r.blendSrc=this.blendSrc),this.blendDst!==Fd&&(r.blendDst=this.blendDst),this.blendEquation!==vs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==yo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Qs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Qs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const d=l[f];delete d.metadata,u.push(d)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class n0 extends Aa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ur,this.combine=F_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rn=new de,lu=new Ot;let PE=0;class ki{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:PE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=ov,this.updateRanges=[],this.gpuType=rr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)lu.fromBufferAttribute(this,t),lu.applyMatrix3(e),this.setXY(t,lu.x,lu.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=ua(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Gn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ua(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ua(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ua(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ua(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),r=Gn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),r=Gn(r,this.array),o=Gn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),r=Gn(r,this.array),o=Gn(o,this.array),l=Gn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ov&&(e.usage=this.usage),e}}class i0 extends ki{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class r0 extends ki{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Xr extends ki{constructor(e,t,r){super(new Float32Array(e),t,r)}}let LE=0;const li=new Jt,vd=new qn,lo=new de,ei=new Ta,ha=new Ta,vn=new de;class fr extends Ao{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:LE++}),this.uuid=Ma(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(K_(e)?r0:i0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new vt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,r){return li.makeTranslation(e,t,r),this.applyMatrix4(li),this}scale(e,t,r){return li.makeScale(e,t,r),this.applyMatrix4(li),this}lookAt(e){return vd.lookAt(e),vd.updateMatrix(),this.applyMatrix4(vd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lo).negate(),this.translate(lo.x,lo.y,lo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Xr(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ta);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new de(-1/0,-1/0,-1/0),new de(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];ei.setFromBufferAttribute(l),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ju);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new de,1/0);return}if(e){const r=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];ha.setFromBufferAttribute(f),this.morphTargetsRelative?(vn.addVectors(ei.min,ha.min),ei.expandByPoint(vn),vn.addVectors(ei.max,ha.max),ei.expandByPoint(vn)):(ei.expandByPoint(ha.min),ei.expandByPoint(ha.max))}ei.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)vn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(vn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],d=this.morphTargetsRelative;for(let h=0,m=f.count;h<m;h++)vn.fromBufferAttribute(f,h),d&&(lo.fromBufferAttribute(e,h),vn.add(lo)),o=Math.max(o,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ki(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],d=[];for(let V=0;V<r.count;V++)f[V]=new de,d[V]=new de;const h=new de,m=new de,g=new de,y=new Ot,x=new Ot,E=new Ot,M=new de,v=new de;function _(V,L,T){h.fromBufferAttribute(r,V),m.fromBufferAttribute(r,L),g.fromBufferAttribute(r,T),y.fromBufferAttribute(l,V),x.fromBufferAttribute(l,L),E.fromBufferAttribute(l,T),m.sub(h),g.sub(h),x.sub(y),E.sub(y);const U=1/(x.x*E.y-E.x*x.y);isFinite(U)&&(M.copy(m).multiplyScalar(E.y).addScaledVector(g,-x.y).multiplyScalar(U),v.copy(g).multiplyScalar(x.x).addScaledVector(m,-E.x).multiplyScalar(U),f[V].add(M),f[L].add(M),f[T].add(M),d[V].add(v),d[L].add(v),d[T].add(v))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let V=0,L=R.length;V<L;++V){const T=R[V],U=T.start,D=T.count;for(let B=U,z=U+D;B<z;B+=3)_(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const C=new de,b=new de,F=new de,I=new de;function O(V){F.fromBufferAttribute(o,V),I.copy(F);const L=f[V];C.copy(L),C.sub(F.multiplyScalar(F.dot(L))).normalize(),b.crossVectors(I,L);const U=b.dot(d[V])<0?-1:1;u.setXYZW(V,C.x,C.y,C.z,U)}for(let V=0,L=R.length;V<L;++V){const T=R[V],U=T.start,D=T.count;for(let B=U,z=U+D;B<z;B+=3)O(e.getX(B+0)),O(e.getX(B+1)),O(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ki(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let y=0,x=r.count;y<x;y++)r.setXYZ(y,0,0,0);const o=new de,l=new de,u=new de,f=new de,d=new de,h=new de,m=new de,g=new de;if(e)for(let y=0,x=e.count;y<x;y+=3){const E=e.getX(y+0),M=e.getX(y+1),v=e.getX(y+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,M),u.fromBufferAttribute(t,v),m.subVectors(u,l),g.subVectors(o,l),m.cross(g),f.fromBufferAttribute(r,E),d.fromBufferAttribute(r,M),h.fromBufferAttribute(r,v),f.add(m),d.add(m),h.add(m),r.setXYZ(E,f.x,f.y,f.z),r.setXYZ(M,d.x,d.y,d.z),r.setXYZ(v,h.x,h.y,h.z)}else for(let y=0,x=t.count;y<x;y+=3)o.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),u.fromBufferAttribute(t,y+2),m.subVectors(u,l),g.subVectors(o,l),m.cross(g),r.setXYZ(y+0,m.x,m.y,m.z),r.setXYZ(y+1,m.x,m.y,m.z),r.setXYZ(y+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)vn.fromBufferAttribute(e,t),vn.normalize(),e.setXYZ(t,vn.x,vn.y,vn.z)}toNonIndexed(){function e(f,d){const h=f.array,m=f.itemSize,g=f.normalized,y=new h.constructor(d.length*m);let x=0,E=0;for(let M=0,v=d.length;M<v;M++){f.isInterleavedBufferAttribute?x=d[M]*f.data.stride+f.offset:x=d[M]*m;for(let _=0;_<m;_++)y[E++]=h[x++]}return new ki(y,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fr,r=this.index.array,o=this.attributes;for(const f in o){const d=o[f],h=e(d,r);t.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const d=[],h=l[f];for(let m=0,g=h.length;m<g;m++){const y=h[m],x=e(y,r);d.push(x)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,d=u.length;f<d;f++){const h=u[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let g=0,y=h.length;g<y;g++){const x=h[g];m.push(x.toJSON(e.data))}m.length>0&&(o[d]=m,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const h in o){const m=o[h];this.setAttribute(h,m.clone(t))}const l=e.morphAttributes;for(const h in l){const m=[],g=l[h];for(let y=0,x=g.length;y<x;y++)m.push(g[y].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,m=u.length;h<m;h++){const g=u[h];this.addGroup(g.start,g.count,g.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xv=new Jt,fs=new J_,uu=new Ju,Sv=new de,cu=new de,fu=new de,du=new de,_d=new de,hu=new de,Ev=new de,pu=new de;class or extends qn{constructor(e=new fr,t=new n0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){hu.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const m=f[d],g=l[d];m!==0&&(_d.fromBufferAttribute(g,e),u?hu.addScaledVector(_d,m):hu.addScaledVector(_d.sub(t),m))}t.add(hu)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),uu.copy(r.boundingSphere),uu.applyMatrix4(l),fs.copy(e.ray).recast(e.near),!(uu.containsPoint(fs.origin)===!1&&(fs.intersectSphere(uu,Sv)===null||fs.origin.distanceToSquared(Sv)>(e.far-e.near)**2))&&(xv.copy(l).invert(),fs.copy(e.ray).applyMatrix4(xv),!(r.boundingBox!==null&&fs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,fs)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,f=l.index,d=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,g=l.attributes.normal,y=l.groups,x=l.drawRange;if(f!==null)if(Array.isArray(u))for(let E=0,M=y.length;E<M;E++){const v=y[E],_=u[v.materialIndex],R=Math.max(v.start,x.start),C=Math.min(f.count,Math.min(v.start+v.count,x.start+x.count));for(let b=R,F=C;b<F;b+=3){const I=f.getX(b),O=f.getX(b+1),V=f.getX(b+2);o=mu(this,_,e,r,h,m,g,I,O,V),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const E=Math.max(0,x.start),M=Math.min(f.count,x.start+x.count);for(let v=E,_=M;v<_;v+=3){const R=f.getX(v),C=f.getX(v+1),b=f.getX(v+2);o=mu(this,u,e,r,h,m,g,R,C,b),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let E=0,M=y.length;E<M;E++){const v=y[E],_=u[v.materialIndex],R=Math.max(v.start,x.start),C=Math.min(d.count,Math.min(v.start+v.count,x.start+x.count));for(let b=R,F=C;b<F;b+=3){const I=b,O=b+1,V=b+2;o=mu(this,_,e,r,h,m,g,I,O,V),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const E=Math.max(0,x.start),M=Math.min(d.count,x.start+x.count);for(let v=E,_=M;v<_;v+=3){const R=v,C=v+1,b=v+2;o=mu(this,u,e,r,h,m,g,R,C,b),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}}}function DE(i,e,t,r,o,l,u,f){let d;if(e.side===jn?d=r.intersectTriangle(u,l,o,!0,f):d=r.intersectTriangle(o,l,u,e.side===qr,f),d===null)return null;pu.copy(f),pu.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(pu);return h<t.near||h>t.far?null:{distance:h,point:pu.clone(),object:i}}function mu(i,e,t,r,o,l,u,f,d,h){i.getVertexPosition(f,cu),i.getVertexPosition(d,fu),i.getVertexPosition(h,du);const m=DE(i,e,t,r,cu,fu,du,Ev);if(m){const g=new de;Si.getBarycoord(Ev,cu,fu,du,g),o&&(m.uv=Si.getInterpolatedAttribute(o,f,d,h,g,new Ot)),l&&(m.uv1=Si.getInterpolatedAttribute(l,f,d,h,g,new Ot)),u&&(m.normal=Si.getInterpolatedAttribute(u,f,d,h,g,new de),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const y={a:f,b:d,c:h,normal:new de,materialIndex:0};Si.getNormal(cu,fu,du,y.normal),m.face=y,m.barycoord=g}return m}class ba extends fr{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const d=[],h=[],m=[],g=[];let y=0,x=0;E("z","y","x",-1,-1,r,t,e,u,l,0),E("z","y","x",1,-1,r,t,-e,u,l,1),E("x","z","y",1,1,e,r,t,o,u,2),E("x","z","y",1,-1,e,r,-t,o,u,3),E("x","y","z",1,-1,e,t,r,o,l,4),E("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new Xr(h,3)),this.setAttribute("normal",new Xr(m,3)),this.setAttribute("uv",new Xr(g,2));function E(M,v,_,R,C,b,F,I,O,V,L){const T=b/O,U=F/V,D=b/2,B=F/2,z=I/2,le=O+1,ne=V+1;let he=0,X=0;const pe=new de;for(let ce=0;ce<ne;ce++){const W=ce*U-B;for(let oe=0;oe<le;oe++){const Ce=oe*T-D;pe[M]=Ce*R,pe[v]=W*C,pe[_]=z,h.push(pe.x,pe.y,pe.z),pe[M]=0,pe[v]=0,pe[_]=I>0?1:-1,m.push(pe.x,pe.y,pe.z),g.push(oe/O),g.push(1-ce/V),he+=1}}for(let ce=0;ce<V;ce++)for(let W=0;W<O;W++){const oe=y+W+le*ce,Ce=y+W+le*(ce+1),te=y+(W+1)+le*(ce+1),ye=y+(W+1)+le*ce;d.push(oe,Ce,ye),d.push(Ce,te,ye),X+=6}f.addGroup(x,X,L),x+=X,y+=he}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ba(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function To(i){const e={};for(const t in i){e[t]={};for(const r in i[t]){const o=i[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Un(i){const e={};for(let t=0;t<i.length;t++){const r=To(i[t]);for(const o in r)e[o]=r[o]}return e}function NE(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function s0(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const UE={clone:To,merge:Un};var IE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,OE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yr extends Aa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IE,this.fragmentShader=OE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=To(e.uniforms),this.uniformsGroups=NE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class o0 extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=sr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zr=new de,Mv=new Ot,wv=new Ot;class fi extends o0{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sh*2*Math.atan(Math.tan(Qf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){zr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zr.x,zr.y).multiplyScalar(-e/zr.z),zr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(zr.x,zr.y).multiplyScalar(-e/zr.z)}getViewSize(e,t){return this.getViewBounds(e,Mv,wv),t.subVectors(wv,Mv)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qf*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;l+=u.offsetX*o/d,t-=u.offsetY*r/h,o*=u.width/d,r*=u.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const uo=-90,co=1;class FE extends qn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new fi(uo,co,e,t);o.layers=this.layers,this.add(o);const l=new fi(uo,co,e,t);l.layers=this.layers,this.add(l);const u=new fi(uo,co,e,t);u.layers=this.layers,this.add(u);const f=new fi(uo,co,e,t);f.layers=this.layers,this.add(f);const d=new fi(uo,co,e,t);d.layers=this.layers,this.add(d);const h=new fi(uo,co,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,f,d]=t;for(const h of t)this.remove(h);if(e===sr)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Fu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,d,h,m]=this.children,g=e.getRenderTarget(),y=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,f),e.setRenderTarget(r,3,o),e.render(t,d),e.setRenderTarget(r,4,o),e.render(t,h),r.texture.generateMipmaps=M,e.setRenderTarget(r,5,o),e.render(t,m),e.setRenderTarget(g,y,x),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class a0 extends Xn{constructor(e,t,r,o,l,u,f,d,h,m){e=e!==void 0?e:[],t=t!==void 0?t:xo,super(e,t,r,o,l,u,f,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kE extends As{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new a0(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Oi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new ba(5,5,5),l=new Yr({name:"CubemapFromEquirect",uniforms:To(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:jn,blending:Wr});l.uniforms.tEquirect.value=t;const u=new or(o,l),f=t.minFilter;return t.minFilter===Ss&&(t.minFilter=Oi),new FE(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,r,o){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}class gu extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const BE={type:"move"};class yd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new de,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new de),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new de,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new de),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const M of e.hand.values()){const v=t.getJointPose(M,r),_=this._getHandJoint(h,M);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const m=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],y=m.position.distanceTo(g.position),x=.02,E=.005;h.inputState.pinching&&y>x+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&y<=x-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(BE)))}return f!==null&&(f.visible=o!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new gu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class zE extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ur,this.environmentIntensity=1,this.environmentRotation=new ur,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const xd=new de,HE=new de,VE=new vt;class ms{constructor(e=new de(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=xd.subVectors(r,t).cross(HE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(xd),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||VE.getNormalMatrix(e),o=this.coplanarPoint(xd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ds=new Ju,vu=new de;class l0{constructor(e=new ms,t=new ms,r=new ms,o=new ms,l=new ms,u=new ms){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=sr){const r=this.planes,o=e.elements,l=o[0],u=o[1],f=o[2],d=o[3],h=o[4],m=o[5],g=o[6],y=o[7],x=o[8],E=o[9],M=o[10],v=o[11],_=o[12],R=o[13],C=o[14],b=o[15];if(r[0].setComponents(d-l,y-h,v-x,b-_).normalize(),r[1].setComponents(d+l,y+h,v+x,b+_).normalize(),r[2].setComponents(d+u,y+m,v+E,b+R).normalize(),r[3].setComponents(d-u,y-m,v-E,b-R).normalize(),r[4].setComponents(d-f,y-g,v-M,b-C).normalize(),t===sr)r[5].setComponents(d+f,y+g,v+M,b+C).normalize();else if(t===Fu)r[5].setComponents(f,g,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(e){return ds.center.set(0,0,0),ds.radius=.7071067811865476,ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(vu.x=o.normal.x>0?e.max.x:e.min.x,vu.y=o.normal.y>0?e.max.y:e.min.y,vu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(vu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class u0 extends Aa{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bu=new de,zu=new de,Tv=new Jt,pa=new J_,_u=new Ju,Sd=new de,Av=new de;class GE extends qn{constructor(e=new fr,t=new u0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)Bu.fromBufferAttribute(t,o-1),zu.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=Bu.distanceTo(zu);e.setAttribute("lineDistance",new Xr(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),_u.copy(r.boundingSphere),_u.applyMatrix4(o),_u.radius+=l,e.ray.intersectsSphere(_u)===!1)return;Tv.copy(o).invert(),pa.copy(e.ray).applyMatrix4(Tv);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=this.isLineSegments?2:1,m=r.index,y=r.attributes.position;if(m!==null){const x=Math.max(0,u.start),E=Math.min(m.count,u.start+u.count);for(let M=x,v=E-1;M<v;M+=h){const _=m.getX(M),R=m.getX(M+1),C=yu(this,e,pa,d,_,R,M);C&&t.push(C)}if(this.isLineLoop){const M=m.getX(E-1),v=m.getX(x),_=yu(this,e,pa,d,M,v,E-1);_&&t.push(_)}}else{const x=Math.max(0,u.start),E=Math.min(y.count,u.start+u.count);for(let M=x,v=E-1;M<v;M+=h){const _=yu(this,e,pa,d,M,M+1,M);_&&t.push(_)}if(this.isLineLoop){const M=yu(this,e,pa,d,E-1,x,E-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function yu(i,e,t,r,o,l,u){const f=i.geometry.attributes.position;if(Bu.fromBufferAttribute(f,o),zu.fromBufferAttribute(f,l),t.distanceSqToSegment(Bu,zu,Sd,Av)>r)return;Sd.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(Sd);if(!(h<e.near||h>e.far))return{distance:h,point:Av.clone().applyMatrix4(i.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:i}}class c0 extends Xn{constructor(e,t,r,o,l,u,f,d,h,m=vo){if(m!==vo&&m!==Mo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&m===vo&&(r=Ts),r===void 0&&m===Mo&&(r=Eo),super(null,o,l,u,f,d,m,r,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=f!==void 0?f:wi,this.minFilter=d!==void 0?d:wi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ec extends fr{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(r),d=Math.floor(o),h=f+1,m=d+1,g=e/f,y=t/d,x=[],E=[],M=[],v=[];for(let _=0;_<m;_++){const R=_*y-u;for(let C=0;C<h;C++){const b=C*g-l;E.push(b,-R,0),M.push(0,0,1),v.push(C/f),v.push(1-_/d)}}for(let _=0;_<d;_++)for(let R=0;R<f;R++){const C=R+h*_,b=R+h*(_+1),F=R+1+h*(_+1),I=R+1+h*_;x.push(C,b,I),x.push(b,F,I)}this.setIndex(x),this.setAttribute("position",new Xr(E,3)),this.setAttribute("normal",new Xr(M,3)),this.setAttribute("uv",new Xr(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ec(e.width,e.height,e.widthSegments,e.heightSegments)}}class WE extends Aa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jE extends Aa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class XE extends o0{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class qE extends fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function bv(i,e,t,r){const o=YE(r);switch(t){case V_:return i*e;case W_:return i*e;case j_:return i*e*2;case X_:return i*e/o.components*o.byteLength;case Bh:return i*e/o.components*o.byteLength;case q_:return i*e*2/o.components*o.byteLength;case zh:return i*e*2/o.components*o.byteLength;case G_:return i*e*3/o.components*o.byteLength;case Mi:return i*e*4/o.components*o.byteLength;case Hh:return i*e*4/o.components*o.byteLength;case Mu:case wu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Tu:case Au:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Kd:case Qd:return Math.max(i,16)*Math.max(e,8)/4;case $d:case Zd:return Math.max(i,8)*Math.max(e,8)/2;case Jd:case eh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case th:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case nh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ih:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case rh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case sh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case oh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ah:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case lh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case uh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ch:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case fh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case dh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case hh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ph:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case mh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case bu:case gh:case vh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Y_:case _h:return Math.ceil(i/4)*Math.ceil(e/4)*8;case yh:case xh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function YE(i){switch(i){case lr:case B_:return{byteLength:1,components:1};case xa:case z_:case Ea:return{byteLength:2,components:1};case Fh:case kh:return{byteLength:2,components:4};case Ts:case Oh:case rr:return{byteLength:4,components:1};case H_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ih}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ih);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function f0(){let i=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=i.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=i.requestAnimationFrame(o),e=!0)},stop:function(){i.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){i=l}}}function $E(i){const e=new WeakMap;function t(f,d){const h=f.array,m=f.usage,g=h.byteLength,y=i.createBuffer();i.bindBuffer(d,y),i.bufferData(d,h,m),f.onUploadCallback();let x;if(h instanceof Float32Array)x=i.FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?x=i.HALF_FLOAT:x=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=i.SHORT;else if(h instanceof Uint32Array)x=i.UNSIGNED_INT;else if(h instanceof Int32Array)x=i.INT;else if(h instanceof Int8Array)x=i.BYTE;else if(h instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:y,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:g}}function r(f,d,h){const m=d.array,g=d.updateRanges;if(i.bindBuffer(h,f),g.length===0)i.bufferSubData(h,0,m);else{g.sort((x,E)=>x.start-E.start);let y=0;for(let x=1;x<g.length;x++){const E=g[y],M=g[x];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++y,g[y]=M)}g.length=y+1;for(let x=0,E=g.length;x<E;x++){const M=g[x];i.bufferSubData(h,M.start*m.BYTES_PER_ELEMENT,m,M.start,M.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(i.deleteBuffer(d.buffer),e.delete(f))}function u(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,f,d),h.version=f.version}}return{get:o,remove:l,update:u}}var KE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ZE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,QE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,JE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,iM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,sM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,aM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_M=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,yM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,SM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,EM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,MM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,AM="gl_FragColor = linearToOutputTexel( gl_FragColor );",bM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,RM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,CM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,PM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,LM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,DM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,NM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,UM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,OM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,FM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,BM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,VM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,GM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,WM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,XM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,YM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$M=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,KM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ZM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,QM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,JM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ew=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ow=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,dw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_w=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ew=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ww=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Tw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Aw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Dw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Nw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Uw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Iw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ow=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Bw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ww=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Yw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $w=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,nT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,iT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_T=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ST=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ET=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yt={alphahash_fragment:KE,alphahash_pars_fragment:ZE,alphamap_fragment:QE,alphamap_pars_fragment:JE,alphatest_fragment:eM,alphatest_pars_fragment:tM,aomap_fragment:nM,aomap_pars_fragment:iM,batching_pars_vertex:rM,batching_vertex:sM,begin_vertex:oM,beginnormal_vertex:aM,bsdfs:lM,iridescence_fragment:uM,bumpmap_pars_fragment:cM,clipping_planes_fragment:fM,clipping_planes_pars_fragment:dM,clipping_planes_pars_vertex:hM,clipping_planes_vertex:pM,color_fragment:mM,color_pars_fragment:gM,color_pars_vertex:vM,color_vertex:_M,common:yM,cube_uv_reflection_fragment:xM,defaultnormal_vertex:SM,displacementmap_pars_vertex:EM,displacementmap_vertex:MM,emissivemap_fragment:wM,emissivemap_pars_fragment:TM,colorspace_fragment:AM,colorspace_pars_fragment:bM,envmap_fragment:RM,envmap_common_pars_fragment:CM,envmap_pars_fragment:PM,envmap_pars_vertex:LM,envmap_physical_pars_fragment:VM,envmap_vertex:DM,fog_vertex:NM,fog_pars_vertex:UM,fog_fragment:IM,fog_pars_fragment:OM,gradientmap_pars_fragment:FM,lightmap_pars_fragment:kM,lights_lambert_fragment:BM,lights_lambert_pars_fragment:zM,lights_pars_begin:HM,lights_toon_fragment:GM,lights_toon_pars_fragment:WM,lights_phong_fragment:jM,lights_phong_pars_fragment:XM,lights_physical_fragment:qM,lights_physical_pars_fragment:YM,lights_fragment_begin:$M,lights_fragment_maps:KM,lights_fragment_end:ZM,logdepthbuf_fragment:QM,logdepthbuf_pars_fragment:JM,logdepthbuf_pars_vertex:ew,logdepthbuf_vertex:tw,map_fragment:nw,map_pars_fragment:iw,map_particle_fragment:rw,map_particle_pars_fragment:sw,metalnessmap_fragment:ow,metalnessmap_pars_fragment:aw,morphinstance_vertex:lw,morphcolor_vertex:uw,morphnormal_vertex:cw,morphtarget_pars_vertex:fw,morphtarget_vertex:dw,normal_fragment_begin:hw,normal_fragment_maps:pw,normal_pars_fragment:mw,normal_pars_vertex:gw,normal_vertex:vw,normalmap_pars_fragment:_w,clearcoat_normal_fragment_begin:yw,clearcoat_normal_fragment_maps:xw,clearcoat_pars_fragment:Sw,iridescence_pars_fragment:Ew,opaque_fragment:Mw,packing:ww,premultiplied_alpha_fragment:Tw,project_vertex:Aw,dithering_fragment:bw,dithering_pars_fragment:Rw,roughnessmap_fragment:Cw,roughnessmap_pars_fragment:Pw,shadowmap_pars_fragment:Lw,shadowmap_pars_vertex:Dw,shadowmap_vertex:Nw,shadowmask_pars_fragment:Uw,skinbase_vertex:Iw,skinning_pars_vertex:Ow,skinning_vertex:Fw,skinnormal_vertex:kw,specularmap_fragment:Bw,specularmap_pars_fragment:zw,tonemapping_fragment:Hw,tonemapping_pars_fragment:Vw,transmission_fragment:Gw,transmission_pars_fragment:Ww,uv_pars_fragment:jw,uv_pars_vertex:Xw,uv_vertex:qw,worldpos_vertex:Yw,background_vert:$w,background_frag:Kw,backgroundCube_vert:Zw,backgroundCube_frag:Qw,cube_vert:Jw,cube_frag:eT,depth_vert:tT,depth_frag:nT,distanceRGBA_vert:iT,distanceRGBA_frag:rT,equirect_vert:sT,equirect_frag:oT,linedashed_vert:aT,linedashed_frag:lT,meshbasic_vert:uT,meshbasic_frag:cT,meshlambert_vert:fT,meshlambert_frag:dT,meshmatcap_vert:hT,meshmatcap_frag:pT,meshnormal_vert:mT,meshnormal_frag:gT,meshphong_vert:vT,meshphong_frag:_T,meshphysical_vert:yT,meshphysical_frag:xT,meshtoon_vert:ST,meshtoon_frag:ET,points_vert:MT,points_frag:wT,shadow_vert:TT,shadow_frag:AT,sprite_vert:bT,sprite_frag:RT},Fe={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},Ui={basic:{uniforms:Un([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:Un([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Nt(0)}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:Un([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:Un([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:Un([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Nt(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:Un([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:Un([Fe.points,Fe.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:Un([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:Un([Fe.common,Fe.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:Un([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:Un([Fe.sprite,Fe.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distanceRGBA:{uniforms:Un([Fe.common,Fe.displacementmap,{referencePosition:{value:new de},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distanceRGBA_vert,fragmentShader:yt.distanceRGBA_frag},shadow:{uniforms:Un([Fe.lights,Fe.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};Ui.physical={uniforms:Un([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};const xu={r:0,b:0,g:0},hs=new ur,CT=new Jt;function PT(i,e,t,r,o,l,u){const f=new Nt(0);let d=l===!0?0:1,h,m,g=null,y=0,x=null;function E(C){let b=C.isScene===!0?C.background:null;return b&&b.isTexture&&(b=(C.backgroundBlurriness>0?t:e).get(b)),b}function M(C){let b=!1;const F=E(C);F===null?_(f,d):F&&F.isColor&&(_(F,1),b=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,u):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(i.autoClear||b)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(C,b){const F=E(b);F&&(F.isCubeTexture||F.mapping===Qu)?(m===void 0&&(m=new or(new ba(1,1,1),new Yr({name:"BackgroundCubeMaterial",uniforms:To(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(I,O,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),hs.copy(b.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),m.material.uniforms.envMap.value=F,m.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(CT.makeRotationFromEuler(hs)),m.material.toneMapped=Pt.getTransfer(F.colorSpace)!==Ut,(g!==F||y!==F.version||x!==i.toneMapping)&&(m.material.needsUpdate=!0,g=F,y=F.version,x=i.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null)):F&&F.isTexture&&(h===void 0&&(h=new or(new ec(2,2),new Yr({name:"BackgroundMaterial",uniforms:To(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:qr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(h)),h.material.uniforms.t2D.value=F,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.toneMapped=Pt.getTransfer(F.colorSpace)!==Ut,F.matrixAutoUpdate===!0&&F.updateMatrix(),h.material.uniforms.uvTransform.value.copy(F.matrix),(g!==F||y!==F.version||x!==i.toneMapping)&&(h.material.needsUpdate=!0,g=F,y=F.version,x=i.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null))}function _(C,b){C.getRGB(xu,s0(i)),r.buffers.color.setClear(xu.r,xu.g,xu.b,b,u)}function R(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return f},setClearColor:function(C,b=1){f.set(C),d=b,_(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(C){d=C,_(f,d)},render:M,addToRenderList:v,dispose:R}}function LT(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),r={},o=y(null);let l=o,u=!1;function f(T,U,D,B,z){let le=!1;const ne=g(B,D,U);l!==ne&&(l=ne,h(l.object)),le=x(T,B,D,z),le&&E(T,B,D,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(le||u)&&(u=!1,b(T,U,D,B),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function d(){return i.createVertexArray()}function h(T){return i.bindVertexArray(T)}function m(T){return i.deleteVertexArray(T)}function g(T,U,D){const B=D.wireframe===!0;let z=r[T.id];z===void 0&&(z={},r[T.id]=z);let le=z[U.id];le===void 0&&(le={},z[U.id]=le);let ne=le[B];return ne===void 0&&(ne=y(d()),le[B]=ne),ne}function y(T){const U=[],D=[],B=[];for(let z=0;z<t;z++)U[z]=0,D[z]=0,B[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:D,attributeDivisors:B,object:T,attributes:{},index:null}}function x(T,U,D,B){const z=l.attributes,le=U.attributes;let ne=0;const he=D.getAttributes();for(const X in he)if(he[X].location>=0){const ce=z[X];let W=le[X];if(W===void 0&&(X==="instanceMatrix"&&T.instanceMatrix&&(W=T.instanceMatrix),X==="instanceColor"&&T.instanceColor&&(W=T.instanceColor)),ce===void 0||ce.attribute!==W||W&&ce.data!==W.data)return!0;ne++}return l.attributesNum!==ne||l.index!==B}function E(T,U,D,B){const z={},le=U.attributes;let ne=0;const he=D.getAttributes();for(const X in he)if(he[X].location>=0){let ce=le[X];ce===void 0&&(X==="instanceMatrix"&&T.instanceMatrix&&(ce=T.instanceMatrix),X==="instanceColor"&&T.instanceColor&&(ce=T.instanceColor));const W={};W.attribute=ce,ce&&ce.data&&(W.data=ce.data),z[X]=W,ne++}l.attributes=z,l.attributesNum=ne,l.index=B}function M(){const T=l.newAttributes;for(let U=0,D=T.length;U<D;U++)T[U]=0}function v(T){_(T,0)}function _(T,U){const D=l.newAttributes,B=l.enabledAttributes,z=l.attributeDivisors;D[T]=1,B[T]===0&&(i.enableVertexAttribArray(T),B[T]=1),z[T]!==U&&(i.vertexAttribDivisor(T,U),z[T]=U)}function R(){const T=l.newAttributes,U=l.enabledAttributes;for(let D=0,B=U.length;D<B;D++)U[D]!==T[D]&&(i.disableVertexAttribArray(D),U[D]=0)}function C(T,U,D,B,z,le,ne){ne===!0?i.vertexAttribIPointer(T,U,D,z,le):i.vertexAttribPointer(T,U,D,B,z,le)}function b(T,U,D,B){M();const z=B.attributes,le=D.getAttributes(),ne=U.defaultAttributeValues;for(const he in le){const X=le[he];if(X.location>=0){let pe=z[he];if(pe===void 0&&(he==="instanceMatrix"&&T.instanceMatrix&&(pe=T.instanceMatrix),he==="instanceColor"&&T.instanceColor&&(pe=T.instanceColor)),pe!==void 0){const ce=pe.normalized,W=pe.itemSize,oe=e.get(pe);if(oe===void 0)continue;const Ce=oe.buffer,te=oe.type,ye=oe.bytesPerElement,Me=te===i.INT||te===i.UNSIGNED_INT||pe.gpuType===Oh;if(pe.isInterleavedBufferAttribute){const xe=pe.data,Se=xe.stride,Le=pe.offset;if(xe.isInstancedInterleavedBuffer){for(let Ne=0;Ne<X.locationSize;Ne++)_(X.location+Ne,xe.meshPerAttribute);T.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ne=0;Ne<X.locationSize;Ne++)v(X.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,Ce);for(let Ne=0;Ne<X.locationSize;Ne++)C(X.location+Ne,W/X.locationSize,te,ce,Se*ye,(Le+W/X.locationSize*Ne)*ye,Me)}else{if(pe.isInstancedBufferAttribute){for(let xe=0;xe<X.locationSize;xe++)_(X.location+xe,pe.meshPerAttribute);T.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let xe=0;xe<X.locationSize;xe++)v(X.location+xe);i.bindBuffer(i.ARRAY_BUFFER,Ce);for(let xe=0;xe<X.locationSize;xe++)C(X.location+xe,W/X.locationSize,te,ce,W*ye,W/X.locationSize*xe*ye,Me)}}else if(ne!==void 0){const ce=ne[he];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(X.location,ce);break;case 3:i.vertexAttrib3fv(X.location,ce);break;case 4:i.vertexAttrib4fv(X.location,ce);break;default:i.vertexAttrib1fv(X.location,ce)}}}}R()}function F(){V();for(const T in r){const U=r[T];for(const D in U){const B=U[D];for(const z in B)m(B[z].object),delete B[z];delete U[D]}delete r[T]}}function I(T){if(r[T.id]===void 0)return;const U=r[T.id];for(const D in U){const B=U[D];for(const z in B)m(B[z].object),delete B[z];delete U[D]}delete r[T.id]}function O(T){for(const U in r){const D=r[U];if(D[T.id]===void 0)continue;const B=D[T.id];for(const z in B)m(B[z].object),delete B[z];delete D[T.id]}}function V(){L(),u=!0,l!==o&&(l=o,h(l.object))}function L(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:V,resetDefaultState:L,dispose:F,releaseStatesOfGeometry:I,releaseStatesOfProgram:O,initAttributes:M,enableAttribute:v,disableUnusedAttributes:R}}function DT(i,e,t){let r;function o(h){r=h}function l(h,m){i.drawArrays(r,h,m),t.update(m,r,1)}function u(h,m,g){g!==0&&(i.drawArraysInstanced(r,h,m,g),t.update(m,r,g))}function f(h,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,m,0,g);let x=0;for(let E=0;E<g;E++)x+=m[E];t.update(x,r,1)}function d(h,m,g,y){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<h.length;E++)u(h[E],m[E],y[E]);else{x.multiDrawArraysInstancedWEBGL(r,h,0,m,0,y,0,g);let E=0;for(let M=0;M<g;M++)E+=m[M]*y[M];t.update(E,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function NT(i,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=i.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==Mi&&r.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const V=O===Ea&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==lr&&r.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==rr&&!V)}function d(O){if(O==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=d(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const g=t.logarithmicDepthBuffer===!0,y=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),x=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),F=E>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:g,reverseDepthBuffer:y,maxTextures:x,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:R,maxVaryings:C,maxFragmentUniforms:b,vertexTextures:F,maxSamples:I}}function UT(i){const e=this;let t=null,r=0,o=!1,l=!1;const u=new ms,f=new vt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const x=g.length!==0||y||r!==0||o;return o=y,r=g.length,x},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,y){t=m(g,y,0)},this.setState=function(g,y,x){const E=g.clippingPlanes,M=g.clipIntersection,v=g.clipShadows,_=i.get(g);if(!o||E===null||E.length===0||l&&!v)l?m(null):h();else{const R=l?0:r,C=R*4;let b=_.clippingState||null;d.value=b,b=m(E,y,C,x);for(let F=0;F!==C;++F)b[F]=t[F];_.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=R}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(g,y,x,E){const M=g!==null?g.length:0;let v=null;if(M!==0){if(v=d.value,E!==!0||v===null){const _=x+M*4,R=y.matrixWorldInverse;f.getNormalMatrix(R),(v===null||v.length<_)&&(v=new Float32Array(_));for(let C=0,b=x;C!==M;++C,b+=4)u.copy(g[C]).applyMatrix4(R,f),u.normal.toArray(v,b),v[b+3]=u.constant}d.value=v,d.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,v}}function IT(i){let e=new WeakMap;function t(u,f){return f===jd?u.mapping=xo:f===Xd&&(u.mapping=So),u}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===jd||f===Xd)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const h=new kE(d.height);return h.fromEquirectangularTexture(i,u),e.set(u,h),u.addEventListener("dispose",o),t(h.texture,u.mapping)}else return null}}return u}function o(u){const f=u.target;f.removeEventListener("dispose",o);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const mo=4,Rv=[.125,.215,.35,.446,.526,.582],_s=20,Ed=new XE,Cv=new Nt;let Md=null,wd=0,Td=0,Ad=!1;const gs=(1+Math.sqrt(5))/2,fo=1/gs,Pv=[new de(-gs,fo,0),new de(gs,fo,0),new de(-fo,0,gs),new de(fo,0,gs),new de(0,gs,-fo),new de(0,gs,fo),new de(-1,1,-1),new de(1,1,-1),new de(-1,1,1),new de(1,1,1)];class Lv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){Md=this._renderer.getRenderTarget(),wd=this._renderer.getActiveCubeFace(),Td=this._renderer.getActiveMipmapLevel(),Ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Md,wd,Td),this._renderer.xr.enabled=Ad,e.scissorTest=!1,Su(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xo||e.mapping===So?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Md=this._renderer.getRenderTarget(),wd=this._renderer.getActiveCubeFace(),Td=this._renderer.getActiveMipmapLevel(),Ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Oi,minFilter:Oi,generateMipmaps:!1,type:Ea,format:Mi,colorSpace:wo,depthBuffer:!1},o=Dv(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dv(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=OT(l)),this._blurMaterial=FT(l,e,t)}return o}_compileMaterial(e){const t=new or(this._lodPlanes[0],e);this._renderer.compile(t,Ed)}_sceneToCubeUV(e,t,r,o){const f=new fi(90,1,t,r),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,y=m.toneMapping;m.getClearColor(Cv),m.toneMapping=jr,m.autoClear=!1;const x=new n0({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1}),E=new or(new ba,x);let M=!1;const v=e.background;v?v.isColor&&(x.color.copy(v),e.background=null,M=!0):(x.color.copy(Cv),M=!0);for(let _=0;_<6;_++){const R=_%3;R===0?(f.up.set(0,d[_],0),f.lookAt(h[_],0,0)):R===1?(f.up.set(0,0,d[_]),f.lookAt(0,h[_],0)):(f.up.set(0,d[_],0),f.lookAt(0,0,h[_]));const C=this._cubeSize;Su(o,R*C,_>2?C:0,C,C),m.setRenderTarget(o),M&&m.render(E,f),m.render(e,f)}E.geometry.dispose(),E.material.dispose(),m.toneMapping=y,m.autoClear=g,e.background=v}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===xo||e.mapping===So;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nv());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new or(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;Su(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(u,Ed)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Pv[(o-l-1)%Pv.length];this._blur(e,l-1,l,u,f)}t.autoClear=r}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,f){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new or(this._lodPlanes[o],h),y=h.uniforms,x=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*_s-1),M=l/E,v=isFinite(l)?1+Math.floor(m*M):_s;v>_s&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${_s}`);const _=[];let R=0;for(let O=0;O<_s;++O){const V=O/M,L=Math.exp(-V*V/2);_.push(L),O===0?R+=L:O<v&&(R+=2*L)}for(let O=0;O<_.length;O++)_[O]=_[O]/R;y.envMap.value=e.texture,y.samples.value=v,y.weights.value=_,y.latitudinal.value=u==="latitudinal",f&&(y.poleAxis.value=f);const{_lodMax:C}=this;y.dTheta.value=E,y.mipInt.value=C-r;const b=this._sizeLods[o],F=3*b*(o>C-mo?o-C+mo:0),I=4*(this._cubeSize-b);Su(t,F,I,3*b,2*b),d.setRenderTarget(t),d.render(g,Ed)}}function OT(i){const e=[],t=[],r=[];let o=i;const l=i-mo+1+Rv.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);t.push(f);let d=1/f;u>i-mo?d=Rv[u-i+mo-1]:u===0&&(d=0),r.push(d);const h=1/(f-2),m=-h,g=1+h,y=[m,m,g,m,g,g,m,m,g,g,m,g],x=6,E=6,M=3,v=2,_=1,R=new Float32Array(M*E*x),C=new Float32Array(v*E*x),b=new Float32Array(_*E*x);for(let I=0;I<x;I++){const O=I%3*2/3-1,V=I>2?0:-1,L=[O,V,0,O+2/3,V,0,O+2/3,V+1,0,O,V,0,O+2/3,V+1,0,O,V+1,0];R.set(L,M*E*I),C.set(y,v*E*I);const T=[I,I,I,I,I,I];b.set(T,_*E*I)}const F=new fr;F.setAttribute("position",new ki(R,M)),F.setAttribute("uv",new ki(C,v)),F.setAttribute("faceIndex",new ki(b,_)),e.push(F),o>mo&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Dv(i,e,t){const r=new As(i,e,t);return r.texture.mapping=Qu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Su(i,e,t,r,o){i.viewport.set(e,t,r,o),i.scissor.set(e,t,r,o)}function FT(i,e,t){const r=new Float32Array(_s),o=new de(0,1,0);return new Yr({name:"SphericalGaussianBlur",defines:{n:_s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wr,depthTest:!1,depthWrite:!1})}function Nv(){return new Yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wr,depthTest:!1,depthWrite:!1})}function Uv(){return new Yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wr,depthTest:!1,depthWrite:!1})}function Vh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kT(i){let e=new WeakMap,t=null;function r(f){if(f&&f.isTexture){const d=f.mapping,h=d===jd||d===Xd,m=d===xo||d===So;if(h||m){let g=e.get(f);const y=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==y)return t===null&&(t=new Lv(i)),g=h?t.fromEquirectangular(f,g):t.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{const x=f.image;return h&&x&&x.height>0||m&&x&&o(x)?(t===null&&(t=new Lv(i)),g=h?t.fromEquirectangular(f):t.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function o(f){let d=0;const h=6;for(let m=0;m<h;m++)f[m]!==void 0&&d++;return d===h}function l(f){const d=f.target;d.removeEventListener("dispose",l);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function BT(i){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=i.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&po("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function zT(i,e,t,r){const o={},l=new WeakMap;function u(g){const y=g.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);y.removeEventListener("dispose",u),delete o[y.id];const x=l.get(y);x&&(e.remove(x),l.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function f(g,y){return o[y.id]===!0||(y.addEventListener("dispose",u),o[y.id]=!0,t.memory.geometries++),y}function d(g){const y=g.attributes;for(const x in y)e.update(y[x],i.ARRAY_BUFFER)}function h(g){const y=[],x=g.index,E=g.attributes.position;let M=0;if(x!==null){const R=x.array;M=x.version;for(let C=0,b=R.length;C<b;C+=3){const F=R[C+0],I=R[C+1],O=R[C+2];y.push(F,I,I,O,O,F)}}else if(E!==void 0){const R=E.array;M=E.version;for(let C=0,b=R.length/3-1;C<b;C+=3){const F=C+0,I=C+1,O=C+2;y.push(F,I,I,O,O,F)}}else return;const v=new(K_(y)?r0:i0)(y,1);v.version=M;const _=l.get(g);_&&e.remove(_),l.set(g,v)}function m(g){const y=l.get(g);if(y){const x=g.index;x!==null&&y.version<x.version&&h(g)}else h(g);return l.get(g)}return{get:f,update:d,getWireframeAttribute:m}}function HT(i,e,t){let r;function o(y){r=y}let l,u;function f(y){l=y.type,u=y.bytesPerElement}function d(y,x){i.drawElements(r,x,l,y*u),t.update(x,r,1)}function h(y,x,E){E!==0&&(i.drawElementsInstanced(r,x,l,y*u,E),t.update(x,r,E))}function m(y,x,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,l,y,0,E);let v=0;for(let _=0;_<E;_++)v+=x[_];t.update(v,r,1)}function g(y,x,E,M){if(E===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<y.length;_++)h(y[_]/u,x[_],M[_]);else{v.multiDrawElementsInstancedWEBGL(r,x,0,l,y,0,M,0,E);let _=0;for(let R=0;R<E;R++)_+=x[R]*M[R];t.update(_,r,1)}}this.setMode=o,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function VT(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case i.TRIANGLES:t.triangles+=f*(l/3);break;case i.LINES:t.lines+=f*(l/2);break;case i.LINE_STRIP:t.lines+=f*(l-1);break;case i.LINE_LOOP:t.lines+=f*l;break;case i.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function GT(i,e,t){const r=new WeakMap,o=new Qt;function l(u,f,d){const h=u.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=m!==void 0?m.length:0;let y=r.get(f);if(y===void 0||y.count!==g){let L=function(){O.dispose(),r.delete(f),f.removeEventListener("dispose",L)};y!==void 0&&y.texture.dispose();const x=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,M=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],_=f.morphAttributes.normal||[],R=f.morphAttributes.color||[];let C=0;x===!0&&(C=1),E===!0&&(C=2),M===!0&&(C=3);let b=f.attributes.position.count*C,F=1;b>e.maxTextureSize&&(F=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const I=new Float32Array(b*F*4*g),O=new Q_(I,b,F,g);O.type=rr,O.needsUpdate=!0;const V=C*4;for(let T=0;T<g;T++){const U=v[T],D=_[T],B=R[T],z=b*F*4*T;for(let le=0;le<U.count;le++){const ne=le*V;x===!0&&(o.fromBufferAttribute(U,le),I[z+ne+0]=o.x,I[z+ne+1]=o.y,I[z+ne+2]=o.z,I[z+ne+3]=0),E===!0&&(o.fromBufferAttribute(D,le),I[z+ne+4]=o.x,I[z+ne+5]=o.y,I[z+ne+6]=o.z,I[z+ne+7]=0),M===!0&&(o.fromBufferAttribute(B,le),I[z+ne+8]=o.x,I[z+ne+9]=o.y,I[z+ne+10]=o.z,I[z+ne+11]=B.itemSize===4?o.w:1)}}y={count:g,texture:O,size:new Ot(b,F)},r.set(f,y),f.addEventListener("dispose",L)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",u.morphTexture,t);else{let x=0;for(let M=0;M<h.length;M++)x+=h[M];const E=f.morphTargetsRelative?1:1-x;d.getUniforms().setValue(i,"morphTargetBaseInfluence",E),d.getUniforms().setValue(i,"morphTargetInfluences",h)}d.getUniforms().setValue(i,"morphTargetsTexture",y.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",y.size)}return{update:l}}function WT(i,e,t,r){let o=new WeakMap;function l(d){const h=r.render.frame,m=d.geometry,g=e.get(d,m);if(o.get(g)!==h&&(e.update(g),o.set(g,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),o.get(d)!==h&&(t.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,i.ARRAY_BUFFER),o.set(d,h))),d.isSkinnedMesh){const y=d.skeleton;o.get(y)!==h&&(y.update(),o.set(y,h))}return g}function u(){o=new WeakMap}function f(d){const h=d.target;h.removeEventListener("dispose",f),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:l,dispose:u}}const d0=new Xn,Iv=new c0(1,1),h0=new Q_,p0=new SE,m0=new a0,Ov=[],Fv=[],kv=new Float32Array(16),Bv=new Float32Array(9),zv=new Float32Array(4);function bo(i,e,t){const r=i[0];if(r<=0||r>0)return i;const o=e*t;let l=Ov[o];if(l===void 0&&(l=new Float32Array(o),Ov[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,i[u].toArray(l,f)}return l}function cn(i,e){if(i.length!==e.length)return!1;for(let t=0,r=i.length;t<r;t++)if(i[t]!==e[t])return!1;return!0}function fn(i,e){for(let t=0,r=e.length;t<r;t++)i[t]=e[t]}function tc(i,e){let t=Fv[e];t===void 0&&(t=new Int32Array(e),Fv[e]=t);for(let r=0;r!==e;++r)t[r]=i.allocateTextureUnit();return t}function jT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function XT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2fv(this.addr,e),fn(t,e)}}function qT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;i.uniform3fv(this.addr,e),fn(t,e)}}function YT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4fv(this.addr,e),fn(t,e)}}function $T(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(cn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(cn(t,r))return;zv.set(r),i.uniformMatrix2fv(this.addr,!1,zv),fn(t,r)}}function KT(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(cn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(cn(t,r))return;Bv.set(r),i.uniformMatrix3fv(this.addr,!1,Bv),fn(t,r)}}function ZT(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(cn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(cn(t,r))return;kv.set(r),i.uniformMatrix4fv(this.addr,!1,kv),fn(t,r)}}function QT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function JT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2iv(this.addr,e),fn(t,e)}}function e1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;i.uniform3iv(this.addr,e),fn(t,e)}}function t1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4iv(this.addr,e),fn(t,e)}}function n1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function i1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2uiv(this.addr,e),fn(t,e)}}function r1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;i.uniform3uiv(this.addr,e),fn(t,e)}}function s1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4uiv(this.addr,e),fn(t,e)}}function o1(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o);let l;this.type===i.SAMPLER_2D_SHADOW?(Iv.compareFunction=$_,l=Iv):l=d0,t.setTexture2D(e||l,o)}function a1(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||p0,o)}function l1(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||m0,o)}function u1(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||h0,o)}function c1(i){switch(i){case 5126:return jT;case 35664:return XT;case 35665:return qT;case 35666:return YT;case 35674:return $T;case 35675:return KT;case 35676:return ZT;case 5124:case 35670:return QT;case 35667:case 35671:return JT;case 35668:case 35672:return e1;case 35669:case 35673:return t1;case 5125:return n1;case 36294:return i1;case 36295:return r1;case 36296:return s1;case 35678:case 36198:case 36298:case 36306:case 35682:return o1;case 35679:case 36299:case 36307:return a1;case 35680:case 36300:case 36308:case 36293:return l1;case 36289:case 36303:case 36311:case 36292:return u1}}function f1(i,e){i.uniform1fv(this.addr,e)}function d1(i,e){const t=bo(e,this.size,2);i.uniform2fv(this.addr,t)}function h1(i,e){const t=bo(e,this.size,3);i.uniform3fv(this.addr,t)}function p1(i,e){const t=bo(e,this.size,4);i.uniform4fv(this.addr,t)}function m1(i,e){const t=bo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function g1(i,e){const t=bo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function v1(i,e){const t=bo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function _1(i,e){i.uniform1iv(this.addr,e)}function y1(i,e){i.uniform2iv(this.addr,e)}function x1(i,e){i.uniform3iv(this.addr,e)}function S1(i,e){i.uniform4iv(this.addr,e)}function E1(i,e){i.uniform1uiv(this.addr,e)}function M1(i,e){i.uniform2uiv(this.addr,e)}function w1(i,e){i.uniform3uiv(this.addr,e)}function T1(i,e){i.uniform4uiv(this.addr,e)}function A1(i,e,t){const r=this.cache,o=e.length,l=tc(t,o);cn(r,l)||(i.uniform1iv(this.addr,l),fn(r,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||d0,l[u])}function b1(i,e,t){const r=this.cache,o=e.length,l=tc(t,o);cn(r,l)||(i.uniform1iv(this.addr,l),fn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||p0,l[u])}function R1(i,e,t){const r=this.cache,o=e.length,l=tc(t,o);cn(r,l)||(i.uniform1iv(this.addr,l),fn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||m0,l[u])}function C1(i,e,t){const r=this.cache,o=e.length,l=tc(t,o);cn(r,l)||(i.uniform1iv(this.addr,l),fn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||h0,l[u])}function P1(i){switch(i){case 5126:return f1;case 35664:return d1;case 35665:return h1;case 35666:return p1;case 35674:return m1;case 35675:return g1;case 35676:return v1;case 5124:case 35670:return _1;case 35667:case 35671:return y1;case 35668:case 35672:return x1;case 35669:case 35673:return S1;case 5125:return E1;case 36294:return M1;case 36295:return w1;case 36296:return T1;case 35678:case 36198:case 36298:case 36306:case 35682:return A1;case 35679:case 36299:case 36307:return b1;case 35680:case 36300:case 36308:case 36293:return R1;case 36289:case 36303:case 36311:case 36292:return C1}}class L1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=c1(t.type)}}class D1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=P1(t.type)}}class N1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const bd=/(\w+)(\])?(\[|\.)?/g;function Hv(i,e){i.seq.push(e),i.map[e.id]=e}function U1(i,e,t){const r=i.name,o=r.length;for(bd.lastIndex=0;;){const l=bd.exec(r),u=bd.lastIndex;let f=l[1];const d=l[2]==="]",h=l[3];if(d&&(f=f|0),h===void 0||h==="["&&u+2===o){Hv(t,h===void 0?new L1(f,i,e):new D1(f,i,e));break}else{let g=t.map[f];g===void 0&&(g=new N1(f),Hv(t,g)),t=g}}}class Ru{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);U1(l,u,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],d=r[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function Vv(i,e,t){const r=i.createShader(e);return i.shaderSource(r,t),i.compileShader(r),r}const I1=37297;let O1=0;function F1(i,e){const t=i.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const Gv=new vt;function k1(i){Pt._getMatrix(Gv,Pt.workingColorSpace,i);const e=`mat3( ${Gv.elements.map(t=>t.toFixed(4))} )`;switch(Pt.getTransfer(i)){case Ou:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Wv(i,e,t){const r=i.getShaderParameter(e,i.COMPILE_STATUS),o=i.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+F1(i.getShaderSource(e),u)}else return o}function B1(i,e){const t=k1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function z1(i,e){let t;switch(e){case XS:t="Linear";break;case qS:t="Reinhard";break;case YS:t="Cineon";break;case $S:t="ACESFilmic";break;case ZS:t="AgX";break;case QS:t="Neutral";break;case KS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Eu=new de;function H1(){Pt.getLuminanceCoefficients(Eu);const i=Eu.x.toFixed(4),e=Eu.y.toFixed(4),t=Eu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_a).join(`
`)}function G1(i){const e=[];for(const t in i){const r=i[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function W1(i,e){const t={},r=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=i.getActiveAttrib(e,o),u=l.name;let f=1;l.type===i.FLOAT_MAT2&&(f=2),l.type===i.FLOAT_MAT3&&(f=3),l.type===i.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:i.getAttribLocation(e,u),locationSize:f}}return t}function _a(i){return i!==""}function jv(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xv(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const j1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eh(i){return i.replace(j1,q1)}const X1=new Map;function q1(i,e){let t=yt[e];if(t===void 0){const r=X1.get(e);if(r!==void 0)t=yt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Eh(t)}const Y1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qv(i){return i.replace(Y1,$1)}function $1(i,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Yv(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function K1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===O_?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===TS?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===nr&&(e="SHADOWMAP_TYPE_VSM"),e}function Z1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case xo:case So:e="ENVMAP_TYPE_CUBE";break;case Qu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Q1(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case So:e="ENVMAP_MODE_REFRACTION";break}return e}function J1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case F_:e="ENVMAP_BLENDING_MULTIPLY";break;case WS:e="ENVMAP_BLENDING_MIX";break;case jS:e="ENVMAP_BLENDING_ADD";break}return e}function eA(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function tA(i,e,t,r){const o=i.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const d=K1(t),h=Z1(t),m=Q1(t),g=J1(t),y=eA(t),x=V1(t),E=G1(l),M=o.createProgram();let v,_,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(_a).join(`
`),v.length>0&&(v+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(_a).join(`
`),_.length>0&&(_+=`
`)):(v=[Yv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_a).join(`
`),_=[Yv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jr?"#define TONE_MAPPING":"",t.toneMapping!==jr?yt.tonemapping_pars_fragment:"",t.toneMapping!==jr?z1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,B1("linearToOutputTexel",t.outputColorSpace),H1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_a).join(`
`)),u=Eh(u),u=jv(u,t),u=Xv(u,t),f=Eh(f),f=jv(f,t),f=Xv(f,t),u=qv(u),f=qv(f),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,v=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,_=["#define varying in",t.glslVersion===av?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===av?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const C=R+v+u,b=R+_+f,F=Vv(o,o.VERTEX_SHADER,C),I=Vv(o,o.FRAGMENT_SHADER,b);o.attachShader(M,F),o.attachShader(M,I),t.index0AttributeName!==void 0?o.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(M,0,"position"),o.linkProgram(M);function O(U){if(i.debug.checkShaderErrors){const D=o.getProgramInfoLog(M).trim(),B=o.getShaderInfoLog(F).trim(),z=o.getShaderInfoLog(I).trim();let le=!0,ne=!0;if(o.getProgramParameter(M,o.LINK_STATUS)===!1)if(le=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,M,F,I);else{const he=Wv(o,F,"vertex"),X=Wv(o,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(M,o.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+D+`
`+he+`
`+X)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(B===""||z==="")&&(ne=!1);ne&&(U.diagnostics={runnable:le,programLog:D,vertexShader:{log:B,prefix:v},fragmentShader:{log:z,prefix:_}})}o.deleteShader(F),o.deleteShader(I),V=new Ru(o,M),L=W1(o,M)}let V;this.getUniforms=function(){return V===void 0&&O(this),V};let L;this.getAttributes=function(){return L===void 0&&O(this),L};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=o.getProgramParameter(M,I1)),T},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=O1++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=F,this.fragmentShader=I,this}let nA=0;class iA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new rA(e),t.set(e,r)),r}}class rA{constructor(e){this.id=nA++,this.code=e,this.usedTimes=0}}function sA(i,e,t,r,o,l,u){const f=new e0,d=new iA,h=new Set,m=[],g=o.logarithmicDepthBuffer,y=o.vertexTextures;let x=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(L){return h.add(L),L===0?"uv":`uv${L}`}function v(L,T,U,D,B){const z=D.fog,le=B.geometry,ne=L.isMeshStandardMaterial?D.environment:null,he=(L.isMeshStandardMaterial?t:e).get(L.envMap||ne),X=he&&he.mapping===Qu?he.image.height:null,pe=E[L.type];L.precision!==null&&(x=o.getMaxPrecision(L.precision),x!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",x,"instead."));const ce=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,W=ce!==void 0?ce.length:0;let oe=0;le.morphAttributes.position!==void 0&&(oe=1),le.morphAttributes.normal!==void 0&&(oe=2),le.morphAttributes.color!==void 0&&(oe=3);let Ce,te,ye,Me;if(pe){const At=Ui[pe];Ce=At.vertexShader,te=At.fragmentShader}else Ce=L.vertexShader,te=L.fragmentShader,d.update(L),ye=d.getVertexShaderID(L),Me=d.getFragmentShaderID(L);const xe=i.getRenderTarget(),Se=i.state.buffers.depth.getReversed(),Le=B.isInstancedMesh===!0,Ne=B.isBatchedMesh===!0,ct=!!L.map,_t=!!L.matcap,je=!!he,G=!!L.aoMap,Lt=!!L.lightMap,lt=!!L.bumpMap,pt=!!L.normalMap,k=!!L.displacementMap,J=!!L.emissiveMap,K=!!L.metalnessMap,P=!!L.roughnessMap,w=L.anisotropy>0,j=L.clearcoat>0,se=L.dispersion>0,me=L.iridescence>0,ge=L.sheen>0,Ue=L.transmission>0,De=w&&!!L.anisotropyMap,Ve=j&&!!L.clearcoatMap,ht=j&&!!L.clearcoatNormalMap,Ae=j&&!!L.clearcoatRoughnessMap,We=me&&!!L.iridescenceMap,tt=me&&!!L.iridescenceThicknessMap,st=ge&&!!L.sheenColorMap,Ge=ge&&!!L.sheenRoughnessMap,xt=!!L.specularMap,ft=!!L.specularColorMap,Dt=!!L.specularIntensityMap,$=Ue&&!!L.transmissionMap,Ie=Ue&&!!L.thicknessMap,ve=!!L.gradientMap,Ee=!!L.alphaMap,Be=L.alphaTest>0,ke=!!L.alphaHash,dt=!!L.extensions;let kt=jr;L.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(kt=i.toneMapping);const on={shaderID:pe,shaderType:L.type,shaderName:L.name,vertexShader:Ce,fragmentShader:te,defines:L.defines,customVertexShaderID:ye,customFragmentShaderID:Me,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:x,batching:Ne,batchingColor:Ne&&B._colorsTexture!==null,instancing:Le,instancingColor:Le&&B.instanceColor!==null,instancingMorph:Le&&B.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:xe===null?i.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:wo,alphaToCoverage:!!L.alphaToCoverage,map:ct,matcap:_t,envMap:je,envMapMode:je&&he.mapping,envMapCubeUVHeight:X,aoMap:G,lightMap:Lt,bumpMap:lt,normalMap:pt,displacementMap:y&&k,emissiveMap:J,normalMapObjectSpace:pt&&L.normalMapType===iE,normalMapTangentSpace:pt&&L.normalMapType===nE,metalnessMap:K,roughnessMap:P,anisotropy:w,anisotropyMap:De,clearcoat:j,clearcoatMap:Ve,clearcoatNormalMap:ht,clearcoatRoughnessMap:Ae,dispersion:se,iridescence:me,iridescenceMap:We,iridescenceThicknessMap:tt,sheen:ge,sheenColorMap:st,sheenRoughnessMap:Ge,specularMap:xt,specularColorMap:ft,specularIntensityMap:Dt,transmission:Ue,transmissionMap:$,thicknessMap:Ie,gradientMap:ve,opaque:L.transparent===!1&&L.blending===go&&L.alphaToCoverage===!1,alphaMap:Ee,alphaTest:Be,alphaHash:ke,combine:L.combine,mapUv:ct&&M(L.map.channel),aoMapUv:G&&M(L.aoMap.channel),lightMapUv:Lt&&M(L.lightMap.channel),bumpMapUv:lt&&M(L.bumpMap.channel),normalMapUv:pt&&M(L.normalMap.channel),displacementMapUv:k&&M(L.displacementMap.channel),emissiveMapUv:J&&M(L.emissiveMap.channel),metalnessMapUv:K&&M(L.metalnessMap.channel),roughnessMapUv:P&&M(L.roughnessMap.channel),anisotropyMapUv:De&&M(L.anisotropyMap.channel),clearcoatMapUv:Ve&&M(L.clearcoatMap.channel),clearcoatNormalMapUv:ht&&M(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&M(L.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&M(L.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&M(L.iridescenceThicknessMap.channel),sheenColorMapUv:st&&M(L.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&M(L.sheenRoughnessMap.channel),specularMapUv:xt&&M(L.specularMap.channel),specularColorMapUv:ft&&M(L.specularColorMap.channel),specularIntensityMapUv:Dt&&M(L.specularIntensityMap.channel),transmissionMapUv:$&&M(L.transmissionMap.channel),thicknessMapUv:Ie&&M(L.thicknessMap.channel),alphaMapUv:Ee&&M(L.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(pt||w),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!le.attributes.uv&&(ct||Ee),fog:!!z,useFog:L.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Se,skinning:B.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:oe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:L.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:kt,decodeVideoTexture:ct&&L.map.isVideoTexture===!0&&Pt.getTransfer(L.map.colorSpace)===Ut,decodeVideoTextureEmissive:J&&L.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(L.emissiveMap.colorSpace)===Ut,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===ir,flipSided:L.side===jn,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:dt&&L.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&L.extensions.multiDraw===!0||Ne)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return on.vertexUv1s=h.has(1),on.vertexUv2s=h.has(2),on.vertexUv3s=h.has(3),h.clear(),on}function _(L){const T=[];if(L.shaderID?T.push(L.shaderID):(T.push(L.customVertexShaderID),T.push(L.customFragmentShaderID)),L.defines!==void 0)for(const U in L.defines)T.push(U),T.push(L.defines[U]);return L.isRawShaderMaterial===!1&&(R(T,L),C(T,L),T.push(i.outputColorSpace)),T.push(L.customProgramCacheKey),T.join()}function R(L,T){L.push(T.precision),L.push(T.outputColorSpace),L.push(T.envMapMode),L.push(T.envMapCubeUVHeight),L.push(T.mapUv),L.push(T.alphaMapUv),L.push(T.lightMapUv),L.push(T.aoMapUv),L.push(T.bumpMapUv),L.push(T.normalMapUv),L.push(T.displacementMapUv),L.push(T.emissiveMapUv),L.push(T.metalnessMapUv),L.push(T.roughnessMapUv),L.push(T.anisotropyMapUv),L.push(T.clearcoatMapUv),L.push(T.clearcoatNormalMapUv),L.push(T.clearcoatRoughnessMapUv),L.push(T.iridescenceMapUv),L.push(T.iridescenceThicknessMapUv),L.push(T.sheenColorMapUv),L.push(T.sheenRoughnessMapUv),L.push(T.specularMapUv),L.push(T.specularColorMapUv),L.push(T.specularIntensityMapUv),L.push(T.transmissionMapUv),L.push(T.thicknessMapUv),L.push(T.combine),L.push(T.fogExp2),L.push(T.sizeAttenuation),L.push(T.morphTargetsCount),L.push(T.morphAttributeCount),L.push(T.numDirLights),L.push(T.numPointLights),L.push(T.numSpotLights),L.push(T.numSpotLightMaps),L.push(T.numHemiLights),L.push(T.numRectAreaLights),L.push(T.numDirLightShadows),L.push(T.numPointLightShadows),L.push(T.numSpotLightShadows),L.push(T.numSpotLightShadowsWithMaps),L.push(T.numLightProbes),L.push(T.shadowMapType),L.push(T.toneMapping),L.push(T.numClippingPlanes),L.push(T.numClipIntersection),L.push(T.depthPacking)}function C(L,T){f.disableAll(),T.supportsVertexTextures&&f.enable(0),T.instancing&&f.enable(1),T.instancingColor&&f.enable(2),T.instancingMorph&&f.enable(3),T.matcap&&f.enable(4),T.envMap&&f.enable(5),T.normalMapObjectSpace&&f.enable(6),T.normalMapTangentSpace&&f.enable(7),T.clearcoat&&f.enable(8),T.iridescence&&f.enable(9),T.alphaTest&&f.enable(10),T.vertexColors&&f.enable(11),T.vertexAlphas&&f.enable(12),T.vertexUv1s&&f.enable(13),T.vertexUv2s&&f.enable(14),T.vertexUv3s&&f.enable(15),T.vertexTangents&&f.enable(16),T.anisotropy&&f.enable(17),T.alphaHash&&f.enable(18),T.batching&&f.enable(19),T.dispersion&&f.enable(20),T.batchingColor&&f.enable(21),L.push(f.mask),f.disableAll(),T.fog&&f.enable(0),T.useFog&&f.enable(1),T.flatShading&&f.enable(2),T.logarithmicDepthBuffer&&f.enable(3),T.reverseDepthBuffer&&f.enable(4),T.skinning&&f.enable(5),T.morphTargets&&f.enable(6),T.morphNormals&&f.enable(7),T.morphColors&&f.enable(8),T.premultipliedAlpha&&f.enable(9),T.shadowMapEnabled&&f.enable(10),T.doubleSided&&f.enable(11),T.flipSided&&f.enable(12),T.useDepthPacking&&f.enable(13),T.dithering&&f.enable(14),T.transmission&&f.enable(15),T.sheen&&f.enable(16),T.opaque&&f.enable(17),T.pointsUvs&&f.enable(18),T.decodeVideoTexture&&f.enable(19),T.decodeVideoTextureEmissive&&f.enable(20),T.alphaToCoverage&&f.enable(21),L.push(f.mask)}function b(L){const T=E[L.type];let U;if(T){const D=Ui[T];U=UE.clone(D.uniforms)}else U=L.uniforms;return U}function F(L,T){let U;for(let D=0,B=m.length;D<B;D++){const z=m[D];if(z.cacheKey===T){U=z,++U.usedTimes;break}}return U===void 0&&(U=new tA(i,T,L,l),m.push(U)),U}function I(L){if(--L.usedTimes===0){const T=m.indexOf(L);m[T]=m[m.length-1],m.pop(),L.destroy()}}function O(L){d.remove(L)}function V(){d.dispose()}return{getParameters:v,getProgramCacheKey:_,getUniforms:b,acquireProgram:F,releaseProgram:I,releaseShaderCache:O,programs:m,dispose:V}}function oA(){let i=new WeakMap;function e(u){return i.has(u)}function t(u){let f=i.get(u);return f===void 0&&(f={},i.set(u,f)),f}function r(u){i.delete(u)}function o(u,f,d){i.get(u)[f]=d}function l(){i=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function aA(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function $v(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Kv(){const i=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(g,y,x,E,M,v){let _=i[e];return _===void 0?(_={id:g.id,object:g,geometry:y,material:x,groupOrder:E,renderOrder:g.renderOrder,z:M,group:v},i[e]=_):(_.id=g.id,_.object=g,_.geometry=y,_.material=x,_.groupOrder=E,_.renderOrder=g.renderOrder,_.z=M,_.group=v),e++,_}function f(g,y,x,E,M,v){const _=u(g,y,x,E,M,v);x.transmission>0?r.push(_):x.transparent===!0?o.push(_):t.push(_)}function d(g,y,x,E,M,v){const _=u(g,y,x,E,M,v);x.transmission>0?r.unshift(_):x.transparent===!0?o.unshift(_):t.unshift(_)}function h(g,y){t.length>1&&t.sort(g||aA),r.length>1&&r.sort(y||$v),o.length>1&&o.sort(y||$v)}function m(){for(let g=e,y=i.length;g<y;g++){const x=i[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:f,unshift:d,finish:m,sort:h}}function lA(){let i=new WeakMap;function e(r,o){const l=i.get(r);let u;return l===void 0?(u=new Kv,i.set(r,[u])):o>=l.length?(u=new Kv,l.push(u)):u=l[o],u}function t(){i=new WeakMap}return{get:e,dispose:t}}function uA(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new de,color:new Nt};break;case"SpotLight":t={position:new de,direction:new de,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new de,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new de,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":t={color:new Nt,position:new de,halfWidth:new de,halfHeight:new de};break}return i[e.id]=t,t}}}function cA(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let fA=0;function dA(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function hA(i){const e=new uA,t=cA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new de);const o=new de,l=new Jt,u=new Jt;function f(h){let m=0,g=0,y=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let x=0,E=0,M=0,v=0,_=0,R=0,C=0,b=0,F=0,I=0,O=0;h.sort(dA);for(let L=0,T=h.length;L<T;L++){const U=h[L],D=U.color,B=U.intensity,z=U.distance,le=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)m+=D.r*B,g+=D.g*B,y+=D.b*B;else if(U.isLightProbe){for(let ne=0;ne<9;ne++)r.probe[ne].addScaledVector(U.sh.coefficients[ne],B);O++}else if(U.isDirectionalLight){const ne=e.get(U);if(ne.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const he=U.shadow,X=t.get(U);X.shadowIntensity=he.intensity,X.shadowBias=he.bias,X.shadowNormalBias=he.normalBias,X.shadowRadius=he.radius,X.shadowMapSize=he.mapSize,r.directionalShadow[x]=X,r.directionalShadowMap[x]=le,r.directionalShadowMatrix[x]=U.shadow.matrix,R++}r.directional[x]=ne,x++}else if(U.isSpotLight){const ne=e.get(U);ne.position.setFromMatrixPosition(U.matrixWorld),ne.color.copy(D).multiplyScalar(B),ne.distance=z,ne.coneCos=Math.cos(U.angle),ne.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),ne.decay=U.decay,r.spot[M]=ne;const he=U.shadow;if(U.map&&(r.spotLightMap[F]=U.map,F++,he.updateMatrices(U),U.castShadow&&I++),r.spotLightMatrix[M]=he.matrix,U.castShadow){const X=t.get(U);X.shadowIntensity=he.intensity,X.shadowBias=he.bias,X.shadowNormalBias=he.normalBias,X.shadowRadius=he.radius,X.shadowMapSize=he.mapSize,r.spotShadow[M]=X,r.spotShadowMap[M]=le,b++}M++}else if(U.isRectAreaLight){const ne=e.get(U);ne.color.copy(D).multiplyScalar(B),ne.halfWidth.set(U.width*.5,0,0),ne.halfHeight.set(0,U.height*.5,0),r.rectArea[v]=ne,v++}else if(U.isPointLight){const ne=e.get(U);if(ne.color.copy(U.color).multiplyScalar(U.intensity),ne.distance=U.distance,ne.decay=U.decay,U.castShadow){const he=U.shadow,X=t.get(U);X.shadowIntensity=he.intensity,X.shadowBias=he.bias,X.shadowNormalBias=he.normalBias,X.shadowRadius=he.radius,X.shadowMapSize=he.mapSize,X.shadowCameraNear=he.camera.near,X.shadowCameraFar=he.camera.far,r.pointShadow[E]=X,r.pointShadowMap[E]=le,r.pointShadowMatrix[E]=U.shadow.matrix,C++}r.point[E]=ne,E++}else if(U.isHemisphereLight){const ne=e.get(U);ne.skyColor.copy(U.color).multiplyScalar(B),ne.groundColor.copy(U.groundColor).multiplyScalar(B),r.hemi[_]=ne,_++}}v>0&&(i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Fe.LTC_FLOAT_1,r.rectAreaLTC2=Fe.LTC_FLOAT_2):(r.rectAreaLTC1=Fe.LTC_HALF_1,r.rectAreaLTC2=Fe.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=g,r.ambient[2]=y;const V=r.hash;(V.directionalLength!==x||V.pointLength!==E||V.spotLength!==M||V.rectAreaLength!==v||V.hemiLength!==_||V.numDirectionalShadows!==R||V.numPointShadows!==C||V.numSpotShadows!==b||V.numSpotMaps!==F||V.numLightProbes!==O)&&(r.directional.length=x,r.spot.length=M,r.rectArea.length=v,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=R,r.directionalShadowMap.length=R,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=R,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=b+F-I,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=O,V.directionalLength=x,V.pointLength=E,V.spotLength=M,V.rectAreaLength=v,V.hemiLength=_,V.numDirectionalShadows=R,V.numPointShadows=C,V.numSpotShadows=b,V.numSpotMaps=F,V.numLightProbes=O,r.version=fA++)}function d(h,m){let g=0,y=0,x=0,E=0,M=0;const v=m.matrixWorldInverse;for(let _=0,R=h.length;_<R;_++){const C=h[_];if(C.isDirectionalLight){const b=r.directional[g];b.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(v),g++}else if(C.isSpotLight){const b=r.spot[x];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(v),b.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(v),x++}else if(C.isRectAreaLight){const b=r.rectArea[E];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(v),u.identity(),l.copy(C.matrixWorld),l.premultiply(v),u.extractRotation(l),b.halfWidth.set(C.width*.5,0,0),b.halfHeight.set(0,C.height*.5,0),b.halfWidth.applyMatrix4(u),b.halfHeight.applyMatrix4(u),E++}else if(C.isPointLight){const b=r.point[y];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(v),y++}else if(C.isHemisphereLight){const b=r.hemi[M];b.direction.setFromMatrixPosition(C.matrixWorld),b.direction.transformDirection(v),M++}}}return{setup:f,setupView:d,state:r}}function Zv(i){const e=new hA(i),t=[],r=[];function o(m){h.camera=m,t.length=0,r.length=0}function l(m){t.push(m)}function u(m){r.push(m)}function f(){e.setup(t)}function d(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:u}}function pA(i){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new Zv(i),e.set(o,[f])):l>=u.length?(f=new Zv(i),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const mA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function vA(i,e,t){let r=new l0;const o=new Ot,l=new Ot,u=new Qt,f=new WE({depthPacking:tE}),d=new jE,h={},m=t.maxTextureSize,g={[qr]:jn,[jn]:qr,[ir]:ir},y=new Yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:mA,fragmentShader:gA}),x=y.clone();x.defines.HORIZONTAL_PASS=1;const E=new fr;E.setAttribute("position",new ki(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new or(E,y),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=O_;let _=this.type;this.render=function(I,O,V){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||I.length===0)return;const L=i.getRenderTarget(),T=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Wr),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const B=_!==nr&&this.type===nr,z=_===nr&&this.type!==nr;for(let le=0,ne=I.length;le<ne;le++){const he=I[le],X=he.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;o.copy(X.mapSize);const pe=X.getFrameExtents();if(o.multiply(pe),l.copy(X.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/pe.x),o.x=l.x*pe.x,X.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/pe.y),o.y=l.y*pe.y,X.mapSize.y=l.y)),X.map===null||B===!0||z===!0){const W=this.type!==nr?{minFilter:wi,magFilter:wi}:{};X.map!==null&&X.map.dispose(),X.map=new As(o.x,o.y,W),X.map.texture.name=he.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const ce=X.getViewportCount();for(let W=0;W<ce;W++){const oe=X.getViewport(W);u.set(l.x*oe.x,l.y*oe.y,l.x*oe.z,l.y*oe.w),D.viewport(u),X.updateMatrices(he,W),r=X.getFrustum(),b(O,V,X.camera,he,this.type)}X.isPointLightShadow!==!0&&this.type===nr&&R(X,V),X.needsUpdate=!1}_=this.type,v.needsUpdate=!1,i.setRenderTarget(L,T,U)};function R(I,O){const V=e.update(M);y.defines.VSM_SAMPLES!==I.blurSamples&&(y.defines.VSM_SAMPLES=I.blurSamples,x.defines.VSM_SAMPLES=I.blurSamples,y.needsUpdate=!0,x.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new As(o.x,o.y)),y.uniforms.shadow_pass.value=I.map.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(O,null,V,y,M,null),x.uniforms.shadow_pass.value=I.mapPass.texture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(O,null,V,x,M,null)}function C(I,O,V,L){let T=null;const U=V.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(U!==void 0)T=U;else if(T=V.isPointLight===!0?d:f,i.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const D=T.uuid,B=O.uuid;let z=h[D];z===void 0&&(z={},h[D]=z);let le=z[B];le===void 0&&(le=T.clone(),z[B]=le,O.addEventListener("dispose",F)),T=le}if(T.visible=O.visible,T.wireframe=O.wireframe,L===nr?T.side=O.shadowSide!==null?O.shadowSide:O.side:T.side=O.shadowSide!==null?O.shadowSide:g[O.side],T.alphaMap=O.alphaMap,T.alphaTest=O.alphaTest,T.map=O.map,T.clipShadows=O.clipShadows,T.clippingPlanes=O.clippingPlanes,T.clipIntersection=O.clipIntersection,T.displacementMap=O.displacementMap,T.displacementScale=O.displacementScale,T.displacementBias=O.displacementBias,T.wireframeLinewidth=O.wireframeLinewidth,T.linewidth=O.linewidth,V.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const D=i.properties.get(T);D.light=V}return T}function b(I,O,V,L,T){if(I.visible===!1)return;if(I.layers.test(O.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&T===nr)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,I.matrixWorld);const B=e.update(I),z=I.material;if(Array.isArray(z)){const le=B.groups;for(let ne=0,he=le.length;ne<he;ne++){const X=le[ne],pe=z[X.materialIndex];if(pe&&pe.visible){const ce=C(I,pe,L,T);I.onBeforeShadow(i,I,O,V,B,ce,X),i.renderBufferDirect(V,null,B,ce,I,X),I.onAfterShadow(i,I,O,V,B,ce,X)}}}else if(z.visible){const le=C(I,z,L,T);I.onBeforeShadow(i,I,O,V,B,le,null),i.renderBufferDirect(V,null,B,le,I,null),I.onAfterShadow(i,I,O,V,B,le,null)}}const D=I.children;for(let B=0,z=D.length;B<z;B++)b(D[B],O,V,L,T)}function F(I){I.target.removeEventListener("dispose",F);for(const V in h){const L=h[V],T=I.target.uuid;T in L&&(L[T].dispose(),delete L[T])}}}const _A={[kd]:Bd,[zd]:Gd,[Hd]:Wd,[yo]:Vd,[Bd]:kd,[Gd]:zd,[Wd]:Hd,[Vd]:yo};function yA(i,e){function t(){let $=!1;const Ie=new Qt;let ve=null;const Ee=new Qt(0,0,0,0);return{setMask:function(Be){ve!==Be&&!$&&(i.colorMask(Be,Be,Be,Be),ve=Be)},setLocked:function(Be){$=Be},setClear:function(Be,ke,dt,kt,on){on===!0&&(Be*=kt,ke*=kt,dt*=kt),Ie.set(Be,ke,dt,kt),Ee.equals(Ie)===!1&&(i.clearColor(Be,ke,dt,kt),Ee.copy(Ie))},reset:function(){$=!1,ve=null,Ee.set(-1,0,0,0)}}}function r(){let $=!1,Ie=!1,ve=null,Ee=null,Be=null;return{setReversed:function(ke){if(Ie!==ke){const dt=e.get("EXT_clip_control");Ie?dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.ZERO_TO_ONE_EXT):dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.NEGATIVE_ONE_TO_ONE_EXT);const kt=Be;Be=null,this.setClear(kt)}Ie=ke},getReversed:function(){return Ie},setTest:function(ke){ke?xe(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(ke){ve!==ke&&!$&&(i.depthMask(ke),ve=ke)},setFunc:function(ke){if(Ie&&(ke=_A[ke]),Ee!==ke){switch(ke){case kd:i.depthFunc(i.NEVER);break;case Bd:i.depthFunc(i.ALWAYS);break;case zd:i.depthFunc(i.LESS);break;case yo:i.depthFunc(i.LEQUAL);break;case Hd:i.depthFunc(i.EQUAL);break;case Vd:i.depthFunc(i.GEQUAL);break;case Gd:i.depthFunc(i.GREATER);break;case Wd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ee=ke}},setLocked:function(ke){$=ke},setClear:function(ke){Be!==ke&&(Ie&&(ke=1-ke),i.clearDepth(ke),Be=ke)},reset:function(){$=!1,ve=null,Ee=null,Be=null,Ie=!1}}}function o(){let $=!1,Ie=null,ve=null,Ee=null,Be=null,ke=null,dt=null,kt=null,on=null;return{setTest:function(At){$||(At?xe(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(At){Ie!==At&&!$&&(i.stencilMask(At),Ie=At)},setFunc:function(At,On,Pn){(ve!==At||Ee!==On||Be!==Pn)&&(i.stencilFunc(At,On,Pn),ve=At,Ee=On,Be=Pn)},setOp:function(At,On,Pn){(ke!==At||dt!==On||kt!==Pn)&&(i.stencilOp(At,On,Pn),ke=At,dt=On,kt=Pn)},setLocked:function(At){$=At},setClear:function(At){on!==At&&(i.clearStencil(At),on=At)},reset:function(){$=!1,Ie=null,ve=null,Ee=null,Be=null,ke=null,dt=null,kt=null,on=null}}}const l=new t,u=new r,f=new o,d=new WeakMap,h=new WeakMap;let m={},g={},y=new WeakMap,x=[],E=null,M=!1,v=null,_=null,R=null,C=null,b=null,F=null,I=null,O=new Nt(0,0,0),V=0,L=!1,T=null,U=null,D=null,B=null,z=null;const le=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,he=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(X)[1]),ne=he>=1):X.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),ne=he>=2);let pe=null,ce={};const W=i.getParameter(i.SCISSOR_BOX),oe=i.getParameter(i.VIEWPORT),Ce=new Qt().fromArray(W),te=new Qt().fromArray(oe);function ye($,Ie,ve,Ee){const Be=new Uint8Array(4),ke=i.createTexture();i.bindTexture($,ke),i.texParameteri($,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri($,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let dt=0;dt<ve;dt++)$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?i.texImage3D(Ie,0,i.RGBA,1,1,Ee,0,i.RGBA,i.UNSIGNED_BYTE,Be):i.texImage2D(Ie+dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Be);return ke}const Me={};Me[i.TEXTURE_2D]=ye(i.TEXTURE_2D,i.TEXTURE_2D,1),Me[i.TEXTURE_CUBE_MAP]=ye(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[i.TEXTURE_2D_ARRAY]=ye(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Me[i.TEXTURE_3D]=ye(i.TEXTURE_3D,i.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),xe(i.DEPTH_TEST),u.setFunc(yo),lt(!1),pt(tv),xe(i.CULL_FACE),G(Wr);function xe($){m[$]!==!0&&(i.enable($),m[$]=!0)}function Se($){m[$]!==!1&&(i.disable($),m[$]=!1)}function Le($,Ie){return g[$]!==Ie?(i.bindFramebuffer($,Ie),g[$]=Ie,$===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=Ie),$===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=Ie),!0):!1}function Ne($,Ie){let ve=x,Ee=!1;if($){ve=y.get(Ie),ve===void 0&&(ve=[],y.set(Ie,ve));const Be=$.textures;if(ve.length!==Be.length||ve[0]!==i.COLOR_ATTACHMENT0){for(let ke=0,dt=Be.length;ke<dt;ke++)ve[ke]=i.COLOR_ATTACHMENT0+ke;ve.length=Be.length,Ee=!0}}else ve[0]!==i.BACK&&(ve[0]=i.BACK,Ee=!0);Ee&&i.drawBuffers(ve)}function ct($){return E!==$?(i.useProgram($),E=$,!0):!1}const _t={[vs]:i.FUNC_ADD,[bS]:i.FUNC_SUBTRACT,[RS]:i.FUNC_REVERSE_SUBTRACT};_t[CS]=i.MIN,_t[PS]=i.MAX;const je={[LS]:i.ZERO,[DS]:i.ONE,[NS]:i.SRC_COLOR,[Od]:i.SRC_ALPHA,[BS]:i.SRC_ALPHA_SATURATE,[FS]:i.DST_COLOR,[IS]:i.DST_ALPHA,[US]:i.ONE_MINUS_SRC_COLOR,[Fd]:i.ONE_MINUS_SRC_ALPHA,[kS]:i.ONE_MINUS_DST_COLOR,[OS]:i.ONE_MINUS_DST_ALPHA,[zS]:i.CONSTANT_COLOR,[HS]:i.ONE_MINUS_CONSTANT_COLOR,[VS]:i.CONSTANT_ALPHA,[GS]:i.ONE_MINUS_CONSTANT_ALPHA};function G($,Ie,ve,Ee,Be,ke,dt,kt,on,At){if($===Wr){M===!0&&(Se(i.BLEND),M=!1);return}if(M===!1&&(xe(i.BLEND),M=!0),$!==AS){if($!==v||At!==L){if((_!==vs||b!==vs)&&(i.blendEquation(i.FUNC_ADD),_=vs,b=vs),At)switch($){case go:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nv:i.blendFunc(i.ONE,i.ONE);break;case iv:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rv:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case go:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nv:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case iv:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rv:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}R=null,C=null,F=null,I=null,O.set(0,0,0),V=0,v=$,L=At}return}Be=Be||Ie,ke=ke||ve,dt=dt||Ee,(Ie!==_||Be!==b)&&(i.blendEquationSeparate(_t[Ie],_t[Be]),_=Ie,b=Be),(ve!==R||Ee!==C||ke!==F||dt!==I)&&(i.blendFuncSeparate(je[ve],je[Ee],je[ke],je[dt]),R=ve,C=Ee,F=ke,I=dt),(kt.equals(O)===!1||on!==V)&&(i.blendColor(kt.r,kt.g,kt.b,on),O.copy(kt),V=on),v=$,L=!1}function Lt($,Ie){$.side===ir?Se(i.CULL_FACE):xe(i.CULL_FACE);let ve=$.side===jn;Ie&&(ve=!ve),lt(ve),$.blending===go&&$.transparent===!1?G(Wr):G($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),u.setFunc($.depthFunc),u.setTest($.depthTest),u.setMask($.depthWrite),l.setMask($.colorWrite);const Ee=$.stencilWrite;f.setTest(Ee),Ee&&(f.setMask($.stencilWriteMask),f.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),f.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),J($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?xe(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function lt($){T!==$&&($?i.frontFace(i.CW):i.frontFace(i.CCW),T=$)}function pt($){$!==MS?(xe(i.CULL_FACE),$!==U&&($===tv?i.cullFace(i.BACK):$===wS?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),U=$}function k($){$!==D&&(ne&&i.lineWidth($),D=$)}function J($,Ie,ve){$?(xe(i.POLYGON_OFFSET_FILL),(B!==Ie||z!==ve)&&(i.polygonOffset(Ie,ve),B=Ie,z=ve)):Se(i.POLYGON_OFFSET_FILL)}function K($){$?xe(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function P($){$===void 0&&($=i.TEXTURE0+le-1),pe!==$&&(i.activeTexture($),pe=$)}function w($,Ie,ve){ve===void 0&&(pe===null?ve=i.TEXTURE0+le-1:ve=pe);let Ee=ce[ve];Ee===void 0&&(Ee={type:void 0,texture:void 0},ce[ve]=Ee),(Ee.type!==$||Ee.texture!==Ie)&&(pe!==ve&&(i.activeTexture(ve),pe=ve),i.bindTexture($,Ie||Me[$]),Ee.type=$,Ee.texture=Ie)}function j(){const $=ce[pe];$!==void 0&&$.type!==void 0&&(i.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function se(){try{i.compressedTexImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function me(){try{i.compressedTexImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ge(){try{i.texSubImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ue(){try{i.texSubImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function De(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ve(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ht(){try{i.texStorage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ae(){try{i.texStorage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function We(){try{i.texImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function tt(){try{i.texImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function st($){Ce.equals($)===!1&&(i.scissor($.x,$.y,$.z,$.w),Ce.copy($))}function Ge($){te.equals($)===!1&&(i.viewport($.x,$.y,$.z,$.w),te.copy($))}function xt($,Ie){let ve=h.get(Ie);ve===void 0&&(ve=new WeakMap,h.set(Ie,ve));let Ee=ve.get($);Ee===void 0&&(Ee=i.getUniformBlockIndex(Ie,$.name),ve.set($,Ee))}function ft($,Ie){const Ee=h.get(Ie).get($);d.get(Ie)!==Ee&&(i.uniformBlockBinding(Ie,Ee,$.__bindingPointIndex),d.set(Ie,Ee))}function Dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),u.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},pe=null,ce={},g={},y=new WeakMap,x=[],E=null,M=!1,v=null,_=null,R=null,C=null,b=null,F=null,I=null,O=new Nt(0,0,0),V=0,L=!1,T=null,U=null,D=null,B=null,z=null,Ce.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:xe,disable:Se,bindFramebuffer:Le,drawBuffers:Ne,useProgram:ct,setBlending:G,setMaterial:Lt,setFlipSided:lt,setCullFace:pt,setLineWidth:k,setPolygonOffset:J,setScissorTest:K,activeTexture:P,bindTexture:w,unbindTexture:j,compressedTexImage2D:se,compressedTexImage3D:me,texImage2D:We,texImage3D:tt,updateUBOMapping:xt,uniformBlockBinding:ft,texStorage2D:ht,texStorage3D:Ae,texSubImage2D:ge,texSubImage3D:Ue,compressedTexSubImage2D:De,compressedTexSubImage3D:Ve,scissor:st,viewport:Ge,reset:Dt}}function xA(i,e,t,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ot,m=new WeakMap;let g;const y=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,w){return x?new OffscreenCanvas(P,w):ku("canvas")}function M(P,w,j){let se=1;const me=K(P);if((me.width>j||me.height>j)&&(se=j/Math.max(me.width,me.height)),se<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ge=Math.floor(se*me.width),Ue=Math.floor(se*me.height);g===void 0&&(g=E(ge,Ue));const De=w?E(ge,Ue):g;return De.width=ge,De.height=Ue,De.getContext("2d").drawImage(P,0,0,ge,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+ge+"x"+Ue+")."),De}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),P;return P}function v(P){return P.generateMipmaps}function _(P){i.generateMipmap(P)}function R(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function C(P,w,j,se,me=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ge=w;if(w===i.RED&&(j===i.FLOAT&&(ge=i.R32F),j===i.HALF_FLOAT&&(ge=i.R16F),j===i.UNSIGNED_BYTE&&(ge=i.R8)),w===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(ge=i.R8UI),j===i.UNSIGNED_SHORT&&(ge=i.R16UI),j===i.UNSIGNED_INT&&(ge=i.R32UI),j===i.BYTE&&(ge=i.R8I),j===i.SHORT&&(ge=i.R16I),j===i.INT&&(ge=i.R32I)),w===i.RG&&(j===i.FLOAT&&(ge=i.RG32F),j===i.HALF_FLOAT&&(ge=i.RG16F),j===i.UNSIGNED_BYTE&&(ge=i.RG8)),w===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(ge=i.RG8UI),j===i.UNSIGNED_SHORT&&(ge=i.RG16UI),j===i.UNSIGNED_INT&&(ge=i.RG32UI),j===i.BYTE&&(ge=i.RG8I),j===i.SHORT&&(ge=i.RG16I),j===i.INT&&(ge=i.RG32I)),w===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(ge=i.RGB8UI),j===i.UNSIGNED_SHORT&&(ge=i.RGB16UI),j===i.UNSIGNED_INT&&(ge=i.RGB32UI),j===i.BYTE&&(ge=i.RGB8I),j===i.SHORT&&(ge=i.RGB16I),j===i.INT&&(ge=i.RGB32I)),w===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(ge=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(ge=i.RGBA16UI),j===i.UNSIGNED_INT&&(ge=i.RGBA32UI),j===i.BYTE&&(ge=i.RGBA8I),j===i.SHORT&&(ge=i.RGBA16I),j===i.INT&&(ge=i.RGBA32I)),w===i.RGB&&j===i.UNSIGNED_INT_5_9_9_9_REV&&(ge=i.RGB9_E5),w===i.RGBA){const Ue=me?Ou:Pt.getTransfer(se);j===i.FLOAT&&(ge=i.RGBA32F),j===i.HALF_FLOAT&&(ge=i.RGBA16F),j===i.UNSIGNED_BYTE&&(ge=Ue===Ut?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT_4_4_4_4&&(ge=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(ge=i.RGB5_A1)}return(ge===i.R16F||ge===i.R32F||ge===i.RG16F||ge===i.RG32F||ge===i.RGBA16F||ge===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function b(P,w){let j;return P?w===null||w===Ts||w===Eo?j=i.DEPTH24_STENCIL8:w===rr?j=i.DEPTH32F_STENCIL8:w===xa&&(j=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ts||w===Eo?j=i.DEPTH_COMPONENT24:w===rr?j=i.DEPTH_COMPONENT32F:w===xa&&(j=i.DEPTH_COMPONENT16),j}function F(P,w){return v(P)===!0||P.isFramebufferTexture&&P.minFilter!==wi&&P.minFilter!==Oi?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function I(P){const w=P.target;w.removeEventListener("dispose",I),V(w),w.isVideoTexture&&m.delete(w)}function O(P){const w=P.target;w.removeEventListener("dispose",O),T(w)}function V(P){const w=r.get(P);if(w.__webglInit===void 0)return;const j=P.source,se=y.get(j);if(se){const me=se[w.__cacheKey];me.usedTimes--,me.usedTimes===0&&L(P),Object.keys(se).length===0&&y.delete(j)}r.remove(P)}function L(P){const w=r.get(P);i.deleteTexture(w.__webglTexture);const j=P.source,se=y.get(j);delete se[w.__cacheKey],u.memory.textures--}function T(P){const w=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(w.__webglFramebuffer[se]))for(let me=0;me<w.__webglFramebuffer[se].length;me++)i.deleteFramebuffer(w.__webglFramebuffer[se][me]);else i.deleteFramebuffer(w.__webglFramebuffer[se]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[se])}else{if(Array.isArray(w.__webglFramebuffer))for(let se=0;se<w.__webglFramebuffer.length;se++)i.deleteFramebuffer(w.__webglFramebuffer[se]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let se=0;se<w.__webglColorRenderbuffer.length;se++)w.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[se]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const j=P.textures;for(let se=0,me=j.length;se<me;se++){const ge=r.get(j[se]);ge.__webglTexture&&(i.deleteTexture(ge.__webglTexture),u.memory.textures--),r.remove(j[se])}r.remove(P)}let U=0;function D(){U=0}function B(){const P=U;return P>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),U+=1,P}function z(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function le(P,w){const j=r.get(P);if(P.isVideoTexture&&k(P),P.isRenderTargetTexture===!1&&P.version>0&&j.__version!==P.version){const se=P.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(j,P,w);return}}t.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+w)}function ne(P,w){const j=r.get(P);if(P.version>0&&j.__version!==P.version){te(j,P,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+w)}function he(P,w){const j=r.get(P);if(P.version>0&&j.__version!==P.version){te(j,P,w);return}t.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+w)}function X(P,w){const j=r.get(P);if(P.version>0&&j.__version!==P.version){ye(j,P,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+w)}const pe={[qd]:i.REPEAT,[xs]:i.CLAMP_TO_EDGE,[Yd]:i.MIRRORED_REPEAT},ce={[wi]:i.NEAREST,[JS]:i.NEAREST_MIPMAP_NEAREST,[Jl]:i.NEAREST_MIPMAP_LINEAR,[Oi]:i.LINEAR,[Zf]:i.LINEAR_MIPMAP_NEAREST,[Ss]:i.LINEAR_MIPMAP_LINEAR},W={[rE]:i.NEVER,[cE]:i.ALWAYS,[sE]:i.LESS,[$_]:i.LEQUAL,[oE]:i.EQUAL,[uE]:i.GEQUAL,[aE]:i.GREATER,[lE]:i.NOTEQUAL};function oe(P,w){if(w.type===rr&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Oi||w.magFilter===Zf||w.magFilter===Jl||w.magFilter===Ss||w.minFilter===Oi||w.minFilter===Zf||w.minFilter===Jl||w.minFilter===Ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,pe[w.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,pe[w.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,pe[w.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,ce[w.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,ce[w.minFilter]),w.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,W[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===wi||w.minFilter!==Jl&&w.minFilter!==Ss||w.type===rr&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function Ce(P,w){let j=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",I));const se=w.source;let me=y.get(se);me===void 0&&(me={},y.set(se,me));const ge=z(w);if(ge!==P.__cacheKey){me[ge]===void 0&&(me[ge]={texture:i.createTexture(),usedTimes:0},u.memory.textures++,j=!0),me[ge].usedTimes++;const Ue=me[P.__cacheKey];Ue!==void 0&&(me[P.__cacheKey].usedTimes--,Ue.usedTimes===0&&L(w)),P.__cacheKey=ge,P.__webglTexture=me[ge].texture}return j}function te(P,w,j){let se=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(se=i.TEXTURE_3D);const me=Ce(P,w),ge=w.source;t.bindTexture(se,P.__webglTexture,i.TEXTURE0+j);const Ue=r.get(ge);if(ge.version!==Ue.__version||me===!0){t.activeTexture(i.TEXTURE0+j);const De=Pt.getPrimaries(Pt.workingColorSpace),Ve=w.colorSpace===Hr?null:Pt.getPrimaries(w.colorSpace),ht=w.colorSpace===Hr||De===Ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let Ae=M(w.image,!1,o.maxTextureSize);Ae=J(w,Ae);const We=l.convert(w.format,w.colorSpace),tt=l.convert(w.type);let st=C(w.internalFormat,We,tt,w.colorSpace,w.isVideoTexture);oe(se,w);let Ge;const xt=w.mipmaps,ft=w.isVideoTexture!==!0,Dt=Ue.__version===void 0||me===!0,$=ge.dataReady,Ie=F(w,Ae);if(w.isDepthTexture)st=b(w.format===Mo,w.type),Dt&&(ft?t.texStorage2D(i.TEXTURE_2D,1,st,Ae.width,Ae.height):t.texImage2D(i.TEXTURE_2D,0,st,Ae.width,Ae.height,0,We,tt,null));else if(w.isDataTexture)if(xt.length>0){ft&&Dt&&t.texStorage2D(i.TEXTURE_2D,Ie,st,xt[0].width,xt[0].height);for(let ve=0,Ee=xt.length;ve<Ee;ve++)Ge=xt[ve],ft?$&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Ge.width,Ge.height,We,tt,Ge.data):t.texImage2D(i.TEXTURE_2D,ve,st,Ge.width,Ge.height,0,We,tt,Ge.data);w.generateMipmaps=!1}else ft?(Dt&&t.texStorage2D(i.TEXTURE_2D,Ie,st,Ae.width,Ae.height),$&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae.width,Ae.height,We,tt,Ae.data)):t.texImage2D(i.TEXTURE_2D,0,st,Ae.width,Ae.height,0,We,tt,Ae.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ft&&Dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,st,xt[0].width,xt[0].height,Ae.depth);for(let ve=0,Ee=xt.length;ve<Ee;ve++)if(Ge=xt[ve],w.format!==Mi)if(We!==null)if(ft){if($)if(w.layerUpdates.size>0){const Be=bv(Ge.width,Ge.height,w.format,w.type);for(const ke of w.layerUpdates){const dt=Ge.data.subarray(ke*Be/Ge.data.BYTES_PER_ELEMENT,(ke+1)*Be/Ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,ke,Ge.width,Ge.height,1,We,dt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,Ge.width,Ge.height,Ae.depth,We,Ge.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ve,st,Ge.width,Ge.height,Ae.depth,0,Ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?$&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,Ge.width,Ge.height,Ae.depth,We,tt,Ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ve,st,Ge.width,Ge.height,Ae.depth,0,We,tt,Ge.data)}else{ft&&Dt&&t.texStorage2D(i.TEXTURE_2D,Ie,st,xt[0].width,xt[0].height);for(let ve=0,Ee=xt.length;ve<Ee;ve++)Ge=xt[ve],w.format!==Mi?We!==null?ft?$&&t.compressedTexSubImage2D(i.TEXTURE_2D,ve,0,0,Ge.width,Ge.height,We,Ge.data):t.compressedTexImage2D(i.TEXTURE_2D,ve,st,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?$&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Ge.width,Ge.height,We,tt,Ge.data):t.texImage2D(i.TEXTURE_2D,ve,st,Ge.width,Ge.height,0,We,tt,Ge.data)}else if(w.isDataArrayTexture)if(ft){if(Dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,st,Ae.width,Ae.height,Ae.depth),$)if(w.layerUpdates.size>0){const ve=bv(Ae.width,Ae.height,w.format,w.type);for(const Ee of w.layerUpdates){const Be=Ae.data.subarray(Ee*ve/Ae.data.BYTES_PER_ELEMENT,(Ee+1)*ve/Ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ee,Ae.width,Ae.height,1,We,tt,Be)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,We,tt,Ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,st,Ae.width,Ae.height,Ae.depth,0,We,tt,Ae.data);else if(w.isData3DTexture)ft?(Dt&&t.texStorage3D(i.TEXTURE_3D,Ie,st,Ae.width,Ae.height,Ae.depth),$&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,We,tt,Ae.data)):t.texImage3D(i.TEXTURE_3D,0,st,Ae.width,Ae.height,Ae.depth,0,We,tt,Ae.data);else if(w.isFramebufferTexture){if(Dt)if(ft)t.texStorage2D(i.TEXTURE_2D,Ie,st,Ae.width,Ae.height);else{let ve=Ae.width,Ee=Ae.height;for(let Be=0;Be<Ie;Be++)t.texImage2D(i.TEXTURE_2D,Be,st,ve,Ee,0,We,tt,null),ve>>=1,Ee>>=1}}else if(xt.length>0){if(ft&&Dt){const ve=K(xt[0]);t.texStorage2D(i.TEXTURE_2D,Ie,st,ve.width,ve.height)}for(let ve=0,Ee=xt.length;ve<Ee;ve++)Ge=xt[ve],ft?$&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,We,tt,Ge):t.texImage2D(i.TEXTURE_2D,ve,st,We,tt,Ge);w.generateMipmaps=!1}else if(ft){if(Dt){const ve=K(Ae);t.texStorage2D(i.TEXTURE_2D,Ie,st,ve.width,ve.height)}$&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,We,tt,Ae)}else t.texImage2D(i.TEXTURE_2D,0,st,We,tt,Ae);v(w)&&_(se),Ue.__version=ge.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function ye(P,w,j){if(w.image.length!==6)return;const se=Ce(P,w),me=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+j);const ge=r.get(me);if(me.version!==ge.__version||se===!0){t.activeTexture(i.TEXTURE0+j);const Ue=Pt.getPrimaries(Pt.workingColorSpace),De=w.colorSpace===Hr?null:Pt.getPrimaries(w.colorSpace),Ve=w.colorSpace===Hr||Ue===De?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const ht=w.isCompressedTexture||w.image[0].isCompressedTexture,Ae=w.image[0]&&w.image[0].isDataTexture,We=[];for(let Ee=0;Ee<6;Ee++)!ht&&!Ae?We[Ee]=M(w.image[Ee],!0,o.maxCubemapSize):We[Ee]=Ae?w.image[Ee].image:w.image[Ee],We[Ee]=J(w,We[Ee]);const tt=We[0],st=l.convert(w.format,w.colorSpace),Ge=l.convert(w.type),xt=C(w.internalFormat,st,Ge,w.colorSpace),ft=w.isVideoTexture!==!0,Dt=ge.__version===void 0||se===!0,$=me.dataReady;let Ie=F(w,tt);oe(i.TEXTURE_CUBE_MAP,w);let ve;if(ht){ft&&Dt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,xt,tt.width,tt.height);for(let Ee=0;Ee<6;Ee++){ve=We[Ee].mipmaps;for(let Be=0;Be<ve.length;Be++){const ke=ve[Be];w.format!==Mi?st!==null?ft?$&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Be,0,0,ke.width,ke.height,st,ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Be,xt,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ft?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Be,0,0,ke.width,ke.height,st,Ge,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Be,xt,ke.width,ke.height,0,st,Ge,ke.data)}}}else{if(ve=w.mipmaps,ft&&Dt){ve.length>0&&Ie++;const Ee=K(We[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,xt,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(Ae){ft?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,We[Ee].width,We[Ee].height,st,Ge,We[Ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,xt,We[Ee].width,We[Ee].height,0,st,Ge,We[Ee].data);for(let Be=0;Be<ve.length;Be++){const dt=ve[Be].image[Ee].image;ft?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Be+1,0,0,dt.width,dt.height,st,Ge,dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Be+1,xt,dt.width,dt.height,0,st,Ge,dt.data)}}else{ft?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,st,Ge,We[Ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,xt,st,Ge,We[Ee]);for(let Be=0;Be<ve.length;Be++){const ke=ve[Be];ft?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Be+1,0,0,st,Ge,ke.image[Ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Be+1,xt,st,Ge,ke.image[Ee])}}}v(w)&&_(i.TEXTURE_CUBE_MAP),ge.__version=me.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Me(P,w,j,se,me,ge){const Ue=l.convert(j.format,j.colorSpace),De=l.convert(j.type),Ve=C(j.internalFormat,Ue,De,j.colorSpace),ht=r.get(w),Ae=r.get(j);if(Ae.__renderTarget=w,!ht.__hasExternalTextures){const We=Math.max(1,w.width>>ge),tt=Math.max(1,w.height>>ge);me===i.TEXTURE_3D||me===i.TEXTURE_2D_ARRAY?t.texImage3D(me,ge,Ve,We,tt,w.depth,0,Ue,De,null):t.texImage2D(me,ge,Ve,We,tt,0,Ue,De,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),pt(w)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,me,Ae.__webglTexture,0,lt(w)):(me===i.TEXTURE_2D||me>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,me,Ae.__webglTexture,ge),t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(P,w,j){if(i.bindRenderbuffer(i.RENDERBUFFER,P),w.depthBuffer){const se=w.depthTexture,me=se&&se.isDepthTexture?se.type:null,ge=b(w.stencilBuffer,me),Ue=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,De=lt(w);pt(w)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,De,ge,w.width,w.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,De,ge,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ge,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ue,i.RENDERBUFFER,P)}else{const se=w.textures;for(let me=0;me<se.length;me++){const ge=se[me],Ue=l.convert(ge.format,ge.colorSpace),De=l.convert(ge.type),Ve=C(ge.internalFormat,Ue,De,ge.colorSpace),ht=lt(w);j&&pt(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,Ve,w.width,w.height):pt(w)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,Ve,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Ve,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=r.get(w.depthTexture);se.__renderTarget=w,(!se.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),le(w.depthTexture,0);const me=se.__webglTexture,ge=lt(w);if(w.depthTexture.format===vo)pt(w)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,me,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,me,0);else if(w.depthTexture.format===Mo)pt(w)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,me,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function Le(P){const w=r.get(P),j=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const se=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),se){const me=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,se.removeEventListener("dispose",me)};se.addEventListener("dispose",me),w.__depthDisposeCallback=me}w.__boundDepthTexture=se}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Se(w.__webglFramebuffer,P)}else if(j){w.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[se]),w.__webglDepthbuffer[se]===void 0)w.__webglDepthbuffer[se]=i.createRenderbuffer(),xe(w.__webglDepthbuffer[se],P,!1);else{const me=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=w.__webglDepthbuffer[se];i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,ge)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),xe(w.__webglDepthbuffer,P,!1);else{const se=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,me)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(P,w,j){const se=r.get(P);w!==void 0&&Me(se.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&Le(P)}function ct(P){const w=P.texture,j=r.get(P),se=r.get(w);P.addEventListener("dispose",O);const me=P.textures,ge=P.isWebGLCubeRenderTarget===!0,Ue=me.length>1;if(Ue||(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=w.version,u.memory.textures++),ge){j.__webglFramebuffer=[];for(let De=0;De<6;De++)if(w.mipmaps&&w.mipmaps.length>0){j.__webglFramebuffer[De]=[];for(let Ve=0;Ve<w.mipmaps.length;Ve++)j.__webglFramebuffer[De][Ve]=i.createFramebuffer()}else j.__webglFramebuffer[De]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){j.__webglFramebuffer=[];for(let De=0;De<w.mipmaps.length;De++)j.__webglFramebuffer[De]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(Ue)for(let De=0,Ve=me.length;De<Ve;De++){const ht=r.get(me[De]);ht.__webglTexture===void 0&&(ht.__webglTexture=i.createTexture(),u.memory.textures++)}if(P.samples>0&&pt(P)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let De=0;De<me.length;De++){const Ve=me[De];j.__webglColorRenderbuffer[De]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[De]);const ht=l.convert(Ve.format,Ve.colorSpace),Ae=l.convert(Ve.type),We=C(Ve.internalFormat,ht,Ae,Ve.colorSpace,P.isXRRenderTarget===!0),tt=lt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,We,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,j.__webglColorRenderbuffer[De])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),xe(j.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ge){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),oe(i.TEXTURE_CUBE_MAP,w);for(let De=0;De<6;De++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ve=0;Ve<w.mipmaps.length;Ve++)Me(j.__webglFramebuffer[De][Ve],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+De,Ve);else Me(j.__webglFramebuffer[De],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);v(w)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let De=0,Ve=me.length;De<Ve;De++){const ht=me[De],Ae=r.get(ht);t.bindTexture(i.TEXTURE_2D,Ae.__webglTexture),oe(i.TEXTURE_2D,ht),Me(j.__webglFramebuffer,P,ht,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,0),v(ht)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let De=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(De=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(De,se.__webglTexture),oe(De,w),w.mipmaps&&w.mipmaps.length>0)for(let Ve=0;Ve<w.mipmaps.length;Ve++)Me(j.__webglFramebuffer[Ve],P,w,i.COLOR_ATTACHMENT0,De,Ve);else Me(j.__webglFramebuffer,P,w,i.COLOR_ATTACHMENT0,De,0);v(w)&&_(De),t.unbindTexture()}P.depthBuffer&&Le(P)}function _t(P){const w=P.textures;for(let j=0,se=w.length;j<se;j++){const me=w[j];if(v(me)){const ge=R(P),Ue=r.get(me).__webglTexture;t.bindTexture(ge,Ue),_(ge),t.unbindTexture()}}}const je=[],G=[];function Lt(P){if(P.samples>0){if(pt(P)===!1){const w=P.textures,j=P.width,se=P.height;let me=i.COLOR_BUFFER_BIT;const ge=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ue=r.get(P),De=w.length>1;if(De)for(let Ve=0;Ve<w.length;Ve++)t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Ve=0;Ve<w.length;Ve++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(me|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(me|=i.STENCIL_BUFFER_BIT)),De){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ve]);const ht=r.get(w[Ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ht,0)}i.blitFramebuffer(0,0,j,se,0,0,j,se,me,i.NEAREST),d===!0&&(je.length=0,G.length=0,je.push(i.COLOR_ATTACHMENT0+Ve),P.depthBuffer&&P.resolveDepthBuffer===!1&&(je.push(ge),G.push(ge),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,G)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,je))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),De)for(let Ve=0;Ve<w.length;Ve++){t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ve]);const ht=r.get(w[Ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.TEXTURE_2D,ht,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&d){const w=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function lt(P){return Math.min(o.maxSamples,P.samples)}function pt(P){const w=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function k(P){const w=u.render.frame;m.get(P)!==w&&(m.set(P,w),P.update())}function J(P,w){const j=P.colorSpace,se=P.format,me=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||j!==wo&&j!==Hr&&(Pt.getTransfer(j)===Ut?(se!==Mi||me!==lr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),w}function K(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=B,this.resetTextureUnits=D,this.setTexture2D=le,this.setTexture2DArray=ne,this.setTexture3D=he,this.setTextureCube=X,this.rebindTextures=Ne,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=pt}function SA(i,e){function t(r,o=Hr){let l;const u=Pt.getTransfer(o);if(r===lr)return i.UNSIGNED_BYTE;if(r===Fh)return i.UNSIGNED_SHORT_4_4_4_4;if(r===kh)return i.UNSIGNED_SHORT_5_5_5_1;if(r===H_)return i.UNSIGNED_INT_5_9_9_9_REV;if(r===B_)return i.BYTE;if(r===z_)return i.SHORT;if(r===xa)return i.UNSIGNED_SHORT;if(r===Oh)return i.INT;if(r===Ts)return i.UNSIGNED_INT;if(r===rr)return i.FLOAT;if(r===Ea)return i.HALF_FLOAT;if(r===V_)return i.ALPHA;if(r===G_)return i.RGB;if(r===Mi)return i.RGBA;if(r===W_)return i.LUMINANCE;if(r===j_)return i.LUMINANCE_ALPHA;if(r===vo)return i.DEPTH_COMPONENT;if(r===Mo)return i.DEPTH_STENCIL;if(r===X_)return i.RED;if(r===Bh)return i.RED_INTEGER;if(r===q_)return i.RG;if(r===zh)return i.RG_INTEGER;if(r===Hh)return i.RGBA_INTEGER;if(r===Mu||r===wu||r===Tu||r===Au)if(u===Ut)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Mu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===wu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Tu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Au)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Mu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===wu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Tu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Au)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===$d||r===Kd||r===Zd||r===Qd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===$d)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Kd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Zd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Qd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Jd||r===eh||r===th)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Jd||r===eh)return u===Ut?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===th)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===nh||r===ih||r===rh||r===sh||r===oh||r===ah||r===lh||r===uh||r===ch||r===fh||r===dh||r===hh||r===ph||r===mh)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===nh)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ih)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===rh)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===sh)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===oh)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ah)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===lh)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===uh)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ch)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===fh)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===dh)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===hh)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ph)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===mh)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===bu||r===gh||r===vh)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===bu)return u===Ut?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===gh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===vh)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Y_||r===_h||r===yh||r===xh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===bu)return l.COMPRESSED_RED_RGTC1_EXT;if(r===_h)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===yh)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===xh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Eo?i.UNSIGNED_INT_24_8:i[r]!==void 0?i[r]:null}return{convert:t}}const EA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class wA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new Xn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!==r.depthNear||t.depthFar!==r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Yr({vertexShader:EA,fragmentShader:MA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new or(new ec(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TA extends Ao{constructor(e,t){super();const r=this;let o=null,l=1,u=null,f="local-floor",d=1,h=null,m=null,g=null,y=null,x=null,E=null;const M=new wA,v=t.getContextAttributes();let _=null,R=null;const C=[],b=[],F=new Ot;let I=null;const O=new fi;O.viewport=new Qt;const V=new fi;V.viewport=new Qt;const L=[O,V],T=new qE;let U=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ye=C[te];return ye===void 0&&(ye=new yd,C[te]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(te){let ye=C[te];return ye===void 0&&(ye=new yd,C[te]=ye),ye.getGripSpace()},this.getHand=function(te){let ye=C[te];return ye===void 0&&(ye=new yd,C[te]=ye),ye.getHandSpace()};function B(te){const ye=b.indexOf(te.inputSource);if(ye===-1)return;const Me=C[ye];Me!==void 0&&(Me.update(te.inputSource,te.frame,h||u),Me.dispatchEvent({type:te.type,data:te.inputSource}))}function z(){o.removeEventListener("select",B),o.removeEventListener("selectstart",B),o.removeEventListener("selectend",B),o.removeEventListener("squeeze",B),o.removeEventListener("squeezestart",B),o.removeEventListener("squeezeend",B),o.removeEventListener("end",z),o.removeEventListener("inputsourceschange",le);for(let te=0;te<C.length;te++){const ye=b[te];ye!==null&&(b[te]=null,C[te].disconnect(ye))}U=null,D=null,M.reset(),e.setRenderTarget(_),x=null,y=null,g=null,o=null,R=null,Ce.stop(),r.isPresenting=!1,e.setPixelRatio(I),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){l=te,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){f=te,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(te){h=te},this.getBaseLayer=function(){return y!==null?y:x},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(te){if(o=te,o!==null){if(_=e.getRenderTarget(),o.addEventListener("select",B),o.addEventListener("selectstart",B),o.addEventListener("selectend",B),o.addEventListener("squeeze",B),o.addEventListener("squeezestart",B),o.addEventListener("squeezeend",B),o.addEventListener("end",z),o.addEventListener("inputsourceschange",le),v.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(F),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,xe=null,Se=null;v.depth&&(Se=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=v.stencil?Mo:vo,xe=v.stencil?Eo:Ts);const Le={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:l};g=new XRWebGLBinding(o,t),y=g.createProjectionLayer(Le),o.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),R=new As(y.textureWidth,y.textureHeight,{format:Mi,type:lr,depthTexture:new c0(y.textureWidth,y.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}else{const Me={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(o,t,Me),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),R=new As(x.framebufferWidth,x.framebufferHeight,{format:Mi,type:lr,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}R.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await o.requestReferenceSpace(f),Ce.setContext(o),Ce.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function le(te){for(let ye=0;ye<te.removed.length;ye++){const Me=te.removed[ye],xe=b.indexOf(Me);xe>=0&&(b[xe]=null,C[xe].disconnect(Me))}for(let ye=0;ye<te.added.length;ye++){const Me=te.added[ye];let xe=b.indexOf(Me);if(xe===-1){for(let Le=0;Le<C.length;Le++)if(Le>=b.length){b.push(Me),xe=Le;break}else if(b[Le]===null){b[Le]=Me,xe=Le;break}if(xe===-1)break}const Se=C[xe];Se&&Se.connect(Me)}}const ne=new de,he=new de;function X(te,ye,Me){ne.setFromMatrixPosition(ye.matrixWorld),he.setFromMatrixPosition(Me.matrixWorld);const xe=ne.distanceTo(he),Se=ye.projectionMatrix.elements,Le=Me.projectionMatrix.elements,Ne=Se[14]/(Se[10]-1),ct=Se[14]/(Se[10]+1),_t=(Se[9]+1)/Se[5],je=(Se[9]-1)/Se[5],G=(Se[8]-1)/Se[0],Lt=(Le[8]+1)/Le[0],lt=Ne*G,pt=Ne*Lt,k=xe/(-G+Lt),J=k*-G;if(ye.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(J),te.translateZ(k),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Se[10]===-1)te.projectionMatrix.copy(ye.projectionMatrix),te.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const K=Ne+k,P=ct+k,w=lt-J,j=pt+(xe-J),se=_t*ct/P*K,me=je*ct/P*K;te.projectionMatrix.makePerspective(w,j,se,me,K,P),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function pe(te,ye){ye===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ye.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(o===null)return;let ye=te.near,Me=te.far;M.texture!==null&&(M.depthNear>0&&(ye=M.depthNear),M.depthFar>0&&(Me=M.depthFar)),T.near=V.near=O.near=ye,T.far=V.far=O.far=Me,(U!==T.near||D!==T.far)&&(o.updateRenderState({depthNear:T.near,depthFar:T.far}),U=T.near,D=T.far),O.layers.mask=te.layers.mask|2,V.layers.mask=te.layers.mask|4,T.layers.mask=O.layers.mask|V.layers.mask;const xe=te.parent,Se=T.cameras;pe(T,xe);for(let Le=0;Le<Se.length;Le++)pe(Se[Le],xe);Se.length===2?X(T,O,V):T.projectionMatrix.copy(O.projectionMatrix),ce(te,T,xe)};function ce(te,ye,Me){Me===null?te.matrix.copy(ye.matrixWorld):(te.matrix.copy(Me.matrixWorld),te.matrix.invert(),te.matrix.multiply(ye.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ye.projectionMatrix),te.projectionMatrixInverse.copy(ye.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Sh*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(y===null&&x===null))return d},this.setFoveation=function(te){d=te,y!==null&&(y.fixedFoveation=te),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=te)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(T)};let W=null;function oe(te,ye){if(m=ye.getViewerPose(h||u),E=ye,m!==null){const Me=m.views;x!==null&&(e.setRenderTargetFramebuffer(R,x.framebuffer),e.setRenderTarget(R));let xe=!1;Me.length!==T.cameras.length&&(T.cameras.length=0,xe=!0);for(let Ne=0;Ne<Me.length;Ne++){const ct=Me[Ne];let _t=null;if(x!==null)_t=x.getViewport(ct);else{const G=g.getViewSubImage(y,ct);_t=G.viewport,Ne===0&&(e.setRenderTargetTextures(R,G.colorTexture,y.ignoreDepthValues?void 0:G.depthStencilTexture),e.setRenderTarget(R))}let je=L[Ne];je===void 0&&(je=new fi,je.layers.enable(Ne),je.viewport=new Qt,L[Ne]=je),je.matrix.fromArray(ct.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(ct.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(_t.x,_t.y,_t.width,_t.height),Ne===0&&(T.matrix.copy(je.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),xe===!0&&T.cameras.push(je)}const Se=o.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&g){const Ne=g.getDepthInformation(Me[0]);Ne&&Ne.isValid&&Ne.texture&&M.init(e,Ne,o.renderState)}}for(let Me=0;Me<C.length;Me++){const xe=b[Me],Se=C[Me];xe!==null&&Se!==void 0&&Se.update(xe,ye,h||u)}W&&W(te,ye),ye.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ye}),E=null}const Ce=new f0;Ce.setAnimationLoop(oe),this.setAnimationLoop=function(te){W=te},this.dispose=function(){}}}const ps=new ur,AA=new Jt;function bA(i,e){function t(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function r(v,_){_.color.getRGB(v.fogColor.value,s0(i)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function o(v,_,R,C,b){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(v,_):_.isMeshToonMaterial?(l(v,_),g(v,_)):_.isMeshPhongMaterial?(l(v,_),m(v,_)):_.isMeshStandardMaterial?(l(v,_),y(v,_),_.isMeshPhysicalMaterial&&x(v,_,b)):_.isMeshMatcapMaterial?(l(v,_),E(v,_)):_.isMeshDepthMaterial?l(v,_):_.isMeshDistanceMaterial?(l(v,_),M(v,_)):_.isMeshNormalMaterial?l(v,_):_.isLineBasicMaterial?(u(v,_),_.isLineDashedMaterial&&f(v,_)):_.isPointsMaterial?d(v,_,R,C):_.isSpriteMaterial?h(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,t(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,t(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,t(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===jn&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,t(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===jn&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,t(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,t(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const R=e.get(_),C=R.envMap,b=R.envMapRotation;C&&(v.envMap.value=C,ps.copy(b),ps.x*=-1,ps.y*=-1,ps.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),v.envMapRotation.value.setFromMatrix4(AA.makeRotationFromEuler(ps)),v.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap&&(v.lightMap.value=_.lightMap,v.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,v.lightMapTransform)),_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,v.aoMapTransform))}function u(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,t(_.map,v.mapTransform))}function f(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function d(v,_,R,C){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*R,v.scale.value=C*.5,_.map&&(v.map.value=_.map,t(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,t(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function h(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,t(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,t(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function m(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function g(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function y(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,v.roughnessMapTransform)),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function x(v,_,R){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===jn&&v.clearcoatNormalScale.value.negate())),_.dispersion>0&&(v.dispersion.value=_.dispersion),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=R.texture,v.transmissionSamplerSize.value.set(R.width,R.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,v.specularIntensityMapTransform))}function E(v,_){_.matcap&&(v.matcap.value=_.matcap)}function M(v,_){const R=e.get(_).light;v.referencePosition.value.setFromMatrixPosition(R.matrixWorld),v.nearDistance.value=R.shadow.camera.near,v.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function RA(i,e,t,r){let o={},l={},u=[];const f=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function d(R,C){const b=C.program;r.uniformBlockBinding(R,b)}function h(R,C){let b=o[R.id];b===void 0&&(E(R),b=m(R),o[R.id]=b,R.addEventListener("dispose",v));const F=C.program;r.updateUBOMapping(R,F);const I=e.render.frame;l[R.id]!==I&&(y(R),l[R.id]=I)}function m(R){const C=g();R.__bindingPointIndex=C;const b=i.createBuffer(),F=R.__size,I=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,F,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,C,b),b}function g(){for(let R=0;R<f;R++)if(u.indexOf(R)===-1)return u.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(R){const C=o[R.id],b=R.uniforms,F=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let I=0,O=b.length;I<O;I++){const V=Array.isArray(b[I])?b[I]:[b[I]];for(let L=0,T=V.length;L<T;L++){const U=V[L];if(x(U,I,L,F)===!0){const D=U.__offset,B=Array.isArray(U.value)?U.value:[U.value];let z=0;for(let le=0;le<B.length;le++){const ne=B[le],he=M(ne);typeof ne=="number"||typeof ne=="boolean"?(U.__data[0]=ne,i.bufferSubData(i.UNIFORM_BUFFER,D+z,U.__data)):ne.isMatrix3?(U.__data[0]=ne.elements[0],U.__data[1]=ne.elements[1],U.__data[2]=ne.elements[2],U.__data[3]=0,U.__data[4]=ne.elements[3],U.__data[5]=ne.elements[4],U.__data[6]=ne.elements[5],U.__data[7]=0,U.__data[8]=ne.elements[6],U.__data[9]=ne.elements[7],U.__data[10]=ne.elements[8],U.__data[11]=0):(ne.toArray(U.__data,z),z+=he.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(R,C,b,F){const I=R.value,O=C+"_"+b;if(F[O]===void 0)return typeof I=="number"||typeof I=="boolean"?F[O]=I:F[O]=I.clone(),!0;{const V=F[O];if(typeof I=="number"||typeof I=="boolean"){if(V!==I)return F[O]=I,!0}else if(V.equals(I)===!1)return V.copy(I),!0}return!1}function E(R){const C=R.uniforms;let b=0;const F=16;for(let O=0,V=C.length;O<V;O++){const L=Array.isArray(C[O])?C[O]:[C[O]];for(let T=0,U=L.length;T<U;T++){const D=L[T],B=Array.isArray(D.value)?D.value:[D.value];for(let z=0,le=B.length;z<le;z++){const ne=B[z],he=M(ne),X=b%F,pe=X%he.boundary,ce=X+pe;b+=pe,ce!==0&&F-ce<he.storage&&(b+=F-ce),D.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=b,b+=he.storage}}}const I=b%F;return I>0&&(b+=F-I),R.__size=b,R.__cache={},this}function M(R){const C={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(C.boundary=4,C.storage=4):R.isVector2?(C.boundary=8,C.storage=8):R.isVector3||R.isColor?(C.boundary=16,C.storage=12):R.isVector4?(C.boundary=16,C.storage=16):R.isMatrix3?(C.boundary=48,C.storage=48):R.isMatrix4?(C.boundary=64,C.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),C}function v(R){const C=R.target;C.removeEventListener("dispose",v);const b=u.indexOf(C.__bindingPointIndex);u.splice(b,1),i.deleteBuffer(o[C.id]),delete o[C.id],delete l[C.id]}function _(){for(const R in o)i.deleteBuffer(o[R]);u=[],o={},l={}}return{bind:d,update:h,dispose:_}}class CA{constructor(e={}){const{canvas:t=dE(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=u;const E=new Uint32Array(4),M=new Int32Array(4);let v=null,_=null;const R=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ci,this.toneMapping=jr,this.toneMappingExposure=1;const b=this;let F=!1,I=0,O=0,V=null,L=-1,T=null;const U=new Qt,D=new Qt;let B=null;const z=new Nt(0);let le=0,ne=t.width,he=t.height,X=1,pe=null,ce=null;const W=new Qt(0,0,ne,he),oe=new Qt(0,0,ne,he);let Ce=!1;const te=new l0;let ye=!1,Me=!1;this.transmissionResolutionScale=1;const xe=new Jt,Se=new Jt,Le=new de,Ne=new Qt,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function je(){return V===null?X:1}let G=r;function Lt(N,Q){return t.getContext(N,Q)}try{const N={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ih}`),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",Be,!1),t.addEventListener("webglcontextcreationerror",ke,!1),G===null){const Q="webgl2";if(G=Lt(Q,N),G===null)throw Lt(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let lt,pt,k,J,K,P,w,j,se,me,ge,Ue,De,Ve,ht,Ae,We,tt,st,Ge,xt,ft,Dt,$;function Ie(){lt=new BT(G),lt.init(),ft=new SA(G,lt),pt=new NT(G,lt,e,ft),k=new yA(G,lt),pt.reverseDepthBuffer&&y&&k.buffers.depth.setReversed(!0),J=new VT(G),K=new oA,P=new xA(G,lt,k,K,pt,ft,J),w=new IT(b),j=new kT(b),se=new $E(G),Dt=new LT(G,se),me=new zT(G,se,J,Dt),ge=new WT(G,me,se,J),st=new GT(G,pt,P),Ae=new UT(K),Ue=new sA(b,w,j,lt,pt,Dt,Ae),De=new bA(b,K),Ve=new lA,ht=new pA(lt),tt=new PT(b,w,j,k,ge,x,d),We=new vA(b,ge,pt),$=new RA(G,J,pt,k),Ge=new DT(G,lt,J),xt=new HT(G,lt,J),J.programs=Ue.programs,b.capabilities=pt,b.extensions=lt,b.properties=K,b.renderLists=Ve,b.shadowMap=We,b.state=k,b.info=J}Ie();const ve=new TA(b,G);this.xr=ve,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const N=lt.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=lt.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(N){N!==void 0&&(X=N,this.setSize(ne,he,!1))},this.getSize=function(N){return N.set(ne,he)},this.setSize=function(N,Q,ue=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=N,he=Q,t.width=Math.floor(N*X),t.height=Math.floor(Q*X),ue===!0&&(t.style.width=N+"px",t.style.height=Q+"px"),this.setViewport(0,0,N,Q)},this.getDrawingBufferSize=function(N){return N.set(ne*X,he*X).floor()},this.setDrawingBufferSize=function(N,Q,ue){ne=N,he=Q,X=ue,t.width=Math.floor(N*ue),t.height=Math.floor(Q*ue),this.setViewport(0,0,N,Q)},this.getCurrentViewport=function(N){return N.copy(U)},this.getViewport=function(N){return N.copy(W)},this.setViewport=function(N,Q,ue,re){N.isVector4?W.set(N.x,N.y,N.z,N.w):W.set(N,Q,ue,re),k.viewport(U.copy(W).multiplyScalar(X).round())},this.getScissor=function(N){return N.copy(oe)},this.setScissor=function(N,Q,ue,re){N.isVector4?oe.set(N.x,N.y,N.z,N.w):oe.set(N,Q,ue,re),k.scissor(D.copy(oe).multiplyScalar(X).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(N){k.setScissorTest(Ce=N)},this.setOpaqueSort=function(N){pe=N},this.setTransparentSort=function(N){ce=N},this.getClearColor=function(N){return N.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(N=!0,Q=!0,ue=!0){let re=0;if(N){let ee=!1;if(V!==null){const Re=V.texture.format;ee=Re===Hh||Re===zh||Re===Bh}if(ee){const Re=V.texture.type,Oe=Re===lr||Re===Ts||Re===xa||Re===Eo||Re===Fh||Re===kh,ze=tt.getClearColor(),qe=tt.getClearAlpha(),at=ze.r,ot=ze.g,Ke=ze.b;Oe?(E[0]=at,E[1]=ot,E[2]=Ke,E[3]=qe,G.clearBufferuiv(G.COLOR,0,E)):(M[0]=at,M[1]=ot,M[2]=Ke,M[3]=qe,G.clearBufferiv(G.COLOR,0,M))}else re|=G.COLOR_BUFFER_BIT}Q&&(re|=G.DEPTH_BUFFER_BIT),ue&&(re|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",ke,!1),tt.dispose(),Ve.dispose(),ht.dispose(),K.dispose(),w.dispose(),j.dispose(),ge.dispose(),Dt.dispose(),$.dispose(),Ue.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",Rs),ve.removeEventListener("sessionend",dr),Bi.stop()};function Ee(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Be(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const N=J.autoReset,Q=We.enabled,ue=We.autoUpdate,re=We.needsUpdate,ee=We.type;Ie(),J.autoReset=N,We.enabled=Q,We.autoUpdate=ue,We.needsUpdate=re,We.type=ee}function ke(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function dt(N){const Q=N.target;Q.removeEventListener("dispose",dt),kt(Q)}function kt(N){on(N),K.remove(N)}function on(N){const Q=K.get(N).programs;Q!==void 0&&(Q.forEach(function(ue){Ue.releaseProgram(ue)}),N.isShaderMaterial&&Ue.releaseShaderCache(N))}this.renderBufferDirect=function(N,Q,ue,re,ee,Re){Q===null&&(Q=ct);const Oe=ee.isMesh&&ee.matrixWorld.determinant()<0,ze=Na(N,Q,ue,re,ee);k.setMaterial(re,Oe);let qe=ue.index,at=1;if(re.wireframe===!0){if(qe=me.getWireframeAttribute(ue),qe===void 0)return;at=2}const ot=ue.drawRange,Ke=ue.attributes.position;let Mt=ot.start*at,mt=(ot.start+ot.count)*at;Re!==null&&(Mt=Math.max(Mt,Re.start*at),mt=Math.min(mt,(Re.start+Re.count)*at)),qe!==null?(Mt=Math.max(Mt,0),mt=Math.min(mt,qe.count)):Ke!=null&&(Mt=Math.max(Mt,0),mt=Math.min(mt,Ke.count));const qt=mt-Mt;if(qt<0||qt===1/0)return;Dt.setup(ee,re,ze,ue,qe);let Vt,Tt=Ge;if(qe!==null&&(Vt=se.get(qe),Tt=xt,Tt.setIndex(Vt)),ee.isMesh)re.wireframe===!0?(k.setLineWidth(re.wireframeLinewidth*je()),Tt.setMode(G.LINES)):Tt.setMode(G.TRIANGLES);else if(ee.isLine){let et=re.linewidth;et===void 0&&(et=1),k.setLineWidth(et*je()),ee.isLineSegments?Tt.setMode(G.LINES):ee.isLineLoop?Tt.setMode(G.LINE_LOOP):Tt.setMode(G.LINE_STRIP)}else ee.isPoints?Tt.setMode(G.POINTS):ee.isSprite&&Tt.setMode(G.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)Tt.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))Tt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const et=ee._multiDrawStarts,Yt=ee._multiDrawCounts,Et=ee._multiDrawCount,Sn=qe?se.get(qe).bytesPerElement:1,pr=K.get(re).currentProgram.getUniforms();for(let Ln=0;Ln<Et;Ln++)pr.setValue(G,"_gl_DrawID",Ln),Tt.render(et[Ln]/Sn,Yt[Ln])}else if(ee.isInstancedMesh)Tt.renderInstances(Mt,qt,ee.count);else if(ue.isInstancedBufferGeometry){const et=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Yt=Math.min(ue.instanceCount,et);Tt.renderInstances(Mt,qt,Yt)}else Tt.render(Mt,qt)};function At(N,Q,ue){N.transparent===!0&&N.side===ir&&N.forceSinglePass===!1?(N.side=jn,N.needsUpdate=!0,Cs(N,Q,ue),N.side=qr,N.needsUpdate=!0,Cs(N,Q,ue),N.side=ir):Cs(N,Q,ue)}this.compile=function(N,Q,ue=null){ue===null&&(ue=N),_=ht.get(ue),_.init(Q),C.push(_),ue.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Q.layers)&&(_.pushLight(ee),ee.castShadow&&_.pushShadow(ee))}),N!==ue&&N.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Q.layers)&&(_.pushLight(ee),ee.castShadow&&_.pushShadow(ee))}),_.setupLights();const re=new Set;return N.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Re=ee.material;if(Re)if(Array.isArray(Re))for(let Oe=0;Oe<Re.length;Oe++){const ze=Re[Oe];At(ze,ue,ee),re.add(ze)}else At(Re,ue,ee),re.add(Re)}),C.pop(),_=null,re},this.compileAsync=function(N,Q,ue=null){const re=this.compile(N,Q,ue);return new Promise(ee=>{function Re(){if(re.forEach(function(Oe){K.get(Oe).currentProgram.isReady()&&re.delete(Oe)}),re.size===0){ee(N);return}setTimeout(Re,10)}lt.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let On=null;function Pn(N){On&&On(N)}function Rs(){Bi.stop()}function dr(){Bi.start()}const Bi=new f0;Bi.setAnimationLoop(Pn),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(N){On=N,ve.setAnimationLoop(N),N===null?Bi.stop():Bi.start()},ve.addEventListener("sessionstart",Rs),ve.addEventListener("sessionend",dr),this.render=function(N,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(Q),Q=ve.getCamera()),N.isScene===!0&&N.onBeforeRender(b,N,Q,V),_=ht.get(N,C.length),_.init(Q),C.push(_),Se.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),te.setFromProjectionMatrix(Se),Me=this.localClippingEnabled,ye=Ae.init(this.clippingPlanes,Me),v=Ve.get(N,R.length),v.init(),R.push(v),ve.enabled===!0&&ve.isPresenting===!0){const Re=b.xr.getDepthSensingMesh();Re!==null&&zi(Re,Q,-1/0,b.sortObjects)}zi(N,Q,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort(pe,ce),_t=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,_t&&tt.addToRenderList(v,N),this.info.render.frame++,ye===!0&&Ae.beginShadows();const ue=_.state.shadowsArray;We.render(ue,N,Q),ye===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=v.opaque,ee=v.transmissive;if(_.setupLights(),Q.isArrayCamera){const Re=Q.cameras;if(ee.length>0)for(let Oe=0,ze=Re.length;Oe<ze;Oe++){const qe=Re[Oe];Kr(re,ee,N,qe)}_t&&tt.render(N);for(let Oe=0,ze=Re.length;Oe<ze;Oe++){const qe=Re[Oe];$r(v,N,qe,qe.viewport)}}else ee.length>0&&Kr(re,ee,N,Q),_t&&tt.render(N),$r(v,N,Q);V!==null&&O===0&&(P.updateMultisampleRenderTarget(V),P.updateRenderTargetMipmap(V)),N.isScene===!0&&N.onAfterRender(b,N,Q),Dt.resetDefaultState(),L=-1,T=null,C.pop(),C.length>0?(_=C[C.length-1],ye===!0&&Ae.setGlobalState(b.clippingPlanes,_.state.camera)):_=null,R.pop(),R.length>0?v=R[R.length-1]:v=null};function zi(N,Q,ue,re){if(N.visible===!1)return;if(N.layers.test(Q.layers)){if(N.isGroup)ue=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(Q);else if(N.isLight)_.pushLight(N),N.castShadow&&_.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||te.intersectsSprite(N)){re&&Ne.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Se);const Oe=ge.update(N),ze=N.material;ze.visible&&v.push(N,Oe,ze,ue,Ne.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||te.intersectsObject(N))){const Oe=ge.update(N),ze=N.material;if(re&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Ne.copy(N.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Ne.copy(Oe.boundingSphere.center)),Ne.applyMatrix4(N.matrixWorld).applyMatrix4(Se)),Array.isArray(ze)){const qe=Oe.groups;for(let at=0,ot=qe.length;at<ot;at++){const Ke=qe[at],Mt=ze[Ke.materialIndex];Mt&&Mt.visible&&v.push(N,Oe,Mt,ue,Ne.z,Ke)}}else ze.visible&&v.push(N,Oe,ze,ue,Ne.z,null)}}const Re=N.children;for(let Oe=0,ze=Re.length;Oe<ze;Oe++)zi(Re[Oe],Q,ue,re)}function $r(N,Q,ue,re){const ee=N.opaque,Re=N.transmissive,Oe=N.transparent;_.setupLightsView(ue),ye===!0&&Ae.setGlobalState(b.clippingPlanes,ue),re&&k.viewport(U.copy(re)),ee.length>0&&hr(ee,Q,ue),Re.length>0&&hr(Re,Q,ue),Oe.length>0&&hr(Oe,Q,ue),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function Kr(N,Q,ue,re){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[re.id]===void 0&&(_.state.transmissionRenderTarget[re.id]=new As(1,1,{generateMipmaps:!0,type:lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float")?Ea:lr,minFilter:Ss,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace}));const Re=_.state.transmissionRenderTarget[re.id],Oe=re.viewport||U;Re.setSize(Oe.z*b.transmissionResolutionScale,Oe.w*b.transmissionResolutionScale);const ze=b.getRenderTarget();b.setRenderTarget(Re),b.getClearColor(z),le=b.getClearAlpha(),le<1&&b.setClearColor(16777215,.5),b.clear(),_t&&tt.render(ue);const qe=b.toneMapping;b.toneMapping=jr;const at=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),_.setupLightsView(re),ye===!0&&Ae.setGlobalState(b.clippingPlanes,re),hr(N,ue,re),P.updateMultisampleRenderTarget(Re),P.updateRenderTargetMipmap(Re),lt.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let Ke=0,Mt=Q.length;Ke<Mt;Ke++){const mt=Q[Ke],qt=mt.object,Vt=mt.geometry,Tt=mt.material,et=mt.group;if(Tt.side===ir&&qt.layers.test(re.layers)){const Yt=Tt.side;Tt.side=jn,Tt.needsUpdate=!0,La(qt,ue,re,Vt,Tt,et),Tt.side=Yt,Tt.needsUpdate=!0,ot=!0}}ot===!0&&(P.updateMultisampleRenderTarget(Re),P.updateRenderTargetMipmap(Re))}b.setRenderTarget(ze),b.setClearColor(z,le),at!==void 0&&(re.viewport=at),b.toneMapping=qe}function hr(N,Q,ue){const re=Q.isScene===!0?Q.overrideMaterial:null;for(let ee=0,Re=N.length;ee<Re;ee++){const Oe=N[ee],ze=Oe.object,qe=Oe.geometry,at=re===null?Oe.material:re,ot=Oe.group;ze.layers.test(ue.layers)&&La(ze,Q,ue,qe,at,ot)}}function La(N,Q,ue,re,ee,Re){N.onBeforeRender(b,Q,ue,re,ee,Re),N.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),ee.onBeforeRender(b,Q,ue,re,N,Re),ee.transparent===!0&&ee.side===ir&&ee.forceSinglePass===!1?(ee.side=jn,ee.needsUpdate=!0,b.renderBufferDirect(ue,Q,re,ee,N,Re),ee.side=qr,ee.needsUpdate=!0,b.renderBufferDirect(ue,Q,re,ee,N,Re),ee.side=ir):b.renderBufferDirect(ue,Q,re,ee,N,Re),N.onAfterRender(b,Q,ue,re,ee,Re)}function Cs(N,Q,ue){Q.isScene!==!0&&(Q=ct);const re=K.get(N),ee=_.state.lights,Re=_.state.shadowsArray,Oe=ee.state.version,ze=Ue.getParameters(N,ee.state,Re,Q,ue),qe=Ue.getProgramCacheKey(ze);let at=re.programs;re.environment=N.isMeshStandardMaterial?Q.environment:null,re.fog=Q.fog,re.envMap=(N.isMeshStandardMaterial?j:w).get(N.envMap||re.environment),re.envMapRotation=re.environment!==null&&N.envMap===null?Q.environmentRotation:N.envMapRotation,at===void 0&&(N.addEventListener("dispose",dt),at=new Map,re.programs=at);let ot=at.get(qe);if(ot!==void 0){if(re.currentProgram===ot&&re.lightsStateVersion===Oe)return Ai(N,ze),ot}else ze.uniforms=Ue.getUniforms(N),N.onBeforeCompile(ze,b),ot=Ue.acquireProgram(ze,qe),at.set(qe,ot),re.uniforms=ze.uniforms;const Ke=re.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Ke.clippingPlanes=Ae.uniform),Ai(N,ze),re.needsLights=uc(N),re.lightsStateVersion=Oe,re.needsLights&&(Ke.ambientLightColor.value=ee.state.ambient,Ke.lightProbe.value=ee.state.probe,Ke.directionalLights.value=ee.state.directional,Ke.directionalLightShadows.value=ee.state.directionalShadow,Ke.spotLights.value=ee.state.spot,Ke.spotLightShadows.value=ee.state.spotShadow,Ke.rectAreaLights.value=ee.state.rectArea,Ke.ltc_1.value=ee.state.rectAreaLTC1,Ke.ltc_2.value=ee.state.rectAreaLTC2,Ke.pointLights.value=ee.state.point,Ke.pointLightShadows.value=ee.state.pointShadow,Ke.hemisphereLights.value=ee.state.hemi,Ke.directionalShadowMap.value=ee.state.directionalShadowMap,Ke.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ke.spotShadowMap.value=ee.state.spotShadowMap,Ke.spotLightMatrix.value=ee.state.spotLightMatrix,Ke.spotLightMap.value=ee.state.spotLightMap,Ke.pointShadowMap.value=ee.state.pointShadowMap,Ke.pointShadowMatrix.value=ee.state.pointShadowMatrix),re.currentProgram=ot,re.uniformsList=null,ot}function Da(N){if(N.uniformsList===null){const Q=N.currentProgram.getUniforms();N.uniformsList=Ru.seqWithValue(Q.seq,N.uniforms)}return N.uniformsList}function Ai(N,Q){const ue=K.get(N);ue.outputColorSpace=Q.outputColorSpace,ue.batching=Q.batching,ue.batchingColor=Q.batchingColor,ue.instancing=Q.instancing,ue.instancingColor=Q.instancingColor,ue.instancingMorph=Q.instancingMorph,ue.skinning=Q.skinning,ue.morphTargets=Q.morphTargets,ue.morphNormals=Q.morphNormals,ue.morphColors=Q.morphColors,ue.morphTargetsCount=Q.morphTargetsCount,ue.numClippingPlanes=Q.numClippingPlanes,ue.numIntersection=Q.numClipIntersection,ue.vertexAlphas=Q.vertexAlphas,ue.vertexTangents=Q.vertexTangents,ue.toneMapping=Q.toneMapping}function Na(N,Q,ue,re,ee){Q.isScene!==!0&&(Q=ct),P.resetTextureUnits();const Re=Q.fog,Oe=re.isMeshStandardMaterial?Q.environment:null,ze=V===null?b.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:wo,qe=(re.isMeshStandardMaterial?j:w).get(re.envMap||Oe),at=re.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,ot=!!ue.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Ke=!!ue.morphAttributes.position,Mt=!!ue.morphAttributes.normal,mt=!!ue.morphAttributes.color;let qt=jr;re.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(qt=b.toneMapping);const Vt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Tt=Vt!==void 0?Vt.length:0,et=K.get(re),Yt=_.state.lights;if(ye===!0&&(Me===!0||N!==T)){const _n=N===T&&re.id===L;Ae.setState(re,N,_n)}let Et=!1;re.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Yt.state.version||et.outputColorSpace!==ze||ee.isBatchedMesh&&et.batching===!1||!ee.isBatchedMesh&&et.batching===!0||ee.isBatchedMesh&&et.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&et.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&et.instancing===!1||!ee.isInstancedMesh&&et.instancing===!0||ee.isSkinnedMesh&&et.skinning===!1||!ee.isSkinnedMesh&&et.skinning===!0||ee.isInstancedMesh&&et.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&et.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&et.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&et.instancingMorph===!1&&ee.morphTexture!==null||et.envMap!==qe||re.fog===!0&&et.fog!==Re||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==Ae.numPlanes||et.numIntersection!==Ae.numIntersection)||et.vertexAlphas!==at||et.vertexTangents!==ot||et.morphTargets!==Ke||et.morphNormals!==Mt||et.morphColors!==mt||et.toneMapping!==qt||et.morphTargetsCount!==Tt)&&(Et=!0):(Et=!0,et.__version=re.version);let Sn=et.currentProgram;Et===!0&&(Sn=Cs(re,Q,ee));let pr=!1,Ln=!1,Hi=!1;const It=Sn.getUniforms(),En=et.uniforms;if(k.useProgram(Sn.program)&&(pr=!0,Ln=!0,Hi=!0),re.id!==L&&(L=re.id,Ln=!0),pr||T!==N){k.buffers.depth.getReversed()?(xe.copy(N.projectionMatrix),pE(xe),mE(xe),It.setValue(G,"projectionMatrix",xe)):It.setValue(G,"projectionMatrix",N.projectionMatrix),It.setValue(G,"viewMatrix",N.matrixWorldInverse);const hn=It.map.cameraPosition;hn!==void 0&&hn.setValue(G,Le.setFromMatrixPosition(N.matrixWorld)),pt.logarithmicDepthBuffer&&It.setValue(G,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&It.setValue(G,"isOrthographic",N.isOrthographicCamera===!0),T!==N&&(T=N,Ln=!0,Hi=!0)}if(ee.isSkinnedMesh){It.setOptional(G,ee,"bindMatrix"),It.setOptional(G,ee,"bindMatrixInverse");const _n=ee.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),It.setValue(G,"boneTexture",_n.boneTexture,P))}ee.isBatchedMesh&&(It.setOptional(G,ee,"batchingTexture"),It.setValue(G,"batchingTexture",ee._matricesTexture,P),It.setOptional(G,ee,"batchingIdTexture"),It.setValue(G,"batchingIdTexture",ee._indirectTexture,P),It.setOptional(G,ee,"batchingColorTexture"),ee._colorsTexture!==null&&It.setValue(G,"batchingColorTexture",ee._colorsTexture,P));const dn=ue.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&st.update(ee,ue,Sn),(Ln||et.receiveShadow!==ee.receiveShadow)&&(et.receiveShadow=ee.receiveShadow,It.setValue(G,"receiveShadow",ee.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(En.envMap.value=qe,En.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&Q.environment!==null&&(En.envMapIntensity.value=Q.environmentIntensity),Ln&&(It.setValue(G,"toneMappingExposure",b.toneMappingExposure),et.needsLights&&Ua(En,Hi),Re&&re.fog===!0&&De.refreshFogUniforms(En,Re),De.refreshMaterialUniforms(En,re,X,he,_.state.transmissionRenderTarget[N.id]),Ru.upload(G,Da(et),En,P)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Ru.upload(G,Da(et),En,P),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&It.setValue(G,"center",ee.center),It.setValue(G,"modelViewMatrix",ee.modelViewMatrix),It.setValue(G,"normalMatrix",ee.normalMatrix),It.setValue(G,"modelMatrix",ee.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const _n=re.uniformsGroups;for(let hn=0,bt=_n.length;hn<bt;hn++){const bi=_n[hn];$.update(bi,Sn),$.bind(bi,Sn)}}return Sn}function Ua(N,Q){N.ambientLightColor.needsUpdate=Q,N.lightProbe.needsUpdate=Q,N.directionalLights.needsUpdate=Q,N.directionalLightShadows.needsUpdate=Q,N.pointLights.needsUpdate=Q,N.pointLightShadows.needsUpdate=Q,N.spotLights.needsUpdate=Q,N.spotLightShadows.needsUpdate=Q,N.rectAreaLights.needsUpdate=Q,N.hemisphereLights.needsUpdate=Q}function uc(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(N,Q,ue){K.get(N.texture).__webglTexture=Q,K.get(N.depthTexture).__webglTexture=ue;const re=K.get(N);re.__hasExternalTextures=!0,re.__autoAllocateDepthBuffer=ue===void 0,re.__autoAllocateDepthBuffer||lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,Q){const ue=K.get(N);ue.__webglFramebuffer=Q,ue.__useDefaultFramebuffer=Q===void 0};const Ia=G.createFramebuffer();this.setRenderTarget=function(N,Q=0,ue=0){V=N,I=Q,O=ue;let re=!0,ee=null,Re=!1,Oe=!1;if(N){const qe=K.get(N);if(qe.__useDefaultFramebuffer!==void 0)k.bindFramebuffer(G.FRAMEBUFFER,null),re=!1;else if(qe.__webglFramebuffer===void 0)P.setupRenderTarget(N);else if(qe.__hasExternalTextures)P.rebindTextures(N,K.get(N.texture).__webglTexture,K.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const Ke=N.depthTexture;if(qe.__boundDepthTexture!==Ke){if(Ke!==null&&K.has(Ke)&&(N.width!==Ke.image.width||N.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(N)}}const at=N.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(Oe=!0);const ot=K.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(ot[Q])?ee=ot[Q][ue]:ee=ot[Q],Re=!0):N.samples>0&&P.useMultisampledRTT(N)===!1?ee=K.get(N).__webglMultisampledFramebuffer:Array.isArray(ot)?ee=ot[ue]:ee=ot,U.copy(N.viewport),D.copy(N.scissor),B=N.scissorTest}else U.copy(W).multiplyScalar(X).floor(),D.copy(oe).multiplyScalar(X).floor(),B=Ce;if(ue!==0&&(ee=Ia),k.bindFramebuffer(G.FRAMEBUFFER,ee)&&re&&k.drawBuffers(N,ee),k.viewport(U),k.scissor(D),k.setScissorTest(B),Re){const qe=K.get(N.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Q,qe.__webglTexture,ue)}else if(Oe){const qe=K.get(N.texture),at=Q;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,qe.__webglTexture,ue,at)}else if(N!==null&&ue!==0){const qe=K.get(N.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,qe.__webglTexture,ue)}L=-1},this.readRenderTargetPixels=function(N,Q,ue,re,ee,Re,Oe){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=K.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Oe!==void 0&&(ze=ze[Oe]),ze){k.bindFramebuffer(G.FRAMEBUFFER,ze);try{const qe=N.texture,at=qe.format,ot=qe.type;if(!pt.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=N.width-re&&ue>=0&&ue<=N.height-ee&&G.readPixels(Q,ue,re,ee,ft.convert(at),ft.convert(ot),Re)}finally{const qe=V!==null?K.get(V).__webglFramebuffer:null;k.bindFramebuffer(G.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(N,Q,ue,re,ee,Re,Oe){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=K.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Oe!==void 0&&(ze=ze[Oe]),ze){const qe=N.texture,at=qe.format,ot=qe.type;if(!pt.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Q>=0&&Q<=N.width-re&&ue>=0&&ue<=N.height-ee){k.bindFramebuffer(G.FRAMEBUFFER,ze);const Ke=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Ke),G.bufferData(G.PIXEL_PACK_BUFFER,Re.byteLength,G.STREAM_READ),G.readPixels(Q,ue,re,ee,ft.convert(at),ft.convert(ot),0);const Mt=V!==null?K.get(V).__webglFramebuffer:null;k.bindFramebuffer(G.FRAMEBUFFER,Mt);const mt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await hE(G,mt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Ke),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Re),G.deleteBuffer(Ke),G.deleteSync(mt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(N,Q=null,ue=0){N.isTexture!==!0&&(po("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Q=arguments[0]||null,N=arguments[1]);const re=Math.pow(2,-ue),ee=Math.floor(N.image.width*re),Re=Math.floor(N.image.height*re),Oe=Q!==null?Q.x:0,ze=Q!==null?Q.y:0;P.setTexture2D(N,0),G.copyTexSubImage2D(G.TEXTURE_2D,ue,0,0,Oe,ze,ee,Re),k.unbindTexture()};const Oa=G.createFramebuffer(),Fa=G.createFramebuffer();this.copyTextureToTexture=function(N,Q,ue=null,re=null,ee=0,Re=null){N.isTexture!==!0&&(po("WebGLRenderer: copyTextureToTexture function signature has changed."),re=arguments[0]||null,N=arguments[1],Q=arguments[2],Re=arguments[3]||0,ue=null),Re===null&&(ee!==0?(po("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Re=ee,ee=0):Re=0);let Oe,ze,qe,at,ot,Ke,Mt,mt,qt;const Vt=N.isCompressedTexture?N.mipmaps[Re]:N.image;if(ue!==null)Oe=ue.max.x-ue.min.x,ze=ue.max.y-ue.min.y,qe=ue.isBox3?ue.max.z-ue.min.z:1,at=ue.min.x,ot=ue.min.y,Ke=ue.isBox3?ue.min.z:0;else{const dn=Math.pow(2,-ee);Oe=Math.floor(Vt.width*dn),ze=Math.floor(Vt.height*dn),N.isDataArrayTexture?qe=Vt.depth:N.isData3DTexture?qe=Math.floor(Vt.depth*dn):qe=1,at=0,ot=0,Ke=0}re!==null?(Mt=re.x,mt=re.y,qt=re.z):(Mt=0,mt=0,qt=0);const Tt=ft.convert(Q.format),et=ft.convert(Q.type);let Yt;Q.isData3DTexture?(P.setTexture3D(Q,0),Yt=G.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(P.setTexture2DArray(Q,0),Yt=G.TEXTURE_2D_ARRAY):(P.setTexture2D(Q,0),Yt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Q.unpackAlignment);const Et=G.getParameter(G.UNPACK_ROW_LENGTH),Sn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),pr=G.getParameter(G.UNPACK_SKIP_PIXELS),Ln=G.getParameter(G.UNPACK_SKIP_ROWS),Hi=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Vt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Vt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,at),G.pixelStorei(G.UNPACK_SKIP_ROWS,ot),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ke);const It=N.isDataArrayTexture||N.isData3DTexture,En=Q.isDataArrayTexture||Q.isData3DTexture;if(N.isDepthTexture){const dn=K.get(N),_n=K.get(Q),hn=K.get(dn.__renderTarget),bt=K.get(_n.__renderTarget);k.bindFramebuffer(G.READ_FRAMEBUFFER,hn.__webglFramebuffer),k.bindFramebuffer(G.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let bi=0;bi<qe;bi++)It&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,K.get(N).__webglTexture,ee,Ke+bi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,K.get(Q).__webglTexture,Re,qt+bi)),G.blitFramebuffer(at,ot,Oe,ze,Mt,mt,Oe,ze,G.DEPTH_BUFFER_BIT,G.NEAREST);k.bindFramebuffer(G.READ_FRAMEBUFFER,null),k.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(ee!==0||N.isRenderTargetTexture||K.has(N)){const dn=K.get(N),_n=K.get(Q);k.bindFramebuffer(G.READ_FRAMEBUFFER,Oa),k.bindFramebuffer(G.DRAW_FRAMEBUFFER,Fa);for(let hn=0;hn<qe;hn++)It?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,dn.__webglTexture,ee,Ke+hn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,dn.__webglTexture,ee),En?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,_n.__webglTexture,Re,qt+hn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,_n.__webglTexture,Re),ee!==0?G.blitFramebuffer(at,ot,Oe,ze,Mt,mt,Oe,ze,G.COLOR_BUFFER_BIT,G.NEAREST):En?G.copyTexSubImage3D(Yt,Re,Mt,mt,qt+hn,at,ot,Oe,ze):G.copyTexSubImage2D(Yt,Re,Mt,mt,at,ot,Oe,ze);k.bindFramebuffer(G.READ_FRAMEBUFFER,null),k.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else En?N.isDataTexture||N.isData3DTexture?G.texSubImage3D(Yt,Re,Mt,mt,qt,Oe,ze,qe,Tt,et,Vt.data):Q.isCompressedArrayTexture?G.compressedTexSubImage3D(Yt,Re,Mt,mt,qt,Oe,ze,qe,Tt,Vt.data):G.texSubImage3D(Yt,Re,Mt,mt,qt,Oe,ze,qe,Tt,et,Vt):N.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Re,Mt,mt,Oe,ze,Tt,et,Vt.data):N.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Re,Mt,mt,Vt.width,Vt.height,Tt,Vt.data):G.texSubImage2D(G.TEXTURE_2D,Re,Mt,mt,Oe,ze,Tt,et,Vt);G.pixelStorei(G.UNPACK_ROW_LENGTH,Et),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Sn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,pr),G.pixelStorei(G.UNPACK_SKIP_ROWS,Ln),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Hi),Re===0&&Q.generateMipmaps&&G.generateMipmap(Yt),k.unbindTexture()},this.copyTextureToTexture3D=function(N,Q,ue=null,re=null,ee=0){return N.isTexture!==!0&&(po("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ue=arguments[0]||null,re=arguments[1]||null,N=arguments[2],Q=arguments[3],ee=arguments[4]||0),po('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(N,Q,ue,re,ee)},this.initRenderTarget=function(N){K.get(N).__webglFramebuffer===void 0&&P.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?P.setTextureCube(N,0):N.isData3DTexture?P.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?P.setTexture2DArray(N,0):P.setTexture2D(N,0),k.unbindTexture()},this.resetState=function(){I=0,O=0,V=null,k.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Pt._getUnpackColorSpace()}}const PA=()=>{const i=nt.useRef(null);return nt.useEffect(()=>{const e=new zE,t=new fi(75,window.innerWidth/window.innerHeight,.1,1e3);t.position.z=5;const r=new CA({antialias:!0});r.setSize(window.innerWidth,window.innerHeight),i.current.appendChild(r.domElement);const o=20,l=10/(o+1),u=new u0({color:5592405}),f=[];let d={x:0,y:0};for(let x=1;x<=o;x++){const E=x*l-5,M=[new de(-50,E,0),new de(50,E,0)],v=new fr().setFromPoints(M),_=new GE(v,u);e.add(_),f.push({line:_,points:M,baseY:E})}const h=()=>{r.setSize(window.innerWidth,window.innerHeight),t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix()};window.addEventListener("resize",h);const m=x=>{const E=x.clientX/window.innerWidth*2-1,M=-(x.clientY/window.innerHeight)*2+1;d.x=E*20,d.y=M*20};window.addEventListener("mousemove",m);const g=new MouseEvent("mousemove",{clientX:100,clientY:100,bubbles:!0,cancelable:!0});window.dispatchEvent(g);const y=()=>{requestAnimationFrame(y),f.forEach(({line:x,points:E,baseY:M},v)=>{const _=Math.sin(performance.now()*.005+v)*.1,R=d.y*(1-v/o)*_,C=Math.max(Math.min(R,20),-20);E[0].y=M+C,E[1].y=M+C,x.geometry.setFromPoints(E)}),d.x*=.95,d.y*=.95,r.render(e,t)};return y(),()=>{window.removeEventListener("resize",h),window.removeEventListener("mousemove",m),i.current&&r.domElement.parentNode===i.current&&i.current.removeChild(r.domElement),r.dispose()}},[]),Z.jsx("div",{ref:i,className:"interactive-background"})},LA=({onClose:i})=>{const[e,t]=nt.useState(!1);nt.useEffect(()=>{i===!1&&t(!1)},[i]);const r=()=>{t(!e)};return Z.jsx("div",{className:"button",children:Z.jsx("a",{id:"MenuBtn",href:"#",className:`hamburger-icon cross-animation ${e?"open":""}`,onClick:o=>{o.preventDefault(),r()},children:Z.jsx("span",{})})})},DA=()=>{const[i,e]=nt.useState(!1),[t,r]=nt.useState(!1),[o,l]=nt.useState(!1);nt.useEffect(()=>{const f=()=>{const d=window.innerWidth<=991,h=window.scrollY;e(d||h>=60)};return window.addEventListener("scroll",f),f(),()=>{window.removeEventListener("scroll",f)}},[]);const u=()=>{window.innerWidth<=991&&(r(f=>!f),l(f=>!f))};return Z.jsx("div",{className:i?"navbar active":"navbar",children:Z.jsx("div",{className:"container",children:Z.jsxs("div",{className:"navbar__wrapper",children:[Z.jsx("nav",{children:Z.jsxs("ul",{className:t?"navbar__menu active":"navbar__menu",children:[Z.jsx("li",{children:Z.jsx(Gr.Link,{to:"hero",spy:!0,smooth:!0,offset:0,duration:800,className:({isActive:f})=>f?"active":"",onClick:u,children:"Home"})}),Z.jsx("li",{children:Z.jsx(Gr.Link,{to:"gallery",spy:!0,smooth:!0,offset:0,duration:800,className:({isActive:f})=>f?"active":"",onClick:u,children:"Gallery"})}),Z.jsx("li",{children:Z.jsx(Gr.Link,{to:"about",spy:!0,smooth:!0,offset:70,duration:800,className:({isActive:f})=>f?"active":"",onClick:u,children:"About"})}),Z.jsx("li",{children:Z.jsx(Gr.Link,{to:"footer",spy:!0,smooth:!0,offset:45,duration:800,className:({isActive:f})=>f?"active":"",onClick:u,children:"Connect"})})]})}),Z.jsx("div",{className:"nav__hamburguer",onClick:u,children:Z.jsx(LA,{onClose:o})})]})})})},NA=()=>Z.jsx("header",{children:Z.jsx("div",{className:"header-container",children:Z.jsxs("div",{className:"header-container__center",children:[Z.jsx("div",{className:"header-container__center__left",children:Z.jsx("div",{className:"header__p-container",children:Z.jsx("p",{className:"header__p",id:"gallery",children:"MrPX"})})}),Z.jsx("div",{className:"header-container__center__right",children:Z.jsx(DA,{})})]})})}),UA=()=>{const i="Blending art and cutting-edge technology to craft innovative inspiring visual narratives",e=nt.useMemo(()=>i.toUpperCase(),[i]),t=nt.useMemo(()=>e.split(" "),[e]),[r,o]=nt.useState([]),[l,u]=nt.useState(1);nt.useEffect(()=>{const d=e.length,h=Array.from({length:d},()=>Math.random()*1.5);o(h)},[e]),nt.useEffect(()=>{const d=()=>{const h=window.scrollY*.5,m=window.innerHeight*.43,g=window.innerHeight*.4;let y=1-(h-m)/g;y=Math.max(0,Math.min(1,y)),u(y)};return window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d)},[]);let f=0;return Z.jsx("div",{className:"hero-container",children:Z.jsx("div",{className:"hero-container__text-container",style:{opacity:l},children:Z.jsx("h1",{className:"heading",children:t.map((d,h)=>Z.jsxs("span",{className:"word",children:[d.split("").map(m=>{const g=f++;return Z.jsx("span",{className:"letter",style:{animationDelay:`${r[g]||0}s`,display:"inline"},children:m},g)}),"  "]},h))})})})};function g0(i,e){return function(){return i.apply(e,arguments)}}const{toString:IA}=Object.prototype,{getPrototypeOf:Gh}=Object,nc=(i=>e=>{const t=IA.call(e);return i[t]||(i[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),Ti=i=>(i=i.toLowerCase(),e=>nc(e)===i),ic=i=>e=>typeof e===i,{isArray:Ro}=Array,Sa=ic("undefined");function OA(i){return i!==null&&!Sa(i)&&i.constructor!==null&&!Sa(i.constructor)&&ti(i.constructor.isBuffer)&&i.constructor.isBuffer(i)}const v0=Ti("ArrayBuffer");function FA(i){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(i):e=i&&i.buffer&&v0(i.buffer),e}const kA=ic("string"),ti=ic("function"),_0=ic("number"),rc=i=>i!==null&&typeof i=="object",BA=i=>i===!0||i===!1,Cu=i=>{if(nc(i)!=="object")return!1;const e=Gh(i);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in i)&&!(Symbol.iterator in i)},zA=Ti("Date"),HA=Ti("File"),VA=Ti("Blob"),GA=Ti("FileList"),WA=i=>rc(i)&&ti(i.pipe),jA=i=>{let e;return i&&(typeof FormData=="function"&&i instanceof FormData||ti(i.append)&&((e=nc(i))==="formdata"||e==="object"&&ti(i.toString)&&i.toString()==="[object FormData]"))},XA=Ti("URLSearchParams"),[qA,YA,$A,KA]=["ReadableStream","Request","Response","Headers"].map(Ti),ZA=i=>i.trim?i.trim():i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ra(i,e,{allOwnKeys:t=!1}={}){if(i===null||typeof i>"u")return;let r,o;if(typeof i!="object"&&(i=[i]),Ro(i))for(r=0,o=i.length;r<o;r++)e.call(null,i[r],r,i);else{const l=t?Object.getOwnPropertyNames(i):Object.keys(i),u=l.length;let f;for(r=0;r<u;r++)f=l[r],e.call(null,i[f],f,i)}}function y0(i,e){e=e.toLowerCase();const t=Object.keys(i);let r=t.length,o;for(;r-- >0;)if(o=t[r],e===o.toLowerCase())return o;return null}const Es=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,x0=i=>!Sa(i)&&i!==Es;function Mh(){const{caseless:i}=x0(this)&&this||{},e={},t=(r,o)=>{const l=i&&y0(e,o)||o;Cu(e[l])&&Cu(r)?e[l]=Mh(e[l],r):Cu(r)?e[l]=Mh({},r):Ro(r)?e[l]=r.slice():e[l]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&Ra(arguments[r],t);return e}const QA=(i,e,t,{allOwnKeys:r}={})=>(Ra(e,(o,l)=>{t&&ti(o)?i[l]=g0(o,t):i[l]=o},{allOwnKeys:r}),i),JA=i=>(i.charCodeAt(0)===65279&&(i=i.slice(1)),i),eb=(i,e,t,r)=>{i.prototype=Object.create(e.prototype,r),i.prototype.constructor=i,Object.defineProperty(i,"super",{value:e.prototype}),t&&Object.assign(i.prototype,t)},tb=(i,e,t,r)=>{let o,l,u;const f={};if(e=e||{},i==null)return e;do{for(o=Object.getOwnPropertyNames(i),l=o.length;l-- >0;)u=o[l],(!r||r(u,i,e))&&!f[u]&&(e[u]=i[u],f[u]=!0);i=t!==!1&&Gh(i)}while(i&&(!t||t(i,e))&&i!==Object.prototype);return e},nb=(i,e,t)=>{i=String(i),(t===void 0||t>i.length)&&(t=i.length),t-=e.length;const r=i.indexOf(e,t);return r!==-1&&r===t},ib=i=>{if(!i)return null;if(Ro(i))return i;let e=i.length;if(!_0(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=i[e];return t},rb=(i=>e=>i&&e instanceof i)(typeof Uint8Array<"u"&&Gh(Uint8Array)),sb=(i,e)=>{const r=(i&&i[Symbol.iterator]).call(i);let o;for(;(o=r.next())&&!o.done;){const l=o.value;e.call(i,l[0],l[1])}},ob=(i,e)=>{let t;const r=[];for(;(t=i.exec(e))!==null;)r.push(t);return r},ab=Ti("HTMLFormElement"),lb=i=>i.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,r,o){return r.toUpperCase()+o}),Qv=(({hasOwnProperty:i})=>(e,t)=>i.call(e,t))(Object.prototype),ub=Ti("RegExp"),S0=(i,e)=>{const t=Object.getOwnPropertyDescriptors(i),r={};Ra(t,(o,l)=>{let u;(u=e(o,l,i))!==!1&&(r[l]=u||o)}),Object.defineProperties(i,r)},cb=i=>{S0(i,(e,t)=>{if(ti(i)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const r=i[t];if(ti(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},fb=(i,e)=>{const t={},r=o=>{o.forEach(l=>{t[l]=!0})};return Ro(i)?r(i):r(String(i).split(e)),t},db=()=>{},hb=(i,e)=>i!=null&&Number.isFinite(i=+i)?i:e;function pb(i){return!!(i&&ti(i.append)&&i[Symbol.toStringTag]==="FormData"&&i[Symbol.iterator])}const mb=i=>{const e=new Array(10),t=(r,o)=>{if(rc(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[o]=r;const l=Ro(r)?[]:{};return Ra(r,(u,f)=>{const d=t(u,o+1);!Sa(d)&&(l[f]=d)}),e[o]=void 0,l}}return r};return t(i,0)},gb=Ti("AsyncFunction"),vb=i=>i&&(rc(i)||ti(i))&&ti(i.then)&&ti(i.catch),E0=((i,e)=>i?setImmediate:e?((t,r)=>(Es.addEventListener("message",({source:o,data:l})=>{o===Es&&l===t&&r.length&&r.shift()()},!1),o=>{r.push(o),Es.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",ti(Es.postMessage)),_b=typeof queueMicrotask<"u"?queueMicrotask.bind(Es):typeof process<"u"&&process.nextTick||E0,_e={isArray:Ro,isArrayBuffer:v0,isBuffer:OA,isFormData:jA,isArrayBufferView:FA,isString:kA,isNumber:_0,isBoolean:BA,isObject:rc,isPlainObject:Cu,isReadableStream:qA,isRequest:YA,isResponse:$A,isHeaders:KA,isUndefined:Sa,isDate:zA,isFile:HA,isBlob:VA,isRegExp:ub,isFunction:ti,isStream:WA,isURLSearchParams:XA,isTypedArray:rb,isFileList:GA,forEach:Ra,merge:Mh,extend:QA,trim:ZA,stripBOM:JA,inherits:eb,toFlatObject:tb,kindOf:nc,kindOfTest:Ti,endsWith:nb,toArray:ib,forEachEntry:sb,matchAll:ob,isHTMLForm:ab,hasOwnProperty:Qv,hasOwnProp:Qv,reduceDescriptors:S0,freezeMethods:cb,toObjectSet:fb,toCamelCase:lb,noop:db,toFiniteNumber:hb,findKey:y0,global:Es,isContextDefined:x0,isSpecCompliantForm:pb,toJSONObject:mb,isAsyncFn:gb,isThenable:vb,setImmediate:E0,asap:_b};function gt(i,e,t,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=i,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}_e.inherits(gt,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:_e.toJSONObject(this.config),code:this.code,status:this.status}}});const M0=gt.prototype,w0={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(i=>{w0[i]={value:i}});Object.defineProperties(gt,w0);Object.defineProperty(M0,"isAxiosError",{value:!0});gt.from=(i,e,t,r,o,l)=>{const u=Object.create(M0);return _e.toFlatObject(i,u,function(d){return d!==Error.prototype},f=>f!=="isAxiosError"),gt.call(u,i.message,e,t,r,o),u.cause=i,u.name=i.name,l&&Object.assign(u,l),u};const yb=null;function wh(i){return _e.isPlainObject(i)||_e.isArray(i)}function T0(i){return _e.endsWith(i,"[]")?i.slice(0,-2):i}function Jv(i,e,t){return i?i.concat(e).map(function(o,l){return o=T0(o),!t&&l?"["+o+"]":o}).join(t?".":""):e}function xb(i){return _e.isArray(i)&&!i.some(wh)}const Sb=_e.toFlatObject(_e,{},null,function(e){return/^is[A-Z]/.test(e)});function sc(i,e,t){if(!_e.isObject(i))throw new TypeError("target must be an object");e=e||new FormData,t=_e.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(M,v){return!_e.isUndefined(v[M])});const r=t.metaTokens,o=t.visitor||m,l=t.dots,u=t.indexes,d=(t.Blob||typeof Blob<"u"&&Blob)&&_e.isSpecCompliantForm(e);if(!_e.isFunction(o))throw new TypeError("visitor must be a function");function h(E){if(E===null)return"";if(_e.isDate(E))return E.toISOString();if(!d&&_e.isBlob(E))throw new gt("Blob is not supported. Use a Buffer instead.");return _e.isArrayBuffer(E)||_e.isTypedArray(E)?d&&typeof Blob=="function"?new Blob([E]):Buffer.from(E):E}function m(E,M,v){let _=E;if(E&&!v&&typeof E=="object"){if(_e.endsWith(M,"{}"))M=r?M:M.slice(0,-2),E=JSON.stringify(E);else if(_e.isArray(E)&&xb(E)||(_e.isFileList(E)||_e.endsWith(M,"[]"))&&(_=_e.toArray(E)))return M=T0(M),_.forEach(function(C,b){!(_e.isUndefined(C)||C===null)&&e.append(u===!0?Jv([M],b,l):u===null?M:M+"[]",h(C))}),!1}return wh(E)?!0:(e.append(Jv(v,M,l),h(E)),!1)}const g=[],y=Object.assign(Sb,{defaultVisitor:m,convertValue:h,isVisitable:wh});function x(E,M){if(!_e.isUndefined(E)){if(g.indexOf(E)!==-1)throw Error("Circular reference detected in "+M.join("."));g.push(E),_e.forEach(E,function(_,R){(!(_e.isUndefined(_)||_===null)&&o.call(e,_,_e.isString(R)?R.trim():R,M,y))===!0&&x(_,M?M.concat(R):[R])}),g.pop()}}if(!_e.isObject(i))throw new TypeError("data must be an object");return x(i),e}function e_(i){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(i).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Wh(i,e){this._pairs=[],i&&sc(i,this,e)}const A0=Wh.prototype;A0.append=function(e,t){this._pairs.push([e,t])};A0.toString=function(e){const t=e?function(r){return e.call(this,r,e_)}:e_;return this._pairs.map(function(o){return t(o[0])+"="+t(o[1])},"").join("&")};function Eb(i){return encodeURIComponent(i).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function b0(i,e,t){if(!e)return i;const r=t&&t.encode||Eb;_e.isFunction(t)&&(t={serialize:t});const o=t&&t.serialize;let l;if(o?l=o(e,t):l=_e.isURLSearchParams(e)?e.toString():new Wh(e,t).toString(r),l){const u=i.indexOf("#");u!==-1&&(i=i.slice(0,u)),i+=(i.indexOf("?")===-1?"?":"&")+l}return i}class t_{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){_e.forEach(this.handlers,function(r){r!==null&&e(r)})}}const R0={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Mb=typeof URLSearchParams<"u"?URLSearchParams:Wh,wb=typeof FormData<"u"?FormData:null,Tb=typeof Blob<"u"?Blob:null,Ab={isBrowser:!0,classes:{URLSearchParams:Mb,FormData:wb,Blob:Tb},protocols:["http","https","file","blob","url","data"]},jh=typeof window<"u"&&typeof document<"u",Th=typeof navigator=="object"&&navigator||void 0,bb=jh&&(!Th||["ReactNative","NativeScript","NS"].indexOf(Th.product)<0),Rb=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Cb=jh&&window.location.href||"http://localhost",Pb=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:jh,hasStandardBrowserEnv:bb,hasStandardBrowserWebWorkerEnv:Rb,navigator:Th,origin:Cb},Symbol.toStringTag,{value:"Module"})),Cn={...Pb,...Ab};function Lb(i,e){return sc(i,new Cn.classes.URLSearchParams,Object.assign({visitor:function(t,r,o,l){return Cn.isNode&&_e.isBuffer(t)?(this.append(r,t.toString("base64")),!1):l.defaultVisitor.apply(this,arguments)}},e))}function Db(i){return _e.matchAll(/\w+|\[(\w*)]/g,i).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Nb(i){const e={},t=Object.keys(i);let r;const o=t.length;let l;for(r=0;r<o;r++)l=t[r],e[l]=i[l];return e}function C0(i){function e(t,r,o,l){let u=t[l++];if(u==="__proto__")return!0;const f=Number.isFinite(+u),d=l>=t.length;return u=!u&&_e.isArray(o)?o.length:u,d?(_e.hasOwnProp(o,u)?o[u]=[o[u],r]:o[u]=r,!f):((!o[u]||!_e.isObject(o[u]))&&(o[u]=[]),e(t,r,o[u],l)&&_e.isArray(o[u])&&(o[u]=Nb(o[u])),!f)}if(_e.isFormData(i)&&_e.isFunction(i.entries)){const t={};return _e.forEachEntry(i,(r,o)=>{e(Db(r),o,t,0)}),t}return null}function Ub(i,e,t){if(_e.isString(i))try{return(e||JSON.parse)(i),_e.trim(i)}catch(r){if(r.name!=="SyntaxError")throw r}return(t||JSON.stringify)(i)}const Ca={transitional:R0,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const r=t.getContentType()||"",o=r.indexOf("application/json")>-1,l=_e.isObject(e);if(l&&_e.isHTMLForm(e)&&(e=new FormData(e)),_e.isFormData(e))return o?JSON.stringify(C0(e)):e;if(_e.isArrayBuffer(e)||_e.isBuffer(e)||_e.isStream(e)||_e.isFile(e)||_e.isBlob(e)||_e.isReadableStream(e))return e;if(_e.isArrayBufferView(e))return e.buffer;if(_e.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let f;if(l){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Lb(e,this.formSerializer).toString();if((f=_e.isFileList(e))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return sc(f?{"files[]":e}:e,d&&new d,this.formSerializer)}}return l||o?(t.setContentType("application/json",!1),Ub(e)):e}],transformResponse:[function(e){const t=this.transitional||Ca.transitional,r=t&&t.forcedJSONParsing,o=this.responseType==="json";if(_e.isResponse(e)||_e.isReadableStream(e))return e;if(e&&_e.isString(e)&&(r&&!this.responseType||o)){const u=!(t&&t.silentJSONParsing)&&o;try{return JSON.parse(e)}catch(f){if(u)throw f.name==="SyntaxError"?gt.from(f,gt.ERR_BAD_RESPONSE,this,null,this.response):f}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Cn.classes.FormData,Blob:Cn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};_e.forEach(["delete","get","head","post","put","patch"],i=>{Ca.headers[i]={}});const Ib=_e.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ob=i=>{const e={};let t,r,o;return i&&i.split(`
`).forEach(function(u){o=u.indexOf(":"),t=u.substring(0,o).trim().toLowerCase(),r=u.substring(o+1).trim(),!(!t||e[t]&&Ib[t])&&(t==="set-cookie"?e[t]?e[t].push(r):e[t]=[r]:e[t]=e[t]?e[t]+", "+r:r)}),e},n_=Symbol("internals");function ma(i){return i&&String(i).trim().toLowerCase()}function Pu(i){return i===!1||i==null?i:_e.isArray(i)?i.map(Pu):String(i)}function Fb(i){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=t.exec(i);)e[r[1]]=r[2];return e}const kb=i=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());function Rd(i,e,t,r,o){if(_e.isFunction(r))return r.call(this,e,t);if(o&&(e=t),!!_e.isString(e)){if(_e.isString(r))return e.indexOf(r)!==-1;if(_e.isRegExp(r))return r.test(e)}}function Bb(i){return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r)}function zb(i,e){const t=_e.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(i,r+t,{value:function(o,l,u){return this[r].call(this,e,o,l,u)},configurable:!0})})}let Yn=class{constructor(e){e&&this.set(e)}set(e,t,r){const o=this;function l(f,d,h){const m=ma(d);if(!m)throw new Error("header name must be a non-empty string");const g=_e.findKey(o,m);(!g||o[g]===void 0||h===!0||h===void 0&&o[g]!==!1)&&(o[g||d]=Pu(f))}const u=(f,d)=>_e.forEach(f,(h,m)=>l(h,m,d));if(_e.isPlainObject(e)||e instanceof this.constructor)u(e,t);else if(_e.isString(e)&&(e=e.trim())&&!kb(e))u(Ob(e),t);else if(_e.isHeaders(e))for(const[f,d]of e.entries())l(d,f,r);else e!=null&&l(t,e,r);return this}get(e,t){if(e=ma(e),e){const r=_e.findKey(this,e);if(r){const o=this[r];if(!t)return o;if(t===!0)return Fb(o);if(_e.isFunction(t))return t.call(this,o,r);if(_e.isRegExp(t))return t.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=ma(e),e){const r=_e.findKey(this,e);return!!(r&&this[r]!==void 0&&(!t||Rd(this,this[r],r,t)))}return!1}delete(e,t){const r=this;let o=!1;function l(u){if(u=ma(u),u){const f=_e.findKey(r,u);f&&(!t||Rd(r,r[f],f,t))&&(delete r[f],o=!0)}}return _e.isArray(e)?e.forEach(l):l(e),o}clear(e){const t=Object.keys(this);let r=t.length,o=!1;for(;r--;){const l=t[r];(!e||Rd(this,this[l],l,e,!0))&&(delete this[l],o=!0)}return o}normalize(e){const t=this,r={};return _e.forEach(this,(o,l)=>{const u=_e.findKey(r,l);if(u){t[u]=Pu(o),delete t[l];return}const f=e?Bb(l):String(l).trim();f!==l&&delete t[l],t[f]=Pu(o),r[f]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return _e.forEach(this,(r,o)=>{r!=null&&r!==!1&&(t[o]=e&&_e.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const r=new this(e);return t.forEach(o=>r.set(o)),r}static accessor(e){const r=(this[n_]=this[n_]={accessors:{}}).accessors,o=this.prototype;function l(u){const f=ma(u);r[f]||(zb(o,u),r[f]=!0)}return _e.isArray(e)?e.forEach(l):l(e),this}};Yn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);_e.reduceDescriptors(Yn.prototype,({value:i},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>i,set(r){this[t]=r}}});_e.freezeMethods(Yn);function Cd(i,e){const t=this||Ca,r=e||t,o=Yn.from(r.headers);let l=r.data;return _e.forEach(i,function(f){l=f.call(t,l,o.normalize(),e?e.status:void 0)}),o.normalize(),l}function P0(i){return!!(i&&i.__CANCEL__)}function Co(i,e,t){gt.call(this,i??"canceled",gt.ERR_CANCELED,e,t),this.name="CanceledError"}_e.inherits(Co,gt,{__CANCEL__:!0});function L0(i,e,t){const r=t.config.validateStatus;!t.status||!r||r(t.status)?i(t):e(new gt("Request failed with status code "+t.status,[gt.ERR_BAD_REQUEST,gt.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function Hb(i){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(i);return e&&e[1]||""}function Vb(i,e){i=i||10;const t=new Array(i),r=new Array(i);let o=0,l=0,u;return e=e!==void 0?e:1e3,function(d){const h=Date.now(),m=r[l];u||(u=h),t[o]=d,r[o]=h;let g=l,y=0;for(;g!==o;)y+=t[g++],g=g%i;if(o=(o+1)%i,o===l&&(l=(l+1)%i),h-u<e)return;const x=m&&h-m;return x?Math.round(y*1e3/x):void 0}}function Gb(i,e){let t=0,r=1e3/e,o,l;const u=(h,m=Date.now())=>{t=m,o=null,l&&(clearTimeout(l),l=null),i.apply(null,h)};return[(...h)=>{const m=Date.now(),g=m-t;g>=r?u(h,m):(o=h,l||(l=setTimeout(()=>{l=null,u(o)},r-g)))},()=>o&&u(o)]}const Hu=(i,e,t=3)=>{let r=0;const o=Vb(50,250);return Gb(l=>{const u=l.loaded,f=l.lengthComputable?l.total:void 0,d=u-r,h=o(d),m=u<=f;r=u;const g={loaded:u,total:f,progress:f?u/f:void 0,bytes:d,rate:h||void 0,estimated:h&&f&&m?(f-u)/h:void 0,event:l,lengthComputable:f!=null,[e?"download":"upload"]:!0};i(g)},t)},i_=(i,e)=>{const t=i!=null;return[r=>e[0]({lengthComputable:t,total:i,loaded:r}),e[1]]},r_=i=>(...e)=>_e.asap(()=>i(...e)),Wb=Cn.hasStandardBrowserEnv?((i,e)=>t=>(t=new URL(t,Cn.origin),i.protocol===t.protocol&&i.host===t.host&&(e||i.port===t.port)))(new URL(Cn.origin),Cn.navigator&&/(msie|trident)/i.test(Cn.navigator.userAgent)):()=>!0,jb=Cn.hasStandardBrowserEnv?{write(i,e,t,r,o,l){const u=[i+"="+encodeURIComponent(e)];_e.isNumber(t)&&u.push("expires="+new Date(t).toGMTString()),_e.isString(r)&&u.push("path="+r),_e.isString(o)&&u.push("domain="+o),l===!0&&u.push("secure"),document.cookie=u.join("; ")},read(i){const e=document.cookie.match(new RegExp("(^|;\\s*)("+i+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(i){this.write(i,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Xb(i){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(i)}function qb(i,e){return e?i.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):i}function D0(i,e,t){let r=!Xb(e);return i&&(r||t==!1)?qb(i,e):e}const s_=i=>i instanceof Yn?{...i}:i;function bs(i,e){e=e||{};const t={};function r(h,m,g,y){return _e.isPlainObject(h)&&_e.isPlainObject(m)?_e.merge.call({caseless:y},h,m):_e.isPlainObject(m)?_e.merge({},m):_e.isArray(m)?m.slice():m}function o(h,m,g,y){if(_e.isUndefined(m)){if(!_e.isUndefined(h))return r(void 0,h,g,y)}else return r(h,m,g,y)}function l(h,m){if(!_e.isUndefined(m))return r(void 0,m)}function u(h,m){if(_e.isUndefined(m)){if(!_e.isUndefined(h))return r(void 0,h)}else return r(void 0,m)}function f(h,m,g){if(g in e)return r(h,m);if(g in i)return r(void 0,h)}const d={url:l,method:l,data:l,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,withXSRFToken:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:f,headers:(h,m,g)=>o(s_(h),s_(m),g,!0)};return _e.forEach(Object.keys(Object.assign({},i,e)),function(m){const g=d[m]||o,y=g(i[m],e[m],m);_e.isUndefined(y)&&g!==f||(t[m]=y)}),t}const N0=i=>{const e=bs({},i);let{data:t,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:l,headers:u,auth:f}=e;e.headers=u=Yn.from(u),e.url=b0(D0(e.baseURL,e.url,e.allowAbsoluteUrls),i.params,i.paramsSerializer),f&&u.set("Authorization","Basic "+btoa((f.username||"")+":"+(f.password?unescape(encodeURIComponent(f.password)):"")));let d;if(_e.isFormData(t)){if(Cn.hasStandardBrowserEnv||Cn.hasStandardBrowserWebWorkerEnv)u.setContentType(void 0);else if((d=u.getContentType())!==!1){const[h,...m]=d?d.split(";").map(g=>g.trim()).filter(Boolean):[];u.setContentType([h||"multipart/form-data",...m].join("; "))}}if(Cn.hasStandardBrowserEnv&&(r&&_e.isFunction(r)&&(r=r(e)),r||r!==!1&&Wb(e.url))){const h=o&&l&&jb.read(l);h&&u.set(o,h)}return e},Yb=typeof XMLHttpRequest<"u",$b=Yb&&function(i){return new Promise(function(t,r){const o=N0(i);let l=o.data;const u=Yn.from(o.headers).normalize();let{responseType:f,onUploadProgress:d,onDownloadProgress:h}=o,m,g,y,x,E;function M(){x&&x(),E&&E(),o.cancelToken&&o.cancelToken.unsubscribe(m),o.signal&&o.signal.removeEventListener("abort",m)}let v=new XMLHttpRequest;v.open(o.method.toUpperCase(),o.url,!0),v.timeout=o.timeout;function _(){if(!v)return;const C=Yn.from("getAllResponseHeaders"in v&&v.getAllResponseHeaders()),F={data:!f||f==="text"||f==="json"?v.responseText:v.response,status:v.status,statusText:v.statusText,headers:C,config:i,request:v};L0(function(O){t(O),M()},function(O){r(O),M()},F),v=null}"onloadend"in v?v.onloadend=_:v.onreadystatechange=function(){!v||v.readyState!==4||v.status===0&&!(v.responseURL&&v.responseURL.indexOf("file:")===0)||setTimeout(_)},v.onabort=function(){v&&(r(new gt("Request aborted",gt.ECONNABORTED,i,v)),v=null)},v.onerror=function(){r(new gt("Network Error",gt.ERR_NETWORK,i,v)),v=null},v.ontimeout=function(){let b=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const F=o.transitional||R0;o.timeoutErrorMessage&&(b=o.timeoutErrorMessage),r(new gt(b,F.clarifyTimeoutError?gt.ETIMEDOUT:gt.ECONNABORTED,i,v)),v=null},l===void 0&&u.setContentType(null),"setRequestHeader"in v&&_e.forEach(u.toJSON(),function(b,F){v.setRequestHeader(F,b)}),_e.isUndefined(o.withCredentials)||(v.withCredentials=!!o.withCredentials),f&&f!=="json"&&(v.responseType=o.responseType),h&&([y,E]=Hu(h,!0),v.addEventListener("progress",y)),d&&v.upload&&([g,x]=Hu(d),v.upload.addEventListener("progress",g),v.upload.addEventListener("loadend",x)),(o.cancelToken||o.signal)&&(m=C=>{v&&(r(!C||C.type?new Co(null,i,v):C),v.abort(),v=null)},o.cancelToken&&o.cancelToken.subscribe(m),o.signal&&(o.signal.aborted?m():o.signal.addEventListener("abort",m)));const R=Hb(o.url);if(R&&Cn.protocols.indexOf(R)===-1){r(new gt("Unsupported protocol "+R+":",gt.ERR_BAD_REQUEST,i));return}v.send(l||null)})},Kb=(i,e)=>{const{length:t}=i=i?i.filter(Boolean):[];if(e||t){let r=new AbortController,o;const l=function(h){if(!o){o=!0,f();const m=h instanceof Error?h:this.reason;r.abort(m instanceof gt?m:new Co(m instanceof Error?m.message:m))}};let u=e&&setTimeout(()=>{u=null,l(new gt(`timeout ${e} of ms exceeded`,gt.ETIMEDOUT))},e);const f=()=>{i&&(u&&clearTimeout(u),u=null,i.forEach(h=>{h.unsubscribe?h.unsubscribe(l):h.removeEventListener("abort",l)}),i=null)};i.forEach(h=>h.addEventListener("abort",l));const{signal:d}=r;return d.unsubscribe=()=>_e.asap(f),d}},Zb=function*(i,e){let t=i.byteLength;if(t<e){yield i;return}let r=0,o;for(;r<t;)o=r+e,yield i.slice(r,o),r=o},Qb=async function*(i,e){for await(const t of Jb(i))yield*Zb(t,e)},Jb=async function*(i){if(i[Symbol.asyncIterator]){yield*i;return}const e=i.getReader();try{for(;;){const{done:t,value:r}=await e.read();if(t)break;yield r}}finally{await e.cancel()}},o_=(i,e,t,r)=>{const o=Qb(i,e);let l=0,u,f=d=>{u||(u=!0,r&&r(d))};return new ReadableStream({async pull(d){try{const{done:h,value:m}=await o.next();if(h){f(),d.close();return}let g=m.byteLength;if(t){let y=l+=g;t(y)}d.enqueue(new Uint8Array(m))}catch(h){throw f(h),h}},cancel(d){return f(d),o.return()}},{highWaterMark:2})},oc=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",U0=oc&&typeof ReadableStream=="function",eR=oc&&(typeof TextEncoder=="function"?(i=>e=>i.encode(e))(new TextEncoder):async i=>new Uint8Array(await new Response(i).arrayBuffer())),I0=(i,...e)=>{try{return!!i(...e)}catch{return!1}},tR=U0&&I0(()=>{let i=!1;const e=new Request(Cn.origin,{body:new ReadableStream,method:"POST",get duplex(){return i=!0,"half"}}).headers.has("Content-Type");return i&&!e}),a_=64*1024,Ah=U0&&I0(()=>_e.isReadableStream(new Response("").body)),Vu={stream:Ah&&(i=>i.body)};oc&&(i=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!Vu[e]&&(Vu[e]=_e.isFunction(i[e])?t=>t[e]():(t,r)=>{throw new gt(`Response type '${e}' is not supported`,gt.ERR_NOT_SUPPORT,r)})})})(new Response);const nR=async i=>{if(i==null)return 0;if(_e.isBlob(i))return i.size;if(_e.isSpecCompliantForm(i))return(await new Request(Cn.origin,{method:"POST",body:i}).arrayBuffer()).byteLength;if(_e.isArrayBufferView(i)||_e.isArrayBuffer(i))return i.byteLength;if(_e.isURLSearchParams(i)&&(i=i+""),_e.isString(i))return(await eR(i)).byteLength},iR=async(i,e)=>{const t=_e.toFiniteNumber(i.getContentLength());return t??nR(e)},rR=oc&&(async i=>{let{url:e,method:t,data:r,signal:o,cancelToken:l,timeout:u,onDownloadProgress:f,onUploadProgress:d,responseType:h,headers:m,withCredentials:g="same-origin",fetchOptions:y}=N0(i);h=h?(h+"").toLowerCase():"text";let x=Kb([o,l&&l.toAbortSignal()],u),E;const M=x&&x.unsubscribe&&(()=>{x.unsubscribe()});let v;try{if(d&&tR&&t!=="get"&&t!=="head"&&(v=await iR(m,r))!==0){let F=new Request(e,{method:"POST",body:r,duplex:"half"}),I;if(_e.isFormData(r)&&(I=F.headers.get("content-type"))&&m.setContentType(I),F.body){const[O,V]=i_(v,Hu(r_(d)));r=o_(F.body,a_,O,V)}}_e.isString(g)||(g=g?"include":"omit");const _="credentials"in Request.prototype;E=new Request(e,{...y,signal:x,method:t.toUpperCase(),headers:m.normalize().toJSON(),body:r,duplex:"half",credentials:_?g:void 0});let R=await fetch(E);const C=Ah&&(h==="stream"||h==="response");if(Ah&&(f||C&&M)){const F={};["status","statusText","headers"].forEach(L=>{F[L]=R[L]});const I=_e.toFiniteNumber(R.headers.get("content-length")),[O,V]=f&&i_(I,Hu(r_(f),!0))||[];R=new Response(o_(R.body,a_,O,()=>{V&&V(),M&&M()}),F)}h=h||"text";let b=await Vu[_e.findKey(Vu,h)||"text"](R,i);return!C&&M&&M(),await new Promise((F,I)=>{L0(F,I,{data:b,headers:Yn.from(R.headers),status:R.status,statusText:R.statusText,config:i,request:E})})}catch(_){throw M&&M(),_&&_.name==="TypeError"&&/fetch/i.test(_.message)?Object.assign(new gt("Network Error",gt.ERR_NETWORK,i,E),{cause:_.cause||_}):gt.from(_,_&&_.code,i,E)}}),bh={http:yb,xhr:$b,fetch:rR};_e.forEach(bh,(i,e)=>{if(i){try{Object.defineProperty(i,"name",{value:e})}catch{}Object.defineProperty(i,"adapterName",{value:e})}});const l_=i=>`- ${i}`,sR=i=>_e.isFunction(i)||i===null||i===!1,O0={getAdapter:i=>{i=_e.isArray(i)?i:[i];const{length:e}=i;let t,r;const o={};for(let l=0;l<e;l++){t=i[l];let u;if(r=t,!sR(t)&&(r=bh[(u=String(t)).toLowerCase()],r===void 0))throw new gt(`Unknown adapter '${u}'`);if(r)break;o[u||"#"+l]=r}if(!r){const l=Object.entries(o).map(([f,d])=>`adapter ${f} `+(d===!1?"is not supported by the environment":"is not available in the build"));let u=e?l.length>1?`since :
`+l.map(l_).join(`
`):" "+l_(l[0]):"as no adapter specified";throw new gt("There is no suitable adapter to dispatch the request "+u,"ERR_NOT_SUPPORT")}return r},adapters:bh};function Pd(i){if(i.cancelToken&&i.cancelToken.throwIfRequested(),i.signal&&i.signal.aborted)throw new Co(null,i)}function u_(i){return Pd(i),i.headers=Yn.from(i.headers),i.data=Cd.call(i,i.transformRequest),["post","put","patch"].indexOf(i.method)!==-1&&i.headers.setContentType("application/x-www-form-urlencoded",!1),O0.getAdapter(i.adapter||Ca.adapter)(i).then(function(r){return Pd(i),r.data=Cd.call(i,i.transformResponse,r),r.headers=Yn.from(r.headers),r},function(r){return P0(r)||(Pd(i),r&&r.response&&(r.response.data=Cd.call(i,i.transformResponse,r.response),r.response.headers=Yn.from(r.response.headers))),Promise.reject(r)})}const F0="1.8.4",ac={};["object","boolean","number","function","string","symbol"].forEach((i,e)=>{ac[i]=function(r){return typeof r===i||"a"+(e<1?"n ":" ")+i}});const c_={};ac.transitional=function(e,t,r){function o(l,u){return"[Axios v"+F0+"] Transitional option '"+l+"'"+u+(r?". "+r:"")}return(l,u,f)=>{if(e===!1)throw new gt(o(u," has been removed"+(t?" in "+t:"")),gt.ERR_DEPRECATED);return t&&!c_[u]&&(c_[u]=!0,console.warn(o(u," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(l,u,f):!0}};ac.spelling=function(e){return(t,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function oR(i,e,t){if(typeof i!="object")throw new gt("options must be an object",gt.ERR_BAD_OPTION_VALUE);const r=Object.keys(i);let o=r.length;for(;o-- >0;){const l=r[o],u=e[l];if(u){const f=i[l],d=f===void 0||u(f,l,i);if(d!==!0)throw new gt("option "+l+" must be "+d,gt.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new gt("Unknown option "+l,gt.ERR_BAD_OPTION)}}const Lu={assertOptions:oR,validators:ac},Di=Lu.validators;let ws=class{constructor(e){this.defaults=e,this.interceptors={request:new t_,response:new t_}}async request(e,t){try{return await this._request(e,t)}catch(r){if(r instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const l=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?l&&!String(r.stack).endsWith(l.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+l):r.stack=l}catch{}}throw r}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=bs(this.defaults,t);const{transitional:r,paramsSerializer:o,headers:l}=t;r!==void 0&&Lu.assertOptions(r,{silentJSONParsing:Di.transitional(Di.boolean),forcedJSONParsing:Di.transitional(Di.boolean),clarifyTimeoutError:Di.transitional(Di.boolean)},!1),o!=null&&(_e.isFunction(o)?t.paramsSerializer={serialize:o}:Lu.assertOptions(o,{encode:Di.function,serialize:Di.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),Lu.assertOptions(t,{baseUrl:Di.spelling("baseURL"),withXsrfToken:Di.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let u=l&&_e.merge(l.common,l[t.method]);l&&_e.forEach(["delete","get","head","post","put","patch","common"],E=>{delete l[E]}),t.headers=Yn.concat(u,l);const f=[];let d=!0;this.interceptors.request.forEach(function(M){typeof M.runWhen=="function"&&M.runWhen(t)===!1||(d=d&&M.synchronous,f.unshift(M.fulfilled,M.rejected))});const h=[];this.interceptors.response.forEach(function(M){h.push(M.fulfilled,M.rejected)});let m,g=0,y;if(!d){const E=[u_.bind(this),void 0];for(E.unshift.apply(E,f),E.push.apply(E,h),y=E.length,m=Promise.resolve(t);g<y;)m=m.then(E[g++],E[g++]);return m}y=f.length;let x=t;for(g=0;g<y;){const E=f[g++],M=f[g++];try{x=E(x)}catch(v){M.call(this,v);break}}try{m=u_.call(this,x)}catch(E){return Promise.reject(E)}for(g=0,y=h.length;g<y;)m=m.then(h[g++],h[g++]);return m}getUri(e){e=bs(this.defaults,e);const t=D0(e.baseURL,e.url,e.allowAbsoluteUrls);return b0(t,e.params,e.paramsSerializer)}};_e.forEach(["delete","get","head","options"],function(e){ws.prototype[e]=function(t,r){return this.request(bs(r||{},{method:e,url:t,data:(r||{}).data}))}});_e.forEach(["post","put","patch"],function(e){function t(r){return function(l,u,f){return this.request(bs(f||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:l,data:u}))}}ws.prototype[e]=t(),ws.prototype[e+"Form"]=t(!0)});let aR=class k0{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(l){t=l});const r=this;this.promise.then(o=>{if(!r._listeners)return;let l=r._listeners.length;for(;l-- >0;)r._listeners[l](o);r._listeners=null}),this.promise.then=o=>{let l;const u=new Promise(f=>{r.subscribe(f),l=f}).then(o);return u.cancel=function(){r.unsubscribe(l)},u},e(function(l,u,f){r.reason||(r.reason=new Co(l,u,f),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=r=>{e.abort(r)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new k0(function(o){e=o}),cancel:e}}};function lR(i){return function(t){return i.apply(null,t)}}function uR(i){return _e.isObject(i)&&i.isAxiosError===!0}const Rh={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Rh).forEach(([i,e])=>{Rh[e]=i});function B0(i){const e=new ws(i),t=g0(ws.prototype.request,e);return _e.extend(t,ws.prototype,e,{allOwnKeys:!0}),_e.extend(t,e,null,{allOwnKeys:!0}),t.create=function(o){return B0(bs(i,o))},t}const tn=B0(Ca);tn.Axios=ws;tn.CanceledError=Co;tn.CancelToken=aR;tn.isCancel=P0;tn.VERSION=F0;tn.toFormData=sc;tn.AxiosError=gt;tn.Cancel=tn.CanceledError;tn.all=function(e){return Promise.all(e)};tn.spread=lR;tn.isAxiosError=uR;tn.mergeConfig=bs;tn.AxiosHeaders=Yn;tn.formToJSON=i=>C0(_e.isHTMLForm(i)?new FormData(i):i);tn.getAdapter=O0.getAdapter;tn.HttpStatusCode=Rh;tn.default=tn;const{Axios:oC,AxiosError:aC,CanceledError:lC,isCancel:uC,CancelToken:cC,VERSION:fC,all:dC,Cancel:hC,isAxiosError:pC,spread:mC,toFormData:gC,AxiosHeaders:vC,HttpStatusCode:_C,formToJSON:yC,getAdapter:xC,mergeConfig:SC}=tn;var z0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},f_=Zt.createContext&&Zt.createContext(z0),cR=["attr","size","title"];function fR(i,e){if(i==null)return{};var t=dR(i,e),r,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(i);for(o=0;o<l.length;o++)r=l[o],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(i,r)&&(t[r]=i[r])}return t}function dR(i,e){if(i==null)return{};var t={};for(var r in i)if(Object.prototype.hasOwnProperty.call(i,r)){if(e.indexOf(r)>=0)continue;t[r]=i[r]}return t}function Gu(){return Gu=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},Gu.apply(this,arguments)}function d_(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(i,o).enumerable})),t.push.apply(t,r)}return t}function Wu(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?d_(Object(t),!0).forEach(function(r){hR(i,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):d_(Object(t)).forEach(function(r){Object.defineProperty(i,r,Object.getOwnPropertyDescriptor(t,r))})}return i}function hR(i,e,t){return e=pR(e),e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function pR(i){var e=mR(i,"string");return typeof e=="symbol"?e:e+""}function mR(i,e){if(typeof i!="object"||!i)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var r=t.call(i,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function H0(i){return i&&i.map((e,t)=>Zt.createElement(e.tag,Wu({key:t},e.attr),H0(e.child)))}function Xh(i){return e=>Zt.createElement(gR,Gu({attr:Wu({},i.attr)},e),H0(i.child))}function gR(i){var e=t=>{var{attr:r,size:o,title:l}=i,u=fR(i,cR),f=o||t.size||"1em",d;return t.className&&(d=t.className),i.className&&(d=(d?d+" ":"")+i.className),Zt.createElement("svg",Gu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,u,{className:d,style:Wu(Wu({color:i.color||t.color},t.style),i.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),l&&Zt.createElement("title",null,l),i.children)};return f_!==void 0?Zt.createElement(f_.Consumer,null,t=>e(t)):e(z0)}function vR(i){return Xh({attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z",fill:"currentColor"},child:[]}]})(i)}const _R=({videoSrc:i,Close:e,Key:t})=>{const r=nt.useRef(null),o=nt.useRef(null);return nt.useEffect(()=>{const l=r.current,u=o.current,f=()=>{if(l&&u){const d=l.currentTime/l.duration*100;u.value=d}};return l&&l.addEventListener("timeupdate",f),()=>{l&&l.removeEventListener("timeupdate",f)}},[]),Z.jsx("div",{className:"modal",children:Z.jsxs("div",{className:"modal__container",children:[Z.jsx("div",{className:"modal__container__video",children:Z.jsx("video",{ref:r,autoPlay:!0,src:i,onEnded:e})}),Z.jsxs("div",{className:"modal__container__controls",children:[Z.jsx("progress",{id:"progress",ref:o,max:"100",value:"0"}),Z.jsx("button",{className:"close-modal",children:Z.jsx(vR,{onClick:e})})]})]})})};var Du={exports:{}},yR=Du.exports,h_;function xR(){return h_||(h_=1,function(i,e){(function(t,r){i.exports=r()})(yR,function(){return function(t){function r(l){if(o[l])return o[l].exports;var u=o[l]={exports:{},id:l,loaded:!1};return t[l].call(u.exports,u,u.exports,r),u.loaded=!0,u.exports}var o={};return r.m=t,r.c=o,r.p="dist/",r(0)}([function(t,r,o){function l(z){return z&&z.__esModule?z:{default:z}}var u=Object.assign||function(z){for(var le=1;le<arguments.length;le++){var ne=arguments[le];for(var he in ne)Object.prototype.hasOwnProperty.call(ne,he)&&(z[he]=ne[he])}return z},f=o(1),d=(l(f),o(6)),h=l(d),m=o(7),g=l(m),y=o(8),x=l(y),E=o(9),M=l(E),v=o(10),_=l(v),R=o(11),C=l(R),b=o(14),F=l(b),I=[],O=!1,V={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},L=function(){var z=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(z&&(O=!0),O)return I=(0,C.default)(I,V),(0,_.default)(I,V.once),I},T=function(){I=(0,F.default)(),L()},U=function(){I.forEach(function(z,le){z.node.removeAttribute("data-aos"),z.node.removeAttribute("data-aos-easing"),z.node.removeAttribute("data-aos-duration"),z.node.removeAttribute("data-aos-delay")})},D=function(z){return z===!0||z==="mobile"&&M.default.mobile()||z==="phone"&&M.default.phone()||z==="tablet"&&M.default.tablet()||typeof z=="function"&&z()===!0},B=function(z){V=u(V,z),I=(0,F.default)();var le=document.all&&!window.atob;return D(V.disable)||le?U():(V.disableMutationObserver||x.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),V.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",V.easing),document.querySelector("body").setAttribute("data-aos-duration",V.duration),document.querySelector("body").setAttribute("data-aos-delay",V.delay),V.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?L(!0):V.startEvent==="load"?window.addEventListener(V.startEvent,function(){L(!0)}):document.addEventListener(V.startEvent,function(){L(!0)}),window.addEventListener("resize",(0,g.default)(L,V.debounceDelay,!0)),window.addEventListener("orientationchange",(0,g.default)(L,V.debounceDelay,!0)),window.addEventListener("scroll",(0,h.default)(function(){(0,_.default)(I,V.once)},V.throttleDelay)),V.disableMutationObserver||x.default.ready("[data-aos]",T),I)};t.exports={init:B,refresh:L,refreshHard:T}},function(t,r){},,,,,function(t,r){(function(o){function l(D,B,z){function le(G){var Lt=te,lt=ye;return te=ye=void 0,Ne=G,xe=D.apply(lt,Lt)}function ne(G){return Ne=G,Se=setTimeout(pe,B),ct?le(G):xe}function he(G){var Lt=G-Le,lt=G-Ne,pt=B-Lt;return _t?T(pt,Me-lt):pt}function X(G){var Lt=G-Le,lt=G-Ne;return Le===void 0||Lt>=B||Lt<0||_t&&lt>=Me}function pe(){var G=U();return X(G)?ce(G):void(Se=setTimeout(pe,he(G)))}function ce(G){return Se=void 0,je&&te?le(G):(te=ye=void 0,xe)}function W(){Se!==void 0&&clearTimeout(Se),Ne=0,te=Le=ye=Se=void 0}function oe(){return Se===void 0?xe:ce(U())}function Ce(){var G=U(),Lt=X(G);if(te=arguments,ye=this,Le=G,Lt){if(Se===void 0)return ne(Le);if(_t)return Se=setTimeout(pe,B),le(Le)}return Se===void 0&&(Se=setTimeout(pe,B)),xe}var te,ye,Me,xe,Se,Le,Ne=0,ct=!1,_t=!1,je=!0;if(typeof D!="function")throw new TypeError(y);return B=m(B)||0,f(z)&&(ct=!!z.leading,_t="maxWait"in z,Me=_t?L(m(z.maxWait)||0,B):Me,je="trailing"in z?!!z.trailing:je),Ce.cancel=W,Ce.flush=oe,Ce}function u(D,B,z){var le=!0,ne=!0;if(typeof D!="function")throw new TypeError(y);return f(z)&&(le="leading"in z?!!z.leading:le,ne="trailing"in z?!!z.trailing:ne),l(D,B,{leading:le,maxWait:B,trailing:ne})}function f(D){var B=typeof D>"u"?"undefined":g(D);return!!D&&(B=="object"||B=="function")}function d(D){return!!D&&(typeof D>"u"?"undefined":g(D))=="object"}function h(D){return(typeof D>"u"?"undefined":g(D))=="symbol"||d(D)&&V.call(D)==E}function m(D){if(typeof D=="number")return D;if(h(D))return x;if(f(D)){var B=typeof D.valueOf=="function"?D.valueOf():D;D=f(B)?B+"":B}if(typeof D!="string")return D===0?D:+D;D=D.replace(M,"");var z=_.test(D);return z||R.test(D)?C(D.slice(2),z?2:8):v.test(D)?x:+D}var g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(D){return typeof D}:function(D){return D&&typeof Symbol=="function"&&D.constructor===Symbol&&D!==Symbol.prototype?"symbol":typeof D},y="Expected a function",x=NaN,E="[object Symbol]",M=/^\s+|\s+$/g,v=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,R=/^0o[0-7]+$/i,C=parseInt,b=(typeof o>"u"?"undefined":g(o))=="object"&&o&&o.Object===Object&&o,F=(typeof self>"u"?"undefined":g(self))=="object"&&self&&self.Object===Object&&self,I=b||F||Function("return this")(),O=Object.prototype,V=O.toString,L=Math.max,T=Math.min,U=function(){return I.Date.now()};t.exports=u}).call(r,function(){return this}())},function(t,r){(function(o){function l(U,D,B){function z(je){var G=Ce,Lt=te;return Ce=te=void 0,Le=je,Me=U.apply(Lt,G)}function le(je){return Le=je,xe=setTimeout(X,D),Ne?z(je):Me}function ne(je){var G=je-Se,Lt=je-Le,lt=D-G;return ct?L(lt,ye-Lt):lt}function he(je){var G=je-Se,Lt=je-Le;return Se===void 0||G>=D||G<0||ct&&Lt>=ye}function X(){var je=T();return he(je)?pe(je):void(xe=setTimeout(X,ne(je)))}function pe(je){return xe=void 0,_t&&Ce?z(je):(Ce=te=void 0,Me)}function ce(){xe!==void 0&&clearTimeout(xe),Le=0,Ce=Se=te=xe=void 0}function W(){return xe===void 0?Me:pe(T())}function oe(){var je=T(),G=he(je);if(Ce=arguments,te=this,Se=je,G){if(xe===void 0)return le(Se);if(ct)return xe=setTimeout(X,D),z(Se)}return xe===void 0&&(xe=setTimeout(X,D)),Me}var Ce,te,ye,Me,xe,Se,Le=0,Ne=!1,ct=!1,_t=!0;if(typeof U!="function")throw new TypeError(g);return D=h(D)||0,u(B)&&(Ne=!!B.leading,ct="maxWait"in B,ye=ct?V(h(B.maxWait)||0,D):ye,_t="trailing"in B?!!B.trailing:_t),oe.cancel=ce,oe.flush=W,oe}function u(U){var D=typeof U>"u"?"undefined":m(U);return!!U&&(D=="object"||D=="function")}function f(U){return!!U&&(typeof U>"u"?"undefined":m(U))=="object"}function d(U){return(typeof U>"u"?"undefined":m(U))=="symbol"||f(U)&&O.call(U)==x}function h(U){if(typeof U=="number")return U;if(d(U))return y;if(u(U)){var D=typeof U.valueOf=="function"?U.valueOf():U;U=u(D)?D+"":D}if(typeof U!="string")return U===0?U:+U;U=U.replace(E,"");var B=v.test(U);return B||_.test(U)?R(U.slice(2),B?2:8):M.test(U)?y:+U}var m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(U){return typeof U}:function(U){return U&&typeof Symbol=="function"&&U.constructor===Symbol&&U!==Symbol.prototype?"symbol":typeof U},g="Expected a function",y=NaN,x="[object Symbol]",E=/^\s+|\s+$/g,M=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,_=/^0o[0-7]+$/i,R=parseInt,C=(typeof o>"u"?"undefined":m(o))=="object"&&o&&o.Object===Object&&o,b=(typeof self>"u"?"undefined":m(self))=="object"&&self&&self.Object===Object&&self,F=C||b||Function("return this")(),I=Object.prototype,O=I.toString,V=Math.max,L=Math.min,T=function(){return F.Date.now()};t.exports=l}).call(r,function(){return this}())},function(t,r){function o(m){var g=void 0,y=void 0;for(g=0;g<m.length;g+=1)if(y=m[g],y.dataset&&y.dataset.aos||y.children&&o(y.children))return!0;return!1}function l(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function u(){return!!l()}function f(m,g){var y=window.document,x=l(),E=new x(d);h=g,E.observe(y.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function d(m){m&&m.forEach(function(g){var y=Array.prototype.slice.call(g.addedNodes),x=Array.prototype.slice.call(g.removedNodes),E=y.concat(x);if(o(E))return h()})}Object.defineProperty(r,"__esModule",{value:!0});var h=function(){};r.default={isSupported:u,ready:f}},function(t,r){function o(y,x){if(!(y instanceof x))throw new TypeError("Cannot call a class as a function")}function l(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(r,"__esModule",{value:!0});var u=function(){function y(x,E){for(var M=0;M<E.length;M++){var v=E[M];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(x,v.key,v)}}return function(x,E,M){return E&&y(x.prototype,E),M&&y(x,M),x}}(),f=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,d=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,h=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,m=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,g=function(){function y(){o(this,y)}return u(y,[{key:"phone",value:function(){var x=l();return!(!f.test(x)&&!d.test(x.substr(0,4)))}},{key:"mobile",value:function(){var x=l();return!(!h.test(x)&&!m.test(x.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),y}();r.default=new g},function(t,r){Object.defineProperty(r,"__esModule",{value:!0});var o=function(u,f,d){var h=u.node.getAttribute("data-aos-once");f>u.position?u.node.classList.add("aos-animate"):typeof h<"u"&&(h==="false"||!d&&h!=="true")&&u.node.classList.remove("aos-animate")},l=function(u,f){var d=window.pageYOffset,h=window.innerHeight;u.forEach(function(m,g){o(m,h+d,f)})};r.default=l},function(t,r,o){function l(h){return h&&h.__esModule?h:{default:h}}Object.defineProperty(r,"__esModule",{value:!0});var u=o(12),f=l(u),d=function(h,m){return h.forEach(function(g,y){g.node.classList.add("aos-init"),g.position=(0,f.default)(g.node,m.offset)}),h};r.default=d},function(t,r,o){function l(h){return h&&h.__esModule?h:{default:h}}Object.defineProperty(r,"__esModule",{value:!0});var u=o(13),f=l(u),d=function(h,m){var g=0,y=0,x=window.innerHeight,E={offset:h.getAttribute("data-aos-offset"),anchor:h.getAttribute("data-aos-anchor"),anchorPlacement:h.getAttribute("data-aos-anchor-placement")};switch(E.offset&&!isNaN(E.offset)&&(y=parseInt(E.offset)),E.anchor&&document.querySelectorAll(E.anchor)&&(h=document.querySelectorAll(E.anchor)[0]),g=(0,f.default)(h).top,E.anchorPlacement){case"top-bottom":break;case"center-bottom":g+=h.offsetHeight/2;break;case"bottom-bottom":g+=h.offsetHeight;break;case"top-center":g+=x/2;break;case"bottom-center":g+=x/2+h.offsetHeight;break;case"center-center":g+=x/2+h.offsetHeight/2;break;case"top-top":g+=x;break;case"bottom-top":g+=h.offsetHeight+x;break;case"center-top":g+=h.offsetHeight/2+x}return E.anchorPlacement||E.offset||isNaN(m)||(y=m),g+y};r.default=d},function(t,r){Object.defineProperty(r,"__esModule",{value:!0});var o=function(l){for(var u=0,f=0;l&&!isNaN(l.offsetLeft)&&!isNaN(l.offsetTop);)u+=l.offsetLeft-(l.tagName!="BODY"?l.scrollLeft:0),f+=l.offsetTop-(l.tagName!="BODY"?l.scrollTop:0),l=l.offsetParent;return{top:f,left:u}};r.default=o},function(t,r){Object.defineProperty(r,"__esModule",{value:!0});var o=function(l){return l=l||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(l,function(u){return{node:u}})};r.default=o}])})}(Du)),Du.exports}var SR=xR();const V0=Ph(SR),p_="AIzaSyBLYGua_ClWmj8Bxixj4jyCP7C5wW6NHYU",ER="1u5nNK40JDCXZmUb7Xj5GIFVCHDj7j1Kx",MR="1FtZNH5NCOUcUaN8BsgsFuEcDg-RY4hzd",wR=()=>{const[i,e]=nt.useState([]),[t,r]=nt.useState([]),[o,l]=nt.useState(!1),[u,f]=nt.useState(null);nt.useEffect(()=>{V0.init(),d()},[]);const d=async()=>{try{const[E,M]=await Promise.all([h(ER),h(MR)]),v=m(E,"Video_"),_=m(M,"Thumbnail_");e(v),r(_)}catch(E){console.error("Erro ao buscar arquivos do Google Drive:",E)}},h=async E=>(await tn.get("https://www.googleapis.com/drive/v3/files",{params:{key:p_,q:`'${E}' in parents and trashed = false`,fields:"files(id, name, mimeType, description)"}})).data.files,m=(E,M)=>E.filter(v=>v.name.toLowerCase().startsWith(M.toLowerCase())).sort((v,_)=>{var b,F;const R=parseInt((b=v.name.match(/\d+/))==null?void 0:b[0],10),C=parseInt((F=_.name.match(/\d+/))==null?void 0:F[0],10);return R-C}),g=E=>`https://www.googleapis.com/drive/v3/files/${E}?alt=media&key=${p_}`,y=E=>{f(g(E)),l(!0)},x=()=>{l(!1),f(null)};return nt.useEffect(()=>{console.log("Video count:",i.length),console.log("Thumbnail count:",t.length)},[i,t]),Z.jsxs("div",{className:"gallery__container",children:[Z.jsx("div",{className:"gallery__container__header",children:Z.jsxs("h2",{className:"gallery__container__header__h2",children:["Each project merges technology and creativity, transforming concepts into fluid, dynamic visuals. ",Z.jsx("br",{}),Z.jsx("br",{}),"From experimental video compositions to immersive animations, I focus on precision in storytelling. ",Z.jsx("br",{}),Z.jsx("br",{}),"Here are some examples of what I can do:"]})}),Z.jsx("div",{className:"gallery__container__grid",children:i.map((E,M)=>Z.jsxs("div",{"data-aos":"fade-up","data-aos-delay":"530",className:"gallery__container__grid__item",onClick:()=>y(E.id),children:[Z.jsx("img",{src:t[M]?g(t[M].id):"",alt:`Thumbnail ${M+1}`,className:"gallery__container__grid__item__thumbnail"}),Z.jsx("div",{className:"gallery__container__grid__item__description",children:Z.jsx("p",{className:"gallery__container__grid__item__description__p",children:E.description||"No description"})})]},E.id))}),o&&Z.jsx(_R,{videoSrc:u,Close:x})]})},m_=[{index:1,text:"As a visual artist, my work revolves around the intersection of digital imagery and motion, exploring the possibilities of video and animation. Using software as my canvas, I craft experiences that tell stories through movement, color, and texture."},{index:2,text:"With a passion for art and technology, I enjoy working across digital platforms, experimenting with tools, and seeking ways to translate ideas into visual narratives. My goal is to inspire, provoke thought, and offer viewers a unique perspective through the lens of motion and design."}],TR=""+new URL("aboutPic-Dh9f-r07.png",import.meta.url).href,AR=()=>(nt.useEffect(()=>{V0.init({duration:1200,easing:"ease-in-out",once:!1})},[]),Z.jsxs("div",{className:"about-container",children:[Z.jsx("div",{className:"about-container__img-container","data-aos":"zoom-in",children:Z.jsx("img",{src:TR,alt:"Styled picture of the author Manuel",className:"about-container__img-container__img"})}),Z.jsxs("div",{className:"about-container__text-container","data-aos":"fade-up",children:[Z.jsx("div",{className:"about-container__text-container__h2-container","data-aos":"fade-in",children:Z.jsx("h2",{className:"about-container__text-container__h2-container__h2",children:"About me"})}),Z.jsxs("div",{className:"about-container__p-container",children:[Z.jsx("br",{}),Z.jsx("p",{className:"about-container__p-container__p",children:m_[0].text}),Z.jsx("br",{}),Z.jsx("p",{className:"about-container__p-container__p",children:m_[1].text})]})]})]})),bR=()=>Z.jsx("div",{children:Z.jsxs("p",{style:{fontSize:"clamp(1.2rem, 1vw, 1.3rem)"},children:["© 2025"," ",Z.jsx("a",{href:"https://www.flowledge.dev",target:"_blank",children:Z.jsx("strong",{children:"Flowledge"})}),". All rights reserved."]})});var Pa=i=>i.type==="checkbox",Ms=i=>i instanceof Date,In=i=>i==null;const G0=i=>typeof i=="object";var en=i=>!In(i)&&!Array.isArray(i)&&G0(i)&&!Ms(i),RR=i=>en(i)&&i.target?Pa(i.target)?i.target.checked:i.target.value:i,CR=i=>i.substring(0,i.search(/\.\d+(\.|$)/))||i,PR=(i,e)=>i.has(CR(e)),LR=i=>{const e=i.constructor&&i.constructor.prototype;return en(e)&&e.hasOwnProperty("isPrototypeOf")},qh=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function ui(i){let e;const t=Array.isArray(i),r=typeof FileList<"u"?i instanceof FileList:!1;if(i instanceof Date)e=new Date(i);else if(i instanceof Set)e=new Set(i);else if(!(qh&&(i instanceof Blob||r))&&(t||en(i)))if(e=t?[]:{},!t&&!LR(i))e=i;else for(const o in i)i.hasOwnProperty(o)&&(e[o]=ui(i[o]));else return i;return e}var lc=i=>Array.isArray(i)?i.filter(Boolean):[],sn=i=>i===void 0,$e=(i,e,t)=>{if(!e||!en(i))return t;const r=lc(e.split(/[,[\].]+?/)).reduce((o,l)=>In(o)?o:o[l],i);return sn(r)||r===i?sn(i[e])?t:i[e]:r},Ni=i=>typeof i=="boolean",Yh=i=>/^\w*$/.test(i),W0=i=>lc(i.replace(/["|']|\]/g,"").split(/\.|\[/)),Ht=(i,e,t)=>{let r=-1;const o=Yh(e)?[e]:W0(e),l=o.length,u=l-1;for(;++r<l;){const f=o[r];let d=t;if(r!==u){const h=i[f];d=en(h)||Array.isArray(h)?h:isNaN(+o[r+1])?{}:[]}if(f==="__proto__"||f==="constructor"||f==="prototype")return;i[f]=d,i=i[f]}return i};const g_={BLUR:"blur",FOCUS_OUT:"focusout"},Ei={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},tr={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};Zt.createContext(null);var DR=(i,e,t,r=!0)=>{const o={defaultValues:e._defaultValues};for(const l in i)Object.defineProperty(o,l,{get:()=>{const u=l;return e._proxyFormState[u]!==Ei.all&&(e._proxyFormState[u]=!r||Ei.all),i[u]}});return o},Wn=i=>en(i)&&!Object.keys(i).length,NR=(i,e,t,r)=>{t(i);const{name:o,...l}=i;return Wn(l)||Object.keys(l).length>=Object.keys(e).length||Object.keys(l).find(u=>e[u]===Ei.all)},Nu=i=>Array.isArray(i)?i:[i];function UR(i){const e=Zt.useRef(i);e.current=i,Zt.useEffect(()=>{const t=!i.disabled&&e.current.subject&&e.current.subject.subscribe({next:e.current.next});return()=>{t&&t.unsubscribe()}},[i.disabled])}var Fi=i=>typeof i=="string",IR=(i,e,t,r,o)=>Fi(i)?(r&&e.watch.add(i),$e(t,i,o)):Array.isArray(i)?i.map(l=>(r&&e.watch.add(l),$e(t,l))):(r&&(e.watchAll=!0),t),OR=(i,e,t,r,o)=>e?{...t[i],types:{...t[i]&&t[i].types?t[i].types:{},[r]:o||!0}}:{},v_=i=>({isOnSubmit:!i||i===Ei.onSubmit,isOnBlur:i===Ei.onBlur,isOnChange:i===Ei.onChange,isOnAll:i===Ei.all,isOnTouch:i===Ei.onTouched}),__=(i,e,t)=>!t&&(e.watchAll||e.watch.has(i)||[...e.watch].some(r=>i.startsWith(r)&&/^\.\w+/.test(i.slice(r.length))));const ya=(i,e,t,r)=>{for(const o of t||Object.keys(i)){const l=$e(i,o);if(l){const{_f:u,...f}=l;if(u){if(u.refs&&u.refs[0]&&e(u.refs[0],o)&&!r)return!0;if(u.ref&&e(u.ref,u.name)&&!r)return!0;if(ya(f,e))break}else if(en(f)&&ya(f,e))break}}};var FR=(i,e,t)=>{const r=Nu($e(i,t));return Ht(r,"root",e[t]),Ht(i,t,r),i},$h=i=>i.type==="file",Ii=i=>typeof i=="function",ju=i=>{if(!qh)return!1;const e=i?i.ownerDocument:0;return i instanceof(e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement)},Uu=i=>Fi(i),Kh=i=>i.type==="radio",Xu=i=>i instanceof RegExp;const y_={value:!1,isValid:!1},x_={value:!0,isValid:!0};var j0=i=>{if(Array.isArray(i)){if(i.length>1){const e=i.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:e,isValid:!!e.length}}return i[0].checked&&!i[0].disabled?i[0].attributes&&!sn(i[0].attributes.value)?sn(i[0].value)||i[0].value===""?x_:{value:i[0].value,isValid:!0}:x_:y_}return y_};const S_={isValid:!1,value:null};var X0=i=>Array.isArray(i)?i.reduce((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e,S_):S_;function E_(i,e,t="validate"){if(Uu(i)||Array.isArray(i)&&i.every(Uu)||Ni(i)&&!i)return{type:t,message:Uu(i)?i:"",ref:e}}var ho=i=>en(i)&&!Xu(i)?i:{value:i,message:""},M_=async(i,e,t,r,o,l)=>{const{ref:u,refs:f,required:d,maxLength:h,minLength:m,min:g,max:y,pattern:x,validate:E,name:M,valueAsNumber:v,mount:_}=i._f,R=$e(t,M);if(!_||e.has(M))return{};const C=f?f[0]:u,b=D=>{o&&C.reportValidity&&(C.setCustomValidity(Ni(D)?"":D||""),C.reportValidity())},F={},I=Kh(u),O=Pa(u),V=I||O,L=(v||$h(u))&&sn(u.value)&&sn(R)||ju(u)&&u.value===""||R===""||Array.isArray(R)&&!R.length,T=OR.bind(null,M,r,F),U=(D,B,z,le=tr.maxLength,ne=tr.minLength)=>{const he=D?B:z;F[M]={type:D?le:ne,message:he,ref:u,...T(D?le:ne,he)}};if(l?!Array.isArray(R)||!R.length:d&&(!V&&(L||In(R))||Ni(R)&&!R||O&&!j0(f).isValid||I&&!X0(f).isValid)){const{value:D,message:B}=Uu(d)?{value:!!d,message:d}:ho(d);if(D&&(F[M]={type:tr.required,message:B,ref:C,...T(tr.required,B)},!r))return b(B),F}if(!L&&(!In(g)||!In(y))){let D,B;const z=ho(y),le=ho(g);if(!In(R)&&!isNaN(R)){const ne=u.valueAsNumber||R&&+R;In(z.value)||(D=ne>z.value),In(le.value)||(B=ne<le.value)}else{const ne=u.valueAsDate||new Date(R),he=ce=>new Date(new Date().toDateString()+" "+ce),X=u.type=="time",pe=u.type=="week";Fi(z.value)&&R&&(D=X?he(R)>he(z.value):pe?R>z.value:ne>new Date(z.value)),Fi(le.value)&&R&&(B=X?he(R)<he(le.value):pe?R<le.value:ne<new Date(le.value))}if((D||B)&&(U(!!D,z.message,le.message,tr.max,tr.min),!r))return b(F[M].message),F}if((h||m)&&!L&&(Fi(R)||l&&Array.isArray(R))){const D=ho(h),B=ho(m),z=!In(D.value)&&R.length>+D.value,le=!In(B.value)&&R.length<+B.value;if((z||le)&&(U(z,D.message,B.message),!r))return b(F[M].message),F}if(x&&!L&&Fi(R)){const{value:D,message:B}=ho(x);if(Xu(D)&&!R.match(D)&&(F[M]={type:tr.pattern,message:B,ref:u,...T(tr.pattern,B)},!r))return b(B),F}if(E){if(Ii(E)){const D=await E(R,t),B=E_(D,C);if(B&&(F[M]={...B,...T(tr.validate,B.message)},!r))return b(B.message),F}else if(en(E)){let D={};for(const B in E){if(!Wn(D)&&!r)break;const z=E_(await E[B](R,t),C,B);z&&(D={...z,...T(B,z.message)},b(z.message),r&&(F[M]=D))}if(!Wn(D)&&(F[M]={ref:C,...D},!r))return F}}return b(!0),F};function kR(i,e){const t=e.slice(0,-1).length;let r=0;for(;r<t;)i=sn(i)?r++:i[e[r++]];return i}function BR(i){for(const e in i)if(i.hasOwnProperty(e)&&!sn(i[e]))return!1;return!0}function un(i,e){const t=Array.isArray(e)?e:Yh(e)?[e]:W0(e),r=t.length===1?i:kR(i,t),o=t.length-1,l=t[o];return r&&delete r[l],o!==0&&(en(r)&&Wn(r)||Array.isArray(r)&&BR(r))&&un(i,t.slice(0,-1)),i}var Ld=()=>{let i=[];return{get observers(){return i},next:o=>{for(const l of i)l.next&&l.next(o)},subscribe:o=>(i.push(o),{unsubscribe:()=>{i=i.filter(l=>l!==o)}}),unsubscribe:()=>{i=[]}}},Ch=i=>In(i)||!G0(i);function Vr(i,e){if(Ch(i)||Ch(e))return i===e;if(Ms(i)&&Ms(e))return i.getTime()===e.getTime();const t=Object.keys(i),r=Object.keys(e);if(t.length!==r.length)return!1;for(const o of t){const l=i[o];if(!r.includes(o))return!1;if(o!=="ref"){const u=e[o];if(Ms(l)&&Ms(u)||en(l)&&en(u)||Array.isArray(l)&&Array.isArray(u)?!Vr(l,u):l!==u)return!1}}return!0}var q0=i=>i.type==="select-multiple",zR=i=>Kh(i)||Pa(i),Dd=i=>ju(i)&&i.isConnected,Y0=i=>{for(const e in i)if(Ii(i[e]))return!0;return!1};function qu(i,e={}){const t=Array.isArray(i);if(en(i)||t)for(const r in i)Array.isArray(i[r])||en(i[r])&&!Y0(i[r])?(e[r]=Array.isArray(i[r])?[]:{},qu(i[r],e[r])):In(i[r])||(e[r]=!0);return e}function $0(i,e,t){const r=Array.isArray(i);if(en(i)||r)for(const o in i)Array.isArray(i[o])||en(i[o])&&!Y0(i[o])?sn(e)||Ch(t[o])?t[o]=Array.isArray(i[o])?qu(i[o],[]):{...qu(i[o])}:$0(i[o],In(e)?{}:e[o],t[o]):t[o]=!Vr(i[o],e[o]);return t}var ga=(i,e)=>$0(i,e,qu(e)),K0=(i,{valueAsNumber:e,valueAsDate:t,setValueAs:r})=>sn(i)?i:e?i===""?NaN:i&&+i:t&&Fi(i)?new Date(i):r?r(i):i;function Nd(i){const e=i.ref;return $h(e)?e.files:Kh(e)?X0(i.refs).value:q0(e)?[...e.selectedOptions].map(({value:t})=>t):Pa(e)?j0(i.refs).value:K0(sn(e.value)?i.ref.value:e.value,i)}var HR=(i,e,t,r)=>{const o={};for(const l of i){const u=$e(e,l);u&&Ht(o,l,u._f)}return{criteriaMode:t,names:[...i],fields:o,shouldUseNativeValidation:r}},va=i=>sn(i)?i:Xu(i)?i.source:en(i)?Xu(i.value)?i.value.source:i.value:i;const w_="AsyncFunction";var VR=i=>!!i&&!!i.validate&&!!(Ii(i.validate)&&i.validate.constructor.name===w_||en(i.validate)&&Object.values(i.validate).find(e=>e.constructor.name===w_)),GR=i=>i.mount&&(i.required||i.min||i.max||i.maxLength||i.minLength||i.pattern||i.validate);function T_(i,e,t){const r=$e(i,t);if(r||Yh(t))return{error:r,name:t};const o=t.split(".");for(;o.length;){const l=o.join("."),u=$e(e,l),f=$e(i,l);if(u&&!Array.isArray(u)&&t!==l)return{name:t};if(f&&f.type)return{name:l,error:f};o.pop()}return{name:t}}var WR=(i,e,t,r,o)=>o.isOnAll?!1:!t&&o.isOnTouch?!(e||i):(t?r.isOnBlur:o.isOnBlur)?!i:(t?r.isOnChange:o.isOnChange)?i:!0,jR=(i,e)=>!lc($e(i,e)).length&&un(i,e);const XR={mode:Ei.onSubmit,reValidateMode:Ei.onChange,shouldFocusError:!0};function qR(i={}){let e={...XR,...i},t={submitCount:0,isDirty:!1,isLoading:Ii(e.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1},r={},o=en(e.defaultValues)||en(e.values)?ui(e.defaultValues||e.values)||{}:{},l=e.shouldUnregister?{}:ui(o),u={action:!1,mount:!1,watch:!1},f={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},d,h=0;const m={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},g={values:Ld(),array:Ld(),state:Ld()},y=v_(e.mode),x=v_(e.reValidateMode),E=e.criteriaMode===Ei.all,M=k=>J=>{clearTimeout(h),h=setTimeout(k,J)},v=async k=>{if(!e.disabled&&(m.isValid||k)){const J=e.resolver?Wn((await V()).errors):await T(r,!0);J!==t.isValid&&g.state.next({isValid:J})}},_=(k,J)=>{!e.disabled&&(m.isValidating||m.validatingFields)&&((k||Array.from(f.mount)).forEach(K=>{K&&(J?Ht(t.validatingFields,K,J):un(t.validatingFields,K))}),g.state.next({validatingFields:t.validatingFields,isValidating:!Wn(t.validatingFields)}))},R=(k,J=[],K,P,w=!0,j=!0)=>{if(P&&K&&!e.disabled){if(u.action=!0,j&&Array.isArray($e(r,k))){const se=K($e(r,k),P.argA,P.argB);w&&Ht(r,k,se)}if(j&&Array.isArray($e(t.errors,k))){const se=K($e(t.errors,k),P.argA,P.argB);w&&Ht(t.errors,k,se),jR(t.errors,k)}if(m.touchedFields&&j&&Array.isArray($e(t.touchedFields,k))){const se=K($e(t.touchedFields,k),P.argA,P.argB);w&&Ht(t.touchedFields,k,se)}m.dirtyFields&&(t.dirtyFields=ga(o,l)),g.state.next({name:k,isDirty:D(k,J),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else Ht(l,k,J)},C=(k,J)=>{Ht(t.errors,k,J),g.state.next({errors:t.errors})},b=k=>{t.errors=k,g.state.next({errors:t.errors,isValid:!1})},F=(k,J,K,P)=>{const w=$e(r,k);if(w){const j=$e(l,k,sn(K)?$e(o,k):K);sn(j)||P&&P.defaultChecked||J?Ht(l,k,J?j:Nd(w._f)):le(k,j),u.mount&&v()}},I=(k,J,K,P,w)=>{let j=!1,se=!1;const me={name:k};if(!e.disabled){const ge=!!($e(r,k)&&$e(r,k)._f&&$e(r,k)._f.disabled);if(!K||P){m.isDirty&&(se=t.isDirty,t.isDirty=me.isDirty=D(),j=se!==me.isDirty);const Ue=ge||Vr($e(o,k),J);se=!!(!ge&&$e(t.dirtyFields,k)),Ue||ge?un(t.dirtyFields,k):Ht(t.dirtyFields,k,!0),me.dirtyFields=t.dirtyFields,j=j||m.dirtyFields&&se!==!Ue}if(K){const Ue=$e(t.touchedFields,k);Ue||(Ht(t.touchedFields,k,K),me.touchedFields=t.touchedFields,j=j||m.touchedFields&&Ue!==K)}j&&w&&g.state.next(me)}return j?me:{}},O=(k,J,K,P)=>{const w=$e(t.errors,k),j=m.isValid&&Ni(J)&&t.isValid!==J;if(e.delayError&&K?(d=M(()=>C(k,K)),d(e.delayError)):(clearTimeout(h),d=null,K?Ht(t.errors,k,K):un(t.errors,k)),(K?!Vr(w,K):w)||!Wn(P)||j){const se={...P,...j&&Ni(J)?{isValid:J}:{},errors:t.errors,name:k};t={...t,...se},g.state.next(se)}},V=async k=>{_(k,!0);const J=await e.resolver(l,e.context,HR(k||f.mount,r,e.criteriaMode,e.shouldUseNativeValidation));return _(k),J},L=async k=>{const{errors:J}=await V(k);if(k)for(const K of k){const P=$e(J,K);P?Ht(t.errors,K,P):un(t.errors,K)}else t.errors=J;return J},T=async(k,J,K={valid:!0})=>{for(const P in k){const w=k[P];if(w){const{_f:j,...se}=w;if(j){const me=f.array.has(j.name),ge=w._f&&VR(w._f);ge&&m.validatingFields&&_([P],!0);const Ue=await M_(w,f.disabled,l,E,e.shouldUseNativeValidation&&!J,me);if(ge&&m.validatingFields&&_([P]),Ue[j.name]&&(K.valid=!1,J))break;!J&&($e(Ue,j.name)?me?FR(t.errors,Ue,j.name):Ht(t.errors,j.name,Ue[j.name]):un(t.errors,j.name))}!Wn(se)&&await T(se,J,K)}}return K.valid},U=()=>{for(const k of f.unMount){const J=$e(r,k);J&&(J._f.refs?J._f.refs.every(K=>!Dd(K)):!Dd(J._f.ref))&&Me(k)}f.unMount=new Set},D=(k,J)=>!e.disabled&&(k&&J&&Ht(l,k,J),!Vr(W(),o)),B=(k,J,K)=>IR(k,f,{...u.mount?l:sn(J)?o:Fi(k)?{[k]:J}:J},K,J),z=k=>lc($e(u.mount?l:o,k,e.shouldUnregister?$e(o,k,[]):[])),le=(k,J,K={})=>{const P=$e(r,k);let w=J;if(P){const j=P._f;j&&(!j.disabled&&Ht(l,k,K0(J,j)),w=ju(j.ref)&&In(J)?"":J,q0(j.ref)?[...j.ref.options].forEach(se=>se.selected=w.includes(se.value)):j.refs?Pa(j.ref)?j.refs.length>1?j.refs.forEach(se=>(!se.defaultChecked||!se.disabled)&&(se.checked=Array.isArray(w)?!!w.find(me=>me===se.value):w===se.value)):j.refs[0]&&(j.refs[0].checked=!!w):j.refs.forEach(se=>se.checked=se.value===w):$h(j.ref)?j.ref.value="":(j.ref.value=w,j.ref.type||g.values.next({name:k,values:{...l}})))}(K.shouldDirty||K.shouldTouch)&&I(k,w,K.shouldTouch,K.shouldDirty,!0),K.shouldValidate&&ce(k)},ne=(k,J,K)=>{for(const P in J){const w=J[P],j=`${k}.${P}`,se=$e(r,j);(f.array.has(k)||en(w)||se&&!se._f)&&!Ms(w)?ne(j,w,K):le(j,w,K)}},he=(k,J,K={})=>{const P=$e(r,k),w=f.array.has(k),j=ui(J);Ht(l,k,j),w?(g.array.next({name:k,values:{...l}}),(m.isDirty||m.dirtyFields)&&K.shouldDirty&&g.state.next({name:k,dirtyFields:ga(o,l),isDirty:D(k,j)})):P&&!P._f&&!In(j)?ne(k,j,K):le(k,j,K),__(k,f)&&g.state.next({...t}),g.values.next({name:u.mount?k:void 0,values:{...l}})},X=async k=>{u.mount=!0;const J=k.target;let K=J.name,P=!0;const w=$e(r,K),j=()=>J.type?Nd(w._f):RR(k),se=me=>{P=Number.isNaN(me)||Ms(me)&&isNaN(me.getTime())||Vr(me,$e(l,K,me))};if(w){let me,ge;const Ue=j(),De=k.type===g_.BLUR||k.type===g_.FOCUS_OUT,Ve=!GR(w._f)&&!e.resolver&&!$e(t.errors,K)&&!w._f.deps||WR(De,$e(t.touchedFields,K),t.isSubmitted,x,y),ht=__(K,f,De);Ht(l,K,Ue),De?(w._f.onBlur&&w._f.onBlur(k),d&&d(0)):w._f.onChange&&w._f.onChange(k);const Ae=I(K,Ue,De,!1),We=!Wn(Ae)||ht;if(!De&&g.values.next({name:K,type:k.type,values:{...l}}),Ve)return m.isValid&&(e.mode==="onBlur"&&De?v():De||v()),We&&g.state.next({name:K,...ht?{}:Ae});if(!De&&ht&&g.state.next({...t}),e.resolver){const{errors:tt}=await V([K]);if(se(Ue),P){const st=T_(t.errors,r,K),Ge=T_(tt,r,st.name||K);me=Ge.error,K=Ge.name,ge=Wn(tt)}}else _([K],!0),me=(await M_(w,f.disabled,l,E,e.shouldUseNativeValidation))[K],_([K]),se(Ue),P&&(me?ge=!1:m.isValid&&(ge=await T(r,!0)));P&&(w._f.deps&&ce(w._f.deps),O(K,ge,me,Ae))}},pe=(k,J)=>{if($e(t.errors,J)&&k.focus)return k.focus(),1},ce=async(k,J={})=>{let K,P;const w=Nu(k);if(e.resolver){const j=await L(sn(k)?k:w);K=Wn(j),P=k?!w.some(se=>$e(j,se)):K}else k?(P=(await Promise.all(w.map(async j=>{const se=$e(r,j);return await T(se&&se._f?{[j]:se}:se)}))).every(Boolean),!(!P&&!t.isValid)&&v()):P=K=await T(r);return g.state.next({...!Fi(k)||m.isValid&&K!==t.isValid?{}:{name:k},...e.resolver||!k?{isValid:K}:{},errors:t.errors}),J.shouldFocus&&!P&&ya(r,pe,k?w:f.mount),P},W=k=>{const J={...u.mount?l:o};return sn(k)?J:Fi(k)?$e(J,k):k.map(K=>$e(J,K))},oe=(k,J)=>({invalid:!!$e((J||t).errors,k),isDirty:!!$e((J||t).dirtyFields,k),error:$e((J||t).errors,k),isValidating:!!$e(t.validatingFields,k),isTouched:!!$e((J||t).touchedFields,k)}),Ce=k=>{k&&Nu(k).forEach(J=>un(t.errors,J)),g.state.next({errors:k?t.errors:{}})},te=(k,J,K)=>{const P=($e(r,k,{_f:{}})._f||{}).ref,w=$e(t.errors,k)||{},{ref:j,message:se,type:me,...ge}=w;Ht(t.errors,k,{...ge,...J,ref:P}),g.state.next({name:k,errors:t.errors,isValid:!1}),K&&K.shouldFocus&&P&&P.focus&&P.focus()},ye=(k,J)=>Ii(k)?g.values.subscribe({next:K=>k(B(void 0,J),K)}):B(k,J,!0),Me=(k,J={})=>{for(const K of k?Nu(k):f.mount)f.mount.delete(K),f.array.delete(K),J.keepValue||(un(r,K),un(l,K)),!J.keepError&&un(t.errors,K),!J.keepDirty&&un(t.dirtyFields,K),!J.keepTouched&&un(t.touchedFields,K),!J.keepIsValidating&&un(t.validatingFields,K),!e.shouldUnregister&&!J.keepDefaultValue&&un(o,K);g.values.next({values:{...l}}),g.state.next({...t,...J.keepDirty?{isDirty:D()}:{}}),!J.keepIsValid&&v()},xe=({disabled:k,name:J,field:K,fields:P})=>{(Ni(k)&&u.mount||k||f.disabled.has(J))&&(k?f.disabled.add(J):f.disabled.delete(J),I(J,Nd(K?K._f:$e(P,J)._f),!1,!1,!0))},Se=(k,J={})=>{let K=$e(r,k);const P=Ni(J.disabled)||Ni(e.disabled);return Ht(r,k,{...K||{},_f:{...K&&K._f?K._f:{ref:{name:k}},name:k,mount:!0,...J}}),f.mount.add(k),K?xe({field:K,disabled:Ni(J.disabled)?J.disabled:e.disabled,name:k}):F(k,!0,J.value),{...P?{disabled:J.disabled||e.disabled}:{},...e.progressive?{required:!!J.required,min:va(J.min),max:va(J.max),minLength:va(J.minLength),maxLength:va(J.maxLength),pattern:va(J.pattern)}:{},name:k,onChange:X,onBlur:X,ref:w=>{if(w){Se(k,J),K=$e(r,k);const j=sn(w.value)&&w.querySelectorAll&&w.querySelectorAll("input,select,textarea")[0]||w,se=zR(j),me=K._f.refs||[];if(se?me.find(ge=>ge===j):j===K._f.ref)return;Ht(r,k,{_f:{...K._f,...se?{refs:[...me.filter(Dd),j,...Array.isArray($e(o,k))?[{}]:[]],ref:{type:j.type,name:k}}:{ref:j}}}),F(k,!1,void 0,j)}else K=$e(r,k,{}),K._f&&(K._f.mount=!1),(e.shouldUnregister||J.shouldUnregister)&&!(PR(f.array,k)&&u.action)&&f.unMount.add(k)}}},Le=()=>e.shouldFocusError&&ya(r,pe,f.mount),Ne=k=>{Ni(k)&&(g.state.next({disabled:k}),ya(r,(J,K)=>{const P=$e(r,K);P&&(J.disabled=P._f.disabled||k,Array.isArray(P._f.refs)&&P._f.refs.forEach(w=>{w.disabled=P._f.disabled||k}))},0,!1))},ct=(k,J)=>async K=>{let P;K&&(K.preventDefault&&K.preventDefault(),K.persist&&K.persist());let w=ui(l);if(f.disabled.size)for(const j of f.disabled)Ht(w,j,void 0);if(g.state.next({isSubmitting:!0}),e.resolver){const{errors:j,values:se}=await V();t.errors=j,w=se}else await T(r);if(un(t.errors,"root"),Wn(t.errors)){g.state.next({errors:{}});try{await k(w,K)}catch(j){P=j}}else J&&await J({...t.errors},K),Le(),setTimeout(Le);if(g.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Wn(t.errors)&&!P,submitCount:t.submitCount+1,errors:t.errors}),P)throw P},_t=(k,J={})=>{$e(r,k)&&(sn(J.defaultValue)?he(k,ui($e(o,k))):(he(k,J.defaultValue),Ht(o,k,ui(J.defaultValue))),J.keepTouched||un(t.touchedFields,k),J.keepDirty||(un(t.dirtyFields,k),t.isDirty=J.defaultValue?D(k,ui($e(o,k))):D()),J.keepError||(un(t.errors,k),m.isValid&&v()),g.state.next({...t}))},je=(k,J={})=>{const K=k?ui(k):o,P=ui(K),w=Wn(k),j=w?o:P;if(J.keepDefaultValues||(o=K),!J.keepValues){if(J.keepDirtyValues){const se=new Set([...f.mount,...Object.keys(ga(o,l))]);for(const me of Array.from(se))$e(t.dirtyFields,me)?Ht(j,me,$e(l,me)):he(me,$e(j,me))}else{if(qh&&sn(k))for(const se of f.mount){const me=$e(r,se);if(me&&me._f){const ge=Array.isArray(me._f.refs)?me._f.refs[0]:me._f.ref;if(ju(ge)){const Ue=ge.closest("form");if(Ue){Ue.reset();break}}}}r={}}l=e.shouldUnregister?J.keepDefaultValues?ui(o):{}:ui(j),g.array.next({values:{...j}}),g.values.next({values:{...j}})}f={mount:J.keepDirtyValues?f.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},u.mount=!m.isValid||!!J.keepIsValid||!!J.keepDirtyValues,u.watch=!!e.shouldUnregister,g.state.next({submitCount:J.keepSubmitCount?t.submitCount:0,isDirty:w?!1:J.keepDirty?t.isDirty:!!(J.keepDefaultValues&&!Vr(k,o)),isSubmitted:J.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:w?{}:J.keepDirtyValues?J.keepDefaultValues&&l?ga(o,l):t.dirtyFields:J.keepDefaultValues&&k?ga(o,k):J.keepDirty?t.dirtyFields:{},touchedFields:J.keepTouched?t.touchedFields:{},errors:J.keepErrors?t.errors:{},isSubmitSuccessful:J.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},G=(k,J)=>je(Ii(k)?k(l):k,J);return{control:{register:Se,unregister:Me,getFieldState:oe,handleSubmit:ct,setError:te,_executeSchema:V,_getWatch:B,_getDirty:D,_updateValid:v,_removeUnmounted:U,_updateFieldArray:R,_updateDisabledField:xe,_getFieldArray:z,_reset:je,_resetDefaultValues:()=>Ii(e.defaultValues)&&e.defaultValues().then(k=>{G(k,e.resetOptions),g.state.next({isLoading:!1})}),_updateFormState:k=>{t={...t,...k}},_disableForm:Ne,_subjects:g,_proxyFormState:m,_setErrors:b,get _fields(){return r},get _formValues(){return l},get _state(){return u},set _state(k){u=k},get _defaultValues(){return o},get _names(){return f},set _names(k){f=k},get _formState(){return t},set _formState(k){t=k},get _options(){return e},set _options(k){e={...e,...k}}},trigger:ce,register:Se,handleSubmit:ct,watch:ye,setValue:he,getValues:W,reset:G,resetField:_t,clearErrors:Ce,unregister:Me,setError:te,setFocus:(k,J={})=>{const K=$e(r,k),P=K&&K._f;if(P){const w=P.refs?P.refs[0]:P.ref;w.focus&&(w.focus(),J.shouldSelect&&Ii(w.select)&&w.select())}},getFieldState:oe}}function YR(i={}){const e=Zt.useRef(void 0),t=Zt.useRef(void 0),[r,o]=Zt.useState({isDirty:!1,isValidating:!1,isLoading:Ii(i.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:i.errors||{},disabled:i.disabled||!1,defaultValues:Ii(i.defaultValues)?void 0:i.defaultValues});e.current||(e.current={...qR(i),formState:r});const l=e.current.control;return l._options=i,UR({subject:l._subjects.state,next:u=>{NR(u,l._proxyFormState,l._updateFormState)&&o({...l._formState})}}),Zt.useEffect(()=>l._disableForm(i.disabled),[l,i.disabled]),Zt.useEffect(()=>{if(l._proxyFormState.isDirty){const u=l._getDirty();u!==r.isDirty&&l._subjects.state.next({isDirty:u})}},[l,r.isDirty]),Zt.useEffect(()=>{i.values&&!Vr(i.values,t.current)?(l._reset(i.values,l._options.resetOptions),t.current=i.values,o(u=>({...u}))):l._resetDefaultValues()},[i.values,l]),Zt.useEffect(()=>{i.errors&&l._setErrors(i.errors)},[i.errors,l]),Zt.useEffect(()=>{l._state.mount||(l._updateValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),Zt.useEffect(()=>{i.shouldUnregister&&l._subjects.values.next({values:l._getWatch()})},[i.shouldUnregister,l]),e.current.formState=DR(r,l),e.current}function $R(i){return Xh({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(i)}function KR(i){return Xh({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(i)}const ZR=()=>Z.jsxs("div",{className:"social-container",children:[Z.jsx("a",{href:"https://www.instagram.com/manuelrodrigues.px/",target:"_blank",rel:"noopener noreferrer",children:Z.jsx($R,{className:"footer-icons"})}),Z.jsx("a",{href:"https://www.linkedin.com/in/manuelrodriguesvideo/",target:"_blank ",rel:"noopener noreferrer",children:Z.jsx(KR,{className:"footer-icons"})})]}),QR=({responseMessage:i,onClose:e})=>Z.jsxs("div",{className:"footer-modal",children:[Z.jsx("div",{className:"footer-modal__p-container",children:i}),Z.jsx("div",{className:"footer-modal__btn-container",children:Z.jsx("button",{onClick:e,children:"Close"})})]}),JR=({onClose:i})=>Z.jsx("section",{className:"privacy-policy",children:Z.jsxs("div",{className:"privacy-policy__container",children:[Z.jsx("h1",{children:"Privacy Policy"}),Z.jsxs("div",{className:"privacy-policy__container__paragraphs",children:[Z.jsxs("p",{className:"privacy-policy__container__paragraphs__p",children:[Z.jsx("strong",{children:"1. Introduction"}),Z.jsx("br",{}),"Welcome to our website. Your privacy is important to us. This Privacy Policy explains how we collect, use, protect, and share your information when you use our landing page."]}),Z.jsx("br",{}),Z.jsxs("p",{className:"privacy-policy__container__paragraphs__p",children:[Z.jsx("strong",{children:"2. Data Collected"}),Z.jsx("br",{}),"We may collect the following personal data when you fill out our forms:",Z.jsx("br",{}),"- Name (optional)",Z.jsx("br",{}),"- Email address (optional)",Z.jsx("br",{}),"- IP address and browsing data (via cookies and analytics tools)"]}),Z.jsx("br",{}),Z.jsxs("p",{className:"privacy-policy__container__paragraphs__p",children:[Z.jsx("strong",{children:"3. How We Use Your Data"}),Z.jsx("br",{}),"The data collected may be used to:",Z.jsx("br",{}),"- Send communications and newsletters (if authorized)",Z.jsx("br",{}),"- Improve user experience and analyze site access",Z.jsx("br",{}),"- Comply with legal and regulatory obligations"]}),Z.jsx("br",{}),Z.jsxs("p",{className:"privacy-policy__container__paragraphs__p",children:[Z.jsx("strong",{children:"4. Data Sharing"}),Z.jsx("br",{}),"We do not share your personal data with third parties, except:",Z.jsx("br",{}),"- When necessary for email marketing services",Z.jsx("br",{}),"- To comply with legal requirements"]}),Z.jsx("br",{}),Z.jsxs("p",{className:"privacy-policy__container__paragraphs__p",children:[Z.jsx("strong",{children:"5. Data Retention"}),Z.jsx("br",{}),"Your data will be stored as long as necessary for the purposes described in this policy or until you request its deletion."]}),Z.jsx("br",{}),Z.jsxs("p",{className:"privacy-policy__container__paragraphs__p",children:[Z.jsx("strong",{children:"6. Your Rights"}),Z.jsx("br",{}),"You have the right to:",Z.jsx("br",{}),"- Request access, correction, or deletion of your data",Z.jsx("br",{}),"- Withdraw your consent at any time",Z.jsx("br",{}),"- File a complaint with data protection authorities"]}),Z.jsx("br",{}),Z.jsxs("p",{className:"privacy-policy__container__paragraphs__p",children:[Z.jsx("strong",{children:"7. Security"}),Z.jsx("br",{}),"We adopt technical and organizational measures to protect your data from unauthorized access or breaches."]}),Z.jsx("br",{}),Z.jsxs("p",{className:"privacy-policy__container__paragraphs__p",children:[Z.jsx("strong",{children:"8. Cookies"}),Z.jsx("br",{}),"Our website may use cookies. You can disable them in your browser settings."]}),Z.jsx("br",{}),Z.jsxs("p",{className:"privacy-policy__container__paragraphs__p",children:[Z.jsx("strong",{children:"9. Contact"}),Z.jsx("br",{}),"Questions? Contact us at: ",Z.jsx("a",{href:"mailto:your@email.com",children:"your@email.com"})]}),Z.jsx("br",{}),Z.jsxs("p",{className:"privacy-policy__container__paragraphs__p",children:[Z.jsx("strong",{children:"10. Updates"}),Z.jsx("br",{}),"This policy may be updated. The most recent version will always be available on this page."]})]}),Z.jsx("button",{className:"privacy-policy__container__btn",onClick:i,children:"OK"})]})}),eC=()=>{const{register:i,handleSubmit:e,reset:t}=YR(),[r,o]=nt.useState(""),[l,u]=nt.useState(!1),[f,d]=nt.useState(!1),h=()=>{u(!1)},m=async y=>{const x={...y,access_key:"4d90b83f-23f0-4c19-be90-5a1f2fdf3e72",subject:"Nova mensagem em MrPx. Responde já!"};try{const E=await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(x)}),M=await E.json();E.ok&&M.success?(u(!0),o(Z.jsxs("p",{children:["Message successfully sent :) ",Z.jsx("br",{}),"I will get back to you as soon as possible"]})),t()):o(`Error sending message: ${M.message}`)}catch(E){o("Error sending message. Please try again later."),console.error("Request error:",E)}},g=()=>{d(!f)};return Z.jsx(Z.Fragment,{children:Z.jsxs("form",{onSubmit:e(m),children:[f&&Z.jsx(JR,{onClose:g}),l&&Z.jsx(QR,{responseMessage:r,onClose:h}),Z.jsx("input",{type:"hidden",...i("access_key"),value:"YOUR_WEB3FORMS_ACCESS_KEY"}),Z.jsx("input",{type:"hidden",...i("subject"),value:"New Contact Form Message"}),Z.jsx("input",{...i("name"),placeholder:"Name (*)",required:!0}),Z.jsx("input",{...i("email"),type:"email",placeholder:"Email (*)",required:!0}),Z.jsx("textarea",{...i("message"),placeholder:"Message (*)",required:!0}),Z.jsxs("div",{className:"termsdiv",children:[Z.jsx("input",{type:"checkbox",id:"privacypolicy",required:!0}),Z.jsxs("label",{children:["I accept the",Z.jsx("a",{onClick:g,children:Z.jsx("strong",{children:" Privacy Policy"})})]})]}),Z.jsx("button",{type:"submit",children:"Send"}),Z.jsx("div",{className:"footer-container__links",children:Z.jsx(ZR,{})})]})})},tC=()=>Z.jsx("footer",{children:Z.jsxs("div",{className:"footer-container",children:[Z.jsxs("div",{className:"footer-container__form",children:[Z.jsx("div",{className:"footer-container__h2-container",children:Z.jsx("h2",{className:"footer-container__h2-container__h2",children:"Connect + Follow"})}),Z.jsx(eC,{})]}),Z.jsx("div",{className:"footer-container__copy",children:Z.jsx(bR,{})})]})}),nC=()=>Z.jsx(Z.Fragment,{children:Z.jsx(Jx,{children:Z.jsxs(ES,{children:[Z.jsx(NA,{}),Z.jsxs("main",{children:[Z.jsx(PA,{}),Z.jsx(Gr.Element,{name:"hero",children:Z.jsx(UA,{})}),Z.jsx(Gr.Element,{name:"gallery",children:Z.jsx(wR,{})}),Z.jsx(Gr.Element,{name:"about",children:Z.jsx(AR,{})})]}),Z.jsx(Gr.Element,{name:"footer",children:Z.jsx(tC,{})})]})})});Hx.createRoot(document.getElementById("root")).render(Z.jsx(Zt.StrictMode,{children:Z.jsx(nC,{})}));
