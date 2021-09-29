<template>
 <div class="full-screen">
   <div class="info">
     <h1>SeptyTest</h1>
     <h3>
       Инновационный индикаторный набор
       от компании Chymes Laboratories для экспресс-проверки качества растворов и концентратов дезинфицирующих средств.
     </h3>
     <div class="button">
       <el-button  @click="goToForm">{{textScreen1}}</el-button>
     </div>
   </div>
 </div>
</template>

<script>
import Button from '@/components/Button'
export default {
  name: "Screen1",
  components:{
    Button
  },
  data() {
    return {
      textScreen1: 'Получить консультацию',

    }
  },
  methods: {
    goToForm(){
      const el = document.getElementById('form');
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
</script>

<style lang="scss">

.full-screen{
  background: url("../static/image/banner.png") no-repeat;
  background-size:100%;
  height: 100vh;
  display: flex;
  align-items: center;

  .info{
    width:100%;
    max-width: 1175px;
    margin: 0 auto;

    h1{
      color: var(--text-color-h1-screen1);
    }
    h3{
      width: 40%;
      color: var(--text-color-h3-screen1);
    }
  }
}

@media screen and (max-width: 1175px) {
  .full-screen{
    background: url("../static/image/mobile-banner.png") no-repeat;
    background-size:100%;
    height: 100vh;
    display: flex;
    align-items: center;


    .info{
      width:100%;
      max-width: 1175px;
      margin: 0 auto;
      padding: 15px;

      h1{
        color: var(--text-color-h1-screen1);
        font-size: 36px;

      }
      h3{
        width: 90%;
        color: var(--text-color-h3-screen1);
        font-size: 16px;
      }
    }
  }
}
</style>
