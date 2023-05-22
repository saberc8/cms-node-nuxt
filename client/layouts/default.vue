<template>
  <main>
    <NavBar />
    <slot />
    <div>[Default Layout]</div>
  </main>
</template>

<script lang="ts" setup>
import NavBar from './components/NavBar.vue'
</script>