Ext.define('App.view.pyfa.EditPYFAWindow',{
		   extend:'Ext.window.Window',
		   alias:'widget.editPyfaWin',
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
				},
				'-',{
					itemId:'OKBtn',
					text:'提交',
					tooltip:'提交',
					iconCls:'ok_16',
					action:'ok'
				},
				'-',{
	        	    text: '退出',
	        	    iconCls:'return_16',
	                handler: function () {
	                	var me = this;
	                    me.up('window').close();
	                }
				}]
			}],
	   		itemId:'editPyfaWin',
			title:'修改',
			iconCls:'edit_16',
			width: 765,
			height: 480,
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
					items:[Ext.create('App.view.pyfa.PYFAEditForm',{
							itemId:'pyfaEditForm'
						})]
				})
	 			me.callParent(arguments);
				var pyfaForm = Ext.create('App.view.pyfa.PYFAForm',{
							itemId:'pyfaForm',
							baseCls: 'my-panel-no-border'
				})
				
				var addCourseForm = Ext.create('App.view.pyfa.AddCourseForm',{
							itemId:'addCourseForm',
							baseCls:'my-panel-no-border'
					})
				
				var uploadPanel =Ext.create('App.view.attachData.UploadPanel',{
						itemId:'uploadPanel',
						baseCls:'my-panel-no-border'
				})
				
			 	   me.down('#pyfaFormTab').add(pyfaForm);
			 	   me.down('#fakcListTab').add(addCourseForm);
			       me.down('#attachDataTab').add(uploadPanel);
		  }
})