<script>
export default {
  name: 'PSSetting',
  data: function () {
    return {
      collectSet: true,
      attentionSet: true,
      userInfoSet: true,
      state: ['公开', '隐藏']
    }
  }
}
</script>
<template>
  <div class="ps-setting">
    <div class="setting-title">
      <h3>隐私设置</h3>
    </div>
    <div class="setting">
      <div class="setting-row">
        <span class="label">我的收藏</span>
        <el-switch v-model="collectSet"
                   active-color="#13ce66"
                   inactive-color="#ff4949">
        </el-switch>
        <span class="desc">{{collectSet?state[0]:state[1]}}</span>
      </div>

      <div class="setting-row">
        <span class="label">我的关注</span>
        <el-switch v-model="attentionSet"
                   active-color="#13ce66"
                   inactive-color="#ff4949">
        </el-switch>
        <span class="desc">{{attentionSet?state[0]:state[1]}}</span>
      </div>

      <div class="setting-row">
        <span class="label">我的资料</span>
        <el-switch v-model="userInfoSet"
                   active-color="#13ce66"
                   inactive-color="#ff4949">
        </el-switch>
        <span class="desc">{{userInfoSet?state[0]:state[1]}}</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.ps-setting {
  background: #fff;
  box-shadow: 0 0 0 1px #eee;
  border-radius: 4px;
  min-height: 450px;
  padding-left: 20px;
}
.setting-title {
  font-weight: 400;
  text-align: left;
  padding-top: 10px;
}
/* .setting {
} */
.setting-row {
  display: flex;
  margin-top: 20px;
  align-items: center;
}
.label {
  font-size: 14px;
  color: #222;
  margin-right: 100px;
}
.desc {
  color: #99a2aa;
  font-size: 12px;
  margin-left: 5px;
}
</style>
