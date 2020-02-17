<script>
export default {
  name: 'PersonBlackList',
  data: function () {
    return {
      blackList: [
        { nickName: 'nickName', createTime: '2019-11-10 13:18:53', headPicture: require('../assets/img/head_picture.jpg') },
        { nickName: 'nickName', createTime: '2019-11-10 13:18:53', headPicture: require('../assets/img/head_picture.jpg') },
        { nickName: 'nickName', createTime: '2019-11-10 13:18:53', headPicture: require('../assets/img/head_picture.jpg') },
        { nickName: 'nickName', createTime: '2019-11-10 13:18:53', headPicture: require('../assets/img/head_picture.jpg') },
        { nickName: 'nickName', createTime: '2019-11-10 13:18:53', headPicture: require('../assets/img/head_picture.jpg') },
        { nickName: 'nickName', createTime: '2019-11-10 13:18:53', headPicture: require('../assets/img/head_picture.jpg') },
        { nickName: 'nickName', createTime: '2019-11-10 13:18:53', headPicture: require('../assets/img/head_picture.jpg') },
        { nickName: 'nickName', createTime: '2019-11-10 13:18:53', headPicture: require('../assets/img/head_picture.jpg') },
        { nickName: 'nickName', createTime: '2019-11-10 13:18:53', headPicture: require('../assets/img/head_picture.jpg') },
        { nickName: 'nickName', createTime: '2019-11-10 13:18:53', headPicture: require('../assets/img/head_picture.jpg') },
        { nickName: 'nickName', createTime: '2019-11-10 13:18:53', headPicture: require('../assets/img/head_picture.jpg') },
        { nickName: 'nickName', createTime: '2019-11-10 13:18:53', headPicture: require('../assets/img/head_picture.jpg') }

      ],
      currentPage: 1,
      pageSize: 10
    }
  },
  methods: {
    currentChange (value) {
      console.log(value)
      this.currentPage = value
    }
  }
}
</script>
<template>
  <div>
    <el-row class="item-line"
            v-for="idx in currentPage*pageSize<=blackList.length?pageSize:blackList.length-(currentPage-1)*pageSize"
            :key="idx">
      <el-col :span="3">
        <el-avatar :src="blackList[idx-1+(currentPage-1)*pageSize].headPicture"
                   :size='60'></el-avatar>
      </el-col>
      <el-col :span="17">
        <div class="nickname">{{blackList[idx-1+(currentPage-1)*pageSize].nickName}}</div>
        <div class="createtime">添加时间：{{blackList[idx-1+(currentPage-1)*pageSize].createTime}}</div>
      </el-col>
      <el-col :span="4">
        <el-button type="primary"
                   class="remove">移除</el-button>
      </el-col>
    </el-row>
    <el-row class="common-pagination">
      <el-pagination background
                     layout="prev, pager, next, jumper"
                     :page-size="pageSize"
                     @current-change="currentChange"
                     :total="blackList.length">
      </el-pagination>
    </el-row>
  </div>
</template>

<style scoped>
@import "../assets/css/common.css";
.item-line {
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e5e9ef;
}

.nickname {
  font-size: 16px;
  text-align: left;
  padding-top: 10px;
  padding-bottom: 15px;
}
.createtime {
  color: #6d757a;
  text-align: left;
  font-size: 12px;
}
.remove {
  margin-top: 15px;
}
</style>
