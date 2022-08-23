import{_ as e,c as a,o as s,a as n}from"./app.01a2db86.js";const y=JSON.parse('{"title":"Environment Variables","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example"}],"relativePath":"guide/environment-variables.md","lastUpdated":1661228685000}'),o={name:"guide/environment-variables.md"},t=n(`<h1 id="environment-variables" tabindex="-1">Environment Variables <a class="header-anchor" href="#environment-variables" aria-hidden="true">#</a></h1><p>Vite exposes env variables on the special <code>i<wbr>mport.meta.env</code> object. During production, these env variables are statically replaced. Refer to the <a href="https://vitejs.dev/guide/env-and-mode.html#env-variables" target="_blank" rel="noreferrer">documentations</a> for more details.</p><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>To prevent accidentally leaking env variables to the client, only variables prefixed with <code>VITE_</code> are exposed to your Vite-processed code.</p></div><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2><p>In this template, we have already defined two environment variables:</p><ul><li><code>VITE_MOCK</code> controls the switch of <a href="./mock">API mocking</a>, a truthy value will turn on the mock worker.</li><li><code>VITE_API_URL</code> set url of backend server, default is <code>\${window.location.protocol}//\${window.location.hostname}:9529/api/v1</code></li></ul><p>If you want to add new environment variables, you can get their types and intellisense by adding them in <code>env.d.ts</code>:</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#676E95;">// env.d.ts</span></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ImportMetaEnv</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">readonly</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">VITE_API_URL</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">readonly</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">VITE_MOCK</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">/* add more environment variables here */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,8),l=[t];function r(p,i,c,d,v,m){return s(),a("div",null,l)}const _=e(o,[["render",r]]);export{y as __pageData,_ as default};