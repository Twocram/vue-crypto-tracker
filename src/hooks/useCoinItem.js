import { onMounted, ref } from "vue";

export default function useCoins(id) {
  const coinItem = ref({});

  const fetching = async () => {
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/coins/${id}`
      ).then((data) => data.json());
      coinItem.img = data.image.small;
      coinItem.name = data.name;
      coinItem.symbol = data.symbol;
      coinItem.currentPrice = data.market_data.current_price.usd;
      coinItem.totalPrice = data.market_data.market_cap.usd;
      coinItem.priceChange =
        data.market_data.price_change_percentage_24h.toFixed(2);
    } catch (error) {
      console.log("Error from fetching data");
    }
  };
  onMounted(fetching);
  return {
    coinItem,
  };
}
