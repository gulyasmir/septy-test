<template>
  <div class="screen">
    <h2>Вместе с SeptyTest Вы самостоятельно <br> за 2-3 минуты можете:</h2>
    <el-row :gutter="12">
      <el-col
        v-for="item in featuresList"
        :key="item.id"
        :span="6">
        <template  v-if="item.icon">
          <div class="features">
            <el-card shadow="hover">
                <el-image
                  style="width: 39px; height: 39px"
                  :src="iconLink(item.icon)">
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
</template>

<script>
export default {
  name: "Screen2",
  data(){
    return{
      featuresList:[
        {id:1, icon:'icon1.svg', text:'Проверить качество дезинфицирующего средства при закупке и приемке на склад'},
        {id:2, icon:'icon2.svg', text:'Подтвердить концентрацию раствора дезинфицирующего средства'},
        {id:3, icon:'icon3.svg', text:'Избежать ошибок в процессе приготовления раствора ДС'},
        {id:4, icon:'icon4.svg', text:'Своевременно выявить неэффективные растворы после многократного применения'},

        {id:5, icon:'icon5.svg', text:'Подтвердить эффективность раствора после длительного хранения'},
        {id:6, icon:'icon6.svg', text:'Проверить на поверхности остаточное количество дезинфицирующего средства'},
        {id:7, icon:'icon7.svg', text:'Подтвердить качество средства после хранения или заморозки'},
        {id:8, icon:'', text:'получаемых результатов при использовании SeptyTest максимально приближена к химическим анализам в специализированной лаборатории.'}

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

</style>
