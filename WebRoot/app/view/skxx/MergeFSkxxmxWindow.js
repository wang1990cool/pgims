Ext.define('App.view.skxx.MergeSkxxmxWindow',{
		   extend:'Ext.window.Window',
		  alias:'widget.mergeSkxxmxWindow',
		  itemId:'mergeSkxxmxWindow',
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
	   		itemId:'editPyfaWin',
			title:'培养方案',
			iconCls:'detail_16',
			width: 800,
			height: 580,
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
					items:[Ext.create('App.view.skxx.MergeSkxxmxForm',{
							baseCls: 'my-panel-no-border',
							itemId:'mergeSkxxmxForm'
						}),
						Ext.create('App.view.skxx.MergeSkxxmxList',{
							itemId:'mergeSkxxmxList',
							margin:'0 10 5 10'
						})
						]
				})
			    	me.callParent(arguments);
		  }
})