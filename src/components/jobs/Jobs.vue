<script setup lang="ts">
import { strings } from "@/data";
import Collapsible from "../collapsible/Collapsible.vue";
import Timeline from "../timeline/Timeline.vue";
</script>

<template>
  <div id="jobs">
    <h1>{{ strings.page.work }}</h1>
    <Timeline v-for="(job, index) in strings.jobs.reverse()" :key="index">
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
          {{ job.responsible }}
          <collapsible :title="strings.page.achievements">
            <ul class="body__list">
              <li v-for="(x, index) in job.achievements" :key="index">
                {{ x }}
              </li>
            </ul>
          </collapsible>
        </div>
      </div>
    </Timeline>
  </div>
</template>

<style lang="scss" scoped>
.head {
  display: flex;
  justify-content: space-between;

  &__title {
    display: flex;
    flex-direction: column;
    gap: 4px;
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
    gap: 4px;
  }
}

.body {
  &__list {
    max-height: inherit;
    opacity: 0.7;
    font-size: 14px;
    padding-left: 18px;
  }
}

.content {
  display: flex;
  gap: 24px;

  &__icon {
    min-width: 50px;
    max-width: 50px;
  }

  &__body {
    width: 100%;
    gap: 12px;
    display: flex;
    flex-direction: column;
  }
}

@media screen and (max-width: 600px) {
  .content {
    &__icon {
      display: none;
    }
  }
}
</style>
