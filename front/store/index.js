export const state = () => ({
  //ログインフラグ
  //vuexはstateにはいってないと保持できない
  loggedIn: false
  //trueの場合=>default.vue
  //falseの場合=>welcome.vue
})

export const getters = {}

export const mutations = {}
  //stateの値を変えるにはmutationsにコミットしないといけない

export const actions = {}
  //mutationsはactionsを通して呼ばれる

