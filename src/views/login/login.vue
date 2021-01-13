<template>
  <div class="login">
    <el-card class="box-card login-box">
      <div slot="header">
        <span>望途标注数据后台登录</span>
      </div>
      <div class="login-box-main">
        <img
          src="http://canadasummer.cn/static/images/1/123.png"
          alt=""
          class="login-bg"
        />

        <div class="login-form-box">
          <el-form
            class="login-form"
            :model="loginForm"
            ref="loginForm"
            :rules="loginRules"
            status-icon
          >
            <el-form-item prop="account">
              <el-input
                placeholder="请输入手机号/账号"
                v-model="loginForm.account"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                placeholder="请输入用户密码"
                show-password
                v-model="loginForm.password"
                autocomplete="new-password"
              ></el-input>
            </el-form-item>
          </el-form>
          <el-button type="primary" @click="loginSubmit('loginForm')"
            >确 定</el-button
          >
        </div>
      </div>
    </el-card>

    <!-- <button @click="home">123</button> -->
  </div>
</template>

<script>
import { Login } from "@/network/webApi/login/login.js";
export default {
  name: "login",
  components: {},
  props: {},
  data() {
    let accountNum = (rule, value, callback) => {
      let reg = new RegExp("^[0-9]+$");
      if (!reg.test(value)) {
        callback(new Error("请输入数字"));
      } else {
        callback();
      }
    };

    return {
      loginForm: {
        account: "",
        password: "",
      },
      loginRules: {
        account: [
          { validator: accountNum, trigger: "blur" },
          { required: true, message: "用户手机号为必填项", trigger: "blur" },
          { max: 11, min: 11, message: "请输入11位手机号码", trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码为必填项", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    home() {
      this.$router.replace("/home");
    },
    loginSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          Login(this.loginForm.account, this.loginForm.password).then(
            (succ) => {
              switch (succ.code) {
                case 200:
                  if (this.loginForm.account == this.loginForm.password) {
                    this.$notify({
                      title: "提醒",
                      message: '您的账号密码为初始密码，请点击"账户信息"修改',
                      duration: 0,
                      type: "warning",
                    });
                  }
                  this.$router.replace("/home");
                  this.$message({
                    message: "登陆成功",
                    type: "success",
                  });
                  break;
                case 401:
                  this.$message({
                    message: succ.data,
                    type: "error",
                  });
                  break;
              }
            }
          );
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

<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.login-box {
  width: 700px;
  position: relative;
}

.el-card__body {
  padding-left: 200px !important;
}

.login-box-main {
  display: flex;
  justify-content: flex-end;
}

.login-bg {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 70%;
}
.login-form-box {
  background: var(--corners) !important;
  background-repeat: no-repeat !important;
  background-size: 3px 1px, 1px 3px !important;

  background: var(--color-dark-background);
  position: relative;
  width: 300px;
  padding: 80px 20px;
  border: 1px solid var(--color-line) !important;
}
.login-form {
  position: relative;
  z-index: 10;
}
.login-box .el-button {
  position: relative;
  z-index: 10;
  width: 100%;
  margin-top: 10px;
}
</style>