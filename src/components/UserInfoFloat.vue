<script>
export default {
  name: 'UserInfoFloat',
  props: ['size'],
  data: function () {
    return {
      userInfo: {
        nickName: '道乐菌',
        headPicture: require('../assets/img/head_picture.jpg'),
        level: 4,
        attention: 444,
        fans: 444,
        manifesto: '吃吃吃买买买出去浪 视频分类请看收藏夹 老丸子没事干交流会：733749659 微博/微信：柴犬老丸子'
      }
    }
  }
}
</script>
<template>
  <!-- 浮动框 -->
  <div class="info-bottom"
       :style="{left:parseInt(size)/2+'px',top:parseInt(size)+'px'}">
    <div class="banner">
    </div>
    <div>
      <div>
        <el-avatar :src="userInfo.headPicture"
                   class="head-picture"
                   :size="48"></el-avatar>
      </div>
      <div class="right">
        <div class="nick-name">{{userInfo.nickName}}<el-tag type="danger"
                  style="margin-left:5px;"
                  :size="'mini'">LV{{userInfo.level}}</el-tag>
        </div>
        <div class="number">
          <span>关注：{{userInfo.attention}}</span>
          <span style="margin-left:20px">粉丝：{{userInfo.fans}}</span>
        </div>
        <div class="manifesto">
          {{userInfo.manifesto}}
        </div>
        <div class="button-div">
          <el-button>+ 关注</el-button>
          <el-button>发消息</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.info-bottom {
  height: 300px;
  width: 400px;
  border-radius: 5px;
  cursor: pointer;
  background: #fff;
  position: absolute;
  box-shadow: 0 0 0 1px #cee;
  border-radius: 0 0 4px 4px;
  z-index: 99;
}
.img-div:hover > .info-bottom {
  display: block;
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
.right {
  margin-left: 90px;
}
.nick-name {
  text-align: left;
  font-size: 16px;
  color: #222;
  padding: 5px;
}
.number {
  text-align: left;
  font-size: 12px;
  color: #222;
  padding: 5px;
}
.manifesto {
  text-align: left;
  font-size: 12px;
  color: #99a2aa;
  padding: 5px;
}
.button-div {
  margin-top: 20px;
  display: flex;
}
</style>
