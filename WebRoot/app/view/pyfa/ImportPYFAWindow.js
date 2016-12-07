Ext.define('App.view.pyfa.ImportPYFAWindow',{
		   extend:'Ext.window.Window',
		   alias:'widget.importPyfaWin',
		   itemId:'importPyfaWin',
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
//					disabled:true,
					iconCls:'ok_16',
					action:'ok'
				},
				'-',{
	        	    text: '返回',
	        	    iconCls:'return_16',
	                handler: function () {
	                	var me = this;
	                    me.up('window').close();
	                }
				}]
			}],
			title:'导入',
			iconCls:'add_16',
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
					items:[Ext.create('App.view.pyfa.PYFAImportForm',{
							itemId:'pyfaImportForm'
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