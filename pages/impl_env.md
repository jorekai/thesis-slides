# Environment

decouple environment logic and setup

```python{all|4-10|all}
class BaseEnvironment:
    def __init__(self, config.TRAIN_DIRECTORY, config.TEST_DIRECTORY) -> None:

    def __state(self) -> State:

    def __reward(self, action: CHOICES) -> Reward:

    def __reset(self) -> State:

    def __step(self, action: CHOICES) -> Tuple[State, Reward, bool, _]:

    def __update_cursor(self) -> None:

    def is_done(self) -> bool:

    def is_anomaly(self) -> bool:
```

<Bar title="Machine Learning for Safer Smart Environments - Implementation"/>