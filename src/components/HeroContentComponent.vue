<template>
  <div class="bg-white max-h-screen w-full">
    <div
      id="image-splash-mobile"
      class="md:hidden h-[90vh] relative overflow-hidden"
    >
      <div
        class="absolute top-0 left-0 bg-black opacity-50 h-full w-full"
      ></div>
      <img
        :src="mobileBackgroundImage"
        alt="Mobile background image"
        class="h-full min-w-full object-cover object-top"
      />
    </div>
    <div
      id="video-splash-desktop"
      class="hidden md:block relative w-screen overflow-hidden"
    >
      <video
        autoplay
        playsinline
        muted
        loop
        class="w-auto min-h-full min-w-full z-[-1] pointer-events-none"
      >
        <source :src="droneVideo" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="w-full md:w-[40%] lg:w-1/3">
      <router-link to="/contact">
        <div
          class="w-full bg-gray-700 p-8 text-white flex flex-row items-center justify-center text-base"
        >
          <div>
            <h3 class="text-4xl">Get a Quote</h3>
            <p>
              We have a large array of products, let us know what your needs
              are.
            </p>
          </div>
          <div class="ml-8">
            <font-awesome-icon
              :icon="['fas', 'circle-chevron-right']"
              class="text-2xl"
            />
          </div>
        </div>
      </router-link>
    </div>
    <hr class="w-[90%] border border-gray-200 m-auto mt-8" />
  </div>
</template>

<script setup>
import mobileBackgroundImage from "/src/assets/images/home_main_mobile.jpg";
import droneVideo from "/src/assets/videos/droneFootage.mp4";
</script>
