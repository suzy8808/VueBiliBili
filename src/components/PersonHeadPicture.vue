<script>
export default {
  name: 'PersonHeadPicture',
  data: function () {
    return {
      isChange: false,
      imageUrl: ''
    }
  },
  methods: {
    goChangePicture () {
      this.isChange = true
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>

<template>
  <div>
    <div v-show="!isChange">
      <el-row class="item-line">
        <div class="head-picture-div">
          <el-avatar icon="el-icon-user-solid"
                     class="head-picture"
                     :size='100'></el-avatar>
          <el-button type="primary"
                     class="change-picture"
                     @click="goChangePicture">更换<br />头像</el-button>
        </div>
      </el-row>
      <el-row>
        敬请期待，添加网站头像
      </el-row>
    </div>
    <div v-show="isChange">
      <el-upload class="avatar-uploader"
                 action="https://jsonplaceholder.typicode.com/posts/"
                 :show-file-list="false"
                 :on-success="handleAvatarSuccess"
                 :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl"
             :src="imageUrl"
             class="avatar">
        <i v-else
           class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </diV>
  </div>
</template>

<style scoped>
.item-line {
  border-bottom: 1px solid #e5e9ef;
  height: 300px;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.head-picture-div {
  height: 200px;
  width: 200px;
  position: relative;
  border-radius: 100px;
  border: 1px #e5e9ef solid;
}
.head-picture {
  position: absolute;
  left: 50px;
  top: 50px;
}
.change-picture {
  color: #fff;
  font-size: 11px;
  width: 54px;
  height: 54px;
  position: absolute;
  left: -27px;
  top: 73px;
  border-radius: 27px;
  padding: inherit;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
