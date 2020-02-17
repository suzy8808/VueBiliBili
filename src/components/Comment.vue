<script>
import HeadPicture from '@/components/HeadPicture.vue'
import CommentCard from '@/components/CommentCard.vue'
export default {
  name: 'Comment',
  components: {
    HeadPicture,
    CommentCard
  },
  props: ['user', 'commentList'],
  data: function () {
    return {
      sortType: 'hot',
      workCommentForm: {
        workComment: ''
      },
      currentPage: 1
    }
  },
  methods: {
    handleSort (value) {
      if (value === 'hot') {
        this.commentList.sort((a, b) => {
          return (a.like - a.dislike) - (b.like - b.dislike) ? 1 : -1
        })
      } else {
        this.commentList.sort((a, b) => {
          return this.$moment(a.createTime).isBefore(b.createTime) ? 1 : -1
        })
      }
    },
    handleDate (date) {
      return this.$moment(date, 'YYYYMMDDHHmmss').format('YYYY-MM-DD HH:mm')
    },
    submitWorkCommentForm () {
      alert(this.workCommentForm.workComment)
    },
    handleCurrentChange () {

    }
  }
}
</script>
<template>
  <div class="comment">
    <div v-if="commentList">
      <el-tabs v-model="sortType"
               @tab-click="handleSort">
        <el-tab-pane label="按热度排序"
                     name="hot"></el-tab-pane>
        <el-tab-pane label="按时间排序"
                     name="last"></el-tab-pane>
      </el-tabs>
      <el-pagination @current-change="handleCurrentChange"
                     :current-page.sync="currentPage"
                     :page-size="5"
                     style="float:left;margin-bottom:20px;"
                     layout="total, prev, pager, next"
                     prev-text="上一页"
                     next-text="下一页"
                     :total="commentList.length">
      </el-pagination>
    </div>
    <div class="work-comment">
      <div class="head-picture-div">
        <el-avatar :src="user.headPicture"
                   :size="48"></el-avatar>
      </div>
      <div class="comment-item">
        <el-form :model="workCommentForm"
                 ref="ruleForm"
                 label-width="10px">

          <el-form-item prop="workComment">
            <el-input type="textarea"
                      v-model="workCommentForm.workComment"
                      :autosize="{ minRows: 3, maxRows: 5}"
                      maxlength="520"
                      placeholder="请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论。"></el-input>

          </el-form-item>
          <el-form-item>
            <el-button style="float:left;font-size:12px;">（￣▽￣）表情</el-button>

            <el-button type="primary"
                       style="float:right;font-size:12px;"
                       @click="submitWorkCommentForm()">发表评论</el-button>
            <span style="float:right;font-size:12px;color:#99a2aa">{{workCommentForm.workComment.length}}/520</span>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div v-if="commentList">
      <comment-card v-for="idx in 5*currentPage<commentList.length?5:commentList.length-5*(currentPage-1)"
                    :comment="commentList[(currentPage-1)*5+idx-1]"
                    :key="idx"
                    :user="user"></comment-card>
    </div>
    <div class="bottom">╮(￣▽￣)╭</div>
  </div>
</template>
<style scoped>
@import "../assets/css/common.css";
.comment {
  width: auto;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 20px;
}
.head-picture-div {
  width: 88px;
  display: flex;
  justify-content: center;
  align-content: center;
}
.work-comment {
  display: flex;
  width: 100%;
}
.comment-item {
  border-bottom: 1px #eee solid;
  width: 100%;
  margin-bottom: 20px;
}
.bottom {
  font-size: 14px;
  color: #99a2aa;
  margin-bottom: 10px;
}
</style>
