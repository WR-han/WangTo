<template>
  <div class="home">
    <div class="home-left">
      <div class="home-left-top">
        <el-row>
          <el-button type="primary" round>主要按钮</el-button>
          <el-button type="primary" round>主要按钮</el-button>
        </el-row>
      </div>
      <div class="home-left-down">
        <el-tabs type="border-card">
          <el-tab-pane>
            <span slot="label"><i class="el-icon-date"></i> 我的行程</span>
            我的行程
          </el-tab-pane>
          <el-tab-pane label="消息中心">消息中心</el-tab-pane>
          <el-tab-pane label="角色管理">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="home-right"></div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {},
  watch: {},
  computed: {},
  created() {},
  mounted() {},
};
</script>

<style scoped>
.home {
  display: flex;
}
</style>