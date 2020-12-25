<template>
  <el-row :gutter="10" class="statistical">
    <el-col :md="7" style="padding: 20px 15px">
      <el-card shadow="hover">
        <div style="padding: 14px 14px 0 14px; text-align: left">
          <h1>
            <i
              class="el-icon-picture-outline-round"
              style="margin-right: 20px"
            ></i>
            图片标注
          </h1>
          <br />
          <br />
          <el-row>
            <el-col :span="8">
              <p>123</p>
              <br />
              <p>团队</p>
              <br />
            </el-col>
            <el-col :span="8">
              <p>123</p>
              <br />
              <p>作业量</p>
              <br />
            </el-col>
            <el-col :span="8">
              <p>123</p>
              <br />
              <p>进度</p>
            </el-col>
          </el-row>
        </div>
      </el-card>
    </el-col>

    <el-col :md="7" style="padding: 20px 15px">
      <el-card shadow="hover">
        <div style="padding: 14px 14px 0 14px; text-align: left">
          <h1>
            <i
              class="el-icon-picture-outline-round"
              style="margin-right: 20px"
            ></i>
            图片标注
          </h1>
          <br />
          <br />
          <el-row>
            <el-col :span="8">
              <p>123</p>
              <br />
              <p>团队</p>
              <br />
            </el-col>
            <el-col :span="8">
              <p>123</p>
              <br />
              <p>作业量</p>
              <br />
            </el-col>
            <el-col :span="8">
              <p>123</p>
              <br />
              <p>进度</p>
            </el-col>
          </el-row>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "statistical",
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

<style>
.statistical {
  padding: 0px 10px;
}

.statistical p {
  text-align: center;
}
</style>