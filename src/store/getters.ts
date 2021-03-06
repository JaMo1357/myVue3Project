import { GetterTree } from 'vuex';
import { State } from '@/store';
import { GetterTypes } from '@/store/constants';

export type Getters<S = State> = {
    [GetterTypes.GET_ALL_MOVIES](state: S, movies: Array<object>): object,
    [GetterTypes.GET_FILTERED_MOVIES_BY_NAME](state: S): object,
    [GetterTypes.GET_FILTERED_MOVIES_BY_ACTOR](state: S): object,
    [GetterTypes.GET_SORTED_MOVIES](state: S): object,
};

export const getters: GetterTree<State, State> & Getters = {
	[GetterTypes.GET_ALL_MOVIES]({ movies }) {
		return movies;
	},
	[GetterTypes.GET_FILTERED_MOVIES_BY_NAME]({ movies }) {
		return (filterSubString: string) => {
			if (filterSubString){
				return movies.filter(({ name }) => name.includes(filterSubString));
			} else {
				return movies;
			}
		};
	},
	[GetterTypes.GET_FILTERED_MOVIES_BY_ACTOR]({ movies }) {
		return (filterSubString: string) => {
			if (filterSubString){
				return movies.filter(({ actors }) =>
					actors.some(actor => actor.includes(filterSubString)));
			} else {
				return movies;
			}
		};
	},
	[GetterTypes.GET_FILTERED_MOVIES_BY_CATEGORY]({ movies }) {
		return (filterSubString: string) => {
			if (filterSubString){
				return movies.filter(({ categories }) =>
					categories.some(category => category.includes(filterSubString)));
			} else {
				return movies;
			}
		};
	},
	[GetterTypes.GET_SORTED_MOVIES]({ movies }) {
		const stringified = JSON.stringify(movies);
		const parsed = JSON.parse(stringified);

		return parsed.sort((a: any, b: any) => (a.name > b.name) ? 1 : -1);
	},
};