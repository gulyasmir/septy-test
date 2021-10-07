<template>
<div>
  <Screen1
  :screen="this.screenData"
  />
  <div class="container">
    <Screen2
    :featuresList="this.list2Data"
    />
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
      screenData: {},
      contactData:{},
      list2Data:{},
      list3Data:{},
      list4Data:{}
    }
  },
  beforeMount() {
    this.getScreenData()
    this.getContactData()
    this.getList2Data()
    this.getList3Data()
    this.getList4Data()
  },
  methods: {
    returnData(dataset) {
      return dataset ? dataset.data[0] : {}
    },
    async getScreenData() {
      let dataset = await this.$store.dispatch('getData/getScreenData')
      this.screenData = this.returnData(dataset)
    },
    async getContactData() {
      let dataset = await this.$store.dispatch('getData/getContactData')
      this.contactData = this.returnData(dataset)
    },
    async getList2Data() {
      let dataset = await this.$store.dispatch('getData/getList2Data')
      this.list2Data = this.returnData(dataset)
    },
    async getList3Data() {
      let dataset = await this.$store.dispatch('getData/getList3Data')
      this.list3Data = this.returnData(dataset)
      return this.list3Data
    },
    async getList4Data() {
      let dataset = await this.$store.dispatch('getData/getList4Data')
      this.list4Data = this.returnData(dataset)
      return this.list4Data
    }
  }

}
</script>

<style scoped>

</style>
