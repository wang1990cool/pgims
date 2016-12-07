	Ext.define('App.view.search.KKJHDetailForm',{
		extend:'Ext.tab.Panel',
		bodyPadding:0,
		border:'0 0 0 0',
		itemId: 'kkjhDetailForm',
		layout:'fit',
		items:[{
			title:'开课计划',
			itemId:'kkjhDetailTab',
			border:'0 0 0 0'
		},{
			title: '开课计划课程',
			itemId:'kkjhmxListTab',
			listeners:{
				beforeshow:function(obj){
					var me = this;
					var detailForm = me.up('#kkjhDetailForm');
					var detailForm = detailForm.down('#kkjhDetail');
					var kkjhhValue = detailForm.down('#kkjhh').getValue();
					
					var searchParams = {
							start : 0,
							page : 1,
							searchMode : 'simple',
							order : '',
							search : {}
					};
					
		        	var pGrid = me.down('#kkjhmxList');
					searchParams.search['kkjhh'] = "= '" + kkjhhValue + "'";
		        	var store = pGrid.getStore();
		        	var proxy =  store.getProxy();
		        	proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
		        	store.load();
				}
			}
	 	}]
})