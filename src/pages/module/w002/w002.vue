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

<script></script>

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

    <VCard class="">
      <VCardText class="d-flex flex-wrap gap-4">
        <!-- Export button -->
        <VBtn variant="tonal" color="secondary" prepend-icon="mdi-tray-arrow-up"> Export </VBtn>

        <VSpacer />

        <div class="app-user-search-filter d-flex align-center">
          <!-- select button -->
          <VBtn> Add User </VBtn>
        </div>
      </VCardText>

      <VDivider />

      <VTable>
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
            <td class="text-medium-emphasis"></td>
            <td class="text-medium-emphasis"></td>
            <td class="text-medium-emphasis"></td>
            <td class="text-medium-emphasis"></td>
            <td class="text-medium-emphasis"></td>
            <td class="text-medium-emphasis"></td>
            <td class="text-medium-emphasis"></td>
            <td class="text-medium-emphasis"></td>
            <td class="text-medium-emphasis"></td>
            <td class="text-medium-emphasis"></td>
            <td class="text-medium-emphasis"></td>
          </tr>
        </tbody>
        <!-- 👉 table body -->
        <!--        <tbody> -->
        <!--          <tr v-for="user in users" :key="user.id"> -->
        <!--            &lt;!&ndash; 👉 Checkbox &ndash;&gt; -->
        <!--            <td> -->
        <!--              <div style="width: 1.875rem"> -->
        <!--                <VCheckbox -->
        <!--                  :id="`check${user.id}`" -->
        <!--                  :model-value="selectedRows.includes(`check${user.id}`)" -->
        <!--                  @click="addRemoveIndividualCheckbox(`check${user.id}`)" -->
        <!--                /> -->
        <!--              </div> -->
        <!--            </td> -->

        <!--            &lt;!&ndash; 👉 User &ndash;&gt; -->
        <!--            <td> -->
        <!--              <div class="d-flex align-center"> -->
        <!--                <VAvatar variant="tonal" :color="resolveUserRoleVariant(user.role).color" class="me-3" size="34"> -->
        <!--                  <VImg v-if="user.avatar" :src="user.avatar" /> -->
        <!--                  <span v-else>{{ avatarText(user.fullName) }}</span> -->
        <!--                </VAvatar> -->

        <!--                <div class="d-flex flex-column"> -->
        <!--                  <h6 class="text-sm font-weight-medium"> -->
        <!--                    <RouterLink -->
        <!--                      :to="{ name: 'apps-user-view-id', params: { id: user.id } }" -->
        <!--                      class="font-weight-medium user-list-name" -->
        <!--                    > -->
        <!--                      {{ user.fullName }} -->
        <!--                    </RouterLink> -->
        <!--                  </h6> -->
        <!--                  <span class="text-xs text-medium-emphasis">@{{ user.username }}</span> -->
        <!--                </div> -->
        <!--              </div> -->
        <!--            </td> -->

        <!--            &lt;!&ndash; 👉 Email &ndash;&gt; -->
        <!--            <td class="text-medium-emphasis"> -->
        <!--              {{ user.email }} -->
        <!--            </td> -->

        <!--            &lt;!&ndash; 👉 Role &ndash;&gt; -->
        <!--            <td> -->
        <!--              <VIcon -->
        <!--                :icon="resolveUserRoleVariant(user.role).icon" -->
        <!--                :color="resolveUserRoleVariant(user.role).color" -->
        <!--                :size="22" -->
        <!--                class="me-3" -->
        <!--              /> -->
        <!--              <span class="text-capitalize text-medium-emphasis">{{ user.role }}</span> -->
        <!--            </td> -->

        <!--            &lt;!&ndash; 👉 Plan &ndash;&gt; -->
        <!--            <td class="text-capitalize"> -->
        <!--              {{ user.currentPlan }} -->
        <!--            </td> -->

        <!--            &lt;!&ndash; 👉 Status &ndash;&gt; -->
        <!--            <td> -->
        <!--              <VChip :color="resolveUserStatusVariant(user.status)" size="small" class="text-capitalize"> -->
        <!--                {{ user.status }} -->
        <!--              </VChip> -->
        <!--            </td> -->

        <!--            &lt;!&ndash; 👉 Actions &ndash;&gt; -->
        <!--            <td  style="width: 5rem"> -->
        <!--              <VBtn size="x-small" color="default" variant="plain" icon> -->
        <!--                <VIcon size="24" icon="mdi-dots-vertical" /> -->

        <!--                <VMenu activator="parent"> -->
        <!--                  <VList> -->
        <!--                    <VListItem :to="{ name: 'apps-user-view-id', params: { id: user.id } }"> -->
        <!--                      <template #prepend> -->
        <!--                        <VIcon icon="mdi-eye-outline" :size="20" class="me-3" /> -->
        <!--                      </template> -->

        <!--                      <VListItemTitle>View</VListItemTitle> -->
        <!--                    </VListItem> -->

        <!--                    <VListItem href="javascript:void(0)"> -->
        <!--                      <template #prepend> -->
        <!--                        <VIcon icon="mdi-pencil-outline" :size="20" class="me-3" /> -->
        <!--                      </template> -->
        <!--                      <VListItemTitle>Edit</VListItemTitle> -->
        <!--                    </VListItem> -->

        <!--                    <VListItem href="javascript:void(0)"> -->
        <!--                      <template #prepend> -->
        <!--                        <VIcon icon="mdi-delete-outline" :size="20" class="me-3" /> -->
        <!--                      </template> -->

        <!--                      <VListItemTitle>Delete</VListItemTitle> -->
        <!--                    </VListItem> -->
        <!--                  </VList> -->
        <!--                </VMenu> -->
        <!--              </VBtn> -->
        <!--            </td> -->
        <!--          </tr> -->
        <!--        </tbody> -->

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
.v-table thead tr th {
  border: 1px solid #c5dbec;
  background-color: rgba(86, 64, 76, 0.9);
  color: white;
  text-align: center;
}
.v-table tbody tr {
  height: 1rem;
}
.v-table tbody tr td {
  border: 1px solid #c5dbec;
  text-align: center;
}
</style>
