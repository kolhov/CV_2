<script setup lang="ts">
import type { Job } from "@/lib/locale.types";

defineProps<{ data: Job[] }>();
</script>

<template>
  <div>
    <h1>Опыт работы</h1>
  </div>
  <div class="timeline">
    <div v-for="(job, index) in data" :key="index" class="container right">
      <div class="content">
        <component :is="job.icon" class="content__icon" />
        <div class="content__body">
          <div class="head">
            <span class="head__title">
              <h3>{{ job.position }}</h3>
              <h4 class="head__company">{{ job.company }}</h4>
            </span>
            <span class="head__years">
              <p>{{ job.year }}</p>
              <p>{{ job.months }}</p>
            </span>
          </div>
          <ul class="body__list">
            <li v-for="(x, index) in job.achievements" :key="index">{{ x }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.head {
  display: flex;
  justify-content: space-between;

  &__title {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__company {
    color: $main-4;
  }

  &__years {
    font-size: 14px;
    opacity: 0.6;
    text-align: end;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
}

.body {
  &__list {
    opacity: 0.7;
    font-size: 14px;
    padding-left: 18px;
  }
}

.timeline {
  display: flex;
  flex-direction: column-reverse;

  position: relative;
  max-width: 100%;
  margin: 0 auto;
  background-color: $main-9;

  /* The line*/
  &::after {
    content: "";
    position: absolute;
    width: 3px;
    background-color: $main-6;
    top: 0;
    bottom: 0;
    left: 10%;
    margin-left: -8px;
  }
}

.container {
  padding: 16px 30px;
  position: relative;
  background-color: inherit;
  width: 85%;

  /* The circles*/
  &::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: $main-9;
    border: 4px solid $main-4;
    box-shadow: 0 0 0 4px $main-9;

    top: 32px;
    border-radius: 50%;
    z-index: 4;
  }
}

.right {
  left: 10%;

  /* The arrows */
  &::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 32px;
    width: 0;
    z-index: 1;
    left: 22px;
    border: medium solid white;
    border-width: 8px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }

  /* The circle */
  &::after {
    left: -15px;
  }
}

.content {
  padding: 20px 30px;
  background-color: white;
  position: relative;
  border-radius: 6px;
  -webkit-box-shadow: 0px 4px 10px 1px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 4px 10px 1px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 4px 10px 1px rgba(34, 60, 80, 0.2);

  display: flex;
  gap: 24px;

  &__icon {
    min-width: 50px;
    max-width: 50px;
  }

  &__body {
    width: 100%;
  }
}

@media screen and (max-width: 600px) {
  .timeline::after {
    left: 30.5px;
  }

  .container {
    width: 100%;
    padding-left: 60px;
    padding-right: 25px;

    &::before {
      left: 51px;
      border: medium solid white;
      border-width: 10px 10px 10px 0;
      border-color: transparent white transparent transparent;
    }
  }

  .content {
    &__icon {
      display: none;
    }
  }

  .right {
    left: 0%;

    &::after {
      left: 15px;
    }
  }
}
</style>
