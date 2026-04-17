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
  flex-direction: row-reverse;
  height: 42px;
  background-color: $main-8;
  padding: 0px 32px;
  border-bottom: solid 4px $main-8;
}
</style>
