const routes = [
  {
    path: "/",
    component: () => import("layouts/MyLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "/profile", component: () => import("pages/Profile.vue") }
    ]
  },
  {
    path: "/",
    component: () => import("layouts/AuthLayout.vue"),
    children: [
      { path: "/login", component: () => import("pages/Login.vue") },
      { path: "/register", component: () => import("pages/Register.vue") }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
