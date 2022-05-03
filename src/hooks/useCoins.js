import { onMounted, ref } from 'vue';

export default function useCoins() {
  const coins = ref([]);
  const fetching = async () => {
    try {
      const data = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      ).then((data) => data.json());
      coins.value = data;
    } catch (error) {
      console.log('Error from fetchin data');
    }
  };

  onMounted(fetching);
  return {
    coins,
  };
}
