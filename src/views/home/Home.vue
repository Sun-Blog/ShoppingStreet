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
    <!-- 本周流行 -->
    <FetureView></FetureView>
    <!-- 商品列表切换 -->
    <TabControl
      class="tab-control"
      :titles="['流行', '新款', '精选']"
    ></TabControl>

    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FetureView from "./childComps/FetureView";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,

    HomeSwiper,
    RecommendView,
    FetureView,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        news: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
    };
  },
  created() {
    // 请求多个数据
    getHomeMultidata().then((res) => {
      // console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
    // 请求商品数据
    getHomeGoods("pop", 1).then((res) => {
      console.log(res);
    });
  },
};
</script>

<style lang='less' scoped>
#Home {
  padding: 44px 0;
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
  .tab-control {
    position: sticky;
    top: 44px;
  }
}
</style>
