<!-- <script>
export default{
  data(){
    return {
      msg:"上海"
    }
  }
}
</script> -->
<script setup>
    import {ref} from "vue";
    const msg = ref("西安");

    import ApiVue from "./Api.vue";
    import Article from "./Article.vue";
</script>

<template>
  <!-- <h1>{{msg}}</h1><br> -->
  <Article/>
</template>

<style scoped>
h1{
  color:red;
}
</style>
