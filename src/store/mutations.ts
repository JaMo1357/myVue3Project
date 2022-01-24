import { MutationTree } from "vuex"
import { MutationTypes } from './constants'
import { State } from './'

export type Mutations<S = State> = {
    [MutationTypes.ADD_MOVIES](state: S, moviesData: Array<object>): void
    [MutationTypes.SET_LOADING_STATE](state: S, isLoadingFlag: boolean): void
    [MutationTypes.SORT_MOVIES](state: S, sortType: string): void
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationTypes.ADD_MOVIES](state, moviesData: Array<object>) {
        state.movies = moviesData
    },
    [MutationTypes.SET_LOADING_STATE](state, isLoadingFlag: boolean) {
        state.isLoading = isLoadingFlag
    },
    [MutationTypes.SORT_MOVIES](state, sortType: string) {
        const stringified = JSON.stringify(state.movies)
        const parsed = JSON.parse(stringified);

        state.movies = parsed.sort((a: object, b: object) => (a.name > b.name) ? 1 : -1)
    },
}