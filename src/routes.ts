import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
import Navbar from "./components/Navbar.vue"
import About from "./pages/About.vue"
import Contact from "./pages/Contact.vue"
import Home from "./pages/Home.vue"

//definir rutas de vista

let routes: RouteRecordRaw[] =[
    { name: "Home", path:"/", component:Home},
    { name: "Contact", path:"/contact", component:Contact},
    { name: "About", path:"/about", component:About}
]

let Router = createRouter({
    history:createWebHistory(),
    routes
});

//exportar el router ts
export default Router