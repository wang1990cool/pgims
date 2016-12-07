Ext.define('App.view.jxkkjh.KKJHEditWindow',{
		   extend:'Ext.window.Window',
		   alias:'widget.kkjhEditWin',
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
				}
				,'-',{
					itemId:'OKBtn',
					text:'提交',
					tooltip:'提交',
//					disabled:true,
					iconCls:'ok_16',
					action:'ok'
				}
				,'-',{
	        	    text: '退出',
	        	    iconCls:'return_16',
	                handler: function () {
	                	var me = this;
	                    me.up('window').close();
	                }
				}]
			}],
	   		itemId:'kkjhAddWin',
			title:'修改',
			iconCls:'edit_16',
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
					items:[Ext.create('App.view.jxkkjh.KKJHEditForm',{
							itemId:'kkjhEditForm'
						})]
				})
			    me.callParent(arguments);
			    var kkjhForm = Ext.create('App.view.jxkkjh.KKJHForm',{
					itemId:'kkjhForm',
			    	baseCls: 'my-panel-no-border'
				})
			
				var addKkjhmxForm = Ext.create('App.view.jxkkjh.AddKkjhmxForm',{
								itemId:'addKkjhmxForm',
								baseCls:'my-panel-no-border'
				})
				
				me.down('#kkjhFormTab').add(kkjhForm);
				me.down('#kkjhmxListTab').add(addKkjhmxForm);
		  }
})