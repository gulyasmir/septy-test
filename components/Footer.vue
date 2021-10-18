<template>
  <Screen7
    :screen7="this.contactData"
    :screen="this.screenData[6]"
  />
</template>

<script>
import Screen7 from '@/components/Screen7'
export default {
name: "Footer",
  components: {
    Screen7
  },
  data() {
    return {
      contactData:{},
      screenData:[]
    }
  },
  beforeMount() {
    this.getContactData()
    this.getScreenData()
  },
  methods: {
    async getScreenData() {
      this.screenData =  await this.$store.dispatch('getData/getScreenData')
      console.log('this.screenData', this.screenData)
    },
    async getContactData() {
      this.contactData = await this.$store.dispatch('getData/getContactData')
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
