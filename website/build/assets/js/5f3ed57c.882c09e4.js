"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3297],{33946:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=t(85893),s=t(11151),i=t(74866),r=t(85162);const l={id:"ai-assistant",title:"AI Assistant"},o=void 0,c={id:"build/web3-apps/ai/ai-assistant",title:"AI Assistant",description:"Welcome! In this guide, you'll discover an AI chatbot that can interact with the NEAR ecosystem",source:"@site/../docs/2.build/4.web3-apps/ai/ai-assistant.md",sourceDirName:"2.build/4.web3-apps/ai",slug:"/build/web3-apps/ai/ai-assistant",permalink:"/build/web3-apps/ai/ai-assistant",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/4.web3-apps/ai/ai-assistant.md",tags:[],version:"current",lastUpdatedBy:"Guille",lastUpdatedAt:1726873664e3,frontMatter:{id:"ai-assistant",title:"AI Assistant"},sidebar:"build",previous:{title:"Authenticate NEAR Users",permalink:"/build/web3-apps/backend/"},next:{title:"What are Primitives?",permalink:"/build/primitives/what-is"}},u={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Tools",id:"tools",level:3},{value:"AI Model",id:"ai-model",level:3},{value:"Execute the Model",id:"execute-the-model",level:3},{value:"Project Setup",id:"project-setup",level:3},{value:"AI",id:"ai",level:3},{value:"Frontend",id:"frontend",level:3},{value:"Usage",id:"usage",level:2},{value:"Moving Forward",id:"moving-forward",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{Details:l}=n;return l||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Welcome! In this guide, you'll discover an AI chatbot that can interact with the NEAR ecosystem"}),"\n",(0,a.jsx)(n.p,{children:"This AI agent can:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Explore and explain what happened in a transaction when given a transaction hash"}),"\n",(0,a.jsx)(n.li,{children:"Request tokens from the testnet faucet"}),"\n",(0,a.jsx)(n.li,{children:"Mint and send a special NFT though a wallet it controls to a user"}),"\n",(0,a.jsx)(n.li,{children:"Answer general questions about the NEAR architecture (powered by realtime search results)"}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{title:"Community Project",type:"tip",children:(0,a.jsxs)(n.p,{children:["Created by our community member ",(0,a.jsx)(n.a,{href:"https://x.com/RezaRahemtola",children:"Reza"}),", this project was one of our AI track winners at the ",(0,a.jsx)(n.a,{href:"https://ethglobal.com/events/brussels",children:"ETHGlobal Brussels 2024 hackathon"})]})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsx)(n.p,{children:"Let's start by setting up the environment to run the AI assistant locally."}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(n.h3,{id:"tools",children:"Tools"}),"\n",(0,a.jsx)(n.p,{children:"Before starting, make sure you have the following tools installed:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://www.python.org/downloads/",children:"Python >= 3.12"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://nodejs.org/en",children:"NodeJS >= 20"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/ggerganov/llama.cpp",children:"llama.cpp"})}),"\n"]}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(r.Z,{value:"Mac",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:'# Install Node.js using nvm (more option in: https://nodejs.org/en/download)\ncurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash\nnvm install latest\n\n# Install python using miniconda (includes the package manager pip)\nbrew install --cask miniconda\nconda init "$(basename "${SHELL}")"\npip install poetry\n\n# Install llama.cpp\nbrew install llama.cpp\n'})})}),(0,a.jsx)(r.Z,{value:"Linux",children:(0,a.jsx)(n.p,{children:"Please help by contributing these steps for Linux!"})})]}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(n.h3,{id:"ai-model",children:"AI Model"}),"\n",(0,a.jsxs)(n.p,{children:["In this tutorial we will be using the ",(0,a.jsx)(n.a,{href:"https://huggingface.co/NousResearch/Hermes-2-Pro-Llama-3-8B-GGUF",children:"NousResearch/Hermes-2-Pro-Llama-3-8B-GGUF"})," model, which is hosted on ",(0,a.jsx)(n.a,{href:"https://huggingface.co/login",children:"Hugging Face"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"# Install the Hugging Face library\npip install huggingface_hub\n\n# Login to your Hugging Face account\nhuggingface-cli login\n\n# get the model from Hugging Face\nhuggingface-cli download NousResearch/Hermes-2-Pro-Llama-3-8B-GGUF Hermes-2-Pro-Llama-3-8B-Q4_K_M.gguf --local-dir model\n"})}),"\n",(0,a.jsx)(n.admonition,{title:"Q4_K_M Model",type:"info",children:(0,a.jsxs)(n.p,{children:["We use the small ",(0,a.jsx)(n.code,{children:"Q4_K_M"})," model to reduce the time and resources needed to run the AI agent"]})}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(n.h3,{id:"execute-the-model",children:"Execute the Model"}),"\n",(0,a.jsxs)(n.p,{children:["You should now have a folder named ",(0,a.jsx)(n.code,{children:"./model"})," with the ",(0,a.jsx)(n.a,{href:"https://huggingface.co/docs/hub/en/gguf",children:"GGUF file"})," ",(0,a.jsx)(n.code,{children:"./model/Hermes-2-Pro-Llama-3-8B-Q4_K_M.gguf"}),", lets use ",(0,a.jsx)(n.code,{children:"llama.cpp"})," to run it."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# run the model with llama.cpp\nllama-server -m ./model/Hermes-2-Pro-Llama-3-8B-Q4_K_M.gguf\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Open your browser at ",(0,a.jsx)(n.code,{children:"http://localhost:8080"}),", if you see an interface similar to this one you are ready to go \ud83d\ude80\n",(0,a.jsx)(n.img,{alt:"llama.cpp UI",src:t(8232).Z+"",width:"1296",height:"1956"})]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["You can use a different model with llama.cpp if you wish! Just make sure it supports ",(0,a.jsx)(n.a,{href:"https://docs.mistral.ai/capabilities/function_calling",children:"function calling"})]})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"project-setup",children:"Project Setup"}),"\n",(0,a.jsx)(n.p,{children:"Start by cloning the repository of the project, in which you will find the AI agent and a basic frontend to interact with it:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"git clone git@github.com:RezaRahemtola/near-ai-assistant.git\n"})}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(n.h3,{id:"ai",children:"AI"}),"\n",(0,a.jsx)(n.p,{children:"Let's configure the AI agent, first, we install all python dependencies on the project"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"cd ai/\n\n# Important: Create a virtual environment\nconda create -n ai-assistant python=3.12\nconda activate ai-assistant\n\n# Install the dependencies\npip install poetry\npoetry install\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Then you can create a ",(0,a.jsx)(n.code,{children:".env"})," file and fill it with values inspired from the ",(0,a.jsx)(n.code,{children:".env.example"})," file:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"NEAR_ACCOUNT_ID"}),": The NEAR account id (i.e. account name) of your bot"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"NEAR_ACCOUNT_PRIVATE_KEY"}),": The private key to control the account"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"NEAR_RPC_URL"}),": can also be set in case you want to use a different RPC"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Once you've done all this, you are ready to launch the code \ud83d\ude80"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"python src/main.py\n"})}),"\n",(0,a.jsxs)(l,{children:[(0,a.jsx)("summary",{children:" Optional: Google Search "}),(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"OXYLABS_USERNAME"})," and ",(0,a.jsx)(n.code,{children:"OXYLABS_PASSWORD"})," are API credential used to access an SERP API to search information on Google"]})]}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(n.h3,{id:"frontend",children:"Frontend"}),"\n",(0,a.jsx)(n.p,{children:"Now that your AI agent is ready to go, let's quickly launch a basic frontend to interact with it:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"cd front/\n# Install the dependencies\nyarn\n# Start the frontend\nyarn dev\n"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(n.p,{children:["You can now head to ",(0,a.jsx)(n.code,{children:"http://localhost:5173"}),", where you'll find an interface like this one to interact with the AI:\n",(0,a.jsx)(n.img,{alt:"img",src:t(38716).Z+"",width:"1486",height:"1188"})]}),"\n",(0,a.jsx)(n.p,{children:"Here are a few example questions you can ask it:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"What is NEAR?"}),"\n",(0,a.jsx)(n.li,{children:"What are the different transaction actions on NEAR?"}),"\n",(0,a.jsx)(n.li,{children:"Can I please have an ETHGlobal Brussels NFT sent to me at random.testnet? Thanks"}),"\n",(0,a.jsx)(n.li,{children:"I want to start using NEAR, can you send me some tokens on my testnet address random.testnet?"}),"\n",(0,a.jsxs)(n.li,{children:["I don't understand what this transaction is doing, can you help me? The transaction hash is ",(0,a.jsx)(n.code,{children:"hash"})," and it was send by someone.testnet."]}),"\n"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"moving-forward",children:"Moving Forward"}),"\n",(0,a.jsx)(n.p,{children:"That's it for the quickstart tutorial. You have now seen an open-source AI agent interacting with NEAR and controlling a wallet to make transactions."}),"\n",(0,a.jsxs)(n.p,{children:["To better understand how it works, check the ",(0,a.jsxs)(n.a,{href:"https://github.com/RezaRahemtola/near-ai-assistant/blob/main/ai/src/agent/agent.py",children:[(0,a.jsx)(n.code,{children:"agent.py"})," file"]})," and the ",(0,a.jsx)(n.a,{href:"https://huggingface.co/NousResearch/Hermes-2-Pro-Llama-3-8B#prompt-format-for-function-calling",children:"Function Calling explanation on HuggingFace"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"A lot of things could be built by leveraging this PoC, some ideas could be:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"A chatbot integrated to the explorer to summarize transactions directly in the page"}),"\n",(0,a.jsxs)(n.li,{children:["Interactive tutorials in the documentation through a chatbot","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:'"How to create an NFT?"'}),"\n",(0,a.jsx)(n.li,{children:"Multiple chats with explanations and code to complete given by the AI"}),"\n",(0,a.jsx)(n.li,{children:"In the end, the AI publish the smart contract, mint an NFT and send it to you on testnet"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"An AI trader reacting to on-chain or off-chain events to buy/sell some tokens with its wallet"}),"\n",(0,a.jsx)(n.li,{children:"The only limit is your imagination!"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Happy coding! \ud83d\ude80"})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>r});t(67294);var a=t(36905);const s={tabItem:"tabItem_Ymn6"};var i=t(85893);function r(e){var n=e.children,t=e.hidden,r=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(s.tabItem,r),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(67294),s=t(36905),i=t(12466),r=t(16550),l=t(20469),o=t(91980),c=t(67392),u=t(20812);function d(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,c.lx)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,t=void 0!==n&&n,s=e.groupId,i=(0,r.k6)(),l=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:s});return[(0,o._X)(l),(0,a.useCallback)((function(e){if(l){var n=new URLSearchParams(i.location.search);n.set(l,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[l,i])]}function g(e){var n,t,s,i,r=e.defaultValue,o=e.queryString,c=void 0!==o&&o,d=e.groupId,g=h(e),f=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var s=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:r,tabValues:g})})),x=f[0],j=f[1],b=m({queryString:c,groupId:d}),v=b[0],y=b[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,u.Nk)(n),s=t[0],i=t[1],[s,(0,a.useCallback)((function(e){n&&i.set(e)}),[n,i])]),I=w[0],A=w[1],N=function(){var e=null!=v?v:I;return p({value:e,tabValues:g})?e:null}();return(0,l.Z)((function(){N&&j(N)}),[N]),{selectedValue:x,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);j(e),y(e),A(e)}),[y,A,g]),tabValues:g}}var f=t(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(85893);function b(e){var n=e.className,t=e.block,a=e.selectedValue,r=e.selectValue,l=e.tabValues,o=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=o.indexOf(n),s=l[t].value;s!==a&&(c(n),r(s))},d=function(e){var n,t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,s=o.indexOf(e.currentTarget)+1;t=null!=(a=o[s])?a:o[0];break;case"ArrowLeft":var i,r=o.indexOf(e.currentTarget)-1;t=null!=(i=o[r])?i:o[o.length-1]}null==(n=t)||n.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:l.map((function(e){var n=e.value,t=e.label,i=e.attributes;return(0,j.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return o.push(e)},onKeyDown:d,onClick:u},i,{className:(0,s.Z)("tabs__item",x.tabItem,null==i?void 0:i.className,{"tabs__item--active":a===n}),children:null!=t?t:n}),n)}))})}function v(e){var n=e.lazy,t=e.children,i=e.selectedValue,r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var l=r.find((function(e){return e.props.value===i}));return l?(0,a.cloneElement)(l,{className:(0,s.Z)("margin-top--md",l.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})}))})}function y(e){var n=g(e);return(0,j.jsxs)("div",{className:(0,s.Z)("tabs-container",x.tabList),children:[(0,j.jsx)(b,Object.assign({},n,e)),(0,j.jsx)(v,Object.assign({},n,e))]})}function w(e){var n=(0,f.Z)();return(0,j.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(n))}},38716:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/ai-assistant-63e78c974aabf73c0c76124fc584e662.png"},8232:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/llama-cpp-c5dbf15b4696db67be1a86f571cd639e.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var a=t(67294);const s={},i=a.createContext(s);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);