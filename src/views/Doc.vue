<template>
  <div>
    <top-nav class="_top-nav" />
    <div class="doc-box">

      <drawer :asideVisible="asideVisible" />
      <div class="doc-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'
import TopNav from "../components/TopNav.vue";
import Drawer from '../components/Drawer.vue'

export default {
  components: { TopNav,Drawer },
  setup() {
    const asideVisible = inject<Ref<boolean>>("xxx");
    return {asideVisible}
  },
};
</script>

<style lang="scss">
@media (max-width:500px){
  // .doc-nav{
  //   display: none;
  // }
  .doc-content{
     margin-left: 0 !important;
  }
}
._top-nav {
  position: sticky;
  top: 0;
}
.doc-box {
  max-height: 100vh;
  display: flex;
}

.doc-content {
  height: 100vh;
  margin-left: 261px;
  flex: 1;
}
</style>
