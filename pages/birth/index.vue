<script setup lang="ts">
import { IBirthDay } from "~/interfaces/IBirthDay";

const newAdd = ()=>{
    navigateTo('/')
}
let dataList = ref<Array<IBirthDay>>([]);
const list = async()=>{
    const {data} = await SupaBaseCnx.from("clients").select("*");
    dataList.value = data as Array<IBirthDay>;
}
onMounted(async()=>{
    await list();
})
</script>
<template>
    <button class="btn btn-primary" @click="newAdd">ADD BRITH DAY</button>
   <Month :data-brith="dataList" v-if="dataList.length > 0"/>
</template>