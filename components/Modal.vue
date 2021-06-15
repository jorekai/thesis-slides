<script setup lang="ts">
import { defineProps, defineEmit, shallowRef } from "vue";

const emit = defineEmit();

const props = defineProps({
  value: {
    default: false,
    type: Boolean,
  },
  class: {
    default: "",
  },
});

const container = shallowRef<HTMLDivElement>();

const setOpen = (e: MouseEvent) => {
  if (e?.target === container.value) emit("setOpen");
};
</script>

<template>
  <KeepAlive>
    <div
      v-if="value"
      ref="container"
      class="fixed top-0 bottom-0 left-0 right-0 grid z-20"
      :style="{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }"
      bg="black opacity-80"
      @click="setOpen"
    >
      <div
        class="rounded-md bg-main shadow max-w-150"
        dark:border="~ gray-400 opacity-10"
        :style="{ display: 'flex', justifyContent: 'center' }"
        :class="props.class"
      >
        <slot />
      </div>
    </div>
  </KeepAlive>
</template>