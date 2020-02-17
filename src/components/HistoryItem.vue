<script>
export default {
  name: 'HistoryItem',
  props: ['historyItem'],
  data: function () {
    return {
      //   historyItem: { createTime: '2019-11-10 11:11:11', img: require('../assets/img/card.png'), name: '这次玩大了，把兄弟从床上“绑架”到几十公里外，就为了这个？', author: '小刚和阿灿', type: '日常' }
    }
  }
}
</script>
<template>

  <el-row class="history-item">
    <div class="left-divider"></div>
    <el-col :span="3">
      <div class="create-time">{{historyItem.createTime.split(' ')[0]}}</div>
    </el-col>
    <el-col :span="6"><img :src="historyItem.img"
           class="history-img">
    </el-col>
    <el-col :span="15"
            class="item-content">
      <el-row>
        <el-col :span="21">
          <div class="name">{{historyItem.name}}</div>
          <div class="small-desc">
            <img src="../assets/img/history_item_icon.png"
                 height="25px"
                 width="25px" />
            <span class="time">{{historyItem.createTime.split(' ')[1]}}</span>

            <el-avatar src="../assets/img/head_picture.jpg"
                       :size='25'></el-avatar>
            <span class="author">
              {{historyItem.author}}
            </span>
            <span class="type">{{historyItem.type}}</span>

          </div>
        </el-col>
        <el-col :span="3"
                class="delete">
          <el-button type="danger">删除</el-button>
        </el-col>
      </el-row>
    </el-col>

  </el-row>
</template>

<style scoped>
.left-divider {
  height: 160px;
  width: 1px;
  background: #e5e9ef;
  position: relative;
}
.left-divider::after {
  right: -8px;
  border-left: 8px solid #e5e9ef;
  z-index: 1;
  position: absolute;
  top: 75px;
  content: "";
  border-bottom: 5px solid transparent;
  border-top: 5px solid transparent;
}
.history-item {
  /* border-left: 1px solid #e5e9ef; */
  height: 160px;
  display: flex;
  align-items: center;
}
.item-content {
  height: 100%;
  border-bottom: 1px solid #e5e9ef;
}
.history-img {
  height: 150px;
  width: 280px;
  border-radius: 5px;
}
.create-time {
  font-size: 14px;
  color: #99a2aa;
  text-align: left;
  padding: 10px;
  padding-left: 20px;
}
.name {
  font-size: 14px;
  font-weight: 700;
  text-align: left;
  padding: 10px;
  margin-bottom: 80px;
}
.small-desc {
  font-size: 14px;
  color: #99a2aa;
  text-align: left;
  padding: 10px;
  display: flex;
  align-items: center;
}
.time {
  padding-left: 10px;
  padding-right: 10px;
  margin-right: 200px;
}

.author {
  padding-left: 10px;
  padding-right: 10px;
  color: #6d757a;
  border-right: 1px solid #e5e9ef;
}
.type {
  padding-left: 10px;
  padding-right: 10px;
}
.delete {
  height: 150px;
  display: flex;
  align-items: center;
}
</style>
