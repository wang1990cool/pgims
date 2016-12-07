Ext.define('App.view.kyzl.ArrangeTeczlzsWindow',{
		   extend:'Ext.window.Window',
//		  alias:'widget.arrangeTecWindow',
		  itemId:'arrangeTecWindowjlbzlzs',
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
					items:[Ext.create('App.view.kyzl.KKJHAddZLzsForm',{
							itemId:'kkjhAddZLzsForm'
						})
						]
				})
			   me.callParent(arguments);
			    var arrangeTecshzsForm = Ext.create('App.view.kyzl.ArrangeTecshzsForm',{
							baseCls: 'my-panel-no-border',
							itemId:'arrangeTecshzsForm'
							})
				var arrangeTecshzlzsForm = Ext.create('App.view.kyzl.ArrangeTecshzlzsForm',{
							baseCls: 'my-panel-no-border',
							itemId:'arrangeTecshzlzsForm'
							})
				var arrangeTecjbForm = Ext.create('App.view.kyzl.ArrangeTecjbForm',{
						baseCls: 'my-panel-no-border',
						itemId:'arrangeTecjbForm'
						})
				me.down('#arrangeTecshzsFormTab').add(arrangeTecshzsForm);
				me.down('#arrangeTecshzlzsFormTab').add(arrangeTecshzlzsForm);
				me.down('#arrangeTecjbFormTab').add(arrangeTecjbForm);
		  }
})