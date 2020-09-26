// 首页组件
<template>
  <div id="Home">
    <!-- 标题 -->
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>
    <!-- 轮播图 -->
    <HomeSwiper :banners="banners"></HomeSwiper>
    <!-- 推荐 -->
    <RecommendView :recommends="recommends"></RecommendView>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";

import { getHomeMultidata } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
  },
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
