---
layout: two-cols
preload: true
---

<template v-slot:default>

# Ziele

was soll erreicht werden?

<br>
<br>
<br>
<br>

- die Analyse von Deep-RL zur Anomalieerkennung
- die Erweiterung mittels Prioritized Experience Replay
- erweiterbare und reproduzierbare Ergebnisse
- eine Auswertung der erreichten Ergebnisse
- zuletzt: Diskussion über die Relevanz in Zukunft

</template>

<template v-slot:right>

<div class="mt-45">

```python {all|2|3|4-7|8|all}
def erreiche_ziele(zielsetzung):
  ergebnisse = []
  for ziel in zielsetzung:
    ergebnis = False
    ergebnis = brainpower(ziel) # true/false
    if not ergebnis: # bruteforce
      ergebnis = more_brainpower(ziel)
    ergebnisse.append(result)
  assert(len(ergebnisse) == len(zielsetzung)) # M.Sc.
```

</div>

<Bar title="Machine Learning for Safer Smart Environments"/>

</template>