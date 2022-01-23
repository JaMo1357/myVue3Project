import { MutationTree } from "vuex";
import { MutationTypes } from './constants';

export type Mutations = {
    [MutationTypes.ADD_MOVIES](state: any, task: any): void;
    [MutationTypes.SET_LOADING_STATE](state: any, task: any): void;
};

export const mutations: MutationTree<any> & Mutations = {
    [MutationTypes.ADD_MOVIES](state, moviesData) {
        state.movies = moviesData;
    },
    [MutationTypes.SET_LOADING_STATE](state, isLoadingFlag) {
        state.isLoading = isLoadingFlag;
    },
};