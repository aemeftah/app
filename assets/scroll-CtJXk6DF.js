import{r as y,m as E,j as v,c as z,o as h,n as x,Z as m,h as L,g as O,k as w,aD as S,aE as p}from"./index-BH-0moDe.js";function T(){const e=y(!E.value);return e.value===!1&&v(()=>{e.value=!0}),{isHydrated:e}}const b=typeof ResizeObserver<"u",g=b===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},C=z({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:i}){let t=null,o,l={width:-1,height:-1};function c(n){n===!0||e.debounce===0||e.debounce==="0"?d():t===null&&(t=setTimeout(d,e.debounce))}function d(){if(t!==null&&(clearTimeout(t),t=null),o){const{offsetWidth:n,offsetHeight:s}=o;(n!==l.width||s!==l.height)&&(l={width:n,height:s},i("resize",l))}}const{proxy:a}=O();if(a.trigger=c,b===!0){let n;const s=f=>{o=a.$el.parentNode,o?(n=new ResizeObserver(c),n.observe(o),d()):f!==!0&&m(()=>{s(!0)})};return v(()=>{s()}),h(()=>{t!==null&&clearTimeout(t),n!==void 0&&(n.disconnect!==void 0?n.disconnect():o&&n.unobserve(o))}),x}else{let n=function(){t!==null&&(clearTimeout(t),t=null),r!==void 0&&(r.removeEventListener!==void 0&&r.removeEventListener("resize",c,w.passive),r=void 0)},s=function(){n(),o&&o.contentDocument&&(r=o.contentDocument.defaultView,r.addEventListener("resize",c,w.passive),d())};const{isHydrated:f}=T();let r;return v(()=>{m(()=>{o=a.$el,o&&s()})}),h(n),()=>{if(f.value===!0)return L("object",{class:"q--avoid-card-border",style:g.style,tabindex:-1,type:"text/html",data:g.url,"aria-hidden":"true",onLoad:s})}}}}),D=[Element,String],H=[null,document,document.body,document.scrollingElement,document.documentElement];function N(e,i){let t=S(i);if(t===void 0){if(e==null)return window;t=e.closest(".scroll,.scroll-y,.overflow-auto")}return H.includes(t)?window:t}function P(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function R(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let u;function k(){if(u!==void 0)return u;const e=document.createElement("p"),i=document.createElement("div");p(e,{width:"100%",height:"200px"}),p(i,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),i.appendChild(e),document.body.appendChild(i);const t=e.offsetWidth;i.style.overflow="scroll";let o=e.offsetWidth;return t===o&&(o=i.clientWidth),i.remove(),u=t-o,u}function j(e,i=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:i?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}export{C as Q,P as a,R as b,k as c,N as g,j as h,D as s};
