if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let r={};const t=s=>l(s,a),u={module:{uri:a},exports:r,require:t};e[a]=Promise.all(n.map((s=>u[s]||t(s)))).then((s=>(i(...s),r)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.md.59803805.js",revision:null},{url:"assets/404.md.59803805.lean.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.9b37e108.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.9b37e108.lean.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.5db19828.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.5db19828.lean.js",revision:null},{url:"assets/animation-controllers_death-commands.md.eb9e5b83.js",revision:null},{url:"assets/animation-controllers_death-commands.md.eb9e5b83.lean.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.2899bf11.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.2899bf11.lean.js",revision:null},{url:"assets/animation-controllers_index.md.edad0377.js",revision:null},{url:"assets/animation-controllers_index.md.edad0377.lean.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.4e85429a.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.4e85429a.lean.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.88273a93.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.88273a93.lean.js",revision:null},{url:"assets/app.d55530b1.js",revision:null},{url:"assets/blocks_applying-effects.md.d08162a6.js",revision:null},{url:"assets/blocks_applying-effects.md.d08162a6.lean.js",revision:null},{url:"assets/blocks_avoiding-properties-limit.md.301031f7.js",revision:null},{url:"assets/blocks_avoiding-properties-limit.md.301031f7.lean.js",revision:null},{url:"assets/blocks_block-materials.md.a2eb4020.js",revision:null},{url:"assets/blocks_block-materials.md.a2eb4020.lean.js",revision:null},{url:"assets/blocks_block-shapes.md.6fefc692.js",revision:null},{url:"assets/blocks_block-shapes.md.6fefc692.lean.js",revision:null},{url:"assets/blocks_block-sounds.md.0bd76694.js",revision:null},{url:"assets/blocks_block-sounds.md.0bd76694.lean.js",revision:null},{url:"assets/blocks_block-tags.md.ce22c859.js",revision:null},{url:"assets/blocks_block-tags.md.ce22c859.lean.js",revision:null},{url:"assets/blocks_block-texture-variation.md.00d86972.js",revision:null},{url:"assets/blocks_block-texture-variation.md.00d86972.lean.js",revision:null},{url:"assets/blocks_blocks-experimental.md.fd7b4f17.js",revision:null},{url:"assets/blocks_blocks-experimental.md.fd7b4f17.lean.js",revision:null},{url:"assets/blocks_blocks-intro.md.99ffe042.js",revision:null},{url:"assets/blocks_blocks-intro.md.99ffe042.lean.js",revision:null},{url:"assets/blocks_blocks-stable.md.dd0a16c8.js",revision:null},{url:"assets/blocks_blocks-stable.md.dd0a16c8.lean.js",revision:null},{url:"assets/blocks_custom-crops.md.a0936576.js",revision:null},{url:"assets/blocks_custom-crops.md.a0936576.lean.js",revision:null},{url:"assets/blocks_custom-fluids.md.d16866b5.js",revision:null},{url:"assets/blocks_custom-fluids.md.d16866b5.lean.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.18cdfda7.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.18cdfda7.lean.js",revision:null},{url:"assets/blocks_custom-slabs.md.0751c902.js",revision:null},{url:"assets/blocks_custom-slabs.md.0751c902.lean.js",revision:null},{url:"assets/blocks_custom-trapdoor.md.1b232f25.js",revision:null},{url:"assets/blocks_custom-trapdoor.md.1b232f25.lean.js",revision:null},{url:"assets/blocks_custom-trees.md.c15b10d0.js",revision:null},{url:"assets/blocks_custom-trees.md.c15b10d0.lean.js",revision:null},{url:"assets/blocks_fake-blocks.md.3db0b90d.js",revision:null},{url:"assets/blocks_fake-blocks.md.3db0b90d.lean.js",revision:null},{url:"assets/blocks_flipbook-textures.md.fcd51fce.js",revision:null},{url:"assets/blocks_flipbook-textures.md.fcd51fce.lean.js",revision:null},{url:"assets/blocks_index.md.d323c796.js",revision:null},{url:"assets/blocks_index.md.d323c796.lean.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.2d488bd8.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.2d488bd8.lean.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.dc75263a.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.dc75263a.lean.js",revision:null},{url:"assets/blocks_precise-interaction.md.6ac8f213.js",revision:null},{url:"assets/blocks_precise-interaction.md.6ac8f213.lean.js",revision:null},{url:"assets/blocks_precise-rotation.md.335c9817.js",revision:null},{url:"assets/blocks_precise-rotation.md.335c9817.lean.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.3acee8ef.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.3acee8ef.lean.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.e6d99987.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.e6d99987.lean.js",revision:null},{url:"assets/chunks/3.035a77e6.js",revision:null},{url:"assets/chunks/4.bf191be1.js",revision:null},{url:"assets/chunks/AlgoliaSearch.99d31590.js",revision:null},{url:"assets/chunks/compound.3f8f82ad.js",revision:null},{url:"assets/chunks/content_log.09e62547.js",revision:null},{url:"assets/chunks/Contributors.b2c63f51.js",revision:null},{url:"assets/chunks/gametick.8221204e.js",revision:null},{url:"assets/chunks/settings_2.b0f9bbd3.js",revision:null},{url:"assets/chunks/snippets.5bdbd1d4.js",revision:null},{url:"assets/chunks/structure.a9b5a4fc.js",revision:null},{url:"assets/commands_block-states.md.6c3cde85.js",revision:null},{url:"assets/commands_block-states.md.6c3cde85.lean.js",revision:null},{url:"assets/commands_damage.md.2a22fa70.js",revision:null},{url:"assets/commands_damage.md.2a22fa70.lean.js",revision:null},{url:"assets/commands_entity-counter.md.685c85f3.js",revision:null},{url:"assets/commands_entity-counter.md.685c85f3.lean.js",revision:null},{url:"assets/commands_index.md.9d136dce.js",revision:null},{url:"assets/commands_index.md.9d136dce.lean.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.fae85d4f.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.fae85d4f.lean.js",revision:null},{url:"assets/commands_mcfunctions.md.00558f4f.js",revision:null},{url:"assets/commands_mcfunctions.md.00558f4f.lean.js",revision:null},{url:"assets/commands_nbt-commands.md.30b6b7e3.js",revision:null},{url:"assets/commands_nbt-commands.md.30b6b7e3.lean.js",revision:null},{url:"assets/commands_new-execute.md.56334ee3.js",revision:null},{url:"assets/commands_new-execute.md.56334ee3.lean.js",revision:null},{url:"assets/commands_on-first-join.md.ffa2fa2b.js",revision:null},{url:"assets/commands_on-first-join.md.ffa2fa2b.lean.js",revision:null},{url:"assets/commands_on-first-world-load.md.ee2fd3e5.js",revision:null},{url:"assets/commands_on-first-world-load.md.ee2fd3e5.lean.js",revision:null},{url:"assets/commands_on-player-death.md.2643d44f.js",revision:null},{url:"assets/commands_on-player-death.md.2643d44f.lean.js",revision:null},{url:"assets/commands_on-player-join.md.b32f4460.js",revision:null},{url:"assets/commands_on-player-join.md.b32f4460.lean.js",revision:null},{url:"assets/commands_on-player-leave.md.4d20f505.js",revision:null},{url:"assets/commands_on-player-leave.md.4d20f505.lean.js",revision:null},{url:"assets/commands_on-player-respawn.md.4685fb54.js",revision:null},{url:"assets/commands_on-player-respawn.md.4685fb54.lean.js",revision:null},{url:"assets/commands_playsound.md.a1af4b98.js",revision:null},{url:"assets/commands_playsound.md.a1af4b98.lean.js",revision:null},{url:"assets/commands_relative-coordinates.md.e48e9739.js",revision:null},{url:"assets/commands_relative-coordinates.md.e48e9739.lean.js",revision:null},{url:"assets/commands_scoreboard-operations.md.73ec4c49.js",revision:null},{url:"assets/commands_scoreboard-operations.md.73ec4c49.lean.js",revision:null},{url:"assets/commands_scoreboard-timers.md.c3c711ba.js",revision:null},{url:"assets/commands_scoreboard-timers.md.c3c711ba.lean.js",revision:null},{url:"assets/commands_selectors.md.dbae4d04.js",revision:null},{url:"assets/commands_selectors.md.dbae4d04.lean.js",revision:null},{url:"assets/commands_tellraw.md.2085d3b8.js",revision:null},{url:"assets/commands_tellraw.md.2085d3b8.lean.js",revision:null},{url:"assets/concepts_contents.md.7e78efee.js",revision:null},{url:"assets/concepts_contents.md.7e78efee.lean.js",revision:null},{url:"assets/concepts_emojis.md.44f59f81.js",revision:null},{url:"assets/concepts_emojis.md.44f59f81.lean.js",revision:null},{url:"assets/concepts_index.md.4547abb7.js",revision:null},{url:"assets/concepts_index.md.4547abb7.lean.js",revision:null},{url:"assets/concepts_molang.md.95803c70.js",revision:null},{url:"assets/concepts_molang.md.95803c70.lean.js",revision:null},{url:"assets/concepts_namespaces.md.c1b2cff4.js",revision:null},{url:"assets/concepts_namespaces.md.c1b2cff4.lean.js",revision:null},{url:"assets/concepts_overwriting-assets.md.6160f910.js",revision:null},{url:"assets/concepts_overwriting-assets.md.6160f910.lean.js",revision:null},{url:"assets/concepts_shaders.md.46e16dd4.js",revision:null},{url:"assets/concepts_shaders.md.46e16dd4.lean.js",revision:null},{url:"assets/concepts_sounds.md.22eb699a.js",revision:null},{url:"assets/concepts_sounds.md.22eb699a.lean.js",revision:null},{url:"assets/concepts_subpacks.md.39c12871.js",revision:null},{url:"assets/concepts_subpacks.md.39c12871.lean.js",revision:null},{url:"assets/concepts_text-and-translations.md.b30787c3.js",revision:null},{url:"assets/concepts_text-and-translations.md.b30787c3.lean.js",revision:null},{url:"assets/concepts_textures-list.md.1ac5cd02.js",revision:null},{url:"assets/concepts_textures-list.md.1ac5cd02.lean.js",revision:null},{url:"assets/contribute-how-to.md.c6302b2a.js",revision:null},{url:"assets/contribute-how-to.md.c6302b2a.lean.js",revision:null},{url:"assets/contribute-style.md.01c4a38e.js",revision:null},{url:"assets/contribute-style.md.01c4a38e.lean.js",revision:null},{url:"assets/contribute.md.507b23ea.js",revision:null},{url:"assets/contribute.md.507b23ea.lean.js",revision:null},{url:"assets/discord.md.f3999fe7.js",revision:null},{url:"assets/discord.md.f3999fe7.lean.js",revision:null},{url:"assets/documentation_advanced-molang.md.2147258c.js",revision:null},{url:"assets/documentation_advanced-molang.md.2147258c.lean.js",revision:null},{url:"assets/documentation_creative-categories.md.8620d4eb.js",revision:null},{url:"assets/documentation_creative-categories.md.8620d4eb.lean.js",revision:null},{url:"assets/documentation_file-types.md.b9900e75.js",revision:null},{url:"assets/documentation_file-types.md.b9900e75.lean.js",revision:null},{url:"assets/documentation_fog-ids.md.1a065ff7.js",revision:null},{url:"assets/documentation_fog-ids.md.1a065ff7.lean.js",revision:null},{url:"assets/documentation_index.md.f3cf2045.js",revision:null},{url:"assets/documentation_index.md.f3cf2045.lean.js",revision:null},{url:"assets/documentation_material-config-description.md.79af4fee.js",revision:null},{url:"assets/documentation_material-config-description.md.79af4fee.lean.js",revision:null},{url:"assets/documentation_materials.md.f2717f2f.js",revision:null},{url:"assets/documentation_materials.md.f2717f2f.lean.js",revision:null},{url:"assets/documentation_pack-structure.md.5ca73fad.js",revision:null},{url:"assets/documentation_pack-structure.md.5ca73fad.lean.js",revision:null},{url:"assets/documentation_projectiles.md.5bd6d520.js",revision:null},{url:"assets/documentation_projectiles.md.5bd6d520.lean.js",revision:null},{url:"assets/documentation_queries.md.87ea365e.js",revision:null},{url:"assets/documentation_queries.md.87ea365e.lean.js",revision:null},{url:"assets/documentation_shared-constructs.md.937d80e4.js",revision:null},{url:"assets/documentation_shared-constructs.md.937d80e4.lean.js",revision:null},{url:"assets/documentation_sound-definitions.md.3d3f92e2.js",revision:null},{url:"assets/documentation_sound-definitions.md.3d3f92e2.lean.js",revision:null},{url:"assets/entities_boat-entities.md.c068e952.js",revision:null},{url:"assets/entities_boat-entities.md.c068e952.lean.js",revision:null},{url:"assets/entities_detecting-other-entities.md.c22d09c1.js",revision:null},{url:"assets/entities_detecting-other-entities.md.c22d09c1.lean.js",revision:null},{url:"assets/entities_disabling-team-damage.md.0bc42bda.js",revision:null},{url:"assets/entities_disabling-team-damage.md.0bc42bda.lean.js",revision:null},{url:"assets/entities_dummy-components.md.1892ac3f.js",revision:null},{url:"assets/entities_dummy-components.md.1892ac3f.lean.js",revision:null},{url:"assets/entities_dummy-entities.md.9a619695.js",revision:null},{url:"assets/entities_dummy-entities.md.9a619695.lean.js",revision:null},{url:"assets/entities_entity-attack.md.064a076f.js",revision:null},{url:"assets/entities_entity-attack.md.064a076f.lean.js",revision:null},{url:"assets/entities_entity-events.md.a01551a1.js",revision:null},{url:"assets/entities_entity-events.md.a01551a1.lean.js",revision:null},{url:"assets/entities_entity-holds-item.md.0d33b4f9.js",revision:null},{url:"assets/entities_entity-holds-item.md.0d33b4f9.lean.js",revision:null},{url:"assets/entities_entity-intro-bp.md.d7285ef7.js",revision:null},{url:"assets/entities_entity-intro-bp.md.d7285ef7.lean.js",revision:null},{url:"assets/entities_entity-intro-rp.md.b1ca62ed.js",revision:null},{url:"assets/entities_entity-intro-rp.md.b1ca62ed.lean.js",revision:null},{url:"assets/entities_entity-movement.md.c0826441.js",revision:null},{url:"assets/entities_entity-movement.md.c0826441.lean.js",revision:null},{url:"assets/entities_entity-properties.md.114b6288.js",revision:null},{url:"assets/entities_entity-properties.md.114b6288.lean.js",revision:null},{url:"assets/entities_flying-entities.md.722825c7.js",revision:null},{url:"assets/entities_flying-entities.md.722825c7.lean.js",revision:null},{url:"assets/entities_index.md.528e5665.js",revision:null},{url:"assets/entities_index.md.528e5665.lean.js",revision:null},{url:"assets/entities_introduction-to-aec.md.a967c40f.js",revision:null},{url:"assets/entities_introduction-to-aec.md.a967c40f.lean.js",revision:null},{url:"assets/entities_invulnerable-entities.md.b303d460.js",revision:null},{url:"assets/entities_invulnerable-entities.md.b303d460.lean.js",revision:null},{url:"assets/entities_look-at-entity.md.6f8177ac.js",revision:null},{url:"assets/entities_look-at-entity.md.6f8177ac.lean.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.22e47bbf.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.22e47bbf.lean.js",revision:null},{url:"assets/entities_npc-dialogs.md.7bfd6209.js",revision:null},{url:"assets/entities_npc-dialogs.md.7bfd6209.lean.js",revision:null},{url:"assets/entities_render-controllers.md.94973643.js",revision:null},{url:"assets/entities_render-controllers.md.94973643.lean.js",revision:null},{url:"assets/entities_runtime-identifier.md.412a8ba7.js",revision:null},{url:"assets/entities_runtime-identifier.md.412a8ba7.lean.js",revision:null},{url:"assets/entities_sleeping-entities.md.7fdf3eab.js",revision:null},{url:"assets/entities_sleeping-entities.md.7fdf3eab.lean.js",revision:null},{url:"assets/entities_solid-entities.md.d6b482ef.js",revision:null},{url:"assets/entities_solid-entities.md.d6b482ef.lean.js",revision:null},{url:"assets/entities_spawn-rules.md.c95e0640.js",revision:null},{url:"assets/entities_spawn-rules.md.c95e0640.lean.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.2e305abb.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.2e305abb.lean.js",revision:null},{url:"assets/entities_timers.md.6165e27c.js",revision:null},{url:"assets/entities_timers.md.6165e27c.lean.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.e32475fe.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.e32475fe.lean.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.5328d611.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.5328d611.lean.js",revision:null},{url:"assets/entities_village-mechanic.md.07d2c5d1.js",revision:null},{url:"assets/entities_village-mechanic.md.07d2c5d1.lean.js",revision:null},{url:"assets/entities_vuc-full.md.a3d0c8ae.lean.js",revision:null},{url:"assets/entities_vusr-full.md.999a0c15.js",revision:null},{url:"assets/entities_vusr-full.md.999a0c15.lean.js",revision:null},{url:"assets/graph-test.md.765963d0.js",revision:null},{url:"assets/graph-test.md.765963d0.lean.js",revision:null},{url:"assets/guide_addons.md.8ced830e.js",revision:null},{url:"assets/guide_addons.md.8ced830e.lean.js",revision:null},{url:"assets/guide_advancedmanifest.md.4b455b61.js",revision:null},{url:"assets/guide_advancedmanifest.md.4b455b61.lean.js",revision:null},{url:"assets/guide_blockbench.md.01d2db45.js",revision:null},{url:"assets/guide_blockbench.md.01d2db45.lean.js",revision:null},{url:"assets/guide_custom-entity.md.69e5f5a9.js",revision:null},{url:"assets/guide_custom-entity.md.69e5f5a9.lean.js",revision:null},{url:"assets/guide_custom-item.md.fcca239f.js",revision:null},{url:"assets/guide_custom-item.md.fcca239f.lean.js",revision:null},{url:"assets/guide_download-packs.md.051ca9e6.js",revision:null},{url:"assets/guide_download-packs.md.051ca9e6.lean.js",revision:null},{url:"assets/guide_format-version.md.8a2ccf4d.js",revision:null},{url:"assets/guide_format-version.md.8a2ccf4d.lean.js",revision:null},{url:"assets/guide_index.md.8ae5b8c5.js",revision:null},{url:"assets/guide_index.md.8ae5b8c5.lean.js",revision:null},{url:"assets/guide_introduction.md.d8b3769a.js",revision:null},{url:"assets/guide_introduction.md.d8b3769a.lean.js",revision:null},{url:"assets/guide_loot-table.md.dbe2c452.js",revision:null},{url:"assets/guide_loot-table.md.dbe2c452.lean.js",revision:null},{url:"assets/guide_project-setup-android.md.a7aa3844.js",revision:null},{url:"assets/guide_project-setup-android.md.a7aa3844.lean.js",revision:null},{url:"assets/guide_project-setup.md.1e420ea0.js",revision:null},{url:"assets/guide_project-setup.md.1e420ea0.lean.js",revision:null},{url:"assets/guide_software-preparation.md.c754d0c2.js",revision:null},{url:"assets/guide_software-preparation.md.c754d0c2.lean.js",revision:null},{url:"assets/guide_troubleshooting.md.40bfbd33.js",revision:null},{url:"assets/guide_troubleshooting.md.40bfbd33.lean.js",revision:null},{url:"assets/guide_understanding-json.md.687880cc.js",revision:null},{url:"assets/guide_understanding-json.md.687880cc.lean.js",revision:null},{url:"assets/hacktoberfest.md.aae5cabc.js",revision:null},{url:"assets/hacktoberfest.md.aae5cabc.lean.js",revision:null},{url:"assets/index.md.8fca695e.js",revision:null},{url:"assets/index.md.8fca695e.lean.js",revision:null},{url:"assets/items_attachables.md.70595fe8.js",revision:null},{url:"assets/items_attachables.md.70595fe8.lean.js",revision:null},{url:"assets/items_custom-armor.md.cb68865a.js",revision:null},{url:"assets/items_custom-armor.md.cb68865a.lean.js",revision:null},{url:"assets/items_custom-weapon.md.348b1acd.js",revision:null},{url:"assets/items_custom-weapon.md.348b1acd.lean.js",revision:null},{url:"assets/items_enchantments.md.0b742901.js",revision:null},{url:"assets/items_enchantments.md.0b742901.lean.js",revision:null},{url:"assets/items_equipped-item-commands.md.63049a33.js",revision:null},{url:"assets/items_equipped-item-commands.md.63049a33.lean.js",revision:null},{url:"assets/items_index.md.403a7f28.js",revision:null},{url:"assets/items_index.md.403a7f28.lean.js",revision:null},{url:"assets/items_item-identifiers.md.60f7515e.js",revision:null},{url:"assets/items_item-identifiers.md.60f7515e.lean.js",revision:null},{url:"assets/items_items-16.md.e3447ef8.js",revision:null},{url:"assets/items_items-16.md.e3447ef8.lean.js",revision:null},{url:"assets/items_items-intro.md.fea82b8a.js",revision:null},{url:"assets/items_items-intro.md.fea82b8a.lean.js",revision:null},{url:"assets/items_spawning-items.md.b5dd9327.js",revision:null},{url:"assets/items_spawning-items.md.b5dd9327.lean.js",revision:null},{url:"assets/items_spear.md.455ad768.js",revision:null},{url:"assets/items_spear.md.455ad768.lean.js",revision:null},{url:"assets/items_throwable.md.88712072.js",revision:null},{url:"assets/items_throwable.md.88712072.lean.js",revision:null},{url:"assets/items_tool-durability.md.504515fb.js",revision:null},{url:"assets/items_tool-durability.md.504515fb.lean.js",revision:null},{url:"assets/items_troubleshooting-items.md.483cb51d.js",revision:null},{url:"assets/items_troubleshooting-items.md.483cb51d.lean.js",revision:null},{url:"assets/items_vanilla-usage-items.md.53719e8a.js",revision:null},{url:"assets/items_vanilla-usage-items.md.53719e8a.lean.js",revision:null},{url:"assets/items_vui-full.md.dbc595ec.js",revision:null},{url:"assets/items_vui-full.md.dbc595ec.lean.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.ce296ed8.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.ce296ed8.lean.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.b8ddf3ed.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.b8ddf3ed.lean.js",revision:null},{url:"assets/json-ui_best-practices.md.e1e3cd77.js",revision:null},{url:"assets/json-ui_best-practices.md.e1e3cd77.lean.js",revision:null},{url:"assets/json-ui_index.md.c579ff03.js",revision:null},{url:"assets/json-ui_index.md.c579ff03.lean.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.26c46434.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.26c46434.lean.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.5b26da50.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.5b26da50.lean.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.5eebe98b.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.5eebe98b.lean.js",revision:null},{url:"assets/json-ui_string-to-number.md.bc9dc06d.js",revision:null},{url:"assets/json-ui_string-to-number.md.bc9dc06d.lean.js",revision:null},{url:"assets/loot_index.md.f012d132.js",revision:null},{url:"assets/loot_index.md.f012d132.lean.js",revision:null},{url:"assets/loot_item-functions.md.6989709f.js",revision:null},{url:"assets/loot_item-functions.md.6989709f.lean.js",revision:null},{url:"assets/loot_loot-tables.md.c400da39.js",revision:null},{url:"assets/loot_loot-tables.md.c400da39.lean.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.36951397.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.36951397.lean.js",revision:null},{url:"assets/loot_recipes.md.aca51363.js",revision:null},{url:"assets/loot_recipes.md.aca51363.lean.js",revision:null},{url:"assets/loot_trade-tables.md.0647980d.js",revision:null},{url:"assets/loot_trade-tables.md.0647980d.lean.js",revision:null},{url:"assets/loot_trading-behavior.md.f9206d3d.js",revision:null},{url:"assets/loot_trading-behavior.md.f9206d3d.lean.js",revision:null},{url:"assets/meta_addon-performance.md.053647eb.js",revision:null},{url:"assets/meta_addon-performance.md.053647eb.lean.js",revision:null},{url:"assets/meta_index.md.023443a6.js",revision:null},{url:"assets/meta_index.md.023443a6.lean.js",revision:null},{url:"assets/meta_jq.md.e36bb38b.js",revision:null},{url:"assets/meta_jq.md.e36bb38b.lean.js",revision:null},{url:"assets/meta_style-guide.md.5a84c8c1.js",revision:null},{url:"assets/meta_style-guide.md.5a84c8c1.lean.js",revision:null},{url:"assets/meta_useful-links.md.f25d8c17.js",revision:null},{url:"assets/meta_useful-links.md.f25d8c17.lean.js",revision:null},{url:"assets/meta_using-schemas.md.5d262873.js",revision:null},{url:"assets/meta_using-schemas.md.5d262873.lean.js",revision:null},{url:"assets/meta_version-control.md.50309a92.js",revision:null},{url:"assets/meta_version-control.md.50309a92.lean.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.af360a37.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.af360a37.lean.js",revision:null},{url:"assets/nbt_index.md.55741030.js",revision:null},{url:"assets/nbt_index.md.55741030.lean.js",revision:null},{url:"assets/nbt_mcstructure.md.6c4251f2.js",revision:null},{url:"assets/nbt_mcstructure.md.6c4251f2.lean.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.e692336a.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.e692336a.lean.js",revision:null},{url:"assets/nbt_step-by-step-example.md.68b1df53.js",revision:null},{url:"assets/nbt_step-by-step-example.md.68b1df53.lean.js",revision:null},{url:"assets/nbt_structure-limits.md.164e1de2.js",revision:null},{url:"assets/nbt_structure-limits.md.164e1de2.lean.js",revision:null},{url:"assets/particles_disabling-particles.md.40f2b040.js",revision:null},{url:"assets/particles_disabling-particles.md.40f2b040.lean.js",revision:null},{url:"assets/particles_index.md.a089afee.js",revision:null},{url:"assets/particles_index.md.a089afee.lean.js",revision:null},{url:"assets/particles_particles-and-sounds.md.a42895c3.js",revision:null},{url:"assets/particles_particles-and-sounds.md.a42895c3.lean.js",revision:null},{url:"assets/particles_particles.md.bf1df20d.js",revision:null},{url:"assets/particles_particles.md.bf1df20d.lean.js",revision:null},{url:"assets/particles_vanilla-particles.md.c2eac853.js",revision:null},{url:"assets/particles_vanilla-particles.md.c2eac853.lean.js",revision:null},{url:"assets/privacy.md.b1862bd3.js",revision:null},{url:"assets/privacy.md.b1862bd3.lean.js",revision:null},{url:"assets/scripting_api-environment.md.76d290cc.js",revision:null},{url:"assets/scripting_api-environment.md.76d290cc.lean.js",revision:null},{url:"assets/scripting_custom-command.md.c178e999.js",revision:null},{url:"assets/scripting_custom-command.md.c178e999.lean.js",revision:null},{url:"assets/scripting_game-tests.md.7b0d1e58.js",revision:null},{url:"assets/scripting_game-tests.md.7b0d1e58.lean.js",revision:null},{url:"assets/scripting_gametest-form.md.a50a27bc.js",revision:null},{url:"assets/scripting_gametest-form.md.a50a27bc.lean.js",revision:null},{url:"assets/scripting_gametest-qna.md.dd483d20.js",revision:null},{url:"assets/scripting_gametest-qna.md.dd483d20.lean.js",revision:null},{url:"assets/scripting_index.md.bd470345.js",revision:null},{url:"assets/scripting_index.md.bd470345.lean.js",revision:null},{url:"assets/scripting_placement-prevention.md.127d8678.js",revision:null},{url:"assets/scripting_placement-prevention.md.127d8678.lean.js",revision:null},{url:"assets/scripting_resources.md.cf592421.js",revision:null},{url:"assets/scripting_resources.md.cf592421.lean.js",revision:null},{url:"assets/scripting_saving-loading.md.e3b2c70f.js",revision:null},{url:"assets/scripting_saving-loading.md.e3b2c70f.lean.js",revision:null},{url:"assets/scripting_script-modules.md.6ceefc35.js",revision:null},{url:"assets/scripting_script-modules.md.6ceefc35.lean.js",revision:null},{url:"assets/scripting_script-net.md.758f1bc5.js",revision:null},{url:"assets/scripting_script-net.md.758f1bc5.lean.js",revision:null},{url:"assets/scripting_script-server.md.214b6cfc.js",revision:null},{url:"assets/scripting_script-server.md.214b6cfc.lean.js",revision:null},{url:"assets/scripting_script-watchdog.md.e8db9e4a.js",revision:null},{url:"assets/scripting_script-watchdog.md.e8db9e4a.lean.js",revision:null},{url:"assets/scripting_scripting-intro.md.f74962c1.js",revision:null},{url:"assets/scripting_scripting-intro.md.f74962c1.lean.js",revision:null},{url:"assets/scripting_starting-scripts.md.5dff27cf.js",revision:null},{url:"assets/scripting_starting-scripts.md.5dff27cf.lean.js",revision:null},{url:"assets/scripting_troubleshooting.md.6110db18.js",revision:null},{url:"assets/scripting_troubleshooting.md.6110db18.lean.js",revision:null},{url:"assets/scripting_typescript.md.6e570a6c.js",revision:null},{url:"assets/scripting_typescript.md.6e570a6c.lean.js",revision:null},{url:"assets/scripting_what-is-script.md.69926e70.js",revision:null},{url:"assets/scripting_what-is-script.md.69926e70.lean.js",revision:null},{url:"assets/servers_index.md.ea573c6e.js",revision:null},{url:"assets/servers_index.md.ea573c6e.lean.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.d41593c6.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.d41593c6.lean.js",revision:null},{url:"assets/servers_server-software.md.b7ceb796.js",revision:null},{url:"assets/servers_server-software.md.b7ceb796.lean.js",revision:null},{url:"assets/style.69ce7b21.css",revision:null},{url:"assets/test.md.65233bd3.js",revision:null},{url:"assets/test.md.65233bd3.lean.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.f6e4ae41.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.f6e4ae41.lean.js",revision:null},{url:"assets/visuals_animation-effects.md.c4ea9bbc.js",revision:null},{url:"assets/visuals_animation-effects.md.c4ea9bbc.lean.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.eaba1e6f.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.eaba1e6f.lean.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.1c4df64e.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.1c4df64e.lean.js",revision:null},{url:"assets/visuals_death-animations.md.83f88353.js",revision:null},{url:"assets/visuals_death-animations.md.83f88353.lean.js",revision:null},{url:"assets/visuals_glowing-texture.md.71611158.js",revision:null},{url:"assets/visuals_glowing-texture.md.71611158.lean.js",revision:null},{url:"assets/visuals_index.md.0a7d638a.js",revision:null},{url:"assets/visuals_index.md.0a7d638a.lean.js",revision:null},{url:"assets/visuals_introduction.md.0376dd04.js",revision:null},{url:"assets/visuals_introduction.md.0376dd04.lean.js",revision:null},{url:"assets/visuals_leash-position.md.2a02bebd.js",revision:null},{url:"assets/visuals_leash-position.md.2a02bebd.lean.js",revision:null},{url:"assets/visuals_material-creations.md.5614eced.js",revision:null},{url:"assets/visuals_material-creations.md.5614eced.lean.js",revision:null},{url:"assets/visuals_materials.md.b27aed2b.js",revision:null},{url:"assets/visuals_materials.md.b27aed2b.lean.js",revision:null},{url:"assets/visuals_math-based-animations.md.3236eaa2.js",revision:null},{url:"assets/visuals_math-based-animations.md.3236eaa2.lean.js",revision:null},{url:"assets/visuals_player-geometry.md.3a0b46ca.js",revision:null},{url:"assets/visuals_player-geometry.md.3a0b46ca.lean.js",revision:null},{url:"assets/visuals_remove-shadows.md.68a2d267.js",revision:null},{url:"assets/visuals_remove-shadows.md.68a2d267.lean.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.7f0b1a5e.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.7f0b1a5e.lean.js",revision:null},{url:"assets/visuals_structure-presentation.md.0ccc8146.js",revision:null},{url:"assets/visuals_structure-presentation.md.0ccc8146.lean.js",revision:null},{url:"assets/vr_editing-your-first-model.md.8d2f8362.js",revision:null},{url:"assets/vr_editing-your-first-model.md.8d2f8362.lean.js",revision:null},{url:"assets/vr_index.md.1ae09adb.js",revision:null},{url:"assets/vr_index.md.1ae09adb.lean.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.a91ed5b7.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.a91ed5b7.lean.js",revision:null},{url:"assets/vr_pack_setup.md.03dbb565.js",revision:null},{url:"assets/vr_pack_setup.md.03dbb565.lean.js",revision:null},{url:"assets/world-generation_biome-tags.md.95cf83f2.js",revision:null},{url:"assets/world-generation_biome-tags.md.95cf83f2.lean.js",revision:null},{url:"assets/world-generation_biomes.md.c55fbaef.js",revision:null},{url:"assets/world-generation_biomes.md.c55fbaef.lean.js",revision:null},{url:"assets/world-generation_custom-ores.md.a5a1c0d8.js",revision:null},{url:"assets/world-generation_custom-ores.md.a5a1c0d8.lean.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.b8c503f6.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.b8c503f6.lean.js",revision:null},{url:"assets/world-generation_feature-types.md.abbd35a6.js",revision:null},{url:"assets/world-generation_feature-types.md.abbd35a6.lean.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.bb864af3.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.bb864af3.lean.js",revision:null},{url:"assets/world-generation_index.md.f552e467.js",revision:null},{url:"assets/world-generation_index.md.f552e467.lean.js",revision:null},{url:"assets/world-generation_structure-features.md.11035984.js",revision:null},{url:"assets/world-generation_structure-features.md.11035984.lean.js",revision:null},{url:"assets/world-generation_surface-builder.md.b30b1d62.js",revision:null},{url:"assets/world-generation_surface-builder.md.b30b1d62.lean.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.baa75c1c.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.baa75c1c.lean.js",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/images/favicons/android-chrome-192x192.png",revision:"1fb5ac37a9c926d44d9377dffdb866ec"},{url:"assets/images/favicons/android-chrome-256x256.png",revision:"7403912a35eebe25b54355dfd27106af"},{url:"manifest.webmanifest",revision:"c5a08b36b4610e940947bce83726f2a1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
