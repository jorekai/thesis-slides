# Implementation - environment

decouple environment logic and setup

```python{all|4-10|all}
class BaseEnvironment:
    def __init__(self, config.TRAIN_DIRECTORY, config.TEST_DIRECTORY):

    def __state(self):

    def __reward(self, action):

    def __reset(self):

    def __step(self, action):

    def __update_cursor(self):

    def is_done(self):

    def is_anomaly(self):
```