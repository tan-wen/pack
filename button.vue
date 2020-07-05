<template>
    <button @click="handleClick" :style="styles">
        <slot></slot>
    </button>
</template>
<script>
export default {
    props:{
        color: {
            type:String,
            default:'#0c6'
        }
    },
    computed:{
        styles() {
            return {
                background:this.color
            }
        }
    },
    methods: {
        // 子组件将点击事件抛给父组件的bala方法
        handleClick(e) {
            this.$emit('bala', e);
        }
    }
}
</script>
<style scoped>
 button {
     border: 0;
     outline: none;
     color: #fff;
     padding: 4px 8px;
 }
 button:active{
     position: relative;
     top: 1px;
     left: 1px;
 }
</style>