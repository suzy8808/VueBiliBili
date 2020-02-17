<script>
import Card from '@/components/Card.vue'
export default {
  name: 'UpdateTable',
  props: ['updateItems'],
  components: {
    Card
  },
  data: function () {
    return {
      oneLine: 4// 一行多沙card
    }
  },
  methods: {
    selectDate: function (index) {
      this.updateItems.forEach(element => {
        element.isShow = false
      })
      this.updateItems[index].isShow = true
    }
  }
}
</script>
<template>
  <div class="main-item">
    <el-row class="title-row">
      <div class="title">
        <h2 style="text-align:left;font-weight:700;display: inline-block;margin-right:24px">更新表</h2>
        <span v-for="index in 7"
              @click="selectDate(index-1)"
              :class="updateItems[index-1].isShow?'date-selected':'date'"
              :key="index">{{updateItems[index-1].updateDate}}</span>
      </div>
      <!-- <el-breadcrumb separator="/">
        <el-breadcrumb-item class="date"
                            v-for="index in 7"
                            @click="selectDate(index-1)"
                            :key="index">{{updateItems[index-1].updateDate}}</el-breadcrumb-item>
      </el-breadcrumb> -->
    </el-row>
    <el-row>
      <div class="block">

        <el-carousel trigger="click"
                     height="450px"
                     :autoplay='false'
                     v-for="(updateItem,index) in updateItems"
                     :key="index"
                     v-show="updateItem.isShow"
                     :loop="false">
          <el-carousel-item v-for="idx in Math.ceil(updateItem.updateCards.length/(oneLine*2))"
                            :key="idx">
            <el-row class="card-row">
              <el-col :span="24/oneLine"
                      v-for="i in oneLine"
                      :key="i"
                      class="card-col">
                <card v-if="(idx-1)*oneLine*2+i-1<updateItem.updateCards.length"
                      :card="updateItem.updateCards[(idx-1)*oneLine*2+i-1]"></card>
              </el-col>
            </el-row>
            <el-row class="card-row">
              <el-col :span="24/oneLine"
                      v-for="i in oneLine"
                      :key="i"
                      class="card-col">
                <card v-if="(idx-1)*oneLine*2+i-1+oneLine<updateItem.updateCards.length"
                      :card="updateItem.updateCards[(idx-1)*oneLine*2+i-1+oneLine]"></card>
              </el-col>
            </el-row>
          </el-carousel-item>
        </el-carousel>

      </div>
    </el-row>
  </div>
</template>

<style scoped>
.title {
  margin-bottom: 20px;
  float: left;
}
.title-row {
  display: flex;
  align-items: center;
}
.date {
  font-size: 16px;
  margin-right: 36px;
  cursor: pointer;
}
.date-selected {
  font-size: 16px;
  margin-right: 36px;
  color: #32aaff;
  cursor: pointer;
}
.card-row {
  height: 50%;
}
.card-col {
  display: flex;
  justify-content: end;
}
</style>
