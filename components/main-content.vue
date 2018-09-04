<template lang="pug">
  .main-content(:class="`page-${page}`")
    slot
</template>

<style lang="scss" scoped>
.main-content {
  padding: var(--gutter);
  flex: 1 0 auto;
  flex-direction: column;
  font-size: calc((1vh + 1vw + 1vmin) * 2.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<script>
export default {
  name: `hiswe-main-content`,
  props: {
    page: {
      type: String,
      required: true,
    },
  },
}
</script>
