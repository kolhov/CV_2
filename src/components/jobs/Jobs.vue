<script setup lang="ts">
import { strings } from "@/data";
import Collapsible from "@/components/collapsible/Collapsible.vue";
import Timeline from "@/components/timeline/Timeline.vue";
import IconResolver from "../icon-resolver/IconResolver.vue";
import Tooltip from "../tooltip/Tooltip.vue";
import Arrow from "../icons/ui/Arrow.vue";
</script>

<template>
  <div id="jobs" class="jobs">
    <h1>{{ strings.page.work }}</h1>
    <Timeline v-for="(job, index) in strings.jobs.reverse()" :key="index">
      <div class="content">
        <component :is="job.icon" class="content__icon" />
        <div class="content__body">
          <div class="head">
            <span class="head__title">
              <h3>{{ job.position }}</h3>
              <a :href="job.url" class="head__company">{{ job.company }}</a>
            </span>
            <span class="head__years">
              <p>{{ job.year }}</p>
              <p>{{ job.months }}</p>
            </span>
          </div>
          {{ job.responsible }}
          <Collapsible :title="strings.page.achievements">
            <ul class="body__list">
              <li v-for="(x, index) in job.achievements" :key="index">
                <Arrow />
                <div>{{ x }}</div>
              </li>
            </ul>
          </Collapsible>
          <div class="body__stack">
            <Tooltip
              :text="icon"
              v-for="icon in job.stack.reverse()"
              :key="icon"
            >
              <IconResolver :icon="icon" class="stack__icon" />
            </Tooltip>
          </div>
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
    color: $main-3;
    font-weight: 500;
  }

  &__years {
    font-size: 14px;
    opacity: 1;
    color: $main-3;
    text-align: end;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
}

.body {
  &__list {
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 14px;
    padding-left: 0px;

    li {
      display: flex;
      gap: 4px;
      list-style: none;

      svg {
        min-width: 18px;
        width: 18px;
        height: 13px;
        color: $main-1;
        transform: translateY(1px);
      }
    }
  }

  &__stack {
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    gap: 8px;

    .stack__icon {
      margin-top: 8px;
      height: 28px;
      width: 28px;
    }
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
    gap: 16px;
    display: flex;
    flex-direction: column;
  }
}

@include mobile {
  .content {
    &__icon {
      display: none;
    }
  }
}
</style>
