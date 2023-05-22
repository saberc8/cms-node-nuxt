<template>
  <div>
    <BannerIndex :bannerList="bannerList"></BannerIndex>
    <div class="full">1</div>
  </div>
</template>

<script setup lang="ts">
  import { useNewsList, useBannerList } from '@/api/cms'
  const title = '首页'
  const bannerList = ref<BannerItem[]>([])
  const getNewsList = async () => {
    const params = {
      page: 1,
      size: 10,
    }
    const data: any = await useAsyncData('NewsList', () => useNewsList(params))
    console.log(data, 'data new list')
    // set(NewsList, data.data.value.list)
  }

  getNewsList()

  const getBannerList = async () => {
    const params = {
      page: 1,
      size: 10,
    }
    const data: any = await useAsyncData('BannerList', () =>
      useBannerList(params),
    )
    console.log(data, 'data banner list')
    bannerList.value = data.data.value.list.slice(0, 1)
  }
  getBannerList()
  onMounted(() => {})
</script>

<style scoped lang="scss">
  .full {
    height: 2100px;
    background-color: antiquewhite;
  }
</style>
