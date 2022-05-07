<template>
  <div class="main__wrapper">
    <custom-input type="text" v-model="searchQuery" />
    <CoinList :coins="searchedCoins"></CoinList>
  </div>
</template>

<script>
import useCoins from '@/hooks/useCoins.js';
import CoinList from '@/components/CoinList.vue';
import useSearchedCoins from '@/hooks/useSearchedCoins.js';
import CustomInput from '@/components/UI/CustomInput.vue';

export default {
  setup() {
    const { coins } = useCoins();
    const { searchQuery, searchedCoins } = useSearchedCoins(coins);
    return {
      coins,
      searchQuery,
      searchedCoins,
    };
  },
  components: { CoinList, CustomInput },
};
</script>

<style lang="scss" scoped>
.main__wrapper {
  input {
    display: flex;
    justify-content: center;
  }
}
</style>
