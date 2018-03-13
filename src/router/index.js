let routes =  [
        {
			path: '/',
			 redirect: '/index',
		    iconCls: 'el-icon-location',//图标样式class\n
			component: resolve => require(['@/container/Full.vue'], resolve),
			children: [
				{
					name:'首页',
					path: '/index',
					component:resolve => require(['@/views/pages/index.vue'], resolve)
				},{
					name:'中国风',
					path: '/home',
					component:resolve => require(['@/views/pages/home.vue'], resolve)
				},
				{
					name:'门面装修',
					path: '/facade',
					component:resolve => require(['@/views/pages/facade.vue'], resolve)
				},
				{
					name:'古建筑装修',
					path: '/buildings',
					component:resolve => require(['@/views/pages/buildings.vue'], resolve)
				},
				{
					name:'视频展示',
					path: '/video',
					component:resolve => require(['@/views/pages/video.vue'], resolve)
				},{
					name:'联系我们',
					path: '/contact',
					component:resolve => require(['@/views/pages/contact.vue'], resolve)
				}
				]
		}
  ]
export default routes;
