<script>
import HeadPicture from '@/components/HeadPicture.vue'
export default {
  name: 'UserList',
  components: {
    HeadPicture
  },
  props: {
    activeMenuProp: {
      type: String,
      default: 'attentions'
    }
  },
  data: function () {
    return {
      createUser: '道乐菌',
      attentionList: [
        { nickName: '钳子拯救没胃口', manifesto: 'bilibili星星UP主', headPicture: require('../assets/img/head_picture.jpg') },
        { nickName: '钳子拯救没胃口', manifesto: 'bilibili星星UP主', headPicture: require('../assets/img/head_picture.jpg') },
        { nickName: '钳子拯救没胃口', manifesto: 'bilibili星星UP主', headPicture: require('../assets/img/head_picture.jpg') },
        { nickName: '钳子拯救没胃口', manifesto: 'bilibili星星UP主', headPicture: require('../assets/img/head_picture.jpg') },
        { nickName: '钳子拯救没胃口', manifesto: 'bilibili星星UP主', headPicture: require('../assets/img/head_picture.jpg') },
        { nickName: '钳子拯救没胃口', manifesto: 'bilibili星星UP主', headPicture: require('../assets/img/head_picture.jpg') },
        { nickName: '钳子拯救没胃口', manifesto: 'bilibili星星UP主', headPicture: require('../assets/img/head_picture.jpg') },
        { nickName: '钳子拯救没胃口', manifesto: 'bilibili星星UP主', headPicture: require('../assets/img/head_picture.jpg') },
        { nickName: '钳子拯救没胃口', manifesto: 'bilibili星星UP主', headPicture: require('../assets/img/head_picture.jpg') },
        { nickName: '钳子拯救没胃口', manifesto: 'bilibili星星UP主', headPicture: require('../assets/img/head_picture.jpg') },
        { nickName: '钳子拯救没胃口', manifesto: 'bilibili星星UP主', headPicture: require('../assets/img/head_picture.jpg') },
        { nickName: '钳子拯救没胃口', manifesto: 'bilibili星星UP主', headPicture: require('../assets/img/head_picture.jpg') },
        { nickName: '钳子拯救没胃口', manifesto: 'bilibili星星UP主', headPicture: require('../assets/img/head_picture.jpg') },
        { nickName: '钳子拯救没胃口', manifesto: 'bilibili星星UP主', headPicture: require('../assets/img/head_picture.jpg') }
      ],
      fanList: [
        { nickName: '钳子拯救没胃口', manifesto: 'bilibili星星UP主', headPicture: require('../assets/img/head_picture2.jpg') },
        { nickName: '钳子拯救没胃口', manifesto: 'bilibili星星UP主', headPicture: require('../assets/img/head_picture2.jpg') },
        { nickName: '钳子拯救没胃口', manifesto: 'bilibili星星UP主', headPicture: require('../assets/img/head_picture2.jpg') },
        { nickName: '钳子拯救没胃口', manifesto: 'bilibili星星UP主', headPicture: require('../assets/img/head_picture2.jpg') },
        { nickName: '钳子拯救没胃口', manifesto: 'bilibili星星UP主', headPicture: require('../assets/img/head_picture2.jpg') },
        { nickName: '钳子拯救没胃口', manifesto: 'bilibili星星UP主', headPicture: require('../assets/img/head_picture2.jpg') },
        { nickName: '钳子拯救没胃口', manifesto: 'bilibili星星UP主', headPicture: require('../assets/img/head_picture2.jpg') },
        { nickName: '钳子拯救没胃口', manifesto: 'bilibili星星UP主', headPicture: require('../assets/img/head_picture2.jpg') },
        { nickName: '钳子拯救没胃口', manifesto: 'bilibili星星UP主', headPicture: require('../assets/img/head_picture2.jpg') },
        { nickName: '钳子拯救没胃口', manifesto: 'bilibili星星UP主', headPicture: require('../assets/img/head_picture2.jpg') },
        { nickName: '钳子拯救没胃口', manifesto: 'bilibili星星UP主', headPicture: require('../assets/img/head_picture2.jpg') },
        { nickName: '钳子拯救没胃口', manifesto: 'bilibili星星UP主', headPicture: require('../assets/img/head_picture2.jpg') },
        { nickName: '钳子拯救没胃口', manifesto: 'bilibili星星UP主', headPicture: require('../assets/img/head_picture2.jpg') },
        { nickName: '钳子拯救没胃口', manifesto: 'bilibili星星UP主', headPicture: require('../assets/img/head_picture2.jpg') }
      ],
      curAtPage: 1,
      curFanPage: 1,
      // 当前收藏夹id
      curIndex: 0
    }
  },
  computed: {
    activeMenu: {
      get: function () { return this.activeMenuProp },
      set: function () { }
    },
    hasAtData () {
      return this.attentionList.length > 0
    },
    hasFanData () {
      return this.fanList.length > 0
    }
  },
  methods: {
    handleSelect (value) {
      this.activeMenu = value
      this.$emit('handleSelect', value)
    },
    curAtChange (value) {
      this.curAtPage = value
    },
    curFanChange (value) {
      this.curFanPage = value
    }
  },
  beforeMount () {

  }

}
</script>

