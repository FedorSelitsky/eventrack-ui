<template>
  <div id="app">
    <div class="app-aside modal">
      <div class="left navside white">
        <div class="navbar">
          <router-link to="/" class="navbar-brand md">
            <img src="assets/images/logo.png">
          </router-link>
        </div>
        <nav class="nav-border b-primary">
          <ul class="nav">
            <li
              v-for="route in routes"
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
    <div class="app-content light">
      <div class="pos-rlt" v-if="this.$store.getters.background">
        <div
          class="page-bg"
          :style="{ 'background-image': `url(${this.$store.getters.background})` }"
        ></div>
      </div>
      <div class="page-content">
        <div class="row-col">
          <div class="col-lg-9">
            <div class="padding">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import 'bootstrap/dist/css/bootstrap-grid.min.css';

import { routes } from './index';

import { library } from '@fortawesome/fontawesome-svg-core';
import { Vue, Component } from 'vue-property-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
  faBars,
  faAddressBook,
  faCalendarAlt,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';

library.add(faBars);
library.add(faAddressBook);
library.add(faCalendarAlt);
library.add(faMapMarkerAlt);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

@Component
export default class App extends Vue {
  private isActive(path: string): boolean {
    return this.$route.path === path;
  }

  private get routes() {
    return routes.filter(
      route => route.hasOwnProperty('icon') && route.hasOwnProperty('title')
    );
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
  font-weight: bold;
  letter-spacing: -0.04em;
  font-family: "Poppins", "Trebuchet MS", "PT Sans", "Helvetica Neue",
    "HelveticaNeue-Light", Helvetica, Arial, sans-serif;
}

a {
  outline: 0;
  color: inherit;
  cursor: pointer;
  text-decoration: none;
}

.app-aside {
  float: left;
  height: 100%;
  z-index: 1030;
  position: fixed !important;
}

.app-content {
  box-shadow: none;
  padding: 0;
}

.app-aside:not(.hide) ~ .app-content {
  margin-left: 12.5rem;
}

.page-content {
  position: relative;
  z-index: 10;
}

.page-bg {
  top: 0;
  left: 0;
  right: 0;
  border: 0;
  bottom: 0;
  height: 50vh;
  z-index: 0;
  position: absolute;
  background-size: 0;
  background-repeat: no-repeat;
  background-position: 50% 50%;
}

.page-bg:before {
  width: 100%;
  height: 100%;
  content: '';
  opacity: 0.1;
  position: absolute;
  background-size: cover;
  background-image: inherit;
  background-repeat: no-repeat;
  background-position: inherit;
}

.page-bg:after {
  width: 100%;
  bottom: 0;
  height: 50%;
  content: '';
  position: absolute;
  background-repeat: repeat-x;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff);
}
.light .page-bg:after {
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #f8f8f8);
}

.row [class*="col-"] {
  padding-left: 12px;
  padding-right: 12px;
}

.row-col {
  width: 100%;
  height: 100%;
  display: table;
  border-spacing: 0;
  table-layout: fixed;
}

.row-col > [class*="col-"],
.row-col > [class*=" col-"] {
  float: none;
  padding: 0;
  position: static;
  vertical-align: top;
}

@media (min-width: 544px) {
  .row-col > [class*="col-sm"],
  .row-col > [class*=" col-sm"] {
    height: 100%;
    display: table-cell;
  }
}

.row-lg {
  margin-left: -20px;
  margin-right: -20px;
}

.row-lg [class*="col-"] {
  padding-left: 20px;
  padding-right: 20px;
}

