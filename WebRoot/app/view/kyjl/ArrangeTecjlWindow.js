Ext.define('App.view.kyjl.ArrangeTecjlWindow',{
		   extend:'Ext.window.Window',
//		  alias:'widget.arrangeTecWindow',
		  itemId:'arrangeTecWindowjlbjl',
     	   dockedItems:[{
				xtype:'toolbar',
				itemId: 'toolbar',
				dock:'top',
				margin:'0 0 0 0',
				items:[{
	        	    text: '确定',
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
			title:'审核',
			iconCls:'edit_16',
			width: 790,
			height: 610,
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
					items:[Ext.create('App.view.kyjl.KKJHAddJLForm',{
							itemId:'kkjhAddJLForm'
						})
						]
				})
			   me.callParent(arguments);
			    var arrangeTecshForm = Ext.create('App.view.kyjl.ArrangeTecshForm',{
							baseCls: 'my-panel-no-border',
							itemId:'arrangeTecshForm'
							})
				var arrangeTecshjlForm = Ext.create('App.view.kyjl.ArrangeTecshjlForm',{
							baseCls: 'my-panel-no-border',
							itemId:'arrangeTecshjlForm'
							})
				var arrangeTecjbForm = Ext.create('App.view.kyjl.ArrangeTecjbForm',{
						baseCls: 'my-panel-no-border',
						itemId:'arrangeTecjbForm'
						})
				me.down('#arrangeTecshFormTab').add(arrangeTecshForm);
				me.down('#arrangeTecshjlFormTab').add(arrangeTecshjlForm);
				me.down('#arrangeTecjbFormTab').add(arrangeTecjbForm);
		  }
})