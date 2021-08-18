<template>
  <v-container>
    <nuxt-child />
  </v-container>
</template>

<script>
export default {
  layout: 'loggedIn',
  validate ({ route }) {
    //accountという自動生成されたルートをアクセス不可とする記述
    return route.name !== 'account'
  }
}
</script>
