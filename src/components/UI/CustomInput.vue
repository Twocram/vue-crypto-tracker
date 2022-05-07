<template>
  <input
    type="text"
    :value="modelValue"
    @input="updateInput"
    class="custom-input"
  />
</template>
<script>
export default {
  name: 'custom-input',
  props: {
    modelValue: {
      type: String,
    },
  },
  methods: {
    updateInput(e) {
      this.$emit('update:modelValue', e.target.value);
    },
  },
};
</script>
<style lang="scss" scoped>
.custom-input {
  height: 30px;
  min-width: 200px;
  &:focus {
    outline: none;
  }
}
</style>
