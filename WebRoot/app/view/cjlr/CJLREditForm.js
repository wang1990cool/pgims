	Ext.define('App.view.cjlr.CJLREditForm',{
		extend:'Ext.tab.Panel',
		bodyPadding:0,
		border:'0 0 0 0',
		itemId: 'cjlrEditForm',
		layout:'fit',
		items:[{
			title:'课程信息',
			itemId:'kcxxFormTab',
			border:'0 0 0 0'
		},{
			title: '成绩录入',
			itemId:'cjmxListTab'
//			listeners:{
//				beforeshow:function(obj){
//						var me = this;
//						var cjlrEditForm = me.up('#cjlrEditForm');
//						var kcxxForm = cjlrEditForm.down('#kcxxForm');
//						var kkkhValue = kcxxForm.down('#kkkh').getValue();
//						var searchParams = {
//								start : 0,
//								page : 1,
//								searchMode : 'simple',
//								order : '',
//								search : {}
//						};
//						var pGrid = me.down('#addCjmxForm').down('#cjmxList');
//						var store = pGrid.getStore();
//						if(kkkhValue.length > 0){
//							searchParams.search['kkkh'] = "= '" + kkkhValue + "'";
//					        	if(store.getCount() > 0) {
//					        		var record = store.getAt(0);
//					        		if(kkkhValue != record.get('kkkh')){
//					        			var proxy =  store.getProxy();
//					        			proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
//					        			store.load();
//					        		}
//					        	}else{
//					        		var proxy =  store.getProxy();
//					        		proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
//					        		store.load();
//					        	}
//							}else{
//								store.removeAll()
//							}
//					}
//				}
	 	}]
})