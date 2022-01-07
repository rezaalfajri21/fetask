<template>
    <v-app>
        <v-main>
            <v-container fluid>
                <h1>Workspace</h1>
                <v-row>
                    <v-col style="text-align:right">
                        <v-dialog v-model="dialog">
                            <template v-slot:activator="{ on, attrs }" >
                                <v-btn
                                    class="ma-2"
                                    outlined
                                    color="indigo"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                <v-icon>mdi-briefcase-outline</v-icon>
                                    Create Workspace
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
                                                v-model="editedItem.title"
                                                label="Company Name"
                                                outlined
                                            ></v-text-field>
                                                
                                        </v-row>
                                        <v-row>
                                            <v-text-field
                                                v-model="editedItem.maxaccount"
                                                label="Max Account"
                                                outlined
                                            ></v-text-field>
                                        </v-row>
                                        <v-row>
                                            <v-text-field
                                                v-model="editedItem.maxassesment"
                                                label="Max Assesment"
                                                outlined
                                            ></v-text-field>
                                        </v-row>
                                                
                                    </v-container>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                        <v-btn
                                            color="blue darken-1"
                                            text
                                            @click="close()"
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
                        <!-- <ButtonMove></ButtonMove> -->
                        <v-btn-toggle dense>
                            <v-btn link tag="router-link" to="/account" >Account</v-btn>
                            <v-btn color="indigo" >Workspace</v-btn>
                        </v-btn-toggle>
                    </v-col>
                </v-row>
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
                <v-row dense>
                    <v-col
                        class="col-md-3 col-sm-4"
                        v-for="card in cards"
                        :key="card.title"
                        :cols="card.flex"
                        :search="search"
                    >
                        <v-card>
                            <v-img
                                height="150"
                                :src="card.src"
                                
                            >
                        
                            </v-img>
                            <br>
                            <v-list-item-subtitle style="text-align:center" v-text="card.title"></v-list-item-subtitle>
                            <br>
                            <v-divider></v-divider>
                            <br>
                            <v-row>
                                <v-col>
                                    <v-list-item-subtitle style="text-align:center">Max Account</v-list-item-subtitle>
                                    <v-list-item-subtitle v-text="card.maxaccount+'/'+card.maxaccount" style="text-align:center"></v-list-item-subtitle>
                                </v-col>
                                <v-col>
                                    <v-list-item-subtitle style="text-align:center">Max Assesment</v-list-item-subtitle>
                                    <v-list-item-subtitle v-text="card.maxassesment+'/'+card.maxassesment" style="text-align:center"></v-list-item-subtitle>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col>
                                    <v-btn icon style="text-align:left">
                                        <v-icon>mdi-calendar</v-icon>
                                    </v-btn>
                                    <v-text>21-04-2021</v-text>
                                </v-col>
                                <v-col style="text-align:right">
                                    <v-btn icon>
                                        <v-icon @click="editItem(card)" >mdi-square-edit-outline</v-icon>
                                    </v-btn>

                                    <v-btn icon>
                                        <v-icon @click="deleteItem(card)">mdi-trash-can-outline</v-icon>
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-card>
                        <br><br>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
// import ButtonMove from './ButtonMove.vue'
    export default {
    //     components: {
    //   ButtonMove
      
    // },
        data: () => ({
            dialogDelete: false,
            editedIndex: -1,
            dialog: false,
            search: '',
            editedItem: {
                title: '',
                maxaccount: '',
                maxassesment: '',
            },
            defaultItem: {
                title: '',
                maxaccount: '',
                maxassesment: '',
            },
            cards:[],
        }),
        methods: {
            initialize(){
                this.cards= [
                    { title: 'Google Company', maxaccount: '35', maxassesment: '100', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', actions: 'actions', },
                    { title: 'Netflix', maxaccount: '40', maxassesment: '90', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', actions: 'actions', },
                    { title: 'Gojek', maxaccount: '55', maxassesment: '90', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', actions: 'actions', },
                    { title: 'Paypal', maxaccount: '15', maxassesment: '80', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', actions: 'actions', },
                ]
            },
            editItem (item) {
                this.editedIndex = this.cards.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialog = true
            },

            deleteItem (item) {
                this.editedIndex = this.cards.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialogDelete = true
            },

            deleteItemConfirm () {
                this.cards.splice(this.editedIndex, 1)
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
                if (this.editedIndex > -1) {
                Object.assign(this.cards[this.editedIndex], this.editedItem)
                } else {
                this.cards.push(this.editedItem)
                }
                this.close()
            },
            
        },
        created () {
            document.title = "Workspace";
            this.initialize();
        },
        computed: {
            formTitle () {
                return this.editedIndex === -1 ? 'Add Item' : 'Edit Item'
            },
            // filteredKeys () {
            //     return this.keys.filter(key => key !== 'Name')
            // },
        },
        watch: {
            dialog (val) {
                val || this.close()
            },
            dialogDelete (val) {
                val || this.closeDelete()
            },
        },

        
    }
</script>

<style lang="scss" scoped>

</style>