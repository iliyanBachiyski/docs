"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9254],{53369:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=t(85893),s=t(11151);const a={id:"gas-station",title:"Multichain Gas Station Contract",sidebar_label:"Multichain Gas Station"},r=void 0,o={id:"develop/relayers/gas-station",title:"Multichain Gas Station Contract",description:"The multichain gas station smart contract accepts payments in NEAR tokens in exchange for gas funding on non-NEAR foreign chains. Part of the NEAR Multichain effort, it works in conjunction with the MPC recovery service to generate on-chain signatures.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/2.develop/relayers/gas-station.md",sourceDirName:"2.develop/relayers",slug:"/develop/relayers/gas-station",permalink:"/ko/develop/relayers/gas-station",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/relayers/gas-station.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665,formattedLastUpdatedAt:"2024\ub144 2\uc6d4 28\uc77c",frontMatter:{id:"gas-station",title:"Multichain Gas Station Contract",sidebar_label:"Multichain Gas Station"},sidebar:"build",previous:{title:"Multichain Relayer Server",permalink:"/ko/develop/relayers/multichain-server"},next:{title:"Relayer + Gas Station",permalink:"/ko/develop/relayers/relayer-gas-example"}},c={},l=[{value:"What is it?",id:"what-is-it",level:2},{value:"How does it work?",id:"how-does-it-work",level:2},{value:"Contract Interactions",id:"contract-interactions",level:2},{value:"Setup and Administration",id:"setup-and-administration",level:3},{value:"Usage",id:"usage",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://github.com/near/multichain-gas-station-contract",children:"multichain gas station smart contract"})," accepts payments in NEAR tokens in exchange for gas funding on non-NEAR foreign chains. Part of the NEAR Multichain effort, it works in conjunction with the ",(0,i.jsx)(n.a,{href:"https://github.com/near/mpc-recovery",children:"MPC recovery service"})," to generate on-chain signatures."]}),"\n",(0,i.jsx)(n.h2,{id:"what-is-it",children:"What is it?"}),"\n",(0,i.jsx)(n.p,{children:"This smart contract is a piece of the NEAR Multichain project, which makes NEAR Protocol an effortlessly cross-chain network. This contract accepts EVM transaction request payloads and facilitates the signing, gas funding, and relaying of the signed transactions to their destination chains. It works in conjunction with a few different services, including:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.a,{href:"https://github.com/near/mpc-recovery",children:"MPC recovery service"}),", also called the ",(0,i.jsx)(n.em,{children:'"MPC signer service"'}),", includes a network of trusted MPC signers, which hold keyshares and cooperatively sign transactions on behalf of the MPC network. It also includes an on-chain component, called the ",(0,i.jsx)(n.em,{children:'"MPC signer contract,"'})," which accepts on-chain signature requests and returns signatures computed by the MPC network."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.a,{href:"/ko/develop/relayers/multichain-server",children:"multichain relayer server"})," scans this smart contract for signed transaction payloads and emits them to foreign chain RPCs."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"how-does-it-work",children:"How does it work?"}),"\n",(0,i.jsxs)(n.p,{children:["Currently, relaying one transaction to a foreign chain requires three transactions.\nThree transactions are required because of the gas restrictions imposed by the protocol. Currently (pre-NEP-516), the MPC signing function requires a ",(0,i.jsx)(n.em,{children:"lot"})," of gas, so dividing up the signing process into three parts is required to maximize the amount of gas available to each signing call."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/near/NEPs/issues/516",children:"NEP-516 (delayed receipts / runtime triggers)"})," will reduce the required transactions to one."]})}),"\n",(0,i.jsx)(n.p,{children:"Transaction breakdown:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["The first transaction is a call to the ",(0,i.jsx)(n.code,{children:"create_transaction"})," function. This function accepts an EVM transaction request payload and a deposit amount (to pay for gas on the foreign chain) and returns an ",(0,i.jsx)(n.code,{children:"id"})," and a ",(0,i.jsx)(n.code,{children:"pending_transactions_count"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The second transaction is a call to the ",(0,i.jsx)(n.code,{children:"sign_next"})," function. This function accepts the ",(0,i.jsx)(n.code,{children:"id"})," returned in step 1 and returns a signed payload. This payload is the gas funding transaction, transferring funds from a paymaster account on the foreign chain to the user's account on the foreign chain. It must be submitted to the foreign chain before the second signed payload."]}),"\n",(0,i.jsxs)(n.li,{children:["The third transaction is another call to the ",(0,i.jsx)(n.code,{children:"sign_next"})," function, identical to the one before. This function accepts an ",(0,i.jsx)(n.code,{children:"id"})," and returns a signed payload. This payload is the signed user transaction."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Once this service and its supporting services are live, the multichain relayer server will be monitoring this gas station contract and relaying the signed transactions in the proper order as they become available, so it will not be strictly necessary for the users of this contract to ensure that the transactions are properly relayed, unless the user wishes to relay the transactions using their own RPC (e.g. to minimize latency)."}),"\n",(0,i.jsx)(n.h2,{id:"contract-interactions",children:"Contract Interactions"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["You can review the complete smart contract source code in ",(0,i.jsx)(n.a,{href:"https://github.com/near/multichain-gas-station-contract",children:"this GitHub repository"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"setup-and-administration",children:"Setup and Administration"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Initialize the contract with a call to ",(0,i.jsx)(n.code,{children:"new"}),". The ",(0,i.jsx)(n.a,{href:"https://github.com/near/near-sdk-contract-tools/blob/develop/src/owner.rs",children:"owner"})," is initialized as the predecessor of this transaction. All of the following transactions must be called by the owner."]}),"\n",(0,i.jsxs)(n.li,{children:["Refresh the MPC contract public key by calling ",(0,i.jsx)(n.code,{children:"refresh_signer_public_key"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Set up foreign chain configurations with ",(0,i.jsx)(n.code,{children:"add_foreign_chain"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Add paymasters to each foreign chain with ",(0,i.jsx)(n.code,{children:"add_paymaster"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.p,{children:"Users who wish to get transactions signed and relayed by this contract and its accompanying infrastructure should perform the following steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Construct an unsigned transaction payload for the foreign chain they wish to interact with, e.g. Ethereum."}),"\n",(0,i.jsxs)(n.li,{children:["Call ",(0,i.jsx)(n.code,{children:"create_transaction"})," on this contract, passing in that payload and activating the ",(0,i.jsx)(n.code,{children:"use_paymaster"})," toggle in the case that the user wishes to use a paymaster.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If the user uses a paymaster, he must attach a sufficient quantity of NEAR tokens to this transaction to pay for the gas + service fee."}),"\n",(0,i.jsxs)(n.li,{children:["This function call returns an ",(0,i.jsx)(n.code,{children:"id"})," and a ",(0,i.jsx)(n.code,{children:"pending_transactions_count"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Call ",(0,i.jsx)(n.code,{children:"sign_next"}),", passing in the id value obtained in the previous step. This transaction should be executed with the maximum allowable quantity of gas (i.e. 300 TGas).","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This transaction will return a signed payload, part of the sequence of transactions necessary to send the user's transaction to the foreign chain."}),"\n",(0,i.jsxs)(n.li,{children:["Repeat ",(0,i.jsx)(n.code,{children:"pending_transactions_count"})," times."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Relay each signed payload to the foreign chain RPC in the order they were requested."}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var i=t(67294);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);