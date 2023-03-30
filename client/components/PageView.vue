<script setup lang="ts">
const { data } = await useFetch('/api/pageview')

const time = useTimeAgo(() => data.value?.startAt || 0)
</script>

<template>
  <div>
    <span>{{ data?.pageview }}</span>
    page views since
    <span>{{ time }}</span>
  </div>
</template>
