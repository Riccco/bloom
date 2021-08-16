<template>
  <aside
      :class="[asideVisible ? 'move-style-visible-on' : 'move-style-visible-off']"
      class="doc-nav"  id="docNav" ref="getRef">
    <nav ref="getRef">
      <div>文档</div>
    </nav>
      <ul>
        <section>
          <p>基础</p>
          <ul>
            <li>安装</li>
            <li>介绍</li>
            <li>
              <router-link to="/doc/switch">siwtch</router-link>
            </li>
            <li>
              <router-link to="/doc/button">Button</router-link>
            </li>
            <li>
              <router-link to="/doc/dialog">Dialog</router-link>
            </li>
          </ul>
        </section>

      </ul>
  </aside>
</template>

<script lang="ts">
  import {ref, reactive, onMounted} from "vue";

  export default {
    props:['asideVisible'],
    setup(context) {
      const getRef = ref(null)
      let width = ref(0)
      onMounted(()=>{
        width.value = getRef.value.clientWidth
        console.log(getRef.value.clientWidth)
        console.log(width.value)
      })
      return {getRef,width};
    },
  }
</script>

<style lang="scss">

.move-style-visible-off{
  left: -100%;
  transform: translateX(100%);
  transition: all 500ms;
}

.move-style-visible-on{
  left: 0;
  transform: translateX(0);
  transition: all 500ms;
}

.doc-nav {
  height: 100vh;
  position: fixed;
  overflow-x: auto;
  padding-left: 20px;
  padding-right: 130px;
  background-color: #fff;
  z-index: 2;
  border-right: 1px solid #eaecef;
}
</style>