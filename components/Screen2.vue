<template>
  <div  id="screen2">
    <div class="screen">
      <h2>Вместе с SeptyTest Вы самостоятельно <br> за 2-3 минуты можете:</h2>
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6"
                v-for="item in featuresList"
        >
          <template  v-if="item.id<8">
            <div class="features">
              <el-card shadow="hover">
                <el-image
                  style="width: 39px; height: 39px"
                  :src="imgLink('icon'+item.id+'.png')">
                </el-image>
                <div class="text">
                  {{item.text}}
                </div>
              </el-card>
            </div>
          </template >
          <template  v-else>
            <div class="features bg-blue">
              <el-card shadow="hover">
                <p>Точность</p>
                <div class="text">
                  {{item.text}}
                </div>
              </el-card>
            </div>
          </template >
        </el-col>
      </el-row>

    </div>
    <div class="clear"></div>
  </div>

</template>

<script>
import imageLink from '@/plugins/imageLink'
export default {
  name: "Screen2",
  props:{
    featuresList:{
      type:Array,
      default:[]
    }
  },
  data(){
    return{
      featuresList1:[
        {id:1, icon:'icon1.png', text:'Проверить качество дезинфицирующего средства при закупке и приемке на склад'},
        {id:2, icon:'icon2.png', text:'Подтвердить концентрацию раствора дезинфицирующего средства'},
        {id:3, icon:'icon3.png', text:'Избежать ошибок в процессе приготовления раствора ДС'},
        {id:4, icon:'icon4.png', text:'Своевременно выявить неэффективные растворы после многократного применения'},

        {id:5, icon:'icon5.png', text:'Подтвердить эффективность раствора после длительного хранения'},
        {id:6, icon:'icon6.png', text:'Проверить на поверхности остаточное количество дезинфицирующего средства'},
        {id:7, icon:'icon7.png', text:'Подтвердить качество средства после хранения или заморозки'},
        {id:8, icon:'', text:'получаемых результатов при использовании SeptyTest максимально приближена к химическим анализам в специализированной лаборатории.'}

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

<style lang="scss" >

.features{
  padding: 8px 2px;

  .el-card{
    height: 210px;
    background: var(--white);
    border-radius: 20px;
    border: none;
    p{
      text-transform: uppercase;
    }
  }
  .el-card__body{
    padding: 20px;
  }

  .el-image{
    padding-bottom: 32px;
    img{
      color: #265ED7;
      width: 39px;
      height: 39px;
    }
  }

}
.features:hover{
  padding: 8px 0;
}
.text{
  max-width: 100%;
  p{
    text-wrap: normal;
  }
}
.bg-blue{
  .el-card{
    background: var(--blue);
    color: var(--white);

  }
  :hover{
    box-shadow:1px 15px 15px 10px rgba(38, 94, 215, 0.2);
  }
}
@media screen and (max-width: 1175px) {
  .features{
    padding: 8px 2px;
    height: auto;
    .el-card{
      height:auto;
      background: var(--white);
      border-radius: 20px;
      border: none;
      p{
        text-transform: uppercase;
      }
    }
    .el-card__body{
      padding: 20px;
    }

    .el-image{
      padding-bottom: 32px;
      float: left;
      padding-right: 16px;

      img{
        color: #265ED7;
        width: 39px;
        height: 39px;
      }
    }

  }
  .bg-blue{
    .el-card{
      background: var(--blue);
      color: var(--white);

    }
    :hover{
      box-shadow:1px 15px 15px 10px rgba(38, 94, 215, 0.2);
    }
  }
}
</style>
