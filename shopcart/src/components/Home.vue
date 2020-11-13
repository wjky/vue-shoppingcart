<template>
  <div>
      <h2>这是首页</h2>
      <h2>这个是总价：{{gongji}}</h2>
  </div>
</template>

<script>
export default {
 computed: {
   gongji() {
      return this.$store.getters.filterCount
    },
 },
}
</script>

<style>

</style>