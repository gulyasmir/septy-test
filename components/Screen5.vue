<template>
    <div class="screen">
      <div class="top">
        <div class="left">
          image
          <el-image
            :src="linkImg">
          </el-image>
        </div>
        <div class="right">
          <h2>SeptyTest: R&D и ODM</h2>
          <p>
            R&D возможности Компании Chymes Laboratories позволяют в кратчайшие сроки разработать и внедрить в производство SeptyTest для любого дезинфицирующего средства по требованию Заказчика.
            По желанию Заказчика индикаторные наборы могут производиться
            на условиях ODM под торговой маркой и в брендированной упаковкой Заказчика.
          </p>


        </div>
      </div>
      <div class="bottom">

      </div>
    </div>
</template>

<script>
export default {
  name: "Screen5",
  data() {
    return {
      linkImg:require(`@/static/image/screen5-img.png`),


    }
  },
  methods:{
    iconLink(iconName){
      return require('/static/image/' + iconName)
    }
  }
}
</script>

<style lang="scss" scoped>

.screen{

  .top{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 70px;

    .left{
      width: 50%;
    }
    .right{
      width: 50%;
    }
  }
  .bottom{

  }
}

</style>
