<template>
  <div id="screen4" class="bg-white">
    <div class="screen">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <h2>{{this.screen.title}}</h2>
          <p>{{this.screen.text}}</p>
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
              style="width: 39px; height: auto"
              :src="imgLink('screen4-icon'+item.id+'.png')">
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
    screen:{
      type:Object,
      default:{'title':'', 'text':''}
    },
    linkIcons:{
      type:Array,
      default:[]
    }
  },
  data() {
    return {
      linkImg:'screen4-img.png',
      linkIcons1:[
        {id:1, icon:'screen4-icon1.png', text:'Объекты коммунального хозяйства'},
        {id:2, icon:'screen4-icon2.png', text:'Организации социальной сферы и сферы обслуживания'},
        {id:3, icon:'screen4-icon3.png', text:'Медицинские учреждения любого профиля'},
        {id:4, icon:'screen4-icon4.png', text:'Ветеринарные предприятия и клиники'},
        {id:5, icon:'screen4-icon5.png', text:'Предприятия общественного питания любого уровня'},
        {id:6, icon:'screen4-icon6.png', text:'На объектах транспортной сферы и на подвижном составе'},
        {id:7, icon:'screen4-icon7.png', text:'Дошкольные и школьные учреждения'},
        {id:8, icon:'screen4-icon8.png', text:'Пищевые и промышленные предприятия'},
        {id:9, icon:'screen4-icon9.png', text:'Торгово-развлекательные центры'},
        {id:10, icon:'screen4-icon10.png', text:'Другие общественные и офисные здания'},
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
