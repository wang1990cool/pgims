Ext.define('App.view.tbk.TBKEditWindow',{
		  extend:'Ext.window.Window',
		  itemId:'tbkEditWindow',
		  alias: 'widget.tbkEditWindow',
     	   dockedItems:[{
				xtype:'toolbar',
				itemId: 'toolbar',
				dock:'top',
				margin:'0 0 0 0',
				items:[{
	        	    text: '保存',
	        	    itemId:'saveBtn',
	        	    iconCls:'save_16',
	        	    action:'save'
				},			 
				{
	        	    text: '退出',
	        	    iconCls:'return_16',
	                handler: function () {
	                	var me = this;
	                    me.up('window').close();
	                }
				}]
			}],
			title:'修改',
			iconCls:'edit_16',
			width: 595,
			height: 490,
			constrainHeader:true,
			closeAction:'destroy',
			resizable:false,
			shadow:true,
			modal:true,
			closable:true,
			animCollapse:true,
			autoScroll:true,
			autoShow:true,
			bodyStyle:{
				background: '#fff'
			},

			initComponent:function(){
				var me = this;
				Ext.applyIf(me,{
					items:[Ext.create('App.view.tbk.TBKEditForm',{
							baseCls: 'my-panel-no-border',
							itemId:'tbkEditForm'
						})
						]
				})
			   me.callParent(arguments);
		  }
})