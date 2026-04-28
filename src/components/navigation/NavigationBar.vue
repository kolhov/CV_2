<script setup lang="ts">
import { strings } from "@/data";

const navLinks = [
  { title: strings.page.about, anchor: "#about" },
  { title: strings.page.projects, anchor: "#projects" },
  { title: strings.page.work, anchor: "#jobs" },
  { title: strings.page.contacts, anchor: "#contacts" },
];
</script>

<template>
  <nav class="navigation">
    <a
      v-for="link in navLinks"
      :key="link.anchor"
      :href="link.anchor"
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
