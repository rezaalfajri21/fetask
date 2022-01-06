<template>
    <v-app>
        <v-main>
            <div class="projects mt-4">
                <v-card max-width="1600" class="ml-9 mr-9 rounded-lg mb-9" elevation="0" outlined>
                    
                       <v-data-table
                            :headers="headers"
                            :items="users"
                            :search="search"
                            :sort-by="sortBy.toLowerCase()"
                            :sort-desc="sortDesc"
                            class="elevation-1"
                        >
                            <template v-slot:top>
                            <v-toolbar
                                flat
                            >
                                <!-- <v-toolbar-title>My CRUD</v-toolbar-title> -->
                                
                                <!-- <v-divider
                                class="mx-4"
                                inset
                                vertical
                                ></v-divider> -->
                                <v-text-field
                                    v-model="search"
                                    append-icon="mdi-magnify"
                                    label="Search"
                                    single-line
                                    hide-details
                                ></v-text-field>
                                <v-spacer></v-spacer>
                                <!-- <v-select
                                  v-model="sortBy"
                                  flat
                                  solo-inverted
                                  hide-details
                                  :items="keys"
                                  prepend-inner-icon="mdi-magnify"
                                  label="Sort by"
                                ></v-select> -->
                                <v-spacer></v-spacer>
                                <v-btn-toggle
                                  v-model="sortDesc"
                                  mandatory
                                >
                                  <v-btn
                                    large
                                    depressed
                                    color="blue"
                                    :value="false"
                                  >
                                    <v-icon>mdi-arrow-up</v-icon>
                                  </v-btn>
                                  <v-btn
                                    large
                                    depressed
                                    color="blue"
                                    :value="true"
                                  >
                                    <v-icon>mdi-arrow-down</v-icon>
                                  </v-btn>
                                </v-btn-toggle>
                                <v-spacer></v-spacer>
                                <v-dialog
                                v-model="dialog"
                                max-width="500px"
                                >

                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                    color="primary"
                                    dark
                                    class="mb-2"
                                    v-bind="attrs"
                                    v-on="on"
                                    >
                                    New Item
                                    </v-btn>
                                </template>
                                <v-card>
                                    <v-card-title>
                                    <span class="text-h6">{{ formTitle }}</span>
                                    </v-card-title>

                                    <v-card-text>
                                    <v-container>
                                        <v-row>
                                        
                                            <v-text-field
                                            v-model="editedItem.username"
                                            label="Username"
                                            outlined
                                            ></v-text-field>
                                        
                                        </v-row>
                                        <v-row>
                                            <v-text-field
                                            type="number"
                                            v-model="editedItem.phone"
                                            label="Phone Number"
                                            outlined
                                            ></v-text-field>
                                        </v-row>
                                        <v-row>
                                            <v-text-field
                                            v-model="editedItem.email"
                                            label="Email"
                                            outlined
                                            ></v-text-field>
                                        </v-row>
                                        <v-row>
                                            <v-text-field
                                            v-model="editedItem.password"
                                            label="Password"
                                            outlined
                                            ></v-text-field>
                                        </v-row>
                                        <v-row>
                                          <v-select
                                            :items="status"
                                            v-model="editedItem.statsymbol"
                                            label="Status"
                                            outlined>
                                          </v-select>
                                        </v-row>
                                    </v-container>
                                    </v-card-text>

                                    <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        color="blue darken-1"
                                        text
                                        @click="close"
                                    >
                                        Cancel
                                    </v-btn>
                                    <v-btn
                                        color="blue darken-1"
                                        text
                                        @click="save()"
                                    >
                                        Save
                                    </v-btn>
                                    </v-card-actions>
                                </v-card>
                                </v-dialog>
                                <v-dialog v-model="dialogDelete" max-width="500px">
                                <v-card>
                                    <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                                    <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                                    <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                                    <v-spacer></v-spacer>
                                    </v-card-actions>
                                </v-card>
                                </v-dialog>
                            </v-toolbar>
                            </template>
                            <template v-slot:item.actions="{ item }">
                            <v-icon
                                small
                                class="mr-2"
                                @click="editItem(item)"
                            >
                                mdi-pencil
                            </v-icon>
                            <v-icon
                                small
                                @click="deleteItem(item)"
                            >
                                mdi-delete
                            </v-icon>
                            </template>
                            <template v-slot:no-data>
                            <v-btn
                                color="primary"
                                @click="initialize"
                            >
                                Reset
                            </v-btn>
                            </template>
                        </v-data-table>
                    </v-card>
            </div>
        </v-main>
    </v-app>
