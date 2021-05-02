<template>
    <div>
        <top-nav />
        <div class="topnav">
            <a href="">GitHub</a>
            <a href="">Blog</a>
            <router-link to="/doc">star</router-link>
        </div>
        <div class="banner">标题</div>
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

<style>
    
</style>