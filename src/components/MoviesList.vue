<template>
  <div class="movies-content">
    <div class="movies-content__header" />
    <div class="movies-content__body">
      <MovieTile
        v-for="(movie, i) in moviesData"
        :key="`${movie.name}_${i}`"
        :single-movie-data="movie"
      />
    </div>
    <div
      v-if="isLoading"
      class="movies-content__loader"
    />
  </div>
</template>

<script lang="ts">
import MovieTile from '@/components/MovieTile.vue';

export default {
	name: 'MoviesList',
	components: { MovieTile },
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
};
</script>