<template>
  <header
    :class="[
      'fixed text-black bg-white w-full top-0 left-0 z-[11] transition duration-500',
    ]"
  >
    <div class="bg-yellow-500 z-[48] w-full text-center">
      Under maintenance...
    </div>
    <button
      class="absolute top-16 right-8 z-[1] text-2xl md:hidden"
      @click="$emit('toggleDrawer')"
    >
      <font-awesome-icon :icon="['fas', 'bars']" />
    </button>
    <div class="flex h-32 w-full items-center bg-transparent">
      <div class="w-1/2 h-full flex flex-row items-center justify-start">
        <router-link to="/" class="h-full aspect-square ml-4">
          <div class="flex items-center justify-center h-full w-full">
            <img :src="stevensCustomLogo" alt="Stevens Custom Crushing Logo" />
          </div>
        </router-link>
      </div>

      <nav class="w-1/2 hidden md:flex flex-row items-center justify-center">
        <ul class="flex space-x-24 text-2xl">
          <li>
            <router-link to="/" class="hover:underline"> Home </router-link>
          </li>
          <li>
            <router-link to="/services" class="hover:underline">
              Services
            </router-link>
          </li>
          <li>
            <router-link to="/about" class="hover:underline">
              About
            </router-link>
          </li>
          <li>
            <router-link to="/projects" class="hover:underline">
              Projects
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import stevensCustomLogo from "/src/assets/images/stevensCustomLogo.jpg";

defineEmits(["toggleDrawer"]);

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.margin-scrolled-style {
  margin-top: 6vh;
}

.margin-not-scrolled-style {
  margin-right: 4vh;
}
.center-style {
  justify-content: center;
}
</style>
