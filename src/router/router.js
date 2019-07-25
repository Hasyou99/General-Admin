import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const routes = [{
    path: "/",
    component: () => import("@/views/login/index.vue"),
    name: "登录",
    redirect: "/login",
}]

export default new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  routes,
});