<template>
  <header
    :class="[
      { 'bg-black': isScrolled },
      'fixed w-full top-0 left-0 z-[11] transition duration-500',
    ]"
  >
    <div class="bg-yellow-500 z-[48] w-full text-center">
      Under maintenance...
    </div>
    <button
      class="absolute top-16 right-8 z-[1] text-white text-2xl md:hidden"
      @click="$emit('toggleDrawer')"
    >
      <font-awesome-icon :icon="['fas', 'bars']" />
    </button>
    <router-link
      to="/request"
      class="absolute top-16 left-[50%] translate-x-[-50%] z-[49] hover:bg-green-800 hover:text-white transition duration-300 ease-in-out bg-green-500 rounded pr-2 pl-2 font-din border border-white md:hidden"
    >
      <font-awesome-icon
        :icon="['far', 'circle-check']"
        class="mr-1 pt-1"
      />Request a quote
    </router-link>
    <div
      :class="{ 'center-style': !isScrolled }"
      class="relative flex w-full items-center justify-between bg-transparent"
    >
      <router-link v-if="isScrolled" to="/" class="h-32 aspect-square ml-8">
        <img
          :src="stevensCustomLogo"
          class="rounded-full h-[80%] mt-2"
          alt="Stevens Custom Crushing Logo"
        />
      </router-link>

      <nav
        class="hidden md:block"
        :class="{
          'margin-scrolled-style': !isScrolled,
          'margin-not-scrolled-style': isScrolled,
        }"
      >
        <ul class="flex space-x-12 text-2xl">
          <li>
            <router-link to="/" class="text-white hover:underline">
              Home
            </router-link>
          </li>
          <li>
            <router-link to="/services" class="text-white hover:underline">
              Services
            </router-link>
          </li>
          <li>
            <router-link to="/about" class="text-white hover:underline">
              About
            </router-link>
          </li>
          <li>
            <router-link to="/projects" class="text-white hover:underline">
              Projects
            </router-link>
          </li>
          <li>
            <router-link
              to="/request"
              class="z-[49] text-lg hover:bg-green-800 hover:text-white transition duration-300 ease-in-out bg-green-500 rounded pr-2 pl-2 font-din border border-white hidden md:block"
            >
              <font-awesome-icon
                :icon="['far', 'circle-check']"
                class="mr-1 pt-1"
              />Request a quote
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import stevensCustomLogo from "/src/assets/images/stevensCustomLogo.webp";

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
