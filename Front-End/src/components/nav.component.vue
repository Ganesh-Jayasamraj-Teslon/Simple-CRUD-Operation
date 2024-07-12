<template>
    <nav style="z-index: 1000;">
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/user/create">Create user</router-link>
            </li>
            <li>
                <router-link to="/user/list">List All Users</router-link>
            </li>
            <li>
                <router-link to="/user/search">Search User</router-link>
            </li>
            <li>
                <router-link to="/user/update">Update User</router-link>
            </li>
            <li>
                <router-link to="/user/delete">Delete User</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>

</script>

<style scoped>
    nav {
        padding: 10px;
        background-color: rgb(65, 116, 236);
    }

    nav > ul {
        margin: 5px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        justify-self: center;
        align-items: center;
        gap: 10px;
    }

    li {
        text-align: center;
        list-style: none;
        border-radius: 5px;
    }

    li:hover {
        background-color: rgba(255, 255, 255, 0.15);
    }
    
    a {
        /* padding: 5px; */
        color: white;
        text-decoration: none;
        font-size: medium;
        
        font-weight: 300;
    }

</style>