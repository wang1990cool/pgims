	Ext.define('App.view.jxkkjh.KKJHSubmitForm',{
		extend:'Ext.tab.Panel',
		bodyPadding:0,
		border:'0 0 0 0',
		itemId: 'kkjhSubmitForm',
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
					var kkjhSubmitForm = me.up('#kkjhSubmitForm');
					var detailForm = kkjhSubmitForm.down('#kkjhDetail');
					var kkjhhValue = detailForm.down('#kkjhh').getValue();
					
					var searchParams = {
							start : 0,
							page : 1,
							searchMode : 'simple',
							order : '',
							search : {}
					};
					
		        	var pGrid = me.down('#kkjhmxList');
		        	pGrid.down('#addKc').setVisible(false);
		        	pGrid.down('#importKc').setVisible(false);
		        	pGrid.down('#addOutKc').setVisible(false);
		        	pGrid.down('#edit').setVisible(false);
		        	pGrid.down('#delete').setVisible(false);
					searchParams.search['kkjhh'] = "= '" + kkjhhValue + "'";
		        	var store = pGrid.getStore();
		        	var proxy =  store.getProxy();
		        	proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
		        	store.load();
				}
			}
	 	}]
})