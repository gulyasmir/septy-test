<template>
  <div class="header">
    <div class="logo">
      <el-image :src="logoUrl"></el-image>
    </div>
    <div class="mobile-menu">
      <div v-if="!this.isOpenMobileMenu" class="icon icon-open" @click="openMobileMenu">
        <el-image :src="menuIcon"></el-image>
      </div>
      <div v-if="this.isOpenMobileMenu" class="list-menu">
        <div class="icon icon-close" @click="openMobileMenu">
          <el-image :src="menuIcon"></el-image>
        </div>
        <ul>
          <li @click="handleSelect([1])">SeptyTest</li>
          <li @click="handleSelect([3])">Разработки</li>
          <li @click="handleSelect([6])">Написать нам</li>
          <li @click="handleSelect([7])">Контакты</li>
        </ul>
      </div>
    </div>

  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">SeptyTest</el-menu-item>
    <el-menu-item index="3">Разработки</el-menu-item>
    <el-menu-item index="6">Написать нам</el-menu-item>
    <el-menu-item index="7">Контакты</el-menu-item>
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
      logoUrl: require(`@/static/image/logo.png`),
      menuIcon: require(`@/static/image/icon-menu.png`),
      isOpenMobileMenu:false

    };
  },
  methods: {
    handleSelect(key) {
      let elementId = 'screen'+key[0]
      const el = document.getElementById(elementId);
      el.scrollIntoView({
        behavior: 'smooth'
      });
    },
    openMobileMenu(){
      this.isOpenMobileMenu = ! this.isOpenMobileMenu
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

  .mobile-menu{
    display: none;
    z-index: 100;
    width: 100%;

    .icon{
      padding:10px;
      position: absolute;
      top:20px;
      right: 20px;

      img{
        height: 20px;
        width: 20px;
      }
    }

    .list-menu{
      background: var(--bg);
      width: 100%;
      padding: 10px;
      margin-top: 50px;

      li{
        padding: 7px;
      }

    }
  }
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

  .header {
    background: var(--white);
    z-index: 99;
    .el-menu-demo {
      display: none;
    }

    .mobile-menu {
      display: block;



    }
  }
}
</style>
