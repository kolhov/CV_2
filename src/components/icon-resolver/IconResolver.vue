<script setup lang="ts">
import { StackEnum } from "@/lib/types";
import type { Component } from "vue";

import JS from "@/components/icons/JS.vue";
import TS from "@/components/icons/TS.vue";
import Angular from "@/components/icons/Angular.vue";
import Node from "@/components/icons/Node.vue";
import GraphQL from "@/components/icons/GraphQL.vue";
import MongoDB from "@/components/icons/Mongo.vue";
import Vue from "@/components/icons/Vue.vue";
import Pinia from "@/components/icons/Pinia.vue";
import Express from "@/components/icons/Express.vue";
import Axios from "@/components/icons/Axios.vue";
import Docker from "@/components/icons/Docker.vue";
import Electron from "@/components/icons/Electron.vue";
import Nuxt from "@/components/icons/Nuxt.vue";
import Postgre from "@/components/icons/Postgre.vue";
import SASS from "@/components/icons/SASS.vue";
import Tailwind from "@/components/icons/Tailwind.vue";
import Tanstack from "@/components/icons/Tanstack.vue";
import Python from "@/components/icons/Python.vue";
import ChartJS from "@/components/icons/ChartJS.vue";
import Shadcn from "@/components/icons/Shadcn.vue";
import Vitest from "@/components/icons/Vitest.vue";
import Supabase from "@/components/icons/Supabase.vue";

interface IconResolverProps {
  icon: StackEnum;
}
defineProps<IconResolverProps>();

const iconMap: Record<StackEnum, Component> = {
  [StackEnum.JS]: JS,
  [StackEnum.TS]: TS,
  [StackEnum.Angular]: Angular,
  [StackEnum.Node]: Node,
  [StackEnum.GraphQL]: GraphQL,
  [StackEnum.MongoDB]: MongoDB,
  [StackEnum.Vue]: Vue,
  [StackEnum.Pinia]: Pinia,
  [StackEnum.Express]: Express,
  [StackEnum.Axios]: Axios,
  [StackEnum.Docker]: Docker,
  [StackEnum.Electron]: Electron,
  [StackEnum.Nuxt]: Nuxt,
  [StackEnum.Postgre]: Postgre,
  [StackEnum.SASS]: SASS,
  [StackEnum.Tailwind]: Tailwind,
  [StackEnum.Tanstack]: Tanstack,
  [StackEnum.Python]: Python,
  [StackEnum.ChartJS]: ChartJS,
  [StackEnum.Shadcn]: Shadcn,
  [StackEnum.Vitest]: Vitest,
  [StackEnum.Supabase]: Supabase,
};
</script>
<template><component :is="iconMap[icon]"></component></template>
