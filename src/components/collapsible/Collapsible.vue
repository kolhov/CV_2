<script setup lang="ts">
import { ref, watch } from "vue";
import Chevron from "../icons/ui/Chevron.vue";

interface CollapsibleProps {
  title: string;
}
defineProps<CollapsibleProps>();

const collapsibleEl = ref<HTMLElement>();
const isOpen = ref<boolean>(false);

function changeVisibility() {
  isOpen.value = !isOpen.value;
}

watch(isOpen, (isOpen) => {
  isOpen && collapsibleEl.value?.classList.add("active");
  !isOpen && collapsibleEl.value?.classList.remove("active");
});
</script>

<template>
  <div ref="collapsibleEl" class="collapsible">
    <button class="collapsible__btn" @click="changeVisibility">
      <h3 class="collapsible__title">{{ title }}</h3>
      <Chevron class="collapsible__icon" />
    </button>
    <div class="collapsible__body">
      <div class="collapsible__inner">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.collapsible {
  width: 100%;

  &__btn {
    display: flex;
    justify-content: space-between;
    padding: 2px 8px;

    width: 100%;
    background: linear-gradient(to right, $main-3, $main-2);
    border: none;
    border-radius: $main-round;
    cursor: pointer;
    transition: border-radius 0.2s ease-in;

    &:hover {
      opacity: 0.85;
    }
  }

  &__icon {
    color: white;
    height: auto;
    scale: 1.7;
    margin-inline-end: 8px;

    transition: 0.2s ease-in-out;
  }

  &__body {
    display: grid;
    grid-template-rows: 0fr;
    padding-inline: 12px;

    background-color: $main-9;
    border-radius: 0 0 $main-round $main-round;
    transition: grid-template-rows 0.2s ease-in;
  }

  &__inner {
    overflow: hidden;
  }

  &__title {
    color: $main-9;
    padding: 4px;
  }
}

.active {
  button {
    border-radius: $main-round $main-round 0 0;
  }
  button svg {
    rotate: 180deg;
  }
  .collapsible__body {
    grid-template-rows: 1fr;
  }
}
</style>
