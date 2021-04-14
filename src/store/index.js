import { createStore } from 'vuex'

export default createStore({
    state: {
        infoProject: {}
    },
    getters: {
        getInfoProject(state) {
            return state.infoProject;
        }
    },
    mutations: {
        setInfoPeoject(state, payload) {
            state.infoProject = {
                ...state.infoProject,
                ...payload
            }
        }
    },
    actions: {
        infoProject({commit}, payload) {
            commit('setInfoPeoject', payload)
        }
    },
})
