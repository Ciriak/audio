<script setup lang="ts">
import { RouterView } from 'vue-router'

import { ConfigProvider } from 'ant-design-vue'

import { config } from './theme'
</script>

<template>
  <ConfigProvider :theme="config.theme">
    <RouterView />
  </ConfigProvider>
</template>
