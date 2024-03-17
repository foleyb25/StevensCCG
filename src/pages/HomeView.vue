<template>
  <div>
    <HeroVideo class="hidden md:block" />
    <ImageSlideshow
      class="md:hidden"
      sub-heading="Revolutionizing America's infrastructure through innovation"
    />

    <div class="flex flex-col items-center justify-center space-y-8 mt-8">
      <DescriptionBoxComponent
        class="w-[80%] aspect-video animate-me"
        header="Services"
        description="This is an example description"
        link="/services"
      />
      <DescriptionBoxComponent
        class="w-[80%] aspect-video"
        header="Projects"
        description="This is an example description"
        link="/projects"
      />
      <DescriptionBoxComponent
        class="w-[80%] aspect-video"
        header="About"
        description="This is an example description"
        link="/about"
      />
    </div>
    <div class="flex flex-col items-center justify-center my-8">
      <GetInTouchComponent class="w-[80%] aspect-[14/16]" link="/request" />
    </div>
  </div>
</template>

<script setup>
import HeroVideo from "../components/HeroVideo.vue";
import ImageSlideshow from "../components/ImageSlideshow.vue";
import DescriptionBoxComponent from "../components/DescriptionBoxComponent.vue";
import GetInTouchComponent from "../components/GetInTouchComponent.vue";
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
