import{_ as p,c as r,a,w as e,b as o,d as n,e as t,r as l,o as u}from"./404.md.4e630b9f.js";const Y='{"title":"Render Controllers","description":"","frontmatter":{"title":"Render Controllers","category":"General","tags":["beginner"]},"headers":[{"level":2,"title":"Defining short-names","slug":"defining-short-names"},{"level":2,"title":"Simple render-controller","slug":"simple-render-controller"},{"level":2,"title":"Re-using render controllers","slug":"re-using-render-controllers"},{"level":2,"title":"Creating custom render controllers","slug":"creating-custom-render-controllers"},{"level":2,"title":"Texture layering","slug":"texture-layering"},{"level":3,"title":"Render Controllers","slug":"render-controllers"},{"level":3,"title":"Texture Layering","slug":"texture-layering-1"},{"level":3,"title":"Texture Layering with Variance","slug":"texture-layering-with-variance"},{"level":3,"title":"Dynamic Alternate Geometries","slug":"dynamic-alternate-geometries"},{"level":2,"title":"Common Mistakes","slug":"common-mistakes"}],"relativePath":"entities/render-controllers.md"}',c={},i=o("p",null,"Render controllers are an often-misunderstood part of the resource pack. But you don't need to be afraid! It would help if you considered render controllers as logic packs that take short-name definitions from the RP Entity File and determine how they will be combined/layered/rendered in-game.",-1),d=o("h2",{id:"defining-short-names",tabindex:"-1"},[n("Defining short-names "),o("a",{class:"header-anchor",href:"#defining-short-names","aria-hidden":"true"},"#")],-1),m=o("p",null,[n("Render controllers work based on the short-name definitions of the RP entity file. Short-names are local identifiers, which we define in the RP entity file, and can then use in the render controller (and other places!). Variables such as "),o("code",null,"geometry"),n(", "),o("code",null,"materials"),n(", and "),o("code",null,"textures"),n(" can be defined in the entity,")],-1),b=o("p",null,"Lets look at a simplified version of the spider RP entity file:",-1),k=n("RP/entity/spider.json"),h=t("",7),y=n("RP/render_controllers/cow.render.json"),q=t("",17),_=n("RP/render_controllers/controller.render.texture_layering.json"),g=t("",3),f=n("RP/entity/my_entity.json"),x=t("",5),v=n("RP/entity/my_entity.json#description"),T=t("",2),w=n("RP/render_controllers/controller.render.wool_only"),A=t("",4),S=n("BP/entities/my_entity.json#components"),C=t("",10),R=n("RP/render_controllers/controller.render.player.third_person.json"),P=t("",3),I=t("",6);function V(j,D,N,E,G,L){const s=l("CodeHeader");return u(),r("div",null,[i,d,m,b,a(s,null,{default:e(()=>[k]),_:1}),h,a(s,null,{default:e(()=>[y]),_:1}),q,a(s,null,{default:e(()=>[_]),_:1}),g,a(s,null,{default:e(()=>[f]),_:1}),x,a(s,null,{default:e(()=>[v]),_:1}),T,a(s,null,{default:e(()=>[w]),_:1}),A,a(s,null,{default:e(()=>[S]),_:1}),C,a(s,null,{default:e(()=>[R]),_:1}),P,a(s),I])}var B=p(c,[["render",V]]);export{Y as __pageData,B as default};