<template>
  <el-row :gutter="10" class="home">
    <el-col :md="15" class="home-left">
      <el-row :gutter="10" class="home-left-top">
        <el-button type="primary">
          <i class="el-icon-folder-add"></i>
          数据上传
        </el-button>
        <el-button type="primary">
          <i class="el-icon-edit-outline"></i>
          创建项目
        </el-button>
      </el-row>
      <el-row :gutter="10" class="home-left-down">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <!-- <el-tab-pane label="临期完结项目" name="home-fy-first">临期完结项目</el-tab-pane> -->
          <el-tab-pane name="home-fy-first">
            <span slot="label"><i class="el-icon-sunset"></i> 临期项目</span>
            <a href="">
              <el-row>
                <el-row>
                  <el-col :md="20" style="text-align: left"> 项目名 </el-col>
                  <el-col :md="4" style="text-align: right"> 1天后到期 </el-col>
                </el-row>
                <el-row :gutter="3">
                  <el-col class="progress-col" :md="8">
                    <p>执行</p>
                    <el-progress
                      :text-inside="true"
                      :stroke-width="35"
                      :percentage="100"
                      status="success"
                    ></el-progress>
                  </el-col>
                  <el-col class="progress-col" :md="8">
                    <p>审核</p>
                    <el-progress
                      :text-inside="true"
                      :stroke-width="35"
                      :percentage="100"
                      status="warning"
                    ></el-progress>
                  </el-col>
                  <el-col class="progress-col" :md="8">
                    <p>验收</p>
                    <el-progress
                      :text-inside="true"
                      :stroke-width="35"
                      :percentage="100"
                      status="exception"
                    ></el-progress>
                  </el-col>
                </el-row>
              </el-row>
            </a>
            <a href="">
              <el-row>
                <el-row>
                  <el-col :md="20" style="text-align: left"> 项目名 </el-col>
                  <el-col :md="4" style="text-align: right"> 1天后到期 </el-col>
                </el-row>
                <el-row :gutter="3">
                  <el-col class="progress-col" :md="8">
                    <p>执行</p>
                    <el-progress
                      :text-inside="true"
                      :stroke-width="35"
                      :percentage="80"
                      status="success"
                    ></el-progress>
                  </el-col>
                  <el-col class="progress-col" :md="8">
                    <p>审核</p>
                    <el-progress
                      :text-inside="true"
                      :stroke-width="35"
                      :percentage="20"
                      status="warning"
                    ></el-progress>
                  </el-col>
                  <el-col class="progress-col" :md="8">
                    <p>验收</p>
                    <el-progress
                      :text-inside="true"
                      :stroke-width="35"
                      :percentage="60"
                      status="exception"
                    ></el-progress>
                  </el-col>
                </el-row>
              </el-row>
            </a>
            <a href="">
              <el-row>
                <el-row>
                  <el-col :md="20" style="text-align: left"> 项目名 </el-col>
                  <el-col :md="4" style="text-align: right"> 1天后到期 </el-col>
                </el-row>
                <el-row :gutter="3">
                  <el-col class="progress-col" :md="8">
                    <p>执行</p>
                    <el-progress
                      :text-inside="true"
                      :stroke-width="35"
                      :percentage="70"
                      status="success"
                    ></el-progress>
                  </el-col>
                  <el-col class="progress-col" :md="8">
                    <p>审核</p>
                    <el-progress
                      :text-inside="true"
                      :stroke-width="35"
                      :percentage="50"
                      status="warning"
                    ></el-progress>
                  </el-col>
                  <el-col class="progress-col" :md="8">
                    <p>验收</p>
                    <el-progress
                      :text-inside="true"
                      :stroke-width="35"
                      :percentage="90"
                      status="exception"
                    ></el-progress>
                  </el-col>
                </el-row>
              </el-row>
            </a>
          </el-tab-pane>
          <el-tab-pane name="home-fy-second">
            <span slot="label"
              ><i class="el-icon-sunrise-1"></i> 临期未执行完毕</span
            >
            临期未执行完毕
          </el-tab-pane>
          <el-tab-pane name="home-fy-third">
            <span slot="label"
              ><i class="el-icon-sunrise"></i> 临期未审核完毕</span
            >
            临期未审核完毕
          </el-tab-pane>
        </el-tabs>
      </el-row>
    </el-col>
    <el-col :md="9" class="home-right">
      <el-row class="home-right-top">
        <el-card class="box-card" shadow="hover">
          <span>费用详情</span>
          <el-button style="float: right; padding: 3px 0" type="text">
            查看详细
          </el-button>
        </el-card>
      </el-row>
      <el-row class="home-right-center">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>项目概况</span>
            <el-button style="float: right; padding: 3px 0" type="text">
              查看项目
            </el-button>
          </div>
          <div>
            <el-progress
              type="circle"
              :percentage="percentage1"
              :color="colors"
              :stroke-width="20"
            ></el-progress>
          </div>
        </el-card>
      </el-row>
      <el-row class="home-right-down">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>数据概况</span>
            <el-button style="float: right; padding: 3px 0" type="text">
              查看数据
            </el-button>
          </div>
          <div>
            <el-progress
              type="circle"
              :percentage="percentage2"
              :color="colors"
              :stroke-width="20"
            ></el-progress>
          </div>
        </el-card>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "home",
  components: {},
  props: {},
  data() {
    return {
      activeName: "home-fy-first",
      percentage1: 70,
      percentage2: 30,
      colors: [
        { color: "#f56c6c", percentage: 20 },
        { color: "#e6a23c", percentage: 40 },
        { color: "#5cb87a", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#6f7ad3", percentage: 100 },
      ],
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
};
</script>

<style>
.home {
  display: flex;
  padding: 20px;
}

.home-left-down #tab-home-fy-first {
  padding-left: 20px;
}

.home-left-down #tab-home-fy-third {
  padding-right: 20px;
}

.home-left-down .el-tabs__item.is-active {
  background-color: rgb(39, 40, 34);
  border-radius: 4px 4px 0 0;
}

.home-left-down .el-tabs__content {
  padding: 15px 20px;
  background-color: rgb(39, 40, 34);
  border-radius: 0 0 4px 4px;
}

.home-left-down .el-tabs__header {
  margin: 0;
}

.home-left-down .el-progress-bar__outer {
  border-radius: 4px;
}

.home-left-down .el-progress-bar__inner {
  border-radius: 0;
}

.home-left-down .el-progress-bar__innerText {
  opacity: 0;
  transition: 0.3s;
  font-weight: 700;
}

.home-left-down p {
  text-align: center;
  position: absolute;
  z-index: 5;
  line-height: 35px;
  padding-left: 10px;
  opacity: 1;
  transition: 0.3s;
}

.home-left-down .progress-col:hover p {
  opacity: 0;
}

.home-left-down .progress-col:hover .el-progress-bar__innerText {
  opacity: 1;
}

.home-right {
  padding-left: 20px !important;
}

.home-right .el-progress {
  box-shadow: none !important;
}
</style>