<!--
 * @Author: yusenlin
 * @Date: 2023-05-04 11:33:43
 * @LastEditTime: 2023-05-17 18:20:42
 * @LastEditors: yusenlin
 * @Description: 这个是首页banner组件
 * @FilePath: /client/components/BannerIndex.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div>
    <div v-for="(item, index) in bannerList" :key="index">
      <img :src="item.cover_url" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
  export interface BannerProps {
    bannerList: BannerItem[]
  }

  const props = withDefaults(defineProps<BannerProps>(), {
    bannerList: [] as any,
  })
</script>
