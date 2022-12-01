<template>
  <v-card
    class="mx-auto"
    outlined
    :to="'/project/'"
    tile
  >
    <v-list-item three-line>
      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
      <v-list-item-content>
        <div class="text-overline mb-4">
          Members
        </div>
        <v-list-item-title class="text-h5 mb-1">
          {{ project }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: ['project'],
  created() {
  },
  mounted() {
  },
  methods: {},
  computed: {
  }
};
