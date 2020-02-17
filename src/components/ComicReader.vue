<script>
export default {
  name: 'ComicReader'
}
</script>

<template>
  <el-container id="container">
    <!-- header -->
    <el-header style="height:auto">
      <nav-head :user="user"></nav-head>
    </el-header>
    <!-- main -->
    <el-main>
      <el-row class="classify-content">
        <el-col :span="4">
          <div class="grid-content">
            <p></p>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content">
            <ul>
              <li><img src="" /></li>
            </ul>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">

          </div>
        </el-col>
      </el-row>
    </el-main>
    <!-- footer -->
    <el-footer style="height:auto">

    </el-footer>
  </el-container>
</template>
