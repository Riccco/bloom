<template>
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from 'vue'
export default {
  name: 'App',
  setup(){
    const asideVsbile = ref(false)
    provide('xxx',asideVsbile)
  }
}
</script>
