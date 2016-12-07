Ext.define('App.view.audit.AuditFlowDetailForm',{
	extend:'Ext.tab.Panel',
	alias : 'widget.auditFlowDetailForm',
	bodyPadding:0,
	border:'0 0 0 0',
	itemId: 'auditFlowDetailForm',
	layout:'fit',
	items:[{
		title: '流程',
		itemId:'auditFlowFormTab',
		border:'0 0 0 0'
	},{
		title: '流程线',
		itemId:'auditFlowLinkListTab',
		items:[ 
			Ext.create('App.view.audit.AuditFlowLinkList',{
        	            		itemId:'auditFlowLinkList',
        	            		title:'',
	        	        		store: 'AuditFlowLinkStore',
      	        				height:360,
      	        				margin:'5 10 10 10',
      	        				dockedItems:[{
	        	            		dock: 'top',
	   							    xtype: 'toolbar',
	   							    items:[{
	   							    	text:'详情',
	   							    	itemId:'detail',
	   							    	iconCls:'detail_16',
	   							    	action:'detail',
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
																itemId:'auditFlowDetailWin',
																autoShow:true,
																title:'流程详情',
																iconCls:'detail_16',
													     		width:960,
																height:400,
													            closeAction:'hide',
													    		resizable:false,
													    		shadow:true,
													    		modal:true,
													    		constrainHeader:true,
													    		closable:true,
													    		animCollapse:true,
													    		autoShow:true,
											    				items: [Ext.create('App.view.audit.AuditFlowLinkForm')]
														});
														var form = win.down('form');
											        	form.loadViewForm(recs[0])
									        	}
											}
	   							    	}
	   							    }]
   								}]
	       	 })],
		listeners:{
			beforeshow:function(obj){
				var me = this;
				var searchParams = {
						searchMode : 'simple',
						search : {}
				};
				var auditFlowForm = me.up('#auditFlowDetailForm').down('#auditFlowForm');
	        	var pGrid = me.up('#auditFlowDetailForm').down('#auditFlowLinkList');
	        	
				searchParams.search['flowCode'] = "= '" + auditFlowForm.down('#flowCode').getValue() + "'";
	        	var store = pGrid.getStore();
	        	var proxy =  store.getProxy();
	        	proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
	        	store.load();
			}
		}
 }]
})