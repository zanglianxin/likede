<template>
  <div class="bg">
    <div class="login-box">
      <el-form ref="form" :model="form" label-width="80px" class="login-form">
        <img src="../../assets/images/logo.png" alt="" class="login-logo">

        <el-form-item>
          <el-input
            v-model="form.usernama"
            prefix-icon="el-icon-mobile-phone"
            placeholder="请输入账号"
          />
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" prefix-icon="el-icon-lock" placeholder="请输入密码" show-password/>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.code" prefix-icon="el-icon-message" placeholder="请输入验证码" maxlength="4">
            <template #suffix>
              <img class="code-img" src="https://likede2-java.itheima.net/api/user-service/user/imageCode/a3pTFSBe4E6kWICgKcMnRAvndPFsuibK" alt="">
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-btn">登录</el-button>
        </el-form-item>

      </el-form>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        usernama: '',
        password: '',
        code: ''
      }
    }
  },

  created() {

  },

  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>

<style scoped lang='scss'>
  .bg {
    height: 100%;
    background: url('../../assets/images/loginbg.png');
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
    background: linear-gradient(262deg,#2e50e1,#6878f0);
    opacity: .91;
    border-radius: 8px;
    color: #fff;
    text-shadow: 0 7px 22px #cfcfcf;
}
</style>
