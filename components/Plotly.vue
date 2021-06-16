<!--
A simple wrapper for embeded Plotly Charts
Usage:
<Youtube id="luoMHjh-XcQ" />
-->

<script setup lang="ts">
import { defineProps } from "vue";
const props =
  defineProps<{
    link: string; // plotly link for chart
    width?: number;
    height?: number;
  }>();
</script>

<template>
  <iframe
    title="Plotly"
    :width="width || `100%`"
    :height="height || `100%`"
    style="position: absolute"
    frameborder="0"
    scrolling="no"
    :src="link + '?modebar=false&link=false'"
    allowfullscreen
  ></iframe>
</template>