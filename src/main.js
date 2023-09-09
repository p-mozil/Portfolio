import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
import App from './App.vue'
library.add(fas,fab)
import "bootstrap/dist/css/bootstrap.min.css"
import bootstrap from 'bootstrap/dist/js/bootstrap.js'


createApp(App)
.component('fa', FontAwesomeIcon)
.use(bootstrap)
.mount('#app')
