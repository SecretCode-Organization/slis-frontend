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
          header: '정문명',
          name: 'door',
          rowSpan: true,
          sortingType: 'desc',
          sortable: true,
        },
        {
          header: '상태',
          name: 'state',
        },
        {
          header: '제한 해제 시간',
          name: 'unLimitTime',
        },
      ],
    },
    data: {
      type: Array,
      default: () => [
        {
          door: '해안문',
          state: '출입가능',
          unLimitTime: '',
        },
        {
          door: '해안문',
          state: '출입가능',
          unLimitTime: '',
        },
        {
          door: '해안문',
          state: '출입가능',
          unLimitTime: '',
        },
        {
          door: '2공장',
          state: '출입가능',
          unLimitTime: '',
        },
        {
          door: '명촌문',
          state: '출입가능',
          unLimitTime: '',
        },
        {
          door: '4공장',
          state: '출입가능',
          unLimitTime: '',
        },
        {
          door: '5공장',
          state: '출입가능',
          unLimitTime: '',
        },
        {
          door: '시트공장',
          state: '출입가능',
          unLimitTime: '',
        },
        {
          door: '매암동',
          state: '출입가능',
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
      <div ref="grid"></div>
    </VCard>
  </section>
</template>

<style scoped>
@import 'tui-grid/dist/tui-grid.css';
</style>
