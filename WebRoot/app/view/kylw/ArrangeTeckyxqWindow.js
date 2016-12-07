Ext.define('App.view.kylw.ArrangeTeckyxqWindow',{
		   extend:'Ext.window.Window',
//		  alias:'widget.arrangeTecWindow',
		  itemId:'arrangeTecWindowjlbb',
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
					items:[Ext.create('App.view.kylw.KKJHAddxqForm',{
							itemId:'kkjhAddxqForm'
						})
						]
				})
			   me.callParent(arguments);
			    var arrangeTecshxqForm = Ext.create('App.view.kylw.ArrangeTecshxqForm',{
							baseCls: 'my-panel-no-border',
							itemId:'arrangeTecshxqForm'
							})
				var arrangeTecshkyForm = Ext.create('App.view.kylw.ArrangeTecshkyForm',{
							baseCls: 'my-panel-no-border',
							itemId:'arrangeTecshkyForm'
							})
				var arrangeTecjbForm = Ext.create('App.view.kylw.ArrangeTecjbForm',{
						baseCls: 'my-panel-no-border',
						itemId:'arrangeTecjbForm'
						})
				me.down('#arrangeTecshxqFormTab').add(arrangeTecshxqForm);
				me.down('#arrangeTecshkyFormTab').add(arrangeTecshkyForm);
				me.down('#arrangeTecjbFormTab').add(arrangeTecjbForm);
		  }
})