<template>
 <div class="full-screen">
   <div class="info">
     <h1>SeptyTest</h1>
     <h3>
       Инновационный индикаторный набор
       от компании Chymes Laboratories для экспресс-проверки качества растворов и концентратов дезинфицирующих средств.
     </h3>
     <Button
     :text="textScreen1"
     />
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
      textScreen1: 'Получить консультацию'
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
    width: 1175px;
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
</style>
