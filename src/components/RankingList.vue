<script>
export default {
  name: 'RankingList',
  props: ['rankinglist'],
  methods: {
    onMouseEnter: function (id) {
      this.rankinglist.forEach(rank => {
        rank.showWord = true
      })

      this.rankinglist[id].showWord = false
    }
    // onMouseLeave: function (id) {
    //   this.rankinglist[id].showWord = true
    // }
  }
}
</script>
<template>
  <div style="padding-left:20px;">
    <!-- title -->
    <el-row class="title">
      <el-col :span="20">
        <h2 style="text-align:left;font-weight:700;">排行榜</h2>
      </el-col>
      <el-col :span="4">
        <p class="more-span">更多></p>
      </el-col>
    </el-row>
    <!-- 排行 -->
    <div v-for="(rank,id) in rankinglist"
         :key="id"
         @mouseenter="onMouseEnter(id)">
      <el-row class="rank-item"
              v-show="rank.showWord">
        <el-col :span="4">
          <p :class="id<3?'id-p-gold':'id-p'">{{id+1}}</p>
        </el-col>
        <el-col :span="12">
          <p class="name-p">{{rank.name}}</p>
        </el-col>
        <el-col :span="8">
          <p class="update-p">{{rank.createTime}}</p>
        </el-col>
      </el-row>
      <!-- image -->
      <el-container class="rank-item img-item"
                    style="height:160px"
                    v-show="!rank.showWord">
        <el-aside width="240px"
                  style="overflow-y: hidden;">
          <img :src="rank.img"
               height="100%"
               width="240px" />
        </el-aside>
        <el-container>
          <el-main class="img-name">
            <p :title="rank.name"
               class="line-limit-length">{{rank.name}}</p>
            <p class="img-word line-limit-length"
               :title="rank.author">{{rank.author}}</p>
            <p class="img-word line-limit-length"
               :title="rank.type">{{rank.type}}</p>
          </el-main>
          <el-footer style="padding-right:0px">
            <el-row>
              <!-- <el-col :span="12">
                <p class="img-word">{{rank.author}}</p>
                <p class="img-word">{{rank.type}}</p>
                <p class="img-word">更新至{{rank.update}}话</p>
              </el-col> -->
              <el-col :span="12"
                      :class="id<3?'img-id-gold':'img-id'">
                {{rank.id}}
              </el-col>
            </el-row>
          </el-footer>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<style scoped>
.title {
  margin-bottom: 10px;
}
.more-span {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.56);
  margin-top: 25px;
  cursor: pointer;
}
.more-span:hover {
  color: #32aaff;
}
.rank-item {
  cursor: pointer;
  margin-bottom: 10px;
}
.img-item {
  background-color: rgba(21, 21, 21, 0.11);
}
.id-p-gold {
  font-size: 18px;
  font-weight: 700;
  color: #cf9870;
  text-align: left;
}
.id-p {
  font-size: 18px;
  color: rgba(0, 0, 0, 0.34);
  text-align: left;
}
.name-p {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.87);
  text-align: left;
}
.update-p {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.34);
  text-align: right;
  line-height: 22px;
}
.img-name {
  font-size: 18px;
  color: rgba(0, 0, 0, 0.87);
  text-align: left;
  padding-top: 0px;
}
.img-word {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.34);
  text-align: left;
  margin: 0px;
  margin-top: 10px;
}
.img-id-gold {
  font-size: 64px;
  font-weight: 700;
  color: #cf9870;
  text-align: right;
  margin: 0px;
  line-height: 50px;
}
.img-id {
  font-size: 64px;
  color: rgba(0, 0, 0, 0.34);
  text-align: right;
  margin: 0px;
  line-height: 50px;
}
.line-limit-length {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0px;
}
</style>
