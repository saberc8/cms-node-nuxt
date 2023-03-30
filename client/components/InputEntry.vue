<script setup lang="ts">
const name = ref('')

const router = useRouter()
const go = () => {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <div>
    <input
      id="input"
      v-model="name"
      placeholder="What's your name?"
      @keydown.enter="go"
    >
    <div>
      <button
        :disabled="!name"
        @click="go"
      >
        GO
      </button>
    </div>
  </div>
</template>
