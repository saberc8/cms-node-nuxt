<template>
  <div>
    <InputEntry />
    {{ data }}
  </div>
</template>

<script setup lang="ts">
const data = await $fetch('/api/api/user/login', {
  method: 'POST',
  body: JSON.stringify({
    username: 'admin',
    password: '123456',
  }),
})
</script>
