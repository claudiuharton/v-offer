<template>
  <q-page padding class="flex flex-center column">
    <img src="../assets/img/login-logo.png" id="logo" />
    <div class="q-pa-md" style="max-width: 400px">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="name"
          label="Your name *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

        <q-input
          filled
          v-model="age"
          label="Your password *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

        <div>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn label="REGISTER" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>
<style>
body {
  background-image: url("../assets/img/background-login.jpg");
}
</style>
<style scoped>
q-page {
  flex-direction: row;
}
#logo {
  margin-top: -20px;
}
.q-gutter-md {
  margin-top: 30px;
}
</style>

<script>
export default {
  // name: 'PageName',
};
</script>
