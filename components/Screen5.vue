<template>
    <div class="screen">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <el-image
            :src="imgLink(linkImg)">
          </el-image>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <h2>SeptyTest: R&D и ODM</h2>
          <p>
            R&D возможности Компании Chymes Laboratories позволяют в кратчайшие сроки разработать и внедрить в производство SeptyTest для любого дезинфицирующего средства по требованию Заказчика.
            По желанию Заказчика индикаторные наборы могут производиться
            на условиях ODM под торговой маркой и в брендированной упаковкой Заказчика.
          </p>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <h2>Техподдержка</h2>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <p>
            Вы можете оставить заявку на разработку или производство SeptyTest, либо задать вопрос, связанный с применением продукции. Пожалуйста, заполните форму и отправьте свой вопрос.
          </p>
        </el-col>
      </el-row>

        <div class="form">
          <el-form ref="form"  :model="form" label-width="0">
            <el-row :gutter="10">
              <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
              <el-form-item>
                <el-input
                  v-model="form.name"
                  placeholder="Ваше имя"
                ></el-input>
              </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
              <el-form-item
                prop="email"

                :rules="[
                  { required: true, message: 'Пожалуйста, введите email', trigger: 'blur' },
                  { type: 'email', message: 'Email некорректен', trigger: ['blur', 'change'] }
                ]"
              >
                <el-input v-model="form.email"  placeholder="Ваш Email"></el-input>
              </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item>
                  <el-input
                    v-model="form.text"
                    inline="true"
                    placeholder="Сообщение"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
              <div class="text">
                Нажимая на кнопку «Отправить запрос», Вы даете согласие на обработку своих персональных данных
              </div>
              </el-col>

              <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
            <el-form-item class="button">

              <el-button  @click="onSubmit">Отправить</el-button>

            </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>

</template>

<script>
import imageLink from '@/plugins/imageLink'
export default {
  name: "Screen5",
  data() {
    return {
      linkImg:'screen5-img.png',
      form: {
        name: '',
        email: '',
        text: ''
      }

    }
  },
  methods:{
    imgLink(iconName){
      return imageLink(iconName)
    },
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>

<style lang="scss" scoped>


</style>
