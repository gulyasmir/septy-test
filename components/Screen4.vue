<template>
  <div id="screen4" class="bg-white">
    <div class="screen">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <h2>Кому подходит</h2>
          <p>
            SeptyTest позволяет избежать технических ошибок при работе с дезинфицирующими средствами в любых областях использования дезинфицирующих средств. Благодаря простоте применения и тщательно выверенной методике, SeptyTest может одинаково эффективно использоваться как обученными специалистами, так и персоналом без специальных навыков.
          </p>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <el-image
            :src="imgLink(linkImg)">
          </el-image>
        </el-col>
      </el-row>

        <el-row :gutter="10">
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <div class="flex-text">
             <span class="blue"> Где можно использовать:</span>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6"
          v-for="item in linkIcons"
          :key="item.id">
            <div class="flex">
            <el-image
              v-if="item.img"
              style="width: 39px; height: auto"
              :src="imgLink(item.img)">
            </el-image>
            <p> {{item.text}}</p>
            </div>
           </el-col>
        </el-row>
  </div>
    <div class="clear"></div>
  </div>
</template>

<script>
import imageLink from '@/plugins/imageLink'
export default {
  name: "Screen4",
  props:{
    linkIcons:{
      type:Array,
      default:[]
    }
  },
  data() {
    return {
      linkImg:'screen4-img.png',
      linkIcons1:[
        {id:1, icon:'home.png', text:'Объекты коммунального хозяйства'},
        {id:2, icon:'people.png', text:'Организации социальной сферы и сферы обслуживания'},
        {id:3, icon:'hospital.png', text:'Медицинские учреждения любого профиля'},
        {id:4, icon:'paw.png', text:'Ветеринарные предприятия и клиники'},
        {id:5, icon:'food.png', text:'Предприятия общественного питания любого уровня'},
        {id:6, icon:'bus.png', text:'На объектах транспортной сферы и на подвижном составе'},
        {id:7, icon:'baby-boy.png', text:'Дошкольные и школьные учреждения'},
        {id:8, icon:'products.png', text:'Пищевые и промышленные предприятия'},
        {id:9, icon:'shopping-cart.png', text:'Торгово-развлекательные центры'},
        {id:10, icon:'city.png', text:'Другие общественные и офисные здания'},
      ]

    }
  },
  methods:{
    imgLink(iconName){
      console.log('iconName', iconName)
      return imageLink(iconName)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-row{
  padding: 50px 0;
}
.bg-white{
  background: var(--white);
  width: 100%;
}
.screen{

  .flex{
    display: flex;
    justify-content: space-between;
    align-items: center;

    .el-image{
      padding-right: 10px;
      img{
        height: auto;
      }
    }
  }
  .flex-text{
    display: flex;
    align-items: center;
    height: 70px;
  }
    .blue{
      color: var(--blue);
      font-weight: 700;
      font-size: 18px;
    }

}
@media screen and (max-width: 1175px) {
  .el-row{
    padding: 10px 0;
  }
  .bg-white{
    height: auto;
    padding-bottom: 50px;
  }
  .screen .flex {
    display: flex;
    justify-content: left;
    align-items: center;
  }
}
</style>
