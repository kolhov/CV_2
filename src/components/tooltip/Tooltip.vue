<script setup lang="ts">
interface TooltipProps {
  text: string;
}
defineProps<TooltipProps>();
</script>

<template>
  <div class="tooltip">
    <slot></slot>
    <span class="tooltip__text">{{ text }}</span>
  </div>
</template>

<style lang="scss" scoped>
.tooltip {
  $tipColor: white;
  display: inline-block;
  position: relative;

  &__text {
    color: black;
    font-weight: 400;
    visibility: hidden;
    text-align: center;
    padding: 6px;
    background-color: $tipColor;
    border-radius: $main-round;
    box-shadow: 0px 1px 2px black;

    position: absolute;
    z-index: 11;
    bottom: 110%;
    left: 50%;
    transform: translateX(-50%);

    opacity: 0;
    transition: opacity 0.3;

    &::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-width: 5px;
      border-style: solid;
      border-color: $tipColor transparent transparent transparent;
    }
    
    &::before {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border: 6px solid transparent;
      border-top-color: black; 
      border-bottom: none;
    }
  }

  &:hover .tooltip__text {
    visibility: visible;
    opacity: 1;
  }
}
</style>
