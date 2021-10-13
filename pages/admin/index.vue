<template>
<div>
  <h1>Панель управления</h1>
  <h3 @click="goToPage()">Редактировать:</h3>
     <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6"
                v-for="item in screenList"
                :key="item.id"
        >
        <el-card
          shadow="hover">
          <nuxt-link :to="'/admin/screen' + item.id">
          <el-image
            style="height:200px;"
            :src="imgLink(item.img)">
          </el-image>
          <div class="text">
            {{item.title}}
          </div>
          </nuxt-link>
        </el-card>
      </el-col>
   </el-row>
</div>
</template>

<script>
import imageLink from '@/plugins/imageLink'
export default {
  name: "index",
  layout:'admin',
  data(){
    return{
      screenList:[
        {id:1, img:'screen1.png', title:'1й экран'},
        {id:2, img:'screen2.png', title:'2й экран'},
        {id:3, img:'screen3.png', title:'3й экран'},
        {id:4, img:'screen4.png', title:'4й экран'},
        {id:5, img:'screen5.png', title:'5й экран'},
        {id:6, img:'screen6.png', title:'6й экран'},
        {id:7, img:'contacts.png', title:'Контакты'}
      ]
    }
  },

  methods:{
    imgLink(iconName){
      return imageLink(iconName)
    },
    goToPage(){
      console.log('goToPage')
    //  this.$router.push('/screen1')
    }
  }
}
</script>

<style scoped>
.el-card{
  cursor: pointer;
}
</style>
