Ext.define('App.view.audit.AuditFlowDetailWindow',{
		    extend:'Ext.window.Window',
		    alias:'widget.auditFlowDetailWindow',
	   		itemId:'auditFlowDetailWindow',
			title:'流程详情',
			iconCls:'detail_16',
			width: 800,
			height: 460,
			constrainHeader:true,
			layout:'fit',
			closeAction:'hide',
			resizable:false,
			shadow:true,
			modal:true,
			closable:true,
			animCollapse:true,
			autoShow:true,
			bodyStyle:{
				background: '#fff'
			},
			
			initComponent:function(){
				var me = this;
				Ext.applyIf(me,{
					items:[Ext.create('App.view.audit.AuditFlowDetailForm',{
							itemId:'auditFlowDetailForm'
						})],
					buttons:[{
		        	    text: '退出',
		        	    iconCls:'return_16',
		                handler: function () {
		                	var me = this;
		                    me.up('#auditFlowDetailWindow').close();
		                }
				}]
				}),
			    me.callParent(arguments);
		  }
})