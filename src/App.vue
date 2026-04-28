<script setup lang="ts">
import Contacts from "./components/contacts/Contacts.vue";
import Header from "./components/header/Header.vue";
import Jobs from "./components/jobs/Jobs.vue";
import Projects from "./components/projects/Projects.vue";
import Stack from "./components/stack/Stack.vue";
import Welcome from "./components/welcome/Welcome.vue";
import About from "./components/about/About.vue";
</script>

<template>
  <Header />
  <main class="main__layout">
    <Welcome />
    <About />
    <Projects />
    <Jobs />
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
    padding: 32px $base-margin;
  }
  > :nth-child(odd) {
    padding: 32px $base-margin;
  }
}
</style>
