<template>
  <div class="layout-sider">
    <div class="logo">
      <img class="logo-img" src="/logo.jpg" alt="" />
      <h3 class="logo-name" v-show="!collapse">{{ appName }}</h3>
    </div>
    <el-menu
      class="layout-menu"
      :collapse="collapse"
      :default-active="defaultActive"
      text-color="#fff"
      background-color="#001529"
    >
      <div v-for="(item, index) in menuList" :key="index">
        <el-sub-menu v-if="item.children" :index="item.path">
          <template #title>
            <el-icon><Cpu /></el-icon>
            <span v-show="!collapse">{{ item.meta.title }}</span>
          </template>
          <el-menu-item
            v-for="(itemChild, indexChild) in item.children"
            :key="indexChild"
          >
            <el-menu-item
              :index="itemChild.path"
              @click="menuClick(itemChild)"
              >{{ itemChild.meta.title }}</el-menu-item
            >
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item v-else @click="menuClick(item)">
          <el-icon><icon-menu /></el-icon>
          <template #title>{{ item.meta.title }}</template>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
  import { Menu as IconMenu, Cpu } from '@element-plus/icons-vue'
  import { appName } from '@/constants'
  import { routerArray } from '@/router'
  import { useAppStoreHook } from '@/store/modules/app'
  const useAppStore = useAppStoreHook()
  const collapse = computed(() => useAppStore.getCollapse)
  const router = useRouter()
  const route = useRoute()
  const defaultActive = ref('/base/dashboard')
  const path = route.path
  console.log(path)
  defaultActive.value = path
  console.log(routerArray)
  const menuList: any = computed(() => {
    return routerArray.filter((item) => item.meta?.hideMenu !== true)
  })
  const menuClick = (e: any) => {
    console.log(e)
    router.push(e.path)
  }
</script>

<style lang="scss" scoped>
  .layout-sider {
    height: 100vh;
    position: relative;
    overflow-y: scroll;
    background-color: #001529;
    color: #fff;
    .logo {
      position: sticky;
      display: flex;
      align-items: center;
      height: 64px;
      z-index: 999;
      top: 0;
      padding: 0 10px;
      background-color: #001529;
      &-img {
        width: 32px;
        height: 32px;
        margin-right: 10px;
      }
    }
    .layout-menu {
      height: calc(100vh - 64px);
      background-color: #001529;
    }
  }
  :deep(.el-menu) {
    border-right: none;
  }
  :deep(.el-menu-item) {
    width: 100%;
  }
</style>
