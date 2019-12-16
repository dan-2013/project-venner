<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form ref="form" @submit.prevent="authenticate">
                  <v-text-field
                    v-model="form.email"
                    label="Login"
                    name="login"
                    prepend-icon="person"
                    type="text"
                  />

                  <v-text-field
                    v-model="form.password"
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn type="submit" @click="authenticate" color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
    import {login} from '../../helpers/auth';

export default {
    name: "login",
    data(){
        return {
            form: {
                email : '',
                password : ''
            },
            error: null
        };
    },
    methods: {
        authenticate(){
            this.$store.dispatch('login');

                login(this.$data.form)
                .then((res) => {
                    this.$store.commit("loginSuccess", res);
                    this.$router.push({path: '/'});
                })
                .catch((error) => {
                    this.$store.commit("loginFailed", {errors});
                });
        }
    },
    computed: {
      authError(){
        return this.$store.getters.authError;
      }
    }
}
</script>

<style scoped>

</style>