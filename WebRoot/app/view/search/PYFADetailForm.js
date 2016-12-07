Ext.define('App.view.search.PYFADetailForm',{
	extend:'Ext.tab.Panel',
	bodyPadding:0,
	itemId: 'pyfaDetailForm',
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
			    
			    var detailForm = me.up('#pyfaDetailForm');
				var detailForm = detailForm.down('#pyfaDetail');
				var pyfahValue = detailForm.down('#pyfah').getValue();
				var searchParams = {
						start : 0,
						page : 1,
						searchMode : 'simple',
						order : '',
						search : {}
				};
	        	var pGrid = me.down('#pyfaAddFakcForm').down('#pyfaFakcList');
	        	
				searchParams.search['pyfah'] = "= '" + pyfahValue + "'";
	        	var store = pGrid.getStore();
	        	var proxy =  store.getProxy();
	        	proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
	        	store.load();
			}
		}
 },{
 	title: '附件',
 	itemId:'attachDataTab' ,
 	border:'0 0 0 0',
 	listeners:{
		beforeshow:function(obj){
				var me = this;
	        	var pyfaDetailForm = me.up('#pyfaDetailForm');
				var pyfaDetail = pyfaDetailForm.down('#pyfaDetail');
				var pyfahValue = pyfaDetail.down('#pyfah').getValue();//获得培养方案号
				
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