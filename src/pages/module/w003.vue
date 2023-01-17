<script setup>
import Grid from 'tui-grid'

const columns = [
  {
    header: '정문명',
    name: 'door',
  },
  {
    header: '상태',
    name: 'state',
  },
  {
    header: '제한 해제 시간',
    name: 'unLimitTime',
  },
]

const data = [
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
]

const grid = ref()

grid.value = new Grid({
  el: grid,
  columns: columns,
  data: data,
})
</script>

<template>
  <section>
    <div ref="grid"></div>
  </section>
</template>

<style scoped>
@import 'tui-grid/dist/tui-grid.css';
</style>
