<template>
  <div>
    <el-container>
      <el-header><Header/></el-header>
      <el-main> <Nuxt /></el-main>
      <el-footer><Footer/></el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  components:{
    Header,
    Footer
  }
}
</script>

<style>
.el-main{
  margin-top: -60px;
  z-index: 1;
}

</style>
