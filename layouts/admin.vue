<template>
  <el-container>
    <!--<el-aside width="200px"><Sidebar/></el-aside>-->
    <el-container>
      <el-main><Nuxt /></el-main>

    </el-container>
  </el-container>
</template>

<script>
import Sidebar from "@/components/Sidebar";
export default {
  name: "admin",
  components:{
    Sidebar,
  }
}
</script>

<style scoped>

.el-container{
  padding-left: 15px;
}
.el-aside{
  height: 100vh;
}
</style>
