<template>
  <div class="nav-box">
    <div class="visbile" @click="toggleMenu">Visib1le</div>
    <img class="menu" src="../assets/logo.png"/>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue'

export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>('xxx')
    const toggleMenu = () => {
      asideVisible.value = !asideVisible.value
    }
    return {toggleMenu}
  }
}
</script>

<style lang="scss">
@media (min-width: 500px) {
  .visbile {
    display: none;
  }
}

.menu {
  width: 16px;
  height: 16px;
}

.nav-box {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #eaecef;
}
</style>