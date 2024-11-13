"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8017],{77817:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(85893),r=n(11151),i=(n(74866),n(85162),n(71183));const o={id:"updating-the-frontend",title:"Updating the Frontend"},s=void 0,l={id:"tutorials/auction/updating-the-frontend",title:"Updating the Frontend",description:"Now we've updated the contract to include an NFT as a reward and changed the contract such that it accepts bids in fungible tokens, we need to update the frontend accordingly.",source:"@site/../docs/3.tutorials/auction/3.3-new-frontend.md",sourceDirName:"3.tutorials/auction",slug:"/tutorials/auction/updating-the-frontend",permalink:"/zh-CN/tutorials/auction/updating-the-frontend",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/auction/3.3-new-frontend.md",tags:[],version:"current",lastUpdatedBy:"omahs",lastUpdatedAt:173150332e4,frontMatter:{id:"updating-the-frontend",title:"Updating the Frontend"},sidebar:"tutorials",previous:{title:"Bidding with FTs",permalink:"/zh-CN/tutorials/auction/bidding-with-fts"},next:{title:"Auction Factory",permalink:"/zh-CN/tutorials/auction/auction-factory"}},c={},u=[{value:"Getting the data from the contract",id:"getting-the-data-from-the-contract",level:2},{value:"Displaying the NFT",id:"displaying-the-nft",level:2},{value:"Fetching FT information",id:"fetching-ft-information",level:2},{value:"Bidding with FTs",id:"bidding-with-fts",level:2},{value:"Updating the indexing API call",id:"updating-the-indexing-api-call",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Now we've updated the contract to include an NFT as a reward and changed the contract such that it accepts bids in fungible tokens, we need to update the frontend accordingly."}),"\n",(0,a.jsx)(t.h2,{id:"getting-the-data-from-the-contract",children:"Getting the data from the contract"}),"\n",(0,a.jsx)(t.p,{children:"Now we have a function to output the whole contract state we will call this function in our frontend"}),"\n",(0,a.jsx)(i.SQ,{value:"javascript",language:"javascript",showSingleFName:!0,children:(0,a.jsx)(i.Ey,{fname:"index.js",url:"https://github.com/near-examples/auctions-tutorial/blob/main/frontends/03-frontend/src/pages/index.js#L28-L35",start:"28",end:"35"})}),"\n",(0,a.jsxs)(t.p,{children:["This call will deliver us the contract Ids of the FT and NFT contracts along with the token Id of the NFT. We will then use this information to call the ",(0,a.jsx)(t.code,{children:"ft_metadata"})," and ",(0,a.jsx)(t.code,{children:"nft_token"})," methods on the FT and NFT contracts respectively to get information about the FT and NFT."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"displaying-the-nft",children:"Displaying the NFT"}),"\n",(0,a.jsxs)(t.p,{children:["We want to show what NFT is being auctioned. To do this we will call ",(0,a.jsx)(t.code,{children:"nft_token"})," on the NFT contract to get the NFT metadata. To call this method we need to specify the NFT ",(0,a.jsx)(t.code,{children:"contractId"})," and the ",(0,a.jsx)(t.code,{children:"token_id"}),", which can be found in the auction information. ",(0,a.jsx)(t.code,{children:"nft_token"})," also returns the owner of the NFT, so we'll check this against the contract account to verify that the auction is valid."]}),"\n",(0,a.jsx)(i.SQ,{value:"javascript",language:"javascript",showSingleFName:!0,children:(0,a.jsx)(i.Ey,{fname:"index.js",url:"https://github.com/near-examples/auctions-tutorial/blob/main/frontends/03-frontend/src/pages/index.js#L57-L73",start:"57",end:"73"})}),"\n",(0,a.jsxs)(t.p,{children:["Note that this effect will only run once the ",(0,a.jsx)(t.code,{children:"auctionInfo"})," updates because we first need the NFT contract ID and token ID from ",(0,a.jsx)(t.code,{children:"auctionInfo"})," to make a valid call to ",(0,a.jsx)(t.code,{children:"nft_token"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["In a new component named ",(0,a.jsx)(t.code,{children:"AuctionItem"})," we display the NFT image, name, and description."]}),"\n",(0,a.jsx)(i.SQ,{value:"javascript",language:"javascript",showSingleFName:!0,children:(0,a.jsx)(i.Ey,{fname:"AuctionItem.jsx",url:"https://github.com/near-examples/auctions-tutorial/blob/main/frontends/03-frontend/src/components/AuctionItem.jsx"})}),"\n",(0,a.jsx)(t.p,{children:"Note that an image caching service is used to display the NFT image for better performance."}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"fetching-ft-information",children:"Fetching FT information"}),"\n",(0,a.jsxs)(t.p,{children:["Using the FT contract ID from the auction information, we can call the ",(0,a.jsx)(t.code,{children:"ft_metadata"})," method on the FT contract to get information about the fungible token that is being used for the auction."]}),"\n",(0,a.jsx)(i.SQ,{value:"javascript",language:"javascript",showSingleFName:!0,children:(0,a.jsx)(i.Ey,{fname:"index.js",url:"https://github.com/near-examples/auctions-tutorial/blob/main/frontends/03-frontend/src/pages/index.js#L75-L93",start:"75",end:"93"})}),"\n",(0,a.jsx)(t.p,{children:"We set the FT image, symbol, icon, and decimals in state. We use the decimals to format the amount of tokens being bid. In the case of DAI it divides the amount by 10^18. The reverse process is used when making a bid, the bid amount is multiplied by 10^18 before being sent to the contract."}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"bidding-with-fts",children:"Bidding with FTs"}),"\n",(0,a.jsxs)(t.p,{children:["Instead of calling the function ",(0,a.jsx)(t.code,{children:"bid"})," on the contract we now call the ",(0,a.jsx)(t.code,{children:"ft_transfer_call"})," function on the FT contract. This function transfers the FTs to the auction contract and calls the ",(0,a.jsx)(t.code,{children:"ft_on_transfer"})," on the auction contract."]}),"\n",(0,a.jsx)(i.SQ,{value:"javascript",language:"javascript",showSingleFName:!0,children:(0,a.jsx)(i.Ey,{fname:"index.js",url:"https://github.com/near-examples/auctions-tutorial/blob/main/frontends/03-frontend/src/pages/index.js#L95-L105",start:"95",end:"105"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"updating-the-indexing-api-call",children:"Updating the indexing API call"}),"\n",(0,a.jsxs)(t.p,{children:["We need to update the API call that fetches historical bids to now index each time ",(0,a.jsx)(t.code,{children:"ft_on_transfer"})," is called on the auction contract from the FT contract."]}),"\n",(0,a.jsx)(i.SQ,{value:"javascript",language:"javascript",showSingleFName:!0,children:(0,a.jsx)(i.Ey,{fname:"getBidHistory.js",url:"https://github.com/near-examples/auctions-tutorial/blob/main/frontends/03-frontend/src/pages/api/getBidHistory.js#L1-L13",start:"1",end:"13"})}),"\n",(0,a.jsxs)(t.p,{children:["And now instead of getting the bid amount from the deposit, it is now retrieved from the calls argument, from ",(0,a.jsx)(t.code,{children:"amount"}),". The case is the same for the account Id of the bidder, from ",(0,a.jsx)(t.code,{children:"sender_id"}),"."]}),"\n",(0,a.jsx)(i.SQ,{value:"javascript",language:"javascript",showSingleFName:!0,children:(0,a.jsx)(i.Ey,{fname:"getBidHistory.js",url:"https://github.com/near-examples/auctions-tutorial/blob/main/frontends/03-frontend/src/pages/api/getBidHistory.js#L24-L28",start:"24",end:"28"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsx)(t.p,{children:"Ok nice, that didn't take too long. To look back, we updated the frontend to now display the NFT being auctioned, to display bid amounts - both the current and historical bids - in terms of the FT being used, and changed the bidding process to now use FTs."}),"\n",(0,a.jsxs)(t.p,{children:["In the ",(0,a.jsx)(t.a,{href:"/zh-CN/tutorials/auction/auction-factory",children:"final section"})," of this mega tutorial we'll create an auction factory contract that is used to deploy and initialize new auction contracts."]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var a=n(36905);const r={tabItem:"tabItem_Ymn6"};var i=n(85893);function o(e){var t=e.children,n=e.hidden,o=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(67294),r=n(36905),i=n(12466),o=n(16550),s=n(20469),l=n(91980),c=n(67392),u=n(20812);function d(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.lx)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function p(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,i=(0,o.k6)(),s=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:r});return[(0,l._X)(s),(0,a.useCallback)((function(e){if(s){var t=new URLSearchParams(i.location.search);t.set(s,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[s,i])]}function m(e){var t,n,r,i,o=e.defaultValue,l=e.queryString,c=void 0!==l&&l,d=e.groupId,m=h(e),g=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:m})})),b=g[0],v=g[1],x=p({queryString:c,groupId:d}),j=x[0],w=x[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Nk)(t),r=n[0],i=n[1],[r,(0,a.useCallback)((function(e){t&&i.set(e)}),[t,i])]),T=y[0],N=y[1],F=function(){var e=null!=j?j:T;return f({value:e,tabValues:m})?e:null}();return(0,s.Z)((function(){F&&v(F)}),[F]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);v(e),w(e),N(e)}),[w,N,m]),tabValues:m}}var g=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(85893);function x(e){var t=e.className,n=e.block,a=e.selectedValue,o=e.selectValue,s=e.tabValues,l=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=l.indexOf(t),r=s[n].value;r!==a&&(c(t),o(r))},d=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,r=l.indexOf(e.currentTarget)+1;n=null!=(a=l[r])?a:l[0];break;case"ArrowLeft":var i,o=l.indexOf(e.currentTarget)-1;n=null!=(i=l[o])?i:l[l.length-1]}null==(t=n)||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:s.map((function(e){var t=e.value,n=e.label,i=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},i,{className:(0,r.Z)("tabs__item",b.tabItem,null==i?void 0:i.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function j(e){var t=e.lazy,n=e.children,i=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var s=o.find((function(e){return e.props.value===i}));return s?(0,a.cloneElement)(s,{className:(0,r.Z)("margin-top--md",s.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==i})}))})}function w(e){var t=m(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(x,Object.assign({},t,e)),(0,v.jsx)(j,Object.assign({},t,e))]})}function y(e){var t=(0,g.Z)();return(0,v.jsx)(w,Object.assign({},e,{children:d(e.children)}),String(t))}},71183:(e,t,n)=>{n.d(t,{O2:()=>p,Ey:()=>g,SQ:()=>m});var a=n(67294),r=n(74866),i=n(85162),o=n(74165),s=n(15861),l=n(1841),c=n.n(l),u=n(85893);function d(){return(d=(0,s.Z)((0,o.Z)().mark((function e(t,n,a){var r,i,s,l;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((i=localStorage.getItem(t+"-until"))&&i>Date.now())){e.next=5;break}r=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:r=e.sent,localStorage.setItem(t,r),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return s=r.split("\n"),n=n?Number(n)-1:0,a=a?Number(a):s.length,s=s.slice(n,a),l=s.reduce((function(e,t){if(0===t.length)return e;var n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0),e.abrupt("return",s.map((function(e){return e.slice(l)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var t=e.url,n=e.start,r=e.end,i=e.language,o=e.fname,s=e.metastring,l=(0,a.useState)("Loading..."),h=l[0],f=l[1];return(0,a.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),n=t[0],a=(t[1],new URL(n).pathname.split("/").slice(1)),r=a[0],i=a[1];return a[2],"https://raw.githubusercontent.com/"+r+"/"+i+"/"+a[3]+"/"+a.slice(4).join("/")}(t),a=function(e,t,n){return d.apply(this,arguments)}(e,n,r);a.then((function(e){return f(e)}))})),(0,u.jsxs)("div",{fname:o,children:[(0,u.jsx)(c(),{language:i,metastring:s+" showLineNumbers",children:h}),(0,u.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,u.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var f={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function p(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,u.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,u.jsx)(i.Z,{value:e.props.value,label:f[e.props.value],children:e})}))})}function m(e){var t=e.children,n=e.language,a=e.showSingleFName;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,a=(n.children,n.url),r=n.start,i=n.end,o=n.fname;if(e.type===g)return g({url:a,start:r,end:i,language:t,fname:o});return e}(e,n)})),1!=t.length||a?(0,u.jsx)(r.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,u.jsx)(i.Z,{value:t,label:e.props.fname,children:e})}))}):(0,u.jsx)(i.Z,{value:0,label:t[0].props.fname,children:t[0]})}function g(e){var t=e.url,n=e.start,a=e.end,r=e.language,i=e.fname,o=e.metastring;return h({url:t,start:n,end:a,language:r,fname:i,metastring:o})}}}]);