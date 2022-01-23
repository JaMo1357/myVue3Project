import { ActionTree } from 'vuex';
import {
    ActionTypes,
    MutationTypes,
} from './constants';

import { fetchMoviesData } from '../services/serviceHttp';
/*import { State } from "@/store/index";
import {Mutations} from "@/store/getters";*/

/*export type Mutations = {
    [MutationTypes.ADD_MOVIES](state: any, task: any): void;
};*/
/*export type Actions = {
    [ActionTypes.LOAD_MOVIES](state: any, task: any): void;
};*/

export const actions: ActionTree<any, any> = {
    async [ActionTypes.LOAD_MOVIES]({ commit }) {
        await fetchMoviesData().then((moviesData) => {
            console.log('moviesData', moviesData);
            commit(MutationTypes.ADD_MOVIES, moviesData);
        });
    },
};
