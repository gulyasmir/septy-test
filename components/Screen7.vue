<template>
  <div id="screen7" class="screen">
    <div class="footer">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <el-image
            :src="imgLink(linkImg)">
          </el-image>
          <span class="contacts"> {{this.screen.title}}</span>
          <p>{{this.screen.text}}</p>
        </el-col>
        <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
          <p>
            {{screen7.address}}
          </p>
          <a class="whatsapp" href="https://wa.me/+79258600106" target="_blank">
            Написать нам в WhatsApp
          </a>
        </el-col>
        <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
          <p>
            <a href="mailto:info@chymes.ru" target="_blank">
              {{screen7.email}}
            </a>
          </p>
          <p>
            <a href="https://www.chymes.ru" target="_blank">
              {{screen7.site}}
            </a>
          </p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import imageLink from "@/plugins/imageLink"
export default {
  name: "Screen7",
  props:{
    screen:{
      type:Object,
      default:{}
    },
    screen7:{
      type:Object,
      default:{}
    }
  },
  data() {
    return {
      linkImg:'logo-footer.png'
    }
  },
  methods: {
    imgLink(iconName) {
      return imageLink(iconName)
    }
  }
}
</script>

<style scoped>

</style>
