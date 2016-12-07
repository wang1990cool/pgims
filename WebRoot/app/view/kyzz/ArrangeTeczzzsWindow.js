Ext.define('App.view.kyzz.ArrangeTeczzzsWindow',{
		   extend:'Ext.window.Window',
//		  alias:'widget.arrangeTecWindow',
		  itemId:'arrangeTecWindowjlbzzzs',
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
					items:[Ext.create('App.view.kyzz.KKJHAddzsForm',{
							itemId:'kkjhAddzsForm'
						})
						]
				})
			   me.callParent(arguments);
			    var arrangeTecshzsForm = Ext.create('App.view.kyzz.ArrangeTecshzsForm',{
							baseCls: 'my-panel-no-border',
							itemId:'arrangeTecshzsForm'
							})
				var arrangeTecshzzzsForm = Ext.create('App.view.kyzz.ArrangeTecshzzzsForm',{
							baseCls: 'my-panel-no-border',
							itemId:'arrangeTecshzzzsForm'
							})
				var arrangeTecjbForm = Ext.create('App.view.kyzz.ArrangeTecjbForm',{
						baseCls: 'my-panel-no-border',
						itemId:'arrangeTecjbForm'
						})
				me.down('#arrangeTecshzsFormTab').add(arrangeTecshzsForm);
				me.down('#arrangeTecshzzzsFormTab').add(arrangeTecshzzzsForm);
				me.down('#arrangeTecjbFormTab').add(arrangeTecjbForm);
		  }
})