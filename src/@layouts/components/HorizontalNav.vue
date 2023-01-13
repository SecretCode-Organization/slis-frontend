<script setup>
import { HorizontalNavGroup, HorizontalNavLink } from '@layouts/components'

import { themeConfig } from '@themeConfig'

import { VNodeRenderer } from '@layouts/components/VNodeRenderer'

import NavbarShortcuts from '@/layouts/components/NavbarShortcuts.vue'
import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
import NavSearchBar from '@/layouts/components/NavSearchBar.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'

const props = defineProps({
  navItems: {
    type: null,
    required: true,
  },
})

const resolveNavItemComponent = (item) => {
  if ('children' in item) return HorizontalNavGroup

  return HorizontalNavLink
}
</script>

<template>
  <ul class="nav-items">
    <!-- HorizontalNav 영역 -->
    <RouterLink to="/" class="d-flex align-center gap-x-3 mr-10">
      <VNodeRenderer :nodes="themeConfig.app.logo" />
      <h1 class="font-weight-medium leading-normal text-xl text-uppercase">
        {{ themeConfig.app.title }}
      </h1>
    </RouterLink>

    <Component :is="resolveNavItemComponent(item)" v-for="(item, index) in navItems" :key="index" :item="item" />

    <VSpacer />
    <NavSearchBar trigger-btn-class="ms-lg-n3" />
    <NavbarThemeSwitcher />
    <NavbarShortcuts />
    <UserProfile />
  </ul>
</template>

<style lang="scss">
.layout-wrapper.layout-nav-type-horizontal {
  .nav-items {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
