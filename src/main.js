import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faTrash, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash, faChevronUp, faChevronDown)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(store)
  .mount('#app')
