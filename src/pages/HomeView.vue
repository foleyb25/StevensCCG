<template>
  <div>
    <HeroVideo class="hidden md:block" />
    <ImageSlideshow class="md:hidden" />
    <div id="content-container" class="w-full font-din">
      <div
        class="parallax"
        :style="
          scenes[0].imageSrc
            ? `background-image: url(${scene.imageSrc});`
            : 'background-color: black;'
        "
      >
        <div
          class="z-[5] w-full h-full flex flex-col justify-start items-center text-white"
        >
          <div class="mt-8 text-center">
            <p class="text-xl">Welcome To</p>
            <h1 class="text-6xl">Stevens Custom Crushing and Gravel</h1>
            <p class="text-2xl p-24">Introductory Text...</p>
          </div>
        </div>
      </div>

      <!-- Add More Parallax containers here... -->
    </div>
  </div>
</template>

<script setup>
import HeroVideo from "../components/HeroVideo.vue";
import ImageSlideshow from "../components/ImageSlideshow.vue";
import { onMounted, reactive } from "vue";

const scenes = reactive([
  {
    imageSrc: "",
    sectionTitle: "This is a title",
    sectionText: "This is text",
  },
]);

onMounted(() => {
  scenes.forEach((scene) => {
    if (scene.imageSrc) {
      const img = new Image();
      img.src = scene.imageSrc;
    }
  });
});
</script>

<style scoped>
.parallax {
  height: 100vh;
  border-bottom: 10px solid black;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  /* Added for positioning the pseudo-element */
}

.parallax::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
}
</style>
