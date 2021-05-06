<template>
  <div>
    <button 
    :class="{'checked' : value}"
    @click="toggle"
     class="toggle"><span class="switch-toggle"></span></button>
  </div>
</template>

<script lang="ts">
export default {
  props:{
    value:{
      type:Boolean,
      default:false
    }
  },
  setup(props,context){
    const toggle = ()=>{
      context.emit('update:value',!props.value)
    }
    return {toggle}
  }
}
</script>

<style lang="scss" scoped>
$h:25px;
button.checked > span{
  left: calc(100% - #{$h} - 2px);
}
button.checked{
  background-color: blue;
}
button {
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
}
.switch-toggle {
  left: 2px;
  width: 25px;
  height: $h;
  background-color: #ffffff;
  border-radius: 50%;
  position: absolute;
  transition: left 250ms;
}
.toggle {
    position:relative;
    background-color: grey;
    display: flex;
    align-items: center;
    height: 29px;
    width: 60px;
    border-radius: 75px;
}
</style>
