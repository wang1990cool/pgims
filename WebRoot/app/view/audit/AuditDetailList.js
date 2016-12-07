Ext.define('App.view.audit.AuditDetailList', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.auditDetailList',
	
	store: 'AuditDetailStore',
    columnLines: true,
    title: '审批详情',
    autoScroll:true,
//    frame: true,
    loadMask: true,
    viewConfig: { stripeRows: true },
    selModel: {  
        selType:'checkboxmodel'  
    }, 
	
	initComponent: function() {
        var me = this;
        
        var exportCols = {
            userName:'用户名',userCname: '用户姓名', proNo:'项目码',
            auditOpinion:'审批意见',flagCode:'状态码',flowCode:'流程码',auditDate:'审批时间'
        };
        
        Ext.applyIf(me, {
        	exportCols:exportCols,
            columns: [
            	{ text: exportCols['userName'], width: 100, dataIndex: 'userName', sortable: false },
            	{ text: exportCols['userCname'], width: 100, dataIndex: 'userCname', sortable: false },
            	{ text: exportCols['proNo'], width: 180, dataIndex: 'proNo', sortable: false },
            	{ text: exportCols['flagCode'], width: 60, dataIndex: 'flagCode', sortable: false },
            	{ text: exportCols['flowCode'], width: 60, dataIndex: 'flowCode', sortable: false },
            	{ text: exportCols['auditDate'], width: 120, dataIndex: 'auditDate', sortable: false,
            		renderer:function(value){
            			return Ext.Date.format(new Date(value),'Y-m-d');

            	}},
            	{ text: exportCols['auditOpinion'], width: 150, dataIndex: 'auditOpinion', sortable: false ,flex:1}
		    ],
      	        dockedItems: [{
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
													itemId:'auditDetailWin',
													autoShow:true,
													title:'审批记录',
													iconCls:'detail_16',
										            width: 755,
									           	    height: 440,
										            closeAction:'hide',
										    		resizable:false,
										    		shadow:true,
										    		modal:true,
										    		constrainHeader:true,
										    		closable:true,
										    		animCollapse:true,
										    		autoShow:true,
								    				items: [Ext.create('App.view.audit.AuditDetail')]
											});
												var form = win.down('form');	
												form.setViewForm();
									        	form.loadDetailForm(recs[0]);
									        
						        	}
					    		}
					    	}
				
					    },{
  				  	text:'退出',
  					 iconCls:'return_16',
	                handler: function () {
	                	var me = this;
	                    me.up('window').close();
	                }
  				  }]
  				  }
    		]
        });

        me.callParent(arguments);
    }
});
