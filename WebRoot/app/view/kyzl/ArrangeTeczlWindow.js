Ext.define('App.view.kyzl.ArrangeTeczlWindow',{
		   extend:'Ext.window.Window',
//		  alias:'widget.arrangeTecWindow',
		  itemId:'arrangeTecWindowjlbb',
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
					items:[Ext.create('App.view.kyzl.KKJHAddZLForm',{
							itemId:'kkjhAddZLForm'
						})
						]
				})
			   me.callParent(arguments);
			    var arrangeTecshForm = Ext.create('App.view.kyzl.ArrangeTecshForm',{
							baseCls: 'my-panel-no-border',
							itemId:'arrangeTecshForm'
							})
				var arrangeTecshzlForm = Ext.create('App.view.kyzl.ArrangeTecshzlForm',{
							baseCls: 'my-panel-no-border',
							itemId:'arrangeTecshzlForm'
							})
				var arrangeTecjbForm = Ext.create('App.view.kyzl.ArrangeTecjbForm',{
						baseCls: 'my-panel-no-border',
						itemId:'arrangeTecjbForm'
						})
				me.down('#arrangeTecshFormTab').add(arrangeTecshForm);
				me.down('#arrangeTecshzlFormTab').add(arrangeTecshzlForm);
				me.down('#arrangeTecjbFormTab').add(arrangeTecjbForm);
		  }
})