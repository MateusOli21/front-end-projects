<template>
      <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn color="red lighten-2" dark v-on="on"> Click Me</v-btn>
      </template>

      <v-card>
          <v-card-title>Popup</v-card-title>
          <v-card-text>
              <v-form class="px-3">
                  <v-text-field label="title" v-model="title" prepend-icon="folder"></v-text-field>
                  <v-textarea label="information" v-model="information" prepend-icon="edit"></v-textarea>
                  <v-btn depressed dark class="red lighten-2 mx-0 mt-3">Add project</v-btn>
              </v-form>
          </v-card-text>
      </v-card>

    </v-dialog>
  </div>
</template>

<script>
export default {
    name: 'Popup',
    data(){
        return{
            title:'',
            information:'',
        }
    }
}
</script>