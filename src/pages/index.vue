<script>
import { defineComponent } from 'vue'
import AnalyticsUserTable from '@/views/dashboards/analytics/AnalyticsUserTable.vue'

export default defineComponent({
  components: { AnalyticsUserTable },
})
</script>

<template>
  <VRow class="match-height">
    <VCol cols="12" md="6">
      <AnalyticsUserTable />
    </VCol>

    <VCol cols="12" md="6">
      <AnalyticsUserTable />
    </VCol>
  </VRow>
</template>
