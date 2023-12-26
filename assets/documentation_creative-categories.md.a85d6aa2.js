import{_ as a,c as n,a as e,e as t,o,r}from"./404.md.182c570f.js";const A=JSON.parse('{"title":"Creative Categories","description":"","frontmatter":{"title":"Creative Categories","tags":["experimental"],"mentions":["Warhead51707","yanasakana","SirLich","SmokeyStack","MedicalJewel105","Chikorita-Lover","MiemieMethod","retr0cube","TheItsNameless"]},"headers":[{"level":2,"title":"For Items","slug":"for-items","link":"#for-items","children":[]},{"level":2,"title":"For Blocks","slug":"for-blocks","link":"#for-blocks","children":[]},{"level":2,"title":"List of Creative Tabs","slug":"list-of-creative-tabs","link":"#list-of-creative-tabs","children":[]},{"level":2,"title":"List of Creative Categories","slug":"list-of-creative-categories","link":"#list-of-creative-categories","children":[]}],"relativePath":"documentation/creative-categories.md"}'),p={name:"documentation/creative-categories.md"},l=t('<p>Creative categories are the categories that determine where an item or block will appear inside of the creative inventory.</p><h2 id="for-items" tabindex="-1">For Items <a class="header-anchor" href="#for-items" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>As of 1.17.30 this feature is currently experimental and is currently available for both custom items &amp; blocks. Make sure to use the <a href="/items/items-16.html">1.16.100+ format version!</a></p></div><p>Item categories applied with the item description direct it to a more broad field in the creative category, individual tabs. They need to be the same tab as the component <code>creative_category</code>. Such would be applied like the following example:</p>',4),c=t(`<div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">format_version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.16.100</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">minecraft:item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">description</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">identifier</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">wiki:dagger</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">category</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">equipment</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Item categories applied with the item component <code>creative_category</code> direct it exactly where to go. Such would be applied like the following example:</p>`,2),i=t(`<div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">minecraft:creative_category</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">parent</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">itemGroup.name.sword</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="for-blocks" tabindex="-1">For Blocks <a class="header-anchor" href="#for-blocks" aria-hidden="true">#</a></h2><p>Block Categories are defined via <code>menu_category</code>, your custom block will not show up in the Creative Inventory if you don&#39;t have this, here&#39;s an example:</p>`,3),d=t(`<div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">format_version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.19.50</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">minecraft:block</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">description</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">identifier</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">wiki:balsa</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">menu_category</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">category</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">nature</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">group</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">itemGroup.name.wood</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>As you can see, <code>menu_category</code> accepts 2 optional children, the <code>category</code> child &amp; the <code>group</code> child. A list of groups &amp; categories can be found below. You can also use <code>is_hidden_in_commands</code> to make the block not show in commands.</p><h2 id="list-of-creative-tabs" tabindex="-1">List of Creative Tabs <a class="header-anchor" href="#list-of-creative-tabs" aria-hidden="true">#</a></h2><blockquote><p><em>For use with <code>description</code> parameter, <code>category</code></em></p></blockquote><table><thead><tr><th>Category</th></tr></thead><tbody><tr><td>commands</td></tr><tr><td>construction</td></tr><tr><td>equipment</td></tr><tr><td>items</td></tr><tr><td>nature</td></tr><tr><td>none</td></tr></tbody></table><h2 id="list-of-creative-categories" tabindex="-1">List of Creative Categories <a class="header-anchor" href="#list-of-creative-categories" aria-hidden="true">#</a></h2><blockquote><p><em>For use with the <code>group</code> parameter</em></p></blockquote><table><thead><tr><th>Creative Categories:</th></tr></thead><tbody><tr><td>itemGroup.name.anvil</td></tr><tr><td>itemGroup.name.arrow</td></tr><tr><td>itemGroup.name.axe</td></tr><tr><td>itemGroup.name.banner</td></tr><tr><td>itemGroup.name.banner_pattern</td></tr><tr><td>itemGroup.name.bed</td></tr><tr><td>itemGroup.name.boat</td></tr><tr><td>itemGroup.name.boots</td></tr><tr><td>itemGroup.name.buttons</td></tr><tr><td>itemGroup.name.candles</td></tr><tr><td>itemGroup.name.chalkboard</td></tr><tr><td>itemGroup.name.chest</td></tr><tr><td>itemGroup.name.chestboat</td></tr><tr><td>itemGroup.name.chestplate</td></tr><tr><td>itemGroup.name.concrete</td></tr><tr><td>itemGroup.name.concretePowder</td></tr><tr><td>itemGroup.name.cookedFood</td></tr><tr><td>itemGroup.name.copper</td></tr><tr><td>itemGroup.name.coral</td></tr><tr><td>itemGroup.name.coral_decorations</td></tr><tr><td>itemGroup.name.crop</td></tr><tr><td>itemGroup.name.door</td></tr><tr><td>itemGroup.name.dye</td></tr><tr><td>itemGroup.name.enchantedBook</td></tr><tr><td>itemGroup.name.fence</td></tr><tr><td>itemGroup.name.fenceGate</td></tr><tr><td>itemGroup.name.firework</td></tr><tr><td>itemGroup.name.fireworkStars</td></tr><tr><td>itemGroup.name.flower</td></tr><tr><td>itemGroup.name.glass</td></tr><tr><td>itemGroup.name.glassPane</td></tr><tr><td>itemGroup.name.glazedTerracotta</td></tr><tr><td>itemGroup.name.goatHorn</td></tr><tr><td>itemGroup.name.grass</td></tr><tr><td>itemGroup.name.hanging_sign</td></tr><tr><td>itemGroup.name.helmet</td></tr><tr><td>itemGroup.name.hoe</td></tr><tr><td>itemGroup.name.horseArmor</td></tr><tr><td>itemGroup.name.leaves</td></tr><tr><td>itemGroup.name.leggings</td></tr><tr><td>itemGroup.name.lingeringPotion</td></tr><tr><td>itemGroup.name.log</td></tr><tr><td>itemGroup.name.minecart</td></tr><tr><td>itemGroup.name.miscFood</td></tr><tr><td>itemGroup.name.mobEgg</td></tr><tr><td>itemGroup.name.monsterStoneEgg</td></tr><tr><td>itemGroup.name.mushroom</td></tr><tr><td>itemGroup.name.netherWartBlock</td></tr><tr><td>itemGroup.name.ore</td></tr><tr><td>itemGroup.name.permission</td></tr><tr><td>itemGroup.name.pickaxe</td></tr><tr><td>itemGroup.name.planks</td></tr><tr><td>itemGroup.name.potion</td></tr><tr><td>itemGroup.name.potterySherds</td></tr><tr><td>itemGroup.name.pressurePlate</td></tr><tr><td>itemGroup.name.rail</td></tr><tr><td>itemGroup.name.rawFood</td></tr><tr><td>itemGroup.name.record</td></tr><tr><td>itemGroup.name.sandstone</td></tr><tr><td>itemGroup.name.sapling</td></tr><tr><td>itemGroup.name.sculk</td></tr><tr><td>itemGroup.name.seed</td></tr><tr><td>itemGroup.name.shovel</td></tr><tr><td>itemGroup.name.shulkerBox</td></tr><tr><td>itemGroup.name.sign</td></tr><tr><td>itemGroup.name.skull</td></tr><tr><td>itemGroup.name.slab</td></tr><tr><td>itemGroup.name.smithing_templates</td></tr><tr><td>itemGroup.name.splashPotion</td></tr><tr><td>itemGroup.name.stainedClay</td></tr><tr><td>itemGroup.name.stairs</td></tr><tr><td>itemGroup.name.stone</td></tr><tr><td>itemGroup.name.stoneBrick</td></tr><tr><td>itemGroup.name.sword</td></tr><tr><td>itemGroup.name.trapdoor</td></tr><tr><td>itemGroup.name.walls</td></tr><tr><td>itemGroup.name.wood</td></tr><tr><td>itemGroup.name.wool</td></tr><tr><td>itemGroup.name.woolCarpet</td></tr></tbody></table><p><em>Last updated for 1.20.10</em></p>`,9);function m(u,D,F,y,C,b){const s=r("CodeHeader");return o(),n("div",null,[l,e(s),c,e(s),i,e(s),d])}const _=a(p,[["render",m]]);export{A as __pageData,_ as default};