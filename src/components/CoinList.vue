<template>
  <div class="coin-list__wrapper">
    <CoinItem v-for="coin in coins" :coin="coin" :key="coin" />
  </div>
</template>

<script>
import CoinItem from './CoinItem.vue';

export default {
  components: { CoinItem },
  name: 'coin-list',
  props: {
    coins: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.coin-list__wrapper {
  display: flex;
  flex-direction: column;
}
</style>
