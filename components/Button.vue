<template>
<div class="button">
  <el-button  @click="open">{{text}}</el-button>
</div>
</template>

<script>
export default {
  name: "Button",
  props:{
   text:String
  },
  methods: {
    open() {
      this.$alert('Спасибо за Ваше сообщение!<br> Наш менеджер свяжется с Вами и ответит на ваш вопрос в ближайшее время!', '', {
        confirmButtonText: 'OK',
        dangerouslyUseHTMLString: true,
      });
    }
  }
}
</script>

<style lang="scss">
.el-message-box {
  display: inline-block;
  width: 577px;
}
.el-message-box__message {
  margin: 0;
  padding-top: 100px;
  background: url("../static/image/email.svg") no-repeat top center;
  background-size: 81px;
  color:var(--text-color);
  font-weight: 700;
  text-align: center;

  p{
    font-weight: 700;
  }
}
.button{
  .el-button{
    width: 281px;
    height: 55px;
    background: var(--button-default);
    color:var(--white);
    border-radius:10px;
    border:none;

    :hover{
      background: var(--button-hover);
    }
    :active{
      background: var(--button-active);
    }
    .active{
      background: var(--button-active);
    }
  }
}
</style>
