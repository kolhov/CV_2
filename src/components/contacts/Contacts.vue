<script setup lang="ts">
import { strings } from "@/data";
import MapMarker from "../icons/ui/MapMarker.vue";
import Telegram from "../icons/ui/Telegram.vue";
import Github from "../icons/ui/Github.vue";
import Mail from "../icons/ui/Mail.vue";

const data = [
  {
    icon: MapMarker,
    title: strings.contacts.location[0],
    text: strings.contacts.location[1],
  },
  {
    icon: Telegram,
    title: strings.contacts.telegram[0],
    text: `@${strings.contacts.telegram[1]}`,
    href: `https://t.me/${strings.contacts.telegram[1]}`,
  },
  {
    icon: Github,
    title: strings.contacts.github[0],
    text: strings.contacts.github[1],
    href: strings.contacts.github[1],
  },
  {
    icon: Mail,
    title: strings.contacts.email[0],
    text: strings.contacts.email[1],
    href: `emailto:${strings.contacts.email[1]}`,
  },
];
</script>

<template>
  <div id="contacts" class="contacts">
    <h1>{{ strings.contacts.callMe }}</h1>
    <div class="contacts__wrap">
      <div v-for="value in data" class="contacts__contact">
        <component :is="value.icon" />
        <div class="contacts__text">
          <h4>{{ value.title }}</h4>

          <a v-if="value.href" :href="value.href" target="_blank">
            {{ value.text }}
          </a>
          <p v-else>{{ value.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contacts {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;

  &__contact {
    display: flex;
    gap: 12px;
    font-size: 1.1rem;
    background-color: $main-10;
    border-radius: $main-round;
    padding: 8px 16px;

    svg {
      height: 32px;
      width: 32px;
      color: $main-2;
      place-self: center;
    }
  }

  &__wrap {
    display: flex;
    flex-direction: column;
    gap: 8px;

    background-color: white;
    padding: 16px;
    border-radius: $main-round;
    box-shadow: 0 4px 8px 0px $main-7;
    -moz-box-shadow: 0 4px 8px 0px $main-7;
    -webkit-box-shadow: 0 4px 8px 0px $main-7;
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 4px;

    h4 {
      font-weight: 400;
      font-size: 14px;
      color: $main-3;
    }
  }
}
</style>
