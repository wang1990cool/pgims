Ext.define('App.view.kyjl.ArrangeTecjlxqWindow',{
		   extend:'Ext.window.Window',
//		  alias:'widget.arrangeTecWindow',
		  itemId:'arrangeTecWindowjlbbbb',
     	   dockedItems:[{
				xtype:'toolbar',
				itemId: 'toolbar',
				dock:'top',
				margin:'0 0 0 0',
				items:[		 
				{
	        	    text: '退出',
	        	    iconCls:'return_16',
	                handler: function () {
	                	var me = this;
	                    me.up('window').close();
	                }
				}]
			}],
			title:'详情',
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
					items:[Ext.create('App.view.kyjl.KKJHAddJLxqForm',{
							itemId:'kkjhAddJLxqForm'
						})
						]
				})
			   me.callParent(arguments);
			    var arrangeTecshxqForm = Ext.create('App.view.kyjl.ArrangeTecshxqForm',{
							baseCls: 'my-panel-no-border',
							itemId:'arrangeTecshxqForm'
							})
				var arrangeTecshjlForm = Ext.create('App.view.kyjl.ArrangeTecshjlForm',{
							baseCls: 'my-panel-no-border',
							itemId:'arrangeTecshjlForm'
							})
				var arrangeTecjbForm = Ext.create('App.view.kyjl.ArrangeTecjbForm',{
						baseCls: 'my-panel-no-border',
						itemId:'arrangeTecjbForm'
						})
				me.down('#arrangeTecshxqFormTab').add(arrangeTecshxqForm);
				me.down('#arrangeTecshjlFormTab').add(arrangeTecshjlForm);
				me.down('#arrangeTecjbFormTab').add(arrangeTecjbForm);
		  }
})