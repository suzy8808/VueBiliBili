<script>
import PuzzleVerification from 'vue-puzzle-verification'
export default {
  components: {
    PuzzleVerification
  },
  data: function () {
    return {
      isVerificationShow: false,
      puzzleImgList: [
        require('../../assets/img/puzzle_verification.jpg')
      ]
    }
  },
  methods: {
    handleSuccess () {
      console.log('验证成功了')
    },
    handleClick () {
      this.isVerificationShow = true
    }
  }
}
</script>
<template>
  <div>
    <div class="login-box">
      <button @click="handleClick()">拼图形滑块</button>
      <div class="puzzle-box">
        <PuzzleVerification v-model="isVerificationShow"
                            :puzzleImgList="puzzleImgList"
                            :height="270"
                            :width="480"
                            :blockSize="60"
                            :deviation="8"
                            blockType="puzzle"
                            :onSuccess="handleSuccess" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.login-box {
  width: 480px;
  height: 270px;
}
.puzzle-box {
  position: absolute;
  /* bottom: 0;
       left: 0; */
}
button {
  color: #fff;
  background-color: #50aad0;
  border-color: #50aad0;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
button:hover {
  border-color: #50aad0;
}
</style>
