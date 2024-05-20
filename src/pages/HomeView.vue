<template>
  <div class="slideshow-container">
    <div v-for="(image, index) in images" :key="index" class="fade">
      <div class="numbertext">{{ index + 1 }} / {{ images.length }}</div>
      <img :src="image.url" class="h-screen object-fit" />
    </div>

    <!-- Dots navigation -->
    <div style="text-align: center">
      <span
        class="dot"
        v-for="(image, index) in images"
        :key="index"
        :class="{ active: currentSlide === index }"
        @click="currentSlide = index"
      >
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { url: "/src/assets/images/img_1_full.webp" },
        { url: "/src/assets/images/img_2_full.webp" },
        { url: "/src/assets/images/img_3_full.webp" },
      ],
      currentSlide: 0,
    };
  },
  mounted() {
    this.startSlideshow();
  },
  methods: {
    startSlideshow() {
      setInterval(() => {
        this.currentSlide = (this.currentSlide + 1) % this.images.length;
      }, 3000); // Change slide every 3 seconds
    },
  },
};
</script>

<style scoped>
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.dot.active {
  background-color: #717171;
}
</style>
