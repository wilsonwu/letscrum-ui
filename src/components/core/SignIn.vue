<template>
  <v-card outlined>
    <v-toolbar flat>
      <v-toolbar-title>Login form</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon v-if="isDialog != undefined" @click="$emit('close-dialog')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-text>
      <v-form ref="form" v-model="valid">
        <v-text-field
          label="Email Address"
          name="email"
          prepend-icon="mdi-email"
          type="text"
          v-model="form.email"
          :rules="emailRules"
          required
        />
        <v-text-field
          id="password"
          label="Password"
          name="password"
          prepend-icon="mdi-lock"
          type="password"
          v-model="form.password"
          :rules="passwordRules"
          required
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn block :disabled="!valid" :loading="loading" @click="signIn">{{
        $t("signIn.signInBtn")
      }}</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CoreSignIn',
  props: ['isDialog'],

  data: () => ({
    valid: true,
    loading: false,
    form: {
      email: '',
      password: ''
    },
    emailRules: [],
    passwordRules: []
  }),
  created() {
    this.emailRules = [
      (v) => !!v || this.$i18n.t('signIn.emailRuleRequired'),
      (v) => /.+@.+/.test(v) || this.$i18n.t('signIn.emailRuleFormat')
    ];
    this.passwordRules = [
      (v) => !!v || this.$i18n.t('signIn.passwordRuleRequired'),
      (v) => v.length >= 6 || 'more then 6'
    ];
  },
  computed: {
    ...mapGetters(['accessToken']),
    username() {
      // 我们很快就会看到 `params` 是什么
      return this.$route.params.username;
    }
  },
  methods: {
    signIn() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        this.$store.commit('signIn', {
          id: 1,
          clientId: 'vuefirst',
          username: 'vuefirst',
          email: 'vuefirst@vuefirst.com',
          phone: '123',
          accessToken: 'token',
          refreshToken: 'token'
        });
        this.$store.commit('setNickname', 'Vue First');
        this.$store.commit('setAvatarUrl', '');
        this.loading = false;
        this.$router.push('/');
      }
      else {
        console.log('error');
      }
    }
  }
};
</script>
