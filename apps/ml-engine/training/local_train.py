from model.model import SimpleModel
from utils.serialize import weights_to_dict

def train_local(data):
    """
    Simulate local client training.
    Incoming data can be anything from Go client.
    """

    model = SimpleModel()

    steps = data.get("steps", 5000)
    sleep = data.get("sleep", 6)

    # Simulate training updates
    model.w1 += steps * 0.0001
    model.w2 += sleep * 0.0002

    return weights_to_dict(model)
