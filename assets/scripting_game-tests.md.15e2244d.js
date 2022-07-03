import{_ as p,c as o,a,w as t,e as n,r,o as c,d as e}from"./404.md.6a2e4e24.js";const A='{"title":"Game Tests","description":"","frontmatter":{"title":"Game Tests","category":"Game Tests","tags":["experimental"]},"headers":[{"level":2,"title":"Using GameTests","slug":"using-gametests"},{"level":2,"title":"Reference Documentation","slug":"reference-documentation"}],"relativePath":"scripting/game-tests.md"}',l={},u=n('<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The GameTest framework requires you to activate <strong>&quot;Enable GameTest Framework&quot;</strong> or <strong>&quot;GameTest Framework&quot;</strong> in your world settings, and you must be using <strong>Minecraft 1.16.210.60 beta or above</strong>.</p></div><p>GameTests are a new feature that allows developers to create unit tests to make it easier to test if game mechanics work. They are built with javascript files in the behavior pack folder, and each file can register multiple GameTests. Each registered GameTest must also have a .mcstructure file in the <code>BP/structures</code> folder. The API can also be used for creations outside of creating unit tests by just using the <code>&quot;mojang-minecraft&quot;</code> module, though this is currently limited.</p><h2 id="using-gametests" tabindex="-1">Using GameTests <a class="header-anchor" href="#using-gametests" aria-hidden="true">#</a></h2><p>In the behavior pack manifest, you need to add a <code>javascript</code> module for Minecraft versions below 1.19.0 or <code>script</code> module for Minecraft version 1.19.0 or above for Minecraft to set an <code>entry</code> point for your GameTests.</p>',4),i=e("Minecraft 1.19.0+"),m=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;239c134f-67bf-4738-9bcc-8c69d31b1f72&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;script&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;language&quot;</span><span class="token operator">:</span> <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;entry&quot;</span><span class="token operator">:</span> <span class="token string">&quot;scripts/gametests/Main.js&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,1),k=e("Minecraft version below 1.19.0"),b=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;239c134f-67bf-4738-9bcc-8c69d31b1f72&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;entry&quot;</span><span class="token operator">:</span> <span class="token string">&quot;scripts/gametests/Main.js&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,1),d=e("BP/manifest.json (for Minecraft version 1.19.0+)"),g=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
	<span class="token property">&quot;header&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Pack Name&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Pack descripton&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;min_engine_version&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">210</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">&quot;uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;604420b9-f4c3-4df2-9f09-4364486f1195&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">&quot;modules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;data&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;42651ba5-6619-4547-9d48-84a5a37cf2a3&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;239c134f-67bf-4738-9bcc-8c69d31b1f72&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;script&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;language&quot;</span><span class="token operator">:</span> <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;entry&quot;</span><span class="token operator">:</span> <span class="token string">&quot;scripts/gametests/Main.js&quot;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			<span class="token comment">// Minecraft native module - needed to use the &quot;mojang-minecraft&quot; module</span>
			<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mojang-minecraft&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;b26a4d4c-afdf-4690-88f8-931846312678&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			<span class="token comment">// GameTest native module - needed to use the &quot;mojang-gametest&quot; module</span>
			<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mojang-gametest&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;6f4b6893-1bb6-42fd-b458-7fa3d0c89616&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			<span class="token comment">// Minecraft UI native module - needed to use the &quot;mojang-minecraft-ui&quot; module</span>
			<span class="token comment">// You must be using Minecraft versions above Beta 1.18.20.21 or Release 1.18.30</span>
			<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mojang-minecraft-ui&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2bd50a27-ab5f-4f40-a596-3641627c635e&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			<span class="token comment">// Bedrock Dedicated Server&#39;s module for executing HTTP-based requests.</span>
			<span class="token comment">// Cannot be used on Minecraft clients.</span>
			<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mojang-net&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;777b1798-13a6-401c-9cba-0cf17e31a81b&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span> <span class="token punctuation">]</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			<span class="token comment">// Bedrock Dedicated Server&#39;s module for modifying configuration of </span>
			<span class="token comment">// variables and secrets in JSON files in the Bedrock Dedicated </span>
			<span class="token comment">// Server &quot;config&quot; folder. Cannot be used on Minecraft clients.</span>
			<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mojang-minecraft-server-admin&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;53d7f2bf-bf9c-49c4-ad1f-7c803d947920&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span> <span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br></div></div><p>The entry point should link to a file containing imports to your GameTest files.</p>`,2),f=e("BP/scripts/gametests/Main.js"),q=n(`<div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;scripts/gametests/MyGameTest.js&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;scripts/gametests/OtherGameTest.js&#39;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,1),_=e("BP/scripts/gametests/MyGameTest.js"),h=n(`<div class="language-js line-numbers-mode"><pre><code><span class="token comment">// This file use to demonstrate that the code is working by</span>
<span class="token comment">// Spamming the chat with &quot;Hello World&quot;</span>
 
