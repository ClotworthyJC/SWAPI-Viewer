<script setup>
    import {ref} from 'vue'
    import { useSwapiStore } from '@/stores/swapi'

    const swapiStore = useSwapiStore();

    const SetCategory = _category =>{
        swapiStore.SetCategory(_category)
    }

</script>
<template>
  <div class="w-full px-5 border border-b-slate-200 flex justify-center items-center ">

    <div class="flex gap-8 pb-1">
            <span class="border-2 px-3 py-1 m-1 rounded-lg" @click="SetCategory('films')">Films</span>
            <span class="border-2 px-3 py-1 m-1 rounded-lg" @click="SetCategory('people')">People</span>
            <span class="border-2 px-3 py-1 m-1 rounded-lg" @click="SetCategory('vehicles')">Vehicles</span>
            <span class="border-2 px-3 py-1 m-1 rounded-lg" @click="SetCategory('planets')">Planets</span>
            <span class="border-2 px-3 py-1 m-1 rounded-lg" @click="SetCategory('species')">Species</span>
    </div>
  </div>
</template>
