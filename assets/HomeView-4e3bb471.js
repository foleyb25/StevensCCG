import{o as l,c,a as e,u as a,b as f,s as d,r,d as u,e as _,f as h,g as n,w as x,T as v,_ as g,n as p,h as w}from"./index-ebc73684.js";const b="/assets/heroVideo-665c3e6d.mp4",y={class:"relative w-screen overflow-hidden"},S=e("div",{class:"absolute top-0 left-0 bg-black opacity-50 z-0 w-full h-full"}," hello ",-1),T={autoplay:"",playsinline:"",muted:"",loop:"",class:"w-auto min-h-full min-w-full z-[-1] pointer-events-none"},C=["src"],I={class:"font-din hero-content absolute top-8 left-0 z-10 w-full h-full flex flex-row justify-center items-center text-center text-white"},$={id:"logo",class:"w-1/2 flex justify-center"},j=["src"],V=e("div",{id:"tagline",class:"w-1/2 flex flex-col justify-start items-start"},[e("h1",{class:"text-start text-2xl md:text-4xl font-bold overflow-clip"}," Stevens Custom Crushing and Gravel "),e("p",{class:"text-start mt-4 text-lg md:text-xl"}," Building America's infrastructure ")],-1),k={__name:"HeroVideo",setup(i){return(s,t)=>(l(),c("div",y,[S,e("video",T,[e("source",{src:a(b),type:"video/mp4"},null,8,C),f(" Your browser does not support the video tag. ")]),e("div",I,[e("div",$,[e("img",{src:a(d),class:"rounded-full h-48 w-48",alt:"Stevens Custom Crushing Company Logo"},null,8,j)]),V])]))}},z="/assets/img_5-a742d0f3.webp",B="/assets/img_6-5a07c17c.webp",H="/assets/img_7-2e46c3a6.webp",N="/assets/img_8-64e392f1.webp",G={class:"relative h-screen w-screen overflow-hidden"},L=["src"],M=e("div",{class:"absolute bg-black opacity-50 top-0 left-0 w-full h-full"},null,-1),A={class:"font-din hero-content absolute top-8 left-0 z-[9] w-full h-full flex flex-col justify-center items-center text-center text-white"},D={id:"logo",class:"w-1/2 flex justify-center mb-8"},E=["src"],W=e("div",{id:"tagline",class:"w-1/2 flex flex-col justify-center items-center"},[e("h1",{class:"text-center text-2xl md:text-4xl font-bold overflow-clip"}," Stevens Custom Crushing and Gravel "),e("p",{class:"text-center mt-4 text-lg md:text-xl"}," Building America's infrastructure ")],-1),Y={__name:"ImageSlideshow",setup(i){const s=r(5e3),t=r(0),o=u([z,B,H,N]),m=()=>{t.value=(t.value+1)%o.length};return _(()=>{s.value=setInterval(()=>{m()},5e3)}),h(()=>{clearInterval(s)}),(Q,R)=>(l(),c("div",G,[n(v,{name:"fade"},{default:x(()=>[(l(),c("img",{key:t.value,src:o[t.value],alt:"Slideshow Image",class:"w-full h-full object-cover absolute top-0 left-0"},null,8,L))]),_:1}),M,e("div",A,[e("div",D,[e("img",{src:a(d),class:"rounded-full h-48 w-48",alt:"Stevens Custom Crushing Company Logo"},null,8,E)]),W])]))}},q="/assets/mountains_desert-eaf8b774.jpeg",F="/assets/mountains_snow-9cd612f6.jpeg";const J={id:"content-container",class:"w-full font-din"},K=w('<div class="z-[5] w-full h-full flex flex-col justify-start items-center text-white" data-v-c1e998ee><div class="mt-8 text-center" data-v-c1e998ee><p class="text-xl" data-v-c1e998ee>Welcome To</p><h1 class="text-6xl" data-v-c1e998ee>Stevens Custom Crushing and Gravel</h1><p class="text-2xl p-24" data-v-c1e998ee>Introductory Text...</p></div></div>',1),O=[K],P={__name:"HomeView",setup(i){const s=u([{imageSrc:"",sectionTitle:"This is a title",sectionText:"This is text"},{imageSrc:q,sectionTitle:"This is a title",sectionText:"This is text"},{imageSrc:F,sectionTitle:"This is a title",sectionText:"This is text"}]);return _(()=>{s.forEach(t=>{if(t.imageSrc){const o=new Image;o.src=t.imageSrc}})}),(t,o)=>(l(),c("div",null,[n(k,{class:"hidden md:block"}),n(Y,{class:"md:hidden"}),e("div",J,[e("div",{class:"parallax",style:p(s[0].imageSrc?`background-image: url(${t.scene.imageSrc});`:"background-color: black;")},O,4)])]))}},X=g(P,[["__scopeId","data-v-c1e998ee"]]);export{X as default};
