<template>
  <div>
    <top-nav class="_top-nav" />
    <div class="doc-box">
      <div class="doc-nav">
          <div>
              <h3>标题1</h3>
              <ul>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
              </ul>
          </div>

                    <div>
              <h3>标题1</h3>
              <ul>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
              </ul>
          </div>


                    <div>
              <h3>标题1</h3>
              <ul>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
              </ul>
          </div>


                    <div>
              <h3>标题1</h3>
              <ul>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
              </ul>
          </div>

                    <div>
              <h3>标题1</h3>
              <ul>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
              </ul>
          </div>

                    <div>
              <h3>标题1</h3>
              <ul>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
              </ul>
          </div>

                    <div>
              <h3>标题1</h3>
              <ul>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
              </ul>
          </div>

                    <div>
              <h3>标题1</h3>
              <ul>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
              </ul>
          </div>

                    <div>
              <h3>标题1</h3>
              <ul>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
              </ul>
          </div>

                    <div>
              <h3>标题1</h3>
              <ul>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
              </ul>
          </div>

                    <div>
              <h3>标题1</h3>
              <ul>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
              </ul>
          </div>
      </div>

      <div class="doc-content">
          内容区域
          1
          </div>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";
export default {
  components: {
    TopNav,
  },
};
</script>

<style lang="scss">
._top-nav{
    position: sticky;
    top: 0;
}
    .doc-box{
        max-height: 100vh;
        display: flex;
    }
    .doc-nav{
        max-height: 100vh;
        box-sizing: border-box;
        width: 261px;
        position: fixed;
        overflow-x: auto;
        padding-left: 20px;
        padding-right: 10px;
        background-color: burlywood;
    }
    .doc-content{
        height: 100vh;
        margin-left: 261px;
        flex: 1;
        background-color: aquamarine;
    }
</style>
