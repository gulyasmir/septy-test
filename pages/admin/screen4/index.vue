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
            <el-button>Отмена</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="12">
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
      </el-col>
    </el-row>

  </div>
</template>

<script>
import Screen2 from '@/components/Screen2'
export default {
  name: "index",
  layout:'admin',
  components:{
    Screen2
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
    onSubmit() {
      console.log('submit!');
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
