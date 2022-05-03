<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

#app {
  max-width: 1368px;
  margin: 0 auto;
}

html {
  background: rgb(14, 19, 43);
  color: #fff;
}
</style>
