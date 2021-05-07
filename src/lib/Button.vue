<template>
    <button :class="'bloom-'+type">
        <slot></slot>
    </button>
</template>

<script lang="ts">
export default {
    props:{
        type:{
            type:String,
            default:"default"
        },
        round:{
            type:String
        }
    }
}
</script>

<style lang="scss">
// 为避免样式冲突 采用 bloom开头的 css
button{
    background-color:transparent;
    margin: 0;
    padding: 0;
    border: 0;
    &:hover{
        cursor: pointer;
    }
}

.bloom-default{

}
</style>