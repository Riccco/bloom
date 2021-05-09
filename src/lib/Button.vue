<template>
    <button :style="{'background':background}" :id="type" :class="`bloom-${theme}`">
        <slot/>
    </button>
</template>

<script lang="ts">
export default {
    /*
    * no type
    * default
    * info
    * danger
    * ban
    * diy
    * */
    props:{
        theme:{
            type:String,
            default:"default"
        },
        backgroundColor:{
          type:String,
          default: ""
        }
    },
  setup(props){
    const type = 'default'
    let background = ""
    if(props.theme === "DIY" && props.backgroundColor !== ""){
        background = props.backgroundColor
    }
    return {type,background}
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

#default{
  padding: 10px 20px;
  border-radius: 4px;
  margin: 10px;
  color: white;
}

.bloom-default{
    color: black !important;
    background-color: #ffffff;
    border: 1px solid #dcdfe6;
}

.bloom-info{
  background-color: #909399;
}

.bloom-danger{
  background-color: #f56c6c;
}

.bloom-ban{
  background-color:#4a4a4a;
  &:hover{
    cursor: default;
  }
}
</style>