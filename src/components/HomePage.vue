<template>
  <Result
    status="success"
    title="Successfully Purchased Cloud Server ECS!"
    sub-title="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
  >
    <template #extra>
      <Button key="console" type="primary">Go Console</Button>
      <Button key="buy">Buy Again</Button>
    </template>
  </Result>
</template>
<script setup lang="ts">
import { Button, Result } from 'ant-design-vue'
</script>
