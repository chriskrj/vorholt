<template>
  <ul class="MetaNavigation Base-theme--dark">
      <li class="MetaNavigation-item"><nuxt-link class="MetaNavigation-link Base-iconLink" to="/impressum">Impressum & Datenschutz</nuxt-link></li>
  </ul>
</template>
<style lang="scss" scoped>
.MetaNavigation {
  display: flex;
  list-style: none;
}

.MetaNavigation-item {
  &:last-child {
    margin-left: 16px;
  }
}

.MetaNavigation-link {
  color: white;
}
</style>
