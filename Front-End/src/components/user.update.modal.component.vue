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

        <div class="update-modal-container" id="update_modal_container" :class="isActiveForm ? 'notActive_form' : ''" style="background-color: black">
            <f_modal v-on:close_form="close_modal" :userObject="user"></f_modal>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import secret from '../secret';

import userUpdateModalFormModalComponent from './user.update.modal.form.modal.component.vue'

    export default {
        name: "userSearchModalComponent",
        props: ['element'],
        components: {
            f_modal: userUpdateModalFormModalComponent
        },
        data() {
            return {
                isActive: '',
                identifier: "",
                EM: "",

                // for child component
                isActiveForm: "notActive_form",
                user: {},
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

                    this.user = user
                    return this.isActiveForm = ""

                }

                if(this.element == "Mobile") {
                    const response = await axios.post(`${secret.SECRET_BACK_END_HOST_URL}/api/users/search_user`,{mobile: this.identifier})
                    let user = response.data.Message
                    
                    if(!user.first_name){
                        return window.alert(user)
                    }

                    this.user = user
                    return this.isActiveForm = ""

                }
            },

            close: function() {
                this.$emit('close')
            },

            close_modal: function() {
                this.isActiveForm = "notActive_form"
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

    .update-modal-container {
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: rgba( 0, 0, 0, 0.6);
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
    }

    .notActive {
        display: none
    }

    .notActive_form {
        display: none
    }
</style>