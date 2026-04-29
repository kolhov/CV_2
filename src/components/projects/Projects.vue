<script setup lang="ts">
import { strings } from "@/data";
import FlipCard from "../flip-card/FlipCard.vue";
import IconResolver from "../icon-resolver/IconResolver.vue";
import Tooltip from "../tooltip/Tooltip.vue";
import Button from "../button/Button.vue";
import { ref } from "vue";

const isSliding = ref(false);
const startPos = ref();
const currentOffset = ref(0);
const dragDelta = ref(0);
const projectsEl = ref<HTMLElement>();

function startSlideProjects(pointer: PointerEvent) {
  pointer.preventDefault();
  isSliding.value = true;
  startPos.value = pointer?.clientX;

  (pointer.target as HTMLElement).setPointerCapture(pointer.pointerId);
}

function stopSlideProjects() {
  isSliding.value = false;
  startPos.value = undefined;
  currentOffset.value += dragDelta.value;
  dragDelta.value = 0;
}

function slideProjects(pointer: PointerEvent) {
  pointer.preventDefault();
  if (!isSliding.value || startPos.value == null || projectsEl.value == null)
    return;

  dragDelta.value = pointer.clientX - startPos.value;
  const newTranslatePos = dragDelta.value + currentOffset.value;

  projectsEl.value.style.transform = `translateX(${newTranslatePos}px)`;
}
</script>

<template>
  <div id="projects" class="wrap">
    <h1>{{ strings.page.projects }}</h1>
    <div
      draggable="false"
      class="projects__wrap"
      @pointerdown="startSlideProjects"
      @pointermove="slideProjects"
      @pointerup="stopSlideProjects"
      @pointercancel="stopSlideProjects"
    >
      <div ref="projectsEl" class="projects">
        <FlipCard
          v-for="project in strings.projects"
          :key="project.github"
          class="card"
        >
          <template #front>
            <div class="front">
              <img :src="`/img/${project.image}`" />
              <h4 class="front__title">
                {{ project.name }}
              </h4>
              <div class="front__description">{{ project.description }}</div>
            </div>
          </template>
          <template #back>
            <div class="back">
              <ul class="features">
                <li v-for="(value, index) in project.features" :key="index">
                  {{ value }}
                  <div class="divider--horizontal"></div>
                </li>
              </ul>
              <div>
                <div class="back__stack">
                  <Tooltip
                    v-for="value in project.stack"
                    :key="value"
                    :text="value"
                  >
                    <IconResolver :icon="value" class="icon" />
                  </Tooltip>
                </div>
                <div class="back__src">
                  <a :href="project.github" target="_blank">
                    <Button type="secondary" class="back__button">
                      Source
                    </Button>
                  </a>
                  <a v-if="project.demo" :href="project.demo" target="_blank">
                    <Button type="secondary" class="back__button">
                      Demo
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </template>
        </FlipCard>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects {
  display: flex;
  justify-content: space-between;
  gap: 18px;
  margin-top: 24px;
  padding-left: 4px;

  &__wrap {
    overflow-x: clip;
    touch-action: none;
  }
}

.front {
  position: relative;
  height: 100%;

  img {
    border-radius: $main-round $main-round 0 0;
    width: 100%;
    object-fit: cover;
    object-position: top left;
    height: 60%;

    border: 2px solid $main-1;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px;
  text-align: start;
  height: 100%;
  background-color: $main-9;
  border-radius: $main-round;

  .features {
    text-align: start;
    display: flex;
    flex-direction: column;
    gap: 6px;

    padding: 0;
    margin: 0;
    font-size: 14px;
    color: $main-1;

    list-style: none;

    div {
      margin-top: 6px;
    }
  }

  &__stack {
    display: flex;
    justify-content: end;
    flex-wrap: wrap;

    gap: 4px;
    padding: 4px 0 0 20%;
  }

  &__src {
    display: flex;
    gap: 4px;
  }

  &__button {
    height: 28px;
    font-size: 13px;
  }
}
.icon {
  height: 24px;
  width: 24px;
}
</style>
