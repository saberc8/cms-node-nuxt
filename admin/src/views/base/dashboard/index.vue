<template>
  <div class="dashboard">
    <div>当前机器人: {{ currentRobotAccount.name }}</div>
    <div>所属主人: {{ currentRobotAccount.name }}</div>

    <div>
      <div>
        <el-space>
          <el-button>绑定主人</el-button>
        </el-space>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useAppStoreHook } from '@/store/modules/app'
  const useAppStore = useAppStoreHook()
  console.log(useAppStore)
  const currentRobotAccount = computed(() => {
    return useAppStore.getCurrentRobotAccount
  })
</script>
