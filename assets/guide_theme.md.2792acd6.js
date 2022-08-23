import{_ as s,c as a,o as n,a as l}from"./app.01a2db86.js";const p="/vitify-docs/assets/theme-settings.1ca0881d.png",h=JSON.parse('{"title":"Theme","description":"","frontmatter":{},"headers":[{"level":2,"title":"Dynamic Theme","slug":"dynamic-theme"}],"relativePath":"guide/theme.md","lastUpdated":1661230677000}'),o={name:"guide/theme.md"},e=l('<h1 id="theme" tabindex="-1">Theme <a class="header-anchor" href="#theme" aria-hidden="true">#</a></h1><p>Theme configuration of Vitify Admin is based on <a href="https://vuetifyjs.com/en/features/theme/" target="_blank" rel="noreferrer">Vuetify theme</a>, which allows you to easily change the colors of your application programmatically.</p><h2 id="dynamic-theme" tabindex="-1">Dynamic Theme <a class="header-anchor" href="#dynamic-theme" aria-hidden="true">#</a></h2><p>Vitify Admin allows users to toggle dark/light mode and change primary theme color. You can click the button with palette icon on the end of the footer to display the theme settings menu.</p><p><img src="'+p+`" alt="theme-settings"></p><p>The implementation is simple. Just change the related property of your Vuetify instance.</p><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#A6ACCD;">// src/components/layout/ButtonSettings.vue</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#A6ACCD;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useVuetify</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/composables/useVuetify</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useDark</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useToggle</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vueuse/core</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> vuetify </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useVuetify</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#676E95;">// Change primary theme color by modifying \`vuetify.theme.themes.light.primary\`</span></span>
<span class="line"><span style="color:#676E95;">// and \`vuetify.theme.themes.dark.primary\`</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> color </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">computed</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">get</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">vuetify</span><span style="color:#89DDFF;">!.</span><span style="color:#A6ACCD;">theme</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">themes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">light</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">primary</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">as</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">set</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">localStorage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setItem</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">theme-primary</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">vuetify</span><span style="color:#89DDFF;">!.</span><span style="color:#A6ACCD;">theme</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">themes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">light</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">primary</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">vuetify</span><span style="color:#89DDFF;">!.</span><span style="color:#A6ACCD;">theme</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">themes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">dark</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">primary</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Change theme by modifying \`vuetify.theme.dark\`</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> isDark </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useDark</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">onChanged</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">dark</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">vuetify</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">theme</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">dark</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dark</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> toggleDark </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useToggle</span><span style="color:#A6ACCD;">(isDark)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>Whether the default theme is dark or light depends on users&#39; system preferences. This feature is implemented by <a href="https://vueuse.org/core/usedark/" target="_blank" rel="noreferrer"><code>useDark</code></a> of <a href="https://vueuse.org/" target="_blank" rel="noreferrer">VueUse</a>.</p>`,8),t=[e];function r(c,y,D,F,A,C){return n(),a("div",null,t)}const m=s(o,[["render",r]]);export{h as __pageData,m as default};