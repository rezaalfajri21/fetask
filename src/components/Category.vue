<template>
    <v-app>
        <v-main>
            <input type="file" accept="image/*" @change="uploadImage($event)" id="file-input">
        </v-main>
    </v-app>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'

    Vue.use(VueAxios, axios)
    export default {
        data(){
            return{
                selectedFile: null,
            }
        },
        methods: {

            uploadImage(event) {
                console.log(event);

                const URL = './assets/'; 

                let data = new FormData();
                data.append('name', 'my-picture');
                data.append('file', event.target.files[0]); 

                let config = {
                header : {
                    'Content-Type' : 'image/png'
                }
                }

                axios.put(
                URL, 
                data,
                config
                ).then(
                response => {
                    console.log('image upload response > ', response)
                }
                )
            }
    }
    }
</script>

<style lang="scss" scoped>

</style>