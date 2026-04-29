<script setup lang="ts">
import { strings } from "@/data";

</script>
<template>
  <div id="about" class="about">
    <h1>{{ strings.page.about }}</h1>
    <div class="about__wrap">
      <div>
        <p>{{ strings.about.about }}</p>
      </div>
      <div class="about__accents">
        <div v-for="x in strings.about.accents" class="accent">
          <component :is="x.icon" class="accent__icon"></component>
          <div class="accent__text">
            <h4>{{ x.title }}</h4>
            <p>{{ x.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.about {
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__wrap {
    display: flex;
    flex-direction: column;
    gap: 24px;

    p {
      font-size: 1.1rem;
    }

    div {
      flex: 1;
    }
  }

  &__accents {
    display: flex;
    gap: 24px;

    
    @include mobile {
      flex-direction: column;
    }
  }
}

.accent {
  display: flex;
  gap: 8px;

  &__icon {
    height: 42px;
    width: 42px;
    padding: 10px;
    border-radius: $main-round;
    color: $main-1;
    background-color: $main-5;
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 5px;

    h4 {
      color: $main-1;
    }

    p {
      font-size: 0.95rem;
      color: $main-3;
    }
  }
}
</style>
