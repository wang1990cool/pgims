Ext.define('App.view.jxkkjh.SubmitKKJHWindow',{
		   extend:'Ext.window.Window',
		   alias:'widget.submitKkjhWin',
		   itemId:'submitKkjhWin',
     	   dockedItems:[{
				xtype:'toolbar',
				itemId: 'toolbar',
				dock:'top',
				margin:'0 0 0 0',
				items:[{
					itemId:'submitBtn',
					text:'审核',
					tooltip:'审核',
					iconCls:'ok_16',
					action:'ok'
				},'-',{
	        	    text: '退出',
	        	    iconCls:'return_16',
	                handler: function () {
	                	var me = this;
	                    me.up('window').close();
	                }
				}]
			}],
			title:'审核',
			iconCls:'ok_16',
			width: 800,
			height: 590,
			constrainHeader:true,
			layout:'auto',
			closeAction:'hide',
			resizable:false,
			shadow:true,
			modal:true,
			closable:true,
			animCollapse:true,
//			autoScroll:true,
			autoShow:true,
			bodyStyle:{
				background: '#fff'
			},

			initComponent:function(){
				var me = this;
				Ext.applyIf(me,{
					items:[Ext.create('App.view.audit.AuditDetailForm',{
							itemId:'auditDetailForm'
						}),	Ext.create('App.view.jxkkjh.KKJHSubmitForm',{
							itemId:'kkjhSubmitForm'
						})]
				})
			   me.callParent(arguments);
			   
			   	var kkjhDetail= Ext.create('App.view.jxkkjh.KKJHDetail',{
			    	itemId:'kkjhDetail',
			    	height:500,
					baseCls: 'my-panel-no-border'
				})
				
					var addKkjhmxForm = Ext.create('App.view.jxkkjh.AddKkjhmxForm',{
						itemId:'addKkjhmxForm',
						baseCls:'my-panel-no-border'
				})
				
				me.down('#kkjhSubmitForm').down('#kkjhDetailTab').add(kkjhDetail);
				me.down('#kkjhSubmitForm').down('#kkjhmxListTab').add(addKkjhmxForm);
		  }
})