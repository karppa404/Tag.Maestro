import { query } from '$app/server';
import { portfolioApi } from '$lib/Kalshi';

export const getBalance = query(async () => {
  const response = await portfolioApi.getBalance();
  return `Balance: $${(response.data.balance || 0) / 100}`; 
});