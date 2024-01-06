<script setup>
    import {ref} from "vue";
    import {articleGetAllService,articleSearchService} from "@/api/article.js"
    const articleList = ref([]);

    const getAllAtricle = async function(){
        let data = await articleGetAllService();
        articleList.value=data;
    }
    getAllAtricle();
    
    const searchCondition = ref({
        category:"" ,
        state:""
    })
    
    const search = async function(){
        let data = await articleSearchService({...searchCondition.value});
        articleList.value = data;
    }
</script>

<template>
    <div>

文章分类: <input type="text" v-model="searchCondition.category">

发布状态: <input type="text" v-model="searchCondition.state">

<button @click="search">搜索</button>

<br />
<br />
<table border="1 solid" colspa="0" cellspacing="0">
    <tr>
        <th>文章标题</th>
        <th>分类</th>
        <th>发表时间</th>
        <th>状态</th>
        <th>操作</th>
    </tr>
    <tr v-for="(i,index) in articleList">
                <td>{{i.title}}</td>
                <td>{{i.category}}</td>
                <td>{{i.time}}</td>
                <td>{{i.state}}</td>
                <td>
                    <button>编辑</button>
                    <button>删除</button>
                </td>
            </tr>
</table>
</div>

</template>