import { RouteRecordRaw } from 'vue-router';
import { RouteName } from '@/constants/route-names'

const routes: RouteRecordRaw[] = [
  {
    path: "/feed",
    name: RouteName.Feed,
    component: () =>
      import("../views/Feed.vue"),
  },
  {
    path: "/",
    name: "Home",
    component: () =>
      import("../views/Home.vue"),
  },

  {
    path: "/home",
    name: RouteName.Home,
    component: () =>
      import("../views/Home.vue"),
  },

  {
    path: "/post/editpost/:id",
    name: RouteName.EditPost,
    component: () =>
      import("../views/EditPost.vue"),
    props: true,
  },
  {
    path: "/post/:id",
    name: RouteName.PostDetails,
    component: () =>
      import("../views/ViewPost.vue"),
    props: true,

  },
  {
    path: "/:pathMatch(.*)",
    name: "NotFound",
    component: () =>
      import("../views/NotFound.vue"),

  },
];

export default routes;