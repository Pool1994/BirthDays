<script setup lang="ts">
import { IBirthDay } from "~/interfaces/IBirthDay";

const {dataBirths} = defineProps<{
  dataBirths: Array<IBirthDay>;
}>();
</script>
<template>
  <div class="overflow-x-auto">
    <table class="table" aria-describedby="dd">
      <!-- head -->
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Birthday</th>
        </tr>
      </thead>
      <tbody class="bg-base-200">
        <tr v-for="item in dataBirths" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.birthday }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>