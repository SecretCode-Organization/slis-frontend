<script setup>
// Form ๋ณ์ ์ ์
const selectedFactory = ref()

// ๐ search filters
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
    <VCard class="mb-3">
      <VCardText class="pb-2 pt-2">
        <VRow>
          <VCol cols="10">
            <VRow>
            <VCol cols="12" lg="2" class="bg-amber">
              <VSelect v-model="selectedFactory" label="๊ณต์ฅ" :items="roles" clearable clear-icon="mdi-close"
              /></VCol>
            <VCol cols="12" lg="2" class="bg-amber">
              <VSelect v-model="selectedFactory" label="๋ผ์ธ" :items="roles" clearable clear-icon="mdi-close"
              /></VCol>
            <VCol cols="12" lg="2"  class="bg-amber">
              <VSelect v-model="selectedFactory" label="๋ชจ๋" :items="roles" clearable clear-icon="mdi-close"
              /></VCol>
            <VCol cols="12" lg="2"  class="bg-amber">
              <VSelect v-model="selectedFactory" label="ํ๋ ฅ์ฌ" :items="roles" clearable clear-icon="mdi-close"
              /></VCol>
            </VRow>
          </VCol>
          <VCol cols="2">
            ๊ฒ์๋ฒํผ
          </VCol>
        </VRow>
      </VCardText>
    </VCard>

    <!-- ๊ทธ๋ฆฌ๋ ์์ญ -->
    <VCard>๊ทธ๋ฆฌ๋ ์์ญ</VCard>
  </section>
</template>
