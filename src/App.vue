<template>
  <MoviesFilter />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapMutations } from 'vuex';
import MoviesFilter from '@/components/MoviesFilter.vue';
import {
	ActionTypes,
	MutationTypes,
} from '@/store/constants';

export default defineComponent({
	name: 'App',
	components: { MoviesFilter },
	mounted() {
		this.setLoadingState(true);
		this.loadMoviesToStore();
		this.setLoadingState(false);
	},
	methods: {
		...mapMutations({
			setLoadingState: MutationTypes.SET_LOADING_STATE,
		}),
		loadMoviesToStore() {
			this.$store.dispatch(ActionTypes.LOAD_MOVIES);
		},
	},
});
</script>
