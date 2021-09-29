<template>
<div class="button">
  <el-button v-if="action=='goToForm'"  @click="goToForm">{{text}}</el-button>
  <div v-if="action=='submitForm'">
    <el-button v-if="this.formData.email.length"  @click="submitForm">{{text}}</el-button>
    <el-button v-else disabled>{{text}}</el-button>
  </div>
</div>
</template>

<script>
export default {
  name: "Button",
  props:{
    text:String,
    action:String,
    formData:Object
  },
  data(){
    return{

    }
  },
  methods: {
    submitForm() {

      console.log('formData.email', this.formData.email.length)
      if (this.formData){
        this.$alert('Спасибо за Ваше сообщение!<br> Наш менеджер свяжется с Вами и ответит на ваш вопрос в ближайшее время!', '', {
          confirmButtonText: 'OK',
          dangerouslyUseHTMLString: true,
        });
      }

    },
    goToForm(){
      const el = document.getElementById('form');
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
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
.el-message-box__headerbtn{
  background:  url("../static/image/cancel.png") no-repeat top center;
  padding: 10px;
  width: 5px;
  i{
    display: none;
  }
}


.el-message-box__message {
  margin: 0;
  padding-top: 100px;
  background: url("../static/image/email.png") no-repeat top center;
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
@media screen and (max-width: 1175px) {
  .el-message-box {

    width: 80%;
  }
}
</style>
