<template>
  <div id="app">
    <nav id="nav-bar">
      <div class="nav-left">
        <p style="margin-left: 20px; color: white">公司名称</p>
      </div>
      <div class="nav-right">
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

        <div class="nav-avatar">
          <el-avatar
            size="medium"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
        </div>
      </div>
    </nav>

    <main>
      <div class="mian-left">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
          background-color="#1E1F1C"
          text-color="#BBBBBB"
          active-text-color="#ffffff"
          router
        >
          <el-radio-group v-model="isCollapse" style="width: 100%">
            <el-radio-button :label="!isCollapse" style="width: 100%">
              <i v-if="!isCollapse" class="el-icon-s-fold"></i>
              <i v-else class="el-icon-s-unfold"></i>
            </el-radio-button>
            <!-- <el-radio-button :label="true">收起</el-radio-button> -->
          </el-radio-group>

          <el-menu-item index="home">
            <i class="el-icon-receiving"></i>
            <span slot="title">首页</span>
          </el-menu-item>

          <el-menu-item index="statistical" route>
            <i class="el-icon-receiving"></i>
            <span slot="title">项目概况</span>
          </el-menu-item>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span slot="title">我的项目</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="projectManagement">
                <i class="el-icon-document-checked"></i>
                项目管理
              </el-menu-item>
              <el-menu-item index="dataManagement">
                <i class="el-icon-files"></i>
                数据管理
              </el-menu-item>
              <el-menu-item index="templateManagement">
                <i class="el-icon-reading"></i>
                模板管理
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-user"></i>
              <span slot="title">人员管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="markPersonnel">
                <i class="el-icon-edit"></i>
                标注员管理
              </el-menu-item>
              <el-menu-item index="inspectionPersonnel">
                <i class="el-icon-view"></i>
                质检员管理
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-menu-item index="account">
            <i class="el-icon-office-building"></i>
            <span slot="title">账户信息</span>
          </el-menu-item>
        </el-menu>
      </div>

      <div class="main-right">
        <div class="main-right-bg">
          <keep-alive>
            <router-view />
          </keep-alive>
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
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  watch: {},
  computed: {},
  created() {
    // console.log(this.$route);
    // console.log(this.$router);
  },
  mounted() {},
};
</script>

<style>
@import "assets/css/base.css";

#nav-bar {
  height: 48px;
  width: 100vw;
  background: rgb(39, 40, 34);
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 1px 5px #000;
  z-index: 99;
  position: relative;
}

.el-radio-button:first-child .el-radio-button__inner {
  border-left: 0 !important;
  border-right: 0 !important;
  border-top: 0 !important;
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
  box-shadow: 1px 0px 5px #000;
}

.main-right {
  width: 100%;
  padding: 10px;
  background-color: #272822;
}

.main-right-bg {
  background-color: rgb(53, 54, 58);
  height: 100%;
}

.el-menu {
  border-right: 0 !important;
}

.el-menu-item-group__title {
  padding: 0 0 0 20px !important;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: calc(100vh - 48px);
}

.el-menu-vertical-demo {
  min-height: calc(100vh - 48px);
}

.el-submenu .el-menu-item {
  min-width: 0 !important;
}

.el-radio-button__inner {
  width: 100% !important;
  border-radius: 0 !important;
  font-size: 20px !important;
}
</style>
