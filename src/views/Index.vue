<template lang="pug">
el-container
  el-header
    el-menu(:default-active="activeIndex",mode="horizontal",:router='true')
      el-menu-item(index="index") 总览
      el-submenu(index="2")
        template(slot="title")  文章管理
        el-menu-item(index="article") 文章
        el-menu-item(index="tag") 标签
      el-menu-item(index="3") 系统管理
    el-main.main
      router-view
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "index"
    };
  },
  methods: {},
  created() {}
};
</script>
<style lang="stylus" scoped>
.main
  text-align left
  width 1366px
  display inline-block
</style>
