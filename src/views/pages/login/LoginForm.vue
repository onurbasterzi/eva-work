<template>
  <div>
    <vs-input
      v-validate="'required|email|min:3'"
      data-vv-validate-on="blur"
      name="email"
      icon-no-border
      icon="icon icon-user"
      icon-pack="feather"
      label-placeholder="Email"
      v-model="email"
      class="w-full"
    />
    <span class="text-danger text-sm">{{ errors.first("email") }}</span>

    <vs-input
      data-vv-validate-on="blur"
      v-validate="'required|min:6|max:20'"
      type="password"
      name="password"
      icon-no-border
      icon="icon icon-lock"
      icon-pack="feather"
      label-placeholder="Password"
      v-model="password"
      class="w-full mt-6"
    />
    <span class="text-danger text-sm">{{ errors.first("password") }}</span>

    <div class="flex flex-wrap justify-between mt-3">
      <vs-button :disabled="!validateForm" @click="loginControl">Login</vs-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "admin@example.com",
      password: "111111",
    };
  },
  computed: {
    validateForm() {
      return !this.errors.any() && this.email !== "" && this.password !== "";
    },
  },
  methods: {
    checkLogin() {
 
      return true;
    },
    loginControl() {
      if (!this.checkLogin()) return;

      // Loading
      this.$vs.loading();

      const payload = {
        userDetails: {
          email: this.email,
          password: this.password,
        },
      };

      this.$store.dispatch("auth/authLogin", payload)
        .then(() => {
          // console.log('successs',res);
          this.$vs.loading.close();
        })
        .catch((error) => {
          console.log('errorr',error);
          this.$vs.loading.close();
          this.$vs.notify({
            title: "Error",
            text: error.message,
            iconPack: "feather",
            icon: "icon-alert-circle",
            color: "danger",
          });
        });
    },
  },
};
</script>
