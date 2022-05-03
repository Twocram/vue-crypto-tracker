<template>
  <div>
    <CoinList :coins="coins"></CoinList>
  </div>
</template>

<script>
import useCoins from '@/hooks/useCoins';
import CoinList from '@/components/CoinList.vue';

export default {
  data() {
    return {};
  },
  setup() {
    const { coins } = useCoins();
    return {
      coins,
    };
  },
  components: { CoinList },
};
</script>

<style lang="sass" scoped></style>
