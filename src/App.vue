<template>
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from 'vue'
export default {
  name: 'App',
  setup(){
    const width = document.documentElement.clientWidth
    const asideVsbile = ref(width >= 500 ? true : false)
    provide('xxx',asideVsbile)
  }
}
</script>
