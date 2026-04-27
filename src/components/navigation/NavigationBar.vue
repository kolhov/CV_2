<script setup lang="ts">
import { strings } from "@/data";

const navLinks = [
  { title: strings.page.about, anchore: "#about" },
  { title: strings.page.work, anchore: "#jobs" },
  { title: strings.page.projects, anchore: "#projects" },
  { title: strings.page.contacts, anchore: "#contacts" },
];
</script>

<template>
  <nav class="navigation">
    <a
      v-for="link in navLinks"
      :key="link.anchore"
      :href="link.anchore"
      class="navigation__link"
    >
      {{ link.title }}
    </a>
  </nav>
</template>

<style lang="scss" scoped>
.navigation {
  display: flex;
  flex-direction: row;
  gap: 32px;
  height: 100%;

  &__link {
    height: 100%;
    color: $main-1;
    text-decoration: none;
    align-content: center;

    border-bottom: solid 4px $main-4;
  }
}
</style>
