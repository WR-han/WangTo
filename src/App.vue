<template>
  <div id="wangto" :class="{ wangtoShow: isShow }">
    <nav id="nav-bar">
      <div class="nav-left">
        <!-- <p style="margin-left: 20px; color: #2fcec0">望途数据</p> -->
        <img
          style="width: 145px; margin-top: 6px"
          src="./assets/img/base/navLogo.png"
          alt="logo"
        />
      </div>
      <div class="nav-right" v-show="$route.meta.title != '登录'">
        <div class="nav-demo">
          <el-tooltip effect="dark" content="查看演示动画" placement="left">
            <i class="el-icon-video-camera"></i>
          </el-tooltip>
        </div>

        <div class="message">
          <el-badge is-dot class="nav-mag-item">
            <i class="el-icon-bell"></i>
          </el-badge>
        </div>

        <div class="nav-avatar" @click="logout">
          <el-tooltip
            class="item"
            effect="dark"
            content="点击登出账号"
            placement="bottom"
          >
            <el-avatar
              size="medium"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            ></el-avatar>
          </el-tooltip>
        </div>
      </div>
    </nav>

    <main>
      <transition name="changeL">
        <div class="main-left" v-show="$route.meta.title != '登录'">
          <el-menu
            :default-active="this.$route.path"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
            background-color="#1E1F1C"
            text-color="#BBBBBB"
            active-text-color="#ffffff"
            :unique-opened="true"
            router
          >
            <p class="menu-company">
              <span v-if="!isCollapse" style="white-space: nowrap"
                >公司名称</span
              >
              <img
                v-if="isCollapse"
                src="./assets/img/base/menubarLogo.png"
                alt="logo"
                style="width: 24px"
              />
            </p>

            <el-menu-item index="/home">
              <i class="el-icon-receiving"></i>
              <span slot="title">首页</span>
            </el-menu-item>

            <el-menu-item index="/statistical">
              <i class="el-icon-receiving"></i>
              <span slot="title">项目概况</span>
            </el-menu-item>

            <el-submenu index="/project">
              <template slot="title">
                <i class="el-icon-document"></i>
                <span slot="title">我的项目</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/project/projectManagement">
                  <i class="el-icon-document-checked"></i>
                  项目管理
                </el-menu-item>
                <el-menu-item index="/project/dataManagement">
                  <i class="el-icon-files"></i>
                  数据管理
                </el-menu-item>
                <el-menu-item index="/project/templateManagement">
                  <i class="el-icon-reading"></i>
                  模板管理
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="/workersManagement">
              <template slot="title">
                <i class="el-icon-user"></i>
                <span slot="title">人员管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item v-if="$store.state.identity === 'admin'" index="/workersManagement/leader">
                  <i class="el-icon-user"></i>
                  管理员管理
                </el-menu-item>
                <el-menu-item index="/workersManagement/operator">
                  <i class="el-icon-edit"></i>
                  标注员管理
                </el-menu-item>
                <el-menu-item index="/workersManagement/inspector">
                  <i class="el-icon-view"></i>
                  质检员管理
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-menu-item index="/account">
              <i class="el-icon-office-building"></i>
              <span slot="title">账户信息</span>
            </el-menu-item>

            <el-radio-group
              class="menu-zoom"
              v-model="isCollapse"
              style="width: 100%"
            >
              <el-radio-button :label="!isCollapse" style="width: 100%">
                <i v-if="!isCollapse" class="el-icon-s-fold"></i>
                <i v-else class="el-icon-s-unfold"></i>
              </el-radio-button>
              <!-- <el-radio-button :label="true">收起</el-radio-button> -->
            </el-radio-group>
          </el-menu>
        </div>
      </transition>

      <div class="main-right">
        <div class="menu-name" v-show="$route.meta.title != '登录'">
          <p>{{ this.$route.meta.title }}</p>
        </div>
        <div
          class="main-right-bg"
          :class="{ is_login: $route.meta.title == '登录' }"
        >
          <transition name="changeR">
            <keep-alive>
              <router-view />
            </keep-alive>
          </transition>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  props: {},
  data() {
    return {
      isCollapse: false,
      isShow: false,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    sleep(time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    },
    logout() {
      localStorage.removeItem("token");
      this.$store.state.token = null;
      location.reload();
    },
  },
  watch: {},
  computed: {},
  created() {
    // console.log(this.$route);
    // console.log(this.$router);
  },
  mounted() {
    this.sleep(300).then(() => {
      this.isShow = true;
    });
  },
};
</script>

<style>
@import "assets/css/base.css";

#wangto {
  transition: 0.5s;
  opacity: 0;
}

.wangtoShow {
  opacity: 1 !important;
}

.is_login {
  height: calc(100vh - 48px) !important;
}

#nav-bar {
  height: 48px;
  width: 100vw;
  background-color: rgb(39, 40, 34, 0.77) !important;
  display: flex;
  justify-content: space-between;
  z-index: 99;
  position: relative;
  border-bottom: 1px solid #1cdecd80;
}

.nav-mag-item,
.nav-demo {
  margin-top: 15px;
  font-size: 20px;
  cursor: pointer;
  color: #fff;
}

.nav-avatar {
  margin-top: 6px;
  margin-right: 20px;
  cursor: pointer;
}

.nav-left {
  height: 48px;
  line-height: 48px;
  width: 200px;
  padding-left: 20px;
}

.nav-right {
  height: 48px;
  width: 150px;
  display: flex;
  justify-content: space-between;
}

main {
  display: flex;
}

.main-left {
  border-right: 1px solid #1cdecd80;
}

.main-left > ul {
  background: var(--corners);
  background-repeat: no-repeat;
  background-size: 3px 1px, 1px 3px;

  background-color: #1e1f1c80 !important;
}

.el-menu-item:focus,
.el-menu-item:hover {
  background-color: #0f3c42c4 !important;
}

.el-menu-item,
.el-submenu__title {
  background: var(--corners);
  background-repeat: no-repeat;
  background-size: 3px 1px, 1px 3px;

  margin: 3px 0;
}

.el-menu-item {
  background-color: #2a3a3680 !important;
  color: var(--color-text-light) !important;
}

.el-menu-item.is-active {
  color: var(--color-text) !important;
}

.el-submenu__title {
  background-color: #2a3a3680 !important;
}

.el-submenu__title span {
  color: var(--color-text-light) !important;
}

.el-menu .el-menu--inline {
  background-color: #2a3a3680 !important;
}

.main-right {
  width: 100%;
  background-color: rgb(53, 54, 58, 0.77);
}

.main-right-bg {
  height: calc(100% - 51px);
  position: relative;
  padding: 20px 20px 0 20px;
  border: 15px solid transparent;
  border-image: url("./assets/img/base/边框.png") 39 39 round;
}

.main-right-bg > div {
  margin: 0 !important;
}

.menu-name {
  background: var(--corners) !important;
  background-repeat: no-repeat !important;
  background-size: 3px 1px, 1px 3px !important;

  background-color: rgb(39, 40, 34, 0.5) !important;
  padding: 10px 20px;
  border-bottom: 1px solid #1cdecd80;
}

.menu-name p {
  font-size: 16px;
  font-weight: 700;
  line-height: 30px;
  height: 30px;
}

.changeR-enter-active {
  transition: 0.3s;
}
.changeR-enter,
.changeR-leave-to {
  transform: translateX(40px);
  opacity: 0;
}

.changeL-enter-active {
  transition: 0.3s;
}
.changeL-enter,
.changeL-leave-to {
  transform: translateX(-40px);
  opacity: 0;
}
</style>
