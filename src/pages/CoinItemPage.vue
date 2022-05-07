<template>
  <div>
    <button @click="$router.go(-1)">Back</button>
  </div>
  <div class="coin-item__wrapper" v-if="!(Object.keys(coinItem).length === 0)">
    <img class="coin-img" :src="coinItem.img" :alt="coinItem.symbol" />
    <div>{{ coinItem.currentPrice }}</div>
    <div>{{ coinItem.name }}({{ coinItem.symbol }})</div>
    <div>Current Price: {{ coinItem.currentPrice }}$</div>
    <div>{{ coinItem.totalPrice }}$</div>
    <div>{{ coinItem.priceChange }}$</div>
  </div>
  <div v-else>Loading...</div>
</template>
<script>
import useCoinItem from '@/hooks/useCoinItem';
import { useRoute } from 'vue-router';
export default {
  setup() {
    const id = useRoute().params.id;
    const { coinItem } = useCoinItem(id);
    return {
      coinItem,
    };
  },
};
</script>
<style lang="scss"></style>
