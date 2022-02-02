import { MutationTree } from "vuex"
import { MutationTypes } from './constants'
import { State } from './'
import { Movie } from './index'

export type Mutations<S = State> = {
    [MutationTypes.ADD_MOVIES](state: S, moviesData: Array<object>): void,
    [MutationTypes.SET_LOADING_STATE](state: S, isLoadingFlag: boolean): void,
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationTypes.ADD_MOVIES](state, moviesData: Array<Movie>) {
        state.movies = moviesData;
    },
    [MutationTypes.SET_LOADING_STATE](state, isLoadingFlag: boolean) {
        state.isLoading = isLoadingFlag;
    },
}