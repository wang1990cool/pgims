Ext.define('App.view.pygrjh.AddPYGRJHWindow',{
		   extend:'Ext.window.Window',
		   alias:'widget.grjhAddWin',
		   itemId:'grjhAddWin',
     	   dockedItems:[{
				xtype:'toolbar',
				itemId: 'toolbar',
				dock:'top',
				margin:'0 0 0 0',
				items:[{
					itemId:'saveBtn',
					text:'保存',
					tooltip:'保存',
					iconCls:'save_16',
					action:'save'
				},'-',{
					itemId:'OKBtn',
					text:'提交审核',
					tooltip:'提交审核',
					disabled:true,
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
	   		itemId:'grjhAddWin',
			title:'个人计划',
			iconCls:'add_16',
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
//			autoScroll:true,
			autoShow:true,
			bodyStyle:{
				background: '#fff'
			},

			initComponent:function(){
				var me = this;
				Ext.applyIf(me,{
					items:[Ext.create('App.view.pygrjh.PYGRJHAddForm',{
							itemId:'pygrjhAddForm'
						})]
				})
//			    me.down('#xsjbxxFormTab').add(xsjcxxForm);
			    	me.callParent(arguments);
		  }
})