<template>
    <div>
        <top-nav />
      <main class="main">
        <img src="../assets/logo.png" alt="logo">
        <h1>Bloom</h1>
        <h2>一款基于vue3的轮子</h2>
        <div class="content">
          <a href="">GitHub</a>
          <a href="">Blog</a>
          <router-link to="/doc">star</router-link>
        </div>
      </main>

    </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue'
export default {
    components:{
        TopNav
    }
}
</script>

<style lang="scss">
@function vw($px) {
  @return ($px / 750) * 100vw;
}
  .main{
    padding-top: 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  h1{
    font-size: vw(50);
    font-weight: 600;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  h2{
    font-size: vw(32);
  }

  .content{
    padding-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

.content > a:nth-child(1),.content > a:nth-child(2){
  border: 2px solid #42b983;
  border-radius: 16px;
  color: #42b983;
  padding: 8px 16px;
  font-size: vw(30);
}

.content > a:nth-child(2){
  margin-left: 16px;
  margin-right: 16px;
}

.content > a:nth-child(3){
  background-color: #42b983;
  color: #fff;
  padding: 8px 16px;
  border-radius: 16px;
  border: 2px solid #42b983;
}
    
</style>