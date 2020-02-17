<script>
export default {
  name: 'WorkCard',
  props: {
    work: Object,
    showInfo: {
      type: Boolean,
      default: true
    }
  },
  data: function () {
    return {
    }
  },
  methods: {
    handleNum (value) {
      return value * 1.0 / 10000 >= 1 ? (value * 1.0 / 10000).toFixed(1) + '万' : value
    },
    handleTime (time) {
      return this.$moment(time, 'YYYYMMDDHHmmss').format('YYYY-MM-DD')
    }
  }
}
</script>
<template>
  <div class="work-card">
    <div class="img-div">
      <img :src="work.img"
           class="img-style" />
      <a href="#"
         v-if="showInfo">
        <div class="info"
             id="mask">
          <div class="info-item">点赞：{{handleNum(work.like)}}</div>
          <div class="info-item">投币：{{handleNum(work.coin)}}</div>
          <div class="info-item">收藏：{{handleNum(work.collect)}}</div>
          <div class="info-item">下载：{{handleNum(work.download)}}</div>
        </div>
      </a>
    </div>
    <div v-if="showInfo">
      <div class="title"
           :title="work.title">{{work.title}}</div>
      <div class="date">
        <span>
          <i class="el-icon-video-play"
             style="margin-right:5px;"></i>{{handleNum(work.watch)}}
        </span>
        <span style="margin-left:20px;">
          <i class="el-icon-time"
             style="margin-right:5px;"></i>{{handleTime(work.createTime)}}
        </span>
        <el-dropdown trigger="click"
                     class="more-action">
          <img class="icon"
               title="更多操作"
               src="../assets/img/more_action.png" />
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>删除</el-dropdown-item>
            <el-dropdown-item>移动到</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<style scoped>
.work-card {
  width: 190px;
  height: auto;
  padding: 10px;
}
.img-style {
  height: 119px;
  width: 190px;
  border-radius: 5px;
  cursor: pointer;
}
.title {
  font-size: 12px;
  color: #222;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: left;
  cursor: pointer;
}
.title:hover {
  color: #00a1d6;
}
.date {
  font-size: 12px;
  color: #999999;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: left;
}
.icon {
  height: 12px;
  width: 12px;
  float: right;
  cursor: pointer;
  padding-left: 20px;
}
.img-div {
  position: relative;
}
.info {
  height: 119px;
  width: 190px;
  border-radius: 5px;
  cursor: pointer;
  opacity: 0;
  background: rgba(0, 0, 0, 0.45);
  font-size: 12px;
  color: #fff;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 4;
  transition: opacity 0.2s ease;
}
.img-div a:hover .info {
  opacity: 1;
}
.info-item {
  padding-bottom: 5px;
  padding-left: 15px;
}
.more-action {
  float: right;
}
</style>
