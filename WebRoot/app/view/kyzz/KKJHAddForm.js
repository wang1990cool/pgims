	Ext.define('App.view.kyzz.KKJHAddForm',{
		extend:'Ext.tab.Panel',
		bodyPadding:0,
		border:'0 0 0 0',
		itemId: 'kkjhAddForm',
		layout:'fit',
		items:[{
			title:'审核信息',
			itemId:'arrangeTecshFormTab',
			border:'0 0 0 0'
		},{
			title: '科研信息',
			itemId:'arrangeTecshzzFormTab'
//			disabled:true
	 	},{
			title: '学生信息',
			itemId:'arrangeTecjbFormTab'
//			disabled:true
	 	}]
})