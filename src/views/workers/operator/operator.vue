<template>
  <div class="operator">
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
        <span><i class="el-icon-search"></i> 数据检索</span>
      </div>

      <el-form
        :inline="true"
        :model="searchForm"
        size="mini"
        ref="searchForm"
        class="demo-form-inline msg-search"
      >
        <el-form-item label="标注员账号:" prop="account">
          <el-input
            v-model="searchForm.account"
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
            value-format="yyyy-MM-dd"
          ></el-date-picker>
        </el-form-item>

        <el-form-item label="注册时间:" prop="registerDate">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="searchForm.registerDate"
            style="width: 100%"
            value-format="yyyy-MM-dd"
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
    </el-card>

    <br />

    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
        <span><i class="el-icon-document-copy"></i> 数据详情</span>
      </div>

      <el-button @click="addFormVisible = true" type="primary">
        <i class="el-icon-user"></i>
        新增标注员
      </el-button>

      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="1"
        :page-size="10"
        layout="total, prev, pager, next, jumper"
        :total="operatorCount"
      >
      </el-pagination>

      <el-table :data="operatorData" style="width: 100%">
        <el-table-column
          v-for="(item, index) in tableHeader"
          :key="index"
          :prop="item[0]"
          :label="item[1]"
          :width="tableHeaderWidth(item[0])"
        ></el-table-column>

        <el-table-column prop="leader.nick_name" label="创建者" width="120">
        </el-table-column>

        <el-table-column width="180" label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
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
              placeholder="不填写视为未激活"
              v-model="addForm.expire_time"
              style="width: 100%"
              :picker-options="pickerOptions"
              value-format="yyyy-MM-dd HH:mm:ss"
            >
              ></el-date-picker
            >
          </el-col>
        </el-form-item>

        <el-form-item label="管理员" prop="leader">
          <el-select
            v-model="addForm.leader"
            filterable
            placeholder="输入昵称可模糊搜索"
          >
            <el-option
              v-for="item in leaderDrop"
              :key="item.id"
              :label="item.nick_name"
              :value="item.id"
            >
              <span style="float: left">{{ item.nick_name }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px"
                >手机号 - {{ item.account }}</span
              >
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
        <el-form-item label="修改手机号" prop="account">
          <el-input
            placeholder="手机号即为登陆账号"
            v-model="changeForm.account"
          ></el-input>
        </el-form-item>

        <el-form-item label="修改到期时间" prop="expire_time">
          <el-col>
            <el-date-picker
              type="date"
              placeholder="请选择到期时间"
              v-model="changeForm.expire_time"
              style="width: 100%"
              :picker-options="pickerOptions"
              value-format="yyyy-MM-dd HH:mm:ss"
            >
              ></el-date-picker
            >
          </el-col>
        </el-form-item>

        <el-form-item
          v-if="$store.identity === 'admin'"
          label="管理员"
          prop="leader"
        >
          <el-select
            v-model="changeForm.leader"
            filterable
            placeholder="输入昵称可模糊搜索"
          >
            <el-option
              v-for="item in leaderDrop"
              :key="item.id"
              :label="item.nick_name"
              :value="item.id"
            >
              <span style="float: left">{{ item.nick_name }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px"
                >手机号 - {{ item.account }}</span
              >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item style="display: none" prop="id">
          <el-input v-model="changeForm.id"></el-input>
        </el-form-item>
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
import { changeOperator } from "@/network/webApi/workersManagement/operator.js";
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

    let nickName = (rule, value, callback) => {
      // console.log(rule, value, callback);
      let reg = new RegExp("^[A-Za-z\u4e00-\u9fa5]+$");
      if (!reg.test(value)) {
        callback(new Error("请输入汉字或英文字母"));
      } else {
        callback();
      }
    };

    let accountNum = (rule, value, callback) => {
      let reg = new RegExp("^[0-9]+$");
      if (!reg.test(value)) {
        callback(new Error("请输入数字"));
      } else {
        callback();
      }
    };

    return {
      addFormVisible: false,
      changeFormVisible: false,
      operatorOffset: 0,
      operatorCount: 0,

      searchForm: {
        account: "",
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
          { validator: nickName, trigger: "blur" },
        ],
        account: [
          { validator: accountNum, trigger: "blur" },
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
        leader: "",
        id: "",
      },
      changeRules: {
        account: [
          { validator: accountNum, trigger: "blur" },
          { required: true, message: "用户手机号为必填项", trigger: "blur" },
          { max: 11, min: 11, message: "请输入11位手机号码", trigger: "blur" },
        ],
        leader: [
          { required: true, message: "管理员为必填项", trigger: "blur" },
        ],
        expire_time: [
          {
            required: true,
            message: "到期时间为必填，账户状态可单独选择",
            trigger: "blur",
          },
        ],
      },

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
              if (this.addForm.expire_time) {
                this.addForm.state = "active";
              }
              createOperators(this.addForm, this.isUpdateTable).then((res) => {
                if (res.code == 200) {
                  this.operatorCount += 1;
                  this.$message.success("创建成功");
                  if (this.isUpdateTable) {
                    switch (res.data.state) {
                      case "active":
                        res.data.state = "有效";
                        break;
                      case "invalid":
                        res.data.state = "无效";
                        break;
                    }
                    this.operatorData.push(res.data);
                  }
                  this.addFormVisible = false;
                  this.resetForm(formName);
                }
                if (res.code == 403) {
                  this.$message.warning(res.data);
                }
              });
              break;
            case "changeForm":
              console.log(this.changeForm);
              changeOperator(this.changeForm).then((res) => {
                res.forEach((item) => {
                  switch (item.state) {
                    case "active":
                      item.state = "有效";
                      break;
                    case "invalid":
                      item.state = "无效";
                      break;
                  }
                });

                this.operatorData = res;
              });
              this.changeFormVisible = false;
              break;
            case "searchForm":
              console.log("searchForm");
              break;
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleEdit(index, row) {
      this.changeFormVisible = true;
      this.changeForm.account = row.account;
      this.changeForm.leader = row.leader.id;
      this.changeForm.expire_time = row.expire_time;
      this.changeForm.id = row.id;
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    tableHeaderWidth(field) {
      if (field == "register_time" || field == "expire_time") {
        return 180;
      }
    },
    handleCurrentChange(val) {
      this.operatorOffset = 10 * (val - 1);
      getOperators({
        ordering: "register_time",
        offset: this.operatorOffset,
      }).then((res) => {
        res.data.forEach((item) => {
          switch (item.state) {
            case "active":
              item.state = "有效";
              break;
            case "invalid":
              item.state = "无效";
              break;
          }
        });
        this.operatorData = res.data;
      });
    },
  },
  watch: {},
  computed: {
    isUpdateTable() {
      if (this.operatorData.length < 10) {
        return true;
      } else {
        return false;
      }
    },
  },
  created() {
    getOperators({
      ordering: "register_time",
      offset: this.operatorOffset,
    }).then((res) => {
      console.log(res);
      this.operatorCount = res.count;
      this.tableHeader = res.field_header;
      res.data.forEach((item) => {
        switch (item.state) {
          case "active":
            item.state = "有效";
            break;
          case "invalid":
            item.state = "无效";
            break;
        }
      });
      this.operatorData = res.data;
    });
    getLeaders({ data_category: "drop" }).then((res) => {
      this.leaderDrop = res.data;
    });
  },
  mounted() {},
};
</script>

<style>
.operator .el-form--inline .el-input__inner {
  width: 120px;
  margin-right: 20px;
}

.operator .el-form--inline .el-input__suffix {
  right: 25px !important;
}

.operator .msg-search .el-form-item {
  margin-bottom: 0;
}

.operator .el-pagination {
  padding-top: 20px;
}

.operator .el-dialog {
  width: 500px;
}

.operator .el-pager li.active {
  color: var(--color-corners);
}

.operator .el-pager li:hover {
  color: var(--color-text-hover);
}

.operator .el-pagination button:hover {
  color: var(--color-text-hover);
}

.operator .el-pagination button:disabled {
  color: #ff4b3d;
}

.operator .el-table {
  margin-top: 10px;
}
</style>