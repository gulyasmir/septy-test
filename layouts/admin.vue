<template>
  <el-container>
    <el-aside width="200px"><Sidebar/></el-aside>
    <el-container>
      <el-main><Nuxt /></el-main>
      <el-footer><Footer/></el-footer>
    </el-container>
  </el-container>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
export default {
  name: "admin",
  components:{
    Sidebar,
    Footer
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
