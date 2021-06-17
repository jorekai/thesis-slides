---
layout: two-cols
preload: true
---

# Model

understanding the model

<br>
<br>
<br>

- states are $h$ past observations of the environment's sensors
- states include the min-max scaled features of the data
- past actions are concatenated into the observation
- agent chooses most recent actions based on $h$ past observations
- the environment rewards the agent based on the choice

::right::

# Visualization

MDP observation extraction

<div class="mt-10">
<img :src="'./pomdp.jpg'" class="max-h-100">
</div>

<Bar title="Machine Learning for Safer Smart Environments"/>
