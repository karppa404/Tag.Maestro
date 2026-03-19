import os
from pprint import pprint
import json
from dotenv import load_dotenv
from kalshi_python_sync import Configuration, KalshiClient

load_dotenv()

BASE_URL = os.getenv("BASE_URL_DEVELOPMENT")
API_KEY_ID = os.getenv("DEVELOPMENT_API_KEY_ID")
RSA_PATH = os.getenv("DEVELOPMENT_API_RSA")

config = Configuration(host=BASE_URL)

with open(RSA_PATH, "r") as f:
    private_key = f.read()

config.api_key_id = API_KEY_ID
config.private_key_pem = private_key

client = KalshiClient(config)


def get_balance():
    balance = client.get_balance()
    return balance.balance / 100


def get_market(ticker: str):
    try:
        api_response = client.get_market(ticker)
        return api_response.market.model_dump()
    except Exception as e:
        print(f"Error fetching market '{ticker}': {e}")
        return None