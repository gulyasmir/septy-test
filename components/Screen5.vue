<template>
    <div  id="screen5" class="screen">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <el-image
            :src="imgLink(linkImg)">
          </el-image>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <h2>{{this.screen5.title}}</h2>
          <p>{{this.screen5.text}}</p>
         <!-- <h2>SeptyTest: R&D и ODM</h2>
          <p>
            R&D возможности Компании Chymes Laboratories позволяют в кратчайшие сроки разработать и внедрить в производство SeptyTest для любого дезинфицирующего средства по требованию Заказчика.
            По желанию Заказчика индикаторные наборы могут производиться
            на условиях ODM под торговой маркой и в брендированной упаковкой Заказчика.
          </p>-->
        </el-col>
      </el-row>
    </div>
</template>

<script>
import imageLink from '@/plugins/imageLink'
export default {
  name: "Screen5",
  props:{
    screen5:{
      type:Object,
      default:{}
    }
  },
  data() {
    return {
      linkImg:'screen5-img.png'
    }
  },
  methods:{
    imgLink(iconName){
      return imageLink(iconName)
    }
  }
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1175px) {
  h2 {
    font-size: 28px;
  }
  .el-button{
    margin-top: 20px;
  }

}
</style>
