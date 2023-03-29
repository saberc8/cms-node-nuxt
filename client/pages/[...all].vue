<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main>
    <div>Not found</div>
    <div>
      <button @click="router.back()">
        Back
      </button>
    </div>
  </main>
</template>
