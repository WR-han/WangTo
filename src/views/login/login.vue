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
            <el-form-item prop="username">
              <el-input
                placeholder="请输入用户名称"
                v-model="loginForm.username"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                placeholder="请输入用户密码"
                show-password
                v-model="loginForm.password"
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
import { Login } from "@/network/webApi/login.js";
export default {
  name: "login",
  components: {},
  props: {},
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      loginRules: {
        username: [
          { required: true, message: "用户名称为必填项", trigger: "blur" },
          { min: 2, message: "名称需大于两位", trigger: "blur" },
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
          console.log(this.loginForm);
          Login(this.loginForm.username, this.loginForm.password).then(
            (succ) => {
              // console.log(succ);
              switch (succ.code) {
                case 200:
                  if (this.loginForm.username == this.loginForm.password) {
                    this.$notify({
                      title: "提醒",
                      message: "您的账号密码为初始密码，请点击\"账户信息\"修改",
                      duration: 0,
                      type: 'warning'
                    });
                  }
                  this.$store.commit("login", succ.data.token);
                  this.$router.replace("/home");
                  this.$message({
                    message: "登陆成功",
                    type: "success",
                  });
                  break;
                case 401:
                  console.log(succ.msg);
                  this.$message({
                    message: succ.data,
                    type: "error",
                  });
                  break;
              }
            },
            (err) => {
              alert(`网络错误 - ${err}`);
            }
          );
          // this.$store.commit("login", "succ.data.token");
          // this.$router.replace("/home");
          // this.$message({
          //   message: "登陆成功",
          //   type: "success",
          // });
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