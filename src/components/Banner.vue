<script>
export default {
  name: 'Banner',
  props: ['user']
}
</script>
<template>
  <!-- TODO 添加视角 -->
  <div class="banner-div">
    <div class="top"></div>
    <div class="bottom">
      <div>
        <el-avatar :src="require('../assets/img/head_picture.jpg')"
                   :size="64"></el-avatar>
      </div>
      <div class="info-div">
        <div id="user-name">道乐菌<el-tag type="danger"
                  style="margin-left:5px;"
                  :size="'mini'">LV4</el-tag>
        </div>
        <div id="manifesto">在那之前好好活着。
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.banner-div {
  width: 1280px;
  height: 200px;
  background: url("~@/assets/img/banner_bg.png") center center no-repeat;
}
.top {
  height: 50%;
}
.bottom {
  height: 30%;
  display: flex;
  justify-content: flex-start;
  padding: 20px;
}
.info-div {
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  align-items: baseline;
}
#user-name {
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 10px;
}
#manifesto {
  font-size: 12px;
  color: #eeeeee;
}
</style>
