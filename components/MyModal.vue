<script>
export default {
  props: {
    titleModalHook: {
      type: String,
      required: true,
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
  <button v-on:click="setOpen()">
    {{ titleModalHook }}
  </button>
  <Modal v-bind:value="open" @setOpen="setOpen" class="px-6 py-4">
    <img v-if="imageUri" :src="imageUri" class="max-w-150" />
    <slot v-if="!imageUri"></slot>
  </Modal>
</template>