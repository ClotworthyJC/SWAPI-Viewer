<script setup>
import { ref, watch } from "vue";
import WebRequest from "@/services/WebRequestServices";
import Card from "./card.vue";
import { useSwapiStore } from "@/stores/swapi";

const swapiStore = useSwapiStore();

watch(async () => {
  const result = await WebRequest.Get(
    `https://swapi.info/api/${swapiStore.category}`,
  );
  swapiStore.UpdateCategoryList(result);
});

const SelectItem = (item) => {
    console.log(item)
}

</script>
<template>
  <div class="flex">
    <div class="w-1/5  h-[94vh] overflow-y-scroll border-r-2 border-r-slate-300">
        <div v-for="value in swapiStore.categoryList" class="mx-2 my-1 hover:bg-slate-100" @click="SelectItem(value)">
        <Card>
            <h2>{{ swapiStore.category === 'films' ? value.title : value.name}}</h2>
        </Card>
    </div>
    </div>
    <div class="w-4/5 bg-slate-200">

    </div>
  </div>
</template>
