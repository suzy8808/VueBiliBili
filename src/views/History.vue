<script>
import NavHead from '@/components/NavHead.vue'
import FooterBar from '@/components/FooterBar.vue'
import Card from '@/components/Card.vue'
import BackTop from '@/components/BackTop.vue'
import HistoryItem from '@/components/HistoryItem.vue'
export default {
  name: 'History',
  components: {
    NavHead,
    FooterBar,
    Card,
    BackTop,
    HistoryItem
  },
  data: function () {
    return {
      user: null,
      timeTagNames: ['今天', '昨天', '更久'],
      historyItems: [
        { createTime: '2019-11-10 11:11:11', img: require('../assets/img/card.png'), name: '这次玩大了，把兄弟从床上“绑架”到几十公里外，就为了这个？', author: '小刚和阿灿', type: '日常' },
        { createTime: '2019-10-10 11:11:11', img: require('../assets/img/card.png'), name: '这次玩大了，把兄弟从床上“绑架”到几十公里外，就为了这个？', author: '小刚和阿灿', type: '日常' },
        { createTime: '2019-10-10 11:11:11', img: require('../assets/img/card.png'), name: '这次玩大了，把兄弟从床上“绑架”到几十公里外，就为了这个？', author: '小刚和阿灿', type: '日常' },
        { createTime: '2019-10-10 11:11:11', img: require('../assets/img/card.png'), name: '这次玩大了，把兄弟从床上“绑架”到几十公里外，就为了这个？', author: '小刚和阿灿', type: '日常' },
        { createTime: '2019-10-10 11:11:11', img: require('../assets/img/card.png'), name: '这次玩大了，把兄弟从床上“绑架”到几十公里外，就为了这个？', author: '小刚和阿灿', type: '日常' },
        { createTime: '2019-10-10 11:11:11', img: require('../assets/img/card.png'), name: '这次玩大了，把兄弟从床上“绑架”到几十公里外，就为了这个？', author: '小刚和阿灿', type: '日常' },
        { createTime: '2019-10-10 11:11:11', img: require('../assets/img/card.png'), name: '这次玩大了，把兄弟从床上“绑架”到几十公里外，就为了这个？', author: '小刚和阿灿', type: '日常' },
        { createTime: '2019-10-10 11:11:11', img: require('../assets/img/card.png'), name: '这次玩大了，把兄弟从床上“绑架”到几十公里外，就为了这个？', author: '小刚和阿灿', type: '日常' },
        { createTime: '2019-10-10 11:11:11', img: require('../assets/img/card.png'), name: '这次玩大了，把兄弟从床上“绑架”到几十公里外，就为了这个？', author: '小刚和阿灿', type: '日常' },
        { createTime: '2019-10-10 11:11:11', img: require('../assets/img/card.png'), name: '这次玩大了，把兄弟从床上“绑架”到几十公里外，就为了这个？', author: '小刚和阿灿', type: '日常' },
        { createTime: '2019-10-10 11:11:11', img: require('../assets/img/card.png'), name: '这次玩大了，把兄弟从床上“绑架”到几十公里外，就为了这个？', author: '小刚和阿灿', type: '日常' },
        { createTime: '2019-10-10 11:11:11', img: require('../assets/img/card.png'), name: '这次玩大了，把兄弟从床上“绑架”到几十公里外，就为了这个？', author: '小刚和阿灿', type: '日常' },
        { createTime: '2019-10-10 11:11:11', img: require('../assets/img/card.png'), name: '这次玩大了，把兄弟从床上“绑架”到几十公里外，就为了这个？', author: '小刚和阿灿', type: '日常' },
        { createTime: '2019-10-10 11:11:11', img: require('../assets/img/card.png'), name: '这次玩大了，把兄弟从床上“绑架”到几十公里外，就为了这个？', author: '小刚和阿灿', type: '日常' },
        { createTime: '2019-10-10 11:11:11', img: require('../assets/img/card.png'), name: '这次玩大了，把兄弟从床上“绑架”到几十公里外，就为了这个？', author: '小刚和阿灿', type: '日常' },
        { createTime: '2019-10-10 11:11:11', img: require('../assets/img/card.png'), name: '这次玩大了，把兄弟从床上“绑架”到几十公里外，就为了这个？', author: '小刚和阿灿', type: '日常' },
        { createTime: '2019-10-10 11:11:11', img: require('../assets/img/card.png'), name: '这次玩大了，把兄弟从床上“绑架”到几十公里外，就为了这个？', author: '小刚和阿灿', type: '日常' },
        { createTime: '2019-10-10 11:11:11', img: require('../assets/img/card.png'), name: '这次玩大了，把兄弟从床上“绑架”到几十公里外，就为了这个？', author: '小刚和阿灿', type: '日常' }
      ],
      loaded: 12,
      loading: false,
      beforeScrollTop: 0
    }
  },
  computed: {
    noMore () {
      return this.loaded >= 42
    },
    disabled () {
      return this.loading || this.noMore
    },
    timeTag () {
      let today = this.$moment().format('YYYY-MM-DD')
      let yestoday = this.$moment().subtract(1, 'days').format('YYYY-MM-DD')
      let firstCreateTime = this.historyItems[0].createTime.split(' ')[0]
      if (this.$moment(today).isSame(firstCreateTime)) {
        return this.timeTagNames[0]
      } else if (this.$moment(yestoday).isSame(firstCreateTime)) {
        return this.timeTagNames[1]
      } else {
        return this.timeTagNames[2]
      }
    }
  },
  methods: {// 滚动条在Y轴上的滚动距离
    getScrollTop: function () {
      var scrollTop = 0
      var bodyScrollTop = 0
      var documentScrollTop = 0
      if (document.body) {
        bodyScrollTop = document.body.scrollTop
      }
      if (document.documentElement) {
        documentScrollTop = document.documentElement.scrollTop
      }
      scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop
      return scrollTop
    },
    // 文档的总高度
    getScrollHeight: function () {
      var scrollHeight = 0
      var bodyScrollHeight = 0
      var documentScrollHeight = 0
      if (document.body) {
        bodyScrollHeight = document.body.scrollHeight
      }
      if (document.documentElement) {
        documentScrollHeight = document.documentElement.scrollHeight
      }
      scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight
      return scrollHeight
    },
    // 浏览器视口的高度
    getWindowHeight: function () {
      var windowHeight = 0
      if (document.compatMode === 'CSS1Compat') {
        windowHeight = document.documentElement.clientHeight
      } else {
        windowHeight = document.body.clientHeight
      }
      return windowHeight
    },
    scroll: function () {
      // var timeTag = document.getElementById('timeTag')
      window.onscroll = () => {
        // let today = document.getElementById('today')
        // console.log(this.getScrollTop())
        // let todayTop = parseInt(window.getComputedStyle(today).top.slice(0, -2))
        // console.log(todayTop)
        // console.log(this.getScrollTop() - this.beforeScrollTop)

        // timeTag.style.top = (75 + this.getScrollTop() - this.beforeScrollTop) + 'px'
        // timeTag.style.transform = 'translateY(' + (this.getScrollTop() - this.beforeScrollTop) + 'px)'

        // this.beforeScrollTop = this.getScrollTop()
        // let bottomOfWindow = this.getScrollTop() + this.getWindowHeight() === this.getScrollHeight()

        // if (bottomOfWindow && !this.disabled) {
        //   this.loading = true
        //   setTimeout(() => {
        //     // 加载数据
        //     for (let i = 0; i < 4; i++) {
        //       this.classifyItems.push({ name: '抱歉，我要毁灭一下这个地球', img: require('../assets/img/card2.png'), type: '奇幻，校园，智斗' })
        //     }
        //     this.loaded += this.oneLine
        //     this.loading = false
        //   }, 1000)
        // }
      }
    }
  },
  mounted () {
    this.scroll()
  }
}
</script>

