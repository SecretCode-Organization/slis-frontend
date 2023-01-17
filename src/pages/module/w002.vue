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
        bodyHeight: 600,
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
    <div ref="grid"></div>
  </section>
</template>

<style scoped>
@import 'tui-grid/dist/tui-grid.css';
</style>
