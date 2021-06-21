# Implementation - agent

expose the interface for all agents

```python
class BaseAgent(ABC):
    @abstractmethod
    def __init__(self, model: keras.Model, predict_model: keras.Model, memory: ReplayMemory = None):

    @abstractmethod
    def action(self, state: np.ndarray) -> np.int32:

    @abstractmethod
    def experience_replay(self) -> None:

    @abstractmethod
    def predict_on_batch(self, batch: list) -> np.ndarray:

    def update_target_model(self) -> None:

    def anneal_epsilon(self) -> None:
```

<Bar title="Machine Learning for Safer Smart Environments"/>