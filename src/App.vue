<template>
  <MoviesFilter />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapMutations } from 'vuex'

import MoviesFilter from '@/components/MoviesFilter.vue';
import {
  ActionTypes,
  MutationTypes,
} from '@/store/constants'



export default defineComponent({
  name: 'App',
  components: {MoviesFilter },
  mounted() {
    console.log('App.vue mounted')
    this.setLoadingState(true)
    this.laodMoviesToStore()
    this.setLoadingState(false)
  },
  methods: {
    ...mapMutations({
      setLoadingState: MutationTypes.SET_LOADING_STATE,
    }),
    laodMoviesToStore() {
      this.$store.dispatch(ActionTypes.LOAD_MOVIES)
    },
  },
})
</script>

<style>
#app {
  font-size: 15px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 60px;
  width: auto;
  min-width: 1000px;
  height: 100%;
  display: flex;
  justify-self: center;
  align-self: center;
  flex-direction: row;
}
</style>
