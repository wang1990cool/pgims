	Ext.define('App.view.kyjl.KKJHAddJLzsForm',{
		extend:'Ext.tab.Panel',
		bodyPadding:0,
		border:'0 0 0 0',
		itemId: 'kkjhAddJLzsForm',
		layout:'fit',
		items:[{
			title:'审核信息',
			itemId:'arrangeTecshzsFormTab',
			border:'0 0 0 0'
		},{
			title: '科研信息',
			itemId:'arrangeTecshjlzsFormTab'
//			disabled:true
	 	},{
			title: '学生信息',
			itemId:'arrangeTecjbFormTab'
//			disabled:true
	 	}]
})