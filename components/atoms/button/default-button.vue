<template>
  <button class="default-button" type="button"><slot /></button>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.default-button {
  width: 240px;
  height: 80px;
  font-size: 32px;
  border: 1px solid gray;
  border-radius: 8px;
  background-color: white;
  color: gray;
}
</style>
