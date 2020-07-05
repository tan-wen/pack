<template>
    <div>
        <v-title title="Vue组件化"></v-title>
        <v-button @bala="handleClick" color="#f95"> 点击按钮 </v-button>
        <p>
            <img src="./images/cat.jpg" style="width: 200px;">
        </p>
    </div>
</template>
<script>
import vTitle from "./title.vue";
import vButton from "./button.vue";
export default {
    components:{
        vTitle,
        vButton
    },
    methods:{
        handleClick(e) {
            console.log("父组件中执行点击事件后要执行的方法" + e);
        }
    }
}
</script>