<template>
  <el-container id="container">
    <!-- header -->
    <el-header style="height:auto">
      <nav-head :user="user"></nav-head>
    </el-header>
    <!-- main -->
    <el-main>
      <el-row class=" common-content-row">
        <el-col>
          <div>
            <p></p>
          </div>
        </el-col>
        <el-col>
          <div class=" common-content">
            <el-row class="title-row">
              <div class="left"><img class="history-icon"
                     src="../assets/img/history_icon.png"
                     height="28px"
                     width="28px" /><span class="his-title">浏览历史</span></div>
              <div class="right">
                <el-button type="primary">清除历史</el-button>
              </div>
            </el-row>
            <el-row>
              <el-col :span="2">
                <p></p>
                <!-- <div class="history-tag"
                     id="timeTag">{{timeTag}}</div> -->
              </el-col>
              <el-col :span="22">
                <div style="height:auto;overflow-y:hidden;">
                  <ul>
                    <li v-for="(item,idx) in historyItems"
                        :key="idx">
                      <history-item :historyItem="item"></history-item>
                    </li>
                    <p v-if="loading">加载中...</p>
                    <p v-if="noMore">别再拉了，裤子要掉了(〒︿〒)</p>
                  </ul>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col>
          <div>
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
.history-tag {
  font-size: 14px;
  text-align: center;
  height: 34px;
  line-height: 36px;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 0 8px;
  left: 50px;
  margin-right: 20px;
  border: 1px solid #ff74a5;
  cursor: pointer;
  position: absolute;
  top: 75px;
  bottom: inherit;
  background-color: #ff74a5;
  color: #fff;
}
.history-tag::after {
  right: -8px;
  border-left: 8px solid #ff74a5;
  z-index: 1;
  position: absolute;
  top: 13px;
  content: "";
  border-bottom: 5px solid transparent;
  border-top: 5px solid transparent;
}
.title-row {
  position: relative;
  height: 50px;
  padding: 10px;
  /* padding-top: 100px; */
  /* margin-top: 100px; */
}

.his-title {
  font-size: 18px;
  margin-left: 20px;
}
.left {
  position: absolute;
  display: flex;

  left: 70px;
}
.right {
  position: absolute;
  right: 26px;
}
.el-header {
  padding: 0;
  height: auto;
}
.el-main {
  padding-left: 0px;
  padding-right: 0px;
}

.type-span {
  margin-right: 14px;
  color: rgba(0, 0, 0, 0.34);
}
.tag-span {
  margin: 0 4px;
  padding: 0 10px;
  color: rgba(0, 0, 0, 0.87);
}
ul {
  padding: 0px;
}
.item-row {
  margin-bottom: 20px;
}
</style>
