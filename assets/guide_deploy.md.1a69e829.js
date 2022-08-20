import{_ as e,c as s,o as a,a as t}from"./app.51e70bf9.js";const g=JSON.parse('{"title":"Build & Deploy","description":"","frontmatter":{},"headers":[{"level":2,"title":"Build","slug":"build"},{"level":3,"title":"Chunking Strategy","slug":"chunking-strategy"},{"level":3,"title":"Browser Compatibility","slug":"browser-compatibility"},{"level":2,"title":"Deploy","slug":"deploy"},{"level":3,"title":"GitHub Actions","slug":"github-actions"},{"level":3,"title":"Netlify","slug":"netlify"}],"relativePath":"guide/deploy.md","lastUpdated":1660998080000}'),n={name:"guide/deploy.md"},o=t(`<h1 id="build-deploy" tabindex="-1">Build &amp; Deploy <a class="header-anchor" href="#build-deploy" aria-hidden="true">#</a></h1><h2 id="build" tabindex="-1">Build <a class="header-anchor" href="#build" aria-hidden="true">#</a></h2><p>When projects are completed, you can build your application with the following command:</p><div class="language-sh"><button class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#A6ACCD;">pnpm build</span></span>
<span class="line"></span></code></pre></div><h3 id="chunking-strategy" tabindex="-1">Chunking Strategy <a class="header-anchor" href="#chunking-strategy" aria-hidden="true">#</a></h3><p>By default, we include the official <a href="https://vitejs.dev/guide/build.html#chunking-strategy" target="_blank" rel="noreferrer"><code>splitVendorChunkPlugin</code></a> to divide the chunks into <code>index</code> and <code>vendor</code>. However, it may not be a good solution for every Vite target use case. You can remove this plugin or customize the strategy according to your own case.</p><h3 id="browser-compatibility" tabindex="-1">Browser Compatibility <a class="header-anchor" href="#browser-compatibility" aria-hidden="true">#</a></h3><p>Browser compatibility consists of transpilation and polyfill. By specifying custom targets via the <a href="https://vitejs.dev/config/build-options.html#build-target" target="_blank" rel="noreferrer"><code>build.target</code> config options</a>, where the lowest target is <code>es2015</code>, Vite can handle the transpilation and transform syntax to what can be understand by the target browsers.</p><p>For polyfills, there are two solutions. Vite recommend <a href="https://polyfill.io/v3/" target="_blank" rel="noreferrer">Polyfill.io</a> which is a service that automatically generates polyfill bundles based on the user&#39;s browser UserAgent string. However, it may not be a good solution if you are building product for instituts or governments which do not have access to internet, which is common for admin projects.</p><p>In Vitify Admin, we support legacy browsers via <a href="https://github.com/vitejs/vite/tree/main/packages/plugin-legacy" target="_blank" rel="noreferrer"><code>@vitejs/plugin-legacy</code></a>, which will automatically generate legacy chunks and corresponding ES language feature polyfills. The legacy chunks are conditionally loaded only in browsers that do not have native ESM support.</p><p>Note that there are several issues with <code>@vitejs/plugin-legacy</code>, it doesn&#39;t read your <code>browserslist</code> config to decide the browsers to support, which is a long-lived bug <a href="https://github.com/vitejs/vite/issues/2476" target="_blank" rel="noreferrer">#2476</a>. You need to manually set <code>target</code> in config of this plugin. Secondly, <code>modernpolyfills</code> always targets to all browsers supporting ESM, no matter what <code>targets</code> in plugin config are set <a href="https://github.com/vitejs/vite/issues/6922" target="_blank" rel="noreferrer">#6922</a> . Thirdly, <code>@vitejs/plugin-legacy</code> always generates modern bundles. There is no way to make it only output the legacy bundles that support all target browsers (loaded via plain <code>&lt;script&gt;</code>s) <a href="https://github.com/vitejs/vite/issues/9050" target="_blank" rel="noreferrer">#9050</a>.</p><h4 id="check-whether-browser-is-supported-on-client-side" tabindex="-1">Check Whether Browser is Supported on Client Side <a class="header-anchor" href="#check-whether-browser-is-supported-on-client-side" aria-hidden="true">#</a></h4><p>Sometimes we want to test if the user&#39;s browser is supported by our application and give a warning if not. <a href="https://github.com/kingyue737/vite-plugin-browselist-useragent/" target="_blank" rel="noreferrer"><code>vite-plugin-browserslist-useragent</code></a> can find if a given user agent match your browselist query. You can remove this plugin if you don&#39;t need check browser client.</p><h2 id="deploy" tabindex="-1">Deploy <a class="header-anchor" href="#deploy" aria-hidden="true">#</a></h2><h3 id="github-actions" tabindex="-1">GitHub Actions <a class="header-anchor" href="#github-actions" aria-hidden="true">#</a></h3><p>Vitify Admin has already setuped <a href="https://github.com/features/actions" target="_blank" rel="noreferrer">GitHub Actions</a> for type checking, linting, unit testing and E2E testing in .</p><p>Once you push code to <code>main</code> branch or any pull request is created for <code>main</code> branch, GitHub will automate the workflows for you.</p><h4 id="cypress-dashboard" tabindex="-1">Cypress Dashboard <a class="header-anchor" href="#cypress-dashboard" aria-hidden="true">#</a></h4><p>The <a href="https://dashboard.cypress.io/" target="_blank" rel="noreferrer">Cypress Dashboard</a> Service is an optional web-based companion to the Cypress app. It provides timely, simple and powerful insights on all your tests run at a glance.</p><p>Go to Cypress Dashboard, create a new project and add its <code>projectId</code> as <code>\${CYPRESS_PROJECT_ID}</code>, its <code>record key</code> as <code>$CYPRESS_RECORD_KEY</code> in your repositry secrets (<a href="https://github.com/your-name/project-name/settings/secrets/actions" target="_blank" rel="noreferrer">https://github.com/your-name/project-name/settings/secrets/actions</a>).</p><p>If you don&#39;t want to use Cypress Dashboard, remove <code>record: true</code> and the entire <code>env</code> block from <a href="https://github.com/kingyue737/vitify-admin/blob/main/.github/workflows/ci.yml" target="_blank" rel="noreferrer"><code>.github/workflows/ci.yml</code></a>:</p><div class="language-yaml"><button class="copy"></button><span class="lang">yaml</span><pre><code><span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Cypress</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cypress-io/github-action@v4</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">with</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">install-command</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">echo</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">build</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pnpm run build</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">start</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pnpm run preview</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">record</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">command-prefix</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">--</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">env</span><span style="color:#89DDFF;">:</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># pass the Dashboard record key as an environment variable</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">CYPRESS_RECORD_KEY</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\${{ secrets.CYPRESS_RECORD_KEY }}</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># pass GitHub token to allow accurately detecting a build vs a re-run build</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">GITHUB_TOKEN</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\${{ secrets.GITHUB_TOKEN }}</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># pass the project ID from the secrets through environment variable</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">CYPRESS_PROJECT_ID</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\${{ secrets.CYPRESS_PROJECT_ID }}</span></span>
<span class="line"></span></code></pre></div><p>GitHub actions will still run E2E testing for you, but you can no longer watch the video and screenshots of tests.</p><h3 id="netlify" tabindex="-1">Netlify <a class="header-anchor" href="#netlify" aria-hidden="true">#</a></h3><p>The <a href="https://vitify-admin.netlify.app" target="_blank" rel="noreferrer">online demo</a> of Vitify Admin is deployed by Netlify. All you need to deploy your own app online is to go to <a href="https://app.netlify.com/start" target="_blank" rel="noreferrer">Netlify</a> and select your clone, <code>OK</code> along the way, and your app will be live in a minute. Deploy config <a href="./"><code>netlify.toml</code></a> has already been included in this template.</p>`,25),r=[o];function l(i,p,c,d,h,y){return a(),s("div",null,r)}const b=e(n,[["render",l]]);export{g as __pageData,b as default};
