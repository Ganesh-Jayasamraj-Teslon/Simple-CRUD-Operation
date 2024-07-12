<template>
    <div>
        {{ backend }}
    </div>
</template>

<script>
import secret from '../secret';

    export default {
        name: "Home",
        data() {
            return {
                backend: secret.SECRET_BACK_END_HOST_URL
            }
        }
    }
</script>