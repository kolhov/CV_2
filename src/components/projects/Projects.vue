<script setup lang="ts">
import type { Project } from "@/lib/locale.types";
import FlipCard from "../flip-card/FlipCard.vue";

defineProps<{ data: Project[]}>()
</script>

<template>
  <div id="projects">
    <h2>Проекты</h2>
    <div class="projects">
      <FlipCard v-for="project in data" :key="project.github">
        <template #front>{{ project.name }}</template>
        <template #back>{{ project.description }}</template>
      </FlipCard>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects {
  display: flex;
  gap: 24px;
}
</style>
