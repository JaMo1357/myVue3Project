//actions:
export enum prdel {
    LOAD_MOVIES = 'LOAD_MOVIES',
}

//actions:
export enum ActionTypes {
    LOAD_MOVIES = 'LOAD_MOVIES',
}

//mutations:
export enum MutationTypes {
    SET_LOADING_STATE = 'SET_LOADING_STATE',
    ADD_MOVIES = 'ADD_MOVIES',
}

//getters:
export enum GetterTypes {
    GET_ALL_MOVIES = 'GET_ALL_MOVIES',
    GET_FILTERED_MOVIES_BY_NAME = 'GET_FILTERED_MOVIES_BY_NAME',
    GET_FILTERED_MOVIES_BY_ACTOR = 'GET_FILTERED_MOVIES_BY_ACTOR',
    GET_FILTERED_MOVIES_BY_CATEGORY = 'GET_FILTERED_MOVIES_BY_CATEGORY',
    GET_SORTED_MOVIES = 'GET_SORTED_MOVIES',
}

//filtering:
export enum filtersMap {
    BY_NAME = 'byName',
    BY_ACTOR = 'byActor',
    BY_CATEGORY = 'byCategory',
}