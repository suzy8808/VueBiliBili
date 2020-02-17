<script>
import FooterBar from '@/components/FooterBar.vue'
import PuzzleVerification from 'vue-puzzle-verification'
export default {
  name: 'Login',
  components: {
    FooterBar,
    PuzzleVerification
  },
  data: function () {
    return {
      isVerificationShow: false,
      puzzleImgList: [
        require('../assets/img/puzzle_verification.jpg')
      ]
    }
  },
  methods: {
    onSignIn: function () {
      let container = document.getElementById('dowebok')
      container.classList.remove('right-panel-active')
    },
    onSignUp: function () {
      let container = document.getElementById('dowebok')
      container.classList.add('right-panel-active')
    },
    handleSuccess () {
      alert('验证成功了')
      this.isVerificationShow = false
    },
    login () {
      this.isVerificationShow = true
    }
  }
}
</script>
<template>
  <el-container style="height:100%"
                class="container-class">
    <el-header></el-header>
    <el-main>
      <el-row>
        <el-col :span="2">
          <p></p>
        </el-col>
        <el-col :span="20">
          <div class="puzzle-box">
            <PuzzleVerification v-model="isVerificationShow"
                                :puzzleImgList="puzzleImgList"
                                :height="150"
                                :width="300"
                                :blockSize="30"
                                :deviation="4"
                                blockType="puzzle"
                                :onSuccess="handleSuccess" />
          </div>
          <div class="dowebok"
               id="dowebok">
            <div class="form-container sign-up-container">
              <form action="#">
                <h1>注册</h1>
                <!-- <div class="social-container">
                  <a href="#"
                     class="social"><i class="fab fa-facebook-f"></i></a>
                  <a href="#"
                     class="social"><i class="fab fa-google-plus-g"></i></a>
                  <a href="#"
                     class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span>或使用邮箱注册</span> -->
                <input type="text"
                       placeholder="昵称">
                <input type="email"
                       placeholder="电子邮箱">
                <input type="password"
                       placeholder="密码">
                <button>注册</button>
              </form>
            </div>
            <div class="form-container sign-in-container">
              <form action="#">
                <h1>登录</h1>
                <!-- <div class="social-container">
                  <a href="#"
                     class="social"><i class="fab fa-facebook-f"></i></a>
                  <a href="#"
                     class="social"><i class="fab fa-google-plus-g"></i></a>
                  <a href="#"
                     class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span>或使用您的帐号</span> -->
                <input type="email"
                       placeholder="电子邮箱">
                <input type="password"
                       placeholder="密码">
                <a href="#">忘记密码？</a>
                <button @click.prevent="login">登录</button>

              </form>
            </div>
            <div class="overlay-container">
              <div class="overlay">
                <div class="overlay-panel overlay-left">
                  <h1>已有帐号？</h1>
                  <p>请使用您的帐号进行登录</p>
                  <button class="ghost"
                          id="signIn"
                          @click="onSignIn">登录</button>
                </div>
                <div class="overlay-panel overlay-right">
                  <h1>没有帐号？</h1>
                  <p>立即注册加入我们，和我们一起开始旅程吧</p>
                  <button class="ghost"
                          id="signUp"
                          @click="onSignUp">注册</button>
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="2">
          <p></p>
        </el-col>

      </el-row>
    </el-main>
    <el-footer style="height:auto">
      <footer-bar></footer-bar>
    </el-footer>
  </el-container>

</template>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  font-family: "Montserrat", sans-serif;
  /* background: #f6f5f7; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: -20px 0 50px;
}
.puzzle-box {
  position: absolute;
  top: 0px;
  right: 560px;
  z-index: 999;
  box-shadow: 0 0 5px 1px rgba(158, 179, 193, 0.5);
  border-radius: 20px;
  /* bottom: 0;
       left: 0; */
}
.container-class {
  background-image: url("../assets/img/login_bg.jpg");
  background-size: cover;
}

h1 {
  font-weight: bold;
  margin: 0;
}

p {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}

span {
  font-size: 12px;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

.dowebok {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
  float: right;
}

.form-container form {
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.social-container {
  margin: 20px 0;
}

.social-container a {
  border: 1px solid #ddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}

.social-container a:hover {
  background-color: #eee;
}

.form-container input {
  background: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  outline: none;
}

button {
  border-radius: 20px;
  border: 1px solid #409eff;
  background: #409eff;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  cursor: pointer;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background: transparent;
  border-color: #fff;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.sign-up-container {
  left: 0;
  width: 50%;
  z-index: 1;
  opacity: 0;
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.overlay {
  background: #409eff;
  background: linear-gradient(to right, #409eff, #ff0000) no-repeat 0 0 / cover;
  color: #fff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateY(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-panel {
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  height: 100%;
  width: 50%;
  text-align: center;
  transform: translateY(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-right {
  right: 0;
  transform: translateY(0);
}

.overlay-left {
  transform: translateY(-20%);
}

/* Move signin to right */
.dowebok.right-panel-active .sign-in-container {
  transform: translateY(100%);
}

/* Move overlay to left */
.dowebok.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

/* Bring signup over signin */
.dowebok.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
}

/* Move overlay back to right */
.dowebok.right-panel-active .overlay {
  transform: translateX(50%);
}

/* Bring back the text to center */
.dowebok.right-panel-active .overlay-left {
  transform: translateY(0);
}

/* Same effect for right */
.dowebok.right-panel-active .overlay-right {
  transform: translateY(20%);
}
</style>
