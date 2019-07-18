<template lang="pug">
div
    div index
</template>
<script>
export default {
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
