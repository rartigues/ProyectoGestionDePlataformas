<script setup>
// import HelloWorld from "./components/HelloWorld.vue";
// import TheWelcome from "./components/TheWelcome.vue";
</script>


<template>
  <transition name="fade">
    <router-view></router-view>
  </transition>
</template>

<style lang="scss">
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
</style>
