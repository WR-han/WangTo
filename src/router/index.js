import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const home = () => import("views/home/home.vue")
const inspectionPersonnel = () => import("views/personnel/inspectionPersonnel/inspectionPersonnel.vue")
const markPersonnel = () => import("views/personnel/markPersonnel/markPersonnel.vue")
const dataManagement = () => import("views/project/dataManagement/dataManagement.vue")
const projectManagement = () => import("views/project/projectManagement/projectManagement.vue")
const templateManagement = () => import("views/project/templateManagement/templateManagement.vue")
const statistical = () => import("views/statistical/statistical.vue")
const account = () => import("views/account/account.vue")

const routes = [{
    path: "",
    redirect: "/home"
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
    name: "personnelManagement",
    path: "/personnelManagement/",
    // component: inspectionPersonnel,
    // meta: {
    //   title: "质检员管理"
    // }
    children: [{
        name: "inspectionPersonnel",
        path: "inspectionPersonnel",
        component: inspectionPersonnel,
        meta: {
          title: "质检员管理"
        }
      },
      {
        name: "markPersonnel",
        path: "markPersonnel",
        component: markPersonnel,
        meta: {
          title: "标注员管理"
        }
      },
    ]
  },
  {
    name: "project",
    path: "/project/",
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
  // console.log(to)
  document.title = `望途数据 - ${to.meta.title}`
  next()
})

export default router