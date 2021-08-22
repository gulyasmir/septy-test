<template>
  <div class="page">
    <Screen1/>
    <div class="container">
      <Screen2/>
      <Screen3/>
      <Screen4/>
      <Screen5/>
    </div>
  </div>

</template>

<script>
import Screen1 from '@/components/Screen1'
import Screen2 from '@/components/Screen2'
import Screen3 from '@/components/Screen3'
import Screen4 from '@/components/Screen4'
import Screen5 from '@/components/Screen5'

export default {
  components:{
    Screen1,
    Screen2,
    Screen3,
    Screen4,
    Screen5
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;

}

</style>
