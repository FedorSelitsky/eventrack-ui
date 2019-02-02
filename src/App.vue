<template>
  <div id="app" class="app dk">
    <div id="aside" class="app-aside modal fade nav-dropdown">
      <div class="left navside white dk" data-layout="column">
        <div class="navbar no-radius">
          <router-link to="/" class="navbar-brand md">
            <img src="assets/images/logo.png">
          </router-link>
        </div>
        <div data-flex class="hide-scroll">
          <nav class="scroll nav-stacked nav-active-primary">
            <ul id="change_menu" class="nav" data-ui-nav>
              <li v-for="route in $router.options.routes" :key="route.name">
                <router-link :to="route.path">
                  <span class="nav-icon">
                    <font-awesome-icon v-bind:icon="route.icon"/>
                  </span>
                  <span class="nav-text">{{ route.title }}</span>
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faBars,
  faCalendarCheck,
  faMapMarkerAlt,
  faPortrait
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faBars);
library.add(faCalendarCheck);
library.add(faMapMarkerAlt);
library.add(faPortrait);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

@Component
export default class App extends Vue {}
</script>

<style>
@import "assets/styles/app.css";
@import "assets/styles/font.css";
</style>
