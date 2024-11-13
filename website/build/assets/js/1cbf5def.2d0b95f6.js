"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[148],{19945:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var o=a(85893),r=a(11151);const n={id:"validators",title:"Validators"},s=void 0,i={id:"concepts/basics/validators",title:"Validators",description:"The NEAR network is decentralized, meaning that multiple people collaborate in order to keep it safe. We call such people validators.",source:"@site/../docs/1.concepts/basics/validators.md",sourceDirName:"1.concepts/basics",slug:"/concepts/basics/validators",permalink:"/concepts/basics/validators",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/basics/validators.md",tags:[],version:"current",lastUpdatedBy:"walnut-the-cat",lastUpdatedAt:1731503204e3,frontMatter:{id:"validators",title:"Validators"},sidebar:"build",previous:{title:"Alternative Solutions",permalink:"/concepts/storage/storage-solutions"},next:{title:"Networks",permalink:"/concepts/basics/networks"}},l={},c=[{value:"Securing the Network",id:"securing-the-network",level:3},{value:"Validator&#39;s Economy",id:"validators-economy",level:3},{value:"Intro to Validators",id:"intro-to-validators",level:2},{value:"Block &amp; Chunk producers",id:"block--chunk-producers",level:2},{value:"Chunk Validators",id:"chunk-validators",level:2},{value:"Dedicated Validator Documentation Site",id:"dedicated-validator-documentation-site",level:2}];function d(e){const t={a:"a",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["The NEAR network is decentralized, meaning that multiple people collaborate in order to keep it safe. We call such people ",(0,o.jsx)(t.strong,{children:"validators"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"In order to make sure that all the transactions in the network are valid, i.e. that nobody is trying to steal money, the validators follow a specific consensus\nmechanism."}),"\n",(0,o.jsxs)(t.p,{children:["Currently, there are a few well-known consensus mechanisms to keep a blockchain working correctly and resistant to attacks.\nNEAR Protocol uses a version of ",(0,o.jsx)(t.strong,{children:"Proof-of-Stake"}),", particularly ",(0,o.jsx)(t.a,{href:"https://near.org/blog/thresholded-proof-of-stake/",children:"Thresholded Proof of Stake"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["In Proof-of-Stake, users show support to specific network validators by delegating NEAR tokens to them. This process is known as ",(0,o.jsx)(t.strong,{children:"staking"}),". The main idea is that, if a validator has a large amount of tokens delegated is because the community trusts them."]}),"\n",(0,o.jsx)(t.h3,{id:"securing-the-network",children:"Securing the Network"}),"\n",(0,o.jsx)(t.p,{children:"Validators have two main jobs. The first is to validate and execute transactions, aggregating them in the blocks that form the blockchain. Their second job is to oversee other validators, making sure no one produces an invalid block or creates an alternative chain (eg. with the goal of creating a double spend)."}),"\n",(0,o.jsx)(t.p,{children:'If a validator is caught misbehaving, then they get "slashed", meaning that their stake (or part of it) is burned.'}),"\n",(0,o.jsx)(t.p,{children:"In the NEAR networks, an attempt to manipulate the chain would mean taking control over the majority of the validators at once, so that the malicious activity won't be flagged. However, this would require putting a huge sum of capital at risk, since an unsuccessful attack would mean slashing your staked tokens."}),"\n",(0,o.jsx)(t.h3,{id:"validators-economy",children:"Validator's Economy"}),"\n",(0,o.jsx)(t.p,{children:"In exchange for servicing the network, validators are rewarded with a target number of NEAR every epoch. The target value is computed in such a way that, on an annualized basis, it will be 4.5% of the total supply."}),"\n",(0,o.jsx)(t.p,{children:"All transaction fees (minus the part which is allocated as the rebate for contracts) which are collected within each epoch are burned by the system. The inflationary reward is paid out to validators at the same rate regardless of the number of fees collected or burned."}),"\n",(0,o.jsx)(t.h2,{id:"intro-to-validators",children:"Intro to Validators"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://pages.near.org/papers/the-official-near-white-paper/#economics",children:"Validators"})," are responsible for producing and validating blocks and chunks, ensuring the security and integrity of the NEAR network."]}),"\n",(0,o.jsxs)(t.p,{children:["The hardware requirements for running a validator node vary depending on the staking position. Detailed specifications can be found here: ",(0,o.jsx)(t.a,{href:"https://near-nodes.io/validator/hardware-validator",children:"the hardware requirements"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["You can view the list of currently active validators on platforms like ",(0,o.jsx)(t.a,{href:"https://near-staking.com/stats",children:"NEAR-STAKING"}),". To become a validator, the minimum stake required is determined by the 300th largest staking proposal. If there are more than 300 proposals, the threshold will be set by the stake amount of the 300th proposal, as long as it exceeds the minimum threshold of 25,500 $NEAR. The current seat price to join the active validator set is updated in real-time on ",(0,o.jsx)(t.a,{href:"https://nearblocks.io/node-explorer",children:"NEAR BLOCKS"}),". Any validator node with a stake greater than the current seat price can join the set of active validators."]}),"\n",(0,o.jsxs)("blockquote",{className:"lesson",children:[(0,o.jsx)("strong",{children:"Is there a plan to support GPU compute if certain validator nodes can offer that or is it just CPU?"}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)(t.p,{children:"We don't need GPU support as we are a POS chain and we require very little compute power."}),(0,o.jsxs)(t.p,{children:["You can read more about our consensus strategy on our ",(0,o.jsx)("a",{href:"https://github.com/near/wiki/blob/master/Archive/validators/about.md",target:"_blank",rel:"noopener noreferrer",children:"Validator Quickstart"})," and ",(0,o.jsx)("a",{href:"https://github.com/near/wiki/blob/master/Archive/validators/faq.md",target:"_blank",rel:"noopener noreferrer",children:"Staking FA"}),"."]})]}),"\n",(0,o.jsx)(t.h2,{id:"block--chunk-producers",children:"Block & Chunk producers"}),"\n",(0,o.jsx)(t.p,{children:"The top 100 validators are responsible for producing and validating blocks, as well as producing chunks. Under normal circumstances, each validator is assigned to a single shard, for which it produces chunks."}),"\n",(0,o.jsx)(t.p,{children:"Block & Chunk producers are guaranteed a minimum annual reward of 4.5%. If less than 100% of the network\u2019s tokens are staked, validators have the potential to earn even higher annual rewards."}),"\n",(0,o.jsx)(t.h2,{id:"chunk-validators",children:"Chunk Validators"}),"\n",(0,o.jsx)(t.p,{children:"[Note] Block & Chunk producers also serve as chunk validators."}),"\n",(0,o.jsx)(t.p,{children:"Non-top 100 validators take on the role of chunk validators, which has lower hardware and staking requirements, making it more accessible. This role helps expand the network's validator set, increasing opportunities to earn rewards and strengthen the security of the NEAR ecosystem."}),"\n",(0,o.jsx)(t.p,{children:"Chunk validators do not track shards. Their responsibilities are focused solely on validating and endorsing chunks."}),"\n",(0,o.jsxs)(t.p,{children:["Like block and chunk producers, chunk validators are guaranteed a minimum of 4.5% annual rewards. If less than 100% of the network\u2019s tokens are staked, chunk validators may earn even higher rewards. For more details on validator economics, check out ",(0,o.jsx)(t.a,{href:"https://near.org/blog/near-protocol-economics/",children:"NEAR\u2019s Economics Explained"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"dedicated-validator-documentation-site",children:"Dedicated Validator Documentation Site"}),"\n",(0,o.jsxs)(t.p,{children:["If you'd like to further explore Validators and Nodes in general, you can visit the ",(0,o.jsx)(t.a,{href:"https://near-nodes.io/",children:"Dedicated Validator Documentation Site"}),"."]}),"\n",(0,o.jsxs)("blockquote",{className:"lesson",children:[(0,o.jsx)("strong",{children:"If a developer writes a vulnerable or malicious dApp, is a validator implicitly taking on risk?"}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)(t.p,{children:"No. We have handled the potential damages to the network on the protocol level. For example, we have a lot of limiters that constrain how much data you can pass into a function call or how much compute you can do in one function call, etc."}),(0,o.jsx)(t.p,{children:"That said, smart contract developers will need to be responsible for their own dApps, as there is no stage gate or approval process. All vulnerability can only damage the smart contract itself. Luckily, updating smart contracts is very smooth on NEAR, so vulnerabilities can be updated/patched to an account in ways that cannot be done on other blockchains."})]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>s});var o=a(67294);const r={},n=o.createContext(r);function s(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);