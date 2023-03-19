import{_ as s,c as n,o as a,a as p}from"./app.df1da66b.js";const u=JSON.parse('{"title":"TypeScript","description":"","frontmatter":{},"headers":[{"level":2,"title":"Manually Define Component Types","slug":"manually-define-component-types","link":"#manually-define-component-types","children":[]},{"level":2,"title":"Vuetify Component Types","slug":"vuetify-component-types","link":"#vuetify-component-types","children":[]},{"level":2,"title":"Project Reference","slug":"project-reference","link":"#project-reference","children":[]}],"relativePath":"guide/typescript.md","lastUpdated":1679202538000}'),o={name:"guide/typescript.md"},l=p(`<h1 id="typescript" tabindex="-1">TypeScript <a class="header-anchor" href="#typescript" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Recommend to familiarize yourself with <a href="https://vuejs.org/guide/typescript/overview.html#configuring-tsconfig-json" target="_blank" rel="noreferrer">Using Vue with TypeScript</a> before reading this section.</p></div><p>A type system like TypeScript can detect many common errors via static analysis at build time. This reduces the chance of runtime errors in production, and also allows us to more confidently refactor code in large-scale applications. Vitify Admin comes with full TypeScript support. All application code, testing code and configuration are written in TypeScript except <code>eslintrc</code> which does not support TypeScript and <code>public/mockServiceWorker.js</code> which is a worker file auto generated by Mock Service Worker. Third-party components without component type definition like <a href="https://portal-vue.linusb.org/" target="_blank" rel="noreferrer">PortalVue</a> and Vuetify 2 have already been shimed in this template.</p><h2 id="manually-define-component-types" tabindex="-1">Manually Define Component Types <a class="header-anchor" href="#manually-define-component-types" aria-hidden="true">#</a></h2><p>Vitify Admin is a Vue 2 template. As Vue 2 is poor in TypeScript support before Vue 2.7, almost all Vue 2 components have no type support. Now with the power of Volar, we can profit type check and type-based auto-completion in SFC template. Here is how to define component props and slots manually to get intellisense in IDE:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">type</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">DefineComponent</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">VNode</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">@vue/runtime-dom</span><span style="color:#C98A7DAA;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">declare</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">module</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">@vue/runtime-dom</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">interface</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA9A7;">GlobalComponents</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#BD976A;">MyComponent</span><span style="color:#666666;">: </span><span style="color:#5DA9A7;">DefineComponent</span><span style="color:#666666;">&lt;</span></span>
<span class="line"><span style="color:#666666;">      </span><span style="color:#5DA9A7;">Props</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#666666;">      {</span></span>
<span class="line"><span style="color:#666666;">        </span><span style="color:#BD976A;">$scopedSlots</span><span style="color:#666666;">: {</span></span>
<span class="line"><span style="color:#666666;">          </span><span style="color:#BD976A;">slotName</span><span style="color:#666666;">: ({</span><span style="color:#BD976A;">args</span><span style="color:#666666;">: {</span><span style="color:#BD976A;">propName</span><span style="color:#666666;">: </span><span style="color:#5DA9A7;">propType</span><span style="color:#666666;">}}) =&gt; </span><span style="color:#5DA9A7;">VNode</span><span style="color:#666666;">[]</span></span>
<span class="line"><span style="color:#666666;">        }</span></span>
<span class="line"><span style="color:#666666;">      },</span></span>
<span class="line"><span style="color:#666666;">    &gt;</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#758575DD;">// or</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#BD976A;">MyComponent</span><span style="color:#666666;">: </span><span style="color:#5DA9A7;">DefineComponent</span><span style="color:#666666;">&lt;</span></span>
<span class="line"><span style="color:#666666;">      </span><span style="color:#5DA9A7;">Props</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#666666;">    &gt; &amp; </span><span style="color:#4D9375;">new</span><span style="color:#666666;"> () =&gt; {</span></span>
<span class="line"><span style="color:#666666;">      </span><span style="color:#BD976A;">$scopedSlots</span><span style="color:#666666;">: {</span></span>
<span class="line"><span style="color:#666666;">        </span><span style="color:#80A665;">slotName</span><span style="color:#666666;">: (</span><span style="color:#BD976A;">_</span><span style="color:#666666;">: { </span><span style="color:#BD976A;">propName</span><span style="color:#666666;">: </span><span style="color:#5DA9A7;">any</span><span style="color:#666666;"> }) =&gt; </span><span style="color:#5DA9A7;">VNode</span><span style="color:#666666;">[]</span></span>
<span class="line"><span style="color:#666666;">      }</span></span>
<span class="line"><span style="color:#666666;">    }</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">type</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">DefineComponent</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">VNode</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">@vue/runtime-dom</span><span style="color:#B56959AA;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">declare</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">module</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">@vue/runtime-dom</span><span style="color:#B56959AA;">&#39;</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">interface</span><span style="color:#393A34;"> </span><span style="color:#2E808F;">GlobalComponents</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B07D48;">MyComponent</span><span style="color:#999999;">: </span><span style="color:#2E808F;">DefineComponent</span><span style="color:#999999;">&lt;</span></span>
<span class="line"><span style="color:#999999;">      </span><span style="color:#2E808F;">Props</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">      {</span></span>
<span class="line"><span style="color:#999999;">        </span><span style="color:#B07D48;">$scopedSlots</span><span style="color:#999999;">: {</span></span>
<span class="line"><span style="color:#999999;">          </span><span style="color:#B07D48;">slotName</span><span style="color:#999999;">: ({</span><span style="color:#B07D48;">args</span><span style="color:#999999;">: {</span><span style="color:#B07D48;">propName</span><span style="color:#999999;">: </span><span style="color:#2E808F;">propType</span><span style="color:#999999;">}}) =&gt; </span><span style="color:#2E808F;">VNode</span><span style="color:#999999;">[]</span></span>
<span class="line"><span style="color:#999999;">        }</span></span>
<span class="line"><span style="color:#999999;">      },</span></span>
<span class="line"><span style="color:#999999;">    &gt;</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#A0ADA0;">// or</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B07D48;">MyComponent</span><span style="color:#999999;">: </span><span style="color:#2E808F;">DefineComponent</span><span style="color:#999999;">&lt;</span></span>
<span class="line"><span style="color:#999999;">      </span><span style="color:#2E808F;">Props</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">    &gt; &amp; </span><span style="color:#1E754F;">new</span><span style="color:#999999;"> () =&gt; {</span></span>
<span class="line"><span style="color:#999999;">      </span><span style="color:#B07D48;">$scopedSlots</span><span style="color:#999999;">: {</span></span>
<span class="line"><span style="color:#999999;">        </span><span style="color:#59873A;">slotName</span><span style="color:#999999;">: (</span><span style="color:#B07D48;">_</span><span style="color:#999999;">: { </span><span style="color:#B07D48;">propName</span><span style="color:#999999;">: </span><span style="color:#2E808F;">any</span><span style="color:#999999;"> }) =&gt; </span><span style="color:#2E808F;">VNode</span><span style="color:#999999;">[]</span></span>
<span class="line"><span style="color:#999999;">      }</span></span>
<span class="line"><span style="color:#999999;">    }</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>We can also add component methods, but we rarely need type check and auto-completion of component methods in SFC template.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">type</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">DefineComponent</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">VNode</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">@vue/runtime-dom</span><span style="color:#C98A7DAA;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">declare</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">module</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">@vue/runtime-dom</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">interface</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA9A7;">GlobalComponents</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#BD976A;">MyComponent</span><span style="color:#666666;">: </span><span style="color:#5DA9A7;">DefineComponent</span><span style="color:#666666;">&lt;</span></span>
<span class="line"><span style="color:#666666;">      </span><span style="color:#5DA9A7;">Props</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#666666;">      {</span></span>
<span class="line"><span style="color:#666666;">        </span><span style="color:#BD976A;">$scopedSlots</span><span style="color:#666666;">: {</span></span>
<span class="line"><span style="color:#666666;">          </span><span style="color:#BD976A;">slotName</span><span style="color:#666666;">: ({</span><span style="color:#BD976A;">args</span><span style="color:#666666;">: {</span><span style="color:#BD976A;">propName</span><span style="color:#666666;">: </span><span style="color:#5DA9A7;">propType</span><span style="color:#666666;">}}) =&gt; </span><span style="color:#5DA9A7;">VNode</span><span style="color:#666666;">[]</span></span>
<span class="line"><span style="color:#666666;">        }</span></span>
<span class="line"><span style="color:#666666;">      },</span></span>
<span class="line"><span style="color:#666666;">      {},</span></span>
<span class="line"><span style="color:#666666;">      {},</span></span>
<span class="line"><span style="color:#666666;">      </span><span style="color:#5DA9A7;">Methods</span></span>
<span class="line"><span style="color:#666666;">    &gt;</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#758575DD;">// or</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#BD976A;">MyComponent</span><span style="color:#666666;">: </span><span style="color:#5DA9A7;">DefineComponent</span><span style="color:#666666;">&lt;</span></span>
<span class="line"><span style="color:#666666;">      </span><span style="color:#5DA9A7;">Props</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#666666;">      {},</span></span>
<span class="line"><span style="color:#666666;">      {},</span></span>
<span class="line"><span style="color:#666666;">      {},</span></span>
<span class="line"><span style="color:#666666;">      </span><span style="color:#5DA9A7;">Methods</span></span>
<span class="line"><span style="color:#666666;">    &gt; &amp; </span><span style="color:#4D9375;">new</span><span style="color:#666666;"> () =&gt; {</span></span>
<span class="line"><span style="color:#666666;">      </span><span style="color:#BD976A;">$scopedSlots</span><span style="color:#666666;">: {</span></span>
<span class="line"><span style="color:#666666;">        </span><span style="color:#80A665;">slotName</span><span style="color:#666666;">: (</span><span style="color:#BD976A;">_</span><span style="color:#666666;">: { </span><span style="color:#BD976A;">propName</span><span style="color:#666666;">: </span><span style="color:#5DA9A7;">any</span><span style="color:#666666;"> }) =&gt; </span><span style="color:#5DA9A7;">VNode</span><span style="color:#666666;">[]</span></span>
<span class="line"><span style="color:#666666;">      }</span></span>
<span class="line"><span style="color:#666666;">    }</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">type</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">DefineComponent</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">VNode</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">@vue/runtime-dom</span><span style="color:#B56959AA;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">declare</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">module</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">@vue/runtime-dom</span><span style="color:#B56959AA;">&#39;</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">interface</span><span style="color:#393A34;"> </span><span style="color:#2E808F;">GlobalComponents</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B07D48;">MyComponent</span><span style="color:#999999;">: </span><span style="color:#2E808F;">DefineComponent</span><span style="color:#999999;">&lt;</span></span>
<span class="line"><span style="color:#999999;">      </span><span style="color:#2E808F;">Props</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">      {</span></span>
<span class="line"><span style="color:#999999;">        </span><span style="color:#B07D48;">$scopedSlots</span><span style="color:#999999;">: {</span></span>
<span class="line"><span style="color:#999999;">          </span><span style="color:#B07D48;">slotName</span><span style="color:#999999;">: ({</span><span style="color:#B07D48;">args</span><span style="color:#999999;">: {</span><span style="color:#B07D48;">propName</span><span style="color:#999999;">: </span><span style="color:#2E808F;">propType</span><span style="color:#999999;">}}) =&gt; </span><span style="color:#2E808F;">VNode</span><span style="color:#999999;">[]</span></span>
<span class="line"><span style="color:#999999;">        }</span></span>
<span class="line"><span style="color:#999999;">      },</span></span>
<span class="line"><span style="color:#999999;">      {},</span></span>
<span class="line"><span style="color:#999999;">      {},</span></span>
<span class="line"><span style="color:#999999;">      </span><span style="color:#2E808F;">Methods</span></span>
<span class="line"><span style="color:#999999;">    &gt;</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#A0ADA0;">// or</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B07D48;">MyComponent</span><span style="color:#999999;">: </span><span style="color:#2E808F;">DefineComponent</span><span style="color:#999999;">&lt;</span></span>
<span class="line"><span style="color:#999999;">      </span><span style="color:#2E808F;">Props</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">      {},</span></span>
<span class="line"><span style="color:#999999;">      {},</span></span>
<span class="line"><span style="color:#999999;">      {},</span></span>
<span class="line"><span style="color:#999999;">      </span><span style="color:#2E808F;">Methods</span></span>
<span class="line"><span style="color:#999999;">    &gt; &amp; </span><span style="color:#1E754F;">new</span><span style="color:#999999;"> () =&gt; {</span></span>
<span class="line"><span style="color:#999999;">      </span><span style="color:#B07D48;">$scopedSlots</span><span style="color:#999999;">: {</span></span>
<span class="line"><span style="color:#999999;">        </span><span style="color:#59873A;">slotName</span><span style="color:#999999;">: (</span><span style="color:#B07D48;">_</span><span style="color:#999999;">: { </span><span style="color:#B07D48;">propName</span><span style="color:#999999;">: </span><span style="color:#2E808F;">any</span><span style="color:#999999;"> }) =&gt; </span><span style="color:#2E808F;">VNode</span><span style="color:#999999;">[]</span></span>
<span class="line"><span style="color:#999999;">      }</span></span>
<span class="line"><span style="color:#999999;">    }</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"></span></code></pre></div><p>Refers to <a href="https://github.com/kingyue737/vitify-admin/blob/main/src/components.d.ts" target="_blank" rel="noreferrer"><code>components.d.ts</code></a> and <a href="https://github.com/kingyue737/vitify-admin/blob/main/src/vuetify2.d.ts" target="_blank" rel="noreferrer"><code>vuetify2.d.ts</code></a> for detailed examples.</p><h2 id="vuetify-component-types" tabindex="-1">Vuetify Component Types <a class="header-anchor" href="#vuetify-component-types" aria-hidden="true">#</a></h2><p>One of the main feature of this template is Vuetify 2 component types. As Vuetify 2 <a href="https://github.com/vuetifyjs/vuetify/issues/14798" target="_blank" rel="noreferrer">does not support Volar officially</a> and types of all components are just <code>VueConstructor</code> without any further details, I tried generating component type definition from <code>web-types</code> of Vuetify 2 which is used to build documentations. It works like a charm. We now have type check for props and slots in Vuetify 2 components in template block of SFC. Types for Vuetify all over the place!</p><p>The <a href="https://github.com/kingyue737/vitify-admin/blob/main/scripts/vuetify-type.mjs" target="_blank" rel="noreferrer">script</a> used to generate Vuetify components type is located in <code>scripts</code> folder. It is added in <code>package.json</code>. You can run it to get the latest types once the <code>web-types</code> of Vuetify 2 is updated.</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#758575DD;">// package.json</span></span>
<span class="line"><span style="color:#C98A7DAA;">&quot;</span><span style="color:#C98A7D;">scripts</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#DBD7CAEE;">: </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#758575DD;">/* ... */</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#B8A965;">type:vuetify</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#C98A7D;">node ./scripts/vuetify-type.mjs &gt; ./src/vuetify2.d.ts</span><span style="color:#C98A7DAA;">&quot;</span></span>
<span class="line"><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;">,</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">// package.json</span></span>
<span class="line"><span style="color:#B56959AA;">&quot;</span><span style="color:#B56959;">scripts</span><span style="color:#B56959AA;">&quot;</span><span style="color:#393A34;">: </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#A0ADA0;">/* ... */</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B56959AA;">&quot;</span><span style="color:#998418;">type:vuetify</span><span style="color:#B56959AA;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&quot;</span><span style="color:#B56959;">node ./scripts/vuetify-type.mjs &gt; ./src/vuetify2.d.ts</span><span style="color:#B56959AA;">&quot;</span></span>
<span class="line"><span style="color:#999999;">}</span><span style="color:#393A34;">,</span></span>
<span class="line"></span></code></pre></div><h2 id="project-reference" tabindex="-1">Project Reference <a class="header-anchor" href="#project-reference" aria-hidden="true">#</a></h2><p>In Vitify Admin, we use <a href="https://www.typescriptlang.org/docs/handbook/project-references.html" target="_blank" rel="noreferrer">Project References</a> to ensure correct types for code running in different environments. For example, app code and test code should have different global variables. While Vitest spec files are run in Node.js where we need <code>@types/node</code>, app code run in browsers should not include types of node. Project References also prevent developers from accidentally importing app source file into <code>vite.config.ts</code> which results into server restart instead of HMR once the source file is changed.</p><p>We can use the <a href="https://github.com/johnsoncodehk/volar/tree/master/packages/vue-tsc" target="_blank" rel="noreferrer"><code>vue-tsc</code></a> utility for command line type checking. Here we have already set the command for checking type of app code by specifying the particular <code>tsconfig</code> file.</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#758575DD;">// package.json</span></span>
<span class="line"><span style="color:#C98A7DAA;">&quot;</span><span style="color:#C98A7D;">scripts</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#DBD7CAEE;">: </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#758575DD;">/* ... */</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#B8A965;">typecheck</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#C98A7D;">vue-tsc --noEmit -p tsconfig.app.json --composite false</span><span style="color:#C98A7DAA;">&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;">,</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">// package.json</span></span>
<span class="line"><span style="color:#B56959AA;">&quot;</span><span style="color:#B56959;">scripts</span><span style="color:#B56959AA;">&quot;</span><span style="color:#393A34;">: </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#A0ADA0;">/* ... */</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959AA;">&quot;</span><span style="color:#998418;">typecheck</span><span style="color:#B56959AA;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&quot;</span><span style="color:#B56959;">vue-tsc --noEmit -p tsconfig.app.json --composite false</span><span style="color:#B56959AA;">&quot;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">}</span><span style="color:#393A34;">,</span></span>
<span class="line"></span></code></pre></div><p>Just run</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">pnpm</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">typecheck</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">pnpm</span><span style="color:#393A34;"> </span><span style="color:#B56959;">typecheck</span></span>
<span class="line"></span></code></pre></div>`,19),e=[l];function t(c,r,y,i,A,d){return a(),n("div",null,e)}const m=s(o,[["render",t]]);export{u as __pageData,m as default};