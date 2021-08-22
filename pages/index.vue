<template>
  <div class="container">
    <Screen1/>
    <Screen2/>
    <Screen3/>
    <Screen4/>
    <Screen5/>
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

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
