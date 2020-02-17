<script>
import WorkCard from '@/components/WorkCard.vue'
export default {
  name: 'PSWork',
  components: {
    WorkCard
  },
  data: function () {
    return {
      createUser: '道乐菌',
      workList: [
        { foldName: '默认作品夹',
          state: '公开',
          createTime: '2019-11-11',
          works: [
            { img: require('../assets/img/card.png'), title: '这就是你的命', createTime: '20181101101010', watch: 1, collect: 5, like: 1, coin: 1, download: 1 },
            { img: require('../assets/img/card.png'), title: '这就是你的命', createTime: '20181102101010', watch: 2, collect: 4, like: 2, coin: 2, download: 2 },
            { img: require('../assets/img/card.png'), title: '这就是你的命', createTime: '20181103101010', watch: 3, collect: 3, like: 3, coin: 3, download: 3 },
            { img: require('../assets/img/card.png'), title: '这就是你的命', createTime: '20181104101010', watch: 4, collect: 2, like: 4, coin: 4, download: 4 },
            { img: require('../assets/img/card.png'), title: '这就是你的命', createTime: '20181105101010', watch: 51233, collect: 1, like: 5, coin: 5, download: 5 }

          ]
        },
        { foldName: '前端网页',
          createTime: '2019-11-11',
          state: '公开',
          works: [
            { img: require('../assets/img/card.png'), title: '这就是你的命', createTime: '20181101101010', watch: 1, collect: 1, like: 1, coin: 1, download: 1 },
            { img: require('../assets/img/card.png'), title: '这就是你的命', createTime: '20181102101010', watch: 2, collect: 2, like: 2, coin: 2, download: 2 },
            { img: require('../assets/img/card.png'), title: '这就是你的命', createTime: '20181103101010', watch: 3, collect: 3, like: 3, coin: 3, download: 3 },
            { img: require('../assets/img/card.png'), title: '这就是你的命', createTime: '20181104101010', watch: 4, collect: 4, like: 4, coin: 4, download: 4 },
            { img: require('../assets/img/card.png'), title: '这就是你的命', createTime: '20181105101010', watch: 51233, collect: 5, like: 5, coin: 5, download: 5 }

          ] },
        { foldName: 'Vue', createTime: '2019-11-11', state: '公开', works: [] },
        { foldName: '游戏', createTime: '2019-11-11', state: '公开', works: [] }
      ],
      curPage: 0,
      // 当前收藏夹id
      curIndex: 0,
      // 缓存
      cache: [],
      sortState: 'lastUp',
      curWorks: null
    }
  },
  computed: {
    // curWorks: {
    //   get: function () {
    //     return this.initCurWorks()
    //   },
    //   set: function () {
    //   }
    // }
  },
  methods: {
    doSelect (index) {
      index = parseInt(index)
      console.log(index)

      if (index < 0) {
        console.log('新建')
      } else {
        this.curPage = 0
        this.curIndex = index
        this.sortState = 'lastUp'
        this.curWorks = this.initCurWorks()
      }
    },
    currentChange (value) {
      this.curPage = value - 1
    },
    initCurWorks () {
      if (this.cache.length === 0) {
        for (let i = 0; i < this.workList.length; i++) {
          this.cache.push(null)
        }
      }

      // 判断缓存是否已有
      if (this.cache[this.curIndex] === null) {
        let works = this.workList[this.curIndex].works
        works.sort((a, b) => {
          return this.$moment(a.createTime).isBefore(b.createTime) ? 1 : -1
        })

        let pageCount = Math.ceil(works.length / 20)
        let page = []
        let pages = []

        for (let i = 0; i < Math.ceil(works.length / 5); i++) {
          let row = []
          for (let j = 0; j + i * 5 < works.length && j < 5; j++) {
            row.push(works[j + i * 5])
          }
          page.push(row)
          if (i % 4 === 3) {
            pages.push(page)
            page = []
          }
        }
        if (page.length !== 0) {
          pages.push(page)
        }
        this.cache[this.curIndex] = { foldName: this.workList[this.curIndex].foldName, createTime: this.workList[this.curIndex].createTime, pageCount: pageCount, total: works.length, pageSize: 20, pages: pages, state: this.workList[this.curIndex].state }
      }
      return this.cache[this.curIndex]
    },
    sortWorks (tab, event) {
      let works = this.workList[this.curIndex].works
      if (tab.name === 'lastUp') {
        works.sort((a, b) => {
          return this.$moment(a.createTime).isBefore(b.createTime) ? 1 : -1
        })
      } else if (tab.name === 'mostWatch') {
        works.sort((a, b) => {
          return b.watch - a.watch
        })
      } else if (tab.name === 'mostCollect') {
        works.sort((a, b) => {
          return b.collect - a.collect
        })
      } else {
        works.sort((a, b) => {
          return b.download - b.download
        })
      }

      let pageCount = Math.ceil(works.length / 20)
      let page = []
      let pages = []

      for (let i = 0; i < Math.ceil(works.length / 5); i++) {
        let row = []
        for (let j = 0; j + i * 5 < works.length && j < 5; j++) {
          row.push(works[j + i * 5])
        }
        page.push(row)
        if (i % 4 === 3) {
          pages.push(page)
          page = []
        }
      }
      if (page.length !== 0) {
        pages.push(page)
      }

      this.curWorks = { foldName: this.workList[this.curIndex].foldName, createTime: this.workList[this.curIndex].createTime, pageCount: pageCount, total: works.length, pageSize: 20, pages: pages, state: this.workList[this.curIndex].state }
    }
  },
  beforeMount () {
    this.curWorks = this.initCurWorks()
  }

}
</script>

