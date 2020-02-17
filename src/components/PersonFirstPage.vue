<script>
export default {
  name: 'PersonFirstPage',
  data: function () {
    return {
      user: {
        headPicture: '',
        nickName: '道乐菌',
        level: 9945,
        levelLimit: 10800,
        smoney: 885
      },
      bonus: {
        bonusIcon: require('../assets/img/bonus.png'),
        title: '每日奖励',
        items: [
          { itemIcon: require('../assets/img/check_green.png'),
            name: '每日登录',
            status: false,
            statusName1: '未完成',
            statusName2: '5经验值到手' },
          { itemIcon: require('../assets/img/check_green.png'),
            name: '每日浏览作品',
            status: false,
            statusName1: '未完成',
            statusName2: '5经验值到手' },
          { itemIcon: require('../assets/img/check_green.png'),
            name: '每日点赞',
            status: false,
            statusName1: '未完成',
            statusName2: '5经验值到手' },
          { itemIcon: require('../assets/img/check_blue.png'),
            name: '每日投币',
            status: false,
            statusName1: '未完成',
            statusName2: '50经验值到手' },
          { itemIcon: require('../assets/img/check_blue.png'),
            name: '每日分享作品',
            status: false,
            statusName1: '未完成',
            statusName2: '5经验值到手' },
          { itemIcon: require('../assets/img/check_blue.png'),
            name: '每日发布作品',
            status: false,
            statusName1: '未完成',
            statusName2: '100经验值到手' }
        ]
      }
    }
  }
}
</script>

<template>
  <div>
    <el-row class="item-line">
      <el-col :span="2">
        <div class="head-picture">
          <el-avatar icon="el-icon-user-solid"
                     :size='60'></el-avatar>
        </div>
      </el-col>
      <el-col :span="14">
        <div>
          <p class="user-name">{{user.nickName}}</p>
          <div class="process-div">
            <span class="level">LV4</span>
            <el-progress class="process-bar"
                         :text-inside="true"
                         :stroke-width="26"
                         :percentage="Math.floor(user.level/user.levelLimit*100)"></el-progress>
            <span class="level-value">{{user.level}}&nbsp;/&nbsp;{{user.levelLimit}}</span>
          </div>
          <div class="smoney"><i class="el-icon-coin"></i><span>{{user.smoney}}</span></div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="button-div">
          <el-button class="button"
                     type="primary">修改资料</el-button>
          <el-button class="button"
                     type="primary">个人空间&nbsp;></el-button>
        </div>
      </el-col>
    </el-row>

    <el-row class="item-line">
      <div class="bonus"><img :src="bonus.bonusIcon"
             width="30px"
             height="30px" /><span class="bonus-title">{{bonus.title}}</span></div>
      <el-row class="bonus-line">
        <el-col :span="4"
                v-for="(item,idx) in bonus.items"
                :key="idx">
          <img :src="item.itemIcon"
               width="72px"
               height="72px" />
          <div>{{item.name}}</div>
          <div>{{item.status?item.statusName2:item.statusName1}}</div>
        </el-col>
      </el-row>
    </el-row>
    <el-row class="item-line">
      敬请期待
    </el-row>
  </div>
</template>
<style scoped>
.item-line {
  border-bottom: 1px solid #e5e9ef;

  padding-top: 20px;
  padding-bottom: 20px;
}
.head-picture {
  height: 132px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.process-div {
  display: flex;
}
.process-bar {
  width: 80%;
}
.user-name {
  font-weight: 700;
  font-size: 20px;
  text-align: left;
  margin-top: 15px;
  margin-bottom: 15px;
}
.level {
  height: 26px;
  width: 50px;
  background: #409eff;
  line-height: 26px;
  color: #fff;
  border-radius: 0 13px;
}
.level-value {
  margin: 5px;
  margin-left: 15px;
}
.smoney {
  margin-top: 15px;
  margin-bottom: 15px;
  float: left;
}
.button-div {
  height: 132px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.button {
  height: 40px;
}
.bonus {
  display: flex;
  align-items: center;
}
.bonus-title {
  font-size: 20px;
  margin: 0 20px;
}
.bonus-line {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
