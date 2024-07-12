<template>
    <div>
        <navComponent></navComponent>
        <router-view></router-view>

    </div>
</template>

<script>
import navComponent from './components/nav.component.vue';
    export default {
        name: "App",
        components: {
            navComponent,
        }
    }
</script>

<style>

</style>