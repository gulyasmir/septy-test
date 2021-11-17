<template>
  <div>
    <el-row>
      <el-col :span="12">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/admin' }">Назад</el-breadcrumb-item>
          <el-breadcrumb-item>Экран 2</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
    <h2>Экран 2</h2>
    <el-row>
      <el-col :span="12">
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="Заголовок">
            <el-input v-model="form.title"></el-input>
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
        <Screen2
          :screen="{'title':this.form.title, 'text':''}"
          :featuresList="[
            {id:1, icon:'icon1.png', text:this.form.item1},
            {id:2, icon:'icon2.png', text:this.form.item2},
            {id:3, icon:'icon3.png', text:this.form.item3},
            {id:4, icon:'icon4.png', text:this.form.item4},
            {id:5, icon:'icon5.png', text:this.form.item5},
            {id:6, icon:'icon6.png', text:this.form.item6},
            {id:7, icon:'icon7.png', text:this.form.item7},
            {id:8, icon:'icon8.png', text:this.form.item8}
        ]"
        />
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
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
      screenData:[],
      list2Data:[],
      form: {
        title: '',
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
    this.getList2Data()

  },
  mounted() {

  },
  methods: {
    makeList(){
      this.list=[
        {id:1, icon:'icon1.png', text:this.form.item1},
        {id:2, icon:'icon2.png', text:this.form.item2},
        {id:3, icon:'icon3.png', text:this.form.item3},
        {id:4, icon:'icon4.png', text:this.form.item4},
        {id:5, icon:'icon5.png', text:this.form.item5},
        {id:6, icon:'icon6.png', text:this.form.item6},
        {id:7, icon:'icon7.png', text:this.form.item7},
        {id:8, icon:'icon8.png', text:this.form.item8}
      ]
    },
    async onSubmit() {
      let formData = {
        title: this.form.title,
        id:2
      }
      console.log('formData', formData)
      let  result =  await this.$store.dispatch('updateData/updateScreenData', formData)
      for (let i=1;i<8;i++){
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

        titleItem = titleItem.trim()
        let listData = {
          text: titleItem,
          id:i
        }
        let  resultList =  await this.$store.dispatch('updateData/updateList2Data', listData)
      }

      if (result.error){
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
    async getList2Data() {
      this.list2Data = await this.$store.dispatch('getData/getList2Data')
    },
  },
  watch:{
    list2Data(){
      this.form.item1 = this.list2Data[0].text
      this.form.item2 = this.list2Data[1].text
      this.form.item3 = this.list2Data[2].text
      this.form.item4 = this.list2Data[3].text
      this.form.item5 = this.list2Data[4].text
      this.form.item6 = this.list2Data[5].text
      this.form.item7 = this.list2Data[6].text
      this.form.item8 = this.list2Data[7].text
    },
    screenData(){
      this.form.title = this.screenData[1].title
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
