Ext.define('App.view.kyjl.ArrangeTecjlzsWindow',{
		   extend:'Ext.window.Window',
//		  alias:'widget.arrangeTecWindow',
		  itemId:'arrangeTecWindowjlbjlzs',
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
					items:[Ext.create('App.view.kyjl.KKJHAddJLzsForm',{
							itemId:'kkjhAddJLzsForm'
						})
						]
				})
			   me.callParent(arguments);
			    var arrangeTecshzsForm = Ext.create('App.view.kyjl.ArrangeTecshzsForm',{
							baseCls: 'my-panel-no-border',
							itemId:'arrangeTecshzsForm'
							})
				var arrangeTecshjlzsForm = Ext.create('App.view.kyjl.ArrangeTecshjlzsForm',{
							baseCls: 'my-panel-no-border',
							itemId:'arrangeTecshjlzsForm'
							})
				var arrangeTecjbForm = Ext.create('App.view.kyjl.ArrangeTecjbForm',{
						baseCls: 'my-panel-no-border',
						itemId:'arrangeTecjbForm'
						})
				me.down('#arrangeTecshzsFormTab').add(arrangeTecshzsForm);
				me.down('#arrangeTecshjlzsFormTab').add(arrangeTecshjlzsForm);
				me.down('#arrangeTecjbFormTab').add(arrangeTecjbForm);
		  }
})