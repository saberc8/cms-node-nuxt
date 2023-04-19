<template>
  <div class="robot-account">
    <div>
      切换账号:
      <el-select
        v-model="wxid"
        placeholder="请选择当前机器人"
        @change="changeWxid"
      >
        <el-option
          v-for="item in robotAccountList"
          :key="item.wxid"
          :label="item.name"
          :value="item.wxid"
        ></el-option>
      </el-select>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useAppStoreHook } from '@/store/modules/app'
  import { IRobotAccount } from '@/store/types'
  const useAppStore = useAppStoreHook()
  console.log(useAppStore)
  const wxid = ref(useAppStore.getCurrentRobotAccount.wxid)
  const robotAccountList = computed(() => {
    return useAppStore.getRobotAccount
  })
  const changeWxid = (e: string) => {
    console.log(e)
    const robotAccount = robotAccountList.value.find(
      (item: IRobotAccount) => item.wxid === e,
    )
    if (robotAccount) useAppStore.setCurrentRobotAccount(robotAccount)
  }
</script>
