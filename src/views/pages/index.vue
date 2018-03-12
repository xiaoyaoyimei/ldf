<template>
	<div class="banner">
		<h4 class="animate">
			<span class="a1">家装看我的</span>
			<span class="a2">禄东丰</span></h4>
		<a href="#"></a>
	</div>
		<!--<div id="pagepiling">
	    <div class="section" id="section1">
	    	<h1>No anchors (#)</h1>
			<p>Same URL all the time</p>
			<br />
	    </div>
	    <div class="section" id="section2">
	    	<div class="intro">
	    		<h1>Simple</h1>
				<p>Sections won't contain anchor links. It's more simple to configure but a bit more restrictive.</p>
	    	</div>
	    </div>
	    <div class="section" id="section4">
	    	<div class="intro">
	    		<h1>URL without /#</h1>
				<p>But back button won't work!</p>
	    	</div>
	    </div>
	</div>-->
</template>

<script>
/*	import pagepiling from '@/static/js/jquery.pagepiling.min.js'
	var $ = require('jquery')
export default { 
	mounted(){
	   	$('#pagepiling').pagepiling({
			    sectionsColor: ['#bfda00', '#2ebe21', '#2C3E50', '#51bec4'],
			    navigation: {
			    	'position': 'right',
			   		'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Pgae 4']
			   	}
			});
	}
}*/
</script>

<style scoped="scoped" > 
	.banner{
	overflow: hidden;
	height: 95vh;
	position: relative;
}
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
left:45%;
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
left:45%;
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
        }
    
}
	.banner a{
		display: block;
			height: 100%;
			position: relative;
			width:100%;
			background: url(../../../static/img/2.jpg) center center no-repeat;
	}
</style>