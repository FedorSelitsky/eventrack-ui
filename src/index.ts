import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

Vue.use(VueRouter);

const routes = [
  {
    icon: 'bars',
    path: '/',
    name: 'home',
    title: 'Home',
  },
  {
    icon: 'portrait',
    path: '/artists',
    name: 'artists',
    title: 'Artists',
  },
  {
    icon: 'calendar-check',
    path: '/events',
    name: 'events',
    title: 'Events',
  },
  {
    icon: 'map-marker-alt',
    path: '/venues',
    name: 'venues',
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
