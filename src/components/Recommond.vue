<script>
import RankingList from '@/components/RankingList.vue'
import Card from '@/components/Card.vue'
export default {
  name: 'Recommond',
  components: {
    RankingList,
    Card
  },
  props: ['recommondItems', 'rankinglist']
}
</script>

<template>
  <div class="main-item">
    <el-row>
      <el-col :span="17">
        <div class="title">
          <h2 style="text-align:left;font-weight:700;">作品推荐</h2>
        </div>
        <el-row>
          <el-col :span="7"
                  v-for="id in 3"
                  :key="id"
                  style="margin-right: 26px;margin-bottom: 30px;">
            <card :card="recommondItems[id-1]"></card>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="7"
                  v-for="id in 3"
                  :key="id+3"
                  style="margin-right: 26px;margin-bottom: 30px;">
            <card :card="recommondItems[id+2]"></card>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="7"
                  v-for="id in 3"
                  :key="id+6"
                  style="margin-right: 26px;margin-bottom: 30px;">
            <card :card="recommondItems[id+5]"></card>
          </el-col>
        </el-row>
      </el-col>
      <!-- 排行榜 -->
      <el-col :span="7">
        <ranking-list :rankinglist="rankinglist"></ranking-list>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.title {
  margin-bottom: 20px;
}
</style>
