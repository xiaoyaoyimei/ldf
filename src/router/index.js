let routes =  [
        {
			path: '/',
			name:'首页',
		    iconCls: 'el-icon-location',//图标样式class\n
			component: resolve => require(['@/container/Full.vue'], resolve),
			children: [
				{
					name:'首页',
					path: '/index',
					component:resolve => require(['@/views/pages/index.vue'], resolve)
				},{
					name:'中国风',
					path: '/zgf',
					component:resolve => require(['@/views/pages/zgf.vue'], resolve)
				}
				]
		}
  ]
export default routes;
