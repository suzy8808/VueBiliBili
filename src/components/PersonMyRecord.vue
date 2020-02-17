<script>
export default {
  name: 'PersonMyRecord',
  data: function () {
    return {
      activeName: 'loginPage',
      moral: 100,
      loginRecords: [
        { date: '2019-11-09 19:58:00', status: '登录' },
        { date: '2019-11-09 19:58:00', status: '登录' },
        { date: '2019-11-09 19:58:00', status: '登录' },
        { date: '2019-11-09 19:58:00', status: '登录' },
        { date: '2019-11-09 19:58:00', status: '登录' },
        { date: '2019-11-09 19:58:00', status: '登录' },
        { date: '2019-11-09 19:58:00', status: '登录' }
      ],
      moralRecords: [
        { date: '2019-11-09 19:58:00', change: -1, reason: '碉堡了', explain: '碉堡了' },
        { date: '2019-11-09 19:58:00', change: -1, reason: '碉堡了', explain: '碉堡了' },
        { date: '2019-11-09 19:58:00', change: -1, reason: '碉堡了', explain: '碉堡了' },
        { date: '2019-11-09 19:58:00', change: -1, reason: '碉堡了', explain: '碉堡了' },
        { date: '2019-11-09 19:58:00', change: -1, reason: '碉堡了', explain: '碉堡了' },
        { date: '2019-11-09 19:58:00', change: -1, reason: '碉堡了', explain: '碉堡了' },
        { date: '2019-11-09 19:58:00', change: -1, reason: '碉堡了', explain: '碉堡了' }

      ],
      expRecords: [
        { date: '2019-11-09 19:58:00', change: 5, reason: '登录奖励' },
        { date: '2019-11-09 19:58:00', change: 5, reason: '登录奖励' },
        { date: '2019-11-09 19:58:00', change: 5, reason: '登录奖励' },
        { date: '2019-11-09 19:58:00', change: 5, reason: '登录奖励' },
        { date: '2019-11-09 19:58:00', change: 5, reason: '登录奖励' },
        { date: '2019-11-09 19:58:00', change: 5, reason: '登录奖励' },
        { date: '2019-11-09 19:58:00', change: 5, reason: '登录奖励' }
      ]

    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<template>
  <div>
    <el-tabs v-model="activeName"
             @tab-click="handleClick">
      <el-tab-pane label="登录记录"
                   name="loginPage"></el-tab-pane>
      <el-tab-pane label="节操记录"
                   name="moralPage"></el-tab-pane>
      <el-tab-pane label="经验记录"
                   name="expPage"></el-tab-pane>
    </el-tabs>
    <!-- loginPage -->
    <div v-show="activeName==='loginPage'">
      <el-row class="normal-title">
        <span class="title">登录记录</span><span class="desc">兄弟你最近一周的登录情况</span>
      </el-row>
      <div>
        <el-table :data="loginRecords"
                  border
                  style="width: 100%;"
                  :cell-style="{textAlign:'center'}"
                  :header-cell-style="{textAlign:'center',background:'#f5f5f5'}">
          <el-table-column prop="date"
                           label="时间"
                           width="200">
          </el-table-column>
          <el-table-column prop="status"
                           label="状态">
          </el-table-column>
        </el-table>
      </div>
    </div>
    <!-- moralPage -->
    <div v-show="activeName==='moralPage'">
      <el-row class="moral-row">
        <span class="moral">我的节操值：</span><span class="moral-value">{{moral}}</span>

      </el-row>
      <p class="desc"
         style="margin-left:10px;margin-top:0px;">每天登录可以恢复1点节操值(100封顶)。</p>
      <el-row class="normal-title">
        <span class="title">节操记录</span><span class="desc">兄弟你最近一周的变化情况</span>
      </el-row>
      <div>
        <el-table :data="moralRecords"
                  border
                  style="width: 100%;"
                  :cell-style="{textAlign:'center'}"
                  :header-cell-style="{textAlign:'center',background:'#f5f5f5'}">
          <el-table-column prop="date"
                           label="时间"
                           width="200">
          </el-table-column>
          <el-table-column prop="change"
                           label="变化"
                           width="100">
          </el-table-column>
          <el-table-column prop="reason"
                           label="原因"
                           width="200">
          </el-table-column>
          <el-table-column prop="explain"
                           label="说明">
          </el-table-column>
        </el-table>
      </div>
    </div>
    <!-- expPage -->
    <div v-show="activeName==='expPage'">
      <el-row class="normal-title">
        <span class="title">经验记录</span><span class="desc">兄弟你最近一周的变化情况</span>
      </el-row>
      <div>
        <el-table :data="expRecords"
                  border
                  style="width: 100%;"
                  :cell-style="{textAlign:'center'}"
                  :header-cell-style="{textAlign:'center',background:'#f5f5f5'}">
          <el-table-column prop="date"
                           label="时间"
                           width="200">
          </el-table-column>
          <el-table-column prop="change"
                           label="变化"
                           width="100">
          </el-table-column>
          <el-table-column prop="reason"
                           label="原因">
          </el-table-column>
        </el-table>
      </div>
    </div>

  </div>
</template>

<style scoped>
.normal-title {
  border-bottom: 1px #ddd solid;
  margin-bottom: 20px;
  padding: 10px;
  text-align: left;
}
.moral-row {
  display: flex;
  padding: 10px;
}
.moral {
  font-size: 18px;
  font-weight: 700;
  color: #222222;
}
.moral-value {
  font-size: 18px;
  color: #00a1d7;
  line-height: 26px;
}
.title {
  font-size: 12px;
  font-weight: 700;
  color: #222222;
}
.desc {
  font-size: 12px;
  margin-left: 20px;
  color: #aaaaaa;
  text-align: left;
}
</style>
