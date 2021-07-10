<script>
export default {
  props: {
    titleModalHook: {
      type: String,
      required: true,
    },
    classes: {
      type: String,
      required: false,
    },
    imageUri: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    setOpen() {
      this.open = !this.open;
    },
  },
};
</script>

<template>
  <button
    class="
      animate-pulse-slow
      cursor-pointer
      bg-transparent
      hover:bg-blue-300
      hover:text-white
      py-1
      px-2
      hover:border-transparent
      rounded
      {{classes}}
    "
    v-on:click="setOpen()"
  >
    {{ titleModalHook }}
  </button>
  <Modal v-bind:value="open" @setOpen="setOpen" class="px-6 py-4">
    <img v-if="imageUri" :src="imageUri" class="max-w-150" />
    <slot v-if="!imageUri"></slot>
  </Modal>
</template>