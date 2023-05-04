<script setup lang="ts">
  import { appName } from '~/constants'
  useHead({
    title: appName,
  })
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
  html,
  body,
  #__nuxt {
    margin: 0;
    padding: 0;
  }
</style>
