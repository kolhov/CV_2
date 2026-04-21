<script setup lang="ts">
import { computed, ref, watch } from "vue";

interface CollapsibleProps {
  title: string;
}
defineProps<CollapsibleProps>();

const bodyEl = ref<HTMLElement>();
const isOpen = ref<boolean>(false);

function changeVisibility() {
  isOpen.value = !isOpen.value;
}

watch(isOpen, (isOpen) => {
  isOpen && bodyEl.value?.classList.add("body--active");
  !isOpen && bodyEl.value?.classList.remove("body--active");
});
</script>

<template>
  <div class="collapsible">
    <button class="collapsible__btn" @click="changeVisibility">
      <h3 class="collapsible__title">{{ title }}</h3>
    </button>
    <div ref="bodyEl" class="collapsible__body">
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
    width: 100%;
    background: linear-gradient(to right, $main-2, $main-3);
    border: none;
    border-radius: $main-round;
    cursor: pointer;

    &:hover {
      opacity: 0.85;
    }
  }

  &__body {
    display: grid;
    grid-template-rows: 0fr;
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

.body--active {
  grid-template-rows: 1fr;
}
</style>
