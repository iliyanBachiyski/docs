"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3344],{29102:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"sdks-unified","metadata":{"permalink":"/vi/blog/sdks-unified","source":"@site/../blog/2024-07-28.md","title":"One place for all Smart Contracts Docs","description":"We have consolidated all our documentation in a single section, so you don\'t need to go searching around for it","date":"2024-07-28T00:00:00.000Z","tags":[{"label":"updates","permalink":"/vi/blog/tags/updates"}],"readingTime":2.695,"hasTruncateMarker":true,"authors":[{"name":"Guille","title":"Docs Maintainer","url":"https://github.com/gagdiez","imageURL":"https://github.com/gagdiez.png","key":"gagdiez"}],"frontMatter":{"title":"One place for all Smart Contracts Docs","authors":["gagdiez"],"slug":"sdks-unified","tags":["updates"]},"unlisted":false,"nextItem":{"title":"Getting Started on NEAR Using Windows","permalink":"/vi/blog/getting-started-on-windows"}},"content":"*We have consolidated all our documentation in a single section, so you don\'t need to go searching around for it*\\n\\n<p><img src=\\"/assets/images/contracts-landing-5a9c76a78e71b0e5f9a96033f1f23d23.png\\" /></p>\\n\\n\x3c!-- truncate --\x3e\\n\\nSmart contracts are small pieces of logic that can live on every NEAR account. To build a contract you use the NEAR SDKs, which comes in two flavours: Rust and JavaScript.\\n\\nUntil today, we had multiple docs explaining how to build smart contracts:\\n- `/sdk/rust` dedicated to explain how to use the Rust SDK\\n- `/sdk/js` dedicated to explain how to use the JS SDK\\n- [`/build/smart-contracts/what-is`](/build/smart-contracts/what-is) - that explains general concepts, and how to implement them using both SDKs\\n\\nToday, this is over, as all the information on how to build smart contracts is located in a single area: [`/build/smart-contracts/what-is`](/build/smart-contracts/what-is).\\n\\nMeanwhile, we have transformed the [SDK page](/tools/sdk) to be a simple landing page with links to:\\n- The [Rust SDK reference docs](https://docs.rs/near-sdk/latest/near_sdk/)\\n- The [JS SDK reference docs](https://near.github.io/near-api-js/)\\n- The [Smart Contract Section](/build/smart-contracts/what-is)\\n\\n## Why did we have 3 sections explaining the same topic?\\n\\nThe reason we had 3 different sections was that, historically, the engineers of each SDK were working on their own docs in isolation. To help mitigate this, we created a section on NEAR docs, meant to consolidate all the external documentation.\\n\\nOne day, the individual SDK pages were deleted - if I remember correctly, it was because we wanted to have fewer domains - and we had to migrate everything in a rush.\\n\\nThis left us in a very weird situation: we already had a section explaining how to build a smart contract... and now we had 3.\\n\\n## A single source of truth\\n\\nLuckily, this is now fixed! We have finally conquered the original dream of having a single section for [Smart Contracts](/build/smart-contracts/what-is), with all the information consolidated in there. \\n\\nNow, we can focus on maintaining a single section, thus making it easier to keep it updated and relevant.\\n\\n## What\'s next?\\n\\nWe are currently undergoing a process of **consolidating** all the documentation. This means that we are looking at all the sections that have overlapping information, and trying to merge them into a single place.\\n\\nThis will not only improve the quality of our docs, but also make it easier for you to find the information you need. In fact, improving search is one of the main motors of this change, since we noticed that our search tool ([Algolia](https://www.algolia.com/)) gets confused when the same concept is spread all over the place.\\n\\nMoreover, having consistent and coherent documentation will allow us to further expand our search capabilities using AI! This is something we are very excited about, as it will allow us to provide you with even more relevant information.\\n\\n## If you don\'t like this change, please let us know!\\n\\nAs always, we are more than open to feedback. If you think that this change is not good, or that we are missing something, please let us know! You can reach out to us through the blue feedback button you see at the side of the screen.\\n\\nWe are looking forward to hearing your thoughts and feedback, and hope you enjoy the content we\'ll be sharing.\\n\\nHappy coding, and see you in the next post! \ud83d\ude80"},{"id":"getting-started-on-windows","metadata":{"permalink":"/vi/blog/getting-started-on-windows","source":"@site/i18n/vi/docusaurus-plugin-content-blog/2024-06-05.md","title":"Getting Started on NEAR Using Windows","description":"In this article, we will cover how to install WSL and setup a NEAR development environment on Windows.","date":"2024-06-05T00:00:00.000Z","tags":[{"label":"windows","permalink":"/vi/blog/tags/windows"},{"label":"tutorial","permalink":"/vi/blog/tags/tutorial"},{"label":"getting-started","permalink":"/vi/blog/tags/getting-started"}],"readingTime":2.93,"hasTruncateMarker":true,"authors":[{"name":"Lyudmil","title":"DevRel","url":"https://github.com/flmel","imageURL":"https://github.com/flmel.png","key":"flmel"}],"frontMatter":{"title":"Getting Started on NEAR Using Windows","authors":["flmel"],"slug":"getting-started-on-windows","tags":["windows","tutorial","getting-started"],"hide_table_of_contents":true},"unlisted":false,"prevItem":{"title":"One place for all Smart Contracts Docs","permalink":"/vi/blog/sdks-unified"},"nextItem":{"title":"It\'s gonna be Legen... wait for it...","permalink":"/vi/blog/yield-resume"}},"content":"In this article, we will cover how to install WSL and setup a NEAR development environment on Windows.\\n\\n\x3c!-- truncate --\x3e\\n\\n### WSL\\n\\nWSL, or Windows Subsystem for Linux, is a compatibility layer for running Linux binary executables natively on Windows. It allows us to run a GNU/Linux environment directly on Windows without the overhead of a traditional virtual machine or dual-boot setup.\\n\\n#### Enable WSL from `Windows Features`\\n\\nFirst of all, make sure that WSL is enabled, for this go to:\\n`Control Panel > Programs > Turn Windows Features on or off`\\nScrolling down will reveal the option `Windows Subsystem for Linux`. Make sure it is enabled and press OK to confirm (you will be asked to reboot your computer).\\n\\n![Windows Features WSL Enabled](/docs/blog/windows-features-wsl-enabled.jpg)\\n\\n#### Start WSL and Install Ubuntu\\n\\nNow we will spend some time in either `PowerShell` or [Windows Terminal](https://apps.microsoft.com/detail/9n0dx20hk701), which is a modern terminal application that supports various command-line tools and shells.\\n\\n```\\nwsl --install --d Ubuntu\\n```\\n\\n**Read more on WSL:**\\nhttps://learn.microsoft.com/en-us/windows/wsl/install\\nhttps://learn.microsoft.com/en-us/windows/wsl/setup/environment\\nhttps://learn.microsoft.com/en-us/windows/wsl/\\n\\n### Install Required Packages\\n\\nOnce the installation is completed you will have Ubuntu installed as any other application on Windows. Open it from the start menu and you will be dropped into the [Ubuntu bash shell](https://ubuntu.com/tutorials/command-line-for-beginners#1-overview)\\n\\nEnter the following commands to install all the packages that Rust and Node might need later:\\n\\n```bash\\napt-get update\\napt-get install gcc make libudev-dev openssl pkg-config unzip -y\\n```\\n\\n:::tip Permission Denied?\\nDepending on your setup, you might need to run the commands with `sudo`. This temporarily grants your user elevated privileges to perform tasks that require higher permissions.\\n:::\\n\\n### Setup Developer Environment\\n\\nNow that we have WSL enabled and running Ubuntu, it is time to setup our developer environment. At NEAR we currently support using JS/TS and Rust to develop smart contracts, and JS/TS to develop web applications.\\n\\nBellow we will explain how to install both `Node.js` and `Rust`. If you want, you can install only one of them (e.g. if you are only planning to create a Rust contract, you don\'t need Node.js). However, we do recommend to install both so your environment is ready if you want to try something different later.\\n\\n#### Node (JS/TS)\\n\\nNode.js is a JavaScript runtime environment that executes code outside a web browser, enabling the development of server-side applications. In NEAR development, it can be used to write smart contracts in [TypeScript](https://www.typescriptlang.org/), as well as to create Web applications that interact with NEAR.\\n\\n```\\n# installs nvm (Node Version Manager)\\ncurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash\\n# download and install Node.js\\nnvm install 20\\n# verifies the right Node.js version is in the environment\\nnode -v # should print `v20.14.0`\\n# verifies the right NPM version is in the environment\\nnpm -v # should print `10.7.0`\\n```\\n\\n**Read more:**\\n[NodeJS Website](https://nodejs.org/)\\n\\n#### Rust\\n\\n[Rust](https://www.rust-lang.org/) is a programming language known for its safety and performance. It\'s used in NEAR development to write secure and efficient smart contracts.\\n\\nNext, we need to add the `wasm32-unknown-unknown` toolchain. This toolchain is required because the contracts we build will be compiled to [WASM](https://webassembly.org/) to run on the NEAR blockchain.\\n\\n```bash\\ncurl --proto \'=https\' --tlsv1.2 -sSf https://sh.rustup.rs | sh\\n# When prompted, press enter for default install options\\n. source $HOME/.cargo/env\\nrustup target add wasm32-unknown-unknown\\n```\\n\\n**Read more:**\\n[Getting Started with Rust](https://www.rust-lang.org/learn/get-started)\\n\\n### That\'s It\\n\\nAt this point, we are ready to install the relevant tooling and start building on NEAR. Head over to the [Quickstart](http://docs.near.org/build/smart-contracts/quickstart) section of the docs for more information or jump right into the [examples](https://github.com/near-examples)."},{"id":"yield-resume","metadata":{"permalink":"/vi/blog/yield-resume","source":"@site/i18n/vi/docusaurus-plugin-content-blog/2024-05-30.md","title":"It\'s gonna be Legen... wait for it...","description":"dary! Legendary! NEAR protocol is getting updated with the ability to yield and resume computations","date":"2024-05-30T00:00:00.000Z","tags":[{"label":"protocol","permalink":"/vi/blog/tags/protocol"},{"label":"updates","permalink":"/vi/blog/tags/updates"}],"readingTime":4.09,"hasTruncateMarker":true,"authors":[{"name":"Guille","title":"Docs Maintainer","url":"https://github.com/gagdiez","imageURL":"https://github.com/gagdiez.png","key":"gagdiez"}],"frontMatter":{"title":"It\'s gonna be Legen... wait for it...","authors":["gagdiez"],"slug":"yield-resume","tags":["protocol","updates"],"hide_table_of_contents":true},"unlisted":false,"prevItem":{"title":"Getting Started on NEAR Using Windows","permalink":"/vi/blog/getting-started-on-windows"},"nextItem":{"title":"Reorganizing our docs","permalink":"/vi/blog/reorganizing-docs"}},"content":"_dary! Legendary! NEAR protocol is getting updated with the ability to yield and resume computations_\\n\\n![waiting on a loop](/docs/blog/legendary.jpg)\\n\\n\x3c!-- truncate --\x3e\\n\\n## The problem of waiting\\n\\nCurrently, smart contracts have no way to wait for an external event to happen. This can be a problem when the contract relies on an external service to provide a result.\\n\\nWe encountered this issue while implementing [Chain Signatures](/concepts/abstraction/chain-signatures), which work by requiring an external service to provide a signature.\\n\\nUntil now, the only workaround has been to make the contract call itself in a loop, checking on each iteration if the result is ready. Each call delays the result by one block (~1 second), allowing the contract to wait almost a minute before running out of gas.\\n\\n![waiting on a loop](/docs/blog/contract-wait-loop.png)\\n_Until now, contracts had to wait by calling themselves until a external service replies... more often than not the contract will run out of gas waiting_\\n\\nWhile this method works, it\'s far from ideal. It wastes a lot of gas on looping and - more often than not - runs out of gas, forcing the user to retry the transaction.\\n\\n## Yield and Resume\\n\\nStarting from version `1.40` of the protocol, developers can **delay the execution** of a function until certain conditions are met (e.g. an external service provides a result).\\n\\nThis way, instead of the contract calling itself on a loop waiting, the contract can simply **yield** calling the function that gives the result. When an external response is provided, the contract will **resume** and return the result.\\n\\n![waiting on a yield](/docs/blog/contract-wait-yield.png)\\n_Contracts can now yield the execution of a function until an external service signals that the result is ready_\\n\\n### What is exactly being yielded?\\n\\nIt is important to notice that the contract is not **halting** or **blocking** its ability to execute, nor **halting in the middle of a function** to later resume it.\\n\\nIn the same way that a function can return a promise to call another contract, now a function can return a **yield** to call another function.\\n\\nIndeed, the contract is not halting, but simply **delaying the execution of a callback** until an external agent signals that it is ok to resume.\\n\\nIf the contract does not trigger a resume after 200 blocks - around 4 minutes - the yielded function will resume receiving a \\"timeout error\\" as input.\\n\\n:::warning State Changes\\n\\nThe state **can change** between the `yield` and the `resume`, since people can keep interacting with the contract.\\n\\nMoreover, since the function used to signal is public, developers must make sure to guard it properly to avoid unwanted calls. This can be done by simply checking the caller of the function.\\n:::\\n\\n### How does it change for the user?\\n\\nBetween the `yield` and `resume` the user will simply be waiting to receive the result. But, in contrast with waiting on a loop, the user will not pay GAS just for having the contract waiting!\\n\\n## How I can use yield/resume in my contract?\\n\\nWhile we have not created any official `yield/resume` example, you can refer to [Saketh Are\'s example](https://github.com/near/near-sdk-rs/pull/1133/files), who has been working on the `yield/resume` implementation.\\n\\nThe basic idea is that the SDK now exposes two functions:\\n\\n- A `yield(function_to_yield)` that returns a `yield_ID` which identifies the yield\\n- A `resume(yield_ID)` that signals which instance of `function_to_yield` can now execute\\n\\n#### Simplified Example\\n\\n```rust\\n// const DATA_ID_REGISTER: u64 = 0;\\n\\npub fn request_weather(&mut self, city: String) {\\n    let index = self.next_available_request_index;\\n    self.next_available_request_index += 1;\\n\\n    let yield_promise = env::promise_yield_create(\\n        \\"callback_return_result\\",\\n        &serde_json::to_vec(&(index,)).unwrap(),\\n        SIGN_ON_FINISH_CALL_GAS,\\n        GasWeight(0),\\n        DATA_ID_REGISTER,\\n    );\\n\\n    // Store the request, so an external service can easily fetch it\\n    // This is optional, as an indexer could simply observe it in the receipts\\n    let data_id: CryptoHash =\\n        env::read_register(DATA_ID_REGISTER).expect(\\"\\").try_into().expect(\\"\\");\\n    self.requests.insert(&index, WeatherRequest{&data_id, &city});\\n\\n    // The return will be the result of \\"callback_return_result\\" (defined below)\\n    env::promise_return(yield_promise);\\n}\\n\\n/// Called by external participants to submit a response\\npub fn respond(&mut self, data_id: String, weather: String) {\\n    let mut data_id_buf = [0u8; 32];\\n    hex::decode_to_slice(data_id, &mut data_id_buf).expect(\\"\\");\\n    let data_id = data_id_buf;\\n\\n    // check that caller is allowed to respond, weather is valid, etc.\\n    // ...\\n\\n    log!(\\"submitting response {} for data id {:?}\\", &weather, &data_id);\\n    env::promise_yield_resume(&data_id, &serde_json::to_vec(&weather).unwrap());\\n}\\n\\n/// Callback receiving the external data (or a PromiseError in case of timeout)\\npub fn callback_return_result(\\n    &mut self,\\n    request_index: u64,\\n    #[callback_result] weather: Result<String, PromiseError>,\\n) -> String {\\n    // Clean up the local state\\n    self.requests.remove(&request_index);\\n\\n    match weather {\\n        Ok(weather) => \\"weather received: \\".to_owned() + &weather,\\n        Err(_) => \\"request timed out\\".to_string(),\\n    }\\n}\\n```\\n\\n## Conclusion\\n\\nThe ability to `yield` and `resume` computations is a big step forward for the NEAR protocol, as it enables developers to create contracts that rely on external services.\\n\\nCurrently, the feature is only **available on testnet**, and we are looking for feedback on how to improve it.\\n\\nWe expect to have a more user-friendly way to use `yield` and `resume` in the future, so stay tuned!"},{"id":"reorganizing-docs","metadata":{"permalink":"/vi/blog/reorganizing-docs","source":"@site/i18n/vi/docusaurus-plugin-content-blog/2024-04-24.md","title":"Reorganizing our docs","description":"We released a mayor reorganization of our repository, so we can improve docs for everyone... including us","date":"2024-04-24T00:00:00.000Z","tags":[{"label":"docusaurus","permalink":"/vi/blog/tags/docusaurus"},{"label":"updates","permalink":"/vi/blog/tags/updates"}],"readingTime":3.34,"hasTruncateMarker":true,"authors":[{"name":"Guille","title":"Docs Maintainer","url":"https://github.com/gagdiez","imageURL":"https://github.com/gagdiez.png","key":"gagdiez"}],"frontMatter":{"title":"Reorganizing our docs","authors":["gagdiez"],"slug":"reorganizing-docs","tags":["docusaurus","updates"],"hide_table_of_contents":true},"unlisted":false,"prevItem":{"title":"It\'s gonna be Legen... wait for it...","permalink":"/vi/blog/yield-resume"},"nextItem":{"title":"We have a blog now!","permalink":"/vi/blog/we-have-a-blog"}},"content":"_We released a mayor reorganization of our repository, so we can improve docs for everyone... including us_\\n\\n<p><img src=\\"https://img.freepik.com/free-photo/ancient-books-adorn-library-carefully-arranged-with-classics-rare-gems_157027-2332.jpg\\" /></p>\\n\\n\x3c!-- truncate --\x3e\\n\\n## Organic growth\\n\\nOur documentation is the result of multiple people collaborating across the span of four very active years, and it has seen a lot of changes: [2942 commits and counting](https://github.com/near/docs/commits/master/).\\n\\nIn the beginning, our docs only needed to explain how to create [smart contracts](/build/smart-contracts/what-is), and how to [interact with them through a frontend](/build/web3-apps/quickstart). Fast forward to today, and we have more than 200 pages of documentation, covering topics such as [chain abstraction](/build/chain-abstraction/what-is), [on-chain components](/build/near-components/what-is), [data infrastructure](/build/data-infrastructure/what-is), and [primitives such as NFT, FT](/build/primitives/what-is).\\n\\nThe best thing is that new features are released every single month. However, all progress comes at a cost, and as our ecosystem grew, so did the disorganization of our documentation.\\n\\n## What link was that again?\\n\\nLet\'s briefly explain how [docusaurus](https://docusaurus.io/) (the framework we use in our docs) works so you can understand the problem.\\n\\nIn docusaurus, all the pages are written as simple markdown files. These files go inside the `./docs` folder, and can be organized in folders. Each file has a unique ID on its header that identifies it (e.g. `id: what-is`), and this ID, alongside its folder path, is used to generate the URL.\\n\\n> For example, the document [`docs/build/smart-contracts/what-is.md`](https://github.com/near/docs/blob/master/docs/2.build/2.smart-contracts/what-is.md) has the `id: what-is`, so it ends being served in the URL https://docs.near.org/build/smart-contracts/what-is.\\n\\n### The problem\\n\\nAbout a year ago, we noticed that our organic growth had left us with a very inconsistent URL structure. Basically, we had a lot of folders, and the files related to the same topic (e.g. NEAR components) would be all over the place.\\n\\nFor example, you would be in the \\"Build\\" section reading about \\"What is a NEAR Component?\\" and the URL was `/bos/tutorial/quickstart`. The next page was \\"Setup an Environment\\" located at `/bos/dev/intro`, followed by \\"Anatomy of a Component -> State\\" at `/bos/api/state`. Talk about consistency!\\n\\nOf course, we did not do this on purpose, it is just how things evolved. You might even notice that we are now talking about \\"NEAR Components\\" but the URL talks about \\"BOS\\". This is because when we started, \\"BOS\\" (Blockchain Operating System) felt like a good name, but community feedback made us know that, indeed, it was not.\\n\\n### The migration\\n\\nWe [re-organized more than 200 files](https://github.com/near/docs/pull/1890/files) to a new structure that is more consistent. This makes it easier for users to remember the URLs, improves our SEO, and makes it easier for contributors to find where to add new content. No more need to search across multiple folders trying to find the right file!\\n\\nIn the process, we updated all **internal links**, aided by our [link-checker script](https://github.com/near/docs/blob/master/website/test-links.sh) to make sure we left **no broken links**. We also added **URL redirects** in our server, so all users coming from an external site are redirected to the correct URLs.\\n\\nBesides checking broken links, we took the time to make sure all the **translations were correctly migrated**. The system Docusaurus uses (called [Crowdin](https://crowdin.com/)) is not very good at detecting changes in a file, so migrating all the translations was a huge effort in itself.\\n\\nWe could write a blog post just about migrating translations in docusaurus + crowdin... but we will spare you the pain.\\n\\n:::tip Missing URL\\nIf you come across a URL that is not working, please let us know by using the `Feedback` button on the right side of the page, or by opening an [issue in our repository](https://github.com/near/docs/issues)\\n:::\\n\\n## What\'s next\\n\\nNow that most of our documentation is in a better shape, we can focus on improving the content itself. We have a lot of ideas on how to make the docs more interactive, and we are excited to start working on them.\\n\\nStay tuned for more updates, and remember that if you have any feedback or ideas, you can always reach out to us. We are always happy to hear from you!\\n\\nSee you in the next post! \ud83d\ude80"},{"id":"we-have-a-blog","metadata":{"permalink":"/vi/blog/we-have-a-blog","source":"@site/i18n/vi/docusaurus-plugin-content-blog/2024-04-23.md","title":"We have a blog now!","description":"Check check check. Is this thing on? Hello, world!","date":"2024-04-23T00:00:00.000Z","tags":[{"label":"updates","permalink":"/vi/blog/tags/updates"}],"readingTime":2.105,"hasTruncateMarker":true,"authors":[{"name":"Guille","title":"Docs Maintainer","url":"https://github.com/gagdiez","imageURL":"https://github.com/gagdiez.png","key":"gagdiez"}],"frontMatter":{"title":"We have a blog now!","authors":["gagdiez"],"slug":"we-have-a-blog","tags":["updates"]},"unlisted":false,"prevItem":{"title":"Reorganizing our docs","permalink":"/vi/blog/reorganizing-docs"}},"content":"_Check check check. Is this thing on? Hello, world!_\\n\\n<p><img src=\\"/assets/images/protocol-b73c2a3ace3307226ee7eb2149ee432f.png\\" /></p>\\n\\n\x3c!-- truncate --\x3e\\n\\n## Hello there!\\n\\nWelcome to the new NEAR documentation blog! We\'re excited to inaugurate this new space where we can share news and updates. We know what you are thinking \u2014 why a blog? Well, it allows us to interact with you in a different way!\\n\\nWhen writing documentation, it is important for us to keep the content focused and concise. This way, when you read it, you have nothing to distract you, and you can focus on learning a new concept.\\n\\nThe problem with this is that many times, we want to share ideas, thoughts, or insights into why some things are the way they are. However, this would imply going off on a tangent and explaining why some decisions were made, which will probably add noise to the document. Most of the time, users just want a link to an example or working code. Also, people don\'t like to read long texts.\\n\\nBesides that, sometimes we just want to share what we did during the week. For example, did you notice that we fixed the nightmare that was the URL structure, or that we added new landing pages for all concepts? We want to share these things with you, but they don\'t really belong in the Docs.\\n\\n:::tip\\nYou would not believe the number of times we said during a review _\\"let\'s remove that, we are writing technical documentation, not a blog post\\"_ ... well, now we can make the blog post!\\n:::\\n\\n## What to expect\\n\\nWe will be using this space to share updates about our docs, as well as **complement them** with additional information that we think you\'ll find interesting.\\n\\nOur aim is to keep the blog updated at least once a week, but given the limited amount of time we have, we will see how that goes.\\n\\nMoreover, we want to remind you that our Docs are an open source and **collaborative project**. If you feel like you have something to share, or want to contribute to the blog, feel free to reach out. And by reaching out, we mean [opening a PR](https://github.com/near/docs/pulls)!\\n\\n## A new era for NEAR docs\\n\\nWe are super excited to start this new section and hope it helps us to connect with all of you in a better way. We are looking forward to hearing your thoughts and feedback, and hope you enjoy the content we\'ll be sharing.\\n\\nSee you in the next post! \ud83d\ude80"}]}}')}}]);