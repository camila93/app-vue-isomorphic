import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore() {
    return new Vuex.Store({
        state: () => ({
            greenFruits: [
                'Limão',
                'Abacate'
            ],
            orangeFruits: [],
            purpleFruits: []
        }),
        mutations: {
            setOrangeFruits: (state, orangeFruits) => {
                state.orangeFruits = orangeFruits
            }
        }
    })
}
