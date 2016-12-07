Ext.define('App.view.kyzz.ArrangeTeczzWindow',{
		   extend:'Ext.window.Window',
//		  alias:'widget.arrangeTecWindow',
		  itemId:'arrangeTecWindowjlbzz',
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
					items:[Ext.create('App.view.kyzz.KKJHAddForm',{
							itemId:'kkjhAddForm'
						})
						]
				})
			   me.callParent(arguments);
			    var arrangeTecshForm = Ext.create('App.view.kyzz.ArrangeTecshForm',{
							baseCls: 'my-panel-no-border',
							itemId:'arrangeTecshForm'
							})
				var arrangeTecshzzForm = Ext.create('App.view.kyzz.ArrangeTecshzzForm',{
							baseCls: 'my-panel-no-border',
							itemId:'arrangeTecshzzForm'
							})
				var arrangeTecjbForm = Ext.create('App.view.kyzz.ArrangeTecjbForm',{
						baseCls: 'my-panel-no-border',
						itemId:'arrangeTecjbForm'
						})
				me.down('#arrangeTecshFormTab').add(arrangeTecshForm);
				me.down('#arrangeTecshzzFormTab').add(arrangeTecshzzForm);
				me.down('#arrangeTecjbFormTab').add(arrangeTecjbForm);
		  }
})