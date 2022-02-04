<template>
  <div class="movies-filter">
    <div class="movies-filter__wrapper">
      <button
        class="border"
        @click="sortOrReset()"
      >
        {{
          isSorted || isFiltered ? 'Reset Filter' : 'Sort movies A-Z'
        }}
      </button>
      <input
        type="text"
        placeholder="...name"
        @keyup="filterMovies($event, 'byName')"
      >
      <input
        type="text"
        placeholder="...actors name"
        @keyup="filterMovies($event, 'byActor')"
      >
      <input
        type="text"
        placeholder="...category"
        @keyup="filterMovies($event, 'byCategory')"
      >
    </div>
    <MoviesList
      :movies-data="movies"
      :is-loading="isLoading"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';
import { filtersMap, GetterTypes } from '@/store/constants';
import { throttle } from 'throttle-debounce';
import MoviesList from '@/components/MoviesList.vue';

export default defineComponent({
	name: "MoviesFilter",
	components: {MoviesList},
	setup() {
		const store = useStore(key);
		let movies = ref([]);

		function sortOrReset() {
			let isSorted = store.state.isSorted;

			if (isSorted) {
				movies.value = moviesFromStore();
			} else {
				movies.value = sortMovies();
			}
		}

		function moviesFromStore() {
			store.state.isSorted = false;
			store.state.isFiltered = false;

			return store.getters[GetterTypes.GET_ALL_MOVIES];
		}

		function sortMovies() {
			store.state.isSorted = true;
      
			return store.getters[GetterTypes.GET_SORTED_MOVIES];
		}

		const filterMovies = throttle(500, (e: Event, filterType: string) => {
			const filterSubString = (e.target as HTMLInputElement).value;

			if (filterSubString) {
				switch (filterType) {
				case filtersMap.BY_NAME:
					movies.value = store.getters[GetterTypes.GET_FILTERED_MOVIES_BY_NAME](filterSubString);
					break;
				case filtersMap.BY_ACTOR:
					movies.value = store.getters[GetterTypes.GET_FILTERED_MOVIES_BY_ACTOR](filterSubString);
					break;
				case filtersMap.BY_CATEGORY:
					movies.value = store.getters[GetterTypes.GET_FILTERED_MOVIES_BY_CATEGORY](filterSubString);
					break;
				}

				store.state.isFiltered = true;
			} else {
				movies.value = moviesFromStore();
			}
		});

		setTimeout(() => {
			movies.value = store.getters[GetterTypes.GET_ALL_MOVIES];
		}, 500);

		return {
			movies,
			sortOrReset,
			filterMovies,
			isLoading: computed(() => store.state.isLoading),
			isSorted: computed(() => store.state.isSorted),
			isFiltered: computed(() => store.state.isFiltered),
		};
	},
});
</script>