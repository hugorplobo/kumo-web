(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=t(l);fetch(l.href,o)}})();var O,s,ne,E,R,F={},oe=[],ve=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function H(_,e){for(var t in e)_[t]=e[t];return _}function re(_){var e=_.parentNode;e&&e.removeChild(_)}function ye(_,e,t){var r,l,o,i={};for(o in e)o=="key"?r=e[o]:o=="ref"?l=e[o]:i[o]=e[o];if(arguments.length>2&&(i.children=arguments.length>3?O.call(arguments,2):t),typeof _=="function"&&_.defaultProps!=null)for(o in _.defaultProps)i[o]===void 0&&(i[o]=_.defaultProps[o]);return L(_,i,r,l,null)}function L(_,e,t,r,l){var o={type:_,props:e,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:l==null?++ne:l};return l==null&&s.vnode!=null&&s.vnode(o),o}function C(_){return _.children}function T(_,e){this.props=_,this.context=e}function $(_,e){if(e==null)return _.__?$(_.__,_.__.__k.indexOf(_)+1):null;for(var t;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null)return t.__e;return typeof _.type=="function"?$(_):null}function le(_){var e,t;if((_=_.__)!=null&&_.__c!=null){for(_.__e=_.__c.base=null,e=0;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null){_.__e=_.__c.base=t.__e;break}return le(_)}}function z(_){(!_.__d&&(_.__d=!0)&&E.push(_)&&!M.__r++||R!==s.debounceRendering)&&((R=s.debounceRendering)||setTimeout)(M)}function M(){for(var _;M.__r=E.length;)_=E.sort(function(e,t){return e.__v.__b-t.__v.__b}),E=[],_.some(function(e){var t,r,l,o,i,u;e.__d&&(i=(o=(t=e).__v).__e,(u=t.__P)&&(r=[],(l=H({},o)).__v=o.__v+1,q(u,o,l,t.__n,u.ownerSVGElement!==void 0,o.__h!=null?[i]:null,r,i==null?$(o):i,o.__h),ue(r,o),o.__e!=i&&le(o)))})}function ie(_,e,t,r,l,o,i,u,p,d){var n,h,f,c,a,N,v,m=r&&r.__k||oe,b=m.length;for(t.__k=[],n=0;n<e.length;n++)if((c=t.__k[n]=(c=e[n])==null||typeof c=="boolean"?null:typeof c=="string"||typeof c=="number"||typeof c=="bigint"?L(null,c,null,null,c):Array.isArray(c)?L(C,{children:c},null,null,null):c.__b>0?L(c.type,c.props,c.key,c.ref?c.ref:null,c.__v):c)!=null){if(c.__=t,c.__b=t.__b+1,(f=m[n])===null||f&&c.key==f.key&&c.type===f.type)m[n]=void 0;else for(h=0;h<b;h++){if((f=m[h])&&c.key==f.key&&c.type===f.type){m[h]=void 0;break}f=null}q(_,c,f=f||F,l,o,i,u,p,d),a=c.__e,(h=c.ref)&&f.ref!=h&&(v||(v=[]),f.ref&&v.push(f.ref,null,c),v.push(h,c.__c||a,c)),a!=null?(N==null&&(N=a),typeof c.type=="function"&&c.__k===f.__k?c.__d=p=ce(c,p,_):p=se(_,c,f,m,a,p),typeof t.type=="function"&&(t.__d=p)):p&&f.__e==p&&p.parentNode!=_&&(p=$(f))}for(t.__e=N,n=b;n--;)m[n]!=null&&ae(m[n],m[n]);if(v)for(n=0;n<v.length;n++)fe(v[n],v[++n],v[++n])}function ce(_,e,t){for(var r,l=_.__k,o=0;l&&o<l.length;o++)(r=l[o])&&(r.__=_,e=typeof r.type=="function"?ce(r,e,t):se(t,r,r,l,r.__e,e));return e}function se(_,e,t,r,l,o){var i,u,p;if(e.__d!==void 0)i=e.__d,e.__d=void 0;else if(t==null||l!=o||l.parentNode==null)e:if(o==null||o.parentNode!==_)_.appendChild(l),i=null;else{for(u=o,p=0;(u=u.nextSibling)&&p<r.length;p+=1)if(u==l)break e;_.insertBefore(l,o),i=o}return i!==void 0?i:l.nextSibling}function me(_,e,t,r,l){var o;for(o in t)o==="children"||o==="key"||o in e||V(_,o,null,t[o],r);for(o in e)l&&typeof e[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||t[o]===e[o]||V(_,o,e[o],t[o],r)}function G(_,e,t){e[0]==="-"?_.setProperty(e,t):_[e]=t==null?"":typeof t!="number"||ve.test(e)?t:t+"px"}function V(_,e,t,r,l){var o;e:if(e==="style")if(typeof t=="string")_.style.cssText=t;else{if(typeof r=="string"&&(_.style.cssText=r=""),r)for(e in r)t&&e in t||G(_.style,e,"");if(t)for(e in t)r&&t[e]===r[e]||G(_.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in _?e.toLowerCase().slice(2):e.slice(2),_.l||(_.l={}),_.l[e+o]=t,t?r||_.addEventListener(e,o?J:K,o):_.removeEventListener(e,o?J:K,o);else if(e!=="dangerouslySetInnerHTML"){if(l)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in _)try{_[e]=t==null?"":t;break e}catch{}typeof t=="function"||(t==null||t===!1&&e.indexOf("-")==-1?_.removeAttribute(e):_.setAttribute(e,t))}}function K(_){this.l[_.type+!1](s.event?s.event(_):_)}function J(_){this.l[_.type+!0](s.event?s.event(_):_)}function q(_,e,t,r,l,o,i,u,p){var d,n,h,f,c,a,N,v,m,b,P,x,B,S,w,k=e.type;if(e.constructor!==void 0)return null;t.__h!=null&&(p=t.__h,u=e.__e=t.__e,e.__h=null,o=[u]),(d=s.__b)&&d(e);try{e:if(typeof k=="function"){if(v=e.props,m=(d=k.contextType)&&r[d.__c],b=d?m?m.props.value:d.__:r,t.__c?N=(n=e.__c=t.__c).__=n.__E:("prototype"in k&&k.prototype.render?e.__c=n=new k(v,b):(e.__c=n=new T(v,b),n.constructor=k,n.render=ke),m&&m.sub(n),n.props=v,n.state||(n.state={}),n.context=b,n.__n=r,h=n.__d=!0,n.__h=[],n._sb=[]),n.__s==null&&(n.__s=n.state),k.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=H({},n.__s)),H(n.__s,k.getDerivedStateFromProps(v,n.__s))),f=n.props,c=n.state,h)k.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(k.getDerivedStateFromProps==null&&v!==f&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(v,b),!n.__e&&n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(v,n.__s,b)===!1||e.__v===t.__v){for(n.props=v,n.state=n.__s,e.__v!==t.__v&&(n.__d=!1),n.__v=e,e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(A){A&&(A.__=e)}),P=0;P<n._sb.length;P++)n.__h.push(n._sb[P]);n._sb=[],n.__h.length&&i.push(n);break e}n.componentWillUpdate!=null&&n.componentWillUpdate(v,n.__s,b),n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(f,c,a)})}if(n.context=b,n.props=v,n.__v=e,n.__P=_,x=s.__r,B=0,"prototype"in k&&k.prototype.render){for(n.state=n.__s,n.__d=!1,x&&x(e),d=n.render(n.props,n.state,n.context),S=0;S<n._sb.length;S++)n.__h.push(n._sb[S]);n._sb=[]}else do n.__d=!1,x&&x(e),d=n.render(n.props,n.state,n.context),n.state=n.__s;while(n.__d&&++B<25);n.state=n.__s,n.getChildContext!=null&&(r=H(H({},r),n.getChildContext())),h||n.getSnapshotBeforeUpdate==null||(a=n.getSnapshotBeforeUpdate(f,c)),w=d!=null&&d.type===C&&d.key==null?d.props.children:d,ie(_,Array.isArray(w)?w:[w],e,t,r,l,o,i,u,p),n.base=e.__e,e.__h=null,n.__h.length&&i.push(n),N&&(n.__E=n.__=null),n.__e=!1}else o==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=ge(t.__e,e,t,r,l,o,i,p);(d=s.diffed)&&d(e)}catch(A){e.__v=null,(p||o!=null)&&(e.__e=u,e.__h=!!p,o[o.indexOf(u)]=null),s.__e(A,e,t)}}function ue(_,e){s.__c&&s.__c(e,_),_.some(function(t){try{_=t.__h,t.__h=[],_.some(function(r){r.call(t)})}catch(r){s.__e(r,t.__v)}})}function ge(_,e,t,r,l,o,i,u){var p,d,n,h=t.props,f=e.props,c=e.type,a=0;if(c==="svg"&&(l=!0),o!=null){for(;a<o.length;a++)if((p=o[a])&&"setAttribute"in p==!!c&&(c?p.localName===c:p.nodeType===3)){_=p,o[a]=null;break}}if(_==null){if(c===null)return document.createTextNode(f);_=l?document.createElementNS("http://www.w3.org/2000/svg",c):document.createElement(c,f.is&&f),o=null,u=!1}if(c===null)h===f||u&&_.data===f||(_.data=f);else{if(o=o&&O.call(_.childNodes),d=(h=t.props||F).dangerouslySetInnerHTML,n=f.dangerouslySetInnerHTML,!u){if(o!=null)for(h={},a=0;a<_.attributes.length;a++)h[_.attributes[a].name]=_.attributes[a].value;(n||d)&&(n&&(d&&n.__html==d.__html||n.__html===_.innerHTML)||(_.innerHTML=n&&n.__html||""))}if(me(_,f,h,l,u),n)e.__k=[];else if(a=e.props.children,ie(_,Array.isArray(a)?a:[a],e,t,r,l&&c!=="foreignObject",o,i,o?o[0]:t.__k&&$(t,0),u),o!=null)for(a=o.length;a--;)o[a]!=null&&re(o[a]);u||("value"in f&&(a=f.value)!==void 0&&(a!==_.value||c==="progress"&&!a||c==="option"&&a!==h.value)&&V(_,"value",a,h.value,!1),"checked"in f&&(a=f.checked)!==void 0&&a!==_.checked&&V(_,"checked",a,h.checked,!1))}return _}function fe(_,e,t){try{typeof _=="function"?_(e):_.current=e}catch(r){s.__e(r,t)}}function ae(_,e,t){var r,l;if(s.unmount&&s.unmount(_),(r=_.ref)&&(r.current&&r.current!==_.__e||fe(r,null,e)),(r=_.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){s.__e(o,e)}r.base=r.__P=null,_.__c=void 0}if(r=_.__k)for(l=0;l<r.length;l++)r[l]&&ae(r[l],e,t||typeof _.type!="function");t||_.__e==null||re(_.__e),_.__=_.__e=_.__d=void 0}function ke(_,e,t){return this.constructor(_,t)}function be(_,e,t){var r,l,o;s.__&&s.__(_,e),l=(r=typeof t=="function")?null:t&&t.__k||e.__k,o=[],q(e,_=(!r&&t||e).__k=ye(C,null,[_]),l||F,F,e.ownerSVGElement!==void 0,!r&&t?[t]:l?null:e.firstChild?O.call(e.childNodes):null,o,!r&&t?t:l?l.__e:e.firstChild,r),ue(o,_)}O=oe.slice,s={__e:function(_,e,t,r){for(var l,o,i;e=e.__;)if((l=e.__c)&&!l.__)try{if((o=l.constructor)&&o.getDerivedStateFromError!=null&&(l.setState(o.getDerivedStateFromError(_)),i=l.__d),l.componentDidCatch!=null&&(l.componentDidCatch(_,r||{}),i=l.__d),i)return l.__E=l}catch(u){_=u}throw _}},ne=0,T.prototype.setState=function(_,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=H({},this.state),typeof _=="function"&&(_=_(H({},t),this.props)),_&&H(t,_),_!=null&&this.__v&&(e&&this._sb.push(e),z(this))},T.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),z(this))},T.prototype.render=C,E=[],M.__r=0;var pe,y,I,Q,W=0,de=[],U=[],X=s.__b,Y=s.__r,Z=s.diffed,ee=s.__c,_e=s.unmount;function He(_,e){s.__h&&s.__h(y,_,W||e),W=0;var t=y.__H||(y.__H={__:[],__h:[]});return _>=t.__.length&&t.__.push({__V:U}),t.__[_]}function Ne(_){return W=1,xe(he,_)}function xe(_,e,t){var r=He(pe++,2);if(r.t=_,!r.__c&&(r.__=[t?t(e):he(void 0,e),function(o){var i=r.__N?r.__N[0]:r.__[0],u=r.t(i,o);i!==u&&(r.__N=[u,r.__[1]],r.__c.setState({}))}],r.__c=y,!y.u)){y.u=!0;var l=y.shouldComponentUpdate;y.shouldComponentUpdate=function(o,i,u){if(!r.__c.__H)return!0;var p=r.__c.__H.__.filter(function(n){return n.__c});if(p.every(function(n){return!n.__N}))return!l||l.call(this,o,i,u);var d=!1;return p.forEach(function(n){if(n.__N){var h=n.__[0];n.__=n.__N,n.__N=void 0,h!==n.__[0]&&(d=!0)}}),!(!d&&r.__c.props===o)&&(!l||l.call(this,o,i,u))}}return r.__N||r.__}function Ee(){for(var _;_=de.shift();)if(_.__P&&_.__H)try{_.__H.__h.forEach(D),_.__H.__h.forEach(j),_.__H.__h=[]}catch(e){_.__H.__h=[],s.__e(e,_.__v)}}s.__b=function(_){y=null,X&&X(_)},s.__r=function(_){Y&&Y(_),pe=0;var e=(y=_.__c).__H;e&&(I===y?(e.__h=[],y.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=U,t.__N=t.i=void 0})):(e.__h.forEach(D),e.__h.forEach(j),e.__h=[])),I=y},s.diffed=function(_){Z&&Z(_);var e=_.__c;e&&e.__H&&(e.__H.__h.length&&(de.push(e)!==1&&Q===s.requestAnimationFrame||((Q=s.requestAnimationFrame)||$e)(Ee)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==U&&(t.__=t.__V),t.i=void 0,t.__V=U})),I=y=null},s.__c=function(_,e){e.some(function(t){try{t.__h.forEach(D),t.__h=t.__h.filter(function(r){return!r.__||j(r)})}catch(r){e.some(function(l){l.__h&&(l.__h=[])}),e=[],s.__e(r,t.__v)}}),ee&&ee(_,e)},s.unmount=function(_){_e&&_e(_);var e,t=_.__c;t&&t.__H&&(t.__H.__.forEach(function(r){try{D(r)}catch(l){e=l}}),t.__H=void 0,e&&s.__e(e,t.__v))};var te=typeof requestAnimationFrame=="function";function $e(_){var e,t=function(){clearTimeout(r),te&&cancelAnimationFrame(e),setTimeout(_)},r=setTimeout(t,100);te&&(e=requestAnimationFrame(t))}function D(_){var e=y,t=_.__c;typeof t=="function"&&(_.__c=void 0,t()),y=e}function j(_){var e=y;_.__c=_.__(),y=e}function he(_,e){return typeof e=="function"?e(_):e}const Ce="/assets/preact.48177e6f.svg";var Pe=0;function g(_,e,t,r,l){var o,i,u={};for(i in e)i=="ref"?o=e[i]:u[i]=e[i];var p={type:_,props:u,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Pe,__source:l,__self:r};if(typeof _=="function"&&(o=_.defaultProps))for(i in o)u[i]===void 0&&(u[i]=o[i]);return s.vnode&&s.vnode(p),p}function Se(){const[_,e]=Ne(0);return g(C,{children:[g("div",{children:[g("a",{href:"https://vitejs.dev",target:"_blank",children:g("img",{src:"/vite.svg",class:"logo",alt:"Vite logo"})}),g("a",{href:"https://preactjs.com",target:"_blank",children:g("img",{src:Ce,class:"logo preact",alt:"Preact logo"})})]}),g("h1",{children:"Vite + Preact"}),g("div",{class:"card",children:[g("button",{onClick:()=>e(t=>t+1),children:["count is ",_]}),g("p",{children:["Edit ",g("code",{children:"src/app.tsx"})," and save to test HMR"]})]}),g("p",{class:"read-the-docs",children:"Click on the Vite and Preact logos to learn more"})]})}be(g(Se,{}),document.getElementById("app"));
