<template>
  <el-container class="layout-container">
    <el-aside :width="width" class="layout-aside">
      <LayoutSider></LayoutSider>
    </el-aside>
    <el-container>
      <el-header class="layout-header">
        <LayoutHeader></LayoutHeader>
      </el-header>
      <el-main>
        <LayoutContent></LayoutContent>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
  import LayoutSider from './components/Sider/index.vue'
  import LayoutHeader from './components/Header/index.vue'
  import LayoutContent from './components/Content/index.vue'
  import { siderWidth } from '@/constants'
  import { useAppStoreHook } from '@/store/modules/app'
  const useAppStore = useAppStoreHook()
  const collapse = computed(() => useAppStore.getCollapse)
  const width = computed(() => (collapse.value ? '64px' : siderWidth))
</script>

<style lang="scss" scoped>
  .layout-container {
    height: 100vh;
    background-color: #fff;
    .layout-aside {
      // 往右投影
      box-shadow: 2px 0 4px rgba(0, 21, 41, 0.08);
      // 滚动条样式
      ::-webkit-scrollbar {
        height: 2px;
        width: 2px;
      }
    }
    .layout-header {
      box-shadow: 0 2px 4px rgba(0, 21, 41, 0.08);
    }
  }
</style>
