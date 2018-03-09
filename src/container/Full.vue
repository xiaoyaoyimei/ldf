<template>
	<el-container>
  <el-header><app-header></app-header></el-header>
  <el-main><router-view></router-view></el-main>
  <el-footer><app-footer></app-footer></el-footer>
</el-container>
</template>

<script>
	import AppHeader from '@/components/Header'
	import AppFooter from '@/components/Footer'
	export default {
			data(){
				return {
				}
			},
        components:{
        	AppHeader,
        	AppFooter
        }
       }
</script>

<style>
.el-main{
	padding: 0;
}
</style>