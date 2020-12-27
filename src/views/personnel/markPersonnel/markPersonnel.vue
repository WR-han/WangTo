<template>
  <div class="markPersonnel">
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
        <span><i class="el-icon-search"></i> 数据检索</span>
      </div>
      <div>
        <el-form
          :inline="true"
          :model="searchForm"
          size="mini"
          ref="searchForm"
          class="demo-form-inline msg-search"
        >
          <el-form-item label="标注员账号:" prop="user">
            <el-input
              v-model="searchForm.user"
              placeholder="请输入账号名"
            ></el-input>
          </el-form-item>
          <el-form-item label="状态:" prop="isactive">
            <el-select v-model="searchForm.isactive" placeholder="选择账号状态">
              <el-option label="有效" value="true"></el-option>
              <el-option label="无效" value="false"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="到期时间:" prop="validDate">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="searchForm.validDate"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="注册时间:" prop="registerDate">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="searchForm.registerDate"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
            <el-button type="primary" @click="resetForm('searchForm')"
              >重置</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <br />
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
        <span><i class="el-icon-document-copy"></i> 数据详情</span>
      </div>
      <div>
        <el-button @click="addFormVisible = true" type="primary">
          <i class="el-icon-user"></i>
          新增标注员
        </el-button>
      </div>
      <div>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table>
      </div>
    </el-card>

    <el-dialog title="添加标注员" :visible.sync="addFormVisible">
      <el-form :model="addForm" ref="addForm" :rules="addRules">
        <el-form-item label="用户名称" prop="username">
          <el-input v-model="addForm.username"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="addForm.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addFormVisible = false"
          >取 消</el-button
        >
        <el-button type="primary" @click="submitAddForm('addForm')"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "markPersonnel",
  components: {},
  props: {},
  data() {
    return {
      searchForm: {
        user: "",
        isactive: "",
        validDate: "",
        registerDate: "",
      },
      addForm: {},
      addRules: {
        username: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
      },
      tableData: [],
      addFormVisible: false,
      formLabelWidth: "120px",
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    resetForm(formName) {
      console.log(this.$refs[formName]);
      this.$refs[formName].resetFields();
    },
    submitAddForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.addFormVisible = false;
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
};
</script>

<style>
.markPersonnel .el-input__inner {
  width: 120px;
  margin-right: 20px;
}

.markPersonnel .el-input__suffix {
  right: 25px !important;
}

.markPersonnel .msg-search .el-form-item {
  margin-bottom: 0;
}
</style>