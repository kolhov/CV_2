<script setup lang="ts">
import type { Project } from "@/lib/locale.types";
import { strings } from "@/data";
import FlipCard from "../flip-card/FlipCard.vue";

defineProps<{ data: Project[]}>()
</script>

<template>
  <div id="projects">
    <h2>{{ strings.page.projects }}</h2>
    <div class="projects">
      <FlipCard v-for="project in data" :key="project.github" class="card">
        <template #front>{{ project.name }}</template>
        <template #back>{{ project.description }}</template>
      </FlipCard>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  margin: 24px 32px;
}
</style>
