---
layout: two-cols
---

# Simulator

manages iterations and more

<div class="max-w-100">

```python
class Simulator():
    def __init__(self,
        environment: Environment,
        evaluator: Evaluator) -> None:

    def create_model(self) -> keras.Model:

    def run(self,
        training_steps: int,
        log_name: str) -> None:

    def train(self,
        timesteps: int,
        log_name: str) -> None:

    def eval(self,
        model: keras.Model,
        episodes: int) -> None:
```

</div>

::right::

# Evaluator

records statistics for fitted models

<div class="max-w-100 ">

```python
class Evaluator():
    def __init__(self, logname: str) -> None:

    def run(self,
        model: keras.Model,
        episodes: int) -> None:

class Stats:
    def __init__(self, series: DataFrame) -> None:

    def update(self,
        reward: int,
        action: int) -> None:

    def reset(self) -> None:

    def true_positive_rate(self) -> float:
    ...
```

</div>

<Bar title="Machine Learning for Safer Smart Environments"/>
