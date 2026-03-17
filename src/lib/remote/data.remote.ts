import { query } from '$app/server';
import { portfolioApi } from '$lib/Kalshi';
export const getBalance = query(async () => {
  const response = await portfolioApi.getBalance();
  console.log(response.data.balance)

  return response.data.balance as number;
});