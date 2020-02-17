<script>
export default {
  name: 'NavHead',
  props: ['user'],
  data () {
    return {
      title: 'SilenceHTML',
      searchContent: ''
    }
  },
  methods: {
    goLogin: function () {
      this.$router.push('/login')
    },
    goHome: function () {
      this.$router.push('/')
    },
    goClassify: function () {
      this.$router.push('/classify')
    },
    goPersonCenter: function () {
      this.$router.push('/person_center')
    },
    goHistory: function () {
      this.$router.push('/history')
    },
    goEvent: function () {
      this.$router.push('/event')
    },
    goMessage: function () {
      this.$router.push('/message')
    },
    goCollect: function () {
      // 必须用name，path会使params失效
      this.$router.push({ name: 'PersonSpace', params: { module: 'PSCollect' } })
    },
    goUpload: function () {
      this.$router.push('/upload')
    }
  }
}
</script>

<template>

  <el-row class="head-container">
    <el-col class="nav-head">
      <el-row>
        <el-col :span="8">
          <div class="grid-content left">
            <img class="nav-img"
                 src="../assets/logo.gif"
                 @click="goHome">
            <span class="web-span"
                  @click="goHome">{{title}}</span>
            <!-- <div>
            <img src="../assets/img/icon.png"/>
            <span class="nav-span">主站</span>
          </div> -->
            <div class="nav-item">
              <span class="nav-span"
                    @click="goHome">首页</span>
            </div>
            <div class="nav-item">
              <span class="nav-span"
                    @click="goClassify">分类</span>
            </div>
            <!-- <div class="nav-item">
              <span class="nav-span">排行榜</span>
            </div> -->
            <div class="nav-item">
              <span class="nav-span">下载APP</span>
            </div>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content right">
            <div class="nav-item">
              <el-input placeholder="请输入内容"
                        suffix-icon="el-icon-search"
                        v-model="searchContent">
              </el-input>
            </div>
            <div class="nav-item">
              <el-dropdown>
                <span class="el-dropdown-link"
                      @click="goPersonCenter">
                  <el-avatar icon="el-icon-user-solid"></el-avatar>
                </span>
                <el-dropdown-menu slot="dropdown"
                                  v-if="user">
                  <el-dropdown-item>{{user.name}}</el-dropdown-item>
                  <el-dropdown-item>等级:{{user.level}}</el-dropdown-item>
                  <el-dropdown-item>漫币:{{user.cmoney}}</el-dropdown-item>
                  <el-dropdown-item>退出登录</el-dropdown-item>
                </el-dropdown-menu>
                <el-dropdown-menu slot="dropdown"
                                  v-else>
                  <el-dropdown-item @click.native="goLogin">
                    登录/注册
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>

            </div>
            <div class="nav-item">
              <el-badge :value="3"
                        class="item">
                <span class="nav-span"
                      @click="goMessage">消息</span>
              </el-badge>
            </div>
            <div class="nav-item">
              <el-badge :value="12"
                        class="item">
                <span class="nav-span"
                      @click="goEvent">动态</span>
              </el-badge>
            </div>
            <div class="nav-item">
              <span class="nav-span"
                    @click="goCollect">收藏</span>
            </div>
            <div class="nav-item"
                 @click="goHistory">
              <span class="nav-span">历史</span>
            </div>
            <div class="nav-item"
                 @click="goUpload">
              <el-button type="danger"
                         @click="goUpload">投稿<i class="el-icon-upload el-icon--right"></i></el-button>
            </div>
            <div class="nav-item">
              <el-dropdown>
                <span class="el-dropdown-link"
                      style="font-size:14px;color:rgba(0, 0, 0, 0.87)">
                  语言<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>中文</el-dropdown-item>
                  <el-dropdown-item>日语</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<style scoped>
.head-container {
  display: flex;
  justify-content: center;
  box-shadow: 0 0 5px 1px rgba(158, 179, 193, 0.5);
  background: #fff;
}
.el-row {
  height: 50px;
}
.el-col {
  border-radius: 4px;
  height: 100%;
}
.nav-head {
  width: 1280px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  height: 100%;
  display: flex;
  align-items: center;
}
.left {
  float: left;
}
.right {
  float: right;
}
.nav-img {
  width: 36px;
  height: 36px;
  border-radius: 4px;
  cursor: pointer;
}
.web-span {
  font-size: 16px;
  padding: 8px;
  color: rgba(0, 0, 0, 0.87);
  cursor: pointer;
}
.nav-span {
  font-size: 14px;
  padding: 8px;
  color: rgba(0, 0, 0, 0.87);
}
.nav-item {
  margin-left: 14px;
  margin-right: 14px;
}
.nav-span:hover {
  color: #32aaff;
  cursor: pointer;
}
.el-input {
  border-radius: 15px;
}
</style>
