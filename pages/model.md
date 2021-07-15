---
preload: true
layout: two-cols
---

# Model

was wir haben wollen

<br>
<br>

- einen MDP (die Abstraktion) und einen Agenten
- MDP: $(S,A,P_a(s, s'),R_a(s, s'), p_0)$
- Agent: $\pi := p(A \mid S)$
- $V_{\pi}=\sum_{s \in S}^{}d^{\pi}(s)\sum_{a \in A}^{}Q(s,a)*\pi(s,a)$
- $V_{\pi}$ versorgt uns mit der besten Aktion $\pi^*=\argmax_{\pi} V_{\pi}$
- $E = <s_t,a_t,r_t,s_{t+1},\theta_{t}>.s_t,s_{t+1} \in S;a \in A; r \in R$

::right::

# Datensätze

was wir gegeben bekommen

<div v-click class="actual mt-10">
    <div class="">
        <img class="rounded" :src="'./csv.png'">
    </div>
    <div class="mt-2">
        <img class="rounded" :src="'./csv2.png'">
    </div>
</div>

<Bar title="Machine Learning for Safer Smart Environments"/>


<style>
.actual{
    display: block;
    width: auto;
}
</style>
