<template>
  <div class="movie-tile">
    <span>{{ movieName }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    singleMovieData: Object,
  },
  setup({ singleMovieData }) {
    console.log(singleMovieData);
    const { name } = singleMovieData;
    //const store = useStore();

    return {
      movieName: name,
    };
  }
});
</script>
<style lang="scss">
$baseClass: '.movie-tile';

#{$baseClass} {
  border: 1px solid grey;
  width: auto;
  height: 150px;
  display: flex;
  margin: 10px;
  padding: 10px;
}
</style>
