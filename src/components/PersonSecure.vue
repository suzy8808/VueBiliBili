<script>
export default {
  name: 'PersonSecure',
  data: function () {
    var validatePass1 = (rule, value, callback) => {
      console.log(value)

      if (!value) {
        callback(new Error('请输入旧密码'))
      } else if (value !== this.oldpwd) {
        callback(new Error('旧密码输入有误(Ｔ▽Ｔ)'))
      } else {
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入新密码'))
      } else if (value === this.resetForm.oldpwd) {
        callback(new Error('与旧密码相同(Ｔ▽Ｔ)'))
      } else if (value.toString().length < 8 || value.toString().length > 30) {
        callback(new Error('密码长度为6 - 18个字符(Ｔ▽Ｔ)'))
      } else {
        callback()
      }
    }
    var validatePass3 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.resetForm.newpwd) {
        callback(new Error('两次输入密码不一致!(Ｔ▽Ｔ)'))
      } else {
        callback()
      }
    }
    return {
      oldpwd: 'password',
      secure: {
        secureLevel: 0,
        secureStatus: 'exception',
        secureMsg: '弱爆了'
      },

      // 重置密码
      resetForm: {
        oldpwd: '',
        newpwd: '',
        renewpwd: ''
      },
      resetFormRules: {
        oldpwd: [
          { required: true, validator: validatePass1, trigger: 'blur' }
        ],
        newpwd: [
          { required: true, validator: validatePass2, trigger: 'blur' }
        ],
        renewpwd: [
          { required: true, validator: validatePass3, trigger: 'blur' }
        ]
      }

    }
  },
  methods: {
    onSubmit () {

    },
    newpwdChange () {
      this.secure.secureLevel = 0
      let hasNum = false
      let hasLower = false
      let hasUpper = false
      let hasOther = false
      console.log(this.resetForm.newpwd.split(''))

      this.resetForm.newpwd.split('').forEach(element => {
        if (element >= '0' && element <= '9') {
          if (!hasNum) {
            this.secure.secureLevel += 25
            hasNum = true
          }
          return true
        }
        if (element >= 'a' && element <= 'z') {
          if (!hasLower) {
            this.secure.secureLevel += 25
            hasLower = true
          }
          return true
        }
        if (element >= 'A' && element <= 'Z') {
          if (!hasUpper) {
            this.secure.secureLevel += 25
            hasUpper = true
          }
          return true
        }
        if (element && !hasOther) {
          if (!hasOther) {
            this.secure.secureLevel += 25
            hasOther = true
          }
          return true
        }
      })
      console.log(this.secure.secureLevel)

      if (this.secure.secureLevel <= 25) {
        this.secure.secureStatus = 'exception'
        this.secure.secureMsg = '弱爆了'
      } else if (this.secure.secureLevel <= 50) {
        this.secure.secureStatus = 'warning'
        this.secure.secureMsg = '不够格'
      } else if (this.secure.secureLevel <= 75) {
        this.secure.secureStatus = null
        this.secure.secureMsg = '差点意思~'
      } else {
        this.secure.secureStatus = 'success'
        this.secure.secureMsg = '固若金汤'
      }
    }
  }
}
</script>

<template>
  <div>
    <el-row class="item-line">
      <el-col :span="12">
        <el-form :model="resetForm"
                 status-icon
                 :rules="resetFormRules"
                 ref="resetForm"
                 label-width="100px">
          <el-form-item label="旧密码："
                        prop="oldpwd">
            <el-input type="password"
                      v-model="resetForm.oldpwd"
                      auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="新密码："
                        prop="newpwd">
            <el-input type="password"
                      v-model="resetForm.newpwd"
                      @blur="newpwdChange"
                      auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码："
                        prop="renewpwd">
            <el-input type="password"
                      v-model="resetForm.renewpwd"
                      auto-complete="off"></el-input>
          </el-form-item>
        </el-form>

      </el-col>
      <el-col :span="12">
        <div class="process-div">
          <el-progress :text-inside="false"
                       :stroke-width="20"
                       :percentage="secure.secureLevel"
                       class="process"
                       :status="secure.secureStatus"></el-progress>
          <span class="process-level">{{secure.secureMsg}}</span>
        </div>
      </el-col>
    </el-row>
    <el-row class="submit-div">
      <el-button type="primary"
                 @click="onSubmit">修改</el-button>
    </el-row>
  </div>
</template>

<style scoped>
.item-line {
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e5e9ef;
}
.submit-div {
  padding-top: 20px;
  padding-bottom: 20px;
}
.process-div {
  margin-top: 70px;
  margin-left: 20px;
  display: flex;
}
.process {
  width: 80%;
}
.process-level {
  margin-left: 5px;
}

.tag {
  width: 115px;
}
</style>
