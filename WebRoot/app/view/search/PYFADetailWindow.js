Ext.define('App.view.search.PYFADetailWindow',{
		   extend:'Ext.window.Window',
		   alias:'widget.pyfaAllDetailWin',
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
	   		itemId:'pyfaAllDetailWin',
			title:'详情',
			iconCls:'detail_16',
			width: 765,
			height: 480,
			constrainHeader:true,
			layout:'fit',
			closeAction:'hide',
			resizable:false,
			shadow:true,
			modal:true,
			closable:true,
			animCollapse:true,
//			autoScroll:true,
			autoShow:true,
			bodyStyle:{
				background: '#fff'
			},

			initComponent:function(){
				var me = this;
				Ext.applyIf(me,{
					items:[Ext.create('App.view.search.PYFADetailForm',{
							itemId:'pyfaDetailForm'
						})]
				})
				me.callParent(arguments);
				
							    	
			    var pyfaForm = Ext.create('App.view.search.PYFADetail',{
							itemId:'pyfaDetail',
							baseCls: 'my-panel-no-border'
				})
				
				var pyfaAddFakcForm = Ext.create('App.view.search.PYFAAddFakcForm',{
							itemId:'pyfaAddFakcForm',
							baseCls:'my-panel-no-border'
					})
				
				var uploadPanel =Ext.create('App.view.attachData.UploadPanel',{
						itemId:'uploadPanel',
						baseCls:'my-panel-no-border'
				})
				
			 	   me.down('#pyfaDetailTab').add(pyfaForm);
			 	   me.down('#fakcListTab').add(pyfaAddFakcForm);
			       me.down('#attachDataTab').add(uploadPanel);
		  }
})