</template>

<script>
  export default {
    data: () => ({
      status:["Active", "Disable"],
      sortDesc: false,
      sortBy: 'username',
      dialog: false,
      search: '',
      dialogDelete: false,
      keys: [
          'username',
          
        ],
      headers: [
        {
          text: 'Username',
          align: 'start',
          sortable: false,
          value: 'username',
        },
        { text: 'Phone Number', value: 'phone' },
        { text: 'Email', value: 'email' },
        { text: 'Password', value: 'password' },
        { text: 'Status', value: 'statsymbol' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      users: [],
      editedIndex: -1,
      editedItem: {
        username: '',
        phone: '',
        email: '',
        password: '',
        status: '',
      },
      defaultItem: {
        username: '',
        phone: '',
        email: '',
        password: '',
        status: '',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
      filteredKeys () {
        return this.keys.filter(key => key !== 'Name')
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize();
      this.convert();
    },

    methods: {
      initialize () {
        this.users = [
          {
            username: 'muhyora',
            phone: '085721154394',
            email: 'muhyora@email.com',
            password: 'Password@2021',
            status: 1,
          },
          {
            username: 'yorareza',
            phone: '088992107354',
            email: 'yorareza@email.com',
            password: 'Password@2021',
            status: 1,
          },
          {
            username: 'rezaalfajri',
            phone: '0895601254020',
            email: 'rezaalfajri007@gmail.com',
            password: 'Password@2021',
            status: 0,
          },
          {
            username: 'brucewayne',
            phone: '087736552378',
            email: 'bruce@gotham.com',
            password: 'martha@02021',
            status: 0,
          },
          {
            username: 'clarkkent',
            phone: '085379018733',
            email: 'clark@metropolis.com',
            password: 'loislane',
            status: 1,
          },
          {
            username: 'antstark',
            phone: '087823345073',
            email: 'stark@avengers.com',
            password: 'imthebest',
            status: 1,
          },
          {
            username: 'steverogers',
            phone: '08985411090',
            email: 'rogers@avengers.com',
            password: 'peggycarter',
            status: 1,
          },
          {
            username: 'parkerpete',
            phone: '085671389904',
            email: 'parker@queens.com',
            password: 'imnotspiderman',
            status: 0,
          },
          {
            username: 'otismillburn',
            phone: '085372668591',
            email: 'otis@moordale,com',
            password: 'notmaeve',
            status: 1,
          },
          {
            username: 'anakin',
            phone: '085769723846',
            email: 'anakin@jedi.com',
            password: 'grandmaster',
            status: 0,
          },
        ]
      },

      editItem (item) {
        if(this.editedItem.statsymbol=="Disable"){
          this.editedItem.status=0;
        }else if(this.editedItem.statsymbol=="Active"){
          this.editedItem.status=1;
        }
        this.editedIndex = this.users.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.users.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.users.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if(this.editedItem.statsymbol=="Disable"){
          this.editedItem.status=0;
        }else if(this.editedItem.statsymbol=="Active"){
          this.editedItem.status=1;
        }
        if (this.editedIndex > -1) {
          Object.assign(this.users[this.editedIndex], this.editedItem)
        } else {
          this.users.push(this.editedItem)
        }
        this.close()
      },

      convert(){
        for(var i=0; i<this.users.length; i++){
          if(this.users[i].status==0){
            this.users[i].statsymbol='Disable';
          }else{
            this.users[i].statsymbol='Active';
          }
        }
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>