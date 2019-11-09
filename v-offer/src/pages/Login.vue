<template>
  <q-page padding class="flex flex-center column">
    <img src="../assets/img/login-logo.png" id="logo" />
    <div class="q-pa-md" style="max-width: 400px">
      <q-form class="q-gutter-md">
        <q-input
          filled
          v-model="email"
          label="Your name *"
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

        <div>
          <q-btn label="Submit" type="submit" @click="login" color="primary" />
          <q-btn label="Register" color="primary" to="/register" flat class="q-ml-sm" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>
<style>
body {
  /* background-image: linear-gradient(#eaebed, #4b95de); */
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
  name: "MainPage",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    beforeCreate() {
      const loggedIn = this.$cookies.get("loggedIn");
      if (loggedIn) {
        this.$router.push("/");
      }
    },
    login() {
      this.$axios
        .post("http://localhost:3000/api/auth/login", {
          email: this.email,
          password: this.password
        })
        .then(response => {
          this.$q.notify({
            message: "Success Login",
            color: "green"
          });

          const { firstName, lastName, email, phone, isAdmin } = response.data;
          this.$cookies.set("firstName", firstName);
          this.$cookies.set("lastName", lastName);
          this.$cookies.set("email", email);
          this.$cookies.set("loggedIn", 1);

          this.$cookies.set("phone", phone);

          this.$cookies.set("isAdmin", isAdmin);
          this.$router.push("/");
        })
        .catch(error => {
          console.log(error.response);
          this.$q.notify({
            message: error.response.data.message,
            color: "red"
          });
        });
    }
  }
};
</script>
