<template>
  <template v-if="visible">
  <div class="bloom-dialog-overlay"></div>
  <div class="bloom-visbile">
    <div class="bloom-dialog-wrapper">
    <header>标题</header>
    <main>
      <p class="bloom-dialog-msg">这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息</p>
    </main>
    <footer>
      <Button theme="DIY" backgroundColor="#1976d2">确定</Button>
      <Button @click="close">取消</Button>
    </footer>
  </div>
  </div>
  </template>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components:{Button},
  props:{
    visible:{
      type:Boolean,
      default:false
    }
  },
  setup(props,context){
      const close = ()=>{
        context.emit('close', !props.visible)
      }
      return {close}
  }
};
</script>

<style lang="scss">
  body{
    overflow: hidden;
  }

  header{
    font-size: 18px;
    padding: 20px 20px 0 20px;
  }

  footer{
    width: inherit;
    text-align: right;
  }

  .bloom-dialog-msg{
    padding: 20px 20px 0 20px;
    margin: 0;
    padding-top: 10px;
    padding-bottom: 15px;
    font-size: 14px;
  }

  .bloom-dialog-overlay{
    height: 100vh;
    width: 100vw;
    background-color:fade-out(black,0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    overflow: auto;
  }
  .bloom-visbile{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 11;
    min-width: 270px;
  }

  .bloom-dialog-wrapper{
    box-sizing: border-box;
    background-color: white;
    border-radius: 4px;
  }
</style>