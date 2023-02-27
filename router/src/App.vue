<template>
  <router-view />
</template>

<script setup lang="ts">
const url = import.meta.env.VITE_ROUTE_AUTOLOAD
console.log('url: ', url)
</script>

<style lang="scss" scoped></style>
