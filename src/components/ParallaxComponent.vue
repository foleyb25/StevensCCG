<template>
  <div
    class="parallax relative w-full flex-grow flex items-center justify-center"
    :style="
      imageSrc
        ? `background-image: url(${imageSrc});`
        : 'background-color: black;'
    "
  >
    <!-- opacity layer -->
    <div
      class="absolute top-0 bottom-0 h-full w-full bg-black opacity-50"
    ></div>

    <!-- content layer -->
    <slot class="relative"></slot>
  </div>
</template>

<script setup>
import { ref, onMounted, toRefs } from "vue";
// Props
const props = defineProps({
  imageSrc: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
});

// convert props to reactive references
const { imageSrc } = toRefs(props);

// Image
const image = ref("");

onMounted(async () => {
  const imgModule = "";
  image.value = imgModule.default;
});
</script>

<style scoped>
.parallax {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
