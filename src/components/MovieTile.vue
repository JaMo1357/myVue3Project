<template>
  <div class="movie-tile">
    <span class="movie-tile__name">{{ movieName }}</span>
    <span class="movie-tile__actors">Actors:</span>
    <ul>
      <li
        v-for="(actorsName, i) in actors"
        :key="i"
      >
        {{ actorsName }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	props: {
		singleMovieData: {
			type: Object,
			default: () => ({}),
		},
	},
	setup(props) {
		return {
			movieName: props.singleMovieData.name,
			actors: props.singleMovieData.actors,
		};
	}
});
</script>
