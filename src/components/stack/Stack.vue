<script setup lang="ts">
import { strings } from "@/data";
import { ref } from "vue";
import Button from "../button/Button.vue";
import IconResolver from "../icon-resolver/IconResolver.vue";
import { StackEnum } from "@/lib/types";
import Frontend from "../icons/ui/Frontend.vue";
import Backend from "../icons/ui/Backend.vue";

enum StackTabsEnum {
  Frontend = "Frontend",
  Backend = "Backend",
}

const stackCategoryMap: Record<StackTabsEnum, StackEnum[]> = {
  [StackTabsEnum.Frontend]: [
    StackEnum.JS,
    StackEnum.TS,
    StackEnum.SASS,
    StackEnum.Vue,
    StackEnum.Nuxt,
    StackEnum.React,
    StackEnum.Pinia,
    StackEnum.Tanstack,
    StackEnum.Tailwind,
    StackEnum.Axios,
    StackEnum.ChartJS,
    StackEnum.Electron,
    StackEnum.Vitest,
    StackEnum.AntDesign,
    StackEnum.Shadcn,
    StackEnum.Chakra
  ],
  [StackTabsEnum.Backend]: [
    StackEnum.Node,
    StackEnum.Express,
    StackEnum.GraphQL,
    StackEnum.MongoDB,
    StackEnum.PostgreSQL,
    StackEnum.Docker,
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
    <h1>{{ strings.page.skills }}</h1>
    <div class="stack__tabs">
      <Button
        v-for="value in tabs"
        :active="value === selectedTab"
        @click="() => setTab(value)"
        class="tab__button"
      >
        <Frontend v-if="value === StackTabsEnum.Frontend" />
        <Backend v-if="value === StackTabsEnum.Backend" />
        {{ value }}
      </Button>
    </div>
    <div class="divider--horizontal"></div>
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
  display: flex;
  flex-direction: column;
  gap: 24px;

  &__tabs {
    display: flex;
    gap: 18px;
  }

  &__body {
    display: flex;
    flex-wrap: wrap;
    // display: grid;
    // justify-content: start;
    // grid-template-columns: repeat(auto-fill, 168px);

    gap: 18px;
    row-gap: 32px;

    @include mobile {
      grid-template-columns: repeat(auto-fill, 130px);
    }
  }
}

.tab__button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 42px;
  width: 160px;
  padding: 0 32px;

  svg {
    min-height: 20px;
    height: 20px;
    min-width: 20px;
    width: 20px;
  }

  @include mobile {
    width: 130px;
  }
}

.icon {
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding-inline: 6px 10px;

  background-color: $main-9;
  border: 1px solid $main-2;
  border-radius: $main-round;

  @include mobile {
    font-size: 14px;
  }

  &__icon {
    margin: 8px;
    min-height: 32px;
    height: 32px;
    min-width: 32px;
    width: 32px;

    @include mobile {
      margin: 4px;

      min-height: 24px;
      height: 24px;
      min-width: 24px;
      width: 24px;
    }
  }
}
</style>
