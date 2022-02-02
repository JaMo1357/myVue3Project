<template>
  <div class="movies-content">
    <div class="movies-content__header">
    </div>
    <div class="movies-content__body">
      <MovieTile v-for="(movie, i) in moviesData"
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
import MovieTile from '../components/MovieTile.vue'

export default {
  name: 'Movies',
  props: {
    moviesData: {
      type: Array,
      required: false,
      default: () => [],
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
  components: { MovieTile },
}
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
