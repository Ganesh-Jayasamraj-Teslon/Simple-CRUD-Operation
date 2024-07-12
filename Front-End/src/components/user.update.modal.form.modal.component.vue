<template>
    <div class="container">
        <h2>Update user details</h2>
        <p style="font-size: 10px; margin-top: 5px;"><span style="color: red;">*</span> Edit the field that you want to update</p>
        <form>
            <table>
                <tr>
                    <td>
                        <label for="first_name">First Name</label>
                    </td>
                    <td>
                        <input id="first_name" v-model="userObject.first_name">
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="last_name">Last Name</label>
                    </td>
                    <td>
                        <input id="last_name" v-model="userObject.last_name">
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="email">Email</label>
                    </td>
                    <td>
                        <input id="email" v-model="userObject.email">
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="mobile">Mobile No</label>
                    </td>
                    <td>
                        <input id="mobile" v-model="userObject.mobile_no">
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="address">Address</label>
                    </td>
                    <td>
                        <textarea id="address" rows=4 v-model="userObject.address"></textarea>
                    </td>
                </tr>
            </table>
            <div class="button_div">
                <button @click.prevent="update_function">Update</button>
                <button @click.prevent="close">Cancel</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import secret from '../secret';

    export default {
        name: "userUpdateModalFormModal",
        props: ['userObject'],
        data() {
            return {

            }
        },

        methods: {
            close: function() {
                this.$emit('close_form')
            },

            update_function: async function() {
                console.log(this.userObject);
                const response = await axios.put(`${secret.SECRET_BACK_END_HOST_URL}/api/users/update_user`, this.userObject ,{
                    headers: {
                        'Content-Type': "application/json"
                    }
                }).catch(error => {
                    const axios_response = error.response.data.Message
                    window.alert(axios_response)
                    reset()
                })

                window.alert(response.data.Message)

                return this.$emit('close_form')
            }
        }
    }
</script>

<style>
    .container {
        background: white;
        padding: 3em 2em;
        border-radius: 15px;
    }

    form {
        margin-top: 2em;
    }
    
    table > * {
        text-align: left;
    }

    label {
        font-weight: 500;
    }

    td > input, textarea{
        width: 230px;
        padding: 1em;
        text-align: center;
    }

    textarea {
        text-align: center;
        resize: vertical;
        width: 100%;
    }

    .button_div {
        margin-top: 1.5em;
        display: flex;
        gap: 20px;
        place-content: center;
    }

    button {
        color: white;
        padding: 1em 2.5em;
        border: none;
        background-color: rgba(65, 116, 236, 0.767);
    }

</style>