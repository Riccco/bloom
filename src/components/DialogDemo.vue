<template>
 <div>
   {{visible}}
    <div @click="setVisible">点我弹出对话框组件</div>
   <Dialog @close="visible = $event" :visible="visible"></Dialog>
 </div>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import {ref} from 'vue'
export default {
  components:{Dialog},
  setup(){
    let visible = ref(false)
    const setVisible = ()=>{
      visible.value = !visible.value
    }

    return{visible,setVisible}
  }
}
</script>

<style lang="scss">

</style>