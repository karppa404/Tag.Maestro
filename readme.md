# KB1

![KB1 Thumbnail](./thumbnail.png)
## Article
Read the full breakdown on Substack:
[Here](https://karppa404.substack.com/p/a-clueless-approach-to-llms-trading)
---

KB1 is an AI-powered Kalshi trading research pipeline built for prediction markets.

The system:

* Pulls live Kalshi market data
* Generates high-edge research questions using OpenAI
* Uses Perplexity for real-time sports/news analysis
* Produces a final trade recommendation with confidence + sizing

Designed to simulate a hedge-fund style research workflow for finding edge in event markets.

## Features

* Automated market analysis
* AI-generated research prompts
* Real-time web research integration
* Trade recommendation engine
* Position sizing + confidence scoring

## Stack

* Python
* OpenAI API
* Perplexity API
* Kalshi API

## Example Flow

1. Enter a Kalshi ticker
2. Generate research questions
3. Gather external intelligence
4. Get final trade decision


## Run Locally

```bash
pip install -r requirements.txt
python main.py
```

## Disclaimer

This project is for research and educational purposes only. Not financial advice.
