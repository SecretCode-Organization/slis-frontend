<script setup>
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
    <VCard> </VCard>
  </section>
</template>
