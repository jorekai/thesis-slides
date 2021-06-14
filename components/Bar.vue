<script>
export default {
  props: {
    title: {
      type: String,
    },
    cover: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    currentDate() {
      const current = new Date();
      const date = `${current.getDate()}.${
        current.getMonth() + 1
      }.${current.getFullYear()}`;
      return date;
    },
  },
};
</script>

<template>
  <!-- background -->
  <div
    v-if="cover !== false"
    class="
      rounded-tl-8xl
      cover-bg
      w-full
      flex
      absolute
      h-8/10
      bottom-0
      right-0
      py-0.5
      px-3
      text-sm
    "
  ></div>
  <div
    v-if="cover !== false || logo !== false"
    class="flex w-full absolute h-2/10 top-0 left-0 py-0.5 px-6 text-sm"
  >
    <v-row class="flex">
      <v-col>
        <img :src="'./fra-uas.svg'" class="h-full float-right pt-4 px-4 pb-4" />
      </v-col>
    </v-row>
  </div>
  <!-- IF TITLE SLIDE -->
  <div
    v-if="cover"
    class="footer flex absolute h-8/10 bottom-0 right-0 py-0.5 px-3 text-sm"
  ></div>
  <div
    v-if="cover"
    class="footer flex absolute w-full bottom-0 left-0 py-0.5 px-4 text-sm"
  >
    <div class="w-1/2 text-left">
      {{ title }}
    </div>
    <div class="w-1/2 flex justify-end">
      <div class="flex justify-center items-center ml-4">
        <span class="mr-1">{{ currentDate() }} -</span>
        <span class="mr-2"
          >{{ $slidev.nav.currentPage }}/{{ $slidev.nav.total }}</span
        >
      </div>
    </div>
  </div>
  <!-- IF NORMAL SLIDE -->
  <!-- background -->
  <div
    v-if="!cover"
    class="
      rounded-tl-lg
      footer
      flex
      absolute
      h-1/4
      bottom-0
      right-0
      py-0.5
      px-3
      text-sm
    "
  ></div>
  <div
    v-if="!cover"
    class="flex absolute w-full bottom-0 py-0.5 left-0 px-4 text-sm"
  >
    <div class="w-1/2 text-left">
      {{ title }}
    </div>
    <div class="w-1/2 flex justify-end">
      <div class="flex justify-center items-center ml-4">
        <span class="mr-1">{{ currentDate() }} -</span>
        <span class="mr-2"
          >{{ $slidev.nav.currentPage }}/{{ $slidev.nav.total }}</span
        >
      </div>
    </div>
  </div>
  <div
    v-if="!logo"
    class="
      rounded-tl-lg
      minusz
      footer
      flex
      absolute
      w-1/6
      bottom-0
      right-0
      py-3
      px-4
    "
  ></div>
</template>