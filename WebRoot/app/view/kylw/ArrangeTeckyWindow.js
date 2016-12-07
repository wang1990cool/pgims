Ext.define('App.view.kylw.ArrangeTeckyWindow',{
		   extend:'Ext.window.Window',
//		  alias:'widget.arrangeTecWindow',
		  itemId:'arrangeTecWindowjlb',
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
					items:[Ext.create('App.view.kylw.KKJHAddForm',{
							itemId:'kkjhAddForm'
						})
						]
				})
			   me.callParent(arguments);
			    var arrangeTecshForm = Ext.create('App.view.kylw.ArrangeTecshForm',{
							baseCls: 'my-panel-no-border',
							itemId:'arrangeTecshForm'
							})
				var arrangeTecshkyForm = Ext.create('App.view.kylw.ArrangeTecshkyForm',{
							baseCls: 'my-panel-no-border',
							itemId:'arrangeTecshkyForm'
							})
				var arrangeTecjbForm = Ext.create('App.view.kylw.ArrangeTecjbForm',{
						baseCls: 'my-panel-no-border',
						itemId:'arrangeTecjbForm'
						})
				me.down('#arrangeTecshFormTab').add(arrangeTecshForm);
				me.down('#arrangeTecshkyFormTab').add(arrangeTecshkyForm);
				me.down('#arrangeTecjbFormTab').add(arrangeTecjbForm);
		  }
})