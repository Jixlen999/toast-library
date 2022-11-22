import t,{useEffect as e,useState as n,useMemo as o}from"react";import r from"prop-types";import i,{keyframes as a,css as s,ThemeProvider as l}from"styled-components";import{CgClose as c}from"react-icons/cg";import{BiCheckCircle as m,BiInfoCircle as u,BiError as p}from"react-icons/bi";import{IoMdCloseCircleOutline as h}from"react-icons/io";import{createPortal as d}from"react-dom";class f{constructor(){return"object"==typeof f.toastService?f.toastService:(this.toasts=[],this.lastId=0,f.toastService=this,this)}getToasts(){return this.toasts}deleteToastById(t){return this.toasts=this.toasts.filter((e=>e.id!==t)),this.toasts}createToast(t){return this.toasts.length<3?(this.toasts=[...this.toasts,{id:this.lastId,...t}],this.lastId++,{...this.toasts[this.toasts.length-1]}):null}}let g=new f;function x(){return x=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},x.apply(this,arguments)}class b extends t.Component{constructor(t){super(t),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}render(){const{children:e}=this.props,{hasError:n}=this.state;return n?t.createElement("div",null,t.createElement("h1",null,"Oops, somebody stole your notification :o")):e}}b.propTypes=r.node.isRequired;const y=({children:t,position:e})=>{let n=document.getElementById(`toastPortal-${e}`);return n||(n=document.createElement("div"),n.id=`toastPortal-${e}`,e=(t=>{switch(t){case"top-right":return{top:"0px",right:"0px"};case"top-left":return{top:"0px",left:"0px"};case"top-center":return{top:"0px",left:"calc(50% - 175px)"};case"bottom-right":return{bottom:"0px",right:"0px"};case"bottom-left":return{bottom:"0px",left:"0px"};case"bottom-center":return{bottom:"0px",left:"calc(50% - 175px)"};default:return}})(e),n.style.width="auto",n.style.height="auto",document.body.prepend(n),n.style.position="fixed",n.style.right=e.right?e.right:null,n.style.left=e.left?e.left:null,n.style.bottom=e.bottom?e.bottom:null,n.style.top=e.top?e.top:null),d(t,n)};y.propTypes={children:r.node.isRequired,position:r.string.isRequired};var w={margin:[0,5],padding:[0,15],fontSize:[16,18,40],fontWeight:[600],width:[100,350],height:[40],transition:[.2,.3],boxShadow:[10,15],gap:[10],borderRadius:[3],bgColors:{warning:"#f0ad4e",danger:"#d9534f",info:"#5bc0de",success:"#5cb85c"},whiteColor:"#fafafa",shadowColor:"#999"};const $=a`
  0% {
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,v=a`
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
  }`,E=a`
  0% {
    transform: translateZ(-80px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0);
    opacity: 1;
  } 
  `,T=i.div`
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
  animation: ${({animation:t})=>"slideRight"===t&&s`
	${$} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
`||"bounceRight"===t&&s`
	${v} 1.1s both
`||"fadeIn"===t&&s`
	${E} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both
`};
`,C=i.p`
  font-size: ${({theme:t})=>t.fontSize[0]}px;
  height: auto;
`,S=i.p`
  font-size: ${({theme:t})=>t.fontSize[2]}px;
  margin: 0;
  height: auto;
`,z=i.p`
  font-size: ${({theme:t})=>t.fontSize[1]}px;
  font-weight: ${({theme:t})=>t.fontWeight[0]};
  height: auto;
`,R=i.div`
  align-self: flex-start;
  cursor: pointer;
  font-size: ${({theme:t})=>t.fontSize[1]}px;
  color: ${({theme:t})=>t.whiteColor};
  &:hover {
    transform: scale(1.1);
  }
  transition: all ${({theme:t})=>t.transition[1]}s ease;
`,I=i.div`
  width: ${({theme:t})=>t.width[0]}%;
`,X=({id:n,text:o,variant:r,title:i,bgColor:a,iconAndTextColor:s,spacing:d,animation:f,deleteToastById:g,position:x,timer:b})=>{null===o&&null===i&&(i=function(t){switch(t){case"warning":return"Warning";case"danger":return"Danger";case"info":return"Info";default:return"Success"}}(r));return e((()=>{if(b){const t=setTimeout((()=>g(n)),1e3*b);return()=>clearTimeout(t)}}),[]),t.createElement(l,{theme:w},t.createElement(y,{position:x},t.createElement(T,{iconAndTextColor:s,variant:r,bgColor:a,spacing:d,animation:f},t.createElement(S,null,(t=>{switch(t){case"warning":return React.createElement(p,null);case"danger":return React.createElement(h,null);case"info":return React.createElement(u,null);default:return React.createElement(m,null)}})(r)),t.createElement(I,null,t.createElement(z,null,i),t.createElement(C,null,o)),t.createElement(R,{onClick:()=>{g(n)}},t.createElement(c,null)))))};X.propTypes={id:r.number.isRequired,text:r.string,variant:r.string,title:r.string,color:r.string,iconAndTextColor:r.string,spacing:r.string,animation:r.string,deleteToastById:r.func.isRequired,position:r.string,timer:r.number},X.defaultProps={text:null,variant:"success",title:null,color:null,iconAndTextColor:null,spacing:"10",animation:"slideRight",position:"bottom-right",timer:null};var B=t.memo(X);const q=({toasts:r})=>{const[i,a]=n([]);e((()=>{a(r)}),[r]);const s=t=>{a(g.deleteToastById(t))},l=o((()=>i.map((e=>{const{id:n}=e;return t.createElement(B,x({key:n},e,{deleteToastById:s}))}))),[i]);return t.createElement("div",null,t.createElement(b,null,l))};q.propTypes={toasts:r.array},q.defaultProps={toasts:[]};var A={Toasts:t.memo(q),toastService:g};export{A as default};
