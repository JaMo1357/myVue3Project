import { ComponentCustomProperties } from 'vue';
//import { store } from '@/store';
import { Store } from 'vuex';

declare module '@vue/runtime-core' {
    // declare your own store states
    interface State {
        movies: object,
        isLoading: boolean,
    }

    // provide typings for `this.$store`
    interface ComponentCustomProperties {
        $store: Store<State>
    }
}