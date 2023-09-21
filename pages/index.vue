<script setup>
import { SupaBaseCnx } from "~/composables/accessSupaBase";
const form = ref({
  name: "",
  birthday: "",
});
const loading = ref(false);
const save = async () => {
  try {
    const { name, birthday } = form.value;
    loading.value = true;
    if (name === "" || birthday == "") {
      loading.value = false;
      alert("field name y birthdate is required");
      return;
    }

    const { data, error } = await SupaBaseCnx.from("clients")
      .insert([{ name, birthday: new Date(birthday) }])
      .select();
    if (error) {
      console.error(error);
    } else {
      navigateTo("/birth");
    }
  } catch (ex) {
    loading.value = false;
  }
};
</script>

<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="">
        <h1 class="text-5xl font-bold">Hello there</h1>
        <p class="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>

        <div class="flex flex-row justify-evenly">
          <input
            v-model="form.name"
            type="text"
            placeholder="name"
            class="input input-bordered w-full max-w-xs"
          />
          <input
            v-model="form.birthday"
            type="date"
            date-format="DD MMMM YYYY"
            placeholder="birth day"
            class="input input-bordered w-full max-w-xs"
          />
          <button class="btn btn-primary" @click="save">
            <template v-if="loading">
              <span class="loading loading-spinner loading-lg"></span>
            </template>
            <template v-else> Save </template>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>