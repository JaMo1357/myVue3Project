import { createApp } from 'vue'
import App from './App.vue'
import { store, key } from './store/index'


const app = createApp(App)

// pass the injection key
app.use(store, key)

app.mount('#app')
