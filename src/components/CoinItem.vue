<template>
  <div class="coin-item__wrapper">
    <img class="coin-item__logo" :src="coin.image" alt="" />
    <div class="coin-item__name">
      {{ coin.name }}
    </div>
    <div class="coin-item__symbol">
      {{ coin.symbol }}
    </div>
    <div class="coin-item__current-price">
      {{ coin.current_price.toLocaleString('fi-FI') }}
    </div>
    <div
      :class="[coin.price_change_percentage_24h > 0 ? 'positive' : 'negative']"
    >
      {{ coin.price_change_percentage_24h.toFixed(2) }}%
    </div>
    <div>${{ coin.market_cap.toLocaleString('fi-FI') }}</div>
    <button
      @click="
        $router.push({ path: `/coins/${coin.id}`, params: { id: coin.id } })
      "
    >
      Go to Page
    </button>
  </div>
</template>
<script>
export default {
  name: 'coin-item',
  props: {
    coin: {
      type: Object,
      requried: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.coin-item__wrapper {
  padding: 10px;
  border: 2px solid white;
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  align-items: center;
  &:last-child {
    margin-bottom: 0;
  }
}

.coin-item__logo {
  width: 48px;
  height: 48px;
}

.positive {
  color: rgb(1, 255, 1);
  font-weight: 400;
}

.negative {
  color: red;
  font-weight: 400;
}
</style>
