import{_ as s,c as i,o as a,aV as n,a_ as l}from"./chunks/framework.BDfjdzks.js";const y=JSON.parse('{"title":"element元素视图","description":"","frontmatter":{},"headers":[],"relativePath":"javaScript/sizePosition/element元素视图.md","filePath":"javaScript/sizePosition/element元素视图.md","lastUpdated":1719236634000}'),e={name:"javaScript/sizePosition/element元素视图.md"},t=n(`<h1 id="element元素视图" tabindex="-1">element元素视图 <a class="header-anchor" href="#element元素视图" aria-label="Permalink to &quot;element元素视图&quot;">​</a></h1><blockquote><p>基于一系列的属性可以获取到盒子的一些样式(“组合样式”), 没必要再基于 getComputedStyle 获取每一部分的样 式自己去计算了，对于获取某些样式来讲是比较快捷的获取的结果直接 <span style="color:#f00;">不带单位</span>\`，属于<strong>纯数 字</strong>，可以直接进行数学运算了获取的结果是一个整数(哪怕 style 样式中的集合属性为小数)，这样会存在 1PX 以内的误差</p></blockquote><h2 id="_1-client" tabindex="-1">1.client <a class="header-anchor" href="#_1-client" aria-label="Permalink to &quot;1.client&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">clientWidth</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">：</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">可视区域的宽度</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">内容的宽度</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> 左右padding</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;">clientHeiht</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">可视区域的高度</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">内容的高度</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> 上下padding</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;">clientTop</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:   </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">上边框的高度</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;">clientLeft</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:  </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">左边框的宽度</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 如果盒子设定了固定的高度，内容超过这个设定的高度（内容溢出），不论是否设置溢出隐藏</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//  (overflow:hidden),获取的结果是不变的，还是根据设置的高度来决定</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="_2-scroll" tabindex="-1">2.scroll <a class="header-anchor" href="#_2-scroll" aria-label="Permalink to &quot;2.scroll&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;">scrollwidth</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> * 在内容没有溢出的情况下，和clientwidth是相同的，但是在有内容溢出的情况下，获取的结果是</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> * 真实内容的宽度（包含溢出的内容）+ 左 padding(一般应用于在有内容溢出的情况下，获取真实的大小)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;">scrollHeight</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> * 在内容没有溢出的情况下，和clientHeight是相同的，但是在有内容溢出的情况下，获取</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> * 的结果是真实内容的高度（包含溢出的内容）+ 上 padding</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> * 获取的结果是一个约等于的值：在不同浏览器或者是否设置overflow:hidden情况下，获取的结果都是不同的</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;">scro1LTop</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:   </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">滚动条卷去的高度</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">可读写</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;">scrollLeft</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:  </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">滚动条卷去的宽度</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">可读写</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">最小值</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">：</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">最大值</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">：</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">页面真实宽高</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">scrollwidth</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">scrollHeight</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> 屏幕可视区宽高</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">clientwidth</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">clientHeight</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;">判断用户是否滚动到底部</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">element</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">scrollHeight</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> element</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">scrollTop</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> ===</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> element</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">clientHeight</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="_3-offset" tabindex="-1">3.offset <a class="header-anchor" href="#_3-offset" aria-label="Permalink to &quot;3.offset&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 没有滚动条的情况下:offsetWidth = clientWidth + 左右border</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;">offsetWidth</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">内容区域宽度</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> 左右padding</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> 左右border</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 没有滚动条的情况下:offsetHeight = clientHeight + 左右border</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;">offsetHeight</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">内容区域高度</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> 上下padding</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> 上下border</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;">offsetParent</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">返回最近一级的带有定位的父级元素</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;">offsetLeft</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">相对于offsetParent左边界的偏移量</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;">offsetTop</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">相对于offsetParent上边界的偏移量</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="_4-getboundingclientrect" tabindex="-1">4.getBoundingClientRect() <a class="header-anchor" href="#_4-getboundingclientrect" aria-label="Permalink to &quot;4.getBoundingClientRect()&quot;">​</a></h2><p>getBoundingClientRect() 方法放回一组元素的左、上、右及下分别相对浏览器可视窗口的位置的集合 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/DOMRect" target="_blank" rel="noreferrer">DOMRect</a>。 <img src="`+l+`"></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> document</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;foo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> fooBoundingRect</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> ele</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">getBoundingClientRect</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">console</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">foo</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 输出内容如下：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">DOMRect</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  top</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  left</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  right</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// =&gt; (left + width)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  bottom</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// =&gt; (top + height)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  width</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  height</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  x</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  y</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="info custom-block"><p class="custom-block-title">说明：</p><ul><li>top：元素左上角距浏览器可视区域顶端的距离</li><li>left：元素左上角距浏览器可视区域左端的距离</li><li>bottom：元素右下角距浏览器可视区域的顶端的距离</li><li>right：元素右下角距浏览器可视区域的左端的距离</li><li>width：元素宽度（包括内容、边距和边框）</li><li>height：元素高度（包括内容、边距和边框）</li></ul></div><h2 id="_5-getclientrects" tabindex="-1">5.getClientRects() <a class="header-anchor" href="#_5-getclientrects" aria-label="Permalink to &quot;5.getClientRects()&quot;">​</a></h2><blockquote><p>返回一个包含多个矩形的集合 与<code>getBoundingClientRect</code>区别:</p></blockquote><ul><li>获取到的结果是多个<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/DOMRect" target="_blank" rel="noreferrer">DOMRect</a>类数组集合</li><li>获取<strong>块盒</strong>的<code>DOMRect</code>时结果第一项与<code>getBoundingClientRect</code>一致</li><li>获取<strong>不换行的行盒</strong>的<code>DOMRect</code>时结果第一项与<code>getBoundingClientRect</code>一致</li><li>获取<strong>换行的行盒</strong>的<code>DOMRect</code>时与会存在多个,每一行文本都是一个<code>DOMRect</code></li></ul><div class="tip custom-block"><p class="custom-block-title">提示</p><p>这里外层元素为<code>span</code>获取到的是多个<code>DOMRect</code>的集合,如果替换成<code>p</code>标签,拿到的是只有一个<code>DOMRect</code>的集合</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">span</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    123 &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">br</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    456 &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">br</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    789 &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">br</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">span</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div>`,16),h=[t];function p(k,r,d,c,g,o){return a(),i("div",null,h)}const E=s(e,[["render",p]]);export{y as __pageData,E as default};
