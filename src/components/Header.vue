<template>
<div class="header">
<el-menu :default-active="$route.path"  router class="el-menu-demo" mode="horizontal" @select="handleSelect" >
  <el-menu-item index="/index">首页</el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的作品</template>
    <el-menu-item index="/zgf">中国风</el-menu-item>
    <el-menu-item index="2-2">小清新</el-menu-item>
    <el-menu-item index="2-3">欧式</el-menu-item>
  </el-submenu>
  <el-menu-item index="3" >视频展示</el-menu-item>
  <el-menu-item index="4">联系我</el-menu-item>
 </el-menu>
</div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '/index'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped="scoped">
	.header{
		display: flex;
		justify-content: center;
	}
</style>