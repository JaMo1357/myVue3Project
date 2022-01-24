<template>
  <div class="movies-content">
    <div class="movies-content__header">
      <h1>{{ msg }}</h1>
      <hr>
      <button @click="sortMovies('byName')">Sort movies!</button>
      <input type="text" placeholder="...name">
      <input type="text" placeholder="...actors name">
      <input type="text" placeholder="...category">
    </div>
    <div class="movies-content__body">
      <MovieTile v-for="(movie, i) in allMovies"
           :key="`${movie.name}_${i}`"
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
import { GetterTypes, MutationTypes } from './../store/constants'
import MovieTile from '../components/MovieTile.vue'
import {defineComponent, computed, ref, watch} from 'vue'


export default defineComponent({
  name: 'Movies',
  props: {
    msg: String,
  },
  components: { MovieTile },
  setup({ msg }) {
    const store = useStore(key)
    var allMovies = computed(() => store.getters[GetterTypes.GET_ALL_MOVIES])

    function sortMovies(param) {
      store.commit(MutationTypes.SORT_MOVIES, param)
      allMovies = computed(() => store.getters[GetterTypes.GET_ALL_MOVIES])
    }

    return {
      message: msg,
      sortMovies,
      allMovies,
      isLoading: computed(() => store.getters[GetterTypes.GET_IS_LOADING]),
    }
  }
})
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
