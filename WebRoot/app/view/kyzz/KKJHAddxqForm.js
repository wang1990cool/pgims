	Ext.define('App.view.kyzz.KKJHAddxqForm',{
		extend:'Ext.tab.Panel',
		bodyPadding:0,
		border:'0 0 0 0',
		itemId: 'kkjhAddxqForm',
		layout:'fit',
		items:[{
			title:'审核信息',
			itemId:'arrangeTecshxqFormTab',
			border:'0 0 0 0'
		},{
			title: '学生信息',
			itemId:'arrangeTecjbFormTab'
//			disabled:true
	 	},{
			title: '科研信息',
			itemId:'arrangeTecshzzFormTab'
//			disabled:true
	 	}]
})