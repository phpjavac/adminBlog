<template lang="pug">
div
    div 文章列表
    div
        el-table(:data="ArticleData")
            el-table-column(type="selection")
            el-table-column(v-for="item in table",:label="item.name",:prop="item.value")
            el-table-column(label="操作")
                template(slot-scope="scope")
                    el-button(type="text")   预览
                    el-button(type="text")   编辑
        el-pagination(:total="page.total",:page-size="pageData.pageSize",layout="prev, pager, next",@next-click="pageChange",@prev-click="pageChange")
</template>
<script>
export default {
  data() {
    return {
      page: { total: 0 },
      table: [
        { name: "时间", value: "time" },
        { name: "作者", value: "code" },
        { name: "状态", value: "state" },
        { name: "标题", value: "title" }
      ],
      pageData: {
        page: 1,
        pageSize: 20
      },
      ArticleData: []
    };
  },
  methods: {
    pageChange(value) {
      this.pageData.page = value;
      this.query();
    },

    date(date) {
      const now = new Date(date);
      const yy = now.getFullYear(); //年
      const mm = now.getMonth() + 1; //月
      const dd = now.getDate(); //日
      const hh = now.getHours(); //时
      const ii = now.getMinutes(); //分
      const ss = now.getSeconds(); //秒
      let clock = yy + "-";
      if (mm < 10) clock += "0";
      clock += mm + "-";
      if (dd < 10) clock += "0";
      clock += dd + " ";
      if (hh < 10) clock += "0";
      clock += hh + ":";
      if (ii < 10) clock += "0";
      clock += ii + ":";
      if (ss < 10) clock += "0";
      clock += ss;
      return clock;
    },
    query() {
      this.$http.getArticleList(this.pageData).then(res => {
        console.log(res);
        this.page = res.data;
        this.ArticleData = res.data.data.list.map(item => {
          item.time = this.date(+item.time);
          item.state = item.state ? "正常" : "隐藏";
          return item;
        });
      });
    }
  },
  created() {
    this.query();
  }
};
</script>