<span class="token comment">// Import world component from &quot;mojang-minecraft&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> world <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;mojang-minecraft&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// import variables from my other javascript file</span>
<span class="token keyword">import</span> defaultExport<span class="token punctuation">,</span> <span class="token punctuation">{</span> export1 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./OtherGameTest.js&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// Spams the chat with &quot;Hello World&quot;</span>
world<span class="token punctuation">.</span>events<span class="token punctuation">.</span>tick<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token comment">// runs command in overworld dimension</span>
	world<span class="token punctuation">.</span><span class="token function">getDimension</span><span class="token punctuation">(</span><span class="token string">&quot;overworld&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">runCommand</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">say Hello World</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,1),y=e("BP/scripts/gametests/OtherGameTest.js"),T=n(`<div class="language-js line-numbers-mode"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">defaultExport</span> <span class="token punctuation">(</span><span class="token parameter">param</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> export1 <span class="token operator">=</span> <span class="token string">&quot;export1&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>GameTests can be used with the /gametest command.</p><ul><li><code>/gametest runthis</code></li></ul><p>Runs the nearest GameTest in range.</p><ul><li><code>/gametest runthese</code></li></ul><p>Runs all GameTests in range.</p><ul><li><code>/gametest pos</code></li></ul><p>It tells you the relative coordinates of the nearest GameTest.</p><ul><li><code>/gametest clearall [radius: int]</code></li></ul><p>Removes all GameTests in the specified radius.</p><ul><li><code>/gametest run &lt;testName: GameTestName&gt; [rotationSteps: int]</code></li></ul><p>Creates and runs the specified GameTest.</p><ul><li><code>/gametest runset [tagTag: GameTestTag] [rotationSteps: int]</code></li></ul><p>Creates and runs all GameTests with the specified tag.</p><ul><li><code>/gametest create &lt;testName: string&gt; [width: int] [height: int] [depth: int]</code></li></ul><p>Creates a blank GameTest area with the specified dimensions.</p><ul><li><code>/reload</code></li></ul><p>Reloads all function and script files from all behavior packs. (1.19+)</p><h2 id="reference-documentation" tabindex="-1">Reference Documentation <a class="header-anchor" href="#reference-documentation" aria-hidden="true">#</a></h2><p>Official documentation on are hosted on Microsoft Docs and can be found here:</p><ul><li><a href="https://docs.microsoft.com/minecraft/creator/scriptapi/mojang-gametest/mojang-gametest" target="_blank" rel="noopener noreferrer"><code>mojang-gametest</code></a></li><li><a href="https://docs.microsoft.com/minecraft/creator/scriptapi/mojang-minecraft/mojang-minecraft" target="_blank" rel="noopener noreferrer"><code>mojang-minecraft</code></a></li><li><a href="https://docs.microsoft.com/minecraft/creator/scriptapi/mojang-minecraft-ui/mojang-minecraft-ui" target="_blank" rel="noopener noreferrer"><code>mojang-minecraft-ui</code></a></li><li><a href="https://docs.microsoft.com/minecraft/creator/scriptapi/mojang-minecraft-server-admin/mojang-minecraft-server-admin" target="_blank" rel="noopener noreferrer"><code>mojang-minecraft-server-admin</code></a></li><li><a href="https://docs.microsoft.com/minecraft/creator/scriptapi/mojang-net/mojang-net" target="_blank" rel="noopener noreferrer"><code>mojang-net</code></a></li></ul><p>Official typescript declarations can be found here:</p><ul><li><a href="https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/mojang-minecraft" target="_blank" rel="noopener noreferrer"><code>mojang-minecraft</code></a></li><li><a href="https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/mojang-gametest" target="_blank" rel="noopener noreferrer"><code>mojang-gametest</code></a></li><li><a href="https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/mojang-minecraft-ui" target="_blank" rel="noopener noreferrer"><code>mojang-minecraft-ui</code></a></li><li><a href="https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/mojang-minecraft-server-admin/mojang-minecraft-server-admin" target="_blank" rel="noopener noreferrer"><code>mojang-minecraft-server-admin</code></a></li><li><a href="https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/mojang-net" target="_blank" rel="noopener noreferrer"><code>mojang-net</code></a></li></ul><p>These allow for enhanced auto-completions and validation when used inside of your editor.</p><ul><li><p>bridge. v2: ships with GameTest support built-in.</p></li><li><p>Visual Studio Code: install Node.js and npm, then run the following in command line:</p></li></ul><div class="language-"><pre><code>npm install @types/mojang-minecraft
npm install @types/mojang-gametest
npm install @types/mojang-minecraft-ui
npm install @types/mojang-minecraft-server-admin
npm install @types/mojang-net
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,26);function v(j,w,S,G,C,D){const s=r("CodeHeader");return c(),o("div",null,[u,a(s,null,{default:t(()=>[i]),_:1}),m,a(s,null,{default:t(()=>[k]),_:1}),b,a(s,null,{default:t(()=>[d]),_:1}),g,a(s,null,{default:t(()=>[f]),_:1}),q,a(s,null,{default:t(()=>[_]),_:1}),h,a(s,null,{default:t(()=>[y]),_:1}),T])}var I=p(l,[["render",v]]);export{A as __pageData,I as default};