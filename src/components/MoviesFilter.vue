<template>
  <div class="movies-filter">
    <h1>Find your movie</h1>
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
      v-if="isSorted || isFiltered"
      :movies-data="final"
      :is-loading="isLoading"
    />
    <MoviesList
      v-else
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
	name: 'MoviesFilter',
	components: { MoviesList },
	setup() {
		const store = useStore(key);
		let movies = ref(computed(() => store.getters[GetterTypes.GET_ALL_MOVIES]));
		let sortedMovies = ref(computed(() => store.getters[GetterTypes.GET_SORTED_MOVIES]));
		let final = ref(movies.value);

		function sortOrReset() {
			if (store.state.isSorted){
				store.state.isSorted = false;
				store.state.isFiltered = false;
				final.value = movies.value;
			} else {
				store.state.isSorted = true;
				final.value = sortedMovies.value;
			}
		}

		const filterMovies = throttle(500, (e: Event, filterType: string) => {
			const filterSubString = (e.target as HTMLInputElement).value;

			if (filterSubString){
				switch (filterType){
				case filtersMap.BY_NAME:
					final.value = store.getters[GetterTypes.GET_FILTERED_MOVIES_BY_NAME](filterSubString);
					break;
				case filtersMap.BY_ACTOR:
					final.value = store.getters[GetterTypes.GET_FILTERED_MOVIES_BY_ACTOR](filterSubString);
					break;
				case filtersMap.BY_CATEGORY:
					final.value = store.getters[GetterTypes.GET_FILTERED_MOVIES_BY_CATEGORY](filterSubString);
					break;
				}

				store.state.isFiltered = true;
			} else {
				final.value = movies.value;
			}
		});

		return {
			movies,
			final,
			sortOrReset,
			filterMovies,
			isLoading: computed(() => store.state.isLoading),
			isSorted: computed(() => store.state.isSorted),
			isFiltered: computed(() => store.state.isFiltered),
		};
	},
});
</script>