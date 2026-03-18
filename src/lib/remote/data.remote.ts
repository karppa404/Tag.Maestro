import { query } from '$app/server';
import { portfolioApi,marketAPI } from '$lib/Kalshi';
export const getBalance = query(async () => {
  const response = await portfolioApi.getBalance();
  return response.data.balance as number;
});

export const getMarket = query(async ({ ticker, depth }: { ticker: string; depth: number }) => {
  const { data, status } = await marketAPI.getMarketOrderbook(ticker, depth);
  if (status !== 200) throw new Error(`API error: ${status}`);
  return JSON.stringify(data);
});