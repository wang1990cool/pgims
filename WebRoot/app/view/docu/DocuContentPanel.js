Ext.define('App.view.docu.DocuContentPanel',{
	extend: 'Ext.panel.Panel',
	alias: 'widget.docuContentPanel',
	
	region: 'center',
	border: false,
	split: true,
	layout: 'anchor',
	
	initComponent: function(){
		var me = this;
		
		Ext.applyIf(me,{
				items:[
					Ext.create('App.view.main.NavBar',{
						itemId: 'docuNav',
						labelText: '文件管理',
						imgCls: 'book'
					}),
					
					Ext.create('App.view.docu.DocuSearchForm',{
						itemId: 'searchForm',
						hidden:true
					}),
					
					Ext.create('App.view.docu.DocuList',{
						itemId: 'docuList',
						layout: 'auto'
					})
				
			 ]
		});
		
		me.callParent(arguments);
	}
});