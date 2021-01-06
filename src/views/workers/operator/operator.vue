<template>
  <div class="operator">
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
      <el-form :model="addForm" ref="addForm" :rules="addRules" status-icon>
        <el-form-item label="用户名称" prop="username">
          <el-input
            placeholder="请输入用户名称"
            v-model="addForm.username"
          ></el-input>
        </el-form-item>
        <el-form-item label="用户密码" prop="password">
          <el-input
            placeholder="请输入用户密码"
            show-password
            v-model="addForm.password"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPassword">
          <el-input
            placeholder="请再次输入密码进行确认"
            show-password
            v-model="addForm.checkPassword"
          ></el-input>
        </el-form-item>
        <el-form-item label="账户状态" prop="state">
          <el-radio v-model="addForm.state" label="active">激活</el-radio>
          <el-radio v-model="addForm.state" label="invalid">弃用</el-radio>
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
  name: "operator",
  components: {},
  props: {},
  data() {
    let checkPassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.addForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    return {
      searchForm: {
        user: "",
        isactive: "",
        validDate: "",
        registerDate: "",
      },
      addForm: {
        username: "",
        password: "",
        checkPassword: "",
        state: "active",
      },
      addRules: {
        username: [
          { required: true, message: "用户名称为必填项", trigger: "blur" },
          { min: 2, message: "名称需大于两位", trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码为必填项", trigger: "blur" },
        ],
        checkPassword: [{ validator: checkPassword, trigger: "blur" }],
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
      this.$refs[formName].resetFields();
    },
    submitAddForm(formName) {
      console.log(this.addForm);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.addFormVisible = false;
          alert("submit!");
          // this.$refs[formName].resetFields();
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
.operator .el-input__inner {
  width: 120px;
  margin-right: 20px;
}

.operator .el-input__suffix {
  right: 25px !important;
}

.operator .msg-search .el-form-item {
  margin-bottom: 0;
}
</style>