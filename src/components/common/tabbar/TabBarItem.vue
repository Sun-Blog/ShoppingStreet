<template>
  <div class="tabbar-item" :class="{ active: isActive }" @click="itemClick">
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      // 通过判断路径是否相同，决定tabbar的颜色是否改变
      return this.$route.path.indexOf(this.path) !== -1;
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    }
  }
};
</script>

<style scoped>
.tabbar-item {
  /* 实现均等分 */
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tabbar-item .iconfont {
  display: inline-block;
  font-size: 20px;
  margin: 2px 0;
}
.active {
  color: rgb(255, 75, 0);
}
</style>
