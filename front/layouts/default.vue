<template>
  <v-app>
    <logged-in-header />
    <v-main>
      <nuxt/> 
    </v-main>
  </v-app>
</template>

<script>
import loggedInHeader from '../components/loggedIn/loggedInHeader.vue'
export default {
  components: { loggedInHeader },
}
</script>
