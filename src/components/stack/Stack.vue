<script setup lang="ts">
import { strings } from "@/data";
import { computed, ref } from "vue";
import Button from "../button/Button.vue";
import IconResolver from "../icon-resolver/IconResolver.vue";
import { StackEnum } from "@/lib/types";

enum StackTabsEnum {
  Frontend = "Frontend",
  Backend = "Backend",
}

const stackCategoryMap: Record<StackTabsEnum, StackEnum[]> = {
  [StackTabsEnum.Frontend]: [
    StackEnum.JS,
    StackEnum.TS,
    StackEnum.Angular,
    StackEnum.Vue,
    StackEnum.Nuxt,
    StackEnum.Pinia,
    StackEnum.Tanstack,
    StackEnum.Tailwind,
    StackEnum.SASS,
    StackEnum.Axios,
    StackEnum.ChartJS,
    StackEnum.Shadcn,
    StackEnum.Electron,
    StackEnum.Vitest,
  ],
  [StackTabsEnum.Backend]: [
    StackEnum.Node,
    StackEnum.Express,
    StackEnum.GraphQL,
    StackEnum.MongoDB,
    StackEnum.PostgreSQL,
    StackEnum.Docker,
    StackEnum.Python,
    StackEnum.Supabase,
  ],
};

const selectedTab = ref<StackTabsEnum>(StackTabsEnum.Frontend);

const tabs = Object.values(StackTabsEnum).filter((x) => isNaN(Number(x)));

function setTab(tab: StackTabsEnum) {
  selectedTab.value = tab;
}
</script>

<template>
  <div id="stack" class="stack">
    <h2>{{ strings.page.skills }}</h2>
    <div class="stack__tabs">
      <Button
        v-for="value in tabs"
        :active="value === selectedTab"
        @click="() => setTab(value)"
      >
        {{ value }}
      </Button>
    </div>
    <div class="stack__body">
      <span v-for="x in stackCategoryMap[selectedTab]" :key="x" class="icon">
        <IconResolver :icon="x" class="icon__icon" />
        {{ x }}
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.stack {
  height: 200px;
  margin: 32px;

  &__tabs {
    display: flex;
    gap: 8px;
  }

  &__body {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(6, 180px);

    margin-top: 24px;
    gap: 18px;
    row-gap: 32px;

    &::before {
      content: '';
      border: 1px solid $main-5;
    }
  }
}

.icon {
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border: 1px solid $main-1;
  border-radius: $main-round;

  &__icon {
    height: 32px;
    width: 32px;
  }
}
</style>
