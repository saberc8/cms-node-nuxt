<script setup lang="ts">
  const { count, inc, dec } = useCount()
</script>

<template>
  <div>
    <button @click="dec()">dec</button>
    <div>
      {{ count }}
    </div>
    <button @click="inc()">inc</button>
  </div>
</template>
