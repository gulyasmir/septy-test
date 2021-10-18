<template>
<div>
  <el-row>
    <el-col :span="12">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/admin' }">Назад</el-breadcrumb-item>
        <el-breadcrumb-item>Контакты</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
  </el-row>
  <h2>Контакты</h2>
  <el-row>
    <el-col :span="12">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Заголовок">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="Текст">
          <el-input type="textarea" v-model="form.text"></el-input>
        </el-form-item>
        <el-form-item label="Адрес">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item label="Email">
          <el-input  v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="Whatsapp">
          <el-input  v-model="form.whatsapp"></el-input>
        </el-form-item>
        <el-form-item label="Сайт">
          <el-input  v-model="form.site"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Редактировать</el-button>
          <ButtonToBack/>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="12">
      <div class="expample">
        <Screen7
          :screen="this.form"
          :screen7="this.form"
        />
      </div>
    </el-col>
  </el-row>

</div>
</template>

<script>
import Screen7 from '@/components/Screen7'
import ButtonToBack from '@/components/ButtonToBack'
export default {
  name: "index",
  layout:'admin',
  components:{
    Screen7,
    ButtonToBack
  },
  data(){
    return{
      contactData:{},
      form: {
        title:'',
        text:'',
        address: '',
        email: '',
        site:'',
        whatsapp:''
      }
    }
  },
  beforeMount() {
    this.getContactData()
  },
  methods: {
    async onSubmit() {
      console.log('submit!')
      let formData = {
        address: this.form.address,
        email: this.form.email,
        site: this.form.site,
        whatsapp:this.form.whatsapp,
        id:1
      }
      let screenData = {
        title: this.form.title,
        text: this.form.text,
        img: 'rrr',
        id:7
      }
      console.log('screenData', screenData)
      let  resultScreen =  await this.$store.dispatch('updateData/updateScreenData', screenData)

      if (resultScreen.error=== true){
        this.$message.warning('Упс!!! Что-то пошло не так.')
      }
      console.log('formData', formData)
        let  result =  await this.$store.dispatch('updateData/updateContact', formData)
        if (result.error=== true){
          this.$message.warning('Упс!!! Что-то пошло не так.')
        }
        else {
          this.$message.success('Успешно сохранено!')
        }
        this.$router.push('/admin')
    },
    async getScreenData() {
      this.screenData =  await this.$store.dispatch('getData/getScreenData')
    },
    async getContactData() {
      this.contactData = await this.$store.dispatch('getData/getContactData')
    }
  },
  watch:{
    screenData(){
      this.form.title = this.screenData[6].title
      this.form.text = this.screenData[6].text
    },
    contactData(){
      this.form.address = this.contactData.address
      this.form.email = this.contactData.email
      this.form.site = this.contactData.site
      this.form.whatsapp = this.contactData.whatsapp
    }
  }
}
</script>

<style scoped>
.el-col{
  padding: 20px;
}
.full-screen{
  padding: 20px;
  background-size:cover;
  height: 400px;
  width: auto;
}
</style>
