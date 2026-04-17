<script setup lang="ts">
interface FlipCardProps {
  height?: string;
  width?: string;
}

const { height = '380px', width = '300px' } = defineProps<FlipCardProps>();
</script>

<template>
  <div class="flip-card">
    <div class="flip-card__wrap">
      <div class="flip-card__front"><slot name="front"></slot></div>
      <div class="flip-card__back"><slot name="back"></slot></div>
    </div>
  </div>
</template>

<style lang="scss">
.flip-card {
  background-color: transparent;
  height: v-bind(height);
  width: v-bind(width);
  perspective: 1000px;

  &:hover &__wrap {
    transform: rotateY(180deg);
  }

  &__wrap {
    position: relative;
    height: 100%;
    width: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  &__front,
  &__back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  &__front {
    color: $main-9;
    background-color: $main-1;
  }
  &__back {
    background-color: $main-4;
    transform: rotateY(180deg);
  }
}
</style>
