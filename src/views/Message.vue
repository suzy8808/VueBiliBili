<script>
import NavHead from '@/components/NavHead.vue'
import MessageRow from '@/components/MessageRow.vue'
import SystemMessage from '@/components/SystemMessage.vue'
import MyMessage from '@/components/MyMessage.vue'
import MessageSetting from '@/components/MessageSetting.vue'
export default {
  name: 'Message',
  components: {
    NavHead,
    MessageRow,
    SystemMessage,
    MyMessage,
    MessageSetting
  },
  data: function () {
    return {
      user: null,
      activeMenu: 1,
      messageList: [
        {
          user: {
            nickName: '天木から',
            headPicture: require('../assets/img/head_picture.jpg')
          },
          content: '这样洗脸就够呆萌了，这样喝水那真是憨憨了！',
          fromContent: '一看就知道要重考的人，来年一起散步。',
          createTime: '20191010111111'
        },
        {
          user: {
            nickName: '天木から',
            headPicture: require('../assets/img/head_picture.jpg')
          },
          content: '这样洗脸就够呆萌了，这样喝水那真是憨憨了！',
          fromContent: '一看就知道要重考的人，来年一起散步。',
          createTime: '20191010111111'
        }
      ],
      sysMessageList: [
        {
          title: 'TAAF2020年度动画评选最终阶段启动',
          content: '东京动画奖节2020的“年度动画”评选在bilibili开设了投票专场；以大家选出的 “BEST100”为对象，将由您从中投票选出本年度最受欢迎的作品—— “动画爱好者奖”票选现已开启，投票入口→  网页链接 活动期间每人每天可投票一次，快来为你喜欢的作品加油助威吧~',
          createTime: '20191010111111'
        },
        {
          title: 'TAAF2020年度动画评选最终阶段启动',
          content: '东京动画奖节2020的“年度动画”评选在bilibili开设了投票专场；以大家选出的 “BEST100”为对象，将由您从中投票选出本年度最受欢迎的作品—— “动画爱好者奖”票选现已开启，投票入口→  网页链接 活动期间每人每天可投票一次，快来为你喜欢的作品加油助威吧~',
          createTime: '20191010111111'
        }
      ]
    }
  },
  methods: {
    toggleTab (value) {
      this.activeMenu = value
    }
  }
}
</script>
<template>
  <el-container class="message-container">
    <!-- header -->
    <el-header style="height:auto">
      <nav-head :user="user"></nav-head>

    </el-header>
    <!-- main -->
    <el-main>
      <el-row class="common-content-row">
        <el-col>
          <div>
            <p></p>
          </div>
        </el-col>
        <el-col>
          <div class="common-content message-space">
            <!-- left bar -->
            <div class="left-bar"
                 style="width:140px">
              <div class="left-bar-title"> <i class="fa fa-paper-plane"></i>消息中心</div>
              <div>
                <div :class="activeMenu==1?'left-bar-item-active common-a':'left-bar-item common-a'"
                     @click="toggleTab(1)"><i class="fa fa-weixin"></i>@ 我的</div>
                <div :class="activeMenu==2?'left-bar-item-active common-a':'left-bar-item common-a'"
                     @click="toggleTab(2)"><i class="fa fa-weixin"></i>系统通知</div>
                <div :class="activeMenu==3?'left-bar-item-active common-a':'left-bar-item common-a'"
                     @click="toggleTab(3)"><i class="fa fa-weixin"></i>我的消息</div>
                <div class="divider"></div>
                <div :class="activeMenu==4?'left-bar-item-active common-a':'left-bar-item common-a'"
                     @click="toggleTab(4)"><i class="fa fa-cog"></i>消息设置</div>
              </div>
            </div>
            <!-- message content -->
            <div class="message-content">
              <!-- @ 我的 -->
              <div v-show="activeMenu==1">
                <div class="content-title">@ 我的</div>
                <div class="content-card">
                  <message-row v-for="(message,idx) in messageList"
                               :key="idx"
                               :message="message"></message-row>
                </div>
              </div>
              <!-- 系统通知 -->
              <div v-show="activeMenu==2">
                <div class="content-title">系统通知</div>
                <div>
                  <system-message v-for="(message,idx) in sysMessageList"
                                  :key="idx"
                                  :message="message"></system-message>
                </div>
              </div>
              <!-- 我的消息 -->
              <div v-show="activeMenu==3">
                <div class="content-title">我的消息</div>
                <div>
                  <my-message></my-message>
                </div>
              </div>
              <!-- 系统设置 -->
              <div v-show="activeMenu==4">
                <div class="content-title">系统通知</div>
                <div>
                  <message-setting></message-setting>
                </div>
              </div>

            </div>
          </div>
        </el-col>
        <el-col>
          <div class="common-right-content">
            <!-- <back-top></back-top> -->
          </div>
        </el-col>
      </el-row>
    </el-main>
    <!-- footer -->
    <!-- <el-footer style="height:auto">
      <footer-bar></footer-bar>
    </el-footer> -->
  </el-container>
</template>

<style scoped>
@import "../assets/css/common.css";
.message-container {
  background: url("~@/assets/img/message_bg.jpg") top/cover no-repeat fixed;
  height: 100%;
}
.message-space {
  display: flex;
  min-height: 800px;
}
.left-bar {
  width: 140px;
  background-color: rgba(255, 255, 255, 0.8);
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  color: #666;
}
.left-bar-title {
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #222;
}
.left-bar-item {
  height: 40px;
  justify-content: flex-start;
  margin-left: 30px;
  display: flex;
  align-items: center;
}
.left-bar-item-active {
  height: 40px;
  justify-content: flex-start;
  margin-left: 30px;
  display: flex;
  align-items: center;
  color: #00b5e5;
}
i {
  margin-right: 10px;
}
.divider {
  border-top: 1px solid #fff;
  margin: 10px 0;
}
.message-content {
  flex: 1;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 10px;
}
.content-title {
  height: 42px;
  display: flex;
  align-items: center;
  background-color: #fff;
  justify-content: space-between;
  padding: 0 16px;
  font-size: 15px;
  color: #666;
  border-radius: 4px;
}
.content-card {
  display: flex;
  background-color: #fff;
  padding: 0 16px;
  border-radius: 4px;
  flex-direction: column;
  margin-top: 10px;
  height: 800px;
  overflow-y: auto;
}
/* 设置滚动条的样式 */
::-webkit-scrollbar {
  width: 8px;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
  /* -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.3); */
  border-radius: 10px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(251, 114, 153, 0.5);
  /* -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.5); */
}
/* ::-webkit-scrollbar-thumb:window-inactive {
  background: #fb7299;
  opacity: 0.3;
} */
</style>
