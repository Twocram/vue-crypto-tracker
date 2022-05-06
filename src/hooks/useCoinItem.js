import { onMounted, ref } from "vue";

export default function useCoins(id) {
  const coinItem = ref({});
  const fetching = async () => {
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/coins/${id}`
      ).then((data) => data.json());
      coinItem.value.img = data.image.small;
      coinItem.value.name = data.name;
      coinItem.value.symbol = data.symbol;
      coinItem.value.currentPrice = data.market_data.current_price.usd;
      coinItem.value.totalPrice = data.market_data.market_cap.usd;
      coinItem.value.priceChange =
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
