import { ActionTree } from 'vuex'
import { State } from './'
import {
    ActionTypes,
    MutationTypes,
} from './constants'

import { fetchMoviesData } from '../services/serviceHttp'

export type Actions = {
    [ActionTypes.LOAD_MOVIES](state: any): void
}

export const actions: ActionTree<State, State> & Actions = {
    async [ActionTypes.LOAD_MOVIES]({ commit }) {
        await fetchMoviesData().then((moviesData) => {
            commit(MutationTypes.ADD_MOVIES, moviesData)
        })
    },
}
