<template>
  <div class="bg-white">
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
              style="width: 39px; height: 39px"
              :src="imgLink(item.icon)">
            </el-image>
            <p> {{item.text}}</p>
            </div>
           </el-col>
        </el-row>
  </div>
  </div>
</template>

<script>
import imageLink from '@/plugins/imageLink'
export default {
  name: "Screen4",
  data() {
    return {
      linkImg:'screen4-img.png',
      linkIcons:[
        {id:1, icon:'home.svg', text:'Объекты коммунального хозяйства'},
        {id:2, icon:'people.svg', text:'Организации социальной сферы и сферы обслуживания'},
        {id:3, icon:'hospital.svg', text:'Медицинские учреждения любого профиля'},
        {id:4, icon:'paw.svg', text:'Ветеринарные предприятия и клиники'},
        {id:5, icon:'food.svg', text:'Предприятия общественного питания любого уровня'},
        {id:6, icon:'bus.svg', text:'На объектах транспортной сферы и на подвижном составе'},
        {id:7, icon:'baby-boy.svg', text:'Дошкольные и школьные учреждения'},
        {id:8, icon:'products.svg', text:'Пищевые и промышленные предприятия'},
        {id:9, icon:'shopping-cart.svg', text:'Торгово-развлекательные центры'},
        {id:10, icon:'city.svg', text:'Другие общественные и офисные здания\n'},
      ]

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
.bg-white{
  background: var(--white);
  height: 100vh;
  width: 100%;
}
.screen{


  .flex{
    display: flex;
    justify-content: space-between;
    align-items: center;

    .el-image{
      padding-right: 15px;
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

</style>
