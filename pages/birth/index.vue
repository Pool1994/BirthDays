<script setup>
const newAdd = ()=>{
    navigateTo('/')
}
let dataList = ref([]);
const list = async()=>{
    const {data} = await SupaBaseCnx.from("clients").select("*");
    dataList.value = data;
}
list();
</script>

<template>
    <button class="btn btn-primary" @click="newAdd">ADD BRITH DAY</button>
    <pre>{{ dataList }}</pre>
</template>