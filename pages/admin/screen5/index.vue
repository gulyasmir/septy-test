<template>
<div>
  <el-row>
    <el-col :span="12">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/admin' }">Назад</el-breadcrumb-item>
        <el-breadcrumb-item>Экран 5</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
  </el-row>
  <h2>Экран 5</h2>
  <el-row>
    <el-col :span="12">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Заголовок">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="Текст">
          <el-input type="textarea" v-model="form.text"></el-input>
        </el-form-item>
        <el-form-item label="Баннер">
          <el-upload
            class="upload-demo"
            drag
            action="http://localhost:8000/api/upload"
            :on-success="this.successUpload"
            :on-error="this.errorUpload"
          >
            <el-image :src="imgLink(iconUpload)" class="upload-icon"></el-image>
            <div class="el-upload__text">Перетащите файл сюда <em>или щелкните мышкой тут</em></div>
            <div class="el-upload__tip" slot="tip">Файл должен быть формата jpg/png и меньше 500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Редактировать</el-button>
          <ButtonToBack/>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="12">
      <div class="expample">
      <Screen5
        :screen5="this.form"
      />
      </div>
    </el-col>
  </el-row>

</div>
</template>

<script>
import imageLink from '@/plugins/imageLink'
import Screen5 from '@/components/Screen5'
import ButtonToBack from '@/components/ButtonToBack'
export default {
  name: "index",
  layout:'admin',
  components:{
    Screen5,
    ButtonToBack
  },
  data(){
    return{
      iconUpload:'upload-icon.png',
      screenData:[],
      form: {
        title: '',
        text: '',
        img:''
      }
    }
  },
  beforeMount() {
    this.getScreenData()
  },
  methods: {
    errorUpload(err, file, fileList){
      console.log('err', err)
      console.log('file', file)
    },
    successUpload(response, file, fileList){
      console.log('response', response)
      this.form.img = response
    },
    async onSubmit() {
      console.log('submit!')
      let formData = {
        title: this.form.title,
        text: this.form.text,
        img: this.form.img,
        id:5
      }
      console.log('formData', formData)
      let  result =  await this.$store.dispatch('updateData/updateScreenData', formData)
      if (result.error=== true){
        this.$message.warning('Упс!!! Что-то пошло не так.')
      }
      else {
        this.$message.success('Успешно сохранено!')
      }
      this.$router.push('/admin')
    },
    async getScreenData() {
      this.screenData = await this.$store.dispatch('getData/getScreenData')
    },
    imgLink(iconName){
      return imageLink(iconName)
    }
  },
  watch:{
    screenData(){
      this.form = this.screenData[4]
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
