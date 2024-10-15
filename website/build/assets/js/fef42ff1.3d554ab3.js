"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3256],{65563:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=n(85893),i=n(11151),r=(n(74866),n(85162),n(71183),n(46610));const s={id:"storage",title:"State",sidebar_label:"State (Storage)",hide_table_of_contents:!0},l=void 0,o={id:"build/smart-contracts/anatomy/storage",title:"State",description:"Smart contracts store data in their account's state, which is public on the chain. The storage starts empty until a contract is deployed and the state is initialized.",source:"@site/../docs/2.build/2.smart-contracts/anatomy/storage.md",sourceDirName:"2.build/2.smart-contracts/anatomy",slug:"/build/smart-contracts/anatomy/storage",permalink:"/build/smart-contracts/anatomy/storage",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/2.smart-contracts/anatomy/storage.md",tags:[],version:"current",lastUpdatedBy:"Owen",lastUpdatedAt:172898398e4,frontMatter:{id:"storage",title:"State",sidebar_label:"State (Storage)",hide_table_of_contents:!0},sidebar:"build",previous:{title:"External Interface",permalink:"/build/smart-contracts/anatomy/functions"},next:{title:"SDK Types",permalink:"/build/smart-contracts/anatomy/types"}},c={},u=[{value:"Defining the State",id:"defining-the-state",level:3},{value:"Defining the State",id:"defining-the-state-1",level:3},{value:"Initializing the State",id:"initializing-the-state",level:3},{value:"I. Initialization Functions",id:"i-initialization-functions",level:3},{value:"I. Initialization Functions",id:"i-initialization-functions-1",level:3},{value:"II. Default State",id:"ii-default-state",level:3},{value:"II. Default State",id:"ii-default-state-1",level:3},{value:"Lifecycle of the State",id:"lifecycle-of-the-state",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Smart contracts store data in their account's state, which is public on the chain. The storage starts ",(0,a.jsx)(t.strong,{children:"empty"})," until a contract is deployed and the state is initialized."]}),"\n",(0,a.jsxs)(t.p,{children:["It is important to know that the account's ",(0,a.jsx)(t.strong,{children:"code"})," and account's ",(0,a.jsx)(t.strong,{children:"storage"})," are ",(0,a.jsx)(t.strong,{children:"independent"}),". ",(0,a.jsx)(t.a,{href:"/build/smart-contracts/release/upgrade",children:"Updating the code"})," does ",(0,a.jsx)(t.strong,{children:"not erase"})," the state."]}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsxs)(r.z8,{languages:"js,rust",children:[(0,a.jsxs)(r.gO,{highlights:'{"js": "3-6,10-13"}',fname:"auction",children:[(0,a.jsx)(t.h3,{id:"defining-the-state",children:"Defining the State"}),(0,a.jsxs)(t.p,{children:["The attributes of the ",(0,a.jsx)(t.code,{children:"class"})," marked as the contract define the data that will be stored."]}),(0,a.jsxs)(t.p,{children:["The contract can store all native types (e.g. ",(0,a.jsx)(t.code,{children:"number"}),", ",(0,a.jsx)(t.code,{children:"string"}),", ",(0,a.jsx)(t.code,{children:"Array"}),", ",(0,a.jsx)(t.code,{children:"Map"}),") as well as complex objects."]}),(0,a.jsx)(t.p,{children:"For example, our Auction contract stores when the auction ends, and an object representing the highest bid."}),(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Note:"})," The SDK also provides ",(0,a.jsx)(t.a,{href:"/build/smart-contracts/anatomy/collections",children:"collections"})," to efficiently store collections of data."]})]}),(0,a.jsxs)(r.gO,{highlights:'{"rust": "6-9,13-18"}',fname:"auction",children:[(0,a.jsx)(t.h3,{id:"defining-the-state-1",children:"Defining the State"}),(0,a.jsxs)(t.p,{children:["The attributes of the ",(0,a.jsx)(t.code,{children:"struct"})," marked as the contract define the data that will be stored."]}),(0,a.jsxs)(t.p,{children:["The contract can store all native types (e.g. ",(0,a.jsx)(t.code,{children:"u8"}),", ",(0,a.jsx)(t.code,{children:"string"}),", ",(0,a.jsx)(t.code,{children:"HashMap"}),", ",(0,a.jsx)(t.code,{children:"Vector"}),") as well as complex objects."]}),(0,a.jsx)(t.p,{children:"For example, our Auction contract stores when the auction ends, and an object representing the highest bid."}),(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Note:"})," The structures that will be saved need a special macro, that tells the SDK to store them ",(0,a.jsx)(t.a,{href:"/build/smart-contracts/anatomy/serialization",children:"serialized in Borsh"}),"."]}),(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Note:"})," The SDK also provides ",(0,a.jsx)(t.a,{href:"/build/smart-contracts/anatomy/collections",children:"collections"})," to efficiently store collections of data."]})]}),(0,a.jsx)(r.gO,{highlights:'{"js":"", "rust": ""}',fname:"auction",type:"info",children:(0,a.jsxs)(t.admonition,{type:"warning",children:[(0,a.jsx)(t.p,{children:"Contracts pay for their storage by locking part of their balance."}),(0,a.jsxs)(t.p,{children:["It currently costs ~",(0,a.jsx)(t.strong,{children:"1\u24c3"})," to store ",(0,a.jsx)(t.strong,{children:"100KB"})," of data."]})]})}),(0,a.jsxs)(r.gO,{highlights:'{"js": "", "rust": ""}',fname:"auction",children:[(0,a.jsx)(t.h3,{id:"initializing-the-state",children:"Initializing the State"}),(0,a.jsx)(t.p,{children:"After the contract is deployed, its state is empty and needs to be initialized with\nsome initial values."}),(0,a.jsx)(t.p,{children:"There are two ways to initialize a state:"}),(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"By creating an initialization function"}),"\n",(0,a.jsx)(t.li,{children:"By setting default values"}),"\n"]})]}),(0,a.jsxs)(r.gO,{highlights:'{"js": "8,15-20"}',fname:"auction",children:[(0,a.jsx)(t.h3,{id:"i-initialization-functions",children:"I. Initialization Functions"}),(0,a.jsxs)(t.p,{children:["An option to initialize the state is to create an ",(0,a.jsx)(t.code,{children:"initialization"})," function, which needs to be called before executing any other function."]}),(0,a.jsxs)(t.p,{children:["In our Auction example, the contract has an initialization function that sets when the auction ends. Note the ",(0,a.jsx)(t.code,{children:"@initialization"})," decorator, and the forced initialization on ",(0,a.jsx)(t.code,{children:"NearBindgen"}),"."]}),(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Note:"})," It is a good practice to mark initialization functions as private. We will cover function types in the ",(0,a.jsx)(t.a,{href:"/build/smart-contracts/anatomy/functions",children:"functions section"}),"."]})]}),(0,a.jsx)(r.gO,{highlights:'{"js": "10-13"}',fname:"auction",type:"info",children:(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsxs)(t.p,{children:["In TS/JS you still ",(0,a.jsx)(t.strong,{children:"must"})," set default values for the attributes, so the SDK can infer their types."]})})}),(0,a.jsxs)(r.gO,{highlights:'{"rust": "12,22-34"}',fname:"auction",children:[(0,a.jsx)(t.h3,{id:"i-initialization-functions-1",children:"I. Initialization Functions"}),(0,a.jsxs)(t.p,{children:["An option to initialize the state is to create an ",(0,a.jsx)(t.code,{children:"initialization"})," function, which needs to be called before executing any other function."]}),(0,a.jsxs)(t.p,{children:["In our Auction example, the contract has an initialization function that sets when the auction ends. The contract derives the ",(0,a.jsx)(t.code,{children:"PanicOnDefault"}),", which forces the user to call the init method denoted by the ",(0,a.jsx)(t.code,{children:"#[init]"})," macro."]}),(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Note:"})," It is a good practice to mark initialization functions as private. We will cover function types in the ",(0,a.jsx)(t.a,{href:"/build/smart-contracts/anatomy/functions",children:"functions section"}),"."]})]}),(0,a.jsxs)(r.gO,{highlights:'{"js": "5"}',fname:"hello",children:[(0,a.jsx)(t.h3,{id:"ii-default-state",children:"II. Default State"}),(0,a.jsx)(t.p,{children:"Another option to initialize the state is to set default values for the attributes of the class."}),(0,a.jsxs)(t.p,{children:['Such is the case for our "Hello World" contract, which stores a ',(0,a.jsx)(t.code,{children:"greeting"})," with the default value ",(0,a.jsx)(t.code,{children:'"Hello"'}),"."]}),(0,a.jsxs)(t.p,{children:["The first time the contract is called (somebody executes ",(0,a.jsx)(t.code,{children:"get_greeting"})," or ",(0,a.jsx)(t.code,{children:"set_greeting"}),"), the default values will be stored in the state, and the state will be considered initialized."]}),(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Note:"})," The state can only be initialized once."]})]}),(0,a.jsxs)(r.gO,{highlights:'{"rust": "10-16"}',fname:"hello",children:[(0,a.jsx)(t.h3,{id:"ii-default-state-1",children:"II. Default State"}),(0,a.jsxs)(t.p,{children:["Another option to initialize the state is to create a ",(0,a.jsx)(t.code,{children:"Default"})," version of our contract's ",(0,a.jsx)(t.code,{children:"struct"}),"."]}),(0,a.jsxs)(t.p,{children:['For example, our "Hello World" contract has a default state with a ',(0,a.jsx)(t.code,{children:"greeting"})," set to ",(0,a.jsx)(t.code,{children:'"Hello"'}),"."]}),(0,a.jsxs)(t.p,{children:["The first time the contract executes, the ",(0,a.jsx)(t.code,{children:"Default"})," will be stored in the state, and the state will be considered initialized."]}),(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Note:"})," The state can only be initialized once."]})]}),(0,a.jsxs)(r.gO,{highlights:'{"js": "", "rust":""}',fname:"hello",children:[(0,a.jsx)(t.h3,{id:"lifecycle-of-the-state",children:"Lifecycle of the State"}),(0,a.jsx)(t.p,{children:"When a function is called, the contract's state is loaded from the storage and put into memory."}),(0,a.jsxs)(t.p,{children:["The state is actually ",(0,a.jsx)(t.a,{href:"/build/smart-contracts/anatomy/serialization",children:"stored serialized"}),", and the SDK takes a bit of time to deserialize it before the method can access it."]}),(0,a.jsx)(t.p,{children:"When the method finishes executing successfully, all the changes to the state are serialized, and saved back to the storage."})]}),(0,a.jsx)(r.gO,{highlights:'{"js": "", "rust":""}',fname:"hello",type:"info",children:(0,a.jsxs)(t.admonition,{title:"State and Code",type:"warning",children:[(0,a.jsxs)(t.p,{children:["In NEAR, the contract's code and contract's storage are ",(0,a.jsx)(t.strong,{children:"independent"}),"."]}),(0,a.jsxs)(t.p,{children:["Updating the code of a contract does ",(0,a.jsx)(t.strong,{children:"not erase"})," the state, and can indeed lead to unexpected behavior or errors."]}),(0,a.jsxs)(t.p,{children:["Make sure to read the ",(0,a.jsx)(t.a,{href:"/build/smart-contracts/release/upgrade",children:"updating a contract"})," if you run into issues."]})]})}),(0,a.jsx)(r.$B,{language:"js",fname:"auction",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-ts/01-basic-auction/src/contract.ts",start:"2",end:"60"}),(0,a.jsx)(r.$B,{language:"js",fname:"hello",url:"https://github.com/near-examples/hello-near-examples/blob/main/contract-ts/src/contract.ts",start:"2",end:"18"}),(0,a.jsx)(r.$B,{language:"rust",fname:"auction",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-rs/01-basic-auction/src/lib.rs",start:"2",end:"83"}),(0,a.jsx)(r.$B,{language:"rust",fname:"hello",url:"https://github.com/near-examples/hello-near-examples/blob/main/contract-rs/src/lib.rs",start:"2",end:"32"})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>s});n(67294);var a=n(36905);const i={tabItem:"tabItem_Ymn6"};var r=n(85893);function s(e){var t=e.children,n=e.hidden,s=e.className;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,s),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(67294),i=n(36905),r=n(12466),s=n(16550),l=n(20469),o=n(91980),c=n(67392),u=n(20812);function d(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.lx)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function g(e){var t=e.queryString,n=void 0!==t&&t,i=e.groupId,r=(0,s.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:i});return[(0,o._X)(l),(0,a.useCallback)((function(e){if(l){var t=new URLSearchParams(r.location.search);t.set(l,e),r.replace(Object.assign({},r.location,{search:t.toString()}))}}),[l,r])]}function m(e){var t,n,i,r,s=e.defaultValue,o=e.queryString,c=void 0!==o&&o,d=e.groupId,m=h(e),p=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var i=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:s,tabValues:m})})),x=p[0],b=p[1],j=g({queryString:c,groupId:d}),v=j[0],y=j[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Nk)(t),i=n[0],r=n[1],[i,(0,a.useCallback)((function(e){t&&r.set(e)}),[t,r])]),S=w[0],I=w[1],k=function(){var e=null!=v?v:S;return f({value:e,tabValues:m})?e:null}();return(0,l.Z)((function(){k&&b(k)}),[k]),{selectedValue:x,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),I(e)}),[y,I,m]),tabValues:m}}var p=n(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(85893);function j(e){var t=e.className,n=e.block,a=e.selectedValue,s=e.selectValue,l=e.tabValues,o=[],c=(0,r.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=o.indexOf(t),i=l[n].value;i!==a&&(c(t),s(i))},d=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,i=o.indexOf(e.currentTarget)+1;n=null!=(a=o[i])?a:o[0];break;case"ArrowLeft":var r,s=o.indexOf(e.currentTarget)-1;n=null!=(r=o[s])?r:o[o.length-1]}null==(t=n)||t.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:l.map((function(e){var t=e.value,n=e.label,r=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return o.push(e)},onKeyDown:d,onClick:u},r,{className:(0,i.Z)("tabs__item",x.tabItem,null==r?void 0:r.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function v(e){var t=e.lazy,n=e.children,r=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var l=s.find((function(e){return e.props.value===r}));return l?(0,a.cloneElement)(l,{className:(0,i.Z)("margin-top--md",l.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function y(e){var t=m(e);return(0,b.jsxs)("div",{className:(0,i.Z)("tabs-container",x.tabList),children:[(0,b.jsx)(j,Object.assign({},t,e)),(0,b.jsx)(v,Object.assign({},t,e))]})}function w(e){var t=(0,p.Z)();return(0,b.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(t))}},46610:(e,t,n)=>{n.d(t,{gO:()=>m,z8:()=>g,$B:()=>p,rV:()=>x,rC:()=>b,h7:()=>f});var a=n(98906),i=n(67294),r=n(1841),s=n.n(r),l=n(71183),o=n(74866),c=n(85162),u=n(85893);const d=function(e){var t=e.props,n=t.blocks,a=t.files,r=t.languages,s=t.language,l=t.setLanguage,d=(0,i.useState)(n[0].highlight),h=d[0],g=d[1],m=(0,i.useState)(0),p=m[0],j=m[1],v=(0,i.useState)(n[0].fname),y=v[0],w=v[1],S=function(e){j(e),g(n[e].highlight),w(n[e].fname)};return(0,i.useEffect)((function(){var e=document.querySelector('div[fname="'+y+'"] .theme-code-block-highlighted-line'),t=document.querySelector('div[fname="'+y+'"] .prism-code');if(e){var n=e.offsetTop-t.clientHeight/2;t.scrollTo({top:n,behavior:"smooth"})}}),[y,h]),(0,i.useEffect)((function(){S(0);var e=document.querySelector(".navbar"),t=document.getElementById("files");t.style.top=e.clientHeight+"px";var a=document.querySelector(".file-tabs");document.querySelectorAll(".language-"+s).forEach((function(t){return t.style.maxHeight="calc(100vh - "+e.clientHeight+"px - "+a.clientHeight+"px)"}));var i=document.getElementById("block0").getBoundingClientRect().top,r=document.getElementById("block"+(n.length-1)).getBoundingClientRect().bottom,l=Math.abs(r-i),o=document.getElementById("codeblocks").getBoundingClientRect().top+window.scrollY,c=document.getElementById("block"+(n.length-1)).getBoundingClientRect().top;document.getElementById("extra-padding").style.height=t.clientHeight-Math.abs(c-r)-e.clientHeight+"px";var u=function(){for(var t=window.scrollY-o+e.clientHeight,a=window.scrollY?t/l:0,i=0,r=0,s=0;s<n.length;s++){if(i=r,r+=document.getElementById("block"+s).clientHeight/l,a>i&&a<r){S(s);break}}};return window.addEventListener("scroll",u),function(){window.removeEventListener("scroll",u)}}),[n,a,s]),(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:"row code-explain",children:[(0,u.jsxs)("div",{className:"col-blocks col",id:"codeblocks",children:[(0,u.jsx)(o.Z,{className:"file-tabs",selectedValue:s,selectValue:function(e){return l(e)},children:r.map((function(e){return(0,u.jsx)(c.Z,{value:e,label:f[e]})}))}),n.map((function(e,t){return(0,u.jsx)(x,{selected:p===t,index:t,text:e.text,type:e.type,activateFn:S})})),(0,u.jsx)("div",{id:"extra-padding",style:{width:"100%"}})]}),(0,u.jsx)("div",{className:"col-files col",children:(0,u.jsx)("div",{id:"files",style:{position:"sticky"},children:(0,u.jsx)(o.Z,{className:"file-tabs",selectedValue:y||n[0].fname,selectValue:function(e){return w(e)},children:a.map((function(e){return(0,u.jsx)(c.Z,{value:e.fname,children:(0,u.jsx)(b,Object.assign({},e,{lineNumber:h}))})}))})})})]})})};const h=function(e){var t=e.props,n=t.blocks,a=t.files,r=t.languages,s=t.language,l=t.setLanguage,d=(0,i.useState)(n[0].highlight),h=d[0],g=d[1],m=(0,i.useState)(0),p=m[0],j=m[1],v=(0,i.useState)(n[0].fname),y=v[0],w=v[1],S=function(e){j(e),g(n[e].highlight),w(n[e].fname)};return(0,i.useEffect)((function(){var e=document.querySelector('div[fname="'+y+'"] .theme-code-block-highlighted-line'),t=document.querySelector('div[fname="'+y+'"] .prism-code');e&&t.scrollTo({top:e.offsetTop,behavior:"smooth"})}),[y,h]),(0,i.useEffect)((function(){S(0);var e=document.querySelector(".navbar"),t=document.querySelector(".file-tabs");document.querySelectorAll(".language-"+s).forEach((function(e){return e.style.maxHeight="calc(33vh - "+t.clientHeight+"px)"}));var a=document.getElementById("block0").getBoundingClientRect().top,i=document.getElementById("block"+(n.length-1)).getBoundingClientRect().bottom,r=Math.abs(i-a),l=document.getElementById("codeblocks").getBoundingClientRect().top+window.scrollY,o=function(){for(var t=window.scrollY-l+e.clientHeight,a=document.getElementById("files"),i=window.scrollY?t/(r+a.clientHeight):0,s=0,o=0,c=0;c<n.length;c++){if(s=o,o+=document.getElementById("block"+c).clientHeight/r,i>s&&i<o){S(c);break}}};return window.addEventListener("scroll",o),function(){window.removeEventListener("scroll",o)}}),[n,a,s]),(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:"code-explain",style:{position:"relative"},children:[(0,u.jsxs)("div",{id:"codeblocks",children:[(0,u.jsx)(o.Z,{className:"file-tabs",selectedValue:s,selectValue:function(e){return l(e)},children:r.map((function(e){return(0,u.jsx)(c.Z,{value:e,label:f[e]})}))}),n.map((function(e,t){return(0,u.jsx)(x,{selected:p===t,index:t,text:e.text,type:e.type,activateFn:S})}))]}),(0,u.jsx)("div",{id:"files",style:{height:"33vh",position:"sticky",bottom:0,backgroundColor:"var(--ifm-background-color)"},children:(0,u.jsx)(o.Z,{className:"file-tabs",selectedValue:y||n[0].fname,selectValue:function(e){return w(e)},children:a.map((function(e){return(0,u.jsx)(c.Z,{value:e.fname,children:(0,u.jsx)(b,Object.assign({},e,{lineNumber:h}))})}))})})]})})};var f={rust:"\ud83e\udd80 RS",js:"\ud83c\udf10 JS",ts:"\ud83c\udf10 TS"};function g(e){var t=e.children,n=e.languages;n=n.split(",");var r=(0,i.useState)(n[0]),s=r[0],l=r[1],o=(0,i.useState)([]),c=o[0],g=o[1],m=(0,i.useState)([]),p=m[0],x=m[1],b=(0,i.useState)(!0),j=b[0],v=b[1];if(!n.every((function(e){return e in f})))throw new Error("languages must be one of ['rust', 'js', 'ts']");var y=function(e){localStorage.setItem("docusaurus.tab.code-tabs",e),l(e)};return(0,i.useEffect)((function(){var e=localStorage.getItem("docusaurus.tab.code-tabs");e&&n.includes(e)&&l(e),v(window.innerWidth>768)}),[]),(0,i.useEffect)((function(){for(var e,n=[],i=[],r=(0,a.Z)(t);!(e=r()).done;){var l=e.value;if(l.props.highlights){var o=JSON.parse(l.props.highlights);o&&s in o&&n.push({text:l.props.children,highlight:o[s],fname:l.props.fname,type:l.props.type})}s===l.props.language&&i.push(Object.assign({},l.props))}g(n),x(i)}),[s]),c.length&&p.length?j?(0,u.jsx)(d,{props:{blocks:c,files:p,languages:n,language:s,setLanguage:y}}):(0,u.jsx)(h,{props:{blocks:c,files:p,languages:n,language:s,setLanguage:y}}):"Loading..."}function m(e){return e.children}function p(e){return e.children}function x(e){var t=e.selected,n=e.text,a=e.index,i=e.activateFn,r=e.type;if(console.log("TYPE",r),r)return(0,u.jsx)("div",{id:"block"+a,children:n});var s=t?"block-selected":"";return(0,u.jsx)("div",{className:"block "+s+" padding--sm",id:"block"+a,onClick:function(){return i(a)},children:n},a)}function b(e){var t=e.url,n=e.start,a=e.end,i=e.language,r=e.fname,o=e.lineNumber,c=e.children;return t?(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{fname:r,children:(0,u.jsx)(l.Ey,{url:t,start:n,end:a,language:i,fname:r,metastring:"{"+o+"}"})})}):(0,u.jsx)("div",{fname:r,children:(0,u.jsx)(s(),{language:i,metastring:"{"+o+"}",children:c.props.children.props.children})})}},71183:(e,t,n)=>{n.d(t,{O2:()=>g,Ey:()=>p,SQ:()=>m});var a=n(67294),i=n(74866),r=n(85162),s=n(74165),l=n(15861),o=n(1841),c=n.n(o),u=n(85893);function d(){return(d=(0,l.Z)((0,s.Z)().mark((function e(t,n,a){var i,r,l,o;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((r=localStorage.getItem(t+"-until"))&&r>Date.now())){e.next=5;break}i=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:i=e.sent,localStorage.setItem(t,i),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return l=i.split("\n"),n=n?Number(n)-1:0,a=a?Number(a):l.length,l=l.slice(n,a),o=l.reduce((function(e,t){if(0===t.length)return e;var n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0),e.abrupt("return",l.map((function(e){return e.slice(o)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var t=e.url,n=e.start,i=e.end,r=e.language,s=e.fname,l=e.metastring,o=(0,a.useState)("Loading..."),h=o[0],f=o[1];return(0,a.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),n=t[0],a=(t[1],new URL(n).pathname.split("/").slice(1)),i=a[0],r=a[1];return a[2],"https://raw.githubusercontent.com/"+i+"/"+r+"/"+a[3]+"/"+a.slice(4).join("/")}(t),a=function(e,t,n){return d.apply(this,arguments)}(e,n,i);a.then((function(e){return f(e)}))})),(0,u.jsxs)("div",{fname:s,children:[(0,u.jsx)(c(),{language:r,metastring:l+" showLineNumbers",children:h}),(0,u.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,u.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var f={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function g(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,u.jsx)(i.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,u.jsx)(r.Z,{value:e.props.value,label:f[e.props.value],children:e})}))})}function m(e){var t=e.children,n=e.language,a=e.showSingleFName;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,a=(n.children,n.url),i=n.start,r=n.end,s=n.fname;if(e.type===p)return p({url:a,start:i,end:r,language:t,fname:s});return e}(e,n)})),1!=t.length||a?(0,u.jsx)(i.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,u.jsx)(r.Z,{value:t,label:e.props.fname,children:e})}))}):(0,u.jsx)(r.Z,{value:0,label:t[0].props.fname,children:t[0]})}function p(e){var t=e.url,n=e.start,a=e.end,i=e.language,r=e.fname,s=e.metastring;return h({url:t,start:n,end:a,language:i,fname:r,metastring:s})}}}]);