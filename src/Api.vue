<script setup> //带setup的是组合式api，不带的是选项式api
    import{ref,onMounted} from "vue";
    const count = ref(0); //在组合式api中，一般需要把数据定义成响应式数据
    // const count = 0; 这样写不能够成功，原因如上

    function inc(){
        count.value++;
    }

    onMounted(()=>{
        console.log("VUE,启动！");
    })
        

</script>

<template>
<button @click="inc">count: {{ count }}</button>
</template>

<style>

</style>