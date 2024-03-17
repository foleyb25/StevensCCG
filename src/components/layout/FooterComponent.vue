<template>
  <div class="w-full bg-gray-300 min-h-[275px] p-4">
    <div id="img-container" class="h-32 aspect-square">
      <router-link to="/"
        ><img
          :src="stevensCustomLogo"
          class="rounded-full h-[80%]"
          alt="Stevens Custom Crushing Logo"
      /></router-link>
    </div>
    <div id="contact-info">
      <h3></h3>
      <address>1234 Highway Drive</address>
      <div>(###)-###-####</div>
    </div>
  </div>
</template>

<script setup>
import stevensCustomLogo from "/src/assets/images/stevensCustomLogo.webp";
</script>

<style lang="scss" scoped></style>
