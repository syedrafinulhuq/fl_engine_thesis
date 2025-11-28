from model.model import SimpleModel
from utils.serialize import weights_to_dict

def aggregate(models):
    """
    Federated Averaging:
    models = list of weight dicts sent from local clients
    """

    if not models:
        return {"error": "No models received"}

    aggregated = SimpleModel()
    total = len(models)

    aggregated.w1 = sum(m["w1"] for m in models) / total
    aggregated.w2 = sum(m["w2"] for m in models) / total

    return weights_to_dict(aggregated)
