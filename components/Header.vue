<template>
  <div class="header">
    <div class="logo">
      <el-image :src="logoUrl"></el-image>
    </div>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">SeptyTest</el-menu-item>
    <el-menu-item index="2">Разработки</el-menu-item>
    <el-menu-item index="3">Написать нам</el-menu-item>
    <el-menu-item index="4">Контакты</el-menu-item>
  </el-menu>



</div>
</template>

<script>

export default {
  name: "Header",
  components:{

  },
  data() {
    return {
      activeIndex: '1',
      logoUrl: require(`@/static/image/logo.png`)

    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss">
.header{
  height: 72px;
  width: 100%;
  max-width: 1175px;
  padding: 10px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  z-index: 10;

.el-menu{
  background: none;
  border: none;
  z-index: 10;
  width: 50%;

  li{
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
  }

}
  .el-menu--horizontal>.el-menu-item.is-active {
    border-bottom:none;
    color: #252525;

  }
  .logo {
    min-width: 170px;
    height: 62px;
    z-index: 10;

    img{
      height: 100%;
      width: auto;
      z-index: 10;
    }
  }
}
@media screen and (max-width: 1175px) {
  .el-menu{
    display: none;
  }
}
</style>
