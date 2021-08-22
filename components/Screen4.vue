<template>
  <div class="screen">
    <el-col
      v-for="item in linkIcons"
      :key="item.id"
      :span="6">
        <el-image
          style="width: 39px; height: 39px"
          :src="iconLink(item.icon)">

        </el-image>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "Screen4",
  data() {
    return {
      linkImg:require(`@/static/image/screen4-img.png`),
      linkIcons:[
        {id:1, icon:'home.svg'},
        {id:2, icon:'people.svg'},
        {id:3, icon:'hospital.svg'},
        {id:4, icon:'paw.svg'},
        {id:5, icon:'food.svg'},
        {id:6, icon:'bus.svg'},
        {id:7, icon:'baby-boy.svg'},
        {id:8, icon:'products.svg'},
        {id:9, icon:'shopping-cart.svg'},
        {id:10, icon:'city.svg'}
         ]

    }
  },
  methods:{
    iconLink(iconName){
      return require('/static/image/' + iconName)
    }
  }
}
</script>

<style scoped>

</style>
