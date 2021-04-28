import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import help from "../views/help.vue";
import Blog from "../components/BlogPosts.vue";
import Profile from "../views/Profile.vue";
import Orders from "../views/Orders.vue";
import ChangePassword from "../views/ChangePassword.vue";
import PersonalInfo from "../views/PersonalInfo.vue";
import jumpsuits from "../views/jumpsuits.vue";
import dresses from "../views/dresses.vue";
import blouses from "../views/blouses.vue";
import skirts from "../views/skirts.vue";
import coats from "../views/coats.vue";
import pants from "../views/pants.vue";
import sweatshirts from "../views/sweatshirts.vue";
import blazers from "../views/blazers.vue";
import test from "../views/test.vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(axios, VueAxios);
import newprod from "../views/newprod.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/jumpsuits",
    name: "jumpsuits",
    component: jumpsuits
  },
  {
    path: "/dresses",
    name: "dresses",
    component: dresses
  },
  {
    path: "/blouses",
    name: "blouses",
    component: blouses
  },
  {
    path: "/skirts",
    name: "skirts",
    component: skirts
  },
  {
    path: "/pants",
    name: "pants",
    component: pants
  },
  {
    path: "/coats",
    name: "coats",
    component: coats
  },
  {
    path: "/test",
    name: "test",
    component: test
  },
  {
    path: "/sweatshirts",
    name: "sweatshirts",
    component: sweatshirts
  },
  {
    path: "/newprod",
    name: "newprod",
    component: newprod
  },
  {
    path: "/blazers",
    name: "blazers",
    component: blazers
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
    },

  {
      path: "/help",
      name: "Help",
      component: help
    },
    {
        path: "/blog",
        name: "blog",
        component: Blog
    },
    
    {
        path: "/profile",
        name: "profile",
        component: Profile
    },
    {
      path: "/orders",
      name: "orders",
      component: Orders
  },
  {
    path: "/changepassword",
    name: "changepassword",
    component: ChangePassword
  },
  {
    path: "/personalinfo",
    name: "personalinfo",
    component: PersonalInfo
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
