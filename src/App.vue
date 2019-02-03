<template>
  <div id="app">
    <div id="aside" class="app-aside modal">
      <div class="left navside white">
        <div class="navbar">
          <router-link to="/" class="navbar-brand md">
            <img src="assets/images/logo.png">
          </router-link>
        </div>
        <nav class="nav-border b-primary">
          <ul class="nav">
            <li
              v-for="route in $router.options.routes"
              :key="route.name"
              :class="{ 'active': isActive(route.path) }"
            >
              <router-link :to="route.path">
                <span class="nav-icon">
                  <font-awesome-icon :icon="route.icon"/>
                </span>
                <span class="nav-text">{{ route.title }}</span>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faAddressBook,
  faBars,
  faCalendarAlt,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faAddressBook);
library.add(faBars);
library.add(faCalendarAlt);
library.add(faMapMarkerAlt);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

@Component
export default class App extends Vue {
  isActive(path: string) {
    return this.$route.path === path;
  }
}
</script>

<style>
html {
  height: 100%;
  background: transparent;
}

body {
  margin: 0;
  padding: 0;
  height: auto;
  min-height: 100%;
  position: relative;
  font-size: 0.875rem;
  background-color: #f2f2f2;
  color: rgba(0, 0, 0, 0.87);
  -webkit-font-smoothing: antialiased;
  font-family: "Segoe UI", "Trebuchet MS", "PT Sans", "Helvetica Neue",
    "HelveticaNeue-Light", Helvetica, Arial, sans-serif;
}

.navbar-brand,
h1, h2, h3, h4, h5, h6,
.h1, .h2, .h3, .h4, .h5, .h6 {
  font-family: "Poppins", "Trebuchet MS", "PT Sans", "Helvetica Neue",
    "HelveticaNeue-Light", Helvetica, Arial, sans-serif;
  letter-spacing: -0.04em;
  font-weight: bold;
}

a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  outline: 0;
}

.app-aside {
  position: fixed !important;
  z-index: 1030;
  float: left;
  height: 100%;
}

.modal .left {
  -webkit-transform: translate3d(-100%, 0, 0);
  transform: translate3d(-100%, 0, 0);
  -webkit-transition: -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  -moz-transition: -moz-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  -o-transition: -o-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.modal > .left {
  position: fixed;
  z-index: 1055;
  top: 0;
  left: 0;
  right: auto;
  bottom: 0;
}

.nav {
  border: inherit;
}

.navbar {
  border: none;
  padding: 0 1rem;
  flex-shrink: 0;
  min-height: 3.5rem;
}

.navbar-brand {
  padding: 0;
  font-size: 20px;
  font-weight: bold;
}

.navbar-brand img,
.navbar-brand svg {
  position: relative;
  max-height: 24px;
  top: 16px;
  display: inline-block;
  vertical-align: top;
}

.navbar-brand.md img,
.navbar-brand.md svg {
  max-height: 47px;
  top: 12px;
}

.navside {
  border: inherit;
}

.navside .nav {
  border: inherit;
}

.navside ul {
  padding-left: 0;
  padding-right: 0;
  list-style: none;
}

.navside .nav li {
  border: inherit;
  position: relative;
}

.navside .nav li a {
  display: block;
  padding: 0 1rem;
  line-height: 2.25rem;
  position: relative;
}

.navside .nav li.active {
  background-color: rgba(255, 255, 255, 0.065);
}

.navside a:hover > .nav-text,
.navside a:focus > .nav-text,
.navside .active > a > .nav-text {
  opacity: 1;
}

.navside .nav li.active > a {
  background-color: transparent;
}

.navside .navbar-brand {
  float: none;
  margin-right: 0;
}

.nav-text {
  display: block;
  line-height: 1.125rem;
  padding: 0.5625rem 0;
}

.navside .nav-text {
  opacity: 0.75;
}

.nav-border .nav > li.active:after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  border-left-color: inherit;
  border-left-width: 3px;
  border-left-style: solid;
}

.nav-icon {
  float: left;
  line-height: inherit;
  margin-right: 1rem;
  top: 0;
  min-width: 1.5rem;
  text-align: center;
}

.nav > li > a .nav-text {
  font-weight: 600;
}

@media (min-width: 992px) {
  .app-aside {
    opacity: 1;
    display: block !important;
  }

  .app-aside,
  .app-aside .scroll {
    width: 12.5rem;
  }

  .app-aside .left {
    position: absolute;
    right: 0;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.light {
  background-color: #f8f8f8;
}

.white {
  background-color: #fff;
}

.b-primary {
  border-color: #f06d35;
}
</style>
