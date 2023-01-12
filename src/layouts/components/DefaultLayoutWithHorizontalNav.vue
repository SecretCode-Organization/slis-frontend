<script setup>
import axios from '@axios'

const navItems = ref([])

axios.get('nav-items').then(({ data }) => {
  navItems.value = data
})

import { useThemeConfig } from '@core/composable/useThemeConfig'

// Components
import { HorizontalNavLayout } from '@layouts'

const { appRouteTransition } = useThemeConfig()
</script>

<template>
  <HorizontalNavLayout :nav-items="navItems">
    <!-- 👉 Pages -->
    <RouterView v-slot="{ Component, route }">
      <Transition :name="appRouteTransition" mode="out-in">
        <Component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>
    <!-- 👉 footer -->
    <!--    <template #footer> -->
    <!--      <Footer /> -->
    <!--    </template> -->

    <!-- 👉 Customizer -->
    <TheCustomizer />
  </HorizontalNavLayout>
</template>
