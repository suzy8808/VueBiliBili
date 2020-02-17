<script>
export default {
  name: 'MessageSetting',
  data: function () {
    return {
      messAlert: '1'
    }
  }
}
</script>
<template>
  <div>
    <div class="message-alert">
      <div>消息提醒<span class="desc">（关闭后，消息将不再进行提醒）</span></div>
      <div class="radio">
        <el-radio v-model="messAlert"
                  label="1">开启</el-radio>
        <el-radio v-model="messAlert"
                  label="2">关闭</el-radio>
      </div>
    </div>
  </div>
</template>
<style scoped>
.message-alert {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #fff;
  justify-content: space-between;
  padding: 16px;
  font-size: 15px;
  color: #333333;
  border-radius: 4px;
}
.desc {
  color: #999999;
}
.radio {
  margin-top: 30px;
}
</style>
