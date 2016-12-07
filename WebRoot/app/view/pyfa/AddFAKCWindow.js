Ext.define('App.view.pyfa.AddFAKCWindow',{
		   extend:'Ext.window.Window',
		   alias:'widget.addFakcWin',
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
	        	    text: '退出',
	        	    iconCls:'return_16',
	                handler: function () {
	                	var me = this;
	                    me.up('window').close();
	                }
				}]
			}],
	   		itemId:'addFakcWin',
			title:'课程设置',
			iconCls:'add_16',
			width: 765,
			height: 455,
			x:60,
			y:50,
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
			    me.callParent(arguments);
			   var addCourseForm = Ext.create('App.view.pyfa.AddCourseForm',{
								itemId:'addCourseForm',
									baseCls: 'my-panel-no-border'
							})
				me.add(addCourseForm);
		  }
})