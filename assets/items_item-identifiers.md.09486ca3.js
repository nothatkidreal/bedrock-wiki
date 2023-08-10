import{_ as l,c as s,a as i,w as t,b as e,d as a,e as o,r as c,o as r}from"./404.md.b192b95f.js";const D=JSON.parse('{"title":"Vanilla Item Identifiers","description":"","frontmatter":{"title":"Vanilla Item Identifiers","category":"Documentation","tags":["deprecated"],"mentions":["TheDoctor15","Medicaljewel105","Luthorius","epxzzy","SmokeyStack"]},"headers":[{"level":2,"title":"Known Identifier Effects","slug":"known-identifier-effects","link":"#known-identifier-effects","children":[{"level":3,"title":"namespace:banner","slug":"namespace-banner","link":"#namespace-banner","children":[]},{"level":3,"title":"namespace:bow","slug":"namespace-bow","link":"#namespace-bow","children":[]},{"level":3,"title":"namespace:crossbow","slug":"namespace-crossbow","link":"#namespace-crossbow","children":[]},{"level":3,"title":"namespace:diamond","slug":"namespace-diamond","link":"#namespace-diamond","children":[]},{"level":3,"title":"namespace:emerald","slug":"namespace-emerald","link":"#namespace-emerald","children":[]},{"level":3,"title":"namespace:filled_map","slug":"namespace-filled-map","link":"#namespace-filled-map","children":[]},{"level":3,"title":"namespace:gold_ingot","slug":"namespace-gold-ingot","link":"#namespace-gold-ingot","children":[]},{"level":3,"title":"namespace:iron_ingot","slug":"namespace-iron-ingot","link":"#namespace-iron-ingot","children":[]},{"level":3,"title":"namespace:lapis_lazuli","slug":"namespace-lapis-lazuli","link":"#namespace-lapis-lazuli","children":[]},{"level":3,"title":"namespace:lead","slug":"namespace-lead","link":"#namespace-lead","children":[]},{"level":3,"title":"namespace:map","slug":"namespace-map","link":"#namespace-map","children":[]},{"level":3,"title":"namespace:netherite_ingot","slug":"namespace-netherite-ingot","link":"#namespace-netherite-ingot","children":[]},{"level":3,"title":"namespace:shield","slug":"namespace-shield","link":"#namespace-shield","children":[]},{"level":3,"title":"namespace:spyglass","slug":"namespace-spyglass","link":"#namespace-spyglass","children":[]},{"level":3,"title":"namespace:skull","slug":"namespace-skull","link":"#namespace-skull","children":[]},{"level":3,"title":"namespace:totem_of_undying","slug":"namespace-totem-of-undying","link":"#namespace-totem-of-undying","children":[]}]}],"relativePath":"items/item-identifiers.md"}'),d={name:"items/item-identifiers.md"},p=e("div",{class:"danger custom-block"},[e("p",{class:"custom-block-title"},"DANGER"),e("p",null,"This method no longer works after 1.18.30.")],-1),h=e("p",null,[a("An "),e("code",null,"identifier"),a(" is a required parameter that sits inside the description of the item's behaviour file. It accepts Vanilla Minecraft names, like so, "),e("code",null,"<namespace>:<vanilla item>"),a(", which will apply certain hardcoded item behaviours, depending on the identifier used.")],-1),m=o(`<div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">description</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">identifier</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">wiki:totem_of_undying</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">category</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">items</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Not every Vanilla Identifier and their behaviours are documented. The following list may be missing important points about the known Identifiers that do affect items.</p><p>Consider experimenting with them.</p></div><h2 id="known-identifier-effects" tabindex="-1">Known Identifier Effects <a class="header-anchor" href="#known-identifier-effects" aria-hidden="true">#</a></h2><p>The namespace is allowed to be changed, learn more about namespaces <a href="/concepts/namespaces.html">here</a>.</p><h3 id="namespace-banner" tabindex="-1">namespace:banner <a class="header-anchor" href="#namespace-banner" aria-hidden="true">#</a></h3><ul><li>The item icon and model will be changed to that of the Vanilla Banner.</li></ul><hr><h3 id="namespace-bow" tabindex="-1">namespace:bow <a class="header-anchor" href="#namespace-bow" aria-hidden="true">#</a></h3><ul><li>Adds a small increasing zoom on use, for the zoom to work it requires the item to be usable.</li></ul><hr><h3 id="namespace-crossbow" tabindex="-1">namespace:crossbow <a class="header-anchor" href="#namespace-crossbow" aria-hidden="true">#</a></h3><ul><li>The item will be rotated horizontally on your arm.</li></ul><hr><h3 id="namespace-diamond" tabindex="-1">namespace:diamond <a class="header-anchor" href="#namespace-diamond" aria-hidden="true">#</a></h3><ul><li>Is accepted as a valid item to change the effect given off by a Beacon.</li></ul><hr><h3 id="namespace-emerald" tabindex="-1">namespace:emerald <a class="header-anchor" href="#namespace-emerald" aria-hidden="true">#</a></h3><ul><li>Is accepted as a valid item to change the effect given off by a Beacon.</li></ul><hr><h3 id="namespace-filled-map" tabindex="-1">namespace:filled_map <a class="header-anchor" href="#namespace-filled-map" aria-hidden="true">#</a></h3><ul><li>Will add the holding map animation.</li><li>Can be put in a cartography table.</li></ul><hr><h3 id="namespace-gold-ingot" tabindex="-1">namespace:gold_ingot <a class="header-anchor" href="#namespace-gold-ingot" aria-hidden="true">#</a></h3><ul><li>Is accepted as a valid item to change the effect given off by a Beacon.</li></ul><hr><h3 id="namespace-iron-ingot" tabindex="-1">namespace:iron_ingot <a class="header-anchor" href="#namespace-iron-ingot" aria-hidden="true">#</a></h3><ul><li>Is accepted as a valid item to change the effect given off by a Beacon.</li></ul><hr><h3 id="namespace-lapis-lazuli" tabindex="-1">namespace:lapis_lazuli <a class="header-anchor" href="#namespace-lapis-lazuli" aria-hidden="true">#</a></h3><ul><li>Makes the Item usable with Enchantment Tables, to enchant your items in place of Lapis Lazuli.</li></ul><hr><h3 id="namespace-lead" tabindex="-1">namespace:lead <a class="header-anchor" href="#namespace-lead" aria-hidden="true">#</a></h3><ul><li>Will behave like a Lead.</li></ul><hr><h3 id="namespace-map" tabindex="-1">namespace:map <a class="header-anchor" href="#namespace-map" aria-hidden="true">#</a></h3><ul><li>Will use the holding map animation.</li></ul><hr><h3 id="namespace-netherite-ingot" tabindex="-1">namespace:netherite_ingot <a class="header-anchor" href="#namespace-netherite-ingot" aria-hidden="true">#</a></h3><ul><li>Is accepted in custom Smithing Recipes as the secondary item.</li><li>Is accepted as a valid item to change the effect given off by a Beacon.</li></ul><hr><h3 id="namespace-shield" tabindex="-1">namespace:shield <a class="header-anchor" href="#namespace-shield" aria-hidden="true">#</a></h3><ul><li>The item icon will be permanently changed to that of the Vanilla Shield.</li><li>Adds the shield animation and behavior.</li></ul><hr><h3 id="namespace-spyglass" tabindex="-1">namespace:spyglass <a class="header-anchor" href="#namespace-spyglass" aria-hidden="true">#</a></h3><ul><li>Makes it zoom-able like a spyglass, for the zoom to work it requires the item to be usable.</li></ul><hr><h3 id="namespace-skull" tabindex="-1">namespace:skull <a class="header-anchor" href="#namespace-skull" aria-hidden="true">#</a></h3><ul><li>The item icon will be changed to that of the Vanilla Skull.</li><li>The item will be able to put on a armorstand and a player, the model and textures of the skull will be applied only then.</li></ul><hr><h3 id="namespace-totem-of-undying" tabindex="-1">namespace:totem_of_undying <a class="header-anchor" href="#namespace-totem-of-undying" aria-hidden="true">#</a></h3><ul><li>Will behave like a Totem of Undying.</li></ul><hr>`,52);function u(f,g,b,y,k,_){const n=c("CodeHeader");return r(),s("div",null,[p,h,i(n,null,{default:t(()=>[a("BP/items/custom_item.json#minecraft:item")]),_:1}),m])}const w=l(d,[["render",u]]);export{D as __pageData,w as default};