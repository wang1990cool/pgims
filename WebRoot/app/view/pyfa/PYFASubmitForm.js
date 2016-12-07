Ext.define('App.view.pyfa.PYFASubmitForm',{
	extend:'Ext.tab.Panel',
	alias : 'widget.pyfaSubmitForm',
	bodyPadding:0,
	itemId: 'pyfaSubmitForm',
	layout:'fit',
	items:[{
		title: '培养方案',
		itemId:'pyfaDetailTab'
	},{
		title: '方案课程',
		itemId:'fakcListTab',
		listeners:{
			beforeshow:function(obj){
				var me = this;
			    var pyfaSubmitForm = me.up('#pyfaSubmitForm');
				var detailForm = pyfaSubmitForm.down('#pyfaDetail');
				var pyfahValue = detailForm.down('#pyfah').getValue();
				var searchParams = {
						start : 0,
						page : 1,
						searchMode : 'simple',
						order : '',
						search : {}
				};
	        	var pGrid = me.down('#addCourseForm').down('#fakcList');
	        	pGrid.down('#add').setVisible(false);
	        	pGrid.down('#edit').setVisible(false);
	        	pGrid.down('#delete').setVisible(false);
	        	
				searchParams.search['pyfah'] = "= '" + pyfahValue + "'";
	        	var store = pGrid.getStore();
	        	var proxy =  store.getProxy();
	        	proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
	        	store.load();
			}
		}
 },{
 	title: '附件上传',
 	itemId:'attachDataTab' ,
 	border:'0 0 0 0',
 	listeners:{
		beforeshow:function(obj){
				var me = this;
	        	 var pyfaSubmitForm = me.up('#pyfaSubmitForm');
				var detailForm = pyfaSubmitForm.down('#pyfaDetail');
				var pyfahValue = detailForm.down('#pyfah').getValue();
				
				var pGrid = me.down('#uploadAttachList');
				pGrid.down('#uploadAttachBtn').setVisible(false);
				pGrid.down('#delAttachBtn').setVisible(false);
				var searchParams = {
						searchMode : 'simple',
						order : '',
						search : {}
				};
	        	
				searchParams.search['billNo'] = "= '" + pyfahValue + "'";
	        	var store = pGrid.getStore(),proxy =  store.getProxy();
	        	proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
	        	store.load();
		}
 	}
 
 }]
})