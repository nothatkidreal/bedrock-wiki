if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const t=s||("document"in self?document.currentScript.src:"")||location.href;if(e[t])return;let r={};const a=s=>l(s,t),u={module:{uri:t},exports:r,require:a};e[t]=Promise.all(n.map((s=>u[s]||a(s)))).then((s=>(i(...s),r)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.md.5d9c2588.js",revision:null},{url:"assets/404.md.5d9c2588.lean.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.c52ebeac.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.c52ebeac.lean.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.bc4bd40a.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.bc4bd40a.lean.js",revision:null},{url:"assets/animation-controllers_death-commands.md.d0f3351f.js",revision:null},{url:"assets/animation-controllers_death-commands.md.d0f3351f.lean.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.98527147.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.98527147.lean.js",revision:null},{url:"assets/animation-controllers_index.md.8808a99f.js",revision:null},{url:"assets/animation-controllers_index.md.8808a99f.lean.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.eca45ded.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.eca45ded.lean.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.3b4b10c8.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.3b4b10c8.lean.js",revision:null},{url:"assets/app.bac82718.js",revision:null},{url:"assets/blocks_applying-effects.md.19370652.js",revision:null},{url:"assets/blocks_applying-effects.md.19370652.lean.js",revision:null},{url:"assets/blocks_avoiding-state-limit.md.663c1aec.js",revision:null},{url:"assets/blocks_avoiding-state-limit.md.663c1aec.lean.js",revision:null},{url:"assets/blocks_block-components.md.85313841.js",revision:null},{url:"assets/blocks_block-components.md.85313841.lean.js",revision:null},{url:"assets/blocks_block-events.md.36a77d64.js",revision:null},{url:"assets/blocks_block-events.md.36a77d64.lean.js",revision:null},{url:"assets/blocks_block-models.md.8fcb67c6.js",revision:null},{url:"assets/blocks_block-models.md.8fcb67c6.lean.js",revision:null},{url:"assets/blocks_block-permutations.md.034011b8.js",revision:null},{url:"assets/blocks_block-permutations.md.034011b8.lean.js",revision:null},{url:"assets/blocks_block-shapes.md.abc4c4c8.js",revision:null},{url:"assets/blocks_block-shapes.md.abc4c4c8.lean.js",revision:null},{url:"assets/blocks_block-sounds.md.c03fac60.js",revision:null},{url:"assets/blocks_block-sounds.md.c03fac60.lean.js",revision:null},{url:"assets/blocks_block-states.md.44f992f2.js",revision:null},{url:"assets/blocks_block-states.md.44f992f2.lean.js",revision:null},{url:"assets/blocks_block-tags.md.9dd03eff.js",revision:null},{url:"assets/blocks_block-tags.md.9dd03eff.lean.js",revision:null},{url:"assets/blocks_block-texture-variation.md.e593b01f.js",revision:null},{url:"assets/blocks_block-texture-variation.md.e593b01f.lean.js",revision:null},{url:"assets/blocks_block-traits.md.703c119c.js",revision:null},{url:"assets/blocks_block-traits.md.703c119c.lean.js",revision:null},{url:"assets/blocks_blocks-experimental.md.e6a92a97.js",revision:null},{url:"assets/blocks_blocks-experimental.md.e6a92a97.lean.js",revision:null},{url:"assets/blocks_blocks-intro.md.44cae5d0.js",revision:null},{url:"assets/blocks_blocks-intro.md.44cae5d0.lean.js",revision:null},{url:"assets/blocks_custom-crops.md.155b44e0.js",revision:null},{url:"assets/blocks_custom-crops.md.155b44e0.lean.js",revision:null},{url:"assets/blocks_custom-fluids.md.76d9d9b7.js",revision:null},{url:"assets/blocks_custom-fluids.md.76d9d9b7.lean.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.76dc04f7.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.76dc04f7.lean.js",revision:null},{url:"assets/blocks_custom-glazed-terracotta.md.fa30f118.js",revision:null},{url:"assets/blocks_custom-glazed-terracotta.md.fa30f118.lean.js",revision:null},{url:"assets/blocks_custom-slabs.md.49837eb7.js",revision:null},{url:"assets/blocks_custom-slabs.md.49837eb7.lean.js",revision:null},{url:"assets/blocks_custom-trapdoors.md.4d8ec79f.js",revision:null},{url:"assets/blocks_custom-trapdoors.md.4d8ec79f.lean.js",revision:null},{url:"assets/blocks_custom-trees.md.40df4f1e.js",revision:null},{url:"assets/blocks_custom-trees.md.40df4f1e.lean.js",revision:null},{url:"assets/blocks_fake-blocks.md.42ea3a3c.js",revision:null},{url:"assets/blocks_fake-blocks.md.42ea3a3c.lean.js",revision:null},{url:"assets/blocks_flipbook-textures.md.91c66b21.js",revision:null},{url:"assets/blocks_flipbook-textures.md.91c66b21.lean.js",revision:null},{url:"assets/blocks_index.md.35d16e5e.js",revision:null},{url:"assets/blocks_index.md.35d16e5e.lean.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.a4d7440e.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.a4d7440e.lean.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.ef961b53.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.ef961b53.lean.js",revision:null},{url:"assets/blocks_precise-interaction.md.4503b6c4.js",revision:null},{url:"assets/blocks_precise-interaction.md.4503b6c4.lean.js",revision:null},{url:"assets/blocks_precise-rotation.md.421a58c7.js",revision:null},{url:"assets/blocks_precise-rotation.md.421a58c7.lean.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.1d95362c.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.1d95362c.lean.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.37d43793.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.37d43793.lean.js",revision:null},{url:"assets/chunks/3.035a77e6.js",revision:null},{url:"assets/chunks/4.bf191be1.js",revision:null},{url:"assets/chunks/6.07d6a5aa.js",revision:null},{url:"assets/chunks/AlgoliaSearch.61bbf09f.js",revision:null},{url:"assets/chunks/compound.3f8f82ad.js",revision:null},{url:"assets/chunks/content_log.09e62547.js",revision:null},{url:"assets/chunks/Contributors.7f10d497.js",revision:null},{url:"assets/chunks/gametick.8221204e.js",revision:null},{url:"assets/chunks/settings_2.b0f9bbd3.js",revision:null},{url:"assets/chunks/snippets.5bdbd1d4.js",revision:null},{url:"assets/chunks/structure.a9b5a4fc.js",revision:null},{url:"assets/commands_block-entities.md.130209e1.js",revision:null},{url:"assets/commands_block-entities.md.130209e1.lean.js",revision:null},{url:"assets/commands_block-states.md.d3ae22dc.js",revision:null},{url:"assets/commands_block-states.md.d3ae22dc.lean.js",revision:null},{url:"assets/commands_damage.md.00eae76e.js",revision:null},{url:"assets/commands_damage.md.00eae76e.lean.js",revision:null},{url:"assets/commands_entity-counter.md.17f89933.js",revision:null},{url:"assets/commands_entity-counter.md.17f89933.lean.js",revision:null},{url:"assets/commands_index.md.ec74f3a8.js",revision:null},{url:"assets/commands_index.md.ec74f3a8.lean.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.4c73320a.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.4c73320a.lean.js",revision:null},{url:"assets/commands_mcfunctions.md.96c06058.js",revision:null},{url:"assets/commands_mcfunctions.md.96c06058.lean.js",revision:null},{url:"assets/commands_nbt-commands.md.31b7a23f.js",revision:null},{url:"assets/commands_nbt-commands.md.31b7a23f.lean.js",revision:null},{url:"assets/commands_new-execute.md.03f22300.js",revision:null},{url:"assets/commands_new-execute.md.03f22300.lean.js",revision:null},{url:"assets/commands_on-first-join.md.bd520f27.js",revision:null},{url:"assets/commands_on-first-join.md.bd520f27.lean.js",revision:null},{url:"assets/commands_on-first-world-load.md.5a95ceb5.js",revision:null},{url:"assets/commands_on-first-world-load.md.5a95ceb5.lean.js",revision:null},{url:"assets/commands_on-player-death.md.5ab35808.js",revision:null},{url:"assets/commands_on-player-death.md.5ab35808.lean.js",revision:null},{url:"assets/commands_on-player-join.md.02b6beeb.js",revision:null},{url:"assets/commands_on-player-join.md.02b6beeb.lean.js",revision:null},{url:"assets/commands_on-player-leave.md.d75c33b7.js",revision:null},{url:"assets/commands_on-player-leave.md.d75c33b7.lean.js",revision:null},{url:"assets/commands_on-player-respawn.md.50a8d33c.js",revision:null},{url:"assets/commands_on-player-respawn.md.50a8d33c.lean.js",revision:null},{url:"assets/commands_playsound.md.410ef477.js",revision:null},{url:"assets/commands_playsound.md.410ef477.lean.js",revision:null},{url:"assets/commands_relative-coordinates.md.4e82d1b1.js",revision:null},{url:"assets/commands_relative-coordinates.md.4e82d1b1.lean.js",revision:null},{url:"assets/commands_scoreboard-operations.md.5f456d36.js",revision:null},{url:"assets/commands_scoreboard-operations.md.5f456d36.lean.js",revision:null},{url:"assets/commands_scoreboard-timers.md.c686f580.js",revision:null},{url:"assets/commands_scoreboard-timers.md.c686f580.lean.js",revision:null},{url:"assets/commands_selectors.md.c0c05e36.js",revision:null},{url:"assets/commands_selectors.md.c0c05e36.lean.js",revision:null},{url:"assets/commands_tellraw.md.5e452e55.js",revision:null},{url:"assets/commands_tellraw.md.5e452e55.lean.js",revision:null},{url:"assets/concepts_contents.md.cde9f63f.js",revision:null},{url:"assets/concepts_contents.md.cde9f63f.lean.js",revision:null},{url:"assets/concepts_emojis.md.2cfae8d8.js",revision:null},{url:"assets/concepts_emojis.md.2cfae8d8.lean.js",revision:null},{url:"assets/concepts_index.md.776a40c4.js",revision:null},{url:"assets/concepts_index.md.776a40c4.lean.js",revision:null},{url:"assets/concepts_molang.md.b71506b4.js",revision:null},{url:"assets/concepts_molang.md.b71506b4.lean.js",revision:null},{url:"assets/concepts_namespaces.md.84673c89.js",revision:null},{url:"assets/concepts_namespaces.md.84673c89.lean.js",revision:null},{url:"assets/concepts_overwriting-assets.md.cc6ab88f.js",revision:null},{url:"assets/concepts_overwriting-assets.md.cc6ab88f.lean.js",revision:null},{url:"assets/concepts_shaders.md.42142f59.js",revision:null},{url:"assets/concepts_shaders.md.42142f59.lean.js",revision:null},{url:"assets/concepts_sounds.md.8cbbc48b.js",revision:null},{url:"assets/concepts_sounds.md.8cbbc48b.lean.js",revision:null},{url:"assets/concepts_subpacks.md.2e53013f.js",revision:null},{url:"assets/concepts_subpacks.md.2e53013f.lean.js",revision:null},{url:"assets/concepts_text-and-translations.md.a40f5fb5.js",revision:null},{url:"assets/concepts_text-and-translations.md.a40f5fb5.lean.js",revision:null},{url:"assets/concepts_textures-list.md.b80cb17c.js",revision:null},{url:"assets/concepts_textures-list.md.b80cb17c.lean.js",revision:null},{url:"assets/contribute-how-to.md.01ed44d6.js",revision:null},{url:"assets/contribute-how-to.md.01ed44d6.lean.js",revision:null},{url:"assets/contribute-style.md.86704ae5.js",revision:null},{url:"assets/contribute-style.md.86704ae5.lean.js",revision:null},{url:"assets/contribute.md.d2016845.js",revision:null},{url:"assets/contribute.md.d2016845.lean.js",revision:null},{url:"assets/discord.md.122506e0.js",revision:null},{url:"assets/discord.md.122506e0.lean.js",revision:null},{url:"assets/documentation_advanced-molang.md.a026c15b.js",revision:null},{url:"assets/documentation_advanced-molang.md.a026c15b.lean.js",revision:null},{url:"assets/documentation_creative-categories.md.7dfb3115.js",revision:null},{url:"assets/documentation_creative-categories.md.7dfb3115.lean.js",revision:null},{url:"assets/documentation_file-types.md.3aaad08f.js",revision:null},{url:"assets/documentation_file-types.md.3aaad08f.lean.js",revision:null},{url:"assets/documentation_fog-ids.md.13e4816a.js",revision:null},{url:"assets/documentation_fog-ids.md.13e4816a.lean.js",revision:null},{url:"assets/documentation_index.md.7db502bd.js",revision:null},{url:"assets/documentation_index.md.7db502bd.lean.js",revision:null},{url:"assets/documentation_material-config-description.md.03b4a286.js",revision:null},{url:"assets/documentation_material-config-description.md.03b4a286.lean.js",revision:null},{url:"assets/documentation_materials.md.b13b8f26.js",revision:null},{url:"assets/documentation_materials.md.b13b8f26.lean.js",revision:null},{url:"assets/documentation_pack-structure.md.49d9fe93.js",revision:null},{url:"assets/documentation_pack-structure.md.49d9fe93.lean.js",revision:null},{url:"assets/documentation_projectiles.md.ed96781e.js",revision:null},{url:"assets/documentation_projectiles.md.ed96781e.lean.js",revision:null},{url:"assets/documentation_queries.md.0c2c675e.js",revision:null},{url:"assets/documentation_queries.md.0c2c675e.lean.js",revision:null},{url:"assets/documentation_shared-constructs.md.39737475.js",revision:null},{url:"assets/documentation_shared-constructs.md.39737475.lean.js",revision:null},{url:"assets/documentation_sound-definitions.md.cd9497c3.js",revision:null},{url:"assets/documentation_sound-definitions.md.cd9497c3.lean.js",revision:null},{url:"assets/entities_boat-entities.md.e505c9c2.js",revision:null},{url:"assets/entities_boat-entities.md.e505c9c2.lean.js",revision:null},{url:"assets/entities_detecting-other-entities.md.a915dfd6.js",revision:null},{url:"assets/entities_detecting-other-entities.md.a915dfd6.lean.js",revision:null},{url:"assets/entities_disabling-team-damage.md.233e2e3f.js",revision:null},{url:"assets/entities_disabling-team-damage.md.233e2e3f.lean.js",revision:null},{url:"assets/entities_dummy-components.md.865ee450.js",revision:null},{url:"assets/entities_dummy-components.md.865ee450.lean.js",revision:null},{url:"assets/entities_dummy-entities.md.0caac930.js",revision:null},{url:"assets/entities_dummy-entities.md.0caac930.lean.js",revision:null},{url:"assets/entities_entity-attack.md.9aaad1b0.js",revision:null},{url:"assets/entities_entity-attack.md.9aaad1b0.lean.js",revision:null},{url:"assets/entities_entity-events.md.9012c51f.js",revision:null},{url:"assets/entities_entity-events.md.9012c51f.lean.js",revision:null},{url:"assets/entities_entity-holds-item.md.d14b8f97.js",revision:null},{url:"assets/entities_entity-holds-item.md.d14b8f97.lean.js",revision:null},{url:"assets/entities_entity-intro-bp.md.823fb64f.js",revision:null},{url:"assets/entities_entity-intro-bp.md.823fb64f.lean.js",revision:null},{url:"assets/entities_entity-intro-rp.md.e1f7bad5.js",revision:null},{url:"assets/entities_entity-intro-rp.md.e1f7bad5.lean.js",revision:null},{url:"assets/entities_entity-movement.md.51eb7c7e.js",revision:null},{url:"assets/entities_entity-movement.md.51eb7c7e.lean.js",revision:null},{url:"assets/entities_entity-properties.md.16fdd5c9.js",revision:null},{url:"assets/entities_entity-properties.md.16fdd5c9.lean.js",revision:null},{url:"assets/entities_flying-entities.md.59b50093.js",revision:null},{url:"assets/entities_flying-entities.md.59b50093.lean.js",revision:null},{url:"assets/entities_index.md.b8fd0dea.js",revision:null},{url:"assets/entities_index.md.b8fd0dea.lean.js",revision:null},{url:"assets/entities_introduction-to-aec.md.a3490edf.js",revision:null},{url:"assets/entities_introduction-to-aec.md.a3490edf.lean.js",revision:null},{url:"assets/entities_invulnerable-entities.md.ea4fede4.js",revision:null},{url:"assets/entities_invulnerable-entities.md.ea4fede4.lean.js",revision:null},{url:"assets/entities_look-at-entity.md.995a7714.js",revision:null},{url:"assets/entities_look-at-entity.md.995a7714.lean.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.4dc13e4e.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.4dc13e4e.lean.js",revision:null},{url:"assets/entities_npc-dialogs.md.41182ad8.js",revision:null},{url:"assets/entities_npc-dialogs.md.41182ad8.lean.js",revision:null},{url:"assets/entities_render-controllers.md.95287ff5.js",revision:null},{url:"assets/entities_render-controllers.md.95287ff5.lean.js",revision:null},{url:"assets/entities_runtime-identifier.md.45d10f93.js",revision:null},{url:"assets/entities_runtime-identifier.md.45d10f93.lean.js",revision:null},{url:"assets/entities_sleeping-entities.md.faf8d6ce.js",revision:null},{url:"assets/entities_sleeping-entities.md.faf8d6ce.lean.js",revision:null},{url:"assets/entities_solid-entities.md.6c9c5a34.js",revision:null},{url:"assets/entities_solid-entities.md.6c9c5a34.lean.js",revision:null},{url:"assets/entities_spawn-rules.md.2355b6f9.js",revision:null},{url:"assets/entities_spawn-rules.md.2355b6f9.lean.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.1fa787ec.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.1fa787ec.lean.js",revision:null},{url:"assets/entities_timers.md.b2088459.js",revision:null},{url:"assets/entities_timers.md.b2088459.lean.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.219a6022.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.219a6022.lean.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.d465bd0d.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.d465bd0d.lean.js",revision:null},{url:"assets/entities_village-mechanic.md.f8f47906.js",revision:null},{url:"assets/entities_village-mechanic.md.f8f47906.lean.js",revision:null},{url:"assets/entities_vuc-full.md.45ad34a3.lean.js",revision:null},{url:"assets/entities_vusr-full.md.5fa45cb2.js",revision:null},{url:"assets/entities_vusr-full.md.5fa45cb2.lean.js",revision:null},{url:"assets/graph-test.md.462b9289.js",revision:null},{url:"assets/graph-test.md.462b9289.lean.js",revision:null},{url:"assets/guide_addons.md.dc8940c6.js",revision:null},{url:"assets/guide_addons.md.dc8940c6.lean.js",revision:null},{url:"assets/guide_advancedmanifest.md.bd93f186.js",revision:null},{url:"assets/guide_advancedmanifest.md.bd93f186.lean.js",revision:null},{url:"assets/guide_blockbench.md.8e98e2bb.js",revision:null},{url:"assets/guide_blockbench.md.8e98e2bb.lean.js",revision:null},{url:"assets/guide_custom-entity.md.7969c0bf.js",revision:null},{url:"assets/guide_custom-entity.md.7969c0bf.lean.js",revision:null},{url:"assets/guide_custom-item.md.92804225.js",revision:null},{url:"assets/guide_custom-item.md.92804225.lean.js",revision:null},{url:"assets/guide_download-packs.md.7ff55c19.js",revision:null},{url:"assets/guide_download-packs.md.7ff55c19.lean.js",revision:null},{url:"assets/guide_format-version.md.b3ac2349.js",revision:null},{url:"assets/guide_format-version.md.b3ac2349.lean.js",revision:null},{url:"assets/guide_index.md.ace568b6.js",revision:null},{url:"assets/guide_index.md.ace568b6.lean.js",revision:null},{url:"assets/guide_introduction.md.2e69585b.js",revision:null},{url:"assets/guide_introduction.md.2e69585b.lean.js",revision:null},{url:"assets/guide_loot-table.md.85fb6581.js",revision:null},{url:"assets/guide_loot-table.md.85fb6581.lean.js",revision:null},{url:"assets/guide_project-setup-android.md.39a094b9.js",revision:null},{url:"assets/guide_project-setup-android.md.39a094b9.lean.js",revision:null},{url:"assets/guide_project-setup.md.bb13926d.js",revision:null},{url:"assets/guide_project-setup.md.bb13926d.lean.js",revision:null},{url:"assets/guide_software-preparation.md.1079dc1a.js",revision:null},{url:"assets/guide_software-preparation.md.1079dc1a.lean.js",revision:null},{url:"assets/guide_troubleshooting.md.0df9b6db.js",revision:null},{url:"assets/guide_troubleshooting.md.0df9b6db.lean.js",revision:null},{url:"assets/guide_understanding-json.md.05559619.js",revision:null},{url:"assets/guide_understanding-json.md.05559619.lean.js",revision:null},{url:"assets/hacktoberfest.md.66828454.js",revision:null},{url:"assets/hacktoberfest.md.66828454.lean.js",revision:null},{url:"assets/index.md.b08a568d.js",revision:null},{url:"assets/index.md.b08a568d.lean.js",revision:null},{url:"assets/items_attachables.md.e8f61406.js",revision:null},{url:"assets/items_attachables.md.e8f61406.lean.js",revision:null},{url:"assets/items_custom-armor.md.bfa00657.js",revision:null},{url:"assets/items_custom-armor.md.bfa00657.lean.js",revision:null},{url:"assets/items_custom-weapon.md.5cc0213c.js",revision:null},{url:"assets/items_custom-weapon.md.5cc0213c.lean.js",revision:null},{url:"assets/items_enchantments.md.f484b41a.js",revision:null},{url:"assets/items_enchantments.md.f484b41a.lean.js",revision:null},{url:"assets/items_equipped-item-commands.md.0c7203d2.js",revision:null},{url:"assets/items_equipped-item-commands.md.0c7203d2.lean.js",revision:null},{url:"assets/items_index.md.46f4c893.js",revision:null},{url:"assets/items_index.md.46f4c893.lean.js",revision:null},{url:"assets/items_item-identifiers.md.f582fe86.js",revision:null},{url:"assets/items_item-identifiers.md.f582fe86.lean.js",revision:null},{url:"assets/items_item-tags.md.28244077.js",revision:null},{url:"assets/items_item-tags.md.28244077.lean.js",revision:null},{url:"assets/items_items-16.md.5b607ba6.js",revision:null},{url:"assets/items_items-16.md.5b607ba6.lean.js",revision:null},{url:"assets/items_items-intro.md.78b0ff6d.js",revision:null},{url:"assets/items_items-intro.md.78b0ff6d.lean.js",revision:null},{url:"assets/items_numerical-item-ids.md.941236f9.js",revision:null},{url:"assets/items_numerical-item-ids.md.941236f9.lean.js",revision:null},{url:"assets/items_spawning-items.md.87e2df21.js",revision:null},{url:"assets/items_spawning-items.md.87e2df21.lean.js",revision:null},{url:"assets/items_spear.md.ca0daf2c.js",revision:null},{url:"assets/items_spear.md.ca0daf2c.lean.js",revision:null},{url:"assets/items_throwable.md.79ede2ca.js",revision:null},{url:"assets/items_throwable.md.79ede2ca.lean.js",revision:null},{url:"assets/items_tool-durability.md.d47907fd.js",revision:null},{url:"assets/items_tool-durability.md.d47907fd.lean.js",revision:null},{url:"assets/items_troubleshooting-items.md.1029d78d.js",revision:null},{url:"assets/items_troubleshooting-items.md.1029d78d.lean.js",revision:null},{url:"assets/items_vanilla-usage-items.md.7cf6f097.js",revision:null},{url:"assets/items_vanilla-usage-items.md.7cf6f097.lean.js",revision:null},{url:"assets/items_vui-full.md.2c16e0aa.js",revision:null},{url:"assets/items_vui-full.md.2c16e0aa.lean.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.bfead581.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.bfead581.lean.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.70529c7d.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.70529c7d.lean.js",revision:null},{url:"assets/json-ui_best-practices.md.49957611.js",revision:null},{url:"assets/json-ui_best-practices.md.49957611.lean.js",revision:null},{url:"assets/json-ui_index.md.d027d359.js",revision:null},{url:"assets/json-ui_index.md.d027d359.lean.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.e5edfcd3.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.e5edfcd3.lean.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.bb1fb06b.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.bb1fb06b.lean.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.454d181f.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.454d181f.lean.js",revision:null},{url:"assets/json-ui_string-to-number.md.b75899aa.js",revision:null},{url:"assets/json-ui_string-to-number.md.b75899aa.lean.js",revision:null},{url:"assets/loot_index.md.33d6ed72.js",revision:null},{url:"assets/loot_index.md.33d6ed72.lean.js",revision:null},{url:"assets/loot_item-functions.md.14f61b6e.js",revision:null},{url:"assets/loot_item-functions.md.14f61b6e.lean.js",revision:null},{url:"assets/loot_loot-tables.md.cf57929f.js",revision:null},{url:"assets/loot_loot-tables.md.cf57929f.lean.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.127a3621.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.127a3621.lean.js",revision:null},{url:"assets/loot_recipes.md.5f306530.js",revision:null},{url:"assets/loot_recipes.md.5f306530.lean.js",revision:null},{url:"assets/loot_trade-tables.md.23815fec.js",revision:null},{url:"assets/loot_trade-tables.md.23815fec.lean.js",revision:null},{url:"assets/loot_trading-behavior.md.1e465dab.js",revision:null},{url:"assets/loot_trading-behavior.md.1e465dab.lean.js",revision:null},{url:"assets/meta_addon-performance.md.cc01c66c.js",revision:null},{url:"assets/meta_addon-performance.md.cc01c66c.lean.js",revision:null},{url:"assets/meta_index.md.eedc6955.js",revision:null},{url:"assets/meta_index.md.eedc6955.lean.js",revision:null},{url:"assets/meta_jq.md.fade4ac0.js",revision:null},{url:"assets/meta_jq.md.fade4ac0.lean.js",revision:null},{url:"assets/meta_style-guide.md.20a1e6d7.js",revision:null},{url:"assets/meta_style-guide.md.20a1e6d7.lean.js",revision:null},{url:"assets/meta_useful-links.md.d55c1f74.js",revision:null},{url:"assets/meta_useful-links.md.d55c1f74.lean.js",revision:null},{url:"assets/meta_using-schemas.md.721425b6.js",revision:null},{url:"assets/meta_using-schemas.md.721425b6.lean.js",revision:null},{url:"assets/meta_version-control.md.f82b8490.js",revision:null},{url:"assets/meta_version-control.md.f82b8490.lean.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.fb40c004.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.fb40c004.lean.js",revision:null},{url:"assets/nbt_index.md.711b57d2.js",revision:null},{url:"assets/nbt_index.md.711b57d2.lean.js",revision:null},{url:"assets/nbt_mcstructure.md.ea3f9f48.js",revision:null},{url:"assets/nbt_mcstructure.md.ea3f9f48.lean.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.4beb957f.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.4beb957f.lean.js",revision:null},{url:"assets/nbt_step-by-step-example.md.8420fb60.js",revision:null},{url:"assets/nbt_step-by-step-example.md.8420fb60.lean.js",revision:null},{url:"assets/nbt_structure-limits.md.1368ebc4.js",revision:null},{url:"assets/nbt_structure-limits.md.1368ebc4.lean.js",revision:null},{url:"assets/particles_disabling-particles.md.2f4d1f52.js",revision:null},{url:"assets/particles_disabling-particles.md.2f4d1f52.lean.js",revision:null},{url:"assets/particles_index.md.f3d44d0c.js",revision:null},{url:"assets/particles_index.md.f3d44d0c.lean.js",revision:null},{url:"assets/particles_particles-and-sounds.md.71e257d5.js",revision:null},{url:"assets/particles_particles-and-sounds.md.71e257d5.lean.js",revision:null},{url:"assets/particles_particles.md.1399ce35.js",revision:null},{url:"assets/particles_particles.md.1399ce35.lean.js",revision:null},{url:"assets/particles_vanilla-particles.md.c409ef13.js",revision:null},{url:"assets/particles_vanilla-particles.md.c409ef13.lean.js",revision:null},{url:"assets/privacy.md.d4d8a31c.js",revision:null},{url:"assets/privacy.md.d4d8a31c.lean.js",revision:null},{url:"assets/scripting_api-environment.md.133ba2de.js",revision:null},{url:"assets/scripting_api-environment.md.133ba2de.lean.js",revision:null},{url:"assets/scripting_custom-command.md.f53516c8.js",revision:null},{url:"assets/scripting_custom-command.md.f53516c8.lean.js",revision:null},{url:"assets/scripting_game-tests.md.ecd3ab3e.js",revision:null},{url:"assets/scripting_game-tests.md.ecd3ab3e.lean.js",revision:null},{url:"assets/scripting_gametest-form.md.14d9b74e.js",revision:null},{url:"assets/scripting_gametest-form.md.14d9b74e.lean.js",revision:null},{url:"assets/scripting_gametest-qna.md.7fa87939.js",revision:null},{url:"assets/scripting_gametest-qna.md.7fa87939.lean.js",revision:null},{url:"assets/scripting_index.md.6021399c.js",revision:null},{url:"assets/scripting_index.md.6021399c.lean.js",revision:null},{url:"assets/scripting_placement-prevention.md.22f18187.js",revision:null},{url:"assets/scripting_placement-prevention.md.22f18187.lean.js",revision:null},{url:"assets/scripting_resources.md.658fb98f.js",revision:null},{url:"assets/scripting_resources.md.658fb98f.lean.js",revision:null},{url:"assets/scripting_saving-loading.md.68760446.js",revision:null},{url:"assets/scripting_saving-loading.md.68760446.lean.js",revision:null},{url:"assets/scripting_script-modules.md.16ccfd1f.js",revision:null},{url:"assets/scripting_script-modules.md.16ccfd1f.lean.js",revision:null},{url:"assets/scripting_script-net.md.c2989eb0.js",revision:null},{url:"assets/scripting_script-net.md.c2989eb0.lean.js",revision:null},{url:"assets/scripting_script-server.md.6a6cff89.js",revision:null},{url:"assets/scripting_script-server.md.6a6cff89.lean.js",revision:null},{url:"assets/scripting_script-watchdog.md.04123cc1.js",revision:null},{url:"assets/scripting_script-watchdog.md.04123cc1.lean.js",revision:null},{url:"assets/scripting_scripting-editor-qna.md.419d62ec.js",revision:null},{url:"assets/scripting_scripting-editor-qna.md.419d62ec.lean.js",revision:null},{url:"assets/scripting_scripting-intro.md.3e7fd243.js",revision:null},{url:"assets/scripting_scripting-intro.md.3e7fd243.lean.js",revision:null},{url:"assets/scripting_starting-scripts.md.37eac762.js",revision:null},{url:"assets/scripting_starting-scripts.md.37eac762.lean.js",revision:null},{url:"assets/scripting_troubleshooting.md.26ea404b.js",revision:null},{url:"assets/scripting_troubleshooting.md.26ea404b.lean.js",revision:null},{url:"assets/scripting_typescript.md.0d0a43ec.js",revision:null},{url:"assets/scripting_typescript.md.0d0a43ec.lean.js",revision:null},{url:"assets/scripting_what-is-script.md.afaf81cf.js",revision:null},{url:"assets/scripting_what-is-script.md.afaf81cf.lean.js",revision:null},{url:"assets/servers_index.md.9f94dcca.js",revision:null},{url:"assets/servers_index.md.9f94dcca.lean.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.c6e9a9cc.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.c6e9a9cc.lean.js",revision:null},{url:"assets/servers_server-software.md.a8c944f5.js",revision:null},{url:"assets/servers_server-software.md.a8c944f5.lean.js",revision:null},{url:"assets/style.9b032316.css",revision:null},{url:"assets/test.md.449e764d.js",revision:null},{url:"assets/test.md.449e764d.lean.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.0c94feb7.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.0c94feb7.lean.js",revision:null},{url:"assets/visuals_animation-effects.md.3732b028.js",revision:null},{url:"assets/visuals_animation-effects.md.3732b028.lean.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.d4715565.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.d4715565.lean.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.cd51a228.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.cd51a228.lean.js",revision:null},{url:"assets/visuals_death-animations.md.336af8c3.js",revision:null},{url:"assets/visuals_death-animations.md.336af8c3.lean.js",revision:null},{url:"assets/visuals_glowing-texture.md.45752a03.js",revision:null},{url:"assets/visuals_glowing-texture.md.45752a03.lean.js",revision:null},{url:"assets/visuals_index.md.ebee437a.js",revision:null},{url:"assets/visuals_index.md.ebee437a.lean.js",revision:null},{url:"assets/visuals_introduction.md.26e041a3.js",revision:null},{url:"assets/visuals_introduction.md.26e041a3.lean.js",revision:null},{url:"assets/visuals_leash-position.md.2d12335c.js",revision:null},{url:"assets/visuals_leash-position.md.2d12335c.lean.js",revision:null},{url:"assets/visuals_material-creations.md.77e18033.js",revision:null},{url:"assets/visuals_material-creations.md.77e18033.lean.js",revision:null},{url:"assets/visuals_materials.md.d9645e74.js",revision:null},{url:"assets/visuals_materials.md.d9645e74.lean.js",revision:null},{url:"assets/visuals_math-based-animations.md.8f580e55.js",revision:null},{url:"assets/visuals_math-based-animations.md.8f580e55.lean.js",revision:null},{url:"assets/visuals_player-geometry.md.459e46d2.js",revision:null},{url:"assets/visuals_player-geometry.md.459e46d2.lean.js",revision:null},{url:"assets/visuals_remove-shadows.md.204d595b.js",revision:null},{url:"assets/visuals_remove-shadows.md.204d595b.lean.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.bbfca4bb.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.bbfca4bb.lean.js",revision:null},{url:"assets/visuals_structure-presentation.md.4c79568c.js",revision:null},{url:"assets/visuals_structure-presentation.md.4c79568c.lean.js",revision:null},{url:"assets/vr_editing-your-first-model.md.fad03eca.js",revision:null},{url:"assets/vr_editing-your-first-model.md.fad03eca.lean.js",revision:null},{url:"assets/vr_index.md.adfe44ad.js",revision:null},{url:"assets/vr_index.md.adfe44ad.lean.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.98913120.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.98913120.lean.js",revision:null},{url:"assets/vr_pack_setup.md.b55fb79d.js",revision:null},{url:"assets/vr_pack_setup.md.b55fb79d.lean.js",revision:null},{url:"assets/world-generation_biome-tags.md.de68118a.js",revision:null},{url:"assets/world-generation_biome-tags.md.de68118a.lean.js",revision:null},{url:"assets/world-generation_biomes.md.a735ec6b.js",revision:null},{url:"assets/world-generation_biomes.md.a735ec6b.lean.js",revision:null},{url:"assets/world-generation_custom-ores.md.4c5e6c69.js",revision:null},{url:"assets/world-generation_custom-ores.md.4c5e6c69.lean.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.b0df97e7.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.b0df97e7.lean.js",revision:null},{url:"assets/world-generation_feature-types.md.f27435b9.js",revision:null},{url:"assets/world-generation_feature-types.md.f27435b9.lean.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.dddce4e0.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.dddce4e0.lean.js",revision:null},{url:"assets/world-generation_index.md.652fe4b9.js",revision:null},{url:"assets/world-generation_index.md.652fe4b9.lean.js",revision:null},{url:"assets/world-generation_structure-features.md.4951a7a8.js",revision:null},{url:"assets/world-generation_structure-features.md.4951a7a8.lean.js",revision:null},{url:"assets/world-generation_surface-builder.md.573eac20.js",revision:null},{url:"assets/world-generation_surface-builder.md.573eac20.lean.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.8cc9bda9.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.8cc9bda9.lean.js",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/images/favicons/android-chrome-192x192.png",revision:"1fb5ac37a9c926d44d9377dffdb866ec"},{url:"assets/images/favicons/android-chrome-256x256.png",revision:"7403912a35eebe25b54355dfd27106af"},{url:"manifest.webmanifest",revision:"c5a08b36b4610e940947bce83726f2a1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
