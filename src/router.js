import { createRouter, createWebHistory } from "vue-router";
import NotFound from "./views/404.vue";

export const pages = [
  {
    path: "/",
    name: "About"
  },
  {
    path: "/portfolio",
    name: "Portfolio"
  }
  // {
  //   path: "/projects",
  //   name: "Projects"
  // },
  // {
  //   path: "/contact",
  //   name: "Contact"
  // }
];

const routes = [
  // set the landing page
  // {
  //   path: "/",
  //   name: "About",
  //   component: About
  // },
  // add component property to each route
  ...pages.map(page => ({
    ...page,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(`./views/${page.name}`)
  })),
  // set page for routes that are not found
  {
    path: "/:pathMatch(.*)",
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
