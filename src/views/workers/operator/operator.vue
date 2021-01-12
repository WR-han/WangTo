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
            <el-button type="primary" @click="submitForm('searchForm')"
              >查询</el-button
            >
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
        <el-table :data="operatorData" style="width: 100%">
          <el-table-column
            v-for="(item, index) in tableHeader"
            :key="index"
            :prop="item[0]"
            :label="item[1]"
            :width="tableHeaderWidth(item[0])"
          ></el-table-column>

          <el-table-column prop="creator.nick_name" label="创建者" width="120">
          </el-table-column>

          <el-table-column width="180" label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                >编辑</el-button
              >
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>

    <el-dialog title="添加标注员" :visible.sync="addFormVisible">
      <el-form :model="addForm" ref="addForm" :rules="addRules" status-icon>
        <el-form-item label="用户名称" prop="nick_name">
          <el-input
            placeholder="请输入用户名称"
            v-model="addForm.nick_name"
          ></el-input>
        </el-form-item>

        <el-form-item label="手机号" prop="account">
          <el-input
            placeholder="手机号即为登陆账号"
            v-model="addForm.account"
          ></el-input>
        </el-form-item>

        <el-form-item label="用户密码" prop="password">
          <el-input
            placeholder="请输入用户密码"
            show-password
            v-model="addForm.password"
            autocomplete="new-password"
          ></el-input>
        </el-form-item>

        <el-form-item label="确认密码" prop="checkPassword">
          <el-input
            placeholder="请再次输入密码进行确认"
            show-password
            v-model="addForm.checkPassword"
          ></el-input>
        </el-form-item>

        <el-form-item label="到期时间" prop="expire_time">
          <el-col>
            <el-date-picker
              type="date"
              placeholder="不填写默认为未激活 / 无效"
              v-model="addForm.expire_time"
              style="width: 100%"
              :picker-options="pickerOptions"
            ></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item label="管理员" prop="leader">
          <el-select
            v-model="addForm.leader"
            filterable
            placeholder="请选择/输入可搜索"
          >
            <el-option
              v-for="item in leaderDrop"
              :key="item.id"
              :label="item.nick_name"
              :value="item.id"
            >
              <span style="float: left">{{ item.nick_name }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{
                item.account
              }}</span>
            </el-option>
          </el-select>
        </el-form-item>

        <!-- <el-form-item label="账户状态" prop="state">
          <el-radio v-model="addForm.state" label="active">激活</el-radio>
          <el-radio v-model="addForm.state" label="invalid">弃用</el-radio>
        </el-form-item> -->
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addFormVisible = false"
          >取 消</el-button
        >
        <el-button type="primary" @click="submitForm('addForm')"
          >确 定</el-button
        >
      </div>
    </el-dialog>

    <el-dialog title="修改标注员信息" :visible.sync="changeFormVisible">
      <el-form
        :model="changeForm"
        ref="changeForm"
        :rules="changeRules"
        status-icon
      >
        <el-form-item label="用户名称" prop="nick_name">
          <el-input
            placeholder="请输入用户名称"
            v-model="addForm.nick_name"
          ></el-input>
        </el-form-item>

        <el-form-item label="到期时间" prop="expire_time">
          <el-col>
            <el-date-picker
              type="date"
              placeholder="不填写默认为未激活 / 无效"
              v-model="addForm.expire_time"
              style="width: 100%"
              :picker-options="pickerOptions"
            ></el-date-picker>
          </el-col>
        </el-form-item>

        <!-- <el-select v-model="value" clearable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select> -->
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="changeFormVisible = false"
          >取 消</el-button
        >
        <el-button type="primary" @click="submitForm('changeForm')"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getOperators } from "@/network/webApi/workersManagement/operator.js";
import { createOperators } from "@/network/webApi/workersManagement/operator.js";
import { getLeaders } from "@/network/webApi/workersManagement/leader.js";
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
      addFormVisible: false,
      changeFormVisible: false,

      searchForm: {
        user: "",
        isactive: "",
        validDate: "",
        registerDate: "",
      },

      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now();
        },
        shortcuts: [
          {
            text: "30天后",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 30);
              picker.$emit("pick", date);
            },
          },
          {
            text: "90天后",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 120);
              picker.$emit("pick", date);
            },
          },
          {
            text: "180天后",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 180);
              picker.$emit("pick", date);
            },
          },
          {
            text: "1年后",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 365);
              picker.$emit("pick", date);
            },
          },
        ],
      },
      addForm: {
        nick_name: "",
        password: "",
        checkPassword: "",
        state: "invalid",
        expire_time: null,
        account: "",
        leader: "",
      },
      addRules: {
        nick_name: [
          { required: true, message: "用户名称为必填项", trigger: "blur" },
          { min: 2, message: "名称需大于两位", trigger: "blur" },
        ],
        account: [
          { required: true, message: "用户手机号为必填项", trigger: "blur" },
          { max: 11, min: 11, message: "请输入11位手机号码", trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码为必填项", trigger: "blur" },
        ],
        checkPassword: [{ validator: checkPassword, trigger: "blur" }],
        leader: [
          { required: true, message: "管理员为必填项", trigger: "blur" },
        ],
      },

      changeForm: {
        account: "",
        state: "active",
        expire_time: "",
        creator: "",
      },
      changeRules: {
        account: [
          { required: true, message: "用户手机号为必填项", trigger: "blur" },
          { max: 11, min: 11, message: "请输入11位手机号码", trigger: "blur" },
        ],
        creator: [
          { required: true, message: "管理员为必填项", trigger: "blur" },
        ],
      },

      leaderData: [],
      operatorData: [],
      tableHeader: [],
      leaderDrop: [],
    };
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          switch (formName) {
            case "addForm":
              console.log(this.addForm);
              if (this.addForm.expire_time) {
                this.addForm.state = "active";
              }
              createOperators(this.addForm).then(
                (res) => {
                  if (res.code == 200) {
                    switch (res.data.state) {
                      case "active":
                        res.data.state = "有效";
                        break;
                      case "invalid":
                        res.data.state = "无效";
                        break;
                    }
                    this.operatorData.push(res.data);
                    this.addFormVisible = false;
                    this.resetForm(formName);
                  }
                },
                (err) => {
                  alert(`创建失败 - ${err}`);
                }
              );
              break;
            case "changeForm":
              console.log("changeForm");
              this.changeFormVisible = false;
              break;
            case "searchForm":
              console.log("searchForm");
              break;
          }
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleEdit(index, row) {
      this.changeFormVisible = true;
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    tableHeaderWidth(field) {
      if (field == "register_time" || field == "expire_time") {
        return 180;
      }
    },
  },
  watch: {},
  computed: {},
  created() {
    getOperators({ ordering: "-creator" }).then(
      (res) => {
        this.tableHeader = res.field_header;
        this.operatorData = res.data;
        this.operatorData.forEach((item) => {
          switch (item.state) {
            case "active":
              item.state = "有效";
              break;
            case "invalid":
              item.state = "无效";
              break;
          }
        });
      },
      (err) => {
        alert(err);
      }
    );
    getLeaders({ data_category: "drop" }).then(
      (res) => {
        this.leaderDrop = res.data;
      },
      (err) => {
        console.log(err);
      }
    );
  },
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