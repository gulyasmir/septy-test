<template>
<div>
  <el-row>
    <el-col :span="12">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/admin' }">Назад</el-breadcrumb-item>
        <el-breadcrumb-item>Экран 6</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
  </el-row>
  <h2>Экран 6</h2>
  <el-row>
    <el-col :span="12">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Заголовок">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="Текст">
          <el-input type="textarea" v-model="form.text"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Редактировать</el-button>
          <el-button>Отмена</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="12">
      <div class="expample">
      <Screen6
        :screen6="this.form"
      />
      </div>
    </el-col>
  </el-row>

</div>
</template>

<script>
import Screen6 from '@/components/Screen6'
export default {
  name: "index",
  layout:'admin',
  components:{
    Screen6
  },
  data(){
    return{
      screenData:[],
      form: {
        title: '',
        text: ''
      }
    }
  },
  beforeMount() {
    this.getScreenData()
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    async getScreenData() {
      this.screenData = await this.$store.dispatch('getData/getScreenData')
    }
  },
  watch:{
    screenData(){
      this.form = this.screenData[5]
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
