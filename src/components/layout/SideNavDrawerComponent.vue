<template>
  <!-- drawer component -->
  <div
    class="fixed z-40 h-screen p-4 overflow-y-auto bg-white w-80 max-w-full dark:bg-gray-800 font-din"
  >
    <h5
      class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
    >
      Stevens Custom Crushing and Gravel
    </h5>
    <button
      type="button"
      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
      @click="$emit('toggleDrawer')"
    >
      X
      <span class="sr-only">Close menu</span>
    </button>
    <div class="py-4 overflow-y-auto">
      <ul class="space-y-2">
        <li>
          <router-link to="/">
            <button
              class="flex items-center p-2 w-full text-base text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <img :src="homeIcon" class="w-8 h-8" alt="" />
              <span class="flex-1 ml-3 text-left whitespace-nowrap">Home</span>
            </button>
          </router-link>
        </li>
        <li>
          <router-link to="/services">
            <button
              class="flex items-center p-2 w-full text-base text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <img :src="servicesIcon" class="w-8 h-8" alt="" />
              <span class="flex-1 ml-3 text-left whitespace-nowrap"
                >Services</span
              >
            </button>
          </router-link>
        </li>
        <li>
          <router-link to="/about">
            <button
              class="flex items-center p-2 w-full text-base text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <img :src="aboutIcon" class="w-8 h-8" alt="" />
              <span
                class="flex-1 ml-3 text-left whitespace-nowrap"
                sidebar-toggle-item
                >About</span
              >
            </button>
          </router-link>
        </li>
        <li>
          <router-link to="/projects">
            <button
              class="flex items-center p-2 w-full text-base text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <img :src="projectsIcon" class="w-8 h-8" alt="" />
              <span
                class="flex-1 ml-3 text-left whitespace-nowrap"
                sidebar-toggle-item
                >Projects</span
              >
            </button>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import homeIcon from "/src/assets/images/home-icon.svg";
import servicesIcon from "/src/assets/images/services-icon.svg";
import aboutIcon from "/src/assets/images/about-icon.svg";
import projectsIcon from "/src/assets/images/projects-icon.svg";

defineEmits(["toggleDrawer"]);
</script>
