from fastapi import FastAPI
from training.local_train import train_local
from training.global_agg import aggregate

app = FastAPI()

@app.get("/")
def root():
    return {"message": "ML Engine Running Successfully"}

@app.post("/train")
def train_client(data: dict):
    """
    Called by Go (or NestJS) to train on local data.
    """
    return train_local(data)

@app.post("/aggregate")
def aggregate_models(models: list):
    """
    Called by NestJS to run FedAvg.
    """
    return aggregate(models)
