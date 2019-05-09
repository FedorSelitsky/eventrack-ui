import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';

import App from './App.vue';

import ArtistsPage from './pages/Artists.vue';
import ArtistPage from './pages/Artist.vue';
import EventsPage from './pages/Events.vue';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(BootstrapVue);

export const routes = [
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
    component: ArtistsPage,
  },
  {
    path: '/artists/:id',
    name: 'artist',
    title: 'Artist',
    component: ArtistPage,
  },
  {
    icon: 'calendar-alt',
    name: 'events',
    path: '/events',
    title: 'Events',
    component: EventsPage,
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

const store = new Vuex.Store({
  state: {
    background: ''
  },
  mutations: {
    change (state, background) {
      state.background = background;
    }
  },
  getters: {
    background: state => {
      return state.background;
    }
  }
})

router.afterEach((to, from) => {
  store.commit('change', '');
})

const app = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
