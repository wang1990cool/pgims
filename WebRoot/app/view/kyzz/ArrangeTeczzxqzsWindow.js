Ext.define('App.view.kyzz.ArrangeTeczzxqzsWindow',{
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
					items:[Ext.create('App.view.kyzz.KKJHAddxqzsForm',{
							itemId:'kkjhAddxqzsForm'
						})
						]
				})
			   me.callParent(arguments);
			    var arrangeTecshxqzsForm = Ext.create('App.view.kyzz.ArrangeTecshxqzsForm',{
							baseCls: 'my-panel-no-border',
							itemId:'arrangeTecshxqzsForm'
							})
				var arrangeTecshzzForm = Ext.create('App.view.kyzz.ArrangeTecshzzForm',{
							baseCls: 'my-panel-no-border',
							itemId:'arrangeTecshzzForm'
							})
				var arrangeTecjbForm = Ext.create('App.view.kyzz.ArrangeTecjbForm',{
						baseCls: 'my-panel-no-border',
						itemId:'arrangeTecjbForm'
						})
				me.down('#arrangeTecshxqzsFormTab').add(arrangeTecshxqzsForm);
				me.down('#arrangeTecshzzFormTab').add(arrangeTecshzzForm);
				me.down('#arrangeTecjbFormTab').add(arrangeTecjbForm);
		  }
})