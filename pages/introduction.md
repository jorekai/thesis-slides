---
layout: two-cols
preload: true
---

<template v-slot:default>

# Einführung

ein durchaus interessantes Thema

<div grid="~ cols-2 gap-2" m="-t-3">


</div>
<br>
<br>
<br>
<br>

- ein interdisziplinäres Forschungsfeld
- steckt noch in den Kinderschuhen
- findet Anwendung in sicherheitskritischen Bereichen
- u.A. mit Verwendung von Machine Learning
- außerdem RL in ungewohntem Terrain
  
</template>
<template v-slot:right>


<div>
  <img
    :src="'./wordcloud.svg'"
    class="mt-20 rounded-6xl"
  />
</div>
<div class="source ml-18">
<p class="text-xs text-white">crawled @ https://en.wikipedia.org/wiki/Anomaly_detection</p>
</div>

<Bar title="Machine Learning for Safer Smart Environments"/>
</template>

<style>
.source{
  transform: translatey(-50px);
}
</style>