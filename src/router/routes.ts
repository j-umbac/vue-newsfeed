import { RouteRecordRaw } from "vue-router";


const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Feed",
    component: () =>
      import("../views/Feed.vue"),
  },
  {
    path: "/home",
    name: "Home",
  
    component: () =>
      import("../views/Home.vue"),
  },
  {
    path: "/posts/:id",
    name: "PostDetails",
    component: () =>
      import("../views/ViewPost.vue"),
    props: true
  }
];

export default routes;