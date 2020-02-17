<script>
import NavHead from '@/components/NavHead.vue'
import FooterBar from '@/components/FooterBar.vue'
import BackTop from '@/components/BackTop.vue'
import { mavonEditor } from 'mavon-editor'
export default {
  name: 'Work',
  components: {
    NavHead,
    FooterBar,
    BackTop

  },
  data: function () {
    return {
      user: {
        nickName: '道乐菌',
        headPicture: require('../assets/img/head_picture.jpg'),
        level: 4,
        attention: 444,
        fans: 444,
        manifesto: '吃吃吃买买买出去浪 视频分类请看收藏夹 老丸子没事干交流会：733749659 微博/微信：柴犬老丸子'
      },
      handbook: '# 标题1 \n## 标题1-1 \nxxxxxxxxxx \nxxxxxxxxxx \nxxxxxxxxxx \nxxxxxxxxxx \nxxxxxxxxxx \nxxxxxxxxxx \nxxxxxxxxxx \nxxxxxxxxxx \nxxxxxxxxxx \nxxxxxxxxxx \nxxxxxxxxxx \nxxxxxxxxxx \nxxxxxxxxxx \nxxxxxxxxxx \nxxxxxxxxxx \n## 标题1-2 \n## 标题1-3 \n## 标题1-4 \n# 标题2 \n## 标题2-1 \n## 标题2-2 \n## 标题2-3',
      htmlCode: ''
    }
  },
  methods: {
    getNavigation () {
      // let navigationContent

      // navigationContent = this.$refs.navigationContent
      // let md = this.$refs.md
      // md.innerHTML = this.htmlCode
      // let mdNodes = md.children

      // navigationContent.innerHTML = this.htmlCode
      // let nodes = navigationContent.children

      // if (nodes.length) {
      //   for (let i = 0; i < nodes.length; i++) {
      //     judageH(nodes[i], i, nodes, mdNodes[i])
      //   }
      // }
      // function judageH (node, i, nodes, mdNode) {
      //   let reg = /^H[1-6]{1}$/
      //   if (!reg.exec(node.tagName)) {
      //     node.style.display = 'none'
      //   } else {
      //     node.onclick = () => {
      //       console.log(mdNode)
      //       md.scrollTop = mdNode.offsetTop
      //     }
      //   }
      // }
    },
    fixUserInfo () {
      const that = this
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      let userInfo = document.getElementById('userInfo')
      if (userInfo) {
        that.scrollTop = scrollTop
        if (that.scrollTop > 70) {
          userInfo.style.top = '0px'
          userInfo.style.position = 'fixed'
        } else {
          userInfo.style.position = 'relative'
        }
      }
    }
  },
  mounted () {
    this.htmlCode = mavonEditor.getMarkdownIt().render(this.handbook)
    // this.$refs.md.innerHTML = this.htmlCode
  }
}
</script>
<template>
  <el-container class="work">
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
          <div class="common-content content">
            <div class="md-content">
              <div class="left">
                <!-- md content -->
                <div ref="md"
                     v-html="htmlCode"
                     class="markdown-body md"></div>
              </div>
              <div class="right">

                <div class="normal-card"
                     id="userInfo">
                  <div class="banner">
                  </div>
                  <div>
                    <div>
                      <el-avatar :src="user.headPicture"
                                 class="head-picture"
                                 :size="48"></el-avatar>
                    </div>
                    <div class="user-info-right">
                      <div class="user-info-nick-name">{{user.nickName}}<el-tag type="danger"
                                style="margin-left:5px;"
                                :size="'mini'">LV4</el-tag>
                      </div>
                      <div class="user-info-number">
                        <span>关注：{{user.attention}}</span>
                        <span style="margin-left:20px">粉丝：{{user.fans}}</span>
                      </div>
                      <div class="user-info-manifesto">
                        {{user.manifesto}}
                      </div>

                    </div>
                    <div class="user-info-button">
                      <el-button>+ 关注</el-button>
                      <el-button>发消息</el-button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
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
.work {
  background: #d2e9fb url("~@/assets/img/event_bg.png") top/contain no-repeat;
}
.content {
  min-height: 500px;
}
.md-content {
  display: flex;
}
.left {
  width: 800px;
}
.md {
  background: #fff;
  box-shadow: 0 0 0 1px #eee;
  border-radius: 4px;
  min-height: 450px;
}
.right {
  width: 440px;
  margin-left: 40px;
}
.normal-card {
  border-radius: 5px;
  background: #fff;
  margin-bottom: 20px;
  position: relative;
  width: 440px;
  padding-bottom: 20px;
}
.banner {
  background: url("~@/assets/img/banner_bg.png") no-repeat;
  width: 100%;
  height: 120px;
  background-position: center;
}
.head-picture {
  border: 2px solid #fff;
  width: 52px;
  height: 52px;
  position: absolute;
  top: 94px;
  left: 20px;
}
.user-info-right {
  margin-left: 90px;
}
.user-info-nick-name {
  text-align: left;
  font-size: 16px;
  color: #222;
  padding: 5px;
}
.user-info-number {
  text-align: left;
  font-size: 12px;
  color: #222;
  padding: 5px;
}
.user-info-manifesto {
  text-align: left;
  font-size: 12px;
  color: #99a2aa;
  padding: 5px;
}
.user-info-button {
  margin-top: 10px;
  display: flex;
  justify-content: baseline;
  margin-left: 95px;
}
</style>
