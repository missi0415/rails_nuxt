<template>
<!-- eslint-disable-next-line -->
  <bef-login-form-card #form-card-content>
    <!-- まるっと書き換え -->
    <v-form
      ref="form"
      v-model="isValid"
    >
      <user-form-email
        :email.sync="params.auth.email"
        no-validation
      />
      <user-form-password
        :password.sync="params.auth.password"
        no-validation
      />
       <v-card-actions>
        <nuxt-link
          to="#"
          class="body-2 text-decoration-none"
        >
          パスワードを忘れた?
        </nuxt-link>
      </v-card-actions>
      <v-card-text class="px-0">
        <v-btn
          :disabled="!isValid || loading"
          :loading="loading"
          block
          color="myblue"
          class="white--text"
          @click="login"
        >
          ログインする
        </v-btn>
      </v-card-text>  
    </v-form>
  </bef-login-form-card>
</template>

<script>
import befLoginFormCard from '~/components/beforeLogin/befLoginFormCard'
import userFormEmail from '~/components/user/userFormEmail'
import userFormPassword from '~/components/user/userFormPassword'
export default {
  layout: 'beforeLogin',
  components: {
    befLoginFormCard,
    userFormEmail,
    userFormPassword,
  },
  // 追加
  data () {
    return {
      isValid: false,
      loading: false,
      params: { auth: { email: '', password: '' } }
    }
  },
  methods: {
    async login () {
      this.loading = true
      if (this.isValid) {
        await this.$axios.$post('/api/v1/user_token', this.params)
          .then(response => this.authSuccessful(response))
          .catch(error => this.authFailure(error))
      }
      this.loading = false
    },
    // 追加
    // ログイン成功
    authSuccessful (response) {
      console.log(response)
    },
    // ログイン失敗
    authFailure ({ response }) {
      console.log(response)
    }
  }
}
</script>
