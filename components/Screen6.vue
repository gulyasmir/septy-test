<template>
  <div id="screen6" class="screen">
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <h2>{{this.screen.title}}</h2>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <p>{{this.screen.text}}</p>
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
</template>

<script>
export default {
  name: "Screen6",
  props: {
    screen: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
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
   async submitForm(formName){
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          let formData = {
            email: this.form.email,
            name: this.form.name,
            text: this.form.text
          }
          console.log('formData', formData)
          let result = await this.$store.dispatch('sendingOrder/sendingData', formData)
          if (result) {
            this.form = {
              name: '',
              email: '',
              text: ''
            }
            this.$alert('Ваше сообщение отправлено, наш специалист свяжется с Вами в ближайшее рабочее время.', '', {
              confirmButtonText: 'OK',
              dangerouslyUseHTMLString: true,
            });
          } else {
            this.$alert('Ваше сообщение не отправлено ((.', '', {
              confirmButtonText: 'OK',
              dangerouslyUseHTMLString: true,
            });
          }
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
