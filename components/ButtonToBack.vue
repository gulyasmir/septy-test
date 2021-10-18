<template>
  <el-button @click="toBack">Отмена</el-button>
</template>

<script>
export default {
  name: "ButtonToBack",
  methods: {
    toBack(){
      this.$router.push('/admin')
    }
  }
}
</script>

<style scoped>

</style>
