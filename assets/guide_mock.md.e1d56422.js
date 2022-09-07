import{_ as e,c as n,o,a as s}from"./app.3de0d48f.js";const y=JSON.parse('{"title":"API mocking","description":"","frontmatter":{},"headers":[{"level":2,"title":"Mock Service Worker","slug":"mock-service-worker","link":"#mock-service-worker","children":[{"level":3,"title":"Auto Tree-shaking mock service in production","slug":"auto-tree-shaking-mock-service-in-production","link":"#auto-tree-shaking-mock-service-in-production","children":[]},{"level":3,"title":"Unit Testing","slug":"unit-testing","link":"#unit-testing","children":[]}]}],"relativePath":"guide/mock.md","lastUpdated":1662542204000}'),a={name:"guide/mock.md"},t=s(`<h1 id="api-mocking" tabindex="-1">API mocking <a class="header-anchor" href="#api-mocking" aria-hidden="true">#</a></h1><p>API mocking is an integral part of the front-end development, the key link to separate the front and back-end development. By pre-agreed with the server-side interface, analog request data and even logic, can make the front-end development independent, will not be blocked by the development of the server.</p><h2 id="mock-service-worker" tabindex="-1">Mock Service Worker <a class="header-anchor" href="#mock-service-worker" aria-hidden="true">#</a></h2><p><a href="https://github.com/mswjs/msw" target="_blank" rel="noreferrer">Mock Service Worker (msw)</a> is the only library that I recommend to mock API, which brings the ability of <a href="https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API" target="_blank" rel="noreferrer">Service Worker</a> to capture requests and enables API mocking on the highest level of the network communication chain, allowing you to use it without changing any of your application code. It is the closest thing to a mocking server without having to create one.</p><h3 id="auto-tree-shaking-mock-service-in-production" tabindex="-1">Auto Tree-shaking mock service in production <a class="header-anchor" href="#auto-tree-shaking-mock-service-in-production" aria-hidden="true">#</a></h3><p>In Vitify Admin, Mock Service Worker is conditionally imported into our application&#39;s code and will be totally removed in final bundle. You don&#39;t need to change any code in application source in order to build a production bundle.</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#676E95;">// src/main.ts</span></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">import</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">meta</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">VITE_MOCK </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">import</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">meta</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DEV) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">await</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">import</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./mocks</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">worker</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">start</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    onUnhandledRequest</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bypass</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>In source code of Vitify Admin, I don&#39;t include <code>i<wbr>mport.meta.env.DEV</code> in condition check so that all the data in <a href="https://vitify-admin.netlify.app/" target="_blank" rel="noreferrer">online demo</a> come from mock worker instance. As a result, the online demo can only be viewed in browsers supporting <a href="https://caniuse.com/mdn-javascript_operators_await_top_level" target="_blank" rel="noreferrer">top level await</a>. Don&#39;t forget to add <code>i<wbr>mport.meta.env.DEV</code> in your own code to ensure no mock service in production bundle.</p></div><h3 id="unit-testing" tabindex="-1">Unit Testing <a class="header-anchor" href="#unit-testing" aria-hidden="true">#</a></h3><p>Mock Service Worker can run not only on browser side but also in Node. It is also recommended by <a href="https://vitest.dev/" target="_blank" rel="noreferrer">Vitest</a> to mock API in unit testing. Refer to the <a href="https://vitest.dev/guide/mocking.html#requests" target="_blank" rel="noreferrer">example</a> in Vitest documentation for how to mock network requests in testing environment.</p>`,10),r=[t];function l(i,c,p,d,h,m){return o(),n("div",null,r)}const u=e(a,[["render",l]]);export{y as __pageData,u as default};