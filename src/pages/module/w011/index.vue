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

<script>
import Grid from 'tui-grid'

Grid.applyTheme('striped')

export default {
  name: 'TuiGrid',
  props: {
    columns: {
      type: Array,
      default: () => [
        {
          header: '์ ๋ฌธ๋ช',
          name: 'door',
          rowSpan: true,
          sortingType: 'desc',
          sortable: true,
        },
        {
          header: '์ํ',
          name: 'state',
        },
        {
          header: '์ ํ ํด์  ์๊ฐ',
          name: 'unLimitTime',
        },
      ],
    },
    data: {
      type: Array,
      default: () => [
        {
          door: 'ํด์๋ฌธ',
          state: '์ถ์๊ฐ๋ฅ',
          unLimitTime: '',
        },
        {
          door: 'ํด์๋ฌธ',
          state: '์ถ์๊ฐ๋ฅ',
          unLimitTime: '',
        },
        {
          door: 'ํด์๋ฌธ',
          state: '์ถ์๊ฐ๋ฅ',
          unLimitTime: '',
        },
        {
          door: '2๊ณต์ฅ',
          state: '์ถ์๊ฐ๋ฅ',
          unLimitTime: '',
        },
        {
          door: '๋ช์ด๋ฌธ',
          state: '์ถ์๊ฐ๋ฅ',
          unLimitTime: '',
        },
        {
          door: '4๊ณต์ฅ',
          state: '์ถ์๊ฐ๋ฅ',
          unLimitTime: '',
        },
        {
          door: '5๊ณต์ฅ',
          state: '์ถ์๊ฐ๋ฅ',
          unLimitTime: '',
        },
        {
          door: '์ํธ๊ณต์ฅ',
          state: '์ถ์๊ฐ๋ฅ',
          unLimitTime: '',
        },
        {
          door: '๋งค์๋',
          state: '์ถ์๊ฐ๋ฅ',
          unLimitTime: '',
        },
      ],
    },
    usageStatistics: false,
  },
  mounted() {
    this.makeTable()
  },
  methods: {
    makeTable() {
      this.grid = new Grid({
        el: this.$refs.grid,
        bodyHeight: 450,
        columns: this.columns,
        data: this.data,
        options: this.options,
      })
    },
  },
}
</script>

<template>
  <section>
    <VCard title="๊ฒ์์กฐ๊ฑด" class="mb-6">
      <VCardText>
        <VRow>
          <VCol cols="12" sm="4" class="bg-amber">
            <VSelect v-model="selectedFactory" label="๊ณต์ฅ" :items="roles" clearable clear-icon="mdi-close"
          /></VCol>
          <VCol cols="12" sm="3" class="bg-amber">
            <VSelect v-model="selectedFactory" label="๋ผ์ธ" :items="roles" clearable clear-icon="mdi-close"
          /></VCol>
          <VCol cols="12" sm="3" class="bg-amber">
            <VSelect v-model="selectedFactory" label="๋ชจ๋" :items="roles" clearable clear-icon="mdi-close"
          /></VCol>
          <VCol cols="12" sm="2" class="bg-amber">
            <VSelect v-model="selectedFactory" label="ํ๋ ฅ์ฌ" :items="roles" clearable clear-icon="mdi-close"
          /></VCol>
        </VRow>
      </VCardText>
    </VCard>

    <!-- ๊ทธ๋ฆฌ๋ ์์ญ -->
    <VCard>
      <div ref="grid"></div>
    </VCard>
  </section>
</template>

<style scoped>
@import 'tui-grid/dist/tui-grid.css';
</style>
