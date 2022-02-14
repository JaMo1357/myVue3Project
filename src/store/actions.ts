import { ActionContext, ActionTree } from 'vuex';
import { State } from '@/store';
import { ActionTypes, MutationTypes } from '@/store/constants';
import { Mutations } from '@/store/mutations';
import { Movie } from '@/store/index'

import { fetchMoviesData } from '@/services/serviceHttp';

type AugmentedActionContext = {
    commit<K extends keyof Mutations> (
        key: K,
        payload: Array<Movie>,
    ):ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
    [ActionTypes.LOAD_MOVIES](
        { commit }: AugmentedActionContext,
    ): void
}

export const actions: ActionTree<State, State> & Actions = {
	async [ActionTypes.LOAD_MOVIES]({ commit }) {
		await fetchMoviesData().then((moviesData) => {
			commit(MutationTypes.ADD_MOVIES, moviesData);
		});
	},
};
