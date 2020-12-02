import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import("views/home/Home.vue")
const Category = () => import("views/category/Category.vue")
const Cart = () => import("views/cart/Cart.vue")
const Profile = () => import("views/profile/Profile.vue")

Vue.use(VueRouter)

const routes = [{
    path: "",
    redirect: "/home"
  },
  {
    name: "Home",
    path: "/home",
    component: Home,
    meta: {
      title: "SuperMall"
    }
  },
  {
    name: "Category",
    path: "/category",
    component: Category,
    meta: {
      title: "Category"
    }
  },
  {
    name: "Cart",
    path: "/shopcart",
    component: Cart,
    meta: {
      title: "Cart"
    }
  },
  {
    name: "Profile",
    path: "/profile",
    component: Profile,
    meta: {
      title: "Profile"
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  document.title = to.matched[0].meta.title
  next()
})

export default router