.modal .left {
  transform: translate3d(-100%, 0, 0);
  -webkit-transform: translate3d(-100%, 0, 0);
  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  -o-transition: -o-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  -moz-transition: -moz-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  -webkit-transition: -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.modal > .left {
  top: 0;
  left: 0;
  bottom: 0;
  right: auto;
  z-index: 1055;
  position: fixed;
}

.nav {
  border: inherit;
}

.navbar {
  border: none;
  flex-shrink: 0;
  padding: 0 1rem;
  min-height: 3.5rem;
}

.navbar-brand {
  padding: 0;
  font-size: 20px;
  font-weight: bold;
}

.navbar-brand img,
.navbar-brand svg {
  top: 16px;
  max-height: 24px;
  position: relative;
  vertical-align: top;
  display: inline-block;
}

.navbar-brand.md img,
.navbar-brand.md svg {
  top: 20px;
  max-height: 47px;
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
  position: relative;
  line-height: 2.25rem;
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

.nav-icon {
  top: 0;
  float: left;
  min-width: 1.5rem;
  margin-right: 1rem;
  text-align: center;
  line-height: inherit;
}

.nav-text {
  display: block;
  padding: 0.5625rem 0;
  line-height: 1.125rem;
}

.navside .nav-text {
  opacity: 0.75;
}

.nav > li > a .nav-text {
  font-weight: 600;
}

.nav-border .nav > li.active:after {
  top: 0;
  bottom: 0;
  content: "";
  position: absolute;
  border-left-width: 3px;
  border-left-style: solid;
  border-left-color: inherit;
}

@media (min-width: 992px) {
  .app-aside {
    opacity: 1;
    width: 12.5rem;
    display: block !important;
  }

  .app-aside .left {
    right: 0;
    position: absolute;
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
  }

  .row-col > [class*="col-lg"],
  .row-col > [class*=" col-lg"] {
    float: none;
    height: 100%;
    padding: 0;
    position: static;
    display: table-cell;
    vertical-align: top;
  }
}

.item-list .item {
  padding: 12px 10px;
  margin-left: -5px;
  margin-right: -5px;
  border-radius: 5;
}

.item-list .item-media {
  padding-bottom: 0;
  float: left;
  margin-right: 16px;
  z-index: 1;
}

.item-list .item:hover,
.item-list .item:focus {
  background-color: rgba(120, 120, 120, 0.1);
}

.item-list .item:hover .item-info:after,
.item-list .item:focus .item-info:after {
  display: none;
}

.item-list.item-list-md .item-info {
  min-height: 60px;
}

.item-list.item-list-md .item-media {
  width: 60px;
  height: 60px;
}

.item-list .item-title {
  line-height: 1.4;
}

.item {
  margin: 0 auto;
  position: relative;
}

.item-info {
  position: relative;
  padding: 10px 0 20px 0;
  border-radius: inherit;
}

.item-title {
  font-weight: 600;
}

.item-media {
  padding: 0;
  display: block;
  overflow: hidden;
  position: relative;
  border-radius: inherit;
}

.item-media:after {
  content: '';
  display: block;
  padding-top: 100%;
}

.item-media-content {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 0;
  position: absolute;
  border-radius: inherit;
  background-size: cover;
}

.text-sm {
  font-size: 0.8rem;
}

.text-muted {
  color: inherit !important;
  opacity: 0.6;
}

.text-center {
  text-align: center;
}

.text-ellipsis {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.rounded {
  border-radius: 500px;
}

.r {
  border-radius: 3px;
}

.pagination {
  display: -ms-flexbox;
  display: flex;
  list-style: none;
  padding-left: 0;
  border-radius: 0.25rem;
}

.page-item.active .page-link {
  color: #fff;
  z-index: 1;
  border-color: #f06d35;
  background-color: #f06d35;
}

.page-item.disabled .page-link {
  color: #6c757d;
  pointer-events: none;
  cursor: auto;
  background-color: #fff;
  border-color: #dee2e6;
}

.page-link {
  border: 1px solid #dee2e6;
  display: block;
  padding: 0.5rem 0.75rem;
  position: relative;
  margin-left: -1px;
  line-height: 1.25;
  background-color: #fff;
}

.page-link:hover {
  z-index: 2;
  border-color: #dee2e6;
  text-decoration: none;
  background-color: #e9ecef;
}

.padding {
  padding: 1.5rem 1.5rem;
}

.pos-rlt {
  position: relative;
  z-index: 1;
}

.inline {
  display: inline-block;
}

.w {
  width: 180px;
}

.p-l-md {
  padding-left: 1.5rem;
}

.m-b {
  margin-bottom: 1rem;
}

.m-a-0 {
  margin: 0 0 !important;
}

.white {
  background-color: #fff;
}

.light {
  background-color: #f8f8f8;
}

.b-primary {
  border-color: #f06d35;
}
</style>
