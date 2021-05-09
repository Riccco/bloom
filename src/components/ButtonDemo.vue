<template>
    <div>
      <p>使用方法： themem 有五种样式， 当theme为DIY时，可以自定义颜色</p>
      <bm-button >默认</bm-button>
      <bm-button theme="info">信息</bm-button>
      <bm-button theme="danger">警告</bm-button>
      <bm-button theme="ban">禁用</bm-button>
      <bm-button theme="DIY" backgroundColor="pink">自定义颜色</bm-button>
    </div>
</template>

<script lang="ts">
import BmButton from '../lib/Button.vue'
export default {
   components:{
       BmButton
   } 
}
</script>

<style lang="scss">
    
</style>