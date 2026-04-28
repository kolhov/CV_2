<script setup lang="ts">
interface ButtonProps {
  active?: boolean;
  type?: "primary" | "secondary";
}
const { active = null } = defineProps<ButtonProps>();
</script>
<template>
  <button
    class="btn"
    :class="{
      active: active,
      inactive: active === false,
      secondary: type === 'secondary',
    }"
  >
    <slot></slot>
  </button>
</template>
<style lang="scss" scoped>
.btn {
  
  padding: 0px 24px;
  border: none;
  border-radius: $main-round;
  background-image: linear-gradient(
    to right bottom,
    $main-4,
    $main-4,
    $main-3,
    $main-3,
    $main-4
  );

  font-size: 16px;
  font-weight: 500;
  color: white;
  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
}
.active {
  background-image: linear-gradient(
    to right bottom,
    $main-3,
    $main-3,
    $main-2,
    $main-2,
    $main-3
  );
}
.inactive {
  color: $main-6;
}
.secondary {
  background-image: none;
  background-color: white;
  color: $main-1;
  border: 2px solid $main-6;
  border-radius: $main-round;

  &:hover {
    border-color: $main-3;
    background-color: $main-10;
    color: $main-1;
  }
}
</style>
