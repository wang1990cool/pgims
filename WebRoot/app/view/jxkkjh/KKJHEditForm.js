	Ext.define('App.view.jxkkjh.KKJHEditForm',{
		extend:'Ext.tab.Panel',
		bodyPadding:0,
		border:'0 0 0 0',
		itemId: 'kkjhEditForm',
		layout:'fit',
		items:[{
			title:'开课计划',
			itemId:'kkjhFormTab',
			border:'0 0 0 0'
		},{
			title: '开课计划课程',
			itemId:'kkjhmxListTab',
			listeners:{
				render:function(obj){
					var me = this;
//					var kkjhmxForms = Ext.ComponentQuery.query('#addKkjhmxForm');
//					if(kkjhmxForms.length > 0) {
//		        		var form = kkjhmxForms[0];
//		        		form.setBorder('0 0 0 0')
//		        		me.add(form);
//		        	}else{
//		        		var form = Ext.create('App.view.jxkkjh.AddKkjhmxForm',{
//								itemId:'addKkjhmxForm',
//								baseCls:'my-panel-no-border'
//						})
//						me.add(form);
//		        	}
		        	var searchParams = {
								start : 0,
								page : 1,
								searchMode : 'simple',
								order : '',
								search : {}
						};
			        	var pGrid = me.down('#kkjhmxList');
			        	pGrid.isDetail = false;
			        	pGrid.down('#addKc').setVisible(true);
			        	pGrid.down('#importKc').setVisible(true);
			        	pGrid.down('#addOutKc').setVisible(true);
			        	pGrid.down('#edit').setVisible(true);
			        	pGrid.down('#delete').setVisible(true);

						var editForm = me.up('#kkjhEditForm');
						var kkjhForm = editForm.down('#kkjhForm');
						var kkjhhValue = kkjhForm.down('#kkjhh').getValue();
						
						searchParams.search['kkjhh'] = "= '" + kkjhhValue + "'";
			        	var store = pGrid.getStore();
			        	var proxy =  store.getProxy();
			        	proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
			        	store.load();
				}
			}
	 	}]
})