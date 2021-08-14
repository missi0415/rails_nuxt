// ウェルカムページのツールバー
<template>
  <v-app-bar
    app
    dark
  >
    <app-logo />
    <v-toolbar-title>
      {{ appName }}
    </v-toolbar-title>
    <v-spacer />
    <v-toolvar-items class="ml-2">
      <v-btn
        v-for="(menu,i) in menus"
        :key="`menu-btn-${i}`"
        text
      >
        {{ $t(`menus.${menu.title}`) }}
      </v-btn>
    </v-toolvar-items>
  </v-app-bar>
</template>

<script>
import appLogo from '~/components/ui/appLogo'
export default {
  props: {
    menus: {
      type: Array,
      default: () => []
    }
  },
  components:{
    appLogo,
  },
  data ({ $config: { appName } }) {
    return {
      appName
    }
  }
}
</script>

