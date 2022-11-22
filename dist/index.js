"use strict";var t=require("react"),e=require("prop-types"),n=require("styled-components"),r=require("react-icons/cg"),o=require("react-icons/bi"),i=require("react-icons/io"),a=require("react-dom");class s{constructor(){return"object"==typeof s.toastService?s.toastService:(this.toasts=[],this.lastId=0,s.toastService=this,this)}getToasts(){return this.toasts}deleteToastById(t){return this.toasts=this.toasts.filter((e=>e.id!==t)),this.toasts}createToast(t){return this.toasts.length<3?(this.toasts=[...this.toasts,{id:this.lastId,...t}],this.lastId++,{...this.toasts[this.toasts.length-1]}):null}}let l=new s;function c(){return c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},c.apply(this,arguments)}class u extends t.Component{constructor(t){super(t),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}render(){const{children:e}=this.props,{hasError:n}=this.state;return n?t.createElement("div",null,t.createElement("h1",null,"Oops, somebody stole your notification :o")):e}}u.propTypes=e.node.isRequired;const m=({children:t,position:e})=>{let n=document.getElementById(`toastPortal-${e}`);return n||(n=document.createElement("div"),n.id=`toastPortal-${e}`,e=(t=>{switch(t){case"top-right":return{top:"0px",right:"0px"};case"top-left":return{top:"0px",left:"0px"};case"top-center":return{top:"0px",left:"calc(50% - 175px)"};case"bottom-right":return{bottom:"0px",right:"0px"};case"bottom-left":return{bottom:"0px",left:"0px"};case"bottom-center":return{bottom:"0px",left:"calc(50% - 175px)"};default:return}})(e),n.style.width="auto",n.style.height="auto",document.body.prepend(n),n.style.position="fixed",n.style.right=e.right?e.right:null,n.style.left=e.left?e.left:null,n.style.bottom=e.bottom?e.bottom:null,n.style.top=e.top?e.top:null),a.createPortal(t,n)};m.propTypes={children:e.node.isRequired,position:e.string.isRequired};var h={margin:[0,5],padding:[0,15],fontSize:[16,18,40],fontWeight:[600],width:[100,350],height:[40],transition:[.2,.3],boxShadow:[10,15],gap:[10],borderRadius:[3],bgColors:{warning:"#f0ad4e",danger:"#d9534f",info:"#5bc0de",success:"#5cb85c"},whiteColor:"#fafafa",shadowColor:"#999"};const d=n.keyframes`
  0% {
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,p=n.keyframes`
0% {
    transform: translateX(600px);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    transform: translateX(0);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    transform: translateX(68px);
    animation-timing-function: ease-in;
  }
  72% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  81% {
    transform: translateX(32px);
    animation-timing-function: ease-in;
  }
  90% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  95% {
    transform: translateX(8px);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }`,f=n.keyframes`
  0% {
    transform: translateZ(-80px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0);
    opacity: 1;
  } 
  `,g=n.div`
  & * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: ${({iconAndTextColor:t,theme:e})=>t||e.whiteColor};
  }
  padding: ${({theme:t})=>t.padding[1]}px;
  margin: ${({spacing:t,theme:e})=>t&&t>=0&&t<=200?t:e.margin[1]}px
    0;
  display: flex;
  gap: ${({theme:t})=>t.gap[0]}px;
  align-items: center;
  font-size: ${({theme:t})=>t.fontSize[1]}px;
  width: ${({theme:t})=>t.width[1]}px;
  min-height: ${({theme:t})=>t.height[0]}px;
  height: auto;
  background-color: ${({bgColor:t,variant:e})=>t||(t=>{switch(t){case"warning":return"#f0ad4e";case"danger":return"#d9534f";case"info":return"#5bc0de";default:return"#5cb85c"}})(e)};
  border-radius: ${({theme:t})=>t.borderRadius[0]}px;
  box-shadow: 0 0 ${({theme:t})=>t.boxShadow[0]}px
    ${({theme:t})=>t.shadowColor};
  cursor: pointer;
  transition: all ${({theme:t})=>t.transition[0]}s ease;
  &:hover {
    box-shadow: 0 0 ${({theme:t})=>t.boxShadow[1]}px
      ${({theme:t})=>t.shadowColor};
  }
  animation: ${({animation:t})=>"slideRight"===t&&n.css`
	${d} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
`||"bounceRight"===t&&n.css`
	${p} 1.1s both
`||"fadeIn"===t&&n.css`
	${f} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both
`};
`,x=n.p`
  font-size: ${({theme:t})=>t.fontSize[0]}px;
  height: auto;
`,b=n.p`
  font-size: ${({theme:t})=>t.fontSize[2]}px;
  margin: 0;
  height: auto;
`,y=n.p`
  font-size: ${({theme:t})=>t.fontSize[1]}px;
  font-weight: ${({theme:t})=>t.fontWeight[0]};
  height: auto;
`,w=n.div`
  align-self: flex-start;
  cursor: pointer;
  font-size: ${({theme:t})=>t.fontSize[1]}px;
  color: ${({theme:t})=>t.whiteColor};
  &:hover {
    transform: scale(1.1);
  }
  transition: all ${({theme:t})=>t.transition[1]}s ease;
`,$=n.div`
  width: ${({theme:t})=>t.width[0]}%;
`,E=({id:e,text:a,variant:s,title:l,bgColor:c,iconAndTextColor:u,spacing:d,animation:p,deleteToastById:f,position:E,timer:v})=>{null===a&&null===l&&(l=function(t){switch(t){case"warning":return"Warning";case"danger":return"Danger";case"info":return"Info";default:return"Success"}}(s));return t.useEffect((()=>{if(v){const t=setTimeout((()=>f(e)),1e3*v);return()=>clearTimeout(t)}}),[]),t.createElement(n.ThemeProvider,{theme:h},t.createElement(m,{position:E},t.createElement(g,{iconAndTextColor:u,variant:s,bgColor:c,spacing:d,animation:p},t.createElement(b,null,(t=>{switch(t){case"warning":return React.createElement(o.BiError,null);case"danger":return React.createElement(i.IoMdCloseCircleOutline,null);case"info":return React.createElement(o.BiInfoCircle,null);default:return React.createElement(o.BiCheckCircle,null)}})(s)),t.createElement($,null,t.createElement(y,null,l),t.createElement(x,null,a)),t.createElement(w,{onClick:()=>{f(e)}},t.createElement(r.CgClose,null)))))};E.propTypes={id:e.number.isRequired,text:e.string,variant:e.string,title:e.string,color:e.string,iconAndTextColor:e.string,spacing:e.string,animation:e.string,deleteToastById:e.func.isRequired,position:e.string,timer:e.number},E.defaultProps={text:null,variant:"success",title:null,color:null,iconAndTextColor:null,spacing:"10",animation:"slideRight",position:"bottom-right",timer:null};var v=t.memo(E);const C=({toasts:e})=>{const[n,r]=t.useState([]);t.useEffect((()=>{r(e)}),[e]);const o=t=>{r(l.deleteToastById(t))},i=t.useMemo((()=>n.map((e=>{const{id:n}=e;return t.createElement(v,c({key:n},e,{deleteToastById:o}))}))),[n]);return t.createElement("div",null,t.createElement(u,null,i))};C.propTypes={toasts:e.array},C.defaultProps={toasts:[]};var T={Toasts:t.memo(C),toastService:l};module.exports=T;
