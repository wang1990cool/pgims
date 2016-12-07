	Ext.define('App.view.kyjl.KKJHAddxqzsForm',{
		extend:'Ext.tab.Panel',
		bodyPadding:0,
		border:'0 0 0 0',
		itemId: 'kkjhAddxqzsForm',
		layout:'fit',
		items:[{
			title:'审核信息',
			itemId:'arrangeTecshxqzsFormTab',
			border:'0 0 0 0'
		},{
			title: '学生信息',
			itemId:'arrangeTecjbFormTab'
//			disabled:true
	 	},{
			title: '科研信息',
			itemId:'arrangeTecshjlFormTab'
//			disabled:true
	 	}]
})