<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import VueCookies from "vue-cookies";
Vue.use(VueCookies);

export default {
  name: "App"
};
</script>
