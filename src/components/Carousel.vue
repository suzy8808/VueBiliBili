<script>
export default {
  name: 'Carousel',
  data: function () {
    return {
    }
  },
  props: ['carousels']

}
</script>
<template>
  <el-carousel :interval="4000"
               type="card"
               height="480px">
    <el-carousel-item v-for="(item,index) in carousels"
                      :key="index">
      <img :src="item"
           height="480px"
           width="100%" />
    </el-carousel-item>
  </el-carousel>

</template>
<style scoped>
.el-carousel {
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0.34),
    rgba(0, 0, 0, 1)
  );
  /* background-color: rgba(0, 0, 0, 0.8); */
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
