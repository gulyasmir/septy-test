<template>
 <div
   id="screen1"
   :style="{backgroundImage: `url(${this.screen.img})` }"
   class="full-screen"
 >
   <div class="info">
     <h1>{{this.screen.title}}</h1>
     <h3>
       {{this.screen.text}}
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
  props:{
    screen:{
      type:Object,
      default:{'title':'', 'text':'', 'img':'111.jpg'}
    }
  },
  data() {
    return {
      textScreen1: 'Получить консультацию',
      bgImage:{
        background: this.styleScreen1()//'url("https://septy-test-api.herokuapp.com/storage/images/111.jpg") no-repeat center'
      }
    }
  },
  mounted() {
    console.log('mounted mounted mounted mounted mounted this.screen 111',this.screen)
    this.styleScreen1()
    setTimeout(this.styleScreen1, 2000)
  },
  methods: {
    goToForm(){
      const el = document.getElementById('form');
      el.scrollIntoView({
        behavior: 'smooth'
      });
    },
    styleScreen1(){
      console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!this.screen.img', this.screen.img)
      //this.bgImage = {
      return {
       background: 'url("https://septy-test-api.herokuapp.com/storage/images/'+ this.screen.img + '") no-repeat center;'
      }
    }
  }
}
</script>

<style lang="scss">

.full-screen{
 /* background: url("../static/image/banner.png") no-repeat center;*/
  /*  background: url("http://localhost:8000/storage/images/111.jpg") no-repeat center;*/
  background-size:100%;
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
    background: url("../static/image/mobile-banner.png") no-repeat center;
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
