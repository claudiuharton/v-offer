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
          v-model="name"
          label="Your email *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

        <q-input
          filled
          v-model="password"
          label="Your password *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

        <q-input
          filled
          v-model="name"
          label="Your phone number*"
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
  background-image: linear-gradient(#eaebed, #4b95de);
}
</style>

<style scoped>
.q-gutter-md > * {
  margin-top: 0px;
}
#logo {
  margin-top: 0px;
}
.q-gutter-md {
  margin-top: 0px;
}
</style>
<script>
export default {
  // name: 'PageName',
};
</script>
