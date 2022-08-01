<template>
  <div class="bg">
    <div class="login-box">
      <el-form
        ref="form"
        :model="form"
        label-width="80px"
        class="login-form"
        :rules="rules"
      >
        <img src="../../assets/images/logo.png" alt="" class="login-logo" />

        <el-form-item prop="loginName">
          <el-input
            v-model="form.loginName"
            prefix-icon="el-icon-mobile-phone"
            placeholder="请输入账号"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="form.password"
            prefix-icon="el-icon-lock"
            placeholder="请输入密码"
            show-password
          />
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            v-model="form.code"
            prefix-icon="el-icon-message"
            placeholder="请输入验证码"
            maxlength="4"
          >
            <template #suffix>
              <img @click="clickFn" class="code-img" :src="imgUrl" alt="" />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-btn" @click="login"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions: mapUserActions, mapState: mapUserState } =
  createNamespacedHelpers("user");
export default {
  data() {
    return {
      form: {
        loginName: "admin",
        password: "admin",
        code: "",
      },
      rules: {
        loginName: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
      },
      randomNumber: 0,
    };
  },

  created() {
    this.randomNumber = Math.random() + 1;
    this.getImageCode(this.randomNumber);
  },

  methods: {
    ...mapUserActions(["getImageCode", "getLogin"]),
    login() {
      this.$refs.form.validate((vail) => {
        if (!vail) return;
        const loginData = {
          clientToken: this.randomNumber,
          code: this.form.code,
          loginName: this.form.loginName,
          loginType: 0,
          password: this.form.password,
        };
        this.getLogin(loginData);
      });
    },
    clickFn() {
      this.getImageCode(this.randomNumber);
    },
  },
  computed: {
    ...mapUserState(["imgUrl", "errMsg"]),
  },
};
</script>

<style scoped lang="scss">
.bg {
  height: 100%;
  background: url("../../assets/images/loginbg.png");
}

.login-box {
  position: absolute;
  width: 518px;
  height: 388px;
  top: 50%;
  left: 50%;
  margin-top: -194px;
  margin-left: -259px;
  padding: 76px 35px 0;
  box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
  border-radius: 10px;
  background-color: #fff;
}

.login-logo {
  position: absolute;
  width: 96px;
  height: 96px;
  top: -46px;
  left: 50%;
  margin-left: -48px;
}

.login-container {
  width: 100%;
  height: 52px;
  margin-bottom: 24px;
  background: #fff;
  border: 1px solid #e2e2e2;
  border-radius: 4px;
}

::v-deep .el-form-item__content {
  margin-left: 0 !important;
}

::v-deep .el-input__inner {
  width: 446px;
  height: 52px;
}

::v-deep .el-input__icon {
  font-size: 16px;
  height: 110%;
}

.code-img {
  position: relative;
  right: -2px;
  top: 1px;
}

.login-btn {
  width: 100%;
  height: 52px;
  background: linear-gradient(262deg, #2e50e1, #6878f0);
  opacity: 0.91;
  border-radius: 8px;
  color: #fff;
  text-shadow: 0 7px 22px #cfcfcf;
}
</style>
