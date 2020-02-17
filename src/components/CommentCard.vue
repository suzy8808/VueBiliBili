<script>
import HeadPicture from '@/components/HeadPicture.vue'
import Comment2Card from '@/components/Comment2Card.vue'
export default {
  name: 'CommentCard',
  props: ['user', 'comment'],
  components: {
    HeadPicture,
    Comment2Card
  },
  data: function () {
    return {
      isLike: false,
      isDislike: false,
      comment2Form: {
        comment2: '',
        placeholder: '请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论。'
      },
      showComment2Form: false,
      currentPage: 1,
      showMore: false

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
    handleReply (user, flag) {
      if (flag) {
        this.showComment2Form = !this.showComment2Form
      } else {
        this.showComment2Form = true
      }
      this.comment2Form.placeholder = '回复 @' + user.nickName
      this.$refs.comment2.focus()
    },
    submitComment2Form () {
      alert(this.comment2Form.comment2)
    },
    handleCurrentChange () {

    },
    more () {
      this.showMore = true
    }
  }
}
</script>
<template>
  <div class="user-comment">
    <div class="head-picture-div">
      <head-picture :userInfo="comment.user"
                    :size="48"></head-picture>
    </div>
    <div class="comment-item">
      <div class="nick-name">{{comment.user.nickName}}
        <el-tag type="danger"
                style="margin-left:5px;"
                :size="'mini'">LV{{comment.user.level}}</el-tag>
      </div>
      <p class="comment-content">{{comment.content}}</p>
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
              @click="handleReply(comment.user,true)">
          回复
        </span>
      </div>
      <div v-if="comment.comment2List"
           class="comment2-list">
        <div v-if="!showMore">
          <comment2-card v-for="idx in 3<comment.comment2List.length?3:comment.comment2List.length"
                         :comment="comment.comment2List[idx-1]"
                         @handleReply="handleReply"
                         :key="idx"></comment2-card>
        </div>
        <div v-else>
          <comment2-card v-for="idx in 10*currentPage<comment.comment2List.length?10:comment.comment2List.length-10*(currentPage-1)"
                         :comment="comment.comment2List[(currentPage-1)*10+idx-1]"
                         @handleReply="handleReply"
                         :key="idx"></comment2-card>
          <el-pagination @current-change="handleCurrentChange"
                         :current-page.sync="currentPage"
                         :page-size="10"
                         style="float:left;"
                         layout="total, prev, pager, next"
                         prev-text="上一页"
                         next-text="下一页"
                         :total="comment.comment2List.length">
          </el-pagination>
        </div>
        <div class="show-more"
             v-if="!showMore">共{{comment.comment2List.length}}条回复，<span class="common-a-bg"
                @click="more"
                style="color:#00a1d6;">点击查看</span></div>
      </div>
      <div class="submit-comment2"
           v-show="showComment2Form">
        <div class="head-picture-div">
          <el-avatar :src="user.headPicture"
                     :size="48"></el-avatar>
        </div>
        <div class="form">
          <el-form :model="comment2Form"
                   ref="comment2Form"
                   label-width="10px">

            <el-form-item prop="comment2">
              <el-input type="textarea"
                        ref="comment2"
                        v-model="comment2Form.comment2"
                        :autosize="{ minRows: 3, maxRows: 5}"
                        maxlength="233"
                        :placeholder=comment2Form.placeholder></el-input>

            </el-form-item>
            <el-form-item>
              <el-button style="float:left;font-size:12px;">（￣▽￣）表情</el-button>

              <el-button type="primary"
                         style="float:right;font-size:12px;"
                         @click="submitComment2Form()">发表评论</el-button>
              <span style="float:right;font-size:12px;color:#99a2aa">{{comment2Form.comment2.length}}/233</span>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "../assets/css/common.css";
.user-comment {
  display: flex;
  width: 100%;
}
.comment-item {
  border-bottom: 1px #eee solid;
  width: 100%;
  margin-bottom: 20px;
}
.nick-name {
  font-size: 12px;
  color: #fb7299;
  text-align: left;
}
.comment-content {
  font-size: 14px;
  color: #222;
  text-align: left;
}
.comment2-list {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin-bottom: 10px;
}
.tools {
  display: flex;
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
.head-picture-div {
  width: 88px;
  display: flex;
  justify-content: center;
  align-content: center;
}
.submit-comment2 {
  display: flex;
}
.form {
  width: 100%;
}
.show-more {
  color: #6d757a;
  font-size: 12px;
}
</style>
