"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4010],{27372:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=t(85893),r=t(11151),s=t(77229);t(74866),t(85162);const i={id:"relayer-gas-example",title:"Multichain Relayer and Gas Station example",sidebar_label:"Relayer + Gas Station"},l=void 0,c={id:"develop/relayers/relayer-gas-example",title:"Multichain Relayer and Gas Station example",description:"In this article you'll learn how to run end-to-end tests on the entire Multichain Relayer system.",source:"@site/../docs/2.develop/relayers/relayer-gas-example.md",sourceDirName:"2.develop/relayers",slug:"/develop/relayers/relayer-gas-example",permalink:"/zh-CN/develop/relayers/relayer-gas-example",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/relayers/relayer-gas-example.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:1710956366,formattedLastUpdatedAt:"2024\u5e743\u670820\u65e5",frontMatter:{id:"relayer-gas-example",title:"Multichain Relayer and Gas Station example",sidebar_label:"Relayer + Gas Station"},sidebar:"build",previous:{title:"Multichain Gas Station",permalink:"/zh-CN/develop/relayers/gas-station"},next:{title:"What is a Contract?",permalink:"/zh-CN/develop/contracts/whatisacontract"}},o={},d=[{value:"Setup",id:"setup",level:2},{value:"Multichain Relayer server",id:"multichain-relayer-server",level:3},{value:"Gas Station Event indexer",id:"gas-station-event-indexer",level:3},{value:"Running tests",id:"running-tests",level:2},{value:"Options for testing purposes",id:"options-for-testing-purposes",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"In this article you'll learn how to run end-to-end tests on the entire Multichain Relayer system."}),"\n",(0,a.jsxs)(n.admonition,{title:"Required tools",type:"info",children:[(0,a.jsx)(n.p,{children:"For this tutorial, you'll need to have installed:"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/near/multichain-relayer-server",children:"Multichain Relayer Server"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/near/gas-station-event-indexer",children:"Gas Station Event indexer"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/near/near-cli-rs",children:"NEAR CLI RS"})}),"\n"]})]}),"\n",(0,a.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,a.jsx)(n.p,{children:"Before you start testing, set up your local environment and install the Relayer server, the Event indexer and NEAR CLI."}),"\n",(0,a.jsx)(n.h3,{id:"multichain-relayer-server",children:"Multichain Relayer server"}),"\n",(0,a.jsx)(n.p,{children:"The main function of this server is interfacing with foreign chain RPCs sending both pre-signed funding transactions to cover gas and the actual pre-signed transaction once the funding is done."}),"\n",(0,a.jsxs)(n.p,{children:["To run the ",(0,a.jsx)(n.a,{href:"https://github.com/near/multichain-relayer-server",children:"Multichain Relayer Server"}),":"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Configure the Multichain Relayer by editing the ",(0,a.jsx)(n.a,{href:"https://github.com/near/multichain-relayer-server/blob/main/config.toml",children:(0,a.jsx)(n.code,{children:"config.toml"})})," file"]}),"\n",(0,a.jsxs)(n.li,{children:["Start the multichain relayer server:","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"cargo run\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Find the Multichain Relayer server source code in ",(0,a.jsx)(n.a,{href:"https://github.com/near/multichain-relayer-server",children:"this GitHub repository"}),"."]})}),"\n",(0,a.jsx)(n.h3,{id:"gas-station-event-indexer",children:"Gas Station Event indexer"}),"\n",(0,a.jsxs)(n.p,{children:["The event indexer picks up events emitted from the ",(0,a.jsx)(n.a,{href:"gas-station.md",children:"gas station contract"})," used for generating signed foreign chain transactions and calls the multichain relayer ",(0,a.jsx)(n.code,{children:"/send_funding_and_user_signed_txns"})," endpoint locally."]}),"\n",(0,a.jsxs)(n.p,{children:["To run the ",(0,a.jsx)(n.a,{href:"https://github.com/near/gas-station-event-indexer",children:"Gas Station indexer"}),":"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Ensure you have the ",(0,a.jsx)(n.a,{href:"#multichain-relayer-server",children:"Multichain Relayer Server"})," running on ",(0,a.jsx)(n.code,{children:"localhost:3030"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Create and activate a Python virtual environment:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"pip install requirements.txt\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Update the ",(0,a.jsx)(n.a,{href:"https://github.com/near/gas-station-event-indexer/blob/main/config.toml",children:(0,a.jsx)(n.code,{children:"config.toml"})})," configuration file with appropriate values"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'network = "testnet"\n# gas station contract account id\ncontract_id = "canhazgas.testnet"\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Run the indexer:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"python3 gas-station-event-indexer.py\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Find the Gas Station Event indexer source code in ",(0,a.jsx)(n.a,{href:"https://github.com/near/gas-station-event-indexer",children:"this GitHub repository"}),"."]})}),"\n",(0,a.jsx)(n.h2,{id:"running-tests",children:"Running tests"}),"\n",(0,a.jsx)(n.p,{children:"The gas station contract supports EIP-1559 transactions."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Set the transaction details of the EVM transaction you want to send in ",(0,a.jsx)(n.a,{href:"https://github.com/near/multichain-relayer-server/blob/5b040611f2dc6c6b405b5ec00d5102e3cc27a65c/integration_tests/generate_rlp_evm_txn.py",children:(0,a.jsx)(n.code,{children:"generate_rlp_evm_txn.py"})}),", run the script, and save the RLP hex string output."]}),"\n"]}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsx)(n.p,{children:"Python and Rust output different hex RLP encoded transactions."}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["If you're using Rust, use ",(0,a.jsx)(n.a,{href:"https://github.com/near/multichain-relayer-server/blob/5b040611f2dc6c6b405b5ec00d5102e3cc27a65c/tests/tests.rs#L24",children:(0,a.jsx)(n.code,{children:"generate_eip1559_rlp_hex()"})}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["If you're using Python, use ",(0,a.jsx)(n.a,{href:"https://github.com/near/multichain-relayer-server/blob/5b040611f2dc6c6b405b5ec00d5102e3cc27a65c/integration_tests/generate_rlp_evm_txn.py#L7",children:(0,a.jsx)(n.code,{children:"generate_rlp_encoded_transaction(is_eip_1559=true)"})})]}),"\n"]})]}),"\n",(0,a.jsxs)(s.O2,{children:[(0,a.jsx)(s.SQ,{value:"Python",language:"python",children:(0,a.jsx)(s.Ey,{fname:"generate_rlp_evm_txn.py",url:"https://github.com/near/multichain-relayer-server/blob/5b040611f2dc6c6b405b5ec00d5102e3cc27a65c/integration_tests/generate_rlp_evm_txn.py",start:"7",end:"13"})}),(0,a.jsx)(s.SQ,{value:"Rust",language:"rust",children:(0,a.jsx)(s.Ey,{fname:"test.rs",url:"https://github.com/near/multichain-relayer-server/blob/5b040611f2dc6c6b405b5ec00d5102e3cc27a65c/tests/tests.rs",start:"24",end:"33"})})]}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Ensure the ",(0,a.jsx)(n.a,{href:"#multichain-relayer-server",children:"Multichain Relayer server"})," is configured correctly and running."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Ensure the ",(0,a.jsx)(n.a,{href:"#gas-station-event-indexer",children:"Gas Station indexer"})," is running locally."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Construct the signed transaction using the ",(0,a.jsx)(n.a,{href:"https://github.com/near/near-cli-rs",children:"near-cli-rs"}),".\nThe receiver account ID should be the gas station contract.\nYou will need 2 actions if you want the gas station to cover your gas cost on the foreign chain:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"1 action to send the NEAR equivalent"}),"\n",(0,a.jsx)(n.li,{children:"1 function call to the gas station."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["You should transfer the amount of ",(0,a.jsx)(n.code,{children:"NEAR"})," that's needed to cover gas both on NEAR and on the foreign chain.\nYou also need to paste in the RLP generated hex for the EVM transaction you want on the other chain generated in step 1."]}),"\n",(0,a.jsxs)(n.p,{children:["When it asks you to ",(0,a.jsx)(n.em,{children:"send"})," or ",(0,a.jsx)(n.em,{children:"display"}),", choose ",(0,a.jsx)("kbd",{children:"send"}),".\nExample below:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"near contract call-function as-transaction canhazgas.testnet create_transaction json-args '{\"transaction_rlp_hex\":\"eb80851bf08eb000825208947b965bdb7f0464843572eb2b8c17bdf27b720b14872386f26fc1000080808080\",\"use_paymaster\":true}' prepaid-gas '100.000 TeraGas' attached-deposit '0.5 NEAR' sign-as nomnomnom.testnet network-config testnet sign-with-keychain send\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Get the ",(0,a.jsx)(n.code,{children:'"id"'})," from the receipts from the call in step 4, and use that to call ",(0,a.jsx)(n.code,{children:"sign_next"})," twice:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:" near contract call-function as-transaction canhazgas.testnet sign_next json-args '{\"id\":\"16\"}' prepaid-gas '300.0 Tgas' attached-deposit '0 NEAR' sign-as nomnomnom.testnet network-config testnet sign-with-keychain send\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"options-for-testing-purposes",children:"Options for testing purposes"}),"\n",(0,a.jsxs)(n.p,{children:["Instead of creating a signed transaction and calling the gas station contract to sign it, you can get the recently signed transactions by calling the contract while replacing the ",(0,a.jsx)(n.code,{children:"blockheight"})," with a more recent block height:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:'near contract call-function as-read-only canhazgas.testnet list_signed_transaction_sequences_after json-args \'{"block_height":"157111000"}\' network-config testnet now\n'})}),"\n",(0,a.jsxs)(n.p,{children:["This will return something like the output below. Take an individual entry in the list of JSONs and send that as the payload of a ",(0,a.jsx)(n.code,{children:"POST"})," request to the ",(0,a.jsx)(n.code,{children:"/send_funding_and_user_signed_txns"})," endpoint:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:'[\n  {\n    "created_by_account_id": "b807806adcb73f6aecb5ed98bb8bd7bbe7bbf8ed342596ab700ef6b050abc4c3",\n    "foreign_chain_id": "97",\n    "signed_transactions": [\n      "0x02f873610385174876e80085174876e80082520894c89663ac6d169bc3e2e0a99d9fe96f2e82bcc307870eebe0b40e800080c080a0712d44ba4cd7567764231e21f054c5e7d008055222820e9d5ba148ede48755f7a06e8b812d37047593fc51fce7254ea7aef89927cada729bc903cd36fa9659dce4",\n      "0x02f873618085174876e80085174876e80082520894ef55a8bdf4498ea0af88bc54efb29608bb25e130872aa1efb94e000080c080a017d7024fe9e32ad8da1181729fac7e6a45311c47bf59f2b5a8b5e9fe002c0617a04ad725b362cf12c6e066c5b0b7ecbbf08f5e4d0a240337e6ddc8076f0528e3e5"\n    ]\n  },\n...\n  {\n    "created_by_account_id": "b807806adcb73f6aecb5ed98bb8bd7bbe7bbf8ed342596ab700ef6b050abc4c3",\n    "foreign_chain_id": "97",\n    "signed_transactions": [\n      "0x02f873610185174876e80085174876e80082520894c89663ac6d169bc3e2e0a99d9fe96f2e82bcc307870eebe0b40e800080c001a0ff19fe769246de8483b986e5aeaa3360bfb74f238e2a91ea353dac9aad9e24a0a020485dcd2c64172b9bc058b7813646dafbf2f27d51aae388b074e514fdb6de05",\n      "0x02f873618085174876e80085174876e80082520894ef55a8bdf4498ea0af88bc54efb29608bb25e130872e2f6e5e14800080c001a0dac67c383e8de3211f3c5d360cc2e9a21d160711fc3f80113ac525169317e2eca07140a1d0d1528b6eaf9fac4bb1bd44c1c4f63bb956292b0211a0dad1748e2eea"\n    ]\n  }\n]\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>i});t(67294);var a=t(36905);const r={tabItem:"tabItem_Ymn6"};var s=t(85893);function i(e){var n=e.children,t=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>_});var a=t(67294),r=t(36905),s=t(12466),i=t(16550),l=t(20469),c=t(91980),o=t(67392),d=t(50012);function u(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:function(e){return u(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,o.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function f(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function b(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,s=(0,i.k6)(),l=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:r});return[(0,c._X)(l),(0,a.useCallback)((function(e){if(l){var n=new URLSearchParams(s.location.search);n.set(l,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[l,s])]}function p(e){var n,t,r,s,i=e.defaultValue,c=e.queryString,o=void 0!==c&&c,u=e.groupId,p=h(e),g=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:p})})),x=g[0],m=g[1],v=b({queryString:o,groupId:u}),j=v[0],y=v[1],_=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),t=(0,d.Nk)(n),r=t[0],s=t[1],[r,(0,a.useCallback)((function(e){n&&s.set(e)}),[n,s])]),w=_[0],R=_[1],S=function(){var e=null!=j?j:w;return f({value:e,tabValues:p})?e:null}();return(0,l.Z)((function(){S&&m(S)}),[S]),{selectedValue:x,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);m(e),y(e),R(e)}),[y,R,p]),tabValues:p}}var g=t(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=t(85893);function v(e){var n=e.className,t=e.block,a=e.selectedValue,i=e.selectValue,l=e.tabValues,c=[],o=(0,s.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=c.indexOf(n),r=l[t].value;r!==a&&(o(n),i(r))},u=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;t=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var s,i=c.indexOf(e.currentTarget)-1;t=null!=(s=c[i])?s:c[c.length-1]}null==(n=t)||n.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:l.map((function(e){var n=e.value,t=e.label,s=e.attributes;return(0,m.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return c.push(e)},onKeyDown:u,onClick:d},s,{className:(0,r.Z)("tabs__item",x.tabItem,null==s?void 0:s.className,{"tabs__item--active":a===n}),children:null!=t?t:n}),n)}))})}function j(e){var n=e.lazy,t=e.children,r=e.selectedValue,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var i=s.find((function(e){return e.props.value===r}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})}))})}function y(e){var n=p(e);return(0,m.jsxs)("div",{className:(0,r.Z)("tabs-container",x.tabList),children:[(0,m.jsx)(v,Object.assign({},e,n)),(0,m.jsx)(j,Object.assign({},e,n))]})}function _(e){var n=(0,g.Z)();return(0,m.jsx)(y,Object.assign({},e,{children:u(e.children)}),String(n))}},77229:(e,n,t)=>{t.d(n,{Ey:()=>d,O2:()=>c,SQ:()=>o});t(67294);var a=t(74866),r=t(85162),s=t(95665),i=t.n(s),l=t(85893);function c(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,l.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,l.jsx)(r.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function o(e){var n=e.children,t=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var t=e.props,a=(t.children,t.url),r=t.start,s=t.end,i=t.fname;if(e.type===d)return d({url:a,start:r,end:s,language:n,fname:i});return e}(e,t)})),1==n.length?(0,l.jsx)(r.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,l.jsx)(a.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,l.jsx)(r.Z,{value:n,label:e.props.fname,children:e})}))})}function d(e){var n=e.url,t=e.start,a=e.end,r=e.language,s=e.fname,c=n+"#";return t&&a&&(c+="L"+t+"-L"+a+"#"),(0,l.jsx)(i(),{language:r,fname:s,children:c})}}}]);