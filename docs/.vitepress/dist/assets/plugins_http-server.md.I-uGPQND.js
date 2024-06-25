import{_ as s,c as i,o as e,aV as a}from"./chunks/framework.BDfjdzks.js";const g=JSON.parse('{"title":"http-server","description":"","frontmatter":{},"headers":[],"relativePath":"plugins/http-server.md","filePath":"plugins/http-server.md","lastUpdated":1719236634000}'),t={name:"plugins/http-server.md"},n=a(`<h1 id="http-server" tabindex="-1"><a href="http://www.npmmirror.com/package/http-server/home" target="_blank" rel="noreferrer">http-server</a> <a class="header-anchor" href="#http-server" aria-label="Permalink to &quot;[http-server](http://www.npmmirror.com/package/http-server/home)&quot;">​</a></h1><ul><li>一个快速启动的命令行开启本地服务的工具</li></ul><h2 id="_1-安装" tabindex="-1">1. 安装 <a class="header-anchor" href="#_1-安装" aria-label="Permalink to &quot;1. 安装&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> http-server</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -g</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_2-使用-http-server" tabindex="-1">2. 使用 http-server <a class="header-anchor" href="#_2-使用-http-server" aria-label="Permalink to &quot;2. 使用 http-server&quot;">​</a></h2><h3 id="_2-1-使用" tabindex="-1">2.1 使用 <a class="header-anchor" href="#_2-1-使用" aria-label="Permalink to &quot;2.1 使用&quot;">​</a></h3><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> * path : 要运行的文件路径(默认当前路径)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> * options : 服务运行配置项</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">http</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> server</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">path</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">][</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">options</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>在命令行中输入<code>http-server</code>来启动服务器。默认情况下，<code>http-server</code>将在当前的目录中提供<code>HTTP</code>服务</li><li>通过<code>-p [端口号]</code>指定运行的端口,默认<code>8080</code>端口</li></ul><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">http</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">server</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 8080</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_2-2-npx启动" tabindex="-1">2.2 npx启动 <a class="header-anchor" href="#_2-2-npx启动" aria-label="Permalink to &quot;2.2 npx启动&quot;">​</a></h3><ul><li>使用<code>npx工具</code>直接启动 <code>http-server</code>无需全局安装</li></ul><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> http-server</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 8023</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_3-本地移动端测试项目" tabindex="-1">3. 本地移动端测试项目 <a class="header-anchor" href="#_3-本地移动端测试项目" aria-label="Permalink to &quot;3. 本地移动端测试项目&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">前提</p><p>使用<code>http-server</code>在移动设备测试本地项目,需保证移动设备与本机在同一局域网中</p></div><ol><li><code>npm run build</code>打包生成<code>dist</code>(或其他名称,具体依据项目配置生成)目录</li><li>在<code>dist</code>目录打开终端,运行<code>http-server</code></li><li>默认情况下,服务开启在 <code>8080</code>端口,复制服务地址(如:<code>http://192.168.31.211:8080</code>)</li><li>利用<a href="https://cli.im/text" target="_blank" rel="noreferrer">二维码生成网站</a>将复制的服务地址生成二维码,移动设备扫码即可查看打包后的项目</li></ol>`,15),l=[n];function r(p,h,d,o,c,k){return e(),i("div",null,l)}const b=s(t,[["render",r]]);export{g as __pageData,b as default};
