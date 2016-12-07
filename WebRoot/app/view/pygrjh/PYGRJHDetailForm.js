Ext.define('App.view.pygrjh.PYGRJHDetailForm',{
	extend:'Ext.tab.Panel',
	bodyPadding:0,
	alias : 'widget.pygrjhDetailForm',
	border:'0 0 0 0',
	itemId: 'pygrjhDetailForm',
	id: 'pygrjhDetailForm',
	layout:'fit',
	items:[{
		title:'学生基本信息',
		itemId:'xsjbxxFormTab',
		border:'0 0 0 0',
		items:[Ext.create('App.view.pygrjh.XSJCXXDetail')]
	},{
		title: '个人计划课程',
		itemId:'grjhkcListTab',
//		disabled:true,
		items:[{
			xtype:'textfield',
			itemId:'xh',
			fieldLabel:'学号',
			hidden:true,
			width:220
		},{
			xtype:'textfield',
			itemId:'nj',
			fieldLabel:'年级',
			hidden:true,
			width:220
		},{
			xtype:'textfield',
			itemId:'zydm',
			fieldLabel:'专业代码',
			hidden:true,
			width:220
		}, 
		Ext.create('App.view.pygrjh.PYGRJHKCList',{
						itemId:'grjhkcList',
						title:'',
						store:'PYGRJHKCAllStore',
						maxHeight:330,
						margin:'10 10 10 10',
						dockedItems:[{	
								dock: 'top',
   							    xtype: 'toolbar',
   							    items:[{
   							    	text:'详情',
   							    	itemId:'detail',
   							    	iconCls:'detail_16',
   							    	listeners:{
   							    		click:function(o,e,eOpts){
   							    			var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
   							    				if (recs.length == 0) {
														Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
													} else if (recs.length > 1) {
														Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
													} else if (recs.length == 1) {
														var win = new Ext.Window({
															layout:'fit',
															itemId:'grjhkcDetail',
															autoShow:true,
															title:'课程详情',
															iconCls:'detail_16',
												            width: 755,
											           	    height: 340,
												            closeAction:'hide',
												    		resizable:false,
												    		shadow:true,
												    		modal:true,
												    		constrainHeader:true,
												    		closable:true,
												    		animCollapse:true,
												    		autoShow:true,
										    				items: [Ext.create('App.view.pygrjh.PYGRJHKCDetail')]
													});
														var grjhForm = win.down('form');
											        	grjhForm.loadForm(recs[0]);
											        	grjhForm.setViewForm();
								        	}
										}
   							  	  }
   							    }]}]
				})],
		listeners:{
			beforeshow:function(obj){
				var me = this;
				var searchParams = {
						start : 0,
						page : 1,
						searchMode : 'simple',
						fieldNames : [],
						order : '',
						search : {}
				};
	        	var pGrid = me.down('#grjhkcList');
	        	for (var col in pGrid.exportCols) {
						searchParams.fieldNames.push(col);
				}
				
				var pygrjhDetailForm = me.up('#pygrjhDetailForm');
				var xsJcxxDetail = pygrjhDetailForm.down('#xsJcxxDetail');
				var xhValue = xsJcxxDetail.down('#xh').getValue();
				
				searchParams.search['xh'] = "= '" + xhValue + "'";
	        	var store = pGrid.getStore();
	        	var proxy =  store.getProxy();
	        	proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
	        	store.load();
			}
		}
   }]
})