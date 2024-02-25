<template>
  
  <div>
    
    <Header @toggle-drawer='toggleSideNavDrawer'/> 
    <Transition name="fade">
      <div v-if="toggleDrawer" @click="toggleSideNavDrawer" class="z-[49] fixed inset-0 w-screen h-screen bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm"></div>
    </Transition>
    <Transition name="slide">
      <SideNavDrawerComponent @toggle-drawer='toggleSideNavDrawer' class="md:hidden z-50" v-if="toggleDrawer"/>
    </Transition>
    <router-view class="bg-black"/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Header from './components/layout/Header.vue'
import SideNavDrawerComponent from "./components/layout/SideNavDrawerComponent.vue";

var toggleDrawer = ref(false)

const toggleSideNavDrawer = () => {
  console.log("in parent")
  toggleDrawer.value = !toggleDrawer.value
}
</script>

<style scoped>
.slide-enter-from, .slide-leave-to {
  transform: translateX(-100%);
}
.slide-enter-to, .slide-leave-from {
  transform: translateY(0);
}
.slide-enter-active {
  transition: transform .3s ease;
}
.slide-leave-active {
  transition: transform .3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  backdrop-filter: blur(0);
  transform: translateY(0)
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  backdrop-filter: blur(5px);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s ease, backdrop-filter .3s ease;
}
</style>
