import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';

import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

// define your typings for the store state
export interface State {
    movies: object,
    isLoading: boolean,
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        movies: {},
        isLoading: false,
    },
    actions,
    mutations,
    getters,
})