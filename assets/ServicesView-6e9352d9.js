import{I as _}from"./img_1-d12ee9cd.js";import{P as o,I as f}from"./ParallaxComponent-5bf2f3fc.js";import{_ as h}from"./GetInTouchComponent-0aca4f7a.js";import{_ as x,r as u,o as p,c as m,a as e,t as r,n as g,e as v,g as t,w as n,u as l}from"./index-4611936c.js";const b={class:"card-container aspect-square w-[80%] mt-8"},S={class:"face front"},T={class:"face back"},k={__name:"ServiceBoxComponent",props:{serviceName:{type:String,default:""},shortDescription:{type:String,default:""},longDescription:{type:String,default:""}},setup(a){const s=u(!1),i=()=>{s.value=!s.value};return(c,y)=>(p(),m("div",b,[e("div",{class:g(["card bg-white text-black",{flipped:s.value}]),onClick:i},[e("div",S,[e("h3",null,r(a.serviceName),1),e("p",null,r(a.shortDescription),1)]),e("div",T,[e("p",null,r(a.longDescription),1)])],2)]))}},d=x(k,[["__scopeId","data-v-5df01b32"]]),C={id:"content-container",class:"flex flex-col w-full min-h-screen font-din bg-black text-white"},w=e("div",{class:"z-10 text-center"},[e("h1",{class:"text-6xl"},"Services"),e("p",null," Dive into our range of specialized services designed to meet your every need. ")],-1),N={__name:"ServicesView",setup(a){const s=[{imageSrc:"",sectionTitle:"This is a title",sectionText:"This is text"},{imageSrc:"",sectionTitle:"This is a title",sectionText:"This is text"},{imageSrc:"",sectionTitle:"This is a title",sectionText:"This is text"}];return v(()=>{s.forEach(i=>{if(i.imageSrc){const c=new Image;c.src=i.imageSrc}})}),(i,c)=>(p(),m("div",C,[t(o,{id:"title-parallax",class:"h-screen border-b-[10px] border-black","image-src":l(_)},{default:n(()=>[w]),_:1},8,["image-src"]),t(o,{id:"title-parallax",class:"border-b-[10px] flex-col border-black"},{default:n(()=>[t(d,{"service-name":"Service 1","short-description":"This is a short description. Click me to flip","long-description":"this is a long description"}),t(d,{"service-name":"Service 2","short-description":"This is a short description. Click me to flip","long-description":"this is a long description"})]),_:1}),t(o,{id:"title-parallax",class:"border-b-[10px] flex-col border-black","image-src":l(f)},{default:n(()=>[t(h,{class:"w-[80%] aspect-[14/16]",link:"/request"})]),_:1},8,["image-src"])]))}};export{N as default};
