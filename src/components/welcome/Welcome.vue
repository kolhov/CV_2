<script setup lang="ts">
import { strings } from "@/data";
import Button from "../button/Button.vue";
import Frontend from "../icons/Frontend.vue";
</script>

<template>
  <div id="welcome" class="welcome">
    <div class="welcome__left">
      <h1>
        <div>Привет! Я — <strong>Олег</strong>,</div>
        {{ strings.about.profession }}
      </h1>
      <p class="welcome__descr">{{ strings.about.description }}</p>
      <div class="welcome__buttons">
        <a href="#contacts">
          <Button>
            {{ strings.about.contact }}
          </Button>
        </a>
        <a href="#projects">
          <Button type="secondary">
            {{ strings.about.projects }}
          </Button>
        </a>
      </div>
    </div>
    <div class="welcome__right">
      <Frontend class="icon" />
    </div>
  </div>
</template>

<style lang="scss">
.welcome {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70vh;

  &__buttons {
    display: flex;
    gap: 12px;

    button {
      height: 40px;
    }
  }

  &__descr {
    font-size: 1.25rem;
    color: $main-3;
  }

  &__left {
    display: flex;
    flex-direction: column;
    gap: 18px;
    width: 400px;
  }

  &__right {
    @include mobile {
      display: none;
    }
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

    div {
      color: black;
      font-weight: 400;

      strong {
        color: $main-2;
      }
    }

    @include mobile {
      font-size: 2.2rem;
    }
  }
}
</style>
