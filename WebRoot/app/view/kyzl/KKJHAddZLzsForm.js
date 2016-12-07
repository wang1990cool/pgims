	Ext.define('App.view.kyzl.KKJHAddZLzsForm',{
		extend:'Ext.tab.Panel',
		bodyPadding:0,
		border:'0 0 0 0',
		itemId: 'kkjhAddZLzsForm',
		layout:'fit',
		items:[{
			title:'审核信息',
			itemId:'arrangeTecshzsFormTab',
			border:'0 0 0 0'
		},{
			title: '学生信息',
			itemId:'arrangeTecjbFormTab'
//			disabled:true
	 	},{
			title: '科研信息',
			itemId:'arrangeTecshzlzsFormTab'
//			disabled:true
	 	}]
})