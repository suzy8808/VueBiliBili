<script>
export default {
  name: 'PersonMySmoney',
  data: function () {
    return {
      activeName: 'firstPage',
      smoney: {
        balance: 887,
        records: [
          { changeDate: '2019-11-10 01:23:55', change: 1, reason: '登录奖励' },
          { changeDate: '2019-11-10 01:23:55', change: 1, reason: '登录奖励' },
          { changeDate: '2019-11-10 01:23:55', change: 1, reason: '登录奖励' },
          { changeDate: '2019-11-10 01:23:55', change: 1, reason: '登录奖励' },
          { changeDate: '2019-11-10 01:23:55', change: 1, reason: '登录奖励' },
          { changeDate: '2019-11-10 01:23:55', change: 1, reason: '登录奖励' },
          { changeDate: '2019-11-10 01:23:55', change: 1, reason: '登录奖励' },
          { changeDate: '2019-11-10 01:23:55', change: 1, reason: '登录奖励' },
          { changeDate: '2019-11-10 01:23:55', change: 1, reason: '登录奖励' },
          { changeDate: '2019-11-10 01:23:55', change: 1, reason: '登录奖励' },
          { changeDate: '2019-11-10 01:23:55', change: 1, reason: '登录奖励' }
        ]

      }
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    seeMore () {
      this.activeName = 'recordPage'
    }
  }
}
</script>
<template>
  <div>
    <el-tabs v-model="activeName"
             @tab-click="handleClick">
      <el-tab-pane label="首页"
                   name="firstPage"></el-tab-pane>
      <el-tab-pane label="硬币记录"
                   name="recordPage"></el-tab-pane>
    </el-tabs>
    <div v-show="activeName==='firstPage'">
      <el-row class="normal">
        <span class="balance-title">硬币余额：</span><span class="balance">{{smoney.balance}}</span>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="normal">
            <span class="small-title">硬币记录</span><span class="desc">兄弟你最近一周的变化情况</span>
          </div>
          <div>
            <el-table :data="smoney.records.slice(0,7)"
                      border
                      style="width: 100%;"
                      :cell-style="{textAlign:'center'}"
                      :header-cell-style="{textAlign:'center',background:'#f5f5f5'}">
              <el-table-column prop="changeDate"
                               label="时间"
                               width="180">
              </el-table-column>
              <el-table-column prop="change"
                               label="变化"
                               width="80">
              </el-table-column>
              <el-table-column prop="reason"
                               label="原因">
              </el-table-column>
            </el-table>
            <el-button class="see-more"
                       @click="seeMore">查看更多记录&nbsp;></el-button>
          </div>
        </el-col>
        <el-col :span="12"
                class="normal desc-info">
          <div>
            <span class="small-title">硬币有嘛用？</span>
            <p class="info">硬币是silenceHTML的重要道具</p>
            <ul>
              <li class="info">硬币用于对优秀的视频作品进行投币支持，这是对UP主的一种肯定</li>
              <li class="info">硬币还可用于修改昵称、购买标识、参与活动等</li>
            </ul>
          </div>
          <div>
            <span class="small-title">如何获得硬币？</span>
            <ul class="info">
              <li class="info">每天登录后可领取登录硬币奖励</li>
              <li class="info">UP主可通过投稿视频来获得更多硬币（观众投币的百分之九十将作为UP主的硬币收入奖励）</li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>
    <div v-show="activeName==='recordPage'">
      <el-row>
        <div class="normal">
          <span class="small-title">硬币记录</span><span class="desc">兄弟你最近一周的变化情况</span>
        </div>
        <div>
          <el-table :data="smoney.records"
                    border
                    style="width: 100%;"
                    :cell-style="{textAlign:'center'}"
                    :header-cell-style="{textAlign:'center',background:'#f5f5f5'}">
            <el-table-column prop="changeDate"
                             label="时间"
                             width="180">
            </el-table-column>
            <el-table-column prop="change"
                             label="变化"
                             width="80">
            </el-table-column>
            <el-table-column prop="reason"
                             label="原因">
            </el-table-column>
          </el-table>
        </div>
      </el-row>
    </div>
  </div>
</template>

<style scoped>
.normal {
  text-align: left;
  padding: 10px;
}
.balance-title {
  font-size: 18px;
  font-weight: 700;
  color: #222222;
}
.balance {
  font-size: 18px;
  color: #00a1d7;
}
.small-title {
  font-size: 12px;
  font-weight: 700;
  color: #222222;
}
.desc {
  font-size: 12px;
  margin-left: 20px;
  color: #aaaaaa;
}
.see-more {
  margin-top: 20px;
  width: 100%;
  font-size: 12px;
}

.info {
  font-size: 12px;
  color: #6d757a;
  margin-top: 10px;
  margin-bottom: 10px;
}
.desc-info {
  padding-left: 20px;
  padding-right: 20px;
}
</style>
