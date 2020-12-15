/*
 * @Author: 王伟斌
 * @Date: 2020-12-13 11:29:52
 * @LastEditors: 王伟斌
 * @LastEditTime: 2020-12-13 17:27:53
 * @FilePath: \weibin\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import success from "./views/success.vue";
import home from "./views/home.vue";
import dashboard from "./views/dashboard.vue";
import message from "./views/message.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: dashboard
  },
  {
    path: "/message",
    name: "message",
    component: message
  },
  {
    path: "/home",
    name: "home",
    component: home
  },
  {
    path: "/success",
    name: "success",
    component: success
  }
];

const router = new VueRouter({
  routes
});

export default router;
