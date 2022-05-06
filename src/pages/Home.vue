<template>
  <div>
    <CoinList :coins="coins"></CoinList>
  </div>
</template>

<script>
import useCoins from "@/hooks/useCoins.js";
import CoinList from "@/components/CoinList.vue";

export default {
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
