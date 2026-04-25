<script setup lang="ts">
import { strings } from "@/data";
import Button from "../button/Button.vue";
import Frontend from "../icons/Frontend.vue";
</script>

<template>
  <div id="about" class="about">
    <div class="about__left">
      <h1>{{ strings.about.profession }}</h1>
      <p class="about__descr">{{ strings.about.description }}</p>
      <div class="about__buttons">
        <Button>{{ strings.about.contact }}</Button>
        <Button type="secondary">{{ strings.about.projects }}</Button>
      </div>
    </div>
    <div class="about__right">
      <Frontend class="icon" />
    </div>
  </div>
</template>

<style lang="scss">
.about {
  display: flex;
  justify-content: start;
  align-items: center;
  height: 60vh;

  &__buttons {
    display: flex;
    gap: 12px;
  }

  &__descr {
    font-size: 1.25rem;
    color: $main-3;
  }

  &__left {
    display: flex;
    flex-direction: column;
    gap: 18px;
    width: 40%;
    margin-right: 20%;
  }

  &__right {
    .icon {
      padding: 50px;
      height: 260px;
      width: 260px;

      color: $main-3;
      border: 10px solid $main-3;
      border-radius: 50%;
    }
  }

  h1 {
    font-size: 3rem;
  }
}
</style>
