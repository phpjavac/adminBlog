<template lang="pug">
el-container
  el-header
    el-menu(:default-active="activeIndex",mode="horizontal")
      el-menu-item(index="1") 总览
      el-submenu(index="2")
        template(slot="title")  文章管理
        el-menu-item(index="2-1") 文章列表
        el-menu-item(index="2-2") 新文章
        el-menu-item(index="2-3") 标签
      el-menu-item(index="3") 系统管理
  el-container
    el-aside
      div 左侧
    el-main
      div 中部
</template>
<script>
export default {
  data(){
    return{
      activeIndex:'1'
    }
  },
  methods: {
    query() {
      this.$http.getUser().then((res) => {
        console.log(res);
      });
    },
  },
  created() {
    this.query();
  },

};
</script>
