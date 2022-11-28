<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
      </v-col>
    </v-row>
    <v-row>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  metaInfo() {
    return {
      title: this.$t('home.metaTitle'),
      meta: [
        { name: 'description', content: this.$t('meta.description') },
        { name: 'keywords', content: this.$t('meta.keywords') },
        { property: 'og:url', content: 'https://vuefirst/' },
        { property: 'og:description', content: this.$t('meta.description') },
        { property: 'og:type', content: 'website' }
      ]
    };
  },
  components: {
  },
  data: () => ({
  }),
  computed: {
    ...mapGetters(['dark'])
  },
  created() {
  },
  methods: {}
};
</script>
<style scoped>
.line {
  height: 400px;
  width: 100%;
}
.pie {
  height: 400px;
  widows: 100%;
}
</style>
