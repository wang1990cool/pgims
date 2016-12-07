Ext.define('App.view.pyfa.PYFAImportForm',{
	extend:'Ext.tab.Panel',
	alias : 'widget.pyfaImportForm',
	border:'0 0 0 0',
	itemId: 'pyfaImportForm',
	layout:'fit',
	items:[{
		title: '培养方案',
		itemId:'pyfaFormTab'
	},{
		title: '方案课程',
		itemId:'fakcListTab'
 },{
 	title: '附件',
 	itemId:'attachDataTab' ,
 	border:'0 0 0 0',
 	disabled:true,
 	listeners:{		
 		render:function(obj){
				var me = this;
	        	var pyfaAddForm = me.up('#pyfaImportForm');
				var pyfaForm = pyfaAddForm.down('#pyfaForm');
				var pyfaValue = pyfaForm.down('#pyfah').getValue();//获得培养方案号
				
				var pGrid = me.down('#uploadAttachList');
				var searchParams = {
						searchMode : 'simple',
						order : '',
						search : {}
				};
	        	
				searchParams.search['billNo'] = "= '" + pyfaValue + "'";
	        	var store = pGrid.getStore(),proxy =  store.getProxy();
	        	proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
	        	store.load();
		}}} ]
})