import {ActionTree} from 'vuex';
import {State} from '@/store';
import {ActionTypes, MutationTypes} from '@/store/constants';

import {fetchMoviesData} from '@/services/serviceHttp';

export const actions: ActionTree<State, State> = {
	async [ActionTypes.LOAD_MOVIES]({ commit }) {
		await fetchMoviesData().then((moviesData) => {
			commit(MutationTypes.ADD_MOVIES, moviesData);
		});
	},
};
