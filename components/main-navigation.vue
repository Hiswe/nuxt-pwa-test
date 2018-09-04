<template lang="pug">
nav.navigation
  router-link.navigation__item(
    to="/"
  ) home
  router-link.navigation__item(
    to="/other"
  ) other
</template>

<style lang="scss" scoped>
.navigation {
  display: flex;
  height: 50px;
  background-color: white;
  z-index: 2;

  &__item {
    color: var(--c-text);
    flex: 1 0 auto;
    text-align: center;
    text-decoration: none;
    background: none;
    border: none;
    padding-top: 10px;

    &--active {
      color: mediumpurple;
      &::before {
        content: '• ';
      }
      &::after {
        content: ' •';
      }
    }
  }
}
</style>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: `main-navigation`,
}
</script>
