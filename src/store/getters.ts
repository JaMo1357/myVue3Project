import { GetterTree } from 'vuex';
import { State } from './index'
import { GetterTypes } from './constants';

export type Getters = {
    [GetterTypes.GET_ALL_MOVIES](state: any, task: any): void;
    [GetterTypes.GET_IS_LOADING](state: any, task: any): void;
};

export const getters: GetterTree<State, any> & Getters = {
    [GetterTypes.GET_ALL_MOVIES](State) {
        return State.movies;
    },
    [GetterTypes.GET_IS_LOADING](State) {
        return State.isLoading;
    },
};