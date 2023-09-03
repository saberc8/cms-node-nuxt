<template>
  <div>
    <main ref="scrollMain" data-scroll-container>
      <!-- 定义滚动的容器-->
      <section class="content">
        <div style="height: 20vh"></div>
        <h1 class="content__title" data-scroll data-scroll-speed="2">
          我是一个视差滚动为2的元素
        </h1>
      </section>
      <section class="tiles tiles--rotated" id="grid2">
        <div class="tiles__wrap">
          <div
            class="tiles__line"
            data-scroll
            data-scroll-speed="1"
            data-scroll-target="#grid2"
            data-scroll-direction="horizontal"
          >
            <div class="tiles__line-img"></div>
            <div class="tiles__line-img"></div>
            <div class="tiles__line-img"></div>
            <div
              class="tiles__line-img"
              style="
                background-image: url(http://127.0.0.1:8080/image/gb-1.jpg);
              "
            ></div>
            <div
              class="tiles__line-img"
              style="
                background-image: url(http://127.0.0.1:8080/image/gb-1.jpg);
              "
            ></div>
            <div
              class="tiles__line-img"
              style="
                background-image: url(http://127.0.0.1:8080/image/gb-1.jpg);
              "
            ></div>
          </div>
          <div
            class="tiles__line"
            data-scroll
            data-scroll-speed="-1"
            data-scroll-target="#grid2"
            data-scroll-direction="horizontal"
          >
            <div class="tiles__line-img"></div>
            <div
              class="tiles__line-img"
              style="
                background-image: url(http://127.0.0.1:8080/image/gb-1.jpg);
              "
            ></div>
            <div
              class="tiles__line-img"
              style="
                background-image: url(http://127.0.0.1:8080/image/gb-1.jpg);
              "
            ></div>
            <div
              class="tiles__line-img"
              style="
                background-image: url(http://127.0.0.1:8080/image/gb-1.jpg);
              "
            ></div>
            <div
              class="tiles__line-img"
              style="
                background-image: url(http://127.0.0.1:8080/image/gb-1.jpg);
              "
            ></div>
            <div
              class="tiles__line-img"
              style="
                background-image: url(http://127.0.0.1:8080/image/gb-1.jpg);
              "
            ></div>
          </div>
          <div
            class="tiles__line"
            data-scroll
            data-scroll-speed="1"
            data-scroll-target="#grid2"
            data-scroll-direction="horizontal"
          >
            <div
              class="tiles__line-img"
              style="
                background-image: url(http://127.0.0.1:8080/image/gb-1.jpg);
              "
            ></div>
            <div
              class="tiles__line-img"
              style="
                background-image: url(http://127.0.0.1:8080/image/gb-1.jpg);
              "
            ></div>
            <div
              class="tiles__line-img"
              style="
                background-image: url(http://127.0.0.1:8080/image/gb-1.jpg);
              "
            ></div>
            <div
              class="tiles__line-img"
              style="
                background-image: url(http://127.0.0.1:8080/image/gb-1.jpg);
              "
            ></div>
            <div
              class="tiles__line-img"
              style="
                background-image: url(http://127.0.0.1:8080/image/gb-1.jpg);
              "
            ></div>
            <div
              class="tiles__line-img"
              style="
                background-image: url(http://127.0.0.1:8080/image/gb-1.jpg);
              "
            ></div>
          </div>
          <div
            class="tiles__line"
            data-scroll
            data-scroll-speed="-1"
            data-scroll-target="#grid2"
            data-scroll-direction="horizontal"
          >
            <div
              class="tiles__line-img"
              style="
                background-image: url(http://127.0.0.1:8080/image/gb-1.jpg);
              "
            ></div>
            <div
              class="tiles__line-img"
              style="
                background-image: url(http://127.0.0.1:8080/image/gb-1.jpg);
              "
            ></div>
            <div
              class="tiles__line-img"
              style="
                background-image: url(http://127.0.0.1:8080/image/gb-1.jpg);
              "
            ></div>
            <div
              class="tiles__line-img"
              style="
                background-image: url(http://127.0.0.1:8080/image/gb-1.jpg);
              "
            ></div>
            <div
              class="tiles__line-img"
              style="
                background-image: url(http://127.0.0.1:8080/image/gb-1.jpg);
              "
            ></div>
            <div class="tiles__line-img"></div>
          </div>
          <div
            class="tiles__line"
            data-scroll
            data-scroll-speed="1"
            data-scroll-target="#grid2"
            data-scroll-direction="horizontal"
          >
            <div class="tiles__line-img"></div>
            <div
              class="tiles__line-img"
              style="
                background-image: url(http://127.0.0.1:8080/image/gb-1.jpg);
              "
            ></div>
            <div
              class="tiles__line-img"
              style="
                background-image: url(http://127.0.0.1:8080/image/gb-1.jpg);
              "
            ></div>
            <div
              class="tiles__line-img"
              style="
                background-image: url(http://127.0.0.1:8080/image/gb-1.jpg);
              "
            ></div>
            <div class="tiles__line-img"></div>
            <div class="tiles__line-img"></div>
          </div>
        </div>
      </section>
      <section class="content content--numbered">
        <p class="content__text" data-scroll data-scroll-speed="2">
          The human world is exploding at the seams. Human creativity and the
          implementation of human inventions and technology is now at an
          accelerated fever pitch like nothing ever before seen in the history
          of the world. Well, where is it leading, and how does one integrate
          this stuff into one’s own life? What does it mean about the experience
          of being human? I have proposed the existence of an invisible,
          permeating <em>Something</em> that is throughout all being, all time,
          all space, all bodies, all thought, which I call <em>Novelty</em>; and
          the interesting thing about novelty is that it’s increasing
          constantly.
        </p>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
  import LocomotiveScroll from 'locomotive-scroll'
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
  const scrollMain = ref(null)
  onMounted(() => {
    console.log(document)
  })
</script>

<style scoped lang="scss">
  .section1 {
    height: 300px;
    background-color: antiquewhite;
  }
  .section2 {
    height: 300px;
    background-color: rgb(235, 219, 255);
  }
  .section3 {
    height: 300px;
    background-color: rgb(215, 250, 215);
  }
  .section4 {
    height: 300px;
    background-color: rgb(215, 234, 250);
  }

  .content {
    padding: 3rem;
    min-height: 90vh;

    .content__title {
      font-size: 8vw;
      line-height: 1.2;
      font-weight: 400;
      max-width: 800px;
    }
  }

  .tiles {
    --tiles-height: 52vw;
    height: var(--tiles-height); // 高度占宽度的52%
    position: relative;
    overflow: hidden;
    .tiles__wrap {
      width: 150%;
      --tileswrap-height: calc(52vw * 1.8);
      height: var(--tileswrap-height); // 高度占宽度的52%
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) rotate(22.5deg);
      .tiles__line {
        display: flex;
        .tiles__line-img {
          --tile-margin: 1vw;
          width: calc(16.6666% - var(--tile-margin) * 2);
          /*6份16.66666 - margin 2 */
          height: calc(var(--tileswrap-height) / 5 - (var(--tile-margin) * 2));
          /* 总高度/5行 -margin*2*/
          flex: none;
          margin: var(--tile-margin);
          background-size: cover;
          background-position: 50% 50%;
        }
      }
    }
  }

  .content__text {
    max-width: 800px;
    width: 50vw;
    min-width: calc(300px - 6rem);
    font-size: clamp(1rem, 4vw, 2.25rem);
  }
</style>
