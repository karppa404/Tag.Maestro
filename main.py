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

# Test 1 - Balance
balance = client.get_balance()
print(f"Balance: ${balance.balance / 100:.2f}")

# Test 2 - Market lookup
# Test 2 - Single market lookup
ticker = 'KXUCLGOAL-26MAR18BARNEW-BARRARAUJ4-1'
try:
    api_response = client.get_market(ticker)
    print("\nMarket response:")
    print(json.dumps(api_response.market.model_dump(), indent=2, default=str))
except Exception as e:
    print(f"Error: {e}")