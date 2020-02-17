<script>
import NavHead from '@/components/NavHead.vue'
import FooterBar from '@/components/FooterBar.vue'
import Card from '@/components/Card.vue'
import BackTop from '@/components/BackTop.vue'
export default {
  name: 'Classify',
  components: {
    NavHead,
    FooterBar,
    Card,
    BackTop
  },
  data: function () {
    return {
      user: null,
      oneLine: 4,
      classifyTitle: [
        { title: '题材', items: ['全部', '冒险', '热血', '搞笑', '恋爱', '少女', '日常', '校园', '运动', '正能量', '治愈', '古风', '玄幻', '奇幻', '惊奇', '悬疑', '都市', '总裁'] },
        { title: '地区', items: ['全部', '大陆', '日本', '其他'] },
        { title: '进度', items: ['全部', '连载', '完结', '新上架'] },
        { title: '收费', items: ['全部', '免费', '付费'] },
        { title: '排序', items: ['人气推荐', '更新时间', '追漫人数'] }
      ],
      classifyItems: [
        { name: '辉夜大小姐想让我告白 ~天才们的恋爱头脑战~', img: require('../assets/img/card.png'), type: '恋爱，搞笑，校园，日常' },
        { name: '辉夜大小姐想让我告白 ~天才们的恋爱头脑战~', img: require('../assets/img/card.png'), type: '恋爱，搞笑，校园，日常' },
        { name: '辉夜大小姐想让我告白 ~天才们的恋爱头脑战~', img: require('../assets/img/card.png'), type: '恋爱，搞笑，校园，日常' },
        { name: '辉夜大小姐想让我告白 ~天才们的恋爱头脑战~', img: require('../assets/img/card.png'), type: '恋爱，搞笑，校园，日常' },
        { name: '辉夜大小姐想让我告白 ~天才们的恋爱头脑战~', img: require('../assets/img/card.png'), type: '恋爱，搞笑，校园，日常' },
        { name: '辉夜大小姐想让我告白 ~天才们的恋爱头脑战~', img: require('../assets/img/card.png'), type: '恋爱，搞笑，校园，日常' },
        { name: '辉夜大小姐想让我告白 ~天才们的恋爱头脑战~', img: require('../assets/img/card.png'), type: '恋爱，搞笑，校园，日常' },
        { name: '辉夜大小姐想让我告白 ~天才们的恋爱头脑战~', img: require('../assets/img/card.png'), type: '恋爱，搞笑，校园，日常' },
        { name: '辉夜大小姐想让我告白 ~天才们的恋爱头脑战~', img: require('../assets/img/card.png'), type: '恋爱，搞笑，校园，日常' },
        { name: '辉夜大小姐想让我告白 ~天才们的恋爱头脑战~', img: require('../assets/img/card.png'), type: '恋爱，搞笑，校园，日常' },
        { name: '辉夜大小姐想让我告白 ~天才们的恋爱头脑战~', img: require('../assets/img/card.png'), type: '恋爱，搞笑，校园，日常' },
        { name: '辉夜大小姐想让我告白 ~天才们的恋爱头脑战~', img: require('../assets/img/card.png'), type: '恋爱，搞笑，校园，日常' }
      ],
      loaded: 12,
      loading: false
    }
  },
  computed: {
    noMore () {
      return this.loaded >= 42
    },
    disabled () {
      return this.loading || this.noMore
    }
  },
  methods: {
    // 滚动条在Y轴上的滚动距离
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
      window.onscroll = () => {
        let bottomOfWindow = this.getScrollTop() + this.getWindowHeight() === this.getScrollHeight()

        if (bottomOfWindow && !this.disabled) {
          this.loading = true
          setTimeout(() => {
            // 加载数据
            for (let i = 0; i < 4; i++) {
              this.classifyItems.push({ name: '抱歉，我要毁灭一下这个地球', img: require('../assets/img/card2.png'), type: '奇幻，校园，智斗' })
            }
            this.loaded += this.oneLine
            this.loading = false
          }, 1000)
        }
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
      <el-row class="classify-content common-content-row">
        <el-col>
          <div class="grid-content">
            <p></p>
          </div>
        </el-col>
        <el-col>
          <div class="grid-content common-content">
            <el-row v-for="idx in classifyTitle.length"
                    :key="idx"
                    class="classify-title">
              <span class="type-span">{{classifyTitle[idx-1].title}}</span>
              <span class="tag-span"
                    v-for="(item ,index) in classifyTitle[idx-1].items"
                    :key="index">{{item}}</span>
            </el-row>
            <div style="height:auto;overflow-y:hidden;">
              <ul>
                <li v-for="idx in Math.ceil(loaded/oneLine)"
                    :key="idx">
                  <el-row class="item-row">
                    <el-col :span="24/oneLine"
                            v-for="i in oneLine"
                            :key="i">
                      <card :card="classifyItems[(idx-1)*oneLine+i-1]"></card>
                    </el-col>
                  </el-row>
                </li>
                <p v-if="loading">加载中...</p>
                <p v-if="noMore">别再拉了，裤子要掉了(〒︿〒)</p>
              </ul>
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
.el-header {
  padding: 0;
  height: auto;
}
.el-main {
  padding-left: 0px;
  padding-right: 0px;
}
.classify-content {
  display: flex;
}
.grid-content {
  height: 100%;
}
.classify-title {
  display: flex;
  margin-bottom: 20px;
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
