<template>
    <div class="nav-box">
        <div class="visbile" @click="toggleMenu">Visible</div>
        <router-link to="/" class="logo">i'm logo</router-link>
        <div class="menu">i'm menu</div>
    </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'
export default {
    setup(){
        const asideVisible =  inject<Ref<boolean>>('xxx')
        const toggleMenu = ()=>{
            console.log('我运行了')
            asideVisible.value = !asideVisible.value
            console.log(typeof asideVisible)
        }
        return {toggleMenu}
    }
}
</script>

<style lang="scss">
@media (min-width:500px){
    .visbile{display: none;}
    
}
@media (max-width:500px) {
    .menu{display: none;}
}
    .nav-box{
        display: flex;
        justify-content: space-between;
        background-color: pink;
        padding: 10px;
    }
</style>