import { actions } from '@/store/actions';
import { mutations } from '@/store/mutations';
import { getters } from '@/store/getters';

import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

// define your typings for the store state
export interface Movie {
    name: string,
    year: number,
    runtime: number,
    categories: Array<string>,
    'release-date': string,
    director: string,
    writer: Array<string>,
    actors: Array<string>,
    storyline: string,
}

export interface State {
    movies: Array<Movie>,
    isLoading: boolean,
    isSorted: boolean,
    isFiltered: boolean,
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
    state: {
        movies: [],
        isLoading: false,
        isSorted: false,
        isFiltered: false,
    },
    actions,
    mutations,
    getters,
})