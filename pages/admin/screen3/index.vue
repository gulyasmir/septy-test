<template>
  <div>
    <el-row>
      <el-col :span="12">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/admin' }">Назад</el-breadcrumb-item>
          <el-breadcrumb-item>Экран 3</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
    <h2>Экран 3</h2>
    <el-row>
      <el-col :span="12">
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="Заголовок">
            <el-input v-model="form.title"></el-input>
          </el-form-item>

          <el-form-item label="Список" required>
            <el-input v-model="form.itemTitle1" ></el-input>
            <el-input type="textarea" v-model="form.itemText1" aria-required="true"></el-input>
            <br> <br>
            <el-input v-model="form.itemTitle2"></el-input>
            <el-input type="textarea"  v-model="form.itemText2"></el-input>
            <br> <br>
            <el-input v-model="form.itemTitle3"></el-input>
            <el-input type="textarea"  v-model="form.itemText3"></el-input>
            <br> <br>
            <el-input v-model="form.itemTitle4"></el-input>
            <el-input type="textarea"  v-model="form.itemText4"></el-input>
            <br> <br>
            <el-input v-model="form.itemTitle5"></el-input>
            <el-input type="textarea"  v-model="form.itemText5"></el-input>
            <br> <br>
            <el-input v-model="form.itemTitle6"></el-input>
            <el-input type="textarea"  v-model="form.itemText6"></el-input>
            <br> <br>
            <el-input v-model="form.itemTitle7"></el-input>
            <el-input type="textarea"  v-model="form.itemText7"></el-input>
            <br> <br>
            <el-input v-model="form.itemTitle8" ></el-input>
            <el-input type="textarea"  v-model="form.itemText8"></el-input>
          </el-form-item>
          <el-form-item label="Изображение">
            <el-upload
              class="upload-demo"
              drag
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList"
              multiple>
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
              <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
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
        <Screen3
          :screen="{'title':this.form.title, 'text':''}"
          :listFor="[
            {id:1, title:this.form.itemTitle1, text:this.form.itemText1},
            {id:2, title:this.form.itemTitle2, text:this.form.itemText2},
            {id:3, title:this.form.itemTitle3, text:this.form.itemText3},
            {id:4, title:this.form.itemTitle4, text:this.form.itemText4},
            {id:5, title:this.form.itemTitle5, text:this.form.itemText5},
            {id:6, title:this.form.itemTitle6, text:this.form.itemText6},
            {id:7, title:this.form.itemTitle7, text:this.form.itemText7},
            {id:8, title:this.form.itemTitle8, text:this.form.itemText8}
        ]"
        />
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import Screen3 from '@/components/Screen3'
import ButtonToBack from '@/components/ButtonToBack'
export default {
  name: "index",
  layout:'admin',
  components:{
    Screen3,
    ButtonToBack
  },
  data(){
    return{
      screenData:[],
      list3Data:[],
      form: {
        title: '',
        itemTitle1: '',
        itemTitle2: '',
        itemTitle3: '',
        itemTitle4: '',
        itemTitle5: '',
        itemTitle6: '',
        itemTitle7: '',
        itemTitle8: '',
        itemText1: '',
        itemText2: '',
        itemText3: '',
        itemText4: '',
        itemText5: '',
        itemText6: '',
        itemText7: '',
        itemText8: ''
      },
      rules: {
        title: [
          { required: true, message: 'Пожалуйста, введите данные', trigger: 'blur' }
        ],
        itemTitle1: [
          { required: true, message: 'Пожалуйста, введите данные', trigger: 'blur' }
        ],
        itemTitle2: [
          { required: true, message: 'Пожалуйста, введите данные', trigger: 'blur' }
        ],
        itemTitle3: [
          { required: true, message: 'Пожалуйста, введите данные', trigger: 'blur' }
        ],
        itemTitle4: [
          { required: true, message: 'Пожалуйста, введите данные', trigger: 'blur' }
        ],
        itemTitle5: [
          { required: true, message: 'Пожалуйста, введите данные', trigger: 'blur' }
        ],
        itemTitle6: [
          { required: true, message: 'Пожалуйста, введите данные', trigger: 'blur' }
        ],
        itemTitle7: [
          { required: true, message: 'Пожалуйста, введите данные', trigger: 'blur' }
        ],
        itemTitle8: [
          { required: true, message: 'Пожалуйста, введите данные', trigger: 'blur' }
        ],
        itemText1: [
          { required: true, message: 'Пожалуйста, введите данные', trigger: 'blur' }
        ],
        itemText2: [
          { required: true, message: 'Пожалуйста, введите данные', trigger: 'blur' }
        ],
        itemText3: [
          { required: true, message: 'Пожалуйста, введите данные', trigger: 'blur' }
        ],
        itemText4: [
          { required: true, message: 'Пожалуйста, введите данные', trigger: 'blur' }
        ],
        itemText5: [
          { required: true, message: 'Пожалуйста, введите данные', trigger: 'blur' }
        ],
        itemText6: [
          { required: true, message: 'Пожалуйста, введите данные', trigger: 'blur' }
        ],
        itemText7: [
          { required: true, message: 'Пожалуйста, введите данные', trigger: 'blur' }
        ],
        itemText8: [
          { required: true, message: 'Пожалуйста, введите данные', trigger: 'blur' }
        ]
      }
    }
  },
  beforeMount() {
    this.getScreenData()
    this.getList3Data()
  },
  mounted() {

  },
  methods: {
    async onSubmit() {
          let formData = {
            title: this.form.title,
            id:3
          }
          let  result =  await this.$store.dispatch('updateData/updateScreenData', formData)

          for (let i=1;i<9;i++){
            let title
            let text
            switch (i){
              case 1:
                title = this.form.itemTitle1
                text = this.form.itemText1
                break
              case 2:
                title = this.form.itemTitle2
                text = this.form.itemText2
                break
              case 3:
                title = this.form.itemTitle3
                text = this.form.itemText3
                break
              case 4:
                title = this.form.itemTitle4
                text = this.form.itemText4
                break
              case 5:
                title = this.form.itemTitle5
                text = this.form.itemText5
                break
              case 6:
                title = this.form.itemTitle6
                text = this.form.itemText6
                break
              case 7:
                title = this.form.itemTitle7
                text = this.form.itemText7
                break
              case 8:
                title = this.form.itemTitle8
                text = this.form.itemText8
                break
            }

            let listData = {
              title:title,
              text: text,
              id:i
            }
            console.log('listData', listData)
            let  resultList =  await this.$store.dispatch('updateData/updateList3Data', listData)
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
    async getList3Data() {
      this.list3Data = await this.$store.dispatch('getData/getList3Data')
    },
  },
  watch:{
    list3Data(){
      this.form.itemTitle1 = this.list3Data[0].title ? this.list3Data[0].title : ''
      this.form.itemTitle2 = this.list3Data[1].title ? this.list3Data[1].title : ''
      this.form.itemTitle3 = this.list3Data[2].title ? this.list3Data[2].title : ''
      this.form.itemTitle4 = this.list3Data[3].title ? this.list3Data[3].title : ''
      this.form.itemTitle5 = this.list3Data[4].title ? this.list3Data[4].title : ''
      this.form.itemTitle6 = this.list3Data[5].title ? this.list3Data[5].title : ''
      this.form.itemTitle7 = this.list3Data[6].title ? this.list3Data[6].title : ''
      this.form.itemTitle8 = this.list3Data[7].title ? this.list3Data[7].title : ''

      this.form.itemText1 = this.list3Data[0].text ? this.list3Data[0].text : ''
      this.form.itemText2 = this.list3Data[1].text ? this.list3Data[1].text : ''
      this.form.itemText3 = this.list3Data[2].text ? this.list3Data[2].text : ''
      this.form.itemText4 = this.list3Data[3].text ? this.list3Data[3].text : ''
      this.form.itemText5 = this.list3Data[4].text ? this.list3Data[4].text : ''
      this.form.itemText6 = this.list3Data[5].text ? this.list3Data[5].text : ''
      this.form.itemText7 = this.list3Data[6].text ? this.list3Data[6].text : ''
      this.form.itemText8 = this.list3Data[7].text ? this.list3Data[7].text : ''

    },
    screenData(){
      this.form.title = this.screenData[2].title
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
