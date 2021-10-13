<template>
<div>
  <Screen1
  :screen="this.screenData[0]"
  />
  <div class="container">
    <Screen2
      :screen="this.screenData[1]"
      :featuresList="this.list2Data"
    />
    <Screen3
      :listFor="this.list3Data"
    />
    <Screen4
      :screen="this.screenData[3]"
      :linkIcons="this.list4Data"
    />
    <Screen5
      :screen5="this.screenData[4]"
    />
    <Screen6
      :screen6="this.screenData[5]"
    />
  </div>
</div>
</template>

<script>
import Screen1 from '@/components/Screen1'
import Screen2 from '@/components/Screen2'
import Screen3 from '@/components/Screen3'
import Screen4 from '@/components/Screen4'
import Screen5 from '@/components/Screen5'
import Screen6 from '@/components/Screen6'

export default {
  name: "General",
  components: {
    Screen1,
    Screen2,
    Screen3,
    Screen4,
    Screen5,
    Screen6
  },
  data(){
    return{
      screenData:[],
      list2Data:[],
      list3Data:[],
      list4Data:[]
    }
  },
  beforeMount() {
    this.getScreenData()
    this.getList2Data()
    this.getList3Data()
    this.getList4Data()
  },
  methods: {
    async getScreenData() {
      this.screenData =  await this.$store.dispatch('getData/getScreenData')

    },
    async getList2Data() {
      this.list2Data = await this.$store.dispatch('getData/getList2Data')
    },
    async getList3Data() {
      this.list3Data = await this.$store.dispatch('getData/getList3Data')
      return this.list3Data
    },
    async getList4Data() {
      this.list4Data = await this.$store.dispatch('getData/getList4Data')
      return this.list4Data
    }
  }

}
</script>

<style scoped>

</style>
