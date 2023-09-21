<script setup lang="ts">
import { IBirthDay } from "~/interfaces/IBirthDay";
interface IArrayDate {
  month: string;
  clients: Array<IBirthDay>;
}
const { dataBrith } = defineProps<{
  dataBrith: Array<IBirthDay>;
}>();
const Months = ref<{ [key: number]: IArrayDate }>({
  0: {
    month: "Enero",
    clients: [],
  },
  1: {
    month: "Febrero",
    clients: [],
  },
  2: {
    month: "Marzo",
    clients: [],
  },
  3: {
    month: "Abril",
    clients: [],
  },
  4: {
    month: "Mayo",
    clients: [],
  },
  5: {
    month: "Junio",
    clients: [],
  },
  6: {
    month: "Julio",
    clients: [],
  },
  7: {
    month: "Agosto",
    clients: [],
  },
  8: {
    month: "Septiembre",
    clients: [],
  },
  9: {
    month: "Octubre",
    clients: [],
  },
  10: {
    month: "Noviembre",
    clients: [],
  },
  11: {
    month: "Diciembre",
    clients: [],
  },
});
const getFechas = () => {};

watch(
  () => dataBrith,
  (value) => {
    value.forEach((item, index) => {
      const date = new Date(item.birthday);
      const month = date.getMonth();

      for (let key in Months.value) {
        if (Number(key) == month) {
          let x = Number(key);
          Months.value[x].clients.push(item);
        }
      }
    });
  },
  { immediate: true }
);
const data = ref([
  { id: 1, name: "Cy Ganderton", birthday: "Quality Control" },
  { id: 2, name: "Cy Ganderton", birthday: "Quality Control" },
  { id: 3, name: "Cy Ganderton", birthday: "Quality Control" },
  { id: 4, name: "Cy Ganderton", birthday: "Quality Control" },
  { id: 5, name: "Cy Ganderton", birthday: "Quality Control" },
  { id: 6, name: "Cy Ganderton", birthday: "Quality Control" },
]);
</script>


<template>
  <div
    v-for="(item, index) in Months"
    :key="index"
    class="collapse collapse-plus bg-base-200"
  >
    <input type="radio" name="my-accordion-3" />
    <div class="collapse-title text-xl font-medium">
      {{ item.month }}
      <div class="badge badge-error badge-sm">{{ item.clients.length }}</div>
    </div>
    <div class="collapse-content">
      <days  :data-births="item.clients" />
    </div>
  </div>
  <!-- <div class="collapse collapse-plus bg-base-200">
    <input type="radio" name="my-accordion-3" />
    <div class="collapse-title text-xl font-medium">
      Click to open this one and close others
    </div>
    <div class="collapse-content">
      <p>hello</p>
    </div>
  </div>
  <div class="collapse collapse-plus bg-base-200">
    <input type="radio" name="my-accordion-3" />
    <div class="collapse-title text-xl font-medium">
      Click to open this one and close others
    </div>
    <div class="collapse-content">
      <p>hello</p>
    </div>
  </div> -->
</template>