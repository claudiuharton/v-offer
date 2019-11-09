<template>
  <q-page padding>
    <center>
      <h3>Admin page</h3>
      <p>Make admin</p>
      <q-input outlined v-model="admin" style="max-width:200px" />

      <!-- Apoi un tabel cu evenimente pending, accept, refuse. -->
    </center>
  </q-page>
</template>

<script>
export default {
  name: "PageAddEvent",
  data() {
    return {
      admin: ""
    };
  }
};
</script>
