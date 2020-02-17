<script>
export default {
  name: 'NavBar',
  data: function () {
    return {
      catalogs: [
        '冒险',
        '热血',
        '搞笑',
        '恋爱',
        '少女',
        '日常',
        '校园',
        '运动',
        '正能量',
        '治愈',
        '古风',
        '玄幻',
        '奇幻',
        '惊奇',
        '悬疑',
        '都市',
        '全部>'
      ]
    }
  },
  methods: {
    goClassify: function (item) {
      this.$router.push('/classify', item)
    }
  }
}
</script>

<template>
  <el-row class="common-content-row">

    <el-col class="common-content">
      <div class="grid-content bg-purple">
        <span v-for="(item,index) in catalogs"
              :key="index"
              class="bar-item"
              @click="goClassify(item)">{{item}}</span>
      </div>
    </el-col>

  </el-row>
</template>

<style scoped>
@import "../assets/css/common.css";
.el-row {
  background-color: rgba(0, 0, 0, 1);
  height: 73px;
  display: flex;
  align-items: center;
}
.bar-item {
  font-size: 16px;
  color: #fff;
  margin: 20px;
  cursor: pointer;
}

.el-col {
  border-radius: 4px;
}
/* .bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
} */
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
