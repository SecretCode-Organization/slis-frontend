<script setup>
import { useW002ListStore } from '@/pages/module/w002/useW002ListStore'

const w002ListStore = useW002ListStore()
const searchQuery = ref('')
const selectedRole = ref()
const selectedPlan = ref()
const selectedStatus = ref()
const totalList = ref(0)
const list = ref([])

// 👉 Fetching users
const fetchList = () => {
  w002ListStore
    .fetchList({
      q: searchQuery.value,
      status: selectedStatus.value,
      plan: selectedPlan.value,
      role: selectedRole.value,
    })
    .then((response) => {
      list.value = response.data
      totalList.value = response.data.length
    })
    .catch((error) => {
      console.error(error)
    })
}

watchEffect(fetchList)

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
]
</script>

<template>
  <section>
    <VCard>
      <VCardText class="d-flex flex-wrap gap-4 pa-0">
        <VRow class="pa-2">
          <VCol cols="12" sm="12" md="8" class="d-flex flex-wrap justify-start">
            <VCol cols="12" sm="4" md="2" class="">
              <VSelect v-model="selectedFactory" label="공장" :items="roles" clearable clear-icon="mdi-close" />
            </VCol>
            <VCol cols="12" sm="4" md="2" class="">
              <VSelect v-model="selectedFactory" label="공장" :items="roles" clearable clear-icon="mdi-close" />
            </VCol>
            <VCol cols="12" sm="4" md="2" class="">
              <VSelect v-model="selectedFactory" label="공장" :items="roles" clearable clear-icon="mdi-close" />
            </VCol>
          </VCol>
          <VCol cols="12" md="4" class="d-flex flex-nowrap justify-end">
            <VCol cols="12" sm="12" md="4" class="d-flex flex-nowrap justify-end">
              <VBtn class="" variant="tonal" color="secondary" prepend-icon="mdi-tray-arrow-up"> 엑셀 </VBtn>
              <VSpacer />
              <VBtn class="ml-3" @click="fetchList"> 조회 </VBtn>
            </VCol>
          </VCol>
        </VRow>
      </VCardText>

      <!-- 그리드 영역 -->
      <VTable class="ma-3 mt-0">
        <!-- 👉 table head -->
        <colgroup>
          <col width="08%" />
          <col width="06%" />
          <col width="08%" />
          <!-- <col width="08%"/> -->
          <col width="08%" />
          <col width="08%" />
          <col width="08%" />
          <col width="08%" />
          <col width="10%" />
          <col width="05%" />
          <col width="10%" />
          <col width="*" />
          <col width="08%" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" rowspan="2">공장</th>
            <th scope="col" rowspan="2">라인</th>
            <th scope="col" rowspan="2">모듈</th>
            <th scope="col" rowspan="2">협력사</th>
            <th scope="col" colspan="2">PBS OUT SEQ</th>
            <th scope="col">CTS 재공대수</th>
            <th scope="col">협력사 상차 SEQ</th>
            <th scope="col" rowspan="2">운송<br />재고</th>
            <th scope="col">하차 SEQ</th>
            <th scope="col">인라인 재고</th>
            <th scope="col">장착 SEQ</th>
          </tr>
          <tr>
            <th scope="col">PBS OUT 시간</th>
            <th scope="col">하차 예정 시간</th>
            <th scope="col">CTS 재공(능력)</th>
            <th scope="col">협력사 상차시간</th>
            <th scope="col">하차시간</th>
            <th scope="col">안전재고/인라인 재고 (능력)</th>
            <th scope="col">장착시간</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in list" :key="row.id">
            <td class="text-medium-emphasis">{{ row.plntName }}</td>
            <td class="text-medium-emphasis">{{ row.lineName }}</td>
            <td class="text-medium-emphasis">{{ row.moduName }}</td>
            <td class="text-medium-emphasis">{{ row.vendName }}</td>
            <td class="text-medium-emphasis">{{ row.plntCode }}</td>
            <td class="text-medium-emphasis">{{ row.lineCode }}</td>
            <td class="text-medium-emphasis">{{ row.moduCode }}</td>
            <td class="text-medium-emphasis">{{ row.vendCode }}</td>
            <td class="text-medium-emphasis">{{ row.fPbsoutSeq }}</td>
            <td class="text-medium-emphasis">{{ row.fPbsoutSeq }}</td>
            <td class="text-medium-emphasis">{{ row.fPbsoutSeq }}</td>
            <td class="text-medium-emphasis">{{ row.fPbsoutSeq }}</td>
          </tr>
        </tbody>
        <!-- 👉 table footer  -->
        <tfoot v-show="!list.length">
          <tr>
            <td colspan="12">조회된 내용이 없습니다.</td>
          </tr>
        </tfoot>
      </VTable>

      <VDivider />

      <VCardText class="d-flex align-center flex-wrap justify-start gap-4 pa-2">
        <div class="d-flex align-center">
          <h6 class="text-sm font-weight-regular">총 {{ totalList }} 건이 조회되었습니다.</h6>
        </div>
      </VCardText>
    </VCard>
  </section>
</template>

<style lang="scss" scope>
// 폼 scss
.v-input--density-comfortable {
  --v-input-control-height: 36px;
  --v-input-padding-top: 6px;
}
.v-input--density-comfortable .v-field--variant-outlined {
  --v-field-padding-bottom: 6px;
}
// 테이블 scss
.v-locale--is-ltr .v-table > .v-table__wrapper > table > thead > tr > th {
  text-align: center;
  border: 0.5px solid #c5dbec;
  background-color: rgba(86, 64, 76, 0.9);
  color: white;
  block-size: 25px;
}
.v-table--density-default > .v-table__wrapper > table > tbody > tr > td {
  border: 0.5px solid #c5dbec;
  text-align: center;
  block-size: 25px;
}
.v-table--density-default > .v-table__wrapper > table > tfoot > tr > td {
  border: 0.5px solid #c5dbec;
  text-align: center;
  block-size: 25px;
}
</style>
