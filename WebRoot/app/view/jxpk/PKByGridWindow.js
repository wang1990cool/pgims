Ext.define('App.view.jxpk.PKByGridWindow',{
		   extend:'Ext.window.Window',
		  alias:'widget.pkByGridWindow',
		  itemId:'pkByGridWindow',
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
			width: 895,
			height: 595,
			constrainHeader:true,
			closeAction:'hide',
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
					items:[Ext.create('App.view.jxpk.PKByGridPanel',{
							baseCls: 'my-panel-no-border',
							itemId:'pkPanel'
						})]
				})
			   me.callParent(arguments);
		  }
})