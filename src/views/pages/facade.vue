<template>
	<div class="zgf-wrapper">
		<div  class="zgf">
		<h1>找个地吃饭</h1>
		<h5>吃饭这件事我们是认真对待的</h5>
		<img src="../../../static/img/m1.jpg">
		</div>
		<div class="content">
			<p>我们装修的不仅仅是门面，而是你的个人品牌。细节彰显专业
		</br></br>禄东丰</p>
		<div class="wenan">
			<p>作为资深吃货</p>

<p>门店颜值是当今最重要的东西</p>

<p>若门店装修不好看，不吃</p>

<p>哼，谁还没点脾气</p>
			<img src="../../../static/img/m.jpg"><img src="../../../static/img/m3.jpg"></div>
			</div>
		</div>
</template>

<script>
</script>

<style scoped="scoped">
	.zgf-wrapper{
		background: #f0efee;
	}
	.zgf{
		background: #fff;
		    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
	}
	.zgf img{
		display: block;
	}
	.content{
		padding-left:100px;
		padding-right:100px;
	}
	.content> p{
		margin-top:60px;
		margin-bottom:60px;
		padding:40px;
		line-height: 40px;
		border:1px solid #eee;
		background: #fff;
		font-size: 20px;
	}
		.wenan{
			overflow: hidden;
		}
	.wenan p{
		text-align: left;
	}
	.wenan img{
		float: left;
		margin-top:50px;
		display: inline-block;
		width: 45%;
		margin-right: 40px;
		margin-bottom:50px;
	}
</style>