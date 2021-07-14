---
layout: two-cols
preload: true
---

<template v-slot:default>

# Introduction

why are we interested in this topic

<div grid="~ cols-2 gap-2" m="-t-3">


</div>
<br>
<br>
<br>
<br>

- interdisciplinary research area 
- young in terms of contribution
- safety critical systems
- thrives through machine learning
- cross-domain application of RL
- reinforcement learning outside of the box
  
</template>
<template v-slot:right>


<div>
  <img
    :src="'./wordcloud.svg'"
    class="mt-20 rounded-6xl"
  />
</div>
<div class="source ml-18">
<p class="text-xs text-white">crawled from https://en.wikipedia.org/wiki/Anomaly_detection</p>
</div>

<Bar title="Machine Learning for Safer Smart Environments"/>
</template>

<style>
.source{
  transform: translatey(-50px);
}
</style>