import { GetterTree } from 'vuex'
import { State } from './'
import { GetterTypes } from './constants'

export type Getters<S = State> = {
    [GetterTypes.GET_ALL_MOVIES](state: S, movies: Array<object>): void
    [GetterTypes.GET_IS_LOADING](state: S): boolean
};

export const getters: GetterTree<State, State> & Getters = {
    [GetterTypes.GET_ALL_MOVIES]({ movies }) {
        return movies
    },
    [GetterTypes.GET_IS_LOADING]({ isLoading }) {
        return isLoading
    },
};