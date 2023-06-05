<template>
  <Layout
    has-sider
    :style="{
      minHeight: '100vh'
    }"
  >
    <AppDrawer />
    <LayoutContent :style="{ marginLeft: '200px' }">
      <RouterView />
    </LayoutContent>
  </Layout>
</template>
<script setup lang="ts">
import AppDrawer from '@/components/AppDrawer.vue'
import { Layout, LayoutContent } from 'ant-design-vue'
import { RouterView } from 'vue-router'
</script>
