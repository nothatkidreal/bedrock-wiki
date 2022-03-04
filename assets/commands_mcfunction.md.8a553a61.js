import{_ as t,r as i,c,b as r,a,w as o,e as n,d as e,o as l}from"./404.md.2b8e885e.js";const A='{"title":"Functions","description":"","frontmatter":{"title":"Functions","mention":["SirLich"],"tags":["easy"]},"headers":[{"level":2,"title":"Running functions through tick.json","slug":"running-functions-through-tick-json"},{"level":3,"title":"Creating tick.json","slug":"creating-tick-json"},{"level":3,"title":"Known Issues","slug":"known-issues"},{"level":3,"title":"Useful tick.json Creations","slug":"useful-tick-json-creations"}],"relativePath":"commands/mcfunction.md","lastUpdated":1646416461890}',u={},d=n('<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Minecraft can <strong>not</strong> run more than 10,000 lines of functions in one function file. This includes any other function files that are executed inside of the original file.</p></div><p><code>mcfunction</code> files are stored in your BP as <code>BP/functions/my_function.mcfunction</code>. You can add as many functions as you like.</p><p>Functions are used to group multiple Minecraft Commands (such as <code>/say</code> or <code>/teleport</code>) into manageable chunks (or functions). Commands inside a function file do not begin with <code>/</code>.</p>',3),p=e("Example: "),m=e("BP/functions/my_function.mcfunction"),_=n(`<div class="language-"><pre><code>tag @s add dev
gamemode creative
effect @s night_vision 100000 1 true

# You can write comments like this
say hey!
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Functions can be executed in-game by typing <code>/function name_of_function</code>. This will execute all the commands in the function file, all in a single tick. Nested functions will also run in the same tick as the parent function.</p><p>Function files can be nested, for example: <code>BP/functions/teleport/home.mcfunction</code> will create a new function called <code>teleport/home</code>, which can be called in game like <code>/function teleport/home</code>.</p><p>Function files can be reloaded without leaving the game with the <code>/reload</code> command.</p><h2 id="running-functions-through-tick-json" tabindex="-1">Running functions through tick.json <a class="header-anchor" href="#running-functions-through-tick-json" aria-hidden="true">#</a></h2><p><code>tick.json</code> is a server-side file located as <code>BP/functions/tick.json</code> that lets you execute function files.</p><p>Functions will be run for each tick as if placed in a repeating command block.</p><h3 id="creating-tick-json" tabindex="-1">Creating tick.json <a class="header-anchor" href="#creating-tick-json" aria-hidden="true">#</a></h3><p>Create a file called tick.json in your root function folder. The format is this:</p>`,9),h=e("BP/functions/tick.json"),f=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;function_file_name_one&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;function_file_name_two&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="known-issues" tabindex="-1">Known Issues <a class="header-anchor" href="#known-issues" aria-hidden="true">#</a></h3><p>While this is a valuable file when you&#39;re trying to stray away from using repeating command blocks in-game, it&#39;s known for executing function files before the world has fully loaded in. This might cause unintended command behavior and crashes, and it&#39;s recommended to wait for a more official release of this file.</p><h3 id="useful-tick-json-creations" tabindex="-1">Useful tick.json Creations <a class="header-anchor" href="#useful-tick-json-creations" aria-hidden="true">#</a></h3><p>In this section you can find useful creations by our community.</p><p><strong>Looping Timer</strong></p><p>Here you can find timer that executes function with name <code>my_function</code> on players with 10 sec delay.</p>`,7),b=e("BP/functions/timer.mcfunction"),g=n(`<div class="language-"><pre><code># Setup
scoreboard objectives add timer dummy

# Loop
scoreboard players add @a timer 1

# Main
execute @a[scores={timer=200}] ~~~ function my_function

# Timer Update
scoreboard players set @a[scores={timer=200..}] timer 0
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>Note that the order of loop and timer update is important.</p><p><strong>Hello World</strong></p><p>This function tellraws something to every player, who joined the game for the first time. It also has a 4 seconds delay so world is fully loaded.</p>`,4),k=e("BP/functions/hello_world.mcfunction"),w=n(`<div class="language-"><pre><code># Setup
scoreboard objectives add hello_world dummy

# Loop
scoreboard players set @a[tag=!hello_world] hello_world 81
tag @a add hello_world
scoreboard players add @a[scores={hello_world=!0}] hello_world -1

# Main
execute @a[scores={hello_world=1}] ~~~ tellraw @s {&quot;rawtext&quot;:[{&quot;text&quot;:&quot;Did you know that MJ105 made this Hello World function?&quot;}]}
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,1);function y(T,v,j,x,C,P){const s=i("CodeHeader");return l(),c("div",null,[d,r("p",null,[p,a(s,null,{default:o(()=>[m]),_:1})]),_,a(s,null,{default:o(()=>[h]),_:1}),f,a(s,null,{default:o(()=>[b]),_:1}),g,a(s,null,{default:o(()=>[k]),_:1}),w])}var I=t(u,[["render",y]]);export{A as __pageData,I as default};