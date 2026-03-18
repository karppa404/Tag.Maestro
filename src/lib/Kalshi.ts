import {
  PortfolioApi,
  MarketApi,
  Configuration,
} from 'kalshi-typescript';
import { env } from '$env/dynamic/private';
import { resolve } from 'path';

const config = new Configuration({
    apiKey: env.PRIVATE_KALSHI_API_KEY as string,
    privateKeyPath: resolve(process.cwd(), 'BOT.pem'),
    basePath: env.PRIVATE_KALSHI_PEM_URL as string
});

export const portfolioApi = new PortfolioApi(config);
export const marketAPI =new MarketApi(config);