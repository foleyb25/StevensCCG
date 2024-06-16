<template>
  <div class="bg-white h-screen w-full">
    <carousel :items-to-show="1" wrap-around="true" autoplay="5000" class="">
      <slide v-for="slide in 10" :key="slide">
        <div class="carousel__item">
          <img :src="Img5" alt="Image 5" class="h-screen w-full" />
        </div>
      </slide>

      <template #addons> </template>
    </carousel>
    <div>
      <button @click="next">Next</button>
      <input type="number" min="0" max="9" v-model="currentSlide" />
      <button @click="prev">Prev</button>
    </div>
  </div>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import Img5 from "/src/assets/images/img_5.webp";
import Img6 from "/src/assets/images/img_6.webp";
import Img7 from "/src/assets/images/img_7.webp";
import Img8 from "/src/assets/images/img_8.webp";

export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      Img5: Img5,
    };
  },
};
</script>
