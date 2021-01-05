import Vue from 'vue'
import VueRouter from 'vue-router'
import $vuex from "../store/index.js"

Vue.use(VueRouter)

const home = () => import("views/home/home.vue")
const login = () => import("views/login/login.vue")
const inspectionWorkers = () => import("views/workers/inspectionWorkers/inspectionWorkers.vue")
const markWorkers = () => import("views/workers/markWorkers/markWorkers.vue")
const dataManagement = () => import("views/project/dataManagement/dataManagement.vue")
const projectManagement = () => import("views/project/projectManagement/projectManagement.vue")
const templateManagement = () => import("views/project/templateManagement/templateManagement.vue")
const statistical = () => import("views/statistical/statistical.vue")
const account = () => import("views/account/account.vue")

const routes = [{
    path: "",
    redirect: "/login"
  },
  {
    name: "login",
    path: "/login",
    component: login,
    meta: {
      title: "登录"
    }
  },
  {
    name: "home",
    path: "/home",
    component: home,
    meta: {
      title: "首页"
    }
  },
  {
    name: "WorkersManagement",
    path: "/WorkersManagement/",
    component: {
      render: (e) => e("router-view")
    },
    // meta: {
    //   title: "质检员管理"
    // }
    children: [{
        name: "inspectionWorkers",
        path: "inspectionWorkers",
        component: inspectionWorkers,
        meta: {
          title: "质检员管理"
        }
      },
      {
        name: "markWorkers",
        path: "markWorkers",
        component: markWorkers,
        meta: {
          title: "标注员管理"
        }
      },
    ]
  },
  {
    name: "project",
    path: "/project/",
    component: {
      render: (e) => e("router-view")
    },
    children: [{
      name: "dataManagement",
      path: "dataManagement",
      component: dataManagement,
      meta: {
        title: "数据管理"
      }
    }, {
      name: "projectManagement",
      path: "projectManagement",
      component: projectManagement,
      meta: {
        title: "项目管理"
      }
    }, {
      name: "templateManagement",
      path: "templateManagement",
      component: templateManagement,
      meta: {
        title: "模板管理"
      }
    }]
  },
  {
    name: "statistical",
    path: "/statistical",
    component: statistical,
    meta: {
      title: "项目概况"
    }
  },
  {
    name: "account",
    path: "/account",
    component: account,
    meta: {
      title: "账户信息"
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `望途数据 - ${to.meta.title}`
  if (to.fullPath != "/login") {
    if (!localStorage.token) {
      router.replace("/login")
    } else if (!$vuex.state.token) {
      $vuex.state.token = localStorage.token
      next()
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router