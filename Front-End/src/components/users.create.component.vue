<template>
    <div class="container">
        <form>
            <center>
                <h2>Create User</h2>
            </center>
            <div>
                <center>
                    <label for="first_name">First name</label>
                </center>
                <input type="text" id="first_name" v-model="new_user.first_name">
            </div>
            <div>
                <center>
                    <label for="last_name">Last name</label>
                </center>
                <input type="text" id="last_name" v-model="new_user.last_name">
            </div>
            <div>
                <center>
                    <label for="email">Email ID</label>
                </center>
                <input type="email" id="email" v-model="new_user.email">
            </div>
            <div>
                <center>
                    <label for="mobile">Mobile</label>
                </center>
                <input type="text" id="mobile" v-model="new_user.mobile_no">
            </div>
            <div>
                <center>
                    <label for="address">Address</label>
                </center>
                <textarea id="address" rows="5" v-model="new_user.address"></textarea>
            </div>
            <div>
                <button @click.prevent="createUser">
                    Submit 
                </button>
            </div>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';
    import secret from '../secret';
    
    export default {
        name: "userCreateComponent",
        data() {
            return {
                new_user : {
                    first_name: "",
                    last_name: "",
                    email: "",
                    mobile_no: "",
                    address: ""
                }
            }
        },
        methods: {

            createUser: async function() {

                const reset = () => {
                            this.new_user.first_name = ""
                            this.new_user.last_name = ""
                            this.new_user.email = ""
                            this.new_user.mobile_no = ""
                            this.new_user.address = ""
                        }
                
                console.log(secret.SECRET_BACK_END_HOST_URL);

                const response = await axios.post(`${secret.SECRET_BACK_END_HOST_URL}/api/users/create_user`, this.new_user, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).catch(error => {
                    if(error) {
                        const axios_response = error.response.data.Message
                        // console.log(axios_response)
                        window.alert(axios_response)
                        reset()
                    }
                })

                if(response.status == 201) {
                    window.alert("User Created")
                    // window.location.href = "/"
                    reset()
                }
            }
        }
    }
</script>

<style scoped>
    div.container {
        z-index: 0;
        width: 100%;
        height: 100vh;
        display: grid;

        place-items: center;

        /* position: absolute;
        top: 0; */
    }

    form {
        margin-top: -30px;
        width: 300px;
        padding: 2em;
        border-radius: 20px;
        border: 1px solid rgba(65, 116, 236, 0.608);
        box-shadow: 0px 10px 35px 10px rgb(65, 116, 236);

        display: grid;
        gap: 5px;
    }

    input {
        width: 100%;
        height: 30px;
        font-size: medium;
        text-align: center;
    }

    textarea {
        text-align: center;
        resize: vertical;
        width: 100%;
    }

    form > center {
        margin-bottom: 20px;
    }

    form > div {
        display: grid;
        gap: 5px;
    }

    form > div > center > label {
        font-size: large;
        font-weight: 300;
    }

    button {
        margin-top: 20px;
        background-color: rgb(65, 116, 236);
        box-shadow: none;
        border: none;
        padding: 15px 30px;
        color: white;
        font-weight: 600;
    }
</style>