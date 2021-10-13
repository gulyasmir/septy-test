<template>
  <Screen7
    :screen7="this.contactData"
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
      contactData:{}
    }
  },
  beforeMount() {
    this.getContactData()
  },
  methods: {
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
