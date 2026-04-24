<script setup lang="ts">
import NavigationBar from "@/components/navigation/NavigationBar.vue";
</script>

<template>
  <header class="header">
    <NavigationBar />
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  position: fixed;
  top: 12px;
  right: 10%;
  z-index: 12;
  height: 42px;
  background-color: rgba($color: white, $alpha: 0.8);
  border-radius: $main-round;

  padding: 0px 32px;
}
</style>
