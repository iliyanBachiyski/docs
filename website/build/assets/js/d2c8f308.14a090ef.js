"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7204],{85941:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=t(85893),r=t(11151),i=t(71183);t(74866),t(85162);const s={id:"relayer-gas-example",title:"Multichain Relayer and Gas Station example",sidebar_label:"Relayer + Gas Station"},l=void 0,c={id:"build/chain-abstraction/multichain-gas-relayer/relayer-gas-example",title:"Multichain Relayer and Gas Station example",description:"In this article you'll learn how to run end-to-end tests on the entire Multichain Relayer system.",source:"@site/../docs/2.build/1.chain-abstraction/multichain-gas-relayer/relayer-gas-example.md",sourceDirName:"2.build/1.chain-abstraction/multichain-gas-relayer",slug:"/build/chain-abstraction/multichain-gas-relayer/relayer-gas-example",permalink:"/build/chain-abstraction/multichain-gas-relayer/relayer-gas-example",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/1.chain-abstraction/multichain-gas-relayer/relayer-gas-example.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:1721939426e3,frontMatter:{id:"relayer-gas-example",title:"Multichain Relayer and Gas Station example",sidebar_label:"Relayer + Gas Station"},sidebar:"build",previous:{title:"Multichain Relayer Server",permalink:"/build/chain-abstraction/multichain-gas-relayer/multichain-server"},next:{title:"FastAuth (Email Login)",permalink:"/build/chain-abstraction/fastauth-sdk"}},o={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Integration test",id:"integration-test",level:2},{value:"Multichain Relayer server",id:"multichain-relayer-server",level:3},{value:"Gas Station Event indexer",id:"gas-station-event-indexer",level:3},{value:"Run integration test",id:"run-integration-test",level:3},{value:"Manual testing",id:"manual-testing",level:2},{value:"Test setup",id:"test-setup",level:3},{value:"Manual test steps",id:"manual-test-steps",level:3},{value:"Optional for testing purposes",id:"optional-for-testing-purposes",level:3}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["In this article you'll learn how to run end-to-end tests on the entire Multichain Relayer system.\nYou'll find two tests available: an integrated test and a manual test.\nThe ",(0,a.jsx)(n.a,{href:"#integration-test",children:"integration test"})," is the best way to check that all multichain gas relayer systems are working well together.\n",(0,a.jsx)(n.a,{href:"#manual-testing",children:"Manual testing"})," is a good way to debug issues if any individual part of the system isn't working."]}),"\n",(0,a.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,a.jsxs)(n.p,{children:["Before you start testing, set up your local environment and install the ",(0,a.jsx)(n.a,{href:"/build/chain-abstraction/multichain-gas-relayer/multichain-server",children:"Relayer server"}),", the ",(0,a.jsx)(n.a,{href:"https://github.com/near/gas-station-event-indexer",children:"Event indexer"})," and ",(0,a.jsx)(n.a,{href:"https://github.com/near/near-cli-rs",children:"NEAR CLI"}),"."]}),"\n",(0,a.jsxs)(n.admonition,{title:"Required tools",type:"info",children:[(0,a.jsx)(n.p,{children:"For this tutorial, you need to have installed:"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://python.org",children:"Python"})," >=3.10"]}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://rust-lang.org",children:"Rust"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/near/multichain-relayer-server",children:"Multichain Relayer Server"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/near/gas-station-event-indexer",children:"Gas Station Event indexer"})}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://github.com/near/near-cli-rs",children:"NEAR CLI RS"}),": Make sure to configure it with the correct network and account."]}),"\n"]})]}),"\n",(0,a.jsx)(n.h2,{id:"integration-test",children:"Integration test"}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"This test is the best way to verify that all multichain gas relayer systems are working well together."})}),"\n",(0,a.jsx)(n.p,{children:"In separate terminals, you need to run the following tools:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#multichain-relayer-server",children:"Multichain Relayer server"}),", with a valid ",(0,a.jsx)(n.code,{children:"config.toml"})," configuration file"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#gas-station-event-indexer",children:"Gas Station indexer"}),", with correct values in ",(0,a.jsx)(n.code,{children:"config.toml"})]}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#run-integration-test",children:"Python integration test script"})}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"multichain-relayer-server",children:"Multichain Relayer server"}),"\n",(0,a.jsx)(n.p,{children:"The main function of this server is interfacing with foreign chain RPCs sending both pre-signed funding transactions to cover gas and the actual pre-signed transaction once the funding is done."}),"\n",(0,a.jsxs)(n.p,{children:["To run the ",(0,a.jsx)(n.a,{href:"https://github.com/near/multichain-relayer-server",children:"Multichain Relayer Server"}),":"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Configure the Multichain Relayer by editing the ",(0,a.jsx)(n.a,{href:"https://github.com/near/multichain-relayer-server/blob/main/config.toml",children:(0,a.jsx)(n.code,{children:"config.toml"})})," file"]}),"\n",(0,a.jsxs)(n.li,{children:["Start the multichain relayer server:","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"cargo run\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Find the Multichain Relayer server source code in ",(0,a.jsx)(n.a,{href:"https://github.com/near/multichain-relayer-server",children:"this GitHub repository"}),"."]})}),"\n",(0,a.jsx)(n.h3,{id:"gas-station-event-indexer",children:"Gas Station Event indexer"}),"\n",(0,a.jsxs)(n.p,{children:["The event indexer is a Python script that picks up events emitted from the ",(0,a.jsx)(n.a,{href:"/build/chain-abstraction/multichain-gas-relayer/gas-station",children:"gas station contract"})," used for generating signed foreign chain transactions and calls the multichain relayer ",(0,a.jsx)(n.code,{children:"/send_funding_and_user_signed_txns"})," endpoint locally."]}),"\n",(0,a.jsxs)(n.p,{children:["To run the ",(0,a.jsx)(n.a,{href:"https://github.com/near/gas-station-event-indexer",children:"Gas Station indexer"}),":"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Ensure you have the ",(0,a.jsx)(n.a,{href:"#multichain-relayer-server",children:"Multichain Relayer Server"})," running on ",(0,a.jsx)(n.code,{children:"localhost:3030"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Create the virtual environment and install requirements:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"make install\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Update the ",(0,a.jsx)(n.a,{href:"https://github.com/near/gas-station-event-indexer/blob/main/config.toml",children:(0,a.jsx)(n.code,{children:"config.toml"})})," configuration file with appropriate values"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'network = "testnet"\n# gas station contract account id\ncontract_id = "canhazgas.testnet"\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Populate the ",(0,a.jsx)(n.a,{href:"https://github.com/near/gas-station-event-indexer/blob/main/.env.sample",children:"environment file"})," containing AWS credentials for reading from ",(0,a.jsx)(n.a,{href:"/build/data-infrastructure/lake-framework/near-lake",children:"Near Lake"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"cp .env.sample .env\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Run the indexer script:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"make run\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Find the Gas Station Event indexer source code in ",(0,a.jsx)(n.a,{href:"https://github.com/near/gas-station-event-indexer",children:"this GitHub repository"}),"."]})}),"\n",(0,a.jsx)(n.h3,{id:"run-integration-test",children:"Run integration test"}),"\n",(0,a.jsxs)(n.p,{children:["To run the integration test, switch to the ",(0,a.jsx)(n.code,{children:"multichain-relayer-server"})," repository folder and execute the Python script:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"python3 integration_tests/integration_test.py\n"})}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsxs)(n.p,{children:["You can use the optional ",(0,a.jsx)(n.code,{children:"--verbose"})," flag to print subprocess output:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"python3 integration_tests/integration_test.py --verbose\n"})})]}),"\n",(0,a.jsx)(n.h2,{id:"manual-testing",children:"Manual testing"}),"\n",(0,a.jsx)(n.p,{children:"This section offers instructions on how to manually perform end-to-end tests on the entire multichain relayer system including the gas station contract, indexer, and relayer server."}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"This test is a good way to debug issues if any individual part of the system isn't working."})}),"\n",(0,a.jsx)(n.h3,{id:"test-setup",children:"Test setup"}),"\n",(0,a.jsxs)(n.p,{children:["The following instructions are only need to be called once to initialize the account on the Gas Station. Make sure to replace the ",(0,a.jsx)(n.code,{children:"<account_id>"})," (string) with the account you want to initialize and ",(0,a.jsx)(n.code,{children:"<token_id>"})," (integer) with the token id of the NFT you minted in step 2:"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Registration / Storage Deposit:","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"near contract call-function as-transaction v2.nft.kagi.testnet \\\n  storage_deposit json-args {} prepaid-gas '100.0 Tgas' attached-deposit '1 NEAR' \\\n  sign-as <account_id>.testnet network-config testnet sign-with-keychain send\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Mint NFT - make sure to save the token id from the logs of this call","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"near contract call-function as-transaction v2.nft.kagi.testnet \\\n  mint json-args {} prepaid-gas '100.0 Tgas' attached-deposit '0 NEAR' \\\n  sign-as <account_id>.testnet network-config testnet sign-with-keychain send\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Approve the Gas Station for this Token","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'near contract call-function as-transaction v2.nft.kagi.testnet \\\n  ckt_approve_call json-args \'{"token_id":"<token_id>","account_id":"canhazgas.testnet","msg":""}\' \\\n  prepaid-gas \'100.0 Tgas\' attached-deposit \'0 NEAR\' \\\n  sign-as <account_id>.testnet network-config testnet sign-with-keychain send\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"manual-test-steps",children:"Manual test steps"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Get paymaster info for the chain you want to send to from the gas station contract, then optionally manually set nonces:","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"near contract call-function as-transaction canhazgas.testnet \\\n get_paymasters json-args '{\"chain_id\": \"<chain_id>\"}' \\\n prepaid-gas '100.0 Tgas' attached-deposit '0 NEAR' \\\n sign-as <account_id>.testnet network-config testnet sign-with-keychain send\n"})}),"\n","which  returns something like:","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'--- Result -------------------------\n[\n  {\n    "foreign_address": "0x98c6C99176911AD4E7fc7413eDF09956B2D7F0F8",\n    "minimum_available_balance": "99886599999948172000",\n    "nonce": 28,\n    "token_id": "1"\n  }\n]\n------------------------------------\n'})}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"You may need to manually set the nonce for the paymaster to be able to send the transaction:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"near contract call-function as-transaction canhazgas.testnet \\\n get_paymasters json-args '{\"chain_id\": \"<chain_id>\"}' \\\n prepaid-gas '100.000 Tgas' \\\n attached-deposit '0 NEAR' \\\n sign-as <account_id>.testnet \\\n network-config testnet \\\n sign-with-keychain send\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Update the transaction details of the EVM transaction you want to send in ",(0,a.jsx)(n.code,{children:"generate_eip1559_rlp_hex()"})," test in ",(0,a.jsx)(n.a,{href:"https://github.com/near/multichain-relayer-server/blob/main/tests/tests.rs",children:(0,a.jsx)(n.code,{children:"tests/tests.rs"})})," then run the script and save the RLP hex string output.","\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["If that doesn't work, try running ",(0,a.jsx)(n.a,{href:"https://github.com/near/multichain-relayer-server/blob/main/integration_tests/generate_rlp_evm_txn.py",children:(0,a.jsx)(n.code,{children:"generate_rlp_evm_txn.py"})})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsx)(n.p,{children:"Python and Rust output different hex RLP encoded transactions."}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["If you're using Rust, use ",(0,a.jsx)(n.a,{href:"https://github.com/near/multichain-relayer-server/blob/main/tests/tests.rs#L24",children:(0,a.jsx)(n.code,{children:"generate_eip1559_rlp_hex()"})}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["If you're using Python, use ",(0,a.jsx)(n.a,{href:"https://github.com/near/multichain-relayer-server/blob/main/integration_tests/generate_rlp_evm_txn.py#L7",children:(0,a.jsx)(n.code,{children:"generate_rlp_encoded_transaction(is_eip_1559=true)"})})]}),"\n"]}),(0,a.jsxs)(i.O2,{children:[(0,a.jsx)(i.SQ,{value:"Python",language:"python",children:(0,a.jsx)(i.Ey,{fname:"generate_rlp_evm_txn.py",url:"https://github.com/near/multichain-relayer-server/blob/main/integration_tests/generate_rlp_evm_txn.py",start:"7",end:"13"})}),(0,a.jsx)(i.SQ,{value:"Rust",language:"rust",children:(0,a.jsx)(i.Ey,{fname:"tests.rs",url:"https://github.com/near/multichain-relayer-server/blob/main/tests/tests.rs",start:"24",end:"38"})})]})]}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Ensure the ",(0,a.jsx)(n.a,{href:"#multichain-relayer-server",children:"Multichain Relayer server"})," is configured correctly (",(0,a.jsx)(n.code,{children:"config.toml"}),") and running:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"cargo run\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Ensure the ",(0,a.jsx)(n.a,{href:"#gas-station-event-indexer",children:"Gas Station indexer"})," is running locally with the correct values in the ",(0,a.jsx)(n.code,{children:"config.toml"})," file"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Construct the signed transaction using the ",(0,a.jsx)(n.a,{href:"https://github.com/near/near-cli-rs",children:"near-cli-rs"}),".\nThe receiver account ID should be the gas station contract.\nYou will need 2 actions if you want the gas station to cover your gas cost on the foreign chain:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"1 action to send the NEAR equivalent"}),"\n",(0,a.jsx)(n.li,{children:"1 function call to the gas station."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["You should transfer the amount of ",(0,a.jsx)(n.code,{children:"NEAR"})," that's needed to cover gas both on NEAR and on the foreign chain.\nYou also need to paste in the RLP generated hex for the EVM transaction you want on the other chain generated in step 1.\nWhen it asks you to send or display, choose send.\nFor example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'near contract call-function as-transaction canhazgas.testnet \\\n  create_transaction json-args \'{"transaction_rlp_hex":"eb80851bf08eb000825208947b965bdb7f0464843572eb2b8c17bdf27b720b14872386f26fc1000080808080","use_paymaster":true,"token_id":"<token_id>"}\' \\\n  prepaid-gas \'100.000 TeraGas\' attached-deposit \'<deposit_in_near> NEAR\' \\\n  sign-as <account_id>.testnet \\\n  network-config testnet sign-with-keychain send\n'})}),"\n",(0,a.jsx)(n.p,{children:"which returns something like:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:' --- Result -------------------------\n  {\n    "id": "29",\n    "pending_signature_count": 2\n  }\n  ------------------------------------\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Get the ",(0,a.jsx)(n.code,{children:'"id"'})," from the receipts from the result in the previous step, and use that to call ",(0,a.jsx)(n.code,{children:"sign_next"})," twice:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"near contract call-function as-transaction canhazgas.testnet \\\n  sign_next json-args '{\"id\":\"<id>\"}' \\\n  prepaid-gas '300.0 Tgas' \\\n  attached-deposit '0 NEAR' \\\n  sign-as <account_id>.testnet \\\n  network-config testnet \\\n  sign-with-keychain send\n"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note:"})," this step will be updated soon, as support for yield/resume calls is implemented on MPC contract."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Watch the output of the ",(0,a.jsx)(n.a,{href:"https://github.com/near/gas-station-event-indexer",children:"gas station event indexer"})," to see the transactions being emitted by the gas station contract."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Watch the output of the ",(0,a.jsx)(n.a,{href:"https://github.com/near/multichain-relayer-server",children:"multichain relayer server"})," to see the transactions being sent to the foreign chain."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"optional-for-testing-purposes",children:"Optional for testing purposes"}),"\n",(0,a.jsxs)(n.p,{children:["Instead of creating a signed transaction and calling the gas station contract to sign it, you can get the recently signed transactions by calling the contract while replacing the ",(0,a.jsx)(n.code,{children:"blockheight"})," with a more recent block height:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:'near contract call-function as-read-only canhazgas.testnet list_signed_transaction_sequences_after json-args \'{"block_height":"157111000"}\' network-config testnet now\n'})}),"\n",(0,a.jsxs)(n.p,{children:["This will return something like the output below. Take an individual entry in the list of JSONs and send that as the payload of a ",(0,a.jsx)(n.code,{children:"POST"})," request to the ",(0,a.jsx)(n.code,{children:"/send_funding_and_user_signed_txns"})," endpoint:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:'[\n  {\n    "created_by_account_id": "b807806adcb73f6aecb5ed98bb8bd7bbe7bbf8ed342596ab700ef6b050abc4c3",\n    "foreign_chain_id": "97",\n    "signed_transactions": [\n      "0x02f873610385174876e80085174876e80082520894c89663ac6d169bc3e2e0a99d9fe96f2e82bcc307870eebe0b40e800080c080a0712d44ba4cd7567764231e21f054c5e7d008055222820e9d5ba148ede48755f7a06e8b812d37047593fc51fce7254ea7aef89927cada729bc903cd36fa9659dce4",\n      "0x02f873618085174876e80085174876e80082520894ef55a8bdf4498ea0af88bc54efb29608bb25e130872aa1efb94e000080c080a017d7024fe9e32ad8da1181729fac7e6a45311c47bf59f2b5a8b5e9fe002c0617a04ad725b362cf12c6e066c5b0b7ecbbf08f5e4d0a240337e6ddc8076f0528e3e5"\n    ]\n  },\n...\n  {\n    "created_by_account_id": "b807806adcb73f6aecb5ed98bb8bd7bbe7bbf8ed342596ab700ef6b050abc4c3",\n    "foreign_chain_id": "97",\n    "signed_transactions": [\n      "0x02f873610185174876e80085174876e80082520894c89663ac6d169bc3e2e0a99d9fe96f2e82bcc307870eebe0b40e800080c001a0ff19fe769246de8483b986e5aeaa3360bfb74f238e2a91ea353dac9aad9e24a0a020485dcd2c64172b9bc058b7813646dafbf2f27d51aae388b074e514fdb6de05",\n      "0x02f873618085174876e80085174876e80082520894ef55a8bdf4498ea0af88bc54efb29608bb25e130872e2f6e5e14800080c001a0dac67c383e8de3211f3c5d360cc2e9a21d160711fc3f80113ac525169317e2eca07140a1d0d1528b6eaf9fac4bb1bd44c1c4f63bb956292b0211a0dad1748e2eea"\n    ]\n  }\n]\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var a=t(36905);const r={tabItem:"tabItem_Ymn6"};var i=t(85893);function s(e){var n=e.children,t=e.hidden,s=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>_});var a=t(67294),r=t(36905),i=t(12466),s=t(16550),l=t(20469),c=t(91980),o=t(67392),d=t(20812);function h(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function u(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:function(e){return h(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,o.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function g(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,i=(0,s.k6)(),l=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:r});return[(0,c._X)(l),(0,a.useCallback)((function(e){if(l){var n=new URLSearchParams(i.location.search);n.set(l,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[l,i])]}function f(e){var n,t,r,i,s=e.defaultValue,c=e.queryString,o=void 0!==c&&c,h=e.groupId,f=u(e),x=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:f})})),m=x[0],b=x[1],j=p({queryString:o,groupId:h}),v=j[0],y=j[1],_=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),t=(0,d.Nk)(n),r=t[0],i=t[1],[r,(0,a.useCallback)((function(e){n&&i.set(e)}),[n,i])]),w=_[0],k=_[1],R=function(){var e=null!=v?v:w;return g({value:e,tabValues:f})?e:null}();return(0,l.Z)((function(){R&&b(R)}),[R]),{selectedValue:m,selectValue:(0,a.useCallback)((function(e){if(!g({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),k(e)}),[y,k,f]),tabValues:f}}var x=t(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(85893);function j(e){var n=e.className,t=e.block,a=e.selectedValue,s=e.selectValue,l=e.tabValues,c=[],o=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=c.indexOf(n),r=l[t].value;r!==a&&(o(n),s(r))},h=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;t=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var i,s=c.indexOf(e.currentTarget)-1;t=null!=(i=c[s])?i:c[c.length-1]}null==(n=t)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:l.map((function(e){var n=e.value,t=e.label,i=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return c.push(e)},onKeyDown:h,onClick:d},i,{className:(0,r.Z)("tabs__item",m.tabItem,null==i?void 0:i.className,{"tabs__item--active":a===n}),children:null!=t?t:n}),n)}))})}function v(e){var n=e.lazy,t=e.children,r=e.selectedValue,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var s=i.find((function(e){return e.props.value===r}));return s?(0,a.cloneElement)(s,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})}))})}function y(e){var n=f(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",m.tabList),children:[(0,b.jsx)(j,Object.assign({},n,e)),(0,b.jsx)(v,Object.assign({},n,e))]})}function _(e){var n=(0,x.Z)();return(0,b.jsx)(y,Object.assign({},e,{children:h(e.children)}),String(n))}},71183:(e,n,t)=>{t.d(n,{O2:()=>p,Ey:()=>x,SQ:()=>f});var a=t(67294),r=t(74866),i=t(85162),s=t(74165),l=t(15861),c=t(1841),o=t.n(c),d=t(85893);function h(){return(h=(0,l.Z)((0,s.Z)().mark((function e(n,t,a){var r,i,l,c;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((i=localStorage.getItem(n+"-until"))&&i>Date.now())){e.next=5;break}r=localStorage.getItem(n),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(n);case 8:return e.next=10,e.sent.text();case 10:r=e.sent,localStorage.setItem(n,r),localStorage.setItem(n+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return l=r.split("\n"),t=t?Number(t)-1:0,a=a?Number(a):l.length,l=l.slice(t,a),c=l.reduce((function(e,n){if(0===n.length)return e;var t=n.match(/^\s+/);return t?Math.min(e,t[0].length):0}),1/0),e.abrupt("return",l.map((function(e){return e.slice(c)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const u=function(e){var n=e.url,t=e.start,r=e.end,i=e.language,s=e.fname,l=e.metastring,c=(0,a.useState)("Loading..."),u=c[0],g=c[1];return(0,a.useEffect)((function(){var e=function(e){var n=e.slice(e.indexOf("https")).split("#"),t=n[0],a=(n[1],new URL(t).pathname.split("/").slice(1)),r=a[0],i=a[1];return a[2],"https://raw.githubusercontent.com/"+r+"/"+i+"/"+a[3]+"/"+a.slice(4).join("/")}(n),a=function(e,n,t){return h.apply(this,arguments)}(e,t,r);a.then((function(e){return g(e)}))})),(0,d.jsxs)("div",{fname:s,children:[(0,d.jsx)(o(),{language:i,metastring:l+" showLineNumbers",children:u}),(0,d.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,d.jsx)("a",{href:n,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var g={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function p(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,d.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,d.jsx)(i.Z,{value:e.props.value,label:g[e.props.value],children:e})}))})}function f(e){var n=e.children,t=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var t=e.props,a=(t.children,t.url),r=t.start,i=t.end,s=t.fname;if(e.type===x)return x({url:a,start:r,end:i,language:n,fname:s});return e}(e,t)})),1==n.length?(0,d.jsx)(i.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,d.jsx)(r.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,d.jsx)(i.Z,{value:n,label:e.props.fname,children:e})}))})}function x(e){var n=e.url,t=e.start,a=e.end,r=e.language,i=e.fname,s=e.metastring;return u({url:n,start:t,end:a,language:r,fname:i,metastring:s})}}}]);