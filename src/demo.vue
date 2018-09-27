<!-- 插件的主要内容就写在src文件夹下面吧 -->
<template>
  <div class="demo">
    插件的主要内容就写在src文件夹下面吧
  </div>
</template>
<script>
  export default {
    name: 'Demo',
    beforeMount() {
      console.log('--beforeMount--')
    },
  }
</script>
<style lang="scss" scoped>
  .demo{
    font-size: 15px;
  }
</style>

