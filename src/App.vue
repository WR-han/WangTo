<template>
  <div id="wangto">
    <nav id="nav-bar">
      <div class="nav-left">
        <p style="margin-left: 20px; color: #2fcec0">望途数据</p>
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
      <div class="main-left">
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
            <span>公司名称</span>
          </p>

          <el-menu-item index="/home">
            <i class="el-icon-receiving"></i>
            <span slot="title">首页</span>
          </el-menu-item>

          <el-menu-item index="/statistical" route>
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

          <el-submenu index="/personnelManagement">
            <template slot="title">
              <i class="el-icon-user"></i>
              <span slot="title">人员管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/personnelManagement/markPersonnel">
                <i class="el-icon-edit"></i>
                标注员管理
              </el-menu-item>
              <el-menu-item index="/personnelManagement/inspectionPersonnel">
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

      <div class="main-right">
        <div class="menu-name">
          <p>{{ this.$route.meta.title }}</p>
        </div>
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
  padding: 0 2px;
}

.main-left > ul {
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
  color: #1cdecd !important;
}

.el-menu-item.is-active {
  color: var(--color-text) !important;
}

.el-submenu__title {
  background-color: #2a3a3680 !important;
}

.el-submenu__title span {
  color: #1cdecd !important;
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
</style>
