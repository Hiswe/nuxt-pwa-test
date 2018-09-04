<template lang="pug">
section.page-content
  h1 {{error.statusCode}}
  h2(v-if="error.statusCode === 404") nothing there
  h2(v-else) An error occurred
  router-link( to="/" exact) back to homepage
</template>

<style lang="scss" scoped>
.page-content {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
h1 {
  font-size: 5rem;
  font-weight: 300;
  margin: 0;
}
a {
  color: var(--c-accent);
}
</style>

<script>
export default {
  name: `page-not-found`,
  props: [`error`],
}
</script>
