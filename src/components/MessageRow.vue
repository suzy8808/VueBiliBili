<script>
import HeadPicture from '@/components/HeadPicture.vue'
export default {
  props: ['message'],
  components: {
    HeadPicture
  },
  name: 'MessageRow',
  methods: {
    handleDate (date) {
      return this.$moment(date, 'YYYYMMDDHHmmss').format('YYYY年MM月DD日 HH:mm')
    }
  }
}
</script>
<template>
  <div class="message-row">
    <div class="head-picture">
      <head-picture :userInfo="message.user"
                    :size="46"></head-picture>
    </div>
    <div class="info-div">
      <div class="nick-name">{{message.user.nickName}}</div>
      <div class="reply">回复 ：{{message.content}}</div>
      <div class="from-reply">
        <div class="left-divider"></div>{{message.fromContent}}
      </div>
      <div class="info">
        <span>{{handleDate(message.createTime)}}</span>
        <span style="margin-left:20px;"
              class="common-a"><i class="fa fa-comment-o"></i>回复</span>
        <span style="margin-left:20px;"
              class="common-a"><i class="fa fa-trash-o"></i>删除</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "../assets/css/common.css";
.message-row {
  display: flex;
  width: 100%;
}
.head-picture {
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 20px;
}
.info-div {
  width: 100%;
  text-align: left;
  border-bottom: 1px solid #e5e9ef;
  padding-bottom: 20px;
}
.nick-name {
  font-size: 14px;
  margin-top: 20px;
  color: #222;
  font-weight: 600;
  padding: 5px;
}
.reply {
  font-size: 14px;
  color: #222;
  padding: 5px;
}
.from-reply {
  font-size: 12px;
  color: #99a2aa;
  padding: 5px;
  display: flex;
}
.left-divider {
  border-left: #eee 2px solid;
  margin-right: 20px;
}
.info {
  font-size: 12px;
  color: #99a2aa;
  padding: 5px;
}

i {
  margin-right: 5px;
}
</style>
