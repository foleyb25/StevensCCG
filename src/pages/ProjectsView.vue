<template>
  <div
    id="content-container"
    class="absolute top-0 left-0 h-screen w-full font-din bg-black text-white"
  >
    <div
      class="parallax"
      :style="
        Img2 ? `background-image: url(${Img2});` : 'background-color: black;'
      "
    >
      <div
        class="z-[5] w-full h-full flex flex-col justify-start items-center text-white"
      >
        <div class="mt-48 text-center">
          <h1 class="text-6xl">Coming Soon...</h1>
          <div
            id="single-info"
            class="flex flex-col md:flex-row justify-center items-center mt-8"
          >
            <div class="w-full md:w-1/2">
              <div
                class="w-3/4 aspect-square rounded-full m-auto overflow-hidden"
              >
                <img src="" class="object-cover h-full" alt="" />
              </div>
              <h2 class="text-4xl mt-8" />
              <h3 class="text-2xl" />
            </div>
            <div class="w-full md:w-1/2 text-2xl h-ful">
              <div class="w-full p-8">
                <p />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Img2 from "/src/assets/images/img_2.jpeg";
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

<style scoped>
.parallax {
  min-height: 100vh;
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
  /* 50% opacity black */
  z-index: 0;
  /* Positioned behind the content */
}

.parallax-white::before {
  background-color: rgb(255, 255, 255, 0.5);
  /* 50% opacity black */
}
</style>
