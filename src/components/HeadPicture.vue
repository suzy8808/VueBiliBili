<script>
import UserInfoFloat from '@/components/UserInfoFloat.vue'
export default {
  name: 'HeadPicture',
  components: {
    UserInfoFloat
  },
  props: {
    userInfo: {
      type: Object
    },
    size: {
      type: Number | String,
      default: 48
    }
  }
}
</script>
<template>
  <!-- 问题：第一个显示不了 -->
  <div class="img-div"
       :style="{height:size+'px',width:size+'px'}">
    <el-avatar :src="userInfo.headPicture"
               :size="parseInt(size)"></el-avatar>
    <!-- 浮动框 -->
    <div class="info">
      <user-info-float :size="size"></user-info-float>
    </div>

  </div>
</template>
<style scoped>
@import "../assets/css/common.css";
.img-div {
  position: relative;
}
/* .info {
  height: 300px;
  width: 400px;
  border-radius: 5px;
  cursor: pointer;
  background: #fff;
  top: -300px;
  position: absolute;
  box-shadow: 0 0 0 1px #cee;
  border-radius: 0 0 4px 4px;
  z-index: 99;
  display: none;
} */
.info {
  border-radius: 5px;
  display: none;
}
.img-div:hover > .info {
  display: block;
}
</style>
