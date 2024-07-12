<template>
    <div>
        <div class="container">
            <div class="inside">
                <h3>Update an user by</h3>
                <button title="Update an User from Email ID" @click.prevent="input_element = 'Email'; isActive = ''">
                    Email
                </button>
                <p>or</p>
                <button title="Update an User from Mobile No" @click.prevent="input_element = 'Mobile'; isActive = ''">
                    Mobile No
                </button>
            </div>
        </div>

        <div class="modal-container" id="modal_container" :class="isActive ? 'notActive' : ''">
            <s_modal :element="input_element" v-on:close="close_modal"></s_modal>
        </div>

    </div>
</template>

<script>
    import userUpdateModalComponent from './user.update.modal.component.vue';
    
    export default {
        name: "userSearchComponent",
        components: {
            s_modal: userUpdateModalComponent
        },
        data() {
            return {
                isActive: 'notActive',
                input_element: "",
            }
        },

        methods: {
            close_modal: function() {
                this.isActive="notActive"
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
        display: grid;
        place-items: center;
        gap: 20px;

        border: 1px solid rgba(83, 124, 219, 0.45);
        padding: 3em 2em;
        border-radius: 15px;

        box-shadow: 0px 0px 35px 10px rgb(65, 116, 236);
    }

    button {
        padding: 10px;
        min-width: 200px;
        color: white;
        font-size: larger;
        font-weight: 500;
        background-color: rgb(83, 124, 219);
        border: none;
    }

    button:hover {
        cursor: pointer;
    }

    .modal-container {
        /* display: none; */

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

</style>