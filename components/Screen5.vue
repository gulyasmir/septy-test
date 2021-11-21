<template>
    <div  id="screen5" class="screen">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <el-image :src="`https://septy-test-api.herokuapp.com/${this.screen.img}`"></el-image>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <h2>{{this.screen.title}}</h2>
          <p>{{this.screen.text}}</p>
        </el-col>
      </el-row>
    </div>
</template>

<script>
import imageLink from '@/plugins/imageLink'
export default {
  name: "Screen5",
  props:{
    screen:{
      type:Object,
      default:{'title':'', 'text':'', 'img':''}
    }
  },
  data() {
    return {
      linkImg:'screen5-img.png'
    }
  },
  methods:{
    imgLink(iconName){
      return imageLink(iconName)
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
