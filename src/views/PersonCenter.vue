<script>
// @ is an alias to /src
import NavHead from '@/components/NavHead.vue'
import FooterBar from '@/components/FooterBar.vue'
import PersonFirstPage from '@/components/PersonFirstPage.vue'
import PersonMyInfo from '@/components/PersonMyInfo.vue'
import PersonHeadPicture from '@/components/PersonHeadPicture.vue'
import PersonSecure from '@/components/PersonSecure.vue'
import PersonBlackList from '@/components/PersonBlackList.vue'
import PersonMySmoney from '@/components/PersonMySmoney.vue'
import PersonMyRecord from '@/components/PersonMyRecord.vue'
export default {
  name: 'home',
  components: {
    NavHead,
    FooterBar,
    PersonFirstPage,
    PersonMyInfo,
    PersonHeadPicture,
    PersonSecure,
    PersonBlackList,
    PersonMySmoney,
    PersonMyRecord
  },
  data: function () {
    return {
      pageName: '个人中心',
      visible: false,
      user: null,
      isCollapse: true,
      pages: [
        { title: '首页', components: 'PersonFirstPage', iconClass: 'el-icon-s-home' },
        { title: '我的信息', components: 'PersonMyInfo', iconClass: 'el-icon-tickets' },
        { title: '我的头像', components: 'PersonHeadPicture', iconClass: 'el-icon-s-custom' },
        { title: '账号安全', components: 'PersonSecure', iconClass: 'el-icon-lock' },
        { title: '黑名单管理', components: 'PersonBlackList', iconClass: 'el-icon-close-notification' },
        { title: '我的硬币', components: 'PersonMySmoney', iconClass: 'el-icon-coin' },
        { title: '我的记录', components: 'PersonMyRecord', iconClass: 'el-icon-notebook-1' },
        { title: '实名认证', components: 'PersonFirstPage', iconClass: 'el-icon-bank-card' },
        { title: '个人空间   >', components: 'PersonFirstPage', iconClass: 'el-icon-menu' },
        { title: '我的钱包   >', components: 'PersonFirstPage', iconClass: 'el-icon-s-finance' },
        { title: '后台管理   >', components: 'PersonFirstPage', iconClass: 'el-icon-setting' }

      ],
      currentTabComponent: 'PersonFirstPage',
      subTitle: '首页'
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    changePage (index) {
      // console.log(this.pages[index].title)
      // this.subTitle = this.pages[index].title
      // this.pages.forEach(element => {
      //   element.isShow = false
      // })
      // this.pages[index].isShow = true
      this.currentTabComponent = this.pages[index].components
    }

  }
}
</script>

<template>
  <el-container class="home">
    <!-- header -->
    <el-header style="height:auto">
      <nav-head :user="user"></nav-head>
    </el-header>
    <!-- main -->
    <el-main>
      <el-row class="common-content-row">
        <el-col>
          <div class="grid-content">
            <p></p>
          </div>
        </el-col>
        <el-col>
          <div class="grid-content person-center common-content">
            <el-container class="person-center-container">
              <div class="menu">
                <el-menu default-active="1-11-1"
                         class="el-menu-vertical-demo"
                         @open="handleOpen"
                         @close="handleClose">
                  <div class="main-title">{{pageName}}</div>
                  <!-- <el-menu-item v-for="(page,idx) in pages"
                                :key="idx"
                                @click="changePage(idx)">
                    <div class="left-item">
                      <i :class="page.iconClass"></i>
                      <span slot="title">{{page.title}}</span>
                    </div>
                  </el-menu-item> -->
                  <el-menu-item index="0"
                                @click="changePage(0)">
                    <div class="left-item">
                      <i :class="pages[0].iconClass"></i>
                      <span slot="title">{{pages[0].title}}</span>
                    </div>
                  </el-menu-item>
                  <el-menu-item index="1"
                                @click="changePage(1)">
                    <div class="left-item">
                      <i :class="pages[1].iconClass"></i>
                      <span slot="title">{{pages[1].title}}</span>
                    </div>
                  </el-menu-item>
                  <el-menu-item index="2"
                                @click="changePage(2)">
                    <div class="left-item">
                      <i :class="pages[2].iconClass"></i>
                      <span slot="title">{{pages[2].title}}</span>
                    </div>
                  </el-menu-item>
                  <el-menu-item index="3"
                                @click="changePage(3)">
                    <div class="left-item">
                      <i :class="pages[3].iconClass"></i>
                      <span slot="title">{{pages[3].title}}</span>
                    </div>
                  </el-menu-item>
                  <el-menu-item index="4"
                                @click="changePage(4)">
                    <div class="left-item">
                      <i :class="pages[4].iconClass"></i>
                      <span slot="title">{{pages[4].title}}</span>
                    </div>
                  </el-menu-item>
                  <el-menu-item index="5"
                                @click="changePage(5)">
                    <div class="left-item">
                      <i :class="pages[5].iconClass"></i>
                      <span slot="title">{{pages[5].title}}</span>
                    </div>
                  </el-menu-item>
                  <el-menu-item index="6"
                                @click="changePage(6)">
                    <div class="left-item">
                      <i :class="pages[6].iconClass"></i>
                      <span slot="title">{{pages[6].title}}</span>
                    </div>
                  </el-menu-item>
                  <el-menu-item index="7"
                                @click="changePage(7)">
                    <div class="left-item">
                      <i :class="pages[7].iconClass"></i>
                      <span slot="title">{{pages[7].title}}</span>
                    </div>
                  </el-menu-item>
                  <el-menu-item index="8"
                                @click="changePage(8)">
                    <div class="left-item">
                      <i :class="pages[8].iconClass"></i>
                      <span slot="title">{{pages[8].title}}</span>
                    </div>
                  </el-menu-item>
                  <el-menu-item index="9"
                                @click="changePage(9)">
                    <div class="left-item">
                      <i :class="pages[9].iconClass"></i>
                      <span slot="title">{{pages[9].title}}</span>
                    </div>
                  </el-menu-item>
                  <el-menu-item index="10"
                                @click="changePage(10)">
                    <div class="left-item">
                      <i :class="pages[10].iconClass"></i>
                      <span slot="title">{{pages[10].title}}</span>
                    </div>
                  </el-menu-item>

                </el-menu>
              </div>
              <el-main>
                <div class="sub-title">{{subTitle}}</div>
                <div>
                  <keep-alive>
                    <component v-bind:is="currentTabComponent"></component>
                  </keep-alive>
                  <!-- 首页 -->
                  <!-- <div v-show="pages[0].isShow">
                    <person-first-page></person-first-page>
                  </div> -->
                  <!-- 我的信息 -->
                  <!-- <div v-show="pages[1].isShow">
                    <person-my-info></person-my-info>
                  </div> -->
                  <!-- 我的头像 -->
                  <!-- <div v-show="pages[2].isShow">
                    <person-head-picture></person-head-picture>
                  </div> -->
                  <!-- 账号安全 -->
                  <!-- <div v-show="pages[3].isShow">
                    <person-secure></person-secure>
                  </div> -->
                  <!-- 黑名单管理 -->
                  <!-- <div v-show="pages[4].isShow">
                    <person-black-list></person-black-list>
                  </div> -->
                  <!-- 我的硬币 -->
                  <!-- <div v-show="pages[5].isShow">
                    <person-my-smoney></person-my-smoney>
                  </div> -->
                  <!-- 我的记录 -->
                  <!-- <div v-show="pages[6].isShow">
                    <person-my-record></person-my-record>
                  </div> -->
                  <!-- 实名认证 -->
                  <!-- <div v-show="pages[7].isShow">实名认证还没做，敬请期待</div> -->
                  <!-- 个人空间 -->
                  <!-- <div v-show="pages[8].isShow">个人空间</div> -->
                  <!-- 我的钱包 -->
                  <!-- <div v-show="pages[9].isShow">我的钱包</div> -->
                  <!-- 后台管理 -->
                  <!-- <div v-show="pages[10].isShow">后台管理</div> -->

                </div>
              </el-main>
            </el-container>
          </div>
        </el-col>
        <el-col>
          <div class="grid-content">
            <p></p>
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
.el-main {
  padding: 20px;
}
.el-header {
  padding: 0;
  height: auto;
}
.menu {
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}
.left-item {
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
}
.person-center-container {
  box-shadow: 0 0 5px 1px rgba(158, 179, 193, 0.5);
  height: 100%;
}
.person-center {
  height: auto;
  min-height: 750px;
}
.main-title {
  font-size: 20px;
  padding-left: 20px;
  /* padding-top: 20px; */
  height: 56px;
  width: 200px;
  text-align: left;
  border-bottom: 1px #e6e6e6 solid;
  line-height: 56px;
}
.sub-title {
  font-size: 14px;
  width: 100%;
  height: 36px;
  color: #409eff;
  border-bottom: 1px #e6e6e6 solid;
  line-height: 16px;
}
</style>
