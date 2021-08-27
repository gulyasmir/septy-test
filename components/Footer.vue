<template>
  <div class="footer">
   <el-row>
     <el-col :span="12">
       <el-image
         :src="imgLink(linkImg)">
       </el-image>
       <span class="contacts"> :Контакты</span>

     </el-col>
     <el-col :span="6">
        <p>
          Россия, Екатеринбург, Чапаева, 72
        </p>
       <a class="whatsapp" href="#">
         Написать нам в WhatsApp
       </a>
     </el-col>
     <el-col :span="6">
       <p>
       <a href="#">
         info@chymes.ru
       </a>
       </p>
       <p>
         <a href="#">
         www.chymes.ru
       </a>
       </p>
     </el-col>
   </el-row>
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
  width: 1175px;
  margin: 0 auto;
  padding: 74px 0;

  .whatsapp{
    color: var(--green);
  }
  .contacts{
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
  }
}

</style>
