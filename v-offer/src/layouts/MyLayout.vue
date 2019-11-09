<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>Quasar App</q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered content-class="bg-grey-2">
      <q-list>
        <q-item-label header>Essential Links</q-item-label>
        <q-item clickable tag="a" to="/">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Main Page</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" to="/Profile">
          <q-item-section avatar>
            <q-icon name="account_circle" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Profile</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" to="/Events_attended">
          <q-item-section avatar>
            <q-icon name="view_list" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Events Attended</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" to="/MyEvents">
          <q-item-section avatar>
            <q-icon name="pan_tool" />
          </q-item-section>
          <q-item-section>
            <q-item-label>My Events</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" @click="logout">
          <q-item-section avatar>
            <q-icon name="highlight_off" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Disconnect</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MyLayout",

  data() {
    return {
      leftDrawerOpen: false
    };
  },
  methods: {
    logout() {
      this.$cookies.set("loggedIn", 0);
      this.$router.push("/login");
    }
  }
};
</script>
