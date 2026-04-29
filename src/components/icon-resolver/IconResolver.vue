<script setup lang="ts">
import { StackEnum } from "@/lib/types";
import type { Component } from "vue";

import JS from "@/components/icons/stack/JS.vue";
import TS from "@/components/icons/stack/TS.vue";
import Angular from "@/components/icons/stack/Angular.vue";
import Node from "@/components/icons/stack/Node.vue";
import GraphQL from "@/components/icons/stack/GraphQL.vue";
import MongoDB from "@/components/icons/stack/Mongo.vue";
import Vue from "@/components/icons/stack/Vue.vue";
import Pinia from "@/components/icons/stack/Pinia.vue";
import Express from "@/components/icons/stack/Express.vue";
import Axios from "@/components/icons/stack/Axios.vue";
import Docker from "@/components/icons/stack/Docker.vue";
import Electron from "@/components/icons/stack/Electron.vue";
import Nuxt from "@/components/icons/stack/Nuxt.vue";
import PostgreSQL from "@/components/icons/stack/PostgreSQL.vue";
import SASS from "@/components/icons/stack/SASS.vue";
import Tailwind from "@/components/icons/stack/Tailwind.vue";
import Tanstack from "@/components/icons/stack/Tanstack.vue";
import Python from "@/components/icons/stack/Python.vue";
import ChartJS from "@/components/icons/stack/ChartJS.vue";
import Shadcn from "@/components/icons/stack/Shadcn.vue";
import Vitest from "@/components/icons/stack/Vitest.vue";
import Supabase from "@/components/icons/stack/Supabase.vue";
import React from "../icons/stack/React.vue";
import AntDesign from "../icons/stack/AntDesign.vue";
import Chakra from "../icons/stack/Chakra.vue";

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
  [StackEnum.PostgreSQL]: PostgreSQL,
  [StackEnum.SASS]: SASS,
  [StackEnum.Tailwind]: Tailwind,
  [StackEnum.Tanstack]: Tanstack,
  [StackEnum.Python]: Python,
  [StackEnum.ChartJS]: ChartJS,
  [StackEnum.Shadcn]: Shadcn,
  [StackEnum.Vitest]: Vitest,
  [StackEnum.Supabase]: Supabase,
  [StackEnum.React]: React,
  [StackEnum.AntDesign]: AntDesign,
  [StackEnum.Chakra]: Chakra,
};
</script>
<template><component :is="iconMap[icon]"></component></template>
