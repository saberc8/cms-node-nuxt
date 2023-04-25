<template>
  <div class="header">
    <div>
      <el-icon v-show="collapse" @click="changeCollapse"><Expand /></el-icon>
      <el-icon v-show="collapse" @click="changeCollapse"><Fold /></el-icon>
    </div>
    <div class="right">
      <el-space>
        <el-dropdown>
          <span class="el-dropdown-link"> <Avatar></Avatar></span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-space>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Avatar from './components/Avatar.vue'
  import { Expand, Fold } from '@element-plus/icons-vue'
  import { removeToken } from '@/utils/auth'
  import { useAppStoreHook } from '@/store/modules/app'
  const useAppStore = useAppStoreHook()
  const collapse = computed(() => useAppStore.getCollapse)
  const router = useRouter()
  const logout = () => {
    console.log('logout')
    removeToken()
    router.push('/login')
  }
  const changeCollapse = () => {
    useAppStore.setCollapse(!collapse.value)
  }
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    .right {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
    }
  }
</style>
