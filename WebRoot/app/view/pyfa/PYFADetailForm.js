Ext.define('App.view.pyfa.PYFADetailForm',{
	extend:'Ext.tab.Panel',
	alias : 'widget.pyfaDetailForm',
	bodyPadding:0,
	itemId: 'pyfaDetailForm',
	layout:'fit',
	items:[{
		title: '培养方案',
		itemId:'pyfaDetailTab'
	},{
		title: '方案课程',
		itemId:'fakcListTab',
		items:[{
			xtype:'textfield',
			itemId:'pyfah',
			fieldLabel:'培养方案号',
			hidden:true,
			width:220
		}
		],
		listeners:{
			beforeshow:function(obj){
				var me = this;
			    var pyfaDetailForm = me.up('#pyfaDetailForm');
				var detailForm = pyfaDetailForm.down('#pyfaDetail');
				var pyfahValue = detailForm.down('#pyfah').getValue();
		
//				var courseForms = Ext.ComponentQuery.query('#addCourseForm');
//				if(courseForms.length > 0) {
//	        		var form = courseForms[0];
//	        		form.setBorder('0 0 0 0')
//	        		me.add(form);
//	        	}else{
//	        		var form = Ext.create('App.view.pyfa.AddCourseForm',{
//							itemId:'addCourseForm',
//							baseCls:'my-panel-no-border'
//					})
//					me.add(form);
//	        	}
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