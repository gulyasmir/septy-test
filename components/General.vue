<template>
<div>
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
  name: "General",
  components: {
    Screen1,
    Screen2,
    Screen3,
    Screen4,
    Screen5
  },
  data(){
    return{
      landingData:[]
    }
  },
  methods:{
    async getData() {
      this.landingData = []
      this.landingData =  await this.$store.dispatch('getData/getData' )
      return this.landingData
    },
  }
}
</script>

<style scoped>

</style>
