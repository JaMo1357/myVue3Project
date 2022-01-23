<template>
  <div class="movies-content">
    <div class="movies-content__header">
      <h1>{{ msg }}</h1>
      <hr>
      <button @click="sortMovies('A-Z')">Sort movies!</button>
    </div>
    <div class="movies-content__body">
      <MovieTile v-for="movie in allMovies"
           :singleMovieData="movie"
      />
    </div>
    <div class="movies-content__loader"
      v-if="isLoading"
    />
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { key } from './../store'
import { GetterTypes } from './../store/constants'
import MovieTile from '../components/MovieTile.vue'
import { defineComponent, computed } from 'vue'


export default defineComponent({
  name: 'Movies',
  props: {
    msg: String,
  },
  components: { MovieTile },
  setup({ msg }) {
    const store = useStore(key);

    const getMovies = GetterTypes.GET_ALL_MOVIES;
    const isLoading = GetterTypes.GET_IS_LOADING;

    function sortMovies(sortType) {
      console.log(sortType);
    }

    return {
      message: msg,
      sortMovies,
      allMovies: computed(() => store.getters[getMovies]),
      isLoading: computed(() => store.getters[isLoading]),
    };
  }
});
</script>
<style lang="scss">
$baseClass: '.movies-content';

#{$baseClass} {
  width: 100%;
  height: 100%;
  display: flex;
  justify-self: center;
  align-self: center;
  flex-direction: column;

  &__body {
    display: grid;
    grid-template-areas: ". . .";
  }

  &__loader {
    height: 43px;
    width: 63px;
    display: flex;
    justify-self: center;
    align-self: center;
    background: url('./src/assets/loader.gif');
  }
}
</style>
