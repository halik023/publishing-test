import { createStore } from 'vuex'
import shortid from 'shortid'


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
        },
        changeExpand(state, id) {
            console.log(id);
            let index = state.infoProject.sections.findIndex((item) => {
                return item.id == id;
            })
            console.log(index)
            let expand = state.infoProject.sections[index].expand;
            state.infoProject.sections[index].expand = !expand;
        }
    },
    actions: {
        infoProject({ commit }, payload) {
            let sections = [];
            let sheets = payload.numberOfPages / 2 + 2
            sections.push({
                id: shortid.generate(),
                name: 'Cover',
                status: 'Not Started',
                deliveryDate: payload.deliveryDate,
                expand: false,
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
                        id: shortid.generate(),
                        name: 'Section ' + (Math.floor(i / 4) + 1),
                        status: 'Not Started',
                        deliveryDate: payload.deliveryDate,
                        expand: false,
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
        },
        changeExpand({ commit }, id) {
            commit('changeExpand', id)
        }
    },
})
