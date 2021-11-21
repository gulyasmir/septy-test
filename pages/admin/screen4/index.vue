<template>
  <div>
    <el-row>
      <el-col :span="12">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/admin' }">Назад</el-breadcrumb-item>
          <el-breadcrumb-item>Экран 4</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
    <h2>Экран 4</h2>
    <el-row>
      <el-col :span="12">
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="Заголовок">
            <el-input v-model="form.title"></el-input>
          </el-form-item>
          <el-form-item label="Текст">
            <el-input v-model="form.text"></el-input>
          </el-form-item>
          <el-form-item label="Изображение">
            <el-upload
              class="upload-demo"
              drag
              action="https://septy-test-api.herokuapp.com/api/upload"
              :on-success="this.successUpload"
              :on-error="this.errorUpload"
            >
              <el-image :src="imgLink(iconUpload)" class="upload-icon"></el-image>
              <div class="el-upload__text">Перетащите файл сюда <em>или щелкните мышкой тут</em></div>
              <div class="el-upload__tip" slot="tip">Файл должен быть формата jpg/png и меньше 500kb</div>
            </el-upload>
          </el-form-item>
          <el-form-item label="Список">
            <el-input v-model="form.item1"></el-input>
            <el-input v-model="form.item2"></el-input>
            <el-input v-model="form.item3"></el-input>
            <el-input v-model="form.item4"></el-input>
            <el-input v-model="form.item5"></el-input>
            <el-input v-model="form.item6"></el-input>
            <el-input v-model="form.item7"></el-input>
            <el-input v-model="form.item8"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">Редактировать</el-button>
            <ButtonToBack/>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="12">
        <div class="expample">
        <Screen4
          :screen="{'title':this.form.title, 'text':this.form.text}"
          :linkIcons="[
            {id:1, text:this.form.item1},
            {id:2, text:this.form.item2},
            {id:3,  text:this.form.item3},
            {id:4,  text:this.form.item4},
            {id:5, text:this.form.item5},
            {id:6,  text:this.form.item6},
            {id:7,  text:this.form.item7},
            {id:8,  text:this.form.item8}
        ]"
        />
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import imageLink from '@/plugins/imageLink'
import Screen2 from '@/components/Screen2'
import ButtonToBack from '@/components/ButtonToBack'
export default {
  name: "index",
  layout:'admin',
  components:{
    Screen2,
    ButtonToBack
  },
  data(){
    return{
      iconUpload:'upload-icon.png',
      screenData:[],
      list4Data:[],
      form: {
        title: '',
        text:'',
        img:'',
        item1: '',
        item2: '',
        item3: '',
        item4: '',
        item5: '',
        item6: '',
        item7: '',
        item8: ''
      }
    }
  },
  beforeMount() {
    this.getScreenData()
    this.getList4Data()
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
      let formData = {
        title: this.form.title,
        text: this.form.text,
        img: this.form.img,
        id:4
      }
      console.log('formData', formData)
      let  result =  await this.$store.dispatch('updateData/updateScreenData', formData)
      for (let i=1;i<9;i++){
        let titleItem
        switch (i){
          case 1:
            titleItem = this.form.item1
            break
          case 2:
            titleItem = this.form.item2
            break
          case 3:
            titleItem = this.form.item3
            break
          case 4:
            titleItem = this.form.item4
            break
          case 5:
            titleItem = this.form.item5
            break
          case 6:
            titleItem = this.form.item6
            break
          case 7:
            titleItem = this.form.item7
            break
          case 8:
            titleItem = this.form.item8
            break
        }

        let listData = {
          text: titleItem,
          id:i
        }
        console.log('listData', listData)
        let  resultList =  await this.$store.dispatch('updateData/updateList4Data', listData)
      }


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
    async getList4Data() {
      this.list4Data = await this.$store.dispatch('getData/getList4Data')
    },
    imgLink(iconName){
      return imageLink(iconName)
    }
  },
  watch:{
    list4Data(){
      this.form.item1 = this.list4Data[0].text
      this.form.item2 = this.list4Data[1].text
      this.form.item3 = this.list4Data[2].text
      this.form.item4 = this.list4Data[3].text
      this.form.item5 = this.list4Data[4].text
      this.form.item6 = this.list4Data[5].text
      this.form.item7 = this.list4Data[6].text
      this.form.item8 = this.list4Data[7].text
    },
    screenData(){
      this.form.title = this.screenData[3].title
      this.form.text = this.screenData[3].text
    }

  }
}
</script>

<style >
.el-col{
  padding: 20px;
}

.screen{
  padding: 20px;

  height: 400px;
  width: auto;
}
</style>
