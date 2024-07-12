<template>
    <div class="container">
        <div class="inside">
            <h2 class="title">
                Delete User
            </h2>
            <p class="notice">
                Enter both User Email ID and Mobile number
            </p>
            <form>
                <div>
                    <label for="email">Email</label>
                    <br/>
                    <input id="email" v-model="delete_user.email">
                </div>
                <div>
                    <label for="mobile">Mobile</label>
                    <br/>
                    <input id="mobile" v-model="delete_user.mobile">
                </div>
                <div>
                    <button @click.prevent="user_Delete">Delete User</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import secret from '../secret';

    export default {
        name: "userDeleteComponent",
        data() {
            return {
                delete_user: {
                    email: "",
                    mobile: ""
                }
            }
        },
        methods: {
            user_Delete: async function () {

                const reset = () => {
                    this.delete_user.email = ""
                    this.delete_user.mobile = ""
                }

                const response = await axios.delete(`${secret.SECRET_BACK_END_HOST_URL}/api/users/remove_user`, {
                    data: this.delete_user
                },
                {
                    headers: {
                        'Content-Type': "application/json"
                    }
                }).catch(error => {
                    const axios_response = error.response.data.Message
                    window.alert(axios_response)
                    reset()
                })

                if(response.status == 204) {
                    window.alert("User Deleted")
                    reset()
                }

            }
        }
    }
</script>

<style scoped>
    .container {
        display: grid;
        place-items: center;
        height: 100vh;
    }

    .inside {
        margin-top: -100px;

        border: 1px solid rgb(65, 116, 236, 0.7);
        padding: 2em;

        box-shadow: 0px 10px 35px 10px rgb(65, 116, 236);

        border-radius: 10px;

        display: grid;
        place-items: center;
        gap: 2em;
        max-width: 300px;
        text-align: center;

    }

    .notice {
        font-size: 1em;
    }

    form {
        display: grid;
        gap: 1.5em;
        width: 200px;
    }

    label {
        font-size: 1.2em;
    }

    input {
        margin-top: 10px;
        width: 100%;
        height: 30px;
        text-align: center;
    }

    button {
        background: rgb(65, 116, 236);
        font-size: 0.9em;
        color: white;
        padding: 10px 30px;
        border: none
    }
</style>