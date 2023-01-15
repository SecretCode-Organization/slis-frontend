<script>
import Grid from 'tui-grid'

export default {
  name: 'TuiGrid',
  props: {
    columns: {
      type: Array,
      default: () => [
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
  },
  mounted() {
    this.makeTable()
  },
  methods: {
    makeTable() {
      this.grid = new Grid({
        el: this.$refs.grid,
        columns: this.columns,
        data: this.data,
        options: this.options,
      })
    },
  },
}
</script>

<template>
  <VRow class="match-height">
    <VCol cols="12" md="6">
      <div ref="grid"></div>
    </VCol>

    <VCol cols="12" md="6">asdasdasd </VCol>
  </VRow>
</template>

<style scoped>
@import 'tui-grid/dist/tui-grid.css';
</style>
