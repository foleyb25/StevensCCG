<template>
  <div
    id="content-container"
    class="flex flex-col w-full min-h-screen font-din bg-black text-white"
  >
    <ParallaxComponent
      id="title-parallax"
      class="h-screen border-b-[10px] border-black"
      :image-src="Img1"
    >
      <div class="z-10 text-center">
        <h1 class="text-6xl">Services</h1>
        <p>
          Dive into our range of specialized services designed to meet your
          every need.
        </p>
      </div>
    </ParallaxComponent>
    <ParallaxComponent
      id="title-parallax"
      class="border-b-[10px] flex-col border-black"
    >
      <ServiceBoxComponent
        service-name="Service 1"
        short-description="This is a short description. Click me to flip"
        long-description="this is a long description"
      />
      <ServiceBoxComponent
        service-name="Service 2"
        short-description="This is a short description. Click me to flip"
        long-description="this is a long description"
      />
    </ParallaxComponent>
    <ParallaxComponent
      id="title-parallax"
      class="border-b-[10px] flex-col border-black"
      :image-src="Img2"
    >
      <GetInTouchComponent class="w-[80%] aspect-[14/16]" link="/request" />
    </ParallaxComponent>
  </div>
</template>

<script setup>
import Img1 from "/src/assets/images/img_1.webp";
import Img2 from "/src/assets/images/img_2.webp";
import ParallaxComponent from "../components/ParallaxComponent.vue";
import GetInTouchComponent from "../components/GetInTouchComponent.vue";
import ServiceBoxComponent from "../components/ServiceBoxComponent.vue";
import { onMounted } from "vue";

const scenes = [
  {
    imageSrc: "",
    sectionTitle: "This is a title",
    sectionText: "This is text",
  },

  {
    imageSrc: "",
    sectionTitle: "This is a title",
    sectionText: "This is text",
  },
  {
    imageSrc: "",
    sectionTitle: "This is a title",
    sectionText: "This is text",
  },
];

onMounted(() => {
  scenes.forEach((scene) => {
    if (scene.imageSrc) {
      const img = new Image();
      img.src = scene.imageSrc;
    }
  });
});
</script>

<style scoped></style>
