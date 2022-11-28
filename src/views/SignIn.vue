<template>
  <v-container>
    <v-row no-gutters align="center" justify="center">
      <v-col cols="12" sm="6" class="pa-2">
        <core-sign-in></core-sign-in>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'SignInPage',
  components: {
    CoreSignIn: () => import('@/components/core/SignIn.vue')
  }
};
</script>
