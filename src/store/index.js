import { createStore } from 'vuex'

export default createStore({
    state: {
        status: "",
        id: "",
        loginName: "",
        token: ""
    },
    mutations: {
        setUserInfo(state, obj) {
            state.status = obj.status
            state.id = obj.id
            state.loginName = obj.loginName
            state.token = obj.token
        }
    },
    actions: {},
    modules: {}
})