Ext.define('App.view.kylw.ArrangeTeckyzsWindow',{
		   extend:'Ext.window.Window',
//		  alias:'widget.arrangeTecWindow',
		  itemId:'arrangeTecWindowjlbzs',
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
					items:[Ext.create('App.view.kylw.KKJHAddzsForm',{
							itemId:'kkjhAddzsForm'
						})
						]
				})
			   me.callParent(arguments);
			    var arrangeTecshzsForm = Ext.create('App.view.kylw.ArrangeTecshzsForm',{
							baseCls: 'my-panel-no-border',
							itemId:'arrangeTecshzsForm'
							})
				var arrangeTecshkyzsForm = Ext.create('App.view.kylw.ArrangeTecshkyzsForm',{
							baseCls: 'my-panel-no-border',
							itemId:'arrangeTecshkyzsForm'
							})
				var arrangeTecjbForm = Ext.create('App.view.kylw.ArrangeTecjbForm',{
						baseCls: 'my-panel-no-border',
						itemId:'arrangeTecjbForm'
						})
				me.down('#arrangeTecshzsFormTab').add(arrangeTecshzsForm);
				me.down('#arrangeTecshkyzsFormTab').add(arrangeTecshkyzsForm);
				me.down('#arrangeTecjbFormTab').add(arrangeTecjbForm);
		  }
})