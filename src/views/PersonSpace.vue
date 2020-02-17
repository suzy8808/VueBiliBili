<script>
import NavHead from '@/components/NavHead.vue'
import Banner from '@/components/Banner.vue'
import FooterBar from '@/components/FooterBar.vue'
import PSCollect from '@/components/PSCollect.vue'
import PSWork from '@/components/PSWork.vue'
import PSHome from '@/components/PSHome.vue'
import PSEvent from '@/components/PSEvent.vue'
import PSSetting from '@/components/PSSetting.vue'
import BackTop from '@/components/BackTop.vue'
import UserList from '@/components/UserList.vue'
// TODO 设置
export default {
  name: 'PersonSpace',
  components: {
    NavHead,
    Banner,
    FooterBar,
    PSCollect,
    PSWork,
    PSHome,
    PSEvent,
    PSSetting,
    BackTop,
    UserList
  },
  data: function () {
    return {
      user: null,
      currentModule1: this.$route.params.module ? this.$route.params.module : 'PSEvent',
      currentModule2: 'UserList',
      currentBan: '',
      searchContent: '',
      userListMenu: 'attentions',
      showFlag: true
    }
  },
  methods: {
    handleClick (value) {
      this.showFlag = true
      this.$refs.attentions.style.color = '#99a2aa'
      this.$refs.fans.style.color = '#99a2aa'
    },
    banClick (value) {
      this.userListMenu = value
      this.showFlag = false
      if (value === 'attentions') {
        this.$refs.attentions.style.color = '#00b5e5'
        this.$refs.fans.style.color = '#99a2aa'
      } else {
        this.$refs.fans.style.color = '#00b5e5'
        this.$refs.attentions.style.color = '#99a2aa'
      }
    }
  }
}
</script>
<template>
  <el-container style="background: rgba(0, 0, 0, 0.05);">
    <!-- header -->
    <el-header style="height:auto">
      <nav-head :user="user"></nav-head>
      <div class="normal-row">
        <banner :user="user"></banner>
      </div>
      <div class="normal-row">
        <div class="head-bar">
          <el-tabs v-model="currentModule1"
                   style="margin-left:20px;"
                   @tab-click="handleClick">
            <!-- <el-tab-pane name="PSHome">
              <div slot="label">
                <div class="tab">
                  <img :src="require('../assets/img/sp_home.png')"
                       width="20px"
                       height="20px" /><span class="tab-span1">主页</span>
                </div>
              </div>
            </el-tab-pane> -->
            <el-tab-pane name="PSEvent">
              <div slot="label">
                <div class="tab">
                  <img :src="require('../assets/img/sp_event.png')"
                       width="20px"
                       height="20px" /><span class="tab-span1">动态</span>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane name="PSWork">
              <div slot="label">
                <div class="tab">
                  <img :src="require('../assets/img/sp_work.png')"
                       width="20px"
                       height="20px" /><span class="tab-span1">投稿</span>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane name="PSCollect">
              <div slot="label">
                <div class="tab">
                  <img :src="require('../assets/img/sp_collect.png')"
                       width="20px"
                       height="20px" /><span class="tab-span1">收藏</span>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane name="PSSetting">
              <div slot="label">
                <div class="tab">
                  <img :src="require('../assets/img/sp_setting.png')"
                       width="20px"
                       height="20px" /><span class="tab-span1">设置</span>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
          <div class="noraml-ban">
            <el-input placeholder="搜索作品"
                      suffix-icon="el-icon-search"
                      v-model="searchContent">
            </el-input>
          </div>
          <div class="noraml-ban right-ban">
            <div class="right-ban-item common-a"
                 @click="banClick('attentions')"
                 ref="attentions">
              <div class="right-ban-name">关注数</div>
              <div class="right-ban-num">128</div>
            </div>
            <div class="right-ban-item common-a"
                 @click="banClick('fans')"
                 ref="fans">
              <div class="right-ban-name">粉丝数</div>
              <div class="right-ban-num">128</div>
            </div>
            <div class="right-ban-item">
              <div class="right-ban-name">获赞数</div>
              <div class="right-ban-num">128</div>
            </div>
            <div class="right-ban-item">
              <div class="right-ban-name">浏览数</div>
              <div class="right-ban-num">128</div>
            </div>
          </div>
        </div>
      </div>
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
          <div class="common-content sp-content">
            <!-- <keep-alive v-show="showFlag"> -->
            <component :is="currentModule1"
                       v-show="showFlag"></component>
            <!-- </keep-alive> -->
            <!-- <keep-alive v-show="!showFlag"> -->
            <component :is="currentModule2"
                       v-show="!showFlag"
                       :activeMenuProp="userListMenu"
                       @handleSelect="banClick"></component>
            <!-- </keep-alive> -->

          </div>
        </el-col>
        <el-col>
          <div class="common-right-content">
            <back-top></back-top>
          </div>
        </el-col>
      </el-row>
    </el-main>
    <!-- footer -->
    <el-footer style="height:auto">
      <footer-bar></footer-bar>
    </el-footer>
  </el-container>
</template>

<style scoped>
@import "../assets/css/common.css";
.normal-row {
  width: 100%;
  display: flex;
  justify-content: center;
}
.head-bar {
  display: flex;
  background: #fff;
  box-shadow: 0 0 0 1px #eee;
  border-radius: 0 0 4px 4px;
  width: 1280px;
  height: 60px;
}
.el-tabs >>> .el-tabs__item {
  height: 60px;
}
.el-tabs >>> .el-tabs__nav-wrap::after {
  background: #fff;
}
.tab {
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tab-span1 {
  font-size: 13px;
  color: #222;
  margin-left: 5px;
}

.noraml-ban {
  display: flex;
  min-width: 200px;
  height: 60px;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
}
.right-ban {
  margin-left: 200px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.right-ban-item {
  display: flex;
  flex-direction: column;
  font-size: 12px;
  color: #99a2aa;
  margin-left: 10px;
  margin-right: 10px;
  justify-content: center;
}
.right-ban-name {
  padding: 5px;
}
.right-ban-num {
  padding: 5px;
}
.sp-content {
  min-height: 500px;
}
</style>
