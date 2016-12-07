Ext.define('App.view.skxx.DivideSkxxEditWindow',{
		   extend:'Ext.window.Window',
		  alias:'widget.divideSkxxEditWindow',
		  itemId:'divideSkxxEditWindow',
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
					items:[Ext.create('App.view.skxx.DivdeSkxxEditForm',{
							baseCls: 'my-panel-no-border',
							itemId:'divdeSkxxEditForm'
						}),
						Ext.create('App.view.skxx.DivideSkxxList',{
							itemId:'divideSkxxList',
							margin:'0 10 5 10'
						})
						]
				})
			    	me.callParent(arguments);
		  }
})