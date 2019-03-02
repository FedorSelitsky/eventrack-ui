import Vue from 'vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';

import App from './App.vue';
import Artists from './components/Artists.vue';

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const routes = [
  {
    icon: 'bars',
    path: '/',
    name: 'home',
    title: 'Home',
  },
  {
    icon: 'address-book',
    path: '/artists',
    name: 'artists',
    title: 'Artists',
    component: Artists,
  },
  {
    icon: 'calendar-alt',
    name: 'events',
    path: '/events',
    title: 'Events',
  },
  {
    icon: 'map-marker-alt',
    name: 'venues',
    path: '/venues',
    title: 'Venues',
  },
];

const router = new VueRouter({
  routes,
});

const app = new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
