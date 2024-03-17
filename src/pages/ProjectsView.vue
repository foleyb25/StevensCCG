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
      <div class="z-10 text-center flex flex-col justify-center items-center">
        <h1 class="text-6xl">Projects</h1>
        <p class="w-1/2">
          See our unique portfolio of projects reflecting our dedication to
          excellence, innovation, and community impact
        </p>
      </div>
    </ParallaxComponent>
    <ParallaxComponent
      id="title-parallax"
      class="border-b-[10px] flex-col border-black"
    >
      <ProjectBoxComponent
        class="w-[80%]"
        project-name="Project 1"
        short-description="this is a short description"
        long-description="This is a longer description"
        :project-image="Img1"
      />
      <ProjectBoxComponent
        class="w-[80%]"
        project-name="Project 2"
        short-description="this is a short description"
        long-description="This is a longer description"
        :project-image="Img1"
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
import Img1 from "/src/assets/images/img_2.webp";
import ParallaxComponent from "../components/ParallaxComponent.vue";
import GetInTouchComponent from "../components/GetInTouchComponent.vue";
import ProjectBoxComponent from "../components/ProjectBoxComponent.vue";
</script>

<style scoped></style>
