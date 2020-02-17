<script>
import HeadPicture from '@/components/HeadPicture.vue'
export default {
  name: 'Comment2Card',
  props: ['comment'],
  components: {
    HeadPicture
  },
  data: function () {
    return {
      isLike: false,
      isDislike: false
    }
  },
  methods: {
    handleDate (date) {
      return this.$moment(date, 'YYYYMMDDHHmmss').format('YYYY-MM-DD HH:mm')
    },
    handleLike () {
      this.isLike = !this.isLike
      if (this.isLike) {
        this.isDislike = false
        this.$message({
          message: '点赞成功',
          type: 'success'
        })
      }
    },
    handleDislike () {
      this.isDislike = !this.isDislike
      if (this.isDislike) {
        this.isLike = false
      }
    },
    handleReply (user) {
      this.$emit('handleReply', user)
    },
    submitComment2Form () {
      alert(this.comment2Form.comment2)
    }
  }
}
</script>
<template>
  <div class="comment2">
    <div class="content">
      <head-picture :userInfo="comment.fromUser"
                    :size="24"></head-picture>
      <span class="nick-name">{{comment.fromUser.nickName}} <el-tag type="danger"
                style="margin-left:5px;"
                :size="'mini'">LV{{comment.fromUser.level}}</el-tag></span>

      &nbsp;回复&nbsp; <span class="to-user">@{{comment.toUser.nickName}}</span>：{{comment.content}}
    </div>
    <div class="tools">
      <span class="tool-item">
        {{handleDate(comment.createTime)}}
      </span>
      <span :class="isLike?'tool-item-active icon-i':'tool-item icon-i'"
            @click="handleLike()">
        <i :class="isLike?'fa fa-thumbs-up':'fa fa-thumbs-o-up'"></i>
        {{comment.like}}</span>
      <span :class="isDislike?'tool-item-active icon-i':'tool-item icon-i'"
            @click="handleDislike()">
        <i :class="isDislike?'fa fa-thumbs-down':'fa fa-thumbs-o-down'"></i>
        {{comment.dislike}}</span>
      <span class="tool-item"
            @click="handleReply(comment.fromUser)">
        回复
      </span>
    </div>
  </div>
</template>
<style scoped>
/* .content2 {
} */
.content {
  display: flex;
  margin-top: 20px;
  margin-bottom: 5px;
  font-size: 14px;
  color: #222;
  align-items: center;
}
.nick-name {
  font-size: 12px;
  color: #99a2aa;
  margin-left: 10px;
}
.to-user {
  color: #00a1d6;
}
.tools {
  display: flex;
  margin-bottom: 10px;
}
.tool-date {
  font-size: 12px;
  color: #99a2aa;
  text-align: left;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
i {
  margin-right: 5px;
  font-size: 18px;
}
.icon-i {
  line-height: 20px;
}
.tool-item {
  font-size: 12px;
  color: #99a2aa;
  margin-right: 60px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tool-item-active {
  font-size: 12px;
  color: #00b5e5;
  margin-right: 60px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tool-item:hover {
  color: #00b5e5;
}
</style>
