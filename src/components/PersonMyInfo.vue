<script>
export default {
  name: 'PersonMyInfo',
  data: function () {
    return {
      userInfo: {
        uid: 'sile_8989898989',
        nickName: '道乐菌',
        realName: 'bobo',
        manifesto: '在那之前，好好活着。',
        sex: 0,
        birth: this.$moment('1996-04-28', 'YYYY-MM-DD'),
        tele: '',
        email: '',
        address: { province: '110000', city: '110000', area: '110101', town: null }
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit form')
    }
  }
}
</script>

<template>
  <div>
    <el-row class="item-line">
      <el-form ref="form"
               :model="userInfo"
               label-width="100px">
        <el-form-item label="昵称：">
          <el-input v-model="userInfo.nickName"
                    class="normal input-class"></el-input>
        </el-form-item>
        <el-form-item label="用户ID：">
          <el-tag type="info"
                  class="normal tag"
                  :size="'mini'">{{userInfo.uid}}</el-tag>
        </el-form-item>
        <el-form-item label="真实姓名：">
          <el-input v-model="userInfo.realName"
                    class="normal input-class"></el-input>
        </el-form-item>
        <el-form-item label="我的签名：">
          <el-input type="textarea"
                    v-model="userInfo.manifesto"
                    class="normal textarea"></el-input>
        </el-form-item>
        <el-form-item label="性别："
                      class="normal">
          <el-radio-group v-model="userInfo.sex">
            <el-radio :label="0">男</el-radio>
            <el-radio :label="1">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="出生日期：">
          <el-date-picker type="date"
                          placeholder="选择日期"
                          v-model="userInfo.birth"
                          class="normal input-class"></el-date-picker>
        </el-form-item>
        <el-form-item prop="email"
                      label="邮箱："
                      :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]">
          <el-input v-model="userInfo.email"
                    class="normal input-class"></el-input>
        </el-form-item>
        <el-form-item label="手机号码：">
          <el-input type="text"
                    placeholder="请输入号码 亲~~"
                    v-model="userInfo.tele"
                    maxlength="13"
                    show-word-limit
                    class="normal input-class">
          </el-input>
        </el-form-item>
        <el-form-item label="地址：">
          <v-region v-model="userInfo.address"
                    class="normal"></v-region>
        </el-form-item>
        <div style="border-bottom: 1px solid #e5e9ef;margin-bottom:20px"></div>
        <el-button type="primary"
                   @click="onSubmit">保存</el-button>
      </el-form>
    </el-row>
  </div>
</template>

<style scoped>
.item-line {
  padding-top: 20px;
  padding-bottom: 20px;
}

.normal {
  display: flex;
}
.tag {
  width: 115px;
}
.input-class {
  width: 200px;
}
.textarea {
  width: 400px;
  height: 150px;
}
</style>
