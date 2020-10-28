/* 首页商品切换 */
<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tab-control-item"
      :class="{ active: index === currentIndex }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style lang="less" scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background: #fff;

  .tab-control-item {
    flex: 1;
    span {
      padding: 3px;
    }
  }

  .active {
    color: var(--color-high-text);
    span {
      border-bottom: 3px solid var(--color-tint);
    }
  }
}
</style>
