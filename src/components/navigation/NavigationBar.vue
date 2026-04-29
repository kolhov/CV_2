<script setup lang="ts">
import { strings } from "@/data";
import { debounce } from "@/lib/utils";
import { onMounted, onUnmounted, watch } from "vue";

const navLinks = [
  { title: strings.page.about, anchor: "#about" },
  { title: strings.page.projects, anchor: "#projects" },
  { title: strings.page.work, anchor: "#jobs" },
  { title: strings.page.contacts, anchor: "#contacts" },
];

function scrollCalc() {
  const mainNavLinks = document.querySelectorAll(".navigation__link");
  const offsetPx = 60;

  mainNavLinks.forEach((link) => {
    const anchor = link as HTMLAnchorElement;
    if (anchor.hash == "") return;

    const section = document.querySelector(anchor.hash);
    if (section == null) return;

    const elRectangle = (section as HTMLElement).getBoundingClientRect();

    if (isEndOfPage()) {
      setNewActiveLink(mainNavLinks[mainNavLinks.length - 1]);
    } else if (
      elRectangle.top <= window.innerHeight &&
      elRectangle.bottom > offsetPx
    ) {
      anchor.classList.add("current");
      const allCurrents = document.querySelectorAll(".current");

      setNewActiveLink(allCurrents[0]);
    } else {
      anchor.classList.remove("current");
    }
  });
}

function isEndOfPage() {
  return (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight - 50
  );
}

function setNewActiveLink(el?: Element) {
  if (!el) return;

  const currentActiveEl = document.querySelector(".link--active");
  if (currentActiveEl != null) {
    currentActiveEl.classList.remove("link--active");
  }
  el.classList.add("link--active");
}

onMounted(scrollCalc);

onMounted(() => window.addEventListener("scroll", debounce(scrollCalc, 10)));
onUnmounted(() =>
  window.removeEventListener("scroll", debounce(scrollCalc, 10)),
);
</script>

<template>
  <nav class="navigation">
    <a
      v-for="link in navLinks"
      :key="link.anchor"
      :href="link.anchor"
      class="navigation__link"
    >
      {{ link.title }}
    </a>
  </nav>
</template>

<style lang="scss" scoped>
.navigation {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 32px;
  height: 100%;

  &__link {
    height: 100%;
    color: $main-1;
    text-decoration: none;
    align-content: center;
  }
}

.link--active {
  color: $main-2;
  padding-inline: 4px;
  border-bottom: solid 4px $main-4;

  -webkit-box-shadow: 0px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;
  -moz-box-shadow: 0px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;
  box-shadow: 0px -10px 4px -4px rgba($main-4, 0.3) inset;

  transition: all 0.2s ease-in-out;
}
</style>
