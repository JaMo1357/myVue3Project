<template>
  <Movies msg="I am movie application :)" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapMutations } from 'vuex'

import Movies from './components/Movies.vue'
import {
  ActionTypes,
  MutationTypes,
} from './store/constants'


export default defineComponent({
  name: 'App',
  components: { Movies },
  methods: {
    ...mapMutations({
      setLoadingState: MutationTypes.SET_LOADING_STATE,
    }),
    laodMoviesToStore() {
      this.$store.dispatch(ActionTypes.LOAD_MOVIES)
    },
  },
  created() {
    this.setLoadingState(true)
    this.laodMoviesToStore()
    this.setLoadingState(false)
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px 100px 0 100px;
  width: auto;
  min-width: 1000px;
  height: 100%;
  display: flex;
  justify-self: center;
  align-self: center;
  flex-direction: row;
}
</style>
