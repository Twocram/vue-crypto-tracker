import { ref, computed } from 'vue';

export default function useSearchedCoins(coins) {
  const searchQuery = ref('');
  const searchedCoins = computed(() => {
    return coins.value.filter((coin) =>
      coin.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });

  return {
    searchQuery,
    searchedCoins,
  };
}
