<script setup>
import { useW002ListStore } from '@/pages/module/w002/useW002ListStore'

const w002ListStore = useW002ListStore()
const searchQuery = ref('')
const selectedRole = ref()
const selectedPlan = ref()
const selectedStatus = ref()
const totalList = ref(0)
const list = ref([])

// π Fetching users
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

// Form λ³μ μ μ
const selectedFactory = ref()

// π search filters
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

      <VCardText class="pb-2 pt-2 pl-3 pr-3">
        <VRow>
          <VCol cols="10">
            <VRow>
              <VCol cols="12" lg="2" >
                <VSelect v-model="selectedFactory" label="κ³΅μ₯" :items="roles" clearable clear-icon="mdi-close"
                /></VCol>
              <VCol cols="12" lg="2" >
                <VSelect v-model="selectedFactory" label="λΌμΈ" :items="roles" clearable clear-icon="mdi-close"
                /></VCol>
              <VCol cols="12" lg="2"  >
                <VSelect v-model="selectedFactory" label="λͺ¨λ" :items="roles" clearable clear-icon="mdi-close"
                /></VCol>
              <VCol cols="12" lg="2"  >
                <VSelect v-model="selectedFactory" label="νλ ₯μ¬" :items="roles" clearable clear-icon="mdi-close"
                /></VCol>
            </VRow>
          </VCol>
          <VCol cols="2">
            <VRow>
              <VCol cols="12" lg="12"  class="d-flex flex-wrap justify-end">
                <VBtn class="ml-3" variant="tonal" color="secondary" prepend-icon="mdi-tray-arrow-up"> μμ </VBtn>
                <VBtn class="ml-3" @click="fetchList"> μ‘°ν </VBtn>
              </VCol>
            </VRow>

          </VCol>
        </VRow>
      </VCardText>
      <!-- κ·Έλ¦¬λ μμ­ -->
      <VTable class="ma-3 mt-0">
        <!-- π table head -->
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
            <th scope="col" rowspan="2">κ³΅μ₯</th>
            <th scope="col" rowspan="2">λΌμΈ</th>
            <th scope="col" rowspan="2">λͺ¨λ</th>
            <th scope="col" rowspan="2">νλ ₯μ¬</th>
            <th scope="col" colspan="2">PBS OUT SEQ</th>
            <th scope="col">CTS μ¬κ³΅λμ</th>
            <th scope="col">νλ ₯μ¬ μμ°¨ SEQ</th>
            <th scope="col" rowspan="2">μ΄μ‘<br />μ¬κ³ </th>
            <th scope="col">νμ°¨ SEQ</th>
            <th scope="col">μΈλΌμΈ μ¬κ³ </th>
            <th scope="col">μ₯μ°© SEQ</th>
          </tr>
          <tr>
            <th scope="col">PBS OUT μκ°</th>
            <th scope="col">νμ°¨ μμ  μκ°</th>
            <th scope="col">CTS μ¬κ³΅(λ₯λ ₯)</th>
            <th scope="col">νλ ₯μ¬ μμ°¨μκ°</th>
            <th scope="col">νμ°¨μκ°</th>
            <th scope="col">μμ μ¬κ³ /μΈλΌμΈ μ¬κ³  (λ₯λ ₯)</th>
            <th scope="col">μ₯μ°©μκ°</th>
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
        <!-- π table footer  -->
        <tfoot v-show="!list.length">
          <tr>
            <td colspan="12">μ‘°νλ λ΄μ©μ΄ μμ΅λλ€.</td>
          </tr>
        </tfoot>
      </VTable>

      <VDivider />

      <VCardText class="d-flex align-center flex-wrap justify-start gap-4 pa-2">
        <div class="d-flex align-center">
          <h6 class="text-sm font-weight-regular">μ΄ {{ totalList }} κ±΄μ΄ μ‘°νλμμ΅λλ€.</h6>
        </div>
      </VCardText>
    </VCard>
  </section>
</template>

<style lang="scss" scope>
</style>
