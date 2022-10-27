import{_ as s,c as n,o as a,a as l}from"./app.e73bde40.js";const u=JSON.parse('{"title":"Plugins","description":"","frontmatter":{},"headers":[],"relativePath":"guide/plugins.md","lastUpdated":1666864918000}'),p={name:"guide/plugins.md"},o=l(`<h1 id="plugins" tabindex="-1">Plugins <a class="header-anchor" href="#plugins" aria-hidden="true">#</a></h1><p>All the TypeScript source files in <code>src/plugins</code> folder will be auto imported. This is a custom user plugin system. Place a <code>.ts</code> file with the following template, it will be installed automatically.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">type</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">InstallPlugin</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">@/utils/types</span><span style="color:#C98A7DAA;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#CB7676;"> const </span><span style="color:#80A665;">install</span><span style="color:#666666;">: </span><span style="color:#5DA9A7;">InstallPlugin</span><span style="color:#666666;"> =</span><span style="color:#CB7676;"> </span><span style="color:#666666;">(</span><span style="color:#BD976A;">vue</span><span style="color:#666666;">)</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=&gt;</span><span style="color:#CB7676;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#758575DD;">// do something</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">type</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">InstallPlugin</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">@/utils/types</span><span style="color:#B56959AA;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#AB5959;"> const </span><span style="color:#59873A;">install</span><span style="color:#999999;">: </span><span style="color:#2E808F;">InstallPlugin</span><span style="color:#999999;"> =</span><span style="color:#AB5959;"> </span><span style="color:#999999;">(</span><span style="color:#B07D48;">vue</span><span style="color:#999999;">)</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#AB5959;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#A0ADA0;">// do something</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"></span></code></pre></div><p>The advantage of wrap install logic and global registeration in a function which receive a <code>Vue</code> instance, instead of directly call</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">Vue.use(Plugin)</span></span>
<span class="line"><span style="color:#dbd7caee;">// or</span></span>
<span class="line"><span style="color:#dbd7caee;">Vue.component(MyComponent)</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393a34;">Vue.use(Plugin)</span></span>
<span class="line"><span style="color:#393a34;">// or</span></span>
<span class="line"><span style="color:#393a34;">Vue.component(MyComponent)</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><p>is not only for auto importing. We can reuse them in unit/component testing setup. As in testing, we should install plugins on a <code>localVue</code> instead of global vue instance. For example, reuse the same I18n config of application code in unit testing (refer to more information in <a href="./testing.html">testing section</a>):</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">createLocalVue</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">mount</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">@vue/test-utils</span><span style="color:#C98A7DAA;">&#39;</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">Component</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">../Component.vue</span><span style="color:#C98A7DAA;">&#39;</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">install</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">as</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">installI18n</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">@/plugins/i18n</span><span style="color:#C98A7DAA;">&#39;</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">render</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">@testing-library/vue</span><span style="color:#C98A7DAA;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;">// vue-test-utils</span></span>
<span class="line"><span style="color:#CB7676;">const </span><span style="color:#BD976A;">localVue</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=</span><span style="color:#CB7676;"> </span><span style="color:#80A665;">createLocalVue</span><span style="color:#666666;">()</span></span>
<span class="line"><span style="color:#CB7676;">const </span><span style="color:#BD976A;">i18n</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=</span><span style="color:#CB7676;"> </span><span style="color:#80A665;">installI18n</span><span style="color:#666666;">(</span><span style="color:#BD976A;">localVue</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#CB7676;">const </span><span style="color:#BD976A;">mountOptions</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=</span><span style="color:#CB7676;"> </span><span style="color:#666666;">{</span><span style="color:#CB7676;"> </span><span style="color:#BD976A;">localVue</span><span style="color:#666666;">,</span><span style="color:#CB7676;"> </span><span style="color:#BD976A;">i18n</span><span style="color:#CB7676;"> </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#80A665;">mount</span><span style="color:#666666;">(</span><span style="color:#BD976A;">Component</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">mountOptions</span><span style="color:#666666;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;">// @testing-library/vue</span></span>
<span class="line"><span style="color:#80A665;">render</span><span style="color:#666666;">(</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#BD976A;">component</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">...</span><span style="color:#BD976A;">options</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">(</span><span style="color:#BD976A;">vue</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#CB7676;">const </span><span style="color:#BD976A;">i18n</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=</span><span style="color:#CB7676;"> </span><span style="color:#80A665;">installI18n</span><span style="color:#666666;">(</span><span style="color:#BD976A;">vue</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">i18n</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">)</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">createLocalVue</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">mount</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">@vue/test-utils</span><span style="color:#B56959AA;">&#39;</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">Component</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">../Component.vue</span><span style="color:#B56959AA;">&#39;</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">install</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">as</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">installI18n</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">@/plugins/i18n</span><span style="color:#B56959AA;">&#39;</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">render</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">@testing-library/vue</span><span style="color:#B56959AA;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">// vue-test-utils</span></span>
<span class="line"><span style="color:#AB5959;">const </span><span style="color:#B07D48;">localVue</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#59873A;">createLocalVue</span><span style="color:#999999;">()</span></span>
<span class="line"><span style="color:#AB5959;">const </span><span style="color:#B07D48;">i18n</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#59873A;">installI18n</span><span style="color:#999999;">(</span><span style="color:#B07D48;">localVue</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#AB5959;">const </span><span style="color:#B07D48;">mountOptions</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#999999;">{</span><span style="color:#AB5959;"> </span><span style="color:#B07D48;">localVue</span><span style="color:#999999;">,</span><span style="color:#AB5959;"> </span><span style="color:#B07D48;">i18n</span><span style="color:#AB5959;"> </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#59873A;">mount</span><span style="color:#999999;">(</span><span style="color:#B07D48;">Component</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">mountOptions</span><span style="color:#999999;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">// @testing-library/vue</span></span>
<span class="line"><span style="color:#59873A;">render</span><span style="color:#999999;">(</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">component</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#999999;">...</span><span style="color:#B07D48;">options</span><span style="color:#393A34;"> </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">(</span><span style="color:#B07D48;">vue</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#AB5959;">const </span><span style="color:#B07D48;">i18n</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#59873A;">installI18n</span><span style="color:#999999;">(</span><span style="color:#B07D48;">vue</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1E754F;">return</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">i18n</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">)</span></span>
<span class="line"></span></code></pre></div>`,7),e=[o];function t(c,r,y,i,A,D){return a(),n("div",null,e)}const E=s(p,[["render",t]]);export{u as __pageData,E as default};