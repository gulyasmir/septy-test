<template>
  <div  id="screen3" class="screen">
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
      <div class="img">
        <el-image :src="imgLink(linkImgFor)"></el-image>
      </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
      <div class="list">
        <h2>{{this.screen.title}}</h2>
          <el-card
            class="item"
            v-for="item in listFor"
            :key="item.id"
            shadow="hover">
              <div class="number">
                #{{item.id}}
              </div>
              <div class="text">
                {{item.title}}

                <div class="hide-text">
                  {{item.text}}
                </div>
              </div>
          </el-card>
      </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import imageLink from '@/plugins/imageLink'
export default {
  name: "Screen3",
  props:{
    screen:{
      type:Object,
      default:{'title':'', 'text':''}
    },
    listFor:{
      type:Array,
      default:[]
    }
  },
  data() {
    return {
      linkImgFor:'imagefor.png',
      listFor1:[
        {id:1, text:'Для любых видов дезинфицирующих средств', hideText:'Продукция маркируется индивидуально под ваши требования, в зависимости от внедренной на вашем предприятии системы автоматического учета товара'},
        {id:2, text:'Производится под ваш заказ в любых количествах', hideText:'Продукция маркируется индивидуально под ваши требования, в зависимости от внедренной на вашем предприятии системы автоматического учета товара'},
        {id:3, text:'Поставляется на удобных коммерческих условиях', hideText:'Продукция маркируется индивидуально под ваши требования, в зависимости от внедренной на вашем предприятии системы автоматического учета товара'},
        {id:4, text:'Предназначен для дезинфицирующего средства', hideText:'Продукция маркируется индивидуально под ваши требования, в зависимости от внедренной на вашем предприятии системы автоматического учета товара'},
        {id:5, text:'Индивидуальная маркировка', hideText:'Продукция маркируется индивидуально под ваши требования, в зависимости от внедренной на вашем предприятии системы автоматического учета товара'},
        {id:6, text:'Существенно экономит время персонала', hideText:'Продукция маркируется индивидуально под ваши требования, в зависимости от внедренной на вашем предприятии системы автоматического учета товара'},
        {id:7, text:'Не требует утилизации неперерабатываемых отходов', hideText:'Продукция маркируется индивидуально под ваши требования, в зависимости от внедренной на вашем предприятии системы автоматического учета товара'}
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
.screen{
  padding-bottom: 134px;
}


    .item{
      display: flex;
      align-items: center;

      margin: 2px;
      background: var(--white);
      border-radius: 10px;

      .el-card__body{
        padding: 10px 18px;
        margin: 0;
      }


      .number{
        float: left;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        color: var(--blue);
        padding-right: 13px;
      }
      .text{
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 19px;
        text-align: left;
        width: 100%;

      }
      .hide-text{
        display: none;
        width: 100%;
        color: var(--gray-text);
        padding: 12px 0;
        font-weight: 400;
        line-height: 16px;
      }
      }

    .el-card:hover {
        .item{
          box-shadow:1px 1px 2px 2px rgba(38, 94, 215, 0.2);
        }
        .hide-text {
          display: block;
        }
      }

</style>
