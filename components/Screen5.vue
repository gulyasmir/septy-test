<template>
    <div class="screen">
      <div class="top">
        <div class="left">
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
        <div class="left">
          <h2>Техподдержка</h2>
        </div>
        <div class="right">
          <p>
            Вы можете оставить заявку на разработку или производство SeptyTest, либо задать вопрос, связанный с применением продукции. Пожалуйста, заполните форму и отправьте свой вопрос.
          </p>
        </div>
        <div class="form">
          <el-form ref="form" :model="form" label-width="120px">
            <el-form-item>
              <el-input
                v-model="form.name"
                inline="true"
                placeholder="Activity zone"
              ></el-input>
            </el-form-item>
            <el-form-item
              prop="email"
              placeholder="Email"
              :rules="[
      { required: true, message: 'Please input email address', trigger: 'blur' },
      { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
    ]"
            >
              <el-input v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input
                v-model="form.text"
                inline="true"
                placeholder="Activity zone"
              ></el-input>
            </el-form-item>

            <el-form-item class="button">
              <el-button  @click="onSubmit">Create</el-button>

            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Screen5",
  data() {
    return {
      linkImg:require(`@/static/image/screen5-img.png`),
      form: {
        name: '',
        email: '',
        text: ''
      }

    }
  },
  methods:{
    iconLink(iconName){
      return require('/static/image/' + iconName)
    },
    onSubmit() {
      console.log('submit!');
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
