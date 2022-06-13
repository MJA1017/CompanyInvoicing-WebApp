import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import InvoiceView from "../views/InvoiceView.vue";
import Login from '../views/Login.vue'
import { auth } from '../firebase/firebaseInit'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/invoice/:invoiceId",
    name: "Invoice",
    component: InvoiceView,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === '/login' && auth.currentUser) {
    next('/')
    return;
  }

  if (to.path != '/login' && !auth.currentUser) {
    next('/login')
    return;
  }

  next();
})

export default router;
