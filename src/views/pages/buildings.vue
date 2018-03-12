<template>
	<div class="zgf-wrapper">
		<div  class="zgf">
		<h1>玩，我有我态度</h1>
		<h5>我们不是随意的</h5>
		<img src="../../static/img/b.jpg">
		</div>
		<div class="content">
			<p>我们装修的不仅仅是玩的景点，而是你的口牌。细节彰显专业
		</br></br>禄东丰</p>
		<div class="wenan">
			<p>我们以卓越的品质</p>

<p>推出最美的风景</p>

<p>不信，你看，这就是我们为之自豪的手艺</p>

			<img src="../../static/img/b1.jpg"></div>
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