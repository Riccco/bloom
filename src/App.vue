<template>
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from 'vue'
import {router} from './router'
export default {
  name: 'App',
  setup(){
    const width = document.documentElement.clientWidth
    const asideVsbile = ref(width >= 500 ? true : false)
    provide('xxx',asideVsbile)
    router.afterEach(()=> {
      if(width <= 500){
        asideVsbile.value = false;
      }
    })
  }
}
</script>
