<script setup>
import { AgGridVue } from 'ag-grid-vue3'

const columnDefs = [
  { field: 'make', sortable: true },
  { field: 'model', sortable: true },
  { field: 'price', sortable: true },
]

const rowData = [
  { make: 'Toyota', model: 'Celica', price: 35000 },
  { make: 'Ford', model: 'Mondeo', price: 32000 },
  { make: 'Porsche', model: 'Boxter', price: 72000 },
]

// Form 변수 정의
const selectedFactory = ref()

// 👉 search filters
const roles = [
  {
    title: 'Admin',
    value: 'admin',
  },
  {
    title: 'Author',
    value: 'author',
  },
  {
    title: 'Editor',
    value: 'editor',
  },
  {
    title: 'Maintainer',
    value: 'maintainer',
  },
  {
    title: 'Subscriber',
    value: 'subscriber',
  },
]
</script>

<template>
  <section>
    <VCard title="검색조건" class="mb-6">
      <VCardText>
        <VRow>
          <VCol cols="12" sm="4" class="bg-amber">
            <VSelect v-model="selectedFactory" label="공장" :items="roles" clearable clear-icon="mdi-close"
          /></VCol>
          <VCol cols="12" sm="3" class="bg-amber">
            <VSelect v-model="selectedFactory" label="라인" :items="roles" clearable clear-icon="mdi-close"
          /></VCol>
          <VCol cols="12" sm="3" class="bg-amber">
            <VSelect v-model="selectedFactory" label="모듈" :items="roles" clearable clear-icon="mdi-close"
          /></VCol>
          <VCol cols="12" sm="2" class="bg-amber">
            <VSelect v-model="selectedFactory" label="협력사" :items="roles" clearable clear-icon="mdi-close"
          /></VCol>
        </VRow>
      </VCardText>
    </VCard>

    <!-- 그리드 영역 -->
    <VCard>
      <AgGridVue
        style="width: 100%; height: 500px"
        class="ag-theme-alpine"
        :column-defs="columnDefs"
        :row-data="rowData"
      >
      </AgGridVue>
    </VCard>
  </section>
</template>
