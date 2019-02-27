<template>
  <div class="page-register">
    <div class="header">
      <header>
        <a class="site-logo" href="http://www.meituan.com">美团</a>
        <div class="login">
          <span class="bold">已有美团账号？</span>
          <router-link :to="{name: 'login'}">登录</router-link>
        </div>
      </header>
    </div>
    <div class="content">
      <el-form
        :model="registerForm"
        status-icon
        :rules="rules"
        ref="registerForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input type="text" v-model="registerForm.userName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="registerForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="rePassword">
          <el-input type="password" v-model="registerForm.rePassword" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('registerForm')">同意以下协议并注册</el-button>
          <a class="f1" href="http://www.meituan.com/about/terms" target="_blank">《美团网用户协议》</a>
        </el-form-item>
      </el-form>
    </div>
    <footer class="footer--mini">
      <p class="copyright">
        ©<a class="f1" href="https://www.meituan.com">meituan.com</a>&nbsp;
        <a class="f1" target="_blank" href="http://www.miibeian.gov.cn/">京ICP证070791号</a>&nbsp;
        <span class="f1">京公网安备11010502025545号</span>
      </p>
    </footer>
  </div>
</template>
<script>
  import api from '@/api/index.js'
  export default{
      data(){
        const validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else if(value.length <= 16 && value.length >= 4){
            const reg = /^[a-zA-Z][a-zA-Z0-9_]{3,16}$/g;
            if(reg.test(value)){
              callback()

            }else {
              callback(new Error('密码必须为4-16位的字母数字或下划线组成'))
            }
          }
          else{
            if (this.registerForm.rePassword !== '') {
              this.$refs.registerForm.validateField('rePassword');
            }
            callback();
          }
        };
        const validatePass2 = (rule, value, callback) => {
          if(value === ''){
            callback(new Error('请再次输入密码'))
          } else if (value !== this.registerForm.password){
                callback(new Error('密码必须一致'))
          } else {
            callback()
          }
        };
        const vallidateName = (rule, value, callback) => {
              if(value === ''){
                callback(new Error('请输入用户名'))
              } else {
                  const reg = /^[a-zA-Z][a-zA-Z0-9_]{3,16}$/g;
                const flag = reg.test(value)
                  if( this.registerForm.userName.length < 4 || this.registerForm.userName.length > 16 || flag){
                      callback()
                  }else {
                    callback(new Error('密码必须为4-16位的字母数字或下划线组成'))
                  }
              }
        }
        return {
          registerForm:{
            userName:'',
            password:'',
            rePassword:''
          },
          rules:{
            password: [
              { validator: validatePass, trigger: 'blur' }
            ],
            rePassword: [
              { validator: validatePass2, trigger: 'blur' }
            ],
            userName:{
              validator: vallidateName, trigger: 'blur'
            }
          }
        }
      },
      methods:{
  
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              console.log(this.registerForm)
              api.register({
                params: this.registerForm
              }).then((res) => {
                console.log(res);
                if (res.data.status == 'success') {
                  this.$message({
                    message: res.data.msg,
                    type: 'success'
                  });
                  this.$router.push({name: 'login'})
                }
              })
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        }
      }
  }
</script>
<style lang="scss">
  @import '@/assets/css/register/index.scss';
</style>
