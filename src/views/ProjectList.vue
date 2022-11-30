<template>
    <v-row no-gutters>
      <v-col cols="12" md="4" class="pa-1" v-for="i in 10" :key="i">
        <project-card @click="setProject({id: 1, name: '123', displayName: '333'})"></project-card>
      </v-col>
    </v-row>
</template>

<script>
import { mapMutations } from 'vuex';
import { getProjects } from '@/apis/project';

export default {
  name: 'App',
  components: {
    ProjectCard: () => import('@/components/project/Card.vue')
  },
  computed: {
  },
  created() {
    this.clearProject();
    getProjects().then((res) => {
      console.log(res);
    });
  },
  methods: {
    ...mapMutations(['setProject', 'clearProject'])
  }
};
</script>
