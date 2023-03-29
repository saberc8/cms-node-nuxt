<script setup lang="ts">
const online = useOnline()
</script>

<template>
  <div>
    <Suspense>
      <ClientOnly>
        <PageView v-if="online" />
        <div v-else>
          You're offline
        </div>
      </ClientOnly>
      <template #fallback>
        <div>
          <span>Loading...</span>
        </div>
      </template>
    </Suspense>
    <InputEntry />
  </div>
</template>
