Ext.define('App.view.kyzl.ArrangeTeczlxqzsWindow',{
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
					items:[Ext.create('App.view.kyzl.KKJHAddZLxqzsForm',{
							itemId:'kkjhAddZLxqzsForm'
						})
						]
				})
			   me.callParent(arguments);
			    var arrangeTecshxqzsForm = Ext.create('App.view.kyzl.ArrangeTecshxqzsForm',{
							baseCls: 'my-panel-no-border',
							itemId:'arrangeTecshxqzsForm'
							})
				var arrangeTecshzlForm = Ext.create('App.view.kyzl.ArrangeTecshzlForm',{
							baseCls: 'my-panel-no-border',
							itemId:'arrangeTecshzlForm'
							})
				var arrangeTecjbForm = Ext.create('App.view.kyzl.ArrangeTecjbForm',{
						baseCls: 'my-panel-no-border',
						itemId:'arrangeTecjbForm'
						})
				me.down('#arrangeTecshxqzsFormTab').add(arrangeTecshxqzsForm);
				me.down('#arrangeTecshzlFormTab').add(arrangeTecshzlForm);
				me.down('#arrangeTecjbFormTab').add(arrangeTecjbForm);
		  }
})