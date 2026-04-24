<script setup lang="ts">
interface ButtonProps {
  active?: boolean
}
defineProps<ButtonProps>()

</script>
<template>
  <button class="btn" :class="{ 'active': active }">
    <slot></slot>
  </button>
</template>
<style lang="scss" scoped>
.btn {
  height: 32px;
  padding-inline: 16px;
  border: none;
  border-radius: $main-round;
  background-image: linear-gradient(
    to right bottom,
    $main-5,
    $main-5,
    $main-4,
    $main-4,
    $main-5
  );

  font-size: 16px;
  font-weight: 500;
  color: $main-9;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
}
.active {
  opacity: 0.5;
}
</style>
