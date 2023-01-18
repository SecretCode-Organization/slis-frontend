<script setup>
import { onMounted, ref } from 'vue'

const data = ref([
  {
    id: '10012',
    city: 'Seoul',
    country: 'South Korea',
  },
  {
    id: '10013',
    city: 'Tokyo',
    country: 'Japan',
  },
  {
    id: '10014',
    city: 'London',
    country: 'England',
  },
  {
    id: '10015',
    city: 'Ljubljana',
    country: 'Slovenia',
  },
  {
    id: '10016',
    city: 'Reykjavik',
    country: 'Iceland',
  },
])

const columns = ref([
  {
    header: 'ID',
    name: 'id',
  },
  {
    header: 'CITY',
    name: 'city',
    editor: 'text',
  },
  {
    header: 'COUNTRY',
    name: 'country',
  },
])

const GridTable = ref()

onMounted(() => {
  const grid = GridTable.value
})
</script>

<template>
  <TuiGrid ref="GridTable" :data="data" :columns="columns" />
</template>
