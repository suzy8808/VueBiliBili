<script>
import HeadPicture from '@/components/HeadPicture.vue'
import Comment from '@/components/Comment.vue'
export default {
  name: 'EventCard',
  props: ['user', 'event'],
  components: {
    HeadPicture,
    Comment
  },
  data: function () {
    return {
      showForward: false,
      showComment: false,
      isLike: false,
      forwardForm: {
        forwardDesc: ''
      }
    }
  },
  computed: {
  },
  methods: {
    handleNum (value) {
      return value * 1.0 / 10000 >= 1 ? (value * 1.0 / 10000).toFixed(1) + '万' : value
    },
    handleTime (time) {
      return this.$moment(time, 'YYYYMMDDHHmmss').format('YYYY-MM-DD')
    },
    handleForward () {
      this.showComment = false
      this.showForward = !this.showForward
    },
    handleComment () {
      this.showForward = false
      this.showComment = !this.showComment
    },
    handleLike () {
      this.isLike = !this.isLike
      if (this.isLike) {
        this.$message({
          message: '点赞成功',
          type: 'success'
        })
      }
    },
    submitForm (formName) {

    }

  }
}
</script>
<template>
  <div class="event-card">
    <div class="user-info">
      <div class="user-left">
        <head-picture :userInfo="user"
                      :size="48"></head-picture>
      </div>
      <div class="user-right">
        <div class="nick-name common-a">{{user.nickName}}</div>
        <div class="date">{{handleTime(event.createTime)}}</div>
      </div>

      <el-dropdown trigger="click"
                   class="more-action">
        <img class="more-action-icon"
             title="更多操作"
             src="../assets/img/more_action.png" />
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>删除</el-dropdown-item>

        </el-dropdown-menu>
      </el-dropdown>

    </div>
    <div class="event-talk">{{event.talk}}</div>
    <div class="content">

      <div class="other-user-info"
           v-if="event.type===2">
        <div class="other-user-left">
          <!-- <el-avatar :src="event.work.author.headPicture"
                     :size="24"></el-avatar> -->
          <head-picture :userInfo="event.work.author"
                        :size="24"></head-picture>
        </div>
        <div class="other-user-right">
          <div class="other-nick-name common-a">{{event.work.author.nickName}}</div>
        </div>
      </div>
      <div class="event-content">
        {{event.content}}
      </div>
      <div class="work">
        <img :src="event.work.img"
             class="img-style" />
        <div>
          <div class="work-title">{{event.work.name}}</div>
          <div class="work-info">
            <span class="icon-i">
              <i class="fa fa-play-circle"></i>{{handleNum(event.work.watch)}}
            </span>
            <span style="margin-left:20px;"
                  class="icon-i">
              <i class="fa fa-commenting-o"></i>{{handleNum(event.work.comment)}}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="tool">
      <span :class="showForward?'tool-item-active icon-i':'tool-item icon-i'"
            @click="handleForward()">
        <i class="fa fa-share-square-o"></i>
        {{event.work.forward}}</span>
      <span :class="showComment?'tool-item-active icon-i':'tool-item icon-i'"
            @click="handleComment()">
        <i class="fa fa-commenting-o"></i>{{event.work.comment}}</span>
      <span :class="isLike?'tool-item-active icon-i':'tool-item icon-i'"
            @click="handleLike()"><i :class="isLike?'fa fa-thumbs-up':'fa fa-thumbs-o-up'"></i>{{event.work.like}}</span>
    </div>
    <!-- <div>
      <tool-button :img="require('../assets/img/like.png')"
                   :imgHover="require('../assets/img/like_pink_hover.png')"
                   :imgActive="require('../assets/img/like_pink.png')"
                   :value="event.work.like"
                   :activeColor="'#fb7299'"
                   :normalColor="'#99a2aa'"
                   :active="false"></tool-button>
    </div> -->

    <!-- 转发 -->
    <div class="forward-div"
         v-show="showForward">
      <el-avatar :src="user.headPicture"
                 :size="32"></el-avatar>
      <div style="width:100%">
        <el-form :model="forwardForm"
                 ref="forwardForm"
                 label-width="20px">

          <el-form-item prop="forwardDesc">
            <el-input type="textarea"
                      v-model="forwardForm.forwardDesc"
                      maxlength="233"
                      placeholder="请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论。"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button style="float:left;font-size:12px;">（￣▽￣）表情</el-button>
            <el-button type="primary"
                       style="float:right;font-size:12px;"
                       @click="submitForm('forwardForm')">转发</el-button>
            <span style="float:right;font-size:12px;color:#99a2aa">{{forwardForm.forwardDesc.length}}/520</span>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!-- 评论 -->
    <div v-show="showComment">
      <comment :user="user"
               :commentList="event.work.commentList"></comment>
    </div>
  </div>
</template>
<style scoped>
@import "../assets/css/common.css";
i {
  margin-right: 5px;
  font-size: 18px;
}
.icon-i {
  line-height: 20px;
}
.event-card {
  width: 100%;
  border-radius: 5px;
  background: #fff;
  margin-bottom: 20px;
  padding: 10px;
}
.user-info {
  display: flex;
  align-items: center;
}
.nick-name {
  font-size: 16px;
  color: #222;
  text-align: left;
  padding: 5px;
  width: fit-content;
}
.date {
  font-size: 12px;
  color: #99a2aa;
  text-align: left;
  padding: 5px;
}

.other-user-info {
  display: flex;
  align-items: center;
}
.other-nick-name {
  font-size: 12px;
  color: #222;
  text-align: left;
  padding: 5px;
}
.other-user-left {
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.other-user-right {
  height: 44px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.event-content {
  font-size: 14px;
  color: #222;
  padding: 5px;
  padding-left: 10px;
  text-align: left;
}
.work {
  display: flex;
  margin: 10px;
  background: #fff;
  border: 1px #00a1d6 solid;
  border-radius: 5px;
}
.work-title {
  font-size: 14px;
  color: #222;
  padding: 5px;
  text-align: left;
}
.work-info {
  font-size: 14px;
  color: #999999;
  padding: 5px;
  text-align: left;
  margin-top: 60px;
}
.img-style {
  height: 119px;
  width: 190px;
  border-radius: 5px;
  cursor: pointer;
}
.more-action-icon {
  height: 18px;
  width: 18px;
  cursor: pointer;
}
.content {
  background: rgba(0, 0, 0, 0.05);
  margin-left: 88px;
  margin-bottom: 20px;
  border-radius: 5px;
  width: 500px;
  padding: 5px;
}
.user-left {
  width: 88px;
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.user-right {
  height: 88px;
  width: 670px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.event-talk {
  font-size: 14px;
  color: #222;
  padding: 5px;
  margin-left: 88px;
  text-align: left;
}
.tool {
  margin-left: 88px;
  display: flex;
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
  color: #fb7299;
  margin-right: 60px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tool-item:hover {
  color: #fb7299;
}
.forward-div {
  margin-top: 20px;
  width: 600px;
  margin-left: 88px;
  display: flex;
}
</style>
