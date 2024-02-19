<template>
    
    <header :class="[{ 'bg-black': isScrolled }, 'fixed w-full top-0 left-0 z-50 transition duration-500']">
        <button @click="$emit('someEvent')" class="text-white text-2xl md:hidden"><font-awesome-icon :icon="['fas', 'bars']" class="absolute right-8 top-16"/></button>
        <div :class="{ 'center-style': !isScrolled }" class="relative flex w-full items-center justify-between bg-transparent">
            <div v-if=isScrolled class="h-32 aspect-square ml-8">
                <img :src="stevensCustomLogo" class="rounded-full h-[80%] mt-2" alt="Stevens Custom Crushing Logo">
            </div>
            
            
            <nav class="hidden md:block" :class="{ 'margin-scrolled-style': !isScrolled, 'margin-not-scrolled-style': isScrolled  }">
                <ul class="flex space-x-12 text-3xl">
                    <li><router-link to="/" class="text-white hover:underline">Home</router-link></li>
                    <li><router-link to="/services" class="text-white hover:underline">Services</router-link></li>
                    <li><router-link to="/about" class="text-white hover:underline">About</router-link></li>
                    <li><router-link to="/projects" class="text-white hover:underline">Projects</router-link></li>
                </ul>
                
            </nav>

        </div>

    </header>
</template>
  
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import stevensCustomLogo from "/src/assets/images/stevensCustomLogo.webp"


const isScrolled = ref(false);

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
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
  