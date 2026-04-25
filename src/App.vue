<script setup lang="ts">
import About from "./components/about/About.vue";
import Contacts from "./components/contacts/Contacts.vue";
import Header from "./components/header/Header.vue";
import Jobs from "./components/jobs/Jobs.vue";
import Projects from "./components/projects/Projects.vue";
import Stack from "./components/stack/Stack.vue";
import data from "@/data.ts";
</script>

<template>
  <Header />
  <main class="main__layout">
    <About />
    <Jobs :data="data.jobs" />
    <Projects :data="data.projects" />
    <Stack />
    <Contacts />
  </main>
</template>

<style lang="scss" scoped>
.main__layout {
  display: flex;
  flex-direction: column;

  > :nth-child(even) {
    background-color: $main-10;
    padding: 16px $base-margin 20px;
  }
  > :nth-child(odd) {
    padding: 16px $base-margin 20px;
  }
}
</style>
