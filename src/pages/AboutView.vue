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
      <div class="z-10 text-center flex flex-col items-center">
        <h1 class="text-6xl">About</h1>
        <p class="w-1/2">
          Dig into who we are, our values, and our commitment to excellence.
          Learn about our journey, team and the vision for the future as we
          forge ahead in the industry.
        </p>
      </div>
    </ParallaxComponent>
    <ParallaxComponent
      id="title-parallax"
      class="border-b-[10px] flex-col border-black"
    >
      <ProfileCardComponent
        class="w-[80%] z-10"
        first-name="first name"
        last-name="last name"
        position-title="position title"
        short-bio="short bio"
        :image-src="Img1"
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
import ProfileCardComponent from "../components/ProfileCardComponent.vue";
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
