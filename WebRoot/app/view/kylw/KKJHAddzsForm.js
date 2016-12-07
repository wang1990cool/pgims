	Ext.define('App.view.kylw.KKJHAddzsForm',{
		extend:'Ext.tab.Panel',
		bodyPadding:0,
		border:'0 0 0 0',
		itemId: 'kkjhAddzsForm',
		layout:'fit',
		items:[{
			title:'审核信息',
			itemId:'arrangeTecshzsFormTab',
			border:'0 0 0 0'
		},{
			title: '科研信息',
			itemId:'arrangeTecshkyzsFormTab'
//			disabled:true
	 	},{
			title: '学生信息',
			itemId:'arrangeTecjbFormTab'
//			disabled:true
	 	}]
})