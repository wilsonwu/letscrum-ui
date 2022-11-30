<template>
    <v-row no-gutters>
      <v-col cols="12" md="4" class="pa-1" v-for="i in 10" :key="i">
        <project-card></project-card>
      </v-col>
    </v-row>
</template>

<script>
import { getProjects } from '@/apis/project';

export default {
  name: 'App',
  components: {
    ProjectCard: () => import('@/components/project/Card.vue')
  },
  computed: {
  },
  created() {
    getProjects().then((res) => {
      console.log(res);
    })
  }
};
</script>
