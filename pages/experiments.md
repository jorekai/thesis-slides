---
layout: two-cols
---

# Occupancy Detection

Experiment I - the mock up

<br>
<br>
<br>


- 20560 samples, 25% anomalous
- features: temperature, humidity, light, CO2, HumidityRatio
- 50/50 training, testing split
- has a principal component in **light**
- is the framework able to learn a stable policy?
- how good is the policy?

::right::

# Falling Detection

Experiment II - the real world

<br>
<br>
<br>

- 164259 samples, 5% anomalous
- features: spatial(x,y,z), binary(sensor)
- 80/20 training, testing split
- no principal component obvious
- can we perform a good anomaly detection policy?
- can we go further with the approach?


<Bar title="Machine Learning for Safer Smart Environments"/>

<style>
.scroll{
    width: 80%;
    overflow-y: scroll;
}
</style>
