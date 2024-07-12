<template>
    <div class="modal">
        <h1 style="margin-bottom: 10px;">{{ element }}</h1>
        <!-- <h3 style="margin-bottom: 20px;">Enter the {{ this.element == "Email" ? "Email ID" : "Mobile No" }}</h3> -->
        <h3 style="margin-bottom: 20px;">Enter the {{ EM }}</h3>
        <input type="text" v-model="identifier">
        <br>
        <div class="buttons">
            <button @click.prevent="fetch_user">Submit</button>
            <button @click.prevent="close">Close</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import secret from '../secret';

    export default {
        name: "userSearchModalComponent",
        props: ['element'],
        data() {
            return {
                identifier: "",
                EM: ""
            }
        },

        updated(){
            if(this.element == "Email") {
                this.EM = "Email ID"
            }

            if(this.element == "Mobile") {
                this.EM = "Mobile No"
            }
        },

        methods: {
            fetch_user: async function() {

                if(this.element == "Email") {
                    const response = await axios.post(`${secret.SECRET_BACK_END_HOST_URL}/api/users/search_user`,{email: this.identifier})
                    let user = response.data.Message
                    
                    if(!user.first_name){
                        return window.alert(user)
                    }

                    window.alert(`
                        First Name: ${user.first_name}\n
                        Last Name: ${user.last_name}\n
                        Email ID: ${user.email}\n
                        Mobile No: ${user.mobile_no}\n
                        Address: ${user.address}
                    `)
                }

                if(this.element == "Mobile") {
                    const response = await axios.post(`${secret.SECRET_BACK_END_HOST_URL}/api/users/search_user`,{mobile: this.identifier})
                    let user = response.data.Message
                    
                    if(!user.first_name){
                        return window.alert(user)
                    }

                    window.alert(`
                        First Name: ${user.first_name}\n
                        Last Name: ${user.last_name}\n
                        Email ID: ${user.email}\n
                        Mobile No: ${user.mobile_no}\n
                        Address: ${user.address}
                    `)
                }
            },

            close: function() {
                this.$emit('close')
            }
        }
    }
</script>

<style scoped>
    .modal {
        width: 400px;
        border-radius: 5px;
        padding: 2em;
        background-color: white;
        text-align: center;

        display: flex;
        flex-direction: column;
    }

    .buttons {
        display: flex;
        gap: 3em;
        /* align-items: center; */
        justify-content: center;
        width: 100%;
    }
    
    input {
        padding: 5px;
        text-align: center;
    }

    .buttons > button {
        background-color: rgb(83, 124, 219);
        padding: 10px 30px;
        border: none;
        color: white;
        font-weight: 500;
        font-size: 14px;
    }
</style>