<template>
  <div class="relative w-screen overflow-hidden">
    <div
      class="absolute top-0 left-0 bg-black opacity-50 z-0 w-full h-full"
    ></div>
    <video
      autoplay
      playsinline
      muted
      loop
      class="w-auto min-h-full min-w-full z-[-1] pointer-events-none"
    >
      <source :src="heroVideo" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <!-- Your hero content goes here -->
    <div
      class="font-din hero-content absolute top-8 left-0 z-10 w-full h-full flex flex-row justify-center items-center text-center text-white"
    >
      <div id="logo" class="w-1/2 flex justify-center">
        <img
          :src="stevensCustomLogo"
          class="rounded-full h-48 w-48"
          alt="Stevens Custom Crushing Company Logo"
        />
      </div>
      <div id="tagline" class="w-1/2 flex flex-col justify-start items-start">
        <h1 class="text-start text-2xl md:text-4xl font-bold overflow-clip">
          Stevens Custom Crushing and Gravel
        </h1>
        <p class="text-start mt-4 text-lg md:text-xl">
          Revolutionizing America's infrastructure through innovation
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import heroVideo from "/src/assets/videos/heroVideo.mp4";
import stevensCustomLogo from "/src/assets/images/stevensCustomLogo.webp";
</script>
