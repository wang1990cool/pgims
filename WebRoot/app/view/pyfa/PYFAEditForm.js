Ext.define('App.view.pyfa.PYFAEditForm',{
	extend:'Ext.tab.Panel',
//	alias : 'widget.pyfaEditForm',
	border:'0 0 0 0',
	itemId: 'pyfaEditForm',
	id: 'pyfaEditForm',
	items:[{
		title: '培养方案',
		itemId:'pyfaFormTab'
	},{
		title: '方案课程',
		itemId:'fakcListTab',
		border:'0 0 0 0',
		listeners:{
			render:function(obj){
				var me = this;
				var editForm = me.up('#pyfaEditForm');
				var pyfaForm = editForm.down('#pyfaForm');
				var pyfaValue = pyfaForm.down('#pyfah').getValue();//获得培养方案号
				var searchParams = {
						start : 0,
						searchMode : 'simple',
						order : '',
						search : {}
				};
	        	var pGrid = me.down('#addCourseForm').down('#fakcList');
        	   	pGrid.down('#add').setVisible(true);
		        pGrid.down('#edit').setVisible(true);
		        pGrid.down('#delete').setVisible(true);
				searchParams.search['pyfah'] = "= '" + pyfaValue + "'";
	        	var store = pGrid.getStore();
	        	var proxy =  store.getProxy();
	        	proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
	        	store.load();
			}
		}
 }
 ,{
 	title: '附件',
 	itemId:'attachDataTab' ,
 	border:'0 0 0 0',
 	listeners:{
		render:function(obj){
				var me = this;
				
//				var uploadPanels = Ext.ComponentQuery.query('#uploadPanel');
//				if(uploadPanels.length > 0) {
//	        		var form = uploadPanels[0];
//	        		form.setBorder('0 0 0 0')
//	        		me.add(form);
//	        	}else{
//	        		var form = Ext.create('App.view.attachData.UploadPanel',{
//							itemId:'uploadPanel',
//							baseCls:'my-panel-no-border'
//					})
//					me.add(form);
//	        	}
				
	        	var editForm = me.up('#pyfaEditForm');
				var pyfaForm = editForm.down('#pyfaForm');
				var pyfaValue = pyfaForm.down('#pyfah').getValue();//获得培养方案号
				var searchParams = {
						searchMode : 'simple',
						order : '',
						search : {}
				};
	        	var pGrid = me.down('#uploadAttachList');
				searchParams.search['billNo'] = "= '" + pyfaValue + "'";
	        	var store = pGrid.getStore(),proxy =  store.getProxy();
	        	proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
	        	store.load();
		}
 	}
 }
 ]
})