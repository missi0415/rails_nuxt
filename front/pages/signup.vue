<template>
  <bef-login-form-card #form-card-content>
    <v-form
      v-model="isValid"
    >
      <user-form-name 
        :name.sync="params.user.name"
      />
      <!-- :nameは子コンポーネントのpropsで指定した値プロパティをv-bind:nameとして呼び出している -->
      <user-form-email 
        :email.sync="params.user.email"
      />
      <user-form-password
        :password.sync="params.user.password"
      />
      <v-btn
        :disabled="!isValid"
        block
        color="myblue"
        class="white--text"

      >
        登録する
      </v-btn>
    </v-form>
    <p>{{ params }}</p>
  </bef-login-form-card>
</template>

<script>
import befLoginFormCard from '~/components/beforeLogin/befLoginFormCard'
import userFormEmail from '~/components/user/userFormEmail'
import userFormName from '~/components/user/userFormName'
import userFormPassword from '~/components/user/userFormPassword'
export default {
  layout: 'beforeLogin',
  components: {
    befLoginFormCard,
    userFormEmail,
    userFormName,
    userFormPassword,
  },
  data(){
    return {
      number: 10,
      isValid: false,
      params: { user:{ name: '', email: '', password: ''} }
      //rails にデータを送るためのparams
    }
  },
  computed: {
    setName: {
      get () { return this.name},
      set (newVal){ return this.$emit('update')}
    }
  }
}
</script>
