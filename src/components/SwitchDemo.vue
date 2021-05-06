<template>
        <div>
        <div>一个用来切换开关的demo</div>
        <Switch v-model:value="value"/>
        </div>
</template>


<script lang="ts">
import {ref} from 'vue'
import Switch from '../lib/Switch.vue'
export default {
    components:{Switch},
    setup(){
        const value = ref(false)
        return {value}
    }
}
</script>