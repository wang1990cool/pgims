Ext.define('App.view.skxx.SKXXEditWindow',{
		   extend:'Ext.window.Window',
		  alias:'widget.skxxEditWindow',
		  itemId:'skxxEditWindow',
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
			width: 785,
			height: 510,
			constrainHeader:true,
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
					items:[Ext.create('App.view.skxx.SKXXEditForm',{
							baseCls: 'my-panel-no-border',
							itemId:'skxxEditForm'
						})
						]
				})
			    	me.callParent(arguments);
		  }
})