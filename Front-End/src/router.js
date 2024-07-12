import Vue from "vue";
import VueRouter from "vue-router";

// Importing Components
import homeComponent from "./components/home.component.vue";
import aboutComponent from "./components/about.component.vue";
import usersCreateComponent from "./components/users.create.component.vue"
import usersListComponent from "./components/users.list.component.vue"
import usersSearchComponent from "./components/users.search.component.vue"
import usersUpdateComponent from "./components/users.update.component.vue"
import usersDeleteComponent from "./components/users.delete.component.vue"

Vue.use(VueRouter)

const routes = [
    { path: "/", component: homeComponent },
    { path: "/about", component: aboutComponent },
    { path: "/user/create", component: usersCreateComponent },
    { path: "/user/list", component: usersListComponent },
    { path: "/user/search", component: usersSearchComponent },
    { path: "/user/update", component: usersUpdateComponent },
    { path: "/user/delete", component: usersDeleteComponent },
]

const router = new VueRouter({
    routes,
    mode: "history"
})

export default router