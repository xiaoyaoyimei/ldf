<template>
	<div class="banner">
		<h4 class="animate">
			<span class="a1">家装看我的</span>
			<span class="a2">禄东丰</span></h4>
		<a href="#"></a>
	</div>
		<!--<div>
	  <div class="section section1"></div>
<div class="section section2"></div>
	</div>-->
</template>

<script>
/*	import pagepiling from '@/static/js/jquery.pagepiling.min.js'*/
import '../../../static/js/jquery.fullPage.min.js'
import '../../../static/js/jquery-ui-1.10.3.min.js'
import '../../../static/css/jquery.fullPage.css'
export default { 
	mounted(){
		$.fn.fullpage({
		anchors: ['page1', 'page2'],
		navigation: true
	});
//	   	$('#pagepiling').pagepiling({
//			    sectionsColor: ['#bfda00', '#2ebe21', '#2C3E50', '#51bec4'],
//			    navigation: {
//			    	'position': 'right',
//			   		'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Pgae 4']
//			   	}
//			});
	}
}
</script>

<style scoped="scoped"  lang="scss"> 
/*.section1 { background: url(../../assets/image/1.jpg) 50%;}

.section2 { background: url(../../assets/image/2.jpg) 50%;}*/



.animate span{
	display: block;
}
.animate .a1
{
	    font: 24px "Microsoft Yahei";
    font-weight: 500;
    text-align: center;
    color: #fff;
animation:a1 2s;
-moz-animation:a1 2s; /* Firefox */
-webkit-animation:a1 2s; /* Safari and Chrome */
-o-animation:a1 2s; /* Opera */
position: absolute;
top:100px;
right:0%;
z-index: 1;
animation-fill-mode:forwards;
}
@keyframes a1
{
   0%{
   	opacity: 0;
     }
     50%{
        opacity: 0.5;
     }
     100%{
        	opacity:1;
        	right:20%;
        }
    
}
.animate .a2
{
	    font: 18px "Microsoft Yahei";
    font-weight: 500;
    text-align: center;
    color: #fff;
animation:a2 2.5s;
-moz-animation:a2 2.5s; /* Firefox */
-webkit-animation:a2 2.5s; /* Safari and Chrome */
-o-animation:a2 2.5s; /* Opera */
position: absolute;
top:200px;
right:0%;
z-index: 1;
animation-fill-mode:forwards;
}
@keyframes a2
{
   0%{
   	opacity: 0;
     }
     50%{
        opacity: 0.5;
     }
     100%{
        	opacity:1;
        	right:20%;
        }
    
}
	.banner{
	overflow: hidden;
	height: 95vh;
	position: relative;

	 a{
		display: block;
			height: 100%;
			position: relative;
			width:100%;
			background: url(../../assets/image/2.jpg) center center no-repeat;
	}
	}
</style>