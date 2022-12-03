<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="600"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn outlined class="float-right ma-1" tile v-bind="attrs" v-on="on">
        <v-icon left>
          mdi-plus
        </v-icon>
        New Project
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Create Project</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="Name"
                required
                v-model="project.displayName"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                label="Description"
                v-model="project.description"
              ></v-textarea>
            </v-col>
            <v-col cols="12">
              <v-autocomplete
                v-model="members"
                :items="users"
                chips
                label="Members"
                item-text="name"
                item-value="id"
                multiple
                :search-input.sync="search"
                cache-items
              >
                <template v-slot:selection="data">
                  <v-chip
                    v-bind="data.attrs"
                    :input-value="data.selected"
                    close
                    @click="data.select"
                    @click:close="remove(data.item)"
                  >
                    {{ data.item.name }}
                  </v-chip>
                </template>
                <template v-slot:item="data">
                  <template>
                    <v-list-item-content>
                      <v-list-item-title v-html="data.item.name"></v-list-item-title>
                      <v-list-item-subtitle v-html="data.item.email"></v-list-item-subtitle>
                    </v-list-item-content>
                  </template>
                </template>
              </v-autocomplete>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          text
          @click="dialog = false"
        >
          Close
        </v-btn>
        <v-btn
          text
          @click="onCreateProject"
        >
          Create
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { getUsers } from '@/apis/user';
import { postCreateProject } from '@/apis/project';

export default {
  watch: {
    search(val) {
      return val && val !== this.select && this.querySelections(val);
    }
  },
  methods: {
    querySelections(v) {
      this.loading = true;
      clearInterval(this.searchTimer);
      this.searchTimer = setTimeout(() => {
        getUsers({
          page: 1,
          size: 999,
          keyword: (v || '').toLowerCase()
        }).then((res) => {
          console.log(res);
          if (res.status === 200) {
            this.users = res.data.items;
          }
        });
      }, 500);
    },
    remove(item) {
      const index = this.members.indexOf(item.id);
      if (index >= 0) this.members.splice(index, 1);
    },
    onCreateProject() {
      postCreateProject({
        display_name: this.project.displayName,
        description: this.project.description,
        members: this.members
      }).then((res) => {
        console.log(res);
        if (res.status === 200) {
          this.$router.go('/projects');
        }
        this.dialog = false;
      });
    }
  },
  data: () => ({
    project: {
      displayName: '',
      description: ''
    },
    loading: false,
    dialog: false,
    searchTimer: null,
    members: [],
    users: [],
    search: null
  })
};
</script>
