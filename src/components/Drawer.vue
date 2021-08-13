<template>
  <div ref="getRef"></div>
  <aside class="doc-nav" id="docNav"  ref="getRef">
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
      onMounted(()=>{
        const domWidth = document.getElementById('docNav')
        console.log(domWidth.clientWidth)
        console.log(getRef.value);
        // console.log(getRef.value.clientWidth)
      })
      return {getRef};
    },
  }
</script>

<style lang="scss">
.doc-nav {
  border: 1px solid red;
  height: 100vh;
  width: 261px;
  position: fixed;
  overflow-x: auto;
  padding-left: 20px;
  padding-right: 10px;
  background-color: #fff;
  z-index: 2;
  border-right: 1px solid #eaecef;
}
</style>