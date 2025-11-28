import pandas as pd

def load_dataset(path):
    try:
        return pd.read_csv(path)
    except:
        return None
