<template>
    <div>
        <ul>
            <li v-for="user in users" :key="user._id">
                <h3>
                    {{ user.first_name }}
                    <h6>
                        {{ user.last_name }}
                    </h6>
                </h3>
                <h4>Contact</h4>
                <p>Email: {{ user.email }}</p>
                <p>Mobile: {{ user.mobile_no }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
import secret from '../secret';

    export default {
        name: "userListComponent",
        data() {
            return {
                users: []
            }
        },
        async created() {
            const all_users = await axios.get(`${secret.SECRET_BACK_END_HOST_URL}/api/users/list_all_users`)
            this.users = all_users.data
        },

    }
</script>

<style scoped>

    ul {
        margin-left: 2em;
        margin-right: 2em;
        margin-top: 2.5em;
        margin-bottom: 2.5em;
        display: grid;
        grid-template-columns: 1fr;
        gap: 2.5em;
        place-items: center;
        align-items: center;
        /* min-height: 100vh; */
    }

    li {
        list-style: none;
        width: 100%;
        max-width: 300px;
        max-height: 200px;
        border: 1px solid rgba(65, 116, 236, 0.67);
        padding: 1.5em;
        border-radius: 20px;
        box-shadow: 0px 0px 10px 1px rgb(65, 116, 236);
    }

    @media screen and (min-width: 768px){
        ul {
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }
    }
    
</style>