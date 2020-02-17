<script>
import CollectCard from '@/components/CollectCard.vue'
export default {
  name: 'PSCollect',
  components: {
    CollectCard
  },
  data: function () {
    return {
      createUser: '道乐菌',
      collectList: [
        { foldName: '默认收藏夹',
          state: '公开',
          createTime: '2019-11-11',
          collects: [
            { img: require('../assets/img/card.png'), title: '这就是你的命', collectTime: '20181111101010', watch: 1111, collect: 11111, up: '小刚和阿灿', upTime: '20181111121212' },
            { img: require('../assets/img/card.png'), title: '这就是你的命', collectTime: '20181111101010', watch: 1111, collect: 11111, up: '小刚和阿灿', upTime: '20181111121212' },
            { img: require('../assets/img/card.png'), title: '这就是你的命', collectTime: '20181111101010', watch: 1111, collect: 11111, up: '小刚和阿灿', upTime: '20181111121212' },
            { img: require('../assets/img/card.png'), title: '这就是你的命', collectTime: '20181111101010', watch: 1111, collect: 11111, up: '小刚和阿灿', upTime: '20181111121212' },
            { img: require('../assets/img/card.png'), title: '这就是你的命', collectTime: '20181111101010', watch: 1111, collect: 11111, up: '小刚和阿灿', upTime: '20181111121212' },
            { img: require('../assets/img/card.png'), title: '这就是你的命', collectTime: '20181111101010', watch: 1111, collect: 11111, up: '小刚和阿灿', upTime: '20181111121212' },
            { img: require('../assets/img/card.png'), title: '这就是你的命', collectTime: '20181111101010', watch: 1111, collect: 11111, up: '小刚和阿灿', upTime: '20181111121212' },
            { img: require('../assets/img/card.png'), title: '这就是你的命', collectTime: '20181111101010', watch: 1111, collect: 11111, up: '小刚和阿灿', upTime: '20181111121212' },
            { img: require('../assets/img/card.png'), title: '这就是你的命', collectTime: '20181111101010', watch: 1111, collect: 11111, up: '小刚和阿灿', upTime: '20181111121212' },
            { img: require('../assets/img/card.png'), title: '这就是你的命', collectTime: '20181111101010', watch: 1111, collect: 11111, up: '小刚和阿灿', upTime: '20181111121212' },
            { img: require('../assets/img/card.png'), title: '这就是你的命', collectTime: '20181111101010', watch: 1111, collect: 11111, up: '小刚和阿灿', upTime: '20181111121212' },
            { img: require('../assets/img/card.png'), title: '这就是你的命', collectTime: '20181111101010', watch: 1111, collect: 11111, up: '小刚和阿灿', upTime: '20181111121212' },
            { img: require('../assets/img/card.png'), title: '这就是你的命', collectTime: '20181111101010', watch: 1111, collect: 11111, up: '小刚和阿灿', upTime: '20181111121212' },
            { img: require('../assets/img/card.png'), title: '这就是你的命', collectTime: '20181111101010', watch: 1111, collect: 11111, up: '小刚和阿灿', upTime: '20181111121212' },
            { img: require('../assets/img/card.png'), title: '这就是你的命', collectTime: '20181111101010', watch: 1111, collect: 11111, up: '小刚和阿灿', upTime: '20181111121212' }
          ]
        },
        { foldName: '日语', createTime: '2019-11-11', state: '公开', collects: [] },
        { foldName: '桥本奈奈', createTime: '2019-11-11', state: '公开', collects: [] },
        { foldName: '新垣结衣', createTime: '2019-11-11', state: '公开', collects: [] },
        { foldName: '大数据', createTime: '2019-11-11', state: '公开', collects: [] },
        { foldName: '视频制作', createTime: '2019-11-11', state: '公开', collects: [] },
        { foldName: '激励', createTime: '2019-11-11', state: '公开', collects: [] },
        { foldName: 'up', createTime: '2019-11-11', state: '公开', collects: [] },
        { foldName: '美食欲做', createTime: '2019-11-11', state: '公开', collects: [] },
        { foldName: '好看的评论', createTime: '2019-11-11', state: '公开', collects: [] }

      ],
      curPage: 0,
      // 当前收藏夹id
      curIndex: 0,
      // 缓存
      cache: []
    }
  },
  computed: {
    curCollects: {
      get: function () {
        return this.initCurCollects()
      },
      set: function () {

      }

    }
  },
  methods: {
    doSelect (index) {
      index = parseInt(index)

      if (index < 0) {
        console.log('新建')
      } else {
        this.curPage = 0
        this.curIndex = index
      }
    },
    currentChange (value) {
      this.curPage = value - 1
    },
    initCurCollects () {
      if (this.cache.length === 0) {
        for (let i = 0; i < this.collectList.length; i++) {
          this.cache.push(null)
        }
      }
      // 判断缓存是否已有
      if (this.cache[this.curIndex] === null) {
        let collects = this.collectList[this.curIndex].collects
        collects.sort((a, b) => {
          return this.$moment(a.collectTime).isBefore(b.collectTime) ? 1 : -1
        })
        let pageCount = Math.ceil(collects.length / 20)
        let page = []
        let pages = []

        for (let i = 0; i < Math.ceil(collects.length / 5); i++) {
          let row = []
          for (let j = 0; j + i * 5 < collects.length && j < 5; j++) {
            row.push(collects[j + i * 5])
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
        this.cache[this.curIndex] = { foldName: this.collectList[this.curIndex].foldName, createTime: this.collectList[this.curIndex].createTime, pageCount: pageCount, total: collects.length, pageSize: 20, pages: pages, state: this.collectList[this.curIndex].state }
      }
      return this.cache[this.curIndex]
    }
  },
  mounted: function () {
    console.log(this.curCollects)
  }
}
</script>

<template>
  <div class="ps-content">
    <div class="collect-div">
      <div class="collect-fold">
        <div class="fold-title">
          我的创建
        </div>
        <el-menu :default-active="'0'"
                 class="menu"
                 @select="doSelect">
          <el-menu-item index="-1">
            <i class="el-icon-circle-plus"></i>
            <span slot="title">新建收藏夹</span>
          </el-menu-item>
          <el-menu-item v-for="(item,idx) in collectList"
                        :key="idx"
                        :index="idx.toString()">
            <i class="el-icon-folder-opened"></i>
            <span slot="title">{{item.foldName}}<span class="menu-num">{{item.collects.length}}</span></span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="work-list">
        <div v-if="curCollects.pageCount!=0">
          <div class="collect-info">
            <div>
              <collect-card :collect="collectList[curIndex].collects[0]"
                            :showInfo="false">
              </collect-card>
            </div>
            <div class="collect-info-font">
              <div class="collect-fold-name">{{curCollects.foldName}}</div>
              <div class="collect-info-i">创建者：{{createUser}}</div>
              <div class="collect-info-i">{{curCollects.total}}个内容・{{curCollects.state}}</div>
              <div class="collect-info-i">创建时间：{{curCollects.createTime}}</div>
            </div>
          </div>
          <!-- tool待做 -->
          <div class="work-row"
               v-for="row in curCollects.pages[curPage].length"
               :key="row">
            <collect-card v-for="i in curCollects.pages[curPage][row-1].length"
                          :key="i"
                          :collect="curCollects.pages[curPage][row-1][i-1]">
            </collect-card>
          </div>
          <el-row class="common-pagination">
            <el-pagination background
                           layout="prev, pager, next, jumper"
                           :page-size="curCollects.pageSize"
                           @current-change="currentChange"
                           :total="curCollects.total">
            </el-pagination>
          </el-row>
        </div>
        <div v-else
             class="nodata">
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
.collect-div {
  width: 100%;
  display: flex;
}
.collect-fold {
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
.collect-info {
  border-bottom: 1px solid #e5e9ef;
  display: flex;
}
.collect-fold-name {
  font-size: 18px;
  font-weight: 700px;
  color: #222;
  padding-bottom: 10px;
}
.collect-info-font {
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: flex-start;
}
.collect-info-i {
  font-size: 12px;
  color: #99a2aa;
  padding-top: 5px;
}
</style>
