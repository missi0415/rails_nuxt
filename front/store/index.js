export const state = () => ({
  //ログインフラグ
  //vuexはstateにはいってないと保持できない
  loggedIn: false,
  //trueの場合=>default.vue
  //falseの場合=>welcome.vue
  styles: {
    beforeLogin: {
      appBarHeight: 56
    }
  },
  current: {
    project: null
  },
  projects: [
    { id: 1, name: 'MyProject01', updatedAt: '2020-04-01T12:00:00+09:00' },
    { id: 2, name: 'MyProject02', updatedAt: '2020-04-05T12:00:00+09:00' },
    { id: 3, name: 'MyProject03', updatedAt: '2020-04-03T12:00:00+09:00' },
    { id: 4, name: 'MyProject04', updatedAt: '2020-04-04T12:00:00+09:00' },
    { id: 5, name: 'MyProject05', updatedAt: '2020-04-01T12:00:00+09:00' }
  ]
})

export const getters = {}

export const mutations = {
  //stateの値を変えるにはmutationsにコミットしないといけない
  setLoggedIn (state, payload) {
    state.loggedIn = payload
  },
  setCurrentProject (state,payload){
    state.current.project = payload
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
  },
  getCurrentProject ({ state, commit }, params) {
    const currentProject = state.projects.find(project => project.id === Number(params.id))
    commit('setCurrentProject', currentProject)
  }
}

