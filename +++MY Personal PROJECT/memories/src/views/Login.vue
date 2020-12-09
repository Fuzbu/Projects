<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign In</h1>
          <p class="text-xs-center">
            <a href="">Need an Account</a>
          </p>

          <ul class="error-messages">
            <li v-for:="error in errors">{{ error.message }}</li>
          </ul>

          <form>
            <fieldset class="form-group">
              <input
                v-model="email"
                class="form-control form-control-lg"
                type="text"
                placeholder="Email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                v-model="password"
                class="form-control form-control-lg"
                type="text"
                placeholder="Password"
              />
            </fieldset>
            <button @click="login" class="btn btn-lg btn-primary pull-xs-right">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      password: "",
      email: "",
      errors: [],
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("users/loginUser", {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.errors = [];
        })
        .catch((err) => {
          this.errors.push(err);
        });
    },
  },
};
</script>
