<template>
  <div class="bg-white">
    <div class="screen">
    <div class="top">
      <div class="left">
        <h2>Кому подходит</h2>
        <p>
          SeptyTest позволяет избежать технических ошибок при работе с дезинфицирующими средствами в любых областях использования дезинфицирующих средств. Благодаря простоте применения и тщательно выверенной методике, SeptyTest может одинаково эффективно использоваться как обученными специалистами, так и персоналом без специальных навыков.
        </p>
      </div>
      <div class="right">
        <el-image
          :src="iconLink('screen4-img.png')">
        </el-image>
      </div>
    </div>
    <div class="bottom">
      <el-col :span="12">
        <span class="blue"> Где можно использовать:</span>

      </el-col>
      <el-col
        v-for="item in linkIcons"
        :key="item.id"
        :span="6">
        <el-image
          style="width: 39px; height: 39px"
          :src="iconLink(item.icon)">
        </el-image>
        <p> {{item.text}}</p>

      </el-col>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Screen4",
  data() {
    return {
      linkImg:require(`@/static/image/screen4-img.png`),
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
    iconLink(iconName){
      return require('/static/image/' + iconName)
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-white{
  background: var(--white);
  height: 100vh;
}
.screen{

  .top{
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
    .el-col{
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .el-image{
        margin: 16px 0;
      }
      p{
        padding-left: 10px;
      }

    }
    .blue{
      color: var(--blue);
      font-weight: 700;
    }
  }
}

</style>
