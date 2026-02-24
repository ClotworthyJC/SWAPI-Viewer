<script setup>
import Navbar from "./components/navbar.vue";
import Listdisplay from "./components/listdisplay.vue";

import { useSwapiStore } from "./stores/swapi";

const swapiStore = useSwapiStore();

</script>

<template>
  <Navbar />
  <Listdisplay v-if="swapiStore.category != ''" />
</template>
