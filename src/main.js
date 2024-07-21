import './assets/main.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Menubar from 'primevue/menubar'
import Badge from 'primevue/badge'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import FloatLabel from 'primevue/floatlabel'
import Avatar from 'primevue/avatar'
import Ripple from 'primevue/ripple'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('Menubar', Menubar)
app.component('Badge', Badge)
app.component('Button', Button)
app.component('InputText', InputText)
app.component('FloatLabel', FloatLabel)
app.component('Avatar', Avatar)
app.directive('ripple', Ripple)
app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  ripple: true
})

app.mount('#app')
