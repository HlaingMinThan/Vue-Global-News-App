<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="grey" dark v-bind="attrs" v-on="on" small icon>
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Edit Headline Title</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="Headline title"
                required
                v-model="newTitle"
              ></v-text-field>
              <p v-show="errorMsg" class="red--text">{{ errorMsg }}</p>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="blue darken-1" text @click="updateHeadlineTitle">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: ["id", "title"],
  data() {
    return {
      dialog: false,
      newTitle: this.title,
      errorMsg: "",
    };
  },

  methods: {
    updateHeadlineTitle() {
      if (!this.newTitle) {
        this.errorMsg = "Please fill the title.";
        return;
      }
      this.UPDATE_HEADLINE({ oldTitle: this.title, newTitle: this.newTitle });
      this.dialog = false;
    },
    ...mapMutations(["UPDATE_HEADLINE"]),
  },
};
</script>
<style>
</style>
