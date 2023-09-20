<script>
const props = defineProps('list')
</script>
<template>
    <div class="overflow-x-auto">
  <table class="table">
    <!-- head -->
    <thead>
      <tr>
        <th>id</th>
        <th>Name</th>
        <th>Birthday</th> 
      </tr>
    </thead>
    <tbody> 
      <tr v-for="item in props.data" :key="item.id">
        <td> {{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.birthday}}</td>
      </tr> 
    </tbody>
  </table>
</div>
</template>