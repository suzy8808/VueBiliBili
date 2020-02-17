<script>
export default {
  name: 'BackTop',
  data: function () {
    return {
      btnFlag: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollToTop)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
  },
  methods: {
    // 点击图片回到顶部方法，加计时器是为了过渡顺滑
    backTop () {
      const that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
    },

    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop () {
      const that = this
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      that.scrollTop = scrollTop
      if (that.scrollTop > 0) {
        that.btnFlag = true
      } else {
        that.btnFlag = false
      }
    }
  }
}

</script>
<template>
  <div class="back-div"><img v-if="btnFlag"
         class="go-top"
         src="../assets/img/back_top.png"
         @click="backTop"></div>
</template>

<style scoped>
.back-div {
  height: 100%;
  /* z-index: 999; */
}
.go-top {
  height: 174px;
  width: 150px;
  position: fixed;
  bottom: 100px;
}
</style>
