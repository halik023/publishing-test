import { createStore } from 'vuex'

export default createStore({
    state: {
        infoProject: {
        }
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
        infoProject({ commit }, payload) {
            let sections = [];
            let sheets = payload.numberOfPages / 2 + 2
            sections.push({
                name: 'Cover',
                status: 'Not Started',
                deliveryDate: payload.deliveryDate,
                expand: true,
                screens: [
                    {
                        type: 'cover',
                        orderPage: 1
                    }
                ]
            })
            for (let i = 0; i <= sheets - 2; i++) {
                if (i % 4 === 0) {
                    sections.push({
                        name: 'Session ' + (Math.floor(i / 4) + 1),
                        status: 'Not Started',
                        deliveryDate: payload.deliveryDate,
                        expand: true,
                        screens: []
                    })

                }
                sections[Math.floor(i / 4) + 1].screens.push(
                    {
                        type: (i === 0 || i === (sheets - 2)) ? 'half' : 'normal',
                        orderPage: i + 2
                    }
                )
            }
            payload = {
                ...payload,
                sections
            }
            commit('setInfoPeoject', payload)
        }
    },
})
