<template>
  <div>
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
    <div id="screen6" class="screen">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <h2>{{this.screen6.title}}</h2>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <p>{{this.screen6.text}}</p>
        </el-col>
      </el-row>

        <div id="form" class="form">
          <el-form ref="form"  :model="form"  :rules="rules" label-width="0">
            <el-row :gutter="10">
              <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
              <el-form-item
                prop="name"
               >
                <el-input
                  v-model="form.name"
                  placeholder="Ваше имя"

                ></el-input>
              </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
              <el-form-item
                prop="email"
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
                    <el-button  @click="submitForm('form')">Отправить</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
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
    },
    screen6:{
      type:Object,
      default:{}
    }
  },
  data() {
    return {
      linkImg:'screen5-img.png',
      form: {
        name: '',
        email: '',
        text: ''
      },
      rules: {
        email: [
          { required: true, message: 'Пожалуйста, введите email', trigger: 'blur' },
          { type: 'email', message: 'Email некорректен', trigger: ['blur', 'change'] }
        ],
        name:[
          { required: true, message: 'Пожалуйста, введите имя', trigger: 'blur' }
        ]
      }

    }
  },
  methods:{
    imgLink(iconName){
      return imageLink(iconName)
    },
    submitForm(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$alert('Спасибо за Ваше сообщение!<br> Наш менеджер свяжется с Вами и ответит на ваш вопрос в ближайшее время!', '', {
            confirmButtonText: 'OK',
            dangerouslyUseHTMLString: true,
          });
        } else {
          this.$alert('Необходимо корректно заполнить поля Имя и Email!', '', {
            confirmButtonText: 'OK',
            dangerouslyUseHTMLString: true,
          });
          return false;
        }
      });
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
