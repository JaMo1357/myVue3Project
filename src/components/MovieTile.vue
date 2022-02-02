<template>
  <div class="movie-tile">
    <span>{{ movieName }}</span>
    <ul>
      <li>Actors:</li>
      <li v-for="(actorsName, i) in actors"
        :key="i"
      >
        {{ actorsName }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    singleMovieData: Object,
  },
  setup({ singleMovieData }) {
    const { name, actors } = singleMovieData;

    return {
      movieName: name,
      actors,
    }
  }
})
</script>
<style lang="scss">
$baseClass: '.movie-tile';

#{$baseClass} {
  border: 1px solid grey;
  width: auto;
  height: 150px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  border-radius: 6px;

  span {
    font-size: 19px;
    text-decoration: underline;
  }

  ul {
    width: auto;
    overflow-y: scroll;
    list-style-type: none;

    li:nth-child(1) {
      font-weight: bold;
    }
  }
}
</style>
