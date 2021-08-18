export const state = () => ({
  //ログインフラグ
  //vuexはstateにはいってないと保持できない
  loggedIn: true,
  //trueの場合=>default.vue
  //falseの場合=>welcome.vue
  styles: {
    beforeLogin: {
      appBarHeight: 56
    }
  },
})

export const getters = {}

export const mutations = {
  //stateの値を変えるにはmutationsにコミットしないといけない
  setLoggedIn (state, payload) {
    state.loggedIn = payload
  }
  //stateがtrueの状態がログインした状態。ページ遷移した時に保持できる値はstateしか無いためstateに保持させておく
}
  

export const actions = {
  //mutationsはactionsを通して呼ばれる
  login ({ commit }) {
    commit('setLoggedIn', true)
  },
  logout ({ commit }){
    commit('setLoggedIn',false)
  }
}

