Ext.define('App.view.kyzz.ArrangeTeczzxqWindow',{
		   extend:'Ext.window.Window',
//		  alias:'widget.arrangeTecWindow',
		  itemId:'arrangeTecWindowjlbbb',
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
					items:[Ext.create('App.view.kyzz.KKJHAddxqForm',{
							itemId:'kkjhAddxqForm'
						})
						]
				})
			   me.callParent(arguments);
			    var arrangeTecshxqForm = Ext.create('App.view.kyzz.ArrangeTecshxqForm',{
							baseCls: 'my-panel-no-border',
							itemId:'arrangeTecshxqForm'
							})
				var arrangeTecshzzForm = Ext.create('App.view.kyzz.ArrangeTecshzzForm',{
							baseCls: 'my-panel-no-border',
							itemId:'arrangeTecshzzForm'
							})
				var arrangeTecjbForm = Ext.create('App.view.kyzz.ArrangeTecjbForm',{
						baseCls: 'my-panel-no-border',
						itemId:'arrangeTecjbForm'
						})
				me.down('#arrangeTecshxqFormTab').add(arrangeTecshxqForm);
				me.down('#arrangeTecshzzFormTab').add(arrangeTecshzzForm);
				me.down('#arrangeTecjbFormTab').add(arrangeTecjbForm);
		  }
})