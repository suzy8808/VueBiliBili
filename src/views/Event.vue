<script>
import NavHead from '@/components/NavHead.vue'

import FooterBar from '@/components/FooterBar.vue'

import EventComponent from '@/components/EventComponent.vue'
import BackTop from '@/components/BackTop.vue'

export default {
  name: 'Event',
  components: {
    NavHead,
    FooterBar,
    EventComponent,
    BackTop

  },
  data: function () {
    return {
      user: null
    }
  },
  methods: {

  }
}
</script>
<template>
  <el-container class="event">
    <!-- header -->
    <el-header style="height:auto">
      <nav-head :user="user"></nav-head>

    </el-header>
    <!-- main -->
    <el-main>
      <el-row class="common-content-row">
        <el-col>
          <div>
            <p></p>
          </div>
        </el-col>
        <el-col>
          <div class="common-content sp-content">
            <event-component></event-component>

          </div>
        </el-col>
        <el-col>
          <div class="common-right-content">
            <back-top></back-top>
          </div>
        </el-col>
      </el-row>
    </el-main>
    <!-- footer -->
    <el-footer style="height:auto">
      <footer-bar></footer-bar>
    </el-footer>
  </el-container>
</template>

<style scoped>
@import "../assets/css/common.css";
.event {
  background: #d2e9fb url("~@/assets/img/event_bg.png") top/contain no-repeat;
}
.sp-content {
  min-height: 500px;
}
</style>
