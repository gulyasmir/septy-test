<template>
  <div class="page">
    <h2>Ошибка</h2>
    <p><a href="/"> вернуться на главную</a></p>
    <p><a href="/admin">  в панель управления</a></p>
  </div>
</template>

<script>
export default {
  name: "error",
  layout:'empty',
}
</script>

<style scoped>
.page{
  height: 100vh;
  padding-top:200px;
  text-align: center;
}
</style>
