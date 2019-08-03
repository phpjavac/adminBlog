<template lang="pug">
div
    div 新建文章
    el-form(ref="form")
        el-form-item(label="文章标题")
            el-input(v-model="article.title",placeholder="TITLE")
        el-form-item(label="文章标签")
            el-select(v-model="article.tag",placeholder="TAG",multiple)
<<<<<<< HEAD
                el-option(v-for='item in tagList',:value="item.name",:label="item.name",:key="item._id")
=======
                el-option(v-for='item in tagList',:value="item._id",:label="item.name",:key="item._id")
>>>>>>> 7186a5a1de4f8218c97e41b805d32481b4522198
        el-form-item(label="文章简介")
            el-input(v-model="article.summary",placeholder="SUMMARY",type="textarea")
        el-form-item(label="")
            quill-editor(:options="establishOption",v-model="article.content")
        el-form-item(label="封面图片")
            el-upload(action="https://httpbin.org/post",drag,:on-success="upLoadSuccess")
                i.el-icon-upload
                div.el-upload__text 将文件拖到此处，或
                    em  点击上传
        el-form-item
            el-button(type="primary",@click="onSubmit") 保存
</template>
<script>
import { quillEditor } from "vue-quill-editor";
import * as Quill from "quill"; // 引入编辑器
const Font = Quill.import("formats/font");
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
Quill.register(Font, true);
export default {
  components: {
    "quill-editor": quillEditor
  },
  data() {
    return {
      // 富文本编辑器配置
      establishOption: {
        placeholder: "请输入内容"
      },
      article: {
        title: "",
        tag: [],
        summary: "",
        content: "",
        imgurl: ""
      },
      tagList: []
    };
  },
  methods: {
    onSubmit() {
      if (
        this.article.title.trim() === "" ||
        this.article.summary.trim() === "" ||
        this.article.content.trim() === "" ||
        this.article.tag.length === 0
      ) {
        return this.$message.error("请填写完整！");
      }
      this.article.code = localStorage.code
      this.$http.createArticle(this.article).then(res=>{
          console.log(res)
      }).catch(error=>{
          console.log(error)
      })
    },
    upLoadSuccess(response, file, fileList) {
      console.log(response, file, fileList);
    },
    updateData(value) {
      console.log(value);
    },
    query() {
      this.$http
        .getTagList()
        .then(res => {
          this.tagList = res.data.list;
        })
        .catch(error => {
          this.$message.error(error.errorText);
        });
    }
  },
  created() {
    this.query();
  }
};
</script>
<style lang="stylus" scoped>
>>>.el-select
  width 100%
  .el-select__tags
    max-width none !important
>>>.ql-editor
  height 400px
</style>
