import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faHeadphonesAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueImg from 'v-img';
import router from './router'
import store from './store'


library.add(faMapMarkerAlt)
library.add(faEnvelope)
library.add(faBars)
library.add(faAngleLeft)
library.add(faAngleRight)
library.add(faLink)
library.add(faHeadphonesAlt)
library.add(faPhoneAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueImg);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
