<script setup lang="ts">
import type { Project } from "@/lib/locale.types";
import { strings } from "@/data";
import FlipCard from "../flip-card/FlipCard.vue";
import IconResolver from "../icon-resolver/IconResolver.vue";

defineProps<{ data: Project[] }>();
</script>

<template>
  <div id="projects">
    <h1>{{ strings.page.projects }}</h1>
    <div class="projects">
      <FlipCard v-for="project in data" :key="project.github" class="card">
        <template #front>
          <div class="front">
            <img :src="`/public/${project.image}`" />
            <h4 class="front__title">
              {{ project.name }}
            </h4>
            <div class="front__description">{{ project.description }}</div>
            <div class="front__stack">
              <IconResolver
                v-for="value in project.stack"
                :icon="value"
                :key="value"
                class="icon"
              />
            </div>
          </div>
        </template>
        <template #back>
          <div class="back">
            <ul class="features">
              <li v-for="(value, index) in project.features" :key="index">
                {{ value }}
              </li>
            </ul>
          </div>
        </template>
      </FlipCard>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects {
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  gap: 18px;
}

.front {
  position: relative;
  height: 100%;

  img {
    border-radius: $main-round $main-round 0 0;
    width: 100%;
    object-fit: cover;
    object-position: top left;
    height: 50%;
  }

  &__stack {
    position: absolute;
    bottom: 16px;
    right: 12px;

    display: flex;
    gap: 4px;
  }

  &__title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 17px;

    background-image: linear-gradient(
      to right,
      $main-1,
      $main-2,
      $main-2,
      $main-2,
      $main-1
    );
    height: 32px;
    margin-top: -4px;
    z-index: 5;
  }

  &__description {
    text-align: start;
    padding: 8px;

    color: $main-8;
  }
}

.back {
  text-align: start;

  .features {
    font-size: 14px;
    color: $main-9;
    padding-left: 18px;
  }
}
.icon {
  height: 24px;
  width: 24px;
}
</style>
