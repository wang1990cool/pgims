Ext.define('App.view.jxpk.PKWindow',{
		   extend:'Ext.window.Window',
		   alias: 'widget.pkWindow',
		  itemId:'pkWindow',
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
			title:'排课',
			iconCls:'add_16',
			width: 595,
			height: 580,
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
					items:[Ext.create('App.view.jxpk.PKForm',{
							baseCls: 'my-panel-no-border',
							itemId:'pkForm'
						})]
				})
			   me.callParent(arguments);
		  }
})