<script>
export default {
  name: 'SystemMessage',
  props: ['message'],
  methods: {
    handleDate (date) {
      return this.$moment(date, 'YYYYMMDDHHmmss').format('YYYY年MM月DD日 HH:mm')
    }
  }
}
</script>
<template>
  <div class="system-message">
    <div class="title"><span>{{message.title}}</span><span class="date">{{handleDate(message.createTime)}}</span></div>
    <div class="content">{{message.content}}</div>
  </div>
</template>
<style scoped>
.system-message {
  background: #fff;
  border-radius: 4px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 10px;
}
.title {
  color: #222;
  font-size: 12px;
  font-weight: 600;
  text-align: left;
  padding-top: 5px;
  padding-bottom: 5px;
}
.date {
  font-size: 12px;
  color: #99a2aa;
  font-weight: 500;
  margin-left: 10px;
}
.content {
  color: #222;
  font-size: 12px;
  text-align: left;
}
</style>
