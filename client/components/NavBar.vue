<template>
  <div class="navbar">
    <Logo></Logo>
    <div class="content">
      <span v-for="item in columnList" :key="item.id">
        {{ item.name }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { set } from '@vueuse/core'
  import { useColumnList } from '@/api/cms'
  const columnList = ref<ColumnItem[]>([])
  // 获取栏目列表
  const getColumnList = async () => {
    const params = {
      page: 1,
      size: 10,
    }
    const data: any = await useAsyncData('use_ColumnList', () =>
      useColumnList(params),
    )
    set(columnList, data.data.value.list)
  }
  onMounted(() => {
    getColumnList()
  })
</script>

<style lang="scss" scoped>
  /* pc width > 1024px */ // 1024       1280          1366      1440       1680       1920
  .navbar {
    height: 64px;
    line-height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.2s ease 0s, background-color 0.2s ease 0s;
    position: sticky;
    top: 0;
    width: 100%;
    max-width: 100%;
    z-index: 100;
    -webkit-backdrop-filter: saturate(180%) blur(5px);
    backdrop-filter: saturate(180%) blur(5px);
    background-color: #ffffff90;

    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex: 1;
    }
  }

  /* macbook */
  @media screen and (min-width: 1920px) {
    .navbar {
      background-color: #7e859390;
      width: 1920px;
      margin: 0 auto;
    }
  }

  /* macbook */
  @media screen and (max-width > 1920px) {
    .navbar {
      background-color: #7e859390;
    }
  }

  /* macbook */
  @media screen and (max-width: 1920px) {
    .navbar {
      background-color: #0055ff90;
    }
  }

  /* macbook */
  @media screen and (max-width: 1680px) {
    .navbar {
      background-color: #0055ff90;
    }
  }

  /* macbook */
  @media screen and (max-width: 1440px) {
    .navbar {
      background-color: #ffffff90;
    }
  }

  /* ipad pro */
  @media screen and (max-width: 1366px) {
    .navbar {
      background-color: #3b8f7790;
    }
  }

  @media screen and (max-width: 1280px) {
    .navbar {
      background-color: #bd714590;
    }
  }

  /* ipad pro */
  @media screen and (max-width: 1024px) {
    .navbar {
      background-color: #ff00ff90;
    }
  }
  /* ipad */
  @media screen and (max-width: 768px) {
    .navbar {
      background-color: rgba(0, 128, 0, 0.9);
    }
  }
  /* iphone6 7 8 plus */
  @media screen and (max-width: 414px) {
    .navbar {
      background-color: rgba(0, 0, 255, 0.9);
    }
  }
  /* iphoneX */
  @media screen and (max-width: 375px) and (-webkit-device-pixel-ratio: 3) {
    .navbar {
      background-color: #39493890;
    }
  }
  /* iphone6 7 8 */
  @media screen and (max-width: 375px) and (-webkit-device-pixel-ratio: 2) {
    .navbar {
      background-color: #0ff00090;
    }
  }
  /* iphone5 */
  @media screen and (max-width: 320px) {
    .navbar {
      background-color: #0ff00090;
    }
  }
</style>