<template>
  <div class="ps-content">
    <div class="work-div">
      <div class="work-fold">
        <div class="fold-title">
          我的投稿
        </div>
        <el-menu :default-active="'0'"
                 class="menu"
                 @select="doSelect">
          <!-- <el-menu-item index="-1">
            <i class="el-icon-circle-plus"></i>
            <span slot="title">新建收藏夹</span>
          </el-menu-item> -->
          <el-menu-item v-for="(item,idx) in workList"
                        :key="idx"
                        :index="idx.toString()">
            <i class="el-icon-folder-opened"></i>
            <span slot="title">{{item.foldName}}<span class="menu-num">{{item.works.length}}</span></span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="work-list">
        <div v-if="curWorks.pageCount!=0">
          <div class="work-info">
            <div>
              <work-card :work="workList[curIndex].works[0]"
                         :showInfo="false">
              </work-card>
            </div>
            <div class="work-info-font">
              <div class="work-fold-name">{{curWorks.foldName}}</div>
              <div class="work-info-i">创建者：{{createUser}}</div>
              <div class="work-info-i">{{curWorks.total}}个内容・{{curWorks.state}}</div>
              <div class="work-info-i">创建时间：{{curWorks.createTime}}</div>
            </div>
          </div>
          <!-- tool待做 数组排序和搜索 -->
          <div class="tool">
            <el-tabs v-model="sortState"
                     @tab-click="sortWorks">
              <el-tab-pane label="最新发布"
                           name="lastUp"></el-tab-pane>
              <el-tab-pane label="最多浏览"
                           name="mostWatch"></el-tab-pane>
              <el-tab-pane label="最多收藏"
                           name="mostCollect"></el-tab-pane>
              <el-tab-pane label="最多下载"
                           name="mostDownload"></el-tab-pane>
            </el-tabs>
          </div>
          <div class="work-row"
               v-for="row in curWorks.pages[curPage].length"
               :key="row">
            <work-card v-for="i in curWorks.pages[curPage][row-1].length"
                       :key="i"
                       :work="curWorks.pages[curPage][row-1][i-1]">
            </work-card>
          </div>
          <el-row class="common-pagination">
            <el-pagination background
                           layout="prev, pager, next, jumper"
                           :page-size="curWorks.pageSize"
                           @current-change="currentChange"
                           :total="curWorks.total">
            </el-pagination>
          </el-row>
        </div>
        <div class="nodata"
             v-else>
          <img src="../assets/img/nodata.png" />
          <div>真的一滴也没有了~</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../assets/css/common.css";
.ps-content {
  width: 100%;
  background: #fff;
  box-shadow: 0 0 0 1px #eee;
  border-radius: 4px;
  min-height: 450px;
}
.work-div {
  width: 100%;
  display: flex;
}
.work-fold {
  width: 200px;
  border-right: rgba(0, 0, 0, 0.05) solid 1px;
  border-radius: 4px;
}
.work-list {
  width: 100%;
  padding: 20px;
}
.fold-title {
  padding: 10px;
  color: #99a2aa;
  font-size: 14px;
  text-align: left;
  padding-left: 20px;
}
.el-menu {
  border-right: 0px;
}
.el-menu >>> li {
  width: 100%;
  text-align: left;
}
.menu-num {
  position: absolute;
  right: 20px;
  top: 2px;
}

.el-menu >>> .is-active {
  color: #fff;
  background-color: #00a1d6;
}
.tool {
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
}
.el-tabs >>> .el-tabs__nav-wrap::after {
  background: #fff;
}
.el-tabs >>> .el-tabs__item {
  height: 60px;
  line-height: 60px;
}

.work-row {
  display: flex;
}
.nodata {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-size: 14px;
  color: #6d757a;
}
.work-info {
  border-bottom: 1px solid #e5e9ef;
  display: flex;
}
.work-fold-name {
  font-size: 18px;
  font-weight: 700px;
  color: #222;
  padding-bottom: 10px;
}
.work-info-font {
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: flex-start;
}
.work-info-i {
  font-size: 12px;
  color: #99a2aa;
  padding-top: 5px;
}
</style>
