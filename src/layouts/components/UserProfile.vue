<script setup>
import { initialAbility } from '@/plugins/casl/ability'
import { useAppAbility } from '@/plugins/casl/useAppAbility'

const router = useRouter()
const ability = useAppAbility()
const userData = JSON.parse(localStorage.getItem('userData') || 'null')

const logout = () => {
  // Remove "userData" from localStorage
  localStorage.removeItem('userData')

  // Remove "accessToken" from localStorage
  localStorage.removeItem('accessToken')
  router.push('/login').then(() => {
    // Remove "userAbilities" from localStorage
    localStorage.removeItem('userAbilities')

    // Reset ability to initial ability
    ability.update(initialAbility)
  })
}

const avatarBadgeProps = {
  dot: true,
  location: 'bottom right',
  offsetX: 3,
  offsetY: 3,
  color: 'success',
  bordered: true,
}
</script>

<template>
  <VBadge v-bind="avatarBadgeProps">
    <VAvatar class="cursor-pointer" color="primary" variant="tonal">
      <VImg v-if="userData && userData.avatar" :src="userData.avatar" />
      <VIcon v-else icon="mdi-account-outline" />

      <!-- SECTION Menu -->
      <VMenu activator="parent" width="230" location="bottom end" offset="14px">
        <VList>
          <!-- 👉 User Avatar & Name -->
          <VListItem>
            <template #prepend>
              <VListItemAction start>
                <VBadge v-bind="avatarBadgeProps">
                  <VAvatar color="primary" size="40" variant="tonal">
                    <VImg v-if="userData && userData.avatar" :src="userData.avatar" />
                    <VIcon v-else icon="mdi-account-outline" />
                  </VAvatar>
                </VBadge>
              </VListItemAction>
            </template>

            <VListItemTitle class="font-weight-medium">
              {{ userData.username }}
            </VListItemTitle>
            <VListItemSubtitle>
              {{ userData.role }}
            </VListItemSubtitle>
          </VListItem>

          <!-- 👉 Logout -->
          <VListItem link @click="logout">
            <template #prepend>
              <VIcon class="me-2" icon="mdi-logout-variant" size="22" />
            </template>

            <VListItemTitle>Logout</VListItemTitle>
          </VListItem>
        </VList>
      </VMenu>
      <!-- !SECTION -->
    </VAvatar>
  </VBadge>
</template>
