<template>
    <div id="screen7" class="screen">
      <div class="footer">
         <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
       <el-image
         :src="imgLink(linkImg)">
       </el-image>
       <span class="contacts"> :Контакты</span>

     </el-col>
      <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
        <p>
          Россия, Екатеринбург, Чапаева, 72
        </p>
       <a class="whatsapp" href="https://wa.me/+79258600106" target="_blank">
         Написать нам в WhatsApp
       </a>
     </el-col>
      <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
       <p>
       <a href="mailto:info@chymes.ru" target="_blank">
         info@chymes.ru
       </a>
       </p>
       <p>
         <a href="https://www.chymes.ru" target="_blank">
         www.chymes.ru
       </a>
       </p>
     </el-col>
   </el-row>
    </div>
  </div>
</template>

<script>
import imageLink from "@/plugins/imageLink";

export default {
name: "Footer",
  data() {
    return {
      linkImg:'logo-footer.png',
    }
  },
  methods: {
    imgLink(iconName) {
      return imageLink(iconName)
    },
  }
}
</script>

<style lang="scss" scoped>
.footer{
  margin: 0 auto;
  padding: 74px 0;

  .whatsapp{
    color: var(--green);
    padding:15px 15px 15px 40px;
    background: url("../static/image/whatsapp.png") no-repeat left center;

  }
  .contacts{
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
  }
}

</style>
