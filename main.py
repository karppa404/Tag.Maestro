
import os
import json
from dotenv import load_dotenv
import requests
from kalshi_python_sync import Configuration, KalshiClient
from openai import OpenAI

load_dotenv()

# --- ENV VARS ---
BASE_URL = os.getenv("BASE_URL_PRODUCTION")
API_KEY_ID = os.getenv("PRODUCTION_API_KEY_ID")
RSA_PATH = os.getenv("PRODUCTION_API_RSA")
PERPLEXITY_API_KEY = os.getenv("PERPLEXITY_API_KEY")
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

# --- CLIENT SETUP ---
config = Configuration(host=BASE_URL)

with open(RSA_PATH, "r") as f:
    private_key = f.read()

config.api_key_id = API_KEY_ID
config.private_key_pem = private_key

kalshi_client = KalshiClient(config)
openai_client = OpenAI(api_key=OPENAI_API_KEY)

# --- KALSHI FUNCTIONS ---
def get_market(ticker: str):
    try:
        api_response = kalshi_client.get_market(ticker)
        return api_response.market.model_dump()
    except Exception as e:
        print(f"Error fetching market '{ticker}': {e}")
        return None

def get_balance():
    balance = kalshi_client.get_balance()
    return balance.balance / 100

def marketINFO(ticker: str):
    market = get_market(ticker)
    balance = get_balance()

    if not market:
        return None

    yes_price = float(market.get("yes_ask_dollars") or 0) * 100
    no_price = float(market.get("no_ask_dollars") or 0) * 100

    return {
        "balance": balance,
        "title": market.get("title"),
        "ticker": market.get("ticker"),
        "yes_price": yes_price,
        "no_price": no_price,
        "last_price": float(market.get("last_price_dollars") or 0) * 100,
        "volume": market.get("volume_fp"),
        "open_interest": market.get("open_interest_fp"),
        "rules_primary": market.get("rules_primary"),
        "rules_secondary": market.get("rules_secondary"),
    }

# --- STEP 1: GENERATE QUESTIONS ---
def generate_questions(market_data):
    prompt = f"""
You are an intern researcher at a hedge fund (Kalshi desk).

Your goal is to generate 3 HIGH-EDGE research questions for Perplexity.

Market:
{json.dumps(market_data, indent=2)}

Rules:
- Questions must be multi-part and specific
- Focus on predictive edge (injuries, tempo, efficiency, betting lines, models)
- Avoid generic phrasing

Return JSON like:
{{
    "1": "...",
    "2": "...",
    "3": "..."
}}
"""

    response = openai_client.chat.completions.create(
        model="gpt-5.4",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.3
    )

    return json.loads(response.choices[0].message.content)

# --- STEP 2: PERPLEXITY SEARCH ---
def query_perplexity(questions):
    url = "https://api.perplexity.ai/chat/completions"

    combined_prompt = "\n".join(questions.values())

    payload = {
        "model": "sonar-pro",
        "messages": [
            {"role": "system", "content": "You are a high-level sports betting research analyst."},
            {"role": "user", "content": combined_prompt}
        ]
    }

    headers = {
        "Authorization": f"Bearer {PERPLEXITY_API_KEY}",
        "Content-Type": "application/json"
    }

    response = requests.post(url, headers=headers, json=payload)
    return response.json()["choices"][0]["message"]["content"]

# --- STEP 3: FINAL DECISION ---
def get_trade_decision(market_data, research):
    prompt = f"""
You are a senior hedge fund trader.

You must decide whether to BUY YES, BUY NO, or NO TRADE.

Market Data:
{json.dumps(market_data, indent=2)}

Research:
{research}

Instructions:
- Compare implied probability vs true probability
- Identify edge
- Recommend position and size (1–10 scale)
- Be decisive
- Be cold and logical

Return JSON:
{{
    "decision": "BUY YES / BUY NO / NO TRADE",
    "edge": "short explanation",
    "confidence": 1-10,
    "size": "small / medium / large"
}}
"""

    response = openai_client.chat.completions.create(
        model="gpt-5.4",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.2
    )

    return json.loads(response.choices[0].message.content)

# --- MAIN PIPELINE ---
def run_pipeline():
    ticker = input("Market ticker?: ")
    print("Fetching market data...")
    market_data = marketINFO(ticker)

    print("Generating research questions...")
    questions = generate_questions(market_data)
    print(json.dumps(questions, indent=2))

    print("\nQuerying Perplexity...")
    research = query_perplexity(questions)
    print("\nRESEARCH:\n", research)

    print("\nGenerating trade decision...")
    decision = get_trade_decision(market_data, research)

    print("\nFINAL DECISION:")
    print(json.dumps(decision, indent=2))

    return decision


if __name__ == "__main__":
    run_pipeline()