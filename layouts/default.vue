<template lang="pug">
  main(role="main")
    test-main-navigation
    nuxt
</template>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
html {
  -webkit-text-size-adjust: 100%;
  background-image: linear-gradient(135deg, #fff5c3 10%, #9452a5 100%);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  font-size: percentage(20/16);
}
main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>

<script>
import { mapState, mapActions } from 'vuex'

import MainNavigation from '~/components/main-navigation'

export default {
  name: `default-layout`,
  components: {
    'test-main-navigation': MainNavigation,
  },
}
</script>
