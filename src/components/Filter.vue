<template>
  <div class="movies-filter">
    <button @click="sortOrReset()">{{
        isSorted || isFiltered ? 'Reset Filter' : 'Sort movies A-Z'
      }}</button>
    <input type="text" placeholder="...name" @keyup="filterMovies($event, 'byName')">
    <input type="text" placeholder="...actors name" @keyup="filterMovies($event, 'byActor')">
    <input type="text" placeholder="...category" @keyup="filterMovies($event, 'byCategory')">
  </div>
  <Movies
    :moviesData="movies"
    :isLoading="isLoading"
  />
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { key } from "./../store";
import { GetterTypes } from "./../store/constants";
import { throttle } from "throttle-debounce";
import Movies from './Movies.vue';

export default defineComponent({
  name: "Filter",
  components: { Movies },
  setup() {
    const store = useStore(key);
    let movies = ref([]);

    function sortOrReset() {
      let isSorted = store.state.isSorted;

      if (isSorted) {
        movies.value = moviesFromStore();
      } else {
        movies.value = sortMovies('byName');
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

    const filterMovies = throttle(500, (e: object, filterType: string) => {
      console.log(e, filterType);
      const filterSubString = e.target.value;

      if (filterSubString) {
        switch (filterType) {
          case 'byName':
            movies.value = store.getters[GetterTypes.GET_FILTERED_MOVIES_BY_NAME](filterSubString);
            break;
          case 'byActor':
            movies.value = store.getters[GetterTypes.GET_FILTERED_MOVIES_BY_ACTOR](filterSubString);
            break;
          case 'byCategory':
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
    }, 500)

    return {
      movies,
      sortOrReset,
      filterMovies,
      isLoading: computed(() => store.state.isLoading),
      isSorted: computed(() => store.state.isSorted),
      isFiltered: computed(() => store.state.isFiltered),
    }
  },
});
</script>

<style lang="scss">
html, body {
  height: 100%;
  width: 100%;

  #app {
    display: flex;
    flex-direction: column;
  }
}
</style>