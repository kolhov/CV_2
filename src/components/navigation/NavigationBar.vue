<script setup lang="ts">
const navLinks = [
  { title: "Обо мне", anchore: "" },
  { title: "Опыт Работы", anchore: "" },
  { title: "Проекты", anchore: "" },
  { title: "Контакты", anchore: "" },
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
    background-color: $main-8;
    align-content: center;

    border-bottom: solid 4px $main-4;
  }
}
</style>
