---
layout: two-cols
---

# Design - Flussdiagramm

ein iterativer Prozess

<div>
<img class="mt-15 scroll" :src="'./program.jpg'">
</div>

::right::

# Design - Relationen

die Implementierung der Abstraktion

<div class="max-h-75 snap snap-y snap-mandatory scroll scrollbar-hide items-center">
    <section class="snap-start">
        <img class="mt-75 mb-75" :src="'./environment.png'">
    </section>
    <section class="snap-start">
        <img class="mt-75 mb-75 snap" :src="'./agent.png'">
    </section>
    <section class="snap-start max-w-60">
        <img class="mt-75 pt-20 mb-75 snap" :src="'./evaluator.png'">
    </section>
    <section class="snap-start">
        <img class="mt-75 mb-75 snap" :src="'./overview.png'">
    </section>
</div>

<Bar title="Machine Learning for Safer Smart Environments"/>

<style>
.scroll{
    width: 80%;
    overflow-y: scroll;
}
</style>