<template>
  <div class="ps-content">
    <div class="userlist-div">
      <div class="userlist-fold">
        <div class="fold-title">
          我的关注
        </div>
        <el-menu :default-active="activeMenu"
                 class="menu"
                 @select="handleSelect">
          <!-- 后期扩展,分关注类型 -->
          <el-menu-item index="attentions">
            <i class="fa fa-group"></i>
            <span slot="title">全部关注<span class="menu-num">{{attentionList.length}}</span></span>
          </el-menu-item>
        </el-menu>
        <div class="fold-title">
          我的粉丝
        </div>
        <el-menu :default-active="activeMenu"
                 class="menu"
                 @select="handleSelect">
          <!-- 后期扩展,分关注类型 -->
          <el-menu-item index="fans">
            <i class="fa fa-user-plus"></i>
            <span slot="title">我的粉丝<span class="menu-num">{{fanList.length}}</span></span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="user-list">
        <div>
          <!-- attentions -->
          <div v-show="activeMenu==='attentions'">
            <div class="list-title">全部关注</div>
            <!-- attention row -->
            <div v-if="hasAtData">
              <div class="user-row"
                   v-for="idx in 10*curAtPage<attentionList.length?10:attentionList.length-10*(curAtPage-1)"
                   :key="idx">
                <div class="head-picture">
                  <head-picture :userInfo="attentionList[(curAtPage-1)*10+idx-1]"
                                :size="60"></head-picture>
                </div>
                <div class="info-div">
                  <div class="nick-name">{{attentionList[(curAtPage-1)*10+idx-1].nickName}}</div>
                  <div class="manifesto">{{attentionList[(curAtPage-1)*10+idx-1].manifesto}}</div>
                </div>
                <div class="button-div">
                  <el-button>关注</el-button>
                </div>
                <div class="more-div">
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
              </div>
              <div style="margin-top:20px;">
                <el-pagination background
                               layout="prev, pager, next, jumper"
                               :page-size="10"
                               @current-change="curAtChange"
                               :total="attentionList.length">
                </el-pagination>
              </div>
            </div>
            <div class="nodata"
                 v-else>
              <img src="../assets/img/nodata.png" />
              <div>真的一滴也没有了~</div>
            </div>
          </div>
          <!-- fans -->
          <div v-show="activeMenu==='fans'">
            <div class="list-title">我的粉丝</div>
            <!-- fan row -->
            <div v-if="hasFanData">
              <div class="user-row"
                   v-for="idx in 10*curFanPage<fanList.length?10:fanList.length-10*(curFanPage-1)"
                   :key="idx">
                <div class="head-picture">
                  <head-picture :userInfo="fanList[(curFanPage-1)*10+idx-1]"
                                :size="60"></head-picture>
                </div>
                <div class="info-div">
                  <div class="nick-name">{{fanList[(curFanPage-1)*10+idx-1].nickName}}</div>
                  <div class="manifesto">{{fanList[(curFanPage-1)*10+idx-1].manifesto}}</div>
                </div>
                <div class="button-div">
                  <el-button>关注</el-button>
                </div>
                <div class="more-div">
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
              </div>
              <div style="margin-top:20px;">
                <el-pagination background
                               layout="prev, pager, next, jumper"
                               :page-size="10"
                               @current-change="curFanChange"
                               :total="fanList.length">
                </el-pagination>
              </div>
            </div>
            <div class="nodata"
                 v-else>
              <img src="../assets/img/nodata.png" />
              <div>真的一滴也没有了~</div>
            </div>
          </div>
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
.userlist-div {
  width: 100%;
  display: flex;
}
.userlist-fold {
  width: 200px;
  border-right: rgba(0, 0, 0, 0.05) solid 1px;
  border-radius: 4px;
}
.fold-title {
  padding: 10px;
  color: #99a2aa;
  font-size: 14px;
  text-align: left;
  padding-left: 20px;
}
.user-list {
  width: 100%;
  padding: 20px;
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
.list-title {
  font-size: 18px;
  color: #222;
  text-align: left;
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px solid #e5e9ef;
}
.user-row {
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e5e9ef;
}
.head-picture {
  margin-right: 20px;
}
.info-div {
  width: 80%;
}
.nick-name {
  font-size: 16px;
  color: #222;
  text-align: left;
  padding-top: 10px;
  padding-bottom: 10px;
}
.manifesto {
  font-size: 12px;
  text-align: left;
  color: #99a2aa;
}
.button-div {
  display: flex;
  align-items: center;
}
.more-div {
  display: flex;
  align-items: center;
  width: 5%;
  justify-content: center;
}
.more-action-icon {
  height: 18px;
  width: 18px;
  cursor: pointer;
}
</style>
