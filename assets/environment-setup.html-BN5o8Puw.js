import{_ as n,c as a,d as e,o as l}from"./app-B7Si1d5O.js";const p={};function i(t,s){return l(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="environment" tabindex="-1"><a class="header-anchor" href="#environment"><span>Environment</span></a></h1><p>Spacialist is highly customizable and being built on top of Laravel, a lot of adjustments can be made using the <code>.env</code> file this document should be a resource on what variables are available or also required, for the software to work properly. Most of this can also be found in the <code>install.md</code> file.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token assign-left variable">APP_NAME</span><span class="token operator">=</span><span class="token operator">&lt;</span>string*<span class="token operator">&gt;</span></span>
<span class="line"><span class="token comment"># Specifies the app name to distinguish between differnt instances.</span></span>
<span class="line"></span>
<span class="line"><span class="token assign-left variable">APP_ENV</span><span class="token operator">=</span><span class="token operator">&lt;</span>string<span class="token operator">=</span>production<span class="token operator">&gt;</span></span>
<span class="line"><span class="token comment"># Used to define the app environment. Available variables are: local, production and testing</span></span>
<span class="line">   </span>
<span class="line"><span class="token assign-left variable">APP_KEY</span><span class="token operator">=</span><span class="token operator">&lt;</span>base64:32bit-key<span class="token operator">&gt;</span> </span>
<span class="line"><span class="token comment"># Used by Laravel&#39;s encrypter service. Can be generated with &#39;php artisan key:generate\`</span></span>
<span class="line"></span>
<span class="line"><span class="token assign-left variable">APP_URL</span><span class="token operator">=</span><span class="token operator">&lt;</span>string<span class="token operator">=</span>http://localhost<span class="token operator">&gt;</span> <span class="token comment">#set this to your proxy url if needed and enable it by setting APP_FORCE_URL to true</span></span>
<span class="line"></span>
<span class="line"><span class="token assign-left variable">APP_FORCE_URL</span><span class="token operator">=</span><span class="token operator">&lt;</span>boolean<span class="token operator">=</span>false<span class="token operator">&gt;</span></span>
<span class="line"><span class="token comment"># Can be set to enforce the app URL using your proxy url.</span></span>
<span class="line"><span class="token comment"># Generally the same as APP_URL.</span></span>
<span class="line"></span>
<span class="line"><span class="token assign-left variable">APP_DEBUG</span><span class="token operator">=</span><span class="token operator">&lt;</span>boolean<span class="token operator">=</span>false<span class="token operator">&gt;</span></span>
<span class="line"><span class="token comment"># Can be used to get additional debug logs. </span></span>
<span class="line"></span>
<span class="line"><span class="token assign-left variable">APP_PATH</span><span class="token operator">=</span><span class="token operator">&lt;</span>string<span class="token operator">=</span>/project/subpath/<span class="token operator">&gt;</span></span>
<span class="line"><span class="token comment"># Defines the &#39;scope&#39; of all cookies that are being set.</span></span>
<span class="line"><span class="token comment"># This is only required, when you are running multiple Spacialist instances on subpaths on the same domain.</span></span>
<span class="line"><span class="token comment"># This should be set to the common root of Spacialist and Thesaurex so that the user-specific &#39;remember-web&#39;</span></span>
<span class="line"><span class="token comment"># cookie is shared between both instances. For more details checkout the Cookie section.</span></span>
<span class="line"></span>
<span class="line"><span class="token assign-left variable">APP_AVATAR_STORAGE_LOCATION</span><span class="token operator">=</span><span class="token punctuation">..</span>/spacialist/storage/app/private/avatars</span>
<span class="line"><span class="token comment"># [THESAUREX ONLY] since 0.11.0-beta.1</span></span>
<span class="line"><span class="token comment"># Defines the directory system path to the spacialist avatars.</span></span>
<span class="line"><span class="token comment"># Can be an absolute or a relative path.</span></span>
<span class="line"></span>
<span class="line"><span class="token assign-left variable">ASSET_URL</span><span class="token operator">=</span><span class="token operator">&lt;</span>string<span class="token operator">=</span>/<span class="token operator">&gt;</span> </span>
<span class="line"><span class="token comment"># A Laravel variable responsible for setting Vite&#39;s base url: </span></span>
<span class="line"><span class="token comment"># The laravel server serves all files at localhost:8000, however vite is running on another host</span></span>
<span class="line"><span class="token comment"># when not set properly, you may get errors like, e.g. &#39;CORS error cannot access script &#39;localhost:3000/</span></span>
<span class="line"><span class="token comment"># assets/js/script.js&#39; from &#39;mydomain.com/assets/js/script.js&#39;.</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Laravel&#39;s database connection</span></span>
<span class="line"><span class="token comment"># See Laravel docs for more information</span></span>
<span class="line"><span class="token assign-left variable">DB_CONNECTION</span><span class="token operator">=</span></span>
<span class="line"><span class="token assign-left variable">DB_HOST</span><span class="token operator">=</span></span>
<span class="line"><span class="token assign-left variable">DB_PORT</span><span class="token operator">=</span></span>
<span class="line"><span class="token assign-left variable">DB_DATABASE</span><span class="token operator">=</span></span>
<span class="line"><span class="token assign-left variable">DB_USERNAME</span><span class="token operator">=</span></span>
<span class="line"><span class="token assign-left variable">DB_PASSWORD</span><span class="token operator">=</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Additional Laravel driver</span></span>
<span class="line"><span class="token comment"># See Laravel docs for more information</span></span>
<span class="line"><span class="token assign-left variable">CACHE_DRIVER</span><span class="token operator">=</span>memcached</span>
<span class="line"><span class="token comment"># !!! IMPORTANT: memcached is not working on Windows, use &#39;array&#39; instead!</span></span>
<span class="line"></span>
<span class="line"><span class="token assign-left variable">SESSION_DRIVER</span><span class="token operator">=</span>file</span>
<span class="line"><span class="token assign-left variable">QUEUE_DRIVER</span><span class="token operator">=</span>sync</span>
<span class="line"></span>
<span class="line"><span class="token comment"># REAL-TIME COMMUNICATION</span></span>
<span class="line"><span class="token assign-left variable">BROADCAST_DRIVER</span><span class="token operator">=</span>reverb</span>
<span class="line"><span class="token assign-left variable">BROADCAST_CONNECTION</span><span class="token operator">=</span>reverb</span>
<span class="line"><span class="token comment"># Set&#39;s the mode for the realtime communication</span></span>
<span class="line"><span class="token comment"># BROADCAST_CONNECTION will replace BROADCAST_DRIVER in the future, so we</span></span>
<span class="line"><span class="token comment"># just define both here.</span></span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"><span class="token comment"># !!! IMPORTANT: Spacialist is setup to use reverb, other drivers are not tested.</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Reverb (real-time) configuration</span></span>
<span class="line"><span class="token assign-left variable">REVERB_APP_ID</span><span class="token operator">=</span><span class="token operator">&lt;</span>string*<span class="token operator">&gt;</span></span>
<span class="line"><span class="token assign-left variable">REVERB_APP_KEY</span><span class="token operator">=</span><span class="token operator">&lt;</span>string*<span class="token operator">&gt;</span></span>
<span class="line"><span class="token assign-left variable">REVERB_APP_SECRET</span><span class="token operator">=</span><span class="token operator">&lt;</span>string*<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token assign-left variable">REVERB_HOST</span><span class="token operator">=</span><span class="token operator">&lt;</span>string<span class="token operator">&gt;</span></span>
<span class="line"><span class="token comment"># Domain of the Reverb Server (without protocol and port)</span></span>
<span class="line"></span>
<span class="line"><span class="token assign-left variable">REVERB_PORT</span><span class="token operator">=</span><span class="token operator">&lt;</span>int<span class="token operator">=</span><span class="token number">44</span><span class="token operator"><span class="token file-descriptor important">3</span>&gt;</span></span>
<span class="line"><span class="token assign-left variable">REVERB_SCHEME</span><span class="token operator">=</span><span class="token operator">&lt;</span>string<span class="token operator">=</span>https<span class="token operator">&gt;</span></span>
<span class="line"><span class="token comment"># Reverb can use &#39;http&#39; or &#39;https&#39; scheme</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Vite (frontend) variables</span></span>
<span class="line"><span class="token assign-left variable">VITE_APP_PATH</span><span class="token operator">=</span><span class="token operator">&lt;</span>string<span class="token operator">&gt;</span></span>
<span class="line"><span class="token comment"># Base path to the build directory (generally the same as APP_URL)</span></span>
<span class="line"></span>
<span class="line"><span class="token assign-left variable">VITE_APP_NAME</span><span class="token operator">=</span>spacialist-demo_alkha</span>
<span class="line"><span class="token comment"># App name of the spacialist app. (Seems to have no effect in the application).</span></span>
<span class="line"></span>
<span class="line"><span class="token assign-left variable">VITE_REVERB_DRIVER</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${BROADCAST_CONNECTION}</span>&quot;</span></span>
<span class="line"><span class="token assign-left variable">VITE_REVERB_APP_KEY</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${REVERB_APP_KEY}</span>&quot;</span></span>
<span class="line"><span class="token comment"># The app key is sent by the client for authentification</span></span>
<span class="line"></span>
<span class="line"><span class="token assign-left variable">VITE_REVERB_HOST</span><span class="token operator">=</span><span class="token operator">&lt;</span>string*<span class="token operator">&gt;</span></span>
<span class="line"><span class="token comment"># Publically accessible domain of the reverb server. The websocket endpoint is</span></span>
<span class="line"><span class="token comment"># hosted at \${VITE_REVERB_HOST}/app</span></span>
<span class="line"></span>
<span class="line"><span class="token assign-left variable">VITE_REVERB_PORT</span><span class="token operator">=</span><span class="token operator">&lt;</span>int<span class="token operator">=</span><span class="token number">443</span>/8<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span></span>
<span class="line"><span class="token assign-left variable">VITE_REVERB_SCHEME</span><span class="token operator">=</span><span class="token operator">&lt;</span>string<span class="token operator">=</span>https<span class="token operator">&gt;</span></span>
<span class="line"><span class="token comment"># Can be either https or not.</span></span>
<span class="line"></span>
<span class="line"><span class="token assign-left variable">VITE_REVERB_AUTH_ENDPOINT</span><span class="token operator">=</span><span class="token operator">&lt;</span>string<span class="token operator">=</span>/broadcasting/auth<span class="token operator">&gt;</span></span>
<span class="line"><span class="token comment"># When you use the &#39;reverb_server&#39; setup, your apps may sit behind a reverse proxy</span></span>
<span class="line"><span class="token comment"># at a subpath. Specify this to call the correct auth endpoint for the application, </span></span>
<span class="line"><span class="token comment"># e.g. &quot;/path/to/app/broadcasting/auth&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)])])}const r=n(p,[["render",i],["__file","environment-setup.html.vue"]]),c=JSON.parse('{"path":"/developer/environment-setup.html","title":"Environment","lang":"en-US","frontmatter":{},"git":{"updatedTime":1760517967000,"contributors":[{"name":"Severino","username":"Severino","email":"severin.opel@hotmail.com","commits":5,"url":"https://github.com/Severino"}],"changelog":[{"hash":"0fef0250603ad4ea3cbb60188878e1d40b08c633","time":1760517967000,"email":"severin.opel@hotmail.com","author":"Severino","message":"Added cookies to docs"},{"hash":"0642a5bfcc1bfe3f44313438bab85eeb91f94546","time":1758880302000,"email":"severin.opel@hotmail.com","author":"Severino","message":"Update THESAUREX version note in environment setup"},{"hash":"a17fec674162c0ee0bd5fbb886189ae2ea8b6c1b","time":1758880236000,"email":"severin.opel@hotmail.com","author":"Severino","message":"Fix avatar storage location in environment setup"},{"hash":"33f910301fce1a4dbaa47085a6e332d0d9c69238","time":1752569009000,"email":"severin.opel@hotmail.com","author":"Severino","message":"Added APP_AVATAR_STORAGE_LOCATION to .env"},{"hash":"df5941e73a64362e30b989b0b9918398a9bcf10a","time":1751383503000,"email":"severin.opel@hotmail.com","author":"Severino","message":"Added basic environment setup"}]},"filePathRelative":"developer/environment-setup.md"}');export{r as comp,c as data};
