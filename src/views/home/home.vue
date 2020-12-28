<template>
  <el-row :gutter="10" class="home">
    <el-col :md="16" class="home-left">
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
    <el-col :md="8" class="home-right">
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
            <span>项目总览</span>
            <el-button style="float: right; padding: 3px 0" type="text">
              查看全部
            </el-button>
          </div>
          <div>
            <home-echarts
              :chartsData="projectInformation"
              chartsName="projectInformation"
            />
            <p>项目总数 : {{ getInformationNum(projectInformation) }}</p>
          </div>
        </el-card>
      </el-row>
      <el-row class="home-right-down">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>数据概况</span>
            <el-button-group style="float: right">
              <el-button
                type="primary"
                @click="changeButton('file')"
                :class="{ chartsBtnNotShow: chartShow == 'data' }"
                >文件数</el-button
              >
              <el-button
                type="primary"
                @click="changeButton('data')"
                :class="{ chartsBtnNotShow: chartShow == 'file' }"
                >数据量</el-button
              >
            </el-button-group>
          </div>
          <div style="position: relative">
            <home-echarts
              :chartsData="dataInformationFile"
              chartsName="dataInformationFile"
              :class="{ echartsNotShow: chartShow == 'data' }"
            />
            <home-echarts
              style="position: absolute; top: 0; left: 0; right: 0"
              :chartsData="dataInformationSize"
              chartsName="dataInformationSize"
              :class="{ echartsNotShow: chartShow == 'file' }"
            />
            <p v-if="chartShow == 'file'">
              文件总数 : {{ getInformationNum(dataInformationFile) }}
            </p>
            <p v-if="chartShow == 'data'">
              数据总数 : {{ getInformationNum(dataInformationSize) }}
            </p>
          </div>
        </el-card>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import HomeEcharts from "components/home/HomeEcharts.vue";

export default {
  name: "home",
  components: {
    HomeEcharts,
  },
  props: {},
  data() {
    return {
      activeName: "home-fy-first",

      // 表格数据
      projectInformation: [
        { value: 15484, name: "图片标注" },
        { value: 3104, name: "视频标注" },
        { value: 1233, name: "音频标注" },
      ],
      dataInformationFile: [
        { value: 25484, name: "图片标注" },
        { value: 8104, name: "视频标注" },
        { value: 11233, name: "音频标注" },
      ],
      dataInformationSize: [
        { value: 15484, name: "图片标注" },
        { value: 38104, name: "视频标注" },
        { value: 1233, name: "音频标注" },
      ],
      dataNumber: [],
      dataSize: [],
      chartShow: "file",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    changeButton(type) {
      this.chartShow = type;
    },
  },
  watch: {},
  computed: {
    getInformationNum() {
      return function (Infor) {
        let Num = 0;
        Infor.forEach((data) => {
          Num += data.value;
        });
        return Num;
      };
    },
  },
  created() {},
  mounted() {},
};
</script>

<style>

.home-right-top .el-card__body{
  padding: 20px !important;
}

.home-left-down #tab-home-fy-first {
  padding-left: 20px;
}

.home-left-down #tab-home-fy-third {
  padding-right: 20px;
}

.home-left-down .el-tabs__content {
  padding: 15px 20px;
}

.home-left-down .el-tabs__content #pane-home-fy-first>a>.el-row {
  border-bottom: 1px dashed var(--color-line);
}

.home-left-down .el-tabs__header {
  margin: 0;
}

.home-left-down .el-progress-bar__outer {
  transition: 0.5s;
  border-radius: 0;
  opacity: 0.5;
}

.home-left-down:hover .el-progress-bar__outer {
  opacity: 0.77;
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
  color: white !important;
  font-weight: 700;
}

.home-left-down .progress-col:hover p {
  opacity: 0;
}

.home-left-down .progress-col:hover .el-progress-bar__innerText {
  opacity: 1;
}

.home-left-down .progress-col .el-progress-bar__innerText {
  color: black !important;
}

.home-right {
  padding-left: 20px !important;
}

.home-right .el-card__body {
  padding: 10px;
}

.home-right .el-card__body p{
  padding-right: 4%;
  text-align: right;
}

.home-right .el-progress {
  box-shadow: none !important;
}

.home-right-down .clearfix {
  height: 40px;
  line-height: 40px;
}

.home-right-down .el-button-group {
  float: right;
}

.chartsBtnNotShow {
  color: var(--color-text-secondary) !important;
  opacity: 0.7;
}

.echartsNotShow {
  opacity: 0;
  z-index: -1;
}

.chartsStyle {
  height: 180px !important;
}
</style>