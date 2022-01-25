import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Detail from "../views/Detail.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: Detail,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
// store route object for breadcrumbs link
router.afterEach((to, from) => {
  const text = "headline title"; // get dynamic headline title on route change
  const payload = from.name ? { ...to, text } : { ...to, text: "home" };
  store.commit("ADD_VISITED_PAGE", payload);
});

export default